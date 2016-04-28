'use strict';
import React, {
  StyleSheet
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    height: 40,
    padding: 10,
    width: 300,
    borderColor: '#2D2D2D',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 10,
  },
  transparent_button_text: {
    color: '#FFFEF7',
    fontSize: 16
  },
  primary_button: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4CA559'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
  mapContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4CA559',
    paddingLeft: 15,
    paddingRight: 15
  },
  bottomButtons: {
    width: 50,
    height: 50,

  },

});
