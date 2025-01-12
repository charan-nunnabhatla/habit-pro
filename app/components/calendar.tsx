"use client";

import { useAtom } from "jotai";
import { customDateAtom } from "../atoms";

export default function CustomDateCalendar() {
  const [currentDate, setCurrentDateData] = useAtom(customDateAtom);

  const totalDates = currentDate.totalDays;

  const handelOnClick = (date: number) => {
    setCurrentDateData((prev) => {
      return { ...prev, date: date };
    });
  };

  return (
    <div className="grid grid-cols-7 gap-1 p-2 rounded outline outline-lime-200 outline-2">
      {Array.from({ length: totalDates }, (_, index) => {
        index = index + 1;
        const today = index === currentDate.date;

        return (
          <div
            onClick={() => handelOnClick(index)}
            key={index}
            className={`p-2 text-center transition-all duration-100 rounded  hover:opacity-85 hover:cursor-pointer bg-zinc-600
             ${today ? "outline-2 outline outline-emerald-500" : ""}`}>
            <span className="font-bold text-white opacity-100 ">{index}</span>
          </div>
        );
      })}
    </div>
  );
}
