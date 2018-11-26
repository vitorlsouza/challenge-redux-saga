import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator, TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooksActions from '../../store/actions/books';

import styles from './styles';
import Book from '../../components/Book';

import HeaderLeft from '../../components/HeaderLeft';

class List extends Component {
  static navigationOptions = {
    headerLeft: <HeaderLeft />,
  };

  async componentDidMount() {
    await this.props.searchBooksRequest('design books');
  }

  navigateToDetail = (e, item) => {
    this.props.navigation.navigate('Detail', { book: item });
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
    console.tron.log(this.props.books, this.props.loading);
    return (
      <View style={styles.container}>
        {this.props.loading ? (
          <ActivityIndicator size="large" color="#FFF" style={styles.loading} />
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
