var app = getApp()  
Page({
  data: {
    // products:[],
    products:[
      { "pid": 1, "pro_Name": "C2S02mok", "pro_Type": "CSxil", "pro_img": "http://q98i9va0h.bkt.clouddn.com/df76680a-14fe-43bd-b714-38da0c2d7f2e.png", "pro_Num": 5246, "pro_State": 0, "pro_info": "一款以专用集成电路为核心的经济型MODBUS-RTU RS-485传感器模块.一款以专用集成电路为核心的经济型MODBUS-RTU RS-485传感器模块." }, { "pid": 2, "pro_Name": "C2S01模块", "pro_Type": "C2S系列", "pro_img": "http://q98i9va0h.bkt.clouddn.com/16772fe7-7b7b-4cb0-8b37-01b9308dbba1.png", "pro_Num": 666, "pro_State": 1, "pro_info": "一款以专用集成电路为核心的经济型MODBUS-RTU RS-485传感器模块." }, { "pid": 3, "pro_Name": "C2S01模块", "pro_Type": "C2S系列", "pro_img": "http://q98i9va0h.bkt.clouddn.com/16772fe7-7b7b-4cb0-8b37-01b9308dbba1.png", "pro_Num": 4235, "pro_State": 1, "pro_info": "一款以专用集成电路为核心的经济型MODBUS-RTU RS-485传感器模块." }, { "pid": 6, "pro_Name": "C2S04模块", "pro_Type": "C2系列", "pro_img": "http://q98i9va0h.bkt.clouddn.com/b7603968-317d-4326-87bd-fdf6f12edffd.png", "pro_Num": 5362, "pro_State": 0, "pro_info": "这里是C2S04模块。" }
    ] ,
    menu_hidden:true,
    products_item:[],
    types:[],
    type_re:[],
    type:[],
    product:[]
  },
  // 开始加载
  onLoad:function(){
    var that=this
    wx.showLoading({
      title: '加载中，请稍候',
      duration: 1000
    })
    // wx.request({
    //   url: app.globalData._server +'/products/show' ,
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'get',
    //   async: false,
    //   success: function (res) {
    //     that.setData({
    //       products:res.data.data
    //     })
        that.data.products.forEach(function (item, index) {
          // 筛选单一产品类别
          if (that.data.type.indexOf(item.pro_Type) == -1) {
            that.data.type.push(item.pro_Type);
          }
        })
        that.setData({
          product: that.data.products,
          types: that.data.type
        })
      // }
    // })
  },
//  选择产品系列
  selectProduct:function(event){
    var type=event.currentTarget.dataset['type']
    var that=this
    that.setData({
      products_item:[]
    })
    this.data.products.forEach(function (item, index) {
      if(item.pro_Type==type){
        that.data.products_item.push(item)
        that.setData({
          product: that.data.products_item
        })
      }
    })
    this.menuShow()
  },
  // 选择全部产品
  selectProductAll:function(event){
    this.setData({
      product: this.data.products
    })
    this.menuShow()
  },
  // 悬浮按钮点击事件
  menuShow: function () {
    var that = this;
    that.setData({
      menu_hidden: !that.data.menu_hidden
    })
  }
})