import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity onPress={() => router.push('/Signup')}>
        <Text>signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
