import dayjs from "dayjs";
import { customCalendarAtom, habitDataAtom } from "../atoms";
import { useAtomValue } from "jotai";
import ModalActionButtons from "../components/modal-action-buttons";

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
      className="bg-zinc-800 relative justify-center  p-3 rounded  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] backdrop:backdrop-blur-sm h-full md:min-h-fit md:h-auto border overflow-auto md:w-fit transition-all duration-700 min-w-[60vw] w-full">
      <div className="">
        {todayEventDay ? (
          <span className="block p-3 text-white">
            <h1>Events</h1>
            {habitData.map((habit) => {
              if (habit.date == present)
                return (
                  <div key={habit.id} className="p-2 my-2 border rounded ">
                    {JSON.stringify(habit)}
                  </div>
                );
            })}
          </span>
        ) : (
          "No recorded tasks for this day"
        )}
      </div>
      <div className="w-full">
        <ModalActionButtons
          closeModalID="habit-lookout-modal"
          root={false}
          addName="Add Now"
          closeName="Done"
        />
      </div>
    </dialog>
  );
}
