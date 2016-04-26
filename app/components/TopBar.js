'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TopBar extends Component {
  render() {
    return (
        <Text style={styles.logo}>
          {this.props.text}
        </Text>
    );
  }
}

const styles = StyleSheet.create({

});

TopBar.propTypes = {
  text: React.PropTypes.string.isRequired
}

module.exports = TopBar;
