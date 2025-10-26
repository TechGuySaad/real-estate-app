import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack
      initialRouteName="(tabs)"
      // initialRouteName="(onboarding)/splash"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
