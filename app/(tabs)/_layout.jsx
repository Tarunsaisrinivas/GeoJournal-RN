import { useColorScheme } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isDark ? "#0f172a" : "#ffffff", 
          borderTopColor: isDark ? "#1e293b" : "#e5e7eb", // dark: slate-800, light: gray-200
        },
        tabBarActiveTintColor: isDark ? "#ffffff" : "#000000",
        tabBarInactiveTintColor: isDark ? "#94a3b8" : "#6b7280", // dark: slate-400, light: gray-500
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="upload" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
