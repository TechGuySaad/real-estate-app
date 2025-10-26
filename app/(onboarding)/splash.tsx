import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, View } from "react-native";

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(onboarding)/welcome");
    }, 4000);
  }, []);

  return (
    <View className="h-full flex flex-col items-center justify-center">
      <Image
        width={20}
        height={20}
        source={require("../../assets/icons/splash-icon.png")}
      />
    </View>
  );
};

export default Splash;
