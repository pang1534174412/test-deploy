const l=[{value:"standard",label:"Standard",pixelCount:921600},
// 约92万像素
{value:"hd",label:"HD",pixelCount:2073600},
// 约207万像素  
{value:"ultra-hd",label:"Ultra HD",pixelCount:3686400}],e=[{value:"1080p",label:"1080p",pixelCount:2073600},{value:"2k",label:"2K",pixelCount:3686400},{value:"4k",label:"4K",pixelCount:8294400}],a=[{value:"5s",label:"5s"},{value:"10s",label:"10s"},{value:"15s",label:"15s"}],t=[{value:"30",label:"30"},{value:"60",label:"60"},{value:"90",label:"90"}],i=[{value:"16:9",label:"16:9",width:16,height:9},{value:"9:16",label:"9:16",width:9,height:16}],u=[...i],h=[{value:"1:1",label:"1:1",width:1,height:1},{value:"9:16",label:"9:16",width:9,height:16},{value:"16:9",label:"16:9",width:16,height:9}],n=[...h,{value:"3:4",label:"3:4",width:3,height:4},{value:"4:3",label:"4:3",width:4,height:3},{value:"3:4",label:"3:4",width:3,height:4}],o=[{value:"dance",label:"Dance"},{value:"orchestral",label:"Orchestral"},{value:"rock",label:"Rock"},{value:"hiphop",label:"Hip hop"},{value:"lightMusic",label:"Light music"},{value:"electronic",label:"Electronic"},{value:"folk",label:"Folk"},{value:"funk",label:"Funk"},{value:"rb",label:"R&B"},{value:"jazz",label:"Jazz"}],v=[{value:"inspirational",label:"Inspirational"},{value:"achievement",label:"Achievement"},{value:"discovery",label:"Discovery"},{value:"contemplative",label:"Contemplative"},{value:"relaxing",label:"Relaxing"},{value:"passionate",label:"Passionate"},{value:"peaceful",label:"Peaceful"},{value:"happy",label:"Happy"},{value:"sad",label:"Sad"},{value:"funny",label:"Funny"}],r=[{value:"cartoon",label:"Cartoon"},{value:"moody",label:"Moody"},{value:"watercolor",label:"Watercolor"},{value:"clay-animation",label:"Clay animation"},{value:"3d",label:"3D"},{value:"nature",label:"Nature"}],b={
// 生成功能的质量等级映射
image:{standard:512,hd:768,"ultra-hd":1024},video:{standard:720,
// 标清
hd:1080,
// 高清
"ultra-hd":1440},
// 视频分辨率规格的直接映射
videoResolution:{"1080p":1080,"2k":1440,"4k":2160}};function d(l,e,a="video"){const t=b[a][l]||b[a].hd,i=function(l){const e=[...n,...u].find((e=>e.value===l));if(e)return{width:e.width,height:e.height};const a=l.match(/^(\d+):(\d+)$/);return a?{width:parseInt(a[1]),height:parseInt(a[2])}:null}(e);if(!i)return{width:1920,height:1080,resolutionString:"1920x1080"};let h,o;return i.width>=i.height?(o=t,h=Math.round(o*i.width/i.height)):(h=t,o=Math.round(h*i.height/i.width)),{width:h,height:o,resolutionString:`${h}x${o}`}}function s(l,e,a="video"){return d(l,e,a).resolutionString}export{v as a,u as b,d as c,a as d,i as e,t as f,s as g,h,n as i,o as m,l as r,r as s,e as v};
//# sourceMappingURL=panel-options-Vq9u0D0_.js.map
