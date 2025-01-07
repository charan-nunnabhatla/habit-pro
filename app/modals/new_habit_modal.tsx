export default function NewHabitModal(){
    return (
        <dialog id="new-habit-dialog" className="p-3 rounded top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] backdrop:backdrop-blur-sm " >
            <h1>New Habit</h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
            </form>
        </dialog>
    )
}