import { useEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const GlobalStyle = () => {
  const backgroundPosition = useSharedValue(0);

  useEffect(() => {
    backgroundPosition.value = withRepeat(
      withTiming(100, { duration: 20000 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: backgroundPosition.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, animatedStyle]}>
        <LinearGradient
          colors={["#111111", "#2c2c2c", "#111111"]}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
      <StatusBar barStyle="light-content" backgroundColor="#0c0c0c" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0c0c",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default GlobalStyle;
