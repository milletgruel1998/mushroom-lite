// pages/home/home.js
import GetData from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[], // 轮播图图片
    courseList:[], // 推荐课程图片
    hotVideoList:[] // 热门视频
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用获取轮播图图片的方法
    this.GetSwiperImg()
    // 调用获取推荐课程图片的方法
    this.GetCourseImg()
    // 调用获取热门视频的方法
    this.GetHotVideo()
  },

  // 获取轮播图图片的方法
  GetSwiperImg(){
    GetData({
      url:'/api/home/swipers',
      callback:(res)=>{
          this.setData({
            swiperList:res
          })
      }
    })
  },

  // 获取推荐课程图片的方法
  GetCourseImg(){
    GetData({
      url:'/api/home/course',
      callback:(res)=>{
          this.setData({
            courseList:res
          })
      }
    })
  },
  // 获取热门视频的方法
  GetHotVideo(){
    GetData({
      url:'/api/home/video',
      callback:(res)=>{
          this.setData({
            hotVideoList:res
          })
      }
    })
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