import { useSetAtom } from "jotai";
import { habitDataAtom, habitType } from "../atoms";
import dayjs from "dayjs";
import markHabitComplete from "../operations/completed-habit";
import deleteHabit from "../operations/delete-habit";

export default function HabitTile(props: habitType) {
  const setHabitData = useSetAtom(habitDataAtom);
  return (
    <div
      onClick={(event) => markHabitComplete(setHabitData, props.id, event)}
      className={`mb-3 flex flex-col h-fit w-full duration-150 cursor-pointer bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.2)] rounded group`}>
      <div className={`flex flex-col w-full text-white px-3 py-2 rounded`}>
        <div className="mr-auto">
          <input
            className={`bg-transparent focus:underline capitalize font-bold border-none outline-none ${
              !props.completed ? "text-green-500" : "text-red-500"
            }`}
            type="text"
            value={props.title}
            onChange={(e) => {
              setHabitData((habits: habitType[]) =>
                habits.map((habit: habitType) => {
                  if (habit.id === props.id) {
                    return { ...habit, title: e.target.value.toString() };
                  }
                  return habit;
                })
              );
            }}
          />
        </div>
        <div className=" flex flex-row gap-4 text-sm text-zinc-400">
          <div className="">{props.time}</div>
          <div className="">
            {dayjs(props.date).format(
              `ddd DD MMM ${
                dayjs().year().toString() !== dayjs(props.date).format("YYYY")
                  ? "YYYY"
                  : ""
              }`
            )}
          </div>
        </div>
      </div>
      {/* <button
          onClick={() => markHabitComplete(setHabitData, props.id)}
          className="p-1 text-xs border rounded ">
          Done
        </button> */}
      <div className="w-full flex flex-row">
        <button
          title="Mark It Complete"
          className="px-2 py-1 m-2 w-full text-white font-bold rounded bg-blue-400 duration-150 hover:bg-blue-500 text-xs"
          onClick={() => markHabitComplete(setHabitData, props.id)}>
          Complete
        </button>
        <button
          title="Delete"
          className="px-2 py-1 m-2 w-full text-white font-bold rounded bg-red-400 duration-150 hover:bg-red-500 text-xs"
          onClick={() => deleteHabit(setHabitData, props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
