import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View >
        <Text>login</Text>
        <TouchableOpacity onPress={() =>{router.push('Signup')}}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
