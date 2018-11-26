import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import styles from './styles';

import noImage from '../../assets/img/notAvail.png';

const Book = ({ book }) => (
  <View style={styles.bookView}>
    {book.volumeInfo.imageLinks === undefined ? (
      <Image source={noImage} style={styles.book} resizeMode="stretch" />
    ) : (
      <Image
        source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
        style={styles.book}
        resizeMode="stretch"
      />
    )}
  </View>
);

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Book;
