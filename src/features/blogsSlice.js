import { createSlice } from '@reduxjs/toolkit';
import blog_data from '../Components/Blogs/blog_data';

const initialState = {
  blogs: blog_data,
};


export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setAddBlog: (state, action) => {
      state.blogs.unshift(action.payload);
    },
  },

});

export const { setAddBlog } = blogsSlice.actions;

export const selectBlog = (state) => state.blogs.blogs;

export default blogsSlice.reducer;
