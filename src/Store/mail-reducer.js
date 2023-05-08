import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
  inbox: [],
  sentBox: [],
};

const mailSlice = createSlice({
  name: "Mails",
  initialState: initialMailState,
  reducers: {
    addMail(state, action) {
      state.inbox = state.inbox.push(action.payload);
      state.sentBox = state.sentBox.push(action.payload);
    },
    deleteMail(state, action) {
      console.log(deleted);
    },
    replaceMails(state, action) {
      state.inbox = action.payload.inbox;
      state.sentBox = action.payload.sentBox;
    },
  },
});
export const mailActions = mailSlice.actions;
export default mailSlice.reducer;
