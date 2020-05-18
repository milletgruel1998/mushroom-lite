// 抽离基地址
const BASE_URL = "http://localhost:3000"

function request(params){
  return new Promise ((resolve,reject)=>{
    wx.request({
      url: BASE_URL+params.url,
      method:params.method,
      data:params.data,
      success:(res)=>{
        let { status } = res.data
        if(!status){
          // 将message返回出去
          resolve(res.data)
        }
      }
    })
  })
}
export default request