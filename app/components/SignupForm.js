'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';


let FireConnection = new Firebase("https://geoquest.firebaseio.com/");
import Firebase from 'firebase';

class SignupForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  signup(){

    this.setState({
      loaded: false
    });

    FireConnection.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {

      if(error){
        switch(error.code){

          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;

          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;

          default:
            alert("Error creating user:");
        }

      }else{
        alert('Your account was created!');
      }

      this.setState({
        email: '',
        password: '',
      });

    });

    this.props.navigator.push({
      component: Games
    })

  }


  render() {
    return (
      <View style={styles.formWrapper}>

        <View style={styles.email}>

          <Text style={styles.labels}>
            Email:
          </Text>

          <TextInput
            style={styles.inputs}
            onChangeText={(text) =>
            this.setState({email: text})}
            value={this.state.email}
            placeholder={'Enter email address'}
          />

        </View>

        <View style={styles.pass}>

          <Text style={styles.labels}>
            Password:
          </Text>

          <TextInput
            style={styles.inputs}
            onChangeText={(text) =>
            this.setState({password: text})}
            value={this.state.pass}
            placeholder={'Enter password'}
            secureTextEntry={true}
          />

        </View>

        <TouchableHighlight style={styles.login} onPress={this.signup.bind(this)}>
          <Text style={styles.loginText}>
            Sign Up
          </Text>
        </TouchableHighlight>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  email: {
    width: 280,
  },
  pass: {
    width: 280,
    paddingBottom: 10,
  },
  login: {
    width: 280,
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CA559',
  },
  loginText: {
    color: '#FFFEF7',
    fontFamily: 'Helvetica-Light',
    fontSize: 18,
  },
  labels: {
    fontFamily: 'Helvetica-Light',
    fontSize: 18,
    paddingBottom: 5,
    color: '#FFFEF7'
  },
  inputs: {
    height: 40,
    borderColor: '#2D2D2D',
    borderWidth: 2,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  }
});

module.exports = SignupForm;
