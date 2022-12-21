import { dataRequest } from "../index.js";

export function fetchAllCities(){
  return dataRequest({
        url:"http://123.207.32.32:1888/api/city/all"
  })
}