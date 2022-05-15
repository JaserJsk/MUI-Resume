// third-party
import { createSlice } from '@reduxjs/toolkit';

// Project Imports
// import axios from 'utils/axios';
// import { dispatch } from '../index';

// Types
import { DefaultRootStateProps } from 'types';

// ----------------------------------------------------------------------

const initialState: DefaultRootStateProps['user'] = {
  usersProfile: [],
  error: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;
