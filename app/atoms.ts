import dayjs, { Dayjs } from "dayjs";
import { atomWithStorage } from "jotai/utils";

export const dateAtom = atomWithStorage<Dayjs>("user-selected-date-value", dayjs(new Date()));
