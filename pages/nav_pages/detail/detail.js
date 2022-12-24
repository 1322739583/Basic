// pages/nav_pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toInfo(){
      wx.navigateTo({
        url: '/pages/nav_pages/info/info',
        // events: events,
        success: (result) => {},
        fail: (res) => {},
        complete: (res) => {},
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     console.log(options);
  },

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
    const eventChannel=this.getOpenerEventChannel()
    eventChannel.emit("backData1",{name:"abc",age:18})
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