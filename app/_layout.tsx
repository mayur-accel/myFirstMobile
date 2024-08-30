import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

export const PageArray = [
  {
    title: "About",
    link: "/about",
  },
  { link: "/image", title: "Image" },
  { link: "/full-image", title: "Full Image" },
  { link: "/scroll", title: "Scroll" },
  { link: "/button", title: "Button" },
  { link: "/pressable", title: "Pressabel" },
  { link: "/modal", title: "Modal" },
  { link: "/status-bar", title: "Status Bar" },
  { link: "/loader", title: "Loader" },
  { link: "/alert", title: "Alert" },
  { link: "/style-sheet", title: "Style Sheet" },
  { link: "/form", title: "Form" },
  { link: "/pokemon", title: "Pokemon" },
  { link: "/login", title: "Login" },
  { link: "/galary", title: "Galary" },
  { link: "/api", title: "api" },
];

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => {
          return (
            <Text
              style={{
                paddingRight: 20,
                color: "white",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Menu
            </Text>
          );
        },
      }}
    >
      {PageArray.map((item, i) => (
        <Stack.Screen
          key={i + "link"}
          options={{ title: item.title }}
          name={item.link.split("/")[1]}
        />
      ))}
    </Stack>
  );
};

export default RootLayout;

export const style = StyleSheet.create({
  mb2: {
    marginBottom: 20,
  },
});
