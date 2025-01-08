"use client";

import { useAtom } from "jotai";
import CustomDateCalendar from "../components/calendar";
import dayjs from "dayjs";
import { currentDateAtom } from "../atoms";

export default function CalendarContainer() {
  const [currentDateData, setCurrentDateData] = useAtom(currentDateAtom);

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
    <div className="flex-1 w-full h-full p-3 bg-red-300 rounded">
      <div className="border flex justify-between py-1 px-5">
        <button onClick={prevBtn}>Prev</button>
        <span>
          {dayjs(
            `${currentDateData.year}-${currentDateData.month + 1}-${
              currentDateData.date
            }`
          ).format("MMMM YYYY")}
        </span>
        <button onClick={nextBtn}>Next</button>
      </div>
      <CustomDateCalendar />
      {JSON.stringify(currentDateData, null, 2)}
    </div>
  );
}
