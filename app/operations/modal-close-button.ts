export default function closeModal(id: string) {
  const dialog = document.getElementById(id) as HTMLDialogElement;

  dialog.close();
}
