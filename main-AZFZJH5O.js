import{$ as bo,$a as Po,A as S,Aa as dt,B as Gt,Ba as yt,C as M,Ca as Be,D as w,Da as wo,E as Kt,Ea as xo,F as so,Fa as Ve,G as St,Ga as Ue,H as Oi,Ha as Li,I as Ri,Ia as Eo,J as Fe,Ja as ae,K as Mi,Ka as ko,L,La as Io,M as Ot,Ma as Co,N as co,Na as Do,O as qt,Oa as To,P as lo,Pa as Ye,Q as et,Qa as Ao,R as it,Ra as So,S as Jt,Sa as x,T as Le,Ta as Oo,U as Rt,Ua as ji,V as Mt,Va as se,W as uo,Wa as He,X as mo,Xa as Ft,Y as fo,Ya as Ro,Z as ho,Za as Mo,_ as po,_a as ce,a as z,aa as go,b as Wt,ba as _t,c as Qn,ca as vo,d as Re,da as _o,e as $t,ea as Qt,f as X,fa as B,fb as No,g as Me,ga as K,gb as le,h as Pe,ha as Pi,hb as We,i as to,ia as je,j as eo,ja as Ni,k as io,ka as Pt,l as no,la as te,m as Xt,ma as ee,mb as Fo,n as Ai,na as E,nb as $e,o as oo,oa as V,p as Ne,pa as ze,pb as Lo,q as ro,qa as U,r as Si,ra as Y,s as Zt,sa as W,t as ao,ta as Fi,u as Q,ua as Nt,ub as jo,v as lt,va as ie,w as v,wa as yo,x as y,xa as ne,y as F,ya as oe,z as m,za as re}from"./chunk-Y42RUXFR.js";var Ze=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(o=>{let i=o.indexOf(":");if(i>0){let n=o.slice(0,i),r=n.toLowerCase(),a=o.slice(i+1).trim();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(a):this.headers.set(r,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((o,i)=>{this.setHeaderEntries(i,o)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([o,i])=>{this.setHeaderEntries(o,i)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let o=this.headers.get(t.toLowerCase());return o&&o.length>0?o[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,o){return this.clone({name:t,value:o,op:"a"})}set(t,o){return this.clone({name:t,value:o,op:"s"})}delete(t,o){return this.clone({name:t,value:o,op:"d"})}maybeSetNormalizedName(t,o){this.normalizedNames.has(o)||this.normalizedNames.set(o,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(o=>{this.headers.set(o,t.headers.get(o)),this.normalizedNames.set(o,t.normalizedNames.get(o))})}clone(t){let o=new e;return o.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,o.lazyUpdate=(this.lazyUpdate||[]).concat([t]),o}applyUpdate(t){let o=t.name.toLowerCase();switch(t.op){case"a":case"s":let i=t.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(t.name,o);let n=(t.op==="a"?this.headers.get(o):void 0)||[];n.push(...i),this.headers.set(o,n);break;case"d":let r=t.value;if(!r)this.headers.delete(o),this.normalizedNames.delete(o);else{let a=this.headers.get(o);if(!a)return;a=a.filter(s=>r.indexOf(s)===-1),a.length===0?(this.headers.delete(o),this.normalizedNames.delete(o)):this.headers.set(o,a)}break}}setHeaderEntries(t,o){let i=(Array.isArray(o)?o:[o]).map(r=>r.toString()),n=t.toLowerCase();this.headers.set(n,i),this.maybeSetNormalizedName(t,n)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(o=>t(this.normalizedNames.get(o),this.headers.get(o)))}};var $o=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}($o||{}),zi=class{constructor(t,o=Xo.Ok,i="OK"){this.headers=t.headers||new Ze,this.status=t.status!==void 0?t.status:o,this.statusText=t.statusText||i,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}};var Ge=class e extends zi{constructor(t={}){super(t),this.type=$o.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}};var Xo=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(Xo||{});var ns=new F("");var zo="b",Bo="h",Vo="s",Uo="st",Yo="u",Ho="rt",Xe=new F(""),os=["GET","HEAD"];function rs(e,t){let u=S(Xe),{isCacheActive:o}=u,i=Qn(u,["isCacheActive"]),{transferCache:n,method:r}=e;if(!o||r==="POST"&&!i.includePostRequests&&!n||r!=="POST"&&!os.includes(r)||n===!1||i.filter?.(e)===!1)return t(e);let a=S(Le),s=ss(e),c=a.get(s,null),d=i.includeHeaders;if(typeof n=="object"&&n.includeHeaders&&(d=n.includeHeaders),c){let{[zo]:h,[Ho]:b,[Bo]:g,[Vo]:_,[Uo]:R,[Yo]:j}=c,C=h;switch(b){case"arraybuffer":C=new TextEncoder().encode(h).buffer;break;case"blob":C=new Blob([h]);break}let N=new Ze(g);return Me(new Ge({body:C,headers:N,status:_,statusText:R,url:j}))}let l=ce(S(et));return t(e).pipe(ao(h=>{h instanceof Ge&&l&&a.set(s,{[zo]:h.body,[Bo]:as(h.headers,d),[Vo]:h.status,[Uo]:h.statusText,[Yo]:h.url||"",[Ho]:e.responseType})}))}function as(e,t){if(!t)return{};let o={};for(let i of t){let n=e.getAll(i);n!==null&&(o[i]=n)}return o}function Wo(e){return[...e.keys()].sort().map(t=>`${t}=${e.getAll(t)}`).join("&")}function ss(e){let{params:t,method:o,responseType:i,url:n}=e,r=Wo(t),a=e.serializeBody();a instanceof URLSearchParams?a=Wo(a):typeof a!="string"&&(a="");let s=[o,i,n,a,r].join("|"),c=cs(s);return c}function cs(e){let t=0;for(let o of e)t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function Zo(e){return[{provide:Xe,useFactory:()=>(te("NgHttpTransferCache"),z({isCacheActive:!0},e))},{provide:ns,useValue:rs,multi:!0,deps:[Le,Xe]},{provide:Eo,multi:!0,useFactory:()=>{let t=S(ae),o=S(Xe);return()=>{ko(t).then(()=>{o.isCacheActive=!1})}}}]}var Ui=class extends So{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Yi=class e extends Ui{static makeCurrent(){Ao(new e)}onAndCancel(t,o,i){return t.addEventListener(o,i),()=>{t.removeEventListener(o,i)}}dispatchEvent(t,o){t.dispatchEvent(o)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,o){return o=o||this.getDefaultDocument(),o.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,o){return o==="window"?window:o==="document"?t:o==="body"?t.body:null}getBaseHref(t){let o=us();return o==null?null:ms(o)}resetBaseElement(){de=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return ji(document.cookie,t)}},de=null;function us(){return de=de||document.querySelector("base"),de?de.getAttribute("href"):null}function ms(e){return new URL(e,document.baseURI).pathname}var Hi=class{addToWindow(t){lt.getAngularTestability=(i,n=!0)=>{let r=t.findTestabilityInTree(i,n);if(r==null)throw new Q(5103,!1);return r},lt.getAllAngularTestabilities=()=>t.getAllTestabilities(),lt.getAllAngularRootElements=()=>t.getAllRootElements();let o=i=>{let n=lt.getAllAngularTestabilities(),r=n.length,a=function(){r--,r==0&&i()};n.forEach(s=>{s.whenStable(a)})};lt.frameworkStabilizers||(lt.frameworkStabilizers=[]),lt.frameworkStabilizers.push(o)}findTestabilityInTree(t,o,i){if(o==null)return null;let n=t.getTestability(o);return n??(i?Ye().isShadowRoot(o)?this.findTestabilityInTree(t,o.host,!0):this.findTestabilityInTree(t,o.parentElement,!0):null)}},fs=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Wi=new F(""),qo=(()=>{let t=class t{constructor(i,n){this._zone=n,this._eventNameToPlugin=new Map,i.forEach(r=>{r.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,n,r){return this._findPluginFor(n).addEventListener(i,n,r)}getZone(){return this._zone}_findPluginFor(i){let n=this._eventNameToPlugin.get(i);if(n)return n;if(n=this._plugins.find(a=>a.supports(i)),!n)throw new Q(5101,!1);return this._eventNameToPlugin.set(i,n),n}};t.\u0275fac=function(n){return new(n||t)(m(Wi),m(E))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Ke=class{constructor(t){this._doc=t}},Bi="ng-app-id",Jo=(()=>{let t=class t{constructor(i,n,r,a={}){this.doc=i,this.appId=n,this.nonce=r,this.platformId=a,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=ce(a),this.resetHostNodes()}addStyles(i){for(let n of i)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(i){for(let n of i)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(n=>n.remove()),i.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let n of this.getAllStyles())this.addStyleToHost(i,n)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let n of this.hostNodes)this.addStyleToHost(n,i)}onStyleRemoved(i){let n=this.styleRef;n.get(i)?.elements?.forEach(r=>r.remove()),n.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Bi}="${this.appId}"]`);if(i?.length){let n=new Map;return i.forEach(r=>{r.textContent!=null&&n.set(r.textContent,r)}),n}return null}changeUsageCount(i,n){let r=this.styleRef;if(r.has(i)){let a=r.get(i);return a.usage+=n,a.usage}return r.set(i,{usage:n,elements:[]}),n}getStyleElement(i,n){let r=this.styleNodesInDOM,a=r?.get(n);if(a?.parentNode===i)return r.delete(n),a.removeAttribute(Bi),a;{let s=this.doc.createElement("style");return this.nonce&&s.setAttribute("nonce",this.nonce),s.textContent=n,this.platformIsServer&&s.setAttribute(Bi,this.appId),i.appendChild(s),s}}addStyleToHost(i,n){let r=this.getStyleElement(i,n),a=this.styleRef,s=a.get(n)?.elements;s?s.push(r):a.set(n,{elements:[r],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};t.\u0275fac=function(n){return new(n||t)(m(x),m(qt),m(Jt,8),m(et))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Vi={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Zi=/%COMP%/g,Qo="%COMP%",hs=`_nghost-${Qo}`,ps=`_ngcontent-${Qo}`,bs=!0,gs=new F("",{providedIn:"root",factory:()=>bs});function vs(e){return ps.replace(Zi,e)}function _s(e){return hs.replace(Zi,e)}function tr(e,t){return t.map(o=>o.replace(Zi,e))}var Lt=(()=>{let t=class t{constructor(i,n,r,a,s,c,d,l=null){this.eventManager=i,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=a,this.doc=s,this.platformId=c,this.ngZone=d,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=ce(c),this.defaultRenderer=new ue(i,s,d,this.platformIsServer)}createRenderer(i,n){if(!i||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===Gt.ShadowDom&&(n=Wt(z({},n),{encapsulation:Gt.Emulated}));let r=this.getOrCreateRenderer(i,n);return r instanceof qe?r.applyToHost(i):r instanceof me&&r.applyStyles(),r}getOrCreateRenderer(i,n){let r=this.rendererByCompId,a=r.get(n.id);if(!a){let s=this.doc,c=this.ngZone,d=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(n.encapsulation){case Gt.Emulated:a=new qe(d,l,n,this.appId,u,s,c,h);break;case Gt.ShadowDom:return new $i(d,l,i,n,s,c,this.nonce,h);default:a=new me(d,l,n,u,s,c,h);break}r.set(n.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(n){return new(n||t)(m(qo),m(Jo),m(qt),m(gs),m(x),m(et),m(E),m(Jt))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),ue=class{constructor(t,o,i,n){this.eventManager=t,this.doc=o,this.ngZone=i,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,o){return o?this.doc.createElementNS(Vi[o]||o,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,o){(Go(t)?t.content:t).appendChild(o)}insertBefore(t,o,i){t&&(Go(t)?t.content:t).insertBefore(o,i)}removeChild(t,o){t&&t.removeChild(o)}selectRootElement(t,o){let i=typeof t=="string"?this.doc.querySelector(t):t;if(!i)throw new Q(-5104,!1);return o||(i.textContent=""),i}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,o,i,n){if(n){o=n+":"+o;let r=Vi[n];r?t.setAttributeNS(r,o,i):t.setAttribute(o,i)}else t.setAttribute(o,i)}removeAttribute(t,o,i){if(i){let n=Vi[i];n?t.removeAttributeNS(n,o):t.removeAttribute(`${i}:${o}`)}else t.removeAttribute(o)}addClass(t,o){t.classList.add(o)}removeClass(t,o){t.classList.remove(o)}setStyle(t,o,i,n){n&(Qt.DashCase|Qt.Important)?t.style.setProperty(o,i,n&Qt.Important?"important":""):t.style[o]=i}removeStyle(t,o,i){i&Qt.DashCase?t.style.removeProperty(o):t.style[o]=""}setProperty(t,o,i){t!=null&&(t[o]=i)}setValue(t,o){t.nodeValue=o}listen(t,o,i){if(typeof t=="string"&&(t=Ye().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${o}`);return this.eventManager.addEventListener(t,o,this.decoratePreventDefault(i))}decoratePreventDefault(t){return o=>{if(o==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(o)):t(o))===!1&&o.preventDefault()}}};function Go(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var $i=class extends ue{constructor(t,o,i,n,r,a,s,c){super(t,r,a,c),this.sharedStylesHost=o,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=tr(n.id,n.styles);for(let l of d){let u=document.createElement("style");s&&u.setAttribute("nonce",s),u.textContent=l,this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,o){return super.appendChild(this.nodeOrShadowRoot(t),o)}insertBefore(t,o,i){return super.insertBefore(this.nodeOrShadowRoot(t),o,i)}removeChild(t,o){return super.removeChild(this.nodeOrShadowRoot(t),o)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},me=class extends ue{constructor(t,o,i,n,r,a,s,c){super(t,r,a,s),this.sharedStylesHost=o,this.removeStylesOnCompDestroy=n,this.styles=c?tr(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},qe=class extends me{constructor(t,o,i,n,r,a,s,c){let d=n+"-"+i.id;super(t,o,i,r,a,s,c,d),this.contentAttr=vs(d),this.hostAttr=_s(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,o){let i=super.createElement(t,o);return super.setAttribute(i,this.contentAttr,""),i}},ys=(()=>{let t=class t extends Ke{constructor(i){super(i)}supports(i){return!0}addEventListener(i,n,r){return i.addEventListener(n,r,!1),()=>this.removeEventListener(i,n,r)}removeEventListener(i,n,r){return i.removeEventListener(n,r)}};t.\u0275fac=function(n){return new(n||t)(m(x))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Ko=["alt","control","meta","shift"],ws={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xs={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Es=(()=>{let t=class t extends Ke{constructor(i){super(i)}supports(i){return t.parseEventName(i)!=null}addEventListener(i,n,r){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ye().onAndCancel(i,a.domEventName,s))}static parseEventName(i){let n=i.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let a=t._normalizeKey(n.pop()),s="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),s="code."),Ko.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),s+=l+".")}),s+=a,n.length!=0||a.length===0)return null;let d={};return d.domEventName=r,d.fullKey=s,d}static matchEventFullKeyCode(i,n){let r=ws[i.key]||i.key,a="";return n.indexOf("code.")>-1&&(r=i.code,a="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Ko.forEach(s=>{if(s!==r){let c=xs[s];c(i)&&(a+=s+".")}}),a+=r,a===n)}static eventCallback(i,n,r){return a=>{t.matchEventFullKeyCode(a,i)&&r.runGuarded(()=>n(a))}}static _normalizeKey(i){return i==="esc"?"escape":i}};t.\u0275fac=function(n){return new(n||t)(m(x))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function ks(){Yi.makeCurrent()}function Is(){return new Mi}function Cs(){return co(document),document}var Ds=[{provide:et,useValue:Ro},{provide:lo,useValue:ks,multi:!0},{provide:x,useFactory:Cs,deps:[]}],er=Io(Co,"browser",Ds),Ts=new F(""),As=[{provide:Ve,useClass:Hi,deps:[]},{provide:xo,useClass:Ue,deps:[E,Li,Ve]},{provide:Ue,useClass:Ue,deps:[E,Li,Ve]}],Ss=[{provide:so,useValue:"root"},{provide:Mi,useFactory:Is,deps:[]},{provide:Wi,useClass:ys,multi:!0,deps:[x,E,et]},{provide:Wi,useClass:Es,multi:!0,deps:[x]},Lt,Jo,qo,{provide:Pt,useExisting:Lt},{provide:Po,useClass:fs,deps:[]},[]],Je=(()=>{let t=class t{constructor(i){}static withServerTransition(i){return{ngModule:t,providers:[{provide:qt,useValue:i.appId}]}}};t.\u0275fac=function(n){return new(n||t)(m(Ts,12))},t.\u0275mod=w({type:t}),t.\u0275inj=y({providers:[...Ss,...As],imports:[Ft,Do]});let e=t;return e})();var Gi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=v({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=m(Os),r},providedIn:"root"});let e=t;return e})(),Os=(()=>{let t=class t extends Gi{constructor(i){super(),this._doc=i}sanitize(i,n){if(n==null)return null;switch(i){case _t.NONE:return n;case _t.HTML:return Mt(n,"HTML")?Rt(n):go(this._doc,String(n)).toString();case _t.STYLE:return Mt(n,"Style")?Rt(n):n;case _t.SCRIPT:if(Mt(n,"Script"))return Rt(n);throw new Q(5200,!1);case _t.URL:return Mt(n,"URL")?Rt(n):bo(String(n));case _t.RESOURCE_URL:if(Mt(n,"ResourceURL"))return Rt(n);throw new Q(5201,!1);default:throw new Q(5202,!1)}}bypassSecurityTrustHtml(i){return uo(i)}bypassSecurityTrustStyle(i){return mo(i)}bypassSecurityTrustScript(i){return fo(i)}bypassSecurityTrustUrl(i){return ho(i)}bypassSecurityTrustResourceUrl(i){return po(i)}};t.\u0275fac=function(n){return new(n||t)(m(x))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Xi=function(e){return e[e.NoHttpTransferCache=0]="NoHttpTransferCache",e[e.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",e}(Xi||{});function ir(...e){let t=[],o=new Set,i=o.has(Xi.HttpTransferCacheOptions);for(let{\u0275providers:n,\u0275kind:r}of e)o.add(r),n.length&&t.push(n);return Kt([[],To(),o.has(Xi.NoHttpTransferCache)||i?[]:Zo({}),t])}var or="Motion Design",rr="3D Character Animation",ar="Video Projects",Qe="https://player.vimeo.com/video/950849766?h=0fad089f95";var fe="assets/logo.png",Ki="Naama Ofir";var sr=(()=>{let t=class t{constructor(){this.path=fe,this.name=""}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=M({type:t,selectors:[["app-video-preview"]],inputs:{path:"path",name:"name"},decls:3,vars:2,consts:[[3,"src"]],template:function(n,r){n&1&&(W(0,"img",0),U(1,"h4"),dt(2),Y()),n&2&&(yo("src",r.path,vo),B(2),yt(r.name))},styles:['[_nghost-%COMP%]{cursor:pointer}img[_ngcontent-%COMP%]{position:relative;display:block;transition:all .2s ease-in-out}[_nghost-%COMP%]:after{transition:all .2s ease-in-out;opacity:0;content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:#00000080;pointer-events:none}[_nghost-%COMP%]:hover:after{opacity:1}img[_ngcontent-%COMP%]:hover{scale:1.1}[_nghost-%COMP%]:hover   h4[_ngcontent-%COMP%]{opacity:1}@media screen and (min-width: 1024px){[_nghost-%COMP%]{height:200px;aspect-ratio:1;position:relative;overflow:hidden}img[_ngcontent-%COMP%]{width:100%;aspect-ratio:1;object-fit:cover}h4[_ngcontent-%COMP%]{display:block;z-index:100;color:#fff;opacity:0;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:40px;aspect-ratio:1;white-space:nowrap}}@media screen and (max-width: 1024px){[_nghost-%COMP%]{margin:10px;display:block;background-color:var(--secondary);width:80vw}img[_ngcontent-%COMP%]{object-fit:cover;width:80vw;aspect-ratio:16/9}h4[_ngcontent-%COMP%]{margin:4px 8px}}']});let e=t;return e})();var Ms=(e,t)=>({grid:e,center:t}),Ps=e=>({selected:e});function Ns(e,t){if(e&1){let o=Fi();U(0,"app-video-preview",2),Nt("click",function(){let n=Oi(o).$implicit,r=ie();return Ri(r.handleVideoClick(n))}),Y()}if(e&2){let o=t.$implicit;V("ngClass",Be(3,Ps,o.isSelected))("path",o.path)("name",o.name)}}var O=function(e){return e[e.ALL=0]="ALL",e[e.MD=1]="MD",e[e.CA=2]="CA",e[e.VP=3]="VP",e}(O||{}),lr=(()=>{let t=class t{constructor(){this.isGrid=!1,this.videos=[],this.allVideos=[{type:O.MD,path:"assets/thumbnail/capture1.png",name:"Pharmaceutical Company Animation",url:"https://player.vimeo.com/video/950842039?h=5f38d031f2",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture2.png",name:"Frog Animation",url:"https://player.vimeo.com/video/950843409?h=122c556dfd",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture3.png",name:"Working From Home Animation",url:"https://player.vimeo.com/video/950843968?h=ff06ee5cac",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture4.png",name:"Blue",url:"https://player.vimeo.com/video/950846203?h=661abe13f9",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture5.png",name:"Mind-Body Connection Explainer",url:"https://player.vimeo.com/video/950847796?h=a27afd3b38",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture6.png",name:"Moon Cycle Animation",url:"https://player.vimeo.com/video/950846845?h=e16980c954",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture7.png",name:"Windmill Animation",url:"https://player.vimeo.com/video/950848729?h=25e3d48954",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture8.png",name:"Name Animation",url:"https://player.vimeo.com/video/952260773?h=8fa4cdb0d4",isSelected:!1},{type:O.MD,path:"assets/thumbnail/capture9.png",name:"Dialogue Opener",url:"https://player.vimeo.com/video/955779910?h=f02c69c511",isSelected:!1},{type:O.CA,path:"assets/thumbnail/capture10.png",name:"3D Character Animation Reel 2024",url:"https://player.vimeo.com/video/830933663?h=35955ad039",isSelected:!1},{type:O.VP,path:"assets/thumbnail/capture11.png",name:"Hailo-Holiday Short",url:"https://player.vimeo.com/video/950849766?h=0fad089f95",isSelected:!0},{type:O.VP,path:"assets/thumbnail/capture12.png",name:"Hailo-Demo",url:"https://player.vimeo.com/video/905515939?h=f8381f3038",isSelected:!1},{type:O.VP,path:"assets/thumbnail/capture13.png",name:"Hailo-Renesas Demo",url:"https://player.vimeo.com/video/905509689?h=96b7eb38e3",isSelected:!1}],this.handleVideoClick=i=>{this.allVideos.forEach(n=>n.isSelected=!1),i.isSelected=!0,this.onSelectVideo(i.url),this.scrollDown()},this.handleSelectFilter=i=>{i.type===O.MD?this.isGrid=!0:this.isGrid=!1,this.videos=this.allVideos.filter(n=>n.type===i.type)},this.videos=this.allVideos.filter(i=>i.type===O.VP)}scrollDown(){document.getElementById("nextElemId")?.scrollIntoView({behavior:"smooth",block:"start"})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=M({type:t,selectors:[["app-video-gallery"]],inputs:{onSelectVideo:"onSelectVideo"},decls:2,vars:5,consts:[["id","gallery",3,"ngClass"],[3,"ngClass","path","name","click",4,"ngFor","ngForOf"],[3,"click","ngClass","path","name"]],template:function(n,r){n&1&&(U(0,"div",0),ee(1,Ns,1,5,"app-video-preview",1),Y()),n&2&&(V("ngClass",wo(2,Ms,r.isGrid,!r.isGrid)),B(),V("ngForOf",r.videos))},dependencies:[se,He,sr],styles:["@media screen and (min-width: 1024px){[_nghost-%COMP%]{width:100%}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;grid-auto-rows:minmax(100px,auto)}.center[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:100px;align-items:center}#gallery[_ngcontent-%COMP%]{height:50svh;margin:40px}}@media screen and (max-width: 1024px){[_nghost-%COMP%]{width:100%;margin:20px 0;display:flex;flex-direction:column;justify-content:center;align-items:center}}@media screen and (max-width: 1024px) and (orientation: landscape){[_nghost-%COMP%]{display:none}}@media screen and (max-width: 1024px){#gallery[_ngcontent-%COMP%]{display:flex;gap:20px;width:100%;margin:10px;white-space:nowrap;overflow-x:auto;overflow-y:hidden}}"]});let e=t;return e})();var dr=(()=>{let t=class t{constructor(i){this.sanitizer=i,this.safeSrc=this.sanitizer.bypassSecurityTrustResourceUrl(Qe)}ngOnChanges(i){i.unSafeSrc&&(this.safeSrc=this.sanitizer.bypassSecurityTrustResourceUrl(this.unSafeSrc))}};t.\u0275fac=function(n){return new(n||t)(K(Gi))},t.\u0275cmp=M({type:t,selectors:[["app-main-video"]],inputs:{unSafeSrc:"unSafeSrc"},features:[St],decls:1,vars:1,consts:[["width","640","height","360","frameborder","0","allow","autoplay; fullscreen; picture-in-picture","allowfullscreen","",3,"src"]],template:function(n,r){n&1&&W(0,"iframe",0),n&2&&V("src",r.safeSrc,_o)},styles:["[_nghost-%COMP%]{height:90svh;width:100%;margin-bottom:5svh}@media screen and (max-width: 1024px) and (orientation: portrait){[_nghost-%COMP%]{height:33vh}}iframe[_ngcontent-%COMP%]{width:100%;height:100%}"]});let e=t;return e})();var ur=(()=>{let t=class t{handleSelect(){this.onSelect(this.filter)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=M({type:t,selectors:[["app-video-filter"]],hostBindings:function(n,r){n&1&&Nt("click",function(){return r.handleSelect()})},inputs:{isSelected:"isSelected",filter:"filter",onSelect:"onSelect"},decls:2,vars:3,template:function(n,r){n&1&&(U(0,"h4"),dt(1),Y()),n&2&&(ze("color",r.isSelected?"#326A7E":void 0),B(),yt(r.filter.name))},styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:20px;margin:8px;padding:0 10px;cursor:pointer}h4[_ngcontent-%COMP%]{padding:0;margin:0}"]});let e=t;return e})();var zs=e=>({selected:e});function Bs(e,t){if(e&1&&W(0,"app-video-filter",2),e&2){let o=t.$implicit,i=ie();V("ngClass",Be(4,zs,o.isSelected))("filter",o)("onSelect",i.handleFilterSelect)("isSelected",o.isSelected)}}var mr=(()=>{let t=class t{constructor(){this.logoPath=fe,this.title=Ki,this.filters=[{type:O.VP,name:ar,isSelected:!0},{type:O.MD,name:or,isSelected:!1},{type:O.CA,name:rr,isSelected:!1}],this.handleFilterSelect=i=>{this.filters.forEach(n=>{n.isSelected=n.type===i.type}),this.onSelectFilter(i)}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=M({type:t,selectors:[["app-header"]],inputs:{onSelectFilter:"onSelectFilter"},decls:4,vars:2,consts:[["id","filters"],[3,"ngClass","filter","onSelect","isSelected",4,"ngFor","ngForOf"],[3,"ngClass","filter","onSelect","isSelected"]],template:function(n,r){n&1&&(U(0,"h1"),dt(1),Y(),U(2,"div",0),ee(3,Bs,1,6,"app-video-filter",1),Y()),n&2&&(B(),yt(r.title),B(2),V("ngForOf",r.filters))},dependencies:[se,He,ur],styles:["[_nghost-%COMP%]{position:relative;display:block;height:100px;width:100%;background-color:#f1f1f1}h1[_ngcontent-%COMP%]{height:40px;width:100px;position:absolute;left:20px;top:50%;transform:translateY(-50%);font-size:large}app-video-filter.selected[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{color:#00f}#filters[_ngcontent-%COMP%]{position:absolute;right:20px;top:50%;transform:translateY(-50%);display:flex;flex-direction:row;justify-content:space-between;align-items:center}"]});let e=t;return e})();var Us=["gallery"],fr=(()=>{let t=class t{constructor(){this.currentVideoSrc=Qe,this.onChangeFilter=i=>{this.gallery.handleSelectFilter(i)},this.handleSelectVideo=i=>{this.currentVideoSrc=i}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=M({type:t,selectors:[["app-videos"]],viewQuery:function(n,r){if(n&1&&ne(Us,5),n&2){let a;oe(a=re())&&(r.gallery=a.first)}},decls:4,vars:3,consts:[["gallery",""],[3,"onSelectFilter"],[3,"onSelectVideo"],["id","nextElemId",3,"unSafeSrc"]],template:function(n,r){n&1&&W(0,"app-header",1)(1,"app-video-gallery",2,0)(3,"app-main-video",3),n&2&&(V("onSelectFilter",r.onChangeFilter),B(),V("onSelectVideo",r.handleSelectVideo),B(2),V("unSafeSrc",r.currentVideoSrc))},dependencies:[lr,dr,mr],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:center}"]});let e=t;return e})();var hr=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=M({type:t,selectors:[["app-root"]],decls:2,vars:0,consts:[["id","background-img","src","assets/background.jpg"]],template:function(n,r){n&1&&W(0,"img",0)(1,"app-videos")},dependencies:[fr]});let e=t;return e})();function pr(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,i)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?pr(Object(o),!0).forEach(function(i){P(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):pr(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}function ui(e){"@babel/helpers - typeof";return ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ui(e)}function Hs(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function br(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ws(e,t,o){return t&&br(e.prototype,t),o&&br(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function P(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function fn(e,t){return Xs(e)||Gs(e,t)||Vr(e,t)||qs()}function xe(e){return $s(e)||Zs(e)||Vr(e)||Ks()}function $s(e){if(Array.isArray(e))return en(e)}function Xs(e){if(Array.isArray(e))return e}function Zs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gs(e,t){var o=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var i=[],n=!0,r=!1,a,s;try{for(o=o.call(e);!(n=(a=o.next()).done)&&(i.push(a.value),!(t&&i.length===t));n=!0);}catch(c){r=!0,s=c}finally{try{!n&&o.return!=null&&o.return()}finally{if(r)throw s}}return i}}function Vr(e,t){if(e){if(typeof e=="string")return en(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return en(e,t)}}function en(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,i=new Array(t);o<t;o++)i[o]=e[o];return i}function Ks(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qs(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gr=function(){},hn={},Ur={},Yr=null,Hr={mark:gr,measure:gr};try{typeof window<"u"&&(hn=window),typeof document<"u"&&(Ur=document),typeof MutationObserver<"u"&&(Yr=MutationObserver),typeof performance<"u"&&(Hr=performance)}catch{}var Js=hn.navigator||{},vr=Js.userAgent,_r=vr===void 0?"":vr,mt=hn,I=Ur,yr=Yr,ti=Hr,Qd=!!mt.document,at=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",Wr=~_r.indexOf("MSIE")||~_r.indexOf("Trident/"),ei,ii,ni,oi,ri,nt="___FONT_AWESOME___",nn=16,$r="fa",Xr="svg-inline--fa",Et="data-fa-i2svg",on="data-fa-pseudo-element",Qs="data-fa-pseudo-element-pending",pn="data-prefix",bn="data-icon",wr="fontawesome-i2svg",tc="async",ec=["HTML","HEAD","STYLE","SCRIPT"],Zr=function(){try{return!0}catch{return!1}}(),k="classic",T="sharp",gn=[k,T];function Ee(e){return new Proxy(e,{get:function(o,i){return i in o?o[i]:o[k]}})}var ge=Ee((ei={},P(ei,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),P(ei,T,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ei)),ve=Ee((ii={},P(ii,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(ii,T,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ii)),_e=Ee((ni={},P(ni,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(ni,T,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ni)),ic=Ee((oi={},P(oi,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(oi,T,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),oi)),nc=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gr="fa-layers-text",oc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,rc=Ee((ri={},P(ri,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(ri,T,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ri)),Kr=[1,2,3,4,5,6,7,8,9,10],ac=Kr.concat([11,12,13,14,15,16,17,18,19,20]),sc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ye=new Set;Object.keys(ve[k]).map(ye.add.bind(ye));Object.keys(ve[T]).map(ye.add.bind(ye));var cc=[].concat(gn,xe(ye),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Kr.map(function(e){return"".concat(e,"x")})).concat(ac.map(function(e){return"w-".concat(e)})),pe=mt.FontAwesomeConfig||{};function lc(e){var t=I.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function dc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}I&&typeof I.querySelector=="function"&&(xr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],xr.forEach(function(e){var t=fn(e,2),o=t[0],i=t[1],n=dc(lc(o));n!=null&&(pe[i]=n)}));var xr,qr={styleDefault:"solid",familyDefault:"classic",cssPrefix:$r,replacementClass:Xr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pe.familyPrefix&&(pe.cssPrefix=pe.familyPrefix);var Vt=f(f({},qr),pe);Vt.autoReplaceSvg||(Vt.observeMutations=!1);var p={};Object.keys(qr).forEach(function(e){Object.defineProperty(p,e,{enumerable:!0,set:function(o){Vt[e]=o,be.forEach(function(i){return i(p)})},get:function(){return Vt[e]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Vt.cssPrefix=t,be.forEach(function(o){return o(p)})},get:function(){return Vt.cssPrefix}});mt.FontAwesomeConfig=p;var be=[];function uc(e){return be.push(e),function(){be.splice(be.indexOf(e),1)}}var ut=nn,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mc(e){if(!(!e||!at)){var t=I.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var o=I.head.childNodes,i=null,n=o.length-1;n>-1;n--){var r=o[n],a=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=r)}return I.head.insertBefore(t,i),e}}var fc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function we(){for(var e=12,t="";e-- >0;)t+=fc[Math.random()*62|0];return t}function Ut(e){for(var t=[],o=(e||[]).length>>>0;o--;)t[o]=e[o];return t}function vn(e){return e.classList?Ut(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Jr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hc(e){return Object.keys(e||{}).reduce(function(t,o){return t+"".concat(o,'="').concat(Jr(e[o]),'" ')},"").trim()}function hi(e){return Object.keys(e||{}).reduce(function(t,o){return t+"".concat(o,": ").concat(e[o].trim(),";")},"")}function _n(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function pc(e){var t=e.transform,o=e.containerWidth,i=e.iconWidth,n={transform:"translate(".concat(o/2," 256)")},r="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(r," ").concat(a," ").concat(s)},d={transform:"translate(".concat(i/2*-1," -256)")};return{outer:n,inner:c,path:d}}function bc(e){var t=e.transform,o=e.width,i=o===void 0?nn:o,n=e.height,r=n===void 0?nn:n,a=e.startCentered,s=a===void 0?!1:a,c="";return s&&Wr?c+="translate(".concat(t.x/ut-i/2,"em, ").concat(t.y/ut-r/2,"em) "):s?c+="translate(calc(-50% + ".concat(t.x/ut,"em), calc(-50% + ").concat(t.y/ut,"em)) "):c+="translate(".concat(t.x/ut,"em, ").concat(t.y/ut,"em) "),c+="scale(".concat(t.size/ut*(t.flipX?-1:1),", ").concat(t.size/ut*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var gc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qr(){var e=$r,t=Xr,o=p.cssPrefix,i=p.replacementClass,n=gc;if(o!==e||i!==t){var r=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(r,".".concat(o,"-")).replace(a,"--".concat(o,"-")).replace(s,".".concat(i))}return n}var Er=!1;function qi(){p.autoAddCss&&!Er&&(mc(Qr()),Er=!0)}var vc={mixout:function(){return{dom:{css:Qr,insertCss:qi}}},hooks:function(){return{beforeDOMElementCreation:function(){qi()},beforeI2svg:function(){qi()}}}},ot=mt||{};ot[nt]||(ot[nt]={});ot[nt].styles||(ot[nt].styles={});ot[nt].hooks||(ot[nt].hooks={});ot[nt].shims||(ot[nt].shims=[]);var q=ot[nt],ta=[],_c=function e(){I.removeEventListener("DOMContentLoaded",e),mi=1,ta.map(function(t){return t()})},mi=!1;at&&(mi=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),mi||I.addEventListener("DOMContentLoaded",_c));function yc(e){at&&(mi?setTimeout(e,0):ta.push(e))}function ke(e){var t=e.tag,o=e.attributes,i=o===void 0?{}:o,n=e.children,r=n===void 0?[]:n;return typeof e=="string"?Jr(e):"<".concat(t," ").concat(hc(i),">").concat(r.map(ke).join(""),"</").concat(t,">")}function kr(e,t,o){if(e&&e[t]&&e[t][o])return{prefix:t,iconName:o,icon:e[t][o]}}var wc=function(t,o){return function(i,n,r,a){return t.call(o,i,n,r,a)}},Ji=function(t,o,i,n){var r=Object.keys(t),a=r.length,s=n!==void 0?wc(o,n):o,c,d,l;for(i===void 0?(c=1,l=t[r[0]]):(c=0,l=i);c<a;c++)d=r[c],l=s(l,t[d],d,t);return l};function xc(e){for(var t=[],o=0,i=e.length;o<i;){var n=e.charCodeAt(o++);if(n>=55296&&n<=56319&&o<i){var r=e.charCodeAt(o++);(r&64512)==56320?t.push(((n&1023)<<10)+(r&1023)+65536):(t.push(n),o--)}else t.push(n)}return t}function rn(e){var t=xc(e);return t.length===1?t[0].toString(16):null}function Ec(e,t){var o=e.length,i=e.charCodeAt(t),n;return i>=55296&&i<=56319&&o>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?(i-55296)*1024+n-56320+65536:i}function Ir(e){return Object.keys(e).reduce(function(t,o){var i=e[o],n=!!i.icon;return n?t[i.iconName]=i.icon:t[o]=i,t},{})}function an(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=o.skipHooks,n=i===void 0?!1:i,r=Ir(t);typeof q.hooks.addPack=="function"&&!n?q.hooks.addPack(e,Ir(t)):q.styles[e]=f(f({},q.styles[e]||{}),r),e==="fas"&&an("fa",t)}var ai,si,ci,jt=q.styles,kc=q.shims,Ic=(ai={},P(ai,k,Object.values(_e[k])),P(ai,T,Object.values(_e[T])),ai),yn=null,ea={},ia={},na={},oa={},ra={},Cc=(si={},P(si,k,Object.keys(ge[k])),P(si,T,Object.keys(ge[T])),si);function Dc(e){return~cc.indexOf(e)}function Tc(e,t){var o=t.split("-"),i=o[0],n=o.slice(1).join("-");return i===e&&n!==""&&!Dc(n)?n:null}var aa=function(){var t=function(r){return Ji(jt,function(a,s,c){return a[c]=Ji(s,r,{}),a},{})};ea=t(function(n,r,a){if(r[3]&&(n[r[3]]=a),r[2]){var s=r[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){n[c.toString(16)]=a})}return n}),ia=t(function(n,r,a){if(n[a]=a,r[2]){var s=r[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){n[c]=a})}return n}),ra=t(function(n,r,a){var s=r[2];return n[a]=a,s.forEach(function(c){n[c]=a}),n});var o="far"in jt||p.autoFetchSvg,i=Ji(kc,function(n,r){var a=r[0],s=r[1],c=r[2];return s==="far"&&!o&&(s="fas"),typeof a=="string"&&(n.names[a]={prefix:s,iconName:c}),typeof a=="number"&&(n.unicodes[a.toString(16)]={prefix:s,iconName:c}),n},{names:{},unicodes:{}});na=i.names,oa=i.unicodes,yn=pi(p.styleDefault,{family:p.familyDefault})};uc(function(e){yn=pi(e.styleDefault,{family:p.familyDefault})});aa();function wn(e,t){return(ea[e]||{})[t]}function Ac(e,t){return(ia[e]||{})[t]}function xt(e,t){return(ra[e]||{})[t]}function sa(e){return na[e]||{prefix:null,iconName:null}}function Sc(e){var t=oa[e],o=wn("fas",e);return t||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function ft(){return yn}var xn=function(){return{prefix:null,iconName:null,rest:[]}};function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.family,i=o===void 0?k:o,n=ge[i][e],r=ve[i][e]||ve[i][n],a=e in q.styles?e:null;return r||a||null}var Cr=(ci={},P(ci,k,Object.keys(_e[k])),P(ci,T,Object.keys(_e[T])),ci);function bi(e){var t,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=o.skipLookups,n=i===void 0?!1:i,r=(t={},P(t,k,"".concat(p.cssPrefix,"-").concat(k)),P(t,T,"".concat(p.cssPrefix,"-").concat(T)),t),a=null,s=k;(e.includes(r[k])||e.some(function(d){return Cr[k].includes(d)}))&&(s=k),(e.includes(r[T])||e.some(function(d){return Cr[T].includes(d)}))&&(s=T);var c=e.reduce(function(d,l){var u=Tc(p.cssPrefix,l);if(jt[l]?(l=Ic[s].includes(l)?ic[s][l]:l,a=l,d.prefix=l):Cc[s].indexOf(l)>-1?(a=l,d.prefix=pi(l,{family:s})):u?d.iconName=u:l!==p.replacementClass&&l!==r[k]&&l!==r[T]&&d.rest.push(l),!n&&d.prefix&&d.iconName){var h=a==="fa"?sa(d.iconName):{},b=xt(d.prefix,d.iconName);h.prefix&&(a=null),d.iconName=h.iconName||b||d.iconName,d.prefix=h.prefix||d.prefix,d.prefix==="far"&&!jt.far&&jt.fas&&!p.autoFetchSvg&&(d.prefix="fas")}return d},xn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&s===T&&(jt.fass||p.autoFetchSvg)&&(c.prefix="fass",c.iconName=xt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=ft()||"fas"),c}var Oc=function(){function e(){Hs(this,e),this.definitions={}}return Ws(e,[{key:"add",value:function(){for(var o=this,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){o.definitions[s]=f(f({},o.definitions[s]||{}),a[s]),an(s,a[s]);var c=_e[k][s];c&&an(c,a[s]),aa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(o,i){var n=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(n).map(function(r){var a=n[r],s=a.prefix,c=a.iconName,d=a.icon,l=d[2];o[s]||(o[s]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(o[s][u]=d)}),o[s][c]=d}),o}}]),e}(),Dr=[],zt={},Bt={},Rc=Object.keys(Bt);function Mc(e,t){var o=t.mixoutsTo;return Dr=e,zt={},Object.keys(Bt).forEach(function(i){Rc.indexOf(i)===-1&&delete Bt[i]}),Dr.forEach(function(i){var n=i.mixout?i.mixout():{};if(Object.keys(n).forEach(function(a){typeof n[a]=="function"&&(o[a]=n[a]),ui(n[a])==="object"&&Object.keys(n[a]).forEach(function(s){o[a]||(o[a]={}),o[a][s]=n[a][s]})}),i.hooks){var r=i.hooks();Object.keys(r).forEach(function(a){zt[a]||(zt[a]=[]),zt[a].push(r[a])})}i.provides&&i.provides(Bt)}),o}function sn(e,t){for(var o=arguments.length,i=new Array(o>2?o-2:0),n=2;n<o;n++)i[n-2]=arguments[n];var r=zt[e]||[];return r.forEach(function(a){t=a.apply(null,[t].concat(i))}),t}function kt(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];var n=zt[e]||[];n.forEach(function(r){r.apply(null,o)})}function rt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function cn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,o=e.prefix||ft();if(t)return t=xt(o,t)||t,kr(ca.definitions,o,t)||kr(q.styles,o,t)}var ca=new Oc,Pc=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,kt("noAuto")},Nc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return at?(kt("beforeI2svg",t),rt("pseudoElements2svg",t),rt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=t.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,yc(function(){Lc({autoReplaceSvgRoot:o}),kt("watch",t)})}},Fc={icon:function(t){if(t===null)return null;if(ui(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var o=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=pi(t[0]);return{prefix:i,iconName:xt(i,o)||o}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(nc))){var n=bi(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||ft(),iconName:xt(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var r=ft();return{prefix:r,iconName:xt(r,t)||t}}}},$={noAuto:Pc,config:p,dom:Nc,parse:Fc,library:ca,findIconDefinition:cn,toHtml:ke},Lc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=t.autoReplaceSvgRoot,i=o===void 0?I:o;(Object.keys(q.styles).length>0||p.autoFetchSvg)&&at&&p.autoReplaceSvg&&$.dom.i2svg({node:i})};function gi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(i){return ke(i)})}}),Object.defineProperty(e,"node",{get:function(){if(at){var i=I.createElement("div");return i.innerHTML=e.html,i.children}}}),e}function jc(e){var t=e.children,o=e.main,i=e.mask,n=e.attributes,r=e.styles,a=e.transform;if(_n(a)&&o.found&&!i.found){var s=o.width,c=o.height,d={x:s/c/2,y:.5};n.style=hi(f(f({},r),{},{"transform-origin":"".concat(d.x+a.x/16,"em ").concat(d.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function zc(e){var t=e.prefix,o=e.iconName,i=e.children,n=e.attributes,r=e.symbol,a=r===!0?"".concat(t,"-").concat(p.cssPrefix,"-").concat(o):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:a}),children:i}]}]}function En(e){var t=e.icons,o=t.main,i=t.mask,n=e.prefix,r=e.iconName,a=e.transform,s=e.symbol,c=e.title,d=e.maskId,l=e.titleId,u=e.extra,h=e.watchable,b=h===void 0?!1:h,g=i.found?i:o,_=g.width,R=g.height,j=n==="fak",C=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(function(ct){return u.classes.indexOf(ct)===-1}).filter(function(ct){return ct!==""||!!ct}).concat(u.classes).join(" "),N={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":r,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(R)})},J=j&&!~u.classes.indexOf("fa-fw")?{width:"".concat(_/R*16*.0625,"em")}:{};b&&(N.attributes[Et]=""),c&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(l||we())},children:[c]}),delete N.attributes.title);var H=f(f({},N),{},{prefix:n,iconName:r,main:o,mask:i,maskId:d,transform:a,symbol:s,styles:f(f({},J),u.styles)}),gt=i.found&&o.found?rt("generateAbstractMask",H)||{children:[],attributes:{}}:rt("generateAbstractIcon",H)||{children:[],attributes:{}},vt=gt.children,Ti=gt.attributes;return H.children=vt,H.attributes=Ti,s?zc(H):jc(H)}function Tr(e){var t=e.content,o=e.width,i=e.height,n=e.transform,r=e.title,a=e.extra,s=e.watchable,c=s===void 0?!1:s,d=f(f(f({},a.attributes),r?{title:r}:{}),{},{class:a.classes.join(" ")});c&&(d[Et]="");var l=f({},a.styles);_n(n)&&(l.transform=bc({transform:n,startCentered:!0,width:o,height:i}),l["-webkit-transform"]=l.transform);var u=hi(l);u.length>0&&(d.style=u);var h=[];return h.push({tag:"span",attributes:d,children:[t]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function Bc(e){var t=e.content,o=e.title,i=e.extra,n=f(f(f({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")}),r=hi(i.styles);r.length>0&&(n.style=r);var a=[];return a.push({tag:"span",attributes:n,children:[t]}),o&&a.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),a}var Qi=q.styles;function ln(e){var t=e[0],o=e[1],i=e.slice(4),n=fn(i,1),r=n[0],a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:o,icon:a}}var Vc={found:!1,width:512,height:512};function Uc(e,t){!Zr&&!p.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dn(e,t){var o=t;return t==="fa"&&p.styleDefault!==null&&(t=ft()),new Promise(function(i,n){var r={found:!1,width:512,height:512,icon:rt("missingIconAbstract")||{}};if(o==="fa"){var a=sa(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Qi[t]&&Qi[t][e]){var s=Qi[t][e];return i(ln(s))}Uc(e,t),i(f(f({},Vc),{},{icon:p.showMissingIcons&&e?rt("missingIconAbstract")||{}:{}}))})}var Ar=function(){},un=p.measurePerformance&&ti&&ti.mark&&ti.measure?ti:{mark:Ar,measure:Ar},he='FA "6.5.2"',Yc=function(t){return un.mark("".concat(he," ").concat(t," begins")),function(){return la(t)}},la=function(t){un.mark("".concat(he," ").concat(t," ends")),un.measure("".concat(he," ").concat(t),"".concat(he," ").concat(t," begins"),"".concat(he," ").concat(t," ends"))},kn={begin:Yc,end:la},li=function(){};function Sr(e){var t=e.getAttribute?e.getAttribute(Et):null;return typeof t=="string"}function Hc(e){var t=e.getAttribute?e.getAttribute(pn):null,o=e.getAttribute?e.getAttribute(bn):null;return t&&o}function Wc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(p.replacementClass)}function $c(){if(p.autoReplaceSvg===!0)return di.replace;var e=di[p.autoReplaceSvg];return e||di.replace}function Xc(e){return I.createElementNS("http://www.w3.org/2000/svg",e)}function Zc(e){return I.createElement(e)}function da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.ceFn,i=o===void 0?e.tag==="svg"?Xc:Zc:o;if(typeof e=="string")return I.createTextNode(e);var n=i(e.tag);Object.keys(e.attributes||[]).forEach(function(a){n.setAttribute(a,e.attributes[a])});var r=e.children||[];return r.forEach(function(a){n.appendChild(da(a,{ceFn:i}))}),n}function Gc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var di={replace:function(t){var o=t[0];if(o.parentNode)if(t[1].forEach(function(n){o.parentNode.insertBefore(da(n),o)}),o.getAttribute(Et)===null&&p.keepOriginalSource){var i=I.createComment(Gc(o));o.parentNode.replaceChild(i,o)}else o.remove()},nest:function(t){var o=t[0],i=t[1];if(~vn(o).indexOf(p.replacementClass))return di.replace(t);var n=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var r=i[0].attributes.class.split(" ").reduce(function(s,c){return c===p.replacementClass||c.match(n)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});i[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",r.toNode.join(" "))}var a=i.map(function(s){return ke(s)}).join(`
`);o.setAttribute(Et,""),o.innerHTML=a}};function Or(e){e()}function ua(e,t){var o=typeof t=="function"?t:li;if(e.length===0)o();else{var i=Or;p.mutateApproach===tc&&(i=mt.requestAnimationFrame||Or),i(function(){var n=$c(),r=kn.begin("mutate");e.map(n),r(),o()})}}var In=!1;function ma(){In=!0}function mn(){In=!1}var fi=null;function Rr(e){if(yr&&p.observeMutations){var t=e.treeCallback,o=t===void 0?li:t,i=e.nodeCallback,n=i===void 0?li:i,r=e.pseudoElementsCallback,a=r===void 0?li:r,s=e.observeMutationsRoot,c=s===void 0?I:s;fi=new yr(function(d){if(!In){var l=ft();Ut(d).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Sr(u.addedNodes[0])&&(p.searchPseudoElements&&a(u.target),o(u.target)),u.type==="attributes"&&u.target.parentNode&&p.searchPseudoElements&&a(u.target.parentNode),u.type==="attributes"&&Sr(u.target)&&~sc.indexOf(u.attributeName))if(u.attributeName==="class"&&Hc(u.target)){var h=bi(vn(u.target)),b=h.prefix,g=h.iconName;u.target.setAttribute(pn,b||l),g&&u.target.setAttribute(bn,g)}else Wc(u.target)&&n(u.target)})}}),at&&fi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Kc(){fi&&fi.disconnect()}function qc(e){var t=e.getAttribute("style"),o=[];return t&&(o=t.split(";").reduce(function(i,n){var r=n.split(":"),a=r[0],s=r.slice(1);return a&&s.length>0&&(i[a]=s.join(":").trim()),i},{})),o}function Jc(e){var t=e.getAttribute("data-prefix"),o=e.getAttribute("data-icon"),i=e.innerText!==void 0?e.innerText.trim():"",n=bi(vn(e));return n.prefix||(n.prefix=ft()),t&&o&&(n.prefix=t,n.iconName=o),n.iconName&&n.prefix||(n.prefix&&i.length>0&&(n.iconName=Ac(n.prefix,e.innerText)||wn(n.prefix,rn(e.innerText))),!n.iconName&&p.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Qc(e){var t=Ut(e.attributes).reduce(function(n,r){return n.name!=="class"&&n.name!=="style"&&(n[r.name]=r.value),n},{}),o=e.getAttribute("title"),i=e.getAttribute("data-fa-title-id");return p.autoA11y&&(o?t["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(i||we()):(t["aria-hidden"]="true",t.focusable="false")),t}function tl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},o=Jc(e),i=o.iconName,n=o.prefix,r=o.rest,a=Qc(e),s=sn("parseNodeAttributes",{},e),c=t.styleParser?qc(e):[];return f({iconName:i,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:n,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:a}},s)}var el=q.styles;function fa(e){var t=p.autoReplaceSvg==="nest"?Mr(e,{styleParser:!1}):Mr(e);return~t.extra.classes.indexOf(Gr)?rt("generateLayersText",e,t):rt("generateSvgReplacementMutation",e,t)}var ht=new Set;gn.map(function(e){ht.add("fa-".concat(e))});Object.keys(ge[k]).map(ht.add.bind(ht));Object.keys(ge[T]).map(ht.add.bind(ht));ht=xe(ht);function Pr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!at)return Promise.resolve();var o=I.documentElement.classList,i=function(u){return o.add("".concat(wr,"-").concat(u))},n=function(u){return o.remove("".concat(wr,"-").concat(u))},r=p.autoFetchSvg?ht:gn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(el));r.includes("fa")||r.push("fa");var a=[".".concat(Gr,":not([").concat(Et,"])")].concat(r.map(function(l){return".".concat(l,":not([").concat(Et,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Ut(e.querySelectorAll(a))}catch{}if(s.length>0)i("pending"),n("complete");else return Promise.resolve();var c=kn.begin("onTree"),d=s.reduce(function(l,u){try{var h=fa(u);h&&l.push(h)}catch(b){Zr||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,u){Promise.all(d).then(function(h){ua(h,function(){i("active"),i("complete"),n("pending"),typeof t=="function"&&t(),c(),l()})}).catch(function(h){c(),u(h)})})}function il(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fa(e).then(function(o){o&&ua([o],t)})}function nl(e){return function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:cn(t||{}),n=o.mask;return n&&(n=(n||{}).icon?n:cn(n||{})),e(i,f(f({},o),{},{mask:n}))}}var ol=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=o.transform,n=i===void 0?tt:i,r=o.symbol,a=r===void 0?!1:r,s=o.mask,c=s===void 0?null:s,d=o.maskId,l=d===void 0?null:d,u=o.title,h=u===void 0?null:u,b=o.titleId,g=b===void 0?null:b,_=o.classes,R=_===void 0?[]:_,j=o.attributes,C=j===void 0?{}:j,N=o.styles,J=N===void 0?{}:N;if(t){var H=t.prefix,gt=t.iconName,vt=t.icon;return gi(f({type:"icon"},t),function(){return kt("beforeDOMElementCreation",{iconDefinition:t,params:o}),p.autoA11y&&(h?C["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(g||we()):(C["aria-hidden"]="true",C.focusable="false")),En({icons:{main:ln(vt),mask:c?ln(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:gt,transform:f(f({},tt),n),symbol:a,title:h,maskId:l,titleId:g,extra:{attributes:C,styles:J,classes:R}})})}},rl={mixout:function(){return{icon:nl(ol)}},hooks:function(){return{mutationObserverCallbacks:function(o){return o.treeCallback=Pr,o.nodeCallback=il,o}}},provides:function(t){t.i2svg=function(o){var i=o.node,n=i===void 0?I:i,r=o.callback,a=r===void 0?function(){}:r;return Pr(n,a)},t.generateSvgReplacementMutation=function(o,i){var n=i.iconName,r=i.title,a=i.titleId,s=i.prefix,c=i.transform,d=i.symbol,l=i.mask,u=i.maskId,h=i.extra;return new Promise(function(b,g){Promise.all([dn(n,s),l.iconName?dn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var R=fn(_,2),j=R[0],C=R[1];b([o,En({icons:{main:j,mask:C},prefix:s,iconName:n,transform:c,symbol:d,maskId:u,title:r,titleId:a,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(o){var i=o.children,n=o.attributes,r=o.main,a=o.transform,s=o.styles,c=hi(s);c.length>0&&(n.style=c);var d;return _n(a)&&(d=rt("generateAbstractTransformGrouping",{main:r,transform:a,containerWidth:r.width,iconWidth:r.width})),i.push(d||r.icon),{children:i,attributes:n}}}},al={mixout:function(){return{layer:function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.classes,r=n===void 0?[]:n;return gi({type:"layer"},function(){kt("beforeDOMElementCreation",{assembler:o,params:i});var a=[];return o(function(s){Array.isArray(s)?s.map(function(c){a=a.concat(c.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(xe(r)).join(" ")},children:a}]})}}}},sl={mixout:function(){return{counter:function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.title,r=n===void 0?null:n,a=i.classes,s=a===void 0?[]:a,c=i.attributes,d=c===void 0?{}:c,l=i.styles,u=l===void 0?{}:l;return gi({type:"counter",content:o},function(){return kt("beforeDOMElementCreation",{content:o,params:i}),Bc({content:o.toString(),title:r,extra:{attributes:d,styles:u,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(xe(s))}})})}}}},cl={mixout:function(){return{text:function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=i.transform,r=n===void 0?tt:n,a=i.title,s=a===void 0?null:a,c=i.classes,d=c===void 0?[]:c,l=i.attributes,u=l===void 0?{}:l,h=i.styles,b=h===void 0?{}:h;return gi({type:"text",content:o},function(){return kt("beforeDOMElementCreation",{content:o,params:i}),Tr({content:o,transform:f(f({},tt),r),title:s,extra:{attributes:u,styles:b,classes:["".concat(p.cssPrefix,"-layers-text")].concat(xe(d))}})})}}},provides:function(t){t.generateLayersText=function(o,i){var n=i.title,r=i.transform,a=i.extra,s=null,c=null;if(Wr){var d=parseInt(getComputedStyle(o).fontSize,10),l=o.getBoundingClientRect();s=l.width/d,c=l.height/d}return p.autoA11y&&!n&&(a.attributes["aria-hidden"]="true"),Promise.resolve([o,Tr({content:o.innerHTML,width:s,height:c,transform:r,title:n,extra:a,watchable:!0})])}}},ll=new RegExp('"',"ug"),Nr=[1105920,1112319];function dl(e){var t=e.replace(ll,""),o=Ec(t,0),i=o>=Nr[0]&&o<=Nr[1],n=t.length===2?t[0]===t[1]:!1;return{value:rn(n?t[0]:t),isSecondary:i||n}}function Fr(e,t){var o="".concat(Qs).concat(t.replace(":","-"));return new Promise(function(i,n){if(e.getAttribute(o)!==null)return i();var r=Ut(e.children),a=r.filter(function(vt){return vt.getAttribute(on)===t})[0],s=mt.getComputedStyle(e,t),c=s.getPropertyValue("font-family").match(oc),d=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(a&&!c)return e.removeChild(a),i();if(c&&l!=="none"&&l!==""){var u=s.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?T:k,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ve[h][c[2].toLowerCase()]:rc[h][d],g=dl(u),_=g.value,R=g.isSecondary,j=c[0].startsWith("FontAwesome"),C=wn(b,_),N=C;if(j){var J=Sc(_);J.iconName&&J.prefix&&(C=J.iconName,b=J.prefix)}if(C&&!R&&(!a||a.getAttribute(pn)!==b||a.getAttribute(bn)!==N)){e.setAttribute(o,N),a&&e.removeChild(a);var H=tl(),gt=H.extra;gt.attributes[on]=t,dn(C,b).then(function(vt){var Ti=En(f(f({},H),{},{icons:{main:vt,mask:xn()},prefix:b,iconName:N,extra:gt,watchable:!0})),ct=I.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ct,e.firstChild):e.appendChild(ct),ct.outerHTML=Ti.map(function(Qa){return ke(Qa)}).join(`
`),e.removeAttribute(o),i()}).catch(n)}else i()}else i()})}function ul(e){return Promise.all([Fr(e,"::before"),Fr(e,"::after")])}function ml(e){return e.parentNode!==document.head&&!~ec.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(on)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Lr(e){if(at)return new Promise(function(t,o){var i=Ut(e.querySelectorAll("*")).filter(ml).map(ul),n=kn.begin("searchPseudoElements");ma(),Promise.all(i).then(function(){n(),mn(),t()}).catch(function(){n(),mn(),o()})})}var fl={hooks:function(){return{mutationObserverCallbacks:function(o){return o.pseudoElementsCallback=Lr,o}}},provides:function(t){t.pseudoElements2svg=function(o){var i=o.node,n=i===void 0?I:i;p.searchPseudoElements&&Lr(n)}}},jr=!1,hl={mixout:function(){return{dom:{unwatch:function(){ma(),jr=!0}}}},hooks:function(){return{bootstrap:function(){Rr(sn("mutationObserverCallbacks",{}))},noAuto:function(){Kc()},watch:function(o){var i=o.observeMutationsRoot;jr?mn():Rr(sn("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},zr=function(t){var o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(i,n){var r=n.toLowerCase().split("-"),a=r[0],s=r.slice(1).join("-");if(a&&s==="h")return i.flipX=!0,i;if(a&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(a){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},o)},pl={mixout:function(){return{parse:{transform:function(o){return zr(o)}}}},hooks:function(){return{parseNodeAttributes:function(o,i){var n=i.getAttribute("data-fa-transform");return n&&(o.transform=zr(n)),o}}},provides:function(t){t.generateAbstractTransformGrouping=function(o){var i=o.main,n=o.transform,r=o.containerWidth,a=o.iconWidth,s={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(n.x*32,", ").concat(n.y*32,") "),d="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(c," ").concat(d," ").concat(l)},h={transform:"translate(".concat(a/2*-1," -256)")},b={outer:s,inner:u,path:h};return{tag:"g",attributes:f({},b.outer),children:[{tag:"g",attributes:f({},b.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:f(f({},i.icon.attributes),b.path)}]}]}}}},tn={x:0,y:0,width:"100%",height:"100%"};function Br(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function bl(e){return e.tag==="g"?e.children:[e]}var gl={hooks:function(){return{parseNodeAttributes:function(o,i){var n=i.getAttribute("data-fa-mask"),r=n?bi(n.split(" ").map(function(a){return a.trim()})):xn();return r.prefix||(r.prefix=ft()),o.mask=r,o.maskId=i.getAttribute("data-fa-mask-id"),o}}},provides:function(t){t.generateAbstractMask=function(o){var i=o.children,n=o.attributes,r=o.main,a=o.mask,s=o.maskId,c=o.transform,d=r.width,l=r.icon,u=a.width,h=a.icon,b=pc({transform:c,containerWidth:u,iconWidth:d}),g={tag:"rect",attributes:f(f({},tn),{},{fill:"white"})},_=l.children?{children:l.children.map(Br)}:{},R={tag:"g",attributes:f({},b.inner),children:[Br(f({tag:l.tag,attributes:f(f({},l.attributes),b.path)},_))]},j={tag:"g",attributes:f({},b.outer),children:[R]},C="mask-".concat(s||we()),N="clip-".concat(s||we()),J={tag:"mask",attributes:f(f({},tn),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,j]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:bl(h)},J]};return i.push(H,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},tn)}),{children:i,attributes:n}}}},vl={provides:function(t){var o=!1;mt.matchMedia&&(o=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var i=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=f(f({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||s.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},a),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:f(f({},a),{},{values:"1;0;0;0;0;1;"})}]}),o||i.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},_l={hooks:function(){return{parseNodeAttributes:function(o,i){var n=i.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return o.symbol=r,o}}}},yl=[vc,rl,al,sl,cl,fl,hl,pl,gl,vl,_l];Mc(yl,{mixoutsTo:$});var tu=$.noAuto,eu=$.config,iu=$.library,nu=$.dom,wl=$.parse,ou=$.findIconDefinition,ru=$.toHtml,xl=$.icon,au=$.layer,El=$.text,kl=$.counter;var ha=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({});let e=t;return e})();function Yt(e){return Array.isArray(e)?e:[e]}function A(e){return e==null?"":typeof e=="string"?e:`${e}px`}function Ie(e){return e instanceof L?e.nativeElement:e}var Sn;try{Sn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Sn=!1}var Z=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?Mo(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Sn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(m(et))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Ce;function Tl(){if(Ce==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ce=!0}))}finally{Ce=Ce||!1}return Ce}function On(e){return Tl()?e:!!e.capture}var It;function pa(){if(It==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return It=!1,It;if("scrollBehavior"in document.documentElement.style)It=!0;else{let e=Element.prototype.scrollTo;e?It=!/\{\s*\[native code\]\s*\}/.test(e.toString()):It=!1}}return It}function De(e){return e.composedPath?e.composedPath()[0]:e.target}function Te(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Al=(()=>{let t=class t{create(i){return typeof MutationObserver>"u"?null:new MutationObserver(i)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ba=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({providers:[Al]});let e=t;return e})();var ga=new Set,Dt,Sl=(()=>{let t=class t{constructor(i,n){this._platform=i,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Rl}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&Ol(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(n){return new(n||t)(m(Z),m(Jt,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Ol(e,t){if(!ga.has(e))try{Dt||(Dt=document.createElement("style"),t&&Dt.setAttribute("nonce",t),Dt.setAttribute("type","text/css"),document.head.appendChild(Dt)),Dt.sheet&&(Dt.sheet.insertRule(`@media ${e} {body{ }}`,0),ga.add(e))}catch(o){console.error(o)}}function Rl(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var _a=(()=>{let t=class t{constructor(i,n){this._mediaMatcher=i,this._zone=n,this._queries=new Map,this._destroySubject=new X}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return va(Yt(i)).some(r=>this._registerQuery(r).mql.matches)}observe(i){let r=va(Yt(i)).map(s=>this._registerQuery(s).observable),a=to(r);return a=eo(a.pipe(Ne(1)),a.pipe(ro(1),oo(0))),a.pipe(Pe(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:d,query:l})=>{c.matches=c.matches||d,c.breakpoints[l]=d}),c}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let n=this._mediaMatcher.matchMedia(i),a={observable:new $t(s=>{let c=d=>this._zone.run(()=>s.next(d));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(Si(n),Pe(({matches:s})=>({query:i,matches:s})),Zt(this._destroySubject)),mql:n};return this._queries.set(i,a),a}};t.\u0275fac=function(n){return new(n||t)(m(Sl),m(E))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function va(e){return e.map(t=>t.split(",")).reduce((t,o)=>t.concat(o)).map(t=>t.trim())}function Ea(e){return e.buttons===0||e.detail===0}function ka(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Tt=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(Tt||{}),ya="cdk-high-contrast-black-on-white",wa="cdk-high-contrast-white-on-black",Rn="cdk-high-contrast-active",Mn=(()=>{let t=class t{constructor(i,n){this._platform=i,this._document=n,this._breakpointSubscription=S(_a).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Tt.NONE;let i=this._document.createElement("div");i.style.backgroundColor="rgb(1,2,3)",i.style.position="absolute",this._document.body.appendChild(i);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(i):null,a=(r&&r.backgroundColor||"").replace(/ /g,"");switch(i.remove(),a){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Tt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Tt.BLACK_ON_WHITE}return Tt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let i=this._document.body.classList;i.remove(Rn,ya,wa),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===Tt.BLACK_ON_WHITE?i.add(Rn,ya):n===Tt.WHITE_ON_BLACK&&i.add(Rn,wa)}}};t.\u0275fac=function(n){return new(n||t)(m(Z),m(x))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Ia=(()=>{let t=class t{constructor(i){i._applyBodyHighContrastModeCssClasses()}};t.\u0275fac=function(n){return new(n||t)(m(Mn))},t.\u0275mod=w({type:t}),t.\u0275inj=y({imports:[ba]});let e=t;return e})();var Pl=new F("cdk-dir-doc",{providedIn:"root",factory:Nl});function Nl(){return S(x)}var Fl=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ll(e){let t=e?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?Fl.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var Ca=(()=>{let t=class t{constructor(i){if(this.value="ltr",this.change=new Ot,i){let n=i.body?i.body.dir:null,r=i.documentElement?i.documentElement.dir:null;this.value=Ll(n||r||"ltr")}}ngOnDestroy(){this.change.complete()}};t.\u0275fac=function(n){return new(n||t)(m(Pl,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var pt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({});let e=t;return e})();var Bl=20,Aa=(()=>{let t=class t{constructor(i,n,r){this._ngZone=i,this._platform=n,this._scrolled=new X,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(i){this.scrollContainers.has(i)||this.scrollContainers.set(i,i.elementScrolled().subscribe(()=>this._scrolled.next(i)))}deregister(i){let n=this.scrollContainers.get(i);n&&(n.unsubscribe(),this.scrollContainers.delete(i))}scrolled(i=Bl){return this._platform.isBrowser?new $t(n=>{this._globalSubscription||this._addGlobalListener();let r=i>0?this._scrolled.pipe(Ai(i)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):Me()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((i,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(i,n){let r=this.getAncestorScrollContainers(i);return this.scrolled(n).pipe(Xt(a=>!a||r.indexOf(a)>-1))}getAncestorScrollContainers(i){let n=[];return this.scrollContainers.forEach((r,a)=>{this._scrollableContainsElement(a,i)&&n.push(a)}),n}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(i,n){let r=Ie(n),a=i.getElementRef().nativeElement;do if(r==a)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let i=this._getWindow();return io(i.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};t.\u0275fac=function(n){return new(n||t)(m(E),m(Z),m(x,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Vl=20,Fn=(()=>{let t=class t{constructor(i,n,r){this._platform=i,this._change=new X,this._changeListener=a=>{this._change.next(a)},this._document=r,n.runOutsideAngular(()=>{if(i.isBrowser){let a=this._getWindow();a.addEventListener("resize",this._changeListener),a.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let i=this._getWindow();i.removeEventListener("resize",this._changeListener),i.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let i={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),i}getViewportRect(){let i=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:i.top,left:i.left,bottom:i.top+r,right:i.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let i=this._document,n=this._getWindow(),r=i.documentElement,a=r.getBoundingClientRect(),s=-a.top||i.body.scrollTop||n.scrollY||r.scrollTop||0,c=-a.left||i.body.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:s,left:c}}change(i=Vl){return i>0?this._change.pipe(Ai(i)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let i=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:i.innerWidth,height:i.innerHeight}:{width:0,height:0}}};t.\u0275fac=function(n){return new(n||t)(m(Z),m(E),m(x,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var wi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({});let e=t;return e})(),Ln=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({imports:[pt,wi,pt,wi]});let e=t;return e})();var Se=class{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},jn=class extends Se{constructor(t,o,i,n,r){super(),this.component=t,this.viewContainerRef=o,this.injector=i,this.componentFactoryResolver=n,this.projectableNodes=r}},xi=class extends Se{constructor(t,o,i,n){super(),this.templateRef=t,this.viewContainerRef=o,this.context=i,this.injector=n}get origin(){return this.templateRef.elementRef}attach(t,o=this.context){return this.context=o,super.attach(t)}detach(){return this.context=void 0,super.detach()}},zn=class extends Se{constructor(t){super(),this.element=t instanceof L?t.nativeElement:t}},Bn=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof jn)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof xi)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof zn)return this._attachedPortal=t,this.attachDomPortal(t)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Ei=class extends Bn{constructor(t,o,i,n,r){super(),this.outletElement=t,this._componentFactoryResolver=o,this._appRef=i,this._defaultInjector=n,this.attachDomPortal=a=>{this._document;let s=a.element;s.parentNode;let c=this._document.createComment("dom-portal");s.parentNode.insertBefore(c,s),this.outletElement.appendChild(s),this._attachedPortal=a,super.setDisposeFn(()=>{c.parentNode&&c.parentNode.replaceChild(s,c)})},this._document=r}attachComponentPortal(t){let i=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),n;return t.viewContainerRef?(n=t.viewContainerRef.createComponent(i,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=i.create(t.injector||this._defaultInjector||Fe.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=t,n}attachTemplatePortal(t){let o=t.viewContainerRef,i=o.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(n=>this.outletElement.appendChild(n)),i.detectChanges(),this.setDisposeFn(()=>{let n=o.indexOf(i);n!==-1&&o.remove(n)}),this._attachedPortal=t,i}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Sa=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({});let e=t;return e})();var Oa=pa(),Vn=class{constructor(t,o){this._viewportRuler=t,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=o}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=A(-this._previousScrollPosition.left),t.style.top=A(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,o=this._document.body,i=t.style,n=o.style,r=i.scrollBehavior||"",a=n.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),Oa&&(i.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Oa&&(i.scrollBehavior=r,n.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let o=this._document.body,i=this._viewportRuler.getViewportSize();return o.scrollHeight>i.height||o.scrollWidth>i.width}};var Un=class{constructor(t,o,i,n){this._scrollDispatcher=t,this._ngZone=o,this._viewportRuler=i,this._config=n,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Xt(o=>!o||!this._overlayRef.overlayElement.contains(o.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let o=this._viewportRuler.getViewportScrollPosition().top;Math.abs(o-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},ki=class{enable(){}disable(){}attach(){}};function Yn(e,t){return t.some(o=>{let i=e.bottom<o.top,n=e.top>o.bottom,r=e.right<o.left,a=e.left>o.right;return i||n||r||a})}function Ra(e,t){return t.some(o=>{let i=e.top<o.top,n=e.bottom>o.bottom,r=e.left<o.left,a=e.right>o.right;return i||n||r||a})}var Hn=class{constructor(t,o,i,n){this._scrollDispatcher=t,this._viewportRuler=o,this._ngZone=i,this._config=n,this._scrollSubscription=null}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let o=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:n}=this._viewportRuler.getViewportSize();Yn(o,[{width:i,height:n,bottom:n,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Yl=(()=>{let t=class t{constructor(i,n,r,a){this._scrollDispatcher=i,this._viewportRuler=n,this._ngZone=r,this.noop=()=>new ki,this.close=s=>new Un(this._scrollDispatcher,this._ngZone,this._viewportRuler,s),this.block=()=>new Vn(this._viewportRuler,this._document),this.reposition=s=>new Hn(this._scrollDispatcher,this._viewportRuler,this._ngZone,s),this._document=a}};t.\u0275fac=function(n){return new(n||t)(m(Aa),m(Fn),m(E),m(x))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Wn=class{constructor(t){if(this.scrollStrategy=new ki,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,t){let o=Object.keys(t);for(let i of o)t[i]!==void 0&&(this[i]=t[i])}}};var $n=class{constructor(t,o){this.connectionPair=t,this.scrollableViewProperties=o}};var La=(()=>{let t=class t{constructor(i){this._attachedOverlays=[],this._document=i}ngOnDestroy(){this.detach()}add(i){this.remove(i),this._attachedOverlays.push(i)}remove(i){let n=this._attachedOverlays.indexOf(i);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}};t.\u0275fac=function(n){return new(n||t)(m(x))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Hl=(()=>{let t=class t extends La{constructor(i,n){super(i),this._ngZone=n,this._keydownListener=r=>{let a=this._attachedOverlays;for(let s=a.length-1;s>-1;s--)if(a[s]._keydownEvents.observers.length>0){let c=a[s]._keydownEvents;this._ngZone?this._ngZone.run(()=>c.next(r)):c.next(r);break}}}add(i){super.add(i),this._isAttached||(this._ngZone?this._ngZone.runOutsideAngular(()=>this._document.body.addEventListener("keydown",this._keydownListener)):this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}};t.\u0275fac=function(n){return new(n||t)(m(x),m(E,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Wl=(()=>{let t=class t extends La{constructor(i,n,r){super(i),this._platform=n,this._ngZone=r,this._cursorStyleIsSet=!1,this._pointerDownListener=a=>{this._pointerDownEventTarget=De(a)},this._clickListener=a=>{let s=De(a),c=a.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:s;this._pointerDownEventTarget=null;let d=this._attachedOverlays.slice();for(let l=d.length-1;l>-1;l--){let u=d[l];if(u._outsidePointerEvents.observers.length<1||!u.hasAttached())continue;if(u.overlayElement.contains(s)||u.overlayElement.contains(c))break;let h=u._outsidePointerEvents;this._ngZone?this._ngZone.run(()=>h.next(a)):h.next(a)}}}add(i){if(super.add(i),!this._isAttached){let n=this._document.body;this._ngZone?this._ngZone.runOutsideAngular(()=>this._addEventListeners(n)):this._addEventListeners(n),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){if(this._isAttached){let i=this._document.body;i.removeEventListener("pointerdown",this._pointerDownListener,!0),i.removeEventListener("click",this._clickListener,!0),i.removeEventListener("auxclick",this._clickListener,!0),i.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(i.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1}}_addEventListeners(i){i.addEventListener("pointerdown",this._pointerDownListener,!0),i.addEventListener("click",this._clickListener,!0),i.addEventListener("auxclick",this._clickListener,!0),i.addEventListener("contextmenu",this._clickListener,!0)}};t.\u0275fac=function(n){return new(n||t)(m(x),m(Z),m(E,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),ja=(()=>{let t=class t{constructor(i,n){this._platform=n,this._document=i}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let i="cdk-overlay-container";if(this._platform.isBrowser||Te()){let r=this._document.querySelectorAll(`.${i}[platform="server"], .${i}[platform="test"]`);for(let a=0;a<r.length;a++)r[a].remove()}let n=this._document.createElement("div");n.classList.add(i),Te()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}};t.\u0275fac=function(n){return new(n||t)(m(x),m(Z))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Xn=class{constructor(t,o,i,n,r,a,s,c,d,l=!1){this._portalOutlet=t,this._host=o,this._pane=i,this._config=n,this._ngZone=r,this._keyboardDispatcher=a,this._document=s,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=l,this._backdropElement=null,this._backdropClick=new X,this._attachments=new X,this._detachments=new X,this._locationChanges=Re.EMPTY,this._backdropClickHandler=u=>this._backdropClick.next(u),this._backdropTransitionendHandler=u=>{this._disposeBackdrop(u.target)},this._keydownEvents=new X,this._outsidePointerEvents=new X,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(t){!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host);let o=this._portalOutlet.attach(t);return this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(Ne(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof o?.onDestroy=="function"&&o.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),o}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._disposeBackdrop(this._backdropElement),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._previousHostParent=this._pane=this._host=null,t&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=z(z({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Wt(z({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=A(this._config.width),t.height=A(this._config.height),t.minWidth=A(this._config.minWidth),t.minHeight=A(this._config.minHeight),t.maxWidth=A(this._config.maxWidth),t.maxHeight=A(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._animationsDisabled&&this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(t)})}):this._backdropElement.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let t=this._backdropElement;if(t){if(this._animationsDisabled){this._disposeBackdrop(t);return}t.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{t.addEventListener("transitionend",this._backdropTransitionendHandler)}),t.style.pointerEvents="none",this._backdropTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(()=>{this._disposeBackdrop(t)},500))}}_toggleClasses(t,o,i){let n=Yt(o||[]).filter(r=>!!r);n.length&&(i?t.classList.add(...n):t.classList.remove(...n))}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{let t=this._ngZone.onStable.pipe(Zt(no(this._attachments,this._detachments))).subscribe(()=>{(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),t.unsubscribe())})})}_disposeScrollStrategy(){let t=this._scrollStrategy;t&&(t.disable(),t.detach&&t.detach())}_disposeBackdrop(t){t&&(t.removeEventListener("click",this._backdropClickHandler),t.removeEventListener("transitionend",this._backdropTransitionendHandler),t.remove(),this._backdropElement===t&&(this._backdropElement=null)),this._backdropTimeout&&(clearTimeout(this._backdropTimeout),this._backdropTimeout=void 0)}},Ma="cdk-overlay-connected-position-bounding-box",$l=/([A-Za-z%]+)$/,Zn=class{get positions(){return this._preferredPositions}constructor(t,o,i,n,r){this._viewportRuler=o,this._document=i,this._platform=n,this._overlayContainer=r,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new X,this._resizeSubscription=Re.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Ma),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let t=this._originRect,o=this._overlayRect,i=this._viewportRect,n=this._containerRect,r=[],a;for(let s of this._preferredPositions){let c=this._getOriginPoint(t,n,s),d=this._getOverlayPoint(c,o,s),l=this._getOverlayFit(d,o,i,s);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,c);return}if(this._canFitWithFlexibleDimensions(l,d,i)){r.push({position:s,origin:c,overlayRect:o,boundingBoxRect:this._calculateBoundingBoxRect(c,s)});continue}(!a||a.overlayFit.visibleArea<l.visibleArea)&&(a={overlayFit:l,overlayPoint:d,originPoint:c,position:s,overlayRect:o})}if(r.length){let s=null,c=-1;for(let d of r){let l=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);l>c&&(c=l,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&At(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ma),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;if(t){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._overlayContainer.getContainerElement().getBoundingClientRect();let o=this._getOriginPoint(this._originRect,this._containerRect,t);this._applyPosition(t,o)}else this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,o,i){let n;if(i.originX=="center")n=t.left+t.width/2;else{let a=this._isRtl()?t.right:t.left,s=this._isRtl()?t.left:t.right;n=i.originX=="start"?a:s}o.left<0&&(n-=o.left);let r;return i.originY=="center"?r=t.top+t.height/2:r=i.originY=="top"?t.top:t.bottom,o.top<0&&(r-=o.top),{x:n,y:r}}_getOverlayPoint(t,o,i){let n;i.overlayX=="center"?n=-o.width/2:i.overlayX==="start"?n=this._isRtl()?-o.width:0:n=this._isRtl()?0:-o.width;let r;return i.overlayY=="center"?r=-o.height/2:r=i.overlayY=="top"?0:-o.height,{x:t.x+n,y:t.y+r}}_getOverlayFit(t,o,i,n){let r=Na(o),{x:a,y:s}=t,c=this._getOffset(n,"x"),d=this._getOffset(n,"y");c&&(a+=c),d&&(s+=d);let l=0-a,u=a+r.width-i.width,h=0-s,b=s+r.height-i.height,g=this._subtractOverflows(r.width,l,u),_=this._subtractOverflows(r.height,h,b),R=g*_;return{visibleArea:R,isCompletelyWithinViewport:r.width*r.height===R,fitsInViewportVertically:_===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(t,o,i){if(this._hasFlexibleDimensions){let n=i.bottom-o.y,r=i.right-o.x,a=Pa(this._overlayRef.getConfig().minHeight),s=Pa(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||a!=null&&a<=n,d=t.fitsInViewportHorizontally||s!=null&&s<=r;return c&&d}return!1}_pushOverlayOnScreen(t,o,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let n=Na(o),r=this._viewportRect,a=Math.max(t.x+n.width-r.width,0),s=Math.max(t.y+n.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),d=Math.max(r.left-i.left-t.x,0),l=0,u=0;return n.width<=r.width?l=d||-a:l=t.x<this._viewportMargin?r.left-i.left-t.x:0,n.height<=r.height?u=c||-s:u=t.y<this._viewportMargin?r.top-i.top-t.y:0,this._previousPushAmount={x:l,y:u},{x:t.x+l,y:t.y+u}}_applyPosition(t,o){if(this._setTransformOrigin(t),this._setOverlayElementStyles(o,t),this._setBoundingBoxStyles(o,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!Xl(this._lastScrollVisibility,i)){let n=new $n(t,i);this._positionChanges.next(n)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let o=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,n=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let r=0;r<o.length;r++)o[r].style.transformOrigin=`${i} ${n}`}_calculateBoundingBoxRect(t,o){let i=this._viewportRect,n=this._isRtl(),r,a,s;if(o.overlayY==="top")a=t.y,r=i.height-a+this._viewportMargin;else if(o.overlayY==="bottom")s=i.height-t.y+this._viewportMargin*2,r=i.height-s+this._viewportMargin;else{let b=Math.min(i.bottom-t.y+i.top,t.y),g=this._lastBoundingBoxSize.height;r=b*2,a=t.y-b,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.y-g/2)}let c=o.overlayX==="start"&&!n||o.overlayX==="end"&&n,d=o.overlayX==="end"&&!n||o.overlayX==="start"&&n,l,u,h;if(d)h=i.width-t.x+this._viewportMargin*2,l=t.x-this._viewportMargin;else if(c)u=t.x,l=i.right-t.x;else{let b=Math.min(i.right-t.x+i.left,t.x),g=this._lastBoundingBoxSize.width;l=b*2,u=t.x-b,l>g&&!this._isInitialRender&&!this._growAfterOpen&&(u=t.x-g/2)}return{top:a,left:u,bottom:s,right:h,width:l,height:r}}_setBoundingBoxStyles(t,o){let i=this._calculateBoundingBoxRect(t,o);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right=n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;n.height=A(i.height),n.top=A(i.top),n.bottom=A(i.bottom),n.width=A(i.width),n.left=A(i.left),n.right=A(i.right),o.overlayX==="center"?n.alignItems="center":n.alignItems=o.overlayX==="end"?"flex-end":"flex-start",o.overlayY==="center"?n.justifyContent="center":n.justifyContent=o.overlayY==="bottom"?"flex-end":"flex-start",r&&(n.maxHeight=A(r)),a&&(n.maxWidth=A(a))}this._lastBoundingBoxSize=i,At(this._boundingBox.style,n)}_resetBoundingBoxStyles(){At(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){At(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,o){let i={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(n){let l=this._viewportRuler.getViewportScrollPosition();At(i,this._getExactOverlayY(o,t,l)),At(i,this._getExactOverlayX(o,t,l))}else i.position="static";let s="",c=this._getOffset(o,"x"),d=this._getOffset(o,"y");c&&(s+=`translateX(${c}px) `),d&&(s+=`translateY(${d}px)`),i.transform=s.trim(),a.maxHeight&&(n?i.maxHeight=A(a.maxHeight):r&&(i.maxHeight="")),a.maxWidth&&(n?i.maxWidth=A(a.maxWidth):r&&(i.maxWidth="")),At(this._pane.style,i)}_getExactOverlayY(t,o,i){let n={top:"",bottom:""},r=this._getOverlayPoint(o,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;n.bottom=`${a-(r.y+this._overlayRect.height)}px`}else n.top=A(r.y);return n}_getExactOverlayX(t,o,i){let n={left:"",right:""},r=this._getOverlayPoint(o,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let a;if(this._isRtl()?a=t.overlayX==="end"?"left":"right":a=t.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;n.right=`${s-(r.x+this._overlayRect.width)}px`}else n.left=A(r.x);return n}_getScrollVisibility(){let t=this._getOriginRect(),o=this._pane.getBoundingClientRect(),i=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ra(t,i),isOriginOutsideView:Yn(t,i),isOverlayClipped:Ra(o,i),isOverlayOutsideView:Yn(o,i)}}_subtractOverflows(t,...o){return o.reduce((i,n)=>i-Math.max(n,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,o=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+t-this._viewportMargin,bottom:i.top+o-this._viewportMargin,width:t-2*this._viewportMargin,height:o-2*this._viewportMargin}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,o){return o==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Yt(t).forEach(o=>{o!==""&&this._appliedPanelClasses.indexOf(o)===-1&&(this._appliedPanelClasses.push(o),this._pane.classList.add(o))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){let t=this._origin;if(t instanceof L)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let o=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+o,height:i,width:o}}};function At(e,t){for(let o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function Pa(e){if(typeof e!="number"&&e!=null){let[t,o]=e.split($l);return!o||o==="px"?parseFloat(t):null}return e||null}function Na(e){return{top:Math.floor(e.top),right:Math.floor(e.right),bottom:Math.floor(e.bottom),left:Math.floor(e.left),width:Math.floor(e.width),height:Math.floor(e.height)}}function Xl(e,t){return e===t?!0:e.isOriginClipped===t.isOriginClipped&&e.isOriginOutsideView===t.isOriginOutsideView&&e.isOverlayClipped===t.isOverlayClipped&&e.isOverlayOutsideView===t.isOverlayOutsideView}var Fa="cdk-global-overlay-wrapper",Gn=class{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._alignItems="",this._xPosition="",this._xOffset="",this._width="",this._height="",this._isDisposed=!1}attach(t){let o=t.getConfig();this._overlayRef=t,this._width&&!o.width&&t.updateSize({width:this._width}),this._height&&!o.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Fa),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,o=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:n,height:r,maxWidth:a,maxHeight:s}=i,c=(n==="100%"||n==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(r==="100%"||r==="100vh")&&(!s||s==="100%"||s==="100vh"),l=this._xPosition,u=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",b="",g="",_="";c?_="flex-start":l==="center"?(_="center",h?g=u:b=u):h?l==="left"||l==="end"?(_="flex-end",b=u):(l==="right"||l==="start")&&(_="flex-start",g=u):l==="left"||l==="start"?(_="flex-start",b=u):(l==="right"||l==="end")&&(_="flex-end",g=u),t.position=this._cssPosition,t.marginLeft=c?"0":b,t.marginTop=d?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":g,o.justifyContent=_,o.alignItems=d?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,o=this._overlayRef.hostElement,i=o.style;o.classList.remove(Fa),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},Zl=(()=>{let t=class t{constructor(i,n,r,a){this._viewportRuler=i,this._document=n,this._platform=r,this._overlayContainer=a}global(){return new Gn}flexibleConnectedTo(i){return new Zn(i,this._viewportRuler,this._document,this._platform,this._overlayContainer)}};t.\u0275fac=function(n){return new(n||t)(m(Fn),m(x),m(Z),m(ja))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})(),Gl=0,Ht=(()=>{let t=class t{constructor(i,n,r,a,s,c,d,l,u,h,b,g){this.scrollStrategies=i,this._overlayContainer=n,this._componentFactoryResolver=r,this._positionBuilder=a,this._keyboardDispatcher=s,this._injector=c,this._ngZone=d,this._document=l,this._directionality=u,this._location=h,this._outsideClickDispatcher=b,this._animationsModuleType=g}create(i){let n=this._createHostElement(),r=this._createPaneElement(n),a=this._createPortalOutlet(r),s=new Wn(i);return s.direction=s.direction||this._directionality.value,new Xn(a,n,r,s,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher,this._animationsModuleType==="NoopAnimations")}position(){return this._positionBuilder}_createPaneElement(i){let n=this._document.createElement("div");return n.id=`cdk-overlay-${Gl++}`,n.classList.add("cdk-overlay-pane"),i.appendChild(n),n}_createHostElement(){let i=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(i),i}_createPortalOutlet(i){return this._appRef||(this._appRef=this._injector.get(ae)),new Ei(i,this._componentFactoryResolver,this._appRef,this._injector,this._document)}};t.\u0275fac=function(n){return new(n||t)(m(Yl),m(ja),m(Ni),m(Zl),m(Hl),m(Fe),m(E),m(x),m(Ca),m(Oo),m(Wl),m(it,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Kl=new F("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let e=S(Ht);return()=>e.scrollStrategies.reposition()}});function ql(e){return()=>e.scrollStrategies.reposition()}var Jl={provide:Kl,deps:[Ht],useFactory:ql},za=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({providers:[Ht,Jl],imports:[pt,Sa,Ln,Ln]});let e=t;return e})();function Ql(){return!0}var td=new F("mat-sanity-checks",{providedIn:"root",factory:Ql}),bt=(()=>{let t=class t{constructor(i,n,r){this._sanityChecks=n,this._document=r,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return Te()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[i]}};t.\u0275fac=function(n){return new(n||t)(m(Mn),m(td,8),m(x))},t.\u0275mod=w({type:t}),t.\u0275inj=y({imports:[pt,pt]});let e=t;return e})();var G=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(G||{}),Kn=class{constructor(t,o,i,n=!1){this._renderer=t,this.element=o,this.config=i,this._animationForciblyDisabledThroughCss=n,this.state=G.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Ba=On({passive:!0,capture:!0}),qn=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let o=De(t);o&&this._events.get(t.type)?.forEach((i,n)=>{(n===o||n.contains(o))&&i.forEach(r=>r.handleEvent(t))})}}addHandler(t,o,i,n){let r=this._events.get(o);if(r){let a=r.get(i);a?a.add(n):r.set(i,new Set([n]))}else this._events.set(o,new Map([[i,new Set([n])]])),t.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,Ba)})}removeHandler(t,o,i){let n=this._events.get(t);if(!n)return;let r=n.get(o);r&&(r.delete(i),r.size===0&&n.delete(o),n.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Ba)))}},Va={enterDuration:225,exitDuration:150},ed=800,Ua=On({passive:!0,capture:!0}),Ya=["mousedown","touchstart"],Ha=["mouseup","mouseleave","touchend","touchcancel"],Oe=class Oe{constructor(t,o,i,n){this._target=t,this._ngZone=o,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=Ie(i))}fadeInRipple(t,o,i={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=z(z({},Va),i.animation);i.centered&&(t=n.left+n.width/2,o=n.top+n.height/2);let a=i.radius||id(t,o,n),s=t-n.left,c=o-n.top,d=r.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${s-a}px`,l.style.top=`${c-a}px`,l.style.height=`${a*2}px`,l.style.width=`${a*2}px`,i.color!=null&&(l.style.backgroundColor=i.color),l.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(l);let u=window.getComputedStyle(l),h=u.transitionProperty,b=u.transitionDuration,g=h==="none"||b==="0s"||b==="0s, 0s"||n.width===0&&n.height===0,_=new Kn(this,l,i,g);l.style.transform="scale3d(1, 1, 1)",_.state=G.FADING_IN,i.persistent||(this._mostRecentTransientRipple=_);let R=null;return!g&&(d||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let j=()=>this._finishRippleTransition(_),C=()=>this._destroyRipple(_);l.addEventListener("transitionend",j),l.addEventListener("transitioncancel",C),R={onTransitionEnd:j,onTransitionCancel:C}}),this._activeRipples.set(_,R),(g||!d)&&this._finishRippleTransition(_),_}fadeOutRipple(t){if(t.state===G.FADING_OUT||t.state===G.HIDDEN)return;let o=t.element,i=z(z({},Va),t.config.animation);o.style.transitionDuration=`${i.exitDuration}ms`,o.style.opacity="0",t.state=G.FADING_OUT,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let o=Ie(t);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Ya.forEach(i=>{Oe._eventManager.addHandler(this._ngZone,i,o,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ha.forEach(o=>{this._triggerElement.addEventListener(o,this,Ua)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===G.FADING_IN?this._startFadeOutTransition(t):t.state===G.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let o=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=G.VISIBLE,!i&&(!o||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let o=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=G.HIDDEN,o!==null&&(t.element.removeEventListener("transitionend",o.onTransitionEnd),t.element.removeEventListener("transitioncancel",o.onTransitionCancel)),t.element.remove()}_onMousedown(t){let o=Ea(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ed;!this._target.rippleDisabled&&!o&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!ka(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=t.changedTouches;if(o)for(let i=0;i<o.length;i++)this.fadeInRipple(o[i].clientX,o[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let o=t.state===G.VISIBLE||t.config.terminateOnPointerUp&&t.state===G.FADING_IN;!t.config.persistent&&o&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Ya.forEach(o=>Oe._eventManager.removeHandler(o,t,this)),this._pointerUpEventsRegistered&&(Ha.forEach(o=>t.removeEventListener(o,this,Ua)),this._pointerUpEventsRegistered=!1))}};Oe._eventManager=new qn;var Wa=Oe;function id(e,t,o){let i=Math.max(Math.abs(e-o.left),Math.abs(e-o.right)),n=Math.max(Math.abs(t-o.top),Math.abs(t-o.bottom));return Math.sqrt(i*i+n*n)}var $a=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({imports:[bt,bt]});let e=t;return e})();var Xa=20;var nd=new F("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let e=S(Ht);return()=>e.scrollStrategies.reposition({scrollThrottle:Xa})}});function od(e){return()=>e.scrollStrategies.reposition({scrollThrottle:Xa})}var rd={provide:nd,deps:[Ht],useFactory:od};var Ii=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({providers:[rd],imports:[Ia,Ft,za,bt,bt,wi]});let e=t;return e})();var cd=(()=>{let t=class t extends $e{constructor(i,n,r){super(i,n,r,S(je,{optional:!0}))}ngOnDestroy(){this.flush()}};t.\u0275fac=function(n){return new(n||t)(m(x),m(le),m(We))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function ld(){return new Fo}function dd(e,t,o){return new jo(e,t,o)}var Ga=[{provide:We,useFactory:ld},{provide:$e,useClass:cd},{provide:Pt,useFactory:dd,deps:[Lt,$e,E]}],Za=[{provide:le,useFactory:()=>new Lo},{provide:it,useValue:"BrowserAnimations"},...Ga],ud=[{provide:le,useClass:No},{provide:it,useValue:"NoopAnimations"},...Ga],Ci=(()=>{let t=class t{static withConfig(i){return{ngModule:t,providers:i.disableAnimations?ud:Za}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({providers:Za,imports:[Je]});let e=t;return e})();var Di=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({imports:[bt,$a,bt]});let e=t;return e})();var Ka=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t}),t.\u0275inj=y({imports:[Ci,Ii,Di,Ft,ha]});let e=t;return e})();var md="@",fd=(()=>{let t=class t{constructor(i,n,r,a,s){this.doc=i,this.delegate=n,this.zone=r,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=S(je,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-UJFDBXAU.js")).catch(n=>{throw new Q(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(i,n){let r=this.delegate.createRenderer(i,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new Jn(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let c=s.createRenderer(i,n);a.use(c)}).catch(s=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(n){Pi()},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Jn=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let o of this.replay)o(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,o){return this.delegate.createElement(t,o)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,o){this.delegate.appendChild(t,o)}insertBefore(t,o,i,n){this.delegate.insertBefore(t,o,i,n)}removeChild(t,o,i){this.delegate.removeChild(t,o,i)}selectRootElement(t,o){return this.delegate.selectRootElement(t,o)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,o,i,n){this.delegate.setAttribute(t,o,i,n)}removeAttribute(t,o,i){this.delegate.removeAttribute(t,o,i)}addClass(t,o){this.delegate.addClass(t,o)}removeClass(t,o){this.delegate.removeClass(t,o)}setStyle(t,o,i,n){this.delegate.setStyle(t,o,i,n)}removeStyle(t,o,i){this.delegate.removeStyle(t,o,i)}setProperty(t,o,i){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(t,o,i)),this.delegate.setProperty(t,o,i)}setValue(t,o){this.delegate.setValue(t,o)}listen(t,o,i){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(t,o,i)),this.delegate.listen(t,o,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(md)}};function qa(e="animations"){return te("NgAsyncAnimations"),Kt([{provide:Pt,useFactory:(t,o,i)=>new fd(t,o,i,e),deps:[x,Lt,E]},{provide:it,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ja=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=w({type:t,bootstrap:[hr]}),t.\u0275inj=y({providers:[ir(),qa()],imports:[Ci,Ii,Di,Je,Ka]});let e=t;return e})();er().bootstrapModule(Ja).catch(e=>console.error(e));
