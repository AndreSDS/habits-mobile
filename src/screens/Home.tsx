import { View, Text } from "react-native";
import { HabitDay, Header, DaysGrid } from "../components";
import { DAY_SIZE } from "../components/HabitDay/HabitDay";

const weeDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export const Home = () => {
  return (
    <View className="w-full flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weeDays.map((weekDay, index) => (
          <Text
          style={{
            width: DAY_SIZE,
            height: DAY_SIZE
          }}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            key={`${weekDay}-${index}`}
          >
            {weekDay}
          </Text>
        ))}
      </View>


      <DaysGrid />
    </View>
  );
};
