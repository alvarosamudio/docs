(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{449:function(e,t,v){"use strict";v.r(t);var r=v(46),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[v("strong",[e._v("在标题栏拖动鼠标出现无法拖动窗口的问题")])]),e._v(" "),v("h2",{attrs:{id:"原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[e._v("#")]),e._v(" 原因")]),e._v(" "),v("p",[v("code",[e._v("DTitlebar")]),e._v("修改了"),v("code",[e._v("mousePressEvent")]),e._v("和"),v("code",[e._v("mouseReleaseEvent")]),e._v("以及"),v("code",[e._v("mouseMoveEvent")]),e._v("这个3个函数，通过拖动窗口标题拖动窗口的方式，依赖这3个函数的处理。")]),e._v(" "),v("br"),e._v(" "),v("h2",{attrs:{id:"解决方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[e._v("#")]),e._v(" 解决方法")]),e._v(" "),v("p",[e._v("在使用"),v("code",[e._v("DTitlebar")]),e._v("时，如果放在"),v("code",[e._v("DTitlebar")]),e._v("里边的控件重写了上面3个函数，该控件需要调用父类（即"),v("code",[e._v("DTitlebar")]),e._v("类）对应的函数，保证相应的事件可以传递到"),v("code",[e._v("DTitlebar")]),e._v("，窗口可以正常拖动。")])])}),[],!1,null,null,null);t.default=s.exports}}]);