import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ReduxState } from "./store";
import { Action, Dispatch } from "@reduxjs/toolkit";

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export function useAppDispatch<T extends Action>() {
  return useDispatch<Dispatch<T>>();
}
