import React from "react";
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions
} from "react-native";

const { UIManager } = NativeModules;
const { width, height } = Dimensions.get("screen");
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
  state = {
    h: 200
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    if (this.state.h == 200) {
      this.setState({ h: this.state.h + 900 });
    } else {
      this.setState({ h: 200 });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { height: this.state.h }]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width,
    height: 200,
    backgroundColor: "red"
  },
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 15,
    width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
