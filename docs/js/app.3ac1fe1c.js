(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)o=r[u],i[o]&&h.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/splitpanes/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var s=n("2b0e"),i=n("ce5b"),a=n.n(i);n("bf40"),n("15f5");s["default"].use(a.a,{iconfont:["md","fa"],theme:{primary:"#42b983",lightgrey:"#eee"}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"white"},[s("v-container",[s("div",{staticClass:"text-xs-center"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05"),height:"40"}}),s("h1",{staticClass:"mb-3 headline"},[t._v("Vue Split Panes")]),s("p",{staticClass:"subheading"},[t._v("A Vue JS reliable and simple panes splitter / resizer.")])]),s("v-layout",{attrs:{row:""}},[s("v-flex",[s("h2",{staticClass:"mt-5 mb-2 title"},[t._v("Features")]),s("ul",[s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Nesting supported")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Light weight & no dependencies other than Vue JS")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Simple yet efficient")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("More features to come!")],1)])]),s("div",[s("div",{staticClass:"mt-5 mb-3 title"},[t._v("Github project")]),s("v-layout",{staticClass:"mb-5",attrs:{"align-center":"",shrink:""}},[s("v-icon",{staticClass:"pr-4 lightgrey--text",attrs:{"x-large":""}},[t._v("fab fa-github")]),s("a",{attrs:{href:"https://github.com/antoniandre/splitpanes",target:"_blank"}},[t._v("//github.com/antoniandre/splitpanes "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)],1)],1)],1),s("p",{staticClass:"mt-5 subheading"},[t._v("# Demo 1")]),s("splitpanes",{staticStyle:{height:"400px"}},[s("span",[t._v("1")]),s("splitpanes",{attrs:{horizontal:""}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes style="height: 400px">\n  <span>1</span>\n  <splitpanes horizontal style="height: 400px">\n    <span>2</span>\n    <span>3</span>\n    <span>4</span>\n  </splitpanes>\n  <span>5</span>\n</splitpanes>')]),s("ssh-pre",{pre:!0,attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes {background-color: #f2f2f2;}\n\n.splitpanes__pane {\n  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.splitpanes__splitter {background-color: #fff;}\n.splitpanes--vertical > .splitpanes__splitter {width: 10px;}\n.splitpanes--horizontal > .splitpanes__splitter {height: 10px;}\n\n.splitpanes span {\n  font-family: Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-size: 5em;\n  opacity: 0.6;\n}\n")]),s("p",{staticClass:"mt-5 subheading"},[t._v("# Demo 2")]),s("splitpanes",{staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("splitpanes",{attrs:{vertical:""}},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("span",[t._v("4")])],1),s("h2",{staticClass:"mt-5 headline"},[s("a",{attrs:{href:"#installation"}},[t._v("Installation")]),s("a",{attrs:{name:"installation"}})]),s("p",[t._v("You have two options: "),s("em",[t._v("NPM")]),s("strong",{staticClass:"mx-2"},[t._v("or")]),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag.")]),s("h3",[t._v("Via NPM")]),s("ssh-pre",{attrs:{language:"shell",label:"Shell"}},[t._v("npm install splitpanes --save-dev")]),s("p",[t._v("Then import the 2 components and use it:")]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your VueJS component.\nimport { Splitpanes } from 'splitpanes'\nimport 'splitpanes/dist/splitpanes.min.css'\n\nexport default {\n  components: { Splitpanes },\n  ...\n}\n")]),s("h3",[t._v("Via "),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag")]),s("p",[t._v("Include the Splitpanes script in your document "),s("span",{staticClass:"code"},[t._v("<head>")]),t._v(" as follows:")]),s("ssh-pre",{attrs:{language:"html",label:"HTML"}},[t._v('<head>\n  ...\n  <script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n  <script src="https://unpkg.com/splitpanes/dist/splitpanes.umd.min.js"><\/script>\n  <link href="https://unpkg.com/splitpanes/dist/splitpanes.css" rel="stylesheet">\n</head>\n')]),s("h2",{staticClass:"mt-5"},[s("a",{staticClass:"headline",attrs:{href:"#how-to-use"}},[t._v("How to use")]),s("a",{attrs:{name:"how-to-use"}})]),s("p",[t._v("Once included in your project, use as follows."),s("br"),t._v("\nThe splitters will be added automatically between all the direct children.\n")]),s("highlight-message",{attrs:{type:"tips"}},[t._v("By default the layout is 'column' (vertical), if you need you can set the attribute\n"),s("span",{staticClass:"code"},[t._v("horizontal")]),t._v(" on the "),s("span",{staticClass:"code"},[t._v("<splitpanes>")]),t._v(" tag to change the layout to rows.\n")]),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes>\n  <div v-for="i in 3" :key="i">{{ i.toString() }}</splitpanes>\n</splitpanes>')])],1)],1)},r=[];function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p,u,h={props:{horizontal:{type:Boolean,default:!1}},data:function(){return{container:{vnode:null,offsetLeft:null,offsetTop:null},panesCount:(this.$slots.default||[]).length,panes:[],splitters:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null,sumOfWidths:0,sumOfHeights:0}}},methods:{bindEvents:function(){var t=this,e="ontouchstart"in window;this.splitters.forEach(function(n,s){t.$refs[n.id].addEventListener(e?"touchstart":"mousedown",function(e){return t.onMouseDown(e,n)})}),document.addEventListener(e?"touchmove":"mousemove",this.onMouseMove),document.addEventListener(e?"touchend":"mouseup",this.onMouseUp)},onMouseDown:function(t,e){this.touch.mouseDown=!0,this.touch.activeSplitter=e;var n=this.touch.activeSplitter.index;this.touch.sumOfWidths=this.panes[n-1].width+this.panes[n].width,this.touch.sumOfHeights=this.touch.sumOfWidths},onMouseMove:function(t){if(this.touch.mouseDown){this.touch.dragging=!0;var e=this.getCurrentMouseDrag(t),n=this.touch.activeSplitter.index,s=0;if(this.horizontal){var i=0;this.panes.forEach(function(t,e){e<n-1&&(i+=t.width)});var a=i*this.container.vnode.clientHeight/100,o=this.getContainerOffsetTop()+a,r=document.documentElement,l=(window.pageYOffset||r.scrollTop)-(r.clientTop||0);s=100*(e.y-o+l)/this.container.vnode.clientHeight*100/this.touch.sumOfHeights,this.panes[n-1].width=s/(100/this.touch.sumOfHeights),this.panes[n].width=(100-s)/(100/this.touch.sumOfHeights)}else{var c=0;this.panes.forEach(function(t,e){e<n-1&&(c+=t.width)});var p=c*this.container.vnode.clientWidth/100,u=this.getContainerOffsetLeft()+p;s=100*(e.x-u)/this.container.vnode.clientWidth*100/this.touch.sumOfWidths,this.panes[n-1].width=s/(100/this.touch.sumOfWidths),this.panes[n].width=(100-s)/(100/this.touch.sumOfWidths)}}},onMouseUp:function(t){this.touch.mouseDown,this.touch.mouseDown=!1,this.touch.dragging=!1},getCurrentMouseDrag:function(t){return{x:"ontouchstart"in window?t.touches[0].clientX:t.clientX,y:"ontouchstart"in window?t.touches[0].clientY:t.clientY}},getContainerOffsetTop:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetTop||t){var e=this.container.vnode,n=e.offsetTop;while(e=e.offsetParent)n+=e.offsetTop;this.container.offsetTop=n}return this.container.offsetTop},getContainerOffsetLeft:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetLeft||t){var e=this.container.vnode,n=e.offsetLeft;while(e=e.offsetParent)n+=e.offsetLeft;this.container.offsetLeft=n}return this.container.offsetLeft}},created:function(){var t=!0,e=!1,n=void 0;try{for(var s,i=(this.$slots.default||[]).keys()[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var a=s.value;this.$set(this.panes,a,{width:this.defaultWidth}),a&&this.$set(this.splitters,a,{id:"splitter-".concat(a),index:a})}}catch(t){e=!0,n=t}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}},mounted:function(){this.container.vnode=this.$refs.container,this.bindEvents()},computed:{defaultWidth:function(){return 100/this.panesCount}},render:function(t){var e=this,n=[];this.$slots.default?this.$slots.default.forEach(function(s,i){if(s.tag||s.text){if(i){var a={class:"splitpanes__splitter",ref:"splitter-".concat(i)};n.push(t("div",a))}var o={class:"splitpanes__pane",style:l({},e.horizontal?{height:"".concat(e.panes[i].width,"%")}:null,e.horizontal?null:{width:"".concat(e.panes[i].width,"%")})};n.push(t("div",o,[s]))}}):n.push(t("div","Splitpanes needs some contents here."));var s={class:["splitpanes","splitpanes--".concat(this.horizontal?"horizontal":"vertical")],ref:"container"};return t("div",s,n)}},f=h,d=(n("5b84"),n("2877")),v=Object(d["a"])(f,p,u,!1,null,null,null);v.options.__file="splitpanes.vue";var g=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:"highlight "+t.type},[n("v-icon",[t._v(t._s(t.icon))]),t._t("default")],2)},b=[],_={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"}},computed:{icon:function(){var t;switch(this.type){case"success":t="check";break;case"error":t="close";break;case"warning":t="error_outline";break;case"tips":t="wb_incandescent";break;case"info":default:t="error_outline";break}return t}}},y=_,w=(n("aef5"),Object(d["a"])(y,m,b,!1,null,null,null));w.options.__file="highlight-message.vue";var O=w.exports,x=n("40bd"),C=(n("b565"),{name:"app",components:{Splitpanes:g,sshPre:x["simpleSyntaxHighlighter"],highlightMessage:O}}),S=C,k=(n("6294"),Object(d["a"])(S,o,r,!1,null,null,null));k.options.__file="app.vue";var j=k.exports;n("d5e8"),n("d1e7");s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(j)}}).$mount("#app")},"5b84":function(t,e,n){"use strict";var s=n("92c6"),i=n.n(s);i.a},6294:function(t,e,n){"use strict";var s=n("ced8"),i=n.n(s);i.a},"6bec":function(t,e,n){},"92c6":function(t,e,n){},aef5:function(t,e,n){"use strict";var s=n("6bec"),i=n.n(s);i.a},ced8:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.3ac1fe1c.js.map