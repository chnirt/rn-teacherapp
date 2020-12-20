import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

export const SampleScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Sample</Text>
      </View>
    </SafeAreaView>
  );
};
