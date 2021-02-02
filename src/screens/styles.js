import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1
  },
  searchView: {
    marginTop: 30,
    position: 'relative'
  },
  inputFiled: {
    height: 40,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 15,
    borderColor: 'lightgrey'
  },
  searchButton: {
    position: 'absolute',
    top: 4,
    right: 10
  },
  searchIcon: {
    fontSize: 30
  },
  cards: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20
  }
});
