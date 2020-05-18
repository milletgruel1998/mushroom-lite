// 抽离基地址
const BASE_URL = "http://localhost:3000"

function request(params){
  // return 把函数返回，不然获取不到方法
  return new Promise ((resolve,reject)=>{
    // 请求前打开 loading
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    wx.request({
      url: BASE_URL+params.url,
      method:params.method,
      data:params.data,
      success:(res)=>{
        let { status } = res.data
        if(!status){
          // 请求成功后，将message返回出去
          resolve(res.data)
        }
      },
      fail:(err)=>{
        // 请求失败
        reject(err)
      },
      // 不管请求成功还是失败都应该结束loading
      complete() {
        wx.hideLoading()
      }
    })
  })
}
export default request