import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Todo } from '@/models/Todo';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch(`${process.env.APP_API_BASE_URL}/todos`)
    .then(response => response.json())
    .then(data => data);

  return response;
});

interface InitialState {
  data: Todo[];
  isFetching: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  isFetching: false,
  data: [],
  error: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, state => {
        state.isFetching = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isFetching = false;
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
