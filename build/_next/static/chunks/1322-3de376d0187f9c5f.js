"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1322],{76508:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var r,o,a,l=a[o];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}},1322:function(e,t,n){n.d(t,{D5:function(){return A},_Q:function(){return x},un:function(){return p}});var r=n(2265),o=n(54887),a=n(76508);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}function i(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function s(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}let u={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"};class c{static async load(e,t){var n;let r=e.libraries?e.libraries.split(","):[],o=this.serializeParams(e);this.listeners.push(t),null!=(n=window.google)&&null!=(n=n.maps)&&n.importLibrary?(this.serializedApiParams||(this.loadingStatus=u.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=o,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==o&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");let a=["maps",...r];await Promise.all(a.map(e=>google.maps.importLibrary(e)))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let t=null,n=()=>t||(t=new Promise((t,n)=>{var r;let o=document.createElement("script"),a=new URLSearchParams;for(let[t,n]of Object.entries(e)){let e=t.replace(/[A-Z]/g,e=>"_"+e[0].toLowerCase());a.set(e,String(n))}a.set("loading","async"),a.set("callback","__googleMapsCallback__"),o.async=!0,o.src="https://maps.googleapis.com/maps/api/js?"+a.toString(),o.nonce=(null==(r=document.querySelector("script[nonce]"))?void 0:r.nonce)||"",o.onerror=()=>{this.loadingStatus=u.FAILED,this.notifyLoadingStatusListeners(),n(Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=u.LOADED,this.notifyLoadingStatusListeners(),t()},window.gm_authFailure=()=>{this.loadingStatus=u.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=u.LOADING,this.notifyLoadingStatusListeners(),document.head.append(o)}));google.maps.importLibrary=e=>n().then(()=>google.maps.importLibrary(e))}static notifyLoadingStatusListeners(){for(let e of this.listeners)e(this.loadingStatus)}}c.loadingStatus=u.NOT_LOADED,c.serializedApiParams=void 0,c.listeners=[];let d=["onLoad","onError","apiKey","version","libraries"],g=["children"],m=r.createContext(null),p=e=>{let{children:t}=e,n=i(e,g),{mapInstances:o,addMapInstance:a,removeMapInstance:u,clearMapInstances:p}=function(){let[e,t]=(0,r.useState)({});return{mapInstances:e,addMapInstance:(e,n="default")=>{t(t=>l({},t,{[n]:e}))},removeMapInstance:(e="default")=>{t(t=>i(t,[e].map(s)))},clearMapInstances:()=>{t({})}}}(),{status:f,loadedLibraries:h,importLibrary:v}=function(e){let{onLoad:t,onError:n,apiKey:o,version:a,libraries:s=[]}=e,u=i(e,d),[g,m]=(0,r.useState)(c.loadingStatus),[p,f]=(0,r.useReducer)((e,t)=>e[t.name]?e:l({},e,{[t.name]:t.value}),{}),h=(0,r.useMemo)(()=>null==s?void 0:s.join(","),[s]),v=(0,r.useMemo)(()=>JSON.stringify(l({apiKey:o,version:a},u)),[o,a,u]),b=(0,r.useCallback)(async e=>{var t;if(p[e])return p[e];if(!(null!=(t=google)&&null!=(t=t.maps)&&t.importLibrary))throw Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");let n=await window.google.maps.importLibrary(e);return f({name:e,value:n}),n},[p]);return(0,r.useEffect)(()=>{(async()=>{try{let e=l({key:o},u);for(let t of(a&&(e.v=a),(null==h?void 0:h.length)>0&&(e.libraries=h),(void 0===e.channel||e.channel<0||e.channel>999)&&delete e.channel,void 0===e.solutionChannel?e.solutionChannel="GMP_visgl_rgmlibrary_v1_default":""===e.solutionChannel&&delete e.solutionChannel,await c.load(e,e=>m(e)),["core","maps",...s]))await b(t);t&&t()}catch(e){n?n(e):console.error("<ApiProvider> failed to load the Google Maps JavaScript API",e)}})()},[o,h,v]),{status:g,loadedLibraries:p,importLibrary:b}}(n),b=(0,r.useMemo)(()=>({mapInstances:o,addMapInstance:a,removeMapInstance:u,clearMapInstances:p,status:f,loadedLibraries:h,importLibrary:v}),[o,a,u,p,f,h,v]);return r.createElement(m.Provider,{value:b},t)},f={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},h=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],v=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],b=Object.keys(f),y=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","headingInteractionEnabled","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","tiltInteractionEnabled","zoomControl","zoomControlOptions"]);function E(){var e;return(null==(e=(0,r.useContext)(m))?void 0:e.status)||u.NOT_LOADED}function C(e){return e&&"object"==typeof e&&"lat"in e&&"lng"in e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng)?e:e.toJSON()}let L=()=>r.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"}},r.createElement("h2",null,"Error: AuthFailure"),r.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",r.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."));function w(){return E()===u.LOADED}let O=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps","renderingType","colorScheme"],S=["padding"];class k{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,t){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(t)}}k.entries={};let _=r.createContext(null),A=e=>{let{children:t,id:n,className:o,style:s}=e,c=(0,r.useContext)(m),d=E();if(!c)throw Error("<Map> can only be used inside an <ApiProvider> component.");let[g,p,A]=function(e,t){let n=w(),[o,a]=(0,r.useState)(null),[s,u]=function(){let[e,t]=(0,r.useState)(null);return[e,(0,r.useCallback)(e=>t(e),[t])]}(),c=function(e){let t=function(){let[,e]=(0,r.useReducer)(e=>e+1,0);return e}(),n=(0,r.useRef)({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return(0,r.useEffect)(()=>{if(!e)return;let r=google.maps.event.addListener(e,"bounds_changed",()=>{(function(e,t){let n=e.getCenter(),r=e.getZoom(),o=e.getHeading()||0,a=e.getTilt()||0,l=e.getBounds();n&&l&&Number.isFinite(r)||console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(t.current,{center:(null==n?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:o,tilt:a})})(e,n),t()});return()=>r.remove()},[e,t]),n}(o),{id:d,defaultBounds:g,defaultCenter:m,defaultZoom:p,defaultHeading:f,defaultTilt:h,reuseMaps:v,renderingType:b,colorScheme:y}=e,E=i(e,O),C=void 0!==e.zoom||void 0!==e.defaultZoom,L=void 0!==e.center||void 0!==e.defaultCenter;for(let e of(g||C&&L||console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!E.center&&m&&(E.center=m),!E.zoom&&Number.isFinite(p)&&(E.zoom=p),!E.heading&&Number.isFinite(f)&&(E.heading=f),!E.tilt&&Number.isFinite(h)&&(E.tilt=h),Object.keys(E)))void 0===E[e]&&delete E[e];let _=(0,r.useRef)();return(0,r.useEffect)(()=>{let r,o;if(!s||!n)return;let{addMapInstance:u,removeMapInstance:m}=t,{mapId:p}=e,f=`${p||"default"}:${b||"default"}:${y||"LIGHT"}`;if(v&&k.has(f)?(r=(o=k.pop(f)).getDiv(),s.appendChild(r),o.setOptions(E),setTimeout(()=>o.setCenter(o.getCenter()),0)):((r=document.createElement("div")).style.height="100%",s.appendChild(r),o=new google.maps.Map(r,l({},E,b?{renderingType:b}:{},y?{colorScheme:y}:{}))),a(o),u(o,d),g){let{padding:e}=g,t=i(g,S);o.fitBounds(t,e)}else C&&L||o.fitBounds({east:180,west:-180,south:-90,north:90});if(_.current){let{mapId:e,cameraState:t}=_.current;e!==p&&o.setOptions(t)}return()=>{_.current={mapId:p,cameraState:c.current},r.remove(),v?k.push(f,o):google.maps.event.clearInstanceListeners(o),a(null),m(d)}},[s,n,d,e.mapId,e.renderingType,e.colorScheme]),[o,u,c]}(e,c);!function(e,t,n){let o=n.center?C(n.center):null,a=null,l=null;o&&Number.isFinite(o.lat)&&Number.isFinite(o.lng)&&(a=o.lat,l=o.lng);let i=Number.isFinite(n.zoom)?n.zoom:null,s=Number.isFinite(n.heading)?n.heading:null,u=Number.isFinite(n.tilt)?n.tilt:null;(0,r.useLayoutEffect)(()=>{if(!e)return;let n={},r=!1;null!==a&&null!==l&&(t.current.center.lat!==a||t.current.center.lng!==l)&&(n.center={lat:a,lng:l},r=!0),null!==i&&t.current.zoom!==i&&(n.zoom=i,r=!0),null!==s&&t.current.heading!==s&&(n.heading=s,r=!0),null!==u&&t.current.tilt!==u&&(n.tilt=u,r=!0),r&&e.moveCamera(n)})}(g,A,e),function(e,t){for(let n of b){let o=t[n],a=f[n];(0,r.useEffect)(()=>{if(!e||!o)return;let t=google.maps.event.addListener(e,a,t=>{o(function(e,t,n){let r={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}};if(h.includes(e)){let e=t.getCenter(),n=t.getZoom(),o=t.getHeading()||0,a=t.getTilt()||0,l=t.getBounds();return e&&l&&Number.isFinite(n)||console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),r.detail={center:(null==e?void 0:e.toJSON())||{lat:0,lng:0},zoom:n||0,heading:o,tilt:a,bounds:(null==l?void 0:l.toJSON())||{north:90,east:180,south:-90,west:-180}},r}if(v.includes(e)){var o;if(!n)throw Error("[createEvent] mouse events must provide a srcEvent");return r.domEvent=n.domEvent,r.stoppable=!0,r.stop=()=>n.stop(),r.detail={latLng:(null==(o=n.latLng)?void 0:o.toJSON())||null,placeId:n.placeId},r}return r}(a,e,t))});return()=>t.remove()},[e,a,o])}}(g,e),function(e,t){let n={};for(let e of Object.keys(t))y.has(e)&&(n[e]=t[e]);!function(e,t){let n=(0,r.useRef)(void 0);n.current&&a(t,n.current)||(n.current=t),(0,r.useEffect)(e,n.current)}(()=>{e&&e.setOptions(n)},[n])}(g,e);let I=function(e,t){let{viewport:n,viewState:o}=t;return(0,r.useLayoutEffect)(()=>{if(!e||!o)return;let{latitude:t,longitude:n,bearing:r,pitch:a,zoom:l}=o;e.moveCamera({center:{lat:t,lng:n},heading:r,tilt:a,zoom:l+1})},[e,o]),!!n}(g,e),P=!!e.controlled;(0,r.useEffect)(()=>{if(g)return I&&g.setOptions({disableDefaultUI:!0}),(I||P)&&g.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{g.setOptions({gestureHandling:e.gestureHandling,keyboardShortcuts:e.keyboardShortcuts})}},[g,I,P,e.gestureHandling,e.keyboardShortcuts]);let D=e.center?C(e.center):null,M=null,N=null;D&&Number.isFinite(D.lat)&&Number.isFinite(D.lng)&&(M=D.lat,N=D.lng);let T=(0,r.useMemo)(()=>{var t,n,r,o,a;return{center:{lat:null!=(t=M)?t:0,lng:null!=(n=N)?n:0},zoom:null!=(r=e.zoom)?r:0,heading:null!=(o=e.heading)?o:0,tilt:null!=(a=e.tilt)?a:0}},[M,N,e.zoom,e.heading,e.tilt]);(0,r.useLayoutEffect)(()=>{if(!g||!P)return;g.moveCamera(T);let e=g.addListener("bounds_changed",()=>{g.moveCamera(T)});return()=>e.remove()},[g,P,T]);let z=(0,r.useMemo)(()=>l({width:"100%",height:"100%",position:"relative",zIndex:I?-1:0},s),[s,I]),F=(0,r.useMemo)(()=>({map:g}),[g]);return d===u.AUTH_FAILURE?r.createElement("div",{style:l({position:"relative"},o?{}:z),className:o},r.createElement(L,null)):r.createElement("div",l({ref:p,"data-testid":"map",style:o?void 0:z,className:o},n?{id:n}:{}),g?r.createElement(_.Provider,{value:F},t):null)};A.deckGLViewProps=!0;let I=new Set,P=(e=null)=>{let t=(0,r.useContext)(m),{map:n}=(0,r.useContext)(_)||{};if(null===t)return!function(...e){let t=JSON.stringify(e);I.has(t)||(I.add(t),console.error(...e))}("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;let{mapInstances:o}=t;return null!==e?o[e]||null:n||o.default||null};function D(e,t,n){(0,r.useEffect)(()=>{if(!e||!t||!n)return;let r=google.maps.event.addListener(e,t,n);return()=>r.remove()},[e,t,n])}function M(e,t,n){(0,r.useEffect)(()=>{e&&(e[t]=n)},[e,t,n])}function N(e,t,n){(0,r.useEffect)(()=>{if(e&&t&&n)return e.addEventListener(t,n),()=>e.removeEventListener(t,n)},[e,t,n])}let T=r.createContext(null),z={BOTTOM:["50%","100%"]},F=({children:e,styles:t,className:n,anchorPoint:o})=>{let[a,l]=null!=o?o:z.BOTTOM,i=`translate(50%, 100%) translate(-${a}, -${l})`;return r.createElement("div",{style:{transform:i}},r.createElement("div",{className:n,style:t},e))},x=(0,r.forwardRef)((e,t)=>{let{children:n,style:a,className:l,anchorPoint:i}=e,[s,u]=function(e){let[t,n]=(0,r.useState)(null),[o,a]=(0,r.useState)(null),l=P(),i=function(e){let t=w(),n=(0,r.useContext)(m);return(0,r.useEffect)(()=>{t&&n&&n.importLibrary(e)},[t,n,e]),(null==n?void 0:n.loadedLibraries[e])||null}("marker"),{children:s,onClick:u,className:c,onMouseEnter:d,onMouseLeave:g,onDrag:p,onDragStart:f,onDragEnd:h,collisionBehavior:v,clickable:b,draggable:y,position:E,title:C,zIndex:L}=e,O=r.Children.count(s);return(0,r.useEffect)(()=>{if(!l||!i)return;let e=new i.AdvancedMarkerElement;e.map=l,n(e);let t=null;return O>0&&((t=document.createElement("div")).isCustomMarker=!0,e.content=t,a(t)),()=>{var r;e.map=null,null==(r=t)||r.remove(),n(null),a(null)}},[l,i,O]),(0,r.useEffect)(()=>{t&&t.content&&!(O>0)&&(t.content.className=c||"")},[t,c,O]),M(t,"position",E),M(t,"title",null!=C?C:""),M(t,"zIndex",L),M(t,"collisionBehavior",v),(0,r.useEffect)(()=>{t&&(void 0!==y?t.gmpDraggable=y:p||f||h?t.gmpDraggable=!0:t.gmpDraggable=!1)},[t,y,p,h,f]),(0,r.useEffect)(()=>{if(!t)return;let e=void 0!==b||!!u||!!d||!!g;t.gmpClickable=e,e&&null!=t&&t.content&&t.content.nodeType===Node.ELEMENT_NODE&&(t.content.style.pointerEvents="none",t.content.firstElementChild&&(t.content.firstElementChild.style.pointerEvents="all"))},[t,b,u,d,g]),D(t,"click",u),D(t,"drag",p),D(t,"dragstart",f),D(t,"dragend",h),N(null==t?void 0:t.element,"mouseenter",d),N(null==t?void 0:t.element,"mouseleave",g),[t,o]}(e),c=(0,r.useMemo)(()=>s?{marker:s}:null,[s]);return((0,r.useImperativeHandle)(t,()=>s,[s]),u)?r.createElement(T.Provider,{value:c},(0,o.createPortal)(r.createElement(F,{anchorPoint:i,styles:a,className:l},n),u)):null}),j=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];(0,r.forwardRef)((e,t)=>{let n=function(e){let[t,n]=(0,r.useState)(null),o=P(),{onClick:a,onDrag:l,onDragStart:s,onDragEnd:u,onMouseOver:c,onMouseOut:d}=e,g=i(e,j),{position:m,draggable:p}=g;return(0,r.useEffect)(()=>{if(!o){void 0===o&&console.error("<Marker> has to be inside a Map component.");return}let e=new google.maps.Marker(g);return e.setMap(o),n(e),()=>{e.setMap(null),n(null)}},[o]),(0,r.useEffect)(()=>{if(!t)return;let e=google.maps.event;return a&&e.addListener(t,"click",a),l&&e.addListener(t,"drag",l),s&&e.addListener(t,"dragstart",s),u&&e.addListener(t,"dragend",u),c&&e.addListener(t,"mouseover",c),d&&e.addListener(t,"mouseout",d),t.setDraggable(!!p),()=>{e.clearInstanceListeners(t)}},[t,p,a,l,s,u,c,d]),(0,r.useEffect)(()=>{t&&g&&t.setOptions(g)},[t,g]),(0,r.useEffect)(()=>{!p&&m&&t&&t.setPosition(m)},[p,m,t]),t}(e);return(0,r.useImperativeHandle)(t,()=>n,[n]),r.createElement(r.Fragment,null)})}}]);