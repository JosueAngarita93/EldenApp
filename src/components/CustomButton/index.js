import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const CustonButton = ({textColor, color, onPress, text}) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      <Text style={styles.buttonText(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};
CustonButton.propTypes = {
  textColor: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
};
CustonButton.defaultProps = {
  color: 'blue',
  textColor: 'black',
  text: 'Click Me',
};

export default CustonButton;
