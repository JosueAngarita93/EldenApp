import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: color => ({
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
    width: '90%',
    backgroundColor: color,
  }),
  buttonText: textColor => ({
    textAlign: 'center',
    color: textColor,
    fontWeight: 'bold',
  }),
});
