import LayoutComponent from "@/components/LayoutComponent";
import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((pre) => !pre);
  };
  return (
    <LayoutComponent>
      <Text style={{ marginBottom: 20 }}>Modal Page</Text>
      <Button onPress={handleToggle} title="Open Modal" />
      <Modal
        visible={isOpen}
        animationType="slide"
        onRequestClose={handleToggle}
      >
        <View
          style={{
            flex: 1,
            padding: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>I am Modal</Text>
          <Button title="Close" onPress={handleToggle} />
        </View>
      </Modal>
    </LayoutComponent>
  );
};

export default ModalPage;
