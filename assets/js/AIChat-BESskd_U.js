var e=Object.defineProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,n=(e,n)=>{for(var l in n||(n={}))r.call(n,l)&&t(e,l,n[l]);if(a)for(var l of a(n))s.call(n,l)&&t(e,l,n[l]);return e};import{at as l}from"./vue-vendor-BmHMP2lV.js";const i=l("AIChat",{state:()=>({
// 持久化参数，不会被清空（如模型选择）
persistentParams:{model:null,isThinking:null,
// Think模式应该是持久化的用户偏好
enable_search:null},
// 临时参数，发送消息后会被清空（如消息内容）
temporaryParams:{content:null,files:null}}),actions:{
// 设置AI提问参数
setAIChatParams(e){void 0!==e.model&&(this.persistentParams.model=e.model),void 0!==e.isThinking&&(this.persistentParams.isThinking=e.isThinking),void 0!==e.enable_search&&(this.persistentParams.enable_search=e.enable_search);const t=e,{model:n,isThinking:l,enable_search:i}=t,o=((e,t)=>{var n={};for(var l in e)r.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&a)for(var l of a(e))t.indexOf(l)<0&&s.call(e,l)&&(n[l]=e[l]);return n})(t,["model","isThinking","enable_search"]);Object.keys(o).forEach((e=>{this.temporaryParams.hasOwnProperty(e)&&(this.temporaryParams[e]=o[e])}))},
// 获取AI提问参数
getAIChatParams(){return n(n({},this.persistentParams),this.temporaryParams)},
// 清空临时参数，保留持久化参数
clearAIChatParams(){this.temporaryParams={content:null,files:null}},
// 完全清空所有参数（包括持久化参数）
clearAllParams(){this.persistentParams={model:null,isThinking:null,enable_search:null},this.temporaryParams={content:null,files:null}}}});export{i as u};
//# sourceMappingURL=AIChat-BESskd_U.js.map
