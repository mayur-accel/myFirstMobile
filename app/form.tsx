import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { style } from "./_layout";

const FormPage = () => {
  return (
    <LayoutComponent>
      <Text style={style.mb2}>Form Page</Text>
      <Text style={style.mb2}>Text Input</Text>
      <TextInput style={formStyle.input} />
      <Text style={style.mb2}>Text Aera</Text>
      <TextInput style={formStyle.inputAear} multiline />
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Status</Text>
        <Switch />
      </View>
      <Button title="Submit" />
    </LayoutComponent>
  );
};

export default FormPage;

const formStyle = StyleSheet.create({
  input: {
    height: 40,
    padding: 20,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5,
  },
  inputAear: {
    height: 100,
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 20,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5,
  },
});
