import dayjs from "dayjs";
import { RiAddLargeLine } from "react-icons/ri";

export const setDefaultValues = () => {
  const input = document.getElementById("title-input") as HTMLInputElement;
  input.value = "";

  const date = document.getElementById("date-input") as HTMLInputElement;
  date.defaultValue = dayjs().format("YYYY-MM-DD");

  const time = document.getElementById("time-input") as HTMLInputElement;
  time.defaultValue = dayjs().format("HH:mm");
};

export default function AddNewHabitButton() {
  const handleClick = () => {
    const dialog = document.getElementById(
      "new-habit-dialog"
    ) as HTMLDialogElement;
    dialog!.showModal();

    setDefaultValues();
  };

  return (
    <button
      id="add-new-habit"
      onClick={handleClick}
      title="Add New Habit"
      className="fixed bottom-0 right-0 flex items-center justify-center m-4 text-center transition-all duration-150 bg-red-800 border-none rounded-full cursor-pointer group hover:bg-red-600 size-12 ">
      <span className="text-2xl font-extrabold text-white transition-all duration-300 group-hover:rotate-90">
        <RiAddLargeLine />
      </span>
    </button>
  );
}
