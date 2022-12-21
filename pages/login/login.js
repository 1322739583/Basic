import {
  getCode,checkLogin
} from "../services/request/login";



// pages/login/login.js
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
    //第一种写法：
    //  wx.login({
    //    timeout: 10000,
    //    success:res=>{
    //     const code=res.code
    //     wx.request({
    //       url: 'http://123.207.32.32:3000/login',
    //       data:{
    //         code
    //       },
    //       method:"post",
    //       success:res=>{
    //            console.log(res);
    //            const token=res.data.token
    //            wx.setStorageSync('token', token)
    //       }

    //     })
    //    }
    //  })
    //第二种写法


     checkLogin(token=>{     
       //有可能网络失败，token没有值
       if(token){
        console.log("成功获取token:",token);
       }
     })

  },

  // async checkLogin(success){
  //   //判断有没有token
  //   const token=wx.getStorageSync('token')
  //   //判断token有没有过期，其实可以服务器自己判断，需要单独的接口
  //   if(token){
  //     const loginStatus=await loginReqInstance.post({
  //       url:"/auth",
  //       header:{token}
  //     })
  //     console.log("登录状态:",loginStatus);
  //     //token未过期
  //     if(loginStatus.message==="已登录"){
  //       //请求其他数据
  //       console.log("token未过期，可以继续使用");
  //       console.log("token为:",token);
  //       success(token)
  //     }else{
  //       console.log("token过期，重新获取");
  //       this.loginHandler()
  //     }
  //   }else{
  //     //未登录，请求登录
  //     console.log("未登录");
  //     this.loginHandler()
  //   }
  // },

  // async loginHandler() {
  //   const code = await getCode()
  //   console.log("获取code成功,code为:",code);
  //   const res = await loginReqInstance.post({
  //     url: "/login",
  //     data: {
  //       code
  //     }
  //   })
  //   //获取到的res实际上已经是res.data，所以不需要在获取data了。
  //   console.log("登录成功,token为:",res.token);
  //   wx.setStorageSync('token',res.token)
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