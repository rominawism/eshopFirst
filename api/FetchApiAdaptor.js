import globalConfig from "../configuration/Config.json";
export const GET = (url) =>{
    return fetch (`${globalConfig.SERVER_ADDRESS}${url}`)
}
