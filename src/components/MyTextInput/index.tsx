import React, {useRef} from 'react';
import {View, TextInput, Pressable} from 'react-native';

import {styles} from './styles';

export const MyTextInput = ({
  value = '',
  onChangeText = () => {},
  icon,
  placeholder = '',
  placeholderTextColor = '',
  style,
}) => {
  const textInputRef = useRef();

  const handlePress = () => {
    textInputRef?.current?.focus();
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      {icon && <View style={styles.iconContainer}>{icon()}</View>}
      <TextInput
        ref={textInputRef}
        style={[styles.valueText, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </Pressable>
  );
};
