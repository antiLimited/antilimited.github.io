(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();const gn=!1;var He=Array.isArray,wn=Array.from,mn=Object.defineProperty,J=Object.getOwnPropertyDescriptor,bn=Object.prototype,yn=Array.prototype,En=Object.getPrototypeOf;const j=()=>{},D=2,Ke=4,fe=8,Te=16,x=32,ce=64,we=128,K=256,ue=512,y=1024,F=2048,ee=4096,V=8192,W=16384,Ln=32768,xe=65536,Tn=1<<19,xn=1<<20,he=Symbol("$state");function On(e){return e===this.v}function We(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function Pn(e){return!We(e,this.v)}function Nn(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function kn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Sn(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Cn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Rn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Dn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function An(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Fn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ve=!1;function $n(){ve=!0}function T(e){return{f:0,v:e,reactions:null,equals:On,version:0}}function In(e,n=!1){var t;const r=T(e);return n||(r.equals=Pn),ve&&g!==null&&g.l!==null&&((t=g.l).s??(t.s=[])).push(r),r}function k(e,n){return h!==null&&Se()&&h.f&(D|Te)&&(A===null||!A.includes(e))&&Fn(),qn(e,n)}function qn(e,n){return e.equals(n)||(e.v=n,e.version=vn(),ze(e,F),Se()&&d!==null&&d.f&y&&!(d.f&x)&&(w!==null&&w.includes(e)?(O(d,F),de(d)):R===null?Jn([e]):R.push(e))),n}function ze(e,n){var r=e.reactions;if(r!==null)for(var t=Se(),l=r.length,i=0;i<l;i++){var s=r[i],v=s.f;v&F||!t&&s===d||(O(s,n),v&(y|K)&&(v&D?ze(s,ee):de(s)))}}const Mn=1,jn=2,b=Symbol();function q(e,n=null,r){if(typeof e!="object"||e===null||he in e)return e;const t=En(e);if(t!==bn&&t!==yn)return e;var l=new Map,i=He(e),s=T(0);i&&l.set("length",T(e.length));var v;return new Proxy(e,{defineProperty(f,u,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&Rn();var c=l.get(u);return c===void 0?(c=T(a.value),l.set(u,c)):k(c,q(a.value,v)),!0},deleteProperty(f,u){var a=l.get(u);if(a===void 0)u in f&&l.set(u,T(b));else{if(i&&typeof u=="string"){var c=l.get("length"),o=Number(u);Number.isInteger(o)&&o<c.v&&k(c,o)}k(a,b),Ie(s)}return!0},get(f,u,a){var p;if(u===he)return e;var c=l.get(u),o=u in f;if(c===void 0&&(!o||(p=J(f,u))!=null&&p.writable)&&(c=T(q(o?f[u]:b,v)),l.set(u,c)),c!==void 0){var _=G(c);return _===b?void 0:_}return Reflect.get(f,u,a)},getOwnPropertyDescriptor(f,u){var a=Reflect.getOwnPropertyDescriptor(f,u);if(a&&"value"in a){var c=l.get(u);c&&(a.value=G(c))}else if(a===void 0){var o=l.get(u),_=o==null?void 0:o.v;if(o!==void 0&&_!==b)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return a},has(f,u){var _;if(u===he)return!0;var a=l.get(u),c=a!==void 0&&a.v!==b||Reflect.has(f,u);if(a!==void 0||d!==null&&(!c||(_=J(f,u))!=null&&_.writable)){a===void 0&&(a=T(c?q(f[u],v):b),l.set(u,a));var o=G(a);if(o===b)return!1}return c},set(f,u,a,c){var N;var o=l.get(u),_=u in f;if(i&&u==="length")for(var p=a;p<o.v;p+=1){var m=l.get(p+"");m!==void 0?k(m,b):p in f&&(m=T(b),l.set(p+"",m))}o===void 0?(!_||(N=J(f,u))!=null&&N.writable)&&(o=T(void 0),k(o,q(a,v)),l.set(u,o)):(_=o.v!==b,k(o,q(a,v)));var C=Reflect.getOwnPropertyDescriptor(f,u);if(C!=null&&C.set&&C.set.call(c,a),!_){if(i&&typeof u=="string"){var L=l.get("length"),P=Number(u);Number.isInteger(P)&&P>=L.v&&k(L,P+1)}Ie(s)}return!0},ownKeys(f){G(s);var u=Reflect.ownKeys(f).filter(o=>{var _=l.get(o);return _===void 0||_.v!==b});for(var[a,c]of l)c.v!==b&&!(a in f)&&u.push(a);return u},setPrototypeOf(){Dn()}})}function Ie(e,n=1){k(e,e.v+n)}var qe,Ge,Je;function Bn(){if(qe===void 0){qe=window;var e=Element.prototype,n=Node.prototype;Ge=J(n,"firstChild").get,Je=J(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ze(e=""){return document.createTextNode(e)}function se(e){return Ge.call(e)}function Oe(e){return Je.call(e)}function Pe(e,n){return se(e)}function le(e,n){{var r=se(e);return r instanceof Comment&&r.data===""?Oe(r):r}}function me(e,n=1,r=!1){let t=e;for(;n--;)t=Oe(t);return t}function Qe(e){var n=e.children;if(n!==null){e.children=null;for(var r=0;r<n.length;r+=1){var t=n[r];t.f&D?Ne(t):z(t)}}}function Un(e){for(var n=e.parent;n!==null;){if(!(n.f&D))return n;n=n.parent}return null}function Xe(e){var n,r=d;H(Un(e));try{Qe(e),n=_n(e)}finally{H(r)}return n}function en(e){var n=Xe(e),r=(M||e.f&K)&&e.deps!==null?ee:y;O(e,r),e.equals(n)||(e.v=n,e.version=vn())}function Ne(e){Qe(e),X(e,0),O(e,W),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Vn(e){d===null&&h===null&&Sn(),h!==null&&h.f&K&&kn(),ke&&Nn()}function Yn(e,n){var r=n.last;r===null?n.last=n.first=e:(r.next=e,e.prev=r,n.last=e)}function ne(e,n,r,t=!0){var l=(e&ce)!==0,i=d,s={ctx:g,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|F,first:null,fn:n,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var v=B;try{Be(!0),pe(s),s.f|=Ln}catch(a){throw z(s),a}finally{Be(v)}}else n!==null&&de(s);var f=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&xn)===0;if(!f&&!l&&t&&(i!==null&&Yn(s,i),h!==null&&h.f&D)){var u=h;(u.children??(u.children=[])).push(s)}return s}function Hn(e){const n=ne(fe,null,!1);return O(n,y),n.teardown=e,n}function nn(e){Vn();var n=d!==null&&(d.f&x)!==0&&g!==null&&!g.m;if(n){var r=g;(r.e??(r.e=[])).push({fn:e,effect:d,reaction:h})}else{var t=rn(e);return t}}function Kn(e){const n=ne(ce,e,!0);return()=>{z(n)}}function rn(e){return ne(Ke,e,!1)}function Wn(e){return tn(e)}function tn(e,n=0){return ne(fe|Te|n,e,!0)}function be(e,n=!0){return ne(fe|x,e,!0,n)}function ln(e){var n=e.teardown;if(n!==null){const r=ke,t=h;Ue(!0),Y(null);try{n.call(null)}finally{Ue(r),Y(t)}}}function un(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var r=0;r<n.length;r+=1)Ne(n[r])}}function sn(e,n=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var t=r.next;z(r,n),r=t}}function zn(e){for(var n=e.first;n!==null;){var r=n.next;n.f&x||z(n),n=r}}function z(e,n=!0){var r=!1;if((n||e.f&Tn)&&e.nodes_start!==null){for(var t=e.nodes_start,l=e.nodes_end;t!==null;){var i=t===l?null:Oe(t);t.remove(),t=i}r=!0}sn(e,n&&!r),un(e),X(e,0),O(e,W);var s=e.transitions;if(s!==null)for(const f of s)f.stop();ln(e);var v=e.parent;v!==null&&v.first!==null&&an(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function an(e){var n=e.parent,r=e.prev,t=e.next;r!==null&&(r.next=t),t!==null&&(t.prev=r),n!==null&&(n.first===e&&(n.first=t),n.last===e&&(n.last=r))}function Me(e,n){var r=[];on(e,r,!0),Gn(r,()=>{z(e),n&&n()})}function Gn(e,n){var r=e.length;if(r>0){var t=()=>--r||n();for(var l of e)l.out(t)}else n()}function on(e,n,r){if(!(e.f&V)){if(e.f^=V,e.transitions!==null)for(const s of e.transitions)(s.is_global||r)&&n.push(s);for(var t=e.first;t!==null;){var l=t.next,i=(t.f&xe)!==0||(t.f&x)!==0;on(t,n,i?r:!1),t=l}}}function je(e){fn(e,!0)}function fn(e,n){if(e.f&V){re(e)&&pe(e),e.f^=V;for(var r=e.first;r!==null;){var t=r.next,l=(r.f&xe)!==0||(r.f&x)!==0;fn(r,l?n:!1),r=t}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||n)&&i.in()}}let ie=!1,ae=!1,oe=null,B=!1,ke=!1;function Be(e){B=e}function Ue(e){ke=e}let ye=[],Z=0;let h=null;function Y(e){h=e}let d=null;function H(e){d=e}let A=null,w=null,E=0,R=null;function Jn(e){R=e}let cn=0,M=!1,g=null;function vn(){return++cn}function Se(){return!ve||g!==null&&g.l===null}function re(e){var s,v;var n=e.f;if(n&F)return!0;if(n&ee){var r=e.deps,t=(n&K)!==0;if(r!==null){var l;if(n&ue){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(e);e.f^=ue}for(l=0;l<r.length;l++){var i=r[l];if(re(i)&&en(i),t&&d!==null&&!M&&!((v=i==null?void 0:i.reactions)!=null&&v.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}t||O(e,y)}return!1}function Zn(e,n){for(var r=n;r!==null;){if(r.f&we)try{r.fn(e);return}catch{r.f^=we}r=r.parent}throw ie=!1,e}function Qn(e){return(e.f&W)===0&&(e.parent===null||(e.parent.f&we)===0)}function _e(e,n,r,t){if(ie){if(r===null&&(ie=!1),Qn(n))throw e;return}r!==null&&(ie=!0);{Zn(e,n);return}}function _n(e){var o;var n=w,r=E,t=R,l=h,i=M,s=A,v=g,f=e.f;w=null,E=0,R=null,h=f&(x|ce)?null:e,M=!B&&(f&K)!==0,A=null,g=e.ctx;try{var u=(0,e.fn)(),a=e.deps;if(w!==null){var c;if(X(e,E),a!==null&&E>0)for(a.length=E+w.length,c=0;c<w.length;c++)a[E+c]=w[c];else e.deps=a=w;if(!M)for(c=E;c<a.length;c++)((o=a[c]).reactions??(o.reactions=[])).push(e)}else a!==null&&E<a.length&&(X(e,E),a.length=E);return u}finally{w=n,E=r,R=t,h=l,M=i,A=s,g=v}}function Xn(e,n){let r=n.reactions;if(r!==null){var t=r.indexOf(e);if(t!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[t]=r[l],r.pop())}}r===null&&n.f&D&&(w===null||!w.includes(n))&&(O(n,ee),n.f&(K|ue)||(n.f^=ue),X(n,0))}function X(e,n){var r=e.deps;if(r!==null)for(var t=n;t<r.length;t++)Xn(e,r[t])}function pe(e){var n=e.f;if(!(n&W)){O(e,y);var r=d,t=g;d=e;try{n&Te?zn(e):sn(e),un(e),ln(e);var l=_n(e);e.teardown=typeof l=="function"?l:null,e.version=cn}catch(i){_e(i,e,r,t||e.ctx)}finally{d=r}}}function er(){if(Z>1e3){Z=0;try{Cn()}catch(e){if(oe!==null)_e(e,oe,null);else throw e}}Z++}function nr(e){var n=e.length;if(n!==0){er();var r=B;B=!0;try{for(var t=0;t<n;t++){var l=e[t];l.f&y||(l.f^=y);var i=[];pn(l,i),rr(i)}}finally{B=r}}}function rr(e){var n=e.length;if(n!==0)for(var r=0;r<n;r++){var t=e[r];if(!(t.f&(W|V)))try{re(t)&&(pe(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?an(t):t.fn=null))}catch(l){_e(l,t,null,t.ctx)}}}function tr(){if(ae=!1,Z>1001)return;const e=ye;ye=[],nr(e),ae||(Z=0,oe=null)}function de(e){ae||(ae=!0,queueMicrotask(tr)),oe=e;for(var n=e;n.parent!==null;){n=n.parent;var r=n.f;if(r&(ce|x)){if(!(r&y))return;n.f^=y}}ye.push(n)}function pn(e,n){var r=e.first,t=[];e:for(;r!==null;){var l=r.f,i=(l&x)!==0,s=i&&(l&y)!==0,v=r.next;if(!s&&!(l&V))if(l&fe){if(i)r.f^=y;else try{re(r)&&pe(r)}catch(c){_e(c,r,null,r.ctx)}var f=r.first;if(f!==null){r=f;continue}}else l&Ke&&t.push(r);if(v===null){let c=r.parent;for(;c!==null;){if(e===c)break e;var u=c.next;if(u!==null){r=u;continue e}c=c.parent}}r=v}for(var a=0;a<t.length;a++)f=t[a],n.push(f),pn(f,n)}function G(e){var a;var n=e.f,r=(n&D)!==0;if(r&&n&W){var t=Xe(e);return Ne(e),t}if(h!==null){A!==null&&A.includes(e)&&An();var l=h.deps;w===null&&l!==null&&l[E]===e?E++:w===null?w=[e]:w.push(e),R!==null&&d!==null&&d.f&y&&!(d.f&x)&&R.includes(e)&&(O(d,F),de(d))}else if(r&&e.deps===null)for(var i=e,s=i.parent,v=i;s!==null;)if(s.f&D){var f=s;v=f,s=f.parent}else{var u=s;(a=u.deriveds)!=null&&a.includes(v)||(u.deriveds??(u.deriveds=[])).push(v);break}return r&&(i=e,re(i)&&en(i)),e.v}function lr(e){const n=h;try{return h=null,e()}finally{h=n}}const ir=~(F|ee|y);function O(e,n){e.f=e.f&ir|n}function Ce(e,n=!1,r){g={p:g,c:null,e:null,m:!1,s:e,x:null,l:null},ve&&!n&&(g.l={s:null,u:null,r1:[],r2:T(!1)})}function Re(e){const n=g;if(n!==null){const s=n.e;if(s!==null){var r=d,t=h;n.e=null;try{for(var l=0;l<s.length;l++){var i=s[l];H(i.effect),Y(i.reaction),rn(i.fn)}}finally{H(r),Y(t)}}g=n.p,n.m=!0}return{}}const dn=new Set,Ee=new Set;function ur(e){for(var n=0;n<e.length;n++)dn.add(e[n]);for(var r of Ee)r(e)}function te(e){var P;var n=this,r=n.ownerDocument,t=e.type,l=((P=e.composedPath)==null?void 0:P.call(e))||[],i=l[0]||e.target,s=0,v=e.__root;if(v){var f=l.indexOf(v);if(f!==-1&&(n===document||n===window)){e.__root=n;return}var u=l.indexOf(n);if(u===-1)return;f<=u&&(s=f)}if(i=l[s]||e.target,i!==n){mn(e,"currentTarget",{configurable:!0,get(){return i||r}});var a=h,c=d;Y(null),H(null);try{for(var o,_=[];i!==null;){var p=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+t];if(m!==void 0&&!i.disabled)if(He(m)){var[C,...L]=m;C.apply(i,[e,...L])}else m.call(i,e)}catch(N){o?_.push(N):o=N}if(e.cancelBubble||p===n||p===null)break;i=p}if(o){for(let N of _)queueMicrotask(()=>{throw N});throw o}}finally{e.__root=n,delete e.currentTarget,Y(a),H(c)}}}function sr(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Le(e,n){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=n)}function De(e,n){var r=(n&Mn)!==0,t=(n&jn)!==0,l,i=!e.startsWith("<!>");return()=>{l===void 0&&(l=sr(i?e:"<!>"+e),r||(l=se(l)));var s=t?document.importNode(l,!0):l.cloneNode(!0);if(r){var v=se(s),f=s.lastChild;Le(v,f)}else Le(s,s);return s}}function Ve(){var e=document.createDocumentFragment(),n=document.createComment(""),r=Ze();return e.append(n,r),Le(n,r),e}function Q(e,n){e!==null&&e.before(n)}const ar=["touchstart","touchmove"];function or(e){return ar.includes(e)}function fr(e,n){var r=n==null?"":typeof n=="object"?n+"":n;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function cr(e,n){return vr(e,n)}const $=new Map;function vr(e,{target:n,anchor:r,props:t={},events:l,context:i,intro:s=!0}){Bn();var v=new Set,f=c=>{for(var o=0;o<c.length;o++){var _=c[o];if(!v.has(_)){v.add(_);var p=or(_);n.addEventListener(_,te,{passive:p});var m=$.get(_);m===void 0?(document.addEventListener(_,te,{passive:p}),$.set(_,1)):$.set(_,m+1)}}};f(wn(dn)),Ee.add(f);var u=void 0,a=Kn(()=>{var c=r??n.appendChild(Ze());return be(()=>{if(i){Ce({});var o=g;o.c=i}l&&(t.$$events=l),u=e(c,t)||{},i&&Re()}),()=>{var p;for(var o of v){n.removeEventListener(o,te);var _=$.get(o);--_===0?(document.removeEventListener(o,te),$.delete(o)):$.set(o,_)}Ee.delete(f),Ye.delete(u),c!==r&&((p=c.parentNode)==null||p.removeChild(c))}});return Ye.set(u,a),u}let Ye=new WeakMap;function ge(e,n,r=!1){var t=e,l=null,i=null,s=b,v=r?xe:0,f=!1;const u=(c,o=!0)=>{f=!0,a(o,c)},a=(c,o)=>{s!==(s=c)&&(s?(l?je(l):o&&(l=be(()=>o(t))),i&&Me(i,()=>{i=null})):(i?je(i):o&&(i=be(()=>o(t))),l&&Me(l,()=>{l=null})))};tn(()=>{f=!1,n(u),f||a(null,null)},v)}function _r(e,n,r){if(e==null)return n(void 0),j;const t=lr(()=>e.subscribe(n,r));return t.unsubscribe?()=>t.unsubscribe():t}function Ae(e,n,r){const t=r[n]??(r[n]={store:null,source:In(void 0),unsubscribe:j});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=j;else{var l=!0;t.unsubscribe=_r(e,i=>{l?t.source.v=i:k(t.source,i)}),l=!1}return G(t.source)}function U(e,n){return e.set(n),n}function Fe(){const e={};return Hn(()=>{for(var n in e)e[n].unsubscribe()}),e}const pr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pr);const I=[];function dr(e,n=j){let r=null;const t=new Set;function l(v){if(We(e,v)&&(e=v,r)){const f=!I.length;for(const u of t)u[1](),I.push(u,e);if(f){for(let u=0;u<I.length;u+=2)I[u][0](I[u+1]);I.length=0}}}function i(v){l(v(e))}function s(v,f=j){const u=[v,f];return t.add(u),t.size===1&&(r=n(l,i)||j),v(e),()=>{t.delete(u),t.size===0&&r&&(r(),r=null)}}return{set:l,update:i,subscribe:s}}const S=dr("");var hr=(e,n)=>U(S,"home"),gr=(e,n)=>U(S,"profiles"),wr=(e,n)=>U(S,"projects"),mr=De('<div class="navbar"><a href="#" class="navbar-link">HOME</a> <div class="navbar-sep"></div> <a href="#" class="navbar-link">PROFILES</a> <div class="navbar-sep"></div> <a href="#" class="navbar-link">PROJECTS</a></div>');function br(e,n){Ce(n,!0);const r=Fe(),t=()=>Ae(S,"$curPage",r);let l,i=[];document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded!"),l=document.querySelector(".navbar"),window.scrollY==0?l.classList.add("navbar-init-up"):l.classList.add("navbar-init-down"),i=Array.from(document.getElementsByClassName("navbar-link")),s(!0)},!1),addEventListener("scroll",()=>{window.scrollY==0?(l.classList.add("navbar-up"),l.classList.remove("navbar-down")):(l.classList.add("navbar-down"),l.classList.remove("navbar-up"))});function s(c,o){for(let _=0;_<i.length;_++){const p=i[_];t()==p.innerHTML.toLowerCase()?(p.classList.remove("navbar-inactive","navbar-inactive-pgload"),p.classList.add("navbar-active")):(p.classList.remove("navbar-active"),c?p.classList.add("navbar-inactive-pgload"):p.classList.add("navbar-inactive"))}}nn(()=>s(!1,t()));var v=mr(),f=Pe(v);f.__click=[hr,t];var u=me(f,4);u.__click=[gr,t];var a=me(u,4);a.__click=[wr,t],Q(e,v),Re()}ur(["click"]);$n();var yr=De('<h1> </h1> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p>line</p> <p id="aaaa">line</p>',1);function Er(e){const n=Fe(),r=()=>Ae(S,"$curPage",n);var t=yr(),l=le(t),i=Pe(l);Wn(()=>fr(i,r())),Q(e,t)}var Lr=De('<!> <div class="main-content"><!></div>',1);function Tr(e,n){Ce(n,!0);const r=Fe(),t=()=>Ae(S,"$curPage",r);U(S,q(new URLSearchParams(window.location.search).get("p").toLowerCase()));const l=["home","profiles","projects"];if(t()==null)U(S,"home");else{let o=!1;for(let _=0;_<l.length;_++)t()==l[_]&&(o=!0);o||U(S,"home")}function i(o){let _=window.location.origin+window.location.pathname+"?p="+o+"#";window.history.pushState({path:_},"",_)}nn(()=>i(t())),console.log(t().toString());var s=Lr(),v=le(s);br(v,{});var f=me(v,2),u=Pe(f);{var a=o=>{Er(o)},c=o=>{var _=Ve(),p=le(_);{var m=L=>{},C=L=>{var P=Ve(),N=le(P);{var hn=$e=>{};ge(N,$e=>{t()=="projects"&&$e(hn)},!0)}Q(L,P)};ge(p,L=>{t()=="profiles"?L(m):L(C,!1)},!0)}Q(o,_)};ge(u,o=>{t()=="home"?o(a):o(c,!1)})}Q(e,s),Re()}cr(Tr,{target:document.getElementById("app")});