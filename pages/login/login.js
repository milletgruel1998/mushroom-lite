// pages/login/login.js
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo(event){
    // 用户的avataiUrl 和 用户昵称
    let {avatarUrl,nickName} = event.detail.userInfo
    wx.login({
      success: async (codeRes) => {
       let code = codeRes.code
       let data = await request({
          url:"/api/user/wxlogin",
          method:"post",
          data:{
            code,
            nickname:nickName,
            avatar:avatarUrl
          }
        })
        // 存储token
        wx.setStorageSync('token', data.token)
        wx.showToast({
          title: '登录成功',
          duration:2000,
          success(){
            setTimeout(() => {
              // 如果token存在，回到我的页面
              // wx.navigateBack()
              wx.switchTab({
                url: '/pages/my/my',
              })
            }, 2000);
          }
        })
        
      },
    })
    
  },
  // 点击手机号登录，跳转页面
  toPhoneLogin(){
    wx.navigateTo({
      url: '/pages/phoneLogin/phoneLogin',
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