import React, {
  Component,
  StyleSheet,
  Image,
  View,

} from 'react-native';

var LandingButtons = require('./components/LandingButtons');
var Logo = require('./components/Logo');

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    console.log("Landing: ", this.props.navigator)
    return (
      <View style={styles.container}>
        <Image source={require('../images/homepagebg.jpg')} style = {styles.bg}>
          <Logo
            Logo='GeoQuest'
          />
          <LandingButtons
            navigator = {this.props.navigator}
            loginState = {this.state.loggedIn}
          />
        </Image>
      </View>

    );
  }
}

{/*<TextInput
    style={styles.inputs}
    onChangeText={(text) => this.setState({email: text})}
    value={this.state.email}
placeholder={"Email Address"}
/>
<TextInput
  style={styles.inputs}
  onChangeText={(text) => this.setState({password: text})}
  value={this.state.password}
  secureTextEntry={true}
  placeholder={"Password"}
/>
<Button
  text="Signup"
  onpress={this.signup.bind(this)}
  style={styles.button} />

<Button
  text="Have an Account?"
  onpress={this.goToLogin.bind(this)}
  style={styles.button} />*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  bg: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'transparent',

  },

});

module.exports = Landing
