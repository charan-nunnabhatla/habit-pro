import dayjs from "dayjs";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const date = dayjs();

export type habitType = {
  id: string;
  title: string;
  time: string;
  date: string;
  completed: boolean;
  createdDate?: Date;
};

export const customDateAtom = atom({
  month: date.month(),
  year: date.year(),
  date: date.date(),
  totalDays: date.daysInMonth(),
});

export const habitDataAtom = atomWithStorage<habitType[]>("habit-data", []);
