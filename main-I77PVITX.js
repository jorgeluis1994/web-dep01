import{$ as Wo,$a as xe,A as ft,Aa as V,B as $o,Ba as W,C as He,Ca as M,D as Hr,Da as B,E as Mi,Ea as j,F as Oi,Fa as qi,G as Bi,Ga as re,H as fe,Ha as Le,I as Wr,Ia as Yi,J as Q,Ja as Gt,K as R,Ka as Jr,L as zo,La as Ki,M as m,Ma as en,N as z,Na as Ee,O as Ni,Oa as D,P as k,Pa as oe,Q as S,Qa as G,R as p,Ra as he,S as ht,Sa as tn,T as Li,Ta as on,U as Ht,Ua as rn,V as _e,Va as tt,W as Ho,Wa as ot,X as We,Xa as Ge,Y as F,Ya as Zi,Z as Gr,Za as rt,_ as qr,_a as q,a as h,aa as Pi,ab as ge,b as O,ba as H,bb as se,ca as Vi,cb as le,d as Ei,da as Ui,db as ce,e as xi,ea as Me,eb as Xi,f as Ai,fa as E,fb as Yo,g as Ur,ga as Ne,gb as Qi,h as jr,ha as ji,hb as U,i as ie,ia as Yr,ib as Ce,j as ve,ja as $i,jb as nt,k as Be,ka as ke,kb as Y,l as ae,la as zi,lb as nn,m as v,ma as Kr,mb as Ji,n as $t,na as Zr,nb as ea,o as Ri,oa as w,ob as K,p as Ii,pa as Je,pb as gt,q as A,qa as Hi,qb as qt,r as $r,ra as Go,rb as Ae,s as ye,sa as qo,sb as mt,t as Fi,ta as et,tb as ta,u as jo,ua as T,ub as oa,v as Ti,va as Wi,vb as J,w as Qe,wa as Wt,wb as ra,x as pt,xa as Xr,y as zt,ya as Gi,z as zr,za as Qr}from"./chunk-YC4BRXBP.js";var aa=null;function we(){return aa}function an(t){aa??=t}var Yt=class{},sn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>p(sa),providedIn:"platform"})}return t})();var sa=(()=>{class t extends sn{_location;_history;_doc=p(F);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return we().getBaseHref(this._doc)}onPopState(e){let o=we().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",e,!1),()=>o.removeEventListener("popstate",e)}onHashChange(e){let o=we().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",e,!1),()=>o.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,o,n){this._history.pushState(e,o,n)}replaceState(e,o,n){this._history.replaceState(e,o,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function la(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function na(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function qe(t){return t&&t[0]!=="?"?`?${t}`:t}var Ko=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>p(da),providedIn:"root"})}return t})(),ca=new k(""),da=(()=>{class t extends Ko{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,o){super(),this._platformLocation=e,this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??p(F).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return la(this._baseHref,e)}path(e=!1){let o=this._platformLocation.pathname+qe(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${o}${n}`:o}pushState(e,o,n,i){let a=this.prepareExternalUrl(n+qe(i));this._platformLocation.pushState(e,o,a)}replaceState(e,o,n,i){let a=this.prepareExternalUrl(n+qe(i));this._platformLocation.replaceState(e,o,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(o){return new(o||t)(S(sn),S(ca,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bt=(()=>{class t{_subject=new ie;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let o=this._locationStrategy.getBaseHref();this._basePath=Kd(na(ia(o))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,o=""){return this.path()==this.normalize(e+qe(o))}normalize(e){return t.stripTrailingSlash(Yd(this._basePath,ia(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,o="",n=null){this._locationStrategy.pushState(n,"",e,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+qe(o)),n)}replaceState(e,o="",n=null){this._locationStrategy.replaceState(n,"",e,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+qe(o)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",o){this._urlChangeListeners.forEach(n=>n(e,o))}subscribe(e,o,n){return this._subject.subscribe({next:e,error:o??void 0,complete:n??void 0})}static normalizeQueryParams=qe;static joinWithSlash=la;static stripTrailingSlash=na;static \u0275fac=function(o){return new(o||t)(S(Ko))};static \u0275prov=m({token:t,factory:()=>qd(),providedIn:"root"})}return t})();function qd(){return new bt(S(Ko))}function Yd(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function ia(t){return t.replace(/\/index.html$/,"")}function Kd(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var it=(()=>{class t{_viewContainer;_context=new Zo;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,o){this._viewContainer=e,this._thenTemplateRef=o}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){ua(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){ua(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,o){return!0}static \u0275fac=function(o){return new(o||t)(T(Wt),T(Go))};static \u0275dir=M({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Zo=class{$implicit=null;ngIf=null};function ua(t,r){if(t&&!t.createEmbeddedView)throw new R(2020,!1)}var ln=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,o,n){this._ngEl=e,this._differs=o,this._renderer=n}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,o){let[n,i]=e.split("."),a=n.indexOf("-")===-1?void 0:Je.DashCase;o!=null?this._renderer.setStyle(this._ngEl.nativeElement,n,i?`${o}${i}`:o,a):this._renderer.removeStyle(this._ngEl.nativeElement,n,a)}_applyChanges(e){e.forEachRemovedItem(o=>this._setStyle(o.key,null)),e.forEachAddedItem(o=>this._setStyle(o.key,o.currentValue)),e.forEachChangedItem(o=>this._setStyle(o.key,o.currentValue))}static \u0275fac=function(o){return new(o||t)(T(Ne),T(ta),T(et))};static \u0275dir=M({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Kt=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let o=this._viewContainerRef;if(this._viewRef&&o.remove(o.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let n=this._createContextForwardProxy();this._viewRef=o.createEmbeddedView(this.ngTemplateOutlet,n,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,o,n)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,o,n):!1,get:(e,o,n)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,o,n)}})}static \u0275fac=function(o){return new(o||t)(T(Wt))};static \u0275dir=M({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Me]})}return t})();var ne=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({})}return t})();function cn(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let o=e.indexOf("="),[n,i]=o==-1?[e,""]:[e.slice(0,o),e.slice(o+1)];if(n.trim()===r)return decodeURIComponent(i)}return null}var Zt=class{};var dn="browser",Xd="server";function Xo(t){return t===dn}function pa(t){return t===Xd}var Jo=new k(""),mn=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,o){this._zone=o,e.forEach(n=>{n.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,o,n,i){return this._findPluginFor(o).addEventListener(e,o,n,i)}getZone(){return this._zone}_findPluginFor(e){let o=this._eventNameToPlugin.get(e);if(o)return o;if(o=this._plugins.find(i=>i.supports(e)),!o)throw new R(5101,!1);return this._eventNameToPlugin.set(e,o),o}static \u0275fac=function(o){return new(o||t)(S(Jo),S(Le))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Xt=class{_doc;constructor(r){this._doc=r}manager},pn="ng-app-id";function fa(t){for(let r of t)r.remove()}function ha(t,r){let e=r.createElement("style");return e.textContent=t,e}function Qd(t,r,e,o){let n=t.head?.querySelectorAll(`style[${pn}="${r}"],link[${pn}="${r}"]`);if(n)for(let i of n)i.removeAttribute(pn),i instanceof HTMLLinkElement?o.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}function hn(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var bn=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,o,n,i={}){this.doc=e,this.appId=o,this.nonce=n,Qd(e,o,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,o){for(let n of e)this.addUsage(n,this.inline,ha);o?.forEach(n=>this.addUsage(n,this.external,hn))}removeStyles(e,o){for(let n of e)this.removeUsage(n,this.inline);o?.forEach(n=>this.removeUsage(n,this.external))}addUsage(e,o,n){let i=o.get(e);i?i.usage++:o.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,n(e,this.doc)))})}removeUsage(e,o){let n=o.get(e);n&&(n.usage--,n.usage<=0&&(fa(n.elements),o.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])fa(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[o,{elements:n}]of this.inline)n.push(this.addElement(e,ha(o,this.doc)));for(let[o,{elements:n}]of this.external)n.push(this.addElement(e,hn(o,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,o){return this.nonce&&o.setAttribute("nonce",this.nonce),e.appendChild(o)}static \u0275fac=function(o){return new(o||t)(S(F),S(Yr),S(Kr,8),S(ke))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),fn={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},vn=/%COMP%/g;var ma="%COMP%",Jd=`_nghost-${ma}`,eu=`_ngcontent-${ma}`,tu=!0,ou=new k("",{providedIn:"root",factory:()=>tu});function ru(t){return eu.replace(vn,t)}function nu(t){return Jd.replace(vn,t)}function ba(t,r){return r.map(e=>e.replace(vn,t))}var eo=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,o,n,i,a,s,l,c=null,d=null){this.eventManager=e,this.sharedStylesHost=o,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=s,this.ngZone=l,this.nonce=c,this.tracingService=d,this.platformIsServer=!1,this.defaultRenderer=new Qt(e,a,l,this.platformIsServer,this.tracingService)}createRenderer(e,o){if(!e||!o)return this.defaultRenderer;let n=this.getOrCreateRenderer(e,o);return n instanceof Qo?n.applyToHost(e):n instanceof Jt&&n.applyStyles(),n}getOrCreateRenderer(e,o){let n=this.rendererByCompId,i=n.get(o.id);if(!i){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.platformIsServer,f=this.tracingService;switch(o.encapsulation){case Zr.Emulated:i=new Qo(l,c,o,this.appId,d,a,s,u,f);break;case Zr.ShadowDom:return new gn(l,c,e,o,a,s,this.nonce,u,f);default:i=new Jt(l,c,o,d,a,s,u,f);break}n.set(o.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(o){return new(o||t)(S(mn),S(bn),S(Yr),S(ou),S(F),S(ke),S(Le),S(Kr),S(qi,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Qt=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,o,n,i){this.eventManager=r,this.doc=e,this.ngZone=o,this.platformIsServer=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(fn[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(ga(r)?r.content:r).appendChild(e)}insertBefore(r,e,o){r&&(ga(r)?r.content:r).insertBefore(e,o)}removeChild(r,e){e.remove()}selectRootElement(r,e){let o=typeof r=="string"?this.doc.querySelector(r):r;if(!o)throw new R(-5104,!1);return e||(o.textContent=""),o}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,o,n){if(n){e=n+":"+e;let i=fn[n];i?r.setAttributeNS(i,e,o):r.setAttribute(e,o)}else r.setAttribute(e,o)}removeAttribute(r,e,o){if(o){let n=fn[o];n?r.removeAttributeNS(n,e):r.removeAttribute(`${o}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,o,n){n&(Je.DashCase|Je.Important)?r.style.setProperty(e,o,n&Je.Important?"important":""):r.style[e]=o}removeStyle(r,e,o){o&Je.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,o){r!=null&&(r[e]=o)}setValue(r,e){r.nodeValue=e}listen(r,e,o,n){if(typeof r=="string"&&(r=we().getGlobalEventTarget(this.doc,r),!r))throw new R(5102,!1);let i=this.decoratePreventDefault(o);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,n)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function ga(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var gn=class extends Qt{sharedStylesHost;hostEl;shadowRoot;constructor(r,e,o,n,i,a,s,l,c){super(r,i,a,l,c),this.sharedStylesHost=e,this.hostEl=o,this.shadowRoot=o.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=ba(n.id,d);for(let f of d){let g=document.createElement("style");s&&g.setAttribute("nonce",s),g.textContent=f,this.shadowRoot.appendChild(g)}let u=n.getExternalStyles?.();if(u)for(let f of u){let g=hn(f,i);s&&g.setAttribute("nonce",s),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,o){return super.insertBefore(this.nodeOrShadowRoot(r),e,o)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Jt=class extends Qt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,o,n,i,a,s,l,c){super(r,i,a,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=n;let d=o.styles;this.styles=c?ba(c,d):d,this.styleUrls=o.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Hi.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Qo=class extends Jt{contentAttr;hostAttr;constructor(r,e,o,n,i,a,s,l,c){let d=n+"-"+o.id;super(r,e,o,i,a,s,l,c,d),this.contentAttr=ru(d),this.hostAttr=nu(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let o=super.createElement(r,e);return super.setAttribute(o,this.contentAttr,""),o}};var er=class t extends Yt{supportsDOMEvents=!0;static makeCurrent(){an(new t)}onAndCancel(r,e,o,n){return r.addEventListener(e,o,n),()=>{r.removeEventListener(e,o,n)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=iu();return e==null?null:au(e)}resetBaseElement(){to=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return cn(document.cookie,r)}},to=null;function iu(){return to=to||document.head.querySelector("base"),to?to.getAttribute("href"):null}function au(t){return new URL(t,document.baseURI).pathname}var su=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ya=(()=>{class t extends Xt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,o,n,i){return e.addEventListener(o,n,i),()=>this.removeEventListener(e,o,n,i)}removeEventListener(e,o,n,i){return e.removeEventListener(o,n,i)}static \u0275fac=function(o){return new(o||t)(S(F))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),va=["alt","control","meta","shift"],lu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},cu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Ca=(()=>{class t extends Xt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,o,n,i){let a=t.parseEventName(o),s=t.eventCallback(a.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>we().onAndCancel(e,a.domEventName,s,i))}static parseEventName(e){let o=e.toLowerCase().split("."),n=o.shift();if(o.length===0||!(n==="keydown"||n==="keyup"))return null;let i=t._normalizeKey(o.pop()),a="",s=o.indexOf("code");if(s>-1&&(o.splice(s,1),a="code."),va.forEach(c=>{let d=o.indexOf(c);d>-1&&(o.splice(d,1),a+=c+".")}),a+=i,o.length!=0||i.length===0)return null;let l={};return l.domEventName=n,l.fullKey=a,l}static matchEventFullKeyCode(e,o){let n=lu[e.key]||e.key,i="";return o.indexOf("code.")>-1&&(n=e.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),va.forEach(a=>{if(a!==n){let s=cu[a];s(e)&&(i+=a+".")}}),i+=n,i===o)}static eventCallback(e,o,n){return i=>{t.matchEventFullKeyCode(i,e)&&n.runGuarded(()=>o(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(o){return new(o||t)(S(F))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function yn(t,r,e){let o=h({rootComponent:t,platformRef:e?.platformRef},du(r));return oa(o)}function du(t){return{appProviders:[...gu,...t?.providers??[]],platformProviders:hu}}function uu(){er.makeCurrent()}function pu(){return new qr}function fu(){return ji(document),document}var hu=[{provide:ke,useValue:dn},{provide:$i,useValue:uu,multi:!0},{provide:F,useFactory:fu}];var gu=[{provide:Li,useValue:"root"},{provide:qr,useFactory:pu},{provide:Jo,useClass:ya,multi:!0,deps:[F]},{provide:Jo,useClass:Ca,multi:!0,deps:[F]},eo,bn,mn,{provide:qo,useExisting:eo},{provide:Zt,useClass:su},[]];var wa=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(o){return new(o||t)(S(F))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var y="primary",go=Symbol("RouteTitle"),_n=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function St(t){return new _n(t)}function vu(t,r,e){let o=e.path.split("/");if(o.length>t.length||e.pathMatch==="full"&&(r.hasChildren()||o.length<t.length))return null;let n={};for(let i=0;i<o.length;i++){let a=o[i],s=t[i];if(a[0]===":")n[a.substring(1)]=s;else if(a!==s.path)return null}return{consumed:t.slice(0,o.length),posParams:n}}function yu(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!Oe(t[e],r[e]))return!1;return!0}function Oe(t,r){let e=t?kn(t):void 0,o=r?kn(r):void 0;if(!e||!o||e.length!=o.length)return!1;let n;for(let i=0;i<e.length;i++)if(n=e[i],!Ra(t[n],r[n]))return!1;return!0}function kn(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ra(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),o=[...r].sort();return e.every((n,i)=>o[i]===n)}else return t===r}function Ia(t){return t.length>0?t[t.length-1]:null}function Ue(t){return Ri(t)?t:Gt(t)?ae(Promise.resolve(t)):v(t)}var Cu={exact:Ta,subset:Ma},Fa={exact:wu,subset:Du,ignored:()=>!0};function Da(t,r,e){return Cu[e.paths](t.root,r.root,e.matrixParams)&&Fa[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment==="exact"&&t.fragment!==r.fragment)}function wu(t,r){return Oe(t,r)}function Ta(t,r,e){if(!st(t.segments,r.segments)||!rr(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let o in r.children)if(!t.children[o]||!Ta(t.children[o],r.children[o],e))return!1;return!0}function Du(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>Ra(t[e],r[e]))}function Ma(t,r,e){return Oa(t,r,r.segments,e)}function Oa(t,r,e,o){if(t.segments.length>e.length){let n=t.segments.slice(0,e.length);return!(!st(n,e)||r.hasChildren()||!rr(n,e,o))}else if(t.segments.length===e.length){if(!st(t.segments,e)||!rr(t.segments,e,o))return!1;for(let n in r.children)if(!t.children[n]||!Ma(t.children[n],r.children[n],o))return!1;return!0}else{let n=e.slice(0,t.segments.length),i=e.slice(t.segments.length);return!st(t.segments,n)||!rr(t.segments,n,o)||!t.children[y]?!1:Oa(t.children[y],r,i,o)}}function rr(t,r,e){return r.every((o,n)=>Fa[e](t[n].parameters,o.parameters))}var Ve=class{root;queryParams;fragment;_queryParamMap;constructor(r=new x([],{}),e={},o=null){this.root=r,this.queryParams=e,this.fragment=o}get queryParamMap(){return this._queryParamMap??=St(this.queryParams),this._queryParamMap}toString(){return ku.serialize(this)}},x=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(o=>o.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return nr(this)}},at=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=St(this.parameters),this._parameterMap}toString(){return Na(this)}};function Su(t,r){return st(t,r)&&t.every((e,o)=>Oe(e.parameters,r[o].parameters))}function st(t,r){return t.length!==r.length?!1:t.every((e,o)=>e.path===r[o].path)}function _u(t,r){let e=[];return Object.entries(t.children).forEach(([o,n])=>{o===y&&(e=e.concat(r(n,o)))}),Object.entries(t.children).forEach(([o,n])=>{o!==y&&(e=e.concat(r(n,o)))}),e}var mr=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>new _t,providedIn:"root"})}return t})(),_t=class{parse(r){let e=new xn(r);return new Ve(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${oo(r.root,!0)}`,o=Au(r.queryParams),n=typeof r.fragment=="string"?`#${Eu(r.fragment)}`:"";return`${e}${o}${n}`}},ku=new _t;function nr(t){return t.segments.map(r=>Na(r)).join("/")}function oo(t,r){if(!t.hasChildren())return nr(t);if(r){let e=t.children[y]?oo(t.children[y],!1):"",o=[];return Object.entries(t.children).forEach(([n,i])=>{n!==y&&o.push(`${n}:${oo(i,!1)}`)}),o.length>0?`${e}(${o.join("//")})`:e}else{let e=_u(t,(o,n)=>n===y?[oo(t.children[y],!1)]:[`${n}:${oo(o,!1)}`]);return Object.keys(t.children).length===1&&t.children[y]!=null?`${nr(t)}/${e[0]}`:`${nr(t)}/(${e.join("//")})`}}function Ba(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function tr(t){return Ba(t).replace(/%3B/gi,";")}function Eu(t){return encodeURI(t)}function En(t){return Ba(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ir(t){return decodeURIComponent(t)}function Sa(t){return ir(t.replace(/\+/g,"%20"))}function Na(t){return`${En(t.path)}${xu(t.parameters)}`}function xu(t){return Object.entries(t).map(([r,e])=>`;${En(r)}=${En(e)}`).join("")}function Au(t){let r=Object.entries(t).map(([e,o])=>Array.isArray(o)?o.map(n=>`${tr(e)}=${tr(n)}`).join("&"):`${tr(e)}=${tr(o)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var Ru=/^[^\/()?;#]+/;function Cn(t){let r=t.match(Ru);return r?r[0]:""}var Iu=/^[^\/()?;=#]+/;function Fu(t){let r=t.match(Iu);return r?r[0]:""}var Tu=/^[^=?&#]+/;function Mu(t){let r=t.match(Tu);return r?r[0]:""}var Ou=/^[^&#]+/;function Bu(t){let r=t.match(Ou);return r?r[0]:""}var xn=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new x([],{}):new x([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let r=[];for(this.peekStartsWith("(")||r.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),r.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1)),(r.length>0||Object.keys(e).length>0)&&(o[y]=new x(r,e)),o}parseSegment(){let r=Cn(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(r),new at(ir(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=Fu(this.remaining);if(!e)return;this.capture(e);let o="";if(this.consumeOptional("=")){let n=Cn(this.remaining);n&&(o=n,this.capture(o))}r[ir(e)]=ir(o)}parseQueryParam(r){let e=Mu(this.remaining);if(!e)return;this.capture(e);let o="";if(this.consumeOptional("=")){let a=Bu(this.remaining);a&&(o=a,this.capture(o))}let n=Sa(e),i=Sa(o);if(r.hasOwnProperty(n)){let a=r[n];Array.isArray(a)||(a=[a],r[n]=a),a.push(i)}else r[n]=i}parseParens(r){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Cn(this.remaining),n=this.remaining[o.length];if(n!=="/"&&n!==")"&&n!==";")throw new R(4010,!1);let i;o.indexOf(":")>-1?(i=o.slice(0,o.indexOf(":")),this.capture(i),this.capture(":")):r&&(i=y);let a=this.parseChildren();e[i]=Object.keys(a).length===1?a[y]:new x([],a),this.consumeOptional("//")}return e}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new R(4011,!1)}};function La(t){return t.segments.length>0?new x([],{[y]:t}):t}function Pa(t){let r={};for(let[o,n]of Object.entries(t.children)){let i=Pa(n);if(o===y&&i.segments.length===0&&i.hasChildren())for(let[a,s]of Object.entries(i.children))r[a]=s;else(i.segments.length>0||i.hasChildren())&&(r[o]=i)}let e=new x(t.segments,r);return Nu(e)}function Nu(t){if(t.numberOfChildren===1&&t.children[y]){let r=t.children[y];return new x(t.segments.concat(r.segments),r.children)}return t}function kt(t){return t instanceof Ve}function Lu(t,r,e=null,o=null){let n=Va(t);return Ua(n,r,e,o)}function Va(t){let r;function e(i){let a={};for(let l of i.children){let c=e(l);a[l.outlet]=c}let s=new x(i.url,a);return i===t&&(r=s),s}let o=e(t.root),n=La(o);return r??n}function Ua(t,r,e,o){let n=t;for(;n.parent;)n=n.parent;if(r.length===0)return wn(n,n,n,e,o);let i=Pu(r);if(i.toRoot())return wn(n,n,new x([],{}),e,o);let a=Vu(i,n,t),s=a.processChildren?no(a.segmentGroup,a.index,i.commands):$a(a.segmentGroup,a.index,i.commands);return wn(n,a.segmentGroup,s,e,o)}function ar(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function so(t){return typeof t=="object"&&t!=null&&t.outlets}function wn(t,r,e,o,n){let i={};o&&Object.entries(o).forEach(([l,c])=>{i[l]=Array.isArray(c)?c.map(d=>`${d}`):`${c}`});let a;t===r?a=e:a=ja(t,r,e);let s=La(Pa(a));return new Ve(s,i,n)}function ja(t,r,e){let o={};return Object.entries(t.children).forEach(([n,i])=>{i===r?o[n]=e:o[n]=ja(i,r,e)}),new x(t.segments,o)}var sr=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,o){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=o,r&&o.length>0&&ar(o[0]))throw new R(4003,!1);let n=o.find(so);if(n&&n!==Ia(o))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Pu(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new sr(!0,0,t);let r=0,e=!1,o=t.reduce((n,i,a)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let s={};return Object.entries(i.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...n,{outlets:s}]}if(i.segmentPath)return[...n,i.segmentPath]}return typeof i!="string"?[...n,i]:a===0?(i.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?r++:s!=""&&n.push(s))}),n):[...n,i]},[]);return new sr(e,r,o)}var Ct=class{segmentGroup;processChildren;index;constructor(r,e,o){this.segmentGroup=r,this.processChildren=e,this.index=o}};function Vu(t,r,e){if(t.isAbsolute)return new Ct(r,!0,0);if(!e)return new Ct(r,!1,NaN);if(e.parent===null)return new Ct(e,!0,0);let o=ar(t.commands[0])?0:1,n=e.segments.length-1+o;return Uu(e,n,t.numberOfDoubleDots)}function Uu(t,r,e){let o=t,n=r,i=e;for(;i>n;){if(i-=n,o=o.parent,!o)throw new R(4005,!1);n=o.segments.length}return new Ct(o,!1,n-i)}function ju(t){return so(t[0])?t[0].outlets:{[y]:t}}function $a(t,r,e){if(t??=new x([],{}),t.segments.length===0&&t.hasChildren())return no(t,r,e);let o=$u(t,r,e),n=e.slice(o.commandIndex);if(o.match&&o.pathIndex<t.segments.length){let i=new x(t.segments.slice(0,o.pathIndex),{});return i.children[y]=new x(t.segments.slice(o.pathIndex),t.children),no(i,0,n)}else return o.match&&n.length===0?new x(t.segments,{}):o.match&&!t.hasChildren()?An(t,r,e):o.match?no(t,0,n):An(t,r,e)}function no(t,r,e){if(e.length===0)return new x(t.segments,{});{let o=ju(e),n={};if(Object.keys(o).some(i=>i!==y)&&t.children[y]&&t.numberOfChildren===1&&t.children[y].segments.length===0){let i=no(t.children[y],r,e);return new x(t.segments,i.children)}return Object.entries(o).forEach(([i,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(n[i]=$a(t.children[i],r,a))}),Object.entries(t.children).forEach(([i,a])=>{o[i]===void 0&&(n[i]=a)}),new x(t.segments,n)}}function $u(t,r,e){let o=0,n=r,i={match:!1,pathIndex:0,commandIndex:0};for(;n<t.segments.length;){if(o>=e.length)return i;let a=t.segments[n],s=e[o];if(so(s))break;let l=`${s}`,c=o<e.length-1?e[o+1]:null;if(n>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!ka(l,c,a))return i;o+=2}else{if(!ka(l,{},a))return i;o++}n++}return{match:!0,pathIndex:n,commandIndex:o}}function An(t,r,e){let o=t.segments.slice(0,r),n=0;for(;n<e.length;){let i=e[n];if(so(i)){let l=zu(i.outlets);return new x(o,l)}if(n===0&&ar(e[0])){let l=t.segments[r];o.push(new at(l.path,_a(e[0]))),n++;continue}let a=so(i)?i.outlets[y]:`${i}`,s=n<e.length-1?e[n+1]:null;a&&s&&ar(s)?(o.push(new at(a,_a(s))),n+=2):(o.push(new at(a,{})),n++)}return new x(o,{})}function zu(t){let r={};return Object.entries(t).forEach(([e,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[e]=An(new x([],{}),0,o))}),r}function _a(t){let r={};return Object.entries(t).forEach(([e,o])=>r[e]=`${o}`),r}function ka(t,r,e){return t==e.path&&Oe(r,e.parameters)}var io="imperative",ee=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(ee||{}),De=class{id;url;constructor(r,e){this.id=r,this.url=e}},Et=class extends De{type=ee.NavigationStart;navigationTrigger;restoredState;constructor(r,e,o="imperative",n=null){super(r,e),this.navigationTrigger=o,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ye=class extends De{urlAfterRedirects;type=ee.NavigationEnd;constructor(r,e,o){super(r,e),this.urlAfterRedirects=o}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},de=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(de||{}),lr=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(lr||{}),Pe=class extends De{reason;code;type=ee.NavigationCancel;constructor(r,e,o,n){super(r,e),this.reason=o,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ke=class extends De{reason;code;type=ee.NavigationSkipped;constructor(r,e,o,n){super(r,e),this.reason=o,this.code=n}},lo=class extends De{error;target;type=ee.NavigationError;constructor(r,e,o,n){super(r,e),this.error=o,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},cr=class extends De{urlAfterRedirects;state;type=ee.RoutesRecognized;constructor(r,e,o,n){super(r,e),this.urlAfterRedirects=o,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Rn=class extends De{urlAfterRedirects;state;type=ee.GuardsCheckStart;constructor(r,e,o,n){super(r,e),this.urlAfterRedirects=o,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},In=class extends De{urlAfterRedirects;state;shouldActivate;type=ee.GuardsCheckEnd;constructor(r,e,o,n,i){super(r,e),this.urlAfterRedirects=o,this.state=n,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fn=class extends De{urlAfterRedirects;state;type=ee.ResolveStart;constructor(r,e,o,n){super(r,e),this.urlAfterRedirects=o,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tn=class extends De{urlAfterRedirects;state;type=ee.ResolveEnd;constructor(r,e,o,n){super(r,e),this.urlAfterRedirects=o,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mn=class{route;type=ee.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},On=class{route;type=ee.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Bn=class{snapshot;type=ee.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Nn=class{snapshot;type=ee.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ln=class{snapshot;type=ee.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pn=class{snapshot;type=ee.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var co=class{},xt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Hu(t){return!(t instanceof co)&&!(t instanceof xt)}function Wu(t,r){return t.providers&&!t._injector&&(t._injector=Qr(t.providers,r,`Route: ${t.path}`)),t._injector??r}function Re(t){return t.outlet||y}function Gu(t,r){let e=t.filter(o=>Re(o)===r);return e.push(...t.filter(o=>Re(o)!==r)),e}function Rt(t){if(!t)return null;if(t.routeConfig?._injector)return t.routeConfig._injector;for(let r=t.parent;r;r=r.parent){let e=r.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var Vn=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Rt(this.route?.snapshot)??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new mo(this.rootInjector)}},mo=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,o){let n=this.getOrCreateContext(e);n.outlet=o,this.contexts.set(e,n)}onChildOutletDestroyed(e){let o=this.getContext(e);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let o=this.getContext(e);return o||(o=new Vn(this.rootInjector),this.contexts.set(e,o)),o}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(o){return new(o||t)(S(Ht))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=Un(r,this._root);return e?e.children.map(o=>o.value):[]}firstChild(r){let e=Un(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=jn(r,this._root);return e.length<2?[]:e[e.length-2].children.map(n=>n.value).filter(n=>n!==r)}pathFromRoot(r){return jn(r,this._root).map(e=>e.value)}};function Un(t,r){if(t===r.value)return r;for(let e of r.children){let o=Un(t,e);if(o)return o}return null}function jn(t,r){if(t===r.value)return[r];for(let e of r.children){let o=jn(t,e);if(o.length)return o.unshift(r),o}return[]}var me=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function yt(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var ur=class extends dr{snapshot;constructor(r,e){super(r),this.snapshot=e,Zn(this,r)}toString(){return this.snapshot.toString()}};function za(t){let r=qu(t),e=new ve([new at("",{})]),o=new ve({}),n=new ve({}),i=new ve({}),a=new ve(""),s=new lt(e,o,i,a,n,y,t,r.root);return s.snapshot=r.root,new ur(new me(s,[]),r)}function qu(t){let r={},e={},o={},i=new wt([],r,o,"",e,y,t,null,{});return new fr("",new me(i,[]))}var lt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,o,n,i,a,s,l){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=o,this.fragmentSubject=n,this.dataSubject=i,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(A(c=>c[go]))??v(void 0),this.url=r,this.params=e,this.queryParams=o,this.fragment=n,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(A(r=>St(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(A(r=>St(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function pr(t,r,e="emptyOnly"){let o,{routeConfig:n}=t;return r!==null&&(e==="always"||n?.path===""||!r.component&&!r.routeConfig?.loadComponent)?o={params:h(h({},r.params),t.params),data:h(h({},r.data),t.data),resolve:h(h(h(h({},t.data),r.data),n?.data),t._resolvedData)}:o={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},n&&Wa(n)&&(o.resolve[go]=n.title),o}var wt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[go]}constructor(r,e,o,n,i,a,s,l,c){this.url=r,this.params=e,this.queryParams=o,this.fragment=n,this.data=i,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=St(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=St(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(o=>o.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},fr=class extends dr{url;constructor(r,e){super(e),this.url=r,Zn(this,e)}toString(){return Ha(this._root)}};function Zn(t,r){r.value._routerState=t,r.children.forEach(e=>Zn(t,e))}function Ha(t){let r=t.children.length>0?` { ${t.children.map(Ha).join(", ")} } `:"";return`${t.value}${r}`}function Dn(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,Oe(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),Oe(r.params,e.params)||t.paramsSubject.next(e.params),yu(r.url,e.url)||t.urlSubject.next(e.url),Oe(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function $n(t,r){let e=Oe(t.params,r.params)&&Su(t.url,r.url),o=!t.parent!=!r.parent;return e&&!o&&(!t.parent||$n(t.parent,r.parent))}function Wa(t){return typeof t.title=="string"||t.title===null}var Yu=new k(""),Ga=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=y;activateEvents=new re;deactivateEvents=new re;attachEvents=new re;detachEvents=new re;routerOutletData=Ae(void 0);parentContexts=p(mo);location=p(Wt);changeDetector=p(mt);inputBinder=p(br,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:o,previousValue:n}=e.name;if(o)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,o){this.activated=e,this._activatedRoute=o,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,o){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=e;let n=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new zn(e,s,n.injector,this.routerOutletData);this.activated=n.createComponent(a,{index:n.length,injector:l,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(o){return new(o||t)};static \u0275dir=M({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Me]})}return t})(),zn=class{route;childContexts;parent;outletData;constructor(r,e,o,n){this.route=r,this.childContexts=e,this.parent=o,this.outletData=n}get(r,e){return r===lt?this.route:r===mo?this.childContexts:r===Yu?this.outletData:this.parent.get(r,e)}},br=new k("");var qa=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(o,n){o&1&&he(0,"router-outlet")},dependencies:[Ga],encapsulation:2})}return t})();function Xn(t){let r=t.children&&t.children.map(Xn),e=r?O(h({},t),{children:r}):h({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==y&&(e.component=qa),e}function Ku(t,r,e){let o=uo(t,r._root,e?e._root:void 0);return new ur(o,r)}function uo(t,r,e){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let o=e.value;o._futureSnapshot=r.value;let n=Zu(t,r,e);return new me(o,n)}else{if(t.shouldAttach(r.value)){let i=t.retrieve(r.value);if(i!==null){let a=i.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>uo(t,s)),a}}let o=Xu(r.value),n=r.children.map(i=>uo(t,i));return new me(o,n)}}function Zu(t,r,e){return r.children.map(o=>{for(let n of e.children)if(t.shouldReuseRoute(o.value,n.value.snapshot))return uo(t,o,n);return uo(t,o)})}function Xu(t){return new lt(new ve(t.url),new ve(t.params),new ve(t.queryParams),new ve(t.fragment),new ve(t.data),t.outlet,t.component,t)}var po=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},Ya="ngNavigationCancelingError";function hr(t,r){let{redirectTo:e,navigationBehaviorOptions:o}=kt(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,n=Ka(!1,de.Redirect);return n.url=e,n.navigationBehaviorOptions=o,n}function Ka(t,r){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Ya]=!0,e.cancellationCode=r,e}function Qu(t){return Za(t)&&kt(t.url)}function Za(t){return!!t&&t[Ya]}var Ju=(t,r,e,o)=>A(n=>(new Hn(r,n.targetRouterState,n.currentRouterState,e,o).activate(t),n)),Hn=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,o,n,i){this.routeReuseStrategy=r,this.futureState=e,this.currState=o,this.forwardEvent=n,this.inputBindingEnabled=i}activate(r){let e=this.futureState._root,o=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,o,r),Dn(this.futureState.root),this.activateChildRoutes(e,o,r)}deactivateChildRoutes(r,e,o){let n=yt(e);r.children.forEach(i=>{let a=i.value.outlet;this.deactivateRoutes(i,n[a],o),delete n[a]}),Object.values(n).forEach(i=>{this.deactivateRouteAndItsChildren(i,o)})}deactivateRoutes(r,e,o){let n=r.value,i=e?e.value:null;if(n===i)if(n.component){let a=o.getContext(n.outlet);a&&this.deactivateChildRoutes(r,e,a.children)}else this.deactivateChildRoutes(r,e,o);else i&&this.deactivateRouteAndItsChildren(e,o)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let o=e.getContext(r.value.outlet),n=o&&r.value.component?o.children:e,i=yt(r);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,n);if(o&&o.outlet){let a=o.outlet.detach(),s=o.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,e){let o=e.getContext(r.value.outlet),n=o&&r.value.component?o.children:e,i=yt(r);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,n);o&&(o.outlet&&(o.outlet.deactivate(),o.children.onOutletDeactivated()),o.attachRef=null,o.route=null)}activateChildRoutes(r,e,o){let n=yt(e);r.children.forEach(i=>{this.activateRoutes(i,n[i.value.outlet],o),this.forwardEvent(new Pn(i.value.snapshot))}),r.children.length&&this.forwardEvent(new Nn(r.value.snapshot))}activateRoutes(r,e,o){let n=r.value,i=e?e.value:null;if(Dn(n),n===i)if(n.component){let a=o.getOrCreateContext(n.outlet);this.activateChildRoutes(r,e,a.children)}else this.activateChildRoutes(r,e,o);else if(n.component){let a=o.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let s=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Dn(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=n,a.outlet&&a.outlet.activateWith(n,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,o)}},gr=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Dt=class{component;route;constructor(r,e){this.component=r,this.route=e}};function ep(t,r,e){let o=t._root,n=r?r._root:null;return ro(o,n,e,[o.value])}function tp(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function It(t,r){let e=Symbol(),o=r.get(t,e);return o===e?typeof t=="function"&&!Ni(t)?t:r.get(t):o}function ro(t,r,e,o,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=yt(r);return t.children.forEach(a=>{op(a,i[a.value.outlet],e,o.concat([a.value]),n),delete i[a.value.outlet]}),Object.entries(i).forEach(([a,s])=>ao(s,e.getContext(a),n)),n}function op(t,r,e,o,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=t.value,a=r?r.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&i.routeConfig===a.routeConfig){let l=rp(a,i,i.routeConfig.runGuardsAndResolvers);l?n.canActivateChecks.push(new gr(o)):(i.data=a.data,i._resolvedData=a._resolvedData),i.component?ro(t,r,s?s.children:null,o,n):ro(t,r,e,o,n),l&&s&&s.outlet&&s.outlet.isActivated&&n.canDeactivateChecks.push(new Dt(s.outlet.component,a))}else a&&ao(r,s,n),n.canActivateChecks.push(new gr(o)),i.component?ro(t,null,s?s.children:null,o,n):ro(t,null,e,o,n);return n}function rp(t,r,e){if(typeof e=="function")return e(t,r);switch(e){case"pathParamsChange":return!st(t.url,r.url);case"pathParamsOrQueryParamsChange":return!st(t.url,r.url)||!Oe(t.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!$n(t,r)||!Oe(t.queryParams,r.queryParams);case"paramsChange":default:return!$n(t,r)}}function ao(t,r,e){let o=yt(t),n=t.value;Object.entries(o).forEach(([i,a])=>{n.component?r?ao(a,r.children.getContext(i),e):ao(a,null,e):ao(a,r,e)}),n.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new Dt(r.outlet.component,n)):e.canDeactivateChecks.push(new Dt(null,n)):e.canDeactivateChecks.push(new Dt(null,n))}function bo(t){return typeof t=="function"}function np(t){return typeof t=="boolean"}function ip(t){return t&&bo(t.canLoad)}function ap(t){return t&&bo(t.canActivate)}function sp(t){return t&&bo(t.canActivateChild)}function lp(t){return t&&bo(t.canDeactivate)}function cp(t){return t&&bo(t.canMatch)}function Xa(t){return t instanceof Ii||t?.name==="EmptyError"}var or=Symbol("INITIAL_VALUE");function At(){return fe(t=>$r(t.map(r=>r.pipe(ft(1),Bi(or)))).pipe(A(r=>{for(let e of r)if(e!==!0){if(e===or)return or;if(e===!1||dp(e))return e}return!0}),Qe(r=>r!==or),ft(1)))}function dp(t){return kt(t)||t instanceof po}function up(t,r){return ye(e=>{let{targetSnapshot:o,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:a}}=e;return a.length===0&&i.length===0?v(O(h({},e),{guardsResult:!0})):pp(a,o,n,t).pipe(ye(s=>s&&np(s)?fp(o,i,t,r):v(s)),A(s=>O(h({},e),{guardsResult:s})))})}function pp(t,r,e,o){return ae(t).pipe(ye(n=>vp(n.component,n.route,e,r,o)),He(n=>n!==!0,!0))}function fp(t,r,e,o){return ae(r).pipe(zt(n=>Fi(gp(n.route.parent,o),hp(n.route,o),bp(t,n.path,e),mp(t,n.route,e))),He(n=>n!==!0,!0))}function hp(t,r){return t!==null&&r&&r(new Ln(t)),v(!0)}function gp(t,r){return t!==null&&r&&r(new Bn(t)),v(!0)}function mp(t,r,e){let o=r.routeConfig?r.routeConfig.canActivate:null;if(!o||o.length===0)return v(!0);let n=o.map(i=>jo(()=>{let a=Rt(r)??e,s=It(i,a),l=ap(s)?s.canActivate(r,t):_e(a,()=>s(r,t));return Ue(l).pipe(He())}));return v(n).pipe(At())}function bp(t,r,e){let o=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(a=>tp(a)).filter(a=>a!==null).map(a=>jo(()=>{let s=a.guards.map(l=>{let c=Rt(a.node)??e,d=It(l,c),u=sp(d)?d.canActivateChild(o,t):_e(c,()=>d(o,t));return Ue(u).pipe(He())});return v(s).pipe(At())}));return v(i).pipe(At())}function vp(t,r,e,o,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return v(!0);let a=i.map(s=>{let l=Rt(r)??n,c=It(s,l),d=lp(c)?c.canDeactivate(t,r,e,o):_e(l,()=>c(t,r,e,o));return Ue(d).pipe(He())});return v(a).pipe(At())}function yp(t,r,e,o){let n=r.canLoad;if(n===void 0||n.length===0)return v(!0);let i=n.map(a=>{let s=It(a,t),l=ip(s)?s.canLoad(r,e):_e(t,()=>s(r,e));return Ue(l)});return v(i).pipe(At(),Qa(o))}function Qa(t){return xi(Q(r=>{if(typeof r!="boolean")throw hr(t,r)}),A(r=>r===!0))}function Cp(t,r,e,o){let n=r.canMatch;if(!n||n.length===0)return v(!0);let i=n.map(a=>{let s=It(a,t),l=cp(s)?s.canMatch(r,e):_e(t,()=>s(r,e));return Ue(l)});return v(i).pipe(At(),Qa(o))}var fo=class{segmentGroup;constructor(r){this.segmentGroup=r||null}},ho=class extends Error{urlTree;constructor(r){super(),this.urlTree=r}};function vt(t){return $t(new fo(t))}function wp(t){return $t(new R(4e3,!1))}function Dp(t){return $t(Ka(!1,de.GuardRejected))}var Wn=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}lineralizeSegments(r,e){let o=[],n=e.root;for(;;){if(o=o.concat(n.segments),n.numberOfChildren===0)return v(o);if(n.numberOfChildren>1||!n.children[y])return wp(`${r.redirectTo}`);n=n.children[y]}}applyRedirectCommands(r,e,o,n,i){return Sp(e,n,i).pipe(A(a=>{if(a instanceof Ve)throw new ho(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),r,o);if(a[0]==="/")throw new ho(s);return s}))}applyRedirectCreateUrlTree(r,e,o,n){let i=this.createSegmentGroup(r,e.root,o,n);return new Ve(i,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let o={};return Object.entries(r).forEach(([n,i])=>{if(typeof i=="string"&&i[0]===":"){let s=i.substring(1);o[n]=e[s]}else o[n]=i}),o}createSegmentGroup(r,e,o,n){let i=this.createSegments(r,e.segments,o,n),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(r,l,o,n)}),new x(i,a)}createSegments(r,e,o,n){return e.map(i=>i.path[0]===":"?this.findPosParam(r,i,n):this.findOrReturn(i,o))}findPosParam(r,e,o){let n=o[e.path.substring(1)];if(!n)throw new R(4001,!1);return n}findOrReturn(r,e){let o=0;for(let n of e){if(n.path===r.path)return e.splice(o),n;o++}return r}};function Sp(t,r,e){if(typeof t=="string")return v(t);let o=t,{queryParams:n,fragment:i,routeConfig:a,url:s,outlet:l,params:c,data:d,title:u}=r;return Ue(_e(e,()=>o({params:c,data:d,queryParams:n,fragment:i,routeConfig:a,url:s,outlet:l,title:u})))}var Gn={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function _p(t,r,e,o,n){let i=Ja(t,r,e);return i.matched?(o=Wu(r,o),Cp(o,r,e,n).pipe(A(a=>a===!0?i:h({},Gn)))):v(i)}function Ja(t,r,e){if(r.path==="**")return kp(e);if(r.path==="")return r.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},Gn):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let n=(r.matcher||vu)(e,t,r);if(!n)return h({},Gn);let i={};Object.entries(n.posParams??{}).forEach(([s,l])=>{i[s]=l.path});let a=n.consumed.length>0?h(h({},i),n.consumed[n.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:n.consumed,remainingSegments:e.slice(n.consumed.length),parameters:a,positionalParamSegments:n.posParams??{}}}function kp(t){return{matched:!0,parameters:t.length>0?Ia(t).parameters:{},consumedSegments:t,remainingSegments:[],positionalParamSegments:{}}}function Ea(t,r,e,o){return e.length>0&&Ap(t,e,o)?{segmentGroup:new x(r,xp(o,new x(e,t.children))),slicedSegments:[]}:e.length===0&&Rp(t,e,o)?{segmentGroup:new x(t.segments,Ep(t,e,o,t.children)),slicedSegments:e}:{segmentGroup:new x(t.segments,t.children),slicedSegments:e}}function Ep(t,r,e,o){let n={};for(let i of e)if(vr(t,r,i)&&!o[Re(i)]){let a=new x([],{});n[Re(i)]=a}return h(h({},o),n)}function xp(t,r){let e={};e[y]=r;for(let o of t)if(o.path===""&&Re(o)!==y){let n=new x([],{});e[Re(o)]=n}return e}function Ap(t,r,e){return e.some(o=>vr(t,r,o)&&Re(o)!==y)}function Rp(t,r,e){return e.some(o=>vr(t,r,o))}function vr(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ip(t,r,e){return r.length===0&&!t.children[e]}var qn=class{};function Fp(t,r,e,o,n,i,a="emptyOnly"){return new Yn(t,r,e,o,n,a,i).recognize()}var Tp=31,Yn=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,o,n,i,a,s){this.injector=r,this.configLoader=e,this.rootComponentType=o,this.config=n,this.urlTree=i,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.applyRedirects=new Wn(this.urlSerializer,this.urlTree)}noMatchError(r){return new R(4002,`'${r.segmentGroup}'`)}recognize(){let r=Ea(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(r).pipe(A(({children:e,rootSnapshot:o})=>{let n=new me(o,e),i=new fr("",n),a=Lu(o,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(a),{state:i,tree:a}}))}match(r){let e=new wt([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),y,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,r,y,e).pipe(A(o=>({children:o,rootSnapshot:e})),pt(o=>{if(o instanceof ho)return this.urlTree=o.urlTree,this.match(o.urlTree.root);throw o instanceof fo?this.noMatchError(o):o}))}processSegmentGroup(r,e,o,n,i){return o.segments.length===0&&o.hasChildren()?this.processChildren(r,e,o,i):this.processSegment(r,e,o,o.segments,n,!0,i).pipe(A(a=>a instanceof me?[a]:[]))}processChildren(r,e,o,n){let i=[];for(let a of Object.keys(o.children))a==="primary"?i.unshift(a):i.push(a);return ae(i).pipe(zt(a=>{let s=o.children[a],l=Gu(e,a);return this.processSegmentGroup(r,l,s,a,n)}),Oi((a,s)=>(a.push(...s),a)),zr(null),Mi(),ye(a=>{if(a===null)return vt(o);let s=es(a);return Mp(s),v(s)}))}processSegment(r,e,o,n,i,a,s){return ae(e).pipe(zt(l=>this.processSegmentAgainstRoute(l._injector??r,e,l,o,n,i,a,s).pipe(pt(c=>{if(c instanceof fo)return v(null);throw c}))),He(l=>!!l),pt(l=>{if(Xa(l))return Ip(o,n,i)?v(new qn):vt(o);throw l}))}processSegmentAgainstRoute(r,e,o,n,i,a,s,l){return Re(o)!==a&&(a===y||!vr(n,i,o))?vt(n):o.redirectTo===void 0?this.matchSegmentAgainstRoute(r,n,o,i,a,l):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(r,n,e,o,i,a,l):vt(n)}expandSegmentAgainstRouteUsingRedirect(r,e,o,n,i,a,s){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:u,remainingSegments:f}=Ja(e,n,i);if(!l)return vt(e);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Tp&&(this.allowRedirects=!1));let g=new wt(i,c,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,xa(n),Re(n),n.component??n._loadedComponent??null,n,Aa(n)),b=pr(g,s,this.paramsInheritanceStrategy);return g.params=Object.freeze(b.params),g.data=Object.freeze(b.data),this.applyRedirects.applyRedirectCommands(d,n.redirectTo,u,g,r).pipe(fe(_=>this.applyRedirects.lineralizeSegments(n,_)),ye(_=>this.processSegment(r,o,e,_.concat(f),a,!1,s)))}matchSegmentAgainstRoute(r,e,o,n,i,a){let s=_p(e,o,n,r,this.urlSerializer);return o.path==="**"&&(e.children={}),s.pipe(fe(l=>l.matched?(r=o._injector??r,this.getChildConfig(r,o,n).pipe(fe(({routes:c})=>{let d=o._loadedInjector??r,{parameters:u,consumedSegments:f,remainingSegments:g}=l,b=new wt(f,u,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,xa(o),Re(o),o.component??o._loadedComponent??null,o,Aa(o)),C=pr(b,a,this.paramsInheritanceStrategy);b.params=Object.freeze(C.params),b.data=Object.freeze(C.data);let{segmentGroup:_,slicedSegments:P}=Ea(e,f,g,c);if(P.length===0&&_.hasChildren())return this.processChildren(d,c,_,b).pipe(A($=>new me(b,$)));if(c.length===0&&P.length===0)return v(new me(b,[]));let X=Re(o)===i;return this.processSegment(d,c,_,P,X?y:i,!0,b).pipe(A($=>new me(b,$ instanceof me?[$]:[])))}))):vt(e)))}getChildConfig(r,e,o){return e.children?v({routes:e.children,injector:r}):e.loadChildren?e._loadedRoutes!==void 0?v({routes:e._loadedRoutes,injector:e._loadedInjector}):yp(r,e,o,this.urlSerializer).pipe(ye(n=>n?this.configLoader.loadChildren(r,e).pipe(Q(i=>{e._loadedRoutes=i.routes,e._loadedInjector=i.injector})):Dp(e))):v({routes:[],injector:r})}};function Mp(t){t.sort((r,e)=>r.value.outlet===y?-1:e.value.outlet===y?1:r.value.outlet.localeCompare(e.value.outlet))}function Op(t){let r=t.value.routeConfig;return r&&r.path===""}function es(t){let r=[],e=new Set;for(let o of t){if(!Op(o)){r.push(o);continue}let n=r.find(i=>o.value.routeConfig===i.value.routeConfig);n!==void 0?(n.children.push(...o.children),e.add(n)):r.push(o)}for(let o of e){let n=es(o.children);r.push(new me(o.value,n))}return r.filter(o=>!e.has(o))}function xa(t){return t.data||{}}function Aa(t){return t.resolve||{}}function Bp(t,r,e,o,n,i){return ye(a=>Fp(t,r,e,o,a.extractedUrl,n,i).pipe(A(({state:s,tree:l})=>O(h({},a),{targetSnapshot:s,urlAfterRedirects:l}))))}function Np(t,r){return ye(e=>{let{targetSnapshot:o,guards:{canActivateChecks:n}}=e;if(!n.length)return v(e);let i=new Set(n.map(l=>l.route)),a=new Set;for(let l of i)if(!a.has(l))for(let c of ts(l))a.add(c);let s=0;return ae(a).pipe(zt(l=>i.has(l)?Lp(l,o,t,r):(l.data=pr(l,l.parent,t).resolve,v(void 0))),Q(()=>s++),Hr(1),ye(l=>s===a.size?v(e):Be))})}function ts(t){let r=t.children.map(e=>ts(e)).flat();return[t,...r]}function Lp(t,r,e,o){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!Wa(n)&&(i[go]=n.title),jo(()=>(t.data=pr(t,t.parent,e).resolve,Pp(i,t,r,o).pipe(A(a=>(t._resolvedData=a,t.data=h(h({},t.data),a),null)))))}function Pp(t,r,e,o){let n=kn(t);if(n.length===0)return v({});let i={};return ae(n).pipe(ye(a=>Vp(t[a],r,e,o).pipe(He(),Q(s=>{if(s instanceof po)throw hr(new _t,s);i[a]=s}))),Hr(1),A(()=>i),pt(a=>Xa(a)?Be:$t(a)))}function Vp(t,r,e,o){let n=Rt(r)??o,i=It(t,n),a=i.resolve?i.resolve(r,e):_e(n,()=>i(r,e));return Ue(a)}function Sn(t){return fe(r=>{let e=t(r);return e?ae(e).pipe(A(()=>r)):v(r)})}var os=(()=>{class t{buildTitle(e){let o,n=e.root;for(;n!==void 0;)o=this.getResolvedTitleForRoute(n)??o,n=n.children.find(i=>i.outlet===y);return o}getResolvedTitleForRoute(e){return e.data[go]}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>p(Up),providedIn:"root"})}return t})(),Up=(()=>{class t extends os{title;constructor(e){super(),this.title=e}updateTitle(e){let o=this.buildTitle(e);o!==void 0&&this.title.setTitle(o)}static \u0275fac=function(o){return new(o||t)(S(wa))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),yr=new k("",{providedIn:"root",factory:()=>({})}),Cr=new k(""),rs=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=p(Ji);loadComponent(e,o){if(this.componentLoaders.get(o))return this.componentLoaders.get(o);if(o._loadedComponent)return v(o._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(o);let n=Ue(_e(e,()=>o.loadComponent())).pipe(A(ns),fe(is),Q(a=>{this.onLoadEndListener&&this.onLoadEndListener(o),o._loadedComponent=a}),$o(()=>{this.componentLoaders.delete(o)})),i=new jr(n,()=>new ie).pipe(Ur());return this.componentLoaders.set(o,i),i}loadChildren(e,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return v({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let i=jp(o,this.compiler,e,this.onLoadEndListener).pipe($o(()=>{this.childrenLoaders.delete(o)})),a=new jr(i,()=>new ie).pipe(Ur());return this.childrenLoaders.set(o,a),a}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function jp(t,r,e,o){return Ue(_e(e,()=>t.loadChildren())).pipe(A(ns),fe(is),ye(n=>n instanceof Gi||Array.isArray(n)?v(n):ae(r.compileModuleAsync(n))),A(n=>{o&&o(t);let i,a,s=!1;return Array.isArray(n)?(a=n,s=!0):(i=n.create(e).injector,a=i.get(Cr,[],{optional:!0,self:!0}).flat()),{routes:a.map(Xn),injector:i}}))}function $p(t){return t&&typeof t=="object"&&"default"in t}function ns(t){return $p(t)?t.default:t}function is(t){return v(t)}var Qn=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>p(zp),providedIn:"root"})}return t})(),zp=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,o){return e}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),as=new k("");var ss=new k(""),ls=(()=>{class t{currentNavigation=H(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new ie;transitionAbortWithErrorSubject=new ie;configLoader=p(rs);environmentInjector=p(Ht);destroyRef=p(Gr);urlSerializer=p(mr);rootContexts=p(mo);location=p(bt);inputBindingEnabled=p(br,{optional:!0})!==null;titleStrategy=p(os);options=p(yr,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=p(Qn);createViewTransition=p(as,{optional:!0});navigationErrorHandler=p(ss,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>v(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=n=>this.events.next(new Mn(n)),o=n=>this.events.next(new On(n));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let o=++this.navigationId;K(()=>{this.transitions?.next(O(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:o}))})}setupNavigations(e){return this.transitions=new ve(null),this.transitions.pipe(Qe(o=>o!==null),fe(o=>{let n=!1;return v(o).pipe(fe(i=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",de.SupersededByNewNavigation),Be;this.currentTransition=o,this.currentNavigation.set({id:i.id,initialUrl:i.rawUrl,extractedUrl:i.extractedUrl,targetBrowserUrl:typeof i.extras.browserUrl=="string"?this.urlSerializer.parse(i.extras.browserUrl):i.extras.browserUrl,trigger:i.source,extras:i.extras,previousNavigation:this.lastSuccessfulNavigation?O(h({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>i.abortController.abort()});let a=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),s=i.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!a&&s!=="reload")return this.events.next(new Ke(i.id,this.urlSerializer.serialize(i.rawUrl),"",lr.IgnoredSameUrlNavigation)),i.resolve(!1),Be;if(this.urlHandlingStrategy.shouldProcessUrl(i.rawUrl))return v(i).pipe(fe(l=>(this.events.next(new Et(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Be:Promise.resolve(l))),Bp(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy),Q(l=>{o.targetSnapshot=l.targetSnapshot,o.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation.update(d=>(d.finalUrl=l.urlAfterRedirects,d));let c=new cr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(i.currentRawUrl)){let{id:l,extractedUrl:c,source:d,restoredState:u,extras:f}=i,g=new Et(l,this.urlSerializer.serialize(c),d,u);this.events.next(g);let b=za(this.rootComponentType).snapshot;return this.currentTransition=o=O(h({},i),{targetSnapshot:b,urlAfterRedirects:c,extras:O(h({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(C=>(C.finalUrl=c,C)),v(o)}else return this.events.next(new Ke(i.id,this.urlSerializer.serialize(i.extractedUrl),"",lr.IgnoredByUrlHandlingStrategy)),i.resolve(!1),Be}),Q(i=>{let a=new Rn(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot);this.events.next(a)}),A(i=>(this.currentTransition=o=O(h({},i),{guards:ep(i.targetSnapshot,i.currentSnapshot,this.rootContexts)}),o)),up(this.environmentInjector,i=>this.events.next(i)),Q(i=>{if(o.guardsResult=i.guardsResult,i.guardsResult&&typeof i.guardsResult!="boolean")throw hr(this.urlSerializer,i.guardsResult);let a=new In(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects),i.targetSnapshot,!!i.guardsResult);this.events.next(a)}),Qe(i=>i.guardsResult?!0:(this.cancelNavigationTransition(i,"",de.GuardRejected),!1)),Sn(i=>{if(i.guards.canActivateChecks.length!==0)return v(i).pipe(Q(a=>{let s=new Fn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(s)}),fe(a=>{let s=!1;return v(a).pipe(Np(this.paramsInheritanceStrategy,this.environmentInjector),Q({next:()=>s=!0,complete:()=>{s||this.cancelNavigationTransition(a,"",de.NoDataFromResolver)}}))}),Q(a=>{let s=new Tn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(s)}))}),Sn(i=>{let a=s=>{let l=[];if(s.routeConfig?.loadComponent){let c=Rt(s)??this.environmentInjector;l.push(this.configLoader.loadComponent(c,s.routeConfig).pipe(Q(d=>{s.component=d}),A(()=>{})))}for(let c of s.children)l.push(...a(c));return l};return $r(a(i.targetSnapshot.root)).pipe(zr(null),ft(1))}),Sn(()=>this.afterPreactivation()),fe(()=>{let{currentSnapshot:i,targetSnapshot:a}=o,s=this.createViewTransition?.(this.environmentInjector,i.root,a.root);return s?ae(s).pipe(A(()=>o)):v(o)}),A(i=>{let a=Ku(e.routeReuseStrategy,i.targetSnapshot,i.currentRouterState);return this.currentTransition=o=O(h({},i),{targetRouterState:a}),this.currentNavigation.update(s=>(s.targetRouterState=a,s)),o}),Q(()=>{this.events.next(new co)}),Ju(this.rootContexts,e.routeReuseStrategy,i=>this.events.next(i),this.inputBindingEnabled),ft(1),Wr(new Ai(i=>{let a=o.abortController.signal,s=()=>i.next();return a.addEventListener("abort",s),()=>a.removeEventListener("abort",s)}).pipe(Qe(()=>!n&&!o.targetRouterState),Q(()=>{this.cancelNavigationTransition(o,o.abortController.signal.reason+"",de.Aborted)}))),Q({next:i=>{n=!0,this.lastSuccessfulNavigation=K(this.currentNavigation),this.events.next(new Ye(i.id,this.urlSerializer.serialize(i.extractedUrl),this.urlSerializer.serialize(i.urlAfterRedirects))),this.titleStrategy?.updateTitle(i.targetRouterState.snapshot),i.resolve(!0)},complete:()=>{n=!0}}),Wr(this.transitionAbortWithErrorSubject.pipe(Q(i=>{throw i}))),$o(()=>{n||this.cancelNavigationTransition(o,"",de.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),pt(i=>{if(this.destroyed)return o.resolve(!1),Be;if(n=!0,Za(i))this.events.next(new Pe(o.id,this.urlSerializer.serialize(o.extractedUrl),i.message,i.cancellationCode)),Qu(i)?this.events.next(new xt(i.url,i.navigationBehaviorOptions)):o.resolve(!1);else{let a=new lo(o.id,this.urlSerializer.serialize(o.extractedUrl),i,o.targetSnapshot??void 0);try{let s=_e(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(s instanceof po){let{message:l,cancellationCode:c}=hr(this.urlSerializer,s);this.events.next(new Pe(o.id,this.urlSerializer.serialize(o.extractedUrl),l,c)),this.events.next(new xt(s.redirectTo,s.navigationBehaviorOptions))}else throw this.events.next(a),i}catch(s){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(s)}}return Be}))}))}cancelNavigationTransition(e,o,n){let i=new Pe(e.id,this.urlSerializer.serialize(e.extractedUrl),o,n);this.events.next(i),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),o=K(this.currentNavigation),n=o?.targetBrowserUrl??o?.extractedUrl;return e.toString()!==n?.toString()&&!o?.extras.skipLocationChange}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hp(t){return t!==io}var Wp=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>p(Gp),providedIn:"root"})}return t})(),Kn=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}},Gp=(()=>{class t extends Kn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cs=(()=>{class t{urlSerializer=p(mr);options=p(yr,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=p(bt);urlHandlingStrategy=p(Qn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ve;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:o,targetBrowserUrl:n}){let i=e!==void 0?this.urlHandlingStrategy.merge(e,o):o,a=n??i;return a instanceof Ve?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:e,finalUrl:o,initialUrl:n}){o&&e?(this.currentUrlTree=o,this.rawUrlTree=this.urlHandlingStrategy.merge(o,n),this.routerState=e):this.rawUrlTree=n}routerState=za(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:()=>p(qp),providedIn:"root"})}return t})(),qp=(()=>{class t extends cs{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(o=>{o.type==="popstate"&&setTimeout(()=>{e(o.url,o.state,"popstate")})})}handleRouterEvent(e,o){e instanceof Et?this.updateStateMemento():e instanceof Ke?this.commitTransition(o):e instanceof cr?this.urlUpdateStrategy==="eager"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(o),o)):e instanceof co?(this.commitTransition(o),this.urlUpdateStrategy==="deferred"&&!o.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(o),o)):e instanceof Pe&&e.code!==de.SupersededByNewNavigation&&e.code!==de.Redirect?this.restoreHistory(o):e instanceof lo?this.restoreHistory(o,!0):e instanceof Ye&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:o,id:n}){let{replaceUrl:i,state:a}=o;if(this.location.isCurrentPathEqualTo(e)||i){let s=this.browserPageId,l=h(h({},a),this.generateNgRouterState(n,s));this.location.replaceState(e,"",l)}else{let s=h(h({},a),this.generateNgRouterState(n,this.browserPageId+1));this.location.go(e,"",s)}}restoreHistory(e,o=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,i=this.currentPageId-n;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===e.finalUrl&&i===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,o){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:o}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ds(t,r){t.events.pipe(Qe(e=>e instanceof Ye||e instanceof Pe||e instanceof lo||e instanceof Ke),A(e=>e instanceof Ye||e instanceof Ke?0:(e instanceof Pe?e.code===de.Redirect||e.code===de.SupersededByNewNavigation:!1)?2:1),Qe(e=>e!==2),ft(1)).subscribe(()=>{r()})}var Yp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Kp={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Jn=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=p(Yi);stateManager=p(cs);options=p(yr,{optional:!0})||{};pendingTasks=p(Ui);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=p(ls);urlSerializer=p(mr);location=p(bt);urlHandlingStrategy=p(Qn);injector=p(Ht);_events=new ie;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=p(Wp);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=p(Cr,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!p(br,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{this.console.warn(e)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ei;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(o=>{try{let n=this.navigationTransitions.currentTransition,i=K(this.navigationTransitions.currentNavigation);if(n!==null&&i!==null){if(this.stateManager.handleRouterEvent(o,i),o instanceof Pe&&o.code!==de.Redirect&&o.code!==de.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof Ye)this.navigated=!0;else if(o instanceof xt){let a=o.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(o.url,n.currentRawUrl),l=h({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Hp(n.source)},a);this.scheduleNavigation(s,io,null,l,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}Hu(o)&&this._events.next(o)}catch(n){this.navigationTransitions.transitionAbortWithErrorSubject.next(n)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),io,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,o,n)=>{this.navigateToSyncWithBrowser(e,n,o)})}navigateToSyncWithBrowser(e,o,n){let i={replaceUrl:!0},a=n?.navigationId?n:null;if(n){let l=h({},n);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let s=this.parseUrl(e);this.scheduleNavigation(s,o,a,i).catch(l=>{this.disposed||this.injector.get(Wo)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return K(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Xn),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,o={}){let{relativeTo:n,queryParams:i,fragment:a,queryParamsHandling:s,preserveFragment:l}=o,c=l?this.currentUrlTree.fragment:a,d=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":d=h(h({},this.currentUrlTree.queryParams),i);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=i||null}d!==null&&(d=this.removeEmptyProps(d));let u;try{let f=n?n.snapshot:this.routerState.snapshot.root;u=Va(f)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),u=this.currentUrlTree.root}return Ua(u,e,d,c??null)}navigateByUrl(e,o={skipLocationChange:!1}){let n=kt(e)?e:this.parseUrl(e),i=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(i,io,null,o)}navigate(e,o={skipLocationChange:!1}){return Zp(e),this.navigateByUrl(this.createUrlTree(e,o),o)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.urlSerializer.parse("/")}}isActive(e,o){let n;if(o===!0?n=h({},Yp):o===!1?n=h({},Kp):n=o,kt(e))return Da(this.currentUrlTree,e,n);let i=this.parseUrl(e);return Da(this.currentUrlTree,i,n)}removeEmptyProps(e){return Object.entries(e).reduce((o,[n,i])=>(i!=null&&(o[n]=i),o),{})}scheduleNavigation(e,o,n,i,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((u,f)=>{s=u,l=f});let d=this.pendingTasks.add();return ds(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:i,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(u=>Promise.reject(u))}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Zp(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new R(4008,!1)}var Xp=new k("");function ei(t,...r){return ht([{provide:Cr,multi:!0,useValue:t},[],{provide:lt,useFactory:Qp,deps:[Jn]},{provide:Ki,multi:!0,useFactory:Jp},r.map(e=>e.\u0275providers)])}function Qp(t){return t.routerState.root}function Jp(){let t=p(We);return r=>{let e=t.get(en);if(r!==e.components[0])return;let o=t.get(Jn),n=t.get(ef);t.get(tf)===1&&o.initialNavigation(),t.get(of,null,{optional:!0})?.setUpPreloading(),t.get(Xp,null,{optional:!0})?.init(),o.resetRootComponentType(e.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var ef=new k("",{factory:()=>new ie}),tf=new k("",{providedIn:"root",factory:()=>1});var of=new k("");var us=[];var nf={transitionDuration:"{transition.duration}"},af={borderWidth:"0",borderColor:"{content.border.color}"},sf={color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},lf={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},cf=`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin dt('accordion.transition.duration');
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-top-left-radius: dt('content.border.radius');
    border-top-right-radius: dt('content.border.radius');
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-bottom-left-radius: dt('content.border.radius');
    border-bottom-right-radius: dt('content.border.radius');
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: dt('navigation.item.active.background');
}
`,ps={root:nf,panel:af,header:sf,content:lf,css:cf};var df={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},uf={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},pf={padding:"{list.padding}",gap:"{list.gap}"},ff={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},hf={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},gf={width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},mf={borderRadius:"{border.radius.sm}"},bf={padding:"{list.option.padding}"},vf={light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},yf=`
.p-autocomplete-dropdown:focus-visible {
    background: dt('autocomplete.dropdown.hover.background');
    border-color: dt('autocomplete.dropdown.hover.border.color');
    color: dt('autocomplete.dropdown.hover.color');
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('autocomplete.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.border.color'), dt('autocomplete.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: dt('autocomplete.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.hover.border.color'), dt('autocomplete.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: dt('autocomplete.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.border.color'), dt('autocomplete.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, dt('autocomplete.focus.border.color'), dt('autocomplete.focus.border.color')), linear-gradient(to bottom, dt('autocomplete.hover.border.color'), dt('autocomplete.hover.border.color'));
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color')), linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color'));
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color')), linear-gradient(to bottom, dt('autocomplete.invalid.border.color'), dt('autocomplete.invalid.border.color'));
}

.p-autocomplete-option {
    transition: none;
}
`,fs={root:df,overlay:uf,list:pf,option:ff,optionGroup:hf,dropdown:gf,chip:mf,emptyMessage:bf,colorScheme:vf,css:yf};var Cf={width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},wf={size:"1rem"},Df={borderColor:"{content.background}",offset:"-0.75rem"},Sf={width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},_f={width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}};var hs={root:Cf,icon:wf,group:Df,lg:Sf,xl:_f,css:""};var kf={borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},Ef={size:"0.5rem"},xf={fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},Af={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},Rf={fontSize:"1rem",minWidth:"2rem",height:"2rem"},If={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}};var gs={root:kf,dot:Ef,sm:xf,lg:Af,xl:Rf,colorScheme:If,css:""};var Ff={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},Tf={transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}},ms={primitive:Ff,semantic:Tf};var Mf={borderRadius:"{content.border.radius}"};var bs={root:Mf,css:""};var Of={padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},Bf={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Nf={color:"{navigation.item.icon.color}"};var vs={root:Of,item:Bf,separator:Nf,css:""};var Lf={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2.5rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3.5rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},Pf={light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},Vf=`
.p-button:focus-visible {
    background: dt('button.primary.active.background');
    border-color: dt('button.primary.active.background');
}

.p-button-secondary:focus-visible {
    background: dt('button.secondary.active.background');
    border-color: dt('button.secondary.active.background');
}

.p-button-success:focus-visible {
    background: dt('button.success.active.background');
    border-color: dt('button.success.active.background');
}

.p-button-info:focus-visible {
    background: dt('button.info.active.background');
    border-color: dt('button.info.active.background');
}

.p-button-warn:focus-visible {
    background: dt('button.warn.active.background');
    border-color: dt('button.warn.active.background');
}

.p-button-help:focus-visible {
    background: dt('button.help.active.background');
    border-color: dt('button.help.active.background');
}

.p-button-danger:focus-visible {
    background: dt('button.danger.active.background');
    border-color: dt('button.danger.active.background');
}

.p-button-contrast:focus-visible {
    background: dt('button.contrast.active.background');
    border-color: dt('button.contrast.active.background');
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, dt('primary.color'), transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: dt('button.text.primary.active.background');
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: dt('button.text.secondary.active.background');
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: dt('button.text.success.active.background');
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: dt('button.text.info.active.background');
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: dt('button.text.warn.active.background');
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: dt('button.text.help.active.background');
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: dt('button.text.danger.active.background');
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: dt('button.text.contrast.active.background');
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: dt('button.text.plain.active.background');
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: dt('button.outlined.primary.active.background');
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: dt('button.outlined.secondary.active.background');
    border-color: dt('button.outlined.secondary.border.color');
}

.p-button-success.p-button-outlined:focus-visible {
    background: dt('button.outlined.success.active.background');
}

.p-button-info.p-button-outlined:focus-visible {
    background: dt('button.outlined.info.active.background');
}

.p-button-warn.p-button-outlined:focus-visible {
    background: dt('button.outlined.warn.active.background');
}

.p-button-help.p-button-outlined:focus-visible {
    background: dt('button.outlined.help.active.background');
}

.p-button-danger.p-button-outlined:focus-visible {
    background: dt('button.outlined.danger.active.background');
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: dt('button.outlined.contrast.active.background');
}

.p-button-plain.p-button-outlined:focus-visible {
    background: dt('button.outlined.plain.active.background');
}
`,ys={root:Lf,colorScheme:Pf,css:Vf};var Uf={background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},jf={padding:"1.5rem",gap:"0.75rem"},$f={gap:"0.5rem"},zf={fontSize:"1.25rem",fontWeight:"500"},Hf={color:"{text.muted.color}"};var Cs={root:Uf,body:jf,caption:$f,title:zf,subtitle:Hf,css:""};var Wf={transitionDuration:"{transition.duration}"},Gf={gap:"0.25rem"},qf={padding:"1rem",gap:"1rem"},Yf={width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},Kf={light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},Zf=`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('carousel.indicator.active.background'), transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('carousel.indicator.active.background'), transparent 84%);
}
`,ws={root:Wf,content:Gf,indicatorList:qf,indicator:Yf,colorScheme:Kf,css:Zf};var Xf={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Qf={width:"2.5rem",color:"{form.field.icon.color}"},Jf={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},eh={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},th={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},oh={color:"{form.field.icon.color}"},rh=`
.p-cascadeselect.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('cascadeselect.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.border.color'), dt('cascadeselect.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: dt('cascadeselect.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.hover.border.color'), dt('cascadeselect.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: dt('cascadeselect.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.border.color'), dt('cascadeselect.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, dt('cascadeselect.focus.border.color'), dt('cascadeselect.focus.border.color')), linear-gradient(to bottom, dt('cascadeselect.hover.border.color'), dt('cascadeselect.hover.border.color'));
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color')), linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color'));
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color')), linear-gradient(to bottom, dt('cascadeselect.invalid.border.color'), dt('cascadeselect.invalid.border.color'));
}

.p-cascadeselect-option {
    transition: none;
}
`,Ds={root:Xf,dropdown:Qf,overlay:Jf,list:eh,option:th,clearIcon:oh,css:rh};var nh={borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},ih={size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},ah=`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow dt('checkbox.transition.duration');
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('checkbox.checked.background'), transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('checkbox.checked.background'), transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: dt('checkbox.icon.checked.color');
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: dt('checkbox.icon.checked.color');
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`,Ss={root:nh,icon:ih,css:ah};var sh={borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},lh={width:"2.25rem",height:"2.25rem"},ch={size:"1rem"},dh={size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},uh={light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}};var _s={root:sh,image:lh,icon:ch,removeIcon:dh,colorScheme:uh,css:""};var ph={transitionDuration:"{transition.duration}"},fh={width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hh={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},gh={light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}};var ks={root:ph,preview:fh,panel:hh,colorScheme:gh,css:""};var mh={size:"2rem",color:"{overlay.modal.color}"},bh={gap:"1rem"};var Es={icon:mh,content:bh,css:""};var vh={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},yh={padding:"{overlay.popover.padding}",gap:"1rem"},Ch={size:"1.5rem",color:"{overlay.popover.color}"},wh={gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"};var xs={root:vh,content:yh,icon:Ch,footer:wh,css:""};var Dh={background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},Sh={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},_h={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},kh={mobileIndent:"1rem"},Eh={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},xh={borderColor:"{content.border.color}"};var As={root:Dh,list:Sh,item:_h,submenu:kh,submenuIcon:Eh,separator:xh,css:""};var Ah={transitionDuration:"{transition.duration}"},Rh={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Ih={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Fh={fontWeight:"600"},Th={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Mh={borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Oh={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Bh={fontWeight:"600"},Nh={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},Lh={color:"{primary.color}"},Ph={width:"0.5rem"},Vh={width:"1px",color:"{primary.color}"},Uh={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},jh={size:"2rem"},$h={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},zh={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},Hh={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},Wh={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},Gh={light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},qh=`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none;
}
`,Rs={root:Ah,header:Rh,headerCell:Ih,columnTitle:Fh,row:Th,bodyCell:Mh,footerCell:Oh,columnFooter:Bh,footer:Nh,dropPoint:Lh,columnResizer:Ph,resizeIndicator:Vh,sortIcon:Uh,loadingIcon:jh,rowToggleButton:$h,filter:zh,paginatorTop:Hh,paginatorBottom:Wh,colorScheme:Gh,css:qh};var Yh={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},Kh={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},Zh={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},Xh={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},Qh={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},Jh={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"};var Is={root:Yh,header:Kh,content:Zh,footer:Xh,paginatorTop:Qh,paginatorBottom:Jh,css:""};var eg={transitionDuration:"{transition.duration}"},tg={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},og={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},rg={gap:"0.5rem",fontWeight:"700"},ng={width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},ig={color:"{form.field.icon.color}"},ag={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},sg={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},lg={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},cg={margin:"0.5rem 0 0 0"},dg={padding:"0.5rem",fontWeight:"700",color:"{content.color}"},ug={hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},pg={margin:"0.5rem 0 0 0"},fg={padding:"0.625rem",borderRadius:"{content.border.radius}"},hg={margin:"0.5rem 0 0 0"},gg={padding:"0.625rem",borderRadius:"{content.border.radius}"},mg={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},bg={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},vg={light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},yg=`
.p-datepicker-header {
    justify-content: start;
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: dt('datepicker.select.month.hover.background');
    color: dt('datepicker.select.month.hover.color');
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: dt('datepicker.select.year.hover.background');
    color: dt('datepicker.select.year.hover.color');
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: dt('datepicker.dropdown.hover.background');
    border-color: dt('datepicker.dropdown.hover.border.color');
    color: dt('datepicker.dropdown.hover.color');
}
`,Fs={root:eg,panel:tg,header:og,title:rg,dropdown:ng,inputIcon:ig,selectMonth:ag,selectYear:sg,group:lg,dayView:cg,weekDay:dg,date:ug,monthView:pg,month:fg,yearView:hg,year:gg,buttonbar:mg,timePicker:bg,colorScheme:vg,css:yg};var Cg={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},wg={padding:"{overlay.modal.padding}",gap:"0.5rem"},Dg={fontSize:"1.25rem",fontWeight:"600"},Sg={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},_g={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"};var Ts={root:Cg,header:wg,title:Dg,content:Sg,footer:_g,css:""};var kg={borderColor:"{content.border.color}"},Eg={background:"{content.background}",color:"{text.color}"},xg={margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},Ag={margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}};var Ms={root:kg,content:Eg,horizontal:xg,vertical:Ag,css:""};var Rg={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},Ig={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}};var Os={root:Rg,item:Ig,css:""};var Fg={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},Tg={padding:"{overlay.modal.padding}"},Mg={fontSize:"1.5rem",fontWeight:"600"},Og={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Bg={padding:"{overlay.modal.padding}"};var Bs={root:Fg,header:Tg,title:Mg,content:Og,footer:Bg,css:""};var Ng={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},Lg={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Pg={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},Vg={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Ug={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},jg=`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`,Ns={toolbar:Ng,toolbarItem:Lg,overlay:Pg,overlayOption:Vg,content:Ug,css:jg};var $g={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},zg={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},Hg={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},Wg={padding:"0"},Gg=`
.p-fieldset-toggle-button:focus-visible {
    background: dt('navigation.item.active.background');
}
`,Ls={root:$g,legend:zg,toggleIcon:Hg,content:Wg,css:Gg};var qg={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},Yg={background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},Kg={highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},Zg={padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},Xg={gap:"0.5rem"},Qg={height:"0.25rem"},Jg={gap:"0.5rem"};var Ps={root:qg,header:Yg,content:Kg,file:Zg,fileList:Xg,progressbar:Qg,basic:Jg,css:""};var em={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},tm={active:{top:"-1.25rem"}},om={input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},rm={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}};var Vs={root:em,over:tm,in:om,on:rm,css:""};var nm={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},im={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},am={size:"1.5rem"},sm={background:"{content.background}",padding:"1rem 0.25rem"},lm={size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},cm={size:"1rem"},dm={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},um={gap:"0.5rem",padding:"1rem"},pm={width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},fm={background:"rgba(0, 0, 0, 0.5)"},hm={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},gm={size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},mm={size:"1.5rem"},bm={light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}};var Us={root:nm,navButton:im,navIcon:am,thumbnailsContent:sm,thumbnailNavButton:lm,thumbnailNavButtonIcon:cm,caption:dm,indicatorList:um,indicatorButton:pm,insetIndicatorList:fm,insetIndicatorButton:hm,closeButton:gm,closeButtonIcon:mm,colorScheme:bm,css:""};var vm={color:"{form.field.icon.color}"};var js={icon:vm,css:""};var ym={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},Cm={paddingTop:"1.5rem",paddingBottom:"0.5rem"};var $s={root:ym,input:Cm,css:""};var wm={transitionDuration:"{transition.duration}"},Dm={icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},Sm={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},_m={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}};var zs={root:wm,preview:Dm,toolbar:Sm,action:_m,css:""};var km={size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}};var Hs={handle:km,css:""};var Em={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},xm={fontWeight:"500"},Am={size:"1rem"},Rm={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}};var Ws={root:Em,text:xm,icon:Am,colorScheme:Rm,css:""};var Im={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},Fm={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"};var Gs={root:Im,display:Fm,css:""};var Tm={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Mm={borderRadius:"{border.radius.sm}"},Om={light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}};var qs={root:Tm,chip:Mm,colorScheme:Om,css:""};var Bm={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},Nm=`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: dt('inputtext.filled.background');
    border-inline-color: dt('inputtext.filled.background');
    background: dt('inputtext.filled.background') no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
`,Ys={addon:Bm,css:Nm};var Lm={transitionDuration:"{transition.duration}"},Pm={width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},Vm={light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},Um=`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: dt('inputtext.filled.background');
    border-inline-color: dt('inputtext.filled.background');
    background: dt('inputtext.filled.background') no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: dt('inputtext.filled.background');
    border-inline-color: dt('inputtext.filled.background');
    background: dt('inputtext.filled.background') no-repeat;
}

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid dt('inputtext.border.color')
}
`,Ks={root:Lm,button:Pm,colorScheme:Vm,css:Um};var jm={gap:"0.5rem"},$m={width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}};var Zs={root:jm,input:$m,css:""};var zm={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Hm=`
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('inputtext.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: dt('inputtext.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.hover.border.color'), dt('inputtext.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: dt('inputtext.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, dt('inputtext.focus.border.color'), dt('inputtext.focus.border.color')), linear-gradient(to bottom, dt('inputtext.hover.border.color'), dt('inputtext.hover.border.color'));
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color')), linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color'));
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color')), linear-gradient(to bottom, dt('inputtext.invalid.border.color'), dt('inputtext.invalid.border.color'));
}

.p-inputtext.p-variant-filled:disabled {
    background: dt('inputtext.disabled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color')), linear-gradient(to bottom, dt('inputtext.border.color'), dt('inputtext.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}
`,Xs={root:zm,css:Hm};var Wm={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Gm={background:"{primary.color}"},qm={background:"{content.border.color}"},Ym={color:"{text.muted.color}"};var Qs={root:Wm,value:Gm,range:qm,text:Ym,css:""};var Km={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},Zm={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Xm={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Qm={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Jm={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},e0={padding:"{list.option.padding}"},t0={light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},o0=`
.p-listbox-option {
    transition: none;
}
`,Js={root:Km,list:Zm,option:Xm,optionGroup:Qm,checkmark:Jm,emptyMessage:e0,colorScheme:t0,css:o0};var r0={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},n0={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},i0={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},a0={padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},s0={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},l0={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},c0={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},d0={borderColor:"{content.border.color}"},u0={borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},p0=`
.p-megamenu-button:focus-visible {
    background: dt('navigation.item.active.background');
}
`,el={root:r0,baseItem:n0,item:i0,overlay:a0,submenu:s0,submenuLabel:l0,submenuIcon:c0,separator:d0,mobileButton:u0,css:p0};var f0={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},h0={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},g0={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},m0={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},b0={borderColor:"{content.border.color}"},v0=`
.p-menu-overlay {
    border-color: transparent;
}
`,tl={root:f0,list:h0,item:g0,submenuLabel:m0,separator:b0,css:v0};var y0={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},C0={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},w0={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},D0={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},S0={borderColor:"{content.border.color}"},_0={borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},k0=`
.p-menubar-button:focus-visible {
    background: dt('navigation.item.active.background');
}
`,ol={root:y0,baseItem:C0,item:w0,submenu:D0,separator:S0,mobileButton:_0,css:k0};var E0={borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},x0={padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},A0={fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},R0={size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},I0={width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},F0={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},T0={root:{borderWidth:"1px"}},M0={content:{padding:"0"}},O0={light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}};var rl={root:E0,content:x0,text:A0,icon:R0,closeButton:I0,closeIcon:F0,outlined:T0,simple:M0,colorScheme:O0,css:""};var B0={borderRadius:"{content.border.radius}",gap:"1rem"},N0={background:"{content.border.color}",size:"0.5rem"},L0={gap:"0.5rem"},P0={size:"0.5rem"},V0={size:"1rem"},U0={verticalGap:"0.5rem",horizontalGap:"1rem"};var nl={root:B0,meters:N0,label:L0,labelMarker:P0,labelIcon:V0,labelList:U0,css:""};var j0={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},$0={width:"2.5rem",color:"{form.field.icon.color}"},z0={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},H0={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},W0={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},G0={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},q0={color:"{form.field.icon.color}"},Y0={borderRadius:"{border.radius.sm}"},K0={padding:"{list.option.padding}"},Z0=`
.p-multiselect.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('multiselect.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.border.color'), dt('multiselect.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: dt('multiselect.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.hover.border.color'), dt('multiselect.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: dt('multiselect.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.border.color'), dt('multiselect.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, dt('multiselect.focus.border.color'), dt('multiselect.focus.border.color')), linear-gradient(to bottom, dt('multiselect.hover.border.color'), dt('multiselect.hover.border.color'));
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color')), linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color'));
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color')), linear-gradient(to bottom, dt('multiselect.invalid.border.color'), dt('multiselect.invalid.border.color'));
}

.p-multiselect-option {
    transition: none;
}
`,il={root:j0,dropdown:$0,overlay:z0,list:H0,option:W0,optionGroup:G0,chip:Y0,clearIcon:q0,emptyMessage:K0,css:Z0};var X0={gap:"1.125rem"},Q0={gap:"0.5rem"};var al={root:X0,controls:Q0,css:""};var J0={gutter:"0.75rem",transitionDuration:"{transition.duration}"},eb={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},tb={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ob={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"};var sl={root:J0,node:eb,nodeToggleButton:tb,connector:ob,css:""};var rb={outline:{width:"2px",color:"{content.background}"}};var ll={root:rb,css:""};var nb={padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},ib={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ab={color:"{text.muted.color}"},sb={maxWidth:"2.5rem"};var cl={root:nb,navButton:ib,currentPageReport:ab,jumpToPageInput:sb,css:""};var lb={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},cb={background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},db={padding:"0.5rem 1.25rem"},ub={fontWeight:"600"},pb={padding:"0 1.25rem 1.25rem 1.25rem"},fb={padding:"0 1.25rem 1.25rem 1.25rem"};var dl={root:lb,header:cb,toggleableHeader:db,title:ub,content:pb,footer:fb,css:""};var hb={gap:"0",transitionDuration:"{transition.duration}"},gb={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},mb={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},bb={indent:"1rem"},vb={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},yb=`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px dt('panelmenu.panel.border.color');
    transition: margin dt('panelmenu.transition.duration');
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-top-left-radius: dt('content.border.radius');
    border-top-right-radius: dt('content.border.radius');
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-bottom-left-radius: dt('content.border.radius');
    border-bottom-right-radius: dt('content.border.radius');
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: dt('navigation.item.active.background');
}
`,ul={root:hb,panel:gb,item:mb,submenu:bb,submenuIcon:vb,css:yb};var Cb={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},wb={color:"{form.field.icon.color}"},Db={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},Sb={gap:"0.5rem"},_b={light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}};var pl={meter:Cb,icon:wb,overlay:Db,content:Sb,colorScheme:_b,css:""};var kb={gap:"1.125rem"},Eb={gap:"0.5rem"};var fl={root:kb,controls:Eb,css:""};var xb={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},Ab={padding:"{overlay.popover.padding}"};var hl={root:xb,content:Ab,css:""};var Rb={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},Ib={background:"{primary.color}"},Fb={color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"};var gl={root:Rb,value:Ib,label:Fb,css:""};var Tb={light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}};var ml={colorScheme:Tb,css:""};var Mb={width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},Ob={size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}};var bl={root:Mb,icon:Ob};var Bb={gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},Nb={size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},Lb=`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, dt('rating.icon.color'), transparent 96%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.color'), transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, dt('rating.icon.active.color'), transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.active.color'), transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, dt('rating.icon.active.color'), transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, dt('rating.icon.active.color'), transparent 84%);
}
`,vl={root:Bb,icon:Nb,css:Lb};var Pb={light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}};var yl={colorScheme:Pb,css:""};var Vb={transitionDuration:"{transition.duration}"},Ub={size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},jb={light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}};var Cl={root:Vb,bar:Ub,colorScheme:jb,css:""};var $b={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},zb={width:"2.5rem",color:"{form.field.icon.color}"},Hb={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Wb={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Gb={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},qb={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},Yb={color:"{form.field.icon.color}"},Kb={color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},Zb={padding:"{list.option.padding}"},Xb=`
.p-select.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('select.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.border.color'), dt('select.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: dt('select.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.hover.border.color'), dt('select.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: dt('select.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.border.color'), dt('select.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, dt('select.focus.border.color'), dt('select.focus.border.color')), linear-gradient(to bottom, dt('select.hover.border.color'), dt('select.hover.border.color'));
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color')), linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color'));
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color')), linear-gradient(to bottom, dt('select.invalid.border.color'), dt('select.invalid.border.color'));
}

