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

const numberOfLines = 1;

const messages = [
  {
    id: uuidv4(),
    message: 'Hello',
    type: '',
  },
  {
    id: uuidv4(),
    message: 'Hello',
  },
  {
    id: uuidv4(),
    message: 'Hello',
  },
  {
    id: uuidv4(),
    message: 'Hello',
  },
  {
    id: uuidv4(),
    message: 'Hello',
  },
];

export const ChatScreen = () => {
  const paddingInput = useRef(new Animated.Value(0)).current;
  const textInputRef = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState('');

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
    setText('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.select({ios: -100, android: -1000})}>
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

            <FlatList inverted data={messages} />

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
                    value={text}
                    onChangeText={setText}
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
      </Pressable>
    </SafeAreaView>
  );
};
