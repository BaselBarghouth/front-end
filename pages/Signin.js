import React, { useState } from "react";
import { Actions } from "react-native-router-flux";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Dimensions,
  TextInput,
  Alert
} from "react-native";
import SigninBackGround from "../assets/signin.png";
import Cloud from "./Animation";
let height = Dimensions.get("screen").height;
let width = Dimensions.get("screen").width;
export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const onSubmit = async () => {
    let body = {
      email,
      password
    };
    let check = fetch(`http://192.168.1.107:5001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        data.success
          ? Actions.Buttonpage({ user: data })
          : () => console.log("err");
      })
      .catch(err => console.log(err));
  };

  return (
    <ImageBackground
      style={{ height: height, width: width }}
      source={SigninBackGround}
      resizeMode="stretch"
    >
      <Cloud start={{ x: width, y: 20 }} end={{ x: -150, y: 20 }} />
      <Cloud
        start={{ x: -150, y: (height * 30) / 100 }}
        end={{ x: width, y: (height * 30) / 100 }}
      />
      <View style={styles.container}>
        {isHidden ? (
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              textContentType="emailAddress"
              placeholderTextColor="grey"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        ) : null}
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            textContentType="password"
            placeholder="Password"
            placeholderTextColor="grey"
            value={password}
            onChangeText={text => setPassword(text)}
            onTouchStart={() => {
              setIsHidden(false);
              let container = {
                height: (height * 50) / 100,
                width: width,
                marginTop: (height * 50) / 100 - 80
              };
              styles.container = container;
            }}
            onEndEditing={() => {
              setIsHidden(true);
              let container = {
                height: (height * 50) / 100,
                width: width,
                marginTop: (height * 55) / 100 - 80
              };
              styles.container = container;
            }}
          />
        </View>
        <View style={styles.containerButtons}>
          <View style={styles.buttonContainer}>
            <View style={styles.containerButton}>
              <Button color="#F7AE21" onPress={onSubmit} title="Sign in" />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.containerButton}>
              <Button
                color="#F7AE21"
                onPress={() => Actions.Signup({ color: "#008D78" })}
                title="Got to sing up "
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: (height * 50) / 100,
    width: width,
    marginTop: (height * 55) / 100 - 80
  },
  containerInput: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    textAlign: "center",
    borderRadius: 50,
    backgroundColor: "#F7AE21",
    height: 50,
    width: (width * 80) / 100,
    marginTop: 10
  },
  containerButtons: {
    justifyContent: "center",
    alignItems: "center"
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    width: (width * 60) / 100,
    marginTop: 10
  }
});
