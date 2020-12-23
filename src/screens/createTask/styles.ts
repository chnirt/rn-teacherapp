import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {flex: 1, paddingHorizontal: 32, paddingTop: 16},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeaderContainer: {},
  avatarContainer: {
    width: 42,
    height: 42,
    borderRadius: 42 / 10,

    borderColor: '#ffbd69',
    borderWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 10,

    borderColor: '#fff',
    borderWidth: 1,
  },
  badgeContainer: {
    position: 'absolute',
    backgroundColor: '#FF0040',
    top: -18 / 2,
    right: -18 / 2,
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  greetingText: {color: '#9e9ea7', fontSize: 16, fontWeight: 'normal'},
  greetingText1: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subjectsContainer: {
    marginTop: 65,
  },
  subjectsText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodySubjectsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subjectContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 0,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 15,
  },
  subjectText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
  },
  rowContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameInputText: {
    color: '#000',
  },
  boxContainer: {
    width: 40,
    height: 40,
    borderRadius: 15 / 2,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  valueText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'normal',
  },
  buttonContainer: {
    marginTop: 20,
  },
  addButton: {marginHorizontal: 0},
});
