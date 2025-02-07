"use client";

import { useAtom } from "jotai";
import CustomDateCalendar from "../components/calendar";
import dayjs from "dayjs";
import { customCalendarAtom } from "../atoms";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function CalendarContainer() {
  const [calendar, setCalendar] = useAtom(customCalendarAtom);

  const nextBtn = () => {
    setCalendar((current) => {
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
    setCalendar((current) => {
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

  const setToday = () => {
    const today = dayjs();
    setCalendar({
      year: today.year(),
      month: today.month(),
      date: today.date(),
      totalDays: today.daysInMonth(),
    });
  };

  return (
    <div className="flex flex-col items-center w-full h-fit p-2 bg-zinc-800 rounded">
      <div className="w-full md:w-fit lg:w-[40vw]">
        <div className="text-white font-bold flex justify-between py-3 px-5">
          <button
          aria-label="Previous Month"
            className=" duration-150 px-6 py-1 rounded bg-white/20 text-white hover:bg-white/30  text-2xl font-bold"
            onClick={prevBtn}>
            <GrFormPrevious />
          </button>
          <span
            onClick={setToday}
            className="px-6 whitespace-nowrap flex items-center cursor-pointer">
            {dayjs(
              `${calendar.year}-${calendar.month + 1}-${calendar.date}`
            ).format("MMMM YYYY")}
          </span>
          <button
          aria-label="Next Button"
            className="px-6 duration-150 py-1 rounded bg-white/20 text-white hover:bg-white/30 text-2xl font-bold"
            onClick={nextBtn}>
            <GrFormNext />
          </button>
        </div>
        <CustomDateCalendar />
      </div>
      {/* {JSON.stringify(currentDateData, null, 2)} */}
    </div>
  );
}
