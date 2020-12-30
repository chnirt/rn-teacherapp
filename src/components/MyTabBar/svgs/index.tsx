import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeSVG = ({color = '#DCDCDD', ...rest}) => {
  return (
    <Svg
      {...rest}
      height={24}
      width={24}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color}
        d="M426 495.983H86c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46z"
      />
      <Path
        fill={color}
        d="M496 263.958a15.945 15.945 0 01-11.313-4.687L285.698 60.284c-16.375-16.376-43.02-16.376-59.396 0L27.314 259.272c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627L203.675 37.656c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627A15.943 15.943 0 01496 263.958zM320 495.983H192c-8.837 0-16-7.164-16-16v-142c0-27.57 22.43-50 50-50h60c27.57 0 50 22.43 50 50v142c0 8.836-7.163 16-16 16zm-112-32h96v-126c0-9.925-8.075-18-18-18h-60c-9.925 0-18 8.075-18 18z"
      />
    </Svg>
  );
};

export const TasksSVG = ({color = '#DCDCDD', ...rest}) => {
  return (
    <Svg
      {...rest}
      height={24}
      width={24}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color}
        d="M464 0H88C57.122 0 32 25.122 32 56v400c0 30.878 25.122 56 56 56h376c8.836 0 16-7.164 16-16V16c0-8.836-7.164-16-16-16zm-16 400H128V32h320zM64 56c0-13.233 10.767-24 24-24h8v368c-8.825 0-19.144-.733-32 5.375zm384 424H88c-13.233 0-24-10.767-24-24 0-13.254 10.745-24 24-24h360z"
      />
      <Path
        fill={color}
        d="M314.94 271.179c8.382 2.797 17.444-1.735 20.238-10.119l4.353-13.06h40.936l4.353 13.06c2.794 8.384 11.855 12.914 20.238 10.119 8.383-2.794 12.914-11.855 10.119-20.238l-29.47-88.411c-8.212-24.638-43.2-24.653-51.417 0l-29.47 88.411c-2.793 8.382 1.737 17.444 10.12 20.238zM369.801 216h-19.602L360 186.597zM176 120h1.448c3.418 18.818 12.538 34.706 23.174 47.521-6.954 4.625-13.244 8.288-17.103 10.336-7.811 4.132-10.793 13.813-6.662 21.625 4.131 7.81 13.811 10.795 21.625 6.662 2.306-1.22 13.176-7.099 25.693-15.93 12.857 10.082 23.545 15.536 24.67 16.098 7.922 3.96 17.484.719 21.432-7.13 3.964-7.881.784-17.492-7.087-21.475-.178-.09-5.998-3.092-13.793-8.634 5.235-5.406 9.876-11.176 13.28-17.163 4.368-7.681 1.683-17.449-5.999-21.817-7.681-4.367-17.448-1.683-21.817 5.999-2.161 3.799-5.364 7.688-9.155 11.503-6.616-7.868-12.358-17.125-15.397-27.594H272c8.836 0 16-7.164 16-16s-7.164-16-16-16h-32v-8c0-8.836-7.164-16-16-16s-16 7.164-16 16v8h-32c-8.836 0-16 7.164-16 16S167.164 120 176 120z"
      />
    </Svg>
  );
};

