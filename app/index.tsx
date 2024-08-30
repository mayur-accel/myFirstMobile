import LayoutComponent from "@/components/LayoutComponent";
import { Link } from "expo-router";
import { Button, ScrollView, StyleSheet, ToastAndroid } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { PageArray } from "./_layout";

const IndexPage = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  function showToast() {
    ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT);
  }

  return (
    <LayoutComponent>
      <ScrollView>
        {PageArray.map((item, i) => (
          <Link
            key={i + "linkcom"}
            //@ts-ignore
            href={String(item.link || "")}
            style={{ marginTop: 20 }}
          >
            Go to {item.title} Page
          </Link>
        ))}
        <Button title="Show Toast" onPress={showToast} />
        <Animated.View style={[styles.box, style]} />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </ScrollView>
    </LayoutComponent>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
});
