'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  Navigator,
  AsyncStorage
} from 'react-native';

import Login from './app/Login';
import Signup from './app/Signup';
import Profile from './app/Profile';
import Games  from'./app/Games';
import Landing from './app/Landing';
import NewQuest from './app/NewQuest';
import ActiveQuests from './app/ActiveQuests';

import Firebase from 'firebase';

let app = new Firebase("https://geoquest.firebaseio.com");

class ReactGeoQuest extends Component {

  constructor(props){
    super(props);
    this.state = {
      component: null,
      loaded: false
    };
  }

  componentWillMount(){


    AsyncStorage.getItem('user_data').then((user_data_json) => {
      let user_data = JSON.parse(user_data_json);
      let component = {component: Signup};
      if(user_data != null){
        app.authWithCustomToken(user_data.token, (error, authData) => {
          if(error){
            this.setState(component);
          }else{
            this.setState({component: Profile});
          }
        });
      }else{
        this.setState(component);
      }
    });

  }

  render(){

    if(this.state.component){
      return (
        <Navigator
          initialRoute={{component: this.state.component}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }else{
      return (
        <View>
        </View>
      );
    }

  }

}

AppRegistry.registerComponent('ReactGeoQuest', () => ReactGeoQuest);
