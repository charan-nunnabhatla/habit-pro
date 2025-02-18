import { TaskType } from "../atoms";

export default function markHabitComplete(
  setHabitData: React.Dispatch<React.SetStateAction<TaskType[]>>,
  id: string,
  event?: React.MouseEvent<HTMLDivElement>
) {
  if (event?.target instanceof HTMLDivElement || event === undefined)
    setHabitData((prev) =>
      prev.map((habit) => {
        return habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit;
      })
    );
}
