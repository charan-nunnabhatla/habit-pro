import { habitType } from "../atoms";

export default function markHabitComplete(
  setHabitData: React.Dispatch<React.SetStateAction<habitType[]>>,
  id: string
) {
  setHabitData((prev) =>
    prev.map((habit, _) => {
      return habit.id === id
        ? { ...habit, completed: !habit.completed }
        : habit;
    })
  );
}
