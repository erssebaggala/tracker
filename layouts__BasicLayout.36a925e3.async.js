(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{CWS2:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("T2oS");var r=n(a("W9HT"));a("Telt");var l=n(a("Tckk"));a("lUTK");var u=n(a("BvKs")),o=n(a("2Taf")),c=n(a("vZ4D")),d=n(a("l4Ni")),i=n(a("ujKo")),f=n(a("MhPg")),s=a("RBnf"),m=n(a("q1tI")),p=a("Hg0r"),g=a("ArA+"),h=n(a("uZXw")),v=n(a("h3zL")),y=function(e){function t(){var e;return(0,o.default)(this,t),e=(0,d.default)(this,(0,i.default)(t).apply(this,arguments)),e.onMenuClick=function(t){var a=t.key;if("logout"!==a)g.router.push("/account/".concat(a));else{var n=e.props.dispatch;n&&n({type:"login/logout"})}},e}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=void 0===t?{avatar:"",name:""}:t,n=(e.menu,m.default.createElement(u.default,{className:v.default.menu,selectedKeys:[],onClick:this.onMenuClick},m.default.createElement(u.default.Item,{key:"logout"},m.default.createElement(s.LogoutOutlined,null),"Sign out")));return a&&a.name?m.default.createElement(h.default,{overlay:n},m.default.createElement("span",{className:"".concat(v.default.action," ").concat(v.default.account)},m.default.createElement(l.default,{size:"small",className:v.default.avatar,src:a.avatar,alt:"avatar"}),m.default.createElement("span",{className:v.default.name},a.name))):m.default.createElement(r.default,{size:"small",style:{marginLeft:8,marginRight:8}})}}]),t}(m.default.Component),b=(0,p.connect)(function(e){var t=e.user;return{currentUser:t.currentUser}})(y);t.default=b},bx7e:function(e,t,a){"use strict";var n=a("tAuX"),r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a("gWZ8"));var l=r(a("p0pE"));a("+L6B");var u=r(a("2/Rp"));a("J+/v");var o=r(a("MoRW")),c=n(a("Hx5s")),d=a("Y2fQ"),i=n(a("q1tI")),f=a("ArA+"),s=a("Hg0r"),m=r(a("eTk0")),p=r(a("sgkG")),g=a("c+yx"),h=r(a("mxmt")),v=i.default.createElement(o.default,{status:403,title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:i.default.createElement(u.default,{type:"primary"},i.default.createElement(f.Link,{to:"/user/login"},"Go Login"))}),y=function e(t){return t.map(function(t){var a=(0,l.default)({},t,{children:t.children?e(t.children):[]});return m.default.check(t.authority,a,null)})},b=i.default.createElement(c.DefaultFooter,{copyright:"2020 CriminalTracker",links:[]}),E=function(){return(0,g.isAntDesignPro)()?i.default.createElement(i.default.Fragment,null,b,i.default.createElement("div",{style:{padding:"0px 24px 24px",textAlign:"center"}},i.default.createElement("a",{href:"https://www.netlify.com",target:"_blank",rel:"noopener noreferrer"},i.default.createElement("img",{src:"https://www.netlify.com/img/global/badges/netlify-color-bg.svg",width:"82px",alt:"netlify logo"})))):b},k=function(e){var t=e.dispatch,a=e.children,n=e.settings,r=e.location,l=void 0===r?{pathname:"/"}:r;(0,i.useEffect)(function(){t&&t({type:"user/fetchCurrent"})},[]);var u=function(e){t&&t({type:"global/changeLayoutCollapsed",payload:e})},o=(0,g.getAuthorityFromRouter)(e.route.routes,l.pathname||"/")||{authority:void 0};return i.default.createElement(c.default,Object.assign({logo:h.default,formatMessage:d.formatMessage,menuHeaderRender:function(e,t){return i.default.createElement(f.Link,{to:"/"},e,t)},onCollapse:u,menuItemRender:function(e,t){return e.isUrl||e.children||!e.path?t:i.default.createElement(f.Link,{to:e.path},t)},breadcrumbRender:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[]},itemRender:function(e,t,a,n){var r=0===a.indexOf(e);return r?i.default.createElement(f.Link,{to:n.join("/")},e.breadcrumbName):i.default.createElement("span",null,e.breadcrumbName)},footerRender:E,menuDataRender:y,rightContentRender:function(){return i.default.createElement(p.default,null)}},e,n),i.default.createElement(m.default,{authority:o.authority,noMatch:v},a))},x=(0,s.connect)(function(e){var t=e.global,a=e.settings;return{collapsed:t.collapsed,settings:a}})(k);t.default=x},h3zL:function(e,t,a){e.exports={menu:"antd-pro-components-global-header-index-menu",right:"antd-pro-components-global-header-index-right",action:"antd-pro-components-global-header-index-action",search:"antd-pro-components-global-header-index-search",account:"antd-pro-components-global-header-index-account",avatar:"antd-pro-components-global-header-index-avatar",dark:"antd-pro-components-global-header-index-dark",name:"antd-pro-components-global-header-index-name"}},sgkG:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+BJd");n(a("mr32"));a("5Dmo");var r=n(a("3S7+")),l=a("RBnf"),u=n(a("q1tI")),o=a("Hg0r"),c=n(a("CWS2")),d=n(a("trCS")),i=n(a("h3zL")),f=function(e){var t=e.theme,a=e.layout,n=i.default.right;return"dark"===t&&"topmenu"===a&&(n="".concat(i.default.right,"  ").concat(i.default.dark)),u.default.createElement("div",{className:n},u.default.createElement(r.default,{title:"Help"},u.default.createElement("a",{target:"_blank",href:"#",rel:"noopener noreferrer",className:i.default.action},u.default.createElement(l.QuestionCircleOutlined,null))),u.default.createElement(c.default,null),!1,u.default.createElement(d.default,{className:i.default.action}))},s=(0,o.connect)(function(e){var t=e.settings;return{theme:t.navTheme,layout:t.layout}})(f);t.default=s}}]);