import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StyleSheetPage = () => {
  return (
    <LayoutComponent>
      <Text style={{ marginBottom: 20 }}>Style Sheet Page</Text>
      <View style={[style.bgBlue, style.box]}>
        <Text>Box 1</Text>
      </View>
      <View style={[style.box, style.bgGreen]}>
        <Text>Box 2</Text>
      </View>
      <View style={[style.box, style.bgBlue]}>
        <Text>Box 3</Text>
      </View>
    </LayoutComponent>
  );
};

export default StyleSheetPage;

const style = StyleSheet.create({
  box: {
    padding: 100,
    backgroundColor: "red",
    borderRadius: 10,
    marginBottom: 10,
    color: "white",
  },
  bgBlue: {
    backgroundColor: "blue",
  },
  bgGreen: {
    backgroundColor: "green",
  },
});
