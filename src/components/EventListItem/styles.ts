import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  info: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    color: '#35424a',
  },
  place: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  placeText: {
    color: '#989eb1',
  },
});
