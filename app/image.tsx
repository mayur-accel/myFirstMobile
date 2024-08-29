import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { Image, Text } from "react-native";
import logo from "../assets/images/react-logo.png";

const ImagePage = () => {
  return (
    <LayoutComponent>
      <Text>ImagePage</Text>
      <Image source={logo} />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />
    </LayoutComponent>
  );
};

export default ImagePage;
