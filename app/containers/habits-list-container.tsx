"use client";

import { useAtomValue } from "jotai";
import AddNewHabitButton from "../components/add-new-habit-button";
import HabitTile from "../components/habit-tile";
import NewHabitModal from "../modals/add-habit-modal";
import { TasksDataAtom } from "../atoms";
// import Player from "react-lottie-player";
import waitingAnimation from "../../public/waiting.json";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function HabitsListContainer() {
  const habitData = useAtomValue(TasksDataAtom);
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
          <span className="text-2xl font-bold">No Tasks!</span>
          <span className="text-sm text-zinc-500">
            Click on the Add button to add a task
          </span>
          <figure aria-label="a animated women looking at her laptop">
            <Player
              animationData={waitingAnimation}
              loop
              play
              className="w-full size-3/4 md:size-fit"
            />
          </figure>
        </div>
      )}
      <AddNewHabitButton />
    </div>
  );
}
