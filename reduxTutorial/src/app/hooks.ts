// react redux have hooks and there are typescript types that says how these hooks works but hooks dont know anything 
// about the state or the dispatch capabilities of our own application
import { TypedUseSelectorHook,useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const useTypeSafeDispatch = () => useDispatch<AppDispatch>()
export const useTypeSafeSelector: TypedUseSelectorHook<RootState> = useSelector;