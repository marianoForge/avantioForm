import { configureStore } from "@reduxjs/toolkit";
import accommodationFormReducer from "./components/steps/AccomodationStep/accommodationSlice";
import ownerFormReducer from "./components/steps/OwnerStep/ownerSlice";

export const store = configureStore({
  reducer: {
    accommodationForm: accommodationFormReducer,
    ownerForm: ownerFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
