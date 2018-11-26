import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import StarRating from 'react-native-star-rating';

import styles from './styles';

const Detail = ({ navigation }) => {
  const { book } = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={styles.bookDetails}>
        <View style={styles.imageView}>
          <Image
            source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.bookInformation}>
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
          <View style={styles.price}>
            {book.saleInfo.listPrice ? (
              <Text>
$
                {book.saleInfo.listPrice.amount}
              </Text>
            ) : (
              <Text>No Price</Text>
            )}
            <StarRating
              disabled
              maxStars={5}
              rating={book.volumeInfo.averageRating}
              emptyStar="ios-star-outline"
              fullStarColor="black"
              fullStar="ios-star"
              halfStar="ios-star-half"
              iconSet="Ionicons"
              starSize={20}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsView}>
        <Text style={styles.pages}>
          {book.volumeInfo.pageCount}
          {' '}
pages
        </Text>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.textBuy}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHeart}>
          <Icon name="ios-heart-empty" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.bookDescription}>
        <ScrollView>
          <Text>{book.volumeInfo.description}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;
