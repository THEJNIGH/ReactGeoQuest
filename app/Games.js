import React, {
  Component,
  StyleSheet,
  Image,
  View,

} from 'react-native';

var topBar = require('./components/TopBar');
var bottomNav = require('./components/BottomNav');

class Games extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Games go here.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Games;
