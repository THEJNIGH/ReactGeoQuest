'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Title extends Component {
  render() {
    return (
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>
          {this.props.Title}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  logoWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    fontSize: 40,
    fontFamily: 'Helvetica-Bold',
    color: '#FFFEF7',
  }
});

Title.propTypes = {
  Title: React.PropTypes.string.isRequired
}

module.exports = Title;
