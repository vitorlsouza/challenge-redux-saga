import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooksActions from '../../store/actions/books';

import styles from './styles';

class HeadeCenter extends Component {
  static propTypes = {
    searchInput: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
  };

  handleChangeInput = (text) => {
    const { searchInput } = this.props;
    searchInput(text);
  };

  render() {
    const { query } = this.props;
    return (
      <TextInput
        placeholder="Search Books"
        style={styles.input}
        value={query}
        onChangeText={this.handleChangeInput}
      />
    );
  }
}

const mapStateToProps = state => ({
  query: state.books.query,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeadeCenter);
