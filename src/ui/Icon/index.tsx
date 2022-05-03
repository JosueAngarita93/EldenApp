import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../utils/theme';
const CustonIcon = ({name, size, color}) => {
  return <Icon name={name} size={size} color={color} />;
};
CustonIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
CustonIcon.defaultProps = {
  name: 'user',
  size: 25,
  color: theme.colors.primaryBlue,
};

export default CustonIcon;
