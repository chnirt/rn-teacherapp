import React from 'react';
import {Pressable} from 'react-native';

import {styles} from './styles';

export const MyShadow = ({
  style,
  color = '#000',
  backgroundColor = '#fff',
  size = 1,
  onPress = () => {},
  children,
}) => {
  return (
    <Pressable
      style={[
        styles.box,
        styles.depth10,
        {shadowColor: color, backgroundColor},
        size === 1 ? styles.depth1 : null,
        size === 2 ? styles.depth2 : null,
        size === 3 ? styles.depth3 : null,
        size === 4 ? styles.depth4 : null,
        size === 5 ? styles.depth5 : null,
        size === 6 ? styles.depth6 : null,
        size === 7 ? styles.depth7 : null,
        size === 8 ? styles.depth8 : null,
        size === 9 ? styles.depth9 : null,
        size === 10 ? styles.depth10 : null,
        style,
      ]}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};
