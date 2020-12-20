import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 0,
    marginRight: 0,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
  },
});
