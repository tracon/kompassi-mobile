import React, { Component } from 'react';
import { Button, Icon } from 'native-base';
import { View } from 'react-native';

import styles from './styles';


export default class FeedbackFaces extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Button large transparent style={styles.button}>
          <Icon style={styles.happyFace} name="ios-happy" />
        </Button>

        <Button large transparent style={styles.button}>
          <Icon style={styles.sadFace} name="ios-sad" />
        </Button>
      </View>
    );
  }
}
