import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
  Keyboard,
  Animated,
  TextInput,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {uuidv4} from '../../utils';
import {WinterHatSVG} from './svgs';

export const ClassScreen = () => {
  const [messages, setMessages] = useState([]);
  const [typingText, setTypingText] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const textInputRef = useRef();

  const _keyboardDidShow = (event) =>
    setKeyboardOffset(event.endCoordinates.height);

  const _keyboardDidHide = () => setKeyboardOffset(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  });

  useEffect(() => {
    setMessages([
      {
        id: uuidv4(),
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: 'Hi Em',
        createdAt: new Date(),
        user: {
          id: '1',
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: 'How r u???',
        createdAt: new Date(),
        user: {
          id: '1',
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = () => {
    if (!typingText) {
      textInputRef?.current?.focus();
      return;
    }
    const newMessage = {
      id: uuidv4(),
      text: typingText,
      createdAt: new Date(),
      user: {
        id: '2',
        name: 'Chin',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };
    setMessages((previousMessages) => [newMessage, ...previousMessages]);
    setTypingText('');
  };

  const renderItem = ({item, index, userID}) => {
    const isChatter = userID === item?.user?.id;
    const uri = item?.user?.avatar;
    const avatarSize = 30;
    const dotSize = avatarSize / 3;

    return (
      <View
        key={index}
        style={[
          {
            justifyContent: isChatter ? 'flex-end' : 'flex-start',
            paddingVertical: 10,
          },
        ]}>
        <View
          style={{
            flexDirection: isChatter ? 'row-reverse' : 'row',
            alignItems: 'center',
          }}>
          {!isChatter && (
            <View
              style={{
                width: avatarSize,
                height: avatarSize,
                marginRight: !isChatter ? 10 : 0,
              }}>
              <Image
                style={{
                  width: avatarSize,
                  height: avatarSize,
                  borderRadius: avatarSize / 2,
                }}
                source={{uri}}
              />
              <View
                style={{
                  position: 'absolute',
                  width: avatarSize,
                  height: avatarSize,
                  top: -avatarSize / 2,
                }}>
                <WinterHatSVG />
              </View>
              <View
                style={{
                  backgroundColor: '#FF0040',
                  width: dotSize,
                  height: dotSize,
                  borderRadius: dotSize / 2,
                  borderColor: '#fff',
                  borderWidth: 1,
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                }}
              />
            </View>
          )}
          <Text
            style={{
              marginRight: !isChatter ? 10 : 0,
              marginLeft: isChatter ? 10 : 0,
            }}>
            {item.text}
          </Text>
          <Text
            style={{
              marginRight: !isChatter ? 10 : 0,
              color: '#d3d3d3',
            }}>
            {new Date(item.createdAt).toLocaleTimeString()}
          </Text>
        </View>
      </View>
    );
  };

  const userID = '2';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          inverted
          data={messages}
          renderItem={({item}, index) => renderItem({item, index, userID})}
          keyExtractor={(item) => `${item?.id}`}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Animated.View
            style={{
              bottom: keyboardOffset,
            }}>
            <TextInput
              style={{flex: 1}}
              ref={textInputRef}
              value={typingText}
              onChangeText={setTypingText}
              placeholder="Typing text"
            />
          </Animated.View>

          <Pressable onPress={onSend}>
            <Text>Send</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
