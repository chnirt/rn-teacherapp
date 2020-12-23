import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CheckSVG = ({
  color = '#000',
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
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858L10.75 17l7.5-7.643L16.393 7.5z"
      />
    </Svg>
  );
};

export const NameSVG = ({color = '#000', width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...rest}>
      <Path
        fill={color}
        d="M22 4H2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zm0 13.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5V11h20v6.5zM22 8H2V6.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5V8zm-9 6H4v-1h9v1zm-3 2H4v-1h6v1zm10-2h-3v-1h3v1z"
      />
    </Svg>
  );
};

export const NoteSVG = ({color = '#000', width = 24, height = 24, ...rest}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...rest}>
      <Path
        fill={color}
        d="M4 22V2h16v11.543C20 17.65 14 16 14 16s1.518 6-2.638 6H4zm18-7.614V0H2v24h10.189C15.352 24 22 16.777 22 14.386zM17 13H7v-1h10v1zm0-4H7v1h10V9zm0-3H7v1h10V6z"
      />
    </Svg>
  );
};

export const CalendarSVG = ({
  color = '#000',
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
        d="M24 2v22H0V2h3v1c0 1.103.897 2 2 2s2-.897 2-2V2h10v1c0 1.103.897 2 2 2s2-.897 2-2V2h3zm-2 6H2v14h20V8zm-2-7a1 1 0 10-2 0v2a1 1 0 102 0V1zM6 3a1 1 0 11-2 0V1a1 1 0 112 0v2zm6.687 13.482c0-.802-.418-1.429-1.109-1.695.528-.264.836-.807.836-1.503 0-1.346-1.312-2.149-2.581-2.149-1.477 0-2.591.925-2.659 2.763h1.645c-.014-.761.271-1.315 1.025-1.315.449 0 .933.272.933.869 0 .754-.816.862-1.567.797v1.28c1.067 0 1.704.067 1.704.985 0 .724-.548 1.048-1.091 1.048-.822 0-1.159-.614-1.188-1.452H7.001C6.969 18.002 8.115 19 9.843 19c1.543 0 2.844-.943 2.844-2.518zM17 19v-7.718h-1.392c-.173 1.154-.995 1.491-2.171 1.459v1.346h1.852V19H17z"
      />
    </Svg>
  );
};

export const ClockSVG = ({
  color = '#000',
  width = 24,
  height = 24,
  ...rest
}) => {
  return (
    <Svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...rest}>
      <Path
        fill={color}
        d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11S1 18.071 1 12 5.929 1 12 1zm0 11h6v1h-7V4h1v8z"
      />
    </Svg>
  );
};
