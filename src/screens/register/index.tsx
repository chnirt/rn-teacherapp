import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {MyText, MyTextInput, MyButton} from '../../components';
import {PRIMARY_COLOR} from '../../constants';
import {errorCodeState} from '../../atoms';
import {useRecoilState} from 'recoil';
import { postSignUp } from '../../services';

export const RegisterScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorCode, setErrorCode] = useRecoilState(errorCodeState);

  const navigateLogin = () => {
    navigation.pop()
  };

  const handleRegister = () => {
    postSignUp({
      phone_number: phone,
      name: name,
      email: email,
      password: pwd
    })
  }

  useEffect(() => {
    return () => {
      setErrorCode(0)
    }
  }, [])

  useEffect(() => {
    console.log(errorCode) 
   }, [errorCode])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MyText title="Register" h2 bold centered />
          <View style={styles.form}>
          <View style={styles.formItem}>
              <MyTextInput
                value={name}
                onChangeText={setName}
                style={styles.text}
                placeholder="Name"
                placeholderTextColor="#d3d3d3"
              />
            </View>
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
              <MyTextInput
                value={phone}
                onChangeText={setPhone}
                style={styles.text}
                placeholder="Phone"
                placeholderTextColor="#d3d3d3"
                secureTextEntry
              />
            </View>
            <View style={[styles.formItem, styles.socialButtons]}>
              <MyButton
                opacity={0.2}
                color={PRIMARY_COLOR}
                title="Register"
                onPress={handleRegister}
                bold
              />
            </View>
            <TouchableOpacity style={styles.formItem} onPress={navigateLogin}>
              <MyText title="Login" centered />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
