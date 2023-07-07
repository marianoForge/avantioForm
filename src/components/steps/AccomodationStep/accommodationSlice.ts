import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccommodationState {
  accommodationData: {
    name: string;
    description: string;
    type: string;
    images: File[];
  };
}

const initialState: AccommodationState = {
  accommodationData: {
    name: "",
    description: "",
    type: "",
    images: [],
  },
};

export const accommodationSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAccommodationData: (
      state,
      action: PayloadAction<AccommodationState["accommodationData"]>
    ) => {
      state.accommodationData = action.payload;
    },
  },
});

export const { setAccommodationData } = accommodationSlice.actions;

export default accommodationSlice.reducer;
