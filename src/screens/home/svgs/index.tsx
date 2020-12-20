import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const MenuSVG = ({color = '#000', ...rest}) => {
  return (
    <Svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...rest}>
      <Path
        fill={color}
        d="M16 12a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0117 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0110 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 013 12z"
      />
    </Svg>
  );
};

export const ClockSVG = ({
  color = '#000s',
  width = 24,
  height = 24,
  ...rest
}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...rest}>
      <Path
        fill={color}
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111a1.3 1.3 0 01-1.301-1.301c0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"
      />
    </Svg>
  );
};
