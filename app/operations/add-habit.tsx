import dayjs from "dayjs";
import { habitType } from "../atoms";
import closeModal from "./modal-close-button";
import { setDefaultValues } from "../components/add-new-habit-button";

export const addHabit = (
  setHabitData: React.Dispatch<React.SetStateAction<habitType[]>>,
  { root = false }: { root: boolean }
) => {
  let validTitle = false;

  if (!root) {
    closeModal("habit-lookout-modal");

    setDefaultValues();

    const dialog = document.getElementById(
      "new-habit-dialog"
    ) as HTMLDialogElement;
    dialog!.showModal();
    return;
  }

  // event.preventDefault();
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
    createdDate: dayjs(),
  };
  if (validTitle) setHabitData((prev: habitType[]) => prev.concat(newhabit));

  closeModal("new-habit-dialog");
};
