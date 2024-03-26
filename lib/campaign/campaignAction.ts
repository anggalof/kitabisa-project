import { AppThunk } from '../store';
import { TCampaign } from "../../service/type";
import { fetchCampaignRequest, fetchCampaignSuccess, fetchCampaignFailure } from './campaignReducer';
import axios from 'axios';

export const fetchCampaign  = (): AppThunk => async (dispatch) => {
  dispatch(fetchCampaignRequest());
  try {
    const response = await axios.get<TCampaign>('/api/proxyEndpoint');
    const campaign = response.data;
    dispatch(fetchCampaignSuccess(campaign));
  } catch (error: any) {
    dispatch(fetchCampaignFailure(error));
  }
};

