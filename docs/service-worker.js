if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=e=>a(e,s),l={module:{uri:s},exports:o,require:u};i[s]=Promise.all(n.map((e=>l[e]||u(e)))).then((e=>(r(...e),o)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuestagram"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vuestagram/css/app.b4506af2.css",revision:null},{url:"/vuestagram/css/chunk-vendors.244599b5.css",revision:null},{url:"/vuestagram/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/vuestagram/follower.json",revision:"f338c4fcc7835714efde561ec3ecc075"},{url:"/vuestagram/fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"/vuestagram/fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"/vuestagram/fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"/vuestagram/fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"/vuestagram/img/google_play.2409c500.png",revision:null},{url:"/vuestagram/img/home-phone.61de29a0.png",revision:null},{url:"/vuestagram/img/home1.4e854a9d.jpg",revision:null},{url:"/vuestagram/img/home2.066c9c8d.jpg",revision:null},{url:"/vuestagram/img/home3.61a4bc99.jpg",revision:null},{url:"/vuestagram/img/home4.eb026b7e.jpg",revision:null},{url:"/vuestagram/img/home5.09fd24c0.jpg",revision:null},{url:"/vuestagram/img/icons.41dc4af5.png",revision:null},{url:"/vuestagram/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/vuestagram/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/vuestagram/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/vuestagram/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/vuestagram/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/vuestagram/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/vuestagram/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/vuestagram/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/vuestagram/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/vuestagram/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/vuestagram/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/vuestagram/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/vuestagram/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/vuestagram/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/vuestagram/img/icons/safari-pinned-tab.svg",revision:"6de16254d1b4193353e7015f9177535d"},{url:"/vuestagram/js/app.680971c8.js",revision:null},{url:"/vuestagram/js/chunk-vendors.000dead5.js",revision:null},{url:"/vuestagram/js/webfontloader.de0430e1.js",revision:null},{url:"/vuestagram/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
