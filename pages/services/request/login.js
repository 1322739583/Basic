import {
  loginReqInstance
} from "../index.js";

export function getCode(){
  return new Promise((resolve,reject)=>{
    wx.login({
      timeout: 10000,
      success:res=>{
        resolve(res.code)
      }
    })
  })
}

export async function checkLogin(success){
  //判断有没有token
  const token=wx.getStorageSync('token')
  //判断token有没有过期，其实可以服务器自己判断，需要单独的接口
  if(token){
    const loginStatus=await loginReqInstance.post({
      url:"/auth",
      header:{token}
    })
    console.log("登录状态:",loginStatus);
    //token未过期
    if(loginStatus.message==="已登录"){
      //请求其他数据
      console.log("token未过期，可以继续使用");
      console.log("token为:",token);
      success(token)
    }else{
      console.log("token过期，重新获取");
      this.loginHandler()
    }
  }else{
    //未登录，请求登录
    console.log("未登录");
    this.loginHandler()
  }
}

export async function loginHandler() {
  const code = await getCode()
  console.log("获取code成功,code为:",code);
  const res = await loginReqInstance.post({
    url: "/login",
    data: {
      code
    }
  })
  //获取到的res实际上已经是res.data，所以不需要在获取data了。
  console.log("登录成功,token为:",res.token);
  wx.setStorageSync('token',res.token)
}