<template>
  <div class="page-list">
    <picker class="picker" mode="date" :value="date" :start="startDate" @change="bindDateChange">
      <view>
        选择日期: {{date}}
      </view>
    </picker>

    <div class="list" @click="testStore">
      <div class="item" :key="index" v-for="(item, index) in todo">
        <div class="content">{{index + 1}}: {{item.content}}</div>
        <div class="time">{{date}}</div>
      </div>
    </div>

    <div v-if="isLoadMore" class="load-more">加载中...</div>
  </div>
</template>

<script>
import { formatTime } from '@/utils';
import store from '@/store';

export default {
  data() {
    return {
      date: formatTime(new Date()).t1,
      startDate: '2015-09-01',
      isLoadMore: false,
    };
  },

  computed: {
    todo: () => store.state.todo,
  },

  methods: {
    login_u(e){
      var that = this
      var domain_url = this.globalData.domain
      var encryptdata = {}
      // 登陆
      wx.login({
        success: function (res) {
          // console.log('loginsuc',res)
          encryptdata['code'] = res['code']

          // 请求用户信息
          wx.getUserInfo({
            success: function (res) {
              // console.log('getuserinfosuc',res)
              encryptdata['encrypteddata'] = res['encryptedData']
              encryptdata['iv'] = res['iv']
              console.log('加密信息',encryptdata)
              // 请求服务器
              wx.request({
                url: domain_url+'login/',
                method:'POST',
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
                    var userinfo = info['info']
                    // 缓存 cookie
                    wx.setStorage({
                      key: 'cookie',
                      data: userinfo['cookie']
                    })

                    // 添加全局数据
                    that.globalData.cookie = userinfo['cookie']
                    that.globalData.userInfo = userinfo
                    that.globalData.dirs = info['dirs']
                    that.globalData.cur_dir = info['dirs'][0]
                    // console.log('global',that.globalData)
                    typeof cb == "function" && cb(that.globalData)
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
    bindDateChange(e) {
      this.date = e.target.value;
    },
    testStore() {
      store.commit('increment');
      console.log(store.state.count);
    },
  },

  created() {
  },

  mounted () {
    console.log(store.state);

    store.commit('increment');
  },

  onPullDownRefresh() {
    wx.showNavigationBarLoading();

    setTimeout(() => {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 3000);
  },

  onReachBottom() {
    wx.showNavigationBarLoading();

    this.isLoadMore = true;

    setTimeout(() => {
      wx.hideNavigationBarLoading();
      this.isLoadMore = false;
    }, 3000);
  },
};
</script>

<style scoped>
  .page-list{
    height: 100%;
  }
  .picker{
    height: 40px;
    line-height: 40px;
    background: #EA5A49;
    color: #FFF;
    padding: 0 10px;
    font-size: 14px;
  }
  .load-more{
    text-align: center;
    font-size: 12px;
    color: #ddd;
    padding: 20px 0;
  }

  .list {
    padding: 10px;
  }
  .list .item{
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }
  .list .item .time{
    font-size: 12px;
    color: #999;
  }

</style>
