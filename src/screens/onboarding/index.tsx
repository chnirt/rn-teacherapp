import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {uuidv4} from '../../utils';
import {ArrowSVG} from './svgs';

const DATA = [
  {
    id: uuidv4(),
    title: 'What is Lorem Ipsum?',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    uri:
      'https://images.pexels.com/photos/3022415/pexels-photo-3022415.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    id: uuidv4(),
    title: 'What is Lorem Ipsum?',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    uri:
      'https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: uuidv4(),
    title: 'What is Lorem Ipsum?',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    uri:
      'https://images.pexels.com/photos/2953902/pexels-photo-2953902.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  },
  {
    id: uuidv4(),
    title: 'What is Lorem Ipsum?',
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    uri:
      'https://images.pexels.com/photos/1699030/pexels-photo-1699030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

export const OnBoardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0.01)).current;
  const flatListRef = useRef();
  const [index, setIndex] = useState(0);

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const navigation = useNavigation();

  const handleSkip = () => navigation.navigate('Login');

  const handleNext = () => {
    if (index === DATA?.length - 1) {
      handleSkip();
      return;
    }
    const newIndex = index < DATA?.length - 1 ? index + 1 : 0;
    flatListRef?.current?.scrollToIndex({
      index: newIndex,
    });
    setIndex(newIndex);
  };

  const handleOnMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const getIndex = event.nativeEvent.contentOffset.x / windowWidth;
    setIndex(Math.round(getIndex));
  };

  const renderPage = ({item, index}) => {
    return (
      <ImageBackground
        key={index}
        style={[
          styles.pageContainer,
          {
            width: windowWidth,
            height: windowHeight,
          },
        ]}
        source={{uri: item?.uri}}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <Text style={styles.titleText}>{item?.title}</Text>
        <Text style={styles.subTitleText} numberOfLines={3}>
          {item?.subTitle}
        </Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <FlatList
        data={DATA}
        renderItem={renderPage}
        keyExtractor={(item) => `${item?.id}`}
        horizontal
        snapToInterval={windowWidth}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        ref={flatListRef}
        getItemLayout={(data, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
      />
      <View style={styles.headerContainer}>
        <View style={styles.bulletContainer}>
          {DATA?.map((_, i) => {
            const opacity = scrollX.interpolate({
              inputRange: [
                (i - 1) * windowWidth,
                i * windowWidth,
                (i + 1) * windowWidth,
              ],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const scale = scrollX.interpolate({
              inputRange: [
                (i - 1) * windowWidth,
                i * windowWidth,
                (i + 1) * windowWidth,
              ],
              outputRange: [6, 6 * 4, 6],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={[
                  styles.bullet,
                  {
                    width: scale,
                    opacity,
                  },
                ]}
              />
            );
          })}
        </View>
        <Pressable style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Pressable style={styles.nextButton} onPress={handleNext}>
          <ArrowSVG color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};
