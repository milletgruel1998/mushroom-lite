import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myInfo:{} // 个人信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
  },
  // 发送请求，获取个人信息
 async getMyInfo(token){
   let data = await request({
      url:'/api/my/info',
      header:{
        Authorization:token
      }
    })
    console.log(data);
    this.setData({
        myInfo:data.message
    })
    console.log(this.data.myInfo);
    
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
    let token = wx.getStorageSync('token')
    // 如果token不存在，跳转登录页
    if(!token){
      wx.navigateTo({
        url: '/pages/login/login'
      })
    }else{
      // 如果token存在,发送请求
      this.getMyInfo(token)
    }
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