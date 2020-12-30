import React, {useEffect, useRef, useState, Fragment} from 'react';
import {
  Text,
  View,
  TextInput,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {
  CallSVG,
  CameraSVG,
  InfoSVG,
  PlusSVG,
  ImageSVG,
  VideoSVG,
  FileSVG,
} from './svgs';
import {PRIMARY_COLOR} from '../../constants';
import {uuidv4} from '../../utils';
import {WinterHatSVG} from './svgs';

const numberOfLines = 1;

export const ChatScreen = () => {
  const paddingInput = useRef(new Animated.Value(0)).current;
  const textInputRef = useRef(new Animated.Value(0)).current;
  const [typingText, setTypingText] = useState('');
  const [messages, setMessages] = useState([]);

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
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        id: uuidv4(),
        text: "I'm fineeeee",
        createdAt: new Date(),
        user: {
          id: '2',
          name: 'Chin',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const keyboardWillShow = (event) => {
    Animated.timing(paddingInput, {
      duration: event.duration,
      toValue: 60,
      useNativeDriver: false,
    }).start();
  };

  const keyboardWillHide = (event) => {
    Animated.timing(paddingInput, {
      duration: event.duration,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );
    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  const clickTextInput = () => textInputRef?.current?.focus();

  const searchSubmit = () => {
    onSend();
    setTypingText('');
  };

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
      {/* <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}> */}
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.select({ios: -150, android: -150})}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
              <Text style={styles.discussText}>Discussion</Text>
              <View style={styles.subjectContainer}>
                <Text style={styles.subjectText}>Physics</Text>
              </View>
            </View>
            <View style={styles.rightHeaderContainer}>
              <View style={styles.iconContainer}>
                <CallSVG color={PRIMARY_COLOR} />
              </View>
              <View style={styles.iconContainer}>
                <CameraSVG color={PRIMARY_COLOR} />
              </View>
              <InfoSVG color={PRIMARY_COLOR} />
            </View>
          </View>

          <FlatList
            inverted
            style={styles.flatListView}
            data={messages}
            renderItem={({item}, index) => renderItem({item, index, userID})}
            keyExtractor={(item) => `${item?.id}`}
          />

          <Animated.View
            style={[styles.inputContainer, {marginBottom: paddingInput}]}>
            <Pressable
              style={styles.textInputContainer}
              onPress={clickTextInput}>
              <Fragment>
                <View style={styles.plusIconContainer}>
                  <PlusSVG color={PRIMARY_COLOR} />
                </View>
                <TextInput
                  // ref={textInputRef}
                  style={[styles.textInput, {height: numberOfLines * 20}]}
                  value={typingText}
                  onChangeText={setTypingText}
                  placeholder="Type something"
                  placeholderTextColor="#898989"
                  // multiline={true}
                  numberOfLines={Platform.OS === 'ios' ? null : numberOfLines}
                  minHeight={
                    Platform.OS === 'ios' && numberOfLines
                      ? 20 * numberOfLines
                      : null
                  }
                  onSubmitEditing={searchSubmit}
                  clearButtonMode="while-editing"
                />
              </Fragment>
            </Pressable>

            <View style={styles.actionsContainer}>
              <ImageSVG color={PRIMARY_COLOR} />
              <VideoSVG color={PRIMARY_COLOR} />
              <FileSVG color={PRIMARY_COLOR} />
            </View>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};
