'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,


} from 'react-native';

var Login = require('../Login');
var Signup = require('../Signup');

class LandingButtons extends Component {

  onLoginPress() {
    this.props.navigator.push({
      component: Login,
    })
  }

  onFacebookPress() {
    this.props.navigator.push({

    })
  }

  onSignupPress() {
    this.props.navigator.push({
      component: Signup,
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.fblogin}>

          <TouchableHighlight style={styles.fb} onPress={this.onFacebookPress.bind(this)}>

            <Text style={styles.buttonText}>
              Login with Facebook
            </Text>

          </TouchableHighlight>

        </View>

        <View style={styles.buttonWrapper}>

            <TouchableHighlight style={styles.login} onPress={this.onLoginPress.bind(this)}>

            <View>

              <Text style={styles.buttonText}>
                Log In
              </Text>

            </View>

            </TouchableHighlight>

            <TouchableHighlight style={styles.signup} onPress={this.onSignupPress.bind(this)}>

              <View>

                <Text style={styles.buttonText}>
                  Sign Up
                </Text>

              </View>

            </TouchableHighlight>

        </View>

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
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,

  },
  buttonText: {
    color: '#FFFEF7',
    fontSize: 18,
    fontFamily: 'Helvetica-Light',
  },
  signup: {
    height: 35,
    width: 85,
    backgroundColor: '#4CA559',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    height: 35,
    width: 85,
    borderColor: '#EDEDED',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fb: {
    height: 35,
    width: 180,
    backgroundColor: '#4171B7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  }
});

module.exports = LandingButtons;
