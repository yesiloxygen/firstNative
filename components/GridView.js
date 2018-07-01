import React, { Component } from 'react';
import { Text, View, StyleSheet , FlatList, Dimensions, Image} from 'react-native';

//TODO_BAHAR num columsu propstan alıp nasıl yapabilirim
export class GridView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
              <Image style={styles.itemContainer}
                    source = {{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }} />
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns} />
      </View>
    );
  }
}

const data = [
    {id: 'a', value: 'A'},
    {id: 'b', value: 'B'},
    {id: 'c', value: 'C'},
    {id: 'd', value: 'D'},
    {id: 'e', value: 'E'},
    {id: 'f', value: 'F'},
  ];
  const numColumns = 3;
  const size = Dimensions.get('window').width/numColumns;
  const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
    },
    item: {
      flex: 1,
      margin: 3,
      backgroundColor: 'lightblue',
    }
  });