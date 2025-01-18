import DateTimePickers from "./date-time-picker";
import ModalActionButtons from "./modal-action-buttons";

export default function NewHabitModalForm() {
  return (
    // todo: change the form to div element
    // ! dont use <form> tag as it appends the data 2 times
    // * event close triggers the onSubmit action
    <div className="relative flex flex-col items-center justify-start flex-grow h-full p-2 ">
      <span className="p-3 font-bold text-white">Add New Task</span>
      <div className="flex flex-col items-start w-full gap-2">
        <label className="text-lg font-bold text-white" htmlFor="title-input">
          Name
        </label>
        <input
          id="title-input"
          className="w-full p-1 font-bold text-gray-600 capitalize bg-transparent bg-white rounded outline-none placeholder:text-gray-500 focus:ring focus:ring-blue-500"
          placeholder="Enter A Habit Name"
          type="text"
        />
      </div>
      <DateTimePickers />
      <div className="w-full">
        <textarea
          name="notes"
          id="notes-input"
          placeholder="Add Notes"
          className="w-full rounded placeholder:text-gray-500 font-bold p-3 outline-none focus:ring focus:ring-blue-500 min-h-40"></textarea>
      </div>
      <div className="absolute bottom-0 w-full">
        <ModalActionButtons
          closeModalID="new-habit-dialog"
          root={true}
          addName="Add"
          closeName="Close"
        />
      </div>
    </div>
  );
}
