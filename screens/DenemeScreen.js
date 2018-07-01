import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { GridView } from '../components/GridView';

export default class DenemeScreen extends React.Component {
    static navigationOptions = {
    };

    render() {
        return (
            <View>
                <GridView numColumns = {4} />
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