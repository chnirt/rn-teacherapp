import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  leftHeaderContainer: {flex: 1, justifyContent: 'space-between'},
  discussText: {color: '#9e9ea7', fontSize: 16, fontWeight: 'normal'},
  subjectContainer: {
    // marginTop: 10,
  },
  subjectText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rightHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 20,
  },
  flatListView: {
    marginBottom: 140,
    // backgroundColor: 'red',
  },
  inputContainer: {
    flexDirection: 'row',
    bottom: 120,
    justifyContent: 'space-between',
  },
  textInputContainer: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  plusIconContainer: {
    marginRight: 15,
  },
  textInput: {
    flex: 1,
  },
  actionsContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
