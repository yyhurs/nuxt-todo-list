(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{156:function(t,e,n){"use strict";n.r(e);var r={name:"CSvgIcons",props:{iconClass:{type:String,required:!0},className:{type:String,default:""},isBlock:{type:Boolean,default:!1},width:{type:String,default:"1em"},height:{type:String,default:"1em"}},computed:{iconName:function(){return"#icon-".concat(this.iconClass)}}},o=(n(263),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"c-svg-icon",class:[t.className,{"c-svg-icon--block":t.isBlock}],style:{width:t.width,height:t.height},attrs:{"aria-hidden":"true",fill:"red"}},[n("use",{attrs:{href:t.iconName}})])}),[],!1,null,"0b6c9b6a",null);e.default=component.exports},157:function(t,e,n){"use strict";n.r(e);var r=n(94),o=n.n(r),c=n(46),l={siteTheme:function(t){return t.siteTheme||"general"},siteLang:function(t){return t.siteLang||"tw"},themeList:function(){var t,e,n,r;return[{name:null===(t=window)||void 0===t||null===(e=t.$nuxt)||void 0===e?void 0:e.$t("global.themeName.__general"),code:"general"},{name:null===(n=window)||void 0===n||null===(r=n.$nuxt)||void 0===r?void 0:r.$t("global.themeName.__netflix"),code:"netflix"}]},langList:function(){var t,e,n;return(null===(t=window)||void 0===t||null===(e=t.$nuxt)||void 0===e||null===(n=e.$i18n)||void 0===n?void 0:n.locales)||[]}},d={SET_SITE_THEME:function(t,e){Object(c.c)(e)||(e="general"),e!==t.siteTheme&&(t.siteTheme=e,window.localStorage.setItem("siteTheme",e),Object(c.d)(e))},SET_SITE_LANG:function(t,e){var n=this.$i18n.defaultLocale;Object(c.c)(e)||(e=n),e!==t.siteLang&&(t.siteLang=e,this.$i18n.setLocale(e))},SET_FULL_VH:function(t,e){t.fullVh=e},SET_IS_LOADING:function(t,e){t.isLoading=e},SET_IS_MODAL_SHOW:function(t,e){t.isModalShow=e}};e.default={namespaced:!0,state:function(){return{siteTheme:window.localStorage.getItem("siteTheme")||"general",siteLang:o.a.get("i18n_redirected")||"tw",fullVh:0,isLoading:!1,isModalShow:!1}},getters:l,mutations:d}},158:function(t,e,n){"use strict";n.r(e);n(24),n(17),n(31),n(9),n(47),n(23),n(48);var r=n(13),o=n(45);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"HeaderRow",methods:l(l({},Object(o.d)("config",["SET_IS_MODAL_SHOW"])),{},{toggleModal:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this;e.SET_IS_MODAL_SHOW(t)}})},f=d,h=(n(261),n(25)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header fixed flex items-center justify-between w-full"},[n("div",{staticClass:"header__item header__icon is-btn"},[n("c-svg-icon",{attrs:{"icon-class":"bars-solid",width:"32px",height:"24px"}})],1),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"header__item header__icon is-btn",on:{click:function(e){return t.toggleModal(!0)}}},[n("c-svg-icon",{attrs:{"icon-class":"setting-solid",width:"32px",height:"24px"}})],1),t._v(" "),n("div",{staticClass:"header__item header__icon is-btn"},[n("c-svg-icon",{attrs:{"icon-class":"sign-out-alt-solid",width:"32px",height:"24px"}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header__item header__content flex-1"},[n("h1",{staticClass:"header__logo text-lg"},[t._v("\n      HandsUP\n    ")])])}],!1,null,"30c557b0",null);e.default=component.exports;installComponents(component,{CSvgIcon:n(156).default})},159:function(t,e,n){"use strict";n.r(e);var r={name:"CLoading",props:{isLoading:{type:Boolean,default:!1},width:{type:String,default:"50px"},height:{type:String,default:"50px"},iconColor:{type:String,default:"var(--primary-border-color)"},iconActiveColor:{type:String,default:"var(--primary-color)"},iconRingWidth:{type:String,default:"8px"}}},o=(n(265),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("div",{staticClass:"c-loading"},[n("div",{staticClass:"c-loading__overlay"},[n("div",{staticClass:"c-loading__icon",style:{width:t.width,height:t.height,"border-width":t.iconRingWidth,"border-color":t.iconColor,"border-top-color":t.iconActiveColor}})])]):t._e()}),[],!1,null,"31019efe",null);e.default=component.exports},160:function(t,e,n){"use strict";n.r(e);var r={name:"CModal",props:{isShow:{type:Boolean,default:!1},width:{type:String,default:"80%"}},methods:{clickOverlay:function(){this.$emit("close")},clickContent:function(){this.$emit("focus")}}},o=(n(267),n(25)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("div",{staticClass:"c-modal"},[n("div",{staticClass:"c-modal__overlay",on:{click:t.clickOverlay}},[n("div",{staticClass:"c-modal__content",style:{width:t.width},on:{click:function(e){return e.stopPropagation(),t.clickContent.apply(null,arguments)}}},[n("div",{staticClass:"c-modal__body"},[t._t("default")],2)])])]):t._e()}),[],!1,null,"0868dda3",null);e.default=component.exports},161:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(95),c=(n(39),n(51),n(31),n(9),n(120),n(70)),l=n.n(c),d=n(46),f=l.a.create({baseURL:"http://localhost:3001/"}),h=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)();case 2:return t.abrupt("return",f.get("/todo-list"));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,text,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.id,text=e.text,r=e.isChecked,o=void 0!==r&&r,n&&text){t.next=3;break}return t.abrupt("return",void 0);case 3:return t.next=5,Object(d.a)();case 5:return c={id:n,text:text,isChecked:o},t.next=8,f.post("/todo-list",c);case 8:return l=t.sent,t.abrupt("return",l);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",void 0);case 2:return t.next=4,Object(d.a)();case 4:return t.next=6,f.delete("/todo-list/".concat(e));case 6:return n=t.sent,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.id,r=e.isChecked,n){t.next=3;break}return t.abrupt("return",void 0);case 3:return t.next=5,Object(d.a)();case 5:return o={isChecked:r},t.next=8,f.patch("/todo-list/".concat(n),o);case 8:return c=t.sent,t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=h,x=v,C=m,y=_,O={STORE_TODO:function(t,e){t.todoArr=Object(o.a)(e)},ADD_TODO:function(t,e){t.todoArr=[].concat(Object(o.a)(t.todoArr),[e])},RM_TODO:function(t,e){t.todoArr=t.todoArr.filter((function(t){return t.id!==e}))},EDIT_TODO:function(t,e){var n=e.id,r=e.isChecked,o=t.todoArr.find((function(t){return t.id===n}));Object.assign(o,{isChecked:r})}},j={getTodoApi:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w();case 3:return e=t.sent,t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},addTodoApi:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},rmTodoApi:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},editTodoApi:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),console.error(t.t0),t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}};e.default={namespaced:!0,state:function(){return{todoArr:[]}},mutations:O,actions:j}},165:function(t,e,n){"use strict";n(44),n(9),n(22);var r=n(1),o=n(156);r.a.component("c-svg-icon",o.default);var c,l=n(315);(c=l).keys().map(c)},201:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("0335f5e6",content,!0,{sourceMap:!1})},202:function(t,e,n){var content=n(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("0c06975c",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("6a584124",content,!0,{sourceMap:!1})},204:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("578d1103",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("2157779d",content,!0,{sourceMap:!1})},218:function(t,e,n){"use strict";n(24),n(17),n(31),n(9),n(47),n(23),n(48);var r=n(13),o=n(45),c=n(46),l=n(158),d=n(159),f=n(160);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{HeaderRow:l.default,CLoading:d.default,CModal:f.default},data:function(){return{}},computed:v(v({},Object(o.e)("config",{isLoading:function(t){return t.isLoading},isModalShow:function(t){return t.isModalShow}})),Object(o.c)("config",["siteTheme","siteLang","themeList","langList"])),mounted:function(){Object(c.d)(this.siteTheme),this.handleFullHeight()},methods:v(v({},Object(o.d)("config",["SET_FULL_VH","SET_IS_MODAL_SHOW","SET_SITE_THEME","SET_SITE_LANG"])),{},{handleFullHeight:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),this.SET_FULL_VH(t)},toggleModal:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this;e.SET_IS_MODAL_SHOW(t)},setTheme:function(t){this.SET_SITE_THEME(t),this.toggleModal(!1)},setLang:function(t){this.SET_SITE_LANG(t),this.toggleModal(!1)}})},_=m,w=(n(269),n(25)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout flex flex-col justify-between h-screen"},[n("header-row"),t._v(" "),n("main",{staticClass:"main flex-1 h-full"},[n("nuxt")],1),t._v(" "),n("c-loading",{attrs:{"is-loading":t.isLoading}}),t._v(" "),n("c-modal",{attrs:{"is-show":t.isModalShow,width:"300px"},on:{close:function(e){return t.toggleModal(!1)}}},[n("div",{staticClass:"setting flex justify-around"},[n("div",{staticClass:"setting__block"},[n("div",{staticClass:"setting__title"},[t._v("\n          "+t._s(t.$t("global.__theme"))+"\n        ")]),t._v(" "),n("ul",{staticClass:"setting__list"},t._l(t.themeList,(function(e){return n("li",{key:"themeList-"+e.code,staticClass:"setting__item is-btn",class:{"setting__item--active":e.code===t.siteTheme},on:{click:function(n){return n.stopPropagation(),t.setTheme(e.code)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)]),t._v(" "),n("div",{staticClass:"setting__block"},[n("div",{staticClass:"setting__title"},[t._v("\n          "+t._s(t.$t("global.__lang"))+"\n        ")]),t._v(" "),n("ul",{staticClass:"setting__list"},t._l(t.langList,(function(e){return n("li",{key:"langList-"+e.code,staticClass:"setting__item is-btn",class:{"setting__item--active":e.code===t.siteLang},on:{click:function(n){return n.stopPropagation(),t.setLang(e.code)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)])])])],1)}),[],!1,null,"176e779e",null);e.a=component.exports;installComponents(component,{HeaderRow:n(158).default,CLoading:n(159).default,CModal:n(160).default})},219:function(t,e,n){n(220),t.exports=n(221)},259:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("3133b3f4",content,!0,{sourceMap:!1})},260:function(t,e,n){var r=n(59)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),r.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}html{-webkit-overflow-scrolling:touch;color:var(--font-normal-color);font-family:"Roboto",sans-serif}body{background-color:var(--primary-bg)}img{display:block;max-width:100%}a{text-decoration:none}.w-full{width:100%}.h-full{height:100%}.h-screen{height:100vh;height:calc(var(--vh, 1vh)*100)}.flex{display:flex}.flex-col{flex-direction:column}.flex-1{flex:1 1 0%}.justify-start{justify-content:start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.items-center{align-items:center}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.p-center{top:50%;left:50%;transform:translate3d(-50%,-50%,0)}.text-lg{font-size:36px}.text-sm{font-size:14px}.font-bold{font-weight:700}.is-btn{cursor:pointer}.is-btn:hover{opacity:.8}.is-btn:active{opacity:.6}',""]),t.exports=r},261:function(t,e,n){"use strict";n(201)},262:function(t,e,n){var r=n(59)(!1);r.push([t.i,".header[data-v-30c557b0]{min-height:55px;padding:0 11px;background:var(--primary-color);color:var(--font-active-color)}.header__icon[data-v-30c557b0]{width:32px}.header__icon+.header__icon[data-v-30c557b0]{margin-left:10px}.header__content[data-v-30c557b0]{padding:0 25px}",""]),t.exports=r},263:function(t,e,n){"use strict";n(202)},264:function(t,e,n){var r=n(59)(!1);r.push([t.i,".c-svg-icon[data-v-0b6c9b6a]{vertical-align:-.15em;overflow:hidden;fill:var(--font-active-color)}.c-svg-icon--block[data-v-0b6c9b6a]{display:block;width:100%}",""]),t.exports=r},265:function(t,e,n){"use strict";n(203)},266:function(t,e,n){var r=n(59)(!1);r.push([t.i,".c-loading[data-v-31019efe]{position:fixed;z-index:5000;width:100%;height:100%}.c-loading__overlay[data-v-31019efe]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:hsla(0,0%,100%,.50196)}.c-loading__icon[data-v-31019efe]{border-radius:50%;border-top:8px solid var(--primary-border-color);border:8px solid var(--primary-border-color);border-top-color:var(--primary-color);-webkit-animation:spin-data-v-31019efe 1s linear infinite;animation:spin-data-v-31019efe 1s linear infinite}@-webkit-keyframes spin-data-v-31019efe{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-31019efe{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",""]),t.exports=r},267:function(t,e,n){"use strict";n(204)},268:function(t,e,n){var r=n(59)(!1);r.push([t.i,".c-modal[data-v-0868dda3]{position:fixed;z-index:1000;width:100%;height:100%}.c-modal__overlay[data-v-0868dda3]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:rgba(0,0,0,.7)}.c-modal__content[data-v-0868dda3]{width:80%;padding:25px 30px;background:var(--container-bg);border:var(--container-border);border-radius:var(--container-curved);box-shadow:var(--container-box-shadow)}",""]),t.exports=r},269:function(t,e,n){"use strict";n(205)},270:function(t,e,n){var r=n(59)(!1);r.push([t.i,".main[data-v-176e779e]{padding:71px 0 24px}.setting__title[data-v-176e779e]{padding-bottom:12px}.setting__item[data-v-176e779e]{padding:5px 0}.setting__item--active[data-v-176e779e]{color:var(--primary-color)}",""]),t.exports=r},271:function(t,e,n){"use strict";n.r(e);var r=n(157),o=n(161);e.default={modules:{config:r.default,todo:o.default}}},315:function(t,e,n){var map={"./bars-solid.svg":316,"./plus-solid.svg":317,"./setting-solid.svg":318,"./sign-out-alt-solid.svg":319,"./trash-alt-solid.svg":320};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=315},316:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n.n(r),c=n(54),l=n.n(c),symbol=new o.a({id:"icon-bars-solid",use:"icon-bars-solid-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-bars-solid">\n<path d="M1.14286 8.25H30.8571C31.4884 8.25 32 7.80231 32 7.25V4.75C32 4.19769 31.4884 3.75 30.8571 3.75H1.14286C0.511643 3.75 0 4.19769 0 4.75V7.25C0 7.80231 0.511643 8.25 1.14286 8.25ZM1.14286 18.25H30.8571C31.4884 18.25 32 17.8023 32 17.25V14.75C32 14.1977 31.4884 13.75 30.8571 13.75H1.14286C0.511643 13.75 0 14.1977 0 14.75V17.25C0 17.8023 0.511643 18.25 1.14286 18.25ZM1.14286 28.25H30.8571C31.4884 28.25 32 27.8023 32 27.25V24.75C32 24.1977 31.4884 23.75 30.8571 23.75H1.14286C0.511643 23.75 0 24.1977 0 24.75V27.25C0 27.8023 0.511643 28.25 1.14286 28.25Z" fill="white" />\n</symbol>'});l.a.add(symbol);e.default=symbol},317:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n.n(r),c=n(54),l=n.n(c),symbol=new o.a({id:"icon-plus-solid",use:"icon-plus-solid-usage",viewBox:"0 0 21 21",content:'<symbol viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-plus-solid">\n<path d="M19.5 8.53125H12.75V2.625C12.75 1.90025 12.0783 1.3125 11.25 1.3125H9.75C8.92172 1.3125 8.25 1.90025 8.25 2.625V8.53125H1.5C0.671719 8.53125 0 9.119 0 9.84375V11.1562C0 11.881 0.671719 12.4688 1.5 12.4688H8.25V18.375C8.25 19.0997 8.92172 19.6875 9.75 19.6875H11.25C12.0783 19.6875 12.75 19.0997 12.75 18.375V12.4688H19.5C20.3283 12.4688 21 11.881 21 11.1562V9.84375C21 9.119 20.3283 8.53125 19.5 8.53125Z" fill="white" />\n</symbol>'});l.a.add(symbol);e.default=symbol},318:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n.n(r),c=n(54),l=n.n(c),symbol=new o.a({id:"icon-setting-solid",use:"icon-setting-solid-usage",viewBox:"0 0 288 288",content:'<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 288 288" id="icon-setting-solid"><defs id="icon-setting-solid_SvgjsDefs1002"></defs><g id="icon-setting-solid_SvgjsG1008"><svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" class="icon" viewBox="0 0 1024 1024"><path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z" fill="#ffffff" class="color000 svgShape" /></svg></g></symbol>'});l.a.add(symbol);e.default=symbol},319:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n.n(r),c=n(54),l=n.n(c),symbol=new o.a({id:"icon-sign-out-alt-solid",use:"icon-sign-out-alt-solid-usage",viewBox:"0 0 32 32",content:'<symbol viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-sign-out-alt-solid">\n<path d="M31.0625 17.0625L20.5625 27.5625C19.625 28.5 18 27.8437 18 26.5V20.5H9.5C8.66875 20.5 8 19.8312 8 19V13C8 12.1687 8.66875 11.5 9.5 11.5H18V5.49999C18 4.16249 19.6188 3.49999 20.5625 4.43749L31.0625 14.9375C31.6438 15.525 31.6438 16.475 31.0625 17.0625ZM12 27.25V24.75C12 24.3375 11.6625 24 11.25 24H6C4.89375 24 4 23.1062 4 22V9.99998C4 8.89373 4.89375 7.99999 6 7.99999H11.25C11.6625 7.99999 12 7.66249 12 7.24999V4.74999C12 4.33749 11.6625 3.99999 11.25 3.99999H6C2.6875 3.99999 0 6.68749 0 9.99998V22C0 25.3125 2.6875 28 6 28H11.25C11.6625 28 12 27.6625 12 27.25Z" fill="white" />\n</symbol>'});l.a.add(symbol);e.default=symbol},320:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n.n(r),c=n(54),l=n.n(c),symbol=new o.a({id:"icon-trash-alt-solid",use:"icon-trash-alt-solid-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-trash-alt-solid">\n<g clip-path="url(#icon-trash-alt-solid_clip0_1_42)">\n<path d="M1.71429 21.75C1.71429 22.3467 1.9852 22.919 2.46744 23.341C2.94968 23.763 3.60373 24 4.28571 24H19.7143C20.3963 24 21.0503 23.763 21.5326 23.341C22.0148 22.919 22.2857 22.3467 22.2857 21.75V6.00001H1.71429V21.75ZM16.2857 9.75001C16.2857 9.5511 16.376 9.36033 16.5368 9.21968C16.6975 9.07903 16.9155 9.00001 17.1429 9.00001C17.3702 9.00001 17.5882 9.07903 17.7489 9.21968C17.9097 9.36033 18 9.5511 18 9.75001V20.25C18 20.4489 17.9097 20.6397 17.7489 20.7803C17.5882 20.921 17.3702 21 17.1429 21C16.9155 21 16.6975 20.921 16.5368 20.7803C16.376 20.6397 16.2857 20.4489 16.2857 20.25V9.75001ZM11.1429 9.75001C11.1429 9.5511 11.2332 9.36033 11.3939 9.21968C11.5547 9.07903 11.7727 9.00001 12 9.00001C12.2273 9.00001 12.4453 9.07903 12.6061 9.21968C12.7668 9.36033 12.8571 9.5511 12.8571 9.75001V20.25C12.8571 20.4489 12.7668 20.6397 12.6061 20.7803C12.4453 20.921 12.2273 21 12 21C11.7727 21 11.5547 20.921 11.3939 20.7803C11.2332 20.6397 11.1429 20.4489 11.1429 20.25V9.75001ZM6 9.75001C6 9.5511 6.09031 9.36033 6.25105 9.21968C6.4118 9.07903 6.62981 9.00001 6.85714 9.00001C7.08447 9.00001 7.30249 9.07903 7.46323 9.21968C7.62398 9.36033 7.71429 9.5511 7.71429 9.75001V20.25C7.71429 20.4489 7.62398 20.6397 7.46323 20.7803C7.30249 20.921 7.08447 21 6.85714 21C6.62981 21 6.4118 20.921 6.25105 20.7803C6.09031 20.6397 6 20.4489 6 20.25V9.75001ZM23.1429 1.50001H16.7143L16.2107 0.623446C16.104 0.436046 15.9397 0.27841 15.7362 0.16827C15.5328 0.0581305 15.2982 -0.000141936 15.0589 8.21846e-06H8.93571C8.69699 -0.000794775 8.46283 0.0572604 8.26007 0.167522C8.05732 0.277784 7.89415 0.435793 7.78929 0.623446L7.28571 1.50001H0.857143C0.629814 1.50001 0.411797 1.57903 0.251051 1.71968C0.0903059 1.86033 0 2.0511 0 2.25001L0 3.75001C0 3.94892 0.0903059 4.13969 0.251051 4.28034C0.411797 4.42099 0.629814 4.50001 0.857143 4.50001H23.1429C23.3702 4.50001 23.5882 4.42099 23.7489 4.28034C23.9097 4.13969 24 3.94892 24 3.75001V2.25001C24 2.0511 23.9097 1.86033 23.7489 1.71968C23.5882 1.57903 23.3702 1.50001 23.1429 1.50001V1.50001Z" fill="#F56767" />\n</g>\n<defs>\n<clipPath id="icon-trash-alt-solid_clip0_1_42">\n<rect width="24" height="24" fill="white" />\n</clipPath>\n</defs>\n</symbol>'});l.a.add(symbol);e.default=symbol},46:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return v}));var r=n(4),o=(n(39),n(9),n(90),n(24),n(23),n(115),n(118),n(44),n(19),n(69),n(126)),c=n(127),l=function(){function t(){Object(o.a)(this,t)}return Object(c.a)(t,null,[{key:"getMainTheme",value:function(){return{primaryColor:{general:"#8dc8ff",netflix:"#e50914"},primaryBg:{general:"#f8f8f8",netflix:"#141414"},primaryBorderColor:{general:"#c7c3c6",netflix:"#808080"},squareCurved:{general:"4px",netflix:"4px"},fontNormalColor:{general:"#000",netflix:"#808080"},fontActiveColor:{general:"#fff",netflix:"#fff"},containerBg:{general:"#fff",netflix:"#141414"},containerBorder:{general:"1px solid #c7c3c6",netflix:"0"},containerCurved:{general:"4px",netflix:"6px"},containerBoxShadow:{general:"none",netflix:"rgb(0 0 0 / 75%) 0px 3px 10px"},scrollbarTrackBg:{general:"rgba(0, 0, 0, 0.06275)",netflix:"rgba(51, 51, 51, 0.6)"},scrollbarThumbBg:{general:"#d6d6d6",netflix:"#dcdcdc"}}}}]),t}(),d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1e3,t.abrupt("return",new Promise((function(t){return setTimeout(t,e)})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(t){return"[object String]"===Object.prototype.toString.call(t)},h=function(t){return Array.isArray(t)},v=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"general",n=l.getMainTheme();if(null!==(t=Object.keys(n))&&void 0!==t&&t.length){var r=document.documentElement.style;Object.entries(n).forEach((function(t){var n=t[0],o=t[1],c=n.split("").map((function(t){return/[A-Z]/.test(t)?"-".concat(t.toLowerCase()):t})).join("");r.setProperty("--".concat(c),o[e])}))}}}},[[219,10,2,11]]]);