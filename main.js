(()=>{"use strict";let t=[];document.getElementById("weather-form").addEventListener("submit",(async function(e){e.preventDefault(),await async function(){t=[];const e=document.getElementById("city").value,n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=262fb141faa34d58844195452242304&q=${e}&days=3`);(await n.json()).forecast.forecastday.forEach((e=>{const n={date:e.date,temp_c:e.day.avgtemp_c,temp_f:e.day.avgtemp_f,condition:e.day.condition.text,condition_icon:e.day.condition.icon};t.push(n)}))}(),function(){const t=document.getElementById("city").value.toLowerCase(),e=t.charAt(0).toUpperCase()+t.slice(1);document.getElementById("weather-city").innerHTML=`\n    <p>The weather forecast for ${e} over the next three days is:<p>\n  `}(),function(){const e=document.getElementById("weather-contents");t.forEach((t=>{const n=document.createElement("div");n.innerHTML=`\n      <p>Day: ${t.date}</p>\n      <p>Temp (celsius): ${t.temp_c}</p>\n      <p>Temp (farenheit): ${t.temp_f}</p>\n      <p>Condition: ${t.condition}</p>\n      <img src=https:${t.condition_icon}>\n    `,e.appendChild(n)}))}()}))})();