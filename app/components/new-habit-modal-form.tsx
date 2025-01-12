import DateTimePickers from "./date-time-picker";
import ModalActionButtons from "./modal-action-buttons";

export default function NewHabitModalForm() {
  return (
    // todo: change the form to div element
    // ! dont use <form> tag as it appends the data 2 times
    // * event close triggers the onSubmit action
    <div className="relative flex flex-col items-center justify-start flex-grow h-full p-2 ">
      <span className="text-white p-3 font-bold">Add New Task</span>
      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-white font-bold text-lg" htmlFor="title-input">
          Name
        </label>
        <input
          id="title-input"
          className="p-1 w-full font-bold text-black placeholder:text-gray-500 capitalize bg-transparent bg-white rounded outline-none"
          placeholder="Enter A Habit Name"
          type="text"
        />
      </div>
      <DateTimePickers />
      <ModalActionButtons />
    </div>
  );
}
