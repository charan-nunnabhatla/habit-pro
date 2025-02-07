import { TaskType } from "../atoms";

export default function deleteHabit(
  setHabitData: React.Dispatch<React.SetStateAction<TaskType[]>>,
  id: string
) {
  setHabitData((prev: TaskType[]) => {
    // console.log(prev);
    return prev.filter((habit) => {
      // console.log("Habit");
      // console.log(habit);
      return id !== habit.id;
    });
  });
}
