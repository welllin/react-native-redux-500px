import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

export default class PhotoList extends Component {

  constructor(props){
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
                source={{uri: item.image_url}}
              />
            );
          })
        }
        {
         (() => {
           if (this.props.status === 'DONE') {
             return (
               <TouchableHighlight style={styles.button} onPress={this.props.actions.searchNextPageAction}>
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
    width:400,
    height:400,
    flex: 1
  },
  button: {
    height: 50,
    backgroundColor: '#3D3D46',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  }
});
