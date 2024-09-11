import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OnBoardingScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>Get Starting Learning With MK</Text>
        <Text style={styles.mainSubDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          voluptas fugit in mollitia corrupti velit blanditiis accusamus rerum
          vitae reiciendis. Nihil expedita rerum ullam illo quis numquam laborum
          aut nobis.
        </Text>
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.btn}
            onPress={() => router.navigate("/(routes)/intro")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  mainTitle: {
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    color: "red",
    marginBottom: 10,
  },
  mainSubDesc: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
  btnContainer: {
    alignItems: "center",
  },
  btn: {
    marginTop: 100,
    width: "100%",
    backgroundColor: "red",
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
});
