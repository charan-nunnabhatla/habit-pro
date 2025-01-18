"use client";

import { useAtomValue } from "jotai";
import AddNewHabitButton from "../components/add-new-habit-button";
import HabitTile from "../components/habit-tile";
import NewHabitModal from "../modals/add-habit-modal";
import { habitDataAtom } from "../atoms";
import Player from "react-lottie-player";
import waitingAnimation from "../../public/waiting.json";

export default function HabitsListContainer() {
  const habitData = useAtomValue(habitDataAtom);
  return (
    <div className="flex flex-col scroll-bar relative h-full w-full lg:w-max p-3 bg-zinc-800 rounded duration-1000  md:w-auto md:h-full overflow-auto">
      <NewHabitModal />
      {habitData.length > 0 ? (
        <div className="">
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
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-full w-full text-white font-bold">
          No Tasks!
          <br />
          Click on the Add button to add a task
          <Player
            animationData={waitingAnimation}
            loop
            play
            className="w-full size-3/4 md:size-fit"
          />
        </div>
      )}
      <AddNewHabitButton />
    </div>
  );
}
