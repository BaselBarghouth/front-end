import React from "react";
import { Animated, ScrollView, TouchableOpacity } from "react-native";
export default class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0,
    isHidden: true
  };

  doThat = () => {
    if (this.state.isHidden) {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: this.props.height, // Animate to opacity: 1 (opaque)
          duration: 500 // Make it take a while
        }
      ).start(); // Starts the animation
      this.setState({ isHidden: false });
    } else {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0, // Animate to opacity: 1 (opaque)
          duration: 500 // Make it take a while
        }
      ).start(); // Starts the animation
      this.setState({ isHidden: true });
    }
  };
  render() {
    let { fadeAnim } = this.state;

    return (
      <ScrollView>
        <Animated.View // Special animatable View
          style={{
            ...this.props.style,
            height: fadeAnim // Bind opacity to animated value
          }}
        >
          {this.props.children}
        </Animated.View>
        <TouchableOpacity
          onPress={this.doThat}
          style={{
            height: 20,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            backgroundColor: "orange"
          }}
        />
      </ScrollView>
    );
  }
}
