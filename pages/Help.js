import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
let { height, width } = Dimensions.get("screen");
export default class RNPositionBug extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={styles.box2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  box: {
    width: 200,
    height: 100,
    borderWidth: 2,

    borderTopLeftRadius: 80,
    borderTopRightRadius: 80
  },
  box2: {
    position: "relative",
    top: -50,
    width: 200,
    height: 100,
    borderWidth: 2,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80
  }
});
