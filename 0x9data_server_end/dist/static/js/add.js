global.webpackJsonp([4],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(7);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '添加TodoList'
  }
});

/***/ }),

/***/ 20:
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
//




var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {},
      content: '',
      time: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* formatTime */])(new Date()).t1,
      date: week[new Date().getDay()]
    };
  },
  beforeMount: function beforeMount() {
    this.getTodolist();
  },

  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;

      // wx.login({
      //   success: function(res){
      //     // success
      //     console.log(res);

      //   },
      // })
      wx.getUserInfo({
        success: function success(res) {
          // success
          console.log(res);
          _this.userInfo = res.userInfo;
        }
      });
    },
    addTodo: function addTodo() {
      if (!this.content.trim()) {
        wx.showToast({
          icon: 'none',
          title: '请输入内容！'
        });
        return;
      }
      console.log(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].state.count);
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('addTodo', {
        content: this.content,
        time: this.time
      });

      this.content = '';

      wx.switchTab({
        url: '/pages/index/index'
      });
    },
    getTodolist: function getTodolist() {
      console.log('json');
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].commit('addTodo', {
        content: 'dfsafsff',
        time: this.time
      });
    }
  },

  mounted: function mounted() {
    // 获取用户信息
    this.getUserInfo();
  }
});

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page-add"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('image', {
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_c('h2', [_vm._v("今天")]), _c('span', [_vm._v(_vm._s(_vm.date) + "  " + _vm._s(_vm.time))])], 1), _vm._v(" "), _c('div', {
    staticClass: "add-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "type": "text",
      "placeholder": "今天需要检查的电梯",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "add-btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addTodo
    }
  }, [_vm._v("添加任务")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-254e33b0", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_254e33b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-254e33b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_254e33b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\add\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-254e33b0", Component.options)
  } else {
    hotAPI.reload("data-v-254e33b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[13]);
//# sourceMappingURL=add.js.map