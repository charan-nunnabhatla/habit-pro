import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const date = dayjs();
export const customCalendarAtom = atom({
  month: date.month(),
  year: date.year(),
  date: date.date(),
  totalDays: date.daysInMonth(),
});

export type TaskType = {
  id: string;
  title: string;
  time: string;
  date: string;
  completed: boolean;
  createdDate?: Dayjs;
  notes?: string;
};

export const TasksDataAtom = atomWithStorage<TaskType[]>("habit-data", []);
