import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"index"} />
      <Stack.Screen name={"(routes)/onBoarding"} />
      <Stack.Screen name={"(routes)/intro"} />
    </Stack>
  );
};

export default RootLayout;

export const style = StyleSheet.create({
  mb2: {
    marginBottom: 20,
  },
});
