import React from 'react';
import {Text} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';
import {MyShadow} from '../MyShadow';

import {styles} from './styles';

export const MyButton = ({title = '', onPress = () => {}, style}) => {
  return (
    <MyShadow
      style={[styles.buttonContainer, style]}
      color={PRIMARY_COLOR}
      size={10}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </MyShadow>
  );
};
