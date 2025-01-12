import { useSetAtom } from "jotai";
import { habitDataAtom, habitType } from "../atoms";
import dayjs from "dayjs";
import markHabitComplete from "../operations/completed-habit";
import deleteHabit from "../operations/delete-habit";
import { MdDeleteForever } from "react-icons/md";

export default function HabitTile(props: habitType) {
  const setHabitData = useSetAtom(habitDataAtom);
  return (
    <div
      onClick={() => markHabitComplete(setHabitData, props.id)}
      className={`mb-3 cursor-pointer outline bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.2)] ${
        !props.completed ? "outline-lime-400" : "outline-red-600"
      } rounded group`}>
      <div
        className={`flex flex-row w-full px-3 py-2 ${
          props.completed ? "line-through" : ""
        } rounded`}>
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
      <div className="w-full p-1 border-emerald-950">
        {/* <button
          onClick={() => markHabitComplete(setHabitData, props.id)}
          className="p-1 text-xs border rounded ">
          Done
        </button> */}
        <button
          title="Delete"
          className="p-1 text-xs"
          onClick={() => deleteHabit(setHabitData, props.id)}>
          <MdDeleteForever className="text-white text-[1rem] font-bold" />
        </button>
      </div>
    </div>
  );
}
