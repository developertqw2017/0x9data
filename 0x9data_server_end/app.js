//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  // 认证用户
  login_u: function (cb) {
    var that = this
    var domain_url = this.globalData.domain
    var encryptdata = {}
    // 登陆
    wx.login({
      success: function (res) {
        console.log('loginsuc',res)
        encryptdata['code'] = res['code']

        // 请求用户信息
        wx.getUserInfo({
          success: function (res) {
            console.log('getuserinfosuc',res)
            encryptdata['encrypteddata'] = res['encryptedData']
            encryptdata['iv'] = res['iv']
            console.log('加密信息', encryptdata)
            // 请求服务器
            wx.request({
              url: domain_url + 'login/',
              method: 'POST',
              data: Util.json2Form(encryptdata),
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function (res) {
                var info = res['data']
                // console.log('login_r', res)
                if (typeof info.error !== 'undefined') {
                  // 与服务器链接失败
                  console.log('与服务器链接失败')

                  wx.navigateTo({
                    url: '../error/error?error=' + info.error,
                  })
                } else {
                  // 服务器返回内容
                  var info = res['data']
                  console.log(info);
                  var userinfo = info['info']
                  // 缓存 cookie
                  console.log(userinfo['cookie']);

                  wx.setStorage({
                    key: 'cookie',
                    data: userinfo['cookie']
                  })

                  // 添加全局数据
                  that.globalData.cookie = userinfo['cookie']
                  that.globalData.userInfo = userinfo

                  typeof(cb == "function" && cb(that.globalData))
                  console.log('global', that.globalData)
                }
              },
              // 请求服务器失败
              fail: function () {
                console.log('请求服务器失败')
                wx.navigateTo({
                  url: '../error/error?errorinfo=' + '请求服务器失败',
                })
              }

            })
          },
          // 获取用户信息失败
          fail: function (res) {
            console.log('获取用户信息失败', res)
            wx.navigateTo({
              url: '../error/error?errorinfo=' + '获取用户信息失败',
            })

          }
        })

      },

      // 登陆失败
      fail: function (res) {
        console.log('登陆失败', res)
        wx.navigateTo({
          url: '../error/error?errorinfo=' + '登陆失败',
        })
      }
    })

  },


  globalData: {
    userInfo: null,
    domain: 'https://hebsjz.0x9.org/upkeep/',
    // domain: 'http://127.0.0.1:8000/scan/',
    cookie: ''
  },
  
})
var Util = require('./utils/util.js')