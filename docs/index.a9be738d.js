class e{constructor(){this.happy=5,this.hungry=5,this.type=[{name:"chichi",type:"sheep"},{name:"chobitchi",type:"chinchilla"},{name:"doremitchi",type:"chinchilla"},{name:"doyakentchi",type:"dog"},{name:"furi",type:"octopus"},{name:"hanatarezotchi",type:"teapot"},{name:"kizunatchi",type:"cat"},{name:"makimo",type:"hermitcrab"},{name:"onsenmoguratchi",type:"groundhog"},{name:"rinsutchi",type:"dog"},{name:"sopratchi",type:"chinchilla"},{name:"taiyaki",type:"fish"},{name:"yumecantchi",type:"sheep"}],this.hungerTimer=setInterval(this.increaseHunger.bind(this),25e3),this.happyTimer=setInterval(this.lowerHappiness.bind(this),25e3),this.isAlive=!0,this.isPoopGone=!1,this.lastFeed=-1,this.lastPlay=-1}feedPet(){const e=performance.now(),t=Math.round((e-this.lastFeed)/1e3);0!==this.happy&&10!==this.hungry||(clearInterval(this.hungerTimer),this.isAlive=!1),-1!==this.lastFeed&&t<=10&&this.happy>=0&&this.happy<=10&&this.hungry<10&&(this.happy--,this.lastFeed=e),this.hungry>0&&this.hungry<10&&(this.hungry--,this.lastFeed=e)}playWithPet(){const e=performance.now(),t=Math.round((e-this.lastPlay)/1e3);0!==this.happy&&10!==this.hungry||(clearInterval(this.hungerTimer),this.isAlive=!1),-1!==this.lastPlay&&t<=10&&this.hungry<=10&&this.hungry>=0&&this.happy<=10&&(this.hungry++,this.lastPlay=e),this.happy>0&&this.happy<10&&(this.happy++,this.lastPlay=e)}reset(){clearInterval(this.hungerTimer),clearInterval(this.happyTimer),this.isAlive=!0,location.reload()}lowerHappiness(){0===this.happy?(this.isAlive=!1,clearInterval(this.hungerTimer),clearInterval(this.happyTimer)):this.happy--}increaseHunger(){10===this.hungry?(this.isAlive=!1,clearInterval(this.hungerTimer),clearInterval(this.happyTimer)):this.hungry++}getHappiness(){return this.happy}getHunger(){return this.hungry}getPet(){return this.type[Math.round(12*Math.random())]}isPetAlive(){return this.isAlive}lowerJoy(){this.happy--}isPoopgone(){return this.isPoopGone}setPoopBool(e){this.isPoopGone=e}}(()=>{const t=new e;(()=>{const{name:e,type:i}=t.getPet(),s=document.getElementById("name"),n=document.getElementById("happiness"),a=document.getElementById("hunger"),h=document.getElementById("tamaimg"),r=document.createElement("img");s.innerHTML=`Name: ${e}<br /> Type: ${i} `,r.src=`./img/${e}.png`,r.setAttribute("alt",`${e}`),h.append(r);const o=setInterval((()=>{!0===t.isPetAlive()?(n.innerHTML=`Happiness: ${t.getHappiness()}`,a.innerHTML=`Hunger: ${t.getHunger()}`):(n.innerHTML="Happiness: Dead",a.innerHTML="Hunger: Dead",r.src="./img/skull.png",r.setAttribute("alt","Dead"),clearInterval(o))}),500);let p;document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(i=>{switch(i.preventDefault,e.value){case"eat":t.feedPet(),p=setTimeout(c,1e3);break;case"play":t.playWithPet();break;case"scoop":l();break;case"restart":t.reset();break;default:console.error("something went wrong")}}))}));const l=()=>{t.setPoopBool(!0)},c=()=>{t.setPoopBool(!1);document.querySelector(".poopimage").classList.toggle("hidden");const e=setTimeout((()=>{const i=document.querySelector(".poopimage");t.isPoopgone()?(clearTimeout(e),i.classList.toggle("hidden")):(t.lowerJoy(),i.classList.toggle("hidden"))}),3e3)}})()})();
//# sourceMappingURL=index.a9be738d.js.map