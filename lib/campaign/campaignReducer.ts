import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: {},
  loading: false,
  error: null,
};

const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchCampaignRequest(state) {
      state.loading = true;
      state.error = "";
    },
    fetchCampaignSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCampaignFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCampaignRequest, fetchCampaignSuccess, fetchCampaignFailure } = dataReducer.actions;

export default dataReducer.reducer;
