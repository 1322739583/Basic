// pages/map/search/search.js
var QQMapWX = require('../lib/qqmap-wx-jssdk.min.js');
var qqmapsdk = new QQMapWX({
      key: 'OCCBZ-ITBKX-SHH4P-Z2GV4-WGAYE-UJF7C'
    });
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 事件触发，调用接口
  nearby_search: function () {
    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: 'kfc', //搜索关键词
      location: '39.980014,116.313972', //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            // *1转为number
            id: res.data[i].id*1,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "../imgs/icon_marker.png", //图标路径
            width: 41,
            height: 45
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    this.nearby_search()
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