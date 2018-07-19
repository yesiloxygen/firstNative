import React, { Component } from 'react';
import { Text, View, StyleSheet , FlatList, Dimensions, Image, Button} from 'react-native';
import { AsyncStorage } from "react-native"

export class GridView extends Component {
    data = [
        {id: 'a', buttonText: '1', imageSource: 'https://cdn2.iconfinder.com/data/icons/picons-basic-3/57/basic3-043_drink_soda-512.png'},
        {id: 'b', buttonText: '2',imageSource: 'https://cdn2.vectorstock.com/i/1000x1000/53/36/beer-glass-icon-iweb-sign-symbol-logo-label-vector-13585336.jpg'},
        {id: 'c', buttonText: '3', imageSource: 'http://simpleicon.com/wp-content/uploads/glass-1.png'},
        {id: 'd', buttonText: '4', imageSource: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
        {id: 'e', buttonText: '5',imageSource: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
        {id: 'f', buttonText: '6', imageSource: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'},
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
          margin: 5,
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          borderColor: '#ddd',
          position: 'relative',
          width: this.size,
          height: this.size,
      },
      buttonStyle: {
        width: this.size,
        height: this.size/4,
      },
      });


  render() {
      console.log(this.size);
    return (
        <View >
        <FlatList
          data={this.data}
          renderItem={({item}) => (
            <View >             
            <View >
             <Image style={this.styles.subContainerStyle1} 
             source = {{ uri: 
               item.imageSource }}                  
               />
             </View>
               <View >
               <Button style={this.styles.buttonStyle} onPress={() => console.log("butona bastım")} title= {item.buttonText}> </Button>
             </View>
         </View>
          )}
          keyExtractor={item => item.id}
          numColumns={this.props.numColumns} />
      </View>
    );
  }

   
}

