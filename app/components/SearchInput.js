import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  ActivityIndicatorIOS
} from 'react-native';

export default class SearchInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      emptyValue: false,
    }
  }

  searchPhoto(){
    if(this.state.search){
      this.props.actions.searchPhotoAction(this.state.search);
    } else {
      this.setState({emptyValue: true});
    }
  }

  render() {

    let errorVal = <View />

    if(this.state.emptyValue){
      errorVal = <Text style={styles.error}>
                    Can't search with empty value...
                  </Text>;
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('image!500px_logo')} />
          <TextInput style={styles.input}
            onChangeText={(text) => this.setState({search: text})}
            placeholder="Type something to earch..." />
          <TouchableHighlight style={styles.button} onPress={this.searchPhoto.bind(this)}>
            <Text style={styles.buttonText}>
              Search
            </Text>
          </TouchableHighlight>

          {errorVal}

          <ActivityIndicatorIOS
            animating={this.props.status === 'PENDING'}
            size="large"
            style={styles.loader} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 30,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  buttonText: {
    fontSize: 22,
    fontWeight:'600',
    color: '#fff',
    alignSelf: 'center'
  },
  input: {
    height: 50,
    margin: 20,
    padding: 4,
    fontSize: 18,
    paddingLeft: 20,
    backgroundColor: '#fff'
  },
  error:{
    marginTop:10,
    color: '#c7254e'
  }
});
