import { Switch, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { useRouter } from "expo-router";

const index = () => {
  const router= useRouter();
  const {colorScheme,toggleColorScheme} = useColorScheme();
  return (
    <View className='flex-1 justify-center items-center bg-[#F9FAFB] dark:bg-[#1E1E2F]'>
      <Switch value={colorScheme==="dark"} onChange={toggleColorScheme}  className="text-green-600" />
      <Text className="text-2xl text-black dark:text-white">index</Text>
      <TouchableOpacity onPress={() => {router.push('/signup')}}>
        <Text className="text-black dark:text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;


