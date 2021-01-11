import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {MyTextInput, MyButton, MyText} from '../../components';
import {PRIMARY_COLOR} from '../../constants';
import {FacebookSVG, GoogleSVG} from './svgs';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const navigation = useNavigation();

  const navigateHome = () => navigation.navigate('MyTabs');

  const navigateRegister = () => navigation.navigate('Register');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MyText title="Login" h2 bold centered />
          <View style={styles.form}>
            <View style={styles.formItem}>
              <MyTextInput
                value={email}
                onChangeText={setEmail}
                style={styles.text}
                placeholder="Email"
                placeholderTextColor="#d3d3d3"
              />
            </View>
            <View style={styles.formItem}>
              <MyTextInput
                value={pwd}
                onChangeText={setPwd}
                style={styles.text}
                placeholder="Password"
                placeholderTextColor="#d3d3d3"
                secureTextEntry
              />
            </View>
            <View style={styles.formItem}>
              <MyText title="Forgot password?" centered />
            </View>
            <View style={[styles.formItem, styles.socialButtons]}>
              <MyButton
                opacity={0.2}
                color={PRIMARY_COLOR}
                title="LOGIN"
                onPress={navigateHome}
                bold
              />
            </View>
            <View style={styles.formItem}>
              <MyText title="Sign in with" centered />
            </View>
            <View style={[styles.formItem, styles.socialButtons]}>
              <MyButton
                icon={<GoogleSVG />}
                opacity={0.2}
                style={styles.leftButton}
                color="#E68481"
                title="Google"
              />
              <MyButton
                icon={<FacebookSVG />}
                opacity={0.2}
                color="#3D579D"
                title="Facebook"
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <MyText title="Don't have an account?" centered />
          <TouchableOpacity
            style={styles.signUpContainer}
            onPress={navigateRegister}>
            <MyText title="SIGN UP" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
