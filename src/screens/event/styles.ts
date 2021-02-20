import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    margin: 10,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  place: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  placeText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#989eb1',
  },
  date: {
    marginTop: 15,
    fontSize: 16,
    color: '#989eb1',
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    width: '48%',
  },
  buttonGo: {
    width: '100%',
    backgroundColor: '#aedd94',
  },
  buttonNotInterested: {
    width: '100%',
    backgroundColor: '#f85f6a',
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    color: '#000000',
  },
});
