"use client";

import { useAtom, useAtomValue } from "jotai";
import { customCalendarAtom, habitDataAtom } from "../atoms";
import HabitLookOutModal from "../modals/habit-lookout-modal";
import dayjs from "dayjs";
import { useState } from "react";

export default function CustomDateCalendar() {
  const [calendar, setCalendar] = useAtom(customCalendarAtom);
  const habitData = useAtomValue(habitDataAtom);
  const [isEventDay, setIsEventDay] = useState(0);

  const presentDay = (index: number) =>
    dayjs(`${calendar.year}-${calendar.month + 1}-${index}`).format(
      "YYYY-MM-DD"
    );

  const handelOnClick = (index: number) => {
    setCalendar((prev) => {
      return { ...prev, date: index };
    });

    setIsEventDay(index);

    const lookout_modal = document.getElementById(
      "habit-lookout-modal"
    ) as HTMLDialogElement;
    lookout_modal.showModal();
  };

  const dates = habitData.map(({ date }) => date);

  return (
    <div className="grid grid-cols-7 gap-1 p-2 rounded">
      <HabitLookOutModal index={isEventDay} />
      {Array.from({ length: calendar.totalDays }, (_, index) => {
        index = index + 1;
        const today = index === calendar.date;

        const present = presentDay(index);

        const todayEventDay = dates.includes(present);

        return (
          <div
            onClick={() => handelOnClick(index)}
            key={index}
            className={`p-2 text-center transition-all duration-100 rounded  hover:opacity-85 hover:cursor-pointer ${
              today ? "outline-2 outline outline-emerald-500" : ""
            } ${todayEventDay ? "bg-red-300" : "bg-zinc-600"} `}>
            <span className="font-bold text-white opacity-100 ">{index}</span>
          </div>
        );
      })}
    </div>
  );
}
