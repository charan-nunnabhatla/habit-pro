import { MouseEventHandler } from "react";
import { habitType } from "../atoms";

export default function markHabitComplete(
  setHabitData: React.Dispatch<React.SetStateAction<habitType[]>>,
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
