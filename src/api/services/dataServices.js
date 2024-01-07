import axios from "axios";

import { ALL_DATA_URL } from "../apiUrls";

export const getAllDataService = () => axios.get(`${ALL_DATA_URL}`);
