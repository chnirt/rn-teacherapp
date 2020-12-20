import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 20,
  },
  tabBarContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#212223',
    opacity: 0.9,
    borderRadius: 15,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabBarText: {
    color: '#DCDCDD',
  },
  tabBarFocusText: {
    color: '#673ab7',
  },
});
