export default function DateTimePickers() {
  return (
    <div className="flex flex-row m-3">
      <input
        id="time-input"
        // defaultValue={dayjs().format("HH:mm")}
        className="p-3 m-3 font-bold text-gray-500 rounded outline-none focus:ring focus:ring-blue-500 w-fit"
        type="time"
        title="Select a time"
      />
      <input
        id="date-input"
        // defaultValue={dayjs().format("YYYY-MM-DD")}
        className="p-3 m-3 font-bold text-gray-500 rounded outline-none focus:ring focus:ring-blue-500 w-fit"
        type="date"
        title="MM/DD/YYYY"
      />
    </div>
  );
}
