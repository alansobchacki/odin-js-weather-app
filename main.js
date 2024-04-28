(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"/* global settings to make things work */\nbody {\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n}\n\n#main-container {\n  display: grid;\n  grid-template: 0.2fr 0.1fr 1fr / 1fr;\n}\n\n/* top part of website (form to insert city, button to send form) */\n#weather-input {\n  grid-row: 1 / 2;\n\n  display: grid;\n  justify-items: center;\n}\n\n#input-city-label {\n  display: block;\n  text-align: center;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  font-size: 1.4rem;\n}\n\n#city {\n  height: 25px;\n  padding: 2%;\n}\n\n#weather-form {\n  display: grid;\n  justify-items: center;\n}\n\n#weather-button {\n  border: none;\n  width: 50%;\n  color: white;\n  font-weight: bold;\n  font-size: 1.1rem;\n  padding: 2%;\n  margin: 2%;\n  background-color: rgb(69, 201, 109);\n  border-radius: 6px;\n  transition: background-color 0.3s ease;\n}\n\n#weather-button:hover {\n  cursor: pointer;\n  background-color: rgb(75, 219, 119);\n}\n\n/* mid part of website (city name / error message announcer) */\n#announcer {\n  grid-row: 2 / 3;\n\n  display: grid;\n  justify-items: center;\n}\n\n.message {\n  font-size: 1.2rem;\n}\n\n/* bottom part of website (weather cards) */\n#weather-contents {\n  grid-row: 3 / 4;\n\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n  justify-items: center;\n}\n\n.weather-card {\n  display: grid;\n  justify-items: center;\n\n  border-left: 6px solid rgb(124, 175, 199);\n  border-radius: 15px;\n\n  width: 300px;\n\n  background-color: #0e0e0e;\n  transition: background-color 0.3s ease;\n}\n\n.weather-card:hover {\n  background-color: rgb(53, 52, 52);\n}\n\n.date,\n.condition {\n  font-size: 1.1.rem;\n  text-align: center;\n  font-weight: bold;\n}\n\n.temp {\n  padding-left: 2%;\n}\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,p="".concat(d," ").concat(u);a[d]=u+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),d=t(540),u=t.n(d),p=t(113),l=t.n(p),f=t(208),m={};m.styleTagTransform=l(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;let h=[],y=!1;document.getElementById("weather-form").addEventListener("submit",(async function(n){n.preventDefault(),await async function(){try{h=[],y=!1;const n=document.getElementById("city").value,e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=262fb141faa34d58844195452242304&q=${n}&days=3`);if(!e.ok)throw new Error("Failed to fetch weather data");(await e.json()).forecast.forecastday.forEach((n=>{const e={date:n.date,temp_c:n.day.avgtemp_c,temp_f:n.day.avgtemp_f,condition:n.day.condition.text,condition_icon:n.day.condition.icon};h.push(e)}))}catch(n){y=!0}}(),document.getElementById("weather-contents").innerHTML="",function(){const n=document.getElementById("announcer"),e=document.getElementById("city").value.toLowerCase();if(y)n.innerHTML=`\n      <p class="message">Unable to find any weather data for ${e}. Are you sure this is a city?</p>\n    `;else{const t=e.charAt(0).toUpperCase()+e.slice(1);n.innerHTML=`\n      <p class="message">The weather forecast for ${t} over the next three days is:</p>\n    `}}(),function(){const n=document.getElementById("weather-contents");h.forEach((e=>{const t=document.createElement("div");t.classList.add("weather-card"),t.innerHTML=`\n      <p class="date">${e.date}</p>\n      <p class="temp">Temp (celsius): ${e.temp_c}</p>\n      <p class="temp">Temp (farenheit): ${e.temp_f}</p>\n      <p class="condition">${e.condition}</p>\n      <img class="weather-icon" src=https:${e.condition_icon}>\n    `,n.appendChild(t)}))}()}))})()})();