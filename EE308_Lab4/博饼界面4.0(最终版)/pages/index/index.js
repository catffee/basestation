// pages/index/index.js
var ifshow = ""


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifShowRules : "none"
  },

  printGobalData:function(){
    
  },

  onRules: function () {
    if(this.data.ifShowRules=="none"){
      this.setData({ifShowRules:"fles"})
    }else{
      this.setData({ifShowRules:"none"})
    }
    console.log("显示或者隐藏rules")
  },

  onSetting: function () {
    console.log("setting")
  },

  onRecord: function () {
    wx.redirectTo({
      url: "../end/end"
    })
    console.log("record")
  },

  onAdding: function () {
    wx.redirectTo({
      url: "../game/game"
    })
    console.log("adding")
  },

  onEstablish: function () {
    console.log("stablish")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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