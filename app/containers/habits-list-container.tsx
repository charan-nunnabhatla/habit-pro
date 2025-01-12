"use client";

import { useAtomValue } from "jotai";
import AddNewHabitButton from "../components/add-new-habit-button";
import HabitTile from "../components/habit-tile";
import NewHabitModal from "../modals/new_habit_modal";
import { habitDataAtom } from "../atoms";

export default function HabitsListContainer() {
  const userSelectedValues = useAtomValue(habitDataAtom);
  return (
    <div className="relative w-full p-3 bg-orange-300 rounded size-5 h-[45vh] md:w-[45vw] md:h-full overflow-auto">
      <NewHabitModal />
      {Array.from(userSelectedValues).map((value, _) => {
        return (
          <HabitTile
            id={value.id}
            key={value.id}
            time={value.time}
            date={value.date}
            title={value.title}
            completed={value.completed}
          />
        );
      })}
      <AddNewHabitButton />
    </div>
  );
}
