// 抽离基地址
const BASE_URL = "http://localhost:3000"
function GetData(params){
  // 发送请求前，显示loading
  wx.showLoading({
    title:"加载中...",
    mask:true
  })
  
  wx.request({
    url: BASE_URL+params.url,
    success:(res)=>{
      console.log(res);
      if(!res.data.status){
        params.callback(res.data.message)
      }
      // 获取数据后，关闭loading （complete是不管接口调用成功还是失败都会执行的回调函数）
      complete:{
        wx.hideLoading()
      }
    },
  })
}

export default GetData