import React from 'react';
import {Text} from 'react-native';
import {PRIMARY_COLOR} from '../../constants';
import {MyShadow} from '../MyShadow';

import {styles} from './styles';

export const MyButton = () => {
  return (
    <MyShadow style={styles.buttonContainer} color={PRIMARY_COLOR} size={10}>
      <Text style={styles.buttonText}>+ Add Task</Text>
    </MyShadow>
  );
};
