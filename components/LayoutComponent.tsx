import React from "react";
import { StyleSheet, View } from "react-native";

const LayoutComponent = ({ children }: any) => {
  return <View style={style.containver}>{children}</View>;
};

export default LayoutComponent;

const style = StyleSheet.create({
  containver: {
    backgroundColor: "skyblue",
    flex: 1,
    padding: 10,
  },
});
