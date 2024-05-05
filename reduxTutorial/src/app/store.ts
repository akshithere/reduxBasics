//This is a one time creation per app
/* 

In Redux, the state is managed by a single JavaScript object called the "store". The store holds the entire state tree
 of your application. It's created by passing a root reducer function to the createStore function provided by Redux or,
  in the case of Redux Toolkit, by using the configureStore function.
*/
import { configureStore } from "@reduxjs/toolkit";
import counterSliceKaReducerByDefaultExport from "../features/counter/counterSlice";
import todoSliceReducer from "../features/todo/todoSlice"
import { dawgsApiSlice } from "../features/dogs-api-slice/dawgApiSlice";
//if we use reducer:{} it work similar to combine reducer thingy
export const store = configureStore({
  // we are expected to provide a root reducer jo ki RTK khud kar rahi hai for us
  reducer: {
    firstSliceReducerLabel: counterSliceKaReducerByDefaultExport,
    todoSliceLabel: todoSliceReducer,
    [dawgsApiSlice.reducerPath]:dawgsApiSlice.reducer
  },
  // this reducer obejct will automatically call the combineReducer so that we end up with the
  // state.firstReducer field
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(dawgsApiSlice.middleware)
});

// export some types that are based on the store itself
export type AppDispatch = typeof store.dispatch;
//Here typeof store.getState will return the function signature from where are extracting the return type
export type RootState = ReturnType<typeof store.getState>;
