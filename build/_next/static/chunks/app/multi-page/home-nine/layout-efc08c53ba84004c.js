(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1424,4535],{99720:function(i,e,t){Promise.resolve().then(t.bind(t,42200)),Promise.resolve().then(t.bind(t,52214)),Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.t.bind(t,72972,23)),Promise.resolve().then(t.bind(t,79499))},74038:function(i,e,t){"use strict";var n=t(57437),a=t(2265);e.Z=function(i){let{label:e,children:t,htmlFor:s,error:l}=i,r=s||function(i){let e=a.Children.only(i);if("id"in(null==e?void 0:e.props))return e.props.id}(t);return(0,n.jsxs)("div",{className:"aximo-account-field",children:[e&&(0,n.jsx)("label",{htmlFor:r,className:"mb-1",children:e}),t,l&&(0,n.jsx)("span",{className:"text-danger",children:l.message})]})}},42200:function(i,e,t){"use strict";t.d(e,{default:function(){return u}});var n=t(57437),a=t(38760),s=t(2265),l=t(27648),r=i=>{let{items:e,depthLevel:t,showMenu:r,setShowMenu:c}=i,[u,m]=(0,s.useState)(!1),d=()=>{u&&m(!1),r&&c(!1)},h=i=>{i.stopPropagation(),m(i=>!i)};return e.submenu?(0,n.jsxs)("li",{className:"nav-item sub-menu-item nav-item-has-children",onClick:d,children:[(0,n.jsxs)("button",{type:"button","aria-expanded":u?"true":"false",onClick:i=>h(i),children:[e.title,(0,n.jsx)(a.E.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",className:"arrow-down-icon",variants:{initial:{rotate:0},animate:()=>{if(u)return{rotate:-180,transition:{duration:.25}}}},initial:"initial",animate:"animate",children:(0,n.jsx)("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"})})]}),u&&(0,n.jsx)(o,{depthLevel:t,submenus:e.submenu,dropdown:u})]}):(0,n.jsx)("li",{className:"nav-item sub-menu-item",onClick:d,children:(0,n.jsx)(l.default,{href:"/".concat(e.url),children:e.title})})},o=i=>{let{submenus:e,dropdown:t,depthLevel:s,showMenu:l,setShowMenu:o}=i;return s+=1,(0,n.jsx)(a.E.ul,{className:"sub-menu level-".concat(s),variants:{initial:{opacity:0,height:0,visibility:"hidden"},animate:()=>{if(t)return{opacity:1,height:"auto",visibility:"visible",transition:{duration:.25,type:"spring"}}}},initial:"initial",animate:"animate",children:e.map((i,e)=>(0,n.jsx)(r,{items:i,depthLevel:s,showMenu:l,setShowMenu:o},e))})},c=i=>{let{items:e,depthLevel:t,showMenu:r,setShowMenu:c,onePage:u}=i,[m,d]=(0,s.useState)(!1),h=()=>{m&&d(!1),r&&c(!1)},v=i=>{i.stopPropagation(),d(i=>!i)};return e.submenu?(0,n.jsxs)("li",{className:"nav-item nav-item-has-children",onClick:h,children:[(0,n.jsxs)("button",{type:"button","aria-expanded":m?"true":"false",onClick:i=>v(i),children:[e.title,(0,n.jsx)(a.E.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",className:"arrow-down-icon",variants:{initial:{rotate:0},animate:()=>{if(m)return{rotate:-180,transition:{duration:.25}}}},initial:"initial",animate:"animate",children:(0,n.jsx)("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"})})]}),m&&(0,n.jsx)(o,{depthLevel:t,submenus:e.submenu,dropdown:m})]}):(0,n.jsx)("li",{className:"nav-item",onClick:h,children:u?(0,n.jsx)("a",{href:e.url,children:e.title}):(0,n.jsx)(l.default,{href:"/".concat(e.url),children:e.title})})},u=i=>{let{menuItemsData:e,title:t,onePage:l}=i,[r,o]=(0,s.useState)(!1);function u(){o(i=>!i)}return(0,n.jsxs)("div",{className:"mobile-nav-wrap",children:[(0,n.jsx)("div",{className:"mobile-menu-trigger",onClick:u,children:(0,n.jsx)("span",{})}),r&&(0,n.jsxs)(a.E.nav,{className:"mobile-navbar",variants:{initial:{x:"-100%"},animate:()=>{if(r)return{x:0}}},initial:"initial",animate:"animate",children:[(0,n.jsxs)("div",{className:"mobile-menu-head",children:[(0,n.jsx)("div",{className:"mobile-menu-head--title",children:t}),(0,n.jsx)("div",{className:"mobile-menu-head--close",onClick:()=>o(!1),children:"\xd7"})]}),(0,n.jsx)("ul",{children:e.map((i,e)=>(0,n.jsx)(c,{items:i,depthLevel:0,showMenu:r,setShowMenu:o,onePage:l},e))})]}),(0,n.jsx)(a.E.div,{initial:"initial",animate:"animate",variants:{initial:{opacity:0,visibility:"hidden"},animate:()=>{if(r)return{opacity:1,visibility:"visible"}}},className:"mobile-nav--overlay",onClick:u})]})}},52214:function(i,e,t){"use strict";var n=t(57437),a=t(74038),s=t(29501),l=t(7409);e.default=function(){let{register:i,handleSubmit:e,reset:t,formState:{errors:r}}=(0,s.cI)();return(0,n.jsxs)("div",{className:"sofax-subscription-field5",children:[(0,n.jsx)(l.Ix,{position:"bottom-right"}),(0,n.jsxs)("form",{onSubmit:e(i=>{(0,l.Am)("Form Submited!"),t(),console.log("Submite Form Data = ",i)}),children:[(0,n.jsx)(a.Z,{error:r.email,children:(0,n.jsx)("input",{...i("email",{required:"Email is required."}),type:"email",name:"email",id:"email",className:"field-item",placeholder:"Enter Your Email"})}),(0,n.jsx)("button",{type:"submit",className:"sofax-subcribe-btn2",children:"Subscribe now"})]})]})}},27648:function(i,e,t){"use strict";t.d(e,{default:function(){return a.a}});var n=t(72972),a=t.n(n)},79499:function(i,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/logo-dark.08486c3d.svg",height:44,width:71,blurWidth:0,blurHeight:0}}},function(i){i.O(0,[2972,5878,8760,9554,2971,2117,560],function(){return i(i.s=99720)}),_N_E=i.O()}]);