(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9404],{96682:function(e,t,n){Promise.resolve().then(n.bind(n,45957))},20786:function(e,t,n){"use strict";n.r(t);var a=n(57437),i=n(38760);let r={initial:{opacity:0,y:50},animate:e=>({opacity:1,y:0,transition:{duration:.3*e,delay:.03*e}})};t.default=function(e){let{children:t,className:n="",index:s,style:A}=e;return(0,a.jsx)(i.E.div,{className:n,variants:r,initial:"initial",whileInView:"animate",viewport:{once:!0},custom:s+1,style:A,children:t})}},45957:function(e,t,n){"use strict";n.d(t,{default:function(){return h}});var a=n(57437),i=n(2265),r=n(20786),s=n(93276),A=n(33145),l=n(27648),c=function(e){let{blog:{title:t,imageProps:n,path:i,categories:r,description:c,date:o,image:u}}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"sofax-inner-blog-img",children:(0,a.jsx)(A.default,{src:null==n?void 0:n.src,alt:null==n?void 0:n.alt,width:200,height:200,layout:"responsive",style:{maxHeight:"300px",width:"100%"}})}),(0,a.jsxs)("div",{className:"sofax-inner-blog-content",children:[(0,a.jsx)("div",{className:"sofax-inner-blog-meta",children:(0,a.jsxs)(l.default,{href:i,children:[(0,a.jsx)("h5",{children:Array.isArray(r)?r.join(", "):r}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:o})})]})}),(0,a.jsxs)("div",{className:"sofax-inner-blog-text",children:[(0,a.jsx)(l.default,{href:i,children:(0,a.jsx)("h3",{children:t})}),(0,a.jsx)("p",{children:c})]}),(0,a.jsxs)(l.default,{className:"sofax-icon-btn sofax-blog-icon-btn",href:i,children:["Learn More"," ",(0,a.jsx)(A.default,{src:s.default,alt:"arrow right"})]})]})]})},o={src:"/_next/static/media/left-arrow.2652f18d.png",height:16,width:10,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAGFBMVEUMDAxMaXENDQ0NDQ0AAAANDQ0NDQ0PDw/2QAPbAAAAB3RSTlN0AFzkBE5nU5jUaQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdJREFUeJwdikEOADAMgmBz6f9/vNiLISBGLpE5dIR5hmJqcCvs8wMJSwBga4fNoQAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8},u={src:"/_next/static/media/right-arrow.981221af.png",height:16,width:10,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAGFBMVEUMDAxMaXENDQ0ODg4AAAANDQ0NDQ0PDw8mliC3AAAAB3RSTlNzAOVaBE5hnyYcHgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdJREFUeJwdisENACAQg0Cr3X9jc35IILAwcovBXSSeQkaQKYPwzwcJ/gBkhmcIAQAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8},d=n(40718),g=n.n(d);function f(e){let{postsPerPage:t,totalPosts:n,paginate:i,currentPage:r}=e,s=[];for(let e=1;e<=Math.ceil(n/t);e++)s.push(e);return(0,a.jsx)("div",{className:"sofax-navigation",children:(0,a.jsx)("nav",{className:"navigation pagination","aria-label":"Posts",children:(0,a.jsxs)("div",{className:"nav-links",children:[(0,a.jsx)("a",{className:"prev page-numbers ".concat(1===r?"disabled":""),onClick:()=>r>1&&i(r-1),href:"#",children:(0,a.jsx)(A.default,{src:o,alt:"Arrow Left"})}),s.map(e=>(0,a.jsx)("a",{className:"page-numbers ".concat(r===e?"current":""),onClick:()=>i(e),href:"#",children:e},e)),(0,a.jsx)("a",{className:"next page-numbers ".concat(r===s.length?"disabled":""),onClick:()=>r<s.length&&i(r+1),href:"#",children:(0,a.jsx)(A.default,{src:u,alt:"Arrow Right"})})]})})})}f.propTypes={postsPerPage:g().number.isRequired,totalPosts:g().number.isRequired,paginate:g().func.isRequired,currentPage:g().number.isRequired};var h=function(e){let{BlogPosts:t=[]}=e,[n,s]=(0,i.useState)(1),A=5*n,l=t.slice(A-5,A);return(0,a.jsx)("section",{className:"sofax-section-padding2",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("div",{className:"col-lg-12",children:[l.map((e,t)=>(0,a.jsx)(r.default,{className:"sofax-inner-blog-wrap",index:t,children:(0,a.jsx)(c,{blog:e})},e.id)),(0,a.jsx)(f,{postsPerPage:5,totalPosts:t.length,paginate:e=>s(e),currentPage:n})]})})})})}},33145:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var a=n(48461),i=n.n(a)},27648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var a=n(72972),i=n.n(a)},48461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return A}});let a=n(47043),i=n(55346),r=n(65878),s=a._(n(5084));function A(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=r.Image},48049:function(e,t,n){"use strict";var a=n(14397);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,s){if(s!==a){var A=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},40718:function(e,t,n){e.exports=n(48049)()},14397:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},93276:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/arrow-right.1b0286fd.png",height:24,width:24,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXEMDAwNDQ0MDAwPDw8MDAwNDQ0ODg4ODg7ubG5xAAAACXRSTlMAFE1DESdierQVbxgZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgQAbMrFAGIzsjAwMLExMTMxsHI4IBl0JRDOIBAAytAFvOpBihAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[2972,5878,8760,2971,2117,560],function(){return e(e.s=96682)}),_N_E=e.O()}]);