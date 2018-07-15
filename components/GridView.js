import React, { Component } from 'react';
import { Text, View, StyleSheet , FlatList, Dimensions, Image, Button} from 'react-native';
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
               'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}                  
               />
             </View>
               <View >
               <Button style={this.styles.buttonStyle} onPress={() => console.log("butona bastım")} title= "asdfas"> </Button>
             </View>
         </View>
          )}
          keyExtractor={item => item.id}
          numColumns={this.props.numColumns} />
      </View>
    );
  }

   
}

