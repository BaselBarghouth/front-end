import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
let { width } = Dimensions.get("screen");
import { Router, Scene } from "react-native-router-flux";
import Buttonpage from "./pages/Buttonpage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Order from "./pages/Order.js";
import Payment from "./pages/Payment";
import Help from "./pages/Help";
import Drag from "./pages/Drag";
export default function App() {
  const [login, setLogin] = useState(true);
  return (
    // <Router>
    //   <Scene key="root">
    //     <Scene
    //       key="Signin"
    //       hideNavBar={true}
    //       initial={login}
    //       component={Signin}
    //     />
    //     <Scene
    //       key="Signup"
    //       hideNavBar={true}
    //       initial={false}
    //       component={Signup}
    //     />
    //     <Scene
    //       key="Buttonpage"
    //       hideNavBar={true}
    //       initial={!login}
    //       component={Buttonpage}
    //     />
    //   </Scene>
    // </Router>
    // <View>
    //   <Test color="#008D78" arrowUp={120} arrow={50}>
    //     <Signup color="#008D78" arrow={50} />
    //   </Test>
    //   <Test color="#F7AE21" arrowUp={120} arrow={50}>
    //     <Signup color="#F7AE21" arrow={50} />
    //   </Test>
    // </View>
    // <View style={{marginTop:60}} >
    //   <Drag color="#F7AE21" />
    //   <Drag color="#008D78" />
    // </View>
    <View>
      <Drag />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
