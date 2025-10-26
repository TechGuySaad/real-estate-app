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
        // tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
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
