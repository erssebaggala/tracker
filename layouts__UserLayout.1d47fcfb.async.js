(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{BOD2:function(e,t,a){e.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},obeJ:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("p0pE")),u=a("Hx5s"),r=a("TJpk"),o=a("ArA+"),d=l(a("q1tI")),s=a("Y2fQ"),c=a("Hg0r"),f=l(a("trCS")),m=l(a("mxmt")),i=l(a("BOD2")),p=function(e){var t=e.route,a=void 0===t?{routes:[]}:t,l=a.routes,c=void 0===l?[]:l,p=e.children,g=e.location,y=void 0===g?{pathname:""}:g,E=(0,u.getMenuData)(c),v=E.breadcrumb,b=(0,u.getPageTitle)((0,n.default)({pathname:y.pathname,formatMessage:s.formatMessage,breadcrumb:v},e));return d.default.createElement(d.default.Fragment,null,d.default.createElement(r.Helmet,null,d.default.createElement("title",null,b),d.default.createElement("meta",{name:"description",content:b})),d.default.createElement("div",{className:i.default.container},d.default.createElement("div",{className:i.default.lang},d.default.createElement(f.default,null)),d.default.createElement("div",{className:i.default.content},d.default.createElement("div",{className:i.default.top},d.default.createElement("div",{className:i.default.header},d.default.createElement(o.Link,{to:"/"},d.default.createElement("img",{alt:"logo",className:i.default.logo,src:m.default}),d.default.createElement("span",{className:i.default.title},"CriminalTracker"))),d.default.createElement("div",{className:i.default.desc},"User phone number tracking")),p),d.default.createElement(u.DefaultFooter,null)))},g=(0,c.connect)(function(e){var t=e.settings;return(0,n.default)({},t)})(p);t.default=g}}]);