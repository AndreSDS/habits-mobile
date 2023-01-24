import "./src/lib/dayjs";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components";
import { Home } from "./src/screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Inter_700Bold",
  },
});
