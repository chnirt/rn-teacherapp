import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {MyText} from '../../components/MyText';
import {MyTextInput, MyButton} from '../../components';
import {PRIMARY_COLOR} from '../../constants';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const navigation = useNavigation();

  const navigateHome = () => navigation.navigate('MyTabs');

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
                style={styles.emailText}
                placeholder="Email"
                placeholderTextColor="#d3d3d3"
              />
            </View>
            <View style={styles.formItem}>
              <MyTextInput
                value={pwd}
                onChangeText={setPwd}
                style={styles.emailText}
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
                style={styles.leftButton}
                color="#E68481"
                title="Google"
              />
              <MyButton color="#3D579D" title="Facebook" />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <MyText title="Don't have an account? SIGN UP" centered />
        </View>
      </View>
    </SafeAreaView>
  );
};
