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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  timeItem: {
    flex: 5,
    alignItems: 'stretch',
    marginBottom: 20,
    // backgroundColor: 'green',
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
  dividerItem: {
    flex: 1,
    borderRightColor: PRIMARY_COLOR,
    borderRightWidth: 2,
    height: 100,
    marginHorizontal: 5,
  },
  dateTaskItem: {
    flex: 15,
    borderRadius: 15,
    marginTop: 0,
    marginRight: 0,
    padding: 20,
  },
});
