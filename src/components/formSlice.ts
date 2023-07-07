import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  accommodationData: {
    name: string;
    description: string;
    type: string;
    images: File[];
  };
  ownerData: {
    name: string;
    email: string;
    phone: string;
  };
}

const initialState: FormState = {
  accommodationData: {
    name: "",
    description: "",
    type: "",
    images: [],
  },
  ownerData: {
    name: "",
    email: "",
    phone: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAccommodationData: (
      state,
      action: PayloadAction<FormState["accommodationData"]>
    ) => {
      state.accommodationData = action.payload;
    },
    setOwnerData: (state, action: PayloadAction<FormState["ownerData"]>) => {
      state.ownerData = action.payload;
    },
  },
});

export const { setAccommodationData, setOwnerData } = formSlice.actions;

export default formSlice.reducer;
