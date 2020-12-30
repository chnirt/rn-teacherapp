import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 15,
    paddingHorizontal: 15,
    minHeight: 50,
  },
  iconContainer: {
    marginRight: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  left: {
    textAlign: 'left',
  },
});
