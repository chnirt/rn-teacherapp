import React, {Fragment} from 'react';
import {Text, View} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';
import {MyShadow} from '../MyShadow';

import {styles} from './styles';

export const MyButton = ({
  title = '',
  onPress = () => {},
  style,
  color,
  bold,
  opacity = 0.5,
}) => {
  const formatBackgroundColor = color + opacity * 100;
  return (
    <MyShadow
      style={[
        styles.buttonContainer,
        color ? {backgroundColor: formatBackgroundColor} : null,
        style,
      ]}
      color={color}
      size={10}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          bold && styles.bold,
          color ? {color} : null,
        ]}>
        {title}
      </Text>
    </MyShadow>
  );
};
