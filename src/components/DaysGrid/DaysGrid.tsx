import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { generateDaysFromYearBegining } from "../../utils/generate-range-between-days";
import { DAY_SIZE, HabitDay } from "../HabitDay/HabitDay";

const daysFromYearStart = generateDaysFromYearBegining();
const minimunSummaryDaysSize = 18 * 5;
const amountOfDaysToFill = minimunSummaryDaysSize - daysFromYearStart.length;

export const DaysGrid = () => {
  const { navigate } = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <View className="flex-row flex-wrap">
        {daysFromYearStart.map((day) => (
          <HabitDay
            onPress={() =>
              navigate("habit", {
                date: day.toISOString(),
              })
            }
            key={day.toISOString()}
          />
        ))}

        {amountOfDaysToFill > 0
          ? Array.from({ length: amountOfDaysToFill }).map((_, index) => (
              <View
                key={index.toString()}
                style={{
                  width: DAY_SIZE,
                  height: DAY_SIZE,
                }}
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
              />
            ))
          : null}
      </View>
    </ScrollView>
  );
};
