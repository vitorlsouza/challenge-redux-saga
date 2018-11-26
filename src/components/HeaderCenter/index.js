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
  };

  handleChangeInput = (text) => {
    const { searchInput } = this.props;
    searchInput(text);
  };

  render() {
    return (
      <TextInput
        placeholder="Search Books"
        style={styles.input}
        onChangeText={this.handleChangeInput}
      />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(HeadeCenter);
