import React, { useState } from "react";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Actions } from "react-native-router-flux";
import {
  Alert,
  StyleSheet,
  View,
  Button,
  Dimensions,
  TextInput,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
let height = Dimensions.get("screen").height;
let width = Dimensions.get("screen").width;
export default Signup = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phonNumber, setPhonNumber] = useState("");
  const [location, setLocation] = useState("");
  const [pickedLocation, setPickedLocation] = useState();

  const locationPicker = async () => {
    const verifyPermissions = async () => {
      const result = await Permissions.askAsync(Permissions.LOCATION);
      if (result.status !== "granted") {
        Alert.alert(
          "Insufficient permissions!",
          "You need to grant location permissions to use this app.",
          [{ text: "Okay" }]
        );
        return false;
      }
      return true;
    };

    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });

      let stmt = `https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`;
      console.log(stmt);
      setLocation(stmt);
    } catch (err) {
      Alert.alert("Could not fetch location!", "Please try again later", [
        { text: "Okay" }
      ]);
    }
  };
  const openWhatsapp = () => {
    const m = Linking.openURL("whatsapp://send?text=hello&phone=0096176983147");
  };
  const styles = StyleSheet.create({
    container: {
      height,
      width,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.color
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
      alignItems: "center",
      marginTop: 10
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

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
            placeholder="Name"
            textContentType="name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            textContentType="emailAddress"
            placeholder="Email"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            textContentType="password"
            placeholder="Password"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            style={styles.input}
            textContentType="password"
            placeholder="Confirm Password"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.containerInput}>
          <TextInput
            value={phonNumber}
            onChangeText={text => setPhonNumber(text)}
            style={styles.input}
            textContentType="telephoneNumber"
            placeholder="Phone Number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.containerButtons}>
          <View style={styles.containerButton}>
            <Button
              color="#F7AE21"
              title="Add your location"
              onPress={locationPicker}
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              color="#F7AE21"
              title="Create Account"
              // onPress={createAccount}
            />
          </View>
          <View style={styles.containerButton}>
            <Button
              color="#F7AE21"
              onPress={openWhatsapp}
              title="Already registerd"
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
