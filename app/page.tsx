import CalendarContainer from "./containers/calendar-container";
import HabitsListContainer from "./containers/habits-list-container";
import NotesContainer from "./containers/notes-container";

export default function Home() {
  return (
    <div className="min-h-svh w-screen lg:w-[60vw] mx-auto">
      <div
        id="root"
        className=" grid grid-cols-[1fr] grid-rows-[auto,1fr,1fr] md:grid-rows-[auto,1fr] md:grid-cols-[1fr,fit-content] w-full min-h-svh gap-1 justify-center p-1 bg-black rounded">
        <div
          id="calendar"
          className="row-start-1 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
          <CalendarContainer />
        </div>
        <div
          id="habitslist"
          className="row-start-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3">
          <HabitsListContainer />
        </div>
        <div
          id="notes"
          className="row-start-3 md:row-start-2 md:col-start-1 md:col-end-2  ">
          <NotesContainer />
        </div>
      </div>
    </div>
  );
}
