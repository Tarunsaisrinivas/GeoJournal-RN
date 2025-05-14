import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import { useColorScheme } from "nativewind";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const signup = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Verify auth is initialized
    if (!auth) {
      console.error("Firebase auth is not initialized");
    }
  }, []);

  const handleSignUp = async () => {
    if (!auth) {
      Alert.alert("Error", "Authentication service is not available. Please try again later.");
      return;
    }

    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await updateProfile(user, { displayName: name });

      Alert.alert("Success", "Account created successfully!");
      router.push("/login");
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert("Error", error.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1  bg-white dark:bg-[#1E1E2F] px-6 py-40">
      <Image
        source={require("../assets/geoicon.png")}
        className="w-full h-48 mb-6 "
        resizeMode="contain"
      />

      <Text className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Create Account
      </Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#A1A1AA"
        className="w-full bg-gray-100 dark:bg-[#333346] text-gray-800 dark:text-white rounded-xl px-4 py-3 mb-4"
      />

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
        className="w-full bg-gray-100 dark:bg-[#333346] text-gray-800 dark:text-white rounded-xl px-4 py-3 mb-4"
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="#A1A1AA"
        className="w-full bg-gray-100 dark:bg-[#333346] text-gray-800 dark:text-white rounded-xl px-4 py-3 mb-6"
      />

      <TouchableOpacity
        onPress={handleSignUp}
        className="w-full bg-[#C38FFF] rounded-xl py-3 mb-4"
      >
        <Text className="text-white text-center text-base font-semibold">
          Sign Up
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push("login");
        }}
      >
        <Text className="text-center text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <Text className="text-[#C38FFF] font-semibold">Login</Text>
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

export default signup;

const styles = StyleSheet.create({});
