import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {MyText, MyTextInput, MyButton} from '../../components';
import {PRIMARY_COLOR} from '../../constants';

export const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const navigateLogin = () => {};

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MyText title="Register" h2 bold centered />
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

            <View style={[styles.formItem, styles.socialButtons]}>
              <MyButton
                opacity={0.2}
                color={PRIMARY_COLOR}
                title="Register"
                onPress={navigateLogin}
                bold
              />
            </View>
            <View style={styles.formItem}>
              <MyText title="Login" centered />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
