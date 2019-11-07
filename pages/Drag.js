import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  PanResponder,
  Dimensions
} from "react-native";
let { height } = Dimensions.get("screen");
import Signup from "./Signup";
export default class Animatedbasic extends Component {
  componentWillMount() {
    this.offset = 0;
    this.animated = new Animated.ValueXY({ x: 0, y: 0 });

    this._value = { x: 0, y: 0 };
    this.animated.addListener(value => (this._value = value));
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderGrant: (event, gestureState) => {
        this.animated.setOffset({
          x: this._value.x,
          y: this._value.y
        });
        this.animated.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: (event, gestureState) => {
        Animated.event([null, { dy: this.animated.y }])(event, gestureState);
      },
      onPanResponderRelease: (event, gestureState) => {}
    });
  }
  render() {
    const styles = {
      box: {
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 90,
        height: 60
      },
      text: {
        color: "#FFF",
        fontSize: 20
      }
    };
    let style = {
      f: {
        transform: [{ translateY: -10 }],
        backgroundColor: "blue",
        height: 100
      }
    };
    return (
      <View>
        <Animated.View style={style.f}></Animated.View>
        <Animated.View
          style={styles.box}
          {...this.panResponder.panHandlers}
        ></Animated.View>
        <Text style={styles.text}>Drag Me Down</Text>
      </View>
    );
  }
}
