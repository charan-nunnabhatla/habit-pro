import NewHabitModalForm from "../components/new-habit-modal-form";

export default function NewHabitModal() {
  return (
    <dialog
      id="new-habit-dialog"
      className="bg-[rgb(124,134,133)]  border justify-center  p-3 rounded top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] backdrop:backdrop-blur-sm h-[clamp(40%,50vh,80vh)] overflow-auto w-full md:w-fit transition-all duration-700 ">
        <NewHabitModalForm />
    </dialog>
  );
}
