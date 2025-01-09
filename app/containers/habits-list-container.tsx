"use client";

import { IoMdAddCircleOutline } from "react-icons/io";
import NewHabitModal from "../modals/new_habit_modal";

export default function HabitsListContainer() {
  return (
    <div className="relative w-full p-3 bg-orange-300 rounded size-5 h-[45vh] md:w-[45vw] md:h-full">
      <NewHabitModal />
      lksdjf
      <button
      id="add-new-habit"
        onClick={() => {
          const dialog = document.getElementById(
            "new-habit-dialog"
          ) as HTMLDialogElement;
          dialog!.showModal();
        }}
        title="Add New Habit"
        className="absolute z-10 flex items-center justify-center text-center transition-all duration-150 bg-red-800 border-none rounded-full cursor-pointer bottom-2 right-2 group size-12 hover:size-11">
        <span className="text-xl font-bold text-white transition-all duration-150">
          <IoMdAddCircleOutline />
        </span>
      </button>
    </div>
  );
}
