"use client";

import { useAtom } from "jotai";
import { currentDateAtom } from "../atoms";

export default function CustomDateCalendar() {
  const [currentDateData, setCurrentDateData] = useAtom(currentDateAtom);

  const totalDates = currentDateData.totalDays;

  const handelOnClick = (date: number) => {
    setCurrentDateData((prev) => {
      return { ...prev, date: date };
    });
  };

  return (
    <div className="grid grid-cols-7 gap-1 p-2 border">
      {Array.from({ length: totalDates }, (_, index) => {
        return (
          <div
            onClick={() => handelOnClick(index + 1)}
            key={index}
            className="p-2 text-center transition-all duration-100 rounded bg-zinc-600 hover:bg-slate-400/70 hover:cursor-pointer ">
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}
