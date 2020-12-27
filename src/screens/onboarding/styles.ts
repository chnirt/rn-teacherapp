import {StyleSheet} from 'react-native';

const DOT_SIZE = 6;

export const styles = StyleSheet.create({
  container: {flex: 1},
  headerContainer: {
    position: 'absolute',
    top: 32 * 2,
    left: 0,
    right: 0,
    marginHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bulletContainer: {
    flexDirection: 'row',
  },
  bullet: {
    backgroundColor: '#fff',
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginRight: DOT_SIZE,
  },
  skipButton: {
    minWidth: 45,
    maxWidth: 57,
    minHeight: 45,
    maxHeight: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
  },
  pageContainer: {
    flex: 1,
    resizeMode: 'cover',
    paddingVertical: 32 * 4,
    paddingHorizontal: 32,
    backgroundColor: '#FF0040',
  },
  imageStyle: {opacity: 0.9},
  titleText: {
    color: '#fff',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  subTitleText: {
    color: '#fff',
    fontSize: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    marginHorizontal: 32,
    alignItems: 'flex-end',
  },
  nextButton: {
    width: 72,
    height: 72,
    borderRadius: 72 / 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
