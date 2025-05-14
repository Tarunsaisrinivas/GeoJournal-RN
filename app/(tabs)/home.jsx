import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Force reload to ensure profile updates are reflected
        await user.reload();
        setUserName(user.displayName || "User");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#1E1E2F]">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-2xl text-center text-gray-800 dark:text-white">
          Welcome, {userName}!{"\n\n"}
         
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
