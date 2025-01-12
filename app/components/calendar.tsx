"use client";

import { useAtom } from "jotai";
import { currentDateAtom } from "../atoms";
import dayjs from "dayjs";

export default function CustomDateCalendar() {
  const [currentDateData, setCurrentDateData] = useAtom(currentDateAtom);

  const totalDates = currentDateData.totalDays;
  const events = [12, 3, 15, 31, 5];
  const colors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-blue-500",
  ];

  const handelOnClick = (date: number) => {
    setCurrentDateData((prev) => {
      return { ...prev, date: date };
    });
  };

  return (
    <div className="grid grid-cols-7 gap-1 p-2 border">
      {Array.from({ length: totalDates }, (_, index) => {
        index = index + 1;
        const today = index === currentDateData.date;

        const eventDay =
          events.includes(index) &&
          currentDateData.month === dayjs().month() &&
          dayjs().year() === currentDateData.year;
        const eventColor = eventDay ? colors[index % colors.length] : "";

        return (
          <div
            onClick={() => handelOnClick(index)}
            key={index}
            className={`p-2 text-center transition-all duration-100 rounded  hover:opacity-85 hover:cursor-pointer ${
              eventDay ? `${eventColor}` : "bg-zinc-600"
            } ${today ? "outline-2 outline outline-emerald-500" : ""}`}>
            <span className="font-bold text-white opacity-100 ">{index}</span>
          </div>
        );
      })}
    </div>
  );
}
