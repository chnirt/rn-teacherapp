import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowSVG = ({color = '#000', ...rest}) => {
  return (
    <Svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24">
      <Path fill={color} d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z" />
    </Svg>
  );
};
