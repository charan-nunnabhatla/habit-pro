import { IoMdAddCircleOutline } from "react-icons/io";

export default function AddNewHabitButton() {
  return (
    <button
      id="add-new-habit"
      onClick={() => {
        const dialog = document.getElementById(
          "new-habit-dialog"
        ) as HTMLDialogElement;
        dialog!.showModal();
      }}
      title="Add New Habit"
      className="fixed bottom-0 right-0 flex items-center justify-center m-4 text-center transition-all duration-150 bg-red-800 border-none rounded-full cursor-pointer size-12 ">
      <span className="text-xl font-bold text-white transition-all duration-150">
        <IoMdAddCircleOutline />
      </span>
    </button>
  );
}
