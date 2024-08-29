import { Stack } from "expo-router";
import React from "react";

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
