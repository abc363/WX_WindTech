// pages/tabOne/tabOne.js
//获取应用实例  
var app = getApp()  
Page({
    data: {
      movies: [
        { url:'/assets/imgs/slider1.jpg'},
        { url:'/assets/imgs/slider3.jpg'},
        { url:'/assets/imgs/slider2.jpg'}
      ],
      products: [
        { url: '/assets/imgs/econmony.png', title: "高经济性", info: ["高硬件利用率", "低成本实现功能"]},
        { url: '/assets/imgs/independent.png', title: "高可靠性", info: ["电路设计严格符合安全规定", "通过极限测试", "输入端和通信端口防反接和浪涌保护"]},
        { url: '/assets/imgs/flexible.png',title: "高灵活性", info: ["通用设计", "可编程可定制", "产品抽象模块化"]},
        { url: '/assets/imgs/experience.png', title: "行业经验", info: ["企业级应用标准", "行业专家团队", "专业化产品团队"]}
      ]
    },
    onLoad: function () {
  }  
})  
