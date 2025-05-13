import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="post" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;

