// pages/storage/storage.js
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
     wx.setStorageSync('name', "Tom")
     wx.setStorageSync('age', 19)
     wx.setStorageSync('info', {name:"Tom",age:20})
     wx.setStorageSync('nums', [1,2,3])

     wx.setStorage({
       key:"profile",
       data:{
         name:"Jack",
         age:20
       },
       encrypt:true,
       success:(msg)=>{
            console.log("插入成功",msg);
       },
       fail:()=>{

       },
       complete:()=>{
        console.log("complete");
        wx.getStorage({
          key:"profile",
          encrypt:true,
          success:res=>{
              console.log(res);
          }
        })
       }
     })

     const info=wx.getStorageSync('info')
     console.log(info);

    //  console.log("profile:",profile);
    // setTimeout(() => {
    //   wx.clearStorage({
    //     success: (res) => {
    //        console.log("clear:",res);
    //     }
    //   })
  
    // }, 1000);

    setTimeout(() => {
      wx.removeStorageSync('name')
    }, 1000);
    

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