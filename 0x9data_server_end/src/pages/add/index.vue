<template>
  <div class="page-add">
    <div class="container">
      <div class="avatar">
        <image :src="userInfo.avatarUrl"></image>
      </div>

      <div class="title">
        <h2>今天</h2><span>{{date}}  {{time}}</span>
      </div>

      <div class="add-box">
        <input type="text" v-model="content" placeholder="今天需要检查的电梯">
      </div>

      <button class="add-btn" @click="addTodo">添加任务</button>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils';
import store from '@/store';

var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']; 

export default {
  data() {
    return {
      userInfo: {},
      content: '',
      time: formatTime(new Date()).t1,
	  date: week[new Date().getDay()],
    };
  },
  beforeMount () {
    this.getTodolist();
  },
  methods: {
    getUserInfo() {
      // wx.login({
      //   success: function(res){
      //     // success
      //     console.log(res);

      //   },
      // })
      wx.getUserInfo({
        success: (res) => {
          // success
          console.log(res);
          this.userInfo = res.userInfo;
        },
      });
    },
    addTodo() {
      if (!this.content.trim()) {
        wx.showToast({
          icon: 'none',
          title: '请输入内容！',
        })
        return;
      }
      console.log(store.state.count);
      store.commit('addTodo', {
        content: this.content,
        time: this.time,
      });

      this.content = '';

      wx.switchTab({
        url: '/pages/index/index',
      });
    },
	getTodolist(){
		console.log('json');
		store.commit('addTodo', {
        content: 'dfsafsff',
        time: this.time,
      })
	
	}
  },

  mounted() {
    // 获取用户信息
    this.getUserInfo();
  },
};
</script>

<style scoped>
  .page-add{
    padding: 25px;
  }
  .avatar{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
  .avatar image{
    width: 100%;
    height: 100%;
  }
  .title h2{
    display: inline;
    color: #333;
    font-size: 20px;
    margin-right: 10px;
  }
  .title span{
    color: #999;
    font-size: 12px;
    font-weight: normal;
  }
  .add-box{
    border: 1px solid #ddd;
    margin: 20px 0;
    border-radius: 3px;
  }
  .add-box input{
    font-size: 14px;
    padding: 5px 10px;
  }
  .add-btn{
    border: none;
    box-shadow: none;
    background: #EA5A49;
    color: #FFF;
    font-size: 14px;
    transition: transform 0.3s linear;
  }
  .add-btn:active{
    transform: scale(0.95);
  }
  .add-btn:after{
    border: none;
  }
</style>
