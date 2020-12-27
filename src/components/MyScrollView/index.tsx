import React, {useEffect, useState} from 'react';
import {Image, ScrollView, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSetRecoilState} from 'recoil';

import {styles} from './styles';
import {tabBarVisibleState} from '../../atoms';

export const MyScrollView = ({children}) => {
  // const navigation = useNavigation();
  const setTabBarVisible = useSetRecoilState(tabBarVisibleState);

  // const windowWidth = useWindowDimensions().width;

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch('https://picsum.photos/v2/list')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const handleOnScroll = () => setTabBarVisible(false);

  const handleOnStopScroll = () => setTabBarVisible(true);

  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={handleOnScroll}
      onScrollEndDrag={handleOnStopScroll}
      onMomentumScrollEnd={handleOnStopScroll}>
      {/* {images.length > 0 &&
        images?.map((image, index) => (
          <Image
            key={index}
            style={{width: windowWidth, height: windowWidth}}
            source={{uri: image?.download_url}}
          />
        ))} */}
      {children}
    </ScrollView>
  );
};
