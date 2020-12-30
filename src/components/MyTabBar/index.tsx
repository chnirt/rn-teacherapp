import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRecoilState} from 'recoil';

import {styles} from './styles';
import {PRIMARY_COLOR} from '../../constants';
import {HomeSVG, TasksSVG, ClassRoomSVG, ChatSVG} from './svgs';
import {tabBarVisibleState} from '../../atoms';

const TAB_BAR_OFFSET = 130;

export const MyTabBar = ({state, descriptors, navigation}) => {
  const [tabBarVisible, setTabBarVisible] = useRecoilState(tabBarVisibleState);

  const translateYAmin = useRef(new Animated.Value(0)).current;
  const fadeAmin = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  // const focusedOptions = descriptors[state.routes[state.index].key].options;

  // const tabBarVisible =
  //   focusedOptions?.tabBarVisible === 'undefined'
  //     ? true
  //     : focusedOptions?.tabBarVisible === false
  //     ? false
  //     : true;

  useEffect(() => {
    if (tabBarVisible) {
      Animated.parallel([
        Animated.timing(translateYAmin, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAmin, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();

      return;
    }

    Animated.parallel([
      Animated.timing(translateYAmin, {
        toValue: -TAB_BAR_OFFSET,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAmin, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [translateYAmin, fadeAmin, tabBarVisible]);

  // if (focusedOptions.tabBarVisible === false) {
  //   return null;
  // }

  return (
    <Animated.View
      style={[
        styles.container,
        {bottom: translateYAmin, opacity: fadeAmin},
        {paddingBottom: Math.max(insets.bottom, 16)},
      ]}>
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            // navigation.setOptions({tabBarVisible: true});
            setTabBarVisible(true);

            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const color = isFocused ? PRIMARY_COLOR : '#DCDCDD';

          const renderTabIcon = (index) => {
            switch (index) {
              case 0:
                return <HomeSVG color={color} />;
              case 1:
                return <TasksSVG color={color} />;
              case 2:
                return <ClassRoomSVG color={color} />;
              case 3:
                return <ChatSVG color={color} />;
              default:
                return null;
            }
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={{selected: isFocused}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItem}>
              {renderTabIcon(index)}
              {/* <Text style={[styles.tabBarText, {color}]}>{label}</Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};
