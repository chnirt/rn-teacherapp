import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CallSVG = ({color = '#000', ...rest}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...rest}>
      <Path
        fill={color}
        d="M20 22.621l-3.521-6.795a618.8 618.8 0 01-2.064 1.011c-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026L8.396 0 6.29 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"
      />
    </Svg>
  );
};

export const CameraSVG = ({color = '#000', ...rest}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...rest}>
      <Path
        fill={color}
        d="M16 18a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12zm8-14l-6 6.223v3.554L24 20V4z"
      />
    </Svg>
  );
};

export const InfoSVG = ({color = '#000', ...rest}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...rest}>
      <Path
        fill={color}
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25a1.25 1.25 0 010-2.5zM14 18h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735V18z"
      />
    </Svg>
  );
};

export const PlusSVG = ({color = '#000', ...rest}) => {
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
        d="M11.5 0C17.847 0 23 5.153 23 11.5S17.847 23 11.5 23 0 17.847 0 11.5 5.153 0 11.5 0zm0 1C17.295 1 22 5.705 22 11.5S17.295 22 11.5 22 1 17.295 1 11.5 5.705 1 11.5 1zm.5 10h6v1h-6v6h-1v-6H5v-1h6V5h1v6z"
      />
    </Svg>
  );
};

export const ImageSVG = ({color = '#000', ...rest}) => {
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
        d="M24 22H0V2h24v20zM23 3H1v18h22V3zm-1 16H3l4-7.492 3 3.048L15.013 7 22 19zm-11.848-2.865l-2.91-2.956L4.668 18h15.593l-5.303-9.108-4.806 7.243zM5.5 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5zm0 1a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 015.5 6z"
      />
    </Svg>
  );
};

export const VideoSVG = ({color = '#000', ...rest}) => {
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
        d="M24 23H0V2h24v21zM4 22v-4H1v4h3zm15 0V3H5v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zM4 17v-4H1v4h3zm5-1.2l5.941-3.3L9 9.2v6.6zM20 8v4h3V8h-3zM4 12V8H1v4h3zm16-9v4h3V3h-3zM4 7V3H1v4h3z"
      />
    </Svg>
  );
};

export const FileSVG = ({color = '#000', ...rest}) => {
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
        d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z"
      />
    </Svg>
  );
};
