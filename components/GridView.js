import React, { Component } from 'react';
import { Text, View, StyleSheet , FlatList, Dimensions, Image} from 'react-native';

import Button from './Button';

//TODO_BAHAR num columsu propstan alıp nasıl yapabilirim
export class GridView extends Component {
    data = [
        {id: 'a', value: 'A'},
        {id: 'b', value: 'B'},
        {id: 'c', value: 'C'},
        {id: 'd', value: 'D'},
        {id: 'e', value: 'E'},
        {id: 'f', value: 'F'},
      ];
    
     
      size = Dimensions.get('window').width/this.props.numColumns;
      styles = StyleSheet.create({
        itemContainer: {
          width: this.size,
          height: this.size,
        },
        item: {
          flex: 1,
          margin: 3,
          backgroundColor: 'lightblue',
        },
        subContainerStyle1: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative'
      },
      subContainerStyle2: {
        borderBottomWidth: 1,
        padding: 5,
        marginTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative'
      },
      });


  render() {
      console.log(this.props.numColumns);
    return (
        <View style={this.styles.container}>
        <FlatList
          data={this.data}
          renderItem={({item}) => (
            <View style={this.styles.itemContainer}>             
               <View style={this.styles.subContainerStyle1}>
                <Image style={this.styles.itemContainer}
                source = {{ uri: 
                  'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
                  
                  />
                </View>
                <View style={this.styles.subContainerStyle2}>
                <Button onPress={() => console.log("button clicked")}> Button </Button>
                </View>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={this.props.numColumns} />
      </View>
    );
  }

   
}

