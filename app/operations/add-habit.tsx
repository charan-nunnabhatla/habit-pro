import { habitType } from "../atoms";

export const addHabit = (
  setHabitData: React.Dispatch<React.SetStateAction<habitType[]>>,
  event: React.FormEvent
) => {
  let validTitle = false;

  event.preventDefault();
  const title = document.getElementById("title-input") as HTMLInputElement;
  const time = document.getElementById("time-input") as HTMLInputElement;
  const date = document.getElementById("date-input") as HTMLInputElement;

  if (title.value) validTitle = true;

  const newhabit: habitType = {
    id: crypto.randomUUID(),
    title: title.value,
    time: time.value,
    date: date.value,
    completed: false,
  };
  if (validTitle) setHabitData((prev: habitType[]) => prev.concat(newhabit));
};
