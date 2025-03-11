import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0c0c0c" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
