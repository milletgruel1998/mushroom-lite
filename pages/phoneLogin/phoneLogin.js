import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip:'获取验证码', // 获取验证码的提示信息
    time:59, // 验证码时间
    vcode:'' // 验证码
  },
  // 失去焦点，获取手机号
  getPhoneNumber(event){
    this.phoneNumber = event.detail.value
  },
  // 获取验证码
async getVerify(){
    // 如果正在倒计时，则不能再点击
    if(this.data.tip!=='获取验证码'){
      return false
    }
    this.setData({
      tip:'59s'
    })
    let timer = setInterval(() => {
      this.setData({
        time:this.data.time-1,
        tip:this.data.time+'s'
      })
      // 如果倒计时小于-1的时候，停止
      if(this.data.time<-1){
        // 清除定时器
        clearInterval(timer)
        // 将tip和time设置为初始值
        this.setData({
          tip:'获取验证码',
          time:59
        })
      }
    }, 1000);
    // 发送请求，获取验证码
   let data = await request({
      url:'/api/user/vcode',
      data:{
        phone:this.phoneNumber
      }
    })
    // 弹出验证码
    wx.showToast({
      title: data.vcode+'',
      icon:'none',
      duration:5000
    })
  },
  // 获取验证码
  getVcode(event){
    this.setData({
      vcode:event.detail.value
    })
  },
  // 立即验证
 async nowVerify(){
   let data = await request({
      url:"/api/user/login",
      method:"post",
      data:{
        phone:this.phoneNumber,
        vcode:this.data.vcode
      }
    })
    // 登录成功保存token
    wx.setStorageSync('token', data.token)
    wx.showToast({
      title: '登录成功',
      duration:2000,
      success(){
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/my/my',
          })
        }, 2000);
      }
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