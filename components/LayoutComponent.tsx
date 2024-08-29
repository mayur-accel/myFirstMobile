import React from "react";
import { View } from "react-native";

const LayoutComponent = ({ children }: any) => {
  return (
    <View
      style={{
        backgroundColor: "skyblue",
        flex: 1,
        padding: 10,
      }}
    >
      {children}
    </View>
  );
};

export default LayoutComponent;
