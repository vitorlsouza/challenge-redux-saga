import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class HeaderRight extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Icon name="bars" size={22} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

export default HeaderRight;
