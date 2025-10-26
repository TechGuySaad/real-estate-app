import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const welcome = () => {
  const handleContinue = () => {
    router.push("/(auth)/auth-home");
  };
  return (
    <View className=" h-full flex-col justify-end bg-gray-200">
      <View className=" h-1/3 rounded-t-3xl bg-white flex flex-col gap-y-24 items-center justify-center px-6">
        <View className="gap-y-4">
          <Text className="text-3xl font-semibold text-center">
            Discover Dream House from Smartphone
          </Text>
          <Text className="text-gray-400 text-center text-sm">
            Searching your best house, discover millions of house and choose a
            house that suits for you.
          </Text>
        </View>
        <Pressable
          onPress={handleContinue}
          className="bg-[#0163E1] text-white w-full p-4 rounded-xl"
        >
          <Text className="w-20 mx-auto text-white font-semibold">
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default welcome;
