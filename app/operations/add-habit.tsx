import dayjs from "dayjs";
import { habitType } from "../atoms";
import closeModal from "./modal-close-button";
import { setDefaultValues } from "../components/add-new-habit-button";

function generateUUID() {
  return "taskxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const addHabit = (
  setHabitData: React.Dispatch<React.SetStateAction<habitType[]>>,
  { root = false }: { root: boolean }
) => {
  const uuid = generateUUID();
  console.log(uuid);

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
  const notes = document.getElementById("notes-input") as HTMLInputElement;

  if (title.value) validTitle = true;

  const newhabit: habitType = {
    id: uuid,
    title: title.value,
    time: time.value,
    date: date.value,
    completed: false,
    createdDate: dayjs(),
    notes: notes.value,
  };
  if (validTitle) setHabitData((prev: habitType[]) => prev.concat(newhabit));

  closeModal("new-habit-dialog");
};
