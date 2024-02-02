import{i as n,S as h}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="42056951-259306f3e2aef1f0902f3daf3",c=document.querySelector(".search-form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader-container");c.addEventListener("submit",v);d(l);function v(r){r.preventDefault(),S(l);const s=r.currentTarget.elements.query.value;s===""&&n.error({title:"Error",message:"Please enter a search term"}),L(s).then(o=>{o.hits.length===0?(n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML=""):b(o.hits),d(l)}).catch(()=>{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}).finally(()=>{c.reset()})}function L(r){const a=new URLSearchParams({key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${g}?${a}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function b(r){const a=r.map(({webformatURL:o,tags:e,likes:t,views:i,comments:f,downloads:m,largeImageURL:p})=>`
    
      <div class="image-card">
      <a href = "${p}" ><img class="img" src="${o}" alt="${e}" /></a>
      <div class="image-stats">
        <div class="stat-item">
          <p class="stat-label">Likes:</p>
          <p class="stat-value">${t}</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">Views:</p>
          <p class="stat-value">${i}</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">Comments:</p>
          <p class="stat-value">${f}</p>
        </div>
        <div class="stat-item">
          <p class="stat-label">Downloads:</p>
          <p class="stat-value">${m}</p>
        </div>
      </div>
    </div>
    `).join("");u.innerHTML=a,new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function S(r){r.style.display="flex"}function d(r){r.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
