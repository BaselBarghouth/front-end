import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Modal from "./Modal";
import Singup from "./Signup";
import { Text } from "react-native-elements";
let { height, width } = Dimensions.get("screen");
const Menu = props => {
  const styles = StyleSheet.create({
    container: {
      marginTop: height - 410
    },
    box: {
      borderTopLeftRadius: 120,
      borderTopRightRadius: 120
    },
    box2: {
      position: "relative",
      top: -60,

      borderTopLeftRadius: 120,
      borderTopRightRadius: 120
    },
    box3: {
      position: "relative",
      top: -120,

      borderTopLeftRadius: 120,
      borderTopRightRadius: 120
    },
    box4: {
      position: "relative",
      top: -180,

      borderTopLeftRadius: 120,
      borderTopRightRadius: 120
    },
    box5: {
      position: "relative",
      top: -240,

      borderTopLeftRadius: 120,
      borderTopRightRadius: 120
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Modal title="My Account" color="#008D78" arrowUp={130} arrow={50}>
          <Singup color="#008D78" arrow={150} />
        </Modal>
      </View>
      <View style={styles.box2}>
        <Modal title="About Us" color="#F7AE21" arrowUp={130} arrow={50}>
          <View
            style={{
              backgroundColor: "#008D78",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>
              Recycle Beirut is a social and environmental enterprise that works
              to create jobs for underprivileged people including Lebanese in
              the environmental sector. We serve the greater Beirut area by
              picking up recyclables from homes, businesses, and organizations.
              We then transfer them to our warehouse, sort and pack them, and
              send them to factories to be re-manufactured into new materials. 
                       Recycle Beirut is considered one of the leading social
              initiatives in the Middle East and was awarded the first prize at
              the Massachusetts Institute of Technology (MIT) Enterprise Forum
              “Innovate for Refugee” Competition in Jordan in 2016. Your
              sponsorship of our project would contribute to our core mission of
              sustainability, social stability, and economic development. Unlike
              most NGOs and social enterprises, we are not funded by the
              government or any local or international organizations.
            </Text>
          </View>
        </Modal>
      </View>
      <View style={styles.box3}>
        <Modal title="Message Us" color="#008D78" arrowUp={130} arrow={50}>
          <Singup color="#008D78" arrow={150} />
        </Modal>
      </View>
      <View style={styles.box4}>
        <Modal
          title="What do we take?"
          color="#F7AE21"
          arrowUp={130}
          arrow={50}
        >
          <Singup color="#F7AE21" arrow={150} />
        </Modal>
      </View>
      <View style={styles.box5}>
        <Modal title="About ArtSpot" color="#008D78" arrowUp={130} arrow={50}>
          <Singup color="#008D78" arrow={150} />
        </Modal>
      </View>
    </View>
  );
};

export default Menu;
