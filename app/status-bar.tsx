import LayoutComponent from "@/components/LayoutComponent";
import React, { useState } from "react";
import { Button, StatusBar, StatusBarStyle, Text } from "react-native";

const StatusBarPage = () => {
  const [state, setState] = useState<{
    color: string;
    textColor: StatusBarStyle;
    hidden: boolean;
  }>({
    color: "red",
    textColor: "default",
    hidden: true,
  });

  const handleHidden = () => {
    setState((pre) => {
      return {
        ...pre,
        hidden: !pre.hidden,
      };
    });
  };

  const handleColor = () => {
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    setState((pre: any) => {
      return {
        ...pre,
        color: getRandomColor(),
      };
    });
  };

  const handleTextColor = () => {
    const getRandomValue = () => Math.floor(Math.random() * 2);
    const ar = [
      {
        color: "dark-content",
      },
      {
        color: "light-content",
      },
    ];

    setState((pre: any) => {
      return {
        ...pre,
        textColor: ar[getRandomValue()].color,
      };
    });
  };

  return (
    <LayoutComponent>
      <Text style={{ marginBottom: 20 }}>Status Bar Page</Text>
      <StatusBar
        backgroundColor={state.color}
        barStyle={state.textColor}
        hidden={state.hidden}
      />
      <Button title="Hidden Status Bar" onPress={handleHidden} />
      <Text></Text>
      <Button title="Status Bar Text Color" onPress={handleTextColor} />
      <Text></Text>
      <Button title="Background Status Bar Color" onPress={handleColor} />
    </LayoutComponent>
  );
};

export default StatusBarPage;
