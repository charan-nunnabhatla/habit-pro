export default function NewHabitModal() {
  return (
    <dialog
      id="new-habit-dialog"
      className="bg-slate-500 p-3 rounded top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] backdrop:backdrop-blur-sm h-full md:h-[50vh] overflow-auto w-full md:w-[50vw] transition-all duration-700 ">
      <h1>New Habit</h1>
      <form className="flex flex-col border" action="">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="habit-name"
          placeholder="Enter A Habit Name"
          type="text"
          required
        />
        <button type="reset">Reset</button>
        <button
          onClick={() => {
            const dialog = document.getElementById(
              "new-habit-dialog"
            ) as HTMLDialogElement;
            dialog.close();
          }}>
          Close
        </button>
        <select name="Fruits" id="fruits">
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Kiwi">Kiwi</option>
          <option value="Grape">Grape</option>
          <option value="Orange">Orange</option>
        </select>
      </form>
    </dialog>
  );
}
