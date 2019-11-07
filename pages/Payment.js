import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  Image
} from "react-native";
import logo from "../assets/logo.png";
import Cloud from "./Animation";
import { Actions } from "react-native-router-flux";
let { height, width } = Dimensions.get("screen");
const Payment = props => {
  return (
    <View style={styles.container}>
      <Cloud start={{ x: width, y: 30 }} end={{ x: -150, y: 30 }} />

      <View style={styles.container2}>
        <Image source={logo} resizeMode="stretch" style={styles.image} />
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Payment"
            placeholderTextColor="#F7AE21"
          />
        </View>
        <View style={styles.containerButton}>
          <Button
            onPress={Actions.payment}
            color="#008D78"
            title="Place Payment!"
          />
        </View>
      </View>
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
  container: {
    height: height,
    width,
    backgroundColor: "#F7AE21"
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    height: height - 40 - (height * 20) / 100
  },
  containerInput: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  input: {
    textAlign: "center",
    borderRadius: 50,
    backgroundColor: "#008D78",
    height: 50,
    width: (width * 80) / 100
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#F7AE21",
    width: (width * 60) / 100,
    marginTop: 10
  },
  image: {
    height: (height * 20) / 100,
    width: (width * 80) / 100
  }
});
