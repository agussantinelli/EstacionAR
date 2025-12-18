import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { APP_NAME } from "@estacionar/shared";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-3xl font-bold text-primary">
        Hola, {APP_NAME}
      </Text>
      <Text className="text-lg text-gray-500 mt-2">
        Arquitectura Limpia + NativeWind
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
