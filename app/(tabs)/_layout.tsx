import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "",
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "",
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
        }}
      />
    </Tabs>
  );
}
