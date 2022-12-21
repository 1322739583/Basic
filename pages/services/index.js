// export function dataRequest(options){
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       //意思就是选项放前面
//       ...options,
//       success:res=>{
//          resolve(res.data)
//       },
//       //把失败的值给fail
//       // fail:reject
//       fail:err=>{
//         reject(err)
//       }
//     })
//   })
// }

class Request{
  constructor(baseUrl){
    this.baseUrl=baseUrl
  }
  request(options){
    const {url}=options
    return new Promise((resolve,reject)=>{
      wx.request({
        //意思就是选项放前面
        ...options,
        //重新给url赋值
        url:this.baseUrl+url,
        success:res=>{
           resolve(res.data)
        },
        //把失败的值给fail
        // fail:reject
        fail:err=>{
          reject(err)
        }
      })
    })
  }
  get(options){
    return this.request({...options,method:"get"})
  }
  post(options){
    return this.request({...options,method:"post"})
  }
}

export const request=new Request("http://123.207.32.32:3000")
//可能地址不一样
export const loginReqInstance=new Request("http://123.207.32.32:3000")