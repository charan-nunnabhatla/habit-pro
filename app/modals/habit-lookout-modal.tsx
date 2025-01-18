import dayjs from "dayjs";
import { customCalendarAtom, habitDataAtom } from "../atoms";
import { useAtomValue } from "jotai";
import ModalActionButtons from "../components/modal-action-buttons";
// import Lottie from "react-lottie-player";
import noTasks from "../../public/no-tasks.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

type habitLookOutModalType = {
  index?: number;
};

export default function HabitLookOutModal({
  index = 0,
}: habitLookOutModalType) {
  const calendar = useAtomValue(customCalendarAtom);
  const habitData = useAtomValue(habitDataAtom);

  const dates = habitData.map(({ date }) => date);

  const presentDay = (index: number) =>
    dayjs(`${calendar.year}-${calendar.month + 1}-${index}`).format(
      "YYYY-MM-DD"
    );

  const present = presentDay(index);

  const todayEventDay = dates.includes(present);

  return (
    <dialog
      id="habit-lookout-modal"
      className="bg-zinc-700 relative h-fit justify-center  p-3 rounded  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] backdrop:backdrop-blur-sm md:min-h-fit md:h-fit overflow-auto md:w-fit transition-all duration-200 w-full">
      <div className="">
        {todayEventDay ? (
          <span className="block p-3 text-white">
            <h1 className="text-2xl font-bold">Events</h1>
            {habitData.map((habit) => {
              if (habit.date == present)
                return (
                  <div
                    key={habit.id}
                    className="p-2 my-2 rounded bg-white/20">
                    {/* {JSON.stringify(habit)} */}
                    <div className="flex items-center font-bold">
                      {habit.title}
                      <span className="text-xs px-3 text-zinc-400">
                        {dayjs(habit.createdDate).format("DD MMM YYYY")}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-200">
                      Schedule On: {habit.date}
                    </div>
                    {habit.notes ? (
                      <div>
                        <div className="w-full border my-2 border-zinc-400"></div>
                        <span className="my-4 h-fit w-full">Notes:</span>
                        <br />
                        <span className="text-sm">{habit.notes}</span>
                      </div>
                    ) : null}
                  </div>
                );
            })}
          </span>
        ) : (
          <div className=" flex flex-col items-center">
            <Lottie animationData={noTasks} play loop />
            <span className="text-xl text-white">
              No recorded tasks for this day
            </span>
          </div>
        )}
      </div>
      <div className="w-full">
        <ModalActionButtons
          closeModalID="habit-lookout-modal"
          root={false}
          addName={`${todayEventDay ? "Add More" : "Add New"}`}
          closeName="Close"
        />
      </div>
    </dialog>
  );
}
