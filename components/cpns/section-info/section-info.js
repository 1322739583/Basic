// Basic/pages/cpns/section-info/section-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      //默认值
      value: "默认标题"
    },
    content: {
      type: String,
      value: "默认内容"
    }
  },

  methods: {
    textClick() {
      console.log("text click")
      this.triggerEvent("titleClick","aaa")
    }
  },
  externalClasses: ["changebg"],
  /**
   * 组件的初始数据
   */
  data: {
    // info:{
    //   title:"我是标题",
    //   content:"我是内容"
    // }
  },

  options: {
    styleIsolation: "isolated"
  }
})