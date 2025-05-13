import { Switch, Text, View } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";

const index = () => {
  const {colorScheme,toggleColorScheme} = useColorScheme();
  return (
    <View className='flex-1 justify-center items-center bg-white dark:bg-neutral-900'>
      <Switch value={colorScheme==="dark"} onChange={toggleColorScheme}  className="text-green-600" />
      <Text className="text-2xl text-black dark:text-white">index</Text>
    </View>
  );
};

export default index;


