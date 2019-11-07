import React, { Component } from "react";
import { Animated, Image, Dimensions } from "react-native";
import ee from "../assets/cloud.png";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.moveAnimation = new Animated.ValueXY();
  }
  move = () => {
    this.moveAnimation.setValue(this.props.start);
    Animated.timing(this.moveAnimation, {
      toValue: this.props.end,
      duration: 15000
    }).start(() => this.move());
  };
  componentDidMount = () => {
    this.move();
  };

  render() {
    return (
      <Animated.View style={[this.moveAnimation.getLayout()]}>
        <Image
          source={ee}
          resizeMode="stretch"
          style={{ ...this.props.style, width: 150, height: 40 }}
        />
      </Animated.View>
    );
  }
}
