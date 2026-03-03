import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <Stack screenOptions={{
          headerShown: false,
        }} />
      </View>
    </SafeAreaProvider>
  );
}