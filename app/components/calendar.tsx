"use client";

import {
  LocalizationProvider,
  DateCalendar,
  DayCalendarSkeleton,
  PickersDayProps,
  PickersDay,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { dateAtom } from "../atoms";
import { useAtom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import { Badge } from "@mui/material";
import { useRef } from "react";

export default function CustomDateCalendar() {
  const [dateValue, setDateVale] = useAtom(dateAtom);
  const highlightedDays = [1, 2, 15, 13];
  const dateRef = useRef(null);

  console.log("Date Ref: \n");
  console.log(dateRef.current);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        className="m-0 !w-full md:!w-[50vw] rounded-lg md:static bg-[rgba(3,95,83,0.31)]  h-fit"
        displayWeekNumber
        showDaysOutsideCurrentMonth
        loading={false}
        value={dayjs(dateValue)}
        ref={dateRef}
        onChange={(value, state, view) => {
          setDateVale(value);
          console.log(value);
          console.log(state);
          console.log(view);
        }}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as unknown as  PickersDayProps<Dayjs>,
        }}
      />
    </LocalizationProvider>
  );
}

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  // console.log("Props: \n" + )
  console.log(props.day.date());
  console.log("Highlighted Days: \n" + highlightedDays);
  console.log(dayjs("2025-01-17").date());

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0 &&
    dayjs("2025-01-15").date() === props.day.date();

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? "🌚" : undefined}>
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}
