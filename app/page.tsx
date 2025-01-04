"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

export default function Home() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const calendarRef = useRef<HTMLDivElement>(null);
  const habitListRef = useRef<HTMLDivElement>(null);
  const [calendarSize, setCalendarSize] = useState({ width: 0, height: 0 });
  const [habitListSize, setHabitListSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const resize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const calendarObserver = new ResizeObserver((entries) => {
      console.log(entries);
      for (const entry of entries) {
        setCalendarSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const habitListObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setHabitListSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (calendarRef.current) {
      calendarObserver.observe(calendarRef.current);
    }

    if (habitListRef.current) {
      habitListObserver.observe(habitListRef.current);
    }

    return () => {
      calendarObserver.disconnect();
      habitListObserver.disconnect();
    };
  }, []);

  return (
    <div className="flex w-full min-h-screen gap-2 p-1 bg-slate-400 justify-evenly text-red-50">
      <div
        ref={calendarRef}
        className="flex-1 min-w-[700px] p-3 bg-red-500 rounded ">
        {`Window: w: ${size.width} h: ${size.height}`}
        <br />
        {`Calendar: w: ${calendarSize.width} h: ${calendarSize.height}`}
        <DateCalendarServerRequest />
      </div>
      <div
        ref={habitListRef}
        className=" bg-red-500 min-w-[300px] p-3 w-[40vw] rounded">
        {`Habit List: w: ${habitListSize.width} h: ${habitListSize.height}`}
      </div>
    </div>
  );
}

function DateCalendarServerRequest() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        displayWeekNumber
        loading={false}
        onChange={(value, state, view) => {
          console.log(value.$M);
          console.log(state);
          console.log(view);
        }}
        renderLoading={() => <DayCalendarSkeleton />}
      />
    </LocalizationProvider>
  );
}
