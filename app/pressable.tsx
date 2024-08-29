import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { Image, Pressable, Text } from "react-native";

const PressablePage = () => {
  return (
    <LayoutComponent>
      <Text>Pressable Page</Text>
      <Pressable
        onPress={() => console.log("I am Pressable Event")}
        style={{ marginTop: 20 }}
      >
        <Text>Click me</Text>
      </Pressable>
      <Pressable
        onPress={() => console.log("I am Pressable Event")}
        style={{ marginTop: 20 }}
      >
        <Text>Click me With Image</Text>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: 150, height: 150 }}
        />
      </Pressable>
    </LayoutComponent>
  );
};

export default PressablePage;
