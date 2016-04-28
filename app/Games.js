'use strict';

var React = require('react-native');
var Mapbox = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
var {
  StyleSheet,
  Text,
  StatusBar,
  View
} = React;

import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';

var Games = React.createClass({
  mixins: [Mapbox.Mixin],
  getInitialState() {
    return {
      center: {
        latitude: 28.589707,
        longitude: -81.287277
      },
      zoom: 14
     };
  },
  onRegionChange(location) {
    this.setState({ currentZoom: location.zoom });
  },
  onRegionWillChange(location) {
    console.log(location);
  },
  onUpdateUserLocation(location) {
    console.log(location);
  },
  onOpenAnnotation(annotation) {
    console.log(annotation);
  },
  onRightAnnotationTapped(e) {
    console.log(e);
  },
  onLongPress(location) {
    console.log('long pressed', location);
  },
  onTap(location) {
    console.log('tapped', location);
  },
  onOfflineProgressDidChange(progress) {
    console.log(progress);
  },
  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <Mapbox
          style={styles.container}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={'pk.eyJ1Ijoiam5pZ2giLCJhIjoiY2luY2Qzc3c3MHF3NXYwa3YxMmRrMzU5NyJ9.RJE6SSa2-lP5P6GqZViPNg'}
          styleURL={this.mapStyles.emerald}
          userTrackingMode={this.userTrackingMode.follow}
          centerCoordinate={this.state.center}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          annotations={this.state.annotations}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap} />
        <BottomNav />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 8
  }
});

module.exports = Games;
