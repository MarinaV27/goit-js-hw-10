import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as y}from"./assets/vendor-77e16229.js";const p=1e3;let c=null,d=null,u=null;const e=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]"),n=document.querySelector("#datetime-picker");e.disabled=!0;e.addEventListener("click",T);const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?y.warning({message:"Please choose a date in the future"}):(d=t[0].getTime(),e.disabled=!1)}};h(n,M);function T(){q.start()}function o(t){const l=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:i,minutes:m,seconds:f}}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));const q={start(){c=setInterval(()=>{u=Date.now();const t=d-u;C(o(t)),e.disabled=!0,n.disabled=!0,t<=1e3&&this.stop()},p)},stop(){e.disabled=!0,n.disabled=!1,clearInterval(c)}};function C({days:t,hours:a,minutes:s,seconds:r}){S.textContent=`${t}`,b.textContent=`${a}`,g.textContent=`${s}`,D.textContent=`${r}`}
//# sourceMappingURL=commonHelpers.js.map
