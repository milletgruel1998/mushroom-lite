// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo(event){
    // console.log(event.detail.userInfo);
    // 用户的avataiUrl 和 用户昵称
    let {avatarUrl,nickName} = event.detail.userInfo
    // console.log(nickName);
    wx.login({
      success: async (codeRes) => {
       let code = codeRes.code
       console.log("codeRes",code);
       let data = await request({
          url:"/api/user/wxlogin",
          method:"post",
          data:{
            code,
            nickname:nickName,
            avatar:avatarUrl
          }
        })
        console.log("token:",data.token);
      },
    })
    
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