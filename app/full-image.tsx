import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { ImageBackground, Text } from "react-native";

const FullImage = () => {
  return (
    <LayoutComponent>
      <ImageBackground
        source={{ uri: "https://picsum.photos/900" }}
        style={{ flex: 1, padding: 10 }}
      >
        <Text>Power By Mayur</Text>
      </ImageBackground>
    </LayoutComponent>
  );
};

export default FullImage;
