import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Switch,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const login = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!auth) {
      console.error("Firebase auth not initialized");
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Logged in successfully!");
      router.push("/(tabs)/home"); // change this route based on your app flow
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Failed", error.message || "Invalid credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white dark:bg-[#1E1E2F] px-6 py-40">
      <Image
        source={require("../assets/geoicon.png")}
        className="w-full h-48 mb-6"
        resizeMode="contain"
      />

      <Text className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Login to your Account
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#A1A1AA"
        className="w-full bg-gray-100 dark:bg-[#333346] text-gray-800 dark:text-white rounded-xl px-4 py-3 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#A1A1AA"
        className="w-full bg-gray-100 dark:bg-[#333346] text-gray-800 dark:text-white rounded-xl px-4 py-3 mb-6"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="w-full bg-[#C38FFF] rounded-xl py-3 mb-4"
      >
        <Text className="text-white text-center text-base font-semibold">
          Log In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push("/signup");
        }}
      >
        <Text className="text-center text-gray-500 dark:text-gray-300">
          Don't have an account?{" "}
          <Text className="text-[#C38FFF] font-semibold">Sign Up</Text>
        </Text>
      </TouchableOpacity>

      <View className="items-center mt-6">
        <Switch
          value={colorScheme === "dark"}
          onValueChange={toggleColorScheme}
        />
        <Text className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {colorScheme === "dark" ? "Dark Mode" : "Light Mode"}
        </Text>
      </View>
    </ScrollView>
  );
};

export default login;

const styles = StyleSheet.create({});
