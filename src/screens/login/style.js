import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'grey',
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: 'space-between',
  },
  logo: {
    height: '20%',
    width: '100%',
    resizeMode: 'stretch',
    margin: '1%',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 40,
    marginBottom: 80,
    color: '#daa520',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#f0f8ff',
    fontFamily: 'Lato-Regular',
  },
  textimput: {
    height: '6%',
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: '2%',
    borderRadius: 5,
    backgroundColor: '#f0f8ff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '6%',
    borderRadius: 5,
    elevation: 25,
    backgroundColor: '#1e90ff',
    margin: '4%',
  },
  textbutton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
