function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=t.parcelRequire5ce5;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire5ce5=r),r.register("6voel",(function(t,i){var n,r;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var s={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("6voel").register(JSON.parse('{"5YTGu":"index.8eec40bd.js","jMyWs":"skull.7f32e062.png"}'));class s{constructor(){this.happy=5,this.hungry=5,this.type=[{name:"chichi",type:"sheep"},{name:"chobitchi",type:"chinchilla"},{name:"doremitchi",type:"chinchilla"},{name:"doyakentchi",type:"dog"},{name:"furi",type:"octopus"},{name:"hanatarezotchi",type:"teapot"},{name:"kizunatchi",type:"cat"},{name:"makimo",type:"hermitcrab"},{name:"onsenmoguratchi",type:"groundhog"},{name:"rinsutchi",type:"dog"},{name:"sopratchi",type:"chinchilla"},{name:"taiyaki",type:"fish"},{name:"yumecantchi",type:"sheep"}],this.hungerTimer=setInterval(this.increaseHunger.bind(this),25e3),this.happyTimer=setInterval(this.lowerHappiness.bind(this),25e3),this.isAlive=!0,this.isPoopGone=!1,this.lastFeed=-1,this.lastPlay=-1}feedPet(){const e=performance.now(),t=Math.round((e-this.lastFeed)/1e3);0!==this.happy&&10!==this.hungry||(clearInterval(this.hungerTimer),this.isAlive=!1),-1!==this.lastFeed&&t<=10&&this.happy>=0&&this.happy<=10&&this.hungry<10&&(this.happy--,this.lastFeed=e),this.hungry>0&&this.hungry<10&&(this.hungry--,this.lastFeed=e)}playWithPet(){const e=performance.now(),t=Math.round((e-this.lastPlay)/1e3);0!==this.happy&&10!==this.hungry||(clearInterval(this.hungerTimer),this.isAlive=!1),-1!==this.lastPlay&&t<=10&&this.hungry<=10&&this.hungry>=0&&this.happy<=10&&(this.hungry++,this.lastPlay=e),this.happy>0&&this.happy<10&&(this.happy++,this.lastPlay=e)}reset(){clearInterval(this.hungerTimer),clearInterval(this.happyTimer),this.isAlive=!0,location.reload()}lowerHappiness(){0===this.happy?(this.isAlive=!1,clearInterval(this.hungerTimer),clearInterval(this.happyTimer)):this.happy--}increaseHunger(){10===this.hungry?(this.isAlive=!1,clearInterval(this.hungerTimer),clearInterval(this.happyTimer)):this.hungry++}getHappiness(){return this.happy}getHunger(){return this.hungry}getPet(){return this.type[Math.round(12*Math.random())]}isPetAlive(){return this.isAlive}lowerJoy(){this.happy--}isPoopgone(){return this.isPoopGone}setPoopBool(e){this.isPoopGone=e}}var a;a=new URL(r("6voel").resolve("jMyWs"),import.meta.url).toString(),(()=>{const e=new s;(()=>{const{name:t,type:i}=e.getPet(),n=document.getElementById("name"),r=document.getElementById("happiness"),s=document.getElementById("hunger"),h=document.getElementById("tamaimg"),o=document.createElement("img");n.innerHTML=`Name: ${t}<br /> Type: ${i} `,o.src=new URL(`img/pets/${t}.png`,"file:///src/main.ts").href,o.setAttribute("alt",`${t}`),h.append(o);const l=setInterval((()=>{!0===e.isPetAlive()?(r.innerHTML=`Happiness: ${e.getHappiness()}`,s.innerHTML=`Hunger: ${e.getHunger()}`):(r.innerHTML="Happiness: Dead",s.innerHTML="Hunger: Dead",o.src=new URL(a).href,o.setAttribute("alt","Dead"),clearInterval(l))}),500);let p;document.querySelectorAll("button").forEach((t=>{t.addEventListener("click",(i=>{switch(i.preventDefault,t.value){case"eat":e.feedPet(),p=setTimeout(u,1e3);break;case"play":e.playWithPet();break;case"scoop":c();break;case"restart":e.reset();break;default:console.error("something went wrong")}}))}));const c=()=>{e.setPoopBool(!0)},u=()=>{e.setPoopBool(!1);document.querySelector(".poopimage").classList.toggle("hidden");const t=setTimeout((()=>{const i=document.querySelector(".poopimage");e.isPoopgone()?(clearTimeout(t),i.classList.toggle("hidden")):(e.lowerJoy(),i.classList.toggle("hidden"))}),3e3)}})()})();
//# sourceMappingURL=index.8eec40bd.js.map
