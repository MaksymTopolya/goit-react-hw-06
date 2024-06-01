import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    add: {
      reducer: (state, action) => {
        state.items = [action.payload, ...state.items];
      },
      prepare: (info) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            info,
          },
        };
      },
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = slice.actions;
export default slice.reducer;

