// pages/qrcode/qrcode.js
// import {} from './lib/qrcode.min.js'
// 将 dist 目录下，weapp.qrcode.esm.js 复制到项目目录中
import drawQrcode from './lib/weapp.qrcode.esm.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  

  onScan() {
    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })

  },

  onScanOnlyCamera() {
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      // ctx: wx.createCanvasContext('myQrcode'),
      text: 'https://www.baidu.com',
      // v1.0.0+版本支持在二维码上绘制图片
      image: {
        imageResource: './imgs/icon.jpg',
        dx: 70,
        dy: 70,
        dWidth: 60,
        dHeight: 60
      }
    })
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