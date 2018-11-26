import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';

import styles from './styles';

import img from '../../assets/img/books.png';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.imageView}>
      <Image source={img} style={styles.image} />
    </View>
    <View style={styles.contentView}>
      <Text style={styles.title}>Foton Book</Text>
      <Text style={styles.subTitle}>Encontre aqui todos os seus livros favoritos</Text>
    </View>
    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
        <Text style={styles.textButton}>Vamos lá</Text>
      </TouchableOpacity>
    </View>
  </View>
);

Home.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

Home.navigationOptions = {
  header: null,
};

export default Home;
