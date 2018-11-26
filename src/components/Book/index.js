import React, { Component } from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

class Book extends Component {
  render() {
    return (
      <View style={styles.bookView}>
        <Image
          source={{ uri: this.props.book.volumeInfo.imageLinks.thumbnail }}
          style={styles.book}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default Book;
