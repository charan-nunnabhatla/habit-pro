import CalendarContainer from "./containers/calendar-container";
import HabitsListContainer from "./containers/habits-list-container";

export default function Home() {
  return (
    <div
      id="root"
      className="flex flex-col items-center justify-center w-full h-screen gap-2 p-2 bg-black rounded md:flex-row">
      <CalendarContainer />
      <HabitsListContainer />
    </div>
  );
}
