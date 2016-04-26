'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class SubmitButton extends Component {

  render(){
    return (
      <View>
        <TouchableHighlight underlayColor={"#E8E8E8"} onPress={this.props.onpress} style={styles.actualButton}>

          <View>

              <Text style={styles.buttonText}>
                {this.props.text}
              </Text>

          </View>

        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actualButton: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'

  },
  buttonText: {


  },

});

module.exports = SubmitButton;
