// pages/end/end.js
var app = getApp()
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    player_list: [],
    ifSeat:[],
    maxChampion_name:"",
    userIconName : ["icon1","icon2","icon3","icon4","icon5","icon6","icon7","icon8"]
  },
  
  //退出
  onExit: function () {
    wx.redirectTo({
      url: "../index/index"
    })
    console.log("退出")
  },
  //分享
  onShare: function (res) {
    console.log("分享")
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      player_list : getApp().globalData.player_list,
      ifSeat: getApp().globalData.ifSeat,
      maxChampion_name: getApp().globalData.maxChampion_name
    })
    console.log(this.data.player_list)
    console.log(this.data.ifSeat)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})