.p-select-option {
    transition: none;
}
`,wl={root:$b,dropdown:zb,overlay:Hb,list:Wb,option:Gb,optionGroup:qb,clearIcon:Yb,checkmark:Kb,emptyMessage:Zb,css:Xb};var Qb={borderRadius:"{form.field.border.radius}"},Jb={light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}};var Dl={root:Qb,colorScheme:Jb,css:""};var ev={borderRadius:"{content.border.radius}"},tv={light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}};var Sl={root:ev,colorScheme:tv,css:""};var ov={transitionDuration:"{transition.duration}"},rv={background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},nv={background:"{primary.color}"},iv={width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},av=`
.p-slider-handle {
    transition: box-shadow dt('slider.transition.duration');
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('slider.handle.background'), transparent 84%);
}
`,_l={root:ov,track:rv,range:nv,handle:iv,css:av};var sv={gap:"0.5rem",transitionDuration:"{transition.duration}"};var kl={root:sv,css:""};var lv={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"};var El={root:lv,css:""};var cv={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},dv={background:"{content.border.color}"},uv={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}};var xl={root:cv,gutter:dv,handle:uv,css:""};var pv={transitionDuration:"{transition.duration}"},fv={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},hv={padding:"0.5rem",gap:"1rem"},gv={padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},mv={color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},bv={activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},vv={padding:"0.875rem 0.5rem 1.125rem 0.5rem"},yv={background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},Cv={light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},wv=`
.p-step-header:focus-visible {
    background: dt('navigation.item.active.background');
}
`,Al={root:pv,separator:fv,step:hv,stepHeader:gv,stepTitle:mv,stepNumber:bv,steppanels:vv,steppanel:yv,colorScheme:Cv,css:wv};var Dv={transitionDuration:"{transition.duration}"},Sv={background:"{content.border.color}"},_v={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},kv={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},Ev={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"};var Rl={root:Dv,separator:Sv,itemLink:_v,itemLabel:kv,itemNumber:Ev,css:""};var xv={transitionDuration:"{transition.duration}"},Av={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Rv={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Iv={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Fv={height:"1px",bottom:"-1px",background:"{primary.color}"};var Il={root:xv,tablist:Av,item:Rv,itemIcon:Iv,activeBar:Fv,css:""};var Tv={transitionDuration:"{transition.duration}"},Mv={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Ov={background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},Bv={background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},Nv={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},Lv={height:"2px",bottom:"-1px",background:"{primary.color}"},Pv=`
.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, dt('primary.color'), transparent 90%);
}

