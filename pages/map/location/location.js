// pages/map/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
  },

  methods:{
    
    
  },

  getLoacation(){
    wx.getLocation({
      type: 'wgs84',//返回gps坐标
      altitude:true,//返回高度
      isHighAccuracy:true,//开启高精度
      highAccuracyExpireTime:5000,
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        console.log(res);
      }
     })
  },

  openLocation(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于 wx.openLocation 的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
           scale: 18//默认值18，范围5-8
        })
      }
     })
  },
  chooseLocation(){
    wx.chooseLocation({})
  },
  choosePIO(){
    wx.choosePoi()
  },
  // getFuzzyLocation(){
  //   wx.getFuzzyLocation({
  //     type: 'gcj02',
  //     success (res) {
  //       const latitude = res.latitude
  //       const longitude = res.longitude
  //       wx.openLocation({
  //         latitude: latitude,
  //         longitude: longitude,
  //       })
  //     },
  //     fail(err){
  //       console.log(err);
  //     }
  //    })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})