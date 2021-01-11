import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {flex: 1, paddingHorizontal: 32, paddingTop: 16},
  header: {},
  text: {
    backgroundColor: '#fff',

    shadowColor: PRIMARY_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  form: {
    marginTop: 50,
  },
  formItem: {marginBottom: 50 / 2},
});
