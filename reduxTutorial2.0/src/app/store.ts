import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { counterSlice } from "../features/counter/counterSlice"
import { quotesApiSlice } from "../features/quotes/quotesApiSlice"
import { feedApiSlice } from "../features/feed/FeedApi"

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer= combineSlices(quotesApiSlice,counterSlice,feedApiSlice)
// Infer the `RootState` type from the root reducer


// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config

  export const store = configureStore({
    // reducer:{
    //   [quotesApiSlice.reducerPath]: quotesApiSlice.redcucer,
    //   counterSlice,
    //   [feedApi.reducerPath]:feedApi.reducer
    // },
    reducer:rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(quotesApiSlice.middleware).concat(feedApiSlice.middleware)
    },

  })
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
