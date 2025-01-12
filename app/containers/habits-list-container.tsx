"use client";

import { useAtomValue } from "jotai";
import AddNewHabitButton from "../components/add-new-habit-button";
import HabitTile from "../components/habit-tile";
import NewHabitModal from "../modals/new_habit_modal";
import { habitDataAtom } from "../atoms";

export default function HabitsListContainer() {
  const habitData = useAtomValue(habitDataAtom);
  return (
    <div className="relative h-full min-w-max w-full p-3 bg-zinc-800 rounded size-5  md:w-[60vw] md:h-full overflow-auto">
      <NewHabitModal />
      {Array.from(habitData).map((value) => {
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
