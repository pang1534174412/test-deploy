var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,l=(e,l)=>{for(var n in l||(l={}))t.call(l,n)&&o(e,n,l[n]);if(r)for(var n of r(l))a.call(l,n)&&o(e,n,l[n]);return e};import{at as n,V as s}from"./vue-vendor-BmHMP2lV.js";const i={GENERATE:"generate_image",ENHANCE:"enhance",EDIT:"edit",ENLARGE:"enlarge",TO_VIDEO:"to_video",DOWNLOAD:"download_image"},E={UPSCALE:"upscale",GENERATE:"generate_video",SOUNDTRACK:"soundtrack",FRAME_FILLING:"frame_filling",VIDEO_STYLE:"video_style",DOWNLOAD:"download_video"},u=Object.values(i),c=Object.values(E),O=[...u,...c],d={IMAGE:"image",VIDEO:"video"};l(l({},Object.values(i).reduce(((e,r)=>(e[r]=d.IMAGE,e)),{})),Object.values(E).reduce(((e,r)=>(e[r]=d.VIDEO,e)),{}));const g=n("mediaGeneration",(()=>{const e="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",r="",t=s({
// 图片相关模块
[i.GENERATE]:{imageUrl:r},[i.ENHANCE]:{imageUrl:r},[i.ENLARGE]:{imageUrl:r},[i.TO_VIDEO]:{imageUrl:r},
// 视频相关模块
[E.UPSCALE]:{videoUrl:e,posterUrl:r},[E.SOUNDTRACK]:{videoUrl:e,posterUrl:r},[E.VIDEO_STYLE]:{videoUrl:e,posterUrl:r},[E.FRAME_FILLING]:{videoUrl:e,posterUrl:r},
// 文本生成模块
textToImage:null,textToVideo:null});return{generationResults:t,getGenerationResult:e=>t[e]||null,setGenerationResult:(e,r)=>{t[e]=r},clearGenerationResult:e=>{t[e]=null}}}),{});export{O as A,i as I,d as M,E as V,u as a,c as b,g as u};
//# sourceMappingURL=media-generation-BOUsAp1F.js.map
