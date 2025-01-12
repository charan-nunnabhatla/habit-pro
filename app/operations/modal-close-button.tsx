export default function closeModal() {
  const dialog = document.getElementById(
    "new-habit-dialog"
  ) as HTMLDialogElement;
  dialog.close();
}
