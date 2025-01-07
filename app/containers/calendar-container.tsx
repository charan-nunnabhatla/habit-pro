"use client";

import { useAtomValue } from "jotai";
import CustomDateCalendar from "../components/calendar";
import { dateAtom } from "../atoms";
import dayjs from "dayjs";

export default function CalendarContainer() {
  const dateValue = useAtomValue(dateAtom);
  return (
    <div className="flex-1 w-full h-full p-3 bg-red-300 rounded">
      <CustomDateCalendar />

      <div className="mt-5 rounded h-fit">
        {dayjs(dateValue).format("DD-MM-YYYY")}
      </div>
    </div>
  );
}
