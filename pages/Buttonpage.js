import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  FlatList
} from "react-native";
import Menu from "./Menu";
import Help from "./Help";
export default function Buttonpage() {
  let width = Dimensions.get("window").width;
  let height = Dimensions.get("window").height;
  let data = [
    {
      title: <Menu />,
      id: 1
    },
    {
      title: <Text>Button page2</Text>,
      id: 2
    },
    {
      title: <Text>Button page3</Text>,
      id: 3
    }
  ];
  return (
    <FlatList
      pagingEnabled={true}
      data={data}
      horizontal={true}
      initialScrollIndex={1}
      getItemLayout={(data, index) => ({
        length: width,
        offset: width * index,
        index
      })}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View key={item.id} style={{ height: height, width: width }}>
          {item.title}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create();
