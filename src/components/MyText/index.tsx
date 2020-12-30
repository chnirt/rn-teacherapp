import React, {FC} from 'react';
import {Text} from 'react-native';
import {IMyText} from './types';
import {styles} from './styles';

/**
 * Returns the divider.
 *
 * @remarks
 * This method is part of the {@link chnirt-ui#MyText | MyText subsystem}.
 *
 * @param {boolean} h1 - 'false'
 * @param {boolean} h2 - 'false'
 * @param {boolean} h3 - 'false'
 * @param {boolean} h4 - 'false'
 * @param {boolean} h5 - 'false'
 * @param {boolean} p - 'false'
 * @param {boolean} bold - 'false'
 * @param {boolean} italic - 'false'
 * @param {string} title - ''
 * @param {object} style - {}
 * @param {boolean} centered - 'false'
 *
 * @returns The MyText function component
 *
 * @beta
 */
export const MyText: FC<IMyText> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  italic,
  title,
  style,
  color,
  centered,
  ...rest
}) => {
  return (
    <Text
      style={[
        // styles.fontFamily,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        p && styles.p,
        bold && styles.bold,
        italic && styles.italic,
        centered && styles.centered,
        color ? {color} : null,
        style,
      ]}
      {...rest}>
      {title}
    </Text>
  );
};
