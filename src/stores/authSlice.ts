import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { authApi } from '@/services/auth'
interface UiState {
 data: string;
}

const initialState: UiState = {
  data: ''
};

const authSlice = createSlice({
  extraReducers: (builder) => {
    builder;
    // .addMatcher(authApi.endpoints.login.matchPending, (_state, action) => {
    //   console.log('pending', action)
    // })
    // .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
    //   // console.log('done', action.payload)

    //   state.user = action.payload.data.authUser
    //   state.token = action.payload.data.token
    // })
    // .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
    //   // console.log('rejected', action)
    // })
  },
  initialState,
  name: 'ui',
  reducers: {
    reset: () => initialState,
    setData(state, action: PayloadAction<string>) {
      state.data = action.payload;
    },
  },
});



export const { reset, setData } = authSlice.actions;

// export const selectIsAuthenticated = (state: RootState) =>
//   state.auth.isAuthenticated
