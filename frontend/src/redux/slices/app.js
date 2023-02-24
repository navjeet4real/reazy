import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    open: null,
    message: null,
    severity: null,
  },
};
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggleSidebar(state, action) {
    //   state.sidebar.open = !state.sidebar.open;
    // },
    // updateSidebarType(state, action) {
    //   state.sidebar.type = action.payload.type;
    // },
    openSnackBar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackBar(state, action) {
      state.snackbar.open = false;
      state.snackbar.message = null;
    },
  },
});

export default slice.reducer;

export const ShowSnackBar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );
    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };

export const CloseSnackBar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackBar());
};

// export function ToggleSidebar() {
//   return async (dispatch, getState) => {
//     dispatch(slice.actions.toggleSidebar());
//   };
// }
// export function UpdateSidebarType(type) {
//   return async (dispatch, getState) => {
//     dispatch(
//       slice.actions.updateSidebarType({
//         type,
//       })
//     );
//   };
// }
