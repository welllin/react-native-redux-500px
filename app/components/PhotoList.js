import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class PhotoList extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ScrollView>
        {
          this.props.photos.map((item, index) => {
            return (
              <Image
                key={`PhotoItem_${item.id}_${index}`}
                style={styles.image}
                source={{ uri: item.image_url }}
                resizeMode='contain'
              />
            );
          })
        }
        {
          (() => {
            if (this.props.status === 'DONE') {
              return (
                <TouchableHighlight style={styles.button} onPress={this.props.searchNextPageAction}>
                  <Text style={styles.buttonText}>Load More</Text>
                </TouchableHighlight>
              );
            }
          })()
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: width - 20,
    height: width - 20,
    flex: 1,
    margin: 10
  },
  button: {
    height: 50,
    backgroundColor: '#3D3D46',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    elevation: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  }
});
