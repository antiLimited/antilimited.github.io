(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const pr=!1;var He=Array.isArray,mr=Array.from,gr=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,wr=Object.prototype,br=Array.prototype,yr=Object.getPrototypeOf;const B=()=>{},D=2,Ke=4,fe=8,Oe=16,P=32,ce=64,ye=128,W=256,ie=512,y=1024,I=2048,ee=4096,Y=8192,z=16384,Er=32768,Ne=65536,Lr=1<<19,Tr=1<<20,ge=Symbol("$state");function xr(e){return e===this.v}function We(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function Pr(e){return!We(e,this.v)}function Or(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Nr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function kr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Sr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Cr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Rr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Dr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ar(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ve=!1;function Fr(){ve=!0}function T(e){return{f:0,v:e,reactions:null,equals:xr,version:0}}function $r(e,r=!1){var t;const n=T(e);return r||(n.equals=Pr),ve&&m!==null&&m.l!==null&&((t=m.l).s??(t.s=[])).push(n),n}function S(e,r){return p!==null&&Re()&&p.f&(D|Oe)&&($===null||!$.includes(e))&&Ar(),Ir(e,r)}function Ir(e,r){return e.equals(r)||(e.v=r,e.version=cr(),ze(e,I),Re()&&h!==null&&h.f&y&&!(h.f&P)&&(g!==null&&g.includes(e)?(O(h,I),he(h)):R===null?Gr([e]):R.push(e))),r}function ze(e,r){var n=e.reactions;if(n!==null)for(var t=Re(),l=n.length,i=0;i<l;i++){var s=n[i],v=s.f;v&I||!t&&s===h||(O(s,r),v&(y|W)&&(v&D?ze(s,ee):he(s)))}}const qr=1,Mr=2,b=Symbol();function A(e,r=null,n){if(typeof e!="object"||e===null||ge in e)return e;const t=yr(e);if(t!==wr&&t!==br)return e;var l=new Map,i=He(e),s=T(0);i&&l.set("length",T(e.length));var v;return new Proxy(e,{defineProperty(f,u,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&Cr();var c=l.get(u);return c===void 0?(c=T(o.value),l.set(u,c)):S(c,A(o.value,v)),!0},deleteProperty(f,u){var o=l.get(u);if(o===void 0)u in f&&l.set(u,T(b));else{if(i&&typeof u=="string"){var c=l.get("length"),a=Number(u);Number.isInteger(a)&&a<c.v&&S(c,a)}S(o,b),Ie(s)}return!0},get(f,u,o){var d;if(u===ge)return e;var c=l.get(u),a=u in f;if(c===void 0&&(!a||(d=Z(f,u))!=null&&d.writable)&&(c=T(A(a?f[u]:b,v)),l.set(u,c)),c!==void 0){var _=J(c);return _===b?void 0:_}return Reflect.get(f,u,o)},getOwnPropertyDescriptor(f,u){var o=Reflect.getOwnPropertyDescriptor(f,u);if(o&&"value"in o){var c=l.get(u);c&&(o.value=J(c))}else if(o===void 0){var a=l.get(u),_=a==null?void 0:a.v;if(a!==void 0&&_!==b)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return o},has(f,u){var _;if(u===ge)return!0;var o=l.get(u),c=o!==void 0&&o.v!==b||Reflect.has(f,u);if(o!==void 0||h!==null&&(!c||(_=Z(f,u))!=null&&_.writable)){o===void 0&&(o=T(c?A(f[u],v):b),l.set(u,o));var a=J(o);if(a===b)return!1}return c},set(f,u,o,c){var k;var a=l.get(u),_=u in f;if(i&&u==="length")for(var d=o;d<a.v;d+=1){var w=l.get(d+"");w!==void 0?S(w,b):d in f&&(w=T(b),l.set(d+"",w))}a===void 0?(!_||(k=Z(f,u))!=null&&k.writable)&&(a=T(void 0),S(a,A(o,v)),l.set(u,a)):(_=a.v!==b,S(a,A(o,v)));var C=Reflect.getOwnPropertyDescriptor(f,u);if(C!=null&&C.set&&C.set.call(c,o),!_){if(i&&typeof u=="string"){var L=l.get("length"),N=Number(u);Number.isInteger(N)&&N>=L.v&&S(L,N+1)}Ie(s)}return!0},ownKeys(f){J(s);var u=Reflect.ownKeys(f).filter(a=>{var _=l.get(a);return _===void 0||_.v!==b});for(var[o,c]of l)c.v!==b&&!(o in f)&&u.push(o);return u},setPrototypeOf(){Rr()}})}function Ie(e,r=1){S(e,e.v+r)}var qe,Ge,Je;function jr(){if(qe===void 0){qe=window;var e=Element.prototype,r=Node.prototype;Ge=Z(r,"firstChild").get,Je=Z(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Ze(e=""){return document.createTextNode(e)}function ue(e){return Ge.call(e)}function ke(e){return Je.call(e)}function se(e,r){return ue(e)}function we(e,r){{var n=ue(e);return n instanceof Comment&&n.data===""?ke(n):n}}function Ee(e,r=1,n=!1){let t=e;for(;r--;)t=ke(t);return t}function Qe(e){var r=e.children;if(r!==null){e.children=null;for(var n=0;n<r.length;n+=1){var t=r[n];t.f&D?Se(t):G(t)}}}function Br(e){for(var r=e.parent;r!==null;){if(!(r.f&D))return r;r=r.parent}return null}function Xe(e){var r,n=h;K(Br(e));try{Qe(e),r=vr(e)}finally{K(n)}return r}function er(e){var r=Xe(e),n=(j||e.f&W)&&e.deps!==null?ee:y;O(e,n),e.equals(r)||(e.v=r,e.version=cr())}function Se(e){Qe(e),X(e,0),O(e,z),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Ur(e){h===null&&p===null&&kr(),p!==null&&p.f&W&&Nr(),Ce&&Or()}function Vr(e,r){var n=r.last;n===null?r.last=r.first=e:(n.next=e,e.prev=n,r.last=e)}function re(e,r,n,t=!0){var l=(e&ce)!==0,i=h,s={ctx:m,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|I,first:null,fn:r,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var v=U;try{Be(!0),de(s),s.f|=Er}catch(o){throw G(s),o}finally{Be(v)}}else r!==null&&he(s);var f=n&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Tr)===0;if(!f&&!l&&t&&(i!==null&&Vr(s,i),p!==null&&p.f&D)){var u=p;(u.children??(u.children=[])).push(s)}return s}function Yr(e){const r=re(fe,null,!1);return O(r,y),r.teardown=e,r}function rr(e){Ur();var r=h!==null&&(h.f&P)!==0&&m!==null&&!m.m;if(r){var n=m;(n.e??(n.e=[])).push({fn:e,effect:h,reaction:p})}else{var t=nr(e);return t}}function Hr(e){const r=re(ce,e,!0);return()=>{G(r)}}function nr(e){return re(Ke,e,!1)}function Kr(e){return tr(e)}function tr(e,r=0){return re(fe|Oe|r,e,!0)}function Le(e,r=!0){return re(fe|P,e,!0,r)}function lr(e){var r=e.teardown;if(r!==null){const n=Ce,t=p;Ue(!0),H(null);try{r.call(null)}finally{Ue(n),H(t)}}}function ir(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var n=0;n<r.length;n+=1)Se(r[n])}}function ur(e,r=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var t=n.next;G(n,r),n=t}}function Wr(e){for(var r=e.first;r!==null;){var n=r.next;r.f&P||G(r),r=n}}function G(e,r=!0){var n=!1;if((r||e.f&Lr)&&e.nodes_start!==null){for(var t=e.nodes_start,l=e.nodes_end;t!==null;){var i=t===l?null:ke(t);t.remove(),t=i}n=!0}ur(e,r&&!n),ir(e),X(e,0),O(e,z);var s=e.transitions;if(s!==null)for(const f of s)f.stop();lr(e);var v=e.parent;v!==null&&v.first!==null&&sr(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function sr(e){var r=e.parent,n=e.prev,t=e.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),r!==null&&(r.first===e&&(r.first=t),r.last===e&&(r.last=n))}function Me(e,r){var n=[];or(e,n,!0),zr(n,()=>{G(e),r&&r()})}function zr(e,r){var n=e.length;if(n>0){var t=()=>--n||r();for(var l of e)l.out(t)}else r()}function or(e,r,n){if(!(e.f&Y)){if(e.f^=Y,e.transitions!==null)for(const s of e.transitions)(s.is_global||n)&&r.push(s);for(var t=e.first;t!==null;){var l=t.next,i=(t.f&Ne)!==0||(t.f&P)!==0;or(t,r,i?n:!1),t=l}}}function je(e){ar(e,!0)}function ar(e,r){if(e.f&Y){ne(e)&&de(e),e.f^=Y;for(var n=e.first;n!==null;){var t=n.next,l=(n.f&Ne)!==0||(n.f&P)!==0;ar(n,l?r:!1),n=t}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||r)&&i.in()}}let le=!1,oe=!1,ae=null,U=!1,Ce=!1;function Be(e){U=e}function Ue(e){Ce=e}let Te=[],Q=0;let p=null;function H(e){p=e}let h=null;function K(e){h=e}let $=null,g=null,E=0,R=null;function Gr(e){R=e}let fr=0,j=!1,m=null;function cr(){return++fr}function Re(){return!ve||m!==null&&m.l===null}function ne(e){var s,v;var r=e.f;if(r&I)return!0;if(r&ee){var n=e.deps,t=(r&W)!==0;if(n!==null){var l;if(r&ie){for(l=0;l<n.length;l++)((s=n[l]).reactions??(s.reactions=[])).push(e);e.f^=ie}for(l=0;l<n.length;l++){var i=n[l];if(ne(i)&&er(i),t&&h!==null&&!j&&!((v=i==null?void 0:i.reactions)!=null&&v.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}t||O(e,y)}return!1}function Jr(e,r){for(var n=r;n!==null;){if(n.f&ye)try{n.fn(e);return}catch{n.f^=ye}n=n.parent}throw le=!1,e}function Zr(e){return(e.f&z)===0&&(e.parent===null||(e.parent.f&ye)===0)}function _e(e,r,n,t){if(le){if(n===null&&(le=!1),Zr(r))throw e;return}n!==null&&(le=!0);{Jr(e,r);return}}function vr(e){var a;var r=g,n=E,t=R,l=p,i=j,s=$,v=m,f=e.f;g=null,E=0,R=null,p=f&(P|ce)?null:e,j=!U&&(f&W)!==0,$=null,m=e.ctx;try{var u=(0,e.fn)(),o=e.deps;if(g!==null){var c;if(X(e,E),o!==null&&E>0)for(o.length=E+g.length,c=0;c<g.length;c++)o[E+c]=g[c];else e.deps=o=g;if(!j)for(c=E;c<o.length;c++)((a=o[c]).reactions??(a.reactions=[])).push(e)}else o!==null&&E<o.length&&(X(e,E),o.length=E);return u}finally{g=r,E=n,R=t,p=l,j=i,$=s,m=v}}function Qr(e,r){let n=r.reactions;if(n!==null){var t=n.indexOf(e);if(t!==-1){var l=n.length-1;l===0?n=r.reactions=null:(n[t]=n[l],n.pop())}}n===null&&r.f&D&&(g===null||!g.includes(r))&&(O(r,ee),r.f&(W|ie)||(r.f^=ie),X(r,0))}function X(e,r){var n=e.deps;if(n!==null)for(var t=r;t<n.length;t++)Qr(e,n[t])}function de(e){var r=e.f;if(!(r&z)){O(e,y);var n=h,t=m;h=e;try{r&Oe?Wr(e):ur(e),ir(e),lr(e);var l=vr(e);e.teardown=typeof l=="function"?l:null,e.version=fr}catch(i){_e(i,e,n,t||e.ctx)}finally{h=n}}}function Xr(){if(Q>1e3){Q=0;try{Sr()}catch(e){if(ae!==null)_e(e,ae,null);else throw e}}Q++}function en(e){var r=e.length;if(r!==0){Xr();var n=U;U=!0;try{for(var t=0;t<r;t++){var l=e[t];l.f&y||(l.f^=y);var i=[];_r(l,i),rn(i)}}finally{U=n}}}function rn(e){var r=e.length;if(r!==0)for(var n=0;n<r;n++){var t=e[n];if(!(t.f&(z|Y)))try{ne(t)&&(de(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?sr(t):t.fn=null))}catch(l){_e(l,t,null,t.ctx)}}}function nn(){if(oe=!1,Q>1001)return;const e=Te;Te=[],en(e),oe||(Q=0,ae=null)}function he(e){oe||(oe=!0,queueMicrotask(nn)),ae=e;for(var r=e;r.parent!==null;){r=r.parent;var n=r.f;if(n&(ce|P)){if(!(n&y))return;r.f^=y}}Te.push(r)}function _r(e,r){var n=e.first,t=[];e:for(;n!==null;){var l=n.f,i=(l&P)!==0,s=i&&(l&y)!==0,v=n.next;if(!s&&!(l&Y))if(l&fe){if(i)n.f^=y;else try{ne(n)&&de(n)}catch(c){_e(c,n,null,n.ctx)}var f=n.first;if(f!==null){n=f;continue}}else l&Ke&&t.push(n);if(v===null){let c=n.parent;for(;c!==null;){if(e===c)break e;var u=c.next;if(u!==null){n=u;continue e}c=c.parent}}n=v}for(var o=0;o<t.length;o++)f=t[o],r.push(f),_r(f,r)}function J(e){var o;var r=e.f,n=(r&D)!==0;if(n&&r&z){var t=Xe(e);return Se(e),t}if(p!==null){$!==null&&$.includes(e)&&Dr();var l=p.deps;g===null&&l!==null&&l[E]===e?E++:g===null?g=[e]:g.push(e),R!==null&&h!==null&&h.f&y&&!(h.f&P)&&R.includes(e)&&(O(h,I),he(h))}else if(n&&e.deps===null)for(var i=e,s=i.parent,v=i;s!==null;)if(s.f&D){var f=s;v=f,s=f.parent}else{var u=s;(o=u.deriveds)!=null&&o.includes(v)||(u.deriveds??(u.deriveds=[])).push(v);break}return n&&(i=e,ne(i)&&er(i)),e.v}function tn(e){const r=p;try{return p=null,e()}finally{p=r}}const ln=~(I|ee|y);function O(e,r){e.f=e.f&ln|r}function De(e,r=!1,n){m={p:m,c:null,e:null,m:!1,s:e,x:null,l:null},ve&&!r&&(m.l={s:null,u:null,r1:[],r2:T(!1)})}function Ae(e){const r=m;if(r!==null){const s=r.e;if(s!==null){var n=h,t=p;r.e=null;try{for(var l=0;l<s.length;l++){var i=s[l];K(i.effect),H(i.reaction),nr(i.fn)}}finally{K(n),H(t)}}m=r.p,r.m=!0}return{}}const dr=new Set,xe=new Set;function un(e){for(var r=0;r<e.length;r++)dr.add(e[r]);for(var n of xe)n(e)}function te(e){var N;var r=this,n=r.ownerDocument,t=e.type,l=((N=e.composedPath)==null?void 0:N.call(e))||[],i=l[0]||e.target,s=0,v=e.__root;if(v){var f=l.indexOf(v);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var u=l.indexOf(r);if(u===-1)return;f<=u&&(s=f)}if(i=l[s]||e.target,i!==r){gr(e,"currentTarget",{configurable:!0,get(){return i||n}});var o=p,c=h;H(null),K(null);try{for(var a,_=[];i!==null;){var d=i.assignedSlot||i.parentNode||i.host||null;try{var w=i["__"+t];if(w!==void 0&&!i.disabled)if(He(w)){var[C,...L]=w;C.apply(i,[e,...L])}else w.call(i,e)}catch(k){a?_.push(k):a=k}if(e.cancelBubble||d===r||d===null)break;i=d}if(a){for(let k of _)queueMicrotask(()=>{throw k});throw a}}finally{e.__root=r,delete e.currentTarget,H(o),K(c)}}}function sn(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function Pe(e,r){var n=h;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function pe(e,r){var n=(r&qr)!==0,t=(r&Mr)!==0,l,i=!e.startsWith("<!>");return()=>{l===void 0&&(l=sn(i?e:"<!>"+e),n||(l=ue(l)));var s=t?document.importNode(l,!0):l.cloneNode(!0);if(n){var v=ue(s),f=s.lastChild;Pe(v,f)}else Pe(s,s);return s}}function Ve(){var e=document.createDocumentFragment(),r=document.createComment(""),n=Ze();return e.append(r,n),Pe(r,n),e}function V(e,r){e!==null&&e.before(r)}const on=["touchstart","touchmove"];function an(e){return on.includes(e)}function fn(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function cn(e,r){return vn(e,r)}const q=new Map;function vn(e,{target:r,anchor:n,props:t={},events:l,context:i,intro:s=!0}){jr();var v=new Set,f=c=>{for(var a=0;a<c.length;a++){var _=c[a];if(!v.has(_)){v.add(_);var d=an(_);r.addEventListener(_,te,{passive:d});var w=q.get(_);w===void 0?(document.addEventListener(_,te,{passive:d}),q.set(_,1)):q.set(_,w+1)}}};f(mr(dr)),xe.add(f);var u=void 0,o=Hr(()=>{var c=n??r.appendChild(Ze());return Le(()=>{if(i){De({});var a=m;a.c=i}l&&(t.$$events=l),u=e(c,t)||{},i&&Ae()}),()=>{var d;for(var a of v){r.removeEventListener(a,te);var _=q.get(a);--_===0?(document.removeEventListener(a,te),q.delete(a)):q.set(a,_)}xe.delete(f),Ye.delete(u),c!==n&&((d=c.parentNode)==null||d.removeChild(c))}});return Ye.set(u,o),u}let Ye=new WeakMap;function be(e,r,n=!1){var t=e,l=null,i=null,s=b,v=n?Ne:0,f=!1;const u=(c,a=!0)=>{f=!0,o(a,c)},o=(c,a)=>{s!==(s=c)&&(s?(l?je(l):a&&(l=Le(()=>a(t))),i&&Me(i,()=>{i=null})):(i?je(i):a&&(i=Le(()=>a(t))),l&&Me(l,()=>{l=null})))};tr(()=>{f=!1,r(u),f||o(null,null)},v)}function _n(e,r,n){if(e==null)return r(void 0),B;const t=tn(()=>e.subscribe(r,n));return t.unsubscribe?()=>t.unsubscribe():t}function Fe(e,r,n){const t=n[r]??(n[r]={store:null,source:$r(void 0),unsubscribe:B});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=B;else{var l=!0;t.unsubscribe=_n(e,i=>{l?t.source.v=i:S(t.source,i)}),l=!1}return J(t.source)}function F(e,r){return e.set(r),r}function $e(){const e={};return Yr(()=>{for(var r in e)e[r].unsubscribe()}),e}const dn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dn);const M=[];function hn(e,r=B){let n=null;const t=new Set;function l(v){if(We(e,v)&&(e=v,n)){const f=!M.length;for(const u of t)u[1](),M.push(u,e);if(f){for(let u=0;u<M.length;u+=2)M[u][0](M[u+1]);M.length=0}}}function i(v){l(v(e))}function s(v,f=B){const u=[v,f];return t.add(u),t.size===1&&(n=r(l,i)||B),v(e),()=>{t.delete(u),t.size===0&&n&&(n(),n=null)}}return{set:l,update:i,subscribe:s}}const x=hn("");var pn=(e,r)=>F(x,"home"),mn=(e,r)=>F(x,"profiles"),gn=(e,r)=>F(x,"projects"),wn=pe('<div class="navbar"><a href="#" class="navbar-link">HOME</a> <div class="navbar-sep"></div> <a href="#" class="navbar-link">PROFILES</a> <div class="navbar-sep"></div> <a href="#" class="navbar-link">PROJECTS</a></div>');function bn(e,r){De(r,!0);const n=$e(),t=()=>Fe(x,"$curPage",n);let l,i=[];document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded!"),l=document.querySelector(".navbar"),window.scrollY==0?l.classList.add("navbar-init-up"):l.classList.add("navbar-init-down"),i=Array.from(document.getElementsByClassName("navbar-link")),s(!0)},!1),addEventListener("scroll",()=>{window.scrollY==0?(l.classList.add("navbar-up"),l.classList.remove("navbar-down")):(l.classList.add("navbar-down"),l.classList.remove("navbar-up"))});function s(c,a){for(let _=0;_<i.length;_++){const d=i[_];t()==d.innerHTML.toLowerCase()?(d.classList.remove("navbar-inactive","navbar-inactive-pgload"),d.classList.add("navbar-active")):(d.classList.remove("navbar-active"),c?d.classList.add("navbar-inactive-pgload"):d.classList.add("navbar-inactive"))}}rr(()=>s(!1,t()));var v=wn(),f=se(v);f.__click=[pn,t];var u=Ee(f,4);u.__click=[mn,t];var o=Ee(u,4);o.__click=[gn,t],V(e,v),Ae()}un(["click"]);Fr();var yn=pe("<div><h1> </h1></div>");function En(e){const r=$e(),n=()=>Fe(x,"$curPage",r);var t=yn(),l=se(t),i=se(l);Kr(()=>fn(i,`Welcome to ${n()??""}`)),V(e,t)}var Ln=pe('<div class="grid svelte-1mfefo2"><div class="col svelte-1mfefo2"><div class="item"><h1>hello</h1></div> <div class="item"><h1>hello</h1></div></div> <div class="col svelte-1mfefo2"><div class="item"><h1>hello</h1></div> <div class="item"><h1>hello</h1></div></div></div>');function Tn(e){var r=Ln();V(e,r)}var xn=pe('<!> <div class="main-content"><!></div>',1);function Pn(e,r){De(r,!0);const n=$e(),t=()=>Fe(x,"$curPage",n);F(x,A(new URLSearchParams(window.location.search).get("p")));const l=["home","profiles","projects"];if(t()==null)F(x,"home");else{F(x,A(t().toLowerCase()));let a=!1;for(let _=0;_<l.length;_++)t()==l[_]&&(a=!0);a||F(x,"home")}function i(a){let _=window.location.origin+window.location.pathname+"?p="+a+"#";window.history.pushState({path:_},"",_)}rr(()=>i(t()));var s=xn(),v=we(s);bn(v,{});var f=Ee(v,2),u=se(f);{var o=a=>{En(a)},c=a=>{var _=Ve(),d=we(_);{var w=L=>{},C=L=>{var N=Ve(),k=we(N);{var hr=me=>{Tn(me)};be(k,me=>{t()=="projects"&&me(hr)},!0)}V(L,N)};be(d,L=>{t()=="profiles"?L(w):L(C,!1)},!0)}V(a,_)};be(u,a=>{t()=="home"?a(o):a(c,!1)})}V(e,s),Ae()}cn(Pn,{target:document.getElementById("app")});