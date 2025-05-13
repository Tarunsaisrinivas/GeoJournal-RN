import {  StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  return (
    <SafeAreaView >
      <View className ="bg-blue-800 dark:bg-black">
        <Text className="text-black dark:text-white">home</Text>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
