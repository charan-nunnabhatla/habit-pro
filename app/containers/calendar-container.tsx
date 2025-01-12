"use client";

import { useAtom } from "jotai";
import CustomDateCalendar from "../components/calendar";
import dayjs from "dayjs";
import { customDateAtom } from "../atoms";

export default function CalendarContainer() {
  const [currentDateData, setCurrentDateData] = useAtom(customDateAtom);

  const nextBtn = () => {
    setCurrentDateData((current) => {
      const newMonth = current.month === 11 ? 0 : current.month + 1;
      const newYear = current.month === 11 ? current.year + 1 : current.year;
      return {
        ...current,
        month: newMonth,
        year: newYear,
        totalDays: dayjs(
          `${newYear}-${newMonth + 1}-${current.date}`
        ).daysInMonth(),
      };
    });
  };

  const prevBtn = () => {
    setCurrentDateData((current) => {
      const newMonth = current.month == 0 ? 11 : current.month - 1;
      const newYear = current.month == 0 ? current.year - 1 : current.year;
      return {
        ...current,
        month: newMonth,
        year: newYear,
        totalDays: dayjs(
          `${newYear}-${newMonth + 1}-${current.date}`
        ).daysInMonth(),
      };
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-fit md:h-full md:w-fit p-2 bg-zinc-800 rounded">
      <div className="w-full md:w-[60vw] lg:w-[40vw]">
        <div className="text-white font-bold flex justify-between py-3 px-5">
          <button
            className="px-3 hover:ring-2 hover:ring-orange-900 duration-200 py-1 rounded bg-orange-300 text-orange-600"
            onClick={prevBtn}>
            Prev
          </button>
          <span>
            {dayjs(
              `${currentDateData.year}-${currentDateData.month + 1}-${
                currentDateData.date
              }`
            ).format("MMMM YYYY")}
          </span>
          <button
            className="px-3 hover:ring-2 hover:ring-orange-900 duration-200 py-1 rounded bg-orange-300 text-orange-600"
            onClick={nextBtn}>
            Next
          </button>
        </div>
        <CustomDateCalendar />
      </div>
      {/* {JSON.stringify(currentDateData, null, 2)} */}
    </div>
  );
}
