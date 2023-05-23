(()=>{"use strict";var e={6618:(e,t,r)=>{var o=r(1957),n=r(1947),a=r(499),i=r(9835);function u(e,t,r,o,n,a){const u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(u)}const s=(0,i.aZ)({name:"App"});var l=r(1639);const c=(0,l.Z)(s,[["render",u]]),p=c;var d=r(3340),f=r(1809);const h=(0,d.h)((()=>{const e=(0,f.WB)();return e}));var v=r(8339);const b=[{path:"/",component:()=>Promise.all([r.e(736),r.e(280)]).then(r.bind(r,280)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(52)]).then(r.bind(r,3052))},{path:"/login",component:()=>Promise.all([r.e(736),r.e(52)]).then(r.bind(r,3052))},{path:"/welcome",component:()=>Promise.all([r.e(736),r.e(772)]).then(r.bind(r,2772))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(862)]).then(r.bind(r,1862))}],m=b,g=(0,d.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function y(e,t){const r=e(p);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const i=(0,a.Xl)("function"===typeof g?await g({store:o}):g);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}var w=r(4328);const O={config:{notify:{}},plugins:{Notify:w.Z}};async function j({app:e,router:t,store:r}){e.use(t),e.mount("#q-app")}y(o.ri,O).then(j)}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{52:"88126608",280:"cdb3e582",772:"e7c83a31",862:"4d157f49"}[e]+".js"})(),(()=>{r.miniCssF=e=>{}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="authcrud:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var u,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+a){u=p;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[n];var d=(t,r)=>{u.onerror=u.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),u=new Error,s=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}};r.l(i,s,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,u,s]=o,l=0;if(i.some((t=>0!==e[t]))){for(n in u)r.o(u,n)&&(r.m[n]=u[n]);if(s)var c=s(r)}for(t&&t(o);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=globalThis["webpackChunkauthcrud"]=globalThis["webpackChunkauthcrud"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(6618)));o=r.O(o)})();