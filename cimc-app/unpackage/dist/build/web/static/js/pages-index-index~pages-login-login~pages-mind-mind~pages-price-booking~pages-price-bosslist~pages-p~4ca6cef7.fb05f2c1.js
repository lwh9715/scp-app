(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index~pages-login-login~pages-mind-mind~pages-price-booking~pages-price-bosslist~pages-p~4ca6cef7"],{1055:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"c",(function(){return n})),t.d(a,"a",(function(){}));var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"u-icon",class:["u-icon--"+e.labelPos],style:[e.customStyle],on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.click.apply(void 0,arguments)}}},[e.isImg?t("v-uni-image",{staticClass:"u-icon__img",style:[e.imgStyle],attrs:{src:e.name,mode:e.imgMode}}):t("v-uni-text",{staticClass:"u-icon__icon",class:e.customClass,style:[e.iconStyle],attrs:{"hover-class":e.hoverClass},on:{touchstart:function(a){arguments[0]=a=e.$handleEvent(a),e.touchstart.apply(void 0,arguments)}}}),e.label?t("v-uni-text",{staticClass:"u-icon__label",style:{color:e.labelColor,fontSize:e.labelSize+"rpx",marginLeft:"right"==e.labelPos?e.marginLeft+"rpx":0,marginTop:"bottom"==e.labelPos?e.marginTop+"rpx":0,marginRight:"left"==e.labelPos?e.marginRight+"rpx":0,marginBottom:"top"==e.labelPos?e.marginBottom+"rpx":0}},[e._v(e._s(e.label))]):e._e()],1)},n=[]},"18db":function(e,a,t){"use strict";t.r(a);var o=t("1055"),n=t("b435");for(var c in n)["default"].indexOf(c)<0&&function(e){t.d(a,e,(function(){return n[e]}))}(c);t("77fd");var i=t("828b"),d=Object(i["a"])(n["default"],o["b"],o["c"],!1,null,"a9d4776a",null,!1,o["a"],void 0);a["default"]=d.exports},"1ce1":function(e,a,t){"use strict";t("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("64aa"),t("aa9c"),t("4626"),t("5ac7"),t("5ef2");var o={name:"u-icon",props:{name:{type:String,default:""},color:{type:String,default:""},size:{type:[Number,String],default:"inherit"},bold:{type:Boolean,default:!1},index:{type:[Number,String],default:""},hoverClass:{type:String,default:""},customPrefix:{type:String,default:"uicon"},label:{type:String,default:""},labelPos:{type:String,default:"right"},labelSize:{type:[String,Number],default:"28"},labelColor:{type:String,default:"#606266"},marginLeft:{type:[String,Number],default:"6"},marginTop:{type:[String,Number],default:"6"},marginRight:{type:[String,Number],default:"6"},marginBottom:{type:[String,Number],default:"6"},imgMode:{type:String,default:"widthFix"},customStyle:{type:Object,default:function(){return{}}}},computed:{customClass:function(){var e=[];return e.push(this.customPrefix+"-"+this.name),"uicon"==this.customPrefix?e.push("u-iconfont"):e.push(this.customPrefix),this.color&&this.$u.config.type.includes(this.color)&&e.push("u-icon__icon--"+this.color),e},iconStyle:function(){var e={};return e={fontSize:"inherit"==this.size?"inherit":this.size+"rpx",fontWeight:this.bold?"bold":"normal"},this.color&&!this.$u.config.type.includes(this.color)&&(e.color=this.color),e},isImg:function(){return-1!==this.name.indexOf("/")},imgStyle:function(){var e={};return e.width=this.size+"rpx",e}},methods:{click:function(){this.$emit("click",this.index)},touchstart:function(){this.$emit("touchstart",this.index)}}};a.default=o},"77fd":function(e,a,t){"use strict";var o=t("8b06"),n=t.n(o);n.a},"8b06":function(e,a,t){var o=t("c8c4");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=t("967d").default;n("10b890ba",o,!0,{sourceMap:!1,shadowMode:!1})},b435:function(e,a,t){"use strict";t.r(a);var o=t("1ce1"),n=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(a,e,(function(){return o[e]}))}(c);a["default"]=n.a},c8c4:function(e,a,t){var o=t("c86c");a=o(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n\r\n\r\n/* 支付宝，百度，头条，QQ小程序，以及H5在部分浏览器目前读取大的本地字体文件，导致无法显示图标，故用在线加载的方式-2020-06-24 */\n@font-face{font-family:uicon-iconfont;src:url(//at.alicdn.com/t/font_1529455_o1xvu5wfioj.eot);src:url(//at.alicdn.com/t/font_1529455_o1xvu5wfioj.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_1529455_o1xvu5wfioj.woff2) format("woff2"),url(//at.alicdn.com/t/font_1529455_o1xvu5wfioj.woff) format("woff"),url(//at.alicdn.com/t/font_1529455_o1xvu5wfioj.ttf) format("truetype"),url(//at.alicdn.com/t/font_1529455_o1xvu5wfioj.svg#iconfont) format("svg")}\n.u-iconfont[data-v-a9d4776a]::before{display:inline-block}.u-iconfont[data-v-a9d4776a]{position:relative;display:inline-block;font:normal normal normal 14px/1 uicon-iconfont;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.uicon-empty-page[data-v-a9d4776a]:before{content:"\\e627"}.uicon-empty-data[data-v-a9d4776a]:before{content:"\\e62f"}.uicon-empty-car[data-v-a9d4776a]:before{content:"\\e602"}.uicon-empty-order[data-v-a9d4776a]:before{content:"\\e639"}.uicon-empty-address[data-v-a9d4776a]:before{content:"\\e646"}.uicon-empty-message[data-v-a9d4776a]:before{content:"\\e6a9"}.uicon-empty-search[data-v-a9d4776a]:before{content:"\\e664"}.uicon-empty-favor[data-v-a9d4776a]:before{content:"\\e67c"}.uicon-empty-coupon[data-v-a9d4776a]:before{content:"\\e682"}.uicon-empty-history[data-v-a9d4776a]:before{content:"\\e684"}.uicon-empty-permission[data-v-a9d4776a]:before{content:"\\e686"}.uicon-empty-news[data-v-a9d4776a]:before{content:"\\e687"}.uicon-empty-wifi[data-v-a9d4776a]:before{content:"\\e688"}.uicon-empty-list[data-v-a9d4776a]:before{content:"\\e68b"}.uicon-arrow-left-double[data-v-a9d4776a]:before{content:"\\e68c"}.uicon-arrow-right-double[data-v-a9d4776a]:before{content:"\\e68d"}.uicon-red-packet[data-v-a9d4776a]:before{content:"\\e691"}.uicon-red-packet-fill[data-v-a9d4776a]:before{content:"\\e690"}.uicon-order[data-v-a9d4776a]:before{content:"\\e68f"}.uicon-zuojiantou[data-v-a9d4776a]:before{content:"\\e67f"}.uicon-zuo[data-v-a9d4776a]:before{content:"\\e683"}.uicon-checkbox-mark[data-v-a9d4776a]:before{content:"\\e6a8"}.uicon-arrow-up-fill[data-v-a9d4776a]:before{content:"\\e6b0"}.uicon-arrow-down-fill[data-v-a9d4776a]:before{content:"\\e600"}.uicon-backspace[data-v-a9d4776a]:before{content:"\\e67b"}.uicon-android-circle-fill[data-v-a9d4776a]:before{content:"\\e67e"}.uicon-android-fill[data-v-a9d4776a]:before{content:"\\e67d"}.uicon-question[data-v-a9d4776a]:before{content:"\\e715"}.uicon-pause[data-v-a9d4776a]:before{content:"\\e8fa"}.uicon-close[data-v-a9d4776a]:before{content:"\\e685"}.uicon-volume-up[data-v-a9d4776a]:before{content:"\\e633"}.uicon-volume-off[data-v-a9d4776a]:before{content:"\\e644"}.uicon-info[data-v-a9d4776a]:before{content:"\\e653"}.uicon-error[data-v-a9d4776a]:before{content:"\\e6d3"}.uicon-lock-opened-fill[data-v-a9d4776a]:before{content:"\\e974"}.uicon-lock-fill[data-v-a9d4776a]:before{content:"\\e979"}.uicon-lock[data-v-a9d4776a]:before{content:"\\e97a"}.uicon-photo-fill[data-v-a9d4776a]:before{content:"\\e98b"}.uicon-photo[data-v-a9d4776a]:before{content:"\\e98d"}.uicon-account-fill[data-v-a9d4776a]:before{content:"\\e614"}.uicon-minus-people-fill[data-v-a9d4776a]:before{content:"\\e615"}.uicon-plus-people-fill[data-v-a9d4776a]:before{content:"\\e626"}.uicon-account[data-v-a9d4776a]:before{content:"\\e628"}.uicon-thumb-down-fill[data-v-a9d4776a]:before{content:"\\e726"}.uicon-thumb-down[data-v-a9d4776a]:before{content:"\\e727"}.uicon-thumb-up-fill[data-v-a9d4776a]:before{content:"\\e72f"}.uicon-thumb-up[data-v-a9d4776a]:before{content:"\\e733"}.uicon-person-delete-fill[data-v-a9d4776a]:before{content:"\\e66a"}.uicon-cut[data-v-a9d4776a]:before{content:"\\e948"}.uicon-fingerprint[data-v-a9d4776a]:before{content:"\\e955"}.uicon-home-fill[data-v-a9d4776a]:before{content:"\\e964"}.uicon-home[data-v-a9d4776a]:before{content:"\\e965"}.uicon-hourglass-half-fill[data-v-a9d4776a]:before{content:"\\e966"}.uicon-hourglass[data-v-a9d4776a]:before{content:"\\e967"}.uicon-lock-open[data-v-a9d4776a]:before{content:"\\e973"}.uicon-integral-fill[data-v-a9d4776a]:before{content:"\\e703"}.uicon-integral[data-v-a9d4776a]:before{content:"\\e704"}.uicon-coupon[data-v-a9d4776a]:before{content:"\\e8ae"}.uicon-coupon-fill[data-v-a9d4776a]:before{content:"\\e8c4"}.uicon-kefu-ermai[data-v-a9d4776a]:before{content:"\\e656"}.uicon-scan[data-v-a9d4776a]:before{content:"\\e662"}.uicon-rmb[data-v-a9d4776a]:before{content:"\\e608"}.uicon-rmb-circle-fill[data-v-a9d4776a]:before{content:"\\e657"}.uicon-rmb-circle[data-v-a9d4776a]:before{content:"\\e677"}.uicon-gift[data-v-a9d4776a]:before{content:"\\e65b"}.uicon-gift-fill[data-v-a9d4776a]:before{content:"\\e65c"}.uicon-bookmark-fill[data-v-a9d4776a]:before{content:"\\e63b"}.uicon-zhuanfa[data-v-a9d4776a]:before{content:"\\e60b"}.uicon-eye-off-outline[data-v-a9d4776a]:before{content:"\\e62b"}.uicon-eye-off[data-v-a9d4776a]:before{content:"\\e648"}.uicon-pause-circle[data-v-a9d4776a]:before{content:"\\e643"}.uicon-play-circle[data-v-a9d4776a]:before{content:"\\e647"}.uicon-pause-circle-fill[data-v-a9d4776a]:before{content:"\\e654"}.uicon-play-circle-fill[data-v-a9d4776a]:before{content:"\\e655"}.uicon-grid[data-v-a9d4776a]:before{content:"\\e673"}.uicon-play-right[data-v-a9d4776a]:before{content:"\\e610"}.uicon-play-left[data-v-a9d4776a]:before{content:"\\e66d"}.uicon-calendar[data-v-a9d4776a]:before{content:"\\e66e"}.uicon-rewind-right[data-v-a9d4776a]:before{content:"\\e66f"}.uicon-rewind-left[data-v-a9d4776a]:before{content:"\\e671"}.uicon-skip-forward-right[data-v-a9d4776a]:before{content:"\\e672"}.uicon-skip-back-left[data-v-a9d4776a]:before{content:"\\e674"}.uicon-play-left-fill[data-v-a9d4776a]:before{content:"\\e675"}.uicon-play-right-fill[data-v-a9d4776a]:before{content:"\\e676"}.uicon-grid-fill[data-v-a9d4776a]:before{content:"\\e678"}.uicon-rewind-left-fill[data-v-a9d4776a]:before{content:"\\e679"}.uicon-rewind-right-fill[data-v-a9d4776a]:before{content:"\\e67a"}.uicon-pushpin[data-v-a9d4776a]:before{content:"\\e7e3"}.uicon-star[data-v-a9d4776a]:before{content:"\\e65f"}.uicon-star-fill[data-v-a9d4776a]:before{content:"\\e669"}.uicon-server-fill[data-v-a9d4776a]:before{content:"\\e751"}.uicon-server-man[data-v-a9d4776a]:before{content:"\\e6bc"}.uicon-edit-pen[data-v-a9d4776a]:before{content:"\\e612"}.uicon-edit-pen-fill[data-v-a9d4776a]:before{content:"\\e66b"}.uicon-wifi[data-v-a9d4776a]:before{content:"\\e667"}.uicon-wifi-off[data-v-a9d4776a]:before{content:"\\e668"}.uicon-file-text[data-v-a9d4776a]:before{content:"\\e663"}.uicon-file-text-fill[data-v-a9d4776a]:before{content:"\\e665"}.uicon-more-dot-fill[data-v-a9d4776a]:before{content:"\\e630"}.uicon-minus[data-v-a9d4776a]:before{content:"\\e618"}.uicon-minus-circle[data-v-a9d4776a]:before{content:"\\e61b"}.uicon-plus[data-v-a9d4776a]:before{content:"\\e62d"}.uicon-plus-circle[data-v-a9d4776a]:before{content:"\\e62e"}.uicon-minus-circle-fill[data-v-a9d4776a]:before{content:"\\e652"}.uicon-plus-circle-fill[data-v-a9d4776a]:before{content:"\\e661"}.uicon-email[data-v-a9d4776a]:before{content:"\\e611"}.uicon-email-fill[data-v-a9d4776a]:before{content:"\\e642"}.uicon-phone[data-v-a9d4776a]:before{content:"\\e622"}.uicon-phone-fill[data-v-a9d4776a]:before{content:"\\e64f"}.uicon-clock[data-v-a9d4776a]:before{content:"\\e60f"}.uicon-car[data-v-a9d4776a]:before{content:"\\e60c"}.uicon-car-fill[data-v-a9d4776a]:before{content:"\\e636"}.uicon-warning[data-v-a9d4776a]:before{content:"\\e694"}.uicon-warning-fill[data-v-a9d4776a]:before{content:"\\e64d"}.uicon-search[data-v-a9d4776a]:before{content:"\\e62a"}.uicon-baidu-circle-fill[data-v-a9d4776a]:before{content:"\\e680"}.uicon-baidu[data-v-a9d4776a]:before{content:"\\e681"}.uicon-facebook[data-v-a9d4776a]:before{content:"\\e689"}.uicon-facebook-circle-fill[data-v-a9d4776a]:before{content:"\\e68a"}.uicon-qzone[data-v-a9d4776a]:before{content:"\\e695"}.uicon-qzone-circle-fill[data-v-a9d4776a]:before{content:"\\e696"}.uicon-moments-circel-fill[data-v-a9d4776a]:before{content:"\\e69a"}.uicon-moments[data-v-a9d4776a]:before{content:"\\e69b"}.uicon-qq-circle-fill[data-v-a9d4776a]:before{content:"\\e6a0"}.uicon-qq-fill[data-v-a9d4776a]:before{content:"\\e6a1"}.uicon-weibo[data-v-a9d4776a]:before{content:"\\e6a4"}.uicon-weibo-circle-fill[data-v-a9d4776a]:before{content:"\\e6a5"}.uicon-taobao[data-v-a9d4776a]:before{content:"\\e6a6"}.uicon-taobao-circle-fill[data-v-a9d4776a]:before{content:"\\e6a7"}.uicon-twitter[data-v-a9d4776a]:before{content:"\\e6aa"}.uicon-twitter-circle-fill[data-v-a9d4776a]:before{content:"\\e6ab"}.uicon-weixin-circle-fill[data-v-a9d4776a]:before{content:"\\e6b1"}.uicon-weixin-fill[data-v-a9d4776a]:before{content:"\\e6b2"}.uicon-zhifubao-circle-fill[data-v-a9d4776a]:before{content:"\\e6b8"}.uicon-zhifubao[data-v-a9d4776a]:before{content:"\\e6b9"}.uicon-zhihu[data-v-a9d4776a]:before{content:"\\e6ba"}.uicon-zhihu-circle-fill[data-v-a9d4776a]:before{content:"\\e709"}.uicon-list[data-v-a9d4776a]:before{content:"\\e650"}.uicon-list-dot[data-v-a9d4776a]:before{content:"\\e616"}.uicon-setting[data-v-a9d4776a]:before{content:"\\e61f"}.uicon-bell[data-v-a9d4776a]:before{content:"\\e609"}.uicon-bell-fill[data-v-a9d4776a]:before{content:"\\e640"}.uicon-attach[data-v-a9d4776a]:before{content:"\\e632"}.uicon-shopping-cart[data-v-a9d4776a]:before{content:"\\e621"}.uicon-shopping-cart-fill[data-v-a9d4776a]:before{content:"\\e65d"}.uicon-tags[data-v-a9d4776a]:before{content:"\\e629"}.uicon-share[data-v-a9d4776a]:before{content:"\\e631"}.uicon-question-circle-fill[data-v-a9d4776a]:before{content:"\\e666"}.uicon-question-circle[data-v-a9d4776a]:before{content:"\\e625"}.uicon-error-circle[data-v-a9d4776a]:before{content:"\\e624"}.uicon-checkmark-circle[data-v-a9d4776a]:before{content:"\\e63d"}.uicon-close-circle[data-v-a9d4776a]:before{content:"\\e63f"}.uicon-info-circle[data-v-a9d4776a]:before{content:"\\e660"}.uicon-md-person-add[data-v-a9d4776a]:before{content:"\\e6e4"}.uicon-md-person-fill[data-v-a9d4776a]:before{content:"\\e6ea"}.uicon-bag-fill[data-v-a9d4776a]:before{content:"\\e617"}.uicon-bag[data-v-a9d4776a]:before{content:"\\e619"}.uicon-chat-fill[data-v-a9d4776a]:before{content:"\\e61e"}.uicon-chat[data-v-a9d4776a]:before{content:"\\e620"}.uicon-more-circle[data-v-a9d4776a]:before{content:"\\e63e"}.uicon-more-circle-fill[data-v-a9d4776a]:before{content:"\\e645"}.uicon-volume[data-v-a9d4776a]:before{content:"\\e66c"}.uicon-volume-fill[data-v-a9d4776a]:before{content:"\\e670"}.uicon-reload[data-v-a9d4776a]:before{content:"\\e788"}.uicon-camera[data-v-a9d4776a]:before{content:"\\e7d7"}.uicon-heart[data-v-a9d4776a]:before{content:"\\e7df"}.uicon-heart-fill[data-v-a9d4776a]:before{content:"\\e851"}.uicon-minus-square-fill[data-v-a9d4776a]:before{content:"\\e855"}.uicon-plus-square-fill[data-v-a9d4776a]:before{content:"\\e856"}.uicon-pushpin-fill[data-v-a9d4776a]:before{content:"\\e86e"}.uicon-camera-fill[data-v-a9d4776a]:before{content:"\\e870"}.uicon-setting-fill[data-v-a9d4776a]:before{content:"\\e872"}.uicon-google[data-v-a9d4776a]:before{content:"\\e87a"}.uicon-ie[data-v-a9d4776a]:before{content:"\\e87b"}.uicon-apple-fill[data-v-a9d4776a]:before{content:"\\e881"}.uicon-chrome-circle-fill[data-v-a9d4776a]:before{content:"\\e885"}.uicon-github-circle-fill[data-v-a9d4776a]:before{content:"\\e887"}.uicon-IE-circle-fill[data-v-a9d4776a]:before{content:"\\e889"}.uicon-google-circle-fill[data-v-a9d4776a]:before{content:"\\e88a"}.uicon-arrow-down[data-v-a9d4776a]:before{content:"\\e60d"}.uicon-arrow-left[data-v-a9d4776a]:before{content:"\\e60e"}.uicon-map[data-v-a9d4776a]:before{content:"\\e61d"}.uicon-man-add-fill[data-v-a9d4776a]:before{content:"\\e64c"}.uicon-tags-fill[data-v-a9d4776a]:before{content:"\\e651"}.uicon-arrow-leftward[data-v-a9d4776a]:before{content:"\\e601"}.uicon-arrow-rightward[data-v-a9d4776a]:before{content:"\\e603"}.uicon-arrow-downward[data-v-a9d4776a]:before{content:"\\e604"}.uicon-arrow-right[data-v-a9d4776a]:before{content:"\\e605"}.uicon-arrow-up[data-v-a9d4776a]:before{content:"\\e606"}.uicon-arrow-upward[data-v-a9d4776a]:before{content:"\\e607"}.uicon-bookmark[data-v-a9d4776a]:before{content:"\\e60a"}.uicon-eye[data-v-a9d4776a]:before{content:"\\e613"}.uicon-man-delete[data-v-a9d4776a]:before{content:"\\e61a"}.uicon-man-add[data-v-a9d4776a]:before{content:"\\e61c"}.uicon-trash[data-v-a9d4776a]:before{content:"\\e623"}.uicon-error-circle-fill[data-v-a9d4776a]:before{content:"\\e62c"}.uicon-calendar-fill[data-v-a9d4776a]:before{content:"\\e634"}.uicon-checkmark-circle-fill[data-v-a9d4776a]:before{content:"\\e635"}.uicon-close-circle-fill[data-v-a9d4776a]:before{content:"\\e637"}.uicon-clock-fill[data-v-a9d4776a]:before{content:"\\e638"}.uicon-checkmark[data-v-a9d4776a]:before{content:"\\e63a"}.uicon-download[data-v-a9d4776a]:before{content:"\\e63c"}.uicon-eye-fill[data-v-a9d4776a]:before{content:"\\e641"}.uicon-mic-off[data-v-a9d4776a]:before{content:"\\e649"}.uicon-mic[data-v-a9d4776a]:before{content:"\\e64a"}.uicon-info-circle-fill[data-v-a9d4776a]:before{content:"\\e64b"}.uicon-map-fill[data-v-a9d4776a]:before{content:"\\e64e"}.uicon-trash-fill[data-v-a9d4776a]:before{content:"\\e658"}.uicon-volume-off-fill[data-v-a9d4776a]:before{content:"\\e659"}.uicon-volume-up-fill[data-v-a9d4776a]:before{content:"\\e65a"}.uicon-share-fill[data-v-a9d4776a]:before{content:"\\e65e"}uni-image[data-v-a9d4776a]{display:inline-block;will-change:transform}uni-view[data-v-a9d4776a],\r\nuni-text[data-v-a9d4776a]{box-sizing:border-box}.u-icon[data-v-a9d4776a]{display:inline-flex;align-items:center}.u-icon--left[data-v-a9d4776a]{flex-direction:row;align-items:center}.u-icon--right[data-v-a9d4776a]{flex-direction:row-reverse;align-items:center}.u-icon--top[data-v-a9d4776a]{flex-direction:column-reverse;justify-content:center}.u-icon--bottom[data-v-a9d4776a]{flex-direction:column;justify-content:center}.u-icon__icon--primary[data-v-a9d4776a]{color:#2979ff}.u-icon__icon--success[data-v-a9d4776a]{color:#19be6b}.u-icon__icon--error[data-v-a9d4776a]{color:#fa3534}.u-icon__icon--warning[data-v-a9d4776a]{color:#f90}.u-icon__icon--info[data-v-a9d4776a]{color:#909399}.u-icon__img[data-v-a9d4776a]{height:auto;will-change:transform}.u-icon__label[data-v-a9d4776a]{line-height:1}',""]),e.exports=a}}]);