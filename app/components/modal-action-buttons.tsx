import { useSetAtom } from "jotai";
import { addHabit } from "../operations/add-habit";
import { habitDataAtom } from "../atoms";
import closeModal from "../operations/modal-close-button";

export default function ModalActionButtons() {
  const setHabitData = useSetAtom(habitDataAtom);
  return (
    <div
      id="action-buttons"
      className="flex absolute w-full right-0 bottom-0 flex-row items-center justify-center gap-3 p-3 ml-auto ">
      <button
        className=" w-full py-2 px-3 rounded bg-emerald-400 font-bold text-white text-xl hover:bg-emerald-500 transition-all duration-150"
        onClick={() => addHabit(setHabitData)}>
        Done
      </button>
      <button
        className=" w-full py-2 px-3 rounded bg-red-400 font-bold text-white text-xl hover:bg-red-500 transition-all duration-150"
        onClick={closeModal}>
        Close
      </button>
    </div>
  );
}
