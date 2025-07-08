import{x as e,y as t,G as o,B as i,P as a,Q as l,I as n,c as d}from"./vue-vendor-BmHMP2lV.js";import{_ as s,v as r}from"./index-C2QxgTZu.js";const p={__name:"mobile-l-button",props:{
/**
     * 按钮文本
     */
text:{type:String,required:!0},
/**
     * 加载状态下的按钮文本
     */
loadingText:{type:String,default:""},
/**
     * 按钮宽度，支持像素值或百分比
     */
width:{type:String,default:"100%"},
/**
     * 按钮高度，支持像素值
     */
height:{type:String,default:"42px"},
/**
     * 按钮圆角大小
     */
borderRadius:{type:String,default:"12px"},
/**
     * 按钮禁用状态
     */
disabled:{type:Boolean,default:!1},
/**
     * 按钮加载状态
     */
loading:{type:Boolean,default:!1},
/**
     * 按钮背景颜色
     */
backgroundColor:{type:String,default:"#000000"},
/**
     * 按钮文字颜色
     */
textColor:{type:String,default:"#FFFFFF"}},emits:["onClick"],setup(e,{expose:t,emit:o}){t();const i=e,a=o,l=d((()=>{const e=e=>"string"==typeof e&&e.endsWith("px")?r(e):e;return{width:e(i.width),height:e(i.height),borderRadius:e(i.borderRadius),backgroundColor:i.backgroundColor,color:i.textColor}})),n={props:i,emits:a,buttonStyle:l,handleClick:e=>{i.disabled||i.loading||a("onClick",e)},computed:d,get pxToRem(){return r}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},u=["disabled"],c={key:0,class:"loading-icon"};const g=s(p,[["render",function(d,s,r,p,g,f){return t(),e("button",{class:n(["l-button",{"is-disabled":r.disabled,"is-loading":r.loading}]),disabled:r.disabled||r.loading,style:l(p.buttonStyle),onClick:p.handleClick},[r.loading?(t(),e("span",c,s[0]||(s[0]=[i("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16"},[i("path",{d:"M512 64c-247.4 0-448 200.6-448 448s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:"#ffffff",opacity:"0.5"}),i("path",{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm0 64c170.5 0 308 137.5 308 308s-137.5 308-308 308-308-137.5-308-308 137.5-308 308-308z",fill:"#ffffff",class:"loading-circle"})],-1)]))):o("",!0),i("span",null,a(r.loading&&r.loadingText?r.loadingText:r.text),1)],14,u)}],["__scopeId","data-v-0511dd4f"],["__file","/Users/pangxinyuan/WebstormProjects/pc_web_kaka_AI/src/mobile/components/mobile-l-button.vue"]]);export{g as M};
//# sourceMappingURL=mobile-l-button-C7Znzqnl.js.map
