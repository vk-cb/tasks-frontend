import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Confirm } from "notiflix";
// Show loader function
export const showLoader = () => {
  Loading.standard();
};

// Hide loader function
export const hideLoader = () => {
  Loading.remove();
};

// Loader component (if needed)
const Loader = () => {
  return null;
};

export default Loader;

// Show loader function
export const successAlert = (msg: string) => {
  Notify.success(msg);
};
export const errorAlert = (msg: string) => {
  Notify.failure(msg);
};

export const confirmShow = (
  title: string,
  message: string,
  onConfirm?: () => {},
  onCancel?: () => {}
) => {
  Confirm.show(
    title,
    message,
    "Yes",
    "No",
    () => {
      onConfirm && onConfirm();
    },

    () => {
      onCancel && onCancel();
    }
  );
};
