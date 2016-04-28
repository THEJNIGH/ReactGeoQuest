'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage
} from 'react-native';

import Button from './components/Button';
import Header from './components/Header';
import Signup from './Signup';
import Profile from './Profile';

import Firebase from 'firebase';

let app = new Firebase("https://geoquest.firebaseio.com/");

import styles from './util/styles.js';

class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  render(){
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

  login(){

    this.setState({
      loaded: false
    });

    app.authWithPassword({
      "email": this.state.email,
      "password": this.state.password
    }, (error, user_data) => {

      this.setState({
        loaded: true
      });

      if(error){
        alert('Login Failed. Please try again');
      }else{
        AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigator.push({
          component: Profile
        });
      }
    });


  }

  goToSignup(){
    this.props.navigator.pop({

    });
  }

}

module.exports = Login;
