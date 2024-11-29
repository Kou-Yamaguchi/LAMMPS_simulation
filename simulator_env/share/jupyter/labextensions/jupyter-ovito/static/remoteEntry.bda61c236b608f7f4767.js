var _JUPYTERLAB;(()=>{"use strict";var e,r,t,o,n,a,i,u,l,d,f,s,c,p,h,v,b,g,m,y,w,j={1512:(e,r,t)=>{var o={"./index":()=>Promise.all([t.e(968),t.e(406)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(968),t.e(406),t.e(261)]).then((()=>()=>t(6261)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},S={};function E(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,loaded:!1,exports:{}};return j[e].call(t.exports,t,t.exports,E),t.loaded=!0,t.exports}E.m=j,E.c=S,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>e+"."+{212:"a91d8c3b2f0512f1a27a",261:"7f7ef969c49c49fa7b56",406:"6caad2249b8686e3d1cb",486:"a609121e89fefbcc13d9",968:"ec4930f7e55ef707366b"}[e]+".js?v="+{212:"a91d8c3b2f0512f1a27a",261:"7f7ef969c49c49fa7b56",406:"6caad2249b8686e3d1cb",486:"a609121e89fefbcc13d9",968:"ec4930f7e55ef707366b"}[e],E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="jupyter-ovito:",E.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var f=l[d];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[o];var s=(r,o)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),u&&document.head.appendChild(i)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},r={};E.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var a=E.S[t],i="jupyter-ovito",u=(e,r,t,o)=>{var n=a[e]=a[e]||{},u=n[r];(!u||!u.loaded&&(!o!=!u.eager?o:i>u.from))&&(n[r]={get:t,from:i,eager:!!o})},l=[];return"default"===t&&(u("jupyter-ovito","0.1.5",(()=>Promise.all([E.e(968),E.e(406)]).then((()=>()=>E(1568))))),u("lodash","4.17.21",(()=>E.e(486).then((()=>()=>E(6486))))),u("three","0.153.0",(()=>E.e(212).then((()=>()=>E(2212)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var r=E.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return t}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,u=1,l=!0;;u++,i++){var d,f,s=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(f=(typeof(d=r[i]))[0]))return!l||("u"==s?u>o&&!n:""==s!=n);if("u"==f){if(!l||"u"!=s)return!1}else if(l)if(s==f)if(u<=o){if(d!=e[u])return!1}else{if(n?d>e[u]:d<e[u])return!1;d!=e[u]&&(l=!1)}else if("s"!=s&&"n"!=s){if(n||u<=o)return!1;l=!1,u--}else{if(u<=o||f<s!=n)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},i=(e,r)=>{var t=E.S[e];if(!t||!E.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||o(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},d=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",f=(e,r,t,o)=>{var n=l(e,t);return a(o,n)||c(d(e,t,n,o)),p(e[t][n])},s=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!a(t,r)||e&&!o(e,r)?e:r),0))&&n[r]},c=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),v=(h=e=>function(r,t,o,n){var a=E.I(r);return a&&a.then?a.then(e.bind(e,r,E.S[r],t,o,n)):e(r,E.S[r],t,o,n)})(((e,r,t,o)=>r&&E.o(r,t)?p(u(r,t)):o())),b=h(((e,r,t,o)=>(i(e,t),f(r,0,t,o)))),g=h(((e,r,t,o,n)=>{var a=r&&E.o(r,t)&&s(r,t,o);return a?p(a):n()})),m={},y={907:()=>v("default","three",(()=>E.e(212).then((()=>()=>E(2212))))),1214:()=>g("default","three",[2,0,153,0],(()=>E.e(212).then((()=>()=>E(2212))))),4439:()=>g("default","lodash",[1,4,17,21],(()=>E.e(486).then((()=>()=>E(6486))))),6382:()=>b("default","@jupyter-widgets/base",[,[1,6],[1,5],[1,4],[1,3],[1,2],[1,1,1],1,1,1,1,1])},w={406:[907,1214,4439,6382]},E.f.consumes=(e,r)=>{E.o(w,e)&&w[e].forEach((e=>{if(E.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,E.m[e]=t=>{delete E.c[e],t.exports=r()}},o=r=>{delete m[e],E.m[e]=t=>{throw delete E.c[e],r}};try{var n=y[e]();n.then?r.push(m[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}))},(()=>{var e={49:0};E.f.j=(r,t)=>{var o=E.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=E.p+E.u(r),i=new Error;E.l(a,(t=>{if(E.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in i)E.o(i,o)&&(E.m[o]=i[o]);u&&u(E)}for(r&&r(t);l<a.length;l++)n=a[l],E.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkjupyter_ovito=self.webpackChunkjupyter_ovito||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),E.nc=void 0;var P=E(1512);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["jupyter-ovito"]=P})();