import {dataRequest} from "../index.js"
export function fetchHouseList(){
  return dataRequest({
    url:"http://123.207.32.32:1888/api/home/houselist",
    data:{
      page:1
    }
  })
}

