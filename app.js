//app.js
App({
  serverUrl:"http://192.168.2.180:8081",
  userInfo: null,

  setGlobalUserInfo: function (user) {
    wx.setStorageSync("userInfo", user);
  },

  getGlobalUserInfo: function () {
    return wx.getStorageSync("userInfo");
  }
})