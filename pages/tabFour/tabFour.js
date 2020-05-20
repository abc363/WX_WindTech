Page({
  data: {
    latitude: 23.067983,
    longitude: 113.166,
    markers: [{
      id: 1,
      latitude: 23.067983,
      longitude: 113.166,
      name: 'T.I.T 创意园'
    }],
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  }
  
})
