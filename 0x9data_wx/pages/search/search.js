// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_date:'',
    sbsbm:'',
    sbzcdm:'',
    dtazdz:'',
    wbdwmc:'',
    sydw:'',
    sydwnbbh:'',
    dtjyjg:'',
    zjyrq:'',
    zjwbrq:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var parse_json = JSON.parse(options.json);
    this.setData({
      json:parse_json
    })
    var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;
   // wx.getStorageInfo({
   //   success: function(res){
   //     console.log(res.keys);
   //     keys = res.keys;
   //   }
   // })
   //       var arr = wx.getStorageSync(x);
   //       s1 = s1.unshift(x);
  //}
  console.log(parse_json[0]);
          s2 = parse_json[0];
          s3 = parse_json[1];
          s4 = parse_json[2];
          s5 = parse_json[3];
          s6 = parse_json[4];
          s7 = parse_json[5];
          s8 = parse_json[6];
          s9 = parse_json[7];
          s10 = parse_json[8];
    
      
        this.setData({
          search_date:'1',
          sbsbm:s2,
          sbzcdm:s3,
          dtazdz:s4,
          wbdwmc:s5,
          sydw:s6,
          sydwnbbh:s7,
          dtjyjg:s8,
          zjyrq:s9,
          zjwbrq:s10,
        })
      
    var value = wx.getStorageSync('key')
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

 
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/history?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})