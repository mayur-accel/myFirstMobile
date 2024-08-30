import LayoutComponent from "@/components/LayoutComponent";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    Alert.alert(`${email} login successfull`);
    setEmail("");
    setPassword("");
  };
  return (
    <LayoutComponent>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 8,
            width: "90%",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}>
            Login Form
          </Text>
          <Text>Email</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 5,
              marginBottom: 10,
            }}
            placeholder="Enter your email"
            onChangeText={setEmail}
            value={email}
          />
          <Text>Password</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 5,
              marginBottom: 20,
            }}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </View>
    </LayoutComponent>
  );
};

export default LoginPage;
