import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { Button, Text } from "react-native";

const ButtonPage = () => {
  return (
    <LayoutComponent>
      <Text>Button Page</Text>
      <Button
        color={"red"}
        title="Buton"
        onPress={() => console.log("Red Button Click event")}
      />
      <Text></Text>
      <Button title="Buton" onPress={() => console.log("Button Click event")} />
    </LayoutComponent>
  );
};

export default ButtonPage;
