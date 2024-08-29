import LayoutComponent from "@/components/LayoutComponent";
import React from "react";
import { Alert, Button, Text } from "react-native";

const AlertPage = () => {
  return (
    <LayoutComponent>
      <Text style={{ marginBottom: 20 }}>Modal Page</Text>
      <Button onPress={() => Alert.alert("Hello Alert Box")} title="Alert 1" />
      <Text></Text>
      <Button
        onPress={() => Alert.alert("Hello Alert Box", "Sub Tilte")}
        title="Alert 2"
      />
      <Text></Text>
      <Button
        onPress={() =>
          Alert.alert("Hello Alert Box", "Sub Title", [
            {
              text: "Cancel",
              onPress: () =>
                console.log("I am alert Cancel Button console.log"),
            },
            {
              text: "OK",
              onPress: () => console.log("I am alert OK Button console.log"),
            },
          ])
        }
        title="Alert 3"
      />
    </LayoutComponent>
  );
};

export default AlertPage;
