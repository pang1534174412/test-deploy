import{x as e,y as a,G as t,S as o,Q as l,B as r,M as s,P as n,T as u,I as d,O as i,H as c,r as v,c as p,f as m,j as g,D as h}from"./vue-vendor-BmHMP2lV.js";import{u as y}from"./vendor-BCTF97Ld.js";import{_ as f,p as E,e as L}from"./index-DVGBlWQA.js";var C="https://pic2.candychat.link/";const S={__name:"l-video",props:{
// ==================== 视频源相关 ====================
/**
     * 视频源地址（必填）
     * @description 支持多种格式：
     *   - 静态文件：'/static/videos/demo.mp4'
     *   - HTTP/HTTPS URL：'https://example.com/video.mp4'
     *   - Data URL：'data:video/mp4;base64,...'
     *   - Blob URL：'blob:...'
     *   - 相对路径：自动添加OSS前缀
     */
src:{type:String,required:!0,default:""},
/**
     * 视频封面图片地址
     * @description 在视频加载前或暂停时显示的封面图
     */
poster:{type:String,default:""},
// ==================== 尺寸相关 ====================
/**
     * 视频宽度
     * @description 支持字符串（如'640px', '100%'）或数字（自动添加px）
     */
w:{type:[String,Number],default:"100%"},
/**
     * 视频高度
     * @description 支持字符串（如'360px', 'auto'）或数字（自动添加px）
     */
h:{type:[String,Number],default:"100%"},
// ==================== HTML5 Video 属性 ====================
/**
     * 是否显示自定义控制器
     * @description true-显示自定义控制器，false-隐藏控制器
     */
showControls:{type:Boolean,default:!0},
/**
     * 是否显示声音控制按钮
     * @description true-显示声音按钮，false-隐藏声音按钮
     */
isShowVoice:{type:Boolean,default:!1},
/**
     * 是否自动播放
     * @description 现代浏览器通常需要用户交互或静音才能自动播放
     */
autoplay:{type:Boolean,default:!1},
/**
     * 是否循环播放
     * @description 视频播放结束后是否自动重新开始
     */
loop:{type:Boolean,default:!1},
/**
     * 是否静音
     * @description 设置为true有助于自动播放功能
     */
muted:{type:Boolean,default:!1},
/**
     * 预加载策略
     * @description 
     *   - 'none': 不预加载任何数据
     *   - 'metadata': 只预加载元数据（时长、尺寸等）
     *   - 'auto': 预加载整个视频
     */
preload:{type:String,default:"metadata",validator:e=>["none","metadata","auto"].includes(e)},
/**
     * 移动端内联播放
     * @description 在iOS Safari中防止视频全屏播放
     */
playsinline:{type:Boolean,default:!0},
// ==================== 样式相关 ====================
/**
     * 视频适应方式
     * @description 控制视频如何适应容器尺寸
     *   - 'fill': 拉伸填满容器（可能变形）
     *   - 'contain': 保持比例，完整显示（可能有黑边）
     *   - 'cover': 保持比例，裁剪填满（可能被裁剪）
     *   - 'none': 不缩放
     *   - 'scale-down': 等同于none或contain中较小的一个
     */
fit:{type:String,default:"contain",validator:e=>["fill","contain","cover","none","scale-down"].includes(e)},
/**
     * 圆角大小
     * @description 支持单个值或四个值（CSS border-radius格式）
     *   - 单个值：'8px'
     *   - 四个值：'8px 12px 8px 12px'（上左 上右 下右 下左）
     */
radius:{type:String,default:"0"},
/**
     * 边框样式
     * @description CSS border属性值，如：'1px solid #ddd'
     */
border:{type:String,default:""},
/**
     * 自定义样式对象
     * @description 额外的CSS样式，会与组件样式合并
     */
otherStyle:{type:Object,default:()=>({})},
/**
     * 自定义CSS类名
     * @description 支持字符串、数组或对象格式
     *   - 字符串：'custom-class'
     *   - 数组：['class1', 'class2']
     *   - 对象：{ 'class1': true, 'class2': false }
     */
customClass:{type:[String,Array,Object],default:""},
// ==================== 功能控制 ====================
/**
     * 是否懒加载
     * @description 延迟加载视频资源，用于性能优化
     */
lazy:{type:Boolean,default:!1},
/**
     * 是否显示加载状态
     * @description 控制是否显示加载动画和文字
     */
showLoading:{type:Boolean,default:!0}},emits:[
// ==================== 交互事件 ====================
/**
     * 点击视频时触发
     * @param {Event} event - 原生点击事件对象
     */
"click",
// ==================== 加载相关事件 ====================
/**
     * 开始加载视频时触发
     * @param {Event} event - 原生loadstart事件对象
     */
"loadstart",
/**
     * 视频元数据加载完成时触发
     * @param {Event} event - 原生loadedmetadata事件对象
     * @description 此时可获取视频时长、尺寸等信息
     */
"loadedmetadata",
/**
     * 视频数据加载完成时触发
     * @param {Event} event - 原生loadeddata事件对象
     */
"loadeddata",
/**
     * 视频可以开始播放时触发（缓冲足够）
     * @param {Event} event - 原生canplay事件对象
     */
"canplay",
/**
     * 视频可以流畅播放时触发（无需停顿缓冲）
     * @param {Event} event - 原生canplaythrough事件对象
     */
"canplaythrough",
/**
     * 视频加载成功时触发（自定义事件）
     * @param {Event} event - 原生事件对象
     */
"load-success",
/**
     * 视频加载失败时触发（自定义事件）
     * @param {Event} event - 原生事件对象
     */
"load-error",
// ==================== 播放控制事件 ====================
/**
     * 视频开始播放时触发
     * @param {Event} event - 原生play事件对象
     */
"play",
/**
     * 视频暂停时触发
     * @param {Event} event - 原生pause事件对象
     */
"pause",
/**
     * 视频播放结束时触发
     * @param {Event} event - 原生ended事件对象
     */
"ended",
/**
     * 播放时间更新时触发（播放过程中持续触发）
     * @param {Event} event - 原生timeupdate事件对象
     * @description 可用于更新进度条、显示当前时间等
     */
"timeupdate",
/**
     * 音量变化时触发
     * @param {Event} event - 原生volumechange事件对象
     */
"volumechange",
// ==================== 错误事件 ====================
/**
     * 视频发生错误时触发
     * @param {Event} event - 原生error事件对象
     * @description 包含错误类型和详细信息
     */
"error",
/**
     * 鼠标进入视频时触发
     * @param {Event} event - 原生mouseenter事件对象
     */
"mouseenter",
/**
     * 鼠标离开视频时触发
     * @param {Event} event - 原生mouseleave事件对象
     */
"mouseleave"],setup(e,{expose:a,emit:t}){const{t:o}=y(),l=e,r=t,s=v(null),n=v(!0),u=v(!1),d=v(""),i=v(!1),c=v(0),f=v(0),S=v(!1),b=v(l.muted),w=p((()=>F(l.src))),k=p((()=>l.poster?F(l.poster):"")),P=p((()=>E({width:"number"==typeof l.w?`${l.w}px`:l.w,height:"number"==typeof l.h?`${l.h}px`:l.h,position:"relative",display:"inline-block"}))),M=p((()=>{let e=E({width:"100%",height:"100%",objectFit:l.fit});return l.border&&(e=E({border:l.border,boxSizing:"border-box"})),e=D(e),E(Object.assign(e,l.otherStyle))})),x=p((()=>{let e=["l-video"];return l.customClass&&("string"==typeof l.customClass?e.push(l.customClass):Array.isArray(l.customClass)?e.push(...l.customClass):"object"==typeof l.customClass&&Object.entries(l.customClass).forEach((([a,t])=>{t&&e.push(a)}))),e})),T=p((()=>I(c.value))),R=p((()=>I(f.value))),_=p((()=>C)),F=e=>e&&""!==e?e.startsWith("/static")||e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")||e.startsWith("blob:")?e:_.value+e:"",D=e=>{if(!l.radius||"0"===l.radius)return e;const a=l.radius.split(" ");return a.length<=1?e.borderRadius=l.radius:(e.borderTopLeftRadius=a[0],e.borderTopRightRadius=a[1]||a[0],e.borderBottomRightRadius=a[2]||a[0],e.borderBottomLeftRadius=a[3]||a[1]||a[0]),e},I=e=>{if(!e||isNaN(e))return"00:00";const a=Math.floor(e/60),t=Math.floor(e%60);return`${a.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`},j=()=>{s.value&&(i.value?s.value.pause():s.value.play())},O=()=>{s.value&&(b.value=!b.value,s.value.muted=b.value)},B=()=>{if(s.value)if(S.value)document.exitFullscreen(),S.value=!1,r("fullscreen-change",!1);else{const e=s.value.parentElement;e&&e.requestFullscreen?e.requestFullscreen():s.value.requestFullscreen&&s.value.requestFullscreen()}},A=()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement);S.value=e,s.value&&(s.value.controls=!1)},V=()=>{const e=()=>{s.value&&i.value&&(c.value=s.value.currentTime||0,requestAnimationFrame(e))};e()},q=()=>{if(s.value)return s.value.play()},N=()=>{s.value&&s.value.pause()},U=()=>s.value?s.value.currentTime:0,W=e=>{s.value&&(s.value.currentTime=e)},z=()=>s.value?s.value.duration:0,$=()=>s.value?s.value.volume:0,G=e=>{s.value&&(s.value.volume=Math.max(0,Math.min(1,e)))};m((()=>l.src),(e=>{console.log("newSrc",e),e&&(n.value=l.showLoading,u.value=!1,i.value=!1,c.value=0,f.value=0)})),m((()=>l.muted),(e=>{b.value=e,s.value&&(s.value.muted=e)})),g((()=>{document.addEventListener("fullscreenchange",A),document.addEventListener("webkitfullscreenchange",A),document.addEventListener("mozfullscreenchange",A),document.addEventListener("MSFullscreenChange",A)})),h((()=>{document.removeEventListener("fullscreenchange",A),document.removeEventListener("webkitfullscreenchange",A),document.removeEventListener("mozfullscreenchange",A),document.removeEventListener("MSFullscreenChange",A)})),a({videoRef:s,isFullscreen:S,play:q,pause:N,getCurrentTime:U,setCurrentTime:W,getDuration:z,getVolume:$,setVolume:G,togglePlayPause:j,toggleMute:O,requestFullscreen:B});const H={t:o,props:l,emit:r,videoRef:s,isLoading:n,hasError:u,errorMessage:d,isPlaying:i,currentTime:c,duration:f,isFullscreen:S,isMuted:b,parsedSrc:w,parsedPoster:k,containerStyle:P,videoStyle:M,videoClass:x,formattedCurrentTime:T,formattedDuration:R,ossPathOriginal:_,parsePath:F,setRadius:D,formatTime:I,handleLoadStart:e=>{l.showLoading&&(n.value=!0),u.value=!1,r("loadstart",e)},handleLoadedMetadata:e=>{s.value&&(f.value=s.value.duration||0),r("loadedmetadata",e)},handleLoadedData:e=>{r("loadeddata",e)},handleCanPlay:e=>{l.showLoading&&(n.value=!1),u.value=!1,r("canplay",e),r("load-success",e)},handleCanPlayThrough:e=>{l.showLoading&&(n.value=!1),r("canplaythrough",e)},handlePlay:e=>{i.value=!0,V(),r("play",e)},handlePause:e=>{i.value=!1,r("pause",e)},handleEnded:e=>{i.value=!1,c.value=0,r("ended",e)},handleTimeUpdate:e=>{s.value&&(c.value=s.value.currentTime||0),r("timeupdate",e)},handleVolumeChange:e=>{r("volumechange",e)},handleMouseEnter:e=>{console.log("mouseenter"),r("mouseenter",e)},handleMouseLeave:e=>{console.log("mouseleave"),r("mouseleave",e)},handleError:e=>{n.value=!1,u.value=!0;const a=e.target.error;if(a)switch(a.code){case a.MEDIA_ERR_ABORTED:d.value=o("videoErrorAborted");break;case a.MEDIA_ERR_NETWORK:d.value=o("videoErrorNetwork");break;case a.MEDIA_ERR_DECODE:d.value=o("videoErrorDecode");break;case a.MEDIA_ERR_SRC_NOT_SUPPORTED:d.value=o("videoErrorNotSupported");break;default:d.value=o("videoErrorUnknown")}else d.value=o("videoErrorLoad");r("error",e),r("load-error",e)},handleVideoClick:e=>{l.showControls&&j(),r("click",e)},togglePlayPause:j,toggleMute:O,requestFullscreen:B,handleFullscreenChange:A,startTimeUpdate:V,play:q,pause:N,getCurrentTime:U,setCurrentTime:W,getDuration:z,getVolume:$,setVolume:G,ref:v,computed:p,watch:m,onMounted:g,onUnmounted:h,get useI18n(){return y},LImg:L,get convertStyleObject(){return E}};return Object.defineProperty(H,"__isScriptSetup",{enumerable:!1,value:!0}),H}},b={class:"loading-content"},w={class:"loading-text"},k=["src","poster","controlslist","autoplay","loop","muted","preload","playsinline"],P={class:"video-not-supported"},M={class:"video-controls"},x={class:"control-left"},T={class:"video-time"},R={class:"control-right"},_={class:"error-content"},F={class:"error-text"};const D=f(S,[["render",function(v,p,m,g,h,y){return a(),e("div",{class:"l-video-container",style:l(g.containerStyle)},[g.isLoading?(a(),e("div",{key:0,class:"video-loading",style:l(g.videoStyle)},[r("div",b,[s(g.LImg,{src:"/static/images/video-loading.png",w:"40px",h:"40px"}),r("span",w,n(g.t("videoLoading")||"Loading video..."),1)])],4)):t("",!0),o(r("video",{ref:"videoRef",src:g.parsedSrc,poster:g.parsedPoster,controls:!1,controlslist:g.isFullscreen?"nodownload nofullscreen noremoteplayback":"",autoplay:m.autoplay,loop:m.loop,muted:m.muted,preload:m.preload,playsinline:m.playsinline,class:d(["l-video-player",g.videoClass]),style:l(g.videoStyle),onLoadstart:g.handleLoadStart,onLoadedmetadata:g.handleLoadedMetadata,onLoadeddata:g.handleLoadedData,onCanplay:g.handleCanPlay,onCanplaythrough:g.handleCanPlayThrough,onPlay:g.handlePlay,onPause:g.handlePause,onEnded:g.handleEnded,onTimeupdate:g.handleTimeUpdate,onVolumechange:g.handleVolumeChange,onError:g.handleError,onClick:g.handleVideoClick,onMouseenter:g.handleMouseEnter,onMouseleave:g.handleMouseLeave},[r("p",P,n(g.t("videoNotSupported")),1)],46,k),[[u,!g.isLoading]]),m.showControls&&!g.isLoading?(a(),e("div",{key:1,class:d(["video-overlay",{"fullscreen-overlay":g.isFullscreen}]),onClick:p[0]||(p[0]=i((()=>{}),["stop"]))},[r("div",M,[r("div",x,[o(s(g.LImg,{onClick:g.togglePlayPause,src:"/static/images/pause-icon.png",w:"24px",h:"24px",class:"video-control-icon"},null,512),[[u,g.isPlaying]]),o(s(g.LImg,{onClick:g.togglePlayPause,src:"/static/images/play-icon.png",w:"24px",h:"24px",class:"video-control-icon"},null,512),[[u,!g.isPlaying]]),r("span",T,n(g.formattedCurrentTime)+" / "+n(g.formattedDuration),1)]),r("div",R,[m.isShowVoice?(a(),e(c,{key:0},[o(s(g.LImg,{onClick:g.toggleMute,src:"/static/images/voice-icon.png",w:"20px",h:"19px",class:"video-control-icon"},null,512),[[u,!g.isMuted]]),o(s(g.LImg,{onClick:g.toggleMute,src:"/static/images/voice-icon-close.png",w:"20px",h:"19px",class:"video-control-icon"},null,512),[[u,g.isMuted]])],64)):t("",!0),s(g.LImg,{src:g.isFullscreen?"/static/images/shrink-icon.png":"/static/images/expand-icon.png",w:"20px",h:"20px",onClick:g.requestFullscreen,class:"video-control-icon"},null,8,["src"])])])],2)):t("",!0),g.hasError?(a(),e("div",{key:2,class:"video-error",style:l(g.videoStyle)},[r("div",_,[s(g.LImg,{src:"/static/images/format-error.png",w:"25px",h:"25px"}),r("span",F,n(g.errorMessage),1)])],4)):t("",!0)],4)}],["__scopeId","data-v-ed462aae"],["__file","/Users/pangxinyuan/WebstormProjects/pc_web_kaka_AI/src/components/l-video.vue"]]);export{D as L};
//# sourceMappingURL=l-video-C1csp7rS.js.map
