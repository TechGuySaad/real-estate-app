import { Link, router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const AuthHome = () => {
  const handleEmailLogin = () => {
    router.push("/(auth)/login");
  };

  const handleGoogleLogin = () => {
    router.push("/(auth)/login");
  };
  return (
    <View className=" h-full flex-col justify-end bg-gray-200">
      <View className=" h-1/4 rounded-t-3xl bg-white flex flex-col  items-center justify-between px-6 py-6">
        <Pressable
          onPress={handleEmailLogin}
          className="bg-[#0163E1] text-white w-full  rounded-xl "
        >
          <View className="flex-row items-center justify-center gap-2 p-4">
            <Image
              width={24}
              height={24}
              source={require("../../assets/icons/phone.png")}
            />
            <Text className=" text-white font-semibold">
              Continue With Email
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={handleGoogleLogin}
          className="w-full rounded-xl border border-gray-100"
        >
          <View className="flex-row items-center justify-center gap-2 p-4">
            <Image
              source={require("../../assets/icons/google.png")}
              className="w-6 h-6"
              resizeMode="contain"
            />
            <Text className="text-black font-semibold">
              Continue with Google
            </Text>
          </View>
        </Pressable>

        <Text>
          {"Don't have an account?"}{" "}
          <Link href="/(auth)/signup" className="text-[#0163E1]">
            Register
          </Link>{" "}
        </Text>
      </View>
    </View>
  );
};

export default AuthHome;
