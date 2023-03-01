import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {
  items: [],
  isLoading: false,
  error: null,
};

const mapRoute = (items) => {
  return items.map((item) => {
    return { ...item, route: `shop/${item.title}` };
  });
};

export const fetchDirectory = createAsyncThunk("directory/fetch", async () => {
  return fetch("https://cdn.fs.teachablecdn.com/jXxMUj86Qf2pChV37EzI")
    .then((data) => data.json())
    .then(mapRoute);
});

export const directorySlice = createSlice({
  name: "directory",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDirectory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDirectory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchDirectory.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const directoryReducer = directorySlice.reducer;
