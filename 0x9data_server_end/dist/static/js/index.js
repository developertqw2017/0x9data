global.webpackJsonp([2],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: 'TodoList',
    enablePullDownRefresh: true
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      date: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* formatTime */])(new Date()).t1,
      startDate: '2015-09-01',
      isLoadMore: false
    };
  },


  computed: {
    todo: function todo() {
      return __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.todo;
    }
  },

  methods: {
    login_u: function login_u(e) {
      var that = this;
      var domain_url = this.globalData.domain;
      var encryptdata = {};
      // 登陆
      wx.login({
        success: function success(res) {
          // console.log('loginsuc',res)
          encryptdata['code'] = res['code'];

          // 请求用户信息
          wx.getUserInfo({
            success: function success(res) {
              // console.log('getuserinfosuc',res)
              encryptdata['encrypteddata'] = res['encryptedData'];
              encryptdata['iv'] = res['iv'];
              console.log('加密信息', encryptdata);
              // 请求服务器
              wx.request({
                url: domain_url + 'login/',
                method: 'POST',
                data: Util.json2Form(encryptdata),
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                success: function success(res) {
                  var info = res['data'];
                  // console.log('login_r', res)
                  if (typeof info.error !== 'undefined') {
                    // 与服务器链接失败
                    console.log('与服务器链接失败');

                    wx.navigateTo({
                      url: '../error/error?error=' + info.error
                    });
                  } else {
                    // 服务器返回内容
                    var info = res['data'];
                    var userinfo = info['info'];
                    // 缓存 cookie
                    wx.setStorage({
                      key: 'cookie',
                      data: userinfo['cookie']
                    });

                    // 添加全局数据
                    that.globalData.cookie = userinfo['cookie'];
                    that.globalData.userInfo = userinfo;
                    that.globalData.dirs = info['dirs'];
                    that.globalData.cur_dir = info['dirs'][0];
                    // console.log('global',that.globalData)
                    typeof cb == "function" && cb(that.globalData);
                  }
                },
                // 请求服务器失败
                fail: function fail() {
                  console.log('请求服务器失败');
                  wx.navigateTo({
                    url: '../error/error?errorinfo=' + '请求服务器失败'
                  });
                }

              });
            },
            // 获取用户信息失败
            fail: function fail(res) {
              console.log('获取用户信息失败', res);
              wx.navigateTo({
                url: '../error/error?errorinfo=' + '获取用户信息失败'
              });
            }
          });
        },

        // 登陆失败
        fail: function fail(res) {
          console.log('登陆失败', res);
          wx.navigateTo({
            url: '../error/error?errorinfo=' + '登陆失败'
          });
        }
      });
    },
    bindDateChange: function bindDateChange(e) {
      this.date = e.target.value;
    },
    testStore: function testStore() {
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('increment');
      console.log(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.count);
    }
  },

  created: function created() {},
  mounted: function mounted() {
    console.log(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state);

    __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('increment');
  },
  onPullDownRefresh: function onPullDownRefresh() {
    wx.showNavigationBarLoading();

    setTimeout(function () {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 3000);
  },
  onReachBottom: function onReachBottom() {
    var _this = this;

    wx.showNavigationBarLoading();

    this.isLoadMore = true;

    setTimeout(function () {
      wx.hideNavigationBarLoading();
      _this.isLoadMore = false;
    }, 3000);
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-list"
  }, [_c('picker', {
    staticClass: "picker",
    attrs: {
      "mode": "date",
      "value": _vm.date,
      "start": _vm.startDate,
      "eventid": '0'
    },
    on: {
      "change": _vm.bindDateChange
    }
  }, [_c('view', [_vm._v("\n      选择日期: " + _vm._s(_vm.date) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "list",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.testStore
    }
  }, _vm._l((_vm.todo), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(index + 1) + ": " + _vm._s(item.content))]), _vm._v(" "), _c('div', {
      staticClass: "time"
    }, [_vm._v(_vm._s(_vm.date))])])
  })), _vm._v(" "), (_vm.isLoadMore) ? _c('div', {
    staticClass: "load-more"
  }, [_vm._v("加载中...")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a206c4be", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a206c4be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a206c4be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_a206c4be_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a206c4be", Component.options)
  } else {
    hotAPI.reload("data-v-a206c4be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[16]);
//# sourceMappingURL=index.js.map