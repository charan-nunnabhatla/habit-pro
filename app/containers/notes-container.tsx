"use client";

import { useAtom } from "jotai";
import { TasksDataAtom, TaskType } from "../atoms";
import dayjs from "dayjs";
import { GoDotFill } from "react-icons/go";
// import Lottie from "react-lottie-player";
import noTasks from "../../public/no-tasks.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function NotesContainer() {
  const [habitsData, setHabitData] = useAtom(TasksDataAtom);

  let habitsNotes = habitsData.map((habit) => {
    return habit.notes;
  });

  habitsNotes = habitsNotes.filter((value) => value !== "");

  // console.log("Notes");
  // console.log(habitsNotes);

  let key = "";

  return (
    <div
      key={key}
      className="flex items-center flex-col p-3 h-full min-h-full w-full bg-zinc-800 rounded">
      <h1 className="text-2xl text-white font-bold">Notes</h1>
      <span className=" text-sm text-white opacity-75 font-bold">
        Additional Info While Creating A Task
      </span>
      {habitsNotes.length > 0 ? (
        Array.from(habitsData).map((habit: TaskType) => {
          key = habit.id;
          return habit.notes ? (
            <div
              key={habit.id}
              className="flex flex-col w-full h-fit p-2 rounded m-1 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.2)]">
              <div className="">
                <div
                  className={`flex items-center capitalize text-sm text-gray-500 ${
                    habit.completed ? "line-through" : ""
                  }`}>
                  {habit.title}
                  <GoDotFill className="text-xs" />
                  {dayjs(habit.createdDate).format("DD MMM YYYY")}
                </div>
                <div className=" w-full">
                  <textarea
                    // type="text"
                    rows={Math.max(1, habit.notes.split("\n").length)}
                    value={habit.notes}
                    className="scroll-bar resize-none h-auto w-full bg-transparent focus:underline border-none text-zinc-200 text-sm outline-none"
                    onChange={(e) => {
                      setHabitData((habits: TaskType[]) => {
                        return habits.map((habit1: TaskType) => {
                          if (habit1.id === habit.id) {
                            return { ...habit1, notes: e.target.value };
                          }
                          return habit1;
                        });
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          ) : null;
        })
      ) : (
        <figure key={key} aria-label="animated searching placeholder" className="my-auto lg:size-1/2">
          <Lottie animationData={noTasks} play loop />
        </figure>
      )}
    </div>
  );
}
