import React from 'react';
import {Image, Text, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {MyScrollView, MyShadow} from '../../components';
import {uuidv4} from '../../utils';
import {
  ClockSVG,
  MenuSVG,
  CalculatorSVG,
  ChemistrySVG,
  DnaSVG,
  BookSVG,
} from './svgs';

const DATA = [
  {
    id: uuidv4(),
    title: 'Mathematics',
    color: '#49b583',
    icon: <CalculatorSVG color="#fff" />,
  },
  {
    id: uuidv4(),
    title: 'Science',
    color: '#ff4171',
    icon: <ChemistrySVG color="#fff" />,
  },
  {
    id: uuidv4(),
    title: 'Biology',
    color: '#ffbd69',
    icon: <DnaSVG color="#fff" />,
  },
  {
    id: uuidv4(),
    title: 'Foreign Languages',
    color: '#7f86ff',
    icon: <BookSVG color="#fff" />,
  },
];

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

export const HomeScreen = () => {
  const renderCourseItem = ({item}) => (
    <MyShadow
      style={styles.courseItem}
      size={10}
      color={item?.color}
      backgroundColor={item?.color}>
      <View style={styles.courseContentIcon}>{item?.icon}</View>
      <View style={styles.courseContentTextContainer}>
        <Text style={styles.courseContentText}>{item?.title}</Text>
      </View>
    </MyShadow>
  );

  const renderScheduleTaskItem = ({item}) => (
    <MyShadow
      style={styles.scheduleTaskItem}
      size={10}
      color={item?.color}
      backgroundColor={item?.color}>
      <View style={styles.headerScheduleTaskItem}>
        <Text style={styles.scheduleTaskText}>{item?.title}</Text>
        <MenuSVG color="#fff" />
      </View>
      <View style={styles.bodyScheduleTaskItem}>
        <Text style={styles.descriptionScheduleTaskText}>{item?.subTitle}</Text>
      </View>
      <View style={styles.footerScheduleTaskItem}>
        <View style={styles.rowContainer}>
          <ClockSVG width={15} height={15} color="#fff" />
          <Text style={styles.rowContainerText}>{item?.createdAt}</Text>
        </View>

        <View style={styles.rowContainer}>
          <Image
            style={styles.rowContainerAvatar}
            source={{uri: item?.createdBy?.url}}
          />
          <Text style={styles.rowContainerText}>{item?.createdBy?.name}</Text>
        </View>
      </View>
    </MyShadow>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <MyScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
              <Text style={styles.greetingText}>Hello Liana</Text>
              <View style={styles.greetingText1Container}>
                <Text style={styles.greetingText1}>You've got</Text>
              </View>
              <View style={styles.greetingText2Container}>
                <Text style={styles.greetingText2}>4 tasks today</Text>
              </View>
            </View>

            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={{
                  uri:
                    'https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?cs=srgb&dl=pexels-ariel-prajatama-4124367.jpg&fm=jpg',
                }}
              />

              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
          </View>

          <View style={styles.courseContainer}>
            <Text style={styles.courseTitleText}>Courses</Text>
            <View style={styles.courseSubTitleContainer}>
              <Text style={styles.courseSubTitleText}>
                Your running subjects
              </Text>
            </View>
            <View style={styles.courseFlatList}>
              <FlatList
                data={DATA}
                renderItem={renderCourseItem}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={styles.scheduleContainer}>
            <Text style={styles.scheduleTitleText}>Your schedule</Text>
            <View style={styles.scheduleSubTitleContainer}>
              <Text style={styles.scheduleSubTitleText}>
                Upcoming classes and tasks
              </Text>
            </View>
            <View style={styles.scheduleTaskFlatList}>
              <FlatList
                data={DATA2}
                renderItem={renderScheduleTaskItem}
                keyExtractor={(item) => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </MyScrollView>
    </SafeAreaView>
  );
};
