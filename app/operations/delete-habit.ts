import { habitType } from "../atoms";

export default function deleteHabit(
  setHabitData: React.Dispatch<React.SetStateAction<habitType[]>>,
  id: string
) {
  setHabitData((prev: habitType[]) => {
    console.log(prev);
    return prev.filter((habit) => {
      console.log("Habit");
      console.log(habit);
      return id !== habit.id;
    });
  });
}
