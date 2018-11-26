import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooksActions from '../../store/actions/books';

import styles from './styles';

class HeaderRight extends Component {
  searchBooks = () => {
    this.props.searchBooksRequest(this.props.queryInput);

    this.props.navigation.navigate('List');
  };

  render() {
    return (
      <TouchableOpacity onPress={this.searchBooks}>
        <Icon name="search" size={22} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  queryInput: state.books.query,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderRight);
