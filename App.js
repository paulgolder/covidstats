import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

import BaseNavigation from "./navigation/BaseNavigation";

export default function App() {
  return (
    <View style={[styles.container]}>
      <BaseNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    // marginTop: Platform.OS === "android" ? 25 : 0,
  },
});
