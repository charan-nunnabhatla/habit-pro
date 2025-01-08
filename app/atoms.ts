import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const date = dayjs();

export const currentDateAtom = atom({
  month: date.month(),
  year: date.year(),
  date: date.date(),
  totalDays: date.daysInMonth(),
});
