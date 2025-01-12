import { useSetAtom } from "jotai";
import { habitDataAtom, habitType } from "../atoms";
import dayjs from "dayjs";
import markHabitComplete from "../operations/completed-habit";
import deleteHabit from "../operations/delete-habit";

export default function HabitTile(props: habitType) {
  const setHabitData = useSetAtom(habitDataAtom);
  return (
    <div className="my-2 border group">
      <div
        className={`flex flex-row w-full px-3 py-2 ${
          props.completed ? "line-through" : ""
        } border rounded`}>
        <div className="mr-auto">{props.title}</div>
        <div className="px-3">{props.time}</div>
        <div className="">
          {dayjs(props.date).format(
            `DD MMM ${
              dayjs().year().toString() !== dayjs(props.date).format("YYYY")
                ? "YYYY"
                : ""
            }`
          )}
        </div>
      </div>
      <div className="w-full p-1 border border-emerald-950">
        <button
          onClick={() => markHabitComplete(setHabitData, props.id)}
          className="p-1 text-xs border rounded ">
          Done
        </button>
        <button
          className="p-1 text-xs border rounded"
          onClick={() => deleteHabit(setHabitData, props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
