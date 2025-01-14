import { useSetAtom } from "jotai";
import { addHabit } from "../operations/add-habit";
import { habitDataAtom } from "../atoms";
import closeModal from "../operations/modal-close-button";

export default function ModalActionButtons({
  closeModalID,
  root,
  closeName,
  addName,
}: {
  closeModalID: string;
  root: boolean;
  closeName: string;
  addName: string;
}) {
  const setHabitData = useSetAtom(habitDataAtom);
  return (
    <div id="action-buttons" className="flex w-full gap-3 p-3 ml-auto ">
      <button
        className="w-full px-3 py-2 text-xl font-bold text-white transition-all duration-150 rounded bg-emerald-400 hover:bg-emerald-500"
        onClick={() => addHabit(setHabitData, { root })}>
        {addName}
      </button>
      <button
        className="w-full px-3 py-2 text-xl font-bold text-white transition-all duration-150 bg-red-400 rounded hover:bg-red-500"
        onClick={() => closeModal(closeModalID)}>
        {closeName}
      </button>
    </div>
  );
}
