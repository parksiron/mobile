import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MainScreen from "./screens/main.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStacNavigator } from "@react-navigation/stack";

const stack = createStacNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
