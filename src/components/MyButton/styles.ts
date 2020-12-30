import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 15,
    minHeight: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
});
