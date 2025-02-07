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
    <div className="flex flex-col scroll-bar relative h-full w-full lg:w-max p-3 bg-zinc-800 rounded duration-1000  md:w-[fit-content] md:h-full overflow-auto">
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
        <div className="flex flex-col justify-center items-center h-full md:w-[25rem] lg:w-[30rem] font-bold">
          <section className=" text-center mt-[30%]">
            <h3 className="text-2xl text-white font-bold">No Tasks!</h3>
            <h4 className="text-sm text-white opacity-75">
              Click on the Add button to add a task
            </h4>
          </section>
          <figure
            aria-label="a animated women looking at her laptop"
            className="my-auto w-full ">
            <Player animationData={waitingAnimation} loop play />
          </figure>
        </div>
      )}
      <AddNewHabitButton />
    </div>
  );
}
