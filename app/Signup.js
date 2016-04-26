'use strict';
import React, {
  Component,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

import Button from './components/Button';
import Login from './Login';
import Logo from './components/Logo';
import styles from './util/styles';


import Firebase from 'firebase';

let app = new Firebase("https://geoquest.firebaseio.com/");

class Signup extends Component {

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

    app.createUser({
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

  }

  goToLogin(){
    this.props.navigator.push({
      component: Login
    });
  }


  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../images/homepagebg.jpg')}>
          <Logo
            Logo='Signup'
          />
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.email}
                  placeholder={"Email Address"}
                  placeholderTextColor={'#2D2D2D'}
              />
              <TextInput
                style={styles.textinput}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor={'#2D2D2D'}
              />
            </View>
            <Button
              text="Signup"
              onpress={this.signup.bind(this)}
              button_styles={styles.primary_button}
              button_text_styles={styles.primary_button_text} />

            <Button
              text="Have an Account?"
              onpress={this.goToLogin.bind(this)}
              button_styles={styles.transparent_button}
              button_text_styles={styles.transparent_button_text} />
          </View>
        </Image>
      </View>
    );
  }
}

module.exports = Signup;
