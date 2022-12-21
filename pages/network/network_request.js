import { dataRequest } from "../services/index.js"
import {fetchHouseList} from "../services/request/house.js"
import {fetchAllCities, getAllCity} from "../services/request/city.js"
// Basic/pages/network/network_requst.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      allCities:{},
      houselist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
    onLoad() {
    //1.请求一
    // wx.request({
    //   url: 'http://123.207.32.32:1888/api/city/all',
    //   success:res=>{
    //          console.log(res);
    //          this.setData({allCitie:res.data.data})
    //   },
    //   fail:err=>{
    //     console.log(err);
    //   }
    // })

    //2.请求二
    // wx.request({
    //   url: 'http://123.207.32.32:1888/api/home/houselist',
    //   data:{
    //      page:1
    //   },
    //   success:res=>{
    //          console.log(res);
    //          this.setData({houselist:res.data.data})
    //          console.log("hosuList:"+this.houselist);       
    //   },
    //   fail:err=>{
    //     console.log(err);
    //   }
    // })

    //3.请求三
    // dataRequest({
    //   url:"http://123.207.32.32:1888/api/home/houselist",
    //   data:{
    //     page:1
    //   }
    // }).then(res=>{
    //   this.setData({houselist:res.data})
    // })

    // const houseRes=await dataRequest({
    //   url:"http://123.207.32.32:1888/api/home/houselist",
    //   data:{
    //     page:1
    //   }
    // })

    this.getHouseList()
    this.getAllCity()

    
    // const cityRes=await dataRequest({
    //   url:"http://123.207.32.32:1888/api/city/all"
    // })

    // this.setData({allCitie:cityRes.data})
 
  },
  async getAllCity(){
      const allCitiesRes=await fetchAllCities()
      this.setData({allCities:allCitiesRes.data})
  },
  async getHouseList(){
    const houseList=await fetchHouseList()
    this.setData({houselist:houseList.data})
  }
})