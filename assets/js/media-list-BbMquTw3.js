import{at as e}from"./vue-vendor-BmHMP2lV.js";const r=e("media-list",{state:()=>({
// 当前媒体详情数据
currentMediaDetail:null,
// 当前媒体的生成模式
currentGenerationMode:null}),getters:{
/**
     * 获取当前媒体详情
     * @param state - Pinia state
     * @returns {Object | null} - 当前媒体详情数据或 null
     */
getCurrentMediaDetail:e=>e.currentMediaDetail,
/**
     * 获取当前生成模式
     * @param state - Pinia state  
     * @returns {string | null} - 当前生成模式或 null
     */
getCurrentGenerationMode:e=>e.currentGenerationMode,
/**
     * 判断是否有当前媒体详情数据
     * @param state - Pinia state
     * @returns {boolean} - 是否有数据
     */
hasCurrentMediaDetail:e=>!!e.currentMediaDetail&&!!e.currentMediaDetail.id},actions:{
/**
     * 设置当前媒体详情数据
     * @param {Object} mediaData - 媒体数据对象
     * @param {string} generationMode - 生成模式
     */
setCurrentMediaDetail(e,r=null){console.log("Setting current media detail:",e),this.currentMediaDetail=e,this.currentGenerationMode=r},
/**
     * 根据媒体ID检查是否为当前媒体
     * @param {string|number} mediaId - 媒体ID
     * @returns {boolean} - 是否为当前媒体
     */
isCurrentMedia(e){return this.currentMediaDetail&&String(this.currentMediaDetail.id)===String(e)},
/**
     * 清空当前媒体详情数据
     */
clearCurrentMediaDetail(){console.log("Clearing current media detail"),this.currentMediaDetail=null,this.currentGenerationMode=null},
/**
     * 清空所有数据（登出时调用）
     */
clearAllData(){console.log("Clearing all media data"),this.clearCurrentMediaDetail()}},
/**
   * 持久化配置
   * 使用 localStorage 存储，参考 user.ts 的配置
   */
persist:{key:"media-list-store",storage:localStorage,
// 序列化配置，确保数据正确保存和恢复
serializer:{serialize:e=>JSON.stringify({currentMediaDetail:e.currentMediaDetail,currentGenerationMode:e.currentGenerationMode}),deserialize:e=>{try{const r=JSON.parse(e);return{currentMediaDetail:r.currentMediaDetail||null,currentGenerationMode:r.currentGenerationMode||null}}catch(r){return console.warn("Failed to deserialize media store data:",r),{currentMediaDetail:null,currentGenerationMode:null}}}}}});export{r as u};
//# sourceMappingURL=media-list-BbMquTw3.js.map
