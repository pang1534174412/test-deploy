import{_ as e,a as s,e as t,w as n,x as a,y as i}from"./index-D5drJXHy.js";import{x as o,y as r,J as g,H as d,M as c,au as u,c as p}from"./vue-vendor-BmHMP2lV.js";import{u as l}from"./vendor-BCTF97Ld.js";const m="guest_message_count",S={__name:"l-send-button",props:{
/**
     * 是否允许发送，true时按钮可点击
     */
isCanSend:{type:Boolean,default:!1},
/**
     * 是否处于分析/发送中，true时显示loading/停止图标
     */
isLoading:{type:Boolean,default:!1},
/**
     * 是否为聊天主场景，true显示主图标，false显示会话图标
     */
isChat:{type:Boolean,default:!0}},emits:["onClickSend","onClickStop"],setup(e,{expose:o,emit:r}){o();const g=u(),d=s(),{t:c}=l(),S=e,_=p((()=>d.isLoggedIn)),C=r,k=()=>i(m)||0,h={router:g,userStore:d,t:c,props:S,isLoggedIn:_,emit:C,GUEST_MESSAGE_KEY:m,getGuestMessageCount:k,increaseGuestMessageCount:()=>{const e=k();return a(m,e+1),e+1},MAX_GUEST_MESSAGES:3,handleClick:e=>{const s=S.isCanSend&&!S.isLoading,t=n.handleMessageLimit({isChat:S.isChat,isLoggedIn:_.value,willSend:s,message:c("limitSendMessage",{count:1})});(!S.isChat||_.value||t)&&(!S.isCanSend&&S.isLoading?(console.log("onClickStop"),C("onClickStop",e)):S.isCanSend&&!S.isLoading?(console.log("onClickSend"),C("onClickSend",e)):S.isCanSend||console.log("Not can send",S.isCanSend))},LImg:t,get useRouter(){return u},get useUserStore(){return s},get getStorage(){return i},get setStorage(){return a},get useI18n(){return l},computed:p,get guestMessageLimit(){return n}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},_={key:0},C={key:0},k={key:1},h={key:1};const L=e(S,[["render",function(e,s,t,n,a,i){return r(),o("div",{class:"l-send-btn",onClick:n.handleClick},[t.isLoading?(r(),g(n.LImg,{key:0,w:"36px",h:"36px",src:"/static/images/image_chat/send_stop.png"})):(r(),o(d,{key:1},[t.isCanSend?(r(),o("div",_,[t.isChat?(r(),o("div",C,[c(n.LImg,{w:"36px",h:"36px",src:"/static/images/image_chat/send_active.png"})])):(r(),o("div",k,[c(n.LImg,{w:"36px",h:"36px",src:"/static/images/image_chat/send_active_session.png"})]))])):(r(),o("div",h,[c(n.LImg,{w:"36px",h:"36px",src:"/static/images/image_chat/send_button.png"})]))],64))])}],["__scopeId","data-v-1528492a"],["__file","/Users/pangxinyuan/WebstormProjects/pc_web_kaka_AI/src/components/l-send-button.vue"]]);export{L};
//# sourceMappingURL=l-send-button-BmTG_knf.js.map
