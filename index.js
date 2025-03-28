import{S as u,i as d,a as f}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();let i=null;function c(s){d.show({message:s,position:"topRight",timeout:4e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./assets/icons/close-icon.svg",closeOnClick:!0})}function m(s){const r=document.getElementById("gallery");if(r.innerHTML="",s.total===0){c("Нічого не знайдено. Спробуй інше слово.");return}s.hits.forEach(t=>{const n=document.createElement("li");n.className="gallery-item",n.innerHTML=`
      <a href="${t.largeImageURL}" class="gallery-link">
        <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image" />
      </a>
      <div class="gallery-info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    `,r.appendChild(n)}),i?i.refresh():i=new u(".gallery a")}const p="49574533-99195dbfc8ece3e2fce047715",y="https://pixabay.com/api/",g={key:p,image_type:"photo",orientation:"horizontal",safesearch:"true"};function h(s){const r=document.getElementById("loader");return r.style.display="flex",f.get(y,{params:{...g,q:s}}).then(t=>t.data).catch(()=>c("Щось пішло не так 😢")).finally(()=>{r.style.display="none"})}const b=document.getElementById("searchForm"),a=document.getElementById("searchInput");b.addEventListener("submit",s=>{s.preventDefault();const r=a.value.trim();r&&h(r).then(m).catch(t=>{console.error("Помилка при завантаженні зображень:",t)}).finally(()=>{a.value="",a.blur()})});
//# sourceMappingURL=index.js.map