export const ClassRoomSVG = ({color = '#DCDCDD', ...rest}) => {
  return (
    <Svg
      {...rest}
      width={24}
      height={24}
      viewBox="0 0 512.004 512.004"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color}
        d="M496.002 304h-16V16c0-8.836-7.163-16-16-16h-416c-8.837 0-16 7.164-16 16v288h-16c-8.837 0-16 7.164-16 16v64c0 8.836 7.163 16 16 16H74.79l-26.173 91.604c-2.913 10.198 4.743 20.399 15.393 20.399 6.963 0 13.369-4.581 15.377-11.608L87.5 472h337.004l8.113 28.396c2.43 8.5 11.289 13.416 19.78 10.989 8.497-2.427 13.416-11.283 10.989-19.78L437.214 400h58.788c8.837 0 16-7.164 16-16v-64c0-8.836-7.163-16-16-16zm-432-272h384v272h-32v-16c0-26.467-21.532-48-48-48h-48c-26.468 0-48 21.533-48 48v16h-208zm320 272h-80v-16c0-8.822 7.178-16 16-16h48c8.822 0 16 7.178 16 16zm31.36 136H96.643l11.429-40h295.861zm64.64-72h-448v-32h448z"
      />
      <Path
        fill={color}
        d="M304.002 160c0-33.101-32.872-56.287-64-45.248V72c0-8.836-7.163-16-16-16s-16 7.164-16 16v120c0 14.265 17.314 21.321 27.318 11.309 31.682 15.191 68.682-8.025 68.682-43.309zm-48-16c8.822 0 16 7.178 16 16s-7.178 16-16 16-16-7.178-16-16 7.178-16 16-16zM156.684 116.691C125.002 101.5 88.002 124.716 88.002 160c0 35.292 37.011 58.495 68.682 43.309 10.003 10.011 27.318 2.956 27.318-11.309v-64c0-14.265-17.314-21.321-27.318-11.309zM136.002 176c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16zM409.943 193.941c6.249-6.249 6.248-16.379 0-22.627s-16.379-6.248-22.627 0c-9.99 9.988-27.313 2.982-27.313-11.314 0-14.328 17.339-21.287 27.313-11.314 6.248 6.249 16.379 6.249 22.627 0s6.249-16.379 0-22.627c-29.96-29.961-81.94-8.958-81.94 33.941-.001 42.976 52.017 63.865 81.94 33.941z"
      />
    </Svg>
  );
};

export const ChatSVG = ({color = '#DCDCDD', ...rest}) => {
  return (
    <Svg
      {...rest}
      width={24}
      height={24}
      viewBox="0 0 384 384"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill={color}
        d="M207.977 0c-97.047 0-176 78.953-176 176 0 26.96 6.246 53.52 18.015 77.406L1.382 361.441c-.07.153-.085.313-.152.461a16.864 16.864 0 00-.542 1.625c-.137.473-.29.946-.383 1.418-.106.512-.137 1.024-.192 1.543-.05.52-.113 1.032-.113 1.543 0 .504.063 1.008.113 1.52.055.527.094 1.058.2 1.57.093.473.246.934.382 1.406.16.551.328 1.098.543 1.625.067.153.09.32.16.473.082.176.227.305.305.473a16.171 16.171 0 002.016 3.109c.129.152.226.32.351.465.89.992 1.922 1.848 3.067 2.61.289.19.59.343.894.511.457.262.88.566 1.375.793.465.207.946.3 1.41.46.391.138.77.282 1.168.388 1.32.343 2.657.566 3.977.566h.016c1.328 0 2.664-.223 3.984-.574.422-.113.816-.266 1.23-.41.465-.16.938-.254 1.403-.465l107.504-48.871C154.199 345.656 180.93 352 207.977 352c97.046 0 176-78.953 176-176s-78.954-176-176-176zm0 320c-24.375 0-48.465-6.238-69.657-18.055-.328-.183-.68-.28-1.015-.441-.512-.238-1.016-.488-1.543-.672-.516-.176-1.035-.297-1.555-.418-.48-.11-.95-.23-1.445-.3-.547-.083-1.09-.098-1.633-.114-.496-.016-.977-.04-1.473-.016-.543.032-1.07.121-1.61.2-.487.082-.976.144-1.46.273-.57.145-1.113.352-1.664.559-.336.129-.684.191-1.012.343L47.97 335.88l34.36-76.36c.144-.32.206-.648.327-.976.2-.543.406-1.078.551-1.648.129-.504.207-1.016.281-1.528.078-.504.16-1.008.184-1.52.031-.534.008-1.054-.016-1.581-.023-.504-.039-1.008-.113-1.512-.07-.54-.2-1.059-.328-1.578-.117-.48-.223-.953-.39-1.422-.2-.57-.458-1.113-.712-1.656-.144-.297-.226-.61-.386-.907-11.606-20.945-17.75-44.87-17.75-69.191 0-79.398 64.597-144 144-144 79.398 0 144 64.602 144 144s-64.602 144-144 144zm0 0"
      />
      <Path
        fill={color}
        d="M279.977 128h-136c-8.832 0-16 7.168-16 16s7.168 16 16 16h136c8.832 0 16-7.168 16-16s-7.168-16-16-16zm0 0M247.977 192h-72c-8.832 0-16 7.168-16 16s7.168 16 16 16h72c8.832 0 16-7.168 16-16s-7.168-16-16-16zm0 0"
      />
    </Svg>
  );
};
