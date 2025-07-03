var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},l=(e,r)=>t(e,n(r)),c=e=>"symbol"==typeof e?e:e+"",u=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n},d=(e,t,n)=>new Promise(((r,o)=>{var i=e=>{try{s(n.next(e))}catch(nl){o(nl)}},a=e=>{try{s(n.throw(e))}catch(nl){o(nl)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,a);s((n=n.apply(e,t)).next())}));import{x as p,y as f,j as m,r as h}from"./vue-vendor-BmHMP2lV.js";import{_ as g}from"./index-D5drJXHy.js";import"./vue-element-plus-x-C3TzBEXs.js";import"./vendor-BCTF97Ld.js";import"./element-plus-zL2Ek_Pi.js";var v,w,b,y,_,x,k,E,C,S,T,A,O={},I=[],P=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,N=Array.isArray;function R(e,t){for(var n in t)e[n]=t[n];return e}function M(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function L(e,t,n){var r,o,i,a={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?v.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)null==a[i]&&(a[i]=e.defaultProps[i]);return z(e,a,r,o,null)}function z(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++b:o,__i:-1,__u:0};return null==o&&null!=w.vnode&&w.vnode(i),i}function j(){return{current:null}}function F(e){return e.children}function D(e,t){this.props=e,this.context=t}function $(e,t){if(null==t)return e.__?$(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?$(e):null}function H(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return H(e)}}function Z(e){(!e.__d&&(e.__d=!0)&&y.push(e)&&!U.__r++||_!=w.debounceRendering)&&((_=w.debounceRendering)||x)(U)}function U(){for(var e,t,n,r,o,i,a,s=1;y.length;)y.length>s&&y.sort(k),e=y.shift(),s=y.length,e.__d&&(n=void 0,o=(r=(t=e).__v).__e,i=[],a=[],t.__P&&((n=R({},r)).__v=r.__v+1,w.vnode&&w.vnode(n),X(t.__P,n,r,t.__n,t.__P.namespaceURI,32&r.__u?[o]:null,i,null==o?$(r):o,!!(32&r.__u),a),n.__v=r.__v,n.__.__k[n.__i]=n,J(i,n,a),n.__e!=o&&H(n)));U.__r=0}function V(e,t,n,r,o,i,a,s,l,c,u){var d,p,f,m,h,g,v=r&&r.__k||I,w=t.length;for(l=function(e,t,n,r,o){var i,a,s,l,c,u=n.length,d=u,p=0;for(e.__k=new Array(o),i=0;i<o;i++)null!=(a=t[i])&&"boolean"!=typeof a&&"function"!=typeof a?(l=i+p,(a=e.__k[i]="string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?z(null,a,null,null,null):N(a)?z(F,{children:a},null,null,null):null==a.constructor&&a.__b>0?z(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,s=null,-1!=(c=a.__i=q(a,n,l,d))&&(d--,(s=n[c])&&(s.__u|=2)),null==s||null==s.__v?(-1==c&&(o>u?p--:o<u&&p++),"function"!=typeof a.type&&(a.__u|=4)):c!=l&&(c==l-1?p--:c==l+1?p++:(c>l?p--:p++,a.__u|=4))):e.__k[i]=null;if(d)for(i=0;i<u;i++)null!=(s=n[i])&&!(2&s.__u)&&(s.__e==r&&(r=$(s)),te(s,s));return r}(n,t,v,l,w),d=0;d<w;d++)null!=(f=n.__k[d])&&(p=-1==f.__i?O:v[f.__i]||O,f.__i=d,g=X(e,f,p,o,i,a,s,l,c,u),m=f.__e,f.ref&&p.ref!=f.ref&&(p.ref&&ee(p.ref,null,f),u.push(f.ref,f.__c||m,f)),null==h&&null!=m&&(h=m),4&f.__u||p.__k===f.__k?l=B(f,l,e):"function"==typeof f.type&&void 0!==g?l=g:m&&(l=m.nextSibling),f.__u&=-7);return n.__e=h,l}function B(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=B(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=$(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling}while(null!=t&&8==t.nodeType);return t}function W(e,t){return t=t||[],null==e||"boolean"==typeof e||(N(e)?e.some((function(e){W(e,t)})):t.push(e)),t}function q(e,t,n,r){var o,i,a=e.key,s=e.type,l=t[n];if(null===l&&null==e.key||l&&a==l.key&&s==l.type&&!(2&l.__u))return n;if(r>(null==l||2&l.__u?0:1))for(o=n-1,i=n+1;o>=0||i<t.length;){if(o>=0){if((l=t[o])&&!(2&l.__u)&&a==l.key&&s==l.type)return o;o--}if(i<t.length){if((l=t[i])&&!(2&l.__u)&&a==l.key&&s==l.type)return i;i++}}return-1}function G(e,t,n){"-"==t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||P.test(t)?n:n+"px"}function K(e,t,n,r,o){var i;e:if("style"==t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||G(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||G(e.style,t,n[t])}else if("o"==t[0]&&"n"==t[1])i=t!=(t=t.replace(E,"$1")),t=t.toLowerCase()in e||"onFocusOut"==t||"onFocusIn"==t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=C,e.addEventListener(t,i?T:S,i)):e.removeEventListener(t,i?T:S,i);else{if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(a){}"function"==typeof n||(null==n||!1===n&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n))}}function Y(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=C++;else if(t.t<n.u)return;return n(w.event?w.event(t):t)}}}function X(e,t,n,r,o,i,a,s,l,c){var u,d,p,f,m,h,g,b,y,_,x,k,E,C,S,T,A,I=t.type;if(null!=t.constructor)return null;128&n.__u&&(l=!!(32&n.__u),i=[s=t.__e=n.__e]),(u=w.__b)&&u(t);e:if("function"==typeof I)try{if(b=t.props,y="prototype"in I&&I.prototype.render,_=(u=I.contextType)&&r[u.__c],x=u?_?_.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:(y?t.__c=d=new I(b,x):(t.__c=d=new D(b,x),d.constructor=I,d.render=ne),_&&_.sub(d),d.props=b,d.state||(d.state={}),d.context=x,d.__n=r,p=d.__d=!0,d.__h=[],d._sb=[]),y&&null==d.__s&&(d.__s=d.state),y&&null!=I.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=R({},d.__s)),R(d.__s,I.getDerivedStateFromProps(b,d.__s))),f=d.props,m=d.state,d.__v=t,p)y&&null==I.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),y&&null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(y&&null==I.getDerivedStateFromProps&&b!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,x),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(d.props=b,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some((function(e){e&&(e.__=t)})),k=0;k<d._sb.length;k++)d.__h.push(d._sb[k]);d._sb=[],d.__h.length&&a.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,x),y&&null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(f,m,h)}))}if(d.context=x,d.props=b,d.__P=e,d.__e=!1,E=w.__r,C=0,y){for(d.state=d.__s,d.__d=!1,E&&E(t),u=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S]);d._sb=[]}else do{d.__d=!1,E&&E(t),u=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++C<25);d.state=d.__s,null!=d.getChildContext&&(r=R(R({},r),d.getChildContext())),y&&!p&&null!=d.getSnapshotBeforeUpdate&&(h=d.getSnapshotBeforeUpdate(f,m)),T=u,null!=u&&u.type===F&&null==u.key&&(T=Q(u.props.children)),s=V(e,N(T)?T:[T],t,n,r,o,i,a,s,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&a.push(d),g&&(d.__E=d.__=null)}catch(P){if(t.__v=null,l||null!=i)if(P.then){for(t.__u|=l?160:128;s&&8==s.nodeType&&s.nextSibling;)s=s.nextSibling;i[i.indexOf(s)]=null,t.__e=s}else for(A=i.length;A--;)M(i[A]);else t.__e=n.__e,t.__k=n.__k;w.__e(P,t,n)}else null==i&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=function(e,t,n,r,o,i,a,s,l){var c,u,d,p,f,m,h,g=n.props,b=t.props,y=t.type;if("svg"==y?o="http://www.w3.org/2000/svg":"math"==y?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=i)for(c=0;c<i.length;c++)if((f=i[c])&&"setAttribute"in f==!!y&&(y?f.localName==y:3==f.nodeType)){e=f,i[c]=null;break}if(null==e){if(null==y)return document.createTextNode(b);e=document.createElementNS(o,y,b.is&&b),s&&(w.__m&&w.__m(t,i),s=!1),i=null}if(null==y)g===b||s&&e.data==b||(e.data=b);else{if(i=i&&v.call(e.childNodes),g=n.props||O,!s&&null!=i)for(g={},c=0;c<e.attributes.length;c++)g[(f=e.attributes[c]).name]=f.value;for(c in g)if(f=g[c],"children"==c);else if("dangerouslySetInnerHTML"==c)d=f;else if(!(c in b)){if("value"==c&&"defaultValue"in b||"checked"==c&&"defaultChecked"in b)continue;K(e,c,null,f,o)}for(c in b)f=b[c],"children"==c?p=f:"dangerouslySetInnerHTML"==c?u=f:"value"==c?m=f:"checked"==c?h=f:s&&"function"!=typeof f||g[c]===f||K(e,c,f,g[c],o);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=""),V("template"==t.type?e.content:e,N(p)?p:[p],t,n,r,"foreignObject"==y?"http://www.w3.org/1999/xhtml":o,i,a,i?i[0]:n.__k&&$(n,0),s,l),null!=i)for(c=i.length;c--;)M(i[c]);s||(c="value","progress"==y&&null==m?e.removeAttribute("value"):null!=m&&(m!==e[c]||"progress"==y&&!m||"option"==y&&m!=g[c])&&K(e,c,m,g[c],o),c="checked",null!=h&&h!=e[c]&&K(e,c,h,g[c],o))}return e}(n.__e,t,n,r,o,i,a,l,c);return(u=w.diffed)&&u(t),128&t.__u?void 0:s}function J(e,t,n){for(var r=0;r<n.length;r++)ee(n[r],n[++r],n[++r]);w.__c&&w.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(n){w.__e(n,t.__v)}}))}function Q(e){return"object"!=typeof e||null==e||e.__b&&e.__b>0?e:N(e)?e.map(Q):R({},e)}function ee(e,t,n){try{if("function"==typeof e){var r="function"==typeof e.__u;r&&e.__u(),r&&null==t||(e.__u=e(t))}else e.current=t}catch(o){w.__e(o,n)}}function te(e,t,n){var r,o;if(w.unmount&&w.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||ee(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){w.__e(i,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&te(r[o],t,n||"function"!=typeof e.type);n||M(e.__e),e.__c=e.__=e.__e=void 0}function ne(e,t,n){return this.constructor(e,n)}function re(e,t,n){var r,o,i,a;t==document&&(t=document.documentElement),w.__&&w.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],a=[],X(t,e=(!r&&n||t).__k=L(F,null,[e]),o||O,O,t.namespaceURI,!r&&n?[n]:o?null:t.firstChild?v.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r,a),J(i,e,a)}function oe(e,t){re(e,t,oe)}function ie(e,t,n){var r,o,i,a,s=R({},e.props);for(i in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)"key"==i?r=t[i]:"ref"==i?o=t[i]:s[i]=null==t[i]&&null!=a?a[i]:t[i];return arguments.length>2&&(s.children=arguments.length>3?v.call(arguments,2):n),z(e.type,s,r||e.key,o||e.ref,null)}function ae(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach((function(e){e.__e=!0,Z(e)}))},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c="__cC"+A++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}v=I.slice,w={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(s){e=s}throw e}},b=0,D.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=R({},this.state),"function"==typeof e&&(e=e(R({},n),this.props)),e&&R(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),Z(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Z(this))},D.prototype.render=F,y=[],x="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k=function(e,t){return e.__v.__b-t.__v.__b},U.__r=0,E=/(PointerCapture)$|Capture$/i,C=0,S=Y(!1),T=Y(!0),A=0;var se=0;function le(e,t,n,r,o,i){t||(t={});var a,s,l=t;if("ref"in l)for(s in l={},t)"ref"==s?a=t[s]:l[s]=t[s];var c={type:e,props:l,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--se,__i:-1,__u:0,__source:o,__self:i};if("function"==typeof e&&(a=e.defaultProps))for(s in a)void 0===l[s]&&(l[s]=a[s]);return w.vnode&&w.vnode(c),c}var ce,ue,de,pe,fe=0,me=[],he=w,ge=he.__b,ve=he.__r,we=he.diffed,be=he.__c,ye=he.unmount,_e=he.__;function xe(e,t){he.__h&&he.__h(ue,e,fe||t),fe=0;var n=ue.__H||(ue.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ke(e){return fe=1,Ee($e,e)}function Ee(e,t,n){var r=xe(ce++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):$e(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=ue,!ue.__f)){var o=function(e,t,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return!!e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,t,n);var a=r.__c.props!==e;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0)}})),i&&i.call(this,e,t,n)||a};ue.__f=!0;var i=ue.shouldComponentUpdate,a=ue.componentWillUpdate;ue.componentWillUpdate=function(e,t,n){if(this.__e){var r=i;i=void 0,o(e,t,n),i=r}a&&a.call(this,e,t,n)},ue.shouldComponentUpdate=o}return r.__N||r.__}function Ce(e,t){var n=xe(ce++,3);!he.__s&&De(n.__H,t)&&(n.__=e,n.u=t,ue.__H.__h.push(n))}function Se(e,t){var n=xe(ce++,4);!he.__s&&De(n.__H,t)&&(n.__=e,n.u=t,ue.__h.push(n))}function Te(e){return fe=5,Oe((function(){return{current:e}}),[])}function Ae(e,t,n){fe=6,Se((function(){if("function"==typeof e){var n=e(t());return function(){e(null),n&&"function"==typeof n&&n()}}if(e)return e.current=t(),function(){return e.current=null}}),null==n?n:n.concat(e))}function Oe(e,t){var n=xe(ce++,7);return De(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ie(e,t){return fe=8,Oe((function(){return e}),t)}function Pe(e){var t=ue.context[e.__c],n=xe(ce++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(ue)),t.props.value):e.__}function Ne(e,t){he.useDebugValue&&he.useDebugValue(t?t(e):e)}function Re(){var e=xe(ce++,11);if(!e.__){for(var t=ue.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Me(){for(var e;e=me.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(je),e.__H.__h.forEach(Fe),e.__H.__h=[]}catch(Ul){e.__H.__h=[],he.__e(Ul,e.__v)}}he.__b=function(e){ue=null,ge&&ge(e)},he.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),_e&&_e(e,t)},he.__r=function(e){ve&&ve(e),ce=0;var t=(ue=e.__c).__H;t&&(de===ue?(t.__h=[],ue.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0}))):(t.__h.forEach(je),t.__h.forEach(Fe),t.__h=[],ce=0)),de=ue},he.diffed=function(e){we&&we(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==me.push(t)&&pe===he.requestAnimationFrame||((pe=he.requestAnimationFrame)||ze)(Me)),t.__H.__.forEach((function(e){e.u&&(e.__H=e.u),e.u=void 0}))),de=ue=null},he.__c=function(e,t){t.some((function(e){try{e.__h.forEach(je),e.__h=e.__h.filter((function(e){return!e.__||Fe(e)}))}catch(El){t.some((function(e){e.__h&&(e.__h=[])})),t=[],he.__e(El,e.__v)}})),be&&be(e,t)},he.unmount=function(e){ye&&ye(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{je(e)}catch(n){t=n}})),n.__H=void 0,t&&he.__e(t,n.__v))};var Le="function"==typeof requestAnimationFrame;function ze(e){var t,n=function(){clearTimeout(r),Le&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Le&&(t=requestAnimationFrame(n))}function je(e){var t=ue,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),ue=t}function Fe(e){var t=ue;e.__c=e.__(),ue=t}function De(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function $e(e,t){return"function"==typeof t?t(e):t}const He=ae([]);function Ze({children:e,plugins:t}){
return le(He.Provider,{value:t,children:e})}function Ue(e,t){for(var n in t)e[n]=t[n];return e}function Ve(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function Be(e,t){var n=t(),r=ke({t:{__:n,u:t}}),o=r[0].t,i=r[1];return Se((function(){o.__=n,o.u=t,We(o)&&i({t:o})}),[e,n,t]),Ce((function(){return We(o)&&i({t:o}),e((function(){We(o)&&i({t:o})}))}),[e]),n}function We(e){var t,n,r=e.u,o=e.__;try{var i=r();return!((t=o)===(n=i)&&(0!==t||1/t==1/n)||t!=t&&n!=n)}catch(a){return!0}}function qe(e){e()}function Ge(e){return e}function Ke(){return[!1,qe]}var Ye=Se;function Xe(e,t){this.props=e,this.context=t}function Je(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:Ve(this.props,e)}function r(t){return this.shouldComponentUpdate=n,L(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Xe.prototype=new D).isPureReactComponent=!0,Xe.prototype.shouldComponentUpdate=function(e,t){return Ve(this.props,e)||Ve(this.state,t)};var Qe=w.__b;w.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Qe&&Qe(e)};var et="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function tt(e){function t(t){var n=Ue({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=et,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var nt=function(e,t){return null==e?null:W(W(e).map(t))},rt={map:nt,forEach:nt,count:function(e){return e?W(e).length:0},only:function(e){var t=W(e);if(1!==t.length)throw"Children.only";return t[0]},toArray:W},ot=w.__e;w.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);ot(e,t,n,r)};var it=w.unmount;function at(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=Ue({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return at(e,t,n)}))),e}function st(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return st(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function lt(){this.__u=0,this.o=null,this.__b=null}function ct(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function ut(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return L(n,o)}return o.displayName="Lazy",o.__f=!0,o}function dt(){this.i=null,this.l=null}w.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),it&&it(e)},(lt.prototype=new D).__c=function(e,t){var n=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(n);var o=ct(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(s):s())};n.__R=a;var s=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=st(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},lt.prototype.componentWillUnmount=function(){this.o=[]},lt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=at(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&L(F,null,e.fallback);return o&&(o.__u&=-33),[L(F,null,t.__a?null:e.children),o]};var pt=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function ft(e){return this.getChildContext=function(){return e.context},e.children}function mt(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){re(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;null!==r&&!r.__m&&null!==r.__;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},appendChild:function(e){this.childNodes.push(e),t.h.appendChild(e)},insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}re(L(ft,{context:t.context},e.__v),t.v)}function ht(e,t){var n=L(mt,{__v:e,h:t});return n.containerInfo=t,n}(dt.prototype=new D).__a=function(e){var t=this,n=ct(t.__v),r=t.l.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),pt(t,e,r)):o()};n?n(i):i()}},dt.prototype.render=function(e){this.i=null,this.l=new Map;var t=W(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},dt.prototype.componentDidUpdate=dt.prototype.componentDidMount=function(){var e=this;this.l.forEach((function(t,n){pt(e,n,t)}))};var gt="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,vt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,wt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,bt=/[A-Z0-9]/g,yt="undefined"!=typeof document,_t=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};function xt(e,t,n){return null==t.__k&&(t.textContent=""),re(e,t),"function"==typeof n&&n(),e?e.__c:null}function kt(e,t,n){return oe(e,t),"function"==typeof n&&n(),e?e.__c:null}D.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(D.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var Et=w.event;function Ct(){}function St(){return this.cancelBubble}function Tt(){return this.defaultPrevented}w.event=function(e){return Et&&(e=Et(e)),e.persist=Ct,e.isPropagationStopped=St,e.isDefaultPrevented=Tt,e.nativeEvent=e};var At,Ot={enumerable:!1,configurable:!0,get:function(){return this.class}},It=w.vnode;w.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,r={},o=-1===n.indexOf("-");for(var i in t){var a=t[i];if(!("value"===i&&"defaultValue"in t&&null==a||yt&&"children"===i&&"noscript"===n||"class"===i||"className"===i)){var s=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===a?a="":"translate"===s&&"no"===a?a=!1:"o"===s[0]&&"n"===s[1]?"ondoubleclick"===s?i="ondblclick":"onchange"!==s||"input"!==n&&"textarea"!==n||_t(t.type)?"onfocus"===s?i="onfocusin":"onblur"===s?i="onfocusout":wt.test(i)&&(i=s):s=i="oninput":o&&vt.test(i)?i=i.replace(bt,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===s&&r[i=s]&&(i="oninputCapture"),r[i]=a}}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=W(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==n&&null!=r.defaultValue&&(r.value=W(t.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",Ot)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=gt,It&&It(e)};var Pt=w.__r;w.__r=function(e){Pt&&Pt(e),At=e.__c};var Nt=w.diffed;w.diffed=function(e){Nt&&Nt(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),At=null};var Rt={ReactCurrentDispatcher:{current:{readContext:function(e){return At.__n[e.__c].props.value},useCallback:Ie,useContext:Pe,useDebugValue:Ne,useDeferredValue:Ge,useEffect:Ce,useId:Re,useImperativeHandle:Ae,useInsertionEffect:Ye,useLayoutEffect:Se,useMemo:Oe,useReducer:Ee,useRef:Te,useState:ke,useSyncExternalStore:Be,useTransition:Ke}}};function Mt(e){return L.bind(null,e)}function Lt(e){return!!e&&e.$$typeof===gt}function zt(e){return Lt(e)&&e.type===F}function jt(e){return!!e&&!!e.displayName&&("string"==typeof e.displayName||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function Ft(e){return Lt(e)?ie.apply(null,arguments):e}function Dt(e){return!!e.__k&&(re(null,e),!0)}function $t(e){return e&&(e.base||1===e.nodeType&&e)||null}var Ht=function(e,t){return e(t)},Zt=function(e,t){return e(t)},Ut=F,Vt=Lt,Bt={useState:ke,useId:Re,useReducer:Ee,useEffect:Ce,useLayoutEffect:Se,useInsertionEffect:Ye,useTransition:Ke,useDeferredValue:Ge,useSyncExternalStore:Be,startTransition:qe,useRef:Te,useImperativeHandle:Ae,useMemo:Oe,useCallback:Ie,useContext:Pe,useDebugValue:Ne,version:"18.3.1",Children:rt,render:xt,hydrate:kt,unmountComponentAtNode:Dt,createPortal:ht,createElement:L,createContext:ae,createFactory:Mt,cloneElement:Ft,createRef:j,Fragment:F,isValidElement:Lt,isElement:Vt,isFragment:zt,isMemo:jt,findDOMNode:$t,Component:D,PureComponent:Xe,memo:Je,forwardRef:tt,flushSync:Zt,unstable_batchedUpdates:Ht,StrictMode:Ut,Suspense:lt,SuspenseList:dt,lazy:ut,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Rt};const Wt=Object.freeze(Object.defineProperty({__proto__:null,Children:rt,Component:D,Fragment:F,PureComponent:Xe,StrictMode:Ut,Suspense:lt,SuspenseList:dt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Rt,cloneElement:Ft,createContext:ae,createElement:L,createFactory:Mt,createPortal:ht,createRef:j,default:Bt,findDOMNode:$t,flushSync:Zt,forwardRef:tt,hydrate:kt,isElement:Vt,isFragment:zt,isMemo:jt,isValidElement:Lt,lazy:ut,memo:Je,render:xt,startTransition:qe,unmountComponentAtNode:Dt,unstable_batchedUpdates:Ht,useCallback:Ie,useContext:Pe,useDebugValue:Ne,useDeferredValue:Ge,useEffect:Ce,useErrorBoundary:function(e){var t=xe(ce++,10),n=ke();return t.__=e,ue.componentDidCatch||(ue.componentDidCatch=function(e,r){t.__&&t.__(e,r),n[1](e)}),[n[0],function(){n[1](void 0)}]},useId:Re,useImperativeHandle:Ae,useInsertionEffect:Ye,useLayoutEffect:Se,useMemo:Oe,useReducer:Ee,useRef:Te,useState:ke,useSyncExternalStore:Be,useTransition:Ke,version:"18.3.1"},Symbol.toStringTag,{value:"Module"}));var qt=(e=>"undefined"!=typeof require?require:"undefined"!=typeof Proxy?new Proxy(e,{get:(e,t)=>("undefined"!=typeof require?require:e)[t]}):e)((function(e){if("undefined"!=typeof require)return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')})),Gt={maxReconnectAttempts:5,reconnectDelay:1e3,requestTimeout:3e4},Kt=class{constructor(e={}){this.ws=null,this.pendingRequests=new Map,this.reconnectAttempts=0,this.methods={},this.isIntentionalClose=!1,this.options=s(s({},Gt),e)}
/**
   * Register RPC method handlers
   * @param methodHandlers Object containing method handlers
   */register(e){Object.entries(e).forEach((([e,t])=>{this.methods[e]={handler:t}}))}
/**
   * Generic method to call a remote procedure with support for streaming updates
   * @param method Method name to call
   * @param payload Request payload
   * @param onUpdate Optional callback for progress updates
   * @returns Promise resolving with the response
   */callMethod(e,t,n){if(!this.ws)throw new Error("WebSocket is not connected");const r=crypto.randomUUID(),o={id:r,messageType:"request",method:e,payload:t};return new Promise(((t,i)=>{var a;const s=setTimeout((()=>{this.pendingRequests.delete(r),i(new Error(`Request timed out: ${e}`))}),this.options.requestTimeout);this.pendingRequests.set(r,{resolve:t,reject:i,timeout:s,onUpdate:n}),null==(a=this.ws)||a.send(JSON.stringify(o))}))}
/**
   * Sets up WebSocket event handlers
   * @param ws WebSocket instance
   */setupWebSocketHandlers(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this.handleMessage(t)}catch(t){console.error("Error handling WebSocket message:",t)}},e.onclose=()=>{console.log("WebSocket disconnected"),this.handleDisconnect()},e.onerror=e=>{console.error("WebSocket error:",e)}}
/**
   * Handles incoming WebSocket messages
   * @param message The message to handle
   */handleMessage(e){const{messageType:t,id:n}=e;switch(t){case"request":this.handleRequest(e);break;case"response":this.handleResponse(n,e.payload);break;case"update":this.handleUpdate(n,e.payload);break;case"error":this.handleError(n,e.error.message);break;default:console.warn(`Unknown message type: ${t}`)}}
/**
   * Handle incoming requests by invoking the registered method
   * @param message Request message
   */handleRequest(e){return d(this,null,(function*(){const{id:t,method:n,payload:r}=e;if(!n)return void this.sendError(t,"Method name is required");const o=this.methods[n];if(o)try{const e=e=>{this.sendUpdate(t,n,e)},i=yield o.handler(r,e);this.sendResponse(t,n,i)}catch(i){this.sendError(t,i instanceof Error?i.message:String(i))}else this.sendError(t,`Method not found: ${n}`)}))}
/**
   * Handle response messages by resolving the pending request
   * @param id Request ID
   * @param payload Response payload
   */handleResponse(e,t){const n=this.pendingRequests.get(e);n?(clearTimeout(n.timeout),this.pendingRequests.delete(e),n.resolve(t)):console.warn(`Received response for unknown request ID: ${e}`)}
/**
   * Handle update messages by calling the update callback
   * @param id Request ID
   * @param payload Update payload
   */handleUpdate(e,t){const n=this.pendingRequests.get(e);n&&n.onUpdate?n.onUpdate(t):console.warn(`Received update for unknown request ID: ${e}`)}
/**
   * Handle error messages by rejecting the pending request
   * @param id Request ID
   * @param error Error message
   */handleError(e,t){const n=this.pendingRequests.get(e);n?(clearTimeout(n.timeout),this.pendingRequests.delete(e),n.reject(new Error(t))):console.warn(`Received error for unknown request ID: ${e}`)}
/**
   * Send a response message
   * @param id Request ID
   * @param method Method name
   * @param payload Response payload
   */sendResponse(e,t,n){if(!this.ws)throw new Error("WebSocket is not connected");const r={id:e,messageType:"response",method:t,payload:n};this.ws.send(JSON.stringify(r))}
/**
   * Send an update message for streaming
   * @param id Request ID
   * @param method Method name
   * @param payload Update payload
   */sendUpdate(e,t,n){if(!this.ws)throw new Error("WebSocket is not connected");const r={id:e,messageType:"update",method:t,payload:n};this.ws.send(JSON.stringify(r))}
/**
   * Send an error message
   * @param id Request ID
   * @param errorMessage Error message
   */sendError(e,t){if(!this.ws)throw new Error("WebSocket is not connected");const n={id:e,messageType:"error",error:{message:t}};this.ws.send(JSON.stringify(n))}
/**
   * Handle disconnection by attempting to reconnect
   */handleDisconnect(){if(this.isIntentionalClose)return console.log("WebSocket closed intentionally, not attempting to reconnect"),void this.clearPendingRequests(new Error("Connection closed by user"));this.reconnectAttempts<this.options.maxReconnectAttempts?(this.reconnectAttempts++,console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.options.maxReconnectAttempts})...`),setTimeout((()=>this.reconnect()),this.options.reconnectDelay*this.reconnectAttempts)):(console.error("Max reconnection attempts reached"),this.clearPendingRequests(new Error("Connection closed")))}
/**
   * Clear all pending requests with an error
   * @param error Error to reject with
   */clearPendingRequests(e){this.pendingRequests.forEach((({reject:t})=>{t(e)})),this.pendingRequests.clear()}
/**
   * Close the WebSocket connection
   * @returns Promise that resolves when the connection is closed
   */close(){return d(this,null,(function*(){this.isIntentionalClose=!0,this.ws&&(this.ws.close(),this.ws=null),this.clearPendingRequests(new Error("Connection closed by user"))}))}};function Yt(e,t,n,r=!1){const o=e.safeParse(t);if(!o.success){const e=new Error(`Validation failed for ${n}: ${o.error.message}`);if(r)return console.error(e),t;throw e}return o.data}"undefined"!=typeof window?window.WebSocket:qt("ws").WebSocket;var Xt,Jt,Qt,en="undefined"!=typeof window?window.WebSocket:qt("ws").WebSocket,tn=class{constructor(e,t){this.bridge=e,this.contract=t,this.call=new Proxy({},{get:(e,t)=>(e,n)=>this.callMethod(t,e,n)})}callMethod(e,t,n){return d(this,null,(function*(){const r=this.contract.consumes[e];if(!r)throw new Error(`Method ${String(e)} not found in contract`);const o=Yt(r.request,t,`request for method ${String(e)}`),i=(null==n?void 0:n.onUpdate)&&r.update?t=>{var o;if(r.update)try{const i=Yt(r.update,t,`update for method ${String(e)}`,!0);null==(o=n.onUpdate)||o.call(n,i)}catch(i){console.error("Update validation failed:",i)}}:void 0,a=yield this.bridge.callMethod(e,o,i);return Yt(r.response,a,`response for method ${String(e)}`)}))}register(e){const t={};for(const[n,r]of Object.entries(e)){const e=this.contract.serves[n];if(!e)throw new Error(`Method ${n} not found in contract`);t[n]=(t,o)=>d(this,null,(function*(){const i=Yt(e.request,t,`request for method ${n}`),a=e.update&&o?t=>{if(e.update)try{const r=Yt(e.update,t,`update for method ${n}`,!0);o(r)}catch(r){console.error("Update validation failed:",r)}}:void 0,s=yield r(i,{sendUpdate:a});return Yt(e.response,s,`response for method ${n}`)}))}this.bridge.register(t)}close(){return d(this,null,(function*(){yield this.bridge.close()}))}},nn=class extends Kt{constructor(e,t){super(t),this.reconnectTimer=null,this.url=e}call(e,t,n){return this.callMethod(e,t,n)}reconnect(){this.reconnectTimer&&clearTimeout(this.reconnectTimer),this.reconnectTimer=setTimeout((()=>d(this,null,(function*(){try{yield this.connect()}catch(e){this.reconnect()}}))),this.options.reconnectDelay)}connect(){return new Promise(((e,t)=>{try{const n=new en(this.url);n.onopen=()=>{this.ws=n,this.setupWebSocketHandlers(n),e()},n.onerror=()=>{t(new Error("Failed to connect to WebSocket server"))}}catch(n){t(n)}}))}},rn=class extends tn{constructor(e,t,n){super(new nn(e,n),{serves:t.client||{},consumes:t.server||{}})}connect(){return this.bridge.connect()}};(Jt=Xt||(Xt={})).assertEqual=e=>e,Jt.assertIs=function(e){},Jt.assertNever=function(e){throw new Error},Jt.arrayToEnum=e=>{const t={};for(const n of e)t[n]=n;return t},Jt.getValidEnumValues=e=>{const t=Jt.objectKeys(e).filter((t=>"number"!=typeof e[e[t]])),n={};for(const r of t)n[r]=e[r];return Jt.objectValues(n)},Jt.objectValues=e=>Jt.objectKeys(e).map((function(t){return e[t]})),Jt.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},Jt.find=(e,t)=>{for(const n of e)if(t(n))return n},Jt.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,Jt.joinValues=function(e,t=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},Jt.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(Qt||(Qt={})).mergeShapes=(e,t)=>s(s({},e),t);const on=Xt.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),an=e=>{switch(typeof e){case"undefined":return on.undefined;case"string":return on.string;case"number":return isNaN(e)?on.nan:on.number;case"boolean":return on.boolean;case"function":return on.function;case"bigint":return on.bigint;case"symbol":return on.symbol;case"object":return Array.isArray(e)?on.array:null===e?on.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?on.promise:"undefined"!=typeof Map&&e instanceof Map?on.map:"undefined"!=typeof Set&&e instanceof Set?on.set:"undefined"!=typeof Date&&e instanceof Date?on.date:on.object;default:return on.unknown}},sn=Xt.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ln extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(const o of e.issues)if("invalid_union"===o.code)o.unionErrors.map(r);else if("invalid_return_type"===o.code)r(o.returnTypeError);else if("invalid_arguments"===o.code)r(o.argumentsError);else if(0===o.path.length)n._errors.push(t(o));else{let e=n,r=0;for(;r<o.path.length;){const n=o.path[r];r===o.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(o))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(e){if(!(e instanceof ln))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Xt.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=e=>e.message){const t={},n=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}ln.create=e=>new ln(e);const cn=(e,t)=>{let n;switch(e.code){case sn.invalid_type:n=e.received===on.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case sn.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Xt.jsonStringifyReplacer)}`;break;case sn.unrecognized_keys:n=`Unrecognized key(s) in object: ${Xt.joinValues(e.keys,", ")}`;break;case sn.invalid_union:n="Invalid input";break;case sn.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Xt.joinValues(e.options)}`;break;case sn.invalid_enum_value:n=`Invalid enum value. Expected ${Xt.joinValues(e.options)}, received '${e.received}'`;break;case sn.invalid_arguments:n="Invalid function arguments";break;case sn.invalid_return_type:n="Invalid function return type";break;case sn.invalid_date:n="Invalid date";break;case sn.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Xt.assertNever(e.validation):n="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case sn.too_small:n="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case sn.too_big:n="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case sn.custom:n="Invalid input";break;case sn.invalid_intersection_types:n="Intersection results could not be merged";break;case sn.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case sn.not_finite:n="Number must be finite";break;default:n=t.defaultError,Xt.assertNever(e)}return{message:n}};let un=cn;function dn(){return un}const pn=e=>{const{data:t,path:n,errorMaps:r,issueData:o}=e,i=[...n,...o.path||[]],a=l(s({},o),{path:i});if(void 0!==o.message)return l(s({},o),{path:i,message:o.message});let c="";const u=r.filter((e=>!!e)).slice().reverse();for(const s of u)c=s(a,{data:t,defaultError:c}).message;return l(s({},o),{path:i,message:c})};function fn(e,t){const n=dn(),r=pn({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,
// contextual error map is first priority
e.schemaErrorMap,
// then schema-bound map if available
n,
// then global override map
n===cn?void 0:cn].filter((e=>!!e))});e.common.issues.push(r)}class mn{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const r of t){if("aborted"===r.status)return hn;"dirty"===r.status&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static mergeObjectAsync(e,t){return d(this,null,(function*(){const n=[];for(const e of t){const t=yield e.key,r=yield e.value;n.push({key:t,value:r})}return mn.mergeObjectSync(e,n)}))}static mergeObjectSync(e,t){const n={};for(const r of t){const{key:t,value:o}=r;if("aborted"===t.status)return hn;if("aborted"===o.status)return hn;"dirty"===t.status&&e.dirty(),"dirty"===o.status&&e.dirty(),"__proto__"===t.value||void 0===o.value&&!r.alwaysSet||(n[t.value]=o.value)}return{status:e.value,value:n}}}const hn=Object.freeze({status:"aborted"}),gn=e=>({status:"dirty",value:e}),vn=e=>({status:"valid",value:e}),wn=e=>"aborted"===e.status,bn=e=>"dirty"===e.status,yn=e=>"valid"===e.status,_n=e=>"undefined"!=typeof Promise&&e instanceof Promise;function xn(e,t,n,r){if("function"==typeof t||!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function kn(e,t,n,r,o){if("function"==typeof t||!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,n),n}var En,Cn,Sn,Tn;"function"==typeof SuppressedError&&SuppressedError,(Cn=En||(En={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},Cn.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class An{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const On=(e,t)=>{if(yn(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new ln(e.common.issues);return this._error=t,this._error}}};function In(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:o}=e;if(t&&(n||r))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(t)return{errorMap:t,description:o};return{errorMap:(t,o)=>{var i,a;const{message:s}=e;return"invalid_enum_value"===t.code?{message:null!=s?s:o.defaultError}:void 0===o.data?{message:null!==(i=null!=s?s:r)&&void 0!==i?i:o.defaultError}:"invalid_type"!==t.code?{message:o.defaultError}:{message:null!==(a=null!=s?s:n)&&void 0!==a?a:o.defaultError}},description:o}}class Pn{get description(){return this._def.description}_getType(e){return an(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:an(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new mn,ctx:{common:e.parent.common,data:e.data,parsedType:an(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(_n(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const r={common:{issues:[],async:null!==(n=null==t?void 0:t.async)&&void 0!==n&&n,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:an(e)},o=this._parseSync({data:e,path:r.path,parent:r});return On(r,o)}"~validate"(e){var t,n;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:an(e)};if(!this["~standard"].async)try{const t=this._parseSync({data:e,path:[],parent:r});return yn(t)?{value:t.value}:{issues:r.common.issues}}catch(o){(null===(n=null===(t=null==o?void 0:o.message)||void 0===t?void 0:t.toLowerCase())||void 0===n?void 0:n.includes("encountered"))&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:r}).then((e=>yn(e)?{value:e.value}:{issues:r.common.issues}))}parseAsync(e,t){return d(this,null,(function*(){const n=yield this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}))}safeParseAsync(e,t){return d(this,null,(function*(){const n={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:an(e)},r=this._parse({data:e,path:n.path,parent:n}),o=yield _n(r)?r:Promise.resolve(r);return On(n,o)}))}refine(e,t){return this._refinement(((n,r)=>{const o=e(n),i=()=>r.addIssue(s({code:sn.custom},(e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t)(n)));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((e=>!!e||(i(),!1))):!!o||(i(),!1)}))}refinement(e,t){return this._refinement(((n,r)=>!!e(n)||(r.addIssue("function"==typeof t?t(n,r):t),!1)))}_refinement(e){return new Pr({schema:this,typeName:Vr.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:e=>this["~validate"](e)}}optional(){return Nr.create(this,this._def)}nullable(){return Rr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return pr.create(this)}promise(){return Ir.create(this,this._def)}or(e){return hr.create([this,e],this._def)}and(e){return br.create(this,e,this._def)}transform(e){return new Pr(l(s({},In(this._def)),{schema:this,typeName:Vr.ZodEffects,effect:{type:"transform",transform:e}}))}default(e){const t="function"==typeof e?e:()=>e;return new Mr(l(s({},In(this._def)),{innerType:this,defaultValue:t,typeName:Vr.ZodDefault}))}brand(){return new Fr(s({typeName:Vr.ZodBranded,type:this},In(this._def)))}catch(e){const t="function"==typeof e?e:()=>e;return new Lr(l(s({},In(this._def)),{innerType:this,catchValue:t,typeName:Vr.ZodCatch}))}describe(e){return new(0,this.constructor)(l(s({},this._def),{description:e}))}pipe(e){return Dr.create(this,e)}readonly(){return $r.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Nn=/^c[^\s-]{8,}$/i,Rn=/^[0-9a-z]+$/,Mn=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ln=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,zn=/^[a-z0-9_-]{21}$/i,jn=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Fn=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Dn=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let $n;const Hn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Zn=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Un=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Vn=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Bn=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Wn=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,qn="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Gn=new RegExp(`^${qn}$`);function Kn(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:null==e.precision&&(t=`${t}(\\.\\d+)?`);return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${e.precision?"+":"?"}`}function Yn(e){let t=`${qn}T${Kn(e)}`;const n=[];return n.push(e.local?"Z?":"Z"),e.offset&&n.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${n.join("|")})`,new RegExp(`^${t}$`)}function Xn(e,t){if(!jn.test(e))return!1;try{const[n]=e.split("."),r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),o=JSON.parse(atob(r));return"object"==typeof o&&null!==o&&(!(!o.typ||!o.alg)&&(!t||o.alg===t))}catch(n){return!1}}function Jn(e,t){return!("v4"!==t&&t||!Zn.test(e))||!("v6"!==t&&t||!Vn.test(e))}class Qn extends Pn{_parse(e){this._def.coerce&&(e.data=String(e.data));if(this._getType(e)!==on.string){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.string,received:t.parsedType}),hn}const t=new mn;let n;for(const a of this._def.checks)if("min"===a.kind)e.data.length<a.value&&(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),t.dirty());else if("max"===a.kind)e.data.length>a.value&&(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),t.dirty());else if("length"===a.kind){const r=e.data.length>a.value,o=e.data.length<a.value;(r||o)&&(n=this._getOrReturnCtx(e,n),r?fn(n,{code:sn.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&fn(n,{code:sn.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),t.dirty())}else if("email"===a.kind)Dn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"email",code:sn.invalid_string,message:a.message}),t.dirty());else if("emoji"===a.kind)$n||($n=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),$n.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"emoji",code:sn.invalid_string,message:a.message}),t.dirty());else if("uuid"===a.kind)Ln.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"uuid",code:sn.invalid_string,message:a.message}),t.dirty());else if("nanoid"===a.kind)zn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"nanoid",code:sn.invalid_string,message:a.message}),t.dirty());else if("cuid"===a.kind)Nn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"cuid",code:sn.invalid_string,message:a.message}),t.dirty());else if("cuid2"===a.kind)Rn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"cuid2",code:sn.invalid_string,message:a.message}),t.dirty());else if("ulid"===a.kind)Mn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"ulid",code:sn.invalid_string,message:a.message}),t.dirty());else if("url"===a.kind)try{new URL(e.data)}catch(i){n=this._getOrReturnCtx(e,n),fn(n,{validation:"url",code:sn.invalid_string,message:a.message}),t.dirty()}else if("regex"===a.kind){a.regex.lastIndex=0;a.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"regex",code:sn.invalid_string,message:a.message}),t.dirty())}else if("trim"===a.kind)e.data=e.data.trim();else if("includes"===a.kind)e.data.includes(a.value,a.position)||(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),t.dirty());else if("toLowerCase"===a.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===a.kind)e.data=e.data.toUpperCase();else if("startsWith"===a.kind)e.data.startsWith(a.value)||(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.invalid_string,validation:{startsWith:a.value},message:a.message}),t.dirty());else if("endsWith"===a.kind)e.data.endsWith(a.value)||(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.invalid_string,validation:{endsWith:a.value},message:a.message}),t.dirty());else if("datetime"===a.kind){Yn(a).test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.invalid_string,validation:"datetime",message:a.message}),t.dirty())}else if("date"===a.kind){Gn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.invalid_string,validation:"date",message:a.message}),t.dirty())}else if("time"===a.kind){new RegExp(`^${Kn(a)}$`).test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.invalid_string,validation:"time",message:a.message}),t.dirty())}else"duration"===a.kind?Fn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"duration",code:sn.invalid_string,message:a.message}),t.dirty()):"ip"===a.kind?(r=e.data,("v4"!==(o=a.version)&&o||!Hn.test(r))&&("v6"!==o&&o||!Un.test(r))&&(n=this._getOrReturnCtx(e,n),fn(n,{validation:"ip",code:sn.invalid_string,message:a.message}),t.dirty())):"jwt"===a.kind?Xn(e.data,a.alg)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"jwt",code:sn.invalid_string,message:a.message}),t.dirty()):"cidr"===a.kind?Jn(e.data,a.version)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"cidr",code:sn.invalid_string,message:a.message}),t.dirty()):"base64"===a.kind?Bn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"base64",code:sn.invalid_string,message:a.message}),t.dirty()):"base64url"===a.kind?Wn.test(e.data)||(n=this._getOrReturnCtx(e,n),fn(n,{validation:"base64url",code:sn.invalid_string,message:a.message}),t.dirty()):Xt.assertNever(a);var r,o;return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement((t=>e.test(t)),s({validation:t,code:sn.invalid_string},En.errToObj(n)))}_addCheck(e){return new Qn(l(s({},this._def),{checks:[...this._def.checks,e]}))}email(e){return this._addCheck(s({kind:"email"},En.errToObj(e)))}url(e){return this._addCheck(s({kind:"url"},En.errToObj(e)))}emoji(e){return this._addCheck(s({kind:"emoji"},En.errToObj(e)))}uuid(e){return this._addCheck(s({kind:"uuid"},En.errToObj(e)))}nanoid(e){return this._addCheck(s({kind:"nanoid"},En.errToObj(e)))}cuid(e){return this._addCheck(s({kind:"cuid"},En.errToObj(e)))}cuid2(e){return this._addCheck(s({kind:"cuid2"},En.errToObj(e)))}ulid(e){return this._addCheck(s({kind:"ulid"},En.errToObj(e)))}base64(e){return this._addCheck(s({kind:"base64"},En.errToObj(e)))}base64url(e){return this._addCheck(s({kind:"base64url"},En.errToObj(e)))}jwt(e){return this._addCheck(s({kind:"jwt"},En.errToObj(e)))}ip(e){return this._addCheck(s({kind:"ip"},En.errToObj(e)))}cidr(e){return this._addCheck(s({kind:"cidr"},En.errToObj(e)))}datetime(e){var t,n;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck(s({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,local:null!==(n=null==e?void 0:e.local)&&void 0!==n&&n},En.errToObj(null==e?void 0:e.message)))}date(e){return this._addCheck({kind:"date",message:e})}time(e){return"string"==typeof e?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck(s({kind:"time",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision},En.errToObj(null==e?void 0:e.message)))}duration(e){return this._addCheck(s({kind:"duration"},En.errToObj(e)))}regex(e,t){return this._addCheck(s({kind:"regex",regex:e},En.errToObj(t)))}includes(e,t){return this._addCheck(s({kind:"includes",value:e,position:null==t?void 0:t.position},En.errToObj(null==t?void 0:t.message)))}startsWith(e,t){return this._addCheck(s({kind:"startsWith",value:e},En.errToObj(t)))}endsWith(e,t){return this._addCheck(s({kind:"endsWith",value:e},En.errToObj(t)))}min(e,t){return this._addCheck(s({kind:"min",value:e},En.errToObj(t)))}max(e,t){return this._addCheck(s({kind:"max",value:e},En.errToObj(t)))}length(e,t){return this._addCheck(s({kind:"length",value:e},En.errToObj(t)))}
/**
   * Equivalent to `.min(1)`
   */nonempty(e){return this.min(1,En.errToObj(e))}trim(){return new Qn(l(s({},this._def),{checks:[...this._def.checks,{kind:"trim"}]}))}toLowerCase(){return new Qn(l(s({},this._def),{checks:[...this._def.checks,{kind:"toLowerCase"}]}))}toUpperCase(){return new Qn(l(s({},this._def),{checks:[...this._def.checks,{kind:"toUpperCase"}]}))}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isDate(){return!!this._def.checks.find((e=>"date"===e.kind))}get isTime(){return!!this._def.checks.find((e=>"time"===e.kind))}get isDuration(){return!!this._def.checks.find((e=>"duration"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isNANOID(){return!!this._def.checks.find((e=>"nanoid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get isCIDR(){return!!this._def.checks.find((e=>"cidr"===e.kind))}get isBase64(){return!!this._def.checks.find((e=>"base64"===e.kind))}get isBase64url(){return!!this._def.checks.find((e=>"base64url"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function er(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,o=n>r?n:r;return parseInt(e.toFixed(o).replace(".",""))%parseInt(t.toFixed(o).replace(".",""))/Math.pow(10,o)}Qn.create=e=>{var t;return new Qn(s({checks:[],typeName:Vr.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t},In(e)))};class tr extends Pn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){this._def.coerce&&(e.data=Number(e.data));if(this._getType(e)!==on.number){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.number,received:t.parsedType}),hn}let t;const n=new mn;for(const r of this._def.checks)if("int"===r.kind)Xt.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.invalid_type,expected:"integer",received:"float",message:r.message}),n.dirty());else if("min"===r.kind){(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else if("max"===r.kind){(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty())}else"multipleOf"===r.kind?0!==er(e.data,r.value)&&(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):"finite"===r.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.not_finite,message:r.message}),n.dirty()):Xt.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,En.toString(t))}gt(e,t){return this.setLimit("min",e,!1,En.toString(t))}lte(e,t){return this.setLimit("max",e,!0,En.toString(t))}lt(e,t){return this.setLimit("max",e,!1,En.toString(t))}setLimit(e,t,n,r){return new tr(l(s({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:En.toString(r)}]}))}_addCheck(e){return new tr(l(s({},this._def),{checks:[...this._def.checks,e]}))}int(e){return this._addCheck({kind:"int",message:En.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:En.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:En.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:En.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:En.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:En.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:En.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:En.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:En.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&Xt.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if("finite"===n.kind||"int"===n.kind||"multipleOf"===n.kind)return!0;"min"===n.kind?(null===t||n.value>t)&&(t=n.value):"max"===n.kind&&(null===e||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}tr.create=e=>new tr(s({checks:[],typeName:Vr.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1},In(e)));class nr extends Pn{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch(r){return this._getInvalidInput(e)}if(this._getType(e)!==on.bigint)return this._getInvalidInput(e);let t;const n=new mn;for(const o of this._def.checks)if("min"===o.kind){(o.inclusive?e.data<o.value:e.data<=o.value)&&(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),n.dirty())}else if("max"===o.kind){(o.inclusive?e.data>o.value:e.data>=o.value)&&(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),n.dirty())}else"multipleOf"===o.kind?e.data%o.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),fn(t,{code:sn.not_multiple_of,multipleOf:o.value,message:o.message}),n.dirty()):Xt.assertNever(o);return{status:n.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.bigint,received:t.parsedType}),hn}gte(e,t){return this.setLimit("min",e,!0,En.toString(t))}gt(e,t){return this.setLimit("min",e,!1,En.toString(t))}lte(e,t){return this.setLimit("max",e,!0,En.toString(t))}lt(e,t){return this.setLimit("max",e,!1,En.toString(t))}setLimit(e,t,n,r){return new nr(l(s({},this._def),{checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:En.toString(r)}]}))}_addCheck(e){return new nr(l(s({},this._def),{checks:[...this._def.checks,e]}))}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:En.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:En.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:En.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:En.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:En.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}nr.create=e=>{var t;return new nr(s({checks:[],typeName:Vr.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t},In(e)))};class rr extends Pn{_parse(e){this._def.coerce&&(e.data=Boolean(e.data));if(this._getType(e)!==on.boolean){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.boolean,received:t.parsedType}),hn}return vn(e.data)}}rr.create=e=>new rr(s({typeName:Vr.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1},In(e)));class or extends Pn{_parse(e){this._def.coerce&&(e.data=new Date(e.data));if(this._getType(e)!==on.date){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.date,received:t.parsedType}),hn}if(isNaN(e.data.getTime())){return fn(this._getOrReturnCtx(e),{code:sn.invalid_date}),hn}const t=new mn;let n;for(const r of this._def.checks)"min"===r.kind?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),t.dirty()):"max"===r.kind?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),fn(n,{code:sn.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),t.dirty()):Xt.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new or(l(s({},this._def),{checks:[...this._def.checks,e]}))}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:En.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:En.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}or.create=e=>new or(s({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:Vr.ZodDate},In(e)));class ir extends Pn{_parse(e){if(this._getType(e)!==on.symbol){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.symbol,received:t.parsedType}),hn}return vn(e.data)}}ir.create=e=>new ir(s({typeName:Vr.ZodSymbol},In(e)));class ar extends Pn{_parse(e){if(this._getType(e)!==on.undefined){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.undefined,received:t.parsedType}),hn}return vn(e.data)}}ar.create=e=>new ar(s({typeName:Vr.ZodUndefined},In(e)));class sr extends Pn{_parse(e){if(this._getType(e)!==on.null){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.null,received:t.parsedType}),hn}return vn(e.data)}}sr.create=e=>new sr(s({typeName:Vr.ZodNull},In(e)));class lr extends Pn{constructor(){super(...arguments),this._any=!0}_parse(e){return vn(e.data)}}lr.create=e=>new lr(s({typeName:Vr.ZodAny},In(e)));class cr extends Pn{constructor(){super(...arguments),this._unknown=!0}_parse(e){return vn(e.data)}}cr.create=e=>new cr(s({typeName:Vr.ZodUnknown},In(e)));class ur extends Pn{_parse(e){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.never,received:t.parsedType}),hn}}ur.create=e=>new ur(s({typeName:Vr.ZodNever},In(e)));class dr extends Pn{_parse(e){if(this._getType(e)!==on.undefined){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.void,received:t.parsedType}),hn}return vn(e.data)}}dr.create=e=>new dr(s({typeName:Vr.ZodVoid},In(e)));class pr extends Pn{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==on.array)return fn(t,{code:sn.invalid_type,expected:on.array,received:t.parsedType}),hn;if(null!==r.exactLength){const e=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(e||o)&&(fn(t,{code:e?sn.too_big:sn.too_small,minimum:o?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(null!==r.minLength&&t.data.length<r.minLength.value&&(fn(t,{code:sn.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),null!==r.maxLength&&t.data.length>r.maxLength.value&&(fn(t,{code:sn.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map(((e,n)=>r.type._parseAsync(new An(t,e,t.path,n))))).then((e=>mn.mergeArray(n,e)));const o=[...t.data].map(((e,n)=>r.type._parseSync(new An(t,e,t.path,n))));return mn.mergeArray(n,o)}get element(){return this._def.type}min(e,t){return new pr(l(s({},this._def),{minLength:{value:e,message:En.toString(t)}}))}max(e,t){return new pr(l(s({},this._def),{maxLength:{value:e,message:En.toString(t)}}))}length(e,t){return new pr(l(s({},this._def),{exactLength:{value:e,message:En.toString(t)}}))}nonempty(e){return this.min(1,e)}}function fr(e){if(e instanceof mr){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Nr.create(fr(r))}return new mr(l(s({},e._def),{shape:()=>t}))}return e instanceof pr?new pr(l(s({},e._def),{type:fr(e.element)})):e instanceof Nr?Nr.create(fr(e.unwrap())):e instanceof Rr?Rr.create(fr(e.unwrap())):e instanceof yr?yr.create(e.items.map((e=>fr(e)))):e}pr.create=(e,t)=>new pr(s({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Vr.ZodArray},In(t)));class mr extends Pn{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=Xt.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==on.object){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.object,received:t.parsedType}),hn}const{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:o}=this._getCached(),i=[];if(!(this._def.catchall instanceof ur&&"strip"===this._def.unknownKeys))for(const s in n.data)o.includes(s)||i.push(s);const a=[];for(const s of o){const e=r[s],t=n.data[s];a.push({key:{status:"valid",value:s},value:e._parse(new An(n,t,n.path,s)),alwaysSet:s in n.data})}if(this._def.catchall instanceof ur){const e=this._def.unknownKeys;if("passthrough"===e)for(const t of i)a.push({key:{status:"valid",value:t},value:{status:"valid",value:n.data[t]}});else if("strict"===e)i.length>0&&(fn(n,{code:sn.unrecognized_keys,keys:i}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of i){const r=n.data[t];a.push({key:{status:"valid",value:t},value:e._parse(new An(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then((()=>d(this,null,(function*(){const e=[];for(const t of a){const n=yield t.key,r=yield t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e})))).then((e=>mn.mergeObjectSync(t,e))):mn.mergeObjectSync(t,a)}get shape(){return this._def.shape()}strict(e){return En.errToObj,new mr(s(l(s({},this._def),{unknownKeys:"strict"}),void 0!==e?{errorMap:(t,n)=>{var r,o,i,a;const s=null!==(i=null===(o=(r=this._def).errorMap)||void 0===o?void 0:o.call(r,t,n).message)&&void 0!==i?i:n.defaultError;return"unrecognized_keys"===t.code?{message:null!==(a=En.errToObj(e).message)&&void 0!==a?a:s}:{message:s}}}:{}))}strip(){return new mr(l(s({},this._def),{unknownKeys:"strip"}))}passthrough(){return new mr(l(s({},this._def),{unknownKeys:"passthrough"}))}
// const AugmentFactory =
//   <Def extends ZodObjectDef>(def: Def) =>
//   <Augmentation extends ZodRawShape>(
//     augmentation: Augmentation
//   ): ZodObject<
//     extendShape<ReturnType<Def["shape"]>, Augmentation>,
//     Def["unknownKeys"],
//     Def["catchall"]
//   > => {
//     return new ZodObject({
//       ...def,
//       shape: () => ({
//         ...def.shape(),
//         ...augmentation,
//       }),
//     }) as any;
//   };
extend(e){return new mr(l(s({},this._def),{shape:()=>s(s({},this._def.shape()),e)}))}
/**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */merge(e){return new mr({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>s(s({},this._def.shape()),e._def.shape()),typeName:Vr.ZodObject})}
// merge<
//   Incoming extends AnyZodObject,
//   Augmentation extends Incoming["shape"],
//   NewOutput extends {
//     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
//       ? Augmentation[k]["_output"]
//       : k extends keyof Output
//       ? Output[k]
//       : never;
//   },
//   NewInput extends {
//     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
//       ? Augmentation[k]["_input"]
//       : k extends keyof Input
//       ? Input[k]
//       : never;
//   }
// >(
//   merging: Incoming
// ): ZodObject<
//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
//   Incoming["_def"]["unknownKeys"],
//   Incoming["_def"]["catchall"],
//   NewOutput,
//   NewInput
// > {
//   const merged: any = new ZodObject({
//     unknownKeys: merging._def.unknownKeys,
//     catchall: merging._def.catchall,
//     shape: () =>
//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
//     typeName: ZodFirstPartyTypeKind.ZodObject,
//   }) as any;
//   return merged;
// }
setKey(e,t){return this.augment({[e]:t})}
// merge<Incoming extends AnyZodObject>(
//   merging: Incoming
// ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
// ZodObject<
//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
//   Incoming["_def"]["unknownKeys"],
//   Incoming["_def"]["catchall"]
// > {
//   // const mergedShape = objectUtil.mergeShapes(
//   //   this._def.shape(),
//   //   merging._def.shape()
//   // );
//   const merged: any = new ZodObject({
//     unknownKeys: merging._def.unknownKeys,
//     catchall: merging._def.catchall,
//     shape: () =>
//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
//     typeName: ZodFirstPartyTypeKind.ZodObject,
//   }) as any;
//   return merged;
// }
catchall(e){return new mr(l(s({},this._def),{catchall:e}))}pick(e){const t={};return Xt.objectKeys(e).forEach((n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])})),new mr(l(s({},this._def),{shape:()=>t}))}omit(e){const t={};return Xt.objectKeys(this.shape).forEach((n=>{e[n]||(t[n]=this.shape[n])})),new mr(l(s({},this._def),{shape:()=>t}))}
/**
   * @deprecated
   */deepPartial(){return fr(this)}partial(e){const t={};return Xt.objectKeys(this.shape).forEach((n=>{const r=this.shape[n];e&&!e[n]?t[n]=r:t[n]=r.optional()})),new mr(l(s({},this._def),{shape:()=>t}))}required(e){const t={};return Xt.objectKeys(this.shape).forEach((n=>{if(e&&!e[n])t[n]=this.shape[n];else{let e=this.shape[n];for(;e instanceof Nr;)e=e._def.innerType;t[n]=e}})),new mr(l(s({},this._def),{shape:()=>t}))}keyof(){return Tr(Xt.objectKeys(this.shape))}}mr.create=(e,t)=>new mr(s({shape:()=>e,unknownKeys:"strip",catchall:ur.create(),typeName:Vr.ZodObject},In(t))),mr.strictCreate=(e,t)=>new mr(s({shape:()=>e,unknownKeys:"strict",catchall:ur.create(),typeName:Vr.ZodObject},In(t))),mr.lazycreate=(e,t)=>new mr(s({shape:e,unknownKeys:"strip",catchall:ur.create(),typeName:Vr.ZodObject},In(t)));class hr extends Pn{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;if(t.common.async)return Promise.all(n.map((e=>d(this,null,(function*(){const n=l(s({},t),{common:l(s({},t.common),{issues:[]}),parent:null});return{result:yield e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}}))))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const r of e)if("dirty"===r.result.status)return t.common.issues.push(...r.ctx.common.issues),r.result;const n=e.map((e=>new ln(e.ctx.common.issues)));return fn(t,{code:sn.invalid_union,unionErrors:n}),hn}));{let e;const r=[];for(const i of n){const n=l(s({},t),{common:l(s({},t.common),{issues:[]}),parent:null}),o=i._parseSync({data:t.data,path:t.path,parent:n});if("valid"===o.status)return o;"dirty"!==o.status||e||(e={result:o,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const o=r.map((e=>new ln(e)));return fn(t,{code:sn.invalid_union,unionErrors:o}),hn}}get options(){return this._def.options}}hr.create=(e,t)=>new hr(s({options:e,typeName:Vr.ZodUnion},In(t)));const gr=e=>e instanceof Cr?gr(e.schema):e instanceof Pr?gr(e.innerType()):e instanceof Sr?[e.value]:e instanceof Ar?e.options:e instanceof Or?Xt.objectValues(e.enum):e instanceof Mr?gr(e._def.innerType):e instanceof ar?[void 0]:e instanceof sr?[null]:e instanceof Nr?[void 0,...gr(e.unwrap())]:e instanceof Rr?[null,...gr(e.unwrap())]:e instanceof Fr||e instanceof $r?gr(e.unwrap()):e instanceof Lr?gr(e._def.innerType):[];class vr extends Pn{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==on.object)return fn(t,{code:sn.invalid_type,expected:on.object,received:t.parsedType}),hn;const n=this.discriminator,r=t.data[n],o=this.optionsMap.get(r);return o?t.common.async?o._parseAsync({data:t.data,path:t.path,parent:t}):o._parseSync({data:t.data,path:t.path,parent:t}):(fn(t,{code:sn.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),hn)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}
/**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */static create(e,t,n){const r=new Map;for(const o of t){const t=gr(o.shape[e]);if(!t.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const n of t){if(r.has(n))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);r.set(n,o)}}return new vr(s({typeName:Vr.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r},In(n)))}}function wr(e,t){const n=an(e),r=an(t);if(e===t)return{valid:!0,data:e};if(n===on.object&&r===on.object){const n=Xt.objectKeys(t),r=Xt.objectKeys(e).filter((e=>-1!==n.indexOf(e))),o=s(s({},e),t);for(const i of r){const n=wr(e[i],t[i]);if(!n.valid)return{valid:!1};o[i]=n.data}return{valid:!0,data:o}}if(n===on.array&&r===on.array){if(e.length!==t.length)return{valid:!1};const n=[];for(let r=0;r<e.length;r++){const o=wr(e[r],t[r]);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}return n===on.date&&r===on.date&&+e===+t?{valid:!0,data:e}:{valid:!1}}class br extends Pn{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(wn(e)||wn(r))return hn;const o=wr(e.value,r.value);return o.valid?((bn(e)||bn(r))&&t.dirty(),{status:t.value,value:o.data}):(fn(n,{code:sn.invalid_intersection_types}),hn)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then((([e,t])=>r(e,t))):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}br.create=(e,t,n)=>new br(s({left:e,right:t,typeName:Vr.ZodIntersection},In(n)));class yr extends Pn{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==on.array)return fn(n,{code:sn.invalid_type,expected:on.array,received:n.parsedType}),hn;if(n.data.length<this._def.items.length)return fn(n,{code:sn.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),hn;!this._def.rest&&n.data.length>this._def.items.length&&(fn(n,{code:sn.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const r=[...n.data].map(((e,t)=>{const r=this._def.items[t]||this._def.rest;return r?r._parse(new An(n,e,n.path,t)):null})).filter((e=>!!e));return n.common.async?Promise.all(r).then((e=>mn.mergeArray(t,e))):mn.mergeArray(t,r)}get items(){return this._def.items}rest(e){return new yr(l(s({},this._def),{rest:e}))}}yr.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new yr(s({items:e,typeName:Vr.ZodTuple,rest:null},In(t)))};class _r extends Pn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==on.object)return fn(n,{code:sn.invalid_type,expected:on.object,received:n.parsedType}),hn;const r=[],o=this._def.keyType,i=this._def.valueType;for(const a in n.data)r.push({key:o._parse(new An(n,a,n.path,a)),value:i._parse(new An(n,n.data[a],n.path,a)),alwaysSet:a in n.data});return n.common.async?mn.mergeObjectAsync(t,r):mn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,n){return new _r(t instanceof Pn?s({keyType:e,valueType:t,typeName:Vr.ZodRecord},In(n)):s({keyType:Qn.create(),valueType:e,typeName:Vr.ZodRecord},In(t)))}}class xr extends Pn{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==on.map)return fn(n,{code:sn.invalid_type,expected:on.map,received:n.parsedType}),hn;const r=this._def.keyType,o=this._def.valueType,i=[...n.data.entries()].map((([e,t],i)=>({key:r._parse(new An(n,e,n.path,[i,"key"])),value:o._parse(new An(n,t,n.path,[i,"value"]))})));if(n.common.async){const e=new Map;return Promise.resolve().then((()=>d(this,null,(function*(){for(const n of i){const r=yield n.key,o=yield n.value;if("aborted"===r.status||"aborted"===o.status)return hn;"dirty"!==r.status&&"dirty"!==o.status||t.dirty(),e.set(r.value,o.value)}return{status:t.value,value:e}}))))}{const e=new Map;for(const n of i){const r=n.key,o=n.value;if("aborted"===r.status||"aborted"===o.status)return hn;"dirty"!==r.status&&"dirty"!==o.status||t.dirty(),e.set(r.value,o.value)}return{status:t.value,value:e}}}}xr.create=(e,t,n)=>new xr(s({valueType:t,keyType:e,typeName:Vr.ZodMap},In(n)));class kr extends Pn{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==on.set)return fn(n,{code:sn.invalid_type,expected:on.set,received:n.parsedType}),hn;const r=this._def;null!==r.minSize&&n.data.size<r.minSize.value&&(fn(n,{code:sn.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),null!==r.maxSize&&n.data.size>r.maxSize.value&&(fn(n,{code:sn.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const o=this._def.valueType;function i(e){const n=new Set;for(const r of e){if("aborted"===r.status)return hn;"dirty"===r.status&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}const a=[...n.data.values()].map(((e,t)=>o._parse(new An(n,e,n.path,t))));return n.common.async?Promise.all(a).then((e=>i(e))):i(a)}min(e,t){return new kr(l(s({},this._def),{minSize:{value:e,message:En.toString(t)}}))}max(e,t){return new kr(l(s({},this._def),{maxSize:{value:e,message:En.toString(t)}}))}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}kr.create=(e,t)=>new kr(s({valueType:e,minSize:null,maxSize:null,typeName:Vr.ZodSet},In(t)));class Er extends Pn{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==on.function)return fn(t,{code:sn.invalid_type,expected:on.function,received:t.parsedType}),hn;function n(e,n){return pn({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,dn(),cn].filter((e=>!!e)),issueData:{code:sn.invalid_arguments,argumentsError:n}})}function r(e,n){return pn({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,dn(),cn].filter((e=>!!e)),issueData:{code:sn.invalid_return_type,returnTypeError:n}})}const o={errorMap:t.common.contextualErrorMap},i=t.data;if(this._def.returns instanceof Ir){const e=this;return vn((function(...t){return d(this,null,(function*(){const a=new ln([]),s=yield e._def.args.parseAsync(t,o).catch((e=>{throw a.addIssue(n(t,e)),a})),l=yield Reflect.apply(i,this,s);return yield e._def.returns._def.type.parseAsync(l,o).catch((e=>{throw a.addIssue(r(l,e)),a}))}))}))}{const e=this;return vn((function(...t){const a=e._def.args.safeParse(t,o);if(!a.success)throw new ln([n(t,a.error)]);const s=Reflect.apply(i,this,a.data),l=e._def.returns.safeParse(s,o);if(!l.success)throw new ln([r(s,l.error)]);return l.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Er(l(s({},this._def),{args:yr.create(e).rest(cr.create())}))}returns(e){return new Er(l(s({},this._def),{returns:e}))}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new Er(s({args:e||yr.create([]).rest(cr.create()),returns:t||cr.create(),typeName:Vr.ZodFunction},In(n)))}}class Cr extends Pn{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Cr.create=(e,t)=>new Cr(s({getter:e,typeName:Vr.ZodLazy},In(t)));class Sr extends Pn{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return fn(t,{received:t.data,code:sn.invalid_literal,expected:this._def.value}),hn}return{status:"valid",value:e.data}}get value(){return this._def.value}}function Tr(e,t){return new Ar(s({values:e,typeName:Vr.ZodEnum},In(t)))}Sr.create=(e,t)=>new Sr(s({value:e,typeName:Vr.ZodLiteral},In(t)));class Ar extends Pn{constructor(){super(...arguments),Sn.set(this,void 0)}_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),n=this._def.values;return fn(t,{expected:Xt.joinValues(n),received:t.parsedType,code:sn.invalid_type}),hn}if(xn(this,Sn)||kn(this,Sn,new Set(this._def.values)),!xn(this,Sn).has(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return fn(t,{received:t.data,code:sn.invalid_enum_value,options:n}),hn}return vn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return Ar.create(e,s(s({},this._def),t))}exclude(e,t=this._def){return Ar.create(this.options.filter((t=>!e.includes(t))),s(s({},this._def),t))}}Sn=new WeakMap,Ar.create=Tr;class Or extends Pn{constructor(){super(...arguments),Tn.set(this,void 0)}_parse(e){const t=Xt.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==on.string&&n.parsedType!==on.number){const e=Xt.objectValues(t);return fn(n,{expected:Xt.joinValues(e),received:n.parsedType,code:sn.invalid_type}),hn}if(xn(this,Tn)||kn(this,Tn,new Set(Xt.getValidEnumValues(this._def.values))),!xn(this,Tn).has(e.data)){const e=Xt.objectValues(t);return fn(n,{received:n.data,code:sn.invalid_enum_value,options:e}),hn}return vn(e.data)}get enum(){return this._def.values}}Tn=new WeakMap,Or.create=(e,t)=>new Or(s({values:e,typeName:Vr.ZodNativeEnum},In(t)));class Ir extends Pn{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==on.promise&&!1===t.common.async)return fn(t,{code:sn.invalid_type,expected:on.promise,received:t.parsedType}),hn;const n=t.parsedType===on.promise?t.data:Promise.resolve(t.data);return vn(n.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}Ir.create=(e,t)=>new Ir(s({type:e,typeName:Vr.ZodPromise},In(t)));class Pr extends Pn{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Vr.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,o={addIssue:e=>{fn(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(o.addIssue=o.addIssue.bind(o),"preprocess"===r.type){const e=r.transform(n.data,o);if(n.common.async)return Promise.resolve(e).then((e=>d(this,null,(function*(){if("aborted"===t.value)return hn;const r=yield this._def.schema._parseAsync({data:e,path:n.path,parent:n});return"aborted"===r.status?hn:"dirty"===r.status||"dirty"===t.value?gn(r.value):r}))));{if("aborted"===t.value)return hn;const r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return"aborted"===r.status?hn:"dirty"===r.status||"dirty"===t.value?gn(r.value):r}}if("refinement"===r.type){const e=e=>{const t=r.refinement(e,o);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===n.common.async){const r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===r.status?hn:("dirty"===r.status&&t.dirty(),e(r.value),{status:t.value,value:r.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((n=>"aborted"===n.status?hn:("dirty"===n.status&&t.dirty(),e(n.value).then((()=>({status:t.value,value:n.value}))))))}if("transform"===r.type){if(!1===n.common.async){const e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!yn(e))return e;const i=r.transform(e.value,o);if(i instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:i}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((e=>yn(e)?Promise.resolve(r.transform(e.value,o)).then((e=>({status:t.value,value:e}))):e))}Xt.assertNever(r)}}Pr.create=(e,t,n)=>new Pr(s({schema:e,typeName:Vr.ZodEffects,effect:t},In(n))),Pr.createWithPreprocess=(e,t,n)=>new Pr(s({schema:t,effect:{type:"preprocess",transform:e},typeName:Vr.ZodEffects},In(n)));class Nr extends Pn{_parse(e){return this._getType(e)===on.undefined?vn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Nr.create=(e,t)=>new Nr(s({innerType:e,typeName:Vr.ZodOptional},In(t)));class Rr extends Pn{_parse(e){return this._getType(e)===on.null?vn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Rr.create=(e,t)=>new Rr(s({innerType:e,typeName:Vr.ZodNullable},In(t)));class Mr extends Pn{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===on.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Mr.create=(e,t)=>new Mr(s({innerType:e,typeName:Vr.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default},In(t)));class Lr extends Pn{_parse(e){const{ctx:t}=this._processInputParams(e),n=l(s({},t),{common:l(s({},t.common),{issues:[]})}),r=this._def.innerType._parse({data:n.data,path:n.path,parent:s({},n)});return _n(r)?r.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new ln(n.common.issues)},input:n.data})}))):{status:"valid",value:"valid"===r.status?r.value:this._def.catchValue({get error(){return new ln(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Lr.create=(e,t)=>new Lr(s({innerType:e,typeName:Vr.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch},In(t)));class zr extends Pn{_parse(e){if(this._getType(e)!==on.nan){const t=this._getOrReturnCtx(e);return fn(t,{code:sn.invalid_type,expected:on.nan,received:t.parsedType}),hn}return{status:"valid",value:e.data}}}zr.create=e=>new zr(s({typeName:Vr.ZodNaN},In(e)));const jr=Symbol("zod_brand");class Fr extends Pn{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class Dr extends Pn{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async){return(()=>d(this,null,(function*(){const e=yield this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return"aborted"===e.status?hn:"dirty"===e.status?(t.dirty(),gn(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})))()}{const e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===e.status?hn:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(e,t){return new Dr({in:e,out:t,typeName:Vr.ZodPipeline})}}class $r extends Pn{_parse(e){const t=this._def.innerType._parse(e),n=e=>(yn(e)&&(e.value=Object.freeze(e.value)),e);return _n(t)?t.then((e=>n(e))):n(t)}unwrap(){return this._def.innerType}}function Hr(e,t){const n="function"==typeof e?e(t):"string"==typeof e?{message:e}:e;return"string"==typeof n?{message:n}:n}function Zr(e,t={},n){return e?lr.create().superRefine(((r,o)=>{var i,a;const c=e(r);if(c instanceof Promise)return c.then((e=>{var i,a;if(!e){const e=Hr(t,r),c=null===(a=null!==(i=e.fatal)&&void 0!==i?i:n)||void 0===a||a;o.addIssue(l(s({code:"custom"},e),{fatal:c}))}}));if(!c){const e=Hr(t,r),c=null===(a=null!==(i=e.fatal)&&void 0!==i?i:n)||void 0===a||a;o.addIssue(l(s({code:"custom"},e),{fatal:c}))}})):lr.create()}$r.create=(e,t)=>new $r(s({innerType:e,typeName:Vr.ZodReadonly},In(t)));const Ur={object:mr.lazycreate};var Vr,Br;(Br=Vr||(Vr={})).ZodString="ZodString",Br.ZodNumber="ZodNumber",Br.ZodNaN="ZodNaN",Br.ZodBigInt="ZodBigInt",Br.ZodBoolean="ZodBoolean",Br.ZodDate="ZodDate",Br.ZodSymbol="ZodSymbol",Br.ZodUndefined="ZodUndefined",Br.ZodNull="ZodNull",Br.ZodAny="ZodAny",Br.ZodUnknown="ZodUnknown",Br.ZodNever="ZodNever",Br.ZodVoid="ZodVoid",Br.ZodArray="ZodArray",Br.ZodObject="ZodObject",Br.ZodUnion="ZodUnion",Br.ZodDiscriminatedUnion="ZodDiscriminatedUnion",Br.ZodIntersection="ZodIntersection",Br.ZodTuple="ZodTuple",Br.ZodRecord="ZodRecord",Br.ZodMap="ZodMap",Br.ZodSet="ZodSet",Br.ZodFunction="ZodFunction",Br.ZodLazy="ZodLazy",Br.ZodLiteral="ZodLiteral",Br.ZodEnum="ZodEnum",Br.ZodEffects="ZodEffects",Br.ZodNativeEnum="ZodNativeEnum",Br.ZodOptional="ZodOptional",Br.ZodNullable="ZodNullable",Br.ZodDefault="ZodDefault",Br.ZodCatch="ZodCatch",Br.ZodPromise="ZodPromise",Br.ZodBranded="ZodBranded",Br.ZodPipeline="ZodPipeline",Br.ZodReadonly="ZodReadonly";const Wr=Qn.create,qr=tr.create,Gr=zr.create,Kr=nr.create,Yr=rr.create,Xr=or.create,Jr=ir.create,Qr=ar.create,eo=sr.create,to=lr.create,no=cr.create,ro=ur.create,oo=dr.create,io=pr.create,ao=mr.create,so=mr.strictCreate,lo=hr.create,co=vr.create,uo=br.create,po=yr.create,fo=_r.create,mo=xr.create,ho=kr.create,go=Er.create,vo=Cr.create,wo=Sr.create,bo=Ar.create,yo=Or.create,_o=Ir.create,xo=Pr.create,ko=Nr.create,Eo=Rr.create,Co=Pr.createWithPreprocess,So=Dr.create,To={string:e=>Qn.create(l(s({},e),{coerce:!0})),number:e=>tr.create(l(s({},e),{coerce:!0})),boolean:e=>rr.create(l(s({},e),{coerce:!0})),bigint:e=>nr.create(l(s({},e),{coerce:!0})),date:e=>or.create(l(s({},e),{coerce:!0}))},Ao=hn;var Oo=Object.freeze({__proto__:null,defaultErrorMap:cn,setErrorMap:function(e){un=e},getErrorMap:dn,makeIssue:pn,EMPTY_PATH:[],addIssueToContext:fn,ParseStatus:mn,INVALID:hn,DIRTY:gn,OK:vn,isAborted:wn,isDirty:bn,isValid:yn,isAsync:_n,get util(){return Xt},get objectUtil(){return Qt},ZodParsedType:on,getParsedType:an,ZodType:Pn,datetimeRegex:Yn,ZodString:Qn,ZodNumber:tr,ZodBigInt:nr,ZodBoolean:rr,ZodDate:or,ZodSymbol:ir,ZodUndefined:ar,ZodNull:sr,ZodAny:lr,ZodUnknown:cr,ZodNever:ur,ZodVoid:dr,ZodArray:pr,ZodObject:mr,ZodUnion:hr,ZodDiscriminatedUnion:vr,ZodIntersection:br,ZodTuple:yr,ZodRecord:_r,ZodMap:xr,ZodSet:kr,ZodFunction:Er,ZodLazy:Cr,ZodLiteral:Sr,ZodEnum:Ar,ZodNativeEnum:Or,ZodPromise:Ir,ZodEffects:Pr,ZodTransformer:Pr,ZodOptional:Nr,ZodNullable:Rr,ZodDefault:Mr,ZodCatch:Lr,ZodNaN:zr,BRAND:jr,ZodBranded:Fr,ZodPipeline:Dr,ZodReadonly:$r,custom:Zr,Schema:Pn,ZodSchema:Pn,late:Ur,get ZodFirstPartyTypeKind(){return Vr},coerce:To,any:to,array:io,bigint:Kr,boolean:Yr,date:Xr,discriminatedUnion:co,effect:xo,enum:bo,function:go,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>Zr((t=>t instanceof e),t),intersection:uo,lazy:vo,literal:wo,map:mo,nan:Gr,nativeEnum:yo,never:ro,null:eo,nullable:Eo,number:qr,object:ao,oboolean:()=>Yr().optional(),onumber:()=>qr().optional(),optional:ko,ostring:()=>Wr().optional(),pipeline:So,preprocess:Co,promise:_o,record:fo,set:ho,strictObject:so,string:Wr,symbol:Jr,transformer:xo,tuple:po,undefined:Qr,union:lo,unknown:no,void:oo,NEVER:Ao,ZodIssueCode:sn,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:ln}),Io={server:{triggerAgentPrompt:{request:Oo.object({prompt:Oo.string()}),response:Oo.object({result:Oo.object({success:Oo.boolean(),error:Oo.string().optional(),output:Oo.string().optional()})}),update:Oo.object({updateText:Oo.string()})}}};const Po=ae({bridge:null,isConnecting:!1,error:null});function No({children:e}){const[t,n]=ke({bridge:null,isConnecting:!0,error:null});return Ce((()=>{!function(){d(this,null,(function*(){try{const t=yield function(e=10,t=300){return d(this,null,(function*(){for(let r=0;r<e;r++){const e=5746+r;try{const r=new AbortController,o=setTimeout((()=>r.abort()),t);try{const t=yield fetch(`http://localhost:${e}/ping/stagewise`,{signal:r.signal});if(clearTimeout(o),t.ok&&"stagewise"===(yield t.text()))return e}catch(n){clearTimeout(o);continue}}catch(n){continue}}return null}))}(),r=new rn(`ws://localhost:${t}`,Io,e);yield r.connect(),n({bridge:r,isConnecting:!1,error:null})}catch(t){n({bridge:null,isConnecting:!1,error:t instanceof Error?t:new Error(String(t))})}var e}))}()}),[]),le(Po.Provider,{value:t,children:e})}function Ro(e,t,n){if(!e||0===e.length)return`\n    <request>\n      <user_goal>${t}</user_goal>\n      <url>${n}</url>\n  <context>No specific element was selected on the page. Please analyze the page code in general or ask for clarification.</context>\n</request>`.trim();let r="";return e.forEach(((e,t)=>{r+=function(e,t){var n;let r=`<element index="${t+1}">\n`;r+=`  <tag>${e.tagName.toLowerCase()}</tag>\n`;const o=e.id;o&&(r+=`  <id>${o}</id>\n`);const i=Array.from(e.classList).join(", ");i&&(r+=`  <classes>${i}</classes>\n`);const a=function(e){const t={},n=["id","class","name","type","href","src","alt","for","placeholder"],r=[];for(let o=0;o<e.attributes.length;o++){const i=e.attributes[o];i.name.startsWith("data-")?r.push({name:i.name,value:i.value}):(n.includes(i.name.toLowerCase())||"style"!==i.name.toLowerCase())&&(t[i.name]=i.value)}return r.forEach((e=>{t[e.name]=e.value})),t}(e);if(Object.keys(a).length>0){r+="  <attributes>\n";for(const[e,t]of Object.entries(a))"class"===e.toLowerCase()&&i||(r+=`    <${e}>${t}</${e}>\n`);r+="  </attributes>\n"}const s=null==(n=e.innerText)?void 0:n.trim();if(s){const e=100;r+=`  <text>${s.length>e?`${s.substring(0,e)}...`:s}</text>\n`}if(r+="  <structural_context>\n",e.parentElement){const t=e.parentElement;r+="    <parent>\n",r+=`      <tag>${t.tagName.toLowerCase()}</tag>\n`,t.id&&(r+=`      <id>${t.id}</id>\n`);const n=Array.from(t.classList).join(", ");n&&(r+=`      <classes>${n}</classes>\n`),r+="    </parent>\n"}else r+="    <parent>No parent element found (likely root or disconnected)</parent>\n";r+="  </structural_context>\n";try{const t=window.getComputedStyle(e),n={color:t.color,backgroundColor:t.backgroundColor,fontSize:t.fontSize,fontWeight:t.fontWeight,display:t.display};r+="  <styles>\n";for(const[e,o]of Object.entries(n))r+=`    <${e}>${o}</${e}>\n`;r+="  </styles>\n"}catch(nl){r+="  <styles>Could not retrieve computed styles</styles>\n"}return r+="</element>\n",r}(e,t)})),`\n<request>\n  <user_goal>${t}</user_goal>\n  <url>${n}</url>\n  <selected_elements>\n    ${r.trim()}\n  </selected_elements>\n</request>`.trim()}const Mo=4,Lo=e=>{let t;const n=new Set,r=(e,r)=>{const o="function"==typeof e?e(t):e;if(!Object.is(o,t)){const e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,i={setState:r,getState:o,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,o,i);return i},zo=e=>e;const jo=e=>{const t=(e=>e?Lo(e):Lo)(e),n=e=>function(e,t=zo){const n=Bt.useSyncExternalStore(e.subscribe,(()=>t(e.getState())),(()=>t(e.getInitialState())));return Bt.useDebugValue(n),n}(t,e);return Object.assign(n,t),n};class Fo{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)}getByKey(e){return this.keyToValue.get(e)}getByValue(e){return this.valueToKey.get(e)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}}class Do{constructor(e){this.generateIdentifier=e,this.kv=new Fo}register(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))}clear(){this.kv.clear()}getIdentifier(e){return this.kv.getByValue(e)}getValue(e){return this.kv.getByKey(e)}}class $o extends Do{constructor(){super((e=>e.name)),this.classToAllowedProps=new Map}register(e,t){"object"==typeof t?(t.allowProps&&this.classToAllowedProps.set(e,t.allowProps),super.register(e,t.identifier)):super.register(e,t)}getAllowedProps(e){return this.classToAllowedProps.get(e)}}function Ho(e,t){const n=function(e){if("values"in Object)return Object.values(e);const t=[];for(const n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}(e);if("find"in n)return n.find(t);const r=n;for(let o=0;o<r.length;o++){const e=r[o];if(t(e))return e}}function Zo(e,t){Object.entries(e).forEach((([e,n])=>t(n,e)))}function Uo(e,t){return-1!==e.indexOf(t)}function Vo(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(t(r))return r}}class Bo{constructor(){this.transfomers={}}register(e){this.transfomers[e.name]=e}findApplicable(e){return Ho(this.transfomers,(t=>t.isApplicable(e)))}findByName(e){return this.transfomers[e]}}const Wo=e=>void 0===e,qo=e=>"object"==typeof e&&null!==e&&(e!==Object.prototype&&(null===Object.getPrototypeOf(e)||Object.getPrototypeOf(e)===Object.prototype)),Go=e=>qo(e)&&0===Object.keys(e).length,Ko=e=>Array.isArray(e),Yo=e=>e instanceof Map,Xo=e=>e instanceof Set,Jo=e=>"Symbol"===(e=>Object.prototype.toString.call(e).slice(8,-1))(e),Qo=e=>"number"==typeof e&&isNaN(e),ei=e=>(e=>"boolean"==typeof e)(e)||(e=>null===e)(e)||Wo(e)||(e=>"number"==typeof e&&!isNaN(e))(e)||(e=>"string"==typeof e)(e)||Jo(e),ti=e=>e.replace(/\./g,"\\."),ni=e=>e.map(String).map(ti).join("."),ri=e=>{const t=[];let n="";for(let o=0;o<e.length;o++){let r=e.charAt(o);if("\\"===r&&"."===e.charAt(o+1)){n+=".",o++;continue}"."===r?(t.push(n),n=""):n+=r}const r=n;return t.push(r),t};function oi(e,t,n,r){return{isApplicable:e,annotation:t,transform:n,untransform:r}}const ii=[oi(Wo,"undefined",(()=>null),(()=>{})),oi((e=>"bigint"==typeof e),"bigint",(e=>e.toString()),(e=>"undefined"!=typeof BigInt?BigInt(e):(console.error("Please add a BigInt polyfill."),e))),oi((e=>e instanceof Date&&!isNaN(e.valueOf())),"Date",(e=>e.toISOString()),(e=>new Date(e))),oi((e=>e instanceof Error),"Error",((e,t)=>{const n={name:e.name,message:e.message};return t.allowedErrorProps.forEach((t=>{n[t]=e[t]})),n}),((e,t)=>{const n=new Error(e.message);return n.name=e.name,n.stack=e.stack,t.allowedErrorProps.forEach((t=>{n[t]=e[t]})),n})),oi((e=>e instanceof RegExp),"regexp",(e=>""+e),(e=>{const t=e.slice(1,e.lastIndexOf("/")),n=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,n)})),oi(Xo,"set",(
// (sets only exist in es6+)
// eslint-disable-next-line es5/no-es6-methods
e=>[...e.values()]),(e=>new Set(e))),oi(Yo,"map",(e=>[...e.entries()]),(e=>new Map(e))),oi((e=>{return Qo(e)||((t=e)===1/0||t===-1/0);var t}),"number",(e=>Qo(e)?"NaN":e>0?"Infinity":"-Infinity"),Number),oi((e=>0===e&&1/e==-1/0),"number",(()=>"-0"),Number),oi((e=>e instanceof URL),"URL",(e=>e.toString()),(e=>new URL(e)))];function ai(e,t,n,r){return{isApplicable:e,annotation:t,transform:n,untransform:r}}const si=ai(((e,t)=>{if(Jo(e)){return!!t.symbolRegistry.getIdentifier(e)}return!1}),((e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)]),(e=>e.description),((e,t,n)=>{const r=n.symbolRegistry.getValue(t[1]);if(!r)throw new Error("Trying to deserialize unknown symbol");return r})),li=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce(((e,t)=>(e[t.name]=t,e)),{}),ci=ai((e=>ArrayBuffer.isView(e)&&!(e instanceof DataView)),(e=>["typed-array",e.constructor.name]),(e=>[...e]),((e,t)=>{const n=li[t[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(e)}));function ui(e,t){if(null==e?void 0:e.constructor){return!!t.classRegistry.getIdentifier(e.constructor)}return!1}const di=ai(ui,((e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)]),((e,t)=>{const n=t.classRegistry.getAllowedProps(e.constructor);if(!n)return s({},e);const r={};return n.forEach((t=>{r[t]=e[t]})),r}),((e,t,n)=>{const r=n.classRegistry.getValue(t[1]);if(!r)throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);return Object.assign(Object.create(r.prototype),e)})),pi=ai(((e,t)=>!!t.customTransformerRegistry.findApplicable(e)),((e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name]),((e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e)),((e,t,n)=>{const r=n.customTransformerRegistry.findByName(t[1]);if(!r)throw new Error("Trying to deserialize unknown custom value");return r.deserialize(e)})),fi=[di,si,pi,ci],mi=(e,t)=>{const n=Vo(fi,(n=>n.isApplicable(e,t)));if(n)return{value:n.transform(e,t),type:n.annotation(e,t)};const r=Vo(ii,(n=>n.isApplicable(e,t)));return r?{value:r.transform(e,t),type:r.annotation}:void 0},hi={};ii.forEach((e=>{hi[e.annotation]=e}));const gi=(e,t)=>{if(t>e.size)throw new Error("index out of bounds");const n=e.keys();for(;t>0;)n.next(),t--;return n.next().value};function vi(e){if(Uo(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Uo(e,"prototype"))throw new Error("prototype is not allowed as a property");if(Uo(e,"constructor"))throw new Error("constructor is not allowed as a property")}const wi=(e,t,n)=>{if(vi(t),0===t.length)return n(e);let r=e;for(let i=0;i<t.length-1;i++){const e=t[i];if(Ko(r)){r=r[+e]}else if(qo(r))r=r[e];else if(Xo(r)){r=gi(r,+e)}else if(Yo(r)){if(i===t.length-2)break;const n=+e,o=0===+t[++i]?"key":"value",a=gi(r,n);switch(o){case"key":r=a;break;case"value":r=r.get(a)}}}const o=t[t.length-1];if(Ko(r)?r[+o]=n(r[+o]):qo(r)&&(r[o]=n(r[o])),Xo(r)){const e=gi(r,+o),t=n(e);e!==t&&(r.delete(e),r.add(t))}if(Yo(r)){const e=+t[t.length-2],i=gi(r,e);switch(0===+o?"key":"value"){case"key":{const e=n(i);r.set(e,r.get(i)),e!==i&&r.delete(i);break}case"value":r.set(i,n(r.get(i)))}}return e};function bi(e,t,n=[]){if(!e)return;if(!Ko(e))return void Zo(e,((e,r)=>bi(e,t,[...n,...ri(r)])));const[r,o]=e;o&&Zo(o,((e,r)=>{bi(e,t,[...n,...ri(r)])})),t(r,n)}function yi(e,t,n){return bi(t,((t,r)=>{e=wi(e,r,(e=>((e,t,n)=>{if(!Ko(t)){const r=hi[t];if(!r)throw new Error("Unknown transformation: "+t);return r.untransform(e,n)}switch(t[0]){case"symbol":return si.untransform(e,t,n);case"class":return di.untransform(e,t,n);case"custom":return pi.untransform(e,t,n);case"typed-array":return ci.untransform(e,t,n);default:throw new Error("Unknown transformation: "+t)}})(e,t,n)))})),e}function _i(e,t){function n(t,n){const r=((e,t)=>{vi(t);for(let n=0;n<t.length;n++){const r=t[n];if(Xo(e))e=gi(e,+r);else if(Yo(e)){const o=+r,i=0===+t[++n]?"key":"value",a=gi(e,o);switch(i){case"key":e=a;break;case"value":e=e.get(a)}}else e=e[r]}return e})(e,ri(n));t.map(ri).forEach((t=>{e=wi(e,t,(()=>r))}))}if(Ko(t)){const[r,o]=t;r.forEach((t=>{e=wi(e,ri(t),(()=>e))})),o&&Zo(o,n)}else Zo(t,n);return e}const xi=(e,t,n,r,o=[],i=[],a=new Map)=>{var s;const l=ei(e);if(!l){!function(e,t,n){const r=n.get(e);r?r.push(t):n.set(e,[t])}(e,o,t);const n=a.get(e);if(n)return r?{transformedValue:null}:n}if(!((e,t)=>qo(e)||Ko(e)||Yo(e)||Xo(e)||ui(e,t))(e,n)){const t=mi(e,n),r=t?{transformedValue:t.value,annotations:[t.type]}:{transformedValue:e};return l||a.set(e,r),r}if(Uo(i,e))return{transformedValue:null};const c=mi(e,n),u=null!=(s=null==c?void 0:c.value)?s:e,d=Ko(u)?[]:{},p={};Zo(u,((s,l)=>{if("__proto__"===l||"constructor"===l||"prototype"===l)throw new Error(`Detected property ${l}. This is a prototype pollution risk, please remove it from your object.`);const c=xi(s,t,n,r,[...o,l],[...i,e],a);d[l]=c.transformedValue,Ko(c.annotations)?p[l]=c.annotations:qo(c.annotations)&&Zo(c.annotations,((e,t)=>{p[ti(l)+"."+t]=e}))}));const f=Go(p)?{transformedValue:d,annotations:c?[c.type]:void 0}:{transformedValue:d,annotations:c?[c.type,p]:p};return l||a.set(e,f),f};function ki(e){return Object.prototype.toString.call(e).slice(8,-1)}function Ei(e){return"Array"===ki(e)}function Ci(e,t={}){if(Ei(e))return e.map((e=>Ci(e,t)));if(!function(e){if("Object"!==ki(e))return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}(e))return e;return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)].reduce(((n,r)=>{if(Ei(t.props)&&!t.props.includes(r))return n;return function(e,t,n,r,o){const i={}.propertyIsEnumerable.call(r,t)?"enumerable":"nonenumerable";"enumerable"===i&&(e[t]=n),o&&"nonenumerable"===i&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}(n,r,Ci(e[r],t),e,t.nonenumerable),n}),{})}class Si{
/**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
constructor({dedupe:e=!1}={}){this.classRegistry=new $o,this.symbolRegistry=new Do((e=>{var t;return null!=(t=e.description)?t:""})),this.customTransformerRegistry=new Bo,this.allowedErrorProps=[],this.dedupe=e}serialize(e){const t=new Map,n=xi(e,t,this,this.dedupe),r={json:n.transformedValue};n.annotations&&(r.meta=l(s({},r.meta),{values:n.annotations}));const o=function(e,t){const n={};let r;return e.forEach((e=>{if(e.length<=1)return;t||(e=e.map((e=>e.map(String))).sort(((e,t)=>e.length-t.length)));const[o,...i]=e;0===o.length?r=i.map(ni):n[ni(o)]=i.map(ni)})),r?Go(n)?[r]:[r,n]:Go(n)?void 0:n}(t,this.dedupe);return o&&(r.meta=l(s({},r.meta),{referentialEqualities:o})),r}deserialize(e){const{json:t,meta:n}=e;let r=Ci(t);return(null==n?void 0:n.values)&&(r=yi(r,n.values,this)),(null==n?void 0:n.referentialEqualities)&&(r=_i(r,n.referentialEqualities)),r}stringify(e){return JSON.stringify(this.serialize(e))}parse(e){return this.deserialize(JSON.parse(e))}registerClass(e,t){this.classRegistry.register(e,t)}registerSymbol(e,t){this.symbolRegistry.register(e,t)}registerCustom(e,t){this.customTransformerRegistry.register(s({name:t},e))}allowErrorProps(...e){this.allowedErrorProps.push(...e)}}function Ti(e,t){let n;try{n=e()}catch(nl){return}return{getItem:e=>{var t;const r=e=>null===e?null:JSON.parse(e,void 0),o=null!=(t=n.getItem(e))?t:null;return o instanceof Promise?o.then(r):r(o)},setItem:(e,t)=>n.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>n.removeItem(e)}}Si.defaultInstance=new Si,Si.serialize=Si.defaultInstance.serialize.bind(Si.defaultInstance),Si.deserialize=Si.defaultInstance.deserialize.bind(Si.defaultInstance),Si.stringify=Si.defaultInstance.stringify.bind(Si.defaultInstance),Si.parse=Si.defaultInstance.parse.bind(Si.defaultInstance),Si.registerClass=Si.defaultInstance.registerClass.bind(Si.defaultInstance),Si.registerSymbol=Si.defaultInstance.registerSymbol.bind(Si.defaultInstance),Si.registerCustom=Si.defaultInstance.registerCustom.bind(Si.defaultInstance),Si.allowErrorProps=Si.defaultInstance.allowErrorProps.bind(Si.defaultInstance),Si.serialize,Si.deserialize,Si.stringify,Si.parse,Si.registerClass,Si.registerCustom,Si.registerSymbol,Si.allowErrorProps;const Ai=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>Ai(e)(n),catch(e){return this}}}catch(nl){return{then(e){return this},catch:t=>Ai(t)(nl)}}},Oi=(e,t)=>(n,r,o)=>{let i=s({storage:Ti((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>s(s({},t),e)},t),a=!1;const l=new Set,c=new Set;let u=i.storage;if(!u)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...e)}),r,o);const d=()=>{const e=i.partialize(s({},r()));return u.setItem(i.name,{state:e,version:i.version})},p=o.setState;o.setState=(e,t)=>{p(e,t),d()};const f=e(((...e)=>{n(...e),d()}),r,o);let m;o.getInitialState=()=>f;const h=()=>{var e,t;if(!u)return;a=!1,l.forEach((e=>{var t;return e(null!=(t=r())?t:f)}));const o=(null==(t=i.onRehydrateStorage)?void 0:t.call(i,null!=(e=r())?e:f))||void 0;return Ai(u.getItem.bind(u))(i.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return[!1,e.state];if(i.migrate){const t=i.migrate(e.state,e.version);return t instanceof Promise?t.then((e=>[!0,e])):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]})).then((e=>{var t;const[o,a]=e;if(m=i.merge(a,null!=(t=r())?t:f),n(m,!0),o)return d()})).then((()=>{null==o||o(m,void 0),m=r(),a=!0,c.forEach((e=>e(m)))})).catch((e=>{null==o||o(void 0,e)}))};return o.persist={setOptions:e=>{i=s(s({},i),e),e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>h(),hasHydrated:()=>a,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},i.skipHydration||h(),m||f};const Ii=(Pi=Oi((e=>{const t=e;return{appBlockRequestList:[],appUnblockRequestList:[],lastBlockRequestNumber:0,lastUnblockRequestNumber:0,isMainAppBlocked:!1,requestMainAppBlock:()=>{let e=0;return t((t=>(e=t.lastBlockRequestNumber+1,{appBlockRequestList:[...t.appBlockRequestList,e],lastBlockRequestNumber:e,isMainAppBlocked:0===t.appUnblockRequestList.length}))),e},requestMainAppUnblock:()=>{let e=0;return t((t=>(e=t.lastUnblockRequestNumber+1,{appUnblockRequestList:[...t.appUnblockRequestList,e],lastUnblockRequestNumber:e,isMainAppBlocked:!1}))),e},discardMainAppBlock:e=>{t((t=>{const n=t.appBlockRequestList.filter((t=>t!==e));return{appBlockRequestList:n,isMainAppBlocked:n.length>0&&0===t.appUnblockRequestList.length}}))},discardMainAppUnblock:e=>{t((t=>{const n=t.appUnblockRequestList.filter((t=>t!==e));return{appUnblockRequestList:n,isMainAppBlocked:t.appBlockRequestList.length>0&&0===n.length}}))},toolbarPosition:Mo,setToolbarPosition:e=>t((()=>({toolbarPosition:e}))),toolbarBoxRef:{current:null},setToolbarBoxRef:e=>t((()=>({toolbarBoxRef:e}))),unsetToolbarBoxRef:()=>t((()=>({toolbarBoxRef:{current:null}}))),minimized:!1,minimize:()=>t((()=>({minimized:!0}))),expand:()=>t((()=>({minimized:!1}))),promotedOnStartup:!1,promotionFinished:()=>t((()=>({promotedOnStartup:!0})))}}),{name:"stgws:companion",storage:(Ni=sessionStorage,{getItem:e=>{const t=Ni.getItem(e);return t?Si.parse(t):null},setItem:(e,t)=>{Ni.setItem(e,Si.stringify(t))},removeItem:e=>Ni.removeItem(e)}),partialize:e=>({toolbarPosition:e.toolbarPosition})}))?jo(Pi):jo;var Pi,Ni;const Ri=ae({chats:[],currentChatId:null,createChat:()=>"",deleteChat:()=>{},setCurrentChat:()=>{},setChatInput:()=>{},addChatDomContext:()=>{},removeChatDomContext:()=>{},addMessage:()=>{},chatAreaState:"hidden",setChatAreaState:()=>{},isPromptCreationActive:!1,startPromptCreation:()=>{},stopPromptCreation:()=>{}}),Mi=({children:e})=>{const[t,n]=ke([{id:"new_chat",messages:[],title:"New chat",inputValue:"",domContextElements:[]}]),[r,o]=ke("new_chat"),[i,a]=ke("hidden"),[c,u]=ke(!1),p=Ii((e=>e.minimized));Ce((()=>{p&&(u(!1),a("hidden"))}),[p]);const{bridge:f}=function(){const e=Pe(Po);if(!e)throw new Error("useSRPCBridge must be used within an SRPCBridgeProvider");return e}(),m=Ie((()=>{const e=crypto.randomUUID(),t={id:e,title:null,messages:[],inputValue:"",domContextElements:[]};return n((e=>[...e,t])),o(e),e}),[]),h=Ie((e=>{n((t=>{const n=t.filter((t=>t.id!==e));return 0===n.length?[{id:"new_chat",messages:[],title:"New chat",inputValue:"",domContextElements:[]}]:n})),r===e&&n((e=>(o(e[0].id),e)))}),[r]),g=Ie((e=>{o(e)}),[]),v=Ie(((e,t)=>{n((n=>n.map((n=>n.id===e?l(s({},n),{inputValue:t}):n))))}),[]),w=Ie((()=>{u(!0),"hidden"===i&&a("compact")}),[i]),b=Ie((()=>{u(!1),n((e=>e.map((e=>e.id===r?l(s({},e),{domContextElements:[]}):e)))),"compact"===i&&a("hidden")}),[r,i]),y=Ie((e=>{a(e),"hidden"===e&&b()}),[a,b]),_=Ie(((e,t)=>{n((n=>n.map((n=>n.id===e?l(s({},n),{domContextElements:[...n.domContextElements,t]}):n))))}),[]),x=Ie(((e,t)=>{n((n=>n.map((n=>n.id===e?l(s({},n),{domContextElements:n.domContextElements.filter((e=>e!==t))}):n))))}),[]),k=Ie(((e,r)=>{if(!r.trim())return;const o=t.find((t=>t.id===e)),c=Ro(null==o?void 0:o.domContextElements,r,window.location.href),p={id:crypto.randomUUID(),content:r.trim(),sender:"user",type:"regular",timestamp:new Date};!function(){d(this,null,(function*(){f&&(yield f.call.triggerAgentPrompt({prompt:c},{onUpdate:e=>{}}))}))}(),u(!1),"hidden"===i&&a("compact"),n((t=>t.map((t=>t.id===e?l(s({},t),{messages:[...t.messages,p],inputValue:"",domContextElements:[]}):t))))}),[i,f,t,u,a]),E={chats:t,currentChatId:r,createChat:m,deleteChat:h,setCurrentChat:g,setChatInput:v,addMessage:k,chatAreaState:i,setChatAreaState:y,isPromptCreationActive:c,startPromptCreation:w,stopPromptCreation:b,addChatDomContext:_,removeChatDomContext:x};
return le(Ri.Provider,{value:E,children:e})};function Li(){const e=Pe(Ri);if(!e)throw new Error("useChatState must be used within a ChatStateProvider");return e}function zi(e,t){const n=Te(void 0),r=Oe((()=>t&&t>0?1e3/t:0),[t]),o=Te(0),i=Ie((t=>{t-o.current>=r&&(e(),o.current=t),n.current=requestAnimationFrame(i)}),[e,r]);Ce((()=>((!t||t>0)&&(n.current=requestAnimationFrame(i)),()=>{n.current&&(cancelAnimationFrame(n.current),n.current=void 0)})),[t,i])}const ji=ae(new URL(window.location.href));function Fi({children:e}){const[t,n]=ke(new URL(window.location.href));return zi(Ie((()=>{n(new URL(window.location.href))}),[]),15),le(ji.Provider,{value:t,children:e})}function Di({children:e,config:t}){
return le(Fi,{children:le(No,{children:le(Ze,{plugins:(null==t?void 0:t.plugins)||[],children:le(Mi,{children:e})})})})}function $i(e,t,n,r=window){Ce((()=>{if("undefined"!=typeof window&&r)return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t)}),[e,t,r,n])}function Hi(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Hi(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}const Zi=(e,t)=>{var n;if(0===e.length)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),i=o?Zi(e.slice(1),o):void 0;if(i)return i;if(0===t.validators.length)return;const a=e.join("-");return null==(n=t.validators.find((({validator:e})=>e(a))))?void 0:n.classGroupId},Ui=/^\[(.+)\]$/,Vi=e=>{if(Ui.test(e)){const t=Ui.exec(e)[1],n=null==t?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Bi=e=>{const{theme:t,classGroups:n}=e,r={nextPart:new Map,validators:[]};for(const o in n)Wi(n[o],r,o,t);return r},Wi=(e,t,n,r)=>{e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return Gi(e)?void Wi(e(r),t,n,r):void t.validators.push({validator:e,classGroupId:n});Object.entries(e).forEach((([e,o])=>{Wi(o,qi(t,e),n,r)}))}else{(""===e?t:qi(t,e)).classGroupId=n}}))},qi=(e,t)=>{let n=e;return t.split("-").forEach((e=>{n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)})),n},Gi=e=>e.isThemeGetter,Ki=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(o,i)=>{n.set(o,i),t++,t>e&&(t=0,r=n,n=new Map)};return{get(e){let t=n.get(e);return void 0!==t?t:void 0!==(t=r.get(e))?(o(e,t),t):void 0},set(e,t){n.has(e)?n.set(e,t):o(e,t)}}},Yi=e=>{const{prefix:t,experimentalParseClassName:n}=e;let r=e=>{const t=[];let n,r=0,o=0,i=0;for(let l=0;l<e.length;l++){let a=e[l];if(0===r&&0===o){if(":"===a){t.push(e.slice(i,l)),i=l+1;continue}if("/"===a){n=l;continue}}"["===a?r++:"]"===a?r--:"("===a?o++:")"===a&&o--}const a=0===t.length?e:e.substring(i),s=Xi(a);return{modifiers:t,hasImportantModifier:s!==a,baseClassName:s,maybePostfixModifierPosition:n&&n>i?n-i:void 0}};if(t){const e=t+":",n=r;r=t=>t.startsWith(e)?n(t.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:t,maybePostfixModifierPosition:void 0}}if(n){const e=r;r=t=>n({className:t,parseClassName:e})}return r},Xi=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,Ji=e=>{const t=Object.fromEntries(e.orderSensitiveModifiers.map((e=>[e,!0])));return e=>{if(e.length<=1)return e;const n=[];let r=[];return e.forEach((e=>{"["===e[0]||t[e]?(n.push(...r.sort(),e),r=[]):r.push(e)})),n.push(...r.sort()),n}},Qi=e=>s({cache:Ki(e.cacheSize),parseClassName:Yi(e),sortModifiers:Ji(e)},(e=>{const t=Bi(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{const n=e.split("-");return""===n[0]&&1!==n.length&&n.shift(),Zi(n,t)||Vi(e)},getConflictingClassGroupIds:(e,t)=>{const o=n[e]||[];return t&&r[e]?[...o,...r[e]]:o}}})(e)),ea=/\s+/;function ta(){let e,t,n=0,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=na(e))&&(r&&(r+=" "),r+=t);return r}const na=e=>{if("string"==typeof e)return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=na(e[r]))&&(n&&(n+=" "),n+=t);return n};function ra(e,...t){let n,r,o,i=function(s){const l=t.reduce(((e,t)=>t(e)),e());return n=Qi(l),r=n.cache.get,o=n.cache.set,i=a,a(s)};function a(e){const t=r(e);if(t)return t;const i=((e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:i}=t,a=[],s=e.trim().split(ea);let l="";for(let c=s.length-1;c>=0;c-=1){const e=s[c],{isExternal:t,modifiers:u,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:f}=n(e);if(t){l=e+(l.length>0?" "+l:l);continue}let m=!!f,h=r(m?p.substring(0,f):p);if(!h){if(!m){l=e+(l.length>0?" "+l:l);continue}if(h=r(p),!h){l=e+(l.length>0?" "+l:l);continue}m=!1}const g=i(u).join(":"),v=d?g+"!":g,w=v+h;if(a.includes(w))continue;a.push(w);const b=o(h,m);for(let n=0;n<b.length;++n){const e=b[n];a.push(v+e)}l=e+(l.length>0?" "+l:l)}return l})(e,n);return o(e,i),i}return function(){return i(ta.apply(null,arguments))}}const oa=e=>{const t=t=>t[e]||[];return t.isThemeGetter=!0,t},ia=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,aa=/^\((?:(\w[\w-]*):)?(.+)\)$/i,sa=/^\d+\/\d+$/,la=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ca=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ua=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,da=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,pa=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,fa=e=>sa.test(e),ma=e=>!!e&&!Number.isNaN(Number(e)),ha=e=>!!e&&Number.isInteger(Number(e)),ga=e=>e.endsWith("%")&&ma(e.slice(0,-1)),va=e=>la.test(e),wa=()=>!0,ba=e=>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
ca.test(e)&&!ua.test(e),ya=()=>!1,_a=e=>da.test(e),xa=e=>pa.test(e),ka=e=>!Ca(e)&&!Pa(e),Ea=e=>Fa(e,Za,ya),Ca=e=>ia.test(e),Sa=e=>Fa(e,Ua,ba),Ta=e=>Fa(e,Va,ma),Aa=e=>Fa(e,$a,ya),Oa=e=>Fa(e,Ha,xa),Ia=e=>Fa(e,Wa,_a),Pa=e=>aa.test(e),Na=e=>Da(e,Ua),Ra=e=>Da(e,Ba),Ma=e=>Da(e,$a),La=e=>Da(e,Za),za=e=>Da(e,Ha),ja=e=>Da(e,Wa,!0),Fa=(e,t,n)=>{const r=ia.exec(e);return!!r&&(r[1]?t(r[1]):n(r[2]))},Da=(e,t,n=!1)=>{const r=aa.exec(e);return!!r&&(r[1]?t(r[1]):n)},$a=e=>"position"===e||"percentage"===e,Ha=e=>"image"===e||"url"===e,Za=e=>"length"===e||"size"===e||"bg-size"===e,Ua=e=>"length"===e,Va=e=>"number"===e,Ba=e=>"family-name"===e,Wa=e=>"shadow"===e,qa=()=>{const e=oa("color"),t=oa("font"),n=oa("text"),r=oa("font-weight"),o=oa("tracking"),i=oa("leading"),a=oa("breakpoint"),s=oa("container"),l=oa("spacing"),c=oa("radius"),u=oa("shadow"),d=oa("inset-shadow"),p=oa("text-shadow"),f=oa("drop-shadow"),m=oa("blur"),h=oa("perspective"),g=oa("aspect"),v=oa("ease"),w=oa("animate"),b=()=>["center","top","bottom","left","right","top-left",
// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
"left-top","top-right",
// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
"right-top","bottom-right",
// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
"right-bottom","bottom-left",
// Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
"left-bottom",Pa,Ca],y=()=>[Pa,Ca,l],_=()=>[fa,"full","auto",...y()],x=()=>[ha,"none","subgrid",Pa,Ca],k=()=>["auto",{span:["full",ha,Pa,Ca]},ha,Pa,Ca],E=()=>[ha,"auto",Pa,Ca],C=()=>["auto","min","max","fr",Pa,Ca],S=()=>["auto",...y()],T=()=>[fa,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...y()],A=()=>[e,Pa,Ca],O=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom",Ma,Aa,{position:[Pa,Ca]}],I=()=>["auto","cover","contain",La,Ea,{size:[Pa,Ca]}],P=()=>[ga,Na,Sa],N=()=>[
// Deprecated since Tailwind CSS v4.0.0
"","none","full",c,Pa,Ca],R=()=>["",ma,Na,Sa],M=()=>[ma,ga,Ma,Aa],L=()=>[
// Deprecated since Tailwind CSS v4.0.0
"","none",m,Pa,Ca],z=()=>["none",ma,Pa,Ca],j=()=>["none",ma,Pa,Ca],F=()=>[ma,Pa,Ca],D=()=>[fa,"full",...y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[va],breakpoint:[va],color:[wa],container:[va],"drop-shadow":[va],ease:["in","out","in-out"],font:[ka],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[va],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[va],shadow:[va],spacing:["px",ma],text:[va],"text-shadow":[va],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{
// --------------
// --- Layout ---
// --------------
/**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
aspect:[{aspect:["auto","square",fa,Ca,Pa,g]}],
/**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
container:["container"],
/**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
columns:[{columns:[ma,Ca,Pa,s]}],
/**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],
/**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],
/**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],
/**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
"box-decoration":[{"box-decoration":["slice","clone"]}],
/**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
box:[{box:["border","content"]}],
/**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],
/**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
sr:["sr-only","not-sr-only"],
/**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
float:[{float:["right","left","none","start","end"]}],
/**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
clear:[{clear:["left","right","both","none","start","end"]}],
/**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
isolation:["isolate","isolation-auto"],
/**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],
/**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
"object-position":[{object:b()}],
/**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],
/**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],
/**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],
/**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
overscroll:[{overscroll:["auto","contain","none"]}],
/**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],
/**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],
/**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
position:["static","fixed","absolute","relative","sticky"],
/**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
inset:[{inset:_()}],
/**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
"inset-x":[{"inset-x":_()}],
/**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
"inset-y":[{"inset-y":_()}],
/**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
start:[{start:_()}],
/**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
end:[{end:_()}],
/**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
top:[{top:_()}],
/**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
right:[{right:_()}],
/**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
bottom:[{bottom:_()}],
/**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
left:[{left:_()}],
/**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
visibility:["visible","invisible","collapse"],
/**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
z:[{z:[ha,"auto",Pa,Ca]}],
// ------------------------
// --- Flexbox and Grid ---
// ------------------------
/**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
basis:[{basis:[fa,"full","auto",s,...y()]}],
/**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],
/**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],
/**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
flex:[{flex:[ma,fa,"auto","initial","none",Ca]}],
/**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
grow:[{grow:["",ma,Pa,Ca]}],
/**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
shrink:[{shrink:["",ma,Pa,Ca]}],
/**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
order:[{order:[ha,"first","last","none",Pa,Ca]}],
/**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
"grid-cols":[{"grid-cols":x()}],
/**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
"col-start-end":[{col:k()}],
/**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
"col-start":[{"col-start":E()}],
/**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
"col-end":[{"col-end":E()}],
/**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
"grid-rows":[{"grid-rows":x()}],
/**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
"row-start-end":[{row:k()}],
/**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
"row-start":[{"row-start":E()}],
/**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
"row-end":[{"row-end":E()}],
/**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],
/**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
"auto-cols":[{"auto-cols":C()}],
/**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
"auto-rows":[{"auto-rows":C()}],
/**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
gap:[{gap:y()}],
/**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
"gap-x":[{"gap-x":y()}],
/**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
"gap-y":[{"gap-y":y()}],
/**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
"justify-content":[{justify:["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe","normal"]}],
/**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
"justify-items":[{"justify-items":["start","end","center","stretch","center-safe","end-safe","normal"]}],
/**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
"justify-self":[{"justify-self":["auto","start","end","center","stretch","center-safe","end-safe"]}],
/**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"]}],
/**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
"align-items":[{items:["start","end","center","stretch","center-safe","end-safe",{baseline:["","last"]}]}],
/**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
"align-self":[{self:["auto","start","end","center","stretch","center-safe","end-safe",{baseline:["","last"]}]}],
/**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"]}],
/**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
"place-items":[{"place-items":["start","end","center","stretch","center-safe","end-safe","baseline"]}],
/**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
"place-self":[{"place-self":["auto","start","end","center","stretch","center-safe","end-safe"]}],
// Spacing
/**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
p:[{p:y()}],
/**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
px:[{px:y()}],
/**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
py:[{py:y()}],
/**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
ps:[{ps:y()}],
/**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
pe:[{pe:y()}],
/**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
pt:[{pt:y()}],
/**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
pr:[{pr:y()}],
/**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
pb:[{pb:y()}],
/**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
pl:[{pl:y()}],
/**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
m:[{m:S()}],
/**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
mx:[{mx:S()}],
/**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
my:[{my:S()}],
/**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
ms:[{ms:S()}],
/**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
me:[{me:S()}],
/**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
mt:[{mt:S()}],
/**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
mr:[{mr:S()}],
/**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
mb:[{mb:S()}],
/**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
ml:[{ml:S()}],
/**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
"space-x":[{"space-x":y()}],
/**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
"space-x-reverse":["space-x-reverse"],
/**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
"space-y":[{"space-y":y()}],
/**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
"space-y-reverse":["space-y-reverse"],
// --------------
// --- Sizing ---
// --------------
/**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
size:[{size:T()}],
/**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
w:[{w:[s,"screen",...T()]}],
/**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
"min-w":[{"min-w":[s,"screen",
/** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
"none",...T()]}],
/**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
"max-w":[{"max-w":[s,"screen","none",
/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
"prose",
/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
{screen:[a]},...T()]}],
/**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
h:[{h:["screen",...T()]}],
/**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
"min-h":[{"min-h":["screen","none",...T()]}],
/**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
"max-h":[{"max-h":["screen",...T()]}],
// ------------------
// --- Typography ---
// ------------------
/**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
"font-size":[{text:["base",n,Na,Sa]}],
/**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
"font-smoothing":["antialiased","subpixel-antialiased"],
/**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
"font-style":["italic","not-italic"],
/**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
"font-weight":[{font:[r,Pa,Ta]}],
/**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ga,Ca]}],
/**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
"font-family":[{font:[Ra,Ca,t]}],
/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
"fvn-normal":["normal-nums"],
/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
"fvn-ordinal":["ordinal"],
/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
"fvn-slashed-zero":["slashed-zero"],
/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
"fvn-figure":["lining-nums","oldstyle-nums"],
/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
"fvn-spacing":["proportional-nums","tabular-nums"],
/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
"fvn-fraction":["diagonal-fractions","stacked-fractions"],
/**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
tracking:[{tracking:[o,Pa,Ca]}],
/**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
"line-clamp":[{"line-clamp":[ma,"none",Pa,Ta]}],
/**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
leading:[{leading:[
/** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
i,...y()]}],
/**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
"list-image":[{"list-image":["none",Pa,Ca]}],
/**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
"list-style-position":[{list:["inside","outside"]}],
/**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
"list-style-type":[{list:["disc","decimal","none",Pa,Ca]}],
/**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
"text-alignment":[{text:["left","center","right","justify","start","end"]}],
/**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
"placeholder-color":[{placeholder:A()}],
/**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
"text-color":[{text:A()}],
/**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
"text-decoration":["underline","overline","line-through","no-underline"],
/**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
"text-decoration-style":[{decoration:["solid","dashed","dotted","double","wavy"]}],
/**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
"text-decoration-thickness":[{decoration:[ma,"from-font","auto",Pa,Sa]}],
/**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
"text-decoration-color":[{decoration:A()}],
/**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
"underline-offset":[{"underline-offset":[ma,"auto",Pa,Ca]}],
/**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
"text-transform":["uppercase","lowercase","capitalize","normal-case"],
/**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
"text-overflow":["truncate","text-ellipsis","text-clip"],
/**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],
/**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
indent:[{indent:y()}],
/**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Pa,Ca]}],
/**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],
/**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
break:[{break:["normal","words","all","keep"]}],
/**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
wrap:[{wrap:["break-word","anywhere","normal"]}],
/**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
hyphens:[{hyphens:["none","manual","auto"]}],
/**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
content:[{content:["none",Pa,Ca]}],
// -------------------
// --- Backgrounds ---
// -------------------
/**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
"bg-attachment":[{bg:["fixed","local","scroll"]}],
/**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
"bg-clip":[{"bg-clip":["border","padding","content","text"]}],
/**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
"bg-origin":[{"bg-origin":["border","padding","content"]}],
/**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
"bg-position":[{bg:O()}],
/**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],
/**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
"bg-size":[{bg:I()}],
/**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ha,Pa,Ca],radial:["",Pa,Ca],conic:[ha,Pa,Ca]},za,Oa]}],
/**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
"bg-color":[{bg:A()}],
/**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
"gradient-from-pos":[{from:P()}],
/**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
"gradient-via-pos":[{via:P()}],
/**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
"gradient-to-pos":[{to:P()}],
/**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
"gradient-from":[{from:A()}],
/**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
"gradient-via":[{via:A()}],
/**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
"gradient-to":[{to:A()}],
// ---------------
// --- Borders ---
// ---------------
/**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
rounded:[{rounded:N()}],
/**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-s":[{"rounded-s":N()}],
/**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-e":[{"rounded-e":N()}],
/**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-t":[{"rounded-t":N()}],
/**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-r":[{"rounded-r":N()}],
/**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-b":[{"rounded-b":N()}],
/**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-l":[{"rounded-l":N()}],
/**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-ss":[{"rounded-ss":N()}],
/**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-se":[{"rounded-se":N()}],
/**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-ee":[{"rounded-ee":N()}],
/**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-es":[{"rounded-es":N()}],
/**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-tl":[{"rounded-tl":N()}],
/**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-tr":[{"rounded-tr":N()}],
/**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-br":[{"rounded-br":N()}],
/**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
"rounded-bl":[{"rounded-bl":N()}],
/**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w":[{border:R()}],
/**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-x":[{"border-x":R()}],
/**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-y":[{"border-y":R()}],
/**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-s":[{"border-s":R()}],
/**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-e":[{"border-e":R()}],
/**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-t":[{"border-t":R()}],
/**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-r":[{"border-r":R()}],
/**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-b":[{"border-b":R()}],
/**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
"border-w-l":[{"border-l":R()}],
/**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
"divide-x":[{"divide-x":R()}],
/**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
"divide-x-reverse":["divide-x-reverse"],
/**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
"divide-y":[{"divide-y":R()}],
/**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
"divide-y-reverse":["divide-y-reverse"],
/**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
"border-style":[{border:["solid","dashed","dotted","double","hidden","none"]}],
/**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
"divide-style":[{divide:["solid","dashed","dotted","double","hidden","none"]}],
/**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color":[{border:A()}],
/**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-x":[{"border-x":A()}],
/**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-y":[{"border-y":A()}],
/**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-s":[{"border-s":A()}],
/**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-e":[{"border-e":A()}],
/**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-t":[{"border-t":A()}],
/**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-r":[{"border-r":A()}],
/**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-b":[{"border-b":A()}],
/**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
"border-color-l":[{"border-l":A()}],
/**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
"divide-color":[{divide:A()}],
/**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
"outline-style":[{outline:["solid","dashed","dotted","double","none","hidden"]}],
/**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
"outline-offset":[{"outline-offset":[ma,Pa,Ca]}],
/**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
"outline-w":[{outline:["",ma,Na,Sa]}],
/**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
"outline-color":[{outline:A()}],
// ---------------
// --- Effects ---
// ---------------
/**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
shadow:[{shadow:[
// Deprecated since Tailwind CSS v4.0.0
"","none",u,ja,Ia]}],
/**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
"shadow-color":[{shadow:A()}],
/**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
"inset-shadow":[{"inset-shadow":["none",d,ja,Ia]}],
/**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
"inset-shadow-color":[{"inset-shadow":A()}],
/**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
"ring-w":[{ring:R()}],
/**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
"ring-w-inset":["ring-inset"],
/**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
"ring-color":[{ring:A()}],
/**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
"ring-offset-w":[{"ring-offset":[ma,Sa]}],
/**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
"ring-offset-color":[{"ring-offset":A()}],
/**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
"inset-ring-w":[{"inset-ring":R()}],
/**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
"inset-ring-color":[{"inset-ring":A()}],
/**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
"text-shadow":[{"text-shadow":["none",p,ja,Ia]}],
/**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
"text-shadow-color":[{"text-shadow":A()}],
/**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
opacity:[{opacity:[ma,Pa,Ca]}],
/**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-darker","plus-lighter"]}],
/**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]}],
/**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],
/**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],
/**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
"mask-image-linear-pos":[{"mask-linear":[ma]}],"mask-image-linear-from-pos":[{"mask-linear-from":M()}],"mask-image-linear-to-pos":[{"mask-linear-to":M()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":M()}],"mask-image-t-to-pos":[{"mask-t-to":M()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":M()}],"mask-image-r-to-pos":[{"mask-r-to":M()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":M()}],"mask-image-b-to-pos":[{"mask-b-to":M()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":M()}],"mask-image-l-to-pos":[{"mask-l-to":M()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":M()}],"mask-image-x-to-pos":[{"mask-x-to":M()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":M()}],"mask-image-y-to-pos":[{"mask-y-to":M()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[Pa,Ca]}],"mask-image-radial-from-pos":[{"mask-radial-from":M()}],"mask-image-radial-to-pos":[{"mask-radial-to":M()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"]}],"mask-image-conic-pos":[{"mask-conic":[ma]}],"mask-image-conic-from-pos":[{"mask-conic-from":M()}],"mask-image-conic-to-pos":[{"mask-conic-to":M()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],
/**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
"mask-mode":[{mask:["alpha","luminance","match"]}],
/**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],
/**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
"mask-position":[{mask:O()}],
/**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
"mask-repeat":[{mask:["no-repeat",{repeat:["","x","y","space","round"]}]}],
/**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
"mask-size":[{mask:I()}],
/**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
"mask-type":[{"mask-type":["alpha","luminance"]}],
/**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
"mask-image":[{mask:["none",Pa,Ca]}],
// ---------------
// --- Filters ---
// ---------------
/**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
filter:[{filter:[
// Deprecated since Tailwind CSS v3.0.0
"","none",Pa,Ca]}],
/**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
blur:[{blur:L()}],
/**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
brightness:[{brightness:[ma,Pa,Ca]}],
/**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
contrast:[{contrast:[ma,Pa,Ca]}],
/**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
"drop-shadow":[{"drop-shadow":[
// Deprecated since Tailwind CSS v4.0.0
"","none",f,ja,Ia]}],
/**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
"drop-shadow-color":[{"drop-shadow":A()}],
/**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
grayscale:[{grayscale:["",ma,Pa,Ca]}],
/**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
"hue-rotate":[{"hue-rotate":[ma,Pa,Ca]}],
/**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
invert:[{invert:["",ma,Pa,Ca]}],
/**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
saturate:[{saturate:[ma,Pa,Ca]}],
/**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
sepia:[{sepia:["",ma,Pa,Ca]}],
/**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
"backdrop-filter":[{"backdrop-filter":[
// Deprecated since Tailwind CSS v3.0.0
"","none",Pa,Ca]}],
/**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
"backdrop-blur":[{"backdrop-blur":L()}],
/**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
"backdrop-brightness":[{"backdrop-brightness":[ma,Pa,Ca]}],
/**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
"backdrop-contrast":[{"backdrop-contrast":[ma,Pa,Ca]}],
/**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
"backdrop-grayscale":[{"backdrop-grayscale":["",ma,Pa,Ca]}],
/**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ma,Pa,Ca]}],
/**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
"backdrop-invert":[{"backdrop-invert":["",ma,Pa,Ca]}],
/**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
"backdrop-opacity":[{"backdrop-opacity":[ma,Pa,Ca]}],
/**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
"backdrop-saturate":[{"backdrop-saturate":[ma,Pa,Ca]}],
/**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
"backdrop-sepia":[{"backdrop-sepia":["",ma,Pa,Ca]}],
// --------------
// --- Tables ---
// --------------
/**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
"border-collapse":[{border:["collapse","separate"]}],
/**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
"border-spacing":[{"border-spacing":y()}],
/**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
"border-spacing-x":[{"border-spacing-x":y()}],
/**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
"border-spacing-y":[{"border-spacing-y":y()}],
/**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
"table-layout":[{table:["auto","fixed"]}],
/**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
caption:[{caption:["top","bottom"]}],
// ---------------------------------
// --- Transitions and Animation ---
// ---------------------------------
/**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
transition:[{transition:["","all","colors","opacity","shadow","transform","none",Pa,Ca]}],
/**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
"transition-behavior":[{transition:["normal","discrete"]}],
/**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
duration:[{duration:[ma,"initial",Pa,Ca]}],
/**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
ease:[{ease:["linear","initial",v,Pa,Ca]}],
/**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
delay:[{delay:[ma,Pa,Ca]}],
/**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
animate:[{animate:["none",w,Pa,Ca]}],
// ------------------
// --- Transforms ---
// ------------------
/**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
backface:[{backface:["hidden","visible"]}],
/**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
perspective:[{perspective:[h,Pa,Ca]}],
/**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
"perspective-origin":[{"perspective-origin":b()}],
/**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
rotate:[{rotate:z()}],
/**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
"rotate-x":[{"rotate-x":z()}],
/**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
"rotate-y":[{"rotate-y":z()}],
/**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
"rotate-z":[{"rotate-z":z()}],
/**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
scale:[{scale:j()}],
/**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
"scale-x":[{"scale-x":j()}],
/**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
"scale-y":[{"scale-y":j()}],
/**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
"scale-z":[{"scale-z":j()}],
/**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
"scale-3d":["scale-3d"],
/**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
skew:[{skew:F()}],
/**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
"skew-x":[{"skew-x":F()}],
/**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
"skew-y":[{"skew-y":F()}],
/**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
transform:[{transform:[Pa,Ca,"","none","gpu","cpu"]}],
/**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
"transform-origin":[{origin:b()}],
/**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
"transform-style":[{transform:["3d","flat"]}],
/**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
translate:[{translate:D()}],
/**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
"translate-x":[{"translate-x":D()}],
/**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
"translate-y":[{"translate-y":D()}],
/**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
"translate-z":[{"translate-z":D()}],
/**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
"translate-none":["translate-none"],
// ---------------------
// --- Interactivity ---
// ---------------------
/**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
accent:[{accent:A()}],
/**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
appearance:[{appearance:["none","auto"]}],
/**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
"caret-color":[{caret:A()}],
/**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],
/**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Pa,Ca]}],
/**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
"field-sizing":[{"field-sizing":["fixed","content"]}],
/**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
"pointer-events":[{"pointer-events":["auto","none"]}],
/**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
resize:[{resize:["none","","y","x"]}],
/**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
"scroll-behavior":[{scroll:["auto","smooth"]}],
/**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-m":[{"scroll-m":y()}],
/**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-mx":[{"scroll-mx":y()}],
/**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-my":[{"scroll-my":y()}],
/**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-ms":[{"scroll-ms":y()}],
/**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-me":[{"scroll-me":y()}],
/**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-mt":[{"scroll-mt":y()}],
/**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-mr":[{"scroll-mr":y()}],
/**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-mb":[{"scroll-mb":y()}],
/**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
"scroll-ml":[{"scroll-ml":y()}],
/**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-p":[{"scroll-p":y()}],
/**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-px":[{"scroll-px":y()}],
/**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-py":[{"scroll-py":y()}],
/**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-ps":[{"scroll-ps":y()}],
/**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-pe":[{"scroll-pe":y()}],
/**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-pt":[{"scroll-pt":y()}],
/**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-pr":[{"scroll-pr":y()}],
/**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-pb":[{"scroll-pb":y()}],
/**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
"scroll-pl":[{"scroll-pl":y()}],
/**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
"snap-align":[{snap:["start","end","center","align-none"]}],
/**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
"snap-stop":[{snap:["normal","always"]}],
/**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
"snap-type":[{snap:["none","x","y","both"]}],
/**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
"snap-strictness":[{snap:["mandatory","proximity"]}],
/**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
touch:[{touch:["auto","none","manipulation"]}],
/**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
"touch-x":[{"touch-pan":["x","left","right"]}],
/**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
"touch-y":[{"touch-pan":["y","up","down"]}],
/**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
"touch-pz":["touch-pinch-zoom"],
/**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
select:[{select:["none","text","all","auto"]}],
/**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
"will-change":[{"will-change":["auto","scroll","contents","transform",Pa,Ca]}],
// -----------
// --- SVG ---
// -----------
/**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
fill:[{fill:["none",...A()]}],
/**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
"stroke-w":[{stroke:[ma,Na,Sa,Ta]}],
/**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
stroke:[{stroke:["none",...A()]}],
// ---------------------
// --- Accessibility ---
// ---------------------
/**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Ga=(e,t,n)=>{void 0!==n&&(e[t]=n)},Ka=(e,t)=>{if(t)for(const n in t)Ga(e,n,t[n])},Ya=(e,t)=>{if(t)for(const n in t)Xa(e,t,n)},Xa=(e,t,n)=>{const r=t[n];void 0!==r&&(e[n]=e[n]?e[n].concat(r):r)},Ja="stagewise-companion-anchor";const Qa=(e,t,n)=>{const r=e.getBoundingClientRect(),o=t>r.left&&t<r.left+r.width,i=n>r.top&&n<r.top+r.height;return o&&i};var es=(e=>(e[e.ESC=0]="ESC",e[e.CTRL_ALT_C=1]="CTRL_ALT_C",e))(es||{});const ts={0:{keyComboDefault:"Esc",keyComboMac:"esc",isEventMatching:e=>"Escape"===e.code},1:{keyComboDefault:"Ctrl+Alt+C",keyComboMac:"⌘+⌥+C",isEventMatching:e=>"KeyC"===e.code&&(e.ctrlKey||e.metaKey)&&e.altKey}},ns=((e,...t)=>"function"==typeof e?ra(qa,e,...t):ra((()=>((e,{cacheSize:t,prefix:n,experimentalParseClassName:r,extend:o={},override:i={}})=>(Ga(e,"cacheSize",t),Ga(e,"prefix",n),Ga(e,"experimentalParseClassName",r),Ka(e.theme,i.theme),Ka(e.classGroups,i.classGroups),Ka(e.conflictingClassGroups,i.conflictingClassGroups),Ka(e.conflictingClassGroupModifiers,i.conflictingClassGroupModifiers),Ga(e,"orderSensitiveModifiers",i.orderSensitiveModifiers),Ya(e.theme,o.theme),Ya(e.classGroups,o.classGroups),Ya(e.conflictingClassGroups,o.conflictingClassGroups),Ya(e.conflictingClassGroupModifiers,o.conflictingClassGroupModifiers),Xa(e,o,"orderSensitiveModifiers"),e))(qa(),e)),...t))({extend:{classGroups:{"bg-image":["bg-gradient","bg-gradient-light-1","bg-gradient-light-2","bg-gradient-light-3"]}}});function rs(...e){return ns(function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Hi(e))&&(r&&(r+=" "),r+=t);return r}(e))}function os(){const{startPromptCreation:e,stopPromptCreation:t}=Li(),n=Oe((()=>({[es.CTRL_ALT_C]:()=>{e()},[es.ESC]:()=>{t()}})),[e,t]);return $i("keydown",Ie((e=>{for(const[t,r]of Object.entries(ts))if(r.isEventMatching(e)){e.preventDefault(),e.stopPropagation(),n[t]();break}}),[n]),{capture:!0}),null}const is="undefined"!=typeof document?Bt.useLayoutEffect:()=>{};const as=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},ss=e=>{if(e&&"window"in e&&e.window===e)return e;return as(e).defaultView||window};function ls(e,t){return!(!t||!e)&&e.contains(t)}const cs=(e=document)=>e.activeElement;function us(e){return e.target}function ds(e){let t=null;return()=>(null==t&&(t=e()),t)}const ps=ds((function(){return e=/^Mac/i,"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform);var e,t})),fs=ds((function(){return e=/Android/i,"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent));var e,t}));function ms(){let e=Te(new Map),t=Ie(((t,n,r,o)=>{let i=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:i,options:o}),t.addEventListener(n,i,o)}),[]),n=Ie(((t,n,r,o)=>{var i;let a=(null===(i=e.current.get(r))||void 0===i?void 0:i.fn)||r;t.removeEventListener(n,a,o),e.current.delete(r)}),[]),r=Ie((()=>{e.current.forEach(((e,t)=>{n(e.eventTarget,e.type,t,e.options)}))}),[n]);return Ce((()=>r),[r]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:r}}function hs(e){let t=e;return t.nativeEvent=e,t.isDefaultPrevented=()=>t.defaultPrevented,t.isPropagationStopped=()=>t.cancelBubble,t.persist=()=>{},t}function gs(e){let t=Te({isFocused:!1,observer:null});is((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=function(e){const t=Te(null);return is((()=>{t.current=e}),[e]),Ie(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}((t=>{null==e||e(t)}));return Ie((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,o=e=>{if(t.current.isFocused=!1,r.disabled){let t=hs(e);n(t)}t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",o,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}let vs=null,ws=new Set,bs=new Map,ys=!1,_s=!1;const xs={Tab:!0,Escape:!0};function ks(e,t){for(let n of ws)n(e,t)}function Es(e){ys=!0,function(e){return!(e.metaKey||!ps()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(vs="keyboard",ks("keyboard",e))}function Cs(e){vs="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(ys=!0,ks("pointer",e))}function Ss(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(fs()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(ys=!0,vs="virtual")}function Ts(e){e.target!==window&&e.target!==document&&e.isTrusted&&(ys||_s||(vs="virtual",ks("virtual",e)),ys=!1,_s=!1)}function As(){ys=!1,_s=!0}function Os(e){if("undefined"==typeof window||bs.get(ss(e)))return;const t=ss(e),n=as(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){ys=!0,r.apply(this,arguments)},n.addEventListener("keydown",Es,!0),n.addEventListener("keyup",Es,!0),n.addEventListener("click",Ss,!0),t.addEventListener("focus",Ts,!0),t.addEventListener("blur",As,!1),"undefined"!=typeof PointerEvent&&(n.addEventListener("pointerdown",Cs,!0),n.addEventListener("pointermove",Cs,!0),n.addEventListener("pointerup",Cs,!0)),t.addEventListener("beforeunload",(()=>{Is(e)}),{once:!0}),bs.set(t,{focus:r})}const Is=(e,t)=>{const n=ss(e),r=as(e);t&&r.removeEventListener("DOMContentLoaded",t),bs.has(n)&&(n.HTMLElement.prototype.focus=bs.get(n).focus,r.removeEventListener("keydown",Es,!0),r.removeEventListener("keyup",Es,!0),r.removeEventListener("click",Ss,!0),n.removeEventListener("focus",Ts,!0),n.removeEventListener("blur",As,!1),"undefined"!=typeof PointerEvent&&(r.removeEventListener("pointerdown",Cs,!0),r.removeEventListener("pointermove",Cs,!0),r.removeEventListener("pointerup",Cs,!0)),bs.delete(n))};function Ps(){return"pointer"!==vs}"undefined"!=typeof document&&function(e){const t=as(e);let n;"loading"!==t.readyState?Os(e):(n=()=>{Os(e)},t.addEventListener("DOMContentLoaded",n))}();const Ns=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Rs(e,t,n){Os(),Ce((()=>{let t=(t,r)=>{(function(e,t,n){let r=as(null==n?void 0:n.target);const o="undefined"!=typeof window?ss(null==n?void 0:n.target).HTMLInputElement:HTMLInputElement,i="undefined"!=typeof window?ss(null==n?void 0:n.target).HTMLTextAreaElement:HTMLTextAreaElement,a="undefined"!=typeof window?ss(null==n?void 0:n.target).HTMLElement:HTMLElement,s="undefined"!=typeof window?ss(null==n?void 0:n.target).KeyboardEvent:KeyboardEvent;return!((e=e||r.activeElement instanceof o&&!Ns.has(r.activeElement.type)||r.activeElement instanceof i||r.activeElement instanceof a&&r.activeElement.isContentEditable)&&"keyboard"===t&&n instanceof s&&!xs[n.key])})(!!(null==n?void 0:n.isTextInput),t,r)&&e(Ps())};return ws.add(t),()=>{ws.delete(t)}}),t)}function Ms(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:o}=e,i=Te({isFocusWithin:!1}),{addGlobalListener:a,removeAllGlobalListeners:s}=ms(),l=Ie((e=>{e.currentTarget.contains(e.target)&&i.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(i.current.isFocusWithin=!1,s(),n&&n(e),o&&o(!1))}),[n,o,i,s]),c=gs(l),u=Ie((e=>{if(!e.currentTarget.contains(e.target))return;const t=as(e.target),n=cs(t);if(!i.current.isFocusWithin&&n===us(e.nativeEvent)){r&&r(e),o&&o(!0),i.current.isFocusWithin=!0,c(e);let n=e.currentTarget;a(t,"focus",(e=>{if(i.current.isFocusWithin&&!ls(n,e.target)){let r=new t.defaultView.FocusEvent("blur",{relatedTarget:e.target});!function(e,t){Object.defineProperty(e,"target",{value:t}),Object.defineProperty(e,"currentTarget",{value:t})}(r,n);let o=hs(r);l(o)}}),{capture:!0})}}),[r,o,c,a,l]);return t?{focusWithinProps:{
// These cannot be null, that would conflict in mergeProps
onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:l}}}let Ls=!1,zs=0;function js(e){"touch"===e.pointerType&&(Ls=!0,setTimeout((()=>{Ls=!1}),50))}function Fs(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent&&document.addEventListener("pointerup",js),zs++,()=>{zs--,zs>0||"undefined"!=typeof PointerEvent&&document.removeEventListener("pointerup",js)}}function Ds(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:o}=e,[i,a]=ke(!1),s=Te({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;Ce(Fs,[]);let{addGlobalListener:l,removeAllGlobalListeners:c}=ms(),{hoverProps:u,triggerHoverEnd:d}=Oe((()=>{let e=(e,t)=>{let o=s.target;s.pointerType="",s.target=null,"touch"!==t&&s.isHovered&&o&&(s.isHovered=!1,c(),r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),a(!1))},i={};return"undefined"!=typeof PointerEvent&&(i.onPointerEnter=r=>{Ls&&"mouse"===r.pointerType||((r,i)=>{if(s.pointerType=i,o||"touch"===i||s.isHovered||!r.currentTarget.contains(r.target))return;s.isHovered=!0;let c=r.currentTarget;s.target=c,l(as(r.target),"pointerover",(t=>{s.isHovered&&s.target&&!ls(s.target,t.target)&&e(t,t.pointerType)}),{capture:!0}),t&&t({type:"hoverstart",target:c,pointerType:i}),n&&n(!0),a(!0)})(r,r.pointerType)},i.onPointerLeave=t=>{!o&&t.currentTarget.contains(t.target)&&e(t,t.pointerType)}),{hoverProps:i,triggerHoverEnd:e}}),[t,n,r,o,s,l,c]);return Ce((()=>{o&&d({currentTarget:s.target},s.pointerType)}),[o]),{hoverProps:u,isHovered:i}}function $s(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,o=Te({isFocused:!1,isFocusVisible:t||Ps()}),[i,a]=ke(!1),[s,l]=ke((()=>o.current.isFocused&&o.current.isFocusVisible)),c=Ie((()=>l(o.current.isFocused&&o.current.isFocusVisible)),[]),u=Ie((e=>{o.current.isFocused=e,a(e),c()}),[c]);Rs((e=>{o.current.isFocusVisible=e,c()}),[],{isTextInput:n});let{focusProps:d}=function(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:o}=e;const i=Ie((e=>{if(e.target===e.currentTarget)return r&&r(e),o&&o(!1),!0}),[r,o]),a=gs(i),s=Ie((e=>{const t=as(e.target),r=t?cs(t):cs();e.target===e.currentTarget&&r===us(e.nativeEvent)&&(n&&n(e),o&&o(!0),a(e))}),[o,n,a]);return{focusProps:{onFocus:!t&&(n||o||r)?s:void 0,onBlur:t||!r&&!o?void 0:i}}}({isDisabled:r,onFocusChange:u}),{focusWithinProps:p}=Ms({isDisabled:!r,onFocusWithinChange:u});return{isFocused:i,isFocusVisible:s,focusProps:r?p:d}}var Hs=Object.defineProperty,Zs=(e,t,n)=>(((e,t,n)=>{t in e?Hs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let Us=new class{constructor(){Zs(this,"current",this.detect()),Zs(this,"handoffState","pending"),Zs(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}};function Vs(e){var t,n;return Us.isServer?null:e?"ownerDocument"in e?e.ownerDocument:"current"in e?null!=(n=null==(t=e.current)?void 0:t.ownerDocument)?n:document:null:document}function Bs(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function Ws(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return Bs((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=Ws();return e(t),this.add((()=>t.dispose()))},add:t=>(e.includes(t)||e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function qs(){let[e]=ke(Ws);return Ce((()=>()=>e.dispose()),[e]),e}let Gs=(e,t)=>{Us.isServer?Ce(e,t):Se(e,t)};function Ks(e){let t=Te(e);return Gs((()=>{t.current=e}),[e]),t}let Ys=function(e){let t=Ks(e);return Bt.useCallback(((...e)=>t.current(...e)),[t])};function Xs({disabled:e=!1}={}){let t=Te(null),[n,r]=ke(!1),o=qs(),i=Ys((()=>{t.current=null,r(!1),o.dispose()})),a=Ys((e=>{if(o.dispose(),null===t.current){t.current=e.currentTarget,r(!0);{let n=Vs(e.currentTarget);o.addEventListener(n,"pointerup",i,!1),o.addEventListener(n,"pointermove",(e=>{if(t.current){let n=function(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}(e);r(function(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}(n,t.current.getBoundingClientRect()))}}),!1),o.addEventListener(n,"pointercancel",i,!1)}}}));return{pressed:n,pressProps:e?{}:{onPointerDown:a,onPointerUp:i,onClick:i}}}let Js=ae(void 0);function Qs(){return Pe(Js)}function el(...e){return Array.from(new Set(e.flatMap((e=>"string"==typeof e?e.split(" "):[])))).filter(Boolean).join(" ")}function tl(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,tl),r}var nl,rl,ol=((rl=ol||{})[rl.None=0]="None",rl[rl.RenderStrategy=1]="RenderStrategy",rl[rl.Static=2]="Static",rl),il=((nl=il||{})[nl.Unmount=0]="Unmount",nl[nl.Hidden=1]="Hidden",nl);function al(){let e=function(){let e=Te([]),t=Ie((t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)}),[]);return(...n)=>{if(!n.every((e=>null==e)))return e.current=n,t}}();return Ie((t=>function({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:a,mergeRefs:c}){c=null!=c?c:ll;let d=cl(t,e);if(i)return sl(d,n,r,a,c);let p=null!=o?o:0;if(2&p){let e=d,{static:t=!1}=e,o=u(e,["static"]);if(t)return sl(o,n,r,a,c)}if(1&p){let e=d,{unmount:t=!0}=e,o=u(e,["unmount"]);return tl(t?0:1,{0:()=>null,1:()=>sl(l(s({},o),{hidden:!0,style:{display:"none"}}),n,r,a,c)})}return sl(d,n,r,a,c)}(s({mergeRefs:e},t))),[e])}function sl(e,t={},n,r,o){let i=fl(e,["unmount","static"]),{as:a=n,children:s,refName:l="ref"}=i,c=u(i,["as","children","refName"]),d=void 0!==e.ref?{[l]:e.ref}:{},p="function"==typeof s?s(t):s;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t)),c["aria-labelledby"]&&c["aria-labelledby"]===c.id&&(c["aria-labelledby"]=void 0);let f={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`)));if(e){f["data-headlessui-state"]=n.join(" ");for(let e of n)f[`data-${e}`]=""}}if(a===F&&(Object.keys(pl(c)).length>0||Object.keys(pl(f)).length>0)){if(Lt(p)&&!(Array.isArray(p)&&p.length>1)){let e=p.props,t=null==e?void 0:e.className,n="function"==typeof t?(...e)=>el(t(...e),c.className):el(t,c.className),r=n?{className:n}:{},i=cl(p.props,pl(fl(c,["ref"])));for(let o in f)o in i&&delete f[o];return Ft(p,Object.assign({},i,f,d,{ref:o(ml(p),d.ref)},r))}if(Object.keys(pl(c)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(pl(c)).concat(Object.keys(pl(f))).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"))}return L(a,Object.assign({},fl(c,["ref"]),a!==F&&d,a!==F&&f),p)}function ll(...e){return e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function cl(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])for(let r in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(n[r]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function ul(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];for(let r in n)Object.assign(t,{[r](...e){let t=n[r];for(let n of t)null==n||n(...e)}});return t}function dl(e){var t;return Object.assign(tt(e),{displayName:null!=(t=e.displayName)?t:e.name})}function pl(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function fl(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function ml(e){return Bt.version.split(".")[0]>="19"?e.props.ref:e.ref}let hl=dl((function(e,t){var n;let r=Qs(),o=e,{disabled:i=r||!1,autoFocus:a=!1}=o,s=u(o,["disabled","autoFocus"]),{isFocusVisible:l,focusProps:c}=$s({autoFocus:a}),{isHovered:d,hoverProps:p}=Ds({isDisabled:i}),{pressed:f,pressProps:m}=Xs({disabled:i}),h=ul({ref:t,type:null!=(n=s.type)?n:"button",disabled:i||void 0,autoFocus:a},c,p,m),g=Oe((()=>({disabled:i,hover:d,focus:l,active:f,autofocus:a})),[i,d,l,f,a]);return al()({ourProps:h,theirProps:s,slot:g,defaultTag:"button",name:"Button"})})),gl=ae(void 0);function vl(){return Pe(gl)}function wl(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let bl=Symbol();function yl(...e){let t=Te(e);Ce((()=>{t.current=e}),[e]);let n=Ys((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[bl])))?void 0:n}let _l=ae(null);function xl(){let e=Pe(_l);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,xl),e}return e}_l.displayName="DescriptionContext";let kl=dl((function(e,t){let n=Re(),r=Qs(),o=e,{id:i=`headlessui-description-${n}`}=o,a=u(o,["id"]),c=xl(),d=yl(t);Gs((()=>c.register(i)),[i,c.register]);let p=r||!1,f=Oe((()=>l(s({},c.slot),{disabled:p})),[c.slot,p]),m=l(s({ref:d},c.props),{id:i});return al()({ourProps:m,theirProps:a,slot:f,defaultTag:"p",name:c.name||"Description"})}));Object.assign(kl,{});var El,Cl=((El=Cl||{}).Space=" ",El.Enter="Enter",El.Escape="Escape",El.Backspace="Backspace",El.Delete="Delete",El.ArrowLeft="ArrowLeft",El.ArrowUp="ArrowUp",El.ArrowRight="ArrowRight",El.ArrowDown="ArrowDown",El.Home="Home",El.End="End",El.PageUp="PageUp",El.PageDown="PageDown",El.Tab="Tab",El);let Sl=ae(null);function Tl(){let e=Pe(Sl);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Tl),e}return e}function Al(e){var t,n;let r=null!=(n=null==(t=Pe(Sl))?void 0:t.value)?n:void 0;return(null!=void 0?undefined:0)>0?[r,...e].filter(Boolean).join(" "):r}function Ol({inherit:e=!1}={}){let t=Al(),[n,r]=ke([]),o=e?[t,...n].filter(Boolean):n;return[o.length>0?o.join(" "):void 0,Oe((()=>function(e){let t=Ys((e=>(r((t=>[...t,e])),()=>r((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),n=Oe((()=>({register:t,slot:e.slot,name:e.name,props:e.props,value:e.value})),[t,e.slot,e.name,e.props,e.value]);return Bt.createElement(Sl.Provider,{value:n},e.children)}),[r])]}Sl.displayName="LabelContext";let Il=dl((function(e,t){var n;let r=Re(),o=Tl(),i=vl(),a=Qs(),c=e,{id:d=`headlessui-label-${r}`,htmlFor:p=(null!=i?i:null==(n=o.props)?void 0:n.htmlFor),passive:f=!1}=c,m=u(c,["id","htmlFor","passive"]),h=yl(t);Gs((()=>o.register(d)),[d,o.register]);let g=Ys((e=>{let t=e.currentTarget;if(t instanceof HTMLLabelElement&&e.preventDefault(),o.props&&"onClick"in o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),t instanceof HTMLLabelElement){let e=document.getElementById(t.htmlFor);if(e){let t=e.getAttribute("disabled");if("true"===t||""===t)return;let n=e.getAttribute("aria-disabled");if("true"===n||""===n)return;(e instanceof HTMLInputElement&&("radio"===e.type||"checkbox"===e.type)||"radio"===e.role||"checkbox"===e.role||"switch"===e.role)&&e.click(),e.focus({preventScroll:!0})}}})),v=a||!1,w=Oe((()=>l(s({},o.slot),{disabled:v})),[o.slot,v]),b=l(s({ref:h},o.props),{id:d,htmlFor:p,onClick:g});return f&&("onClick"in b&&(delete b.htmlFor,delete b.onClick),"onClick"in m&&delete m.onClick),al()({ourProps:b,theirProps:m,slot:w,defaultTag:p?"label":"div",name:o.name||"Label"})}));function Pl(e,t=!1){let[n,r]=Ee((()=>({})),{}),o=Oe((()=>function(e){if(null===e)return{width:0,height:0};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}(e)),[e,n]);return Gs((()=>{if(!e)return;let t=new ResizeObserver(r);return t.observe(e),()=>{t.disconnect()}}),[e]),t?{width:`${o.width}px`,height:`${o.height}px`}:o}Object.assign(Il,{});let Nl=class extends Map{constructor(e){super(),this.factory=e}get(e){let t=super.get(e);return void 0===t&&(t=this.factory(e),this.set(e,t)),t}};function Rl(e,t){let n=e(),r=new Set;return{getSnapshot:()=>n,subscribe:e=>(r.add(e),()=>r.delete(e)),dispatch(e,...o){let i=t[e].call(n,...o);i&&(n=i,r.forEach((e=>e())))}}}function Ml(e){return Be(e.subscribe,e.getSnapshot,e.getSnapshot)}let Ll=new Nl((()=>Rl((()=>[]),{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(-1===t)return this;let n=this.slice();return n.splice(t,1),n}})));function zl(e,t){let n=Ll.get(t),r=Re(),o=Ml(n);if(Gs((()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)}),[n,e]),!e)return!1;let i=o.indexOf(r),a=o.length;return-1===i&&(i=a,a+=1),i===a-1}let jl=new Map,Fl=new Map;function Dl(e){var t;let n=null!=(t=Fl.get(e))?t:0;return Fl.set(e,n+1),0!==n||(jl.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),()=>$l(e)}function $l(e){var t;let n=null!=(t=Fl.get(e))?t:1;if(1===n?Fl.delete(e):Fl.set(e,n-1),1!==n)return;let r=jl.get(e);r&&(null===r["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,jl.delete(e))}let Hl=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(","),Zl=["[data-autofocus]"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var Ul,Vl,Bl,Wl=((Bl=Wl||{})[Bl.First=1]="First",Bl[Bl.Previous=2]="Previous",Bl[Bl.Next=4]="Next",Bl[Bl.Last=8]="Last",Bl[Bl.WrapAround=16]="WrapAround",Bl[Bl.NoScroll=32]="NoScroll",Bl[Bl.AutoFocus=64]="AutoFocus",Bl),ql=((Vl=ql||{})[Vl.Error=0]="Error",Vl[Vl.Overflow=1]="Overflow",Vl[Vl.Success=2]="Success",Vl[Vl.Underflow=3]="Underflow",Vl),Gl=((Ul=Gl||{})[Ul.Previous=-1]="Previous",Ul[Ul.Next=1]="Next",Ul);function Kl(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(Hl)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var Yl=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Yl||{});function Xl(e,t=0){var n;return e!==(null==(n=Vs(e))?void 0:n.body)&&tl(t,{0:()=>e.matches(Hl),1(){let t=e;for(;null!==t;){if(t.matches(Hl))return!0;t=t.parentElement}return!1}})}function Jl(e){let t=Vs(e);Ws().nextFrame((()=>{t&&!Xl(t.activeElement,0)&&function(e){null==e||e.focus({preventScroll:!0})}(e)}))}var Ql=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ql||{});"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let ec=["textarea","input"].join(",");function tc(e,t=e=>e){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function nc(e,t){return function(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?tc(e):e:64&t?function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(Zl)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}(e):Kl(e);o.length>0&&a.length>1&&(a=a.filter((e=>!o.some((t=>null!=t&&"current"in t?(null==t?void 0:t.current)===e:t===e))))),r=null!=r?r:i.activeElement;let s,l=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=32&t?{preventScroll:!0}:{},d=0,p=a.length;do{if(d>=p||d+p<=0)return 0;let e=c+d;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}s=a[e],null==s||s.focus(u),d+=l}while(s!==i.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,ec))&&n}(s)&&s.select(),2}(Kl(),t,{relativeTo:e})}function rc(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function oc(){return rc()||/Android/gi.test(window.navigator.userAgent)}function ic(e,t,n,r){let o=Ks(n);Ce((()=>{if(e)return document.addEventListener(t,n,r),()=>document.removeEventListener(t,n,r);function n(e){o.current(e)}}),[e,t,r])}function ac(e,t,n){let r=zl(e,"outside-click"),o=Ks(n),i=Ie((function(e,n){if(e.defaultPrevented)return;let r=n(e);if(null===r||!r.getRootNode().contains(r)||!r.isConnected)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(t);for(let t of i)if(null!==t&&(t.contains(r)||e.composed&&e.composedPath().includes(t)))return;return!Xl(r,Yl.Loose)&&-1!==r.tabIndex&&e.preventDefault(),o.current(e,r)}),[o,t]),a=Te(null);ic(r,"pointerdown",(e=>{var t,n;a.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target}),!0),ic(r,"mousedown",(e=>{var t,n;a.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target}),!0),ic(r,"click",(e=>{oc()||a.current&&(i(e,(()=>a.current)),a.current=null)}),!0);let s=Te({x:0,y:0});ic(r,"touchstart",(e=>{s.current.x=e.touches[0].clientX,s.current.y=e.touches[0].clientY}),!0),ic(r,"touchend",(e=>{let t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;if(!(Math.abs(t-s.current.x)>=30||Math.abs(n-s.current.y)>=30))return i(e,(()=>e.target instanceof HTMLElement?e.target:null))}),!0),function(e,t,n,r){let o=Ks(n);Ce((()=>{if(e)return window.addEventListener(t,n,r),()=>window.removeEventListener(t,n,r);function n(e){o.current(e)}}),[e,t,r])}(r,"blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}function sc(...e){return Oe((()=>Vs(...e)),[...e])}function lc(e,t){return Oe((()=>{var n;if(e.type)return e.type;let r=null!=(n=e.as)?n:"button";return"string"==typeof r&&"button"===r.toLowerCase()||"BUTTON"===(null==t?void 0:t.tagName)&&!t.hasAttribute("type")?"button":void 0}),[e.type,e.as,t])}function cc(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=null!=(n=t.defaultView)?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),i=Math.max(0,e-o);n.style(r,"paddingRight",`${i}px`)}}}function uc(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let dc=Rl((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:Ws(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:uc(n)},o=[rc()?{before({doc:t,d:n,meta:r}){function o(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.microTask((()=>{var r;if("auto"!==window.getComputedStyle(t.documentElement).scrollBehavior){let e=Ws();e.style(t.documentElement,"scrollBehavior","auto"),n.add((()=>n.microTask((()=>e.dispose()))))}let i=null!=(r=window.scrollY)?r:window.pageYOffset,a=null;n.addEventListener(t,"click",(n=>{if(n.target instanceof HTMLElement)try{let e=n.target.closest("a");if(!e)return;let{hash:r}=new URL(e.href),i=t.querySelector(r);i&&!o(i)&&(a=i)}catch(e){}}),!0),n.addEventListener(t,"touchstart",(e=>{if(e.target instanceof HTMLElement)if(o(e.target)){let t=e.target;for(;t.parentElement&&o(t.parentElement);)t=t.parentElement;n.style(t,"overscrollBehavior","contain")}else n.style(e.target,"touchAction","none")})),n.addEventListener(t,"touchmove",(e=>{if(e.target instanceof HTMLElement){if("INPUT"===e.target.tagName)return;if(o(e.target)){let t=e.target;for(;t.parentElement&&""!==t.dataset.headlessuiPortal&&!(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth);)t=t.parentElement;""===t.dataset.headlessuiPortal&&e.preventDefault()}else e.preventDefault()}}),{passive:!1}),n.add((()=>{var e;let t=null!=(e=window.scrollY)?e:window.pageYOffset;i!==t&&window.scrollTo(0,i),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)}))}))}}:{},cc(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];o.forEach((({before:e})=>null==e?void 0:e(r))),o.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function pc(e,t,n=()=>[document.body]){!function(e,t,n=()=>({containers:[]})){let r=Ml(dc),o=t?r.get(t):void 0,i=!!o&&o.count>0;Gs((()=>{if(t&&e)return dc.dispatch("PUSH",t,n),()=>dc.dispatch("POP",t,n)}),[e,t])}(zl(e,"scroll-lock"),t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}function fc(e){return[e.screenX,e.screenY]}var mc,hc;dc.subscribe((()=>{let e=dc.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&dc.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&dc.dispatch("TEARDOWN",n)}})),"undefined"!=typeof process&&"undefined"!=typeof globalThis&&"undefined"!=typeof Element&&"test"===(null==(mc=null==process?void 0:{VITE_APP_TITLE:"XMINDCLUB",VITE_APP_LOGO:"/static/logo3.png",VITE_DEV:"true",VITE_BASE_URL:"https://api.aichatus.com",VITE_UPLOAD_TYPE:"server",VITE_API_URL:"",VITE_DROP_DEBUGGER:"false",VITE_DROP_CONSOLE:"false",VITE_SOURCEMAP:"false",VITE_BASE_PATH:"/",VITE_BUILD_VERSION:"1.3.6",VITE_APP_OSS_PATH:"https://pic2.candychat.link/",VITE_APP_OSS_PIC_PATH:"https://pic3.candychat.link/",VITE_MOBILE_BUILD_VERSION:"0.0.0",VITE_MOBILE_APP_TITLE:"Kaka AI Mobile",VITE_USER_NODE_ENV:"development"})?void 0:mc.NODE_ENV)&&void 0===(null==(hc=null==Element?void 0:Element.prototype)?void 0:hc.getAnimations)&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join("\n")),[]});var gc=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(gc||{});function vc(e,t,n,r){let[o,i]=ke(n),{hasFlag:a,addFlag:s,removeFlag:l}=function(e=0){let[t,n]=ke(e),r=Ie((e=>n(e)),[t]),o=Ie((e=>n((t=>t|e))),[t]),i=Ie((e=>(t&e)===e),[t]),a=Ie((e=>n((t=>t&~e))),[n]),s=Ie((e=>n((t=>t^e))),[n]);return{flags:t,setFlag:r,addFlag:o,hasFlag:i,removeFlag:a,toggleFlag:s}}(e&&o?3:0),c=Te(!1),u=Te(!1),d=qs();return Gs((()=>{if(e)return n&&i(!0),t?(null==void 0||undefined.call(r,n),function(e,{prepare:t,run:n,done:r,inFlight:o}){let i=Ws();return function(e,{inFlight:t,prepare:n}){if(null!=t&&t.current)return void n();let r=e.style.transition;e.style.transition="none",n(),e.offsetHeight,e.style.transition=r}(e,{prepare:t,inFlight:o}),i.nextFrame((()=>{n(),i.requestAnimationFrame((()=>{i.add(function(e,t){var n,r;let o=Ws();if(!e)return o.dispose;let i=!1;o.add((()=>{i=!0}));let a=null!=(r=null==(n=e.getAnimations)?void 0:n.call(e).filter((e=>e instanceof CSSTransition)))?r:[];return 0===a.length?(t(),o.dispose):(Promise.allSettled(a.map((e=>e.finished))).then((()=>{i||t()})),o.dispose)}(e,r))}))})),i.dispose}(t,{inFlight:c,prepare(){u.current?u.current=!1:u.current=c.current,c.current=!0,!u.current&&(n?(s(3),l(4)):(s(4),l(2)))},run(){u.current?n?(l(3),s(4)):(l(4),s(3)):n?l(1):s(1)},done(){u.current&&"function"==typeof t.getAnimations&&t.getAnimations().length>0||(c.current=!1,l(7),n||i(!1),null==void 0||undefined.call(r,n))}})):void(n&&s(3))}),[e,n,t,d]),e?[o,{closed:a(1),enter:a(2),leave:a(4),transition:a(2)||a(4)}]:[n,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function wc(){return"undefined"!=typeof window}function bc(e){return xc(e)?(e.nodeName||"").toLowerCase():"#document"}function yc(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function _c(e){var t;return null==(t=(xc(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function xc(e){return!!wc()&&(e instanceof Node||e instanceof yc(e).Node)}function kc(e){return!!wc()&&(e instanceof Element||e instanceof yc(e).Element)}function Ec(e){return!!wc()&&(e instanceof HTMLElement||e instanceof yc(e).HTMLElement)}function Cc(e){return!(!wc()||"undefined"==typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof yc(e).ShadowRoot)}function Sc(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Nc(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Tc(e){return["table","td","th"].includes(bc(e))}function Ac(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(nl){return!1}}))}function Oc(e){const t=Ic(),n=kc(e)?Nc(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!n[e]&&"none"!==n[e]))||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Ic(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Pc(e){return["html","body","#document"].includes(bc(e))}function Nc(e){return yc(e).getComputedStyle(e)}function Rc(e){return kc(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Mc(e){if("html"===bc(e))return e;const t=
// Step into the shadow DOM of the parent of a slotted node.
e.assignedSlot||// DOM Element detected.
e.parentNode||// ShadowRoot detected.
Cc(e)&&e.host||// Fallback.
_c(e);return Cc(t)?t.host:t}function Lc(e){const t=Mc(e);return Pc(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ec(t)&&Sc(t)?t:Lc(t)}function zc(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=Lc(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=yc(o);if(i){const e=jc(a);return t.concat(a,a.visualViewport||[],Sc(o)?o:[],e&&n?zc(e):[])}return t.concat(o,zc(o,[],n))}function jc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}const Fc=Math.min,Dc=Math.max,$c=Math.round,Hc=Math.floor,Zc=e=>({x:e,y:e}),Uc={left:"right",right:"left",bottom:"top",top:"bottom"},Vc={start:"end",end:"start"};function Bc(e,t,n){return Dc(e,Fc(t,n))}function Wc(e,t){return"function"==typeof e?e(t):e}function qc(e){return e.split("-")[0]}function Gc(e){return e.split("-")[1]}function Kc(e){return"x"===e?"y":"x"}function Yc(e){return"y"===e?"height":"width"}function Xc(e){return["top","bottom"].includes(qc(e))?"y":"x"}function Jc(e){return Kc(Xc(e))}function Qc(e){return e.replace(/start|end/g,(e=>Vc[e]))}function eu(e){return e.replace(/left|right|bottom|top/g,(e=>Uc[e]))}function tu(e){return"number"!=typeof e?function(e){return s({top:0,right:0,bottom:0,left:0},e)}(e):{top:e,right:e,bottom:e,left:e}}function nu(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function ru(e,t,n){let{reference:r,floating:o}=e;const i=Xc(t),a=Jc(t),s=Yc(a),l=qc(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,p=r[s]/2-o[s]/2;let f;switch(l){case"top":f={x:u,y:r.y-o.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Gc(t)){case"start":f[a]-=p*(n&&c?-1:1);break;case"end":f[a]+=p*(n&&c?-1:1)}return f}function ou(e,t){return d(this,null,(function*(){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Wc(t,e),m=tu(f),h=s[p?"floating"===d?"reference":"floating":d],g=nu(yield i.getClippingRect({element:null==(n=yield null==i.isElement?void 0:i.isElement(h))||n?h:h.contextElement||(yield null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,w=yield null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating),b=(yield null==i.isElement?void 0:i.isElement(w))&&(yield null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},y=nu(i.convertOffsetParentRelativeRectToViewportRelativeRect?yield i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:v,offsetParent:w,strategy:l}):v);return{top:(g.top-y.top+m.top)/b.y,bottom:(y.bottom-g.bottom+m.bottom)/b.y,left:(g.left-y.left+m.left)/b.x,right:(y.right-g.right+m.right)/b.x}}))}function iu(e){const t=Nc(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Ec(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=$c(n)!==i||$c(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function au(e){return kc(e)?e:e.contextElement}function su(e){const t=au(e);if(!Ec(t))return Zc(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=iu(t);let a=(i?$c(n.width):n.width)/r,s=(i?$c(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const lu=Zc(0);function cu(e){const t=yc(e);return Ic()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:lu}function uu(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=au(e);let a=Zc(1);t&&(r?kc(r)&&(a=su(r)):a=su(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==yc(e))&&t}(i,n,r)?cu(i):Zc(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=yc(i),t=r&&kc(r)?yc(r):r;let n=e,o=jc(n);for(;o&&r&&t!==n;){const e=su(o),t=o.getBoundingClientRect(),r=Nc(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=i,c+=a,n=yc(o),o=jc(n)}}return nu({width:u,height:d,x:l,y:c})}function du(e,t){const n=Rc(e).scrollLeft;return t?t.left+n:uu(_c(e)).left+n}function pu(e,t,n){void 0===n&&(n=!1);const r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:
// RTL <body> scrollbar.
du(e,r)),y:r.top+t.scrollTop}}function fu(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=yc(e),r=_c(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=Ic();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=_c(e),n=Rc(e),r=e.ownerDocument.body,o=Dc(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=Dc(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+du(e);const s=-n.scrollTop;return"rtl"===Nc(r).direction&&(a+=Dc(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(_c(e));else if(kc(t))r=function(e,t){const n=uu(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Ec(e)?su(e):Zc(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=cu(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return nu(r)}function mu(e,t){const n=Mc(e);return!(n===t||!kc(n)||Pc(n))&&("fixed"===Nc(n).position||mu(n,t))}function hu(e,t,n){const r=Ec(t),o=_c(t),i="fixed"===n,a=uu(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=Zc(0);function c(){l.x=du(o)}if(r||!r&&!i)if(("body"!==bc(t)||Sc(o))&&(s=Rc(t)),r){const e=uu(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&c();i&&!r&&o&&c();const u=!o||r||i?Zc(0):pu(o,s);return{x:a.left+s.scrollLeft-l.x-u.x,y:a.top+s.scrollTop-l.y-u.y,width:a.width,height:a.height}}function gu(e){return"static"===Nc(e).position}function vu(e,t){if(!Ec(e)||"fixed"===Nc(e).position)return null;if(t)return t(e);let n=e.offsetParent;return _c(e)===n&&(n=n.ownerDocument.body),n}function wu(e,t){const n=yc(e);if(Ac(e))return n;if(!Ec(e)){let t=Mc(e);for(;t&&!Pc(t);){if(kc(t)&&!gu(t))return t;t=Mc(t)}return n}let r=vu(e,t);for(;r&&Tc(r)&&gu(r);)r=vu(r,t);return r&&Pc(r)&&gu(r)&&!Oc(r)?n:r||function(e){let t=Mc(e);for(;Ec(t)&&!Pc(t);){if(Oc(t))return t;if(Ac(t))return null;t=Mc(t)}return null}(e)||n}const bu={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=_c(r),s=!!t&&Ac(t.floating);if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=Zc(1);const u=Zc(0),d=Ec(r);if((d||!d&&!i)&&(("body"!==bc(r)||Sc(a))&&(l=Rc(r)),Ec(r))){const e=uu(r);c=su(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}const p=!a||d||i?Zc(0):pu(a,l,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:n.y*c.y-l.scrollTop*c.y+u.y+p.y}},getDocumentElement:_c,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Ac(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=zc(e,[],!1).filter((e=>kc(e)&&"body"!==bc(e))),o=null;const i="fixed"===Nc(e).position;let a=i?Mc(e):e;for(;kc(a)&&!Pc(a);){const t=Nc(a),n=Oc(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Sc(a)&&!n&&mu(e,a))?r=r.filter((e=>e!==a)):o=t,a=Mc(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=fu(t,n,o);return e.top=Dc(r.top,e.top),e.right=Fc(r.right,e.right),e.bottom=Fc(r.bottom,e.bottom),e.left=Dc(r.left,e.left),e}),fu(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:wu,getElementRects:function(e){return d(this,null,(function*(){const t=this.getOffsetParent||wu,n=this.getDimensions,r=yield n(e.floating);return{reference:hu(e.reference,yield t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}}))},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=iu(e);return{width:t,height:n}},getScale:su,isElement:kc,isRTL:function(e){return"rtl"===Nc(e).direction}};function yu(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _u(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:c="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,d=au(e),p=o||i?[...d?zc(d):[],...zc(t)]:[];p.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const f=d&&c?function(e,t){let n,r=null;const o=_c(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(c,u){void 0===c&&(c=!1),void 0===u&&(u=1),i();const d=e.getBoundingClientRect(),{left:p,top:f,width:m,height:h}=d;if(c||t(),!m||!h)return;const g={rootMargin:-Hc(f)+"px "+-Hc(o.clientWidth-(p+m))+"px "+-Hc(o.clientHeight-(f+h))+"px "+-Hc(p)+"px",threshold:Dc(0,Fc(1,u))||1};let v=!0;function w(t){const r=t[0].intersectionRatio;if(r!==u){if(!v)return a();r?a(!1,r):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}1!==r||yu(d,e.getBoundingClientRect())||a(),v=!1}try{r=new IntersectionObserver(w,l(s({},g),{
// Handle <iframe>s
root:o.ownerDocument}))}catch(b){r=new IntersectionObserver(w,g)}r.observe(e)}(!0),i}(d,n):null;let m,h=-1,g=null;a&&(g=new ResizeObserver((e=>{let[r]=e;r&&r.target===d&&g&&(g.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=g)||e.observe(t)}))),n()})),d&&!u&&g.observe(d),g.observe(t));let v=u?uu(e):null;return u&&function t(){const r=uu(e);v&&!yu(v,r)&&n();v=r,m=requestAnimationFrame(t)}(),n(),()=>{var e;p.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==f||f(),null==(e=g)||e.disconnect(),g=null,u&&cancelAnimationFrame(m)}}const xu=ou,ku=function(e){return void 0===e&&(e=0),{name:"offset",options:e,fn(t){return d(this,null,(function*(){var n,r;const{x:o,y:i,placement:a,middlewareData:c}=t,u=yield function(e,t){return d(this,null,(function*(){const{placement:n,platform:r,elements:o}=e,i=yield null==r.isRTL?void 0:r.isRTL(o.floating),a=qc(n),s=Gc(n),l="y"===Xc(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=Wc(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&"number"==typeof m&&(f="end"===s?-1*m:m),l?{x:f*u,y:p*c}:{x:p*c,y:f*u}}))}(t,e);return a===(null==(n=c.offset)?void 0:n.placement)&&null!=(r=c.arrow)&&r.alignmentOffset?{}:{x:o+u.x,y:i+u.y,data:l(s({},u),{placement:a})}}))}}},Eu=function(e){return void 0===e&&(e={}),{name:"shift",options:e,fn(t){return d(this,null,(function*(){const{x:n,y:r,placement:o}=t,i=Wc(e,t),{mainAxis:a=!0,crossAxis:c=!1,limiter:d={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}}}=i,p=u(i,["mainAxis","crossAxis","limiter"]),f={x:n,y:r},m=yield ou(t,p),h=Xc(qc(o)),g=Kc(h);let v=f[g],w=f[h];if(a){const e="y"===g?"bottom":"right";v=Bc(v+m["y"===g?"top":"left"],v,v-m[e])}if(c){const e="y"===h?"bottom":"right";w=Bc(w+m["y"===h?"top":"left"],w,w-m[e])}const b=d.fn(l(s({},t),{[g]:v,[h]:w}));return l(s({},b),{data:{x:b.x-n,y:b.y-r,enabled:{[g]:a,[h]:c}}})}))}}},Cu=function(e){return void 0===e&&(e={}),{name:"flip",options:e,fn(t){return d(this,null,(function*(){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,d=Wc(e,t),{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0}=d,w=u(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const b=qc(o),y=Xc(s),_=qc(s)===s,x=yield null==l.isRTL?void 0:l.isRTL(c.floating),k=m||(_||!v?[eu(s)]:function(e){const t=eu(e);return[Qc(e),t,Qc(t)]}(s)),E="none"!==g;!m&&E&&k.push(...function(e,t,n,r){const o=Gc(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(qc(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(Qc)))),i}(s,v,g,x));const C=[s,...k],S=yield ou(t,w),T=[];let A=(null==(r=i.flip)?void 0:r.overflows)||[];if(p&&T.push(S[b]),f){const e=function(e,t,n){void 0===n&&(n=!1);const r=Gc(e),o=Jc(e),i=Yc(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=eu(a)),[a,eu(a)]}(o,a,x);T.push(S[e[0]],S[e[1]])}if(A=[...A,{placement:o,overflows:T}],!T.every((e=>e<=0))){var O,I;const e=((null==(O=i.flip)?void 0:O.index)||0)+1,t=C[e];if(t){var P;const n="alignment"===f&&y!==Xc(t),r=(null==(P=A[0])?void 0:P.overflows[0])>0;if(!n||r)return{data:{index:e,overflows:A},reset:{placement:t}}}let n=null==(I=A.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:I.placement;if(!n)switch(h){case"bestFit":{var N;const e=null==(N=A.filter((e=>{if(E){const t=Xc(e.placement);return t===y||// Create a bias to the `y` side axis due to horizontal
// reading directions favoring greater width.
"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:N[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}))}}},Su=function(e){return void 0===e&&(e={}),{name:"size",options:e,fn(t){return d(this,null,(function*(){var n,r;const{placement:o,rects:i,platform:a,elements:c}=t,d=Wc(e,t),{apply:p=()=>{}}=d,f=u(d,["apply"]),m=yield ou(t,f),h=qc(o),g=Gc(o),v="y"===Xc(o),{width:w,height:b}=i.floating;let y,_;"top"===h||"bottom"===h?(y=h,_=g===((yield null==a.isRTL?void 0:a.isRTL(c.floating))?"start":"end")?"left":"right"):(_=h,y="end"===g?"top":"bottom");const x=b-m.top-m.bottom,k=w-m.left-m.right,E=Fc(b-m[y],x),C=Fc(w-m[_],k),S=!t.middlewareData.shift;let T=E,A=C;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(A=k),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(T=x),S&&!g){const e=Dc(m.left,0),t=Dc(m.right,0),n=Dc(m.top,0),r=Dc(m.bottom,0);v?A=w-2*(0!==e||0!==t?e+t:Dc(m.left,m.right)):T=b-2*(0!==n||0!==r?n+r:Dc(m.top,m.bottom))}yield p(l(s({},t),{availableWidth:A,availableHeight:T}));const O=yield a.getDimensions(c.floating);return w!==O.width||b!==O.height?{reset:{rects:!0}}:{}}))}}},Tu=(e,t,n)=>{const r=new Map,o=s({platform:bu},n),i=l(s({},o.platform),{_c:r});return((e,t,n)=>d(null,null,(function*(){const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,c=i.filter(Boolean),u=yield null==a.isRTL?void 0:a.isRTL(t);let d=yield a.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:f}=ru(d,r,u),m=r,h={},g=0;for(let n=0;n<c.length;n++){const{name:i,fn:v}=c[n],{x:w,y:b,data:y,reset:_}=yield v({x:p,y:f,initialPlacement:r,placement:m,strategy:o,middlewareData:h,rects:d,platform:a,elements:{reference:e,floating:t}});p=null!=w?w:p,f=null!=b?b:f,h=l(s({},h),{[i]:s(s({},h[i]),y)}),_&&g<=50&&(g++,"object"==typeof _&&(_.placement&&(m=_.placement),_.rects&&(d=!0===_.rects?yield a.getElementRects({reference:e,floating:t,strategy:o}):_.rects),({x:p,y:f}=ru(d,m,u))),n=-1)}return{x:p,y:f,placement:m,strategy:o,middlewareData:h}})))(e,t,l(s({},o),{platform:i}))};var Au="undefined"!=typeof document?Se:Ce;function Ou(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!==r--;)if(!Ou(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!==r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!==r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Ou(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Iu(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Pu(e,t){const n=Iu(e);return Math.round(t*n)/n}function Nu(e){const t=Te(e);return Au((()=>{t.current=e})),t}const Ru=(e,t)=>l(s({},ku(e)),{options:[e,t]}),Mu=(e,t)=>l(s({},Cu(e)),{options:[e,t]}),Lu=(e,t)=>l(s({},Su(e)),{options:[e,t]}),zu=s({},Wt),ju=zu.useInsertionEffect||(e=>e());function Fu(e){const t=Te((()=>{throw new Error("Cannot call an event handler while rendering.")}));return ju((()=>{t.current=e})),Ie((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}var Du="undefined"!=typeof document?Se:Ce;let $u=!1,Hu=0;const Zu=()=>
// Ensure the id is unique with multiple independent versions of Floating UI
// on <React 18
"floating-ui-"+Math.random().toString(36).slice(2,6)+Hu++;const Uu=zu.useId||function(){const[e,t]=ke((()=>$u?Zu():void 0));return Du((()=>{null==e&&t(Zu())}),[]),Ce((()=>{$u=!0}),[]),e};let Vu;Vu=new Set;const Bu=ae(null),Wu=ae(null),qu="data-floating-ui-focusable";function Gu(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Uu(),i=Te({}),[a]=ke((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),s=null!=((null==(l=Pe(Bu))?void 0:l.id)||null);var l;{const e=r.reference;e&&!kc(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Vu)&&e.has(o)||(null==(i=Vu)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=ke(r.reference),d=Fu(((e,t,r)=>{i.current.openEvent=e?t:void 0,a.emit("openchange",{open:e,event:t,reason:r,nested:s}),null==n||n(e,t,r)})),p=Oe((()=>({setPositionReference:u})),[]),f=Oe((()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference})),[c,r.reference,r.floating]);return Oe((()=>({dataRef:i,open:t,onOpenChange:d,elements:f,events:a,floatingId:o,refs:p})),[t,d,f,a,o,p])}function Ku(e){void 0===e&&(e={});const{nodeId:t}=e,n=Gu(l(s({},e),{elements:s({reference:null,floating:null},e.elements)})),r=e.rootContext||n,o=r.elements,[i,a]=ke(null),[c,u]=ke(null),d=(null==o?void 0:o.domReference)||i,p=Te(null),f=Pe(Wu);Du((()=>{d&&(p.current=d)}),[d]);const m=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:c=!0,whileElementsMounted:u,open:d}=e,[p,f]=ke({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,h]=ke(r);Ou(m,r)||h(r);const[g,v]=ke(null),[w,b]=ke(null),y=Ie((e=>{e!==E.current&&(E.current=e,v(e))}),[]),_=Ie((e=>{e!==C.current&&(C.current=e,b(e))}),[]),x=i||g,k=a||w,E=Te(null),C=Te(null),S=Te(p),T=null!=u,A=Nu(u),O=Nu(o),I=Nu(d),P=Ie((()=>{if(!E.current||!C.current)return;const e={placement:t,strategy:n,middleware:m};O.current&&(e.platform=O.current),Tu(E.current,C.current,e).then((e=>{const t=l(s({},e),{
// The floating element's position may be recomputed while it's closed
// but still mounted (such as when transitioning out). To ensure
// `isPositioned` will be `false` initially on the next open, avoid
// setting it to `true` when `open === false` (must be specified).
isPositioned:!1!==I.current});N.current&&!Ou(S.current,t)&&(S.current=t,Zt((()=>{f(t)})))}))}),[m,t,n,O,I]);Au((()=>{!1===d&&S.current.isPositioned&&(S.current.isPositioned=!1,f((e=>l(s({},e),{isPositioned:!1}))))}),[d]);const N=Te(!1);Au((()=>(N.current=!0,()=>{N.current=!1})),[]),Au((()=>{if(x&&(E.current=x),k&&(C.current=k),x&&k){if(A.current)return A.current(x,k,P);P()}}),[x,k,P,A,T]);const R=Oe((()=>({reference:E,floating:C,setReference:y,setFloating:_})),[y,_]),M=Oe((()=>({reference:x,floating:k})),[x,k]),L=Oe((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Pu(M.floating,p.x),r=Pu(M.floating,p.y);return c?s(l(s({},e),{transform:"translate("+t+"px, "+r+"px)"}),Iu(M.floating)>=1.5&&{willChange:"transform"}):{position:n,left:t,top:r}}),[n,c,M.floating,p.x,p.y]);return Oe((()=>l(s({},p),{update:P,refs:R,elements:M,floatingStyles:L})),[p,P,R,M,L])}(l(s({},e),{elements:s(s({},o),c&&{reference:c})})),h=Ie((e=>{const t=kc(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;u(t),m.refs.setReference(t)}),[m.refs]),g=Ie((e=>{(kc(e)||null===e)&&(p.current=e,a(e)),(kc(m.refs.reference.current)||null===m.refs.reference.current||// Don't allow setting virtual elements using the old technique back to
// `null` to support `positionReference` + an unstable `reference`
// callback ref.
null!==e&&!kc(e))&&m.refs.setReference(e)}),[m.refs]),v=Oe((()=>l(s({},m.refs),{setReference:g,setPositionReference:h,domReference:p})),[m.refs,g,h]),w=Oe((()=>l(s({},m.elements),{domReference:d})),[m.elements,d]),b=Oe((()=>l(s(s({},m),r),{refs:v,elements:w,nodeId:t})),[m,v,w,t,r]);return Du((()=>{r.dataRef.current.floatingContext=b;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=b)})),Oe((()=>l(s({},m),{context:b,refs:v,elements:w})),[m,v,w,b])}const Yu="active",Xu="selected";function Ju(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const t=e,{[Yu]:n,[Xu]:r}=t;i=u(t,[c(Yu),c(Xu)])}return s(s(s({},"floating"===n&&{tabIndex:-1,[qu]:""}),i),t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Yu,Xu].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{}))}function Qu(e,t){return l(s({},e),{rects:l(s({},e.rects),{floating:l(s({},e.rects.floating),{height:t})})})}const ed=e=>({name:"inner",options:e,fn(t){return d(this,null,(function*(){const n=Wc(e,t),{listRef:r,overflowRef:o,onFallbackChange:i,offset:a=0,index:c=0,minItemsVisible:d=4,referenceOverflowThreshold:p=0,scrollRef:f}=n,m=u(n,["listRef","overflowRef","onFallbackChange","offset","index","minItemsVisible","referenceOverflowThreshold","scrollRef"]),{rects:h,elements:{floating:g}}=t,v=r.current[c],w=(null==f?void 0:f.current)||g,b=g.clientTop||w.clientTop,y=0!==g.clientTop,_=0!==w.clientTop,x=g===w;if(t.placement.startsWith("bottom")||function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Vu)&&e.has(o)||(null==(i=Vu)||i.add(o),console.warn(o))}('`placement` side must be "bottom" when using the `inner`',"middleware."),!v)return{};const k=s(s({},t),yield Ru(-v.offsetTop-g.clientTop-h.reference.height/2-v.offsetHeight/2-a).fn(t)),E=yield xu(Qu(k,w.scrollHeight+b+g.clientTop),m),C=yield xu(k,l(s({},m),{elementContext:"reference"})),S=Dc(0,E.top),T=k.y+S,A=(w.scrollHeight>w.clientHeight?e=>e:$c)(Dc(0,w.scrollHeight+(y&&x||_?2*b:0)-S-Dc(0,E.bottom)));if(w.style.maxHeight=A+"px",w.scrollTop=S,i){const e=w.offsetHeight<v.offsetHeight*Fc(d,r.current.length)-1||C.top>=-p||C.bottom>=-p;Zt((()=>i(e)))}return o&&(o.current=yield xu(Qu(l(s({},k),{y:T}),w.offsetHeight+b+g.clientTop),m)),{y:T}}))}});function td(e,t){const{open:n,elements:r}=e,{enabled:o=!0,overflowRef:i,scrollRef:a,onChange:l}=t,c=Fu(l),u=Te(!1),d=Te(null),p=Te(null);Ce((()=>{if(!o)return;function e(e){if(e.ctrlKey||!t||null==i.current)return;const n=e.deltaY,r=i.current.top>=-.5,o=i.current.bottom>=-.5,a=t.scrollHeight-t.clientHeight,s=n<0?-1:1,l=n<0?"max":"min";t.scrollHeight<=t.clientHeight||(!r&&n>0||!o&&n<0?(e.preventDefault(),Zt((()=>{c((e=>e+Math[l](n,a*s)))}))):/firefox/i.test(function(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}())&&(t.scrollTop+=n))}const t=(null==a?void 0:a.current)||r.floating;return n&&t?(t.addEventListener("wheel",e),requestAnimationFrame((()=>{d.current=t.scrollTop,null!=i.current&&(p.current=s({},i.current))})),()=>{d.current=null,p.current=null,t.removeEventListener("wheel",e)}):void 0}),[o,n,r.floating,i,a,c]);const f=Oe((()=>({onKeyDown(){u.current=!0},onWheel(){u.current=!1},onPointerMove(){u.current=!1},onScroll(){const e=(null==a?void 0:a.current)||r.floating;if(i.current&&e&&u.current){if(null!==d.current){const t=e.scrollTop-d.current;(i.current.bottom<-.5&&t<-1||i.current.top<-.5&&t>1)&&Zt((()=>c((e=>e+t))))}requestAnimationFrame((()=>{d.current=e.scrollTop}))}}})),[r.floating,c,i,a]);return Oe((()=>o?{floating:f}:{}),[o,f])}let nd=ae({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});nd.displayName="FloatingContext";let rd=ae(null);rd.displayName="PlacementContext";function od({children:e,enabled:t=!0}){let[n,r]=ke(null),[o,i]=ke(0),a=Te(null),[c,u]=ke(null);!function(e){Gs((()=>{if(!e)return;let t=new MutationObserver((()=>{let t=window.getComputedStyle(e).maxHeight,n=parseFloat(t);if(isNaN(n))return;let r=parseInt(t);isNaN(r)||n!==r&&(e.style.maxHeight=`${Math.ceil(n)}px`)}));return t.observe(e,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}}),[e])}(c);let d=t&&null!==n&&null!==c,{to:p="bottom",gap:f=0,offset:m=0,padding:h=0,inner:g}=function(e,t){var n,r,o;let i=id(null!=(n=null==e?void 0:e.gap)?n:"var(--anchor-gap, 0)",t),a=id(null!=(r=null==e?void 0:e.offset)?r:"var(--anchor-offset, 0)",t),c=id(null!=(o=null==e?void 0:e.padding)?o:"var(--anchor-padding, 0)",t);return l(s({},e),{gap:i,offset:a,padding:c})}(n,c),[v,w="center"]=p.split(" ");Gs((()=>{d&&i(0)}),[d]);let{refs:b,floatingStyles:y,context:_}=Ku({open:d,placement:"selection"===v?"center"===w?"bottom":`bottom-${w}`:"center"===w?`${v}`:`${v}-${w}`,strategy:"absolute",transform:!1,middleware:[Ru({mainAxis:"selection"===v?0:f,crossAxis:m}),(E={padding:h},l(s({},Eu(E)),{options:[E,C]})),"selection"!==v&&Mu({padding:h}),"selection"===v&&g?ed(l(s({},g),{padding:h,overflowRef:a,offset:o,minItemsVisible:4,referenceOverflowThreshold:h,onFallbackChange(e){var t,n;if(!e)return;let r=_.elements.floating;if(!r)return;let o=parseFloat(getComputedStyle(r).scrollPaddingBottom)||0,a=Math.min(4,r.childElementCount),s=0,l=0;for(let i of null!=(n=null==(t=_.elements.floating)?void 0:t.childNodes)?n:[])if(i instanceof HTMLElement){let e=i.offsetTop,t=e+i.clientHeight+o,n=r.scrollTop,c=n+r.clientHeight;if(!(e>=n&&t<=c)){l=Math.max(0,Math.min(t,c)-Math.max(e,n)),s=i.clientHeight;break}a--}a>=1&&i((e=>{let t=s*a-l+o;return e>=t?e:t}))}})):null,Lu({padding:h,apply({availableWidth:e,availableHeight:t,elements:n}){Object.assign(n.floating.style,{overflow:"auto",maxWidth:`${e}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${t}px)`})}})].filter(Boolean),whileElementsMounted:_u}),[x=v,k=w]=_.placement.split("-");var E,C;"selection"===v&&(x="selection");let S=Oe((()=>({anchor:[x,k].filter(Boolean).join(" ")})),[x,k]),T=td(_,{overflowRef:a,onChange:i}),{getReferenceProps:A,getFloatingProps:O}=function(e){void 0===e&&(e=[]);const t=e.map((e=>null==e?void 0:e.reference)),n=e.map((e=>null==e?void 0:e.floating)),r=e.map((e=>null==e?void 0:e.item)),o=Ie((t=>Ju(t,e,"reference")
// eslint-disable-next-line react-hooks/exhaustive-deps
),t),i=Ie((t=>Ju(t,e,"floating")
// eslint-disable-next-line react-hooks/exhaustive-deps
),n),a=Ie((t=>Ju(t,e,"item")
// eslint-disable-next-line react-hooks/exhaustive-deps
),r);return Oe((()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a})),[o,i,a])}([T]),I=Ys((e=>{u(e),b.setFloating(e)}));return L(rd.Provider,{value:r},L(nd.Provider,{value:{setFloating:I,setReference:b.setReference,styles:y,getReferenceProps:A,getFloatingProps:O,slot:S}},e))}function id(e,t,n=void 0){let r=qs(),o=Ys(((e,t)=>{if(null==e)return[n,null];if("number"==typeof e)return[e,null];if("string"==typeof e){if(!t)return[n,null];let o=sd(e,t);return[o,n=>{let i=ad(e);{let a=i.map((e=>window.getComputedStyle(t).getPropertyValue(e)));r.requestAnimationFrame((function s(){r.nextFrame(s);let l=!1;for(let[e,n]of i.entries()){let r=window.getComputedStyle(t).getPropertyValue(n);if(a[e]!==r){a[e]=r,l=!0;break}}if(!l)return;let c=sd(e,t);o!==c&&(n(c),o=c)}))}return r.dispose}]}return[n,null]})),i=Oe((()=>o(e,t)[0]),[e,t]),[a=i,s]=ke();return Gs((()=>{let[n,r]=o(e,t);if(s(n),r)return r(s)}),[e,t]),a}function ad(e){let t=/var\((.*)\)/.exec(e);if(t){let e=t[1].indexOf(",");if(-1===e)return[t[1]];let n=t[1].slice(0,e).trim(),r=t[1].slice(e+1).trim();return r?[n,...ad(r)]:[n]}return[]}function sd(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}let ld=ae(null);ld.displayName="OpenClosedContext";var cd=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(cd||{});function ud({value:e,children:t}){return Bt.createElement(ld.Provider,{value:e},t)}var dd,pd,fd={exports:{}},md={};var hd,gd,vd,wd=(pd||(pd=1,fd.exports=(dd||(dd=1,function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var e=Wt,t="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=e.useSyncExternalStore,r=e.useRef,o=e.useEffect,i=e.useMemo,a=e.useDebugValue;md.useSyncExternalStoreWithSelector=function(e,s,l,c,u){var d=r(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;d=i((function(){function e(e){if(!o){if(o=!0,n=e,e=c(e),void 0!==u&&p.hasValue){var i=p.value;if(u(i,e))return r=i}return r=e}if(i=r,t(n,e))return i;var a=c(e);return void 0!==u&&u(i,a)?(n=e,i):(n=e,r=a)}var n,r,o=!1,i=void 0===l?null:l;return[function(){return e(s())},null===i?void 0:function(){return e(i())}]}),[s,l,c,u]);var f=n(e,d[0],d[1]);return o((function(){p.hasValue=!0,p.value=f}),[f]),a(f),f},"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()),md)),fd.exports),bd=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},yd=(e,t,n)=>(bd(e,t,"read from private field"),n?n.call(e):t.get(e)),_d=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},xd=(e,t,n,r)=>(bd(e,t,"write to private field"),t.set(e,n),n);class kd{constructor(e){_d(this,hd,{}),_d(this,gd,new Nl((()=>new Set))),_d(this,vd,new Set),xd(this,hd,e)}get state(){return yd(this,hd)}subscribe(e,t){let n={selector:e,callback:t,current:e(yd(this,hd))};return yd(this,vd).add(n),()=>{yd(this,vd).delete(n)}}on(e,t){return yd(this,gd).get(e).add(t),()=>{yd(this,gd).get(e).delete(t)}}send(e){xd(this,hd,this.reduce(yd(this,hd),e));for(let t of yd(this,vd)){let e=t.selector(yd(this,hd));Ed(t.current,e)||(t.current=e,t.callback(e))}for(let t of yd(this,gd).get(e.type))t(yd(this,hd),e)}}function Ed(e,t){return!!Object.is(e,t)||"object"==typeof e&&null!==e&&"object"==typeof t&&null!==t&&(Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&Cd(e[Symbol.iterator](),t[Symbol.iterator]()):e instanceof Map&&t instanceof Map||e instanceof Set&&t instanceof Set?e.size===t.size&&Cd(e.entries(),t.entries()):!(!Sd(e)||!Sd(t))&&Cd(Object.entries(e)[Symbol.iterator](),Object.entries(t)[Symbol.iterator]()))}function Cd(e,t){for(;;){let n=e.next(),r=t.next();if(n.done&&r.done)return!0;if(n.done||r.done||!Object.is(n.value,r.value))return!1}}function Sd(e){if("[object Object]"!==Object.prototype.toString.call(e))return!1;let t=Object.getPrototypeOf(e);return null===t||null===Object.getPrototypeOf(t)}function Td(e){let[t,n]=e(),r=Ws();return(...e)=>{t(...e),r.dispose(),r.microTask(n)}}function Ad(e,t,n=Ed){return wd.useSyncExternalStoreWithSelector(Ys((t=>e.subscribe(Od,t))),Ys((()=>e.state)),Ys((()=>e.state)),Ys(t),n)}function Od(e){return e}hd=new WeakMap,gd=new WeakMap,vd=new WeakMap;var Id,Pd=((Id=Pd||{})[Id.First=0]="First",Id[Id.Previous=1]="Previous",Id[Id.Next=2]="Next",Id[Id.Last=3]="Last",Id[Id.Specific=4]="Specific",Id[Id.Nothing=5]="Nothing",Id);function Nd(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1;switch(e.focus){case 0:for(let e=0;e<n.length;++e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 1:-1===o&&(o=n.length);for(let e=o-1;e>=0;--e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 2:for(let e=o+1;e<n.length;++e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 3:for(let e=n.length-1;e>=0;--e)if(!t.resolveDisabled(n[e],e,n))return e;return r;case 4:for(let r=0;r<n.length;++r)if(t.resolveId(n[r],r,n)===e.id)return r;return r;case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}function Rd(){let e=function(){let e="undefined"==typeof document;return"useSyncExternalStore"in Wt&&Wt.useSyncExternalStore((()=>()=>{}),(()=>!1),(()=>!e))}(),[t,n]=ke(Us.isHandoffComplete);return t&&!1===Us.isHandoffComplete&&n(!1),Ce((()=>{!0!==t&&n(!0)}),[t]),Ce((()=>Us.handoff()),[]),!e&&t}let Md=ae(!1);function Ld(e){let t=Pe(Md),n=Pe(Dd),[r,o]=ke((()=>{var r,o;if(!t&&null!==n)return null!=(r=n.current)?r:null;if(Us.isServer)return null;let i=null==e?void 0:e.getElementById("stagewise-toolbar-portal-root");if(i)return i;if(null===e)return null;let a=e.createElement("div");return a.setAttribute("id","stagewise-toolbar-portal-root"),a.style.pointerEvents="auto",(null!=(o=e.querySelector("stagewise-companion-anchor"))?o:e.body).appendChild(a)}));return Ce((()=>{var t;if(null===r)return;const n=null!=(t=null==e?void 0:e.querySelector("stagewise-companion-anchor"))?t:null==e?void 0:e.body;null!=n&&n.contains(r)||null==n||n.appendChild(r)}),[r,e]),Ce((()=>{t||null!==n&&o(n.current)}),[n,o,t]),r}let zd=F,jd=dl((function(e,t){let n=e,{ownerDocument:r=null}=n,o=u(n,["ownerDocument"]),i=Te(null),a=yl(function(e,t=!0){return Object.assign(e,{[bl]:t})}((e=>{i.current=e})),t),s=sc(i),l=null!=r?r:s,c=Ld(l),[d]=ke((()=>{var e;return Us.isServer?null:null!=(e=null==l?void 0:l.createElement("div"))?e:null})),p=Pe($d),f=Rd();Gs((()=>{!c||!d||c.contains(d)||(d.setAttribute("data-headlessui-portal",""),c.appendChild(d))}),[c,d]),Gs((()=>{if(d&&p)return p.register(d)}),[p,d]),function(e){let t=Ys(e),n=Te(!1);Ce((()=>(n.current=!1,()=>{n.current=!0,Bs((()=>{n.current&&t()}))})),[t])}((()=>{var e;!c||!d||(d instanceof Node&&c.contains(d)&&c.removeChild(d),c.childNodes.length<=0&&(null==(e=c.parentElement)||e.removeChild(c)))}));let m=al();return f&&c&&d?ht(m({ourProps:{ref:a},theirProps:o,slot:{},defaultTag:zd,name:"Portal"}),d):null}));let Fd=F,Dd=ae(null);let $d=ae(null),Hd=dl((function(e,t){let n=yl(t),r=e,{enabled:o=!0,ownerDocument:i}=r,a=u(r,["enabled","ownerDocument"]),c=al();return o?Bt.createElement(jd,l(s({},a),{ownerDocument:i,ref:n})):c({ourProps:{ref:n},theirProps:a,slot:{},defaultTag:zd,name:"Portal"})})),Zd=dl((function(e,t){let n=e,{target:r}=n,o=u(n,["target"]),i={ref:yl(t)},a=al();return Bt.createElement(Dd.Provider,{value:r},a({ourProps:i,theirProps:o,defaultTag:Fd,name:"Popover.Group"}))})),Ud=Object.assign(Hd,{Group:Zd});let Vd=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Bd(e){var t,n;let r=null!=(t=e.innerText)?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let i=!1;for(let s of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))s.remove(),i=!0;let a=i?null!=(n=o.innerText)?n:"":r;return Vd.test(a)&&(a=a.replace(Vd,"")),a}function Wd(e){let t=Te(""),n=Te("");return Ys((()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(t.current===o)return n.current;let i=function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map((e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():Bd(t).trim()}return null})).filter(Boolean);if(e.length>0)return e.join(", ")}return Bd(e).trim()}(r).trim().toLowerCase();return t.current=o,n.current=i,i}))}var qd=Object.defineProperty,Gd=(e,t,n)=>(((e,t,n)=>{t in e?qd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n),Kd=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Kd||{}),Yd=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Yd||{}),Xd=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItems=5]="RegisterItems",e[e.UnregisterItems=6]="UnregisterItems",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetItemsElement=8]="SetItemsElement",e[e.SortItems=9]="SortItems",e))(Xd||{});function Jd(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=tc(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{items:r,activeItemIndex:o}}let Qd={1:e=>1===e.menuState?e:l(s({},e),{activeItemIndex:null,pendingFocus:{focus:Pd.Nothing},menuState:1}),0:(e,t)=>0===e.menuState?e:l(s({},e),{__demoMode:!1,pendingFocus:t.focus,menuState:0}),2:(e,t)=>{var n,r,o,i,a;if(1===e.menuState)return e;let c=l(s({},e),{searchQuery:"",activationTrigger:null!=(n=t.trigger)?n:1,__demoMode:!1});if(t.focus===Pd.Nothing)return l(s({},c),{activeItemIndex:null});if(t.focus===Pd.Specific)return l(s({},c),{activeItemIndex:e.items.findIndex((e=>e.id===t.id))});if(t.focus===Pd.Previous){let n=e.activeItemIndex;if(null!==n){let i=e.items[n].dataRef.current.domRef,a=Nd(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(null!==a){let t=e.items[a].dataRef.current.domRef;if((null==(r=i.current)?void 0:r.previousElementSibling)===t.current||null===(null==(o=t.current)?void 0:o.previousElementSibling))return l(s({},c),{activeItemIndex:a})}}}else if(t.focus===Pd.Next){let n=e.activeItemIndex;if(null!==n){let r=e.items[n].dataRef.current.domRef,o=Nd(t,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});if(null!==o){let t=e.items[o].dataRef.current.domRef;if((null==(i=r.current)?void 0:i.nextElementSibling)===t.current||null===(null==(a=t.current)?void 0:a.nextElementSibling))return l(s({},c),{activeItemIndex:o})}}}let u=Jd(e),d=Nd(t,{resolveItems:()=>u.items,resolveActiveIndex:()=>u.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return l(s(s({},c),u),{activeItemIndex:d})},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled})),i=o?e.items.indexOf(o):-1;return-1===i||i===e.activeItemIndex?l(s({},e),{searchQuery:r}):l(s({},e),{searchQuery:r,activeItemIndex:i,activationTrigger:1})},4:e=>""===e.searchQuery?e:l(s({},e),{searchQuery:"",searchActiveItemIndex:null}),5:(e,t)=>{let n=e.items.concat(t.items.map((e=>e))),r=e.activeItemIndex;return e.pendingFocus.focus!==Pd.Nothing&&(r=Nd(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled})),l(s({},e),{items:n,activeItemIndex:r,pendingFocus:{focus:Pd.Nothing},pendingShouldSort:!0})},6:(e,t)=>{let n=e.items,r=[],o=new Set(t.items);for(let[i,a]of n.entries())if(o.has(a.id)&&(r.push(i),o.delete(a.id),0===o.size))break;if(r.length>0){n=n.slice();for(let e of r.reverse())n.splice(e,1)}return l(s({},e),{items:n,activationTrigger:1})},7:(e,t)=>e.buttonElement===t.element?e:l(s({},e),{buttonElement:t.element}),8:(e,t)=>e.itemsElement===t.element?e:l(s({},e),{itemsElement:t.element}),9:e=>e.pendingShouldSort?l(s(s({},e),Jd(e)),{pendingShouldSort:!1}):e};class ep extends kd{constructor(e){super(e),Gd(this,"actions",{registerItem:Td((()=>{let e=[],t=new Set;return[(n,r)=>{t.has(r)||(t.add(r),e.push({id:n,dataRef:r}))},()=>(t.clear(),this.send({type:5,items:e.splice(0)}))]})),unregisterItem:Td((()=>{let e=[];return[t=>e.push(t),()=>this.send({type:6,items:e.splice(0)})]}))}),Gd(this,"selectors",{activeDescendantId(e){var t;let n=e.activeItemIndex,r=e.items;return null===n||null==(t=r[n])?void 0:t.id},isActive(e,t){var n;let r=e.activeItemIndex,o=e.items;return null!==r&&(null==(n=o[r])?void 0:n.id)===t},shouldScrollIntoView(e,t){return!e.__demoMode&&0===e.menuState&&0!==e.activationTrigger&&this.isActive(e,t)}}),this.on(5,(()=>{requestAnimationFrame((()=>{this.send({type:9})}))}))}static new({__demoMode:e=!1}={}){return new ep({__demoMode:e,menuState:e?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:Pd.Nothing}})}reduce(e,t){return tl(t.type,Qd,e,t)}}const tp=ae(null);function np(e){let t=Pe(tp);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,rp),t}return t}function rp({__demoMode:e=!1}={}){return Oe((()=>ep.new({__demoMode:e})),[])}let op=F;let ip=ol.RenderStrategy|ol.Static;let ap=F;let sp=dl((function(e,t){let n=e,{__demoMode:r=!1}=n,o=u(n,["__demoMode"]),i=rp({__demoMode:r}),[a,s,l]=Ad(i,(e=>[e.menuState,e.itemsElement,e.buttonElement])),c=yl(t);ac(a===Kd.Open,[l,s],((e,t)=>{var n;i.send({type:Xd.CloseMenu}),Xl(t,Yl.Loose)||(e.preventDefault(),null==(n=i.state.buttonElement)||n.focus())}));let d=Ys((()=>{i.send({type:Xd.CloseMenu})})),p=Oe((()=>({open:a===Kd.Open,close:d})),[a,d]),f={ref:c},m=al();return Bt.createElement(od,null,Bt.createElement(tp.Provider,{value:i},Bt.createElement(ud,{value:tl(a,{[Kd.Open]:cd.Open,[Kd.Closed]:cd.Closed})},m({ourProps:f,theirProps:o,slot:p,defaultTag:op,name:"Menu"}))))})),lp=dl((function(e,t){let n=np("Menu.Button"),r=Re(),o=e,{id:i=`headlessui-menu-button-${r}`,disabled:a=!1,autoFocus:s=!1}=o,l=u(o,["id","disabled","autoFocus"]),c=Te(null),d=Pe(nd).getReferenceProps,p=yl(t,c,Pe(nd).setReference,Ys((e=>n.send({type:Xd.SetButtonElement,element:e})))),f=Ys((e=>{switch(e.key){case Cl.Space:case Cl.Enter:case Cl.ArrowDown:e.preventDefault(),e.stopPropagation(),n.send({type:Xd.OpenMenu,focus:{focus:Pd.First}});break;case Cl.ArrowUp:e.preventDefault(),e.stopPropagation(),n.send({type:Xd.OpenMenu,focus:{focus:Pd.Last}})}})),m=Ys((e=>{if(e.key===Cl.Space)e.preventDefault()})),[h,g]=Ad(n,(e=>[e.menuState,e.itemsElement])),v=Ys((e=>{var t;if(0===e.button){if(wl(e.currentTarget))return e.preventDefault();a||(h===Kd.Open?(Zt((()=>n.send({type:Xd.CloseMenu}))),null==(t=c.current)||t.focus({preventScroll:!0})):(e.preventDefault(),n.send({type:Xd.OpenMenu,focus:{focus:Pd.Nothing},trigger:Yd.Pointer})))}})),{isFocusVisible:w,focusProps:b}=$s({autoFocus:s}),{isHovered:y,hoverProps:_}=Ds({isDisabled:a}),{pressed:x,pressProps:k}=Xs({disabled:a}),E=Oe((()=>({open:h===Kd.Open,active:x||h===Kd.Open,disabled:a,hover:y,focus:w,autofocus:s})),[h,y,w,x,a,s]),C=ul(d(),{ref:p,id:i,type:lc(e,c.current),"aria-haspopup":"menu","aria-controls":null==g?void 0:g.id,"aria-expanded":h===Kd.Open,disabled:a||void 0,autoFocus:s,onKeyDown:f,onKeyUp:m,onMouseDown:v},b,_,k);return al()({ourProps:C,theirProps:l,slot:E,defaultTag:"button",name:"Menu.Button"})})),cp=dl((function(e,t){let n=Re(),r=e,{id:o=`headlessui-menu-items-${n}`,anchor:i,portal:a=!1,modal:c=!0,transition:d=!1}=r,p=u(r,["id","anchor","portal","modal","transition"]),f=function(e){return Oe((()=>e?"string"==typeof e?{to:e}:e:null),[e])}(i),m=np("Menu.Items"),[h,g]=function(e=null){!1===e&&(e=null),"string"==typeof e&&(e={to:e});let t=Pe(rd),n=Oe((()=>e),[JSON.stringify(e,((e,t)=>{var n;return null!=(n=null==t?void 0:t.outerHTML)?n:t}))]);Gs((()=>{null==t||t(null!=n?n:null)}),[t,n]);let r=Pe(nd);return Oe((()=>[r.setFloating,e?r.styles:{}]),[r.setFloating,e,r.styles])}(f),v=function(){let{getFloatingProps:e,slot:t}=Pe(nd);return Ie(((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor})),[e,t])}(),[w,b]=ke(null),y=yl(t,f?h:null,Ys((e=>m.send({type:Xd.SetItemsElement,element:e}))),b),[_,x]=Ad(m,(e=>[e.menuState,e.buttonElement])),k=sc(x),E=sc(w);f&&(a=!0);let C=Pe(ld),[S,T]=vc(d,w,null!==C?(C&cd.Open)===cd.Open:_===Kd.Open);!function(e,t,n){let r=Ks((e=>{let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&n()}));Ce((()=>{if(!e)return;let n=null===t?null:t instanceof HTMLElement?t:t.current;if(!n)return;let o=Ws();if("undefined"!=typeof ResizeObserver){let e=new ResizeObserver((()=>r.current(n)));e.observe(n),o.add((()=>e.disconnect()))}if("undefined"!=typeof IntersectionObserver){let e=new IntersectionObserver((()=>r.current(n)));e.observe(n),o.add((()=>e.disconnect()))}return()=>o.dispose()}),[t,r,e])}(S,x,(()=>{m.send({type:Xd.CloseMenu})}));let A=Ad(m,(e=>e.__demoMode));pc(!A&&(c&&_===Kd.Open),E),function(e,{allowed:t,disallowed:n}={}){let r=zl(e,"inert-others");Gs((()=>{var e,o;if(!r)return;let i=Ws();for(let t of null!=(e=null==n?void 0:n())?e:[])t&&i.add(Dl(t));let a=null!=(o=null==t?void 0:t())?o:[];for(let t of a){if(!t)continue;let e=Vs(t);if(!e)continue;let n=t.parentElement;for(;n&&n!==e.body;){for(let e of n.children)a.some((t=>e.contains(t)))||i.add(Dl(e));n=n.parentElement}}return i.dispose}),[r,t,n])}(!A&&(c&&_===Kd.Open),{allowed:Ie((()=>[x,w]),[x,w])});let O=!function(e,t){let n=Te({left:0,top:0});if(Gs((()=>{if(!t)return;let e=t.getBoundingClientRect();e&&(n.current=e)}),[e,t]),null==t||!e||t===document.activeElement)return!1;let r=t.getBoundingClientRect();return r.top!==n.current.top||r.left!==n.current.left}(_!==Kd.Open,x)&&S;Ce((()=>{let e=w;e&&_===Kd.Open&&e!==(null==E?void 0:E.activeElement)&&e.focus({preventScroll:!0})}),[_,w,E]),function(e,{container:t,accept:n,walk:r}){let o=Te(n),i=Te(r);Ce((()=>{o.current=n,i.current=r}),[n,r]),Gs((()=>{if(!t||!e)return;let n=Vs(t);if(!n)return;let r=o.current,a=i.current,s=Object.assign((e=>r(e)),{acceptNode:r}),l=n.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,s,!1);for(;l.nextNode();)a(l.currentNode)}),[t,e,o,i])}(_===Kd.Open,{container:w,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let I=qs(),P=Ys((e=>{var t,n,r;switch(I.dispose(),e.key){case Cl.Space:if(""!==m.state.searchQuery)return e.preventDefault(),e.stopPropagation(),m.send({type:Xd.Search,value:e.key});case Cl.Enter:if(e.preventDefault(),e.stopPropagation(),null!==m.state.activeItemIndex){let{dataRef:e}=m.state.items[m.state.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}m.send({type:Xd.CloseMenu}),Jl(m.state.buttonElement);break;case Cl.ArrowDown:return e.preventDefault(),e.stopPropagation(),m.send({type:Xd.GoToItem,focus:Pd.Next});case Cl.ArrowUp:return e.preventDefault(),e.stopPropagation(),m.send({type:Xd.GoToItem,focus:Pd.Previous});case Cl.Home:case Cl.PageUp:return e.preventDefault(),e.stopPropagation(),m.send({type:Xd.GoToItem,focus:Pd.First});case Cl.End:case Cl.PageDown:return e.preventDefault(),e.stopPropagation(),m.send({type:Xd.GoToItem,focus:Pd.Last});case Cl.Escape:e.preventDefault(),e.stopPropagation(),Zt((()=>m.send({type:Xd.CloseMenu}))),null==(r=m.state.buttonElement)||r.focus({preventScroll:!0});break;case Cl.Tab:e.preventDefault(),e.stopPropagation(),Zt((()=>m.send({type:Xd.CloseMenu}))),nc(m.state.buttonElement,e.shiftKey?Wl.Previous:Wl.Next);break;default:1===e.key.length&&(m.send({type:Xd.Search,value:e.key}),I.setTimeout((()=>m.send({type:Xd.ClearSearch})),350))}})),N=Ys((e=>{if(e.key===Cl.Space)e.preventDefault()})),R=Oe((()=>({open:_===Kd.Open})),[_]),M=ul(f?v():{},s({"aria-activedescendant":Ad(m,m.selectors.activeDescendantId),"aria-labelledby":Ad(m,(e=>{var t;return null==(t=e.buttonElement)?void 0:t.id})),id:o,onKeyDown:P,onKeyUp:N,role:"menu",tabIndex:_===Kd.Open?0:void 0,ref:y,style:l(s(s({},p.style),g),{"--button-width":Pl(x,!0).width})},function(e){let t={};for(let n in e)!0===e[n]&&(t[`data-${n}`]="");return t}(T))),L=al();return Bt.createElement(Ud,{enabled:!!a&&(e.static||S),ownerDocument:k},L({ourProps:M,theirProps:p,slot:R,defaultTag:"div",features:ip,visible:O,name:"Menu.Items"}))})),up=dl((function(e,t){let n=Re(),r=e,{id:o=`headlessui-menu-item-${n}`,disabled:i=!1}=r,a=u(r,["id","disabled"]),s=np("Menu.Item"),l=Ad(s,(e=>s.selectors.isActive(e,o))),c=Te(null),d=yl(t,c),p=Ad(s,(e=>s.selectors.shouldScrollIntoView(e,o)));Gs((()=>{if(p)return Ws().requestAnimationFrame((()=>{var e,t;null==(t=null==(e=c.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}))}),[p,c]);let f=Wd(c),m=Te({disabled:i,domRef:c,get textValue(){return f()}});Gs((()=>{m.current.disabled=i}),[m,i]),Gs((()=>(s.actions.registerItem(o,m),()=>s.actions.unregisterItem(o))),[m,o]);let h=Ys((()=>{s.send({type:Xd.CloseMenu})})),g=Ys((e=>{if(i)return e.preventDefault();s.send({type:Xd.CloseMenu}),Jl(s.state.buttonElement)})),v=Ys((()=>{if(i)return s.send({type:Xd.GoToItem,focus:Pd.Nothing});s.send({type:Xd.GoToItem,focus:Pd.Specific,id:o})})),w=function(){let e=Te([-1,-1]);return{wasMoved(t){let n=fc(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=fc(t)}}}(),b=Ys((e=>{w.update(e),!i&&(l||s.send({type:Xd.GoToItem,focus:Pd.Specific,id:o,trigger:Yd.Pointer}))})),y=Ys((e=>{w.wasMoved(e)&&(i||l||s.send({type:Xd.GoToItem,focus:Pd.Specific,id:o,trigger:Yd.Pointer}))})),_=Ys((e=>{w.wasMoved(e)&&(i||l&&s.send({type:Xd.GoToItem,focus:Pd.Nothing}))})),[x,k]=Ol(),[E,C]=function(){let[e,t]=ke([]);return[e.length>0?e.join(" "):void 0,Oe((()=>function(e){let n=Ys((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),r=Oe((()=>({register:n,slot:e.slot,name:e.name,props:e.props,value:e.value})),[n,e.slot,e.name,e.props,e.value]);return Bt.createElement(_l.Provider,{value:r},e.children)}),[t])]}(),S=Oe((()=>({active:l,focus:l,disabled:i,close:h})),[l,i,h]),T={id:o,ref:d,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,"aria-labelledby":x,"aria-describedby":E,disabled:void 0,onClick:g,onFocus:v,onPointerEnter:b,onMouseEnter:b,onPointerMove:y,onMouseMove:y,onPointerLeave:_,onMouseLeave:_},A=al();return Bt.createElement(k,null,Bt.createElement(C,null,A({ourProps:T,theirProps:a,slot:S,defaultTag:ap,name:"Menu.Item"})))})),dp=dl((function(e,t){let[n,r]=Ol(),o=e,i={ref:t,"aria-labelledby":n,role:"group"},a=al();return Bt.createElement(r,null,a({ourProps:i,theirProps:o,slot:{},defaultTag:"div",name:"Menu.Section"}))})),pp=dl((function(e,t){let n=Re(),r=e,{id:o=`headlessui-menu-heading-${n}`}=r,i=u(r,["id"]),a=Tl();Gs((()=>a.register(o)),[o,a.register]);let l=s({id:o,ref:t,role:"presentation"},a.props);return al()({ourProps:l,theirProps:i,slot:{},defaultTag:"header",name:"Menu.Heading"})})),fp=dl((function(e,t){let n=e,r={ref:t,role:"separator"};return al()({ourProps:r,theirProps:n,slot:{},defaultTag:"div",name:"Menu.Separator"})})),mp=Object.assign(sp,{Button:lp,Items:cp,Item:up,Section:dp,Heading:pp,Separator:fp});let hp=dl((function(e,t){let n=Re(),r=vl(),o=Qs(),i=e,{id:a=r||`headlessui-textarea-${n}`,disabled:s=o||!1,autoFocus:l=!1,invalid:c=!1}=i,d=u(i,["id","disabled","autoFocus","invalid"]),p=Al(),f=function(){var e,t;return null!=(t=null==(e=Pe(_l))?void 0:e.value)?t:void 0}(),{isFocused:m,focusProps:h}=$s({autoFocus:l}),{isHovered:g,hoverProps:v}=Ds({isDisabled:s}),w=ul({ref:t,id:a,"aria-labelledby":p,"aria-describedby":f,"aria-invalid":c?"true":void 0,disabled:s||void 0,autoFocus:l},h,v),b=Oe((()=>({disabled:s,invalid:c,hover:g,focus:m,autofocus:l})),[s,c,g,m,l]);return al()({ourProps:w,theirProps:d,slot:b,defaultTag:"textarea",name:"Textarea"})}));
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,((e,t,n)=>n?n.toUpperCase():t.toLowerCase())))(e);return t.charAt(0).toUpperCase()+t.slice(1)},vp=(...e)=>e.filter(((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t)).join(" ").trim();
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var wp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=tt(((e,t)=>{var n=e,{color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:p}=n,f=u(n,["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"]);return L("svg",s(s(l(s({ref:t},wp),{width:o,height:o,stroke:r,strokeWidth:a?24*Number(i)/Number(o):i,className:vp("lucide",c)}),!d&&!(e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0})(f)&&{"aria-hidden":"true"}),f),[...p.map((([e,t])=>L(e,t))),...Array.isArray(d)?d:[d]])})),yp=(e,t)=>{const n=tt(((n,r)=>{var o,i=n,{className:a}=i,l=u(i,["className"]);return L(bp,s({ref:r,iconNode:t,className:vp(`lucide-${o=gp(e),o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a)},l))}));return n.displayName=gp(e),n},_p=yp("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),xp=yp("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),kp=yp("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),Ep=yp("minimize-2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Cp=yp("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),Sp=yp("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),Tp=yp("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Ap=Je((()=>{const{chatAreaState:e}=Li();return"hidden"===e?null:le(Op,{children:[
le(Ip,{}),"compact"===e&&le(Pp,{}),"expanded"===e&&le(Np,{})]})})),Op=Je((({children:e})=>le("div",{className:"h-auto w-full overflow-x-hidden",children:e}))),Ip=Je((()=>{const{chatAreaState:e,setChatAreaState:t,stopPromptCreation:n}=Li(),r=Ie((()=>{t("compact"===e?"expanded":"compact")}),[e,t]),o=Ie((()=>{n(),t("hidden")}),[t,n]);
return le("div",{className:"flex w-full flex-row items-center justify-center rounded-t-3xl px-3 py-1",children:[
le(hl,{className:"size-5 bg-transparent text-muted-foreground/30 transition-colors duration-100 hover:text-muted-foreground",onClick:r,children:le("compact"===e?xp:_p,{className:"size-5"})}),
le(hl,{className:"absolute right-2 flex h-fit w-fit flex-row items-center gap-1 bg-transparent p-1 text-xs text-zinc-950 opacity-50 transition-all duration-100 hover:opacity-100",onClick:o,children:["Close menu",
le("div",{className:"rounded-md bg-zinc-600 px-0.5 py-0 text-xs text-zinc-50",children:"esc"})]})]})})),Pp=Je((()=>le("div",{className:"flex w-full flex-col gap-1 p-3",children:le("span",{className:"text-sm text-zinc-950/50",children:"This is the compact chat area... Showing just the last response from the assistant."})}))),Np=Je((()=>{const{chats:e,currentChatId:t,setCurrentChat:n,createChat:r}=Li(),o=e.find((e=>e.id===t)),i=e.some((e=>"new_chat"===e.id)),a=Ie((()=>{r()}),[r]),s=Ie((e=>{n(e)}),[n]);
return le("div",{className:"flex max-h-[50vh] w-full flex-col gap-3 p-3 pb-0",children:[
le("div",{className:"flex flex-1 flex-col gap-2 overflow-y-auto p-1",children:null==o?void 0:o.messages.map((e=>le("div",{className:"flex "+("assistant"===e.sender?"justify-start":"justify-end"),children:le("div",{className:"max-w-[80%] rounded-xl px-2 py-1 text-sm "+("assistant"===e.sender?"bg-zinc-950/5 text-zinc-950":"bg-blue-600 text-white"),children:e.content})},e.id)))}),
le("div",{className:"flex flex-row items-center justify-start gap-2 overflow-x-auto overflow-y-visible border-border/10 border-t pt-2 pb-2",children:[!i&&le(hl,{className:"h-6 flex-shrink-0 rounded-full bg-zinc-950/5 px-2 font-semibold text-foreground text-xs",onClick:a,children:le(Cp,{className:"size-3"})}),e.map((e=>le(hl,{className:rs("h-5 max-w-48 flex-shrink-0 overflow-hidden truncate rounded-full bg-zinc-950/5 px-2 text-muted-foreground text-xs",e.id===t&&"bg-white/60 text-zinc-950 shadow-blue-600/50 shadow-sm"),onClick:()=>s(e.id),children:e.title||"New chat"},e.id)))]})]})}));
/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rp,Mp="user-agent",Lp="",zp="function",jp="undefined",Fp="object",Dp="string",$p="browser",Hp="cpu",Zp="device",Up="engine",Vp="os",Bp="result",Wp="name",qp="type",Gp="vendor",Kp="version",Yp="architecture",Xp="major",Jp="model",Qp="console",ef="mobile",tf="tablet",nf="smarttv",rf="wearable",of="xr",af="embedded",sf="inapp",lf="brands",cf="formFactors",uf="fullVersionList",df="platform",pf="platformVersion",ff="bitness",mf="sec-ch-ua",hf=mf+"-full-version-list",gf=mf+"-arch",vf=mf+"-"+ff,wf=mf+"-form-factors",bf=mf+"-"+ef,yf=mf+"-"+Jp,_f=mf+"-"+df,xf=_f+"-version",kf=[lf,uf,ef,Jp,df,pf,Yp,cf,ff],Ef="Amazon",Cf="Apple",Sf="ASUS",Tf="BlackBerry",Af="Google",Of="Huawei",If="Lenovo",Pf="Honor",Nf="LG",Rf="Microsoft",Mf="Motorola",Lf="Nvidia",zf="OnePlus",jf="OPPO",Ff="Samsung",Df="Sharp",$f="Sony",Hf="Xiaomi",Zf="Zebra",Uf="Chrome",Vf="Chromium",Bf="Chromecast",Wf="Firefox",qf="Opera",Gf="Facebook",Kf="Sogou",Yf="Mobile ",Xf=" Browser",Jf="Windows",Qf=typeof window!==jp&&window.navigator?window.navigator:void 0,em=Qf&&Qf.userAgentData?Qf.userAgentData:void 0,tm=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},nm=function(e,t){if(typeof e===Fp&&e.length>0){for(var n in e)if(am(e[n])==am(t))return!0;return!1}return!!om(e)&&-1!==am(t).indexOf(am(e))},rm=function(e,t){for(var n in e)return/^(browser|cpu|device|engine|os)$/.test(n)||!!t&&rm(e[n])},om=function(e){return typeof e===Dp},im=function(e){if(e){for(var t=[],n=cm(/\\?\"/g,e).split(","),r=0;r<n.length;r++)if(n[r].indexOf(";")>-1){var o=dm(n[r]).split(";v=");t[r]={brand:o[0],version:o[1]}}else t[r]=dm(n[r]);return t}},am=function(e){return om(e)?e.toLowerCase():e},sm=function(e){return om(e)?cm(/[^\d\.]/g,e).split(".")[0]:void 0},lm=function(e){for(var t in e){var n=e[t];typeof n==Fp&&2==n.length?this[n[0]]=n[1]:this[n]=void 0}return this},cm=function(e,t){return om(t)?t.replace(e,Lp):t},um=function(e){return cm(/\\?\"/g,e)},dm=function(e,t){if(om(e))return e=cm(/^\s\s*/,e),typeof t===jp?e:e.substring(0,500)},pm=function(e,t){if(e&&t)for(var n,r,o,i,a,s,l=0;l<t.length&&!a;){var c=t[l],u=t[l+1];for(n=r=0;n<c.length&&!a&&c[n];)if(a=c[n++].exec(e))for(o=0;o<u.length;o++)s=a[++r],typeof(i=u[o])===Fp&&i.length>0?2===i.length?typeof i[1]==zp?this[i[0]]=i[1].call(this,s):this[i[0]]=i[1]:3===i.length?typeof i[1]!==zp||i[1].exec&&i[1].test?this[i[0]]=s?s.replace(i[1],i[2]):void 0:this[i[0]]=s?i[1].call(this,s,i[2]):void 0:4===i.length&&(this[i[0]]=s?i[3].call(this,s.replace(i[1],i[2])):void 0):this[i]=s||void 0;l+=2}},fm=function(e,t){for(var n in t)if(typeof t[n]===Fp&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(nm(t[n][r],e))return"?"===n?void 0:n}else if(nm(t[n],e))return"?"===n?void 0:n;return t.hasOwnProperty("*")?t["*"]:e},mm={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},hm={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},gm={browser:[[
// Most common regardless engine
/\b(?:crmo|crios)\/([\w\.]+)/i],[Kp,[Wp,Yf+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[Kp,[Wp,"Edge"]],[
// Presto based
/(opera mini)\/([-\w\.]+)/i,
// Opera Mini
/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
// Opera Mobi/Tablet
/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[Wp,Kp],[/opios[\/ ]+([\w\.]+)/i],[Kp,[Wp,qf+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[Kp,[Wp,qf+" GX"]],[/\bopr\/([\w\.]+)/i],[Kp,[Wp,qf]],[
// Mixed
/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[Kp,[Wp,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[Kp,[Wp,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,
// Kindle
/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
// Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
// Trident based
/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
// Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
/(?:ms|\()(ie) ([\w\.]+)/i,
// Internet Explorer
// Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
// Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,
// HeyTap/Ovi/115/Surf
/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[Wp,Kp],[/quark(?:pc)?\/([-\w\.]+)/i],[Kp,[Wp,"Quark"]],[/\bddg\/([\w\.]+)/i],[Kp,[Wp,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[Kp,[Wp,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,
// WeChat Desktop for Windows Built-in Browser
/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[Kp,[Wp,"WeChat"]],[/konqueror\/([\w\.]+)/i],[Kp,[Wp,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[Kp,[Wp,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[Kp,[Wp,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[Kp,[Wp,"Smart "+If+Xf]],[/(avast|avg)\/([\w\.]+)/i],[[Wp,/(.+)/,"$1 Secure"+Xf],Kp],[/\bfocus\/([\w\.]+)/i],[Kp,[Wp,Wf+" Focus"]],[/\bopt\/([\w\.]+)/i],[Kp,[Wp,qf+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[Kp,[Wp,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[Kp,[Wp,"Dolphin"]],[/coast\/([\w\.]+)/i],[Kp,[Wp,qf+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[Kp,[Wp,"MIUI"+Xf]],[/fxios\/([\w\.-]+)/i],[Kp,[Wp,Yf+Wf]],[/\bqihoobrowser\/?([\w\.]*)/i],[Kp,[Wp,"360"]],[/\b(qq)\/([\w\.]+)/i],[[Wp,/(.+)/,"$1Browser"],Kp],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[Wp,/(.+)/,"$1"+Xf],Kp],[
// Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
/samsungbrowser\/([\w\.]+)/i],[Kp,[Wp,Ff+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[Kp,[Wp,Kf+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[Wp,Kf+" Mobile"],Kp],[/(electron)\/([\w\.]+) safari/i,
// Electron-based App
/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
// Tesla
/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[Wp,Kp],[/(lbbrowser|rekonq)/i],[Wp],[/ome\/([\w\.]+) \w* ?(iron) saf/i,
// Iron
/ome\/([\w\.]+).+qihu (360)[es]e/i],[Kp,Wp],[
// WebView
/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[Wp,Gf],Kp,[qp,sf]],[/(Klarna)\/([\w\.]+)/i,
// Klarna Shopping Browser for iOS & Android
/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
// Kakao App
/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
// Naver InApp
/(daum)apps[\/ ]([\w\.]+)/i,
// Daum App
/safari (line)\/([\w\.]+)/i,
// Line App for iOS
/\b(line)\/([\w\.]+)\/iab/i,
// Line App for Android
/(alipay)client\/([\w\.]+)/i,
// Alipay
/(twitter)(?:and| f.+e\/([\w\.]+))/i,
// Twitter
/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[Wp,Kp,[qp,sf]],[/\bgsa\/([\w\.]+) .*safari\//i],[Kp,[Wp,"GSA"],[qp,sf]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[Kp,[Wp,"TikTok"],[qp,sf]],[/\[(linkedin)app\]/i],[Wp,[qp,sf]],[/(chromium)[\/ ]([-\w\.]+)/i],[Wp,Kp],[/headlesschrome(?:\/([\w\.]+)| )/i],[Kp,[Wp,Uf+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[Wp,Uf+" WebView"],Kp],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[Kp,[Wp,"Android"+Xf]],[/chrome\/([\w\.]+) mobile/i],[Kp,[Wp,Yf+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[Wp,Kp],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[Kp,[Wp,Yf+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[Wp,Yf+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[Kp,Wp],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[Wp,[Kp,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[Wp,Kp],[
// Gecko based
/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[Wp,Yf+Wf],Kp],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[Wp,"Netscape"],Kp],[/(wolvic|librewolf)\/([\w\.]+)/i],[Wp,Kp],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[Kp,[Wp,Wf+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,
// Flow
/(swiftfox)/i,
// Swiftfox
/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
// IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
// Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
/(firefox)\/([\w\.]+)/i,
// Other Firefox-based
/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
// Mozilla
// Other
/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
// Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
/\b(links) \(([\w\.]+)/i],[Wp,[Kp,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[Wp,[Kp,/[^\d\.]+./,Lp]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[Yp,"amd64"]],[/(ia32(?=;))/i,
// IA32 (quicktime)
/\b((i[346]|x)86)(pc)?\b/i],[[Yp,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[Yp,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[Yp,"armhf"]],[
// PocketPC mistakenly identified as PowerPC
/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[Yp,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[Yp,/ower/,Lp,am]],[/ sun4\w[;\)]/i],[[Yp,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[Yp,am]]],device:[[
//////////////////////////
// MOBILES & TABLETS
/////////////////////////
// Samsung
/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[Jp,[Gp,Ff],[qp,tf]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[Jp,[Gp,Ff],[qp,ef]],[
// Apple
/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[Jp,[Gp,Cf],[qp,ef]],[/\((ipad);[-\w\),; ]+apple/i,
// iPad
/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[Jp,[Gp,Cf],[qp,tf]],[/(macintosh);/i],[Jp,[Gp,Cf]],[
// Sharp
/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[Jp,[Gp,Df],[qp,ef]],[
// Honor
/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[Jp,[Gp,Pf],[qp,tf]],[/honor([-\w ]+)[;\)]/i],[Jp,[Gp,Pf],[qp,ef]],[
// Huawei
/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[Jp,[Gp,Of],[qp,tf]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[Jp,[Gp,Of],[qp,ef]],[
// Xiaomi
/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[Jp,/_/g," "],[Gp,Hf],[qp,tf]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
// Xiaomi POCO
/\b; (\w+) build\/hm\1/i,
// Xiaomi Hongmi 'numeric' models
/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
// Xiaomi Hongmi
/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
// Xiaomi Redmi
/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
// Xiaomi Redmi 'numeric' models
/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
// Xiaomi Mi
/ ([\w ]+) miui\/v?\d/i],[[Jp,/_/g," "],[Gp,Hf],[qp,ef]],[
// OPPO
/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[Jp,[Gp,jf],[qp,ef]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[Jp,[Gp,fm,{OnePlus:["304","403","203"],"*":jf}],[qp,tf]],[
// BLU Vivo Series
/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[Jp,[Gp,"BLU"],[qp,ef]],[
// Vivo
/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[Jp,[Gp,"Vivo"],[qp,ef]],[
// Realme
/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[Jp,[Gp,"Realme"],[qp,ef]],[
// Motorola
/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[Jp,[Gp,Mf],[qp,ef]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[Jp,[Gp,Mf],[qp,tf]],[
// LG
/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[Jp,[Gp,Nf],[qp,tf]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[Jp,[Gp,Nf],[qp,ef]],[
// Lenovo
/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[Jp,[Gp,If],[qp,tf]],[
// Nokia
/(nokia) (t[12][01])/i],[Gp,Jp,[qp,tf]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[Jp,/_/g," "],[qp,ef],[Gp,"Nokia"]],[
// Google
/(pixel (c|tablet))\b/i],[Jp,[Gp,Af],[qp,tf]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[Jp,[Gp,Af],[qp,ef]],[
// Sony
/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[Jp,[Gp,$f],[qp,ef]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[Jp,"Xperia Tablet"],[Gp,$f],[qp,tf]],[
// OnePlus
/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[Jp,[Gp,zf],[qp,ef]],[
// Amazon
/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
// Kindle Fire without Silk / Echo Show
/(kf[a-z]+)( bui|\)).+silk\//i],[Jp,[Gp,Ef],[qp,tf]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[Jp,/(.+)/g,"Fire Phone $1"],[Gp,Ef],[qp,ef]],[
// BlackBerry
/(playbook);[-\w\),; ]+(rim)/i],[Jp,Gp,[qp,tf]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[Jp,[Gp,Tf],[qp,ef]],[
// Asus
/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[Jp,[Gp,Sf],[qp,tf]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[Jp,[Gp,Sf],[qp,ef]],[
// HTC
/(nexus 9)/i],[Jp,[Gp,"HTC"],[qp,tf]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
// HTC
// ZTE
/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[Gp,[Jp,/_/g," "],[qp,ef]],[
// TCL
/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[Jp,[Gp,"TCL"],[qp,tf]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[Jp,[Gp,"TCL"],[qp,ef]],[
// itel
/(itel) ((\w+))/i],[[Gp,am],Jp,[qp,fm,{tablet:["p10001l","w7001"],"*":"mobile"}]],[
// Acer
/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[Jp,[Gp,"Acer"],[qp,tf]],[
// Meizu
/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[Jp,[Gp,"Meizu"],[qp,ef]],[
// Ulefone
/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[Jp,[Gp,"Ulefone"],[qp,ef]],[
// Energizer
/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[Jp,[Gp,"Energizer"],[qp,ef]],[
// Cat
/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[Jp,[Gp,"Cat"],[qp,ef]],[
// Smartfren
/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[Jp,[Gp,"Smartfren"],[qp,ef]],[
// Nothing
/droid.+; (a(?:015|06[35]|142p?))/i],[Jp,[Gp,"Nothing"],[qp,ef]],[
// Archos
/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[Jp,[Gp,"Archos"],[qp,tf]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[Jp,[Gp,"Archos"],[qp,ef]],[
// MIXED
/(imo) (tab \w+)/i,
// IMO
/(infinix) (x1101b?)/i],[Gp,Jp,[qp,tf]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
// BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
// BLU/HMD/IMO/TCL
/(hp) ([\w ]+\w)/i,
// HP iPAQ
/(microsoft); (lumia[\w ]+)/i,
// Microsoft Lumia
/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
// Lenovo
/(oppo) ?([\w ]+) bui/i],[Gp,Jp,[qp,ef]],[/(kobo)\s(ereader|touch)/i,
// Kobo
/(hp).+(touchpad(?!.+tablet)|tablet)/i,
// HP TouchPad
/(kindle)\/([\w\.]+)/i],[Gp,Jp,[qp,tf]],[/(surface duo)/i],[Jp,[Gp,Rf],[qp,tf]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[Jp,[Gp,"Fairphone"],[qp,ef]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[Jp,[Gp,Lf],[qp,tf]],[/(sprint) (\w+)/i],[Gp,Jp,[qp,ef]],[/(kin\.[onetw]{3})/i],[[Jp,/\./g," "],[Gp,Rf],[qp,ef]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[Jp,[Gp,Zf],[qp,tf]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[Jp,[Gp,Zf],[qp,ef]],[
///////////////////
// SMARTTVS
///////////////////
/smart-tv.+(samsung)/i],[Gp,[qp,nf]],[/hbbtv.+maple;(\d+)/i],[[Jp,/^/,"SmartTV"],[Gp,Ff],[qp,nf]],[/tcast.+(lg)e?. ([-\w]+)/i],[Gp,Jp,[qp,nf]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[Gp,Nf],[qp,nf]],[/(apple) ?tv/i],[Gp,[Jp,Cf+" TV"],[qp,nf]],[/crkey.*devicetype\/chromecast/i],[[Jp,Bf+" Third Generation"],[Gp,Af],[qp,nf]],[/crkey.*devicetype\/([^/]*)/i],[[Jp,/^/,"Chromecast "],[Gp,Af],[qp,nf]],[/fuchsia.*crkey/i],[[Jp,Bf+" Nest Hub"],[Gp,Af],[qp,nf]],[/crkey/i],[[Jp,Bf],[Gp,Af],[qp,nf]],[/(portaltv)/i],[Jp,[Gp,Gf],[qp,nf]],[/droid.+aft(\w+)( bui|\))/i],[Jp,[Gp,Ef],[qp,nf]],[/(shield \w+ tv)/i],[Jp,[Gp,Lf],[qp,nf]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[Jp,[Gp,Df],[qp,nf]],[/(bravia[\w ]+)( bui|\))/i],[Jp,[Gp,$f],[qp,nf]],[/(mi(tv|box)-?\w+) bui/i],[Jp,[Gp,Hf],[qp,nf]],[/Hbbtv.*(technisat) (.*);/i],[Gp,Jp,[qp,nf]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
// Roku
/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[Gp,dm],[Jp,dm],[qp,nf]],[
// SmartTV from Unidentified Vendors
/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[Jp,[qp,nf]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[qp,nf]],[
///////////////////
// CONSOLES
///////////////////
/(ouya)/i,
// Ouya
/(nintendo) (\w+)/i],[Gp,Jp,[qp,Qp]],[/droid.+; (shield)( bui|\))/i],[Jp,[Gp,Lf],[qp,Qp]],[/(playstation \w+)/i],[Jp,[Gp,$f],[qp,Qp]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[Jp,[Gp,Rf],[qp,Qp]],[
///////////////////
// WEARABLES
///////////////////
/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[Jp,[Gp,Ff],[qp,rf]],[/((pebble))app/i,
// Pebble
/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[Gp,Jp,[qp,rf]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[Jp,[Gp,jf],[qp,rf]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[Jp,[Gp,Cf],[qp,rf]],[/(opwwe\d{3})/i],[Jp,[Gp,zf],[qp,rf]],[/(moto 360)/i],[Jp,[Gp,Mf],[qp,rf]],[/(smartwatch 3)/i],[Jp,[Gp,$f],[qp,rf]],[/(g watch r)/i],[Jp,[Gp,Nf],[qp,rf]],[/droid.+; (wt63?0{2,3})\)/i],[Jp,[Gp,Zf],[qp,rf]],[
///////////////////
// XR
///////////////////
/droid.+; (glass) \d/i],[Jp,[Gp,Af],[qp,of]],[/(pico) (4|neo3(?: link|pro)?)/i],[Gp,Jp,[qp,of]],[/(quest( \d| pro)?s?).+vr/i],[Jp,[Gp,Gf],[qp,of]],[
///////////////////
// EMBEDDED
///////////////////
/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[Gp,[qp,af]],[/(aeobc)\b/i],[Jp,[Gp,Ef],[qp,af]],[/(homepod).+mac os/i],[Jp,[Gp,Cf],[qp,af]],[/windows iot/i],[[qp,af]],[
////////////////////
// MIXED (GENERIC)
///////////////////
/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[Jp,[qp,fm,{mobile:"Mobile",xr:"VR","*":tf}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[qp,tf]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[qp,ef]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[Jp,[Gp,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[Kp,[Wp,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[Wp,Kp],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[Kp,[Wp,"Blink"]],[/(presto)\/([\w\.]+)/i,
// Presto
/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
// WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
/ekioh(flow)\/([\w\.]+)/i,
// Flow
/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
// KHTML/Tasman/Links
/(icab)[\/ ]([23]\.[\d\.]+)/i,
// iCab
/\b(libweb)/i],[Wp,Kp],[/ladybird\//i],[[Wp,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[Kp,Wp]],os:[[
// Windows
/microsoft (windows) (vista|xp)/i],[Wp,Kp],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[Wp,[Kp,fm,mm]],[/windows nt 6\.2; (arm)/i,
// Windows RT
/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[Kp,fm,mm],[Wp,Jf]],[
// iOS/macOS
/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
// iOS
/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[Kp,/_/g,"."],[Wp,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[Wp,"macOS"],[Kp,/_/g,"."]],[
// Google Chromecast
/android ([\d\.]+).*crkey/i],[Kp,[Wp,Bf+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[Kp,[Wp,Bf+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[Kp,[Wp,Bf+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[Kp,[Wp,Bf+" Linux"]],[/crkey\/([\d\.]+)/i],[Kp,[Wp,Bf]],[
// Mobile OSes
/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[Kp,Wp],[/(ubuntu) ([\w\.]+) like android/i],[[Wp,/(.+)/,"$1 Touch"],Kp],[
// Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[Wp,Kp],[/\(bb(10);/i],[Kp,[Wp,Tf]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[Kp,[Wp,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[Kp,[Wp,Wf+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[Kp,[Wp,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[Kp,[Wp,"watchOS"]],[
// Google ChromeOS
/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[Wp,"Chrome OS"],Kp],[
// Smart TVs
/panasonic;(viera)/i,
// Panasonic Viera
/(netrange)mmh/i,
// Netrange
/(nettv)\/(\d+\.[\w\.]+)/i,
// NetTV
// Console
/(nintendo|playstation) (\w+)/i,
// Nintendo/Playstation
/(xbox); +xbox ([^\);]+)/i,
// Microsoft Xbox (360, One, X, S, Series X, Series S)
/(pico) .+os([\w\.]+)/i,
// Pico
// Other
/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
// Joli/Palm
/(mint)[\/\(\) ]?(\w*)/i,
// Mint
/(mageia|vectorlinux)[; ]/i,
// Mageia/VectorLinux
/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
// Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
// Hurd/Linux
/(gnu) ?([\w\.]*)/i,
// GNU
/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
// FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
/(haiku) (\w+)/i],[Wp,Kp],[/(sunos) ?([\w\.\d]*)/i],[[Wp,"Solaris"],Kp],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
// Solaris
/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
// AIX
/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
// BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
/(unix) ?([\w\.]*)/i],[Wp,Kp]]},vm=(lm.call((Rp={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}}).init,[[$p,[Wp,Kp,Xp,qp]],[Hp,[Yp]],[Zp,[qp,Jp,Gp]],[Up,[Wp,Kp]],[Vp,[Wp,Kp]]]),lm.call(Rp.isIgnore,[[$p,[Kp,Xp]],[Up,[Kp]],[Vp,[Kp]]]),lm.call(Rp.isIgnoreRgx,[[$p,/ ?browser$/i],[Vp,/ ?os$/i]]),lm.call(Rp.toString,[[$p,[Wp,Kp]],[Hp,[Yp]],[Zp,[Gp,Jp]],[Up,[Wp,Kp]],[Vp,[Wp,Kp]]]),Rp),wm=function(e,t){var n=vm.init[t],r=vm.isIgnore[t]||0,o=vm.isIgnoreRgx[t]||0,i=vm.toString[t]||0;function a(){lm.call(this,n)}return a.prototype.getItem=function(){return e},a.prototype.withClientHints=function(){return em?em.getHighEntropyValues(kf).then((function(t){return e.setCH(new bm(t,!1)).parseCH().get()})):e.parseCH().get()},a.prototype.withFeatureCheck=function(){return e.detectFeature().get()},t!=Bp&&(a.prototype.is=function(e){var t=!1;for(var n in this)if(this.hasOwnProperty(n)&&!nm(r,n)&&am(o?cm(o,this[n]):this[n])==am(o?cm(o,e):e)){if(t=!0,e!=jp)break}else if(e==jp&&t){t=!t;break}return t},a.prototype.toString=function(){var e=Lp;for(var t in i)typeof this[i[t]]!==jp&&(e+=(e?" ":Lp)+this[i[t]]);return e||jp}),em||(a.prototype.then=function(e){var t=this,n=function(){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])};n.prototype={is:a.prototype.is,toString:a.prototype.toString};var r=new n;return e(r),r}),new a};function bm(e,t){if(e=e||{},lm.call(this,kf),t)lm.call(this,[[lf,im(e[mf])],[uf,im(e[hf])],[ef,/\?1/.test(e[bf])],[Jp,um(e[yf])],[df,um(e[_f])],[pf,um(e[xf])],[Yp,um(e[gf])],[cf,im(e[wf])],[ff,um(e[vf])]]);else for(var n in e)this.hasOwnProperty(n)&&typeof e[n]!==jp&&(this[n]=e[n])}function ym(e,t,n,r){return this.get=function(e){return e?this.data.hasOwnProperty(e)?this.data[e]:void 0:this.data},this.set=function(e,t){return this.data[e]=t,this},this.setCH=function(e){return this.uaCH=e,this},this.detectFeature=function(){if(Qf&&Qf.userAgent==this.ua)switch(this.itemType){case $p:Qf.brave&&typeof Qf.brave.isBrave==zp&&this.set(Wp,"Brave");break;case Zp:!this.get(qp)&&em&&em[ef]&&this.set(qp,ef),"Macintosh"==this.get(Jp)&&Qf&&typeof Qf.standalone!==jp&&Qf.maxTouchPoints&&Qf.maxTouchPoints>2&&this.set(Jp,"iPad").set(qp,tf);break;case Vp:!this.get(Wp)&&em&&em[df]&&this.set(Wp,em[df]);break;case Bp:var e=this.data,t=function(t){return e[t].getItem().detectFeature().get()};this.set($p,t($p)).set(Hp,t(Hp)).set(Zp,t(Zp)).set(Up,t(Up)).set(Vp,t(Vp))}return this},this.parseUA=function(){return this.itemType!=Bp&&pm.call(this.data,this.ua,this.rgxMap),this.itemType==$p&&this.set(Xp,sm(this.get(Kp))),this},this.parseCH=function(){var e=this.uaCH,t=this.rgxMap;switch(this.itemType){case $p:case Up:var n,r=e[uf]||e[lf];if(r)for(var o in r){var i=r[o].brand||r[o],a=r[o].version;this.itemType!=$p||/not.a.brand/i.test(i)||n&&(!/chrom/i.test(n)||i==Vf)||(i=fm(i,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(Wp,i).set(Kp,a).set(Xp,sm(a)),n=i),this.itemType==Up&&i==Vf&&this.set(Kp,a)}break;case Hp:var s=e[Yp];s&&(s&&"64"==e[ff]&&(s+="64"),pm.call(this.data,s+";",t));break;case Zp:if(e[ef]&&this.set(qp,ef),e[Jp]&&(this.set(Jp,e[Jp]),!this.get(qp)||!this.get(Gp))){var l={};pm.call(l,"droid 9; "+e[Jp]+")",t),!this.get(qp)&&l.type&&this.set(qp,l.type),!this.get(Gp)&&l.vendor&&this.set(Gp,l.vendor)}if(e[cf]){var c;if("string"!=typeof e[cf])for(var u=0;!c&&u<e[cf].length;)c=fm(e[cf][u++],hm);else c=fm(e[cf],hm);this.set(qp,c)}break;case Vp:var d=e[df];if(d){var p=e[pf];d==Jf&&(p=parseInt(sm(p),10)>=13?"11":"10"),this.set(Wp,d).set(Kp,p)}this.get(Wp)==Jf&&"Xbox"==e[Jp]&&this.set(Wp,"Xbox").set(Kp,void 0);break;case Bp:var f=this.data,m=function(t){return f[t].getItem().setCH(e).parseCH().get()};this.set($p,m($p)).set(Hp,m(Hp)).set(Zp,m(Zp)).set(Up,m(Up)).set(Vp,m(Vp))}return this},lm.call(this,[["itemType",e],["ua",t],["uaCH",r],["rgxMap",n],["data",wm(this,e)]]),this}function _m(e,t,n){if(typeof e===Fp?(rm(e,!0)?(typeof t===Fp&&(n=t),t=e):(n=e,t=void 0),e=void 0):typeof e!==Dp||rm(t,!0)||(n=t,t=void 0),n&&typeof n.append===zp){var r={};n.forEach((function(e,t){r[t]=e})),n=r}if(!(this instanceof _m))return new _m(e,t,n).getResult();var o=typeof e===Dp?e:
// Passed user-agent string
n&&n[Mp]?n[Mp]:
// User-Agent from passed headers
Qf&&Qf.userAgent?Qf.userAgent:
// navigator.userAgent
Lp,i=new bm(n,!0),a=t?function(e,t){var n={},r=t;if(!rm(t))for(var o in r={},t)for(var i in t[o])r[i]=t[o][i].concat(r[i]?r[i]:[]);for(var a in e)n[a]=r[a]&&r[a].length%2==0?r[a].concat(e[a]):e[a];return n}(gm,t):gm,s=function(e){return e==Bp?function(){return new ym(e,o,a,i).set("ua",o).set($p,this.getBrowser()).set(Hp,this.getCPU()).set(Zp,this.getDevice()).set(Up,this.getEngine()).set(Vp,this.getOS()).get()}:function(){return new ym(e,o,a[e],i).parseUA().get()}};return lm.call(this,[["getBrowser",s($p)],["getCPU",s(Hp)],["getDevice",s(Zp)],["getEngine",s(Up)],["getOS",s(Vp)],["getResult",s(Bp)],["getUA",function(){return o}],["setUA",function(e){return om(e)&&(o=e.length>500?dm(e,500):e),this}]]).setUA(o),this}_m.VERSION="2.0.3",_m.BROWSER=tm([Wp,Kp,Xp,qp]),_m.CPU=tm([Yp]),_m.DEVICE=tm([Jp,Gp,qp,Qp,ef,nf,tf,rf,af]),_m.ENGINE=_m.OS=tm([Wp,Kp]);function xm(e){return Oe((()=>{{const e=(new _m).getResult();return{browser:e.browser,engine:e.engine,os:e.os,device:e.device,cpu:e.cpu}}}),[]).os.name.toLowerCase().includes("mac")?ts[e].keyComboMac:ts[e].keyComboDefault}function km(){const e=Li(),t=Oe((()=>e.chats.find((t=>t.id===e.currentChatId))),[e.chats,e.currentChatId]),n=Oe((()=>(null==t?void 0:t.inputValue)||""),[null==t?void 0:t.inputValue]),r=Oe((()=>n.split("\n").length>1||n.length>30),[n]),o=Ie((t=>{e.setChatInput(e.currentChatId,t)}),[e.setChatInput,e.currentChatId]),i=Ie((()=>{t&&n.trim()&&e.addMessage(t.id,n)}),[t,n,e.addMessage]),a=Ie((e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i())}),[i]),s=Te(null);Ce((()=>{var t,n,r;const o=()=>{var e;return null==(e=s.current)?void 0:e.focus()};return e.isPromptCreationActive?(null==(t=s.current)||t.focus(),null==(n=s.current)||n.addEventListener("blur",o)):null==(r=s.current)||r.blur(),()=>{var e;null==(e=s.current)||e.removeEventListener("blur",o)}}),[e.isPromptCreationActive]);const l=Oe((()=>rs("flex size-6 items-center justify-center rounded-full bg-transparent p-1 text-zinc-950 opacity-20",n.length>0&&"bg-blue-600 text-white opacity-100")),[n.length]),c=Oe((()=>rs("w-full flex-1 resize-none bg-transparent text-zinc-950 placeholder:text-zinc-950/50 focus:outline-none",r?"h-[4.5em]":"h-6")),[r]),u=xm(es.CTRL_ALT_C);
return le("div",{className:rs("flex h-fit w-80 flex-1 flex-row items-end gap-1 rounded-2xl border border-border/10 bg-zinc-950/5 p-1.5 pl-2 text-sm text-zinc-950 shadow-inner transition-all duration-150 placeholder:text-zinc-950/70",e.isPromptCreationActive&&"ring-2 ring-blue-600"),onClick:()=>e.startPromptCreation(),role:"button",tabIndex:0,children:[
le(hp,{ref:s,className:c,rows:r?4:1,value:n,onChange:e=>o(e.currentTarget.value),onKeyDown:a,placeholder:e.isPromptCreationActive?"Enter prompt...":`What do you want to change? (${u})`}),
le(hl,{className:l,disabled:0===n.length,onClick:i,children:le(Sp,{className:"size-3"})})]})}const Em=mp,Cm=tt(((e,t)=>le(lp,s({as:F,ref:t},e)))),Sm=tt(((e,t)=>le(cp,l(s({ref:t,anchor:"bottom",transition:!0,portal:!0},e),{className:rs("z-50 flex w-fit min-w-24 max-w-90 flex-col items-stretch justify-start gap-1 rounded-lg border border-border/30 border-solid bg-background/60 p-1 shadow-black/50 shadow-lg outline-none backdrop-blur-md data-focus:outline-none",e.className)})))),Tm="w-full flex flex-row select-none items-center justify-start gap-2 p-2 pr-6 truncate overflow-hidden rounded-md hover:bg-zinc-950/10 focus:text-zinc-900 cursor-pointer transition-color duration-150 text-sm font-normal text-foreground",Am=tt(((e,t)=>le(up,{ref:t,children:le(hl,l(s({},e),{className:rs(Tm,e.className)}))})));function Om(e){
return le("div",{className:"flex h-full shrink-0 items-center justify-center",children:[e.children,e.badgeContent&&le("div",{className:rs("bg-blue-600 text-white",e.badgeClassName,"-bottom-0.5 -right-1 pointer-events-none absolute flex h-4 w-max min-w-4 max-w-8 select-none items-center justify-center truncate rounded-full px-1 font-semibold text-xs"),children:e.badgeContent}),e.statusDot&&le("div",{className:rs("bg-rose-600",e.statusDotClassName,"pointer-events-none absolute top-0 right-0 size-1.5 rounded-full")})]})}tt(((e,t)=>le(up,{ref:t,children:le("a",l(s({},e),{className:rs(Tm,e.className)}))})));const Im=tt(((e,t)=>{var n=e,{badgeContent:r,badgeClassName:o,statusDot:i,statusDotClassName:a,tooltipHint:c,variant:d="default"}=n,p=u(n,["badgeContent","badgeClassName","statusDot","statusDotClassName","tooltipHint","variant"]);
return le(Om,{badgeContent:r,badgeClassName:o,statusDot:i,statusDotClassName:a,children:le(hl,l(s({ref:t},p),{className:rs("flex items-center justify-center rounded-full p-1 text-zinc-950 hover:bg-zinc-950/5","default"===d?"size-8":"h-8 rounded-full")}))})}));function Pm({children:e}){
return le("div",{className:"fade-in slide-in-from-bottom-2 flex max-h-full max-w-sm animate-in snap-start flex-row items-center justify-between gap-2 border-x border-r-border/30 border-l-transparent px-3 first:pl-0 last:border-r-transparent last:pr-0",children:e})}function Nm(){const e=Ii((e=>e.minimize)),t=Pe(He)||[],n=Oe((()=>t.flatMap((e=>e.actions))),[t]);
return le(Pm,{children:le(Em,{children:[
le(Cm,{children:le(Im,{children:le(kp,{className:"size-4"})})}),
le(Sm,{children:[n.map((e=>le(Am,{onClick:e.execute,children:e.name}))),
le(Am,{onClick:e,children:[
le(Ep,{className:"size-4"}),"Minimize companion"]})]})]})})}Im.displayName="ToolbarButton";const Rm=ae(null),Mm=({containerRef:e,children:t,snapAreas:n,onDragStart:r,onDragEnd:o})=>{const[i,a]=ke({top:0,left:0,right:0,bottom:0}),s=Te(new Set),l=Te(new Set),c={borderLocation:i,snapAreas:n,registerDragStart:Ie((e=>(s.current.add(e),()=>s.current.delete(e))),[]),registerDragEnd:Ie((e=>(l.current.add(e),()=>l.current.delete(e))),[]),emitDragStart:Ie((()=>{r&&r(),s.current.forEach((e=>e()))}),[r]),emitDragEnd:Ie((()=>{o&&o(),l.current.forEach((e=>e()))}),[o])};return Ce((()=>{if(!e.current)return;const t=()=>{const t=e.current.getBoundingClientRect();a({top:t.top,left:t.left,right:t.right,bottom:t.bottom})};t();const n=new ResizeObserver(t);n.observe(e.current);const r=()=>{requestAnimationFrame(t)};window.addEventListener("scroll",r,!0);let o=e.current.parentElement;for(;o;)o.addEventListener("scroll",r),o=o.parentElement;return()=>{var t;for(n.disconnect(),window.removeEventListener("scroll",r,!0),o=null==(t=e.current)?void 0:t.parentElement;o;)o.removeEventListener("scroll",r),o=o.parentElement}}),[e]),le(Rm.Provider,{value:c,children:t})};function Lm(){const e=Pe(Rm),t=null==e?void 0:e.borderLocation,n=!!t&&t.right-t.left>0&&t.bottom-t.top>0,r=function(e){const t=Pe(Rm),n=Te(t);Ce((()=>{n.current=t}),[t]);const r=Te(null),o=Te(null),[i,a]=ke(null),[l,c]=ke(null),u=Te(null),d=Te(null),p=Te(null),f=Te(!1),m=Te(e.initialRelativeCenter),[h,g]=ke(null),{startThreshold:v=3,areaSnapThreshold:w=60,onDragStart:
// px, default threshold for snapping
b,onDragEnd:y,initialSnapArea:_,springStiffness:x=.3,springDampness:
// Default spring stiffness
k=.5}=e,E=Te(null),C=Te({x:0,y:0}),S=Te(!1);function T(e){const{top:t,left:n,right:r,bottom:o}=e,i=r-n,a=o-t;return{topLeft:{x:n,y:t},topCenter:{x:n+i/2,y:t},topRight:{x:r,y:t},centerLeft:{x:n,y:t+a/2},center:{x:n+i/2,y:t+a/2},centerRight:{x:r,y:t+a/2},bottomLeft:{x:n,y:o},bottomCenter:{x:n+i/2,y:o},bottomRight:{x:r,y:o}}}Ce((()=>{if(_&&t&&t.borderLocation&&t.snapAreas&&t.snapAreas[_]&&!f.current){const{top:e,left:n,right:r,bottom:o}=t.borderLocation,i=r-n,a=o-e,s={topLeft:{x:n,y:e},topCenter:{x:n+i/2,y:e},topRight:{x:r,y:e},centerLeft:{x:n,y:e+a/2},center:{x:n+i/2,y:e+a/2},centerRight:{x:r,y:e+a/2},bottomLeft:{x:n,y:o},bottomCenter:{x:n+i/2,y:o},bottomRight:{x:r,y:o}}[_];if(s&&window.innerWidth>0&&window.innerHeight>0){const t=(s.x-n)/(r-n),i=(s.y-e)/(o-e);m.current={x:t,y:i}}}}),[_,t]);const A=Ie((()=>{var e,t;const o=r.current;if(!o)return;const i=o.offsetWidth,a=o.offsetHeight,l=o.offsetParent;let c=0,d=0,h=window.innerWidth,v=window.innerHeight;if(l){const e=l.getBoundingClientRect();c=e.left,d=e.top,h=l.offsetWidth||window.innerWidth,v=l.offsetHeight||window.innerHeight}let b=null,y=null;const _=m.current;let O=null,I=null;const P=n.current;if(f.current&&u.current&&p.current&&P&&P.borderLocation&&P.snapAreas){const e={x:p.current.x-u.current.x,y:p.current.y-u.current.y},t=T(P.borderLocation);let n=Number.POSITIVE_INFINITY,r=null,o=null;for(const i in P.snapAreas)if(P.snapAreas[i]){const a=t[i];if(!a)continue;const s=Math.hypot(a.x-e.x,a.y-e.y);s<n&&(n=s,r=i,o=a)}r&&o&&n<=w&&(O=r,I=o)}if(f.current&&I)b=I.x,y=I.y,g(O);else if(f.current&&u.current&&p.current)b=p.current.x-u.current.x,y=p.current.y-u.current.y,g(null);else{if(!(_&&h>0&&v>0))return void((null==(e=r.current)?void 0:e.style.left)||(null==(t=r.current)?void 0:t.style.top)||console.warn("useDraggable: Cannot determine position. Parent has no dimensions or initialRelativeCenter was not effectively set."));{const e=_.y<=.5;b=_.x<=.5?c+h*_.x:c+h-h*(1-_.x),y=e?d+v*_.y:d+v-v*(1-_.y)}g(null)}if(null===b||null===y)return;const{borderLocation:N}=n.current||{borderLocation:void 0};if(N&&i>0&&a>0){const e=N.right-N.left,t=N.bottom-N.top;let n=b,r=y;if(i>=e)n=N.left+e/2;else{const e=N.left+i/2,t=N.right-i/2;n=Math.max(e,Math.min(n,t))}if(a>=t)r=N.top+t/2;else{const e=N.top+a/2,t=N.bottom-a/2;r=Math.max(e,Math.min(r,t))}b=n,y=r}if(!E.current){E.current={x:b,y:y},C.current={x:0,y:0};const e=b-i/2,t=y-a/2,n=!_||_.y<=.5,r=!_||_.x<=.5,s=o.style;if(s.right="",s.bottom="",s.left="",s.top="",r){const t=e-c;s.left=h>0?`${(t/h*100).toFixed(2)}%`:"0px",s.right=""}else{const t=c+h-(e+i);s.right=h>0?`${(t/h*100).toFixed(2)}%`:"0px",s.left=""}if(n){const e=t-d;s.top=v>0?`${(e/v*100).toFixed(2)}%`:"0px",s.bottom=""}else{const e=d+v-(t+a);s.bottom=v>0?`${(e/v*100).toFixed(2)}%`:"0px",s.top=""}return void(S.current=!0)}if(!S.current)return void(S.current=!0);const R=E.current,M=C.current,L=b-R.x,z=y-R.y,j=x*L-k*M.x,F=x*z-k*M.y;M.x+=j,M.y+=F,R.x+=M.x,R.y+=M.y;const D=.5;Math.abs(L)<D&&Math.abs(z)<D&&Math.abs(M.x)<D&&Math.abs(M.y)<D&&(R.x=b,R.y=y,M.x=0,M.y=0),E.current=s({},R),C.current=s({},M);const $=R.x-i/2,H=R.y-a/2,Z=!_||_.y<=.5,U=!_||_.x<=.5,V=o.style;if(V.right="",V.bottom="",V.left="",V.top="",U){const e=$-c;V.left=h>0?`${(e/h*100).toFixed(2)}%`:"0px",V.right=""}else{const e=c+h-($+i);V.right=h>0?`${(e/h*100).toFixed(2)}%`:"0px",V.left=""}if(Z){const e=H-d;V.top=v>0?`${(e/v*100).toFixed(2)}%`:"0px",V.bottom=""}else{const e=d+v-(H+a);V.bottom=v>0?`${(e/v*100).toFixed(2)}%`:"0px",V.top=""}(Math.abs(R.x-b)>D||Math.abs(R.y-y)>D||Math.abs(M.x)>D||Math.abs(M.y)>D||f.current)&&requestAnimationFrame(A)}),[w,x,k]),O=Ie((e=>{var t;if(f.current){y&&y(),(null==(t=n.current)?void 0:t.emitDragEnd)&&n.current.emitDragEnd();const e=r.current,o=n.current;if(e&&o&&o.borderLocation){const t=e.offsetWidth,n=e.offsetHeight,r=e.offsetParent;let i=0,a=0,s=window.innerWidth,l=window.innerHeight;if(r){const e=r.getBoundingClientRect();i=e.left,a=e.top,s=r.offsetWidth||window.innerWidth,l=r.offsetHeight||window.innerHeight}let c=0,d=0;p.current&&u.current?(c=p.current.x-u.current.x,d=p.current.y-u.current.y):E.current&&(c=E.current.x,d=E.current.y);const f=o.borderLocation,h=f.left+t/2,v=f.right-t/2,b=f.top+n/2,y=f.bottom-n/2;c=Math.max(h,Math.min(c,v)),d=Math.max(b,Math.min(d,y));const _=T(f);let x=Number.POSITIVE_INFINITY,k=null,C=null;for(const e in o.snapAreas)if(o.snapAreas[e]){const t=_[e];if(!t)continue;const n=Math.hypot(t.x-c,t.y-d);n<x&&(x=n,k=e,C=t)}if(k&&C&&x<=w){g(k);const e=(C.x-i)/s,t=(C.y-a)/l;m.current={x:e,y:t}}else{g(null);const e=(c-i)/s,t=(d-a)/l;m.current={x:e,y:t}}}}d.current=null,f.current=!1,console.log("Stop moving"),window.removeEventListener("mousemove",I,{capture:!0}),window.removeEventListener("mouseup",O,{capture:!0}),r.current&&(r.current.style.userSelect=""),document.body.style.userSelect="",document.body.style.cursor=""}),[y,w]),I=Ie((e=>{var t;d.current&&(Math.hypot(e.clientX-d.current.x,e.clientY-d.current.y)>v&&!f.current&&(f.current=!0,r.current&&(r.current.style.userSelect="none"),document.body.style.userSelect="none",document.body.style.cursor="grabbing",b&&b(),(null==(t=n.current)?void 0:t.emitDragStart)&&n.current.emitDragStart(),requestAnimationFrame(A),console.log("Start dragging")),p.current={x:e.clientX,y:e.clientY})}),[v,b,A]),P=Ie((e=>{if(console.log("Mouse down on draggable/handle area"),0!==e.button)return;const t=o.current,n=r.current;if(t){if(!t.contains(e.target)&&e.target!==t)return void console.log("Mousedown was not on the handle element or its children. Current target:",e.target,"Expected handle:",t,"Ignoring drag start.")}else{if(!n)return void console.error("Draggable element or handle ref not set in mouseDownHandler");if(!n.contains(e.target)&&e.target!==n)return void console.log("Mousedown was not on the draggable item or its children (no handle specified). Current target:",e.target,"Expected draggable item:",n,"Ignoring drag start.")}if(console.log("Valid drag target. Proceeding with drag setup."),d.current={x:e.clientX,y:e.clientY},!r.current)return void console.error("Draggable element ref not set in mouseDownHandler");const i=r.current.getBoundingClientRect(),a=i.left+i.width/2,s=i.top+i.height/2;u.current={x:e.clientX-a,y:e.clientY-s},window.addEventListener("mousemove",I,{capture:!0}),window.addEventListener("mouseup",O,{capture:!0})}),[I,O]);return Ce((()=>{const e=l||i;return e&&e.addEventListener("mousedown",P),()=>{e&&e.removeEventListener("mousedown",P),f.current&&(y&&y(),f.current=!1,i&&(i.style.userSelect=""),document.body.style.userSelect="",document.body.style.cursor="",window.removeEventListener("mousemove",I,{capture:!0}),window.removeEventListener("mouseup",O,{capture:!0}))}}),[i,l,P,y,I,O]),Ce((()=>{i&&m.current&&!f.current&&requestAnimationFrame(A)}),[i,t,
// Triggers on container resize/scroll via DraggableProvider
m,
// Triggers if the persistedRelativeCenterRef changes
A]),{draggableRef:Ie((e=>{a(e),r.current=e}),[]),handleRef:Ie((e=>{c(e),o.current=e}),[]),position:{snapArea:h,isTopHalf:!m.current||m.current.y<=.5,isLeftHalf:!m.current||m.current.x<=.5}}}({startThreshold:10,initialSnapArea:"bottomCenter"});return n?le("div",{ref:r.draggableRef,className:"pointer-events-auto absolute p-0.5",children:le("div",{className:"pointer-events-auto flex w-96 max-w-[80vw] flex-col items-start justify-center rounded-3xl border border-border/30 border-solid bg-zinc-50/80 p-0 shadow-lg backdrop-blur-lg transition-colors",children:[
le(Ap,{}),
le("div",{ref:r.handleRef,className:"flex w-full flex-row items-center justify-center rounded-3xl border-border/30 border-t bg-background/40 p-1.5 shadow-lg transition-colors first:border-none",children:[
le(km,{}),
le(Nm,{})]})]})}):null}function zm(){const e=Te(null);
return le("div",{className:"absolute size-full",children:le("div",{className:"absolute inset-4",ref:e,children:le(Mm,{containerRef:e,snapAreas:{topLeft:!0,topCenter:!0,topRight:!0,centerLeft:!0,center:!0,centerRight:!0,bottomLeft:!0,bottomCenter:!0,bottomRight:!0},children:le(Lm,{})})})})}const jm=e=>{var t=e,{color:n="default",loading:r=!1,loadingSpeed:o="slow"}=t;const i={default:"fill-stagewise-700 stroke-none",black:"fill-zinc-950 stroke-none",white:"fill-white stroke-none",gray:"fill-zinc-500/50 stroke-none",current:"fill-current stroke-none",gradient:"fill-white stroke-black/30 stroke-1"};
return le("div",{className:`relative ${"gradient"===n?"overflow-hidden rounded-full":"overflow-visible"} ${u(t,["color","loading","loadingSpeed"]).className||""} ${r?"drop-shadow-xl":""} aspect-square`,children:["gradient"===n&&le("div",{className:"absolute inset-0",children:[
le("div",{className:"absolute inset-0 size-full bg-gradient-to-tr from-indigo-700 via-blue-500 to-teal-500"}),
le("div",{className:"absolute top-1/2 left-1/2 size-9/12 bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]"}),
le("div",{className:"absolute right-1/2 bottom-1/2 size-full bg-[radial-gradient(circle,rgba(219,39,119,0.2)_0%,rgba(219,39,119,0)_100%)]"}),
le("div",{className:"absolute top-0 left-[-10%] size-[120%] bg-[radial-gradient(circle,rgba(255,255,255,0)_60%,rgba(255,255,255,0.2)_70%)]"}),
le("div",{className:"absolute top-[-20%] left-0 h-[120%] w-full bg-[radial-gradient(circle,rgba(55,48,163,0)_55%,rgba(55,48,163,0.35)_73%)]"})]}),
le("svg",{className:"absolute overflow-visible "+("gradient"===n?"top-[25%] left-[25%] h-[50%] w-[50%] drop-shadow-indigo-950 drop-shadow-xs":"top-0 left-0 h-full w-full"),viewBox:"0 0 2048 2048",children:[
le("title",{children:"stagewise"}),
le("ellipse",{className:i[n]+(r?" animate-pulse":""),id:"path3",ry:"624",rx:"624",cy:"1024",cx:"1024"})]}),
le("svg",{className:"absolute overflow-visible "+("gradient"===n?"top-[25%] left-[25%] h-[50%] w-[50%]":"top-0 left-0 h-full w-full"),viewBox:"0 0 2048 2048",children:le("path",{id:"path4",className:`origin-center ${i[n]}${r?"fast"===o?" animate-spin-fast":" animate-spin-slow":""}`,d:"M 1024 0 A 1024 1024 0 0 0 0 1024 A 1024 1024 0 0 0 1024 2048 L 1736 2048 L 1848 2048 C 1958.7998 2048 2048 1958.7998 2048 1848 L 2048 1736 L 2048 1024 A 1024 1024 0 0 0 1024 0 z M 1024.9414 200 A 824 824 0 0 1 1848.9414 1024 A 824 824 0 0 1 1024.9414 1848 A 824 824 0 0 1 200.94141 1024 A 824 824 0 0 1 1024.9414 200 z "})})]})};function Fm(){const e=Ii((e=>e.expand));
return le("button",{type:"button",onClick:()=>e(),className:"pointer-events-auto absolute bottom-3 left-3 size-12 rounded-full bg-transparent opacity-80 shadow-sm transition-all duration-500 hover:opacity-100 hover:shadow-lg",children:le(jm,{color:"gradient"})})}function Dm(e){const t=Te(null);
return le("div",{className:"pointer-events-auto fixed inset-0 h-screen w-screen",onMouseMove:Ie((n=>{if(n.target.closest(".companion"))return;const r=(o=n.clientX,i=n.clientY,document.elementsFromPoint(o,i).find((e=>"STAGEWISE-COMPANION-ANCHOR"!==e.nodeName&&!e.closest(Ja)&&!e.closest("svg")&&Qa(e,o,i)))||document.body);var o,i;e.ignoreList.includes(r)||t.current!==r&&(t.current=r,e.onElementHovered(r))}),[e]),onMouseLeave:Ie((()=>{t.current=null,e.onElementUnhovered()}),[e]),onClick:Ie((()=>{t.current&&(e.ignoreList.includes(t.current)||e.onElementSelected(t.current))}),[e]),role:"button",tabIndex:0})}function $m(){const[e,t]=ke({width:window.innerWidth,height:window.innerHeight});return $i("resize",Ie((()=>t({width:window.innerWidth,height:window.innerHeight})),[])),e}function Hm(e){var t=e,{refElement:n}=t,r=u(t,["refElement"]);const o=Te(null),i=$m();return zi(Ie((()=>{if(o.current)if(n){const e=n.getBoundingClientRect();o.current.style.top=`${e.top}px`,o.current.style.left=`${e.left}px`,o.current.style.width=`${e.width}px`,o.current.style.height=`${e.height}px`,o.current.style.display=void 0}else o.current.style.height="0px",o.current.style.width="0px",o.current.style.top=i.height/2+"px",o.current.style.left=i.width/2+"px",o.current.style.display="none"}),[n,i.height,i.width]),30),le("div",l(s({},r),{className:"fixed flex items-center justify-center overflow-hidden rounded-lg border-2 border-blue-600/80 bg-blue-600/20 text-white backdrop-blur-xs transition-all duration-100",ref:o,children:le(Cp,{className:"size-6 drop-shadow-black drop-shadow-md"})}))}function Zm(e){var t=e,{refElement:n}=t,r=u(t,["refElement"]);const o=Te(null),i=$m();zi(Ie((()=>{if(o.current)if(n){const e=n.getBoundingClientRect();o.current.style.top=`${e.top}px`,o.current.style.left=`${e.left}px`,o.current.style.width=`${e.width}px`,o.current.style.height=`${e.height}px`,o.current.style.display=void 0}else o.current.style.height="0px",o.current.style.width="0px",o.current.style.top=i.height/2+"px",o.current.style.left=i.width/2+"px",o.current.style.display="none"}),[n,i.height,i.width]),30);const a=Li(),c=Ie((()=>{a.removeChatDomContext(a.currentChatId,n)}),[a,n]);
return le("div",l(s({},r),{className:"pointer-events-auto fixed flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-green-600/80 bg-green-600/5 text-transparent transition-all duration-0 hover:border-red-600/80 hover:bg-red-600/20 hover:text-white hover:backdrop-blur-sm",ref:o,onClick:c,role:"button",tabIndex:0,children:le(Tp,{className:"size-6 drop-shadow-black drop-shadow-md"})}))}function Um(){const{chats:e,currentChatId:t,addChatDomContext:n,isPromptCreationActive:r}=Li(),o=Oe((()=>e.find((e=>e.id===t))),[t,e]),i=r,a=Oe((()=>(null==o?void 0:o.domContextElements)||[]),[o]),[s,l]=ke(null),c=Ie((e=>{n(t,e)}),[n,t]);return i?le(F,{children:[s&&le(Hm,{refElement:s}),
le(Dm,{ignoreList:a,onElementHovered:l,onElementSelected:c,onElementUnhovered:()=>l(null)}),a.map((e=>le(Zm,{refElement:e})))]}):null}function Vm(){const e=Ii((e=>e.minimized));
return le("div",{className:rs("fixed inset-0 h-screen w-screen"),children:[
le(Um,{}),!e&&le(zm,{}),e&&le(Fm,{})]})}function Bm(e){
return le("div",{className:rs(void 0===e.enable||e.enable?"pointer-events-auto":"pointer-events-none",e.className),onClick:e.onClick,role:"button",tabIndex:0})}function Wm(){const e=Te(!1);return Ce((()=>{const t=HTMLElement.prototype.focus;return HTMLElement.prototype.focus=function(...n){const r=this.getRootNode();!(r instanceof ShadowRoot&&r.host instanceof HTMLElement&&"STAGEWISE-COMPANION-ANCHOR"===r.host.nodeName)&&e.current||t.apply(this,n)},()=>{HTMLElement.prototype.focus=t}}),[]),$i("focusin",(t=>{t.target.localName===Ja&&(e.current=!0)}),{capture:!0}),$i("focusout",(t=>{t.target.localName===Ja&&(e.current=!1)}),{capture:!0}),null}function qm({children:e}){return e}function Gm(e){const t=Ii((e=>e.isMainAppBlocked));
return le(F,{children:[
le(Wm,{}),
le(Bm,{className:"fixed inset-0 h-screen w-screen",enable:t}),
le(Di,{config:e,children:[
le(os,{}),
le(qm,{children:le(Vm,{})})]})]})}function Km(e){if(!document.body)throw new Error("stagewise companion cannot find document.body");if(document.body.querySelector(Ja))throw console.warn("A stagewise companion anchor already exists. Aborting this instance."),new Error("A stagewise companion anchor already exists.");const t=document.createElement(Ja);t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.right="0px",t.style.bottom="0px",t.style.pointerEvents="none",t.style.zIndex="2147483647";const n=e=>{e.stopPropagation()};t.onclick=n,t.onmousedown=n,t.onmouseup=n,t.onmousemove=n,t.ondblclick=n,t.oncontextmenu=n,t.onwheel=n,t.onfocus=n,t.onblur=n,document.body.appendChild(t);const r=document.createElement("link");r.rel="stylesheet",r.href="https://rsms.me/inter/inter.css",document.head.appendChild(r);const o=document.createElement("style");o.append(document.createTextNode('/*! tailwindcss v4.1.5 | MIT License | https://tailwindcss.com */\n@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){stagewise-companion-anchor *,stagewise-companion-anchor :before,stagewise-companion-anchor :after,stagewise-companion-anchor ::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial}}}@layer theme{stagewise-companion-anchor,stagewise-companion-anchor{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-600:oklch(57.7% .245 27.325);--color-green-600:oklch(62.7% .194 149.214);--color-teal-500:oklch(70.4% .14 182.503);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-indigo-700:oklch(45.7% .24 277.023);--color-indigo-950:oklch(25.7% .09 281.288);--color-rose-600:oklch(58.6% .253 17.585);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-zinc-950:oklch(14.1% .005 285.823);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height:calc(1.5/1);--font-weight-normal:400;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--radius-3xl:1.5rem;--drop-shadow-xs:0 1px 1px #0000000d;--drop-shadow-md:0 3px 3px #0000001f;--drop-shadow-xl:0 9px 7px #0000001a;--animate-pulse:pulse 2s cubic-bezier(.4,0,.6,1)infinite;--blur-xs:4px;--blur-sm:8px;--blur-md:12px;--blur-lg:16px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-background:var(--color-white);--color-foreground:var(--color-zinc-950);--color-muted-foreground:var(--color-zinc-700);--color-border:var(--color-zinc-500)}}@layer base{stagewise-companion-anchor *,stagewise-companion-anchor :after,stagewise-companion-anchor :before,stagewise-companion-anchor ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}stagewise-companion-anchor ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}:where(stagewise-companion-anchor),stagewise-companion-anchor{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}stagewise-companion-anchor hr{height:0;color:inherit;border-top-width:1px}stagewise-companion-anchor abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}stagewise-companion-anchor h1,stagewise-companion-anchor h2,stagewise-companion-anchor h3,stagewise-companion-anchor h4,stagewise-companion-anchor h5,stagewise-companion-anchor h6{font-size:inherit;font-weight:inherit}stagewise-companion-anchor a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}stagewise-companion-anchor b,stagewise-companion-anchor strong{font-weight:bolder}stagewise-companion-anchor code,stagewise-companion-anchor kbd,stagewise-companion-anchor samp,stagewise-companion-anchor pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}stagewise-companion-anchor small{font-size:80%}stagewise-companion-anchor sub,stagewise-companion-anchor sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}stagewise-companion-anchor sub{bottom:-.25em}stagewise-companion-anchor sup{top:-.5em}stagewise-companion-anchor table{text-indent:0;border-color:inherit;border-collapse:collapse}stagewise-companion-anchor :-moz-focusring{outline:auto}stagewise-companion-anchor progress{vertical-align:baseline}stagewise-companion-anchor summary{display:list-item}stagewise-companion-anchor ol,stagewise-companion-anchor ul,stagewise-companion-anchor menu{list-style:none}stagewise-companion-anchor img,stagewise-companion-anchor svg,stagewise-companion-anchor video,stagewise-companion-anchor canvas,stagewise-companion-anchor audio,stagewise-companion-anchor iframe,stagewise-companion-anchor embed,stagewise-companion-anchor object{vertical-align:middle;display:block}stagewise-companion-anchor img,stagewise-companion-anchor video{max-width:100%;height:auto}stagewise-companion-anchor button,stagewise-companion-anchor input,stagewise-companion-anchor select,stagewise-companion-anchor optgroup,stagewise-companion-anchor textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup{font-weight:bolder}stagewise-companion-anchor :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}stagewise-companion-anchor ::file-selector-button{margin-inline-end:4px}stagewise-companion-anchor ::-moz-placeholder{opacity:1}stagewise-companion-anchor ::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){stagewise-companion-anchor ::-moz-placeholder{color:currentColor}stagewise-companion-anchor ::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor ::-moz-placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}stagewise-companion-anchor ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}stagewise-companion-anchor textarea{resize:vertical}stagewise-companion-anchor ::-webkit-search-decoration{-webkit-appearance:none}stagewise-companion-anchor ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}stagewise-companion-anchor ::-webkit-datetime-edit{display:inline-flex}stagewise-companion-anchor ::-webkit-datetime-edit-fields-wrapper{padding:0}stagewise-companion-anchor ::-webkit-datetime-edit{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-year-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-month-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-day-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-hour-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-minute-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-second-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-millisecond-field{padding-block:0}stagewise-companion-anchor ::-webkit-datetime-edit-meridiem-field{padding-block:0}stagewise-companion-anchor :-moz-ui-invalid{box-shadow:none}stagewise-companion-anchor button,stagewise-companion-anchor input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}stagewise-companion-anchor ::-webkit-inner-spin-button{height:auto}stagewise-companion-anchor ::-webkit-outer-spin-button{height:auto}stagewise-companion-anchor [hidden]:where(:not([hidden=until-found])){display:none!important}stagewise-companion-anchor stagewise-companion-anchor *{min-width:0;min-height:0;position:relative}}@layer components;@layer utilities{stagewise-companion-anchor .pointer-events-auto{pointer-events:auto!important}stagewise-companion-anchor .pointer-events-none{pointer-events:none!important}stagewise-companion-anchor .visible{visibility:visible!important}stagewise-companion-anchor .absolute{position:absolute!important}stagewise-companion-anchor .fixed{position:fixed!important}stagewise-companion-anchor .relative{position:relative!important}stagewise-companion-anchor .inset-0{inset:calc(var(--spacing)*0)!important}stagewise-companion-anchor .inset-4{inset:calc(var(--spacing)*4)!important}stagewise-companion-anchor .top-0{top:calc(var(--spacing)*0)!important}stagewise-companion-anchor .top-1\\/2{top:50%!important}stagewise-companion-anchor .top-\\[-20\\%\\]{top:-20%!important}stagewise-companion-anchor .top-\\[25\\%\\]{top:25%!important}stagewise-companion-anchor .-right-1{right:calc(var(--spacing)*-1)!important}stagewise-companion-anchor .right-0{right:calc(var(--spacing)*0)!important}stagewise-companion-anchor .right-1\\/2{right:50%!important}stagewise-companion-anchor .right-2{right:calc(var(--spacing)*2)!important}stagewise-companion-anchor .-bottom-0\\.5{bottom:calc(var(--spacing)*-.5)!important}stagewise-companion-anchor .bottom-1\\/2{bottom:50%!important}stagewise-companion-anchor .bottom-3{bottom:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-0{left:calc(var(--spacing)*0)!important}stagewise-companion-anchor .left-1\\/2{left:50%!important}stagewise-companion-anchor .left-3{left:calc(var(--spacing)*3)!important}stagewise-companion-anchor .left-\\[-10\\%\\]{left:-10%!important}stagewise-companion-anchor .left-\\[25\\%\\]{left:25%!important}stagewise-companion-anchor .z-50{z-index:50!important}stagewise-companion-anchor .container{width:100%!important}@media (min-width:40rem){stagewise-companion-anchor .container{max-width:40rem!important}}@media (min-width:48rem){stagewise-companion-anchor .container{max-width:48rem!important}}@media (min-width:64rem){stagewise-companion-anchor .container{max-width:64rem!important}}@media (min-width:80rem){stagewise-companion-anchor .container{max-width:80rem!important}}@media (min-width:96rem){stagewise-companion-anchor .container{max-width:96rem!important}}stagewise-companion-anchor .block{display:block!important}stagewise-companion-anchor .contents{display:contents!important}stagewise-companion-anchor .flex{display:flex!important}stagewise-companion-anchor .hidden{display:none!important}stagewise-companion-anchor .inline{display:inline!important}stagewise-companion-anchor .aspect-square{aspect-ratio:1!important}stagewise-companion-anchor .size-0{width:calc(var(--spacing)*0)!important;height:calc(var(--spacing)*0)!important}stagewise-companion-anchor .size-1\\.5{width:calc(var(--spacing)*1.5)!important;height:calc(var(--spacing)*1.5)!important}stagewise-companion-anchor .size-2\\/3{width:66.6667%!important;height:66.6667%!important}stagewise-companion-anchor .size-3{width:calc(var(--spacing)*3)!important;height:calc(var(--spacing)*3)!important}stagewise-companion-anchor .size-4{width:calc(var(--spacing)*4)!important;height:calc(var(--spacing)*4)!important}stagewise-companion-anchor .size-5{width:calc(var(--spacing)*5)!important;height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .size-6{width:calc(var(--spacing)*6)!important;height:calc(var(--spacing)*6)!important}stagewise-companion-anchor .size-8{width:calc(var(--spacing)*8)!important;height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .size-9\\/12{width:75%!important;height:75%!important}stagewise-companion-anchor .size-12{width:calc(var(--spacing)*12)!important;height:calc(var(--spacing)*12)!important}stagewise-companion-anchor .size-\\[120\\%\\]{width:120%!important;height:120%!important}stagewise-companion-anchor .size-full{width:100%!important;height:100%!important}stagewise-companion-anchor .h-4{height:calc(var(--spacing)*4)!important}stagewise-companion-anchor .h-5{height:calc(var(--spacing)*5)!important}stagewise-companion-anchor .h-6{height:calc(var(--spacing)*6)!important}stagewise-companion-anchor .h-8{height:calc(var(--spacing)*8)!important}stagewise-companion-anchor .h-\\[4\\.5em\\]{height:4.5em!important}stagewise-companion-anchor .h-\\[50\\%\\]{height:50%!important}stagewise-companion-anchor .h-\\[120\\%\\]{height:120%!important}stagewise-companion-anchor .h-auto{height:auto!important}stagewise-companion-anchor .h-fit{height:-moz-fit-content!important;height:fit-content!important}stagewise-companion-anchor .h-full{height:100%!important}stagewise-companion-anchor .h-screen{height:100vh!important}stagewise-companion-anchor .max-h-\\[50vh\\]{max-height:50vh!important}stagewise-companion-anchor .max-h-full{max-height:100%!important}stagewise-companion-anchor .w-0{width:calc(var(--spacing)*0)!important}stagewise-companion-anchor .w-6{width:calc(var(--spacing)*6)!important}stagewise-companion-anchor .w-80{width:calc(var(--spacing)*80)!important}stagewise-companion-anchor .w-96{width:calc(var(--spacing)*96)!important}stagewise-companion-anchor .w-\\[50\\%\\]{width:50%!important}stagewise-companion-anchor .w-fit{width:-moz-fit-content!important;width:fit-content!important}stagewise-companion-anchor .w-full{width:100%!important}stagewise-companion-anchor .w-max{width:-moz-max-content!important;width:max-content!important}stagewise-companion-anchor .w-screen{width:100vw!important}stagewise-companion-anchor .max-w-8{max-width:calc(var(--spacing)*8)!important}stagewise-companion-anchor .max-w-48{max-width:calc(var(--spacing)*48)!important}stagewise-companion-anchor .max-w-90{max-width:calc(var(--spacing)*90)!important}stagewise-companion-anchor .max-w-\\[80\\%\\]{max-width:80%!important}stagewise-companion-anchor .max-w-\\[80vw\\]{max-width:80vw!important}stagewise-companion-anchor .max-w-sm{max-width:var(--container-sm)!important}stagewise-companion-anchor .min-w-4{min-width:calc(var(--spacing)*4)!important}stagewise-companion-anchor .min-w-24{min-width:calc(var(--spacing)*24)!important}stagewise-companion-anchor .flex-1{flex:1!important}stagewise-companion-anchor .flex-shrink-0,stagewise-companion-anchor .shrink-0{flex-shrink:0!important}stagewise-companion-anchor .origin-center{transform-origin:50%!important}stagewise-companion-anchor .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)!important}stagewise-companion-anchor .animate-pulse{animation:var(--animate-pulse)!important}stagewise-companion-anchor .cursor-grab{cursor:grab!important}stagewise-companion-anchor .cursor-pointer{cursor:pointer!important}stagewise-companion-anchor .resize{resize:both!important}stagewise-companion-anchor .resize-none{resize:none!important}stagewise-companion-anchor .snap-start{scroll-snap-align:start!important}stagewise-companion-anchor .flex-col{flex-direction:column!important}stagewise-companion-anchor .flex-row{flex-direction:row!important}stagewise-companion-anchor .items-center{align-items:center!important}stagewise-companion-anchor .items-end{align-items:flex-end!important}stagewise-companion-anchor .items-start{align-items:flex-start!important}stagewise-companion-anchor .items-stretch{align-items:stretch!important}stagewise-companion-anchor .justify-between{justify-content:space-between!important}stagewise-companion-anchor .justify-center{justify-content:center!important}stagewise-companion-anchor .justify-end{justify-content:flex-end!important}stagewise-companion-anchor .justify-start{justify-content:flex-start!important}stagewise-companion-anchor .gap-1{gap:calc(var(--spacing)*1)!important}stagewise-companion-anchor .gap-2{gap:calc(var(--spacing)*2)!important}stagewise-companion-anchor .gap-3{gap:calc(var(--spacing)*3)!important}stagewise-companion-anchor .truncate{text-overflow:ellipsis!important;white-space:nowrap!important;overflow:hidden!important}stagewise-companion-anchor .overflow-hidden{overflow:hidden!important}stagewise-companion-anchor .overflow-visible{overflow:visible!important}stagewise-companion-anchor .overflow-x-auto{overflow-x:auto!important}stagewise-companion-anchor .overflow-x-hidden{overflow-x:hidden!important}stagewise-companion-anchor .overflow-y-auto{overflow-y:auto!important}stagewise-companion-anchor .overflow-y-visible{overflow-y:visible!important}stagewise-companion-anchor .rounded{border-radius:.25rem!important}stagewise-companion-anchor .rounded-2xl{border-radius:var(--radius-2xl)!important}stagewise-companion-anchor .rounded-3xl{border-radius:var(--radius-3xl)!important}stagewise-companion-anchor .rounded-full{border-radius:3.40282e38px!important}stagewise-companion-anchor .rounded-lg{border-radius:var(--radius-lg)!important}stagewise-companion-anchor .rounded-md{border-radius:var(--radius-md)!important}stagewise-companion-anchor .rounded-xl{border-radius:var(--radius-xl)!important}stagewise-companion-anchor .rounded-t-3xl{border-top-left-radius:var(--radius-3xl)!important;border-top-right-radius:var(--radius-3xl)!important}stagewise-companion-anchor .border{border-style:var(--tw-border-style)!important;border-width:1px!important}stagewise-companion-anchor .border-2{border-style:var(--tw-border-style)!important;border-width:2px!important}stagewise-companion-anchor .border-x{border-inline-style:var(--tw-border-style)!important;border-inline-width:1px!important}stagewise-companion-anchor .border-t{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}stagewise-companion-anchor .border-r{border-right-style:var(--tw-border-style)!important;border-right-width:1px!important}stagewise-companion-anchor .border-solid{--tw-border-style:solid!important;border-style:solid!important}stagewise-companion-anchor .border-blue-600\\/80{border-color:#155dfccc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-blue-600\\/80{border-color:color-mix(in oklab,var(--color-blue-600)80%,transparent)!important}}stagewise-companion-anchor .border-border\\/10{border-color:#71717b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/10{border-color:color-mix(in oklab,var(--color-border)10%,transparent)!important}}stagewise-companion-anchor .border-border\\/20{border-color:#71717b33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/20{border-color:color-mix(in oklab,var(--color-border)20%,transparent)!important}}stagewise-companion-anchor .border-border\\/30{border-color:#71717b4d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-border\\/30{border-color:color-mix(in oklab,var(--color-border)30%,transparent)!important}}stagewise-companion-anchor .border-green-600\\/80{border-color:#00a544cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-green-600\\/80{border-color:color-mix(in oklab,var(--color-green-600)80%,transparent)!important}}stagewise-companion-anchor .border-r-border\\/30{border-right-color:#71717b4d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .border-r-border\\/30{border-right-color:color-mix(in oklab,var(--color-border)30%,transparent)!important}}stagewise-companion-anchor .border-l-transparent{border-left-color:#0000!important}stagewise-companion-anchor .bg-background\\/40{background-color:#fff6!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-background\\/40{background-color:color-mix(in oklab,var(--color-background)40%,transparent)!important}}stagewise-companion-anchor .bg-background\\/60{background-color:#fff9!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-background\\/60{background-color:color-mix(in oklab,var(--color-background)60%,transparent)!important}}stagewise-companion-anchor .bg-blue-600{background-color:var(--color-blue-600)!important}stagewise-companion-anchor .bg-blue-600\\/20{background-color:#155dfc33!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-blue-600\\/20{background-color:color-mix(in oklab,var(--color-blue-600)20%,transparent)!important}}stagewise-companion-anchor .bg-green-600\\/5{background-color:#00a5440d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-green-600\\/5{background-color:color-mix(in oklab,var(--color-green-600)5%,transparent)!important}}stagewise-companion-anchor .bg-rose-600{background-color:var(--color-rose-600)!important}stagewise-companion-anchor .bg-transparent{background-color:#0000!important}stagewise-companion-anchor .bg-white\\/60{background-color:#fff9!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-white\\/60{background-color:color-mix(in oklab,var(--color-white)60%,transparent)!important}}stagewise-companion-anchor .bg-zinc-50\\/80{background-color:#fafafacc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-50\\/80{background-color:color-mix(in oklab,var(--color-zinc-50)80%,transparent)!important}}stagewise-companion-anchor .bg-zinc-500{background-color:var(--color-zinc-500)!important}stagewise-companion-anchor .bg-zinc-500\\/10{background-color:#71717b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-500\\/10{background-color:color-mix(in oklab,var(--color-zinc-500)10%,transparent)!important}}stagewise-companion-anchor .bg-zinc-600{background-color:var(--color-zinc-600)!important}stagewise-companion-anchor .bg-zinc-950\\/5{background-color:#09090b0d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .bg-zinc-950\\/5{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)!important}}stagewise-companion-anchor .bg-gradient-to-tr{--tw-gradient-position:to top right in oklab!important;background-image:linear-gradient(var(--tw-gradient-stops))!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(55\\,48\\,163\\,0\\)_55\\%\\,rgba\\(55\\,48\\,163\\,0\\.35\\)_73\\%\\)\\]{background-image:radial-gradient(circle,#3730a300 55%,#3730a359 73%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(219\\,39\\,119\\,0\\.2\\)_0\\%\\,rgba\\(219\\,39\\,119\\,0\\)_100\\%\\)\\]{background-image:radial-gradient(circle,#db277733 0%,#db277700 100%)!important}stagewise-companion-anchor .bg-\\[radial-gradient\\(circle\\,rgba\\(255\\,255\\,255\\,0\\)_60\\%\\,rgba\\(255\\,255\\,255\\,0\\.2\\)_70\\%\\)\\]{background-image:radial-gradient(circle,#fff0 60%,#fff3 70%)!important}stagewise-companion-anchor .from-indigo-700{--tw-gradient-from:var(--color-indigo-700)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .via-blue-500{--tw-gradient-via:var(--color-blue-500)!important;--tw-gradient-via-stops:var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-via)var(--tw-gradient-via-position),var(--tw-gradient-to)var(--tw-gradient-to-position)!important;--tw-gradient-stops:var(--tw-gradient-via-stops)!important}stagewise-companion-anchor .to-teal-500{--tw-gradient-to:var(--color-teal-500)!important;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))!important}stagewise-companion-anchor .fill-current{fill:currentColor!important}stagewise-companion-anchor .fill-white{fill:var(--color-white)!important}stagewise-companion-anchor .fill-zinc-500\\/50{fill:#71717b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .fill-zinc-500\\/50{fill:color-mix(in oklab,var(--color-zinc-500)50%,transparent)!important}}stagewise-companion-anchor .fill-zinc-950{fill:var(--color-zinc-950)!important}stagewise-companion-anchor .stroke-black\\/30{stroke:#0000004d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .stroke-black\\/30{stroke:color-mix(in oklab,var(--color-black)30%,transparent)!important}}stagewise-companion-anchor .stroke-none{stroke:none!important}stagewise-companion-anchor .stroke-1{stroke-width:1px!important}stagewise-companion-anchor .p-0{padding:calc(var(--spacing)*0)!important}stagewise-companion-anchor .p-0\\.5{padding:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .p-1{padding:calc(var(--spacing)*1)!important}stagewise-companion-anchor .p-1\\.5{padding:calc(var(--spacing)*1.5)!important}stagewise-companion-anchor .p-2{padding:calc(var(--spacing)*2)!important}stagewise-companion-anchor .p-3{padding:calc(var(--spacing)*3)!important}stagewise-companion-anchor .px-0\\.5{padding-inline:calc(var(--spacing)*.5)!important}stagewise-companion-anchor .px-1{padding-inline:calc(var(--spacing)*1)!important}stagewise-companion-anchor .px-2{padding-inline:calc(var(--spacing)*2)!important}stagewise-companion-anchor .px-3{padding-inline:calc(var(--spacing)*3)!important}stagewise-companion-anchor .py-0{padding-block:calc(var(--spacing)*0)!important}stagewise-companion-anchor .py-1{padding-block:calc(var(--spacing)*1)!important}stagewise-companion-anchor .pt-2{padding-top:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pr-6{padding-right:calc(var(--spacing)*6)!important}stagewise-companion-anchor .pb-0{padding-bottom:calc(var(--spacing)*0)!important}stagewise-companion-anchor .pb-2{padding-bottom:calc(var(--spacing)*2)!important}stagewise-companion-anchor .pl-2{padding-left:calc(var(--spacing)*2)!important}stagewise-companion-anchor .text-base{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}stagewise-companion-anchor .text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}stagewise-companion-anchor .text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}stagewise-companion-anchor .font-bold{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}stagewise-companion-anchor .font-normal{--tw-font-weight:var(--font-weight-normal)!important;font-weight:var(--font-weight-normal)!important}stagewise-companion-anchor .font-semibold{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}stagewise-companion-anchor .text-border\\/60{color:#71717b99!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .text-border\\/60{color:color-mix(in oklab,var(--color-border)60%,transparent)!important}}stagewise-companion-anchor .text-foreground{color:var(--color-foreground)!important}stagewise-companion-anchor .text-muted-foreground{color:var(--color-muted-foreground)!important}stagewise-companion-anchor .text-muted-foreground\\/30{color:#3f3f464d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .text-muted-foreground\\/30{color:color-mix(in oklab,var(--color-muted-foreground)30%,transparent)!important}}stagewise-companion-anchor .text-transparent{color:#0000!important}stagewise-companion-anchor .text-white{color:var(--color-white)!important}stagewise-companion-anchor .text-zinc-50{color:var(--color-zinc-50)!important}stagewise-companion-anchor .text-zinc-950{color:var(--color-zinc-950)!important}stagewise-companion-anchor .text-zinc-950\\/50{color:#09090b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .text-zinc-950\\/50{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}}stagewise-companion-anchor .opacity-20{opacity:.2!important}stagewise-companion-anchor .opacity-50{opacity:.5!important}stagewise-companion-anchor .opacity-80{opacity:.8!important}stagewise-companion-anchor .opacity-100{opacity:1!important}stagewise-companion-anchor .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-inner{--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .ring-2{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:#00000080!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .shadow-black\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-black)50%,transparent)var(--tw-shadow-alpha),transparent)!important}}stagewise-companion-anchor .shadow-blue-600\\/50{--tw-shadow-color:#155dfc80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .shadow-blue-600\\/50{--tw-shadow-color:color-mix(in oklab,color-mix(in oklab,var(--color-blue-600)50%,transparent)var(--tw-shadow-alpha),transparent)!important}}stagewise-companion-anchor .ring-blue-600{--tw-ring-color:var(--color-blue-600)!important}stagewise-companion-anchor .blur{--tw-blur:blur(8px)!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-md{--tw-drop-shadow-size:drop-shadow(0 3px 3px var(--tw-drop-shadow-color,#0000001f))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-md))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xl{--tw-drop-shadow-size:drop-shadow(0 9px 7px var(--tw-drop-shadow-color,#0000001a))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xl))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-xs{--tw-drop-shadow-size:drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000d))!important;--tw-drop-shadow:drop-shadow(var(--drop-shadow-xs))!important;filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:#000!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .drop-shadow-black{--tw-drop-shadow-color:color-mix(in oklab,var(--color-black)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:oklch(25.7% .09 281.288)!important;--tw-drop-shadow:var(--tw-drop-shadow-size)!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .drop-shadow-indigo-950{--tw-drop-shadow-color:color-mix(in oklab,var(--color-indigo-950)var(--tw-drop-shadow-alpha),transparent)!important}}stagewise-companion-anchor .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)!important}stagewise-companion-anchor .backdrop-blur-lg{--tw-backdrop-blur:blur(var(--blur-lg))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-blur-md{--tw-backdrop-blur:blur(var(--blur-md))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .backdrop-saturate-150{--tw-backdrop-saturate:saturate(150%)!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}stagewise-companion-anchor .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-all{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}stagewise-companion-anchor .duration-0{--tw-duration:0s!important;transition-duration:0s!important}stagewise-companion-anchor .duration-100{--tw-duration:.1s!important;transition-duration:.1s!important}stagewise-companion-anchor .duration-150{--tw-duration:.15s!important;transition-duration:.15s!important}stagewise-companion-anchor .duration-500{--tw-duration:.5s!important;transition-duration:.5s!important}stagewise-companion-anchor .outline-none{--tw-outline-style:none!important;outline-style:none!important}stagewise-companion-anchor .select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:#09090b80!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:#09090b80!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/50::placeholder{color:color-mix(in oklab,var(--color-zinc-950)50%,transparent)!important}}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:#09090bb3!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:#09090bb3!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::-moz-placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}stagewise-companion-anchor .placeholder\\:text-zinc-950\\/70::placeholder{color:color-mix(in oklab,var(--color-zinc-950)70%,transparent)!important}}stagewise-companion-anchor .first\\:border-none:first-child{--tw-border-style:none!important;border-style:none!important}stagewise-companion-anchor .first\\:pl-0:first-child{padding-left:calc(var(--spacing)*0)!important}stagewise-companion-anchor .last\\:border-r-transparent:last-child{border-right-color:#0000!important}stagewise-companion-anchor .last\\:pr-0:last-child{padding-right:calc(var(--spacing)*0)!important}@media (hover:hover){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:#e40014cc!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:border-red-600\\/80:hover{border-color:color-mix(in oklab,var(--color-red-600)80%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:#e4001433!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-red-600\\/20:hover{background-color:color-mix(in oklab,var(--color-red-600)20%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:#09090b0d!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/5:hover{background-color:color-mix(in oklab,var(--color-zinc-950)5%,transparent)!important}}stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:#09090b1a!important}@supports (color:color-mix(in lab, red, red)){stagewise-companion-anchor .hover\\:bg-zinc-950\\/10:hover{background-color:color-mix(in oklab,var(--color-zinc-950)10%,transparent)!important}}stagewise-companion-anchor .hover\\:text-muted-foreground:hover{color:var(--color-muted-foreground)!important}stagewise-companion-anchor .hover\\:text-white:hover{color:var(--color-white)!important}stagewise-companion-anchor .hover\\:opacity-100:hover{opacity:1!important}stagewise-companion-anchor .hover\\:shadow-lg:hover{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}stagewise-companion-anchor .hover\\:backdrop-blur-sm:hover{--tw-backdrop-blur:blur(var(--blur-sm))!important;-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important;backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)!important}}stagewise-companion-anchor .focus\\:cursor-grabbing:focus{cursor:grabbing!important}stagewise-companion-anchor .focus\\:text-zinc-900:focus{color:var(--color-zinc-900)!important}stagewise-companion-anchor .focus\\:outline-none:focus,stagewise-companion-anchor .data-focus\\:outline-none[data-focus]{--tw-outline-style:none!important;outline-style:none!important}}stagewise-companion-anchor stagewise-companion-anchor{all:initial;interpolate-size:allow-keywords;transform:translate(0);color:var(--color-zinc-950)!important;letter-spacing:normal!important;text-rendering:auto!important;font-family:Inter,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important;font-weight:400!important;line-height:normal!important}@supports (font-variation-settings:normal){stagewise-companion-anchor stagewise-companion-anchor{font-optical-sizing:auto!important;font-family:InterVariable,Noto Color Emoji,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,SF Compact,SF Pro,Helvetica Neue,sans-serif!important}}stagewise-companion-anchor #headlessui-portal-root{z-index:50!important;width:100vw!important;height:100vh!important;position:fixed!important}stagewise-companion-anchor #headlessui-portal-root>*{pointer-events:auto!important}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@keyframes pulse{50%{opacity:.5}}\n')),document.head.appendChild(o),re(L(Gm,e),t)}const Ym={id:"stagewise-toolbar-container"};const Xm=g({__name:"stagewise-toolbar",setup(e,{expose:t}){t(),m((()=>{Km({plugins:[{name:"example-plugin",description:"Adds additional context for your components",shortInfoForPrompt:()=>"Context information about the selected element",mcp:null,actions:[{name:"Example Action",description:"Demonstrates a custom action",execute:()=>{window.alert("This is a custom action!")}},{name:"Media Generation Example",description:"Open Media Generation Component Example Page",execute:()=>{window.open("/media-generate-example","_blank")}}]}]})}));const n={onMounted:m,ref:h,get initToolbar(){return Km}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},[["render",function(e,t,n,r,o,i){return f(),p("div",Ym)}],["__scopeId","data-v-ee452976"],["__file","/Users/pangxinyuan/WebstormProjects/pc_web_kaka_AI/src/components/stagewise-toolbar.vue"]]);export{Xm as default};
//# sourceMappingURL=stagewise-toolbar-Ov376Fpy.js.map
