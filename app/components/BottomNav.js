'use strict';

import React, {
  Component,
  Image,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';

import styles from '.././util/styles';

class BottomNav extends Component {
  render() {
    return (
      <View style={styles.bottomContainer}>
        <TouchableHighlight style={styles.bottomButtons}>
          <Image style={styles.buttonImage} source={require('../../images/CircledUserMale.png')}>
          </Image>
        </TouchableHighlight>
        <TouchableHighlight style={styles.bottomButtons}>
          <Image style={styles.buttonImage} source={require('../../images/TodoList.png')}>
          </Image>
        </TouchableHighlight>
        <TouchableHighlight style={styles.bottomButtons}>
          <Image style={styles.buttonImage} source={require('../../images/Search.png')}>
          </Image>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = BottomNav;
