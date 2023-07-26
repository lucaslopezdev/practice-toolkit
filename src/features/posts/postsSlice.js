import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
  {
    id: "3",
    title: "Learning good practices with Dave Gray",
    content: "I've heard good things",
  },
  {
    id: "4",
    title: "Learning good practices with Midudev",
    content: "I've heard good things",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;
export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
