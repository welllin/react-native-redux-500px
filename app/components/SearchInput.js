import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  ActivityIndicator
} from 'react-native';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      emptyValue: false,
    }
  }

  searchPhoto() {
    if (this.state.search) {
      this.props.searchPhotoAction(this.state.search);
      this.setState({ emptyValue: false });
    } else {
      this.setState({ emptyValue: true });
    }
  }

  render() {

    let errorVal = <View />

    if (this.state.emptyValue) {
      errorVal = <Text style={styles.error}>
        Can't search with empty value...
                  </Text>;
    }

    return (
      <View style={styles.logo}>
        <Image source={require('../images/500px_logo.png')} />
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({ search: text })}
          placeholder="Type something to search..." />
        <TouchableHighlight style={styles.button} onPress={this.searchPhoto.bind(this)}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>

        {errorVal}

        {(this.props.status === 'PENDING') ? <ActivityIndicator
          animating={this.props.status === 'PENDING'}
          size="large"
          style={styles.loader} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  button: {
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginBottom: 10,
    elevation: 5
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center'
  },
  input: {
    height: 50,
    width: 300,
    margin: 20,
    padding: 4,
    fontSize: 18,
    paddingLeft: 20,
    backgroundColor: '#fff'
  },
  error: {
    marginTop: 10,
    color: '#c7254e'
  }
});
