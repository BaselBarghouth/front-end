import React, { useState } from "react";
import {
  Modal,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import arrowDown from "../assets/baseline_keyboard_arrow_down_black_18dp.png";
import arrowUp from "../assets/baseline_keyboard_arrow_up_black_18dp.png";
import { Text } from "react-native-elements";
let { width, height } = Dimensions.get("screen");
export default ModalExample = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      alignItems: "center"
    },
    arrowUp: {
      height: props.arrowUp,
      backgroundColor: props.color,
      width: 0.9 * width,
      borderTopRightRadius: 90,
      borderTopLeftRadius: 90,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    arrowDown: {
      height: props.arrow,
      backgroundColor: props.color,
      width,
      borderBottomLeftRadius: 90,
      borderBottomRightRadius: 90
    },
    text: {
      alignItems: "center",
      justifyContent: "space-around"
    }
  });
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.arrowUp}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          <Image resizeMode="stretch" source={arrowUp} />

          <Text>{props.title}</Text>
        </View>
      </TouchableHighlight>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.container}>
          {props.children}
          <TouchableHighlight
            style={styles.arrowDown}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.container}>
              <Text>Back to menu</Text>
              <Image source={arrowDown} />
            </View>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};
