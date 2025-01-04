"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2072],{24465:function(t,e,n){n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],n=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){r="";for(var o=3,s=0,u=0,l=e.length;u<l;++u)i.options.useIndianSeparators&&4===u&&(o=2,s=1),0!==u&&s%o==0&&(r=i.options.separator+r),s++,r=e[l-u-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+n+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},30498:function(t,e,n){var r=n(2265),i=n(24465);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){!function(t,e,n){var r;(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(t){var e=r.useRef(t);return c(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var p=function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,o=e.easingFn,s=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,h=e.suffix,d=e.useEasing,m=e.useGrouping,y=e.useIndianSeparators,g=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce,w=e.plugin;return new i.CountUp(t,s,{startVal:p,duration:a,decimal:n,decimalPlaces:r,easingFn:o,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:h,plugin:w,useEasing:d,useIndianSeparators:y,useGrouping:m,enableScrollSpy:g,scrollSpyDelay:v,scrollSpyOnce:b})},h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],d={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a,o,s=[],u=!0,l=!1;try{for(a=(n=n.call(t)).next;!(u=(r=a.call(n)).done)&&(s.push(r.value),2!==s.length);u=!0);}catch(t){l=!0,i=t}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}(t,2)||function(t,e){if(t){if("string"==typeof t)return l(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,2)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return o(o({},d),e)},[t]),i=n.ref,a=n.startOnMount,s=n.enableReinitialize,c=n.delay,m=n.onEnd,y=n.onStart,g=n.onPauseResume,v=n.onReset,b=n.onUpdate,w=u(n,h),E=r.useRef(),V=r.useRef(),O=r.useRef(!1),S=f(function(){return p("string"==typeof i?i:i.current,w)}),C=f(function(t){var e=E.current;if(e&&!t)return e;var n=S();return E.current=n,n}),j=f(function(){var t=function(){return C(!0).start(function(){null==m||m({pauseResume:F,reset:x,start:P,update:R})})};c&&c>0?V.current=setTimeout(t,1e3*c):t(),null==y||y({pauseResume:F,reset:x,update:R})}),F=f(function(){C().pauseResume(),null==g||g({reset:x,start:P,update:R})}),x=f(function(){C().el&&(V.current&&clearTimeout(V.current),C().reset(),null==v||v({pauseResume:F,start:P,update:R}))}),R=f(function(t){C().update(t),null==b||b({pauseResume:F,reset:x,start:P})}),P=f(function(){x(),j()}),A=f(function(t){a&&(t&&x(),j())});return r.useEffect(function(){O.current?s&&A(!0):(O.current=!0,A())},[s,O,A,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){x()}},[x]),{start:P,pauseResume:F,reset:x,update:R,getCountUp:C}},y=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,l=t.style,c=u(t,y),p=r.useRef(null),h=r.useRef(!1),d=m(o(o({},c),{},{ref:p,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),g=d.start,v=d.reset,b=d.update,w=d.pauseResume,E=d.getCountUp,V=f(function(){g()}),O=f(function(e){t.preserveValue||v(),b(e)}),S=f(function(){if("function"==typeof t.children&&!(p.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}E()});r.useEffect(function(){S()},[S]),r.useEffect(function(){h.current&&O(t.end)},[t.end,O]);var C=n&&t;return(r.useEffect(function(){n&&h.current&&V()},[V,n,C]),r.useEffect(function(){!n&&h.current&&V()},[V,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect(function(){h.current=!0},[]),"function"==typeof a)?a({countUpRef:p,start:g,reset:v,update:b,pauseResume:w,getCountUp:E}):r.createElement("span",s({className:e,ref:p,style:l},i),void 0!==t.start?E().formattingFn(t.start):"")}},21003:function(t,e,n){n.d(e,{G:function(){return f},Z:function(){return p}});var r=n(2265);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o=function(t){function e(){var e;return(e=t.call(this)||this).state={columns:[],childRefs:[],hasDistributed:!1},e}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t);var n=e.prototype;return n.componentDidUpdate=function(){this.state.hasDistributed||this.props.sequential||this.distributeChildren()},e.getDerivedStateFromProps=function(t,n){var r=t.children,a=t.columnsCount;return n&&r===n.children?null:i({},e.getEqualCountColumns(r,a),{children:r,hasDistributed:!1})},n.distributeChildren=function(){var t=this,e=this.props,n=e.children,a=e.columnsCount,o=Array(a).fill(0);if(this.state.childRefs.every(function(t){return t.current.getBoundingClientRect().height})){var s=Array.from({length:a},function(){return[]}),u=0;r.Children.forEach(n,function(e){if(e&&r.isValidElement(e)){var n=t.state.childRefs[u].current.getBoundingClientRect().height,i=o.indexOf(Math.min.apply(Math,o));o[i]+=n,s[i].push(e),u++}}),this.setState(function(t){return i({},t,{columns:s,hasDistributed:!0})})}},e.getEqualCountColumns=function(t,e){var n=Array.from({length:e},function(){return[]}),i=0,a=[];return r.Children.forEach(t,function(t){if(t&&r.isValidElement(t)){var o=r.createRef();a.push(o),n[i%e].push(r.createElement("div",{style:{display:"flex",justifyContent:"stretch"},key:i,ref:o},t)),i++}}),{columns:n,childRefs:a}},n.renderColumns=function(){var t=this.props,e=t.gutter,n=t.itemTag,a=t.itemStyle;return this.state.columns.map(function(t,o){return r.createElement(n,{key:o,style:i({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignContent:"stretch",flex:1,width:0,gap:e},a)},t.map(function(t){return t}))})},n.render=function(){var t=this.props,e=t.gutter,n=t.className,a=t.style,o=t.containerTag;return r.createElement(o,{style:i({display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"stretch",boxSizing:"border-box",width:"100%",gap:e},a),className:n},this.renderColumns())},e}(r.Component);o.propTypes={},o.defaultProps={columnsCount:3,gutter:"0",className:null,style:{},containerTag:"div",itemTag:"div",itemStyle:{},sequential:!1};var s="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,u=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1];return s(function(){n(!0)},[]),e},l=function(){var t=u(),e=(0,r.useState)("undefined"!=typeof window?window.innerWidth:0),n=e[0],i=e[1],a=(0,r.useCallback)(function(){t&&i(window.innerWidth)},[t]);return s(function(){if(t)return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[t,a]),n},c=function(t){var e=t.columnsCountBreakPoints,n=void 0===e?{350:1,750:2,900:3}:e,i=t.children,a=t.className,o=t.style,s=l(),u=(0,r.useMemo)(function(){var t=Object.keys(n).sort(function(t,e){return t-e}),e=t.length>0?n[t[0]]:1;return t.forEach(function(t){t<s&&(e=n[t])}),e},[s,n]);return r.createElement("div",{className:void 0===a?null:a,style:void 0===o?null:o},r.Children.map(i,function(t,e){return r.cloneElement(t,{key:e,columnsCount:u})}))};c.propTypes={};var f=c,p=o}}]);