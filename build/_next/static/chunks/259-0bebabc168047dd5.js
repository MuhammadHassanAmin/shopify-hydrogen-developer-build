(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{50259:function(e,i,t){Promise.resolve().then(t.bind(t,42200)),Promise.resolve().then(t.bind(t,65969)),Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.t.bind(t,72972,23)),Promise.resolve().then(t.bind(t,79499))},74038:function(e,i,t){"use strict";var s=t(57437),l=t(2265);i.Z=function(e){let{label:i,children:t,htmlFor:n,error:a}=e,r=n||function(e){let i=l.Children.only(e);if("id"in(null==i?void 0:i.props))return i.props.id}(t);return(0,s.jsxs)("div",{className:"aximo-account-field",children:[i&&(0,s.jsx)("label",{htmlFor:r,className:"mb-1",children:i}),t,a&&(0,s.jsx)("span",{className:"text-danger",children:a.message})]})}},42200:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return d}});var s=t(57437),l=t(38760),n=t(2265),a=t(27648),r=e=>{let{items:i,depthLevel:t,showMenu:r,setShowMenu:c}=e,[d,h]=(0,n.useState)(!1),u=()=>{d&&h(!1),r&&c(!1)},m=e=>{e.stopPropagation(),h(e=>!e)};return i.submenu?(0,s.jsxs)("li",{className:"nav-item sub-menu-item nav-item-has-children",onClick:u,children:[(0,s.jsxs)("button",{type:"button","aria-expanded":d?"true":"false",onClick:e=>m(e),children:[i.title,(0,s.jsx)(l.E.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",className:"arrow-down-icon",variants:{initial:{rotate:0},animate:()=>{if(d)return{rotate:-180,transition:{duration:.25}}}},initial:"initial",animate:"animate",children:(0,s.jsx)("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"})})]}),d&&(0,s.jsx)(o,{depthLevel:t,submenus:i.submenu,dropdown:d})]}):(0,s.jsx)("li",{className:"nav-item sub-menu-item",onClick:u,children:(0,s.jsx)(a.default,{href:"/".concat(i.url),children:i.title})})},o=e=>{let{submenus:i,dropdown:t,depthLevel:n,showMenu:a,setShowMenu:o}=e;return n+=1,(0,s.jsx)(l.E.ul,{className:"sub-menu level-".concat(n),variants:{initial:{opacity:0,height:0,visibility:"hidden"},animate:()=>{if(t)return{opacity:1,height:"auto",visibility:"visible",transition:{duration:.25,type:"spring"}}}},initial:"initial",animate:"animate",children:i.map((e,i)=>(0,s.jsx)(r,{items:e,depthLevel:n,showMenu:a,setShowMenu:o},i))})},c=e=>{let{items:i,depthLevel:t,showMenu:r,setShowMenu:c,onePage:d}=e,[h,u]=(0,n.useState)(!1),m=()=>{h&&u(!1),r&&c(!1)},x=e=>{e.stopPropagation(),u(e=>!e)};return i.submenu?(0,s.jsxs)("li",{className:"nav-item nav-item-has-children",onClick:m,children:[(0,s.jsxs)("button",{type:"button","aria-expanded":h?"true":"false",onClick:e=>x(e),children:[i.title,(0,s.jsx)(l.E.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",width:"16",height:"16",className:"arrow-down-icon",variants:{initial:{rotate:0},animate:()=>{if(h)return{rotate:-180,transition:{duration:.25}}}},initial:"initial",animate:"animate",children:(0,s.jsx)("path",{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"})})]}),h&&(0,s.jsx)(o,{depthLevel:t,submenus:i.submenu,dropdown:h})]}):(0,s.jsx)("li",{className:"nav-item",onClick:m,children:d?(0,s.jsx)("a",{href:i.url,children:i.title}):(0,s.jsx)(a.default,{href:"/".concat(i.url),children:i.title})})},d=e=>{let{menuItemsData:i,title:t,onePage:a}=e,[r,o]=(0,n.useState)(!1);function d(){o(e=>!e)}return(0,s.jsxs)("div",{className:"mobile-nav-wrap",children:[(0,s.jsx)("div",{className:"mobile-menu-trigger",onClick:d,children:(0,s.jsx)("span",{})}),r&&(0,s.jsxs)(l.E.nav,{className:"mobile-navbar",variants:{initial:{x:"-100%"},animate:()=>{if(r)return{x:0}}},initial:"initial",animate:"animate",children:[(0,s.jsxs)("div",{className:"mobile-menu-head",children:[(0,s.jsx)("div",{className:"mobile-menu-head--title",children:t}),(0,s.jsx)("div",{className:"mobile-menu-head--close",onClick:()=>o(!1),children:"\xd7"})]}),(0,s.jsx)("ul",{children:i.map((e,i)=>(0,s.jsx)(c,{items:e,depthLevel:0,showMenu:r,setShowMenu:o,onePage:a},i))})]}),(0,s.jsx)(l.E.div,{initial:"initial",animate:"animate",variants:{initial:{opacity:0,visibility:"hidden"},animate:()=>{if(r)return{opacity:1,visibility:"visible"}}},className:"mobile-nav--overlay",onClick:d})]})}},65969:function(e,i,t){"use strict";t.d(i,{default:function(){return h}});var s=t(57437),l=t(27648),n=function(){return(0,s.jsx)("div",{className:"sofax-footer-bottom center dark-bottom",children:(0,s.jsx)("p",{children:"\xa9 2025 All Rights Reserved."})})},a=t(74038),r=t(63433),o=t(33145),c=t(29501),d=t(7409),h=function(){let{register:e,handleSubmit:i,reset:t,formState:{errors:h}}=(0,c.cI)();return(0,s.jsxs)("footer",{className:"sofax-footer-section dark-bg",children:[(0,s.jsx)(d.Ix,{position:"bottom-right"}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"sofax-footer-top",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xl-4 col-md-12",children:(0,s.jsxs)("div",{className:"sofax-footer-wrap mr-15 light-color",children:[(0,s.jsx)(l.default,{href:"/multi-page/home-two",children:(0,s.jsx)(o.default,{src:r.default,alt:"Logo"})}),(0,s.jsx)("p",{children:"Sofax is best softwere platform manage your sales depends on your specific business needs budget & industry."}),(0,s.jsx)("div",{className:"sofax-social-icon",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{target:"_blank",href:"https://www.twitter.com/",children:(0,s.jsx)("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M9.96447 7.24539L16.1975 0H14.7205L9.30833 6.29107L4.98567 0H0L6.5367 9.51321L0 17.1111H1.47711L7.19246 10.4675L11.7575 17.1111H16.7432L9.9641 7.24539H9.96447ZM7.94136 9.59702L7.27906 8.64972L2.00933 1.11194H4.27809L8.53082 7.19517L9.19312 8.14247L14.7212 16.0497H12.4524L7.94136 9.59739V9.59702Z",fill:"#0E0E0E"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:(0,s.jsx)("svg",{width:"11",height:"18",viewBox:"0 0 11 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M9.88663 0.00357362L7.65153 0C5.14046 0 3.5177 1.65905 3.5177 4.22688V6.17575H1.27039C1.0762 6.17575 0.918945 6.33263 0.918945 6.52614V9.34984C0.918945 9.54335 1.07638 9.70005 1.27039 9.70005H3.5177V16.8251C3.5177 17.0187 3.67495 17.1754 3.86914 17.1754H6.80123C6.99543 17.1754 7.15268 17.0185 7.15268 16.8251V9.70005H9.7803C9.9745 9.70005 10.1318 9.54335 10.1318 9.34984L10.1328 6.52614C10.1328 6.43323 10.0957 6.34425 10.0299 6.27849C9.9641 6.21274 9.87444 6.17575 9.7812 6.17575H7.15268V4.52367C7.15268 3.72961 7.34257 3.3265 8.3806 3.3265L9.88627 3.32597C10.0803 3.32597 10.2375 3.16909 10.2375 2.97575V0.353788C10.2375 0.160634 10.0805 0.00393098 9.88663 0.00357362Z",fill:"#0E0E0E"})})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:(0,s.jsxs)("svg",{width:"18",height:"17",viewBox:"0 0 18 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M12.043 0H5.9475C3.14256 0 0.86792 2.26664 0.86792 5.06173V11.1358C0.86792 13.9309 3.14256 16.1975 5.9475 16.1975H12.043C14.8479 16.1975 17.1226 13.9309 17.1226 11.1358V5.06173C17.1226 2.26664 14.8479 0 12.043 0ZM15.5987 11.1358C15.5987 13.0896 14.0037 14.679 12.043 14.679H5.9475C3.98678 14.679 2.39179 13.0896 2.39179 11.1358V5.06173C2.39179 3.1079 3.98678 1.51852 5.9475 1.51852H12.043C14.0037 1.51852 15.5987 3.1079 15.5987 5.06173V11.1358Z",fill:"#0E0E0E"}),(0,s.jsx)("path",{d:"M9.00312 4.05713C6.75896 4.05713 4.93945 5.87024 4.93945 8.10651C4.93945 10.3428 6.75896 12.1559 9.00312 12.1559C11.2473 12.1559 13.0668 10.3428 13.0668 8.10651C13.0668 5.87024 11.2473 4.05713 9.00312 4.05713ZM9.00312 10.6374C7.60319 10.6374 6.46333 9.50153 6.46333 8.10651C6.46333 6.71049 7.60319 5.57565 9.00312 5.57565C10.4031 5.57565 11.5429 6.71049 11.5429 8.10651C11.5429 9.50153 10.4031 10.6374 9.00312 10.6374Z",fill:"#0E0E0E"}),(0,s.jsx)("path",{d:"M13.3527 4.29821C13.653 4.29821 13.8964 4.05602 13.8964 3.75726C13.8964 3.4585 13.653 3.21631 13.3527 3.21631C13.0525 3.21631 12.8091 3.4585 12.8091 3.75726C12.8091 4.05602 13.0525 4.29821 13.3527 4.29821Z",fill:"#0E0E0E"})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"https://bd.linkedin.com/",target:"_blank",children:(0,s.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M15.877 15.0112V15.0106H15.8807V9.49947C15.8807 6.8034 15.2983 4.72656 12.1353 4.72656C10.6147 4.72656 9.59433 5.55805 9.17775 6.34633H9.13377V4.97826H6.13477V15.0106H9.25755V10.0429C9.25755 8.73498 9.50637 7.47022 11.1318 7.47022C12.7335 7.47022 12.7573 8.96289 12.7573 10.1268V15.0112H15.877Z",fill:"#0E0E0E"}),(0,s.jsx)("path",{d:"M1.0498 4.99463H4.17636V15.0269H1.0498V4.99463Z",fill:"#0E0E0E"}),(0,s.jsx)("path",{d:"M2.62114 0C1.62147 0 0.810303 0.808321 0.810303 1.80448C0.810303 2.80063 1.62147 3.62586 2.62114 3.62586C3.62081 3.62586 4.43198 2.80063 4.43198 1.80448C4.43135 0.808321 3.62018 0 2.62114 0V0Z",fill:"#0E0E0E"})]})})})]})})]})}),(0,s.jsx)("div",{className:"col-xl-3 col-md-4",children:(0,s.jsxs)("div",{className:"sofax-footer-menu ml-100 light-color",children:[(0,s.jsx)("h5",{children:"Company"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/about-us",children:"About Us"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/contact-us",children:"Contact US"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/contact-us",children:"Privacy Policy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/terms-and-condition",children:"Terms & Conditions"})})]})]})}),(0,s.jsx)("div",{className:"col-xl-2 col-md-4",children:(0,s.jsxs)("div",{className:"sofax-footer-menu ml-50 light-color",children:[(0,s.jsx)("h5",{children:"Utility pages"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/contact-us",children:"Instructions"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/contact-us",children:"Style guide"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/error-page",children:"404 Pages"})}),(0,s.jsx)("li",{children:(0,s.jsx)(l.default,{href:"/contact-us",children:"Licenses"})})]})]})}),(0,s.jsx)("div",{className:"col-xl-3 col-md-4",children:(0,s.jsxs)("div",{className:"sofax-footer-menu light-color",children:[(0,s.jsx)("h5",{children:"Subscribe to our newsletter"}),(0,s.jsx)("div",{className:"sofax-subscription-field2",children:(0,s.jsxs)("form",{onSubmit:i(e=>{(0,d.Am)("Subscription Completed!"),t(),console.log("Submited Form Data = ",e)}),children:[(0,s.jsx)(a.Z,{error:h.email,children:(0,s.jsx)("input",{...e("email",{required:"Email is required."}),type:"email",name:"email",id:"email",placeholder:"Enter your email address"})}),(0,s.jsx)("button",{className:"sofax-subcribe-btn2 subscription-btn-hover",type:"submit",children:"Subscribe now"})]})})]})})]})}),(0,s.jsx)(n,{})]})]})}},33145:function(e,i,t){"use strict";t.d(i,{default:function(){return l.a}});var s=t(48461),l=t.n(s)},27648:function(e,i,t){"use strict";t.d(i,{default:function(){return l.a}});var s=t(72972),l=t.n(s)},48461:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{default:function(){return o},getImageProps:function(){return r}});let s=t(47043),l=t(55346),n=t(65878),a=s._(t(5084));function r(e){let{props:i}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(i))void 0===t&&delete i[e];return{props:i}}let o=n.Image},79499:function(e,i,t){"use strict";t.r(i),i.default={src:"/_next/static/media/logo-dark.08486c3d.svg",height:44,width:71,blurWidth:0,blurHeight:0}},63433:function(e,i,t){"use strict";t.r(i),i.default={src:"/_next/static/media/logo-white.08486c3d.svg",height:44,width:71,blurWidth:0,blurHeight:0}}}]);