.p-tab:not(.p-disabled):focus-visible {
    background: dt('navigation.item.active.background');
}

.p-tablist-nav-button:focus-visible {
    background: dt('navigation.item.active.background');
}
`,Fl={root:Tv,tablist:Mv,tab:Ov,tabpanel:Bv,navButton:Nv,activeBar:Lv,css:Pv};var Vv={transitionDuration:"{transition.duration}"},Uv={background:"{content.background}",borderColor:"{content.border.color}"},jv={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},$v={background:"{content.background}",color:"{content.color}"},zv={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},Hv={light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}};var Tl={root:Vv,tabList:Uv,tab:jv,tabPanel:$v,navButton:zv,colorScheme:Hv,css:""};var Wv={fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},Gv={size:"0.75rem"},qv={light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}};var Ml={root:Wv,icon:Gv,colorScheme:qv,css:""};var Yv={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},Kv={gap:"0.25rem"},Zv={margin:"2px 0"};var Ol={root:Yv,prompt:Kv,commandResponse:Zv,css:""};var Xv={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Qv=`
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('textarea.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.border.color'), dt('textarea.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: dt('textarea.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.hover.border.color'), dt('textarea.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: dt('textarea.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.border.color'), dt('textarea.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, dt('textarea.focus.border.color'), dt('textarea.focus.border.color')), linear-gradient(to bottom, dt('textarea.hover.border.color'), dt('textarea.hover.border.color'));
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color')), linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color'));
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color')), linear-gradient(to bottom, dt('textarea.invalid.border.color'), dt('textarea.invalid.border.color'));
}
`,Bl={root:Xv,css:Qv};var Jv={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},ey={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},ty={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},oy={mobileIndent:"1rem"},ry={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},ny={borderColor:"{content.border.color}"},iy=`
.p-tieredmenu-overlay {
    border-color: transparent;
}
`,Nl={root:Jv,list:ey,item:ty,submenu:oy,submenuIcon:ry,separator:ny,css:iy};var ay={minHeight:"5rem"},sy={eventContent:{padding:"1rem 0"}},ly={eventContent:{padding:"0 1rem"}},cy={size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},dy={color:"{content.border.color}",size:"2px"},uy={light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}};var Ll={event:ay,horizontal:sy,vertical:ly,eventMarker:cy,eventConnector:dy,colorScheme:uy,css:""};var py={width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},fy={size:"1.25rem"},hy={padding:"{overlay.popover.padding}",gap:"0.5rem"},gy={gap:"0.5rem"},my={fontWeight:"500",fontSize:"1rem"},by={fontWeight:"500",fontSize:"0.875rem"},vy={width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},yy={size:"1rem"},Cy={light:{root:{blur:"0"},info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}};var Pl={root:py,icon:fy,content:hy,text:gy,summary:my,detail:by,closeButton:vy,closeIcon:yy,colorScheme:Cy,css:""};var wy={padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},Dy={color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},Sy={checkedBackground:"transparent",checkedShadow:"none",padding:"0",borderRadius:"0",sm:{padding:"0"},lg:{padding:"0"}},_y={light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},ky=`
.p-togglebutton:focus-visible {
    background: dt('togglebutton.hover.background');
}
`,Vl={root:wy,icon:Dy,content:Sy,colorScheme:_y,css:ky};var Ey={width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},xy={borderRadius:"50%",size:"1.5rem"},Ay={light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},Ry=`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('text.color'), transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, dt('toggleswitch.handle.checked.background'), transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`,Ul={root:Ey,handle:xy,colorScheme:Ay,css:Ry};var Iy={color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},Fy={light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}};var jl={root:Iy,colorScheme:Fy,css:""};var Ty={background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"};var $l={root:Ty,css:""};var My={background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},Oy={padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},By={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},Ny={borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ly={size:"2rem"},Py={margin:"0 0 0.75rem 0"},Vy=`
.p-tree-node-content {
    transition: none;
}
`,zl={root:My,node:Oy,nodeIcon:By,nodeToggleButton:Ny,loadingIcon:Ly,filter:Py,css:Vy};var Uy={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},jy={width:"2.5rem",color:"{form.field.icon.color}"},$y={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},zy={padding:"{list.padding}"},Hy={padding:"{list.option.padding}"},Wy={borderRadius:"{border.radius.sm}"},Gy={color:"{form.field.icon.color}"},qy=`
.p-treeselect.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: dt('treeselect.filled.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.border.color'), dt('treeselect.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: dt('treeselect.filled.hover.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.hover.border.color'), dt('treeselect.hover.border.color'));
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: dt('treeselect.filled.focus.background') no-repeat;
    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.border.color'), dt('treeselect.border.color'));
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, dt('treeselect.focus.border.color'), dt('treeselect.focus.border.color')), linear-gradient(to bottom, dt('treeselect.hover.border.color'), dt('treeselect.hover.border.color'));
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color')), linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color'));
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color')), linear-gradient(to bottom, dt('treeselect.invalid.border.color'), dt('treeselect.invalid.border.color'));
}
`,Hl={root:Uy,dropdown:jy,overlay:$y,tree:zy,emptyMessage:Hy,chip:Wy,clearIcon:Gy,css:qy};var Yy={transitionDuration:"{transition.duration}"},Ky={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},Zy={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Xy={fontWeight:"600"},Qy={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Jy={borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},eC={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},tC={fontWeight:"600"},oC={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},rC={width:"0.5rem"},nC={width:"1px",color:"{primary.color}"},iC={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},aC={size:"2rem"},sC={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},lC={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},cC={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},dC={light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}};var Wl={root:Yy,header:Ky,headerCell:Zy,columnTitle:Xy,row:Qy,bodyCell:Jy,footerCell:eC,columnFooter:tC,footer:oC,columnResizer:rC,resizeIndicator:nC,sortIcon:iC,loadingIcon:aC,nodeToggleButton:sC,paginatorTop:lC,paginatorBottom:cC,colorScheme:dC};var uC={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}};var Gl={loader:uC,css:""};var pC=Object.defineProperty,fC=Object.defineProperties,hC=Object.getOwnPropertyDescriptors,ql=Object.getOwnPropertySymbols,gC=Object.prototype.hasOwnProperty,mC=Object.prototype.propertyIsEnumerable,Yl=(t,r,e)=>r in t?pC(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Kl,Zl=(Kl=((t,r)=>{for(var e in r||(r={}))gC.call(r,e)&&Yl(t,e,r[e]);if(ql)for(var e of ql(r))mC.call(r,e)&&Yl(t,e,r[e]);return t})({},ms),fC(Kl,hC({components:{accordion:ps,autocomplete:fs,avatar:hs,badge:gs,blockui:bs,breadcrumb:vs,button:ys,datepicker:Fs,card:Cs,carousel:ws,cascadeselect:Ds,checkbox:Ss,chip:_s,colorpicker:ks,confirmdialog:Es,confirmpopup:xs,contextmenu:As,dataview:Is,datatable:Rs,dialog:Ts,divider:Ms,dock:Os,drawer:Bs,editor:Ns,fieldset:Ls,fileupload:Ps,iftalabel:$s,floatlabel:Vs,galleria:Us,iconfield:js,image:zs,imagecompare:Hs,inlinemessage:Ws,inplace:Gs,inputchips:qs,inputgroup:Ys,inputnumber:Ks,inputotp:Zs,inputtext:Xs,knob:Qs,listbox:Js,megamenu:el,menu:tl,menubar:ol,message:rl,metergroup:nl,multiselect:il,orderlist:al,organizationchart:sl,overlaybadge:ll,popover:hl,paginator:cl,password:pl,panel:dl,panelmenu:ul,picklist:fl,progressbar:gl,progressspinner:ml,radiobutton:bl,rating:vl,ripple:yl,scrollpanel:Cl,select:wl,selectbutton:Dl,skeleton:Sl,slider:_l,speeddial:kl,splitter:xl,splitbutton:El,stepper:Al,steps:Rl,tabmenu:Il,tabs:Fl,tabview:Tl,textarea:Bl,tieredmenu:Nl,tag:Ml,terminal:Ol,timeline:Ll,togglebutton:Vl,toggleswitch:Ul,tree:zl,treeselect:Hl,treetable:Wl,toast:Pl,toolbar:jl,tooltip:$l,virtualscroller:Gl}})));function Ft(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let o=t[e];if(!o)continue;let n=typeof o;if(n==="string"||n==="number")r.push(o);else if(n==="object"){let i=Array.isArray(o)?[Ft(...o)]:Object.entries(o).map(([a,s])=>s?a:void 0);r=i.length?r.concat(i.filter(a=>!!a)):r}}return r.join(" ").trim()}}function Ql(t,r){return t?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}function ti(t,r){if(t&&r){let e=o=>{Ql(t,o)||(t.classList?t.classList.add(o):t.className+=" "+o)};[r].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(e))}}function Tt(t,r){if(t&&r){let e=o=>{t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[r].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(e))}}function Jl(t){for(let r of document?.styleSheets)try{for(let e of r?.cssRules)for(let o of e?.style)if(t.test(o))return{name:o,value:e.style.getPropertyValue(o).trim()}}catch{}return null}function Xl(t){return t?Math.abs(t.scrollLeft):0}function ec(t,r){if(t instanceof HTMLElement){let e=t.offsetWidth;if(r){let o=getComputedStyle(t);e+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return e}return 0}function tc(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function oi(t,r={}){if(tc(t)){let e=(o,n)=>{var i,a;let s=(i=t?.$attrs)!=null&&i[o]?[(a=t?.$attrs)==null?void 0:a[o]]:[];return[n].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?e(o,c):Object.entries(c).map(([f,g])=>o==="style"&&(g||g===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},s)};Object.entries(r).forEach(([o,n])=>{if(n!=null){let i=o.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),n):o==="p-bind"||o==="pBind"?oi(t,n):(n=o==="class"?[...new Set(e("class",n))].join(" ").trim():o==="style"?e("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=n),t.setAttribute(o,n))}})}}function ri(t){if(t){let r=t.offsetHeight,e=getComputedStyle(t);return r-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),r}return 0}function oc(t){if(t){let r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||Xl(document.documentElement)||Xl(document.body)||0)}}return{top:"auto",left:"auto"}}function rc(t,r){if(t){let e=t.offsetHeight;if(r){let o=getComputedStyle(t);e+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return e}return 0}function ni(t){if(t){let r=t.offsetWidth,e=getComputedStyle(t);return r-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),r}return 0}function nc(t){var r;t&&("remove"in Element.prototype?t.remove():(r=t.parentNode)==null||r.removeChild(t))}function ic(t,r="",e){tc(t)&&e!==null&&e!==void 0&&t.setAttribute(r,e)}function ac(){let t=new Map;return{on(r,e){let o=t.get(r);return o?o.push(e):o=[e],t.set(r,o),this},off(r,e){let o=t.get(r);return o&&o.splice(o.indexOf(e)>>>0,1),this},emit(r,e){let o=t.get(r);o&&o.forEach(n=>{n(e)})},clear(){t.clear()}}}function ct(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function ii(t,r,e=new WeakSet){if(t===r)return!0;if(!t||!r||typeof t!="object"||typeof r!="object"||e.has(t)||e.has(r))return!1;e.add(t).add(r);let o=Array.isArray(t),n=Array.isArray(r),i,a,s;if(o&&n){if(a=t.length,a!=r.length)return!1;for(i=a;i--!==0;)if(!ii(t[i],r[i],e))return!1;return!0}if(o!=n)return!1;let l=t instanceof Date,c=r instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==r.getTime();let d=t instanceof RegExp,u=r instanceof RegExp;if(d!=u)return!1;if(d&&u)return t.toString()==r.toString();let f=Object.keys(t);if(a=f.length,a!==Object.keys(r).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,f[i]))return!1;for(i=a;i--!==0;)if(s=f[i],!ii(t[s],r[s],e))return!1;return!0}function bC(t,r){return ii(t,r)}function cc(t){return typeof t=="function"&&"call"in t&&"apply"in t}function N(t){return!ct(t)}function sc(t,r){if(!t||!r)return null;try{let e=t[r];if(N(e))return e}catch{}if(Object.keys(t).length){if(cc(r))return r(t);if(r.indexOf(".")===-1)return t[r];{let e=r.split("."),o=t;for(let n=0,i=e.length;n<i;++n){if(o==null)return null;o=o[e[n]]}return o}}return null}function dc(t,r,e){return e?sc(t,e)===sc(r,e):bC(t,r)}function je(t,r=!0){return t instanceof Object&&t.constructor===Object&&(r||Object.keys(t).length!==0)}function ue(t,...r){return cc(t)?t(...r):t}function Ze(t,r=!0){return typeof t=="string"&&(r||t!=="")}function lc(t){return Ze(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function wr(t,r="",e={}){let o=lc(r).split("."),n=o.shift();if(n){if(je(t)){let i=Object.keys(t).find(a=>lc(a)===n)||"";return wr(ue(t[i],e),o.join("."),e)}return}return ue(t,e)}function uc(t){return N(t)&&!isNaN(t)}function Ie(t,r){if(r){let e=r.test(t);return r.lastIndex=0,e}return!1}function dt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Dr(t){return Ze(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(r,e)=>e===0?r:"-"+r.toLowerCase()).toLowerCase():t}var Sr={};function vo(t="pui_id_"){return Object.hasOwn(Sr,t)||(Sr[t]=0),Sr[t]++,`${t}${Sr[t]}`}var pc=["*"];var te=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var fc=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=V({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:pc,decls:1,vars:0,template:function(o,n){o&1&&(xe(),ge(0))},encapsulation:2})}return t})(),hc=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=V({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:pc,decls:1,vars:0,template:function(o,n){o&1&&(xe(),ge(0))},encapsulation:2})}return t})(),_r=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(o){return new(o||t)(T(Go))};static \u0275dir=M({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Se=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[ne]})}return t})();var vC=Object.defineProperty,yC=Object.defineProperties,CC=Object.getOwnPropertyDescriptors,kr=Object.getOwnPropertySymbols,bc=Object.prototype.hasOwnProperty,vc=Object.prototype.propertyIsEnumerable,gc=(t,r,e)=>r in t?vC(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Te=(t,r)=>{for(var e in r||(r={}))bc.call(r,e)&&gc(t,e,r[e]);if(kr)for(var e of kr(r))vc.call(r,e)&&gc(t,e,r[e]);return t},ai=(t,r)=>yC(t,CC(r)),$e=(t,r)=>{var e={};for(var o in t)bc.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(t!=null&&kr)for(var o of kr(t))r.indexOf(o)<0&&vc.call(t,o)&&(e[o]=t[o]);return e};var wC=ac(),be=wC,yo=/{([^}]*)}/g,yc=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Cc=/var\([^)]+\)/g;function mc(t){return Ze(t)?t.replace(/[A-Z]/g,(r,e)=>e===0?r:"."+r.toLowerCase()).toLowerCase():t}function DC(t){return je(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function SC(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function si(t="",r=""){return SC(`${Ze(t,!1)&&Ze(r,!1)?`${t}-`:t}${r}`)}function wc(t="",r=""){return`--${si(t,r)}`}function _C(t=""){let r=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(r+e)%2!==0}function Dc(t,r="",e="",o=[],n){if(Ze(t)){let i=t.trim();if(_C(i))return;if(Ie(i,yo)){let a=i.replaceAll(yo,s=>{let l=s.replace(/{|}/g,"").split(".").filter(c=>!o.some(d=>Ie(c,d)));return`var(${wc(e,Dr(l.join("-")))}${N(n)?`, ${n}`:""})`});return Ie(a.replace(Cc,"0"),yc)?`calc(${a})`:a}return i}else if(uc(t))return t}function kC(t,r,e){Ze(r,!1)&&t.push(`${r}:${e};`)}function Mt(t,r){return t?`${t}{${r}}`:""}function Sc(t,r){if(t.indexOf("dt(")===-1)return t;function e(a,s){let l=[],c=0,d="",u=null,f=0;for(;c<=a.length;){let g=a[c];if((g==='"'||g==="'"||g==="`")&&a[c-1]!=="\\"&&(u=u===g?null:g),!u&&(g==="("&&f++,g===")"&&f--,(g===","||c===a.length)&&f===0)){let b=d.trim();b.startsWith("dt(")?l.push(Sc(b,s)):l.push(o(b)),d="",c++;continue}g!==void 0&&(d+=g),c++}return l}function o(a){let s=a[0];if((s==='"'||s==="'"||s==="`")&&a[a.length-1]===s)return a.slice(1,-1);let l=Number(a);return isNaN(l)?a:l}let n=[],i=[];for(let a=0;a<t.length;a++)if(t[a]==="d"&&t.slice(a,a+3)==="dt(")i.push(a),a+=2;else if(t[a]===")"&&i.length>0){let s=i.pop();i.length===0&&n.push([s,a])}if(!n.length)return t;for(let a=n.length-1;a>=0;a--){let[s,l]=n[a],c=t.slice(s+3,l),d=e(c,r),u=r(...d);t=t.slice(0,s)+u+t.slice(l+1)}return t}var ze=(...t)=>EC(I.getTheme(),...t),EC=(t={},r,e,o)=>{if(r){let{variable:n,options:i}=I.defaults||{},{prefix:a,transform:s}=t?.options||i||{},l=Ie(r,yo)?r:`{${r}}`;return o==="value"||ct(o)&&s==="strict"?I.getTokenValue(r):Dc(l,void 0,a,[n.excludedKeyRegex],e)}return""};function Ot(t,...r){if(t instanceof Array){let e=t.reduce((o,n,i)=>{var a;return o+n+((a=ue(r[i],{dt:ze}))!=null?a:"")},"");return Sc(e,ze)}return ue(t,{dt:ze})}function xC(t,r={}){let e=I.defaults.variable,{prefix:o=e.prefix,selector:n=e.selector,excludedKeyRegex:i=e.excludedKeyRegex}=r,a=[],s=[],l=[{node:t,path:o}];for(;l.length;){let{node:d,path:u}=l.pop();for(let f in d){let g=d[f],b=DC(g),C=Ie(f,i)?si(u):si(u,Dr(f));if(je(b))l.push({node:b,path:C});else{let _=wc(C),P=Dc(b,C,o,[i]);kC(s,_,P);let X=C;o&&X.startsWith(o+"-")&&(X=X.slice(o.length+1)),a.push(X.replace(/-/g,"."))}}}let c=s.join("");return{value:s,tokens:a,declarations:c,css:Mt(n,c)}}var Fe={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let r=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var o;return(o=r.map(n=>n.resolve(e)).find(n=>n.matched))!=null?o:this.rules.custom.resolve(e)})}},_toVariables(t,r){return xC(t,{prefix:r?.prefix})},getCommon({name:t="",theme:r={},params:e,set:o,defaults:n}){var i,a,s,l,c,d,u;let{preset:f,options:g}=r,b,C,_,P,X,$,ko;if(N(f)&&g.transform!=="strict"){let{primitive:Eo,semantic:xo,extend:Ao}=f,Vt=xo||{},{colorScheme:Ro}=Vt,Io=$e(Vt,["colorScheme"]),Fo=Ao||{},{colorScheme:To}=Fo,Ut=$e(Fo,["colorScheme"]),jt=Ro||{},{dark:Mo}=jt,Oo=$e(jt,["dark"]),Bo=To||{},{dark:No}=Bo,Lo=$e(Bo,["dark"]),Po=N(Eo)?this._toVariables({primitive:Eo},g):{},Vo=N(Io)?this._toVariables({semantic:Io},g):{},Uo=N(Oo)?this._toVariables({light:Oo},g):{},Di=N(Mo)?this._toVariables({dark:Mo},g):{},Si=N(Ut)?this._toVariables({semantic:Ut},g):{},_i=N(Lo)?this._toVariables({light:Lo},g):{},ki=N(No)?this._toVariables({dark:No},g):{},[Rd,Id]=[(i=Po.declarations)!=null?i:"",Po.tokens],[Fd,Td]=[(a=Vo.declarations)!=null?a:"",Vo.tokens||[]],[Md,Od]=[(s=Uo.declarations)!=null?s:"",Uo.tokens||[]],[Bd,Nd]=[(l=Di.declarations)!=null?l:"",Di.tokens||[]],[Ld,Pd]=[(c=Si.declarations)!=null?c:"",Si.tokens||[]],[Vd,Ud]=[(d=_i.declarations)!=null?d:"",_i.tokens||[]],[jd,$d]=[(u=ki.declarations)!=null?u:"",ki.tokens||[]];b=this.transformCSS(t,Rd,"light","variable",g,o,n),C=Id;let zd=this.transformCSS(t,`${Fd}${Md}`,"light","variable",g,o,n),Hd=this.transformCSS(t,`${Bd}`,"dark","variable",g,o,n);_=`${zd}${Hd}`,P=[...new Set([...Td,...Od,...Nd])];let Wd=this.transformCSS(t,`${Ld}${Vd}color-scheme:light`,"light","variable",g,o,n),Gd=this.transformCSS(t,`${jd}color-scheme:dark`,"dark","variable",g,o,n);X=`${Wd}${Gd}`,$=[...new Set([...Pd,...Ud,...$d])],ko=ue(f.css,{dt:ze})}return{primitive:{css:b,tokens:C},semantic:{css:_,tokens:P},global:{css:X,tokens:$},style:ko}},getPreset({name:t="",preset:r={},options:e,params:o,set:n,defaults:i,selector:a}){var s,l,c;let d,u,f;if(N(r)&&e.transform!=="strict"){let g=t.replace("-directive",""),b=r,{colorScheme:C,extend:_,css:P}=b,X=$e(b,["colorScheme","extend","css"]),$=_||{},{colorScheme:ko}=$,Eo=$e($,["colorScheme"]),xo=C||{},{dark:Ao}=xo,Vt=$e(xo,["dark"]),Ro=ko||{},{dark:Io}=Ro,Fo=$e(Ro,["dark"]),To=N(X)?this._toVariables({[g]:Te(Te({},X),Eo)},e):{},Ut=N(Vt)?this._toVariables({[g]:Te(Te({},Vt),Fo)},e):{},jt=N(Ao)?this._toVariables({[g]:Te(Te({},Ao),Io)},e):{},[Mo,Oo]=[(s=To.declarations)!=null?s:"",To.tokens||[]],[Bo,No]=[(l=Ut.declarations)!=null?l:"",Ut.tokens||[]],[Lo,Po]=[(c=jt.declarations)!=null?c:"",jt.tokens||[]],Vo=this.transformCSS(g,`${Mo}${Bo}`,"light","variable",e,n,i,a),Uo=this.transformCSS(g,Lo,"dark","variable",e,n,i,a);d=`${Vo}${Uo}`,u=[...new Set([...Oo,...No,...Po])],f=ue(P,{dt:ze})}return{css:d,tokens:u,style:f}},getPresetC({name:t="",theme:r={},params:e,set:o,defaults:n}){var i;let{preset:a,options:s}=r,l=(i=a?.components)==null?void 0:i[t];return this.getPreset({name:t,preset:l,options:s,params:e,set:o,defaults:n})},getPresetD({name:t="",theme:r={},params:e,set:o,defaults:n}){var i,a;let s=t.replace("-directive",""),{preset:l,options:c}=r,d=((i=l?.components)==null?void 0:i[s])||((a=l?.directives)==null?void 0:a[s]);return this.getPreset({name:s,preset:d,options:c,params:e,set:o,defaults:n})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,r){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?r.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:r.options.darkModeSelector):[]},getLayerOrder(t,r={},e,o){let{cssLayer:n}=r;return n?`@layer ${ue(n.order||n.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:r={},params:e,props:o={},set:n,defaults:i}){let a=this.getCommon({name:t,theme:r,params:e,set:n,defaults:i}),s=Object.entries(o).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(a||{}).reduce((l,[c,d])=>{if(je(d)&&Object.hasOwn(d,"css")){let u=dt(d.css),f=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${f}" ${s}>${u}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:r={},params:e,props:o={},set:n,defaults:i}){var a;let s={name:t,theme:r,params:e,set:n,defaults:i},l=(a=t.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,c=Object.entries(o).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${dt(l)}</style>`:""},createTokens(t={},r,e="",o="",n={}){let i=function(s,l={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:s,path:this.path,paths:l,value:void 0};c.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&yo.test(this.value)){let u=this.value.trim().replace(yo,f=>{var g;let b=f.slice(1,-1),C=this.tokens[b];if(!C)return console.warn(`Token not found for path: ${b}`),"__UNRESOLVED__";let _=C.computed(s,l,c);return Array.isArray(_)&&_.length===2?`light-dark(${_[0].value},${_[1].value})`:(g=_?.value)!=null?g:"__UNRESOLVED__"});d=yc.test(u.replace(Cc,"0"))?`calc(${u})`:u}return ct(l.binding)&&delete l.binding,c.pop(),{colorScheme:s,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},a=(s,l,c)=>{Object.entries(s).forEach(([d,u])=>{let f=Ie(d,r.variable.excludedKeyRegex)?l:l?`${l}.${mc(d)}`:mc(d),g=c?`${c}.${d}`:d;je(u)?a(u,f,g):(n[f]||(n[f]={paths:[],computed:(b,C={},_=[])=>{if(n[f].paths.length===1)return n[f].paths[0].computed(n[f].paths[0].scheme,C.binding,_);if(b&&b!=="none")for(let P=0;P<n[f].paths.length;P++){let X=n[f].paths[P];if(X.scheme===b)return X.computed(b,C.binding,_)}return n[f].paths.map(P=>P.computed(P.scheme,C[P.scheme],_))}}),n[f].paths.push({path:g,value:u,scheme:g.includes("colorScheme.light")?"light":g.includes("colorScheme.dark")?"dark":"none",computed:i,tokens:n}))})};return a(t,e,o),n},getTokenValue(t,r,e){var o;let n=(s=>s.split(".").filter(l=>!Ie(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(r),i=r.includes("colorScheme.light")?"light":r.includes("colorScheme.dark")?"dark":void 0,a=[(o=t[n])==null?void 0:o.computed(i)].flat().filter(s=>s);return a.length===1?a[0].value:a.reduce((s={},l)=>{let c=l,{colorScheme:d}=c,u=$e(c,["colorScheme"]);return s[d]=u,s},void 0)},getSelectorRule(t,r,e,o){return e==="class"||e==="attr"?Mt(N(r)?`${t}${r},${t} ${r}`:t,o):Mt(t,Mt(r??":root",o))},transformCSS(t,r,e,o,n={},i,a,s){if(N(r)){let{cssLayer:l}=n;if(o!=="style"){let c=this.getColorSchemeOption(n,a);r=e==="dark"?c.reduce((d,{type:u,selector:f})=>(N(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",r):this.getSelectorRule(f,s,u,r)),d),""):Mt(s??":root",r)}if(l){let c={name:"primeui",order:"primeui"};je(l)&&(c.name=ue(l.name,{name:t,type:o})),N(c.name)&&(r=Mt(`@layer ${c.name}`,r),i?.layerNames(c.name))}return r}return""}},I={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:r}=t;r&&(this._theme=ai(Te({},r),{options:Te(Te({},this.defaults.options),r.options)}),this._tokens=Fe.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),be.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ai(Te({},this.theme),{preset:t}),this._tokens=Fe.createTokens(t,this.defaults),this.clearLoadedStyleNames(),be.emit("preset:change",t),be.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ai(Te({},this.theme),{options:t}),this.clearLoadedStyleNames(),be.emit("options:change",t),be.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return Fe.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",r){return Fe.getCommon({name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Fe.getPresetC(e)},getDirective(t="",r){let e={name:t,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Fe.getPresetD(e)},getCustomPreset(t="",r,e,o){let n={name:t,preset:r,options:this.options,selector:e,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return Fe.getPreset(n)},getLayerOrderCSS(t=""){return Fe.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",r,e="style",o){return Fe.transformCSS(t,r,o,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",r,e={}){return Fe.getCommonStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,r,e={}){return Fe.getStyleSheet({name:t,theme:this.theme,params:r,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),be.emit(`theme:${r}:load`,t),!this._loadingStyles.size&&be.emit("theme:load"))}};var _c=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var AC=0,kc=(()=>{class t{document=p(F);use(e,o={}){let n=!1,i=e,a=null,{immediate:s=!0,manual:l=!1,name:c=`style_${++AC}`,id:d=void 0,media:u=void 0,nonce:f=void 0,first:g=!1,props:b={}}=o;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!a.isConnected){i=e;let C=this.document.head;ic(a,"nonce",f),g&&C.firstChild?C.insertBefore(a,C.firstChild):C.appendChild(a),oi(a,{type:"text/css",media:u,nonce:f,"data-primeng-style-id":c})}return a.textContent!==i&&(a.textContent=i),{id:d,name:c,el:a,css:i}}}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Bt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},RC=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,Z=(()=>{class t{name="base";useStyle=p(kc);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,o={},n=i=>i)=>{let i=n(Ot`${ue(e,{dt:ze})}`);return i?this.useStyle.use(dt(i),h({name:this.name},o)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},o="")=>this.load(this.theme,e,(n="")=>I.transformCSS(e.name||this.name,`${n}${Ot`${o}`}`));loadGlobalCSS=(e={})=>this.load(RC,e);loadGlobalTheme=(e={},o="")=>this.load(_c,e,(n="")=>I.transformCSS(e.name||this.name,`${n}${Ot`${o}`}`));getCommonTheme=e=>I.getCommon(this.name,e);getComponentTheme=e=>I.getComponent(this.name,e);getDirectiveTheme=e=>I.getDirective(this.name,e);getPresetTheme=(e,o,n)=>I.getCustomPreset(this.name,e,o,n);getLayerOrderThemeCSS=()=>I.getLayerOrderCSS(this.name);getStyleSheet=(e="",o={})=>{if(this.css){let n=ue(this.css,{dt:ze}),i=dt(Ot`${n}${e}`),a=Object.entries(o).reduce((s,[l,c])=>s.push(`${l}="${c}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${i}</style>`}return""};getCommonThemeStyleSheet=(e,o={})=>I.getCommonStyleSheet(this.name,e,o);getThemeStyleSheet=(e,o={})=>{let n=[I.getStyleSheet(this.name,e,o)];if(this.theme){let i=this.name==="base"?"global-style":`${this.name}-style`,a=Ot`${ue(this.theme,{dt:ze})}`,s=dt(I.transformCSS(i,a)),l=Object.entries(o).reduce((c,[d,u])=>c.push(`${d}="${u}"`)&&c,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${i}" ${l}>${s}</style>`)}return n.join("")};static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var IC=(()=>{class t{theme=H(void 0);csp=H({nonce:void 0});isThemeChanged=!1;document=p(F);baseStyle=p(Z);constructor(){qt(()=>{be.on("theme:change",e=>{K(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),qt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){I.clearLoadedStyleNames(),be.clear()}onThemeChange(e){I.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!I.isStyleNameLoaded("common")){let{primitive:e,semantic:o,global:n,style:i}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,h({name:"primitive-variables"},a)),this.baseStyle.load(o?.css,h({name:"semantic-variables"},a)),this.baseStyle.load(n?.css,h({name:"global-variables"},a)),this.baseStyle.loadGlobalTheme(h({name:"global-style"},a),i),I.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:o,csp:n}=e||{};o&&this.theme.set(o),n&&this.csp.set(n)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),li=(()=>{class t extends IC{ripple=H(!1);platformId=p(ke);inputStyle=H(null);inputVariant=H(null);overlayAppendTo=H("self");overlayOptions={};csp=H({nonce:void 0});filterMatchModeOptions={text:[te.STARTS_WITH,te.CONTAINS,te.NOT_CONTAINS,te.ENDS_WITH,te.EQUALS,te.NOT_EQUALS],numeric:[te.EQUALS,te.NOT_EQUALS,te.LESS_THAN,te.LESS_THAN_OR_EQUAL_TO,te.GREATER_THAN,te.GREATER_THAN_OR_EQUAL_TO],date:[te.DATE_IS,te.DATE_IS_NOT,te.DATE_BEFORE,te.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new ie;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=h(h({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:o,ripple:n,inputStyle:i,inputVariant:a,theme:s,overlayOptions:l,translation:c,filterMatchModeOptions:d,overlayAppendTo:u,zIndex:f}=e||{};o&&this.csp.set(o),u&&this.overlayAppendTo.set(u),n&&this.ripple.set(n),i&&this.inputStyle.set(i),a&&this.inputVariant.set(a),l&&(this.overlayOptions=l),c&&this.setTranslation(c),d&&(this.filterMatchModeOptions=d),f&&(this.zIndex=f),s&&this.setThemeConfig({theme:s,csp:o})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),FC=new k("PRIME_NG_CONFIG");function Ec(...t){let r=t?.map(o=>({provide:FC,useValue:o,multi:!1})),e=Jr(()=>{let o=p(li);t?.forEach(n=>o.setConfig(n))});return ht([...r,e])}var TC="@",MC=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=p(We);loadingSchedulerFn=p(OC,{optional:!0});_engine;constructor(e,o,n,i,a){this.doc=e,this.delegate=o,this.zone=n,this.animationType=i,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-WJM3JFLJ.js").then(n=>n),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(n=>{throw new R(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,o){let n=this.delegate.createRenderer(e,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new ci(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,o);i.use(s),this.scheduler??=this.injector.get(Vi,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(o){Wi()};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ci=class{delegate;replay=[];\u0275type=1;constructor(r){this.delegate=r}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,o,n){this.delegate.insertBefore(r,e,o,n)}removeChild(r,e,o){this.delegate.removeChild(r,e,o)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,o,n){this.delegate.setAttribute(r,e,o,n)}removeAttribute(r,e,o){this.delegate.removeAttribute(r,e,o)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,o,n){this.delegate.setStyle(r,e,o,n)}removeStyle(r,e,o){this.delegate.removeStyle(r,e,o)}setProperty(r,e,o){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(r,e,o)),this.delegate.setProperty(r,e,o)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,o,n){return this.shouldReplay(e)&&this.replay.push(i=>i.listen(r,e,o,n)),this.delegate.listen(r,e,o,n)}shouldReplay(r){return this.replay!==null&&r.startsWith(TC)}},OC=new k("");function xc(t="animations"){return Xr("NgAsyncAnimations"),ht([{provide:qo,useFactory:(r,e,o)=>new MC(r,e,o,t),deps:[F,eo,Le]},{provide:zi,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ac={providers:[xc(),Ec({theme:{preset:Zl,options:{darkModeSelector:"body.light-mode"}}}),Pi(),ea(),ei(us)]};var Nc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,o){this._renderer=e,this._elementRef=o}setProperty(e,o){this._renderer.setProperty(this._elementRef.nativeElement,e,o)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(o){return new(o||t)(T(et),T(Ne))};static \u0275dir=M({type:t})}return t})(),BC=(()=>{class t extends Nc{static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275dir=M({type:t,features:[B]})}return t})(),Lc=new k("");var NC={provide:Lc,useExisting:zo(()=>Br),multi:!0};function LC(){let t=we()?we().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var PC=new k(""),Br=(()=>{class t extends Nc{_compositionMode;_composing=!1;constructor(e,o,n){super(e,o),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!LC())}writeValue(e){let o=e??"";this.setProperty("value",o)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(o){return new(o||t)(T(et),T(Ne),T(PC,8))};static \u0275dir=M({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,n){o&1&&rt("input",function(a){return n._handleInput(a.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(a){return n._compositionEnd(a.target.value)})},standalone:!1,features:[Y([NC]),B]})}return t})();function fi(t){return t==null||hi(t)===0}function hi(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Pc=new k(""),Vc=new k(""),VC=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ut=class{static min(r){return UC(r)}static max(r){return jC(r)}static required(r){return $C(r)}static requiredTrue(r){return zC(r)}static email(r){return HC(r)}static minLength(r){return WC(r)}static maxLength(r){return GC(r)}static pattern(r){return qC(r)}static nullValidator(r){return Uc()}static compose(r){return Gc(r)}static composeAsync(r){return Yc(r)}};function UC(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e<t?{min:{min:t,actual:r.value}}:null}}function jC(t){return r=>{if(r.value==null||t==null)return null;let e=parseFloat(r.value);return!isNaN(e)&&e>t?{max:{max:t,actual:r.value}}:null}}function $C(t){return fi(t.value)?{required:!0}:null}function zC(t){return t.value===!0?null:{required:!0}}function HC(t){return fi(t.value)||VC.test(t.value)?null:{email:!0}}function WC(t){return r=>{let e=r.value?.length??hi(r.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function GC(t){return r=>{let e=r.value?.length??hi(r.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function qC(t){if(!t)return Uc;let r,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),r=new RegExp(e)):(e=t.toString(),r=t),o=>{if(fi(o.value))return null;let n=o.value;return r.test(n)?null:{pattern:{requiredPattern:e,actualValue:n}}}}function Uc(t){return null}function jc(t){return t!=null}function $c(t){return Gt(t)?ae(t):t}function zc(t){let r={};return t.forEach(e=>{r=e!=null?h(h({},r),e):r}),Object.keys(r).length===0?null:r}function Hc(t,r){return r.map(e=>e(t))}function YC(t){return!t.validate}function Wc(t){return t.map(r=>YC(r)?r:e=>r.validate(e))}function Gc(t){if(!t)return null;let r=t.filter(jc);return r.length==0?null:function(e){return zc(Hc(e,r))}}function qc(t){return t!=null?Gc(Wc(t)):null}function Yc(t){if(!t)return null;let r=t.filter(jc);return r.length==0?null:function(e){let o=Hc(e,r).map($c);return Ti(o).pipe(A(zc))}}function Kc(t){return t!=null?Yc(Wc(t)):null}function Rc(t,r){return t===null?[r]:Array.isArray(t)?[...t,r]:[t,r]}function Zc(t){return t._rawValidators}function Xc(t){return t._rawAsyncValidators}function di(t){return t?Array.isArray(t)?t:[t]:[]}function xr(t,r){return Array.isArray(t)?t.includes(r):t===r}function Ic(t,r){let e=di(r);return di(t).forEach(n=>{xr(e,n)||e.push(n)}),e}function Fc(t,r){return di(r).filter(e=>!xr(t,e))}var Ar=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=qc(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=Kc(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control&&this.control.reset(r)}hasError(r,e){return this.control?this.control.hasError(r,e):!1}getError(r,e){return this.control?this.control.getError(r,e):null}},Pt=class extends Ar{name;get formDirective(){return null}get path(){return null}},_o=class extends Ar{_parent=null;name=null;valueAccessor=null},Rr=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},KC={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},CR=O(h({},KC),{"[class.ng-submitted]":"isSubmitted"}),Qc=(()=>{class t extends Rr{constructor(e){super(e)}static \u0275fac=function(o){return new(o||t)(T(_o,2))};static \u0275dir=M({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,n){o&2&&Yo("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[B]})}return t})(),Jc=(()=>{class t extends Rr{constructor(e){super(e)}static \u0275fac=function(o){return new(o||t)(T(Pt,10))};static \u0275dir=M({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,n){o&2&&Yo("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[B]})}return t})();var Co="VALID",Er="INVALID",Nt="PENDING",wo="DISABLED",Xe=class{},Ir=class extends Xe{value;source;constructor(r,e){super(),this.value=r,this.source=e}},Do=class extends Xe{pristine;source;constructor(r,e){super(),this.pristine=r,this.source=e}},So=class extends Xe{touched;source;constructor(r,e){super(),this.touched=r,this.source=e}},Lt=class extends Xe{status;source;constructor(r,e){super(),this.status=r,this.source=e}},ui=class extends Xe{source;constructor(r){super(),this.source=r}},pi=class extends Xe{source;constructor(r){super(),this.source=r}};function ed(t){return(Nr(t)?t.validators:t)||null}function ZC(t){return Array.isArray(t)?qc(t):t||null}function td(t,r){return(Nr(r)?r.asyncValidators:t)||null}function XC(t){return Array.isArray(t)?Kc(t):t||null}function Nr(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function QC(t,r,e){let o=t.controls;if(!(r?Object.keys(o):o).length)throw new R(1e3,"");if(!o[e])throw new R(1001,"")}function JC(t,r,e){t._forEachChild((o,n)=>{if(e[n]===void 0)throw new R(1002,"")})}var Fr=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,e){this._assignValidators(r),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return K(this.statusReactive)}set status(r){K(()=>this.statusReactive.set(r))}_status=gt(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===Co}get invalid(){return this.status===Er}get pending(){return this.status==Nt}get disabled(){return this.status===wo}get enabled(){return this.status!==wo}errors;get pristine(){return K(this.pristineReactive)}set pristine(r){K(()=>this.pristineReactive.set(r))}_pristine=gt(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return K(this.touchedReactive)}set touched(r){K(()=>this.touchedReactive.set(r))}_touched=gt(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new ie;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(Ic(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(Ic(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(Fc(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(Fc(r,this._rawAsyncValidators))}hasValidator(r){return xr(this._rawValidators,r)}hasAsyncValidator(r){return xr(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let e=this.touched===!1;this.touched=!0;let o=r.sourceControl??this;this._parent&&!r.onlySelf&&this._parent.markAsTouched(O(h({},r),{sourceControl:o})),e&&r.emitEvent!==!1&&this._events.next(new So(!0,o))}markAllAsDirty(r={}){this.markAsDirty({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(r))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(r))}markAsUntouched(r={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=r.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:o})}),this._parent&&!r.onlySelf&&this._parent._updateTouched(r,o),e&&r.emitEvent!==!1&&this._events.next(new So(!1,o))}markAsDirty(r={}){let e=this.pristine===!0;this.pristine=!1;let o=r.sourceControl??this;this._parent&&!r.onlySelf&&this._parent.markAsDirty(O(h({},r),{sourceControl:o})),e&&r.emitEvent!==!1&&this._events.next(new Do(!1,o))}markAsPristine(r={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=r.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),this._parent&&!r.onlySelf&&this._parent._updatePristine(r,o),e&&r.emitEvent!==!1&&this._events.next(new Do(!0,o))}markAsPending(r={}){this.status=Nt;let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Lt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!r.onlySelf&&this._parent.markAsPending(O(h({},r),{sourceControl:e}))}disable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=wo,this.errors=null,this._forEachChild(n=>{n.disable(O(h({},r),{onlySelf:!0}))}),this._updateValue();let o=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ir(this.value,o)),this._events.next(new Lt(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(O(h({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(r={}){let e=this._parentMarkedDirty(r.onlySelf);this.status=Co,this._forEachChild(o=>{o.enable(O(h({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(O(h({},r),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(r,e){this._parent&&!r.onlySelf&&(this._parent.updateValueAndValidity(r),r.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Co||this.status===Nt)&&this._runAsyncValidator(o,r.emitEvent)}let e=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new Ir(this.value,e)),this._events.next(new Lt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!r.onlySelf&&this._parent.updateValueAndValidity(O(h({},r),{sourceControl:e}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?wo:Co}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,e){if(this.asyncValidator){this.status=Nt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:r!==!1};let o=$c(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:e,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,e={}){this.errors=r,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(r){let e=r;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((o,n)=>o&&o._find(n),this)}getError(r,e){let o=e?this.get(e):this;return o&&o.errors?o.errors[r]:null}hasError(r,e){return!!this.getError(r,e)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,e,o){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||o)&&this._events.next(new Lt(this.status,e)),this._parent&&this._parent._updateControlsErrors(r,e,o)}_initObservables(){this.valueChanges=new re,this.statusChanges=new re}_calculateStatus(){return this._allControlsDisabled()?wo:this.errors?Er:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Nt)?Nt:this._anyControlsHaveStatus(Er)?Er:Co}_anyControlsHaveStatus(r){return this._anyControls(e=>e.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,e){let o=!this._anyControlsDirty(),n=this.pristine!==o;this.pristine=o,this._parent&&!r.onlySelf&&this._parent._updatePristine(r,e),n&&this._events.next(new Do(this.pristine,e))}_updateTouched(r={},e){this.touched=this._anyControlsTouched(),this._events.next(new So(this.touched,e)),this._parent&&!r.onlySelf&&this._parent._updateTouched(r,e)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){Nr(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){let e=this._parent&&this._parent.dirty;return!r&&!!e&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=ZC(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=XC(this._rawAsyncValidators)}},Tr=class extends Fr{constructor(r,e,o){super(ed(e),td(o,e)),this.controls=r,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,e){return this.controls[r]?this.controls[r]:(this.controls[r]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(r,e,o={}){this.registerControl(r,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(r,e={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(r,e,o={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],e&&this.registerControl(r,e),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(r){return this.controls.hasOwnProperty(r)&&this.controls[r].enabled}setValue(r,e={}){JC(this,!0,r),Object.keys(r).forEach(o=>{QC(this,!0,o),this.controls[o].setValue(r[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(r,e={}){r!=null&&(Object.keys(r).forEach(o=>{let n=this.controls[o];n&&n.patchValue(r[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(r={},e={}){this._forEachChild((o,n)=>{o.reset(r?r[n]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(r,e,o)=>(r[o]=e.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(e,o)=>o._syncPendingControls()?!0:e);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(e=>{let o=this.controls[e];o&&r(o,e)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[e,o]of Object.entries(this.controls))if(this.contains(e)&&r(o))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(e,o,n)=>((o.enabled||this.disabled)&&(e[n]=o.value),e))}_reduceChildren(r,e){let o=r;return this._forEachChild((n,i)=>{o=e(o,n,i)}),o}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return this.controls.hasOwnProperty(r)?this.controls[r]:null}};var od=new k("",{providedIn:"root",factory:()=>gi}),gi="always";function ew(t,r){return[...r.path,t]}function Tc(t,r,e=gi){mi(t,r),r.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&r.valueAccessor.setDisabledState?.(t.disabled),ow(t,r),nw(t,r),rw(t,r),tw(t,r)}function Mc(t,r,e=!0){let o=()=>{};r.valueAccessor&&(r.valueAccessor.registerOnChange(o),r.valueAccessor.registerOnTouched(o)),Or(t,r),t&&(r._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Mr(t,r){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(r)})}function tw(t,r){if(r.valueAccessor.setDisabledState){let e=o=>{r.valueAccessor.setDisabledState(o)};t.registerOnDisabledChange(e),r._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function mi(t,r){let e=Zc(t);r.validator!==null?t.setValidators(Rc(e,r.validator)):typeof e=="function"&&t.setValidators([e]);let o=Xc(t);r.asyncValidator!==null?t.setAsyncValidators(Rc(o,r.asyncValidator)):typeof o=="function"&&t.setAsyncValidators([o]);let n=()=>t.updateValueAndValidity();Mr(r._rawValidators,n),Mr(r._rawAsyncValidators,n)}function Or(t,r){let e=!1;if(t!==null){if(r.validator!==null){let n=Zc(t);if(Array.isArray(n)&&n.length>0){let i=n.filter(a=>a!==r.validator);i.length!==n.length&&(e=!0,t.setValidators(i))}}if(r.asyncValidator!==null){let n=Xc(t);if(Array.isArray(n)&&n.length>0){let i=n.filter(a=>a!==r.asyncValidator);i.length!==n.length&&(e=!0,t.setAsyncValidators(i))}}}let o=()=>{};return Mr(r._rawValidators,o),Mr(r._rawAsyncValidators,o),e}function ow(t,r){r.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&rd(t,r)})}function rw(t,r){r.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&rd(t,r),t.updateOn!=="submit"&&t.markAsTouched()})}function rd(t,r){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function nw(t,r){let e=(o,n)=>{r.valueAccessor.writeValue(o),n&&r.viewToModelUpdate(o)};t.registerOnChange(e),r._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function iw(t,r){t==null,mi(t,r)}function aw(t,r){return Or(t,r)}function sw(t,r){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(r,e.currentValue)}function lw(t){return Object.getPrototypeOf(t.constructor)===BC}function cw(t,r){t._syncPendingControls(),r.forEach(e=>{let o=e.control;o.updateOn==="submit"&&o._pendingChange&&(e.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}function dw(t,r){if(!r)return null;Array.isArray(r);let e,o,n;return r.forEach(i=>{i.constructor===Br?e=i:lw(i)?o=i:n=i}),n||o||e||null}function uw(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}function Oc(t,r){let e=t.indexOf(r);e>-1&&t.splice(e,1)}function Bc(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Lr=class extends Fr{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,e,o){super(ed(e),td(o,e)),this._applyFormState(r),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Nr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Bc(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,e={}){this.value=this._pendingValue=r,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(r,e={}){this.setValue(r,e)}reset(r=this.defaultValue,e={}){this._applyFormState(r),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){Oc(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){Oc(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){Bc(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var pw=t=>t instanceof Lr;var nd=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=M({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var id=new k("");var fw={provide:Pt,useExisting:zo(()=>bi)},bi=(()=>{class t extends Pt{callSetDisabledState;get submitted(){return K(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=gt(()=>this._submittedReactive());_submittedReactive=H(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new re;constructor(e,o,n){super(),this.callSetDisabledState=n,this._setValidators(e),this._setAsyncValidators(o)}ngOnChanges(e){e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Or(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let o=this.form.get(e.path);return Tc(o,e,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),o}getControl(e){return this.form.get(e.path)}removeControl(e){Mc(e.control||null,e,!1),uw(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,o){this.form.get(e.path).setValue(o)}onSubmit(e){return this._submittedReactive.set(!0),cw(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ui(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0,o={}){this.form.reset(e,o),this._submittedReactive.set(!1),o?.emitEvent!==!1&&this.form._events.next(new pi(this.form))}_updateDomValue(){this.directives.forEach(e=>{let o=e.control,n=this.form.get(e.path);o!==n&&(Mc(o||null,e),pw(n)&&(Tc(n,e,this.callSetDisabledState),e.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let o=this.form.get(e.path);iw(o,e),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let o=this.form.get(e.path);o&&aw(o,e)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){mi(this.form,this),this._oldForm&&Or(this._oldForm,this)}static \u0275fac=function(o){return new(o||t)(T(Pc,10),T(Vc,10),T(od,8))};static \u0275dir=M({type:t,selectors:[["","formGroup",""]],hostBindings:function(o,n){o&1&&rt("submit",function(a){return n.onSubmit(a)})("reset",function(){return n.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Y([fw]),B,Me]})}return t})();var hw={provide:_o,useExisting:zo(()=>vi)},vi=(()=>{class t extends _o{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new re;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,o,n,i,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(o),this._setAsyncValidators(n),this.valueAccessor=dw(this,i)}ngOnChanges(e){this._added||this._setUpControl(),sw(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ew(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(o){return new(o||t)(T(Pt,13),T(Pc,10),T(Vc,10),T(Lc,10),T(id,8))};static \u0275dir=M({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[Y([hw]),B,Me]})}return t})();var gw=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({})}return t})();var ad=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:id,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:od,useValue:e.callSetDisabledState??gi}]}}static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[gw]})}return t})();var sd=(()=>{class t extends Z{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pe=(()=>{class t{document=p(F);platformId=p(ke);el=p(Ne);injector=p(We);cd=p(mt);renderer=p(et);config=p(li);baseComponentStyle=p(sd);baseStyle=p(Z);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=vo("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,o="",n={}){return wr(e,o,n)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!pa(this.platformId)){let{dt:o}=e;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>be.off("theme:change",e))}_loadStyles(){let e=()=>{Bt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Bt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Bt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Bt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!I.isStyleNameLoaded("common")){let{primitive:e,semantic:o,global:n,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,h({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,h({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,h({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(h({name:"global-style"},this.styleOptions),i),I.setLoadedStyleName("common")}if(!I.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,h({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(h({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),I.setLoadedStyleName(this.componentStyle?.name)}if(!I.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,h({name:"layer-order",first:!0},this.styleOptions)),I.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:o}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(o,h({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Bt.clearLoadedStyleNames(),be.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,o={}){return Ft(this._getOptionValue(this.$style?.classes,e,h({instance:this},o)))}sx(e="",o=!0,n={}){if(o)return this._getOptionValue(this.$style?.inlineStyles,e,h({instance:this},n))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Ft;static \u0275fac=function(o){return new(o||t)};static \u0275dir=M({type:t,inputs:{dt:"dt"},features:[Y([sd,Z]),Me]})}return t})();var ld=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,o){e&&o&&(e.classList?e.classList.add(o):e.className+=" "+o)}static addMultipleClasses(e,o){if(e&&o)if(e.classList){let n=o.trim().split(" ");for(let i=0;i<n.length;i++)e.classList.add(n[i])}else{let n=o.split(" ");for(let i=0;i<n.length;i++)e.className+=" "+n[i]}}static removeClass(e,o){e&&o&&(e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,o){e&&o&&[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(e,i)))}static hasClass(e,o){return e&&o?e.classList?e.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(o){return o!==e})}static find(e,o){return Array.from(e.querySelectorAll(o))}static findSingle(e,o){return this.isElement(e)?e.querySelector(o):null}static index(e){let o=e.parentNode.childNodes,n=0;for(var i=0;i<o.length;i++){if(o[i]==e)return n;o[i].nodeType==1&&n++}return-1}static indexWithinGroup(e,o){let n=e.parentNode?e.parentNode.childNodes:[],i=0;for(var a=0;a<n.length;a++){if(n[a]==e)return i;n[a].attributes&&n[a].attributes[o]&&n[a].nodeType==1&&i++}return-1}static appendOverlay(e,o,n="self"){n!=="self"&&e&&o&&this.appendChild(e,o)}static alignOverlay(e,o,n="self",i=!0){e&&o&&(i&&(e.style.minWidth=`${t.getOuterWidth(o)}px`),n==="self"?this.relativePosition(e,o):this.absolutePosition(e,o))}static relativePosition(e,o,n=!0){let i=$=>{if($)return getComputedStyle($).getPropertyValue("position")==="relative"?$:i($.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.offsetHeight,l=o.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),u=this.getViewport(),g=i(e)?.getBoundingClientRect()||{top:-1*c,left:-1*d},b,C,_="top";l.top+s+a.height>u.height?(b=l.top-g.top-a.height,_="bottom",l.top+b<0&&(b=-1*l.top)):(b=s+l.top-g.top,_="top");let P=l.left+a.width-u.width,X=l.left-g.left;if(a.width>u.width?C=(l.left-g.left)*-1:P>0?C=X-P:C=l.left-g.left,e.style.top=b+"px",e.style.left=C+"px",e.style.transformOrigin=_,n){let $=Jl(/-anchor-gutter$/)?.value;e.style.marginTop=_==="bottom"?`calc(${$??"2px"} * -1)`:$??""}}static absolutePosition(e,o,n=!0){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=i.height,s=i.width,l=o.offsetHeight,c=o.offsetWidth,d=o.getBoundingClientRect(),u=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),g=this.getViewport(),b,C;d.top+l+a>g.height?(b=d.top+u-a,e.style.transformOrigin="bottom",b<0&&(b=u)):(b=l+d.top+u,e.style.transformOrigin="top"),d.left+s>g.width?C=Math.max(0,d.left+f+c-s):C=d.left+f,e.style.top=b+"px",e.style.left=C+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,o=[]){return e.parentNode===null?o:this.getParents(e.parentNode,o.concat([e.parentNode]))}static getScrollableParents(e){let o=[];if(e){let n=this.getParents(e),i=/(auto|scroll)/,a=s=>{let l=window.getComputedStyle(s,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let s of n){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let u=this.findSingle(s,d);u&&a(u)&&o.push(u)}}s.nodeType!==9&&a(s)&&o.push(s)}}return o}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let o=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",o}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let o=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",o}static getHiddenElementDimensions(e){let o={};return e.style.visibility="hidden",e.style.display="block",o.width=e.offsetWidth,o.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",o}static scrollInView(e,o){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,l=e.getBoundingClientRect(),d=o.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-s,u=e.scrollTop,f=e.clientHeight,g=this.getOuterHeight(o);d<0?e.scrollTop=u+d:d+g>f&&(e.scrollTop=u+d-f+g)}static fadeIn(e,o){e.style.opacity=0;let n=+new Date,i=0,a=function(){i=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/o,e.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(e,o){var n=1,i=50,a=o,s=i/a;let l=setInterval(()=>{n=n-s,n<=0&&(n=0,clearInterval(l)),e.style.opacity=n},i)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,o){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return i.call(e,o)}static getOuterWidth(e,o){let n=e.offsetWidth;if(o){let i=getComputedStyle(e);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(e){let o=getComputedStyle(e);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(e){let o=getComputedStyle(e);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(e){let o=e.offsetWidth,n=getComputedStyle(e);return o+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static width(e){let o=e.offsetWidth,n=getComputedStyle(e);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static getInnerHeight(e){let o=e.offsetHeight,n=getComputedStyle(e);return o+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),o}static getOuterHeight(e,o){let n=e.offsetHeight;if(o){let i=getComputedStyle(e);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(e){let o=e.offsetHeight,n=getComputedStyle(e);return o-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o}static getWidth(e){let o=e.offsetWidth,n=getComputedStyle(e);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),o}static getViewport(){let e=window,o=document,n=o.documentElement,i=o.getElementsByTagName("body")[0],a=e.innerWidth||n.clientWidth||i.clientWidth,s=e.innerHeight||n.clientHeight||i.clientHeight;return{width:a,height:s}}static getOffset(e){var o=e.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,o){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(o,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,o=e.indexOf("MSIE ");if(o>0)return!0;var n=e.indexOf("Trident/");if(n>0){var i=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,o){if(this.isElement(o))o.appendChild(e);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(e);else throw"Cannot append "+o+" to "+e}static removeChild(e,o){if(this.isElement(o))o.removeChild(e);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+o}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let o=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let n=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let o=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(e,o,n){e[o].apply(e,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,o){e&&document.activeElement!==e&&e.focus(o)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,o=""){let n=this.find(e,this.getFocusableSelectorString(o)),i=[];for(let a of n){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&i.push(a)}return i}static getFocusableElement(e,o=""){let n=this.findSingle(e,this.getFocusableSelectorString(o));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,o=""){let n=this.getFocusableElements(e,o);return n.length>0?n[0]:null}static getLastFocusableElement(e,o){let n=this.getFocusableElements(e,o);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,o=!1){let n=t.getFocusableElements(e),i=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);o?a==-1||a===0?i=n.length-1:i=a-1:a!=-1&&a!==n.length-1&&(i=a+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,o){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,o){if(e){let n=e.getAttribute(o);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,o={},...n){if(e){let i=document.createElement(e);return this.setAttributes(i,o),i.append(...n),i}}static setAttribute(e,o="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(o,n)}static setAttributes(e,o={}){if(this.isElement(e)){let n=(i,a)=>{let s=e?.$attrs?.[i]?[e?.$attrs?.[i]]:[];return[a].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let u=Array.isArray(c)?n(i,c):Object.entries(c).map(([f,g])=>i==="style"&&(g||g===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?f:void 0);l=u.length?l.concat(u.filter(f=>!!f)):l}}return l},s)};Object.entries(o).forEach(([i,a])=>{if(a!=null){let s=i.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),a):i==="pBind"?this.setAttributes(e,a):(a=i==="class"?[...new Set(n("class",a))].join(" ").trim():i==="style"?n("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=a),e.setAttribute(i,a))}})}}static isFocusableElement(e,o=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return t})();var cd=(()=>{class t extends pe{autofocus=!1;focused=!1;platformId=p(ke);document=p(F);host=p(Ne);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Xo(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=ld.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275dir=M({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[B]})}return t})();var dd=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var bw=`
    ${dd}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,vw={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":N(t.value())&&String(t.value()).length===1,"p-badge-dot":ct(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},ud=(()=>{class t extends Z{name="badge";theme=bw;classes=vw;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var yi=(()=>{class t extends pe{styleClass=Ae();badgeSize=Ae();size=Ae();severity=Ae();value=Ae();badgeDisabled=Ae(!1,{transform:J});_componentStyle=p(ud);static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=V({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(o,n){o&2&&(U(n.cn(n.cx("root"),n.styleClass())),Xi("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Y([ud]),B],decls:1,vars:1,template:function(o,n){o&1&&Ce(0),o&2&&nt(n.value())},dependencies:[ne,Se],encapsulation:2,changeDetection:0})}return t})(),pd=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[yi,Se,Se]})}return t})();var fd=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var Cw=["*"],ww={root:"p-fluid"},hd=(()=>{class t extends Z{name="fluid";classes=ww;theme=fd;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var gd=(()=>{class t extends pe{_componentStyle=p(hd);static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=V({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(o,n){o&2&&U(n.cx("root"))},features:[Y([hd]),B],ngContentSelectors:Cw,decls:1,vars:0,template:function(o,n){o&1&&(xe(),ge(0))},dependencies:[ne],encapsulation:2,changeDetection:0})}return t})();var Dw=["*"],Sw=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,md=(()=>{class t extends Z{name="baseicon";css=Sw;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bd=(()=>{class t extends pe{spin=!1;_componentStyle=p(md);getClassNames(){return Ft("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(o,n){o&2&&U(n.getClassNames())},inputs:{spin:[2,"spin","spin",J]},features:[Y([md]),B],ngContentSelectors:Dw,decls:1,vars:0,template:function(o,n){o&1&&(xe(),ge(0))},encapsulation:2,changeDetection:0})}return t})();var _w=["data-p-icon","spinner"],vd=(()=>{class t extends bd{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+vo()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=V({type:t,selectors:[["","data-p-icon","spinner"]],features:[B],attrs:_w,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(Ho(),tn(0,"g"),rn(1,"path",0),on(),tn(2,"defs")(3,"clipPath",1),rn(4,"rect",2),on()()),o&2&&(Ee("clip-path",n.pathId),w(3),Zi("id",n.pathId))},encapsulation:2})}return t})();var yd=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var kw=`
    ${yd}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Ew={root:"p-ink"},Cd=(()=>{class t extends Z{name="ripple";theme=kw;classes=Ew;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var wd=(()=>{class t extends pe{zone=p(Le);_componentStyle=p(Cd);animationListener;mouseDownListener;timeout;constructor(){super(),qt(()=>{Xo(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(Tt(o,"p-ink-active"),!ri(o)&&!ni(o)){let s=Math.max(ec(this.el.nativeElement),rc(this.el.nativeElement));o.style.height=s+"px",o.style.width=s+"px"}let n=oc(this.el.nativeElement),i=e.pageX-n.left+this.document.body.scrollTop-ni(o)/2,a=e.pageY-n.top+this.document.body.scrollLeft-ri(o)/2;this.renderer.setStyle(o,"top",a+"px"),this.renderer.setStyle(o,"left",i+"px"),ti(o,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&Tt(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let o=0;o<e.length;o++)if(typeof e[o].className=="string"&&e[o].className.indexOf("p-ink")!==-1)return e[o];return null}resetInk(){let e=this.getInk();e&&Tt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Tt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,nc(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||t)};static \u0275dir=M({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[Y([Cd]),B]})}return t})();var Dd=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var xw=["content"],Aw=["loadingicon"],Rw=["icon"],Iw=["*"],_d=t=>({class:t});function Fw(t,r){t&1&&Ge(0)}function Tw(t,r){if(t&1&&he(0,"span"),t&2){let e=q(3);U(e.cx("loadingIcon")),Ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function Mw(t,r){if(t&1&&(Ho(),he(0,"svg",7)),t&2){let e=q(3);U(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),D("spin",!0),Ee("aria-hidden",!0)("data-pc-section","loadingicon")}}function Ow(t,r){if(t&1&&(tt(0),j(1,Tw,1,4,"span",3)(2,Mw,1,5,"svg",6),ot()),t&2){let e=q(2);w(),D("ngIf",e.loadingIcon),w(),D("ngIf",!e.loadingIcon)}}function Bw(t,r){}function Nw(t,r){if(t&1&&j(0,Bw,0,0,"ng-template",8),t&2){let e=q(2);D("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Lw(t,r){if(t&1&&(tt(0),j(1,Ow,3,2,"ng-container",2)(2,Nw,1,1,null,5),ot()),t&2){let e=q();w(),D("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),w(),D("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",nn(3,_d,e.cx("loadingIcon")))}}function Pw(t,r){if(t&1&&he(0,"span"),t&2){let e=q(2);U(e.cx("icon")),Ee("data-pc-section","icon")}}function Vw(t,r){}function Uw(t,r){if(t&1&&j(0,Vw,0,0,"ng-template",8),t&2){let e=q(2);D("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function jw(t,r){if(t&1&&(tt(0),j(1,Pw,1,3,"span",3)(2,Uw,1,1,null,5),ot()),t&2){let e=q();w(),D("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),w(),D("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",nn(3,_d,e.cx("icon")))}}function $w(t,r){if(t&1&&(oe(0,"span"),Ce(1),G()),t&2){let e=q();U(e.cx("label")),Ee("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),w(),nt(e.label)}}function zw(t,r){if(t&1&&he(0,"p-badge",9),t&2){let e=q();D("value",e.badge)("severity",e.badgeSeverity)}}var Hw={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,r])=>!!r).reduce((r,[e])=>r+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Sd=(()=>{class t extends Z{name="button";theme=Dd;classes=Hw;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Ci=(()=>{class t extends pe{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=Ae(void 0,{transform:J});onClick=new re;onFocus=new re;onBlur=new re;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(gd,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=p(Sd);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[o])=>e+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=V({type:t,selectors:[["p-button"]],contentQueries:function(o,n,i){if(o&1&&(se(i,xw,5),se(i,Aw,5),se(i,Rw,5),se(i,_r,4)),o&2){let a;le(a=ce())&&(n.contentTemplate=a.first),le(a=ce())&&(n.loadingIconTemplate=a.first),le(a=ce())&&(n.iconTemplate=a.first),le(a=ce())&&(n.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",J],loading:[2,"loading","loading",J],loadingIcon:"loadingIcon",raised:[2,"raised","raised",J],rounded:[2,"rounded","rounded",J],text:[2,"text","text",J],plain:[2,"plain","plain",J],severity:"severity",outlined:[2,"outlined","outlined",J],link:[2,"link","link",J],tabindex:[2,"tabindex","tabindex",ra],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",J],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Y([Sd]),B],ngContentSelectors:Iw,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(o,n){o&1&&(xe(),oe(0,"button",0),rt("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),ge(1),j(2,Fw,1,0,"ng-container",1)(3,Lw,3,5,"ng-container",2)(4,jw,3,5,"ng-container",2)(5,$w,2,5,"span",3)(6,zw,1,2,"p-badge",4),G()),o&2&&(U(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),D("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus)),Ee("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex)),w(2),D("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),w(),D("ngIf",n.loading),w(),D("ngIf",!n.loading),w(),D("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),w(),D("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[ne,it,Kt,ln,wd,cd,vd,pd,yi,Se],encapsulation:2,changeDetection:0})}return t})(),kd=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[ne,Ci,Se,Se]})}return t})();var Ed=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Gw=["header"],qw=["title"],Yw=["subtitle"],Kw=["content"],Zw=["footer"],Xw=["*",[["p-header"]],[["p-footer"]]],Qw=["*","p-header","p-footer"];function Jw(t,r){t&1&&Ge(0)}function eD(t,r){if(t&1&&(oe(0,"div"),ge(1,1),j(2,Jw,1,0,"ng-container",1),G()),t&2){let e=q();U(e.cx("header")),w(2),D("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function tD(t,r){if(t&1&&(tt(0),Ce(1),ot()),t&2){let e=q(2);w(),nt(e.header)}}function oD(t,r){t&1&&Ge(0)}function rD(t,r){if(t&1&&(oe(0,"div"),j(1,tD,2,1,"ng-container",2)(2,oD,1,0,"ng-container",1),G()),t&2){let e=q();U(e.cx("title")),w(),D("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),w(),D("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function nD(t,r){if(t&1&&(tt(0),Ce(1),ot()),t&2){let e=q(2);w(),nt(e.subheader)}}function iD(t,r){t&1&&Ge(0)}function aD(t,r){if(t&1&&(oe(0,"div"),j(1,nD,2,1,"ng-container",2)(2,iD,1,0,"ng-container",1),G()),t&2){let e=q();U(e.cx("subtitle")),w(),D("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),w(),D("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function sD(t,r){t&1&&Ge(0)}function lD(t,r){t&1&&Ge(0)}function cD(t,r){if(t&1&&(oe(0,"div"),ge(1,2),j(2,lD,1,0,"ng-container",1),G()),t&2){let e=q();U(e.cx("footer")),w(2),D("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var dD=`
    ${Ed}

    .p-card {
        display: block;
    }
`,uD={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},xd=(()=>{class t extends Z{name="card";theme=dD;classes=uD;static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var wi=(()=>{class t extends pe{header;subheader;set style(e){dc(this._style(),e)||this._style.set(e)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=H(null);_componentStyle=p(xd);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=E(t)))(n||t)}})();static \u0275cmp=V({type:t,selectors:[["p-card"]],contentQueries:function(o,n,i){if(o&1&&(se(i,fc,5),se(i,hc,5),se(i,Gw,4),se(i,qw,4),se(i,Yw,4),se(i,Kw,4),se(i,Zw,4),se(i,_r,4)),o&2){let a;le(a=ce())&&(n.headerFacet=a.first),le(a=ce())&&(n.footerFacet=a.first),le(a=ce())&&(n.headerTemplate=a.first),le(a=ce())&&(n.titleTemplate=a.first),le(a=ce())&&(n.subtitleTemplate=a.first),le(a=ce())&&(n.contentTemplate=a.first),le(a=ce())&&(n.footerTemplate=a.first),le(a=ce())&&(n.templates=a)}},hostVars:5,hostBindings:function(o,n){o&2&&(Ee("data-pc-name","card"),Qi(n._style()),U(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[Y([xd]),B],ngContentSelectors:Qw,decls:8,vars:9,consts:[[3,"class",4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(o,n){o&1&&(xe(Xw),j(0,eD,3,3,"div",0),oe(1,"div"),j(2,rD,3,4,"div",0)(3,aD,3,4,"div",0),oe(4,"div"),ge(5),j(6,sD,1,0,"ng-container",1),G(),j(7,cD,3,3,"div",0),G()),o&2&&(D("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),w(),U(n.cx("body")),w(),D("ngIf",n.header||n.titleTemplate||n._titleTemplate),w(),D("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),w(),U(n.cx("content")),w(2),D("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),w(),D("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[ne,it,Kt,Se],encapsulation:2,changeDetection:0})}return t})(),Ad=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[wi,Se,Se]})}return t})();function hD(t,r){t&1&&(oe(0,"small",11),Ce(1," Ingresa un email v\xE1lido "),G())}function gD(t,r){t&1&&(oe(0,"small",11),Ce(1," M\xEDnimo 6 caracteres "),G())}var Pr=class t{loginForm;constructor(){this.loginForm=new Tr({email:new Lr("",[ut.required,ut.email]),password:new Lr("",[ut.required,ut.minLength(6)])})}ngOnInit(){}guardar(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-login"]],decls:15,vars:4,consts:[[1,"p-d-flex","p-jc-center","p-ai-center",2,"min-height","100vh"],[1,"p-col-12","p-md-6","p-lg-4"],["header","Login",1,"p-p-5"],[1,"p-fluid",3,"ngSubmit","formGroup"],[1,"p-field"],["for","email"],["pInputText","","id","email","type","email","formControlName","email","placeholder","tu@email.com"],["class","p-error",4,"ngIf"],["for","password"],["pPassword","","id","password","formControlName","password","placeholder","******","feedback","false"],["label","Login","type","submit",1,"w-full",3,"disabled"],[1,"p-error"]],template:function(e,o){if(e&1&&(oe(0,"div",0)(1,"div",1)(2,"p-card",2)(3,"form",3),rt("ngSubmit",function(){return o.guardar()}),oe(4,"div",4)(5,"label",5),Ce(6,"Email"),G(),he(7,"input",6),j(8,hD,2,0,"small",7),G(),oe(9,"div",4)(10,"label",8),Ce(11,"Contrase\xF1a"),G(),he(12,"input",9),j(13,gD,2,0,"small",7),G(),he(14,"p-button",10),G()()()()),e&2){let n,i;w(3),D("formGroup",o.loginForm),w(5),D("ngIf",((n=o.loginForm.get("email"))==null?null:n.touched)&&((n=o.loginForm.get("email"))==null?null:n.invalid)),w(5),D("ngIf",((i=o.loginForm.get("password"))==null?null:i.touched)&&((i=o.loginForm.get("password"))==null?null:i.invalid)),w(),D("disabled",o.loginForm.invalid)}},dependencies:[ad,nd,Br,Qc,Jc,bi,vi,ne,it,Ad,wi,kd,Ci],encapsulation:2})};var Vr=class t{title="we-forms-mag";openedSection=1;login(){alert("Login ejecutado")}register(){alert("Registro ejecutado")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=V({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,o){e&1&&he(0,"app-login")},dependencies:[Pr],encapsulation:2})};yn(Vr,Ac).catch(t=>console.error(t));
