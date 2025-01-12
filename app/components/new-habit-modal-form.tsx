import DateTimePickers from "./date-time-picker";
import ModalActionButtons from "./modal-action-buttons";
import { habitDataAtom} from "../atoms";
import closeModal from "../operations/modal-close-button";
import { useSetAtom } from "jotai";
import { addHabit } from "../operations/add-habit";

export default function NewHabitModalForm() {
  const setHabitData = useSetAtom(habitDataAtom);

  return (
    // todo: change the form to div element
    // ! dont use <form> tag as it updates the data 2 times
    // * event close triggers the onSubmit action
    <form
      onSubmit={(e) => addHabit(setHabitData, e)}
      className="relative flex flex-col items-center justify-center flex-grow h-full p-2 border border-red-500"
      action="">
      <button
        className="absolute top-0 right-0 text-red-800 font-bold border p-1 rounded-[60%]"
        onClick={closeModal}>
        X
      </button>
      <label htmlFor="">New Habit</label>
      <input
        id="title-input"
        className="p-2 font-bold text-white capitalize bg-transparent border rounded outline-none w-fit"
        placeholder="Enter A Habit Name"
        type="text"
      />
      <DateTimePickers />
      <ModalActionButtons />
    </form>
  );
}
