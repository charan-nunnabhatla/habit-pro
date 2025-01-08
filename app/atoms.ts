import dayjs from "dayjs";
import { atom } from "jotai";

const date = dayjs();

export const currentDateAtom = atom({
  month: date.month(),
  year: date.year(),
  date: date.date(),
  totalDays: date.daysInMonth(),
});
