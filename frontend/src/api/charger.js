import axios from "axios";
import { Axios, EF_DOMAIN, getSessionId } from './utils';

axios.defaults.withCredentials = true

// 훅의 동작원리 , 훅의 필요성 , 훅의 커스텀 , 태스트 
// 

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
      
//     }
//     return 
//   }
// );

export const chargerApi = {

getWishStation :  async () => {
    const response = await Axios.post(EF_DOMAIN+ "/wishstation",
    {withCredentials: true},
    );
    return response;
},


getWishStations : async () => {
    const response = await axios.post(EF_DOMAIN+ "/getfav",
    {}, // 빈 객체를 요청 본문으로 전송
    {
        headers: {
            withCredentials : true
        },

    }
);
    return response;
},



delwishStation: async (itemId) => {
  const response = await Axios.delete(EF_DOMAIN+ "/delfav",{
   data:{itemId : itemId}
  })
  if (response.status === 200 && response.data === true) {
    return true
  } else {
    return false
  }
},

addWishStation: async (itemId) => {
  const response = await Axios.post(EF_DOMAIN+ "/addfav",{
    itemId : itemId
    });

    if (response.status === 200 && response.data === true) {
      return true;
    } 
    else {
      return false;
    }
},


 // 공공데이터 가져오기
 chargerData : async () => {
    return await axios.get(EF_DOMAIN + "/station",
    {withCredentials: true}
    )
    ;
},

   searchData : async (station_name, city , type , speed_type, skip , lat , lng , meter)  => {
    const request = {
        station_name : station_name+"" ,
        city : city+"" , 
        type : type+"" ,
        speed : speed_type+"",
        skip : parseInt(skip),
        lat : lat ,
        lng : lng ,
        meter : meter
    }
    return await axios.post(EF_DOMAIN + "/search", request);
}, 
}