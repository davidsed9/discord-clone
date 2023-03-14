import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channellName: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setChannelId: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channellName;


export default appSlice.reducer;
