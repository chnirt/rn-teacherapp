import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImages(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOnScroll = () => navigation.setOptions({tabBarVisible: false});

  const handleOnScrollEndDrag = () =>
    navigation.setOptions({tabBarVisible: true});

  const handleOnMomentumScrollEnd = () =>
    navigation.setOptions({tabBarVisible: true});

  return (
    <View style={styles.container}>
      {/* <Text>Home</Text> */}
      <ScrollView
        scrollEventThrottle={16}
        onScroll={handleOnScroll}
        onScrollEndDrag={handleOnScrollEndDrag}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}>
        {images.length > 0 &&
          images?.map((image, index) => (
            <Image
              key={index}
              style={{width: windowWidth, height: 400}}
              source={{uri: image?.download_url}}
            />
          ))}
      </ScrollView>
    </View>
  );
};
