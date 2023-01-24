import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import colors from "tailwindcss/colors";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = Math.floor(
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5)
);

export const HabitDay = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{
        height: DAY_SIZE,
        width: DAY_SIZE,
      }}
    />
  );
};
