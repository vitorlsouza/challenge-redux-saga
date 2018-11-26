import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, FlatList, ActivityIndicator, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as BooksActions from '../../store/actions/books';

import styles from './styles';
import Book from '../../components/Book';

import HeaderLeft from '../../components/HeaderLeft';

class List extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  static navigationOptions = {
    headerLeft: (
      <HeaderLeft>
        <Icon name="bars" size={22} style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
      </HeaderLeft>
    ),
  };

  async componentDidMount() {
    const { searchBooksRequest } = this.props;
    await searchBooksRequest('design books');
  }

  navigateToDetail = (e, item) => {
    const { navigation } = this.props;
    navigation.navigate('Detail', { book: item });
  };

  renderListBook = () => (
    <View style={styles.list}>
      <FlatList
        numColumns="3"
        data={this.props.books}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={e => this.navigateToDetail(e, item)}>
            <Book book={item} navigation={this.props.navigation} />
          </TouchableOpacity>
        )}
      />
    </View>
  );

  render() {
    const { loading } = this.props;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" style={styles.loading} />
        ) : (
          this.renderListBook()
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books.items,
  loading: state.books.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
