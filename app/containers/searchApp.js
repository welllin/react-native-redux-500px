'use strict';

import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/searchActions';
import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput';
import PhotoList from '../components/PhotoList';

class SearchApp extends Component {
  render() {

    return (
      <View style={{ flex: 1, backgroundColor: '#f2f2f2', marginBottom:10 }}>
        <SearchInput searchPhotoAction={this.props.searchPhotoAction} status={this.props.status} />
        <PhotoList searchNextPageAction={this.props.searchNextPageAction} photos={this.props.photos} status={this.props.status} />
      </View>
    );
  }
}



export default connect((state) => {
  return {
    photos: state.photos.photos,
    status: state.photos.status
  };
},
  (dispatch) => {
    return bindActionCreators(searchActions, dispatch);
  })(SearchApp);
