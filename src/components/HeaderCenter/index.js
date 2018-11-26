import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooksActions from '../../store/actions/books';

import styles from './styles';

class HeadeCenter extends Component {
  handleChangeInput = (text) => {
    this.props.searchInput(text);
    // console.tron.log(text);
  };

  render() {
    return (
      <TextInput placeholder="search" style={styles.input} onChangeText={this.handleChangeInput} />
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(HeadeCenter);
