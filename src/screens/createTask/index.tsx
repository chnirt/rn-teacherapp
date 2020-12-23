import React, {useState} from 'react';
import {Text, View, Image, Pressable, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';
import {MyScrollView, MyShadow, MyTextInput, MyButton} from '../../components';
import {CheckSVG, NameSVG, NoteSVG, CalendarSVG} from './svgs';
import {ClockSVG} from '../home/svgs';

const SUBJECTS = [
  {id: '1', name: 'Biology', color: '#48B683'},
  {id: '2', name: 'Literature', color: '#E85DC0'},
  {id: '3', name: 'Physics', color: '#7F87FF'},
  {id: '4', name: 'Mathematics', color: '#FF4271'},
  {id: '5', name: 'Chemestry', color: '#FFBE68'},
];

export const CreateTaskScreen = () => {
  const [subjectID, setSubjectID] = useState<string | null>('1');
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const handlePress = (id: string) => setSubjectID(id);

  const handleAddClass = () => console.log('Add Class');

  return (
    <SafeAreaView style={styles.safeArea}>
      <MyScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeaderContainer}>
              <Text style={styles.greetingText}>Hello Liana</Text>
              <Text style={styles.greetingText1}>Add a class</Text>
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

          <View style={styles.subjectsContainer}>
            <Text style={styles.subjectsText}>Subjects</Text>
            <View style={styles.bodySubjectsContainer}>
              {SUBJECTS?.length > 0 &&
                SUBJECTS?.map((subject, index) => (
                  <MyShadow
                    key={index}
                    size={10}
                    color={subject?.color}
                    backgroundColor={subject?.color}
                    style={styles.subjectContainer}
                    onPress={() => handlePress(subject?.id)}>
                    {subjectID === subject?.id && (
                      <View style={styles.iconContainer}>
                        <CheckSVG width={13} height={13} color="#fff" />
                      </View>
                    )}
                    <Text style={styles.subjectText}>{subject?.name}</Text>
                  </MyShadow>
                ))}
            </View>
          </View>

          <View style={styles.rowContainer}>
            <MyTextInput
              style={styles.nameInputText}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#8E9396"
              icon={() => <NameSVG width={18} height={18} color="#57585A" />}
            />
          </View>

          <View style={styles.rowContainer}>
            <MyTextInput
              style={styles.nameInputText}
              value={note}
              onChangeText={setNote}
              placeholder="Note"
              placeholderTextColor="#8E9396"
              icon={() => <NoteSVG width={18} height={18} color="#57585A" />}
            />
          </View>

          <View style={styles.rowContainer}>
            <MyShadow
              style={styles.boxContainer}
              size={4}
              color="#000"
              backgroundColor="#fff">
              <CalendarSVG width={18} height={18} color="#9296F3" />
            </MyShadow>
            <Text style={styles.valueText}>Fri 25, September, 2020</Text>
          </View>

          <View style={styles.rowContainer}>
            <MyShadow
              style={styles.boxContainer}
              size={4}
              color="#000"
              backgroundColor="#fff">
              <ClockSVG width={18} height={18} color="#F3C589" />
            </MyShadow>
            <Text style={styles.valueText}>09:30 AM</Text>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              style={styles.addButton}
              title="Add Class"
              onPress={handleAddClass}
            />
          </View>
        </View>
      </MyScrollView>
    </SafeAreaView>
  );
};
