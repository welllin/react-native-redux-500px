'use strict';

import React, { Component, View } from 'react-native';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/searchActions';
import { connect } from 'react-redux/native';
import SearchInput from '../components/SearchInput';
import PhotoList from '../components/PhotoList';

class SearchApp extends Component {
  render() {
    const actions = bindActionCreators(searchActions, this.props.dispatch);

    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <SearchInput actions={actions} status={this.props.status}/>
        <PhotoList actions={actions} photos={this.props.photos} status={this.props.status}/>        
      </View>
    );
  }
}

export default connect(state => ({
  photos: state.photos.photos,
  status: state.photos.status
}))(SearchApp);
