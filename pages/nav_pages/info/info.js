// pages/nav_pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onBack(){


    // wx.navigateBack({
    //   delta: 2,
    //   success: (res) => {},
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {



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
    //返回值 方式一
    // const pages=getCurrentPages()
    // console.log(pages);
    // //回退两个页面
    // const targetPage=pages[pages.length-3]
    // targetPage.setData({message:"msg from info"})
    const eventChannel=this.getOpenerEventChannel()
    eventChannel.emit("backData2",{name:"abc",age:18})

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