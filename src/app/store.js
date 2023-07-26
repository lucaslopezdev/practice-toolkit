import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "../features/posts/postsSlice"

// Este es el store relax mostro
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  }
})