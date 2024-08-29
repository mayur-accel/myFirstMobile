import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { ActivityIndicator, Text } from "react-native";

const LoaderPage = () => {
  return (
    <LayoutComponent>
      <Text style={{ marginBottom: 20 }}>Loader Page</Text>
      <ActivityIndicator />
      <ActivityIndicator
        size={"large"}
        style={{ marginBottom: 20 }}
        color={"green"}
      />
      <ActivityIndicator
        style={{ marginBottom: 20 }}
        size={"small"}
        color={"red"}
      />
      <ActivityIndicator
        size={"large"}
        style={{ marginBottom: 20 }}
        color={"blue"}
        animating={false}
      />
    </LayoutComponent>
  );
};

export default LoaderPage;
