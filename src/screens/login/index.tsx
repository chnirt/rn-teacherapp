import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

export const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateHome = () => navigation.navigate('MyTabs');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Login</Text>
        <Pressable onPress={navigateHome}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
