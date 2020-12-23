import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../constants';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {flex: 1, paddingHorizontal: 32, paddingTop: 16},
  headerContainer: {flexDirection: 'row'},
  leftHeaderContainer: {flex: 1, justifyContent: 'space-between'},
  dateTodayText: {color: '#9e9ea7', fontSize: 16, fontWeight: 'normal'},
  todayContainer: {
    marginTop: 10,
  },
  todayText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rightHeaderContainer: {flex: 1},
  weeklyContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnContainer: {
    alignItems: 'center',
    padding: 5,
  },
  columnContainerWithSelected: {
    borderBottomColor: PRIMARY_COLOR,
    borderBottomWidth: 3,
  },
  dayText: {
    color: '#9e9ea7',
    fontSize: 16,
    fontWeight: 'normal',
  },
  dateContainer: {
    marginTop: 10,
  },
  dateText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textWithSelected: {
    color: PRIMARY_COLOR,
  },
  tasksFlatList: {marginTop: 30},
  taskItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumnContainer: {
    flex: 4,
  },
  startTimeText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  endTimeContainer: {
    marginTop: 10,
  },
  endTimeText: {
    color: '#9e9ea7',
    fontSize: 16,
    fontWeight: 'normal',
  },
  dividerContainer: {
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
  },
  divider: {
    flex: 1,
    borderRightColor: PRIMARY_COLOR,
    borderRightWidth: 2,
  },
  rightColumnContainer: {
    flex: 15,
  },
  dateTaskItem: {
    borderRadius: 15,
    marginTop: 0,
    marginRight: 0,
    padding: 20,
  },
  headerDateTaskItem: {flexDirection: 'row', justifyContent: 'space-between'},
  dateTaskText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyDateTaskItem: {
    marginTop: 5,
  },
  descriptionDateTaskText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerDateTaskItem: {
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
