import {StyleSheet} from 'react-native';

import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 16,
  },
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
  greetingText1Container: {
    marginTop: 15,
  },
  greetingText1: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greetingText2Container: {
    marginTop: 15,
  },
  greetingText2: {
    color: PRIMARY_COLOR,
    fontSize: 24,
    fontWeight: 'bold',
  },
  courseContainer: {
    marginTop: 50,
  },
  courseTitleText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  courseSubTitleContainer: {
    marginTop: 15,
  },
  courseSubTitleText: {
    color: '#9e9ea7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseItem: {
    width: 135,
    minHeight: 120,
    marginRight: 20,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  courseContentText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  courseFlatList: {
    marginTop: 10,
  },
  scheduleContainer: {
    marginTop: 30,
  },
  scheduleTitleText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scheduleSubTitleContainer: {
    marginTop: 15,
  },
  scheduleSubTitleText: {
    color: '#9e9ea7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scheduleTaskFlatList: {
    marginTop: 10,
  },
  scheduleTaskItem: {
    width: 300,
    height: 150,
    marginRight: 20,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  headerScheduleTaskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scheduleTaskText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyScheduleTaskItem: {
    marginTop: 5,
  },
  descriptionScheduleTaskText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerScheduleTaskItem: {
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rowContainerAvatar: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderColor: '#fff',
    borderWidth: 1,
  },
  rowContainerText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
