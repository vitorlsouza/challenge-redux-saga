import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';

const HeaderRight = ({ children }) => <TouchableOpacity>{children}</TouchableOpacity>;

HeaderRight.propTypes = {
  children: PropTypes.shape({}).isRequired,
  props: PropTypes.shape({}).isRequired,
};

export default HeaderRight;
