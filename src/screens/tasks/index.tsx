import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSetRecoilState, useRecoilState} from 'recoil';

import {styles} from './styles';
import {MyButton, MyShadow} from '../../components';
import {firstLastDayOfWeek, datesFromFirst2Last, uuidv4, convertDDMM} from '../../utils';
import {WEEKDAY} from '../../constants';
import {MenuSVG, ClockSVG} from './svgs';
import {tabBarVisibleState, taskListState} from '../../atoms';
import { getTaskList } from '../../services';

const DATA2 = [
  {
    id: uuidv4(),
    title: 'English',
    subTitle: 'Chapter6: Force',
    createdAt: '19:30',
    createdBy: {
      name: 'Hilda Floyd',
      url:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    color: '#49b583',
  },
  {
    id: uuidv4(),
    title: 'Art',
    subTitle: 'Chapter5: Force',
    createdAt: '13:15',
    createdBy: {
      name: 'Lillian Howell',
      url:
        'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    color: '#ff4171',
  },
  {
    id: uuidv4(),
    title: 'Music',
    subTitle: 'Chapter4: Force',
    createdAt: '12:45',
    createdBy: {
      name: 'Lisa Hicks',
      url:
        'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    color: '#ffbd69',
  },
  {
    id: uuidv4(),
    title: 'Physics',
    subTitle: 'Chapter3: Force',
    createdAt: '09:30',
    createdBy: {
      name: 'Elena Walker',
      url:
        'https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    color: '#7f86ff',
  },
].reverse();

const now = new Date();

export const TasksScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const windowWidth = useWindowDimensions().width;
  const bottomTabHeight = (windowWidth - 32) / 4 + 32 + 120;
  const setTabBarVisible = useSetRecoilState(tabBarVisibleState);
  const [taskList, setTaskList] = useRecoilState(taskListState)

  const [selectedDay, setSelectedDay] = useState(now);
  const {firstDay, lastDay} = firstLastDayOfWeek({
    weekStart: 'Monday',
    defaultDate: selectedDay,
  });
  const dates = datesFromFirst2Last(firstDay, lastDay);

  const handleSelectDate = (date: Date) => {
    setSelectedDay(date);
  };

  const fetchClassList = async() => {
    const data = await getTaskList(1);
    data && setTaskList(data)
  }

  useEffect(() => {
    fetchClassList()
  }, [])

  useEffect(() => {
    console.log(taskList)
  }, [taskList])

  const handleOnScroll = () => setTabBarVisible(false);

  const handleOnStopScroll = () => setTabBarVisible(true);

  const navigateCreateTask = () => navigation.navigate('CreateTask');

  const renderTaskItem = ({item}) => {
    console.log(item.note)
    return(
      <View style={styles.taskItem}>
        <View style={styles.leftColumnContainer}>
          <Text style={styles.startTimeText}>{convertDDMM(item?.created_at)}</Text>
          <View style={styles.endTimeContainer}>
            <Text style={styles.endTimeText}>{convertDDMM(item?.created_at)}</Text>
          </View>
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.dot} />
          <View style={styles.divider} />
        </View>
        <View style={styles.rightColumnContainer}>
          <MyShadow
            style={styles.dateTaskItem}
            size={10}
            color={'#7f86ff'}
            backgroundColor={'#7f86ff'}>
            <View style={styles.headerDateTaskItem}>
              <Text style={styles.dateTaskText}>Title</Text>
              <MenuSVG color="#fff" />
            </View>
            <View style={styles.bodyDateTaskItem}>
              <Text style={styles.descriptionDateTaskText}>{item?.note}</Text>
            </View>
            <View style={styles.footerDateTaskItem}>
              <View style={styles.rowContainer}>
                <ClockSVG width={15} height={15} color="#fff" />
                <Text style={styles.rowContainerText}>{convertDDMM(item?.created_at)}</Text>
              </View>

              <View style={styles.rowContainer}>
                {/* <Image
                  style={styles.rowContainerAvatar}
                  source={{uri: item?.createdBy?.url}}
                /> */}
                {/* <Text style={styles.rowContainerText}>
                  {item?.createdBy?.name}
                </Text> */}
              </View>
            </View>
          </MyShadow>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Text style={styles.dateTodayText}>16 September</Text>
            <View style={styles.todayContainer}>
              <Text style={styles.todayText}>Today</Text>
            </View>
          </View>
          <View style={styles.rightHeaderContainer}>
            <MyButton title={'+ Add Task'} onPress={navigateCreateTask} />
          </View>
        </View>

        <View style={styles.weeklyContainer}>
          {dates?.length > 0 &&
            dates?.map((date, index) => {
              const isSelected = date.getDate() === selectedDay.getDate();
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.columnContainer,
                    isSelected ? styles.columnContainerWithSelected : null,
                  ]}
                  onPress={() => handleSelectDate(date)}>
                  <Text
                    style={[
                      styles.dayText,
                      isSelected ? styles.textWithSelected : null,
                    ]}>
                    {WEEKDAY[date.getDay()].slice(0, 3)}
                  </Text>
                  <View style={styles.dateContainer}>
                    <Text
                      style={[
                        styles.dateText,
                        isSelected ? styles.textWithSelected : null,
                      ]}>
                      {date.getDate()}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>

        <View style={styles.tasksFlatList}>
          <FlatList
            contentContainerStyle={{
              paddingBottom: Math.max(insets.bottom, 16) + bottomTabHeight,
            }}
            data={taskList?.data || []}
            renderItem={renderTaskItem}
            keyExtractor={(item, index) => `${item.id}` + index}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={handleOnScroll}
            onScrollEndDrag={handleOnStopScroll}
            onMomentumScrollEnd={handleOnStopScroll}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
