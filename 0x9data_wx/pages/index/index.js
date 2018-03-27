//index.js
//获取应用实例
var util = require('../../utils/util.js');

const app = getApp()
//@device_code 设备码
//@SBSBM 设备识别码 @SBZCDM 设备注册码
const device_code = ['设备识别码','设备注册代码']
var val = 0;
Page({
  data: {
    motto: 'Hello World',
    weeknum: '',
    thisweek: '',
    display_write: '',
    display_read: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    device_code:device_code,
    device_code_now:'sbsbm',
    time:''
  },
  bindChange: function (e) {
    val += 1;
    if(val%2==0){
      this.setData({
        device_code_now:'sbsbm'
      })
    }else{
      this.setData({
        device_code_now: 'sbzcdm'
      })
    }
  },
  //事件处理函数
  save: function() {
    console.log(this.data.thisweek);
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  formSubmit: function (e) {
    var that = this;
    var x=e.detail.value;
    var x=x["summary"];
    console.log(x["summary"]);
    var y=this.data.device_code_now;
    wx.request({
      url: "https://hebsjz.0x9.org?x="+y+"&y="+x, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      dataType:'json',
      fail: function () {
        wx.showToast({
          title: "发生未知错误",
          icon: "none",
          duration: 2000
        })
      },
      success: function (res) {
        //var time_save = util.formatTime(new Date());
        if(res.statusCode == 200){
        that.setData({
          json:res.data[0]
        }),
          wx.getStorageInfo({
            success: function (res) {
              if(res.keys[1]==undefined){
                var key='1';
              }else{
                var key=String(res.keys.length);
                console.log('缓存'+key)
              }
              wx.setStorage({
                key: key,
                data: that.data.json
              })
              console.log('当前拥有keys---'+res.keys)
              console.log(res.currentSize)
              console.log(res.limitSize)
            }
          })
        console.log(that.data.json)
        console.log("res data");
        console.log(JSON.stringify(that.data.json));
        wx.navigateTo({
          url: '/pages/search/search?json=' + JSON.stringify(that.data.json),
        })
      }else{
          wx.showToast({
            title: "未查询到信息",
            icon: "none",
            duration: 2000
          })
      }
      },
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value,this.data.device_code_now)
  },
  
  onLoad: function () {
    function getWeekNumber(d) {
      // Copy date so don't modify original
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      // Set to nearest Thursday: current date + 4 - current day number
      // Make Sunday's day number 7
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
      // Get first day of year
      var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      // Calculate full weeks to nearest Thursday
      var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
      // Return array of year and week number
      return weekNo;
    }
 
    this.setData({
      weeknum: getWeekNumber(new Date())
    })


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  // ,
  // onShareAppMessage: function (res) {
  //   if (res.from === 'button') {
  //     // 来自页面内转发按钮
  //     console.log(res.target)
  //   }
  //   return {
  //     title: '自定义转发标题',
  //     path: '/page/user?id=123',
  //     success: function (res) {
  //       // 转发成功
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //     }
  //   }
  // }
})
