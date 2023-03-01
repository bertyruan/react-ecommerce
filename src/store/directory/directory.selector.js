import { createSelector } from "reselect";

export const selectDirectoryReducer = (state) => state.directory;

export const selectDirectoryItems = createSelector(
  [selectDirectoryReducer],
  (directory) => directory.items
);
