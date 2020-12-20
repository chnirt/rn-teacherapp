import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  tabBarContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#212223',
    opacity: 0.9,
    borderRadius: 15,

    shadowColor: PRIMARY_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
