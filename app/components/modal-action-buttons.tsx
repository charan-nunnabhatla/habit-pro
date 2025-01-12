import closeModal from "../operations/modal-close-button";

export default function ModalActionButtons() {
  return (
    <div
      id="action-buttons"
      className="flex absolute w-full right-0 bottom-0 flex-row items-center justify-center gap-3 p-3 ml-auto border ">
      <button type="reset">Reset</button>
      <button className="mr-auto" onClick={closeModal}>
        Close
      </button>
      <button className="" onClick={closeModal}>
        Done
      </button>
    </div>
  );
}
