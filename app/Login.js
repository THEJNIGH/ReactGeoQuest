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
        <Text>
          Something
        </Text>
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
