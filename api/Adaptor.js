import axios from "axios"
import globalConfig from "../configuration/Config.json";
export const GET = (url) =>{
   return axios.get(`${globalConfig.SERVER_ADDRESS}${url}`)
}