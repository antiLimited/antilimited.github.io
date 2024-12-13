(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();const Er=!1;var wr=Array.isArray,yr=Array.from,xr=Object.defineProperty,Q=Object.getOwnPropertyDescriptor;const B=2,nr=4,er=8,Tr=16,b=32,V=64,K=128,U=256,I=512,E=1024,$=2048,Y=4096,lr=8192,A=16384,Nr=32768,Or=1<<19,Cr=1<<20;function Fr(r){return r===this.v}function Dr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}let ur=!1;function Sr(){ur=!0}function br(r){return{f:0,v:r,reactions:null,equals:Fr,version:0}}const Ar=2;var X,or,ar;function Lr(){if(X===void 0){X=window;var r=Element.prototype,t=Node.prototype;or=Q(t,"firstChild").get,ar=Q(t,"nextSibling").get,r.__click=void 0,r.__className="",r.__attributes=null,r.__styles=null,r.__e=void 0,Text.prototype.__t=void 0}}function Rr(r=""){return document.createTextNode(r)}function Pr(r){return or.call(r)}function kr(r){return ar.call(r)}function ir(r){var t=r.children;if(t!==null){r.children=null;for(var n=0;n<t.length;n+=1){var e=t[n];e.f&B?sr(e):L(e)}}}function Ir(r){for(var t=r.parent;t!==null;){if(!(t.f&B))return t;t=t.parent}return null}function qr(r){var t,n=m;C(Ir(r));try{ir(r),t=dr(r)}finally{C(n)}return t}function Mr(r){var t=qr(r),n=(T||r.f&U)&&r.deps!==null?Y:E;F(r,n),r.equals(t)||(r.v=t,r.version=Kr())}function sr(r){ir(r),S(r,0),F(r,A),r.v=r.children=r.deps=r.ctx=r.reactions=null}function Br(r,t){var n=t.last;n===null?t.last=t.first=r:(n.next=r,r.prev=n,t.last=r)}function j(r,t,n,e=!0){var l=(r&V)!==0,u=m,o={ctx:d,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:r|$,first:null,fn:t,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(n){var s=N;try{Z(!0),G(o),o.f|=Nr}catch(v){throw L(o),v}finally{Z(s)}}else t!==null&&Xr(o);var a=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&Cr)===0;if(!a&&!l&&e&&(u!==null&&Br(o,u),g!==null&&g.f&B)){var i=g;(i.children??(i.children=[])).push(o)}return o}function Vr(r){const t=j(V,r,!0);return()=>{L(t)}}function Ur(r){return j(nr,r,!1)}function Yr(r,t=!0){return j(er|b,r,!0,t)}function fr(r){var t=r.teardown;if(t!==null){const n=g;O(null);try{t.call(null)}finally{O(n)}}}function cr(r){var t=r.deriveds;if(t!==null){r.deriveds=null;for(var n=0;n<t.length;n+=1)sr(t[n])}}function _r(r,t=!1){var n=r.first;for(r.first=r.last=null;n!==null;){var e=n.next;L(n,t),n=e}}function Hr(r){for(var t=r.first;t!==null;){var n=t.next;t.f&b||L(t),t=n}}function L(r,t=!0){var n=!1;if((t||r.f&Or)&&r.nodes_start!==null){for(var e=r.nodes_start,l=r.nodes_end;e!==null;){var u=e===l?null:kr(e);e.remove(),e=u}n=!0}_r(r,t&&!n),cr(r),S(r,0),F(r,A);var o=r.transitions;if(o!==null)for(const a of o)a.stop();fr(r);var s=r.parent;s!==null&&s.first!==null&&vr(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=null}function vr(r){var t=r.parent,n=r.prev,e=r.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),t!==null&&(t.first===r&&(t.first=e),t.last===r&&(t.last=n))}let k=!1,q=!1,M=null,N=!1;function Z(r){N=r}let W=[],D=0;let g=null;function O(r){g=r}let m=null;function C(r){m=r}let h=null,p=0,pr=0,T=!1,d=null;function Kr(){return++pr}function z(r){var o,s;var t=r.f;if(t&$)return!0;if(t&Y){var n=r.deps,e=(t&U)!==0;if(n!==null){var l;if(t&I){for(l=0;l<n.length;l++)((o=n[l]).reactions??(o.reactions=[])).push(r);r.f^=I}for(l=0;l<n.length;l++){var u=n[l];if(z(u)&&Mr(u),e&&m!==null&&!T&&!((s=u==null?void 0:u.reactions)!=null&&s.includes(r))&&(u.reactions??(u.reactions=[])).push(r),u.version>r.version)return!0}}e||F(r,E)}return!1}function Wr(r,t){for(var n=t;n!==null;){if(n.f&K)try{n.fn(r);return}catch{n.f^=K}n=n.parent}throw k=!1,r}function $r(r){return(r.f&A)===0&&(r.parent===null||(r.parent.f&K)===0)}function H(r,t,n,e){if(k){if(n===null&&(k=!1),$r(t))throw r;return}n!==null&&(k=!0);{Wr(r,t);return}}function dr(r){var v;var t=h,n=p,e=g,l=T,u=d,o=r.f;h=null,p=0,g=o&(b|V)?null:r,T=!N&&(o&U)!==0,d=r.ctx;try{var s=(0,r.fn)(),a=r.deps;if(h!==null){var i;if(S(r,p),a!==null&&p>0)for(a.length=p+h.length,i=0;i<h.length;i++)a[p+i]=h[i];else r.deps=a=h;if(!T)for(i=p;i<a.length;i++)((v=a[i]).reactions??(v.reactions=[])).push(r)}else a!==null&&p<a.length&&(S(r,p),a.length=p);return s}finally{h=t,p=n,g=e,T=l,d=u}}function jr(r,t){let n=t.reactions;if(n!==null){var e=n.indexOf(r);if(e!==-1){var l=n.length-1;l===0?n=t.reactions=null:(n[e]=n[l],n.pop())}}n===null&&t.f&B&&(h===null||!h.includes(t))&&(F(t,Y),t.f&(U|I)||(t.f^=I),S(t,0))}function S(r,t){var n=r.deps;if(n!==null)for(var e=t;e<n.length;e++)jr(r,n[e])}function G(r){var t=r.f;if(!(t&A)){F(r,E);var n=m,e=d;m=r;try{t&Tr?Hr(r):_r(r),cr(r),fr(r);var l=dr(r);r.teardown=typeof l=="function"?l:null,r.version=pr}catch(u){H(u,r,n,e||r.ctx)}finally{m=n}}}function zr(){if(D>1e3){D=0;try{Dr()}catch(r){if(M!==null)H(r,M,null);else throw r}}D++}function Gr(r){var t=r.length;if(t!==0){zr();var n=N;N=!0;try{for(var e=0;e<t;e++){var l=r[e];l.f&E||(l.f^=E);var u=[];hr(l,u),Jr(u)}}finally{N=n}}}function Jr(r){var t=r.length;if(t!==0)for(var n=0;n<t;n++){var e=r[n];if(!(e.f&(A|lr)))try{z(e)&&(G(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?vr(e):e.fn=null))}catch(l){H(l,e,null,e.ctx)}}}function Qr(){if(q=!1,D>1001)return;const r=W;W=[],Gr(r),q||(D=0,M=null)}function Xr(r){q||(q=!0,queueMicrotask(Qr)),M=r;for(var t=r;t.parent!==null;){t=t.parent;var n=t.f;if(n&(V|b)){if(!(n&E))return;t.f^=E}}W.push(t)}function hr(r,t){var n=r.first,e=[];r:for(;n!==null;){var l=n.f,u=(l&b)!==0,o=u&&(l&E)!==0,s=n.next;if(!o&&!(l&lr))if(l&er){if(u)n.f^=E;else try{z(n)&&G(n)}catch(f){H(f,n,null,n.ctx)}var a=n.first;if(a!==null){n=a;continue}}else l&nr&&e.push(n);if(s===null){let f=n.parent;for(;f!==null;){if(r===f)break r;var i=f.next;if(i!==null){n=i;continue r}f=f.parent}}n=s}for(var v=0;v<e.length;v++)a=e[v],t.push(a),hr(a,t)}const Zr=~($|Y|E);function F(r,t){r.f=r.f&Zr|t}function rt(r,t=!1,n){d={p:d,c:null,e:null,m:!1,s:r,x:null,l:null},ur&&!t&&(d.l={s:null,u:null,r1:[],r2:br(!1)})}function tt(r){const t=d;if(t!==null){const o=t.e;if(o!==null){var n=m,e=g;t.e=null;try{for(var l=0;l<o.length;l++){var u=o[l];C(u.effect),O(u.reaction),Ur(u.fn)}}finally{C(n),O(e)}}d=t.p,t.m=!0}return{}}const nt=new Set,rr=new Set;function P(r){var J;var t=this,n=t.ownerDocument,e=r.type,l=((J=r.composedPath)==null?void 0:J.call(r))||[],u=l[0]||r.target,o=0,s=r.__root;if(s){var a=l.indexOf(s);if(a!==-1&&(t===document||t===window)){r.__root=t;return}var i=l.indexOf(t);if(i===-1)return;a<=i&&(o=a)}if(u=l[o]||r.target,u!==t){xr(r,"currentTarget",{configurable:!0,get(){return u||n}});var v=g,f=m;O(null),C(null);try{for(var c,_=[];u!==null;){var w=u.assignedSlot||u.parentNode||u.host||null;try{var y=u["__"+e];if(y!==void 0&&!u.disabled)if(wr(y)){var[gr,...mr]=y;gr.apply(u,[r,...mr])}else y.call(u,r)}catch(R){c?_.push(R):c=R}if(r.cancelBubble||w===t||w===null)break;u=w}if(c){for(let R of _)queueMicrotask(()=>{throw R});throw c}}finally{r.__root=t,delete r.currentTarget,O(v),C(f)}}}function et(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function lt(r,t){var n=m;n.nodes_start===null&&(n.nodes_start=r,n.nodes_end=t)}function ut(r,t){var n=(t&Ar)!==0,e,l=!r.startsWith("<!>");return()=>{e===void 0&&(e=et(l?r:"<!>"+r));var u=n?document.importNode(e,!0):e.cloneNode(!0);{var o=Pr(u),s=u.lastChild;lt(o,s)}return u}}function ot(r,t){r!==null&&r.before(t)}const at=["touchstart","touchmove"];function it(r){return at.includes(r)}function st(r,t){return ft(r,t)}const x=new Map;function ft(r,{target:t,anchor:n,props:e={},events:l,context:u,intro:o=!0}){Lr();var s=new Set,a=f=>{for(var c=0;c<f.length;c++){var _=f[c];if(!s.has(_)){s.add(_);var w=it(_);t.addEventListener(_,P,{passive:w});var y=x.get(_);y===void 0?(document.addEventListener(_,P,{passive:w}),x.set(_,1)):x.set(_,y+1)}}};a(yr(nt)),rr.add(a);var i=void 0,v=Vr(()=>{var f=n??t.appendChild(Rr());return Yr(()=>{if(u){rt({});var c=d;c.c=u}l&&(e.$$events=l),i=r(f,e)||{},u&&tt()}),()=>{var w;for(var c of s){t.removeEventListener(c,P);var _=x.get(c);--_===0?(document.removeEventListener(c,P),x.delete(c)):x.set(c,_)}rr.delete(a),tr.delete(i),f!==n&&((w=f.parentNode)==null||w.removeChild(f))}});return tr.set(i,v),i}let tr=new WeakMap;const ct="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);Sr();var _t=ut('<link rel="stylesheet" href="src/style.css"> <div class="navbar"><a href="#">Profiles</a> <a href="#">Test Page</a></div> <div class="main-content"><h1>hello</h1> <p>line\\nline</p></div>',1);function vt(r){var t=_t();ot(r,t)}st(vt,{target:document.getElementById("app")});
