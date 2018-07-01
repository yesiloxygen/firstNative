import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

import { GridView } from '../components/GridView';

export default class DenemeScreen extends React.Component {
    static navigationOptions = {
    };

    render() {
        return (
            <View>
                <GridView
                size1={Dimensions.get('window').width/3}/>
            </View>
           
        );
      }
}

const styles = {
    headerTextStyle: {
        fontSize: 20,
      },
    viewStyle: {
        justifyContent : 'center',
        backgroundColor: '#F58356',
        height : 60,
    },

};