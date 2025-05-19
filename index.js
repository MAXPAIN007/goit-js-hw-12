import{a as h,S as R,i as a}from"./assets/vendor-CocXUmuy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const j="https://pixabay.com/api/",$="50197022-5c303e37ac1e7741936867a9a";h.defaults.baseURL=j;h.defaults.params={key:$,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};async function L(t,s){return(await h.get("",{params:{q:t,page:s}})).data}const B=new R(".gallery a",{captionsData:"alt",captionDelay:200});function v(t,s){const i=t.map(({webformatURL:o,largeImageURL:e,type:r,tags:l,likes:q,views:E,comments:P,downloads:M})=>`<li class="gallery-item js-gallery-item">
  <a class="gallery-link js-gallery-link" href="${e}">
    <div class="image-wrapper">
      <img
        class="gallery-image js-gallery-image"
        src="${o}"
        data-source="${r}"
        alt="${l}"
      />
    </div>
  
  <div>
    <ul class="wrapper-box">
      <li class="list-item">
        <p class="value-title">Likes</p>
        <p class="label" data-likes>${q}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Views</p>
        <p class="label" data-views>${E}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Comments</p>
        <p class="label" data-comments>${P}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Downloads</p>
        <p class="label" data-downloads>${M}</p>
      </li>
    </ul>
  </div>
  </a>
</li>`).join("");s.insertAdjacentHTML("beforeend",i),B.refresh()}function x(t){t.innerHTML=""}function C(t){t.classList.remove("is-hidden")}function f(t){t.classList.add("is-hidden")}function b(t){t.classList.remove("is-hidden")}function w(t){t.classList.add("is-hidden")}const S=document.querySelector(".form"),O=document.querySelector('[name="search-text"]'),p=document.querySelector(".gallery"),m=document.querySelector(".loader"),c=document.querySelector(".js-load-more"),g=document.querySelector(".js-error-message"),y=document.querySelector(".js-loading-message");let n=1,d="",u=0;S.addEventListener("submit",H);c.addEventListener("click",D);function D(t){t.preventDefault(),n+=1,w(c),y.classList.remove("is-hidden"),L(d,n).then(s=>{const i=s.hits;if(i.length===0){a.error({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3}),g.classList.remove("is-hidden");return}v(i,p);const o=Math.ceil(u/15);n<o?b(c):a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3});const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}).catch(s=>{a.error({title:"Error",message:"Failed to load more images. Please try again.",position:"topRight",timeout:3e3}),g.classList.remove("is-hidden")}).finally(()=>{y.classList.add("is-hidden")})}function H(t){if(t.preventDefault(),d=O.value.trim(),n=1,u=0,x(p),w(c),g.classList.add("is-hidden"),C(m),!d)return f(m),a.error({title:"Caution",message:"Please enter a search query.",position:"topRight",timeout:3e3});L(d,n).then(s=>{const i=s.hits;if(u=s.totalHits,i.length===0){a.error({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}v(i,p),u>15&&b(c)}).catch(s=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}).finally(()=>{f(m),S.reset()})}
//# sourceMappingURL=index.js.map
