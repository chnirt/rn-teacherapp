/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';

import {
  HomeScreen,
  TasksScreen,
  CreateTaskScreen,
  ChatScreen,
  OnBoardingScreen,
  LoginScreen,
  RegisterScreen,
  ClassScreen,
} from './src/screens';
import {MyTabBar} from './src/components';
import { AxiosProvider } from './src/services';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TasksStack = createStackNavigator();

const TasksStackScreen = () => {
  return (
    <TasksStack.Navigator headerMode="none">
      <TasksStack.Screen name="Tasks" component={TasksScreen} />
      <TasksStack.Screen name="CreateTask" component={CreateTaskScreen} />
    </TasksStack.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Classroom"
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{
          unmountOnBlur: true,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
        }}
        name="Tasks"
        component={TasksStackScreen}
      />
      <Tab.Screen name="Classroom" component={ClassScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <AxiosProvider>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="MyTabs" component={MyTabs} />
            </Stack.Navigator>
          </NavigationContainer>
        </AxiosProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
};

export default App;
