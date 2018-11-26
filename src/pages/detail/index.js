import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import StarRating from 'react-native-star-rating';

import HeaderLeft from '../../components/HeaderLeft';

import noImage from '../../assets/img/notAvail.png';
import styles from './styles';

const Detail = ({ navigation }) => {
  const { book } = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.bookDetails}>
        <View style={styles.bookView}>
          <View style={styles.imageView}>
            {book.volumeInfo.imageLinks === undefined ? (
              <Image source={noImage} style={styles.image} resizeMode="stretch" />
            ) : (
              <Image
                source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
                style={styles.image}
                resizeMode="stretch"
              />
            )}
          </View>
          <Text style={styles.pages}>
            {book.volumeInfo.pageCount}
            {' '}
pages
          </Text>
        </View>
        <View style={styles.bookInformation}>
          <View style={styles.bookContent}>
            <View style={styles.bookTitle}>
              <Text style={styles.title}>{book.volumeInfo.title}</Text>
              {book.volumeInfo.authors ? (
                book.volumeInfo.authors.map(author => (
                  <Text key={author} style={styles.author}>
                    by
                    {author}
                  </Text>
                ))
              ) : (
                <Text>No Author</Text>
              )}
            </View>
            <View style={styles.price}>
              {book.saleInfo.listPrice ? (
                <Text style={styles.textPrice}>
$
                  {book.saleInfo.listPrice.amount}
                </Text>
              ) : (
                <Text style={styles.textPrice}>No Price</Text>
              )}
              <View style={styles.rating}>
                <StarRating
                  disabled
                  maxStars={5}
                  rating={book.volumeInfo.averageRating}
                  emptyStar="ios-star-outline"
                  fullStarColor="black"
                  fullStar="ios-star"
                  halfStar="ios-star-half"
                  iconSet="Ionicons"
                  starSize={16}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonsView}>
            <TouchableOpacity style={styles.buttonBuy}>
              <Text style={styles.textBuy}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonHeart}>
              <Icon name="ios-heart-empty" size={22} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bookDescription}>
        <ScrollView>
          <Text style={styles.textDescription}>{book.volumeInfo.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

Detail.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

Detail.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <HeaderLeft>
      <Icon name="ios-arrow-round-back" size={35} style={{ color: 'rgba(0, 0, 0, 0.5)' }} onPress={() => navigation.pop()} />
    </HeaderLeft>
  ),
});

export default Detail;
