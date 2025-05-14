import React from "react";
import "../global.css";
import { Stack } from "expo-router";
const RootLayout = () => {
  return <Stack screenOptions={{ headerShown: false }} >

    <Stack.Screen name="login" />
    <Stack.Screen name="signup" />
    <Stack.Screen name="(tabs)" />
  </Stack>;

};

export default RootLayout;
