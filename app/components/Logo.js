'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>
          {this.props.Logo}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  logoWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: {
    fontSize: 40,
    fontFamily: 'Helvetica',
    color: '#FFFEF7',
  }
});

Logo.propTypes = {
  Logo: React.PropTypes.string.isRequired
}

module.exports = Logo;
