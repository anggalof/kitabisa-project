import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { SERVICES } from "../../configs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(SERVICES.GET_CAMPAIGN_LIST);
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error.response.status || 500).json({ error: error.message });
  }
}
