import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack
      initialRouteName="(onboarding)/splash.tsx"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
