var UE=Object.defineProperty;var FE=(t,e,n)=>e in t?UE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Li=(t,e,n)=>FE(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function OE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var K_={exports:{}},fu={},$_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),kE=Symbol.for("react.portal"),BE=Symbol.for("react.fragment"),VE=Symbol.for("react.strict_mode"),zE=Symbol.for("react.profiler"),HE=Symbol.for("react.provider"),GE=Symbol.for("react.context"),WE=Symbol.for("react.forward_ref"),jE=Symbol.for("react.suspense"),XE=Symbol.for("react.memo"),KE=Symbol.for("react.lazy"),cg=Symbol.iterator;function $E(t){return t===null||typeof t!="object"?null:(t=cg&&t[cg]||t["@@iterator"],typeof t=="function"?t:null)}var Y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q_=Object.assign,Z_={};function Do(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||Y_}Do.prototype.isReactComponent={};Do.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Do.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q_(){}Q_.prototype=Do.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=Z_,this.updater=n||Y_}var dp=fp.prototype=new Q_;dp.constructor=fp;q_(dp,Do.prototype);dp.isPureReactComponent=!0;var ug=Array.isArray,J_=Object.prototype.hasOwnProperty,hp={current:null},ex={key:!0,ref:!0,__self:!0,__source:!0};function tx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,i)&&!ex.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:$a,type:t,key:s,ref:o,props:r,_owner:hp.current}}function YE(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function qE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fg=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qE(""+t.key):e.toString(36)}function rc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $a:case kE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vu(o,0):i,ug(r)?(n="",t!=null&&(n=t.replace(fg,"$&/")+"/"),rc(r,e,n,"",function(c){return c})):r!=null&&(pp(r)&&(r=YE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(fg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ug(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vu(s,a);o+=rc(s,e,n,l,r)}else if(l=$E(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vu(s,a++),o+=rc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ul(t,e,n){if(t==null)return t;var i=[],r=0;return rc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ZE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},sc={transition:null},QE={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:sc,ReactCurrentOwner:hp};function nx(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:ul,forEach:function(t,e,n){ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ul(t,function(){e++}),e},toArray:function(t){return ul(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Do;We.Fragment=BE;We.Profiler=zE;We.PureComponent=fp;We.StrictMode=VE;We.Suspense=jE;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE;We.act=nx;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=q_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)J_.call(e,l)&&!ex.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:$a,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:GE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HE,_context:t},t.Consumer=t};We.createElement=tx;We.createFactory=function(t){var e=tx.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:WE,render:t}};We.isValidElement=pp;We.lazy=function(t){return{$$typeof:KE,_payload:{_status:-1,_result:t},_init:ZE}};We.memo=function(t,e){return{$$typeof:XE,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=sc.transition;sc.transition={};try{t()}finally{sc.transition=e}};We.unstable_act=nx;We.useCallback=function(t,e){return mn.current.useCallback(t,e)};We.useContext=function(t){return mn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};We.useEffect=function(t,e){return mn.current.useEffect(t,e)};We.useId=function(){return mn.current.useId()};We.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return mn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};We.useRef=function(t){return mn.current.useRef(t)};We.useState=function(t){return mn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return mn.current.useTransition()};We.version="18.3.1";$_.exports=We;var ne=$_.exports;const JE=OE(ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eT=ne,tT=Symbol.for("react.element"),nT=Symbol.for("react.fragment"),iT=Object.prototype.hasOwnProperty,rT=eT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sT={key:!0,ref:!0,__self:!0,__source:!0};function ix(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)iT.call(e,i)&&!sT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tT,type:t,key:s,ref:o,props:r,_owner:rT.current}}fu.Fragment=nT;fu.jsx=ix;fu.jsxs=ix;K_.exports=fu;var L=K_.exports,cd={},rx={exports:{}},kn={},sx={exports:{}},ox={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,X){var Z=k.length;k.push(X);e:for(;0<Z;){var ae=Z-1>>>1,he=k[ae];if(0<r(he,X))k[ae]=X,k[Z]=he,Z=ae;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var X=k[0],Z=k.pop();if(Z!==X){k[0]=Z;e:for(var ae=0,he=k.length,He=he>>>1;ae<He;){var je=2*(ae+1)-1,Le=k[je],q=je+1,de=k[q];if(0>r(Le,Z))q<he&&0>r(de,Le)?(k[ae]=de,k[q]=Z,ae=q):(k[ae]=Le,k[je]=Z,ae=je);else if(q<he&&0>r(de,Z))k[ae]=de,k[q]=Z,ae=q;else break e}}return X}function r(k,X){var Z=k.sortIndex-X.sortIndex;return Z!==0?Z:k.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=k)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(k){if(y=!1,_(k),!v)if(n(l)!==null)v=!0,G(w);else{var X=n(c);X!==null&&F(M,X.startTime-k)}}function w(k,X){v=!1,y&&(y=!1,h(x),x=-1),p=!0;var Z=f;try{for(_(X),d=n(l);d!==null&&(!(d.expirationTime>X)||k&&!R());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var he=ae(d.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&i(l),_(X)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var je=n(c);je!==null&&F(M,je.startTime-X),He=!1}return He}finally{d=null,f=Z,p=!1}}var T=!1,C=null,x=-1,b=5,P=-1;function R(){return!(t.unstable_now()-P<b)}function O(){if(C!==null){var k=t.unstable_now();P=k;var X=!0;try{X=C(!0,k)}finally{X?j():(T=!1,C=null)}}else T=!1}var j;if(typeof g=="function")j=function(){g(O)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,I=K.port2;K.port1.onmessage=O,j=function(){I.postMessage(null)}}else j=function(){m(O,0)};function G(k){C=k,T||(T=!0,j())}function F(k,X){x=m(function(){k(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(w))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var Z=f;f=X;try{return k()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,X){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Z=f;f=k;try{return X()}finally{f=Z}},t.unstable_scheduleCallback=function(k,X,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,k){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,k={id:u++,callback:X,priorityLevel:k,startTime:Z,expirationTime:he,sortIndex:-1},Z>ae?(k.sortIndex=Z,e(c,k),n(l)===null&&k===n(c)&&(y?(h(x),x=-1):y=!0,F(M,Z-ae))):(k.sortIndex=he,e(l,k),v||p||(v=!0,G(w))),k},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(k){var X=f;return function(){var Z=f;f=X;try{return k.apply(this,arguments)}finally{f=Z}}}})(ox);sx.exports=ox;var oT=sx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aT=ne,Fn=oT;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ax=new Set,Ta={};function Ms(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(Ta[t]=e,t=0;t<e.length;t++)ax.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ud=Object.prototype.hasOwnProperty,lT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dg={},hg={};function cT(t){return ud.call(hg,t)?!0:ud.call(dg,t)?!1:lT.test(t)?hg[t]=!0:(dg[t]=!0,!1)}function uT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fT(t,e,n,i){if(e===null||typeof e>"u"||uT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);Zt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);Zt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vp(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fT(e,n,r,i)&&(n=null),i||r===null?cT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=aT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),fd=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),cx=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),ux=Symbol.for("react.offscreen"),pg=Symbol.iterator;function ko(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,zu;function ta(t){if(zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zu=e&&e[1]||""}return`
`+zu+t}var Hu=!1;function Gu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function dT(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Ws:return"Portal";case fd:return"Profiler";case _p:return"StrictMode";case dd:return"Suspense";case hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cx:return(t.displayName||"Context")+".Consumer";case lx:return(t._context.displayName||"Context")+".Provider";case xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function hT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===_p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pT(t){var e=fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function dl(t){t._valueTracker||(t._valueTracker=pT(t))}function dx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hx(t,e){e=e.checked,e!=null&&vp(t,"checked",e,!1)}function gd(t,e){hx(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&vd(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vd(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(na(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function px(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _g(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,gx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mT=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){mT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function vx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function _x(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=vx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gT=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(gT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ed=null,co=null,uo=null;function xg(t){if(t=Za(t)){if(typeof Ed!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=gu(e),Ed(t.stateNode,t.type,e))}}function xx(t){co?uo?uo.push(t):uo=[t]:co=t}function yx(){if(co){var t=co,e=uo;if(uo=co=null,xg(t),e)for(t=0;t<e.length;t++)xg(e[t])}}function Sx(t,e){return t(e)}function Mx(){}var Wu=!1;function Ex(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return Sx(t,e,n)}finally{Wu=!1,(co!==null||uo!==null)&&(Mx(),yx())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=gu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Td=!1;if(qi)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Td=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Td=!1}function vT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var da=!1,Ac=null,Cc=!1,wd=null,_T={onError:function(t){da=!0,Ac=t}};function xT(t,e,n,i,r,s,o,a,l){da=!1,Ac=null,vT.apply(_T,arguments)}function yT(t,e,n,i,r,s,o,a,l){if(xT.apply(this,arguments),da){if(da){var c=Ac;da=!1,Ac=null}else throw Error(ie(198));Cc||(Cc=!0,wd=c)}}function Es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yg(t){if(Es(t)!==t)throw Error(ie(188))}function ST(t){var e=t.alternate;if(!e){if(e=Es(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yg(r),t;if(s===i)return yg(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function wx(t){return t=ST(t),t!==null?Ax(t):null}function Ax(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ax(t);if(e!==null)return e;t=t.sibling}return null}var Cx=Fn.unstable_scheduleCallback,Sg=Fn.unstable_cancelCallback,MT=Fn.unstable_shouldYield,ET=Fn.unstable_requestPaint,Lt=Fn.unstable_now,TT=Fn.unstable_getCurrentPriorityLevel,Mp=Fn.unstable_ImmediatePriority,bx=Fn.unstable_UserBlockingPriority,bc=Fn.unstable_NormalPriority,wT=Fn.unstable_LowPriority,Rx=Fn.unstable_IdlePriority,du=null,Ti=null;function AT(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:RT,CT=Math.log,bT=Math.LN2;function RT(t){return t>>>=0,t===0?32:31-(CT(t)/bT|0)|0}var pl=64,ml=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ia(a):(s&=o,s!==0&&(i=ia(s)))}else o=n&~r,o!==0?i=ia(o):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function PT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=PT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Px(){var t=pl;return pl<<=1,!(pl&4194240)&&(pl=64),t}function ju(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function LT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Dx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lx,Tp,Nx,Ix,Ux,Cd=!1,gl=[],Tr=null,wr=null,Ar=null,Ca=new Map,ba=new Map,_r=[],NT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mg(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function IT(t,e,n,i,r){switch(e){case"focusin":return Tr=Vo(Tr,t,e,n,i,r),!0;case"dragenter":return wr=Vo(wr,t,e,n,i,r),!0;case"mouseover":return Ar=Vo(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Vo(Ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ba.set(s,Vo(ba.get(s)||null,t,e,n,i,r)),!0}return!1}function Fx(t){var e=ns(t.target);if(e!==null){var n=Es(e);if(n!==null){if(e=n.tag,e===13){if(e=Tx(n),e!==null){t.blockedOn=e,Ux(t.priority,function(){Nx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Md=i,n.target.dispatchEvent(i),Md=null}else return e=Za(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function Eg(t,e,n){oc(t)&&n.delete(e)}function UT(){Cd=!1,Tr!==null&&oc(Tr)&&(Tr=null),wr!==null&&oc(wr)&&(wr=null),Ar!==null&&oc(Ar)&&(Ar=null),Ca.forEach(Eg),ba.forEach(Eg)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Cd||(Cd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,UT)))}function Ra(t){function e(r){return zo(r,t)}if(0<gl.length){zo(gl[0],t);for(var n=1;n<gl.length;n++){var i=gl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Tr!==null&&zo(Tr,t),wr!==null&&zo(wr,t),Ar!==null&&zo(Ar,t),Ca.forEach(e),ba.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Fx(n),n.blockedOn===null&&_r.shift()}var fo=rr.ReactCurrentBatchConfig,Pc=!0;function FT(t,e,n,i){var r=nt,s=fo.transition;fo.transition=null;try{nt=1,wp(t,e,n,i)}finally{nt=r,fo.transition=s}}function OT(t,e,n,i){var r=nt,s=fo.transition;fo.transition=null;try{nt=4,wp(t,e,n,i)}finally{nt=r,fo.transition=s}}function wp(t,e,n,i){if(Pc){var r=bd(t,e,n,i);if(r===null)tf(t,e,i,Dc,n),Mg(t,i);else if(IT(r,t,e,n,i))i.stopPropagation();else if(Mg(t,i),e&4&&-1<NT.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&Lx(s),s=bd(t,e,n,i),s===null&&tf(t,e,i,Dc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tf(t,e,i,null,n)}}var Dc=null;function bd(t,e,n,i){if(Dc=null,t=Sp(i),t=ns(t),t!==null)if(e=Es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function Ox(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TT()){case Mp:return 1;case bx:return 4;case bc:case wT:return 16;case Rx:return 536870912;default:return 16}default:return 16}}var Sr=null,Ap=null,ac=null;function kx(){if(ac)return ac;var t,e=Ap,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ac=r.slice(t,1<i?1-i:void 0)}function lc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Tg(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:Tg,this.isPropagationStopped=Tg,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cp=Bn(Lo),qa=Et({},Lo,{view:0,detail:0}),kT=Bn(qa),Xu,Ku,Ho,hu=Et({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(Xu=t.screenX-Ho.screenX,Ku=t.screenY-Ho.screenY):Ku=Xu=0,Ho=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),wg=Bn(hu),BT=Et({},hu,{dataTransfer:0}),VT=Bn(BT),zT=Et({},qa,{relatedTarget:0}),$u=Bn(zT),HT=Et({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),GT=Bn(HT),WT=Et({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jT=Bn(WT),XT=Et({},Lo,{data:0}),Ag=Bn(XT),KT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$T={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YT[t])?!!e[t]:!1}function bp(){return qT}var ZT=Et({},qa,{key:function(t){if(t.key){var e=KT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$T[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QT=Bn(ZT),JT=Et({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cg=Bn(JT),e1=Et({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),t1=Bn(e1),n1=Et({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),i1=Bn(n1),r1=Et({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Bn(r1),o1=[9,13,27,32],Rp=qi&&"CompositionEvent"in window,ha=null;qi&&"documentMode"in document&&(ha=document.documentMode);var a1=qi&&"TextEvent"in window&&!ha,Bx=qi&&(!Rp||ha&&8<ha&&11>=ha),bg=" ",Rg=!1;function Vx(t,e){switch(t){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function l1(t,e){switch(t){case"compositionend":return zx(e);case"keypress":return e.which!==32?null:(Rg=!0,bg);case"textInput":return t=e.data,t===bg&&Rg?null:t;default:return null}}function c1(t,e){if(Xs)return t==="compositionend"||!Rp&&Vx(t,e)?(t=kx(),ac=Ap=Sr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bx&&e.locale!=="ko"?null:e.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u1[t.type]:e==="textarea"}function Hx(t,e,n,i){xx(i),e=Lc(e,"onChange"),0<e.length&&(n=new Cp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Pa=null;function f1(t){Jx(t,0)}function pu(t){var e=Ys(t);if(dx(e))return t}function d1(t,e){if(t==="change")return e}var Gx=!1;if(qi){var Yu;if(qi){var qu="oninput"in document;if(!qu){var Dg=document.createElement("div");Dg.setAttribute("oninput","return;"),qu=typeof Dg.oninput=="function"}Yu=qu}else Yu=!1;Gx=Yu&&(!document.documentMode||9<document.documentMode)}function Lg(){pa&&(pa.detachEvent("onpropertychange",Wx),Pa=pa=null)}function Wx(t){if(t.propertyName==="value"&&pu(Pa)){var e=[];Hx(e,Pa,t,Sp(t)),Ex(f1,e)}}function h1(t,e,n){t==="focusin"?(Lg(),pa=e,Pa=n,pa.attachEvent("onpropertychange",Wx)):t==="focusout"&&Lg()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(Pa)}function m1(t,e){if(t==="click")return pu(e)}function g1(t,e){if(t==="input"||t==="change")return pu(e)}function v1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:v1;function Da(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ud.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ig(t,e){var n=Ng(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ng(n)}}function jx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xx(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _1(t){var e=Xx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jx(n.ownerDocument.documentElement,n)){if(i!==null&&Pp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ig(n,s);var o=Ig(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x1=qi&&"documentMode"in document&&11>=document.documentMode,Ks=null,Rd=null,ma=null,Pd=!1;function Ug(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Ks==null||Ks!==wc(i)||(i=Ks,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Da(ma,i)||(ma=i,i=Lc(Rd,"onSelect"),0<i.length&&(e=new Cp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ks)))}function _l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Zu={},Kx={};qi&&(Kx=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function mu(t){if(Zu[t])return Zu[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kx)return Zu[t]=e[n];return t}var $x=mu("animationend"),Yx=mu("animationiteration"),qx=mu("animationstart"),Zx=mu("transitionend"),Qx=new Map,Fg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){Qx.set(t,e),Ms(e,[t])}for(var Qu=0;Qu<Fg.length;Qu++){var Ju=Fg[Qu],y1=Ju.toLowerCase(),S1=Ju[0].toUpperCase()+Ju.slice(1);kr(y1,"on"+S1)}kr($x,"onAnimationEnd");kr(Yx,"onAnimationIteration");kr(qx,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Zx,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Og(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yT(i,e,void 0,t),t.currentTarget=null}function Jx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Og(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Og(r,a,c),s=l}}}if(Cc)throw t=wd,Cc=!1,wd=null,t}function ht(t,e){var n=e[Ud];n===void 0&&(n=e[Ud]=new Set);var i=t+"__bubble";n.has(i)||(ey(e,t,2,!1),n.add(i))}function ef(t,e,n){var i=0;e&&(i|=4),ey(n,t,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[xl]){t[xl]=!0,ax.forEach(function(n){n!=="selectionchange"&&(M1.has(n)||ef(n,!1,t),ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,ef("selectionchange",!1,e))}}function ey(t,e,n,i){switch(Ox(e)){case 1:var r=FT;break;case 4:r=OT;break;default:r=wp}n=r.bind(null,e,n,t),r=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ex(function(){var c=s,u=Sp(n),d=[];e:{var f=Qx.get(t);if(f!==void 0){var p=Cp,v=t;switch(t){case"keypress":if(lc(n)===0)break e;case"keydown":case"keyup":p=QT;break;case"focusin":v="focus",p=$u;break;case"focusout":v="blur",p=$u;break;case"beforeblur":case"afterblur":p=$u;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=t1;break;case $x:case Yx:case qx:p=GT;break;case Zx:p=i1;break;case"scroll":p=kT;break;case"wheel":p=s1;break;case"copy":case"cut":case"paste":p=jT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Cg}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=Aa(g,h),M!=null&&y.push(Na(g,M,_)))),m)break;g=g.return}0<y.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Md&&(v=n.relatedTarget||n.fromElement)&&(ns(v)||v[Zi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ns(v):null,v!==null&&(m=Es(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=wg,M="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Cg,M="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:Ys(p),_=v==null?f:Ys(v),f=new y(M,g+"leave",p,n,u),f.target=m,f.relatedTarget=_,M=null,ns(u)===c&&(y=new y(h,g+"enter",v,n,u),y.target=_,y.relatedTarget=m,M=y),m=M,p&&v)t:{for(y=p,h=v,g=0,_=y;_;_=bs(_))g++;for(_=0,M=h;M;M=bs(M))_++;for(;0<g-_;)y=bs(y),g--;for(;0<_-g;)h=bs(h),_--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=bs(y),h=bs(h)}y=null}else y=null;p!==null&&kg(d,f,p,y,!1),v!==null&&m!==null&&kg(d,m,v,y,!0)}}e:{if(f=c?Ys(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=d1;else if(Pg(f))if(Gx)w=g1;else{w=p1;var T=h1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=m1);if(w&&(w=w(t,c))){Hx(d,w,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&vd(f,"number",f.value)}switch(T=c?Ys(c):window,t){case"focusin":(Pg(T)||T.contentEditable==="true")&&(Ks=T,Rd=c,ma=null);break;case"focusout":ma=Rd=Ks=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Ug(d,n,u);break;case"selectionchange":if(x1)break;case"keydown":case"keyup":Ug(d,n,u)}var C;if(Rp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Xs?Vx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Bx&&n.locale!=="ko"&&(Xs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Xs&&(C=kx()):(Sr=u,Ap="value"in Sr?Sr.value:Sr.textContent,Xs=!0)),T=Lc(c,x),0<T.length&&(x=new Ag(x,t,null,n,u),d.push({event:x,listeners:T}),C?x.data=C:(C=zx(n),C!==null&&(x.data=C)))),(C=a1?l1(t,n):c1(t,n))&&(c=Lc(c,"onBeforeInput"),0<c.length&&(u=new Ag("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}Jx(d,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Aa(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,s),l!=null&&o.unshift(Na(n,l,a))):r||(l=Aa(n,s),l!=null&&o.push(Na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(E1,`
`).replace(T1,"")}function yl(t,e,n){if(e=Bg(e),Bg(t)!==e&&n)throw Error(ie(425))}function Nc(){}var Dd=null,Ld=null;function Nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Id=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(C1)}:Id;function C1(t){setTimeout(function(){throw t})}function nf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),Si="__reactFiber$"+No,Ia="__reactProps$"+No,Zi="__reactContainer$"+No,Ud="__reactEvents$"+No,b1="__reactListeners$"+No,R1="__reactHandles$"+No;function ns(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zg(t);t!==null;){if(n=t[Si])return n;t=zg(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Si]||t[Zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function gu(t){return t[Ia]||null}var Fd=[],qs=-1;function Br(t){return{current:t}}function pt(t){0>qs||(t.current=Fd[qs],Fd[qs]=null,qs--)}function ft(t,e){qs++,Fd[qs]=t.current,t.current=e}var Ir={},un=Br(Ir),yn=Br(!1),ps=Ir;function _o(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Ic(){pt(yn),pt(un)}function Hg(t,e,n){if(un.current!==Ir)throw Error(ie(168));ft(un,e),ft(yn,n)}function ty(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,hT(t)||"Unknown",r));return Et({},n,i)}function Uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ps=un.current,ft(un,t),ft(yn,yn.current),!0}function Gg(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=ty(t,e,ps),i.__reactInternalMemoizedMergedChildContext=t,pt(yn),pt(un),ft(un,t)):pt(yn),ft(yn,n)}var Bi=null,vu=!1,rf=!1;function ny(t){Bi===null?Bi=[t]:Bi.push(t)}function P1(t){vu=!0,ny(t)}function Vr(){if(!rf&&Bi!==null){rf=!0;var t=0,e=nt;try{var n=Bi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,vu=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),Cx(Mp,Vr),r}finally{nt=e,rf=!1}}return null}var Zs=[],Qs=0,Fc=null,Oc=0,jn=[],Xn=0,ms=null,zi=1,Hi="";function Yr(t,e){Zs[Qs++]=Oc,Zs[Qs++]=Fc,Fc=t,Oc=e}function iy(t,e,n){jn[Xn++]=zi,jn[Xn++]=Hi,jn[Xn++]=ms,ms=t;var i=zi;t=Hi;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-fi(e)+r|n<<r|i,Hi=s+t}else zi=1<<s|n<<r|i,Hi=t}function Dp(t){t.return!==null&&(Yr(t,1),iy(t,1,0))}function Lp(t){for(;t===Fc;)Fc=Zs[--Qs],Zs[Qs]=null,Oc=Zs[--Qs],Zs[Qs]=null;for(;t===ms;)ms=jn[--Xn],jn[Xn]=null,Hi=jn[--Xn],jn[Xn]=null,zi=jn[--Xn],jn[Xn]=null}var Nn=null,Ln=null,gt=!1,li=null;function ry(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:zi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Ln=null,!0):!1;default:return!1}}function Od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kd(t){if(gt){var e=Ln;if(e){var n=e;if(!Wg(t,e)){if(Od(t))throw Error(ie(418));e=Cr(n.nextSibling);var i=Nn;e&&Wg(t,e)?ry(i,n):(t.flags=t.flags&-4097|2,gt=!1,Nn=t)}}else{if(Od(t))throw Error(ie(418));t.flags=t.flags&-4097|2,gt=!1,Nn=t}}}function jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Sl(t){if(t!==Nn)return!1;if(!gt)return jg(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nd(t.type,t.memoizedProps)),e&&(e=Ln)){if(Od(t))throw sy(),Error(ie(418));for(;e;)ry(t,e),e=Cr(e.nextSibling)}if(jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Nn?Cr(t.stateNode.nextSibling):null;return!0}function sy(){for(var t=Ln;t;)t=Cr(t.nextSibling)}function xo(){Ln=Nn=null,gt=!1}function Np(t){li===null?li=[t]:li.push(t)}var D1=rr.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xg(t){var e=t._init;return e(t._payload)}function oy(t){function e(h,g){if(t){var _=h.deletions;_===null?(h.deletions=[g],h.flags|=16):_.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Dr(h,g),h.index=0,h.sibling=null,h}function s(h,g,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<g?(h.flags|=2,g):_):(h.flags|=2,g)):(h.flags|=1048576,g)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,g,_,M){return g===null||g.tag!==6?(g=ff(_,h.mode,M),g.return=h,g):(g=r(g,_),g.return=h,g)}function l(h,g,_,M){var w=_.type;return w===js?u(h,g,_.props.children,M,_.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===gr&&Xg(w)===g.type)?(M=r(g,_.props),M.ref=Go(h,g,_),M.return=h,M):(M=mc(_.type,_.key,_.props,null,h.mode,M),M.ref=Go(h,g,_),M.return=h,M)}function c(h,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=df(_,h.mode,M),g.return=h,g):(g=r(g,_.children||[]),g.return=h,g)}function u(h,g,_,M,w){return g===null||g.tag!==7?(g=fs(_,h.mode,M,w),g.return=h,g):(g=r(g,_),g.return=h,g)}function d(h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ff(""+g,h.mode,_),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fl:return _=mc(g.type,g.key,g.props,null,h.mode,_),_.ref=Go(h,null,g),_.return=h,_;case Ws:return g=df(g,h.mode,_),g.return=h,g;case gr:var M=g._init;return d(h,M(g._payload),_)}if(na(g)||ko(g))return g=fs(g,h.mode,_,null),g.return=h,g;Ml(h,g)}return null}function f(h,g,_,M){var w=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return _.key===w?l(h,g,_,M):null;case Ws:return _.key===w?c(h,g,_,M):null;case gr:return w=_._init,f(h,g,w(_._payload),M)}if(na(_)||ko(_))return w!==null?null:u(h,g,_,M,null);Ml(h,_)}return null}function p(h,g,_,M,w){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,a(g,h,""+M,w);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case fl:return h=h.get(M.key===null?_:M.key)||null,l(g,h,M,w);case Ws:return h=h.get(M.key===null?_:M.key)||null,c(g,h,M,w);case gr:var T=M._init;return p(h,g,_,T(M._payload),w)}if(na(M)||ko(M))return h=h.get(_)||null,u(g,h,M,w,null);Ml(g,M)}return null}function v(h,g,_,M){for(var w=null,T=null,C=g,x=g=0,b=null;C!==null&&x<_.length;x++){C.index>x?(b=C,C=null):b=C.sibling;var P=f(h,C,_[x],M);if(P===null){C===null&&(C=b);break}t&&C&&P.alternate===null&&e(h,C),g=s(P,g,x),T===null?w=P:T.sibling=P,T=P,C=b}if(x===_.length)return n(h,C),gt&&Yr(h,x),w;if(C===null){for(;x<_.length;x++)C=d(h,_[x],M),C!==null&&(g=s(C,g,x),T===null?w=C:T.sibling=C,T=C);return gt&&Yr(h,x),w}for(C=i(h,C);x<_.length;x++)b=p(C,h,x,_[x],M),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?x:b.key),g=s(b,g,x),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(R){return e(h,R)}),gt&&Yr(h,x),w}function y(h,g,_,M){var w=ko(_);if(typeof w!="function")throw Error(ie(150));if(_=w.call(_),_==null)throw Error(ie(151));for(var T=w=null,C=g,x=g=0,b=null,P=_.next();C!==null&&!P.done;x++,P=_.next()){C.index>x?(b=C,C=null):b=C.sibling;var R=f(h,C,P.value,M);if(R===null){C===null&&(C=b);break}t&&C&&R.alternate===null&&e(h,C),g=s(R,g,x),T===null?w=R:T.sibling=R,T=R,C=b}if(P.done)return n(h,C),gt&&Yr(h,x),w;if(C===null){for(;!P.done;x++,P=_.next())P=d(h,P.value,M),P!==null&&(g=s(P,g,x),T===null?w=P:T.sibling=P,T=P);return gt&&Yr(h,x),w}for(C=i(h,C);!P.done;x++,P=_.next())P=p(C,h,x,P.value,M),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?x:P.key),g=s(P,g,x),T===null?w=P:T.sibling=P,T=P);return t&&C.forEach(function(O){return e(h,O)}),gt&&Yr(h,x),w}function m(h,g,_,M){if(typeof _=="object"&&_!==null&&_.type===js&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:e:{for(var w=_.key,T=g;T!==null;){if(T.key===w){if(w=_.type,w===js){if(T.tag===7){n(h,T.sibling),g=r(T,_.props.children),g.return=h,h=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===gr&&Xg(w)===T.type){n(h,T.sibling),g=r(T,_.props),g.ref=Go(h,T,_),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}_.type===js?(g=fs(_.props.children,h.mode,M,_.key),g.return=h,h=g):(M=mc(_.type,_.key,_.props,null,h.mode,M),M.ref=Go(h,g,_),M.return=h,h=M)}return o(h);case Ws:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(h,g.sibling),g=r(g,_.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=df(_,h.mode,M),g.return=h,h=g}return o(h);case gr:return T=_._init,m(h,g,T(_._payload),M)}if(na(_))return v(h,g,_,M);if(ko(_))return y(h,g,_,M);Ml(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,_),g.return=h,h=g):(n(h,g),g=ff(_,h.mode,M),g.return=h,h=g),o(h)):n(h,g)}return m}var yo=oy(!0),ay=oy(!1),kc=Br(null),Bc=null,Js=null,Ip=null;function Up(){Ip=Js=Bc=null}function Fp(t){var e=kc.current;pt(kc),t._currentValue=e}function Bd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){Bc=t,Ip=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Ip!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Bc===null)throw Error(ie(308));Js=t,Bc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var is=null;function Op(t){is===null?is=[t]:is.push(t)}function ly(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Op(e)):(n.next=r.next,r.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Op(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qi(t,n)}function cc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}function Kg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=Et({},d,f);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=d}}function $g(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Qa={},wi=Br(Qa),Ua=Br(Qa),Fa=Br(Qa);function rs(t){if(t===Qa)throw Error(ie(174));return t}function Bp(t,e){switch(ft(Fa,e),ft(Ua,t),ft(wi,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}pt(wi),ft(wi,e)}function So(){pt(wi),pt(Ua),pt(Fa)}function uy(t){rs(Fa.current);var e=rs(wi.current),n=xd(e,t.type);e!==n&&(ft(Ua,t),ft(wi,n))}function Vp(t){Ua.current===t&&(pt(wi),pt(Ua))}var yt=Br(0);function zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sf=[];function zp(){for(var t=0;t<sf.length;t++)sf[t]._workInProgressVersionPrimary=null;sf.length=0}var uc=rr.ReactCurrentDispatcher,of=rr.ReactCurrentBatchConfig,gs=0,Mt=null,Bt=null,Wt=null,Hc=!1,ga=!1,Oa=0,L1=0;function Jt(){throw Error(ie(321))}function Hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Gp(t,e,n,i,r,s){if(gs=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uc.current=t===null||t.memoizedState===null?F1:O1,t=n(i,r),ga){s=0;do{if(ga=!1,Oa=0,25<=s)throw Error(ie(301));s+=1,Wt=Bt=null,e.updateQueue=null,uc.current=k1,t=n(i,r)}while(ga)}if(uc.current=Gc,e=Bt!==null&&Bt.next!==null,gs=0,Wt=Bt=Mt=null,Hc=!1,e)throw Error(ie(300));return t}function Wp(){var t=Oa!==0;return Oa=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Zn(){if(Bt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Wt===null?Mt.memoizedState:Wt.next;if(e!==null)Wt=e,Bt=t;else{if(t===null)throw Error(ie(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Wt===null?Mt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function ka(t,e){return typeof e=="function"?e(t):e}function af(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((gs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,vs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,vs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lf(t){var e=Zn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fy(){}function dy(t,e){var n=Mt,i=Zn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,jp(my.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,py.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ie(349));gs&30||hy(n,e,r)}return r}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function py(t,e,n,i){e.value=n,e.getSnapshot=i,gy(e)&&vy(t)}function my(t,e,n){return n(function(){gy(e)&&vy(t)})}function gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function vy(t){var e=Qi(t,1);e!==null&&di(e,t,1,-1)}function Yg(t){var e=xi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=U1.bind(null,Mt,t),[e.memoizedState,t]}function Ba(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _y(){return Zn().memoizedState}function fc(t,e,n,i){var r=xi();Mt.flags|=t,r.memoizedState=Ba(1|e,n,void 0,i===void 0?null:i)}function _u(t,e,n,i){var r=Zn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&Hp(i,o.deps)){r.memoizedState=Ba(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ba(1|e,n,s,i)}function qg(t,e){return fc(8390656,8,t,e)}function jp(t,e){return _u(2048,8,t,e)}function xy(t,e){return _u(4,2,t,e)}function yy(t,e){return _u(4,4,t,e)}function Sy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function My(t,e,n){return n=n!=null?n.concat([t]):null,_u(4,4,Sy.bind(null,e,t),n)}function Xp(){}function Ey(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ty(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function wy(t,e,n){return gs&21?(hi(n,e)||(n=Px(),Mt.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function N1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=of.transition;of.transition={};try{t(!1),e()}finally{nt=n,of.transition=i}}function Ay(){return Zn().memoizedState}function I1(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cy(t))by(e,n);else if(n=ly(t,e,n,i),n!==null){var r=hn();di(n,t,i,r),Ry(n,e,i)}}function U1(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cy(t))by(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Op(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ly(t,e,r,i),n!==null&&(r=hn(),di(n,t,i,r),Ry(n,e,i))}}function Cy(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function by(t,e){ga=Hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ry(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}var Gc={readContext:qn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},F1={readContext:qn,useCallback:function(t,e){return xi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fc(4194308,4,Sy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return fc(4,2,t,e)},useMemo:function(t,e){var n=xi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=xi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=I1.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=xi();return t={current:t},e.memoizedState=t},useState:Yg,useDebugValue:Xp,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Yg(!1),e=t[0];return t=N1.bind(null,t[1]),xi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=xi();if(gt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Xt===null)throw Error(ie(349));gs&30||hy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qg(my.bind(null,i,s,t),[t]),i.flags|=2048,Ba(9,py.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=xi(),e=Xt.identifierPrefix;if(gt){var n=Hi,i=zi;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=L1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O1={readContext:qn,useCallback:Ey,useContext:qn,useEffect:jp,useImperativeHandle:My,useInsertionEffect:xy,useLayoutEffect:yy,useMemo:Ty,useReducer:af,useRef:_y,useState:function(){return af(ka)},useDebugValue:Xp,useDeferredValue:function(t){var e=Zn();return wy(e,Bt.memoizedState,t)},useTransition:function(){var t=af(ka)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:fy,useSyncExternalStore:dy,useId:Ay,unstable_isNewReconciler:!1},k1={readContext:qn,useCallback:Ey,useContext:qn,useEffect:jp,useImperativeHandle:My,useInsertionEffect:xy,useLayoutEffect:yy,useMemo:Ty,useReducer:lf,useRef:_y,useState:function(){return lf(ka)},useDebugValue:Xp,useDeferredValue:function(t){var e=Zn();return Bt===null?e.memoizedState=t:wy(e,Bt.memoizedState,t)},useTransition:function(){var t=lf(ka)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:fy,useSyncExternalStore:dy,useId:Ay,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xu={isMounted:function(t){return(t=t._reactInternals)?Es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Pr(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(di(e,t,r,i),cc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Pr(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(di(e,t,r,i),cc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Pr(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(di(e,t,i,n),cc(e,t,i))}};function Zg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function Py(t,e,n){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=Sn(e)?ps:un.current,i=e.contextTypes,s=(i=i!=null)?_o(t,r):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xu.enqueueReplaceState(e,e.state,null)}function zd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=Sn(e)?ps:un.current,r.context=_o(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xu.enqueueReplaceState(r,r.state,null),Vc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Mo(t,e){try{var n="",i=e;do n+=dT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var B1=typeof WeakMap=="function"?WeakMap:Map;function Dy(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jc||(jc=!0,Qd=i),Hd(t,e)},n}function Ly(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hd(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new B1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=J1.bind(null,t,e,n),e.then(t,t))}function e0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function t0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t)}var V1=rr.ReactCurrentOwner,xn=!1;function dn(t,e,n,i){e.child=t===null?ay(e,null,n,i):yo(e,t.child,n,i)}function n0(t,e,n,i,r){n=n.render;var s=e.ref;return ho(e,r),i=Gp(t,e,n,i,s,r),n=Wp(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(gt&&n&&Dp(e),e.flags|=1,dn(t,e,i,r),e.child)}function i0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!em(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ny(t,e,s,i,r)):(t=mc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=Dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ny(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return Gd(t,e,n,i,r)}function Iy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(to,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(to,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(to,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(to,Pn),Pn|=i;return dn(t,e,r,n),e.child}function Uy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gd(t,e,n,i,r){var s=Sn(n)?ps:un.current;return s=_o(e,s),ho(e,r),n=Gp(t,e,n,i,s,r),i=Wp(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(gt&&i&&Dp(e),e.flags|=1,dn(t,e,n,r),e.child)}function r0(t,e,n,i,r){if(Sn(n)){var s=!0;Uc(e)}else s=!1;if(ho(e,r),e.stateNode===null)dc(t,e),Py(e,n,i),zd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Sn(n)?ps:un.current,c=_o(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qg(e,o,i,c),vr=!1;var f=e.memoizedState;o.state=f,Vc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||yn.current||vr?(typeof u=="function"&&(Vd(e,n,u,i),l=e.memoizedState),(a=vr||Zg(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Sn(n)?ps:un.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Qg(e,o,i,l),vr=!1,f=e.memoizedState,o.state=f,Vc(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||yn.current||vr?(typeof p=="function"&&(Vd(e,n,p,i),v=e.memoizedState),(c=vr||Zg(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wd(t,e,n,i,s,r)}function Wd(t,e,n,i,r,s){Uy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gg(e,n,!1),Ji(t,e,s);i=e.stateNode,V1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,s),e.child=yo(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&Gg(e,n,!0),e.child}function Fy(t){var e=t.stateNode;e.pendingContext?Hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hg(t,e.context,!1),Bp(t,e.containerInfo)}function s0(t,e,n,i,r){return xo(),Np(r),e.flags|=256,dn(t,e,n,i),e.child}var jd={dehydrated:null,treeContext:null,retryLane:0};function Xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oy(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(yt,r&1),t===null)return kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,i,0,null),t=fs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xd(n),e.memoizedState=jd,t):Kp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return z1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=fs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Xd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jd,i}return s=t.child,t=s.sibling,i=Dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Kp(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,i){return i!==null&&Np(i),yo(e,t.child,null,n),t=Kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cf(Error(ie(422))),El(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mu({mode:"visible",children:i.children},r,0,null),s=fs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=Xd(o),e.memoizedState=jd,s);if(!(e.mode&1))return El(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=cf(s,i,void 0),El(t,e,o,i)}if(a=(o&t.childLanes)!==0,xn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qi(t,r),di(i,t,r,-1))}return Jp(),i=cf(Error(ie(421))),El(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ew.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Cr(r.nextSibling),Nn=e,gt=!0,li=null,t!==null&&(jn[Xn++]=zi,jn[Xn++]=Hi,jn[Xn++]=ms,zi=t.id,Hi=t.overflow,ms=e),e=Kp(e,i.children),e.flags|=4096,e)}function o0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bd(t.return,e,n)}function uf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ky(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,n,e);else if(t.tag===19)o0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),uf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}uf(e,!0,n,null,s);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function H1(t,e,n){switch(e.tag){case 3:Fy(e),xo();break;case 5:uy(e);break;case 1:Sn(e.type)&&Uc(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?Oy(t,e,n):(ft(yt,yt.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);ft(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ky(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,Iy(t,e,n)}return Ji(t,e,n)}var By,Kd,Vy,zy;By=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};Vy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,rs(wi.current);var s=null;switch(n){case"input":r=md(t,r),i=md(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=_d(t,r),i=_d(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nc)}yd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ta.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Wo(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function G1(t,e,n){var i=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Sn(e.type)&&Ic(),en(e),null;case 3:return i=e.stateNode,So(),pt(yn),pt(un),zp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(th(li),li=null))),Kd(t,e),en(e),null;case 5:Vp(e);var r=rs(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)Vy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return en(e),null}if(t=rs(wi.current),Sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)ht(ra[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":mg(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":vg(i,s),ht("invalid",i)}yd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,t),r=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":dl(i),gg(i,s,!0);break;case"textarea":dl(i),_g(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Ia]=i,By(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)ht(ra[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":mg(t,i),r=md(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),ht("invalid",t);break;case"textarea":vg(t,i),r=_d(t,i),ht("invalid",t);break;default:r=i}yd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_x(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&vp(t,s,l,o))}switch(n){case"input":dl(t),gg(t,i,!1);break;case"textarea":dl(t),_g(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)zy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=rs(Fa.current),rs(wi.current),Sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:yl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&yl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return en(e),null;case 13:if(pt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Ln!==null&&e.mode&1&&!(e.flags&128))sy(),xo(),e.flags|=98560,s=!1;else if(s=Sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Si]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else li!==null&&(th(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Vt===0&&(Vt=3):Jp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return So(),Kd(t,e),t===null&&La(e.stateNode.containerInfo),en(e),null;case 10:return Fp(e.type._context),en(e),null;case 17:return Sn(e.type)&&Ic(),en(e),null;case 19:if(pt(yt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Wo(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zc(t),o!==null){for(e.flags|=128,Wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Eo&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=zc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return en(e),null}else 2*Lt()-s.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=yt.current,ft(yt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Qp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function W1(t,e){switch(Lp(e),e.tag){case 1:return Sn(e.type)&&Ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),pt(yn),pt(un),zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vp(e),null;case 13:if(pt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(yt),null;case 4:return So(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var Tl=!1,on=!1,j1=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function $d(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var a0=!1;function X1(t,e){if(Dd=Pc,t=Xx(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:t,selectionRange:n},Pc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=a0,a0=!1,v}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$d(e,n,s)}r=r.next}while(r!==i)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hy(t){var e=t.alternate;e!==null&&(t.alternate=null,Hy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Ia],delete e[Ud],delete e[b1],delete e[R1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gy(t){return t.tag===5||t.tag===3||t.tag===4}function l0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}function Zd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zd(t,e,n),t=t.sibling;t!==null;)Zd(t,e,n),t=t.sibling}var Kt=null,ai=!1;function lr(t,e,n){for(n=n.child;n!==null;)Wy(t,e,n),n=n.sibling}function Wy(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:on||eo(n,e);case 6:var i=Kt,r=ai;Kt=null,lr(t,e,n),Kt=i,ai=r,Kt!==null&&(ai?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(ai?(t=Kt,n=n.stateNode,t.nodeType===8?nf(t.parentNode,n):t.nodeType===1&&nf(t,n),Ra(t)):nf(Kt,n.stateNode));break;case 4:i=Kt,r=ai,Kt=n.stateNode.containerInfo,ai=!0,lr(t,e,n),Kt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$d(n,e,o),r=r.next}while(r!==i)}lr(t,e,n);break;case 1:if(!on&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,lr(t,e,n),on=i):lr(t,e,n);break;default:lr(t,e,n)}}function c0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j1),e.forEach(function(i){var r=tw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ei(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,ai=!1;break e;case 3:Kt=a.stateNode.containerInfo,ai=!0;break e;case 4:Kt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Kt===null)throw Error(ie(160));Wy(s,o,r),Kt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jy(e,t),e=e.sibling}function jy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(e,t),gi(t),i&4){try{va(3,t,t.return),yu(3,t)}catch(y){Ct(t,t.return,y)}try{va(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:ei(e,t),gi(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(ei(e,t),gi(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hx(r,s),Sd(a,o);var c=Sd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?_x(r,d):u==="dangerouslySetInnerHTML"?gx(r,d):u==="children"?wa(r,d):vp(r,u,d,c)}switch(a){case"input":gd(r,s);break;case"textarea":px(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(ei(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(ei(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:ei(e,t),gi(t);break;case 13:ei(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qp=Lt())),i&4&&c0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,ei(e,t),on=c):ei(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(d=Ee=u;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:va(4,f,f.return);break;case 1:eo(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:eo(f,f.return);break;case 22:if(f.memoizedState!==null){f0(d);continue}}p!==null?(p.return=f,Ee=p):f0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=vx("display",o))}catch(y){Ct(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ei(e,t),gi(t),i&4&&c0(t);break;case 21:break;default:ei(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=l0(t);Zd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=l0(t);qd(t,a,o);break;default:throw Error(ie(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function K1(t,e,n){Ee=t,Xy(t)}function Xy(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Tl;var c=on;if(Tl=o,(on=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?d0(r):l!==null?(l.return=o,Ee=l):d0(r);for(;s!==null;)Ee=s,Xy(s),s=s.sibling;Ee=r,Tl=a,on=c}u0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):u0(t)}}function u0(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$g(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$g(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}on||e.flags&512&&Yd(e)}catch(f){Ct(e,e.return,f)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function f0(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function d0(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Yd(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Yd(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var $1=Math.ceil,Wc=rr.ReactCurrentDispatcher,$p=rr.ReactCurrentOwner,Yn=rr.ReactCurrentBatchConfig,Qe=0,Xt=null,Ut=null,qt=0,Pn=0,to=Br(0),Vt=0,Va=null,vs=0,Su=0,Yp=0,_a=null,_n=null,qp=0,Eo=1/0,ki=null,jc=!1,Qd=null,Rr=null,wl=!1,Mr=null,Xc=0,xa=0,Jd=null,hc=-1,pc=0;function hn(){return Qe&6?Lt():hc!==-1?hc:hc=Lt()}function Pr(t){return t.mode&1?Qe&2&&qt!==0?qt&-qt:D1.transition!==null?(pc===0&&(pc=Px()),pc):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Ox(t.type)),t):1}function di(t,e,n,i){if(50<xa)throw xa=0,Jd=null,Error(ie(185));Ya(t,n,i),(!(Qe&2)||t!==Xt)&&(t===Xt&&(!(Qe&2)&&(Su|=n),Vt===4&&xr(t,qt)),Mn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Eo=Lt()+500,vu&&Vr()))}function Mn(t,e){var n=t.callbackNode;DT(t,e);var i=Rc(t,t===Xt?qt:0);if(i===0)n!==null&&Sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sg(n),e===1)t.tag===0?P1(h0.bind(null,t)):ny(h0.bind(null,t)),A1(function(){!(Qe&6)&&Vr()}),n=null;else{switch(Dx(i)){case 1:n=Mp;break;case 4:n=bx;break;case 16:n=bc;break;case 536870912:n=Rx;break;default:n=bc}n=eS(n,Ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ky(t,e){if(hc=-1,pc=0,Qe&6)throw Error(ie(327));var n=t.callbackNode;if(po()&&t.callbackNode!==n)return null;var i=Rc(t,t===Xt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Kc(t,i);else{e=i;var r=Qe;Qe|=2;var s=Yy();(Xt!==t||qt!==e)&&(ki=null,Eo=Lt()+500,us(t,e));do try{Z1();break}catch(a){$y(t,a)}while(!0);Up(),Wc.current=s,Qe=r,Ut!==null?e=0:(Xt=null,qt=0,e=Vt)}if(e!==0){if(e===2&&(r=Ad(t),r!==0&&(i=r,e=eh(t,r))),e===1)throw n=Va,us(t,0),xr(t,i),Mn(t,Lt()),n;if(e===6)xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y1(r)&&(e=Kc(t,i),e===2&&(s=Ad(t),s!==0&&(i=s,e=eh(t,s))),e===1))throw n=Va,us(t,0),xr(t,i),Mn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:qr(t,_n,ki);break;case 3:if(xr(t,i),(i&130023424)===i&&(e=qp+500-Lt(),10<e)){if(Rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Id(qr.bind(null,t,_n,ki),e);break}qr(t,_n,ki);break;case 4:if(xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$1(i/1960))-i,10<i){t.timeoutHandle=Id(qr.bind(null,t,_n,ki),i);break}qr(t,_n,ki);break;case 5:qr(t,_n,ki);break;default:throw Error(ie(329))}}}return Mn(t,Lt()),t.callbackNode===n?Ky.bind(null,t):null}function eh(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=Kc(t,e),t!==2&&(e=_n,_n=n,e!==null&&th(e)),t}function th(t){_n===null?_n=t:_n.push.apply(_n,t)}function Y1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~Yp,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function h0(t){if(Qe&6)throw Error(ie(327));po();var e=Rc(t,0);if(!(e&1))return Mn(t,Lt()),null;var n=Kc(t,e);if(t.tag!==0&&n===2){var i=Ad(t);i!==0&&(e=i,n=eh(t,i))}if(n===1)throw n=Va,us(t,0),xr(t,e),Mn(t,Lt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,_n,ki),Mn(t,Lt()),null}function Zp(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Eo=Lt()+500,vu&&Vr())}}function _s(t){Mr!==null&&Mr.tag===0&&!(Qe&6)&&po();var e=Qe;Qe|=1;var n=Yn.transition,i=nt;try{if(Yn.transition=null,nt=1,t)return t()}finally{nt=i,Yn.transition=n,Qe=e,!(Qe&6)&&Vr()}}function Qp(){Pn=to.current,pt(to)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,w1(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Lp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ic();break;case 3:So(),pt(yn),pt(un),zp();break;case 5:Vp(i);break;case 4:So();break;case 13:pt(yt);break;case 19:pt(yt);break;case 10:Fp(i.type._context);break;case 22:case 23:Qp()}n=n.return}if(Xt=t,Ut=t=Dr(t.current,null),qt=Pn=e,Vt=0,Va=null,Yp=Su=vs=0,_n=_a=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}is=null}return t}function $y(t,e){do{var n=Ut;try{if(Up(),uc.current=Gc,Hc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hc=!1}if(gs=0,Wt=Bt=Mt=null,ga=!1,Oa=0,$p.current=null,n===null||n.return===null){Vt=1,Va=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=e0(o);if(p!==null){p.flags&=-257,t0(p,o,a,s,e),p.mode&1&&Jg(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Jg(s,c,e),Jp();break e}l=Error(ie(426))}}else if(gt&&a.mode&1){var m=e0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),t0(m,o,a,s,e),Np(Mo(l,a));break e}}s=l=Mo(l,a),Vt!==4&&(Vt=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Dy(s,l,e);Kg(s,h);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Rr===null||!Rr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Ly(s,a,e);Kg(s,M);break e}}s=s.return}while(s!==null)}Zy(n)}catch(w){e=w,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function Yy(){var t=Wc.current;return Wc.current=Gc,t===null?Gc:t}function Jp(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Xt===null||!(vs&268435455)&&!(Su&268435455)||xr(Xt,qt)}function Kc(t,e){var n=Qe;Qe|=2;var i=Yy();(Xt!==t||qt!==e)&&(ki=null,us(t,e));do try{q1();break}catch(r){$y(t,r)}while(!0);if(Up(),Qe=n,Wc.current=i,Ut!==null)throw Error(ie(261));return Xt=null,qt=0,Vt}function q1(){for(;Ut!==null;)qy(Ut)}function Z1(){for(;Ut!==null&&!MT();)qy(Ut)}function qy(t){var e=Jy(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?Zy(t):Ut=e,$p.current=null}function Zy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W1(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ut=null;return}}else if(n=G1(n,e,Pn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Vt===0&&(Vt=5)}function qr(t,e,n){var i=nt,r=Yn.transition;try{Yn.transition=null,nt=1,Q1(t,e,n,i)}finally{Yn.transition=r,nt=i}return null}function Q1(t,e,n,i){do po();while(Mr!==null);if(Qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(LT(t,s),t===Xt&&(Ut=Xt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,eS(bc,function(){return po(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=nt;nt=1;var a=Qe;Qe|=4,$p.current=null,X1(t,n),jy(n,t),_1(Ld),Pc=!!Dd,Ld=Dd=null,t.current=n,K1(n),ET(),Qe=a,nt=o,Yn.transition=s}else t.current=n;if(wl&&(wl=!1,Mr=t,Xc=r),s=t.pendingLanes,s===0&&(Rr=null),AT(n.stateNode),Mn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jc)throw jc=!1,t=Qd,Qd=null,t;return Xc&1&&t.tag!==0&&po(),s=t.pendingLanes,s&1?t===Jd?xa++:(xa=0,Jd=t):xa=0,Vr(),null}function po(){if(Mr!==null){var t=Dx(Xc),e=Yn.transition,n=nt;try{if(Yn.transition=null,nt=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,Xc=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:va(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ee=d;else for(;Ee!==null;){u=Ee;var f=u.sibling,p=u.return;if(Hy(u),u===c){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=g;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yu(9,a)}}catch(w){Ct(a,a.return,w)}if(a===o){Ee=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ee=M;break e}Ee=a.return}}if(Qe=r,Vr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(du,t)}catch{}i=!0}return i}finally{nt=n,Yn.transition=e}}return!1}function p0(t,e,n){e=Mo(n,e),e=Dy(t,e,1),t=br(t,e,1),e=hn(),t!==null&&(Ya(t,1,e),Mn(t,e))}function Ct(t,e,n){if(t.tag===3)p0(t,t,n);else for(;e!==null;){if(e.tag===3){p0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=Mo(n,t),t=Ly(e,t,1),e=br(e,t,1),t=hn(),e!==null&&(Ya(e,1,t),Mn(e,t));break}}e=e.return}}function J1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(qt&n)===n&&(Vt===4||Vt===3&&(qt&130023424)===qt&&500>Lt()-qp?us(t,0):Yp|=n),Mn(t,e)}function Qy(t,e){e===0&&(t.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var n=hn();t=Qi(t,e),t!==null&&(Ya(t,e,n),Mn(t,n))}function ew(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qy(t,n)}function tw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Qy(t,n)}var Jy;Jy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,H1(t,e,n);xn=!!(t.flags&131072)}else xn=!1,gt&&e.flags&1048576&&iy(e,Oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;dc(t,e),t=e.pendingProps;var r=_o(e,un.current);ho(e,n),r=Gp(null,e,i,t,r,n);var s=Wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kp(e),r.updater=xu,e.stateNode=r,r._reactInternals=e,zd(e,i,t,n),e=Wd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Dp(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(dc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iw(i),t=oi(i,t),r){case 0:e=Gd(null,e,i,t,n);break e;case 1:e=r0(null,e,i,t,n);break e;case 11:e=n0(null,e,i,t,n);break e;case 14:e=i0(null,e,i,oi(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),r0(t,e,i,r,n);case 3:e:{if(Fy(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cy(t,e),Vc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(ie(423)),e),e=s0(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(ie(424)),e),e=s0(t,e,i,n,r);break e}else for(Ln=Cr(e.stateNode.containerInfo.firstChild),Nn=e,gt=!0,li=null,n=ay(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=Ji(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return uy(e),t===null&&kd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Nd(i,r)?o=null:s!==null&&Nd(i,s)&&(e.flags|=32),Uy(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&kd(e),null;case 13:return Oy(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),n0(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(kc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!yn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,n),r=qn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),i0(t,e,i,r,n);case 15:return Ny(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),dc(t,e),e.tag=1,Sn(i)?(t=!0,Uc(e)):t=!1,ho(e,n),Py(e,i,r),zd(e,i,r,n),Wd(null,e,i,!0,t,n);case 19:return ky(t,e,n);case 22:return Iy(t,e,n)}throw Error(ie(156,e.tag))};function eS(t,e){return Cx(t,e)}function nw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new nw(t,e,n,i)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iw(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xp)return 11;if(t===yp)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return fs(n.children,r,s,e);case _p:o=8,r|=8;break;case fd:return t=$n(12,n,e,r|2),t.elementType=fd,t.lanes=s,t;case dd:return t=$n(13,n,e,r),t.elementType=dd,t.lanes=s,t;case hd:return t=$n(19,n,e,r),t.elementType=hd,t.lanes=s,t;case ux:return Mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lx:o=10;break e;case cx:o=9;break e;case xp:o=11;break e;case yp:o=14;break e;case gr:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=$n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function fs(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function Mu(t,e,n,i){return t=$n(22,t,i,e),t.elementType=ux,t.lanes=n,t.stateNode={isHidden:!1},t}function ff(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function df(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ju(0),this.expirationTimes=ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ju(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,i,r,s,o,a,l){return t=new rw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function sw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tS(t){if(!t)return Ir;t=t._reactInternals;e:{if(Es(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Sn(n))return ty(t,n,e)}return e}function nS(t,e,n,i,r,s,o,a,l){return t=tm(n,i,!0,t,r,s,o,a,l),t.context=tS(null),n=t.current,i=hn(),r=Pr(n),s=Wi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ya(t,r,i),Mn(t,i),t}function Eu(t,e,n,i){var r=e.current,s=hn(),o=Pr(r);return n=tS(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(di(t,r,o,s),cc(t,r,o)),o}function $c(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function m0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){m0(t,e),(t=t.alternate)&&m0(t,e)}function ow(){return null}var iS=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}Tu.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Eu(t,e,null,null)};Tu.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Eu(null,t,null,null)}),e[Zi]=null}};function Tu(t){this._internalRoot=t}Tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ix();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Fx(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function g0(){}function aw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$c(o);s.call(c)}}var o=nS(e,i,t,0,null,!1,!1,"",g0);return t._reactRootContainer=o,t[Zi]=o.current,La(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=$c(l);a.call(c)}}var l=tm(t,0,!1,null,null,!1,!1,"",g0);return t._reactRootContainer=l,t[Zi]=l.current,La(t.nodeType===8?t.parentNode:t),_s(function(){Eu(e,l,n,i)}),l}function Au(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$c(o);a.call(l)}}Eu(e,o,t,r)}else o=aw(n,e,t,r,i);return $c(o)}Lx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Ep(e,n|1),Mn(e,Lt()),!(Qe&6)&&(Eo=Lt()+500,Vr()))}break;case 13:_s(function(){var i=Qi(t,1);if(i!==null){var r=hn();di(i,t,1,r)}}),nm(t,1)}};Tp=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=hn();di(e,t,134217728,n)}nm(t,134217728)}};Nx=function(t){if(t.tag===13){var e=Pr(t),n=Qi(t,e);if(n!==null){var i=hn();di(n,t,e,i)}nm(t,e)}};Ix=function(){return nt};Ux=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Ed=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gu(i);if(!r)throw Error(ie(90));dx(i),gd(i,r)}}}break;case"textarea":px(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};Sx=Zp;Mx=_s;var lw={usingClientEntryPoint:!1,Events:[Za,Ys,gu,xx,yx,Zp]},jo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cw={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wx(t),t===null?null:t.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||ow,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{du=Al.inject(cw),Ti=Al}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lw;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(ie(200));return sw(t,e,null,n)};kn.createRoot=function(t,e){if(!rm(t))throw Error(ie(299));var n=!1,i="",r=iS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,i,r),t[Zi]=e.current,La(t.nodeType===8?t.parentNode:t),new im(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=wx(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return _s(t)};kn.hydrate=function(t,e,n){if(!wu(e))throw Error(ie(200));return Au(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=iS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nS(e,null,t,1,n??null,r,!1,s,o),t[Zi]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tu(e)};kn.render=function(t,e,n){if(!wu(e))throw Error(ie(200));return Au(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!wu(t))throw Error(ie(40));return t._reactRootContainer?(_s(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[Zi]=null})}),!0):!1};kn.unstable_batchedUpdates=Zp;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Au(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function rS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rS)}catch(t){console.error(t)}}rS(),rx.exports=kn;var uw=rx.exports,v0=uw;cd.createRoot=v0.createRoot,cd.hydrateRoot=v0.hydrateRoot;var Yc=function(){return Yc=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Yc.apply(this,arguments)};function fw(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function dw(t,e,n,i){function r(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(d){o(d)}}function l(u){try{c(i.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(t,[])).next())})}function hw(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(i=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],r=0}finally{i=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function nh(t,e,n){for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}function pw(){return{current:0,next:function(){return++this.current}}}function mw(t){var e=pw(),n={};return{add:function(i,r){var s=r??"".concat(e.next(),"_").concat(t);return n[s]=i,s},resolve:function(i,r,s){var o=n[i];o&&(s(r)?o.resolve(r):o.reject(r),n[i]=null)}}}function gw(t,e,n){var i=mw(n);return e(function(r){if(!(!r.detail||!r.detail.data||typeof r.detail.data!="object")&&"request_id"in r.detail.data){var s=r.detail.data,o=s.request_id,a=fw(s,["request_id"]);o&&i.resolve(o,a,function(l){return!("error_type"in l)})}}),function(s,o){return o===void 0&&(o={}),new Promise(function(a,l){var c=i.add({resolve:a,reject:l},o.request_id);t(s,Yc(Yc({},o),{request_id:c}))})}}function vw(){var t=36,e=2,n=3;return Math.random().toString(t).substring(e,e+n)}var Ja=typeof window<"u",sa=!!(Ja&&window.AndroidBridge),no=!!(Ja&&window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.VKWebAppClose),hf=!!(Ja&&window.ReactNativeWebView&&typeof window.ReactNativeWebView.postMessage=="function"),ds=Ja&&!sa&&!no,_w=ds&&/(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),xw=ds&&!_w,_0=ds?"message":"VKWebAppEvent",yw=nh(["VKWebAppInit","VKWebAppGetCommunityAuthToken","VKWebAppAddToCommunity","VKWebAppAddToHomeScreenInfo","VKWebAppClose","VKWebAppCopyText","VKWebAppCreateHash","VKWebAppGetUserInfo","VKWebAppSetLocation","VKWebAppSendToClient","VKWebAppGetClientVersion","VKWebAppGetPhoneNumber","VKWebAppGetEmail","VKWebAppGetGroupInfo","VKWebAppGetGeodata","VKWebAppGetCommunityToken","VKWebAppGetConfig","VKWebAppGetLaunchParams","VKWebAppSetTitle","VKWebAppGetAuthToken","VKWebAppCallAPIMethod","VKWebAppJoinGroup","VKWebAppLeaveGroup","VKWebAppAllowMessagesFromGroup","VKWebAppDenyNotifications","VKWebAppAllowNotifications","VKWebAppOpenPayForm","VKWebAppOpenApp","VKWebAppShare","VKWebAppShowWallPostBox","VKWebAppScroll","VKWebAppShowOrderBox","VKWebAppShowLeaderBoardBox","VKWebAppShowInviteBox","VKWebAppShowRequestBox","VKWebAppAddToFavorites","VKWebAppShowStoryBox","VKWebAppStorageGet","VKWebAppStorageGetKeys","VKWebAppStorageSet","VKWebAppFlashGetInfo","VKWebAppSubscribeStoryApp","VKWebAppOpenWallPost","VKWebAppCheckAllowedScopes","VKWebAppCheckBannerAd","VKWebAppHideBannerAd","VKWebAppShowBannerAd","VKWebAppCheckNativeAds","VKWebAppShowNativeAds","VKWebAppRetargetingPixel","VKWebAppConversionHit","VKWebAppShowSubscriptionBox","VKWebAppCheckSurvey","VKWebAppShowSurvey","VKWebAppScrollTop","VKWebAppScrollTopStart","VKWebAppScrollTopStop","VKWebAppShowSlidesSheet","VKWebAppTranslate","VKWebAppRecommend","VKWebAppAddToProfile","VKWebAppGetFriends"],xw?["VKWebAppResizeWindow","VKWebAppAddToMenu","VKWebAppShowInstallPushBox","VKWebAppShowCommunityWidgetPreviewBox","VKWebAppCallStart","VKWebAppCallJoin","VKWebAppCallGetStatus"]:["VKWebAppShowImages"]),Rs,Xo=Ja?window.AndroidBridge:void 0,Gr=no?window.webkit.messageHandlers:void 0,pf=ds?parent:void 0;function Sw(t){var e=void 0,n=[],i=vw();function r(m,h){Xo&&Xo[m]?Xo[m](JSON.stringify(h)):Gr&&Gr[m]&&typeof Gr[m].postMessage=="function"?Gr[m].postMessage(h):hf?window.ReactNativeWebView.postMessage(JSON.stringify({handler:m,params:h})):pf&&typeof pf.postMessage=="function"&&pf.postMessage({handler:m,params:h,type:"vk-connect",webFrameId:e,connectVersion:t},"*")}function s(m){n.push(m)}function o(m){var h=n.indexOf(m);h>-1&&n.splice(h,1)}function a(m){return sa?!!(Xo&&typeof Xo[m]=="function"):no?!!(Gr&&Gr[m]&&typeof Gr[m].postMessage=="function"):ds?yw.includes(m):!1}function l(m){return console.warn("bridge.supports method is deprecated. Use bridge.supportsAsync instead."),a(m)}function c(){return no||sa}function u(){return ds&&window.parent!==window}function d(){return c()||u()}function f(){return!d()}function p(m){if(no||sa)return nh([],n).map(function(w){return w.call(null,m)});var h=m==null?void 0:m.data;if(!(!ds||!h)){if(hf&&typeof h=="string")try{h=JSON.parse(h)}catch{}var g=h.type,_=h.data,M=h.frameId;if(g){if(g==="VKWebAppSettings"){e=M;return}nh([],n).map(function(w){return w({detail:{type:g,data:_}})})}}}hf&&/(android)/i.test(navigator.userAgent)?document.addEventListener(_0,p):typeof window<"u"&&"addEventListener"in window&&window.addEventListener(_0,p);var v=gw(r,s,i);function y(m){return dw(this,void 0,void 0,function(){var h;return hw(this,function(g){switch(g.label){case 0:if(sa||no)return[2,a(m)];if(Rs)return[2,Rs.has(m)];g.label=1;case 1:return g.trys.push([1,3,,4]),[4,v("SetSupportedHandlers")];case 2:return h=g.sent(),Rs=new Set(h.supportedHandlers),[3,4];case 3:return g.sent(),Rs=new Set(["VKWebAppInit"]),[3,4];case 4:return[2,Rs.has(m)]}})})}return s(function(m){if(m.detail)switch(m.detail.type){case"SetSupportedHandlers":Rs=new Set(m.detail.data.supportedHandlers)}}),{send:v,sendPromise:v,subscribe:s,unsubscribe:o,supports:l,supportsAsync:y,isWebView:c,isIframe:u,isEmbedded:d,isStandalone:f}}var Mw="2.15.11",x0;(function(t){t.REWARD="reward",t.INTERSTITIAL="interstitial"})(x0||(x0={}));var y0;(function(t){t.RESIZE="resize",t.OVERLAY="overlay"})(y0||(y0={}));var S0;(function(t){t.TOP="top",t.BOTTOM="bottom"})(S0||(S0={}));var M0;(function(t){t.LEFT="left",t.RIGHT="right",t.CENTER="center"})(M0||(M0={}));var E0;(function(t){t.COMPACT="compact",t.REGULAR="regular"})(E0||(E0={}));var T0;(function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"})(T0||(T0={}));var w0;(function(t){t.CAMERA="camera",t.LOCATION="location",t.PHOTO="photo"})(w0||(w0={}));var A0;(function(t){t.RU="ru",t.UK="uk",t.UA="ua",t.EN="en",t.BE="be",t.KZ="kz",t.PT="pt",t.ES="es"})(A0||(A0={}));var C0;(function(t){t.ADMIN="admin",t.EDITOR="editor",t.MEMBER="member",t.MODER="moder",t.NONE="none"})(C0||(C0={}));var b0;(function(t){t.DESKTOP_WEB="desktop_web",t.DESKTOP_WEB_MESSENGER="desktop_web_messenger",t.DESKTOP_APP_MESSENGER="desktop_app_messenger",t.MOBILE_WEB="mobile_web",t.MOBILE_ANDROID="mobile_android",t.MOBILE_ANDROID_MESSENGER="mobile_android_messenger",t.MOBILE_IPHONE="mobile_iphone",t.MOBILE_IPHONE_MESSENGER="mobile_iphone_messenger",t.MOBILE_IPAD="mobile_ipad"})(b0||(b0={}));var ss=Sw(Mw);function sS(t,e,n){return Math.max(t,Math.min(e,n))}class Ew{advance(e){var a;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,c,u){return(1-u)*l+u*c}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=e;const l=sS(0,this.currentTime/this.duration,1);n=l>=1;const c=n?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,n),n&&this.stop()}stop(){this.isRunning=!1}fromTo(e,n,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=n,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class Tw{constructor({wrapper:e,content:n,autoResize:i=!0,debounce:r=250}={}){Li(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Li(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Li(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=n,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){s.apply(c,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,n;(e=this.wrapperResizeObserver)==null||e.disconnect(),(n=this.contentResizeObserver)==null||n.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class oS{constructor(){this.events={}}emit(e,...n){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...n)}on(e,n){var i;return(i=this.events[e])!=null&&i.push(n)||(this.events[e]=[n]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>n!==s)}}off(e,n){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>n!==r)}destroy(){this.events={}}}const R0=100/6;class ww{constructor(e,{wheelMultiplier:n=1,touchMultiplier:i=1}){Li(this,"onTouchStart",e=>{const{clientX:n,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=n,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Li(this,"onTouchMove",e=>{const{clientX:n,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(n-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});Li(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Li(this,"onWheel",e=>{let{deltaX:n,deltaY:i,deltaMode:r}=e;n*=r===1?R0:r===2?this.windowWidth:1,i*=r===1?R0:r===2?this.windowHeight:1,n*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:e})});Li(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=n,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new oS,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,n){return this.emitter.on(e,n)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Aw{constructor({wrapper:e=window,content:n=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=_=>Math.min(1,1.001-Math.pow(2,-10*_)),lerp:d=!c&&.1,infinite:f=!1,orientation:p="vertical",gestureOrientation:v="vertical",touchMultiplier:y=1,wheelMultiplier:m=1,autoResize:h=!0,__experimental__naiveDimensions:g=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:_,deltaY:M,event:w})=>{if(w.ctrlKey)return;const T=w.type.includes("touch"),C=w.type.includes("wheel");if(this.options.syncTouch&&T&&w.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const x=_===0&&M===0,b=this.options.gestureOrientation==="vertical"&&M===0||this.options.gestureOrientation==="horizontal"&&_===0;if(x||b)return;let P=w.composedPath();if(P=P.slice(0,P.indexOf(this.rootElement)),P.find(K=>{var I,G,F,k,X;return((I=K.hasAttribute)===null||I===void 0?void 0:I.call(K,"data-lenis-prevent"))||T&&((G=K.hasAttribute)===null||G===void 0?void 0:G.call(K,"data-lenis-prevent-touch"))||C&&((F=K.hasAttribute)===null||F===void 0?void 0:F.call(K,"data-lenis-prevent-wheel"))||((k=K.classList)===null||k===void 0?void 0:k.contains("lenis"))&&!(!((X=K.classList)===null||X===void 0)&&X.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void w.preventDefault();if(this.isSmooth=this.options.syncTouch&&T||this.options.smoothWheel&&C,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();w.preventDefault();let R=M;this.options.gestureOrientation==="both"?R=Math.abs(M)>Math.abs(_)?M:_:this.options.gestureOrientation==="horizontal"&&(R=_);const O=T&&this.options.syncTouch,j=T&&w.type==="touchend"&&Math.abs(R)>5;j&&(R=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+R,Object.assign({programmatic:!1},O?{lerp:j?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const _=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-_),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:n,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:u,lerp:d,infinite:f,gestureOrientation:v,orientation:p,touchMultiplier:y,wheelMultiplier:m,autoResize:h,__experimental__naiveDimensions:g},this.animate=new Ew,this.emitter=new oS,this.dimensions=new Tw({wrapper:e,content:n,autoResize:h}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new ww(r,{touchMultiplier:y,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,n){return this.emitter.on(e,n)}off(e,n){return this.emitter.off(e,n)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const n=e-(this.time||e);this.time=e,this.animate.advance(.001*n)}scrollTo(e,{offset:n=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let d;if(typeof e=="string"?d=document.querySelector(e):e!=null&&e.nodeType&&(d=e),d){if(this.options.wrapper!==window){const p=this.options.wrapper.getBoundingClientRect();n-=this.isHorizontal?p.left:p.top}const f=d.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=n,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=sS(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(d,f)=>{this.isScrolling=!0,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,n=this.limit,(e%n+n)%n):this.animatedScroll;var e,n}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,n){this.rootElement.classList.toggle(e,n),this.emitter.emit("className change",this)}}const sm=ne.createContext({});function om(t){const e=ne.useRef(null);return e.current===null&&(e.current=t()),e.current}const Cu=ne.createContext(null),am=ne.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class Cw extends ne.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function bw({children:t,isPresent:e}){const n=ne.useId(),i=ne.useRef(null),r=ne.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ne.useContext(am);return ne.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),L.jsx(Cw,{isPresent:e,childRef:i,sizeRef:r,children:ne.cloneElement(t,{ref:i})})}const Rw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=om(Pw),l=ne.useId(),c=ne.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),u=ne.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),c]:[n,c]);return ne.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),ne.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=L.jsx(bw,{isPresent:n,children:t})),L.jsx(Cu.Provider,{value:u,children:t})};function Pw(){return new Map}function aS(t=!0){const e=ne.useContext(Cu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ne.useId();ne.useEffect(()=>{t&&r(s)},[t]);const o=ne.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Cl=t=>t.key||"";function P0(t){const e=[];return ne.Children.forEach(t,n=>{ne.isValidElement(n)&&e.push(n)}),e}const lm=typeof window<"u",lS=lm?ne.useLayoutEffect:ne.useEffect,cS=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=aS(o),c=ne.useMemo(()=>P0(t),[t]),u=o&&!a?[]:c.map(Cl),d=ne.useRef(!0),f=ne.useRef(c),p=om(()=>new Map),[v,y]=ne.useState(c),[m,h]=ne.useState(c);lS(()=>{d.current=!1,f.current=c;for(let M=0;M<m.length;M++){const w=Cl(m[M]);u.includes(w)?p.delete(w):p.get(w)!==!0&&p.set(w,!1)}},[m,u.length,u.join("-")]);const g=[];if(c!==v){let M=[...c];for(let w=0;w<m.length;w++){const T=m[w],C=Cl(T);u.includes(C)||(M.splice(w,0,T),g.push(T))}s==="wait"&&g.length&&(M=g),h(P0(M)),y(c);return}const{forceRender:_}=ne.useContext(sm);return L.jsx(L.Fragment,{children:m.map(M=>{const w=Cl(M),T=o&&!a?!1:c===m||u.includes(w),C=()=>{if(p.has(w))p.set(w,!0);else return;let x=!0;p.forEach(b=>{b||(x=!1)}),x&&(_==null||_(),h(f.current),o&&(l==null||l()),i&&i())};return L.jsx(Rw,{isPresent:T,initial:!d.current||n?void 0:!1,custom:T?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:T?void 0:C,children:M},w)})})},In=t=>t;let uS=In;function cm(t){let e;return()=>(e===void 0&&(e=t()),e)}const To=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},ji=t=>t*1e3,Xi=t=>t/1e3,Dw={useManualTiming:!1};function Lw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const bl=["read","resolveKeyframes","update","preRender","render","postRender"],Nw=40;function fS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=bl.reduce((h,g)=>(h[g]=Lw(s),h),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,Nw),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},v=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:bl.reduce((h,g)=>{const _=o[g];return h[g]=(M,w=!1,T=!1)=>(n||v(),_.schedule(M,w,T)),h},{}),cancel:h=>{for(let g=0;g<bl.length;g++)o[bl[g]].cancel(h)},state:r,steps:o}}const{schedule:mt,cancel:Ur,state:$t,steps:mf}=fS(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),dS=ne.createContext({strict:!1}),D0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},wo={};for(const t in D0)wo[t]={isEnabled:e=>D0[t].some(n=>!!e[n])};function Iw(t){for(const e in t)wo[e]={...wo[e],...t[e]}}const Uw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Uw.has(t)}let hS=t=>!qc(t);function Fw(t){t&&(hS=e=>e.startsWith("on")?!qc(e):t(e))}try{Fw(require("@emotion/is-prop-valid").default)}catch{}function Ow(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(hS(r)||n===!0&&qc(r)||!e&&!qc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function kw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const bu=ne.createContext({});function za(t){return typeof t=="string"||Array.isArray(t)}function Ru(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const um=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fm=["initial",...um];function Pu(t){return Ru(t.animate)||fm.some(e=>za(t[e]))}function pS(t){return!!(Pu(t)||t.variants)}function Bw(t,e){if(Pu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||za(n)?n:void 0,animate:za(i)?i:void 0}}return t.inherit!==!1?e:{}}function Vw(t){const{initial:e,animate:n}=Bw(t,ne.useContext(bu));return ne.useMemo(()=>({initial:e,animate:n}),[L0(e),L0(n)])}function L0(t){return Array.isArray(t)?t.join(" "):t}const zw=Symbol.for("motionComponentSymbol");function io(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Hw(t,e,n){return ne.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):io(n)&&(n.current=i))},[e])}const dm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Gw="framerAppearId",mS="data-"+dm(Gw),{schedule:hm}=fS(queueMicrotask,!1),gS=ne.createContext({});function Ww(t,e,n,i,r){var s,o;const{visualElement:a}=ne.useContext(bu),l=ne.useContext(dS),c=ne.useContext(Cu),u=ne.useContext(am).reducedMotion,d=ne.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,p=ne.useContext(gS);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&jw(d.current,n,r,p);const v=ne.useRef(!1);ne.useInsertionEffect(()=>{f&&v.current&&f.update(n,c)});const y=n[mS],m=ne.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,y)));return lS(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),hm.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),ne.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,y)}),m.current=!1))}),f}function jw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:vS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&io(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function vS(t){if(t)return t.options.allowProjection!==!1?t.projection:vS(t.parent)}function Xw({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&Iw(t);function a(c,u){let d;const f={...ne.useContext(am),...c,layoutId:Kw(c)},{isStatic:p}=f,v=Vw(c),y=i(c,p);if(!p&&lm){$w();const m=Yw(f);d=m.MeasureLayout,v.visualElement=Ww(r,y,f,e,m.ProjectionNode)}return L.jsxs(bu.Provider,{value:v,children:[d&&v.visualElement?L.jsx(d,{visualElement:v.visualElement,...f}):null,n(r,c,Hw(y,v.visualElement,u),y,p,v.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=ne.forwardRef(a);return l[zw]=r,l}function Kw({layoutId:t}){const e=ne.useContext(sm).id;return e&&t!==void 0?e+"-"+t:t}function $w(t,e){ne.useContext(dS).strict}function Yw(t){const{drag:e,layout:n}=wo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const qw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function pm(t){return typeof t!="string"||t.includes("-")?!1:!!(qw.indexOf(t)>-1||/[A-Z]/u.test(t))}function N0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function mm(t,e,n,i){if(typeof e=="function"){const[r,s]=N0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=N0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const ih=t=>Array.isArray(t),Zw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Qw=t=>ih(t)?t[t.length-1]||0:t,ln=t=>!!(t&&t.getVelocity);function gc(t){const e=ln(t)?t.get():t;return Zw(e)?e.toValue():e}function Jw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:eA(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const _S=t=>(e,n)=>{const i=ne.useContext(bu),r=ne.useContext(Cu),s=()=>Jw(t,e,i,r);return n?s():om(s)};function eA(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=gc(s[f]);let{initial:o,animate:a}=t;const l=Pu(t),c=pS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Ru(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const v=mm(t,f[p]);if(v){const{transitionEnd:y,transition:m,...h}=v;for(const g in h){let _=h[g];if(Array.isArray(_)){const M=u?_.length-1:0;_=_[M]}_!==null&&(r[g]=_)}for(const g in y)r[g]=y[g]}}}return r}const Io=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ts=new Set(Io),xS=t=>e=>typeof e=="string"&&e.startsWith(t),yS=xS("--"),tA=xS("var(--"),gm=t=>tA(t)?nA.test(t.split("/*")[0].trim()):!1,nA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,SS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,er=(t,e,n)=>n>e?e:n<t?t:n,Uo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ha={...Uo,transform:t=>er(0,1,t)},Rl={...Uo,default:1},el=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),mr=el("deg"),Ai=el("%"),be=el("px"),iA=el("vh"),rA=el("vw"),I0={...Ai,parse:t=>Ai.parse(t)/100,transform:t=>Ai.transform(t*100)},sA={borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,backgroundPositionX:be,backgroundPositionY:be},oA={rotate:mr,rotateX:mr,rotateY:mr,rotateZ:mr,scale:Rl,scaleX:Rl,scaleY:Rl,scaleZ:Rl,skew:mr,skewX:mr,skewY:mr,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:Ha,originX:I0,originY:I0,originZ:be},U0={...Uo,transform:Math.round},vm={...sA,...oA,zIndex:U0,size:be,fillOpacity:Ha,strokeOpacity:Ha,numOctaves:U0},aA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lA=Io.length;function cA(t,e,n){let i="",r=!0;for(let s=0;s<lA;s++){const o=Io[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=SS(a,vm[o]);if(!l){r=!1;const u=aA[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function _m(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Ts.has(l)){o=!0;continue}else if(yS(l)){r[l]=c;continue}else{const u=SS(c,vm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=cA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const uA={offset:"stroke-dashoffset",array:"stroke-dasharray"},fA={offset:"strokeDashoffset",array:"strokeDasharray"};function dA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?uA:fA;t[s.offset]=be.transform(-i);const o=be.transform(e),a=be.transform(n);t[s.array]=`${o} ${a}`}function F0(t,e,n){return typeof t=="string"?t:be.transform(e+n*t)}function hA(t,e,n){const i=F0(e,t.x,t.width),r=F0(n,t.y,t.height);return`${i} ${r}`}function xm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(_m(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:v}=t;f.transform&&(v&&(p.transform=f.transform),delete f.transform),v&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=hA(v,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&dA(f,o,a,l,!1)}const ym=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),MS=()=>({...ym(),attrs:{}}),Sm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ES(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const TS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function wS(t,e,n,i){ES(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(TS.has(r)?r:dm(r),e.attrs[r])}const Zc={};function pA(t){Object.assign(Zc,t)}function AS(t,{layout:e,layoutId:n}){return Ts.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Zc[t]||t==="opacity")}function Mm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(ln(r[o])||e.style&&ln(e.style[o])||AS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function CS(t,e,n){const i=Mm(t,e,n);for(const r in t)if(ln(t[r])||ln(e[r])){const s=Io.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function mA(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const O0=["x","y","width","height","cx","cy","r"],gA={useVisualState:_S({scrapeMotionValuesFromProps:CS,createRenderState:MS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Ts.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<O0.length;a++){const l=O0[a];t[l]!==e[l]&&(o=!0)}o&&mt.read(()=>{mA(n,i),mt.render(()=>{xm(i,r,Sm(n.tagName),t.transformTemplate),wS(n,i)})})}})},vA={useVisualState:_S({scrapeMotionValuesFromProps:Mm,createRenderState:ym})};function bS(t,e,n){for(const i in e)!ln(e[i])&&!AS(i,n)&&(t[i]=e[i])}function _A({transformTemplate:t},e){return ne.useMemo(()=>{const n=ym();return _m(n,e,t),Object.assign({},n.vars,n.style)},[e])}function xA(t,e){const n=t.style||{},i={};return bS(i,n,t),Object.assign(i,_A(t,e)),i}function yA(t,e){const n={},i=xA(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function SA(t,e,n,i){const r=ne.useMemo(()=>{const s=MS();return xm(s,e,Sm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};bS(s,t.style,t),r.style={...s,...r.style}}return r}function MA(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(pm(n)?SA:yA)(i,s,o,n),c=Ow(i,typeof n=="string",t),u=n!==ne.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=ne.useMemo(()=>ln(d)?d.get():d,[d]);return ne.createElement(n,{...u,children:f})}}function EA(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...pm(i)?gA:vA,preloadedFeatures:t,useRender:MA(r),createVisualElement:e,Component:i};return Xw(o)}}function RS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Du(t,e,n){const i=t.getProps();return mm(i,e,n!==void 0?n:i.custom,t)}const TA=cm(()=>window.ScrollTimeline!==void 0);class wA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(TA()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class AA extends wA{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Em(t,e){return t?t[e]||t.default||t:void 0}const rh=2e4;function PS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<rh;)e+=n,i=t.next(e);return e>=rh?1/0:e}function Tm(t){return typeof t=="function"}function k0(t,e){t.timeline=e,t.onfinish=null}const wm=t=>Array.isArray(t)&&typeof t[0]=="number",CA={linearEasing:void 0};function bA(t,e){const n=cm(t);return()=>{var i;return(i=CA[e])!==null&&i!==void 0?i:n()}}const Qc=bA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),DS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(To(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function LS(t){return!!(typeof t=="function"&&Qc()||!t||typeof t=="string"&&(t in sh||Qc())||wm(t)||Array.isArray(t)&&t.every(LS))}const oa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,sh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oa([0,.65,.55,1]),circOut:oa([.55,0,1,.45]),backIn:oa([.31,.01,.66,-.59]),backOut:oa([.33,1.53,.69,.99])};function NS(t,e){if(t)return typeof t=="function"&&Qc()?DS(t,e):wm(t)?oa(t):Array.isArray(t)?t.map(n=>NS(n,e)||sh.easeOut):sh[t]}const si={x:!1,y:!1};function IS(){return si.x||si.y}function RA(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function US(t,e){const n=RA(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function B0(t){return e=>{e.pointerType==="touch"||IS()||t(e)}}function PA(t,e,n={}){const[i,r,s]=US(t,n),o=B0(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=B0(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const FS=(t,e)=>e?t===e?!0:FS(t,e.parentElement):!1,Am=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,DA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LA(t){return DA.has(t.tagName)||t.tabIndex!==-1}const aa=new WeakSet;function V0(t){return e=>{e.key==="Enter"&&t(e)}}function gf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const NA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=V0(()=>{if(aa.has(n))return;gf(n,"down");const r=V0(()=>{gf(n,"up")}),s=()=>gf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function z0(t){return Am(t)&&!IS()}function IA(t,e,n={}){const[i,r,s]=US(t,n),o=a=>{const l=a.currentTarget;if(!z0(a)||aa.has(l))return;aa.add(l);const c=e(a),u=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!z0(p)||!aa.has(l))&&(aa.delete(l),typeof c=="function"&&c(p,{success:v}))},d=p=>{u(p,n.useGlobalTarget||FS(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!LA(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>NA(c,r),r)}),s}function UA(t){return t==="x"||t==="y"?si[t]?null:(si[t]=!0,()=>{si[t]=!1}):si.x||si.y?null:(si.x=si.y=!0,()=>{si.x=si.y=!1})}const OS=new Set(["width","height","top","left","right","bottom",...Io]);let vc;function FA(){vc=void 0}const Ci={now:()=>(vc===void 0&&Ci.set($t.isProcessing||Dw.useManualTiming?$t.timestamp:performance.now()),vc),set:t=>{vc=t,queueMicrotask(FA)}};function Cm(t,e){t.indexOf(e)===-1&&t.push(e)}function bm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Rm{constructor(){this.subscriptions=[]}add(e){return Cm(this.subscriptions,e),()=>bm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function kS(t,e){return e?t*(1e3/e):0}const H0=30,OA=t=>!isNaN(parseFloat(t));class kA{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ci.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ci.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=OA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Rm);const i=this.events[e].add(n);return e==="change"?()=>{i(),mt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ci.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>H0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,H0);return kS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ga(t,e){return new kA(t,e)}function BA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ga(n))}function VA(t,e){const n=Du(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Qw(s[o]);BA(t,o,a)}}function zA(t){return!!(ln(t)&&t.add)}function oh(t,e){const n=t.getValue("willChange");if(zA(n))return n.add(e)}function BS(t){return t.props[mS]}const VS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,HA=1e-7,GA=12;function WA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=VS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>HA&&++a<GA);return o}function tl(t,e,n,i){if(t===e&&n===i)return In;const r=s=>WA(s,0,1,t,n);return s=>s===0||s===1?s:VS(r(s),e,i)}const zS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,HS=t=>e=>1-t(1-e),GS=tl(.33,1.53,.69,.99),Pm=HS(GS),WS=zS(Pm),jS=t=>(t*=2)<1?.5*Pm(t):.5*(2-Math.pow(2,-10*(t-1))),Dm=t=>1-Math.sin(Math.acos(t)),XS=HS(Dm),KS=zS(Dm),$S=t=>/^0[^.\s]+$/u.test(t);function jA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||$S(t):!0}const ya=t=>Math.round(t*1e5)/1e5,Lm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function XA(t){return t==null}const KA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Nm=(t,e)=>n=>!!(typeof n=="string"&&KA.test(n)&&n.startsWith(t)||e&&!XA(n)&&Object.prototype.hasOwnProperty.call(n,e)),YS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Lm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},$A=t=>er(0,255,t),vf={...Uo,transform:t=>Math.round($A(t))},os={test:Nm("rgb","red"),parse:YS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+vf.transform(t)+", "+vf.transform(e)+", "+vf.transform(n)+", "+ya(Ha.transform(i))+")"};function YA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ah={test:Nm("#"),parse:YA,transform:os.transform},ro={test:Nm("hsl","hue"),parse:YS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ai.transform(ya(e))+", "+Ai.transform(ya(n))+", "+ya(Ha.transform(i))+")"},sn={test:t=>os.test(t)||ah.test(t)||ro.test(t),parse:t=>os.test(t)?os.parse(t):ro.test(t)?ro.parse(t):ah.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?os.transform(t):ro.transform(t)},qA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ZA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Lm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(qA))===null||n===void 0?void 0:n.length)||0)>0}const qS="number",ZS="color",QA="var",JA="var(",G0="${}",eC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(eC,l=>(sn.test(l)?(i.color.push(s),r.push(ZS),n.push(sn.parse(l))):l.startsWith(JA)?(i.var.push(s),r.push(QA),n.push(l)):(i.number.push(s),r.push(qS),n.push(parseFloat(l))),++s,G0)).split(G0);return{values:n,split:a,indexes:i,types:r}}function QS(t){return Wa(t).values}function JS(t){const{split:e,types:n}=Wa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===qS?s+=ya(r[o]):a===ZS?s+=sn.transform(r[o]):s+=r[o]}return s}}const tC=t=>typeof t=="number"?0:t;function nC(t){const e=QS(t);return JS(t)(e.map(tC))}const Fr={test:ZA,parse:QS,createTransformer:JS,getAnimatableNone:nC},iC=new Set(["brightness","contrast","saturate","opacity"]);function rC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Lm)||[];if(!i)return t;const r=n.replace(i,"");let s=iC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const sC=/\b([a-z-]*)\(.*?\)/gu,lh={...Fr,getAnimatableNone:t=>{const e=t.match(sC);return e?e.map(rC).join(" "):t}},oC={...vm,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:lh,WebkitFilter:lh},Im=t=>oC[t];function eM(t,e){let n=Im(t);return n!==lh&&(n=Fr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const aC=new Set(["auto","none","0"]);function lC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!aC.has(s)&&Wa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=eM(n,r)}const W0=t=>t===Uo||t===be,j0=(t,e)=>parseFloat(t.split(", ")[e]),X0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return j0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?j0(s[1],t):0}},cC=new Set(["x","y","z"]),uC=Io.filter(t=>!cC.has(t));function fC(t){const e=[];return uC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Ao={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:X0(4,13),y:X0(5,14)};Ao.translateX=Ao.x;Ao.translateY=Ao.y;const hs=new Set;let ch=!1,uh=!1;function tM(){if(uh){const t=Array.from(hs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=fC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}uh=!1,ch=!1,hs.forEach(t=>t.complete()),hs.clear()}function nM(){hs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(uh=!0)})}function dC(){nM(),tM()}class Um{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(hs.add(this),ch||(ch=!0,mt.read(nM),mt.resolveKeyframes(tM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),hs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,hs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const iM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),hC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pC(t){const e=hC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function rM(t,e,n=1){const[i,r]=pC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return iM(o)?parseFloat(o):o}return gm(r)?rM(r,e,n+1):r}const sM=t=>e=>e.test(t),mC={test:t=>t==="auto",parse:t=>t},oM=[Uo,be,Ai,mr,rA,iA,mC],K0=t=>oM.find(sM(t));class aM extends Um{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),gm(c))){const u=rM(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!OS.has(i)||e.length!==2)return;const[r,s]=e,o=K0(r),a=K0(s);if(o!==a)if(W0(o)&&W0(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)jA(e[r])&&i.push(r);i.length&&lC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ao[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Ao[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const $0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Fr.test(t)||t==="0")&&!t.startsWith("url("));function gC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function vC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=$0(r,e),a=$0(s,e);return!o||!a?!1:gC(t)||(n==="spring"||Tm(n))&&i}const _C=t=>t!==null;function Lu(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(_C),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const xC=40;class lM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ci.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>xC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&dC(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ci.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!vC(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Lu(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const St=(t,e,n)=>t+(e-t)*n;function _f(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function yC({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=_f(l,a,t+1/3),s=_f(l,a,t),o=_f(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Jc(t,e){return n=>n>0?e:t}const xf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},SC=[ah,os,ro],MC=t=>SC.find(e=>e.test(t));function Y0(t){const e=MC(t);if(!e)return!1;let n=e.parse(t);return e===ro&&(n=yC(n)),n}const q0=(t,e)=>{const n=Y0(t),i=Y0(e);if(!n||!i)return Jc(t,e);const r={...n};return s=>(r.red=xf(n.red,i.red,s),r.green=xf(n.green,i.green,s),r.blue=xf(n.blue,i.blue,s),r.alpha=St(n.alpha,i.alpha,s),os.transform(r))},EC=(t,e)=>n=>e(t(n)),nl=(...t)=>t.reduce(EC),fh=new Set(["none","hidden"]);function TC(t,e){return fh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function wC(t,e){return n=>St(t,e,n)}function Fm(t){return typeof t=="number"?wC:typeof t=="string"?gm(t)?Jc:sn.test(t)?q0:bC:Array.isArray(t)?cM:typeof t=="object"?sn.test(t)?q0:AC:Jc}function cM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Fm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function AC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Fm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function CC(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const bC=(t,e)=>{const n=Fr.createTransformer(e),i=Wa(t),r=Wa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?fh.has(t)&&!r.values.length||fh.has(e)&&!i.values.length?TC(t,e):nl(cM(CC(i,r),r.values),n):Jc(t,e)};function uM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?St(t,e,n):Fm(t)(t,e)}const RC=5;function fM(t,e,n){const i=Math.max(e-RC,0);return kS(n-t(i),e-i)}const At={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},yf=.001;function PC({duration:t=At.duration,bounce:e=At.bounce,velocity:n=At.velocity,mass:i=At.mass}){let r,s,o=1-e;o=er(At.minDamping,At.maxDamping,o),t=er(At.minDuration,At.maxDuration,Xi(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=dh(c,o),v=Math.exp(-d);return yf-f/p*v},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-d),y=dh(Math.pow(c,2),o);return(-r(c)+yf>0?-1:1)*((f-p)*v)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-yf+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=LC(r,s,a);if(t=ji(t),isNaN(l))return{stiffness:At.stiffness,damping:At.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const DC=12;function LC(t,e,n){let i=n;for(let r=1;r<DC;r++)i=i-t(i)/e(i);return i}function dh(t,e){return t*Math.sqrt(1-e*e)}const NC=["duration","bounce"],IC=["stiffness","damping","mass"];function Z0(t,e){return e.some(n=>t[n]!==void 0)}function UC(t){let e={velocity:At.velocity,stiffness:At.stiffness,damping:At.damping,mass:At.mass,isResolvedFromDuration:!1,...t};if(!Z0(t,IC)&&Z0(t,NC))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*er(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:At.mass,stiffness:r,damping:s}}else{const n=PC(t);e={...e,...n,mass:At.mass},e.isResolvedFromDuration=!0}return e}function dM(t=At.visualDuration,e=At.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=UC({...n,velocity:-Xi(n.velocity||0)}),v=f||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=Xi(Math.sqrt(l/u)),g=Math.abs(m)<5;i||(i=g?At.restSpeed.granular:At.restSpeed.default),r||(r=g?At.restDelta.granular:At.restDelta.default);let _;if(y<1){const w=dh(h,y);_=T=>{const C=Math.exp(-y*h*T);return o-C*((v+y*h*m)/w*Math.sin(w*T)+m*Math.cos(w*T))}}else if(y===1)_=w=>o-Math.exp(-h*w)*(m+(v+h*m)*w);else{const w=h*Math.sqrt(y*y-1);_=T=>{const C=Math.exp(-y*h*T),x=Math.min(w*T,300);return o-C*((v+y*h*m)*Math.sinh(x)+w*m*Math.cosh(x))/w}}const M={calculatedDuration:p&&d||null,next:w=>{const T=_(w);if(p)a.done=w>=d;else{let C=0;y<1&&(C=w===0?ji(v):fM(_,w,T));const x=Math.abs(C)<=i,b=Math.abs(o-T)<=r;a.done=x&&b}return a.value=a.done?o:T,a},toString:()=>{const w=Math.min(PS(M),rh),T=DS(C=>M.next(w*C).value,w,30);return w+"ms "+T}};return M}function Q0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,v=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let y=n*e;const m=d+y,h=o===void 0?m:o(m);h!==m&&(y=h-d);const g=x=>-y*Math.exp(-x/i),_=x=>h+g(x),M=x=>{const b=g(x),P=_(x);f.done=Math.abs(b)<=c,f.value=f.done?h:P};let w,T;const C=x=>{p(f.value)&&(w=x,T=dM({keyframes:[f.value,v(f.value)],velocity:fM(_,x,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:x=>{let b=!1;return!T&&w===void 0&&(b=!0,M(x),C(x)),w!==void 0&&x>=w?T.next(x-w):(!b&&M(x),f)}}}const FC=tl(.42,0,1,1),OC=tl(0,0,.58,1),hM=tl(.42,0,.58,1),kC=t=>Array.isArray(t)&&typeof t[0]!="number",BC={linear:In,easeIn:FC,easeInOut:hM,easeOut:OC,circIn:Dm,circInOut:KS,circOut:XS,backIn:Pm,backInOut:WS,backOut:GS,anticipate:jS},J0=t=>{if(wm(t)){uS(t.length===4);const[e,n,i,r]=t;return tl(e,n,i,r)}else if(typeof t=="string")return BC[t];return t};function VC(t,e,n){const i=[],r=n||uM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||In:e;a=nl(l,a)}i.push(a)}return i}function zC(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(uS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=VC(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=To(t[d],t[d+1],u);return a[d](f)};return n?u=>c(er(t[0],t[s-1],u)):c}function HC(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=To(0,e,i);t.push(St(n,1,r))}}function GC(t){const e=[0];return HC(e,t.length-1),e}function WC(t,e){return t.map(n=>n*e)}function jC(t,e){return t.map(()=>e||hM).splice(0,t.length-1)}function eu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=kC(i)?i.map(J0):J0(i),s={done:!1,value:e[0]},o=WC(n&&n.length===e.length?n:GC(e),t),a=zC(o,e,{ease:Array.isArray(r)?r:jC(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const XC=t=>{const e=({timestamp:n})=>t(n);return{start:()=>mt.update(e,!0),stop:()=>Ur(e),now:()=>$t.isProcessing?$t.timestamp:Ci.now()}},KC={decay:Q0,inertia:Q0,tween:eu,keyframes:eu,spring:dM},$C=t=>t/100;class Om extends lM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Um,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Tm(n)?n:KC[n]||eu;let l,c;a!==eu&&typeof e[0]!="number"&&(l=nl($C,uM(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=PS(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:x}=this.options;return{done:!0,value:x[x.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:v,repeatDelay:y,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),g=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,M=s;if(p){const x=Math.min(this.currentTime,u)/d;let b=Math.floor(x),P=x%1;!P&&x>=1&&(P=1),P===1&&b--,b=Math.min(b,p+1),!!(b%2)&&(v==="reverse"?(P=1-P,y&&(P-=y/d)):v==="mirror"&&(M=o)),_=er(0,1,P)*d}const w=g?{done:!1,value:l[0]}:M.next(_);a&&(w.value=a(w.value));let{done:T}=w;!g&&c!==null&&(T=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return C&&r!==void 0&&(w.value=Lu(l,this.options,r)),m&&m(w.value),C&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Xi(e.calculatedDuration):0}get time(){return Xi(this.currentTime)}set time(e){e=ji(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Xi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=XC,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const YC=new Set(["opacity","clipPath","filter","transform"]);function qC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=NS(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const ZC=cm(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),tu=10,QC=2e4;function JC(t){return Tm(t.type)||t.type==="spring"||!LS(t.ease)}function eb(t,e){const n=new Om({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<QC;)i=n.sample(s),r.push(i.value),s+=tu;return{times:void 0,keyframes:r,duration:s-tu,ease:"linear"}}const pM={anticipate:jS,backInOut:WS,circInOut:KS};function tb(t){return t in pM}class ev extends lM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new aM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Qc()&&tb(s)&&(s=pM[s]),JC(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:v,...y}=this.options,m=eb(e,y);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=qC(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(k0(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(Lu(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Xi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Xi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=ji(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return In;const{animation:i}=n;k0(i,e)}return In}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...p}=this.options,v=new Om({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),y=ji(this.time);c.setWithVelocity(v.sample(y-tu).value,v.sample(y).value,tu)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return ZC()&&i&&YC.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const nb={type:"spring",stiffness:500,damping:25,restSpeed:10},ib=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),rb={type:"keyframes",duration:.8},sb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ob=(t,{keyframes:e})=>e.length>2?rb:Ts.has(t)?t.startsWith("scale")?ib(e[1]):nb:sb;function ab({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const km=(t,e,n,i={},r,s)=>o=>{const a=Em(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-ji(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};ab(a)||(u={...u,...ob(t,u)}),u.duration&&(u.duration=ji(u.duration)),u.repeatDelay&&(u.repeatDelay=ji(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=Lu(u.keyframes,a);if(f!==void 0)return mt.update(()=>{u.onUpdate(f),u.onComplete()}),new AA([])}return!s&&ev.supports(u)?new ev(u):new Om(u)};function lb({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function mM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&lb(u,d))continue;const v={delay:n,...Em(o||{},d)};let y=!1;if(window.MotionHandoffAnimation){const h=BS(t);if(h){const g=window.MotionHandoffAnimation(h,d,mt);g!==null&&(v.startTime=g,y=!0)}}oh(t,d),f.start(km(d,f,p,t.shouldReduceMotion&&OS.has(d)?{type:!1}:v,t,y));const m=f.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{mt.update(()=>{a&&VA(t,a)})}),c}function hh(t,e,n={}){var i;const r=Du(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(mM(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return cb(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function cb(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(ub).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(hh(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function ub(t,e){return t.sortNodePosition(e)}function fb(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>hh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=hh(t,e,n);else{const r=typeof e=="function"?Du(t,e,n.custom):e;i=Promise.all(mM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const db=fm.length;function gM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?gM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<db;n++){const i=fm[n],r=t.props[i];(za(r)||r===!1)&&(e[i]=r)}return e}const hb=[...um].reverse(),pb=um.length;function mb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>fb(t,n,i)))}function gb(t){let e=mb(t),n=tv(),i=!0;const r=l=>(c,u)=>{var d;const f=Du(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:v,...y}=f;c={...c,...y,...v}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=gM(t.parent)||{},d=[],f=new Set;let p={},v=1/0;for(let m=0;m<pb;m++){const h=hb[m],g=n[h],_=c[h]!==void 0?c[h]:u[h],M=za(_),w=h===l?g.isActive:null;w===!1&&(v=m);let T=_===u[h]&&_!==c[h]&&M;if(T&&i&&t.manuallyAnimateOnMount&&(T=!1),g.protectedKeys={...p},!g.isActive&&w===null||!_&&!g.prevProp||Ru(_)||typeof _=="boolean")continue;const C=vb(g.prevProp,_);let x=C||h===l&&g.isActive&&!T&&M||m>v&&M,b=!1;const P=Array.isArray(_)?_:[_];let R=P.reduce(r(h),{});w===!1&&(R={});const{prevResolvedValues:O={}}=g,j={...O,...R},K=F=>{x=!0,f.has(F)&&(b=!0,f.delete(F)),g.needsAnimating[F]=!0;const k=t.getValue(F);k&&(k.liveStyle=!1)};for(const F in j){const k=R[F],X=O[F];if(p.hasOwnProperty(F))continue;let Z=!1;ih(k)&&ih(X)?Z=!RS(k,X):Z=k!==X,Z?k!=null?K(F):f.add(F):k!==void 0&&f.has(F)?K(F):g.protectedKeys[F]=!0}g.prevProp=_,g.prevResolvedValues=R,g.isActive&&(p={...p,...R}),i&&t.blockInitialAnimation&&(x=!1),x&&(!(T&&C)||b)&&d.push(...P.map(F=>({animation:F,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const g=t.getBaseTarget(h),_=t.getValue(h);_&&(_.liveStyle=!0),m[h]=g??null}),d.push({animation:m})}let y=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=tv(),i=!0}}}function vb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!RS(e,t):!1}function Wr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function tv(){return{animate:Wr(!0),whileInView:Wr(),whileHover:Wr(),whileTap:Wr(),whileDrag:Wr(),whileFocus:Wr(),exit:Wr()}}class zr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class _b extends zr{constructor(e){super(e),e.animationState||(e.animationState=gb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ru(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let xb=0;class yb extends zr{constructor(){super(...arguments),this.id=xb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Sb={animation:{Feature:_b},exit:{Feature:yb}};function ja(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function il(t){return{point:{x:t.pageX,y:t.pageY}}}const Mb=t=>e=>Am(e)&&t(e,il(e));function Sa(t,e,n,i){return ja(t,e,Mb(n),i)}const nv=(t,e)=>Math.abs(t-e);function Eb(t,e){const n=nv(t.x,e.x),i=nv(t.y,e.y);return Math.sqrt(n**2+i**2)}class vM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Mf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=Eb(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:v}=d,{timestamp:y}=$t;this.history.push({...v,timestamp:y});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Sf(f,this.transformPagePoint),mt.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Mf(d.type==="pointercancel"?this.lastMoveEventInfo:Sf(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),v&&v(d,m)},!Am(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=il(e),a=Sf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=$t;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Mf(a,this.history)),this.removeListeners=nl(Sa(this.contextWindow,"pointermove",this.handlePointerMove),Sa(this.contextWindow,"pointerup",this.handlePointerUp),Sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ur(this.updatePoint)}}function Sf(t,e){return e?{point:e(t.point)}:t}function iv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Mf({point:t},e){return{point:t,delta:iv(t,_M(e)),offset:iv(t,Tb(e)),velocity:wb(e,.1)}}function Tb(t){return t[0]}function _M(t){return t[t.length-1]}function wb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=_M(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>ji(e)));)n--;if(!i)return{x:0,y:0};const s=Xi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const xM=1e-4,Ab=1-xM,Cb=1+xM,yM=.01,bb=0-yM,Rb=0+yM;function On(t){return t.max-t.min}function Pb(t,e,n){return Math.abs(t-e)<=n}function rv(t,e,n,i=.5){t.origin=i,t.originPoint=St(e.min,e.max,t.origin),t.scale=On(n)/On(e),t.translate=St(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Ab&&t.scale<=Cb||isNaN(t.scale))&&(t.scale=1),(t.translate>=bb&&t.translate<=Rb||isNaN(t.translate))&&(t.translate=0)}function Ma(t,e,n,i){rv(t.x,e.x,n.x,i?i.originX:void 0),rv(t.y,e.y,n.y,i?i.originY:void 0)}function sv(t,e,n){t.min=n.min+e.min,t.max=t.min+On(e)}function Db(t,e,n){sv(t.x,e.x,n.x),sv(t.y,e.y,n.y)}function ov(t,e,n){t.min=e.min-n.min,t.max=t.min+On(e)}function Ea(t,e,n){ov(t.x,e.x,n.x),ov(t.y,e.y,n.y)}function Lb(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?St(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?St(n,t,i.max):Math.min(t,n)),t}function av(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Nb(t,{top:e,left:n,bottom:i,right:r}){return{x:av(t.x,n,r),y:av(t.y,e,i)}}function lv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Ib(t,e){return{x:lv(t.x,e.x),y:lv(t.y,e.y)}}function Ub(t,e){let n=.5;const i=On(t),r=On(e);return r>i?n=To(e.min,e.max-i,t.min):i>r&&(n=To(t.min,t.max-r,e.min)),er(0,1,n)}function Fb(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const ph=.35;function Ob(t=ph){return t===!1?t=0:t===!0&&(t=ph),{x:cv(t,"left","right"),y:cv(t,"top","bottom")}}function cv(t,e,n){return{min:uv(t,e),max:uv(t,n)}}function uv(t,e){return typeof t=="number"?t:t[e]||0}const fv=()=>({translate:0,scale:1,origin:0,originPoint:0}),so=()=>({x:fv(),y:fv()}),dv=()=>({min:0,max:0}),Dt=()=>({x:dv(),y:dv()});function Gn(t){return[t("x"),t("y")]}function SM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function kb({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Bb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Ef(t){return t===void 0||t===1}function mh({scale:t,scaleX:e,scaleY:n}){return!Ef(t)||!Ef(e)||!Ef(n)}function Zr(t){return mh(t)||MM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function MM(t){return hv(t.x)||hv(t.y)}function hv(t){return t&&t!=="0%"}function nu(t,e,n){const i=t-n,r=e*i;return n+r}function pv(t,e,n,i,r){return r!==void 0&&(t=nu(t,r,i)),nu(t,n,i)+e}function gh(t,e=0,n=1,i,r){t.min=pv(t.min,e,n,i,r),t.max=pv(t.max,e,n,i,r)}function EM(t,{x:e,y:n}){gh(t.x,e.translate,e.scale,e.originPoint),gh(t.y,n.translate,n.scale,n.originPoint)}const mv=.999999999999,gv=1.0000000000001;function Vb(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ao(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,EM(t,o)),i&&Zr(s.latestValues)&&ao(t,s.latestValues))}e.x<gv&&e.x>mv&&(e.x=1),e.y<gv&&e.y>mv&&(e.y=1)}function oo(t,e){t.min=t.min+e,t.max=t.max+e}function vv(t,e,n,i,r=.5){const s=St(t.min,t.max,r);gh(t,e,n,s,i)}function ao(t,e){vv(t.x,e.x,e.scaleX,e.scale,e.originX),vv(t.y,e.y,e.scaleY,e.scale,e.originY)}function TM(t,e){return SM(Bb(t.getBoundingClientRect(),e))}function zb(t,e,n){const i=TM(t,n),{scroll:r}=e;return r&&(oo(i.x,r.offset.x),oo(i.y,r.offset.y)),i}const wM=({current:t})=>t?t.ownerDocument.defaultView:null,Hb=new WeakMap;class Gb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Dt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(il(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:v}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UA(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(Ai.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const _=g.layout.layoutBox[m];_&&(h=On(_)*(parseFloat(h)/100))}}this.originPoint[m]=h}),v&&mt.postRender(()=>v(u,d)),oh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:v,onDrag:y}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=Wb(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),y&&y(u,d)},a=(u,d)=>this.stop(u,d),l=()=>Gn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new vM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:wM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&mt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Pl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Lb(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&io(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=Nb(r.layoutBox,n):this.constraints=!1,this.elastic=Ob(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Fb(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!io(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=zb(i,r.root,this.visualElement.getTransformPagePoint());let o=Ib(r.layout.layoutBox,s);if(n){const a=n(kb(o));this.hasMutatedConstraints=!!a,a&&(o=SM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Gn(u=>{if(!Pl(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return oh(this.visualElement,e),i.start(km(e,i,0,n,this.visualElement,!1))}stopAnimation(){Gn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Gn(n=>{const{drag:i}=this.getProps();if(!Pl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-St(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!io(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=Ub({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Gn(o=>{if(!Pl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(St(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;Hb.set(this.visualElement,this);const e=this.visualElement.current,n=Sa(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();io(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),mt.read(i);const o=ja(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Gn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=ph,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Pl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Wb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class jb extends zr{constructor(e){super(e),this.removeGroupControls=In,this.removeListeners=In,this.controls=new Gb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const _v=t=>(e,n)=>{t&&mt.postRender(()=>t(e,n))};class Xb extends zr{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(e){this.session=new vM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:_v(e),onStart:_v(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&mt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Sa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _c={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function xv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ko={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(be.test(t))t=parseFloat(t);else return t;const n=xv(t,e.target.x),i=xv(t,e.target.y);return`${n}% ${i}%`}},Kb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Fr.parse(t);if(r.length>5)return i;const s=Fr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=St(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class $b extends ne.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;pA(Yb),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),_c.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||mt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),hm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function AM(t){const[e,n]=aS(),i=ne.useContext(sm);return L.jsx($b,{...t,layoutGroup:i,switchLayoutGroup:ne.useContext(gS),isPresent:e,safeToRemove:n})}const Yb={borderRadius:{...Ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ko,borderTopRightRadius:Ko,borderBottomLeftRadius:Ko,borderBottomRightRadius:Ko,boxShadow:Kb};function qb(t,e,n){const i=ln(t)?t:Ga(t);return i.start(km("",i,e,n)),i.animation}function Zb(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Qb=(t,e)=>t.depth-e.depth;class Jb{constructor(){this.children=[],this.isDirty=!1}add(e){Cm(this.children,e),this.isDirty=!0}remove(e){bm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Qb),this.isDirty=!1,this.children.forEach(e)}}function eR(t,e){const n=Ci.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ur(i),t(s-e))};return mt.read(i,!0),()=>Ur(i)}const CM=["TopLeft","TopRight","BottomLeft","BottomRight"],tR=CM.length,yv=t=>typeof t=="string"?parseFloat(t):t,Sv=t=>typeof t=="number"||be.test(t);function nR(t,e,n,i,r,s){r?(t.opacity=St(0,n.opacity!==void 0?n.opacity:1,iR(i)),t.opacityExit=St(e.opacity!==void 0?e.opacity:1,0,rR(i))):s&&(t.opacity=St(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<tR;o++){const a=`border${CM[o]}Radius`;let l=Mv(e,a),c=Mv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Sv(l)===Sv(c)?(t[a]=Math.max(St(yv(l),yv(c),i),0),(Ai.test(c)||Ai.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=St(e.rotate||0,n.rotate||0,i))}function Mv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const iR=bM(0,.5,XS),rR=bM(.5,.95,In);function bM(t,e,n){return i=>i<t?0:i>e?1:n(To(t,e,i))}function Ev(t,e){t.min=e.min,t.max=e.max}function zn(t,e){Ev(t.x,e.x),Ev(t.y,e.y)}function Tv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function wv(t,e,n,i,r){return t-=e,t=nu(t,1/n,i),r!==void 0&&(t=nu(t,1/r,i)),t}function sR(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ai.test(e)&&(e=parseFloat(e),e=St(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=St(s.min,s.max,i);t===s&&(a-=e),t.min=wv(t.min,e,n,a,r),t.max=wv(t.max,e,n,a,r)}function Av(t,e,[n,i,r],s,o){sR(t,e[n],e[i],e[r],e.scale,s,o)}const oR=["x","scaleX","originX"],aR=["y","scaleY","originY"];function Cv(t,e,n,i){Av(t.x,e,oR,n?n.x:void 0,i?i.x:void 0),Av(t.y,e,aR,n?n.y:void 0,i?i.y:void 0)}function bv(t){return t.translate===0&&t.scale===1}function RM(t){return bv(t.x)&&bv(t.y)}function Rv(t,e){return t.min===e.min&&t.max===e.max}function lR(t,e){return Rv(t.x,e.x)&&Rv(t.y,e.y)}function Pv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function PM(t,e){return Pv(t.x,e.x)&&Pv(t.y,e.y)}function Dv(t){return On(t.x)/On(t.y)}function Lv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class cR{constructor(){this.members=[]}add(e){Cm(this.members,e),e.scheduleRender()}remove(e){if(bm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function uR(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Qr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},la=typeof window<"u"&&window.MotionDebug!==void 0,Tf=["","X","Y","Z"],fR={visibility:"hidden"},Nv=1e3;let dR=0;function wf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function DM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=BS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",mt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&DM(i)}function LM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=dR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,la&&(Qr.totalNodes=Qr.resolvedTargetDeltas=Qr.recalculatedProjection=0),this.nodes.forEach(mR),this.nodes.forEach(yR),this.nodes.forEach(SR),this.nodes.forEach(gR),la&&window.MotionDebug.record(Qr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Zb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=eR(f,250),_c.hasAnimatedSinceResize&&(_c.hasAnimatedSinceResize=!1,this.nodes.forEach(Uv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||AR,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),g=!this.targetLayout||!PM(this.targetLayout,v)||p,_=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||f&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,_);const M={...Em(y,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M)}else f||Uv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(MR),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&DM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Iv);return}this.isUpdating||this.nodes.forEach(_R),this.isUpdating=!1,this.nodes.forEach(xR),this.nodes.forEach(hR),this.nodes.forEach(pR),this.clearAllSnapshots();const a=Ci.now();$t.delta=er(0,1e3/60,a-$t.timestamp),$t.timestamp=a,$t.isProcessing=!0,mf.update.process($t),mf.preRender.process($t),mf.render.process($t),$t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vR),this.sharedNodes.forEach(ER)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,mt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){mt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Dt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!RM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Zr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),CR(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Dt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(bR))){const{scroll:u}=this.root;u&&(oo(l.x,u.offset.x),oo(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=Dt();if(zn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&zn(l,o),oo(l.x,d.offset.x),oo(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Dt();zn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ao(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Zr(u.latestValues)&&ao(l,u.latestValues)}return Zr(this.latestValues)&&ao(l,this.latestValues),l}removeTransform(o){const a=Dt();zn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Zr(c.latestValues))continue;mh(c.latestValues)&&c.updateSnapshot();const u=Dt(),d=c.measurePageBox();zn(u,d),Cv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Zr(this.latestValues)&&Cv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==$t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=$t.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Dt(),this.relativeTargetOrigin=Dt(),Ea(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Dt(),this.targetWithTransforms=Dt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Db(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zn(this.target,this.layout.layoutBox),EM(this.target,this.targetDelta)):zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Dt(),this.relativeTargetOrigin=Dt(),Ea(this.relativeTargetOrigin,this.target,p.target),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}la&&Qr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||mh(this.parent.latestValues)||MM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===$t.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;zn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;Vb(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Dt());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Tv(this.prevProjectionDelta.x,this.projectionDelta.x),Tv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ma(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Lv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),la&&Qr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=so(),this.projectionDelta=so(),this.projectionDeltaWithTransform=so()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=so();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Dt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,m=this.getStack(),h=!m||m.members.length<=1,g=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(wR));this.animationProgress=0;let _;this.mixTargetDelta=M=>{const w=M/1e3;Fv(d.x,o.x,w),Fv(d.y,o.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ea(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),TR(this.relativeTarget,this.relativeTargetOrigin,f,w),_&&lR(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Dt()),zn(_,this.relativeTarget)),y&&(this.animationValues=u,nR(u,c,this.latestValues,w,g,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=mt.update(()=>{_c.hasAnimatedSinceResize=!0,this.currentAnimation=qb(0,Nv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&NM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Dt();const d=On(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=On(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}zn(a,l),ao(a,u),Ma(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cR),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&wf("z",o,c,this.animationValues);for(let u=0;u<Tf.length;u++)wf(`rotate${Tf[u]}`,o,c,this.animationValues),wf(`skew${Tf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return fR;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=gc(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=gc(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Zr(this.latestValues)&&(y.transform=u?u({},""):"none",this.hasProjected=!1),y}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=uR(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:v}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${v.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const y in Zc){if(f[y]===void 0)continue;const{correct:m,applyTo:h}=Zc[y],g=c.transform==="none"?f[y]:m(f[y],d);if(h){const _=h.length;for(let M=0;M<_;M++)c[h[M]]=g}else c[y]=g}return this.options.layoutId&&(c.pointerEvents=d===this?gc(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Iv),this.root.sharedNodes.clear()}}}function hR(t){t.updateLayout()}function pR(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Gn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=On(f);f.min=i[d].min,f.max=f.min+p}):NM(s,n.layoutBox,i)&&Gn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=On(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=so();Ma(a,i,n.layoutBox);const l=so();o?Ma(l,t.applyTransform(r,!0),n.measuredBox):Ma(l,i,n.layoutBox);const c=!RM(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const v=Dt();Ea(v,n.layoutBox,f.layoutBox);const y=Dt();Ea(y,i,p.layoutBox),PM(v,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function mR(t){la&&Qr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gR(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function vR(t){t.clearSnapshot()}function Iv(t){t.clearMeasurements()}function _R(t){t.isLayoutDirty=!1}function xR(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Uv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yR(t){t.resolveTargetDelta()}function SR(t){t.calcProjection()}function MR(t){t.resetSkewAndRotation()}function ER(t){t.removeLeadSnapshot()}function Fv(t,e,n){t.translate=St(e.translate,0,n),t.scale=St(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Ov(t,e,n,i){t.min=St(e.min,n.min,i),t.max=St(e.max,n.max,i)}function TR(t,e,n,i){Ov(t.x,e.x,n.x,i),Ov(t.y,e.y,n.y,i)}function wR(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const AR={duration:.45,ease:[.4,0,.1,1]},kv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Bv=kv("applewebkit/")&&!kv("chrome/")?Math.round:In;function Vv(t){t.min=Bv(t.min),t.max=Bv(t.max)}function CR(t){Vv(t.x),Vv(t.y)}function NM(t,e,n){return t==="position"||t==="preserve-aspect"&&!Pb(Dv(e),Dv(n),.2)}function bR(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const RR=LM({attachResizeListener:(t,e)=>ja(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Af={current:void 0},IM=LM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Af.current){const t=new RR({});t.mount(window),t.setOptions({layoutScroll:!0}),Af.current=t}return Af.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),PR={pan:{Feature:Xb},drag:{Feature:jb,ProjectionNode:IM,MeasureLayout:AM}};function zv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&mt.postRender(()=>s(e,il(e)))}class DR extends zr{mount(){const{current:e}=this.node;e&&(this.unmount=PA(e,n=>(zv(this.node,n,"Start"),i=>zv(this.node,i,"End"))))}unmount(){}}class LR extends zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nl(ja(this.node.current,"focus",()=>this.onFocus()),ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Hv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&mt.postRender(()=>s(e,il(e)))}class NR extends zr{mount(){const{current:e}=this.node;e&&(this.unmount=IA(e,n=>(Hv(this.node,n,"Start"),(i,{success:r})=>Hv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vh=new WeakMap,Cf=new WeakMap,IR=t=>{const e=vh.get(t.target);e&&e(t)},UR=t=>{t.forEach(IR)};function FR({root:t,...e}){const n=t||document;Cf.has(n)||Cf.set(n,{});const i=Cf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(UR,{root:t,...e})),i[r]}function OR(t,e,n){const i=FR(e);return vh.set(t,n),i.observe(t),()=>{vh.delete(t),i.unobserve(t)}}const kR={some:0,all:1};class BR extends zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:kR[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return OR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(VR(e,n))&&this.startObserver()}unmount(){}}function VR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const zR={inView:{Feature:BR},tap:{Feature:NR},focus:{Feature:LR},hover:{Feature:DR}},HR={layout:{ProjectionNode:IM,MeasureLayout:AM}},_h={current:null},UM={current:!1};function GR(){if(UM.current=!0,!!lm)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>_h.current=t.matches;t.addListener(e),e()}else _h.current=!1}const WR=[...oM,sn,Fr],jR=t=>WR.find(sM(t)),Gv=new WeakMap;function XR(t,e,n){for(const i in e){const r=e[i],s=n[i];if(ln(r))t.addValue(i,r);else if(ln(s))t.addValue(i,Ga(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Ga(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Wv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class KR{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Um,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ci.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,mt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Pu(n),this.isVariantNode=pS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const v=f[p];l[p]!==void 0&&ln(v)&&v.set(l[p],!1)}}mount(e){this.current=e,Gv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),UM.current||GR(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:_h.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Gv.delete(this.current),this.projection&&this.projection.unmount(),Ur(this.notifyUpdate),Ur(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Ts.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&mt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in wo){const n=wo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Dt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Wv.length;i++){const r=Wv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=XR(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Ga(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(iM(r)||$S(r))?r=parseFloat(r):!jR(r)&&Fr.test(n)&&(r=eM(e,n)),this.setBaseTarget(e,ln(r)?r.get():r)),ln(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=mm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ln(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Rm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class FM extends KR{constructor(){super(...arguments),this.KeyframeResolver=aM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ln(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function $R(t){return window.getComputedStyle(t)}class YR extends FM{constructor(){super(...arguments),this.type="html",this.renderInstance=ES}readValueFromInstance(e,n){if(Ts.has(n)){const i=Im(n);return i&&i.default||0}else{const i=$R(e),r=(yS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return TM(e,n)}build(e,n,i){_m(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Mm(e,n,i)}}class qR extends FM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Dt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ts.has(n)){const i=Im(n);return i&&i.default||0}return n=TS.has(n)?n:dm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return CS(e,n,i)}build(e,n,i){xm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){wS(e,n,i,r)}mount(e){this.isSVGTag=Sm(e.tagName),super.mount(e)}}const ZR=(t,e)=>pm(t)?new qR(e):new YR(e,{allowProjection:t!==ne.Fragment}),QR=EA({...Sb,...zR,...PR,...HR},ZR),jt=kw(QR),JR="_marquee_e0rek_1",eP="_track_e0rek_9",tP="_reverse_e0rek_16",nP="_text_e0rek_29",Dl={marquee:JR,track:eP,reverse:tP,text:nP},iP="Ресницы · Брови · Уход · Трансформация · Сияние · Люмэри · Эстетика · Ритуал ·";function OM({reverse:t=!1,speed:e=25}){return L.jsx("div",{className:Dl.marquee,children:L.jsx("div",{className:`${Dl.track} ${t?Dl.reverse:""}`,style:{animationDuration:`${e}s`},children:[...Array(4)].map((n,i)=>L.jsxs("span",{className:Dl.text,children:[iP,"  "]},i))})})}function kM(t=.35){const e=ne.useRef(null),n=ne.useCallback(r=>{const s=e.current;if(!s)return;const o=s.getBoundingClientRect(),a=o.left+o.width/2,l=o.top+o.height/2,c=r.clientX-a,u=r.clientY-l,d=Math.sqrt(c*c+u*u),f=o.width*1.2;if(d<f){const p=c*t,v=u*t;s.style.transform=`translate(${p}px, ${v}px)`,s.style.transition="transform 0.15s ease"}},[t]),i=ne.useCallback(()=>{const r=e.current;r&&(r.style.transform="translate(0, 0)",r.style.transition="transform 0.5s cubic-bezier(0.34,1.56,0.64,1)")},[]);return{ref:e,onMouseMove:n,onMouseLeave:i}}function jv({children:t,className:e,onClick:n,style:i,disabled:r}){const{ref:s,onMouseMove:o,onMouseLeave:a}=kM(.3);return L.jsx("div",{ref:s,onMouseMove:o,onMouseLeave:a,style:{display:"inline-block",...i},children:L.jsx("button",{className:e,onClick:n,disabled:r,children:t})})}const Lr=t=>"/lumeri-mini-app/"+t.replace(/^\//,""),as={light:()=>ss.send("VKWebAppTapticImpactOccurred",{style:"light"}).catch(()=>{}),medium:()=>ss.send("VKWebAppTapticImpactOccurred",{style:"medium"}).catch(()=>{}),success:()=>ss.send("VKWebAppTapticNotificationOccurred",{type:"success"}).catch(()=>{}),select:()=>ss.send("VKWebAppTapticSelectionChanged",{}).catch(()=>{})},rP="_home_1sb0g_1",sP="_heroPhoto_1sb0g_8",oP="_heroImg_1sb0g_18",aP="_heroFade_1sb0g_35",lP="_statusBar_1sb0g_49",cP="_statusIcons_1sb0g_59",uP="_statDot_1sb0g_65",fP="_statLine_1sb0g_72",dP="_statBattery_1sb0g_80",hP="_logoCenter_1sb0g_98",pP="_content_1sb0g_112",mP="_datePill_1sb0g_145",gP="_slotCard_1sb0g_162",vP="_slotLabel_1sb0g_193",_P="_slotTime_1sb0g_200",xP="_slotMeta_1sb0g_207",yP="_categories_1sb0g_219",SP="_categoryChip_1sb0g_224",MP="_categoryActive_1sb0g_241",EP="_countdownWrap_1sb0g_246",TP="_countdownCard_1sb0g_251",wP="_countLabel_1sb0g_259",AP="_countValue_1sb0g_266",xt={home:rP,heroPhoto:sP,heroImg:oP,heroFade:aP,statusBar:lP,statusIcons:cP,statDot:uP,statLine:fP,statBattery:dP,logoCenter:hP,content:pP,datePill:mP,slotCard:gP,slotLabel:vP,slotTime:_P,slotMeta:xP,categories:yP,categoryChip:SP,categoryActive:MP,countdownWrap:EP,countdownCard:TP,countLabel:wP,countValue:AP},CP=[{id:"lashes",label:"Ресницы"},{id:"brows",label:"Брови"},{id:"care",label:"Уход"}],Xv=[(t,e)=>`${t}, пусть ${e} наполнится сиянием`,(t,e)=>`Добро пожаловать, ${t}. Время для вашего ритуала`,(t,e)=>`${t}, вы заслуживаете лучшего. Именно сегодня`,(t,e)=>`Тихий ${e}, ${t}. Студия ждёт вас`,(t,e)=>`${t}, красота начинается здесь`,t=>`${t}, ваш следующий ритуал уже близко`,t=>`Рады видеть вас снова, ${t}`],bP=()=>{const t=new Date().getHours();return t<12?"утренний час":t<17?"день":t<21?"вечер":"поздний час"},RP=t=>{if(!t){const n=new Date().getHours();return n<12?"Доброе утро":n<17?"Добрый день":"Добрый вечер"}const e=Xv[Math.floor(Math.random()*Xv.length)];return e(t,bP())};function PP({onNavigate:t}){const[e,n]=ne.useState("lashes"),[i,r]=ne.useState(""),[s,o]=ne.useState("rgba(0,0,0,0)"),a=new Date,l=a.toLocaleDateString("ru-RU",{weekday:"long",day:"numeric",month:"long"}),c=ne.useMemo(()=>{const p=new Date;return p.setDate(p.getDate()+1),p.setHours(14,30,0,0),p},[]),u=ne.useMemo(()=>DP(c-a),[c,a]);RP(i),ne.useEffect(()=>{ss.send("VKWebAppGetUserInfo").then(p=>r(p.first_name||"")).catch(()=>r(""))},[]),ne.useEffect(()=>{const p=new Date().getHours();let v;p>=5&&p<9?v="rgba(255,180,80,0.18)":p>=9&&p<12?v="rgba(255,210,120,0.10)":p>=12&&p<16?v="rgba(180,200,220,0.08)":p>=16&&p<19?v="rgba(255,140,80,0.15)":p>=19&&p<22?v="rgba(160,80,120,0.18)":v="rgba(40,40,100,0.22)",o(v)},[]);const d=()=>{as.light(),t==null||t("booking")},f=p=>{as.select(),n(p)};return L.jsxs(L.Fragment,{children:[L.jsx("div",{className:"material"}),L.jsxs("div",{className:xt.home,children:[L.jsxs("div",{className:xt.heroPhoto,children:[L.jsx("img",{src:Lr("/master/master-1.webp"),alt:"",className:xt.heroImg}),L.jsx("div",{className:xt.heroFade}),L.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,background:s,mixBlendMode:"multiply",transition:"background 3s ease",pointerEvents:"none"}})]}),L.jsxs("div",{className:xt.statusBar,children:[L.jsx("span",{children:a.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}),L.jsxs("div",{className:xt.statusIcons,children:[L.jsx("span",{className:xt.statDot}),L.jsx("span",{className:xt.statLine}),L.jsx("span",{className:xt.statBattery})]})]}),L.jsx("div",{className:xt.logoCenter,children:"ЛЮМЭРИ"}),L.jsx("span",{className:xt.datePill,children:l}),L.jsxs("div",{className:xt.content,children:[L.jsxs(jt.div,{className:`${xt.slotCard} glass`,whileTap:{scale:.98},children:[L.jsxs("div",{children:[L.jsx("p",{className:xt.slotLabel,children:"Ближайшее окошко"}),L.jsx("p",{className:xt.slotTime,children:c.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"})}),L.jsx("p",{className:xt.slotMeta,children:c.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})})]}),L.jsx(jv,{className:"btn-ink",onClick:d,children:"Записаться"})]}),L.jsx("div",{className:xt.categories,children:CP.map(p=>L.jsx(jt.button,{whileTap:{scale:.93},className:`${xt.categoryChip} ${e===p.id?xt.categoryActive:""}`,onClick:()=>f(p.id),children:p.label},p.id))}),L.jsx(OM,{speed:30}),L.jsx("div",{className:xt.countdownWrap,children:L.jsxs("div",{className:xt.countdownCard,children:[L.jsx("p",{className:xt.countLabel,children:"До вашей трансформации"}),L.jsx("p",{className:xt.countValue,children:u}),L.jsx(jv,{className:"btn-glass",onClick:()=>t==null?void 0:t("booking"),children:"Детали визита"})]})})]})]})]})}function DP(t){const e=Math.max(0,Math.floor(t/6e4)),n=Math.floor(e/(60*24)),i=Math.floor(e%(60*24)/60),r=e%60;return`${bf(n)} дня · ${bf(i)} ч · ${bf(r)} м`}function bf(t){return String(t).padStart(2,"0")}function Bm({text:t,className:e,delay:n=0}){const i=t.split(" ");return L.jsx("span",{className:e,style:{display:"inline-block",overflow:"hidden"},children:i.map((r,s)=>L.jsx("span",{style:{display:"inline-block",overflow:"hidden",marginRight:"0.25em"},children:r.split("").map((o,a)=>L.jsx(jt.span,{style:{display:"inline-block"},initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,delay:n+(s*r.length+a)*.03,ease:[.16,1,.3,1]},children:o},`${r}-${s}-${a}`))},`${r}-${s}`))})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vm="184",LP=0,Kv=1,NP=2,xc=1,IP=2,ca=3,Or=0,En=1,Vi=2,Ki=0,mo=1,iu=2,$v=3,Yv=4,UP=5,es=100,FP=101,OP=102,kP=103,BP=104,VP=200,zP=201,HP=202,GP=203,xh=204,yh=205,WP=206,jP=207,XP=208,KP=209,$P=210,YP=211,qP=212,ZP=213,QP=214,Sh=0,Mh=1,Eh=2,Co=3,Th=4,wh=5,Ah=6,Ch=7,BM=0,JP=1,e3=2,bi=0,VM=1,zM=2,HM=3,GM=4,WM=5,jM=6,XM=7,KM=300,xs=301,bo=302,Rf=303,Pf=304,Nu=306,bh=1e3,Gi=1001,Rh=1002,Yt=1003,t3=1004,Ll=1005,cn=1006,Df=1007,ls=1008,Kn=1009,$M=1010,YM=1011,Xa=1012,zm=1013,Pi=1014,Mi=1015,tr=1016,Hm=1017,Gm=1018,Ka=1020,qM=35902,ZM=35899,QM=1021,JM=1022,ui=1023,nr=1026,cs=1027,eE=1028,Wm=1029,ys=1030,jm=1031,Xm=1033,yc=33776,Sc=33777,Mc=33778,Ec=33779,Ph=35840,Dh=35841,Lh=35842,Nh=35843,Ih=36196,Uh=37492,Fh=37496,Oh=37488,kh=37489,ru=37490,Bh=37491,Vh=37808,zh=37809,Hh=37810,Gh=37811,Wh=37812,jh=37813,Xh=37814,Kh=37815,$h=37816,Yh=37817,qh=37818,Zh=37819,Qh=37820,Jh=37821,ep=36492,tp=36494,np=36495,ip=36283,rp=36284,su=36285,sp=36286,n3=3200,qv=0,i3=1,yr="",Wn="srgb",ou="srgb-linear",au="linear",et="srgb",Ps=7680,Zv=519,r3=512,s3=513,o3=514,Km=515,a3=516,l3=517,$m=518,c3=519,Qv=35044,Jv="300 es",Ei=2e3,lu=2001;function u3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f3(){const t=cu("canvas");return t.style.display="block",t}const e_={};function t_(...t){const e="THREE."+t.shift();console.log(e,...t)}function tE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=tE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=tE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function op(...t){const e=t.join(" ");e in e_||(e_[e]=!0,De(...t))}function d3(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const h3={[Sh]:Mh,[Eh]:Ah,[Th]:Ch,[Co]:wh,[Mh]:Sh,[Ah]:Eh,[Ch]:Th,[wh]:Co};class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=Math.PI/180,ap=180/Math.PI;function rl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function p3(t,e){return(t%e+e)%e}function Nf(t,e,n){return(1-n)*t+n*e}function $o(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qm=class qm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qm.prototype.isVector2=!0;let ot=qm;class Fo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(d!==y||l!==f||c!==p||u!==v){let m=l*f+c*p+u*v+d*y;m<0&&(f=-f,p=-p,v=-v,y=-y,m=-m);let h=1-a;if(m<.9995){const g=Math.acos(m),_=Math.sin(g);h=Math.sin(h*g)/_,a=Math.sin(a*g)/_,l=l*h+f*a,c=c*h+p*a,u=u*h+v*a,d=d*h+y*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+v*a,d=d*h+y*a;const g=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=g,c*=g,u*=g,d*=g}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*f,e[n+1]=l*v+u*f+c*d-a*p,e[n+2]=c*v+u*p+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zm=class Zm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(n_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return If.copy(this).projectOnVector(e),this.sub(If)}reflect(e){return this.sub(If.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zm.prototype.isVector3=!0;let H=Zm;const If=new H,n_=new Fo,Qm=class Qm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],g=r[1],_=r[4],M=r[7],w=r[2],T=r[5],C=r[8];return s[0]=o*y+a*g+l*w,s[3]=o*m+a*_+l*T,s[6]=o*h+a*M+l*C,s[1]=c*y+u*g+d*w,s[4]=c*m+u*_+d*T,s[7]=c*h+u*M+d*C,s[2]=f*y+p*g+v*w,s[5]=f*m+p*_+v*T,s[8]=f*h+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Uf.makeScale(e,n)),this}rotate(e){return this.premultiply(Uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qm.prototype.isMatrix3=!0;let Fe=Qm;const Uf=new Fe,i_=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m3(){const t={enabled:!0,workingColorSpace:ou,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===et&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===et&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?au:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return op("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return op("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ou]:{primaries:e,whitePoint:i,transfer:au,toXYZ:i_,fromXYZ:r_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:i_,fromXYZ:r_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const $e=m3();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function go(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class g3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=cu("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$i(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v3=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v3++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ff(r[o].image)):s.push(Ff(r[o]))}else s=Ff(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ff(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?g3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let _3=0;const Of=new H;class pn extends ws{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Gi,r=Gi,s=cn,o=ls,a=ui,l=Kn,c=pn.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_3++}),this.uuid=rl(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Of).x}get height(){return this.source.getSize(Of).y}get depth(){return this.source.getSize(Of).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=KM;pn.DEFAULT_ANISOTROPY=1;const Jm=class Jm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,w=(h+1)/2,T=(u+f)/4,C=(d+y)/4,x=(v+m)/4;return _>M&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=x/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(d-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jm.prototype.isVector4=!0;let Nt=Jm;class x3 extends ws{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new pn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ym(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends x3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class nE extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y3 extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,y=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S3,e,M3)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),cr.crossVectors(i,Cn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),cr.crossVectors(i,Cn)),cr.normalize(),Nl.crossVectors(Cn,cr),r[0]=cr.x,r[4]=Nl.x,r[8]=Cn.x,r[1]=cr.y,r[5]=Nl.y,r[9]=Cn.y,r[2]=cr.z,r[6]=Nl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],g=i[3],_=i[7],M=i[11],w=i[15],T=r[0],C=r[4],x=r[8],b=r[12],P=r[1],R=r[5],O=r[9],j=r[13],K=r[2],I=r[6],G=r[10],F=r[14],k=r[3],X=r[7],Z=r[11],ae=r[15];return s[0]=o*T+a*P+l*K+c*k,s[4]=o*C+a*R+l*I+c*X,s[8]=o*x+a*O+l*G+c*Z,s[12]=o*b+a*j+l*F+c*ae,s[1]=u*T+d*P+f*K+p*k,s[5]=u*C+d*R+f*I+p*X,s[9]=u*x+d*O+f*G+p*Z,s[13]=u*b+d*j+f*F+p*ae,s[2]=v*T+y*P+m*K+h*k,s[6]=v*C+y*R+m*I+h*X,s[10]=v*x+y*O+m*G+h*Z,s[14]=v*b+y*j+m*F+h*ae,s[3]=g*T+_*P+M*K+w*k,s[7]=g*C+_*R+M*I+w*X,s[11]=g*x+_*O+M*G+w*Z,s[15]=g*b+_*j+M*F+w*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15],g=l*p-c*f,_=a*p-c*d,M=a*f-l*d,w=o*p-c*u,T=o*f-l*u,C=o*d-a*u;return n*(y*g-m*_+h*M)-i*(v*g-m*w+h*T)+r*(v*_-y*w+h*C)-s*(v*M-y*T+m*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],g=n*a-i*o,_=n*l-r*o,M=n*c-s*o,w=i*l-r*a,T=i*c-s*a,C=r*c-s*l,x=u*y-d*v,b=u*m-f*v,P=u*h-p*v,R=d*m-f*y,O=d*h-p*y,j=f*h-p*m,K=g*j-_*O+M*R+w*P-T*b+C*x;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/K;return e[0]=(a*j-l*O+c*R)*I,e[1]=(r*O-i*j-s*R)*I,e[2]=(y*C-m*T+h*w)*I,e[3]=(f*T-d*C-p*w)*I,e[4]=(l*P-o*j-c*b)*I,e[5]=(n*j-r*P+s*b)*I,e[6]=(m*M-v*C-h*_)*I,e[7]=(u*C-f*M+p*_)*I,e[8]=(o*O-a*P+c*x)*I,e[9]=(i*P-n*O-s*x)*I,e[10]=(v*T-y*M+h*g)*I,e[11]=(d*M-u*T-p*g)*I,e[12]=(a*b-o*R-l*x)*I,e[13]=(n*R-i*b+r*x)*I,e[14]=(y*_-v*w-m*g)*I,e[15]=(u*w-d*_+f*g)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,y=o*u,m=o*d,h=a*d,g=l*c,_=l*u,M=l*d,w=i.x,T=i.y,C=i.z;return r[0]=(1-(y+h))*w,r[1]=(p+M)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(f+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(v+_)*C,r[9]=(m-g)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ls.set(r[0],r[1],r[2]).length();const a=Ls.set(r[4],r[5],r[6]).length(),l=Ls.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ti.copy(this);const c=1/o,u=1/a,d=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=d,ti.elements[9]*=d,ti.elements[10]*=d,n.setFromRotationMatrix(ti),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,y;if(l)v=s/(o-s),y=o*s/(o-s);else if(a===Ei)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===lu)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,y;if(l)v=1/(o-s),y=o/(o-s);else if(a===Ei)v=-2/(o-s),y=-(o+s)/(o-s);else if(a===lu)v=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};uu.prototype.isMatrix4=!0;let Ft=uu;const Ls=new H,ti=new Ft,S3=new H(0,0,0),M3=new H(1,1,1),cr=new H,Nl=new H,Cn=new H,s_=new Ft,o_=new Fo;class Ss{constructor(e=0,n=0,i=0,r=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return s_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(s_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return o_.setFromEuler(this),this.setFromQuaternion(o_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class iE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E3=0;const a_=new H,Ns=new Fo,Ni=new Ft,Il=new H,Yo=new H,T3=new H,w3=new Fo,l_=new H(1,0,0),c_=new H(0,1,0),u_=new H(0,0,1),f_={type:"added"},A3={type:"removed"},Is={type:"childadded",child:null},kf={type:"childremoved",child:null};class Tn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E3++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new H,n=new Ss,i=new Fo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Fe}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,n){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Il.copy(e):Il.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Yo,Il,this.up):Ni.lookAt(Il,Yo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),Is.child=e,this.dispatchEvent(Is),Is.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(A3),kf.child=e,this.dispatchEvent(kf),kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,T3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,w3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ul extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C3={type:"move"};class Bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=p3(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Vf(o,s,e+1/3),this.g=Vf(o,s,e),this.b=Vf(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=rE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return $e.workingToColorSpace(nn.copy(this),e),Math.round(Ye(nn.r*255,0,255))*65536+Math.round(Ye(nn.g*255,0,255))*256+Math.round(Ye(nn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Wn){$e.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Fl);const i=Nf(ur.h,Fl.h,n),r=Nf(ur.s,Fl.s,n),s=Nf(ur.l,Fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new tt;tt.NAMES=rE;class sE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ni=new H,Ii=new H,zf=new H,Ui=new H,Us=new H,Fs=new H,d_=new H,Hf=new H,Gf=new H,Wf=new H,jf=new Nt,Xf=new Nt,Kf=new Nt;class ci{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Ii.subVectors(i,n),zf.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Ii),l=ni.dot(zf),c=Ii.dot(Ii),u=Ii.dot(zf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return jf.setScalar(0),Xf.setScalar(0),Kf.setScalar(0),jf.fromBufferAttribute(e,n),Xf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(jf,s.x),o.addScaledVector(Xf,s.y),o.addScaledVector(Kf,s.z),o}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Ii.subVectors(e,n),ni.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ni.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Fs.subVectors(s,i),Hf.subVectors(e,i);const l=Us.dot(Hf),c=Fs.dot(Hf);if(l<=0&&c<=0)return n.copy(i);Gf.subVectors(e,r);const u=Us.dot(Gf),d=Fs.dot(Gf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Us,o);Wf.subVectors(e,s);const p=Us.dot(Wf),v=Fs.dot(Wf);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Fs,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return d_.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(d_,a);const h=1/(m+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sl{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),kl.subVectors(this.max,qo),Os.subVectors(e.a,qo),ks.subVectors(e.b,qo),Bs.subVectors(e.c,qo),fr.subVectors(ks,Os),dr.subVectors(Bs,ks),jr.subVectors(Os,Bs);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-jr.z,jr.y,fr.z,0,-fr.x,dr.z,0,-dr.x,jr.z,0,-jr.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-jr.y,jr.x,0];return!$f(n,Os,ks,Bs,kl)||(n=[1,0,0,0,1,0,0,0,1],!$f(n,Os,ks,Bs,kl))?!1:(Bl.crossVectors(fr,dr),n=[Bl.x,Bl.y,Bl.z],$f(n,Os,ks,Bs,kl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new H,new H,new H,new H,new H,new H,new H,new H],ii=new H,Ol=new sl,Os=new H,ks=new H,Bs=new H,fr=new H,dr=new H,jr=new H,qo=new H,kl=new H,Bl=new H,Xr=new H;function $f(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const It=new H,Vl=new ot;let b3=0;class Un extends ws{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qv,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vl.fromBufferAttribute(this,n),Vl.applyMatrix3(e),this.setXY(n,Vl.x,Vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$o(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$o(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$o(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$o(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class oE extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class aE extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yi extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}const R3=new sl,Zo=new H,Yf=new H;class Iu{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):R3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Yf)),this.expandByPoint(Zo.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let P3=0;const Hn=new Ft,qf=new Tn,Vs=new H,bn=new sl,Qo=new sl,Gt=new H;class Jn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P3++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u3(e)?aE:oE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return qf.lookAt(e),qf.updateMatrix(),this.applyMatrix4(qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Iu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(bn.min,Qo.min),bn.expandByPoint(Gt),Gt.addVectors(bn.max,Qo.max),bn.expandByPoint(Gt)):(bn.expandByPoint(Qo.min),bn.expandByPoint(Qo.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),Gt.add(Vs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new H,l[x]=new H;const c=new H,u=new H,d=new H,f=new ot,p=new ot,v=new ot,y=new H,m=new H;function h(x,b,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,b),v.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(R),a[x].add(y),a[b].add(y),a[P].add(y),l[x].add(m),l[b].add(m),l[P].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,b=g.length;x<b;++x){const P=g[x],R=P.start,O=P.count;for(let j=R,K=R+O;j<K;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new H,M=new H,w=new H,T=new H;function C(x){w.fromBufferAttribute(r,x),T.copy(w);const b=a[x];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),M.crossVectors(T,b);const R=M.dot(l[x])<0?-1:1;o.setXYZW(x,_.x,_.y,_.z,R)}for(let x=0,b=g.length;x<b;++x){const P=g[x],R=P.start,O=P.count;for(let j=R,K=R+O;j<K;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new Un(f,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let D3=0;class ol extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D3++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=mo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=yh,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xh&&(i.blendSrc=this.blendSrc),this.blendDst!==yh&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new H,Zf=new H,zl=new H,hr=new H,Qf=new H,Hl=new H,Jf=new H;class lE{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zf.copy(e).add(n).multiplyScalar(.5),zl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(Zf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(zl),a=hr.dot(this.direction),l=-hr.dot(zl),c=hr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zf).addScaledVector(zl,f),p}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){Qf.subVectors(n,e),Hl.subVectors(i,e),Jf.crossVectors(Qf,Hl);let o=this.direction.dot(Jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Hl.crossVectors(hr,Hl));if(l<0)return null;const c=a*this.direction.dot(Qf.cross(hr));if(c<0||l+c>o)return null;const u=-a*hr.dot(Jf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cE extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=BM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const h_=new Ft,Kr=new lE,Gl=new Iu,p_=new H,Wl=new H,jl=new H,Xl=new H,ed=new H,Kl=new H,m_=new H,$l=new H;class ir extends Tn{constructor(e=new Jn,n=new cE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ed.fromBufferAttribute(d,e),o?Kl.addScaledVector(ed,u):Kl.addScaledVector(ed.sub(n),u))}n.add(Kl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(s),Kr.copy(e.ray).recast(e.near),!(Gl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Gl,p_)===null||Kr.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(h_.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(h_),!(i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,w=_;M<w;M+=3){const T=a.getX(M),C=a.getX(M+1),x=a.getX(M+2);r=Yl(this,h,e,i,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=Yl(this,o,e,i,c,u,d,g,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=f.length;v<y;v++){const m=f[v],h=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=g,w=_;M<w;M+=3){const T=M,C=M+1,x=M+2;r=Yl(this,h,e,i,c,u,d,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const g=m,_=m+1,M=m+2;r=Yl(this,o,e,i,c,u,d,g,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function L3(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;$l.copy(a),$l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($l);return c<n.near||c>n.far?null:{distance:c,point:$l.clone(),object:t}}function Yl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Wl),t.getVertexPosition(l,jl),t.getVertexPosition(c,Xl);const u=L3(t,e,n,i,Wl,jl,Xl,m_);if(u){const d=new H;ci.getBarycoord(m_,Wl,jl,Xl,d),r&&(u.uv=ci.getInterpolatedAttribute(r,a,l,c,d,new ot)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,d,new ot)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};ci.getNormal(Wl,jl,Xl,f.normal),u.face=f,u.barycoord=d}return u}class N3 extends pn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Yt,u=Yt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const td=new H,I3=new H,U3=new Fe;class Jr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=td.subVectors(i,n).cross(I3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(td),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||U3.getNormalMatrix(e),r=this.coplanarPoint(td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Iu,F3=new ot(.5,.5),ql=new H;class uE{constructor(e=new Jr,n=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],v=s[8],y=s[9],m=s[10],h=s[11],g=s[12],_=s[13],M=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,h-v,w-g).normalize(),r[1].setComponents(c+o,p+u,h+v,w+g).normalize(),r[2].setComponents(c+a,p+d,h+y,w+_).normalize(),r[3].setComponents(c-a,p-d,h-y,w-_).normalize(),i)r[4].setComponents(l,f,m,M).normalize(),r[5].setComponents(c-l,p-f,h-m,w-M).normalize();else if(r[4].setComponents(c-l,p-f,h-m,w-M).normalize(),n===Ei)r[5].setComponents(c+l,p+f,h+m,w+M).normalize();else if(n===lu)r[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const n=F3.distanceTo(e.center);return $r.radius=.7071067811865476+n,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ql.x=r.normal.x>0?e.max.x:e.min.x,ql.y=r.normal.y>0?e.max.y:e.min.y,ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O3 extends ol{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const g_=new Ft,lp=new lE,Zl=new Iu,Ql=new H;class fE extends Tn{constructor(e=new Jn,n=new O3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(r),Zl.radius+=s,e.ray.intersectsSphere(Zl)===!1)return;g_.copy(r).invert(),lp.copy(e.ray).applyMatrix4(g_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,y=p;v<y;v++){const m=c.getX(v);Ql.fromBufferAttribute(d,m),v_(Ql,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,y=p;v<y;v++)Ql.fromBufferAttribute(d,v),v_(Ql,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function v_(t,e,n,i,r,s,o){const a=lp.distanceSqToPoint(t);if(a<n){const l=new H;lp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class dE extends pn{constructor(e=[],n=xs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ro extends pn{constructor(e,n,i=Pi,r,s,o,a=Yt,l=Yt,c,u=nr,d=1){if(u!==nr&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ym(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class k3 extends Ro{constructor(e,n=Pi,i=xs,r,s,o=Yt,a=Yt,l,c=nr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hE extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yi(c,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(d,2));function v(y,m,h,g,_,M,w,T,C,x,b){const P=M/C,R=w/x,O=M/2,j=w/2,K=T/2,I=C+1,G=x+1;let F=0,k=0;const X=new H;for(let Z=0;Z<G;Z++){const ae=Z*R-j;for(let he=0;he<I;he++){const He=he*P-O;X[y]=He*g,X[m]=ae*_,X[h]=K,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[h]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(he/C),d.push(1-Z/x),F+=1}}for(let Z=0;Z<x;Z++)for(let ae=0;ae<C;ae++){const he=f+ae+I*Z,He=f+ae+I*(Z+1),je=f+(ae+1)+I*(Z+1),Le=f+(ae+1)+I*Z;l.push(he,He,Le),l.push(He,je,Le),k+=6}a.addGroup(p,k,b),p+=k,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Uu extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*f-o;for(let _=0;_<c;_++){const M=_*d-s;v.push(M,-g,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<a;g++){const _=g+c*h,M=g+c*(h+1),w=g+1+c*(h+1),T=g+1+c*h;p.push(_,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Yi(v,3)),this.setAttribute("normal",new Yi(y,3)),this.setAttribute("uv",new Yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(__(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(__(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Po(t[n]);for(const r in i)e[r]=i[r]}return e}function __(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function B3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function pE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const V3={clone:Po,merge:fn};var z3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z3,this.fragmentShader=H3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=B3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class G3 extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class W3 extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j3 extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jl=new H,ec=new Fo,vi=new H;class mE extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,ec,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Jl,ec,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new H,x_=new ot,y_=new ot;class Dn extends mE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,x_,y_),n.subVectors(y_,x_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class gE extends mE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=-90,Hs=1;class X3 extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(zs,Hs,e,n);r.layers=this.layers,this.add(r);const s=new Dn(zs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new Dn(zs,Hs,e,n);o.layers=this.layers,this.add(o);const a=new Dn(zs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new Dn(zs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(zs,Hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class K3 extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const eg=class eg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};eg.prototype.isMatrix2=!0;let S_=eg;function M_(t,e,n,i){const r=Y3(i);switch(n){case QM:return t*e;case eE:return t*e/r.components*r.byteLength;case Wm:return t*e/r.components*r.byteLength;case ys:return t*e*2/r.components*r.byteLength;case jm:return t*e*2/r.components*r.byteLength;case JM:return t*e*3/r.components*r.byteLength;case ui:return t*e*4/r.components*r.byteLength;case Xm:return t*e*4/r.components*r.byteLength;case yc:case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Nh:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Lh:return Math.max(t,8)*Math.max(e,8)/2;case Ih:case Uh:case Oh:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fh:case ru:case Bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ep:case tp:case np:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ip:case rp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case su:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Y3(t){switch(t){case Kn:case $M:return{byteLength:1,components:1};case Xa:case YM:case tr:return{byteLength:2,components:1};case Hm:case Gm:return{byteLength:2,components:4};case Pi:case zm:case Mi:return{byteLength:4,components:1};case qM:case ZM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function q3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],y=d[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Z3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,o2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,y2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C2="gl_FragColor = linearToOutputTexel( gl_FragColor );",b2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,P2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,G2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,W2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,eD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_D=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,SD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ED=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ND=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ID=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_L=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ML=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Z3,alphahash_pars_fragment:Q3,alphamap_fragment:J3,alphamap_pars_fragment:e2,alphatest_fragment:t2,alphatest_pars_fragment:n2,aomap_fragment:i2,aomap_pars_fragment:r2,batching_pars_vertex:s2,batching_vertex:o2,begin_vertex:a2,beginnormal_vertex:l2,bsdfs:c2,iridescence_fragment:u2,bumpmap_pars_fragment:f2,clipping_planes_fragment:d2,clipping_planes_pars_fragment:h2,clipping_planes_pars_vertex:p2,clipping_planes_vertex:m2,color_fragment:g2,color_pars_fragment:v2,color_pars_vertex:_2,color_vertex:x2,common:y2,cube_uv_reflection_fragment:S2,defaultnormal_vertex:M2,displacementmap_pars_vertex:E2,displacementmap_vertex:T2,emissivemap_fragment:w2,emissivemap_pars_fragment:A2,colorspace_fragment:C2,colorspace_pars_fragment:b2,envmap_fragment:R2,envmap_common_pars_fragment:P2,envmap_pars_fragment:D2,envmap_pars_vertex:L2,envmap_physical_pars_fragment:G2,envmap_vertex:N2,fog_vertex:I2,fog_pars_vertex:U2,fog_fragment:F2,fog_pars_fragment:O2,gradientmap_pars_fragment:k2,lightmap_pars_fragment:B2,lights_lambert_fragment:V2,lights_lambert_pars_fragment:z2,lights_pars_begin:H2,lights_toon_fragment:W2,lights_toon_pars_fragment:j2,lights_phong_fragment:X2,lights_phong_pars_fragment:K2,lights_physical_fragment:$2,lights_physical_pars_fragment:Y2,lights_fragment_begin:q2,lights_fragment_maps:Z2,lights_fragment_end:Q2,lightprobes_pars_fragment:J2,logdepthbuf_fragment:eD,logdepthbuf_pars_fragment:tD,logdepthbuf_pars_vertex:nD,logdepthbuf_vertex:iD,map_fragment:rD,map_pars_fragment:sD,map_particle_fragment:oD,map_particle_pars_fragment:aD,metalnessmap_fragment:lD,metalnessmap_pars_fragment:cD,morphinstance_vertex:uD,morphcolor_vertex:fD,morphnormal_vertex:dD,morphtarget_pars_vertex:hD,morphtarget_vertex:pD,normal_fragment_begin:mD,normal_fragment_maps:gD,normal_pars_fragment:vD,normal_pars_vertex:_D,normal_vertex:xD,normalmap_pars_fragment:yD,clearcoat_normal_fragment_begin:SD,clearcoat_normal_fragment_maps:MD,clearcoat_pars_fragment:ED,iridescence_pars_fragment:TD,opaque_fragment:wD,packing:AD,premultiplied_alpha_fragment:CD,project_vertex:bD,dithering_fragment:RD,dithering_pars_fragment:PD,roughnessmap_fragment:DD,roughnessmap_pars_fragment:LD,shadowmap_pars_fragment:ND,shadowmap_pars_vertex:ID,shadowmap_vertex:UD,shadowmask_pars_fragment:FD,skinbase_vertex:OD,skinning_pars_vertex:kD,skinning_vertex:BD,skinnormal_vertex:VD,specularmap_fragment:zD,specularmap_pars_fragment:HD,tonemapping_fragment:GD,tonemapping_pars_fragment:WD,transmission_fragment:jD,transmission_pars_fragment:XD,uv_pars_fragment:KD,uv_pars_vertex:$D,uv_vertex:YD,worldpos_vertex:qD,background_vert:ZD,background_frag:QD,backgroundCube_vert:JD,backgroundCube_frag:eL,cube_vert:tL,cube_frag:nL,depth_vert:iL,depth_frag:rL,distance_vert:sL,distance_frag:oL,equirect_vert:aL,equirect_frag:lL,linedashed_vert:cL,linedashed_frag:uL,meshbasic_vert:fL,meshbasic_frag:dL,meshlambert_vert:hL,meshlambert_frag:pL,meshmatcap_vert:mL,meshmatcap_frag:gL,meshnormal_vert:vL,meshnormal_frag:_L,meshphong_vert:xL,meshphong_frag:yL,meshphysical_vert:SL,meshphysical_frag:ML,meshtoon_vert:EL,meshtoon_frag:TL,points_vert:wL,points_frag:AL,shadow_vert:CL,shadow_frag:bL,sprite_vert:RL,sprite_frag:PL},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},yi={basic:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:fn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:fn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:fn([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:fn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:fn([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:fn([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:fn([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:fn([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yi.physical={uniforms:fn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const tc={r:0,b:0,g:0},DL=new Ft,_E=new Fe;_E.set(-1,0,0,0,1,0,0,0,1);function LL(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const M=g.backgroundBlurriness>0;_=e.get(_,M)}return _}function v(g){let _=!1;const M=p(g);M===null?m(o,a):M&&M.isColor&&(m(M,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(g,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Nu)?(c===void 0&&(c=new ir(new al(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Po(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(DL.makeRotationFromEuler(_.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_E),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,(u!==M||d!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ir(new Uu(2,2),new Qn({name:"BackgroundMaterial",uniforms:Po(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,_){g.getRGB(tc,pE(t)),n.buffers.color.setClear(tc.r,tc.g,tc.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:v,addToRenderList:y,dispose:h}}function NL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(R,O,j,K,I){let G=!1;const F=d(R,K,j,O);s!==F&&(s=F,c(s.object)),G=p(R,K,j,I),G&&v(R,K,j,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(R,O,j,K),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function d(R,O,j,K){const I=K.wireframe===!0;let G=i[O.id];G===void 0&&(G={},i[O.id]=G);const F=R.isInstancedMesh===!0?R.id:0;let k=G[F];k===void 0&&(k={},G[F]=k);let X=k[j.id];X===void 0&&(X={},k[j.id]=X);let Z=X[I];return Z===void 0&&(Z=f(l()),X[I]=Z),Z}function f(R){const O=[],j=[],K=[];for(let I=0;I<n;I++)O[I]=0,j[I]=0,K[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:K,object:R,attributes:{},index:null}}function p(R,O,j,K){const I=s.attributes,G=O.attributes;let F=0;const k=j.getAttributes();for(const X in k)if(k[X].location>=0){const ae=I[X];let he=G[X];if(he===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;F++}return s.attributesNum!==F||s.index!==K}function v(R,O,j,K){const I={},G=O.attributes;let F=0;const k=j.getAttributes();for(const X in k)if(k[X].location>=0){let ae=G[X];ae===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),I[X]=he,F++}s.attributes=I,s.attributesNum=F,s.index=K}function y(){const R=s.newAttributes;for(let O=0,j=R.length;O<j;O++)R[O]=0}function m(R){h(R,0)}function h(R,O){const j=s.newAttributes,K=s.enabledAttributes,I=s.attributeDivisors;j[R]=1,K[R]===0&&(t.enableVertexAttribArray(R),K[R]=1),I[R]!==O&&(t.vertexAttribDivisor(R,O),I[R]=O)}function g(){const R=s.newAttributes,O=s.enabledAttributes;for(let j=0,K=O.length;j<K;j++)O[j]!==R[j]&&(t.disableVertexAttribArray(j),O[j]=0)}function _(R,O,j,K,I,G,F){F===!0?t.vertexAttribIPointer(R,O,j,I,G):t.vertexAttribPointer(R,O,j,K,I,G)}function M(R,O,j,K){y();const I=K.attributes,G=j.getAttributes(),F=O.defaultAttributeValues;for(const k in G){const X=G[k];if(X.location>=0){let Z=I[k];if(Z===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const ae=Z.normalized,he=Z.itemSize,He=e.get(Z);if(He===void 0)continue;const je=He.buffer,Le=He.type,q=He.bytesPerElement,de=Le===t.INT||Le===t.UNSIGNED_INT||Z.gpuType===zm;if(Z.isInterleavedBufferAttribute){const le=Z.data,Re=le.stride,Ie=Z.offset;if(le.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)h(X.location+Pe,le.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Pe=0;Pe<X.locationSize;Pe++)_(X.location+Pe,he/X.locationSize,Le,ae,Re*q,(Ie+he/X.locationSize*Pe)*q,de)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)h(X.location+le,Z.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);t.bindBuffer(t.ARRAY_BUFFER,je);for(let le=0;le<X.locationSize;le++)_(X.location+le,he/X.locationSize,Le,ae,he*q,he/X.locationSize*le*q,de)}}else if(F!==void 0){const ae=F[k];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(X.location,ae);break;case 3:t.vertexAttrib3fv(X.location,ae);break;case 4:t.vertexAttrib4fv(X.location,ae);break;default:t.vertexAttrib1fv(X.location,ae)}}}}g()}function w(){b();for(const R in i){const O=i[R];for(const j in O){const K=O[j];for(const I in K){const G=K[I];for(const F in G)u(G[F].object),delete G[F];delete K[I]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;const O=i[R.id];for(const j in O){const K=O[j];for(const I in K){const G=K[I];for(const F in G)u(G[F].object),delete G[F];delete K[I]}}delete i[R.id]}function C(R){for(const O in i){const j=i[O];for(const K in j){const I=j[K];if(I[R.id]===void 0)continue;const G=I[R.id];for(const F in G)u(G[F].object),delete G[F];delete I[R.id]}}}function x(R){for(const O in i){const j=i[O],K=R.isInstancedMesh===!0?R.id:0,I=j[K];if(I!==void 0){for(const G in I){const F=I[G];for(const k in F)u(F[k].object),delete F[k];delete I[G]}delete j[K],Object.keys(j).length===0&&delete i[O]}}}function b(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function IL(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function UL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ui&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:M,maxSamples:w,samples:T}}function FL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Jr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let M=h.clippingState||null;l.value=M,M=u(v,f,_,p);for(let w=0;w!==_;++w)M[w]=n[w];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(d[_]).applyMatrix4(g,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Er=4,E_=[.125,.215,.35,.446,.526,.582],ts=20,OL=256,Jo=new gE,T_=new tt;let nd=null,id=0,rd=0,sd=!1;const kL=new H;class w_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=kL}=s;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:tr,format:ui,colorSpace:ou,depthBuffer:!1},r=A_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BL(s)),this._blurMaterial=zL(s,e,n),this._ggxMaterial=VL(s,e,n)}return r}_compileMaterial(e){const n=new ir(new Jn,e);this._renderer.compile(n,Jo)}_sceneToCubeUV(e,n,i,r,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(T_),d.toneMapping=bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ir(new al,new cE({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(T_),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const w=this._cubeSize;Gs(r,M*w,_>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Gs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Er?i-v+Er:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,Gs(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Jo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Gs(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Jo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):ts;m>ts&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const h=[];let g=0;for(let C=0;C<ts;++C){const x=C/y,b=Math.exp(-x*x/2);h.push(b),C===0?g+=b:C<m&&(g+=2*b)}for(let C=0;C<h.length;C++)h[C]=h[C]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const M=this._sizeLods[r],w=3*M*(r>_-Er?r-_+Er:0),T=4*(this._cubeSize-M);Gs(n,w,T,3*M,2*M),l.setRenderTarget(n),l.render(d,Jo)}}function BL(t){const e=[],n=[],i=[];let r=t;const s=t-Er+1+E_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Er?l=E_[o-t+Er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,y=3,m=2,h=1,g=new Float32Array(y*v*p),_=new Float32Array(m*v*p),M=new Float32Array(h*v*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,x=T>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];g.set(b,y*v*T),_.set(f,m*v*T);const P=[T,T,T,T,T,T];M.set(P,h*v*T)}const w=new Jn;w.setAttribute("position",new Un(g,y)),w.setAttribute("uv",new Un(_,m)),w.setAttribute("faceIndex",new Un(M,h)),i.push(new ir(w,null)),r>Er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function A_(t,e,n){const i=new Ri(t,e,n);return i.texture.mapping=Nu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function VL(t,e,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function zL(t,e,n){const i=new Float32Array(ts),r=new H(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function C_(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function b_(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xE extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new al(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ki});s.uniforms.tEquirect.value=n;const o=new ir(r,s),a=n.minFilter;return n.minFilter===ls&&(n.minFilter=cn),new X3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function HL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Rf||p===Pf)if(e.has(f)){const v=e.get(f).texture;return a(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const y=new xE(v.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,v=p===Rf||p===Pf,y=p===xs||p===bo;if(v||y){let m=n.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new w_(t)),m=v?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return v&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new w_(t)),m=v?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===Rf?f.mapping=xs:p===Pf&&(f.mapping=bo),f}function l(f){let p=0;const v=6;for(let y=0;y<v;y++)f[y]!==void 0&&p++;return p===v}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function GL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&op("WebGLRenderer: "+i+" extension not supported."),r}}}function WL(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,v=d.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const g=p.array;y=p.version;for(let _=0,M=g.length;_<M;_+=3){const w=g[_+0],T=g[_+1],C=g[_+2];f.push(w,T,T,C,C,w)}}else{const g=v.array;y=v.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const w=_+0,T=_+1,C=_+2;f.push(w,T,T,C,C,w)}}const m=new(v.count>=65535?aE:oE)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function jL(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function XL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KL(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let w=a.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*d),x=new nE(C,w,T,d);x.type=Mi,x.needsUpdate=!0;const b=M*4;for(let R=0;R<d;R++){const O=h[R],j=g[R],K=_[R],I=w*T*4*R;for(let G=0;G<O.count;G++){const F=G*b;v===!0&&(r.fromBufferAttribute(O,G),C[I+F+0]=r.x,C[I+F+1]=r.y,C[I+F+2]=r.z,C[I+F+3]=0),y===!0&&(r.fromBufferAttribute(j,G),C[I+F+4]=r.x,C[I+F+5]=r.y,C[I+F+6]=r.z,C[I+F+7]=0),m===!0&&(r.fromBufferAttribute(K,G),C[I+F+8]=r.x,C[I+F+9]=r.y,C[I+F+10]=r.z,C[I+F+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new ot(w,T)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function $L(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const YL={[VM]:"LINEAR_TONE_MAPPING",[zM]:"REINHARD_TONE_MAPPING",[HM]:"CINEON_TONE_MAPPING",[GM]:"ACES_FILMIC_TONE_MAPPING",[jM]:"AGX_TONE_MAPPING",[XM]:"NEUTRAL_TONE_MAPPING",[WM]:"CUSTOM_TONE_MAPPING"};function qL(t,e,n,i,r){const s=new Ri(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Ro(e,n):void 0}),o=new Ri(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),a=new Jn;a.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Yi([0,2,0,0,2,0],2));const l=new G3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ir(a,l),u=new gE(-1,1,1,-1,0,1);let d=null,f=null,p=!1,v,y=null,m=[],h=!1;this.setSize=function(g,_){s.setSize(g,_),o.setSize(g,_);for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(g,_)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const _=s.width,M=s.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(_,M)}},this.begin=function(g,_){if(p||g.toneMapping===bi&&m.length===0)return!1;if(y=_,_!==null){const M=_.width,w=_.height;(s.width!==M||s.height!==w)&&this.setSize(M,w)}return h===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=bi,!0},this.hasRenderPass=function(){return h},this.end=function(g,_){g.toneMapping=v,p=!0;let M=s,w=o;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(g,w,M,_),C.needsSwap!==!1)){const x=M;M=w,w=x}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},$e.getTransfer(d)===et&&(l.defines.SRGB_TRANSFER="");const T=YL[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,g.setRenderTarget(y),g.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const yE=new pn,cp=new Ro(1,1),SE=new nE,ME=new y3,EE=new dE,R_=[],P_=[],D_=new Float32Array(16),L_=new Float32Array(9),N_=new Float32Array(4);function Oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=R_[r];if(s===void 0&&(s=new Float32Array(r),R_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ou(t,e){let n=P_[e];n===void 0&&(n=new Int32Array(e),P_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ZL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function QL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function JL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function eN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function tN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;N_.set(i),t.uniformMatrix2fv(this.addr,!1,N_),Ht(n,i)}}function nN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;L_.set(i),t.uniformMatrix3fv(this.addr,!1,L_),Ht(n,i)}}function iN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;D_.set(i),t.uniformMatrix4fv(this.addr,!1,D_),Ht(n,i)}}function rN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function sN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function oN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function aN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function lN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function uN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function fN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function dN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cp.compareFunction=n.isReversedDepthBuffer()?$m:Km,s=cp):s=yE,n.setTexture2D(e||s,r)}function hN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ME,r)}function pN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||EE,r)}function mN(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||SE,r)}function gN(t){switch(t){case 5126:return ZL;case 35664:return QL;case 35665:return JL;case 35666:return eN;case 35674:return tN;case 35675:return nN;case 35676:return iN;case 5124:case 35670:return rN;case 35667:case 35671:return sN;case 35668:case 35672:return oN;case 35669:case 35673:return aN;case 5125:return lN;case 36294:return cN;case 36295:return uN;case 36296:return fN;case 35678:case 36198:case 36298:case 36306:case 35682:return dN;case 35679:case 36299:case 36307:return hN;case 35680:case 36300:case 36308:case 36293:return pN;case 36289:case 36303:case 36311:case 36292:return mN}}function vN(t,e){t.uniform1fv(this.addr,e)}function _N(t,e){const n=Oo(e,this.size,2);t.uniform2fv(this.addr,n)}function xN(t,e){const n=Oo(e,this.size,3);t.uniform3fv(this.addr,n)}function yN(t,e){const n=Oo(e,this.size,4);t.uniform4fv(this.addr,n)}function SN(t,e){const n=Oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function MN(t,e){const n=Oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function EN(t,e){const n=Oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TN(t,e){t.uniform1iv(this.addr,e)}function wN(t,e){t.uniform2iv(this.addr,e)}function AN(t,e){t.uniform3iv(this.addr,e)}function CN(t,e){t.uniform4iv(this.addr,e)}function bN(t,e){t.uniform1uiv(this.addr,e)}function RN(t,e){t.uniform2uiv(this.addr,e)}function PN(t,e){t.uniform3uiv(this.addr,e)}function DN(t,e){t.uniform4uiv(this.addr,e)}function LN(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=cp:o=yE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function NN(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ME,s[o])}function IN(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||EE,s[o])}function UN(t,e,n){const i=this.cache,r=e.length,s=Ou(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||SE,s[o])}function FN(t){switch(t){case 5126:return vN;case 35664:return _N;case 35665:return xN;case 35666:return yN;case 35674:return SN;case 35675:return MN;case 35676:return EN;case 5124:case 35670:return TN;case 35667:case 35671:return wN;case 35668:case 35672:return AN;case 35669:case 35673:return CN;case 5125:return bN;case 36294:return RN;case 36295:return PN;case 36296:return DN;case 35678:case 36198:case 36298:case 36306:case 35682:return LN;case 35679:case 36299:case 36307:return NN;case 35680:case 36300:case 36308:case 36293:return IN;case 36289:case 36303:case 36311:case 36292:return UN}}class ON{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=gN(n.type)}}class kN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FN(n.type)}}class BN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function I_(t,e){t.seq.push(e),t.map[e.id]=e}function VN(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const s=od.exec(i),o=od.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){I_(n,c===void 0?new ON(a,t,e):new kN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new BN(a),I_(n,d)),n=d}}}class Tc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);VN(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function U_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zN=37297;let HN=0;function GN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const F_=new Fe;function WN(t){$e._getMatrix(F_,$e.workingColorSpace,t);const e=`mat3( ${F_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case au:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function O_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+GN(t.getShaderSource(e),a)}else return s}function jN(t,e){const n=WN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const XN={[VM]:"Linear",[zM]:"Reinhard",[HM]:"Cineon",[GM]:"ACESFilmic",[jM]:"AgX",[XM]:"Neutral",[WM]:"Custom"};function KN(t,e){const n=XN[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nc=new H;function $N(){$e.getLuminanceCoefficients(nc);const t=nc.x.toFixed(4),e=nc.y.toFixed(4),n=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function qN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ua(t){return t!==""}function k_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QN=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(t){return t.replace(QN,eI)}const JN=new Map;function eI(t,e){let n=Ve[e];if(n===void 0){const i=JN.get(e);if(i!==void 0)n=Ve[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return up(n)}const tI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(t){return t.replace(tI,nI)}function nI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function z_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const iI={[xc]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function rI(t){return iI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sI={[xs]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function oI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":sI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const aI={[bo]:"ENVMAP_MODE_REFRACTION"};function lI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":aI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cI={[BM]:"ENVMAP_BLENDING_MULTIPLY",[JP]:"ENVMAP_BLENDING_MIX",[e3]:"ENVMAP_BLENDING_ADD"};function uI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":cI[t.combine]||"ENVMAP_BLENDING_NONE"}function fI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function dI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rI(n),c=oI(n),u=lI(n),d=uI(n),f=fI(n),p=YN(n),v=qN(s),y=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ua).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(m=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==bi?KN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,jN("linearToOutputTexel",n.outputColorSpace),$N(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),o=up(o),o=k_(o,n),o=B_(o,n),a=up(a),a=k_(a,n),a=B_(a,n),o=V_(o),a=V_(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Jv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=g+m+o,M=g+h+a,w=U_(r,r.VERTEX_SHADER,_),T=U_(r,r.FRAGMENT_SHADER,M);r.attachShader(y,w),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(R){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",j=r.getShaderInfoLog(w)||"",K=r.getShaderInfoLog(T)||"",I=O.trim(),G=j.trim(),F=K.trim();let k=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,w,T);else{const Z=O_(r,w,"vertex"),ae=O_(r,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Z+`
`+ae)}else I!==""?De("WebGLProgram: Program Info Log:",I):(G===""||F==="")&&(X=!1);X&&(R.diagnostics={runnable:k,programLog:I,vertexShader:{log:G,prefix:m},fragmentShader:{log:F,prefix:h}})}r.deleteShader(w),r.deleteShader(T),x=new Tc(r,y),b=ZN(r,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,zN)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HN++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let hI=0;class pI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mI(e),n.set(e,i)),i}}class mI{constructor(e){this.id=hI++,this.code=e,this.usedTimes=0}}function gI(t){return t===ys||t===ru||t===su}function vI(t,e,n,i,r,s){const o=new iE,a=new pI,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,b,P,R,O,j){const K=R.fog,I=O.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||G,F),X=k&&k.mapping===Nu?k.image.height:null,Z=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,he=ae!==void 0?ae.length:0;let He=0;I.morphAttributes.position!==void 0&&(He=1),I.morphAttributes.normal!==void 0&&(He=2),I.morphAttributes.color!==void 0&&(He=3);let je,Le,q,de;if(Z){const Oe=yi[Z];je=Oe.vertexShader,Le=Oe.fragmentShader}else je=x.vertexShader,Le=x.fragmentShader,a.update(x),q=a.getVertexShaderID(x),de=a.getFragmentShaderID(x);const le=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,Pe=O.isBatchedMesh===!0,vt=!!x.map,Xe=!!x.matcap,it=!!k,dt=!!x.aoMap,Ge=!!x.lightMap,Ot=!!x.bumpMap,_t=!!x.normalMap,wn=!!x.displacementMap,N=!!x.emissiveMap,kt=!!x.metalnessMap,Ke=!!x.roughnessMap,ct=x.anisotropy>0,pe=x.clearcoat>0,Tt=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,B=x.transmission>0,Q=ct&&!!x.anisotropyMap,te=pe&&!!x.clearcoatMap,re=pe&&!!x.clearcoatNormalMap,fe=pe&&!!x.clearcoatRoughnessMap,$=A&&!!x.iridescenceMap,J=A&&!!x.iridescenceThicknessMap,_e=S&&!!x.sheenColorMap,Se=S&&!!x.sheenRoughnessMap,ce=!!x.specularMap,se=!!x.specularColorMap,Ne=!!x.specularIntensityMap,Be=B&&!!x.transmissionMap,Je=B&&!!x.thicknessMap,D=!!x.gradientMap,oe=!!x.alphaMap,Y=x.alphaTest>0,xe=!!x.alphaHash,ue=!!x.extensions;let ee=bi;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ee=t.toneMapping);const we={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:Le,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:vt,matcap:Xe,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:Ge,bumpMap:Ot,normalMap:_t,displacementMap:wn,emissiveMap:N,normalMapObjectSpace:_t&&x.normalMapType===i3,normalMapTangentSpace:_t&&x.normalMapType===qv,packedNormalMap:_t&&x.normalMapType===qv&&gI(x.normalMap.format),metalnessMap:kt,roughnessMap:Ke,anisotropy:ct,anisotropyMap:Q,clearcoat:pe,clearcoatMap:te,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,dispersion:Tt,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:J,sheen:S,sheenColorMap:_e,sheenRoughnessMap:Se,specularMap:ce,specularColorMap:se,specularIntensityMap:Ne,transmission:B,transmissionMap:Be,thicknessMap:Je,gradientMap:D,opaque:x.transparent===!1&&x.blending===mo&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:Y,alphaHash:xe,combine:x.combine,mapUv:vt&&v(x.map.channel),aoMapUv:dt&&v(x.aoMap.channel),lightMapUv:Ge&&v(x.lightMap.channel),bumpMapUv:Ot&&v(x.bumpMap.channel),normalMapUv:_t&&v(x.normalMap.channel),displacementMapUv:wn&&v(x.displacementMap.channel),emissiveMapUv:N&&v(x.emissiveMap.channel),metalnessMapUv:kt&&v(x.metalnessMap.channel),roughnessMapUv:Ke&&v(x.roughnessMap.channel),anisotropyMapUv:Q&&v(x.anisotropyMap.channel),clearcoatMapUv:te&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(x.sheenRoughnessMap.channel),specularMapUv:ce&&v(x.specularMap.channel),specularColorMapUv:se&&v(x.specularColorMap.channel),specularIntensityMapUv:Ne&&v(x.specularIntensityMap.channel),transmissionMapUv:Be&&v(x.transmissionMap.channel),thicknessMapUv:Je&&v(x.thicknessMap.channel),alphaMapUv:oe&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_t||ct),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(vt||oe),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Re,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:He,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:N&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vi,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ue&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&x.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(h(b,x),g(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function h(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function _(x){const b=p[x.type];let P;if(b){const R=yi[b];P=V3.clone(R.uniforms)}else P=x.uniforms;return P}function M(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new dI(t,b,x,r),c.push(P),u.set(b,P)),P}function w(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:_,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function _I(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function xI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function H_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function G_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,v,y,m,h){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:v,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:h},t[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=v,g.materialVariant=o(f),g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=m,g.group=h),e++,g}function l(f,p,v,y,m,h){const g=a(f,p,v,y,m,h);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(f,p,v,y,m,h){const g=a(f,p,v,y,m,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,p){n.length>1&&n.sort(f||xI),i.length>1&&i.sort(p||H_),r.length>1&&r.sort(p||H_)}function d(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function yI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new G_,t.set(i,[o])):r>=s.length?(o=new G_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new tt};break;case"SpotLight":n={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function MI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let EI=0;function TI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wI(t){const e=new SI,n=MI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Ft,o=new Ft;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,v=0,y=0,m=0,h=0,g=0,_=0,M=0,w=0,T=0,C=0;c.sort(TI);for(let b=0,P=c.length;b<P;b++){const R=c[b],O=R.color,j=R.intensity,K=R.distance;let I=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ys?I=R.shadow.map.texture:I=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*j,d+=O.g*j,f+=O.b*j;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],j);C++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const F=R.shadow,k=n.get(R);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(O).multiplyScalar(j),G.distance=K,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[y]=G;const F=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,F.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[y]=F.matrix,R.castShadow){const k=n.get(R);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,i.spotShadow[y]=k,i.spotShadowMap[y]=I,M++}y++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(O).multiplyScalar(j),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const F=R.shadow,k=n.get(R);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,i.pointShadow[v]=k,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=R.shadow.matrix,_++}i.point[v]=G,v++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(j),G.groundColor.copy(R.groundColor).multiplyScalar(j),i.hemi[h]=G,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==g||x.numPointShadows!==_||x.numSpotShadows!==M||x.numSpotMaps!==w||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=p,x.pointLength=v,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=g,x.numPointShadows=_,x.numSpotShadows=M,x.numSpotMaps=w,x.numLightProbes=C,i.version=EI++)}function l(c,u){let d=0,f=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const _=c[h];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function W_(t){const e=new wI(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function AI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new W_(t),e.set(r,[a])):s>=o.length?(a=new W_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const CI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RI=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],PI=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],j_=new Ft,ea=new H,ad=new H;function DI(t,e,n){let i=new uE;const r=new ot,s=new ot,o=new Nt,a=new W3,l=new j3,c={},u=n.maxTextureSize,d={[Or]:En,[En]:Or,[Vi]:Vi},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:CI,fragmentShader:bI}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Jn;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ir(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let h=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===IP&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xc);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ki),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const j=h!==this.type;j&&C.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(I=>I.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,I=T.length;K<I;K++){const G=T[K],F=G.shadow;if(F===void 0){De("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const k=F.getFrameExtents();r.multiply(k),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,F.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||j===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ca){if(G.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ri(r.x,r.y,{format:ys,type:tr,minFilter:cn,magFilter:cn,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new Ro(r.x,r.y,Mi),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=nr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt}else G.isPointLight?(F.map=new xE(r.x),F.map.depthTexture=new k3(r.x,Pi)):(F.map=new Ri(r.x,r.y),F.map.depthTexture=new Ro(r.x,r.y,Pi)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=nr,this.type===xc?(F.map.depthTexture.compareFunction=X?$m:Km,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Yt,F.map.depthTexture.magFilter=Yt);F.camera.updateProjectionMatrix()}const Z=F.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Z;ae++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(F.map),t.clear());const he=F.getViewport(ae);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(o)}if(G.isPointLight){const he=F.camera,He=F.matrix,je=G.distance||he.far;je!==he.far&&(he.far=je,he.updateProjectionMatrix()),ea.setFromMatrixPosition(G.matrixWorld),he.position.copy(ea),ad.copy(he.position),ad.add(RI[ae]),he.up.copy(PI[ae]),he.lookAt(ad),he.updateMatrixWorld(),He.makeTranslation(-ea.x,-ea.y,-ea.z),j_.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),F._frustum.setFromProjectionMatrix(j_,he.coordinateSystem,he.reversedDepth)}else F.updateMatrices(G);i=F.getFrustum(),M(C,x,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===ca&&g(F,x),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,P,R)};function g(T,C){const x=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ri(r.x,r.y,{format:ys,type:tr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,p,y,null)}function _(T,C,x,b){let P=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=P.uuid,j=C.uuid;let K=c[O];K===void 0&&(K={},c[O]=K);let I=K[j];I===void 0&&(I=P.clone(),K[j]=I,C.addEventListener("dispose",w)),P=I}if(P.visible=C.visible,P.wireframe=C.wireframe,b===ca?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=x}return P}function M(T,C,x,b,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===ca)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const j=e.update(T),K=T.material;if(Array.isArray(K)){const I=j.groups;for(let G=0,F=I.length;G<F;G++){const k=I[G],X=K[k.materialIndex];if(X&&X.visible){const Z=_(T,X,b,P);T.onBeforeShadow(t,T,C,x,j,Z,k),t.renderBufferDirect(x,null,j,Z,T,k),T.onAfterShadow(t,T,C,x,j,Z,k)}}}else if(K.visible){const I=_(T,K,b,P);T.onBeforeShadow(t,T,C,x,j,I,null),t.renderBufferDirect(x,null,j,I,T,null),T.onAfterShadow(t,T,C,x,j,I,null)}}const O=T.children;for(let j=0,K=O.length;j<K;j++)M(O[j],C,x,b,P)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const b=c[x],P=T.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function LI(t,e){function n(){let D=!1;const oe=new Nt;let Y=null;const xe=new Nt(0,0,0,0);return{setMask:function(ue){Y!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){D=ue},setClear:function(ue,ee,we,Oe,bt){bt===!0&&(ue*=Oe,ee*=Oe,we*=Oe),oe.set(ue,ee,we,Oe),xe.equals(oe)===!1&&(t.clearColor(ue,ee,we,Oe),xe.copy(oe))},reset:function(){D=!1,Y=null,xe.set(-1,0,0,0)}}}function i(){let D=!1,oe=!1,Y=null,xe=null,ue=null;return{setReversed:function(ee){if(oe!==ee){const we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),oe=ee;const Oe=ue;ue=null,this.setClear(Oe)}},getReversed:function(){return oe},setTest:function(ee){ee?le(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ee){Y!==ee&&!D&&(t.depthMask(ee),Y=ee)},setFunc:function(ee){if(oe&&(ee=h3[ee]),xe!==ee){switch(ee){case Sh:t.depthFunc(t.NEVER);break;case Mh:t.depthFunc(t.ALWAYS);break;case Eh:t.depthFunc(t.LESS);break;case Co:t.depthFunc(t.LEQUAL);break;case Th:t.depthFunc(t.EQUAL);break;case wh:t.depthFunc(t.GEQUAL);break;case Ah:t.depthFunc(t.GREATER);break;case Ch:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ue!==ee&&(ue=ee,oe&&(ee=1-ee),t.clearDepth(ee))},reset:function(){D=!1,Y=null,xe=null,ue=null,oe=!1}}}function r(){let D=!1,oe=null,Y=null,xe=null,ue=null,ee=null,we=null,Oe=null,bt=null;return{setTest:function(rt){D||(rt?le(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!D&&(t.stencilMask(rt),oe=rt)},setFunc:function(rt,Di,pi){(Y!==rt||xe!==Di||ue!==pi)&&(t.stencilFunc(rt,Di,pi),Y=rt,xe=Di,ue=pi)},setOp:function(rt,Di,pi){(ee!==rt||we!==Di||Oe!==pi)&&(t.stencilOp(rt,Di,pi),ee=rt,we=Di,Oe=pi)},setLocked:function(rt){D=rt},setClear:function(rt){bt!==rt&&(t.clearStencil(rt),bt=rt)},reset:function(){D=!1,oe=null,Y=null,xe=null,ue=null,ee=null,we=null,Oe=null,bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,v=[],y=null,m=!1,h=null,g=null,_=null,M=null,w=null,T=null,C=null,x=new tt(0,0,0),b=0,P=!1,R=null,O=null,j=null,K=null,I=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=k>=2);let Z=null,ae={};const he=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),je=new Nt().fromArray(he),Le=new Nt().fromArray(He);function q(D,oe,Y,xe){const ue=new Uint8Array(4),ee=t.createTexture();t.bindTexture(D,ee),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<Y;we++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ee}const de={};de[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Co),Ot(!1),_t(Kv),le(t.CULL_FACE),dt(Ki);function le(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function Re(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ie(D,oe){return f[D]!==oe?(t.bindFramebuffer(D,oe),f[D]=oe,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Pe(D,oe){let Y=v,xe=!1;if(D){Y=p.get(oe),Y===void 0&&(Y=[],p.set(oe,Y));const ue=D.textures;if(Y.length!==ue.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,we=ue.length;ee<we;ee++)Y[ee]=t.COLOR_ATTACHMENT0+ee;Y.length=ue.length,xe=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,xe=!0);xe&&t.drawBuffers(Y)}function vt(D){return y!==D?(t.useProgram(D),y=D,!0):!1}const Xe={[es]:t.FUNC_ADD,[FP]:t.FUNC_SUBTRACT,[OP]:t.FUNC_REVERSE_SUBTRACT};Xe[kP]=t.MIN,Xe[BP]=t.MAX;const it={[VP]:t.ZERO,[zP]:t.ONE,[HP]:t.SRC_COLOR,[xh]:t.SRC_ALPHA,[$P]:t.SRC_ALPHA_SATURATE,[XP]:t.DST_COLOR,[WP]:t.DST_ALPHA,[GP]:t.ONE_MINUS_SRC_COLOR,[yh]:t.ONE_MINUS_SRC_ALPHA,[KP]:t.ONE_MINUS_DST_COLOR,[jP]:t.ONE_MINUS_DST_ALPHA,[YP]:t.CONSTANT_COLOR,[qP]:t.ONE_MINUS_CONSTANT_COLOR,[ZP]:t.CONSTANT_ALPHA,[QP]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(D,oe,Y,xe,ue,ee,we,Oe,bt,rt){if(D===Ki){m===!0&&(Re(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),D!==UP){if(D!==h||rt!==P){if((g!==es||w!==es)&&(t.blendEquation(t.FUNC_ADD),g=es,w=es),rt)switch(D){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFunc(t.ONE,t.ONE);break;case $v:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $v:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yv:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}_=null,M=null,T=null,C=null,x.set(0,0,0),b=0,h=D,P=rt}return}ue=ue||oe,ee=ee||Y,we=we||xe,(oe!==g||ue!==w)&&(t.blendEquationSeparate(Xe[oe],Xe[ue]),g=oe,w=ue),(Y!==_||xe!==M||ee!==T||we!==C)&&(t.blendFuncSeparate(it[Y],it[xe],it[ee],it[we]),_=Y,M=xe,T=ee,C=we),(Oe.equals(x)===!1||bt!==b)&&(t.blendColor(Oe.r,Oe.g,Oe.b,bt),x.copy(Oe),b=bt),h=D,P=!1}function Ge(D,oe){D.side===Vi?Re(t.CULL_FACE):le(t.CULL_FACE);let Y=D.side===En;oe&&(Y=!Y),Ot(Y),D.blending===mo&&D.transparent===!1?dt(Ki):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const xe=D.stencilWrite;a.setTest(xe),xe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(D){R!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),R=D)}function _t(D){D!==LP?(le(t.CULL_FACE),D!==O&&(D===Kv?t.cullFace(t.BACK):D===NP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),O=D}function wn(D){D!==j&&(F&&t.lineWidth(D),j=D)}function N(D,oe,Y){D?(le(t.POLYGON_OFFSET_FILL),(K!==oe||I!==Y)&&(K=oe,I=Y,o.getReversed()&&(oe=-oe),t.polygonOffset(oe,Y))):Re(t.POLYGON_OFFSET_FILL)}function kt(D){D?le(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function Ke(D){D===void 0&&(D=t.TEXTURE0+G-1),Z!==D&&(t.activeTexture(D),Z=D)}function ct(D,oe,Y){Y===void 0&&(Z===null?Y=t.TEXTURE0+G-1:Y=Z);let xe=ae[Y];xe===void 0&&(xe={type:void 0,texture:void 0},ae[Y]=xe),(xe.type!==D||xe.texture!==oe)&&(Z!==Y&&(t.activeTexture(Y),Z=Y),t.bindTexture(D,oe||de[D]),xe.type=D,xe.texture=oe)}function pe(){const D=ae[Z];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Tt(){try{t.compressedTexImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function B(){try{t.texSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function re(){try{t.texStorage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function fe(){try{t.texStorage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function $(){try{t.texImage2D(...arguments)}catch(D){Ze("WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){Ze("WebGLState:",D)}}function _e(D){return d[D]!==void 0?d[D]:t.getParameter(D)}function Se(D,oe){d[D]!==oe&&(t.pixelStorei(D,oe),d[D]=oe)}function ce(D){je.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),je.copy(D))}function se(D){Le.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Le.copy(D))}function Ne(D,oe){let Y=c.get(oe);Y===void 0&&(Y=new WeakMap,c.set(oe,Y));let xe=Y.get(D);xe===void 0&&(xe=t.getUniformBlockIndex(oe,D.name),Y.set(D,xe))}function Be(D,oe){const xe=c.get(oe).get(D);l.get(oe)!==xe&&(t.uniformBlockBinding(oe,xe,D.__bindingPointIndex),l.set(oe,xe))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,ae={},f={},p=new WeakMap,v=[],y=null,m=!1,h=null,g=null,_=null,M=null,w=null,T=null,C=null,x=new tt(0,0,0),b=0,P=!1,R=null,O=null,j=null,K=null,I=null,je.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Re,bindFramebuffer:Ie,drawBuffers:Pe,useProgram:vt,setBlending:dt,setMaterial:Ge,setFlipSided:Ot,setCullFace:_t,setLineWidth:wn,setPolygonOffset:N,setScissorTest:kt,activeTexture:Ke,bindTexture:ct,unbindTexture:pe,compressedTexImage2D:Tt,compressedTexImage3D:A,texImage2D:$,texImage3D:J,pixelStorei:Se,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:Be,texStorage2D:re,texStorage3D:fe,texSubImage2D:S,texSubImage3D:B,compressedTexSubImage2D:Q,compressedTexSubImage3D:te,scissor:ce,viewport:se,reset:Je}}function NI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return v?new OffscreenCanvas(A,S):cu("canvas")}function m(A,S,B){let Q=1;const te=Tt(A);if((te.width>B||te.height>B)&&(Q=B/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(Q*te.width),fe=Math.floor(Q*te.height);f===void 0&&(f=y(re,fe));const $=S?y(re,fe):f;return $.width=re,$.height=fe,$.getContext("2d").drawImage(A,0,0,re,fe),De("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+re+"x"+fe+")."),$}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function h(A){return A.generateMipmaps}function g(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(A,S,B,Q,te,re=!1){if(A!==null){if(t[A]!==void 0)return t[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;Q&&(fe=e.get("EXT_texture_norm16"),fe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),B===t.SHORT&&fe&&($=fe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),S===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),B===t.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),S===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),S===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),S===t.RGB&&(B===t.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),B===t.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),S===t.RGBA){const J=re?au:$e.getTransfer(te);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=J===et?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),B===t.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(A,S){let B;return A?S===null||S===Pi||S===Ka?B=t.DEPTH24_STENCIL8:S===Mi?B=t.DEPTH32F_STENCIL8:S===Xa&&(B=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===Ka?B=t.DEPTH_COMPONENT24:S===Mi?B=t.DEPTH_COMPONENT32F:S===Xa&&(B=t.DEPTH_COMPONENT16),B}function T(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(A){const S=A.target;S.removeEventListener("dispose",x),R(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const B=A.source,Q=p.get(B);if(Q){const te=Q[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(A),Object.keys(Q).length===0&&p.delete(B)}i.remove(A)}function P(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const B=A.source,Q=p.get(B);delete Q[S.__cacheKey],o.memory.textures--}function R(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let te=0;te<S.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let Q=0,te=B.length;Q<te;Q++){const re=i.get(B[Q]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(A)}let O=0;function j(){O=0}function K(){return O}function I(A){O=A}function G(){const A=O;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function k(A,S){const B=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const Q=A.image;if(Q===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(B,A,S);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+S)}function X(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Re(B,A,S);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+S)}function Z(A,S){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Re(B,A,S);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+S)}function ae(A,S){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ie(B,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+S)}const he={[bh]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},He={[Yt]:t.NEAREST,[t3]:t.NEAREST_MIPMAP_NEAREST,[Ll]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Df]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},je={[r3]:t.NEVER,[c3]:t.ALWAYS,[s3]:t.LESS,[Km]:t.LEQUAL,[o3]:t.EQUAL,[$m]:t.GEQUAL,[a3]:t.GREATER,[l3]:t.NOTEQUAL};function Le(A,S){if(S.type===Mi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Df||S.magFilter===Ll||S.magFilter===ls||S.minFilter===cn||S.minFilter===Df||S.minFilter===Ll||S.minFilter===ls)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,he[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,he[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,he[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,He[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,He[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,je[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==Ll&&S.minFilter!==ls||S.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function q(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const Q=S.source;let te=p.get(Q);te===void 0&&(te={},p.set(Q,te));const re=F(S);if(re!==A.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[re].usedTimes++;const fe=te[A.__cacheKey];fe!==void 0&&(te[A.__cacheKey].usedTimes--,fe.usedTimes===0&&P(S)),A.__cacheKey=re,A.__webglTexture=te[re].texture}return B}function de(A,S,B){return Math.floor(Math.floor(A/B)/S)}function le(A,S,B,Q){const re=A.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,B,Q,S.data);else{re.sort((Se,ce)=>Se.start-ce.start);let fe=0;for(let Se=1;Se<re.length;Se++){const ce=re[fe],se=re[Se],Ne=ce.start+ce.count,Be=de(se.start,S.width,4),Je=de(ce.start,S.width,4);se.start<=Ne+1&&Be===Je&&de(se.start+se.count-1,S.width,4)===Be?ce.count=Math.max(ce.count,se.start+se.count-ce.start):(++fe,re[fe]=se)}re.length=fe+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,ce=re.length;Se<ce;Se++){const se=re[Se],Ne=Math.floor(se.start/4),Be=Math.ceil(se.count/4),Je=Ne%S.width,D=Math.floor(Ne/S.width),oe=Be,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Je,D,oe,Y,B,Q,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function Re(A,S,B){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const te=q(A,S),re=S.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+B);const fe=i.get(re);if(re.version!==fe.__version||te===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Y=$e.getPrimaries($e.workingColorSpace),xe=S.colorSpace===yr?null:$e.getPrimaries(S.colorSpace),ue=S.colorSpace===yr||Y===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let J=m(S.image,!1,r.maxTextureSize);J=pe(S,J);const _e=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let ce=M(S.internalFormat,_e,Se,S.normalized,S.colorSpace,S.isVideoTexture);Le(Q,S);let se;const Ne=S.mipmaps,Be=S.isVideoTexture!==!0,Je=fe.__version===void 0||te===!0,D=re.dataReady,oe=T(S,J);if(S.isDepthTexture)ce=w(S.format===cs,S.type),Je&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ce,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,null));else if(S.isDataTexture)if(Ne.length>0){Be&&Je&&n.texStorage2D(t.TEXTURE_2D,oe,ce,Ne[0].width,Ne[0].height);for(let Y=0,xe=Ne.length;Y<xe;Y++)se=Ne[Y],Be?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se.width,se.height,_e,Se,se.data):n.texImage2D(t.TEXTURE_2D,Y,ce,se.width,se.height,0,_e,Se,se.data);S.generateMipmaps=!1}else Be?(Je&&n.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height),D&&le(S,J,_e,Se)):n.texImage2D(t.TEXTURE_2D,0,ce,J.width,J.height,0,_e,Se,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,Ne[0].width,Ne[0].height,J.depth);for(let Y=0,xe=Ne.length;Y<xe;Y++)if(se=Ne[Y],S.format!==ui)if(_e!==null)if(Be){if(D)if(S.layerUpdates.size>0){const ue=M_(se.width,se.height,S.format,S.type);for(const ee of S.layerUpdates){const we=se.data.subarray(ee*ue/se.data.BYTES_PER_ELEMENT,(ee+1)*ue/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ee,se.width,se.height,1,_e,we)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,J.depth,_e,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ce,se.width,se.height,J.depth,0,se.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,se.width,se.height,J.depth,_e,Se,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ce,se.width,se.height,J.depth,0,_e,Se,se.data)}else{Be&&Je&&n.texStorage2D(t.TEXTURE_2D,oe,ce,Ne[0].width,Ne[0].height);for(let Y=0,xe=Ne.length;Y<xe;Y++)se=Ne[Y],S.format!==ui?_e!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,se.width,se.height,_e,se.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ce,se.width,se.height,0,se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se.width,se.height,_e,Se,se.data):n.texImage2D(t.TEXTURE_2D,Y,ce,se.width,se.height,0,_e,Se,se.data)}else if(S.isDataArrayTexture)if(Be){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,ce,J.width,J.height,J.depth),D)if(S.layerUpdates.size>0){const Y=M_(J.width,J.height,S.format,S.type);for(const xe of S.layerUpdates){const ue=J.data.subarray(xe*Y/J.data.BYTES_PER_ELEMENT,(xe+1)*Y/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,_e,Se,ue)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(S.isData3DTexture)Be?(Je&&n.texStorage3D(t.TEXTURE_3D,oe,ce,J.width,J.height,J.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_e,Se,J.data)):n.texImage3D(t.TEXTURE_3D,0,ce,J.width,J.height,J.depth,0,_e,Se,J.data);else if(S.isFramebufferTexture){if(Je)if(Be)n.texStorage2D(t.TEXTURE_2D,oe,ce,J.width,J.height);else{let Y=J.width,xe=J.height;for(let ue=0;ue<oe;ue++)n.texImage2D(t.TEXTURE_2D,ue,ce,Y,xe,0,_e,Se,null),Y>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),d.add(S),Y.onpaint=Oe=>{const bt=Oe.changedElements;for(const rt of d)bt.includes(rt.image)&&(rt.needsUpdate=!0)},Y.requestPaint();return}const xe=0,ue=t.RGBA,ee=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ue,ee,we,J),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Be&&Je){const Y=Tt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,oe,ce,Y.width,Y.height)}for(let Y=0,xe=Ne.length;Y<xe;Y++)se=Ne[Y],Be?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e,Se,se):n.texImage2D(t.TEXTURE_2D,Y,ce,_e,Se,se);S.generateMipmaps=!1}else if(Be){if(Je){const Y=Tt(J);n.texStorage2D(t.TEXTURE_2D,oe,ce,Y.width,Y.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Se,J)}else n.texImage2D(t.TEXTURE_2D,0,ce,_e,Se,J);h(S)&&g(Q),fe.__version=re.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ie(A,S,B){if(S.image.length!==6)return;const Q=q(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const re=i.get(te);if(te.version!==re.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const fe=$e.getPrimaries($e.workingColorSpace),$=S.colorSpace===yr?null:$e.getPrimaries(S.colorSpace),J=S.colorSpace===yr||fe===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!_e&&!Se?ce[ee]=m(S.image[ee],!0,r.maxCubemapSize):ce[ee]=Se?S.image[ee].image:S.image[ee],ce[ee]=pe(S,ce[ee]);const se=ce[0],Ne=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),Je=M(S.internalFormat,Ne,Be,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,oe=re.__version===void 0||Q===!0,Y=te.dataReady;let xe=T(S,se);Le(t.TEXTURE_CUBE_MAP,S);let ue;if(_e){D&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,se.width,se.height);for(let ee=0;ee<6;ee++){ue=ce[ee].mipmaps;for(let we=0;we<ue.length;we++){const Oe=ue[we];S.format!==ui?Ne!==null?D?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Oe.width,Oe.height,Ne,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Je,Oe.width,Oe.height,0,Oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Oe.width,Oe.height,Ne,Be,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Je,Oe.width,Oe.height,0,Ne,Be,Oe.data)}}}else{if(ue=S.mipmaps,D&&oe){ue.length>0&&xe++;const ee=Tt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Ne,Be,ce[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,ce[ee].width,ce[ee].height,0,Ne,Be,ce[ee].data);for(let we=0;we<ue.length;we++){const bt=ue[we].image[ee].image;D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,bt.width,bt.height,Ne,Be,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Je,bt.width,bt.height,0,Ne,Be,bt.data)}}else{D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,Be,ce[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,Ne,Be,ce[ee]);for(let we=0;we<ue.length;we++){const Oe=ue[we];D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Ne,Be,Oe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Je,Ne,Be,Oe.image[ee])}}}h(S)&&g(t.TEXTURE_CUBE_MAP),re.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Pe(A,S,B,Q,te,re){const fe=s.convert(B.format,B.colorSpace),$=s.convert(B.type),J=M(B.internalFormat,fe,$,B.normalized,B.colorSpace),_e=i.get(S),Se=i.get(B);if(Se.__renderTarget=S,!_e.__hasExternalTextures){const ce=Math.max(1,S.width>>re),se=Math.max(1,S.height>>re);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,re,J,ce,se,S.depth,0,fe,$,null):n.texImage2D(te,re,J,ce,se,0,fe,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ke(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,Se.__webglTexture,0,kt(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,Se.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(A,S,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const Q=S.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,re=w(S.stencilBuffer,te),fe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ke(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(S),re,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(S),re,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,re,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,A)}else{const Q=S.textures;for(let te=0;te<Q.length;te++){const re=Q[te],fe=s.convert(re.format,re.colorSpace),$=s.convert(re.type),J=M(re.internalFormat,fe,$,re.normalized,re.colorSpace);Ke(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,kt(S),J,S.width,S.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,kt(S),J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Xe(A,S,B){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S.depthTexture);const _e=s.convert(S.depthTexture.format),Se=s.convert(S.depthTexture.type);let ce;S.depthTexture.format===nr?ce=t.DEPTH_COMPONENT24:S.depthTexture.format===cs&&(ce=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ce,S.width,S.height,0,_e,Se,null)}}else k(S.depthTexture,0);const re=te.__webglTexture,fe=kt(S),$=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,J=S.depthTexture.format===cs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===nr)Ke(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,re,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,re,0);else if(S.depthTexture.format===cs)Ke(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,$,re,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,J,$,re,0);else throw new Error("Unknown depthTexture format")}function it(A){const S=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)Xe(S.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Xe(S.__webglFramebuffer[0],A,0):Xe(S.__webglFramebuffer,A,0)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=t.createRenderbuffer(),vt(S.__webglDepthbuffer[Q],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,re)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),vt(S.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(A,S,B){const Q=i.get(A);S!==void 0&&Pe(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&it(A)}function Ge(A){const S=A.texture,B=i.get(A),Q=i.get(S);A.addEventListener("dispose",x);const te=A.textures,re=A.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,o.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let J=0;J<S.mipmaps.length;J++)B.__webglFramebuffer[$][J]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(fe)for(let $=0,J=te.length;$<J;$++){const _e=i.get(te[$]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ke(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<te.length;$++){const J=te[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const _e=s.convert(J.format,J.colorSpace),Se=s.convert(J.type),ce=M(J.internalFormat,_e,Se,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),se=kt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),vt(B.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Le(t.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(B.__webglFramebuffer[$][J],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Pe(B.__webglFramebuffer[$],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(S)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let $=0,J=te.length;$<J;$++){const _e=te[$],Se=i.get(_e);let ce=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Se.__webglTexture),Le(ce,_e),Pe(B.__webglFramebuffer,A,_e,t.COLOR_ATTACHMENT0+$,ce,0),h(_e)&&g(ce)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,Q.__webglTexture),Le($,S),S.mipmaps&&S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Pe(B.__webglFramebuffer[J],A,S,t.COLOR_ATTACHMENT0,$,J);else Pe(B.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,$,0);h(S)&&g($),n.unbindTexture()}A.depthBuffer&&it(A)}function Ot(A){const S=A.textures;for(let B=0,Q=S.length;B<Q;B++){const te=S[B];if(h(te)){const re=_(A),fe=i.get(te).__webglTexture;n.bindTexture(re,fe),g(re),n.unbindTexture()}}}const _t=[],wn=[];function N(A){if(A.samples>0){if(Ke(A)===!1){const S=A.textures,B=A.width,Q=A.height;let te=t.COLOR_BUFFER_BIT;const re=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(A),$=S.length>1;if($)for(let _e=0;_e<S.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const J=A.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<S.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Se=i.get(S[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,te,t.NEAREST),l===!0&&(_t.length=0,wn.length=0,_t.push(t.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(_t.push(re),wn.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,wn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_t))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let _e=0;_e<S.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const Se=i.get(S[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function kt(A){return Math.min(r.maxSamples,A.samples)}function Ke(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function pe(A,S){const B=A.colorSpace,Q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ou&&B!==yr&&($e.getTransfer(B)===et?(Q!==ui||te!==Kn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",B)),S}function Tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.getTextureUnits=K,this.setTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=ae,this.rebindTextures=dt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function II(t,e){function n(i,r=yr){let s;const o=$e.getTransfer(r);if(i===Kn)return t.UNSIGNED_BYTE;if(i===Hm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ZM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$M)return t.BYTE;if(i===YM)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===zm)return t.INT;if(i===Pi)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===QM)return t.ALPHA;if(i===JM)return t.RGB;if(i===ui)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===cs)return t.DEPTH_STENCIL;if(i===eE)return t.RED;if(i===Wm)return t.RED_INTEGER;if(i===ys)return t.RG;if(i===jm)return t.RG_INTEGER;if(i===Xm)return t.RGBA_INTEGER;if(i===yc||i===Sc||i===Mc||i===Ec)if(o===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===yc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===yc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ph||i===Dh||i===Lh||i===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Uh||i===Fh||i===Oh||i===kh||i===ru||i===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ih||i===Uh)return o===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oh)return s.COMPRESSED_R11_EAC;if(i===kh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ru)return s.COMPRESSED_RG11_EAC;if(i===Bh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vh||i===zh||i===Hh||i===Gh||i===Wh||i===jh||i===Xh||i===Kh||i===$h||i===Yh||i===qh||i===Zh||i===Qh||i===Jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$h)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jh)return o===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ep||i===tp||i===np)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ep)return o===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===np)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ip||i===rp||i===su||i===sp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ip)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const UI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new hE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:UI,fragmentShader:FI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ir(new Uu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kI extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",m=new OI,h={},g=n.getContextAttributes();let _=null,M=null;const w=[],T=[],C=new ot;let x=null;const b=new Dn;b.viewport=new Nt;const P=new Dn;P.viewport=new Nt;const R=[b,P],O=new K3;let j=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let de=w[q];return de===void 0&&(de=new Bf,w[q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(q){let de=w[q];return de===void 0&&(de=new Bf,w[q]=de),de.getGripSpace()},this.getHand=function(q){let de=w[q];return de===void 0&&(de=new Bf,w[q]=de),de.getHandSpace()};function I(q){const de=T.indexOf(q.inputSource);if(de===-1)return;const le=w[de];le!==void 0&&(le.update(q.inputSource,q.frame,c||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",F);for(let q=0;q<w.length;q++){const de=T[q];de!==null&&(T[q]=null,w[q].disconnect(de))}j=null,K=null,m.reset();for(const q in h)delete h[q];e.setRenderTarget(_),p=null,f=null,d=null,r=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",G),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,Ie=null;g.depth&&(Ie=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?cs:nr,Re=g.stencil?Ka:Pi);const Pe={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ri(f.textureWidth,f.textureHeight,{format:ui,type:Kn,depthTexture:new Ro(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ri(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(q){for(let de=0;de<q.removed.length;de++){const le=q.removed[de],Re=T.indexOf(le);Re>=0&&(T[Re]=null,w[Re].disconnect(le))}for(let de=0;de<q.added.length;de++){const le=q.added[de];let Re=T.indexOf(le);if(Re===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=T.length){T.push(le),Re=Pe;break}else if(T[Pe]===null){T[Pe]=le,Re=Pe;break}if(Re===-1)break}const Ie=w[Re];Ie&&Ie.connect(le)}}const k=new H,X=new H;function Z(q,de,le){k.setFromMatrixPosition(de.matrixWorld),X.setFromMatrixPosition(le.matrixWorld);const Re=k.distanceTo(X),Ie=de.projectionMatrix.elements,Pe=le.projectionMatrix.elements,vt=Ie[14]/(Ie[10]-1),Xe=Ie[14]/(Ie[10]+1),it=(Ie[9]+1)/Ie[5],dt=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],Ot=(Pe[8]+1)/Pe[0],_t=vt*Ge,wn=vt*Ot,N=Re/(-Ge+Ot),kt=N*-Ge;if(de.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(kt),q.translateZ(N),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ke=vt+N,ct=Xe+N,pe=_t-kt,Tt=wn+(Re-kt),A=it*Xe/ct*Ke,S=dt*Xe/ct*Ke;q.projectionMatrix.makePerspective(pe,Tt,A,S,Ke,ct),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,de){de===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(de.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let de=q.near,le=q.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(le=m.depthFar)),O.near=P.near=b.near=de,O.far=P.far=b.far=le,(j!==O.near||K!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),j=O.near,K=O.far),O.layers.mask=q.layers.mask|6,b.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Re=q.parent,Ie=O.cameras;ae(O,Re);for(let Pe=0;Pe<Ie.length;Pe++)ae(Ie[Pe],Re);Ie.length===2?Z(O,b,P):O.projectionMatrix.copy(b.projectionMatrix),he(q,O,Re)};function he(q,de,le){le===null?q.matrix.copy(de.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(de.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(de.projectionMatrix),q.projectionMatrixInverse.copy(de.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ap*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(q){return h[q]};let He=null;function je(q,de){if(u=de.getViewerPose(c||o),v=de,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Re=!1;le.length!==O.cameras.length&&(O.cameras.length=0,Re=!0);for(let Xe=0;Xe<le.length;Xe++){const it=le[Xe];let dt=null;if(p!==null)dt=p.getViewport(it);else{const Ot=d.getViewSubImage(f,it);dt=Ot.viewport,Xe===0&&(e.setRenderTargetTextures(M,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(M))}let Ge=R[Xe];Ge===void 0&&(Ge=new Dn,Ge.layers.enable(Xe),Ge.viewport=new Nt,R[Xe]=Ge),Ge.matrix.fromArray(it.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(it.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(dt.x,dt.y,dt.width,dt.height),Xe===0&&(O.matrix.copy(Ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Re===!0&&O.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Xe=d.getDepthInformation(le[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<le.length;Xe++){const it=le[Xe].camera;if(it){let dt=h[it];dt||(dt=new hE,h[it]=dt);const Ge=d.getCameraImage(it);dt.sourceTexture=Ge}}}}for(let le=0;le<w.length;le++){const Re=T[le],Ie=w[le];Re!==null&&Ie!==void 0&&Ie.update(Re,de,c||o)}He&&He(q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const Le=new vE;Le.setAnimationLoop(je),this.setAnimationLoop=function(q){He=q},this.dispose=function(){}}}const BI=new Ft,TE=new Fe;TE.set(-1,0,0,0,1,0,0,0,1);function VI(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,pE(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,_,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,g,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===En&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===En&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),_=g.envMap,M=g.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(BI.makeRotationFromEuler(M)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(TE),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function c(g,_){let M=r[g.id];M===void 0&&(v(g),M=u(g),r[g.id]=M,g.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(f(g),s[g.id]=T)}function u(g){const _=d();g.__bindingPointIndex=_;const M=t.createBuffer(),w=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],M=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,C=M.length;T<C;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,P=x.length;b<P;b++){const R=x[b];if(p(R,T,b,w)===!0){const O=R.__offset,j=Array.isArray(R.value)?R.value:[R.value];let K=0;for(let I=0;I<j.length;I++){const G=j[I],F=y(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,O+K,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):ArrayBuffer.isView(G)?R.__data.set(new G.constructor(G.buffer,G.byteOffset,R.__data.length)):(G.toArray(R.__data,K),K+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,M,w){const T=g.value,C=_+"_"+M;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:ArrayBuffer.isView(T)?w[C]=T.slice():w[C]=T.clone(),!0;{const x=w[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function v(g){const _=g.uniforms;let M=0;const w=16;for(let C=0,x=_.length;C<x;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let P=0,R=b.length;P<R;P++){const O=b[P],j=Array.isArray(O.value)?O.value:[O.value];for(let K=0,I=j.length;K<I;K++){const G=j[K],F=y(G),k=M%w,X=k%F.boundary,Z=k+X;M+=X,Z!==0&&w-Z<F.storage&&(M+=w-Z),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=F.storage}}}const T=M%w;return T>0&&(M+=w-T),g.__size=M,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):De("WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const HI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function GI(){return _i===null&&(_i=new N3(HI,16,16,ys,tr),_i.name="DFG_LUT",_i.minFilter=cn,_i.magFilter=cn,_i.wrapS=Gi,_i.wrapT=Gi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class wE{constructor(e={}){const{canvas:n=f3(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Kn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const y=p,m=new Set([Xm,jm,Wm]),h=new Set([Kn,Pi,Xa,Ka,Hm,Gm]),g=new Uint32Array(4),_=new Int32Array(4),M=new H;let w=null,T=null;const C=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let R=!1,O=null;this._outputColorSpace=Wn;let j=0,K=0,I=null,G=-1,F=null;const k=new Nt,X=new Nt;let Z=null;const ae=new tt(0);let he=0,He=n.width,je=n.height,Le=1,q=null,de=null;const le=new Nt(0,0,He,je),Re=new Nt(0,0,He,je);let Ie=!1;const Pe=new uE;let vt=!1,Xe=!1;const it=new Ft,dt=new H,Ge=new Nt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function wn(){return I===null?Le:1}let N=i;function kt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vm}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),N===null){const U="webgl2";if(N=kt(U,E),N===null)throw kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let Ke,ct,pe,Tt,A,S,B,Q,te,re,fe,$,J,_e,Se,ce,se,Ne,Be,Je,D,oe,Y;function xe(){Ke=new GL(N),Ke.init(),D=new II(N,Ke),ct=new UL(N,Ke,e,D),pe=new LI(N,Ke),ct.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),Tt=new XL(N),A=new _I,S=new NI(N,Ke,pe,A,ct,D,Tt),B=new HL(P),Q=new q3(N),oe=new NL(N,Q),te=new WL(N,Q,Tt,oe),re=new $L(N,te,Q,oe,Tt),Ne=new KL(N,ct,S),Se=new FL(A),fe=new vI(P,B,Ke,ct,oe,Se),$=new VI(P,A),J=new yI,_e=new AI(Ke),se=new LL(P,B,pe,re,v,l),ce=new DI(P,re,ct),Y=new zI(N,Tt,ct,pe),Be=new IL(N,Ke,Tt),Je=new jL(N,Ke,Tt),Tt.programs=fe.programs,P.capabilities=ct,P.extensions=Ke,P.properties=A,P.renderLists=J,P.shadowMap=ce,P.state=pe,P.info=Tt}xe(),y!==Kn&&(b=new qL(y,n.width,n.height,r,s));const ue=new kI(P,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(E){E!==void 0&&(Le=E,this.setSize(He,je,!1))},this.getSize=function(E){return E.set(He,je)},this.setSize=function(E,U,W=!0){if(ue.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}He=E,je=U,n.width=Math.floor(E*Le),n.height=Math.floor(U*Le),W===!0&&(n.style.width=E+"px",n.style.height=U+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(He*Le,je*Le).floor()},this.setDrawingBufferSize=function(E,U,W){He=E,je=U,Le=W,n.width=Math.floor(E*W),n.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(y===Kn){Ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){De("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,U,W,V){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,U,W,V),pe.viewport(k.copy(le).multiplyScalar(Le).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,U,W,V){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,U,W,V),pe.scissor(X.copy(Re).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){pe.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let V=0;if(E){let z=!1;if(I!==null){const ve=I.texture.format;z=m.has(ve)}if(z){const ve=I.texture.type,Me=h.has(ve),ge=se.getClearColor(),Te=se.getClearAlpha(),Ae=ge.r,ke=ge.g,ze=ge.b;Me?(g[0]=Ae,g[1]=ke,g[2]=ze,g[3]=Te,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ae,_[1]=ke,_[2]=ze,_[3]=Te,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),se.dispose(),J.dispose(),_e.dispose(),A.dispose(),B.dispose(),re.dispose(),oe.dispose(),Y.dispose(),fe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",tg),ue.removeEventListener("sessionend",ng),Hr.stop()};function ee(E){E.preventDefault(),t_("WebGLRenderer: Context Lost."),R=!0}function we(){t_("WebGLRenderer: Context Restored."),R=!1;const E=Tt.autoReset,U=ce.enabled,W=ce.autoUpdate,V=ce.needsUpdate,z=ce.type;xe(),Tt.autoReset=E,ce.enabled=U,ce.autoUpdate=W,ce.needsUpdate=V,ce.type=z}function Oe(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function bt(E){const U=E.target;U.removeEventListener("dispose",bt),rt(U)}function rt(E){Di(E),A.remove(E)}function Di(E){const U=A.get(E).programs;U!==void 0&&(U.forEach(function(W){fe.releaseProgram(W)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,V,z,ve){U===null&&(U=Ot);const Me=z.isMesh&&z.matrixWorld.determinant()<0,ge=RE(E,U,W,V,z);pe.setMaterial(V,Me);let Te=W.index,Ae=1;if(V.wireframe===!0){if(Te=te.getWireframeAttribute(W),Te===void 0)return;Ae=2}const ke=W.drawRange,ze=W.attributes.position;let Ce=ke.start*Ae,st=(ke.start+ke.count)*Ae;ve!==null&&(Ce=Math.max(Ce,ve.start*Ae),st=Math.min(st,(ve.start+ve.count)*Ae)),Te!==null?(Ce=Math.max(Ce,0),st=Math.min(st,Te.count)):ze!=null&&(Ce=Math.max(Ce,0),st=Math.min(st,ze.count));const Rt=st-Ce;if(Rt<0||Rt===1/0)return;oe.setup(z,V,ge,W,Te);let wt,at=Be;if(Te!==null&&(wt=Q.get(Te),at=Je,at.setIndex(wt)),z.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*wn()),at.setMode(N.LINES)):at.setMode(N.TRIANGLES);else if(z.isLine){let Qt=V.linewidth;Qt===void 0&&(Qt=1),pe.setLineWidth(Qt*wn()),z.isLineSegments?at.setMode(N.LINES):z.isLineLoop?at.setMode(N.LINE_LOOP):at.setMode(N.LINE_STRIP)}else z.isPoints?at.setMode(N.POINTS):z.isSprite&&at.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Qt=z._multiDrawStarts,ye=z._multiDrawCounts,An=z._multiDrawCount,qe=Te?Q.get(Te).bytesPerElement:1,Vn=A.get(V).currentProgram.getUniforms();for(let mi=0;mi<An;mi++)Vn.setValue(N,"_gl_DrawID",mi),at.render(Qt[mi]/qe,ye[mi])}else if(z.isInstancedMesh)at.renderInstances(Ce,Rt,z.count);else if(W.isInstancedBufferGeometry){const Qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Qt);at.renderInstances(Ce,Rt,ye)}else at.render(Ce,Rt)};function pi(E,U,W){E.transparent===!0&&E.side===Vi&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,cl(E,U,W),E.side=Or,E.needsUpdate=!0,cl(E,U,W),E.side=Vi):cl(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),T=_e.get(W),T.init(U),x.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const V=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Me=0;Me<ve.length;Me++){const ge=ve[Me];pi(ge,W,z),V.add(ge)}else pi(ve,W,z),V.add(ve)}),T=x.pop(),V},this.compileAsync=function(E,U,W=null){const V=this.compile(E,U,W);return new Promise(z=>{function ve(){if(V.forEach(function(Me){A.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){z(E);return}setTimeout(ve,10)}Ke.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ku=null;function CE(E){ku&&ku(E)}function tg(){Hr.stop()}function ng(){Hr.start()}const Hr=new vE;Hr.setAnimationLoop(CE),typeof self<"u"&&Hr.setContext(self),this.setAnimationLoop=function(E){ku=E,ue.setAnimationLoop(E),E===null?Hr.stop():Hr.start()},ue.addEventListener("sessionstart",tg),ue.addEventListener("sessionend",ng),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;O!==null&&O.renderStart(E,U);const W=ue.enabled===!0&&ue.isPresenting===!0,V=b!==null&&(I===null||W)&&b.begin(P,I);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,U,I),T=_e.get(E,x.length),T.init(U),T.state.textureUnits=S.getTextureUnits(),x.push(T),it.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(it,Ei,U.reversedDepth),Xe=this.localClippingEnabled,vt=Se.init(this.clippingPlanes,Xe),w=J.get(E,C.length),w.init(),C.push(w),ue.enabled===!0&&ue.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Bu(Me,U,-1/0,P.sortObjects)}Bu(E,U,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(q,de),_t=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,_t&&se.addToRenderList(w,E),this.info.render.frame++,vt===!0&&Se.beginShadows();const z=T.state.shadowsArray;if(ce.render(z,E,U),vt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&b.hasRenderPass())===!1){const Me=w.opaque,ge=w.transmissive;if(T.setupLights(),U.isArrayCamera){const Te=U.cameras;if(ge.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const ze=Te[Ae];rg(Me,ge,E,ze)}_t&&se.render(E);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const ze=Te[Ae];ig(w,E,ze,ze.viewport)}}else ge.length>0&&rg(Me,ge,E,U),_t&&se.render(E),ig(w,E,U)}I!==null&&K===0&&(S.updateMultisampleRenderTarget(I),S.updateRenderTargetMipmap(I)),V&&b.end(P),E.isScene===!0&&E.onAfterRender(P,E,U),oe.resetDefaultState(),G=-1,F=null,x.pop(),x.length>0?(T=x[x.length-1],S.setTextureUnits(T.state.textureUnits),vt===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,O!==null&&O.renderEnd()};function Bu(E,U,W,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){V&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);const Me=re.update(E),ge=E.material;ge.visible&&w.push(E,Me,ge,W,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const Me=re.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ge.copy(Me.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(ge)){const Te=Me.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const ze=Te[Ae],Ce=ge[ze.materialIndex];Ce&&Ce.visible&&w.push(E,Me,Ce,W,Ge.z,ze)}}else ge.visible&&w.push(E,Me,ge,W,Ge.z,null)}}const ve=E.children;for(let Me=0,ge=ve.length;Me<ge;Me++)Bu(ve[Me],U,W,V)}function ig(E,U,W,V){const{opaque:z,transmissive:ve,transparent:Me}=E;T.setupLightsView(W),vt===!0&&Se.setGlobalState(P.clippingPlanes,W),V&&pe.viewport(k.copy(V)),z.length>0&&ll(z,U,W),ve.length>0&&ll(ve,U,W),Me.length>0&&ll(Me,U,W),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function rg(E,U,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ce=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ri(1,1,{generateMipmaps:!0,type:Ce?tr:Kn,minFilter:ls,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const ve=T.state.transmissionRenderTarget[V.id],Me=V.viewport||k;ve.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(ae),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),_t&&se.render(W);const ke=P.toneMapping;P.toneMapping=bi;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),vt===!0&&Se.setGlobalState(P.clippingPlanes,V),ll(E,W,V),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let st=0,Rt=U.length;st<Rt;st++){const wt=U[st],{object:at,geometry:Qt,material:ye,group:An}=wt;if(ye.side===Vi&&at.layers.test(V.layers)){const qe=ye.side;ye.side=En,ye.needsUpdate=!0,sg(at,W,V,Qt,ye,An),ye.side=qe,ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Te,Ae),P.setClearColor(ae,he),ze!==void 0&&(V.viewport=ze),P.toneMapping=ke}function ll(E,U,W){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ve=E.length;z<ve;z++){const Me=E[z],{object:ge,geometry:Te,group:Ae}=Me;let ke=Me.material;ke.allowOverride===!0&&V!==null&&(ke=V),ge.layers.test(W.layers)&&sg(ge,U,W,Te,ke,Ae)}}function sg(E,U,W,V,z,ve){E.onBeforeRender(P,U,W,V,z,ve),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(P,U,W,V,E,ve),z.transparent===!0&&z.side===Vi&&z.forceSinglePass===!1?(z.side=En,z.needsUpdate=!0,P.renderBufferDirect(W,U,V,z,E,ve),z.side=Or,z.needsUpdate=!0,P.renderBufferDirect(W,U,V,z,E,ve),z.side=Vi):P.renderBufferDirect(W,U,V,z,E,ve),E.onAfterRender(P,U,W,V,z,ve)}function cl(E,U,W){U.isScene!==!0&&(U=Ot);const V=A.get(E),z=T.state.lights,ve=T.state.shadowsArray,Me=z.state.version,ge=fe.getParameters(E,z.state,ve,U,W,T.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ge);let Ae=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=B.get(E.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",bt),Ae=new Map,V.programs=Ae);let ze=Ae.get(Te);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===Me)return ag(E,ge),ze}else ge.uniforms=fe.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,W,ge),E.onBeforeCompile(ge,P),ze=fe.acquireProgram(ge,Te),Ae.set(Te,ze),V.uniforms=ge.uniforms;const Ce=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),ag(E,ge),V.needsLights=DE(E),V.lightsStateVersion=Me,V.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=ze,V.uniformsList=null,ze}function og(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Tc.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ag(E,U){const W=A.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function bE(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let W=0,V=E.length;W<V;W++){const z=E[W];if(z.texture!==null&&z.boundingBox.containsPoint(M))return z}return null}function RE(E,U,W,V,z){U.isScene!==!0&&(U=Ot),S.resetTextureUnits();const ve=U.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,ge=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$e.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=B.get(V.envMap||Me,Te),ke=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ze=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let wt=bi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=P.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=at!==void 0?at.length:0,ye=A.get(V),An=T.state.lights;if(vt===!0&&(Xe===!0||E!==F)){const ut=E===F&&V.id===G;Se.setState(V,E,ut)}let qe=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==An.state.version||ye.outputColorSpace!==ge||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Ae||V.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==ze||ye.morphTargets!==Ce||ye.morphNormals!==st||ye.morphColors!==Rt||ye.toneMapping!==wt||ye.morphTargetsCount!==Qt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,ye.__version=V.version);let Vn=ye.currentProgram;qe===!0&&(Vn=cl(V,U,z),O&&V.isNodeMaterial&&O.onUpdateProgram(V,Vn,ye));let mi=!1,sr=!1,As=!1;const lt=Vn.getUniforms(),Pt=ye.uniforms;if(pe.useProgram(Vn.program)&&(mi=!0,sr=!0,As=!0),V.id!==G&&(G=V.id,sr=!0),ye.needsLights){const ut=bE(T.state.lightProbeGridArray,z);ye.lightProbeGrid!==ut&&(ye.lightProbeGrid=ut,sr=!0)}if(mi||F!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(N,"projectionMatrix",E.projectionMatrix),lt.setValue(N,"viewMatrix",E.matrixWorldInverse);const ar=lt.map.cameraPosition;ar!==void 0&&ar.setValue(N,dt.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&lt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),F!==E&&(F=E,sr=!0,As=!0)}if(ye.needsLights&&(An.state.directionalShadowMap.length>0&&lt.setValue(N,"directionalShadowMap",An.state.directionalShadowMap,S),An.state.spotShadowMap.length>0&&lt.setValue(N,"spotShadowMap",An.state.spotShadowMap,S),An.state.pointShadowMap.length>0&&lt.setValue(N,"pointShadowMap",An.state.pointShadowMap,S)),z.isSkinnedMesh){lt.setOptional(N,z,"bindMatrix"),lt.setOptional(N,z,"bindMatrixInverse");const ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(N,"boneTexture",ut.boneTexture,S))}z.isBatchedMesh&&(lt.setOptional(N,z,"batchingTexture"),lt.setValue(N,"batchingTexture",z._matricesTexture,S),lt.setOptional(N,z,"batchingIdTexture"),lt.setValue(N,"batchingIdTexture",z._indirectTexture,S),lt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(N,"batchingColorTexture",z._colorsTexture,S));const or=W.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ne.update(z,W,Vn),(sr||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,lt.setValue(N,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Pt.envMapIntensity.value=U.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=GI()),sr){if(lt.setValue(N,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&PE(Pt,As),ve&&V.fog===!0&&$.refreshFogUniforms(Pt,ve),$.refreshMaterialUniforms(Pt,V,Le,je,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const ut=ye.lightProbeGrid;Pt.probesSH.value=ut.texture,Pt.probesMin.value.copy(ut.boundingBox.min),Pt.probesMax.value.copy(ut.boundingBox.max),Pt.probesResolution.value.copy(ut.resolution)}Tc.upload(N,og(ye),Pt,S)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Tc.upload(N,og(ye),Pt,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(N,"center",z.center),lt.setValue(N,"modelViewMatrix",z.modelViewMatrix),lt.setValue(N,"normalMatrix",z.normalMatrix),lt.setValue(N,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){const ut=V.uniformsGroups;for(let ar=0,Cs=ut.length;ar<Cs;ar++){const lg=ut[ar];Y.update(lg,Vn),Y.bind(lg,Vn)}}return Vn}function PE(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function DE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,U,W){const V=A.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(E.texture).__webglTexture=U,A.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const W=A.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const LE=N.createFramebuffer();this.setRenderTarget=function(E,U=0,W=0){I=E,j=U,K=W;let V=null,z=!1,ve=!1;if(E){const ge=A.get(E);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),k.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest,pe.viewport(k),pe.scissor(X),pe.setScissorTest(Z),G=-1;return}else if(ge.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(ge.__hasExternalTextures)S.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&A.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ae=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?V=Ae[U][W]:V=Ae[U],z=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=A.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[W]:V=Ae,k.copy(E.viewport),X.copy(E.scissor),Z=E.scissorTest}else k.copy(le).multiplyScalar(Le).floor(),X.copy(Re).multiplyScalar(Le).floor(),Z=Ie;if(W!==0&&(V=LE),pe.bindFramebuffer(N.FRAMEBUFFER,V)&&pe.drawBuffers(E,V),pe.viewport(k),pe.scissor(X),pe.setScissorTest(Z),z){const ge=A.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,W)}else if(ve){const ge=U;for(let Te=0;Te<E.textures.length;Te++){const Ae=A.get(E.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,W,ge)}}else if(E!==null&&W!==0){const ge=A.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(E,U,W,V,z,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Ae=E.textures[ge],ke=Ae.format,ze=Ae.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ct.textureFormatReadable(ke)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(ze)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&W>=0&&W<=E.height-z&&N.readPixels(U,W,V,z,D.convert(ke),D.convert(ze),ve)}finally{const Ae=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,V,z,ve,Me,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(U>=0&&U<=E.width-V&&W>=0&&W<=E.height-z){pe.bindFramebuffer(N.FRAMEBUFFER,Te);const Ae=E.textures[ge],ke=Ae.format,ze=Ae.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),!ct.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(U,W,V,z,D.convert(ke),D.convert(ze),0);const st=I!==null?A.get(I).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,st);const Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await d3(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(Ce),N.deleteSync(Rt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){const V=Math.pow(2,-W),z=Math.floor(E.image.width*V),ve=Math.floor(E.image.height*V),Me=U!==null?U.x:0,ge=U!==null?U.y:0;S.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Me,ge,z,ve),pe.unbindTexture()};const NE=N.createFramebuffer(),IE=N.createFramebuffer();this.copyTextureToTexture=function(E,U,W=null,V=null,z=0,ve=0){let Me,ge,Te,Ae,ke,ze,Ce,st,Rt;const wt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(W!==null)Me=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,ke=W.min.y,ze=W.isBox3?W.min.z:0;else{const Pt=Math.pow(2,-z);Me=Math.floor(wt.width*Pt),ge=Math.floor(wt.height*Pt),E.isDataArrayTexture?Te=wt.depth:E.isData3DTexture?Te=Math.floor(wt.depth*Pt):Te=1,Ae=0,ke=0,ze=0}V!==null?(Ce=V.x,st=V.y,Rt=V.z):(Ce=0,st=0,Rt=0);const at=D.convert(U.format),Qt=D.convert(U.type);let ye;U.isData3DTexture?(S.setTexture3D(U,0),ye=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(S.setTexture2DArray(U,0),ye=N.TEXTURE_2D_ARRAY):(S.setTexture2D(U,0),ye=N.TEXTURE_2D),pe.activeTexture(N.TEXTURE0),pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pe.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const An=pe.getParameter(N.UNPACK_ROW_LENGTH),qe=pe.getParameter(N.UNPACK_IMAGE_HEIGHT),Vn=pe.getParameter(N.UNPACK_SKIP_PIXELS),mi=pe.getParameter(N.UNPACK_SKIP_ROWS),sr=pe.getParameter(N.UNPACK_SKIP_IMAGES);pe.pixelStorei(N.UNPACK_ROW_LENGTH,wt.width),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,wt.height),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(N.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const As=E.isDataArrayTexture||E.isData3DTexture,lt=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Pt=A.get(E),or=A.get(U),ut=A.get(Pt.__renderTarget),ar=A.get(or.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,ut.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Cs=0;Cs<Te;Cs++)As&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(E).__webglTexture,z,ze+Cs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(U).__webglTexture,ve,Rt+Cs)),N.blitFramebuffer(Ae,ke,Me,ge,Ce,st,Me,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||A.has(E)){const Pt=A.get(E),or=A.get(U);pe.bindFramebuffer(N.READ_FRAMEBUFFER,NE),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,IE);for(let ut=0;ut<Te;ut++)As?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.__webglTexture,z,ze+ut):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pt.__webglTexture,z),lt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,or.__webglTexture,ve,Rt+ut):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,or.__webglTexture,ve),z!==0?N.blitFramebuffer(Ae,ke,Me,ge,Ce,st,Me,ge,N.COLOR_BUFFER_BIT,N.NEAREST):lt?N.copyTexSubImage3D(ye,ve,Ce,st,Rt+ut,Ae,ke,Me,ge):N.copyTexSubImage2D(ye,ve,Ce,st,Ae,ke,Me,ge);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(ye,ve,Ce,st,Rt,Me,ge,Te,at,Qt,wt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,ve,Ce,st,Rt,Me,ge,Te,at,wt.data):N.texSubImage3D(ye,ve,Ce,st,Rt,Me,ge,Te,at,Qt,wt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,Ce,st,Me,ge,at,Qt,wt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,Ce,st,wt.width,wt.height,at,wt.data):N.texSubImage2D(N.TEXTURE_2D,ve,Ce,st,Me,ge,at,Qt,wt);pe.pixelStorei(N.UNPACK_ROW_LENGTH,An),pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),pe.pixelStorei(N.UNPACK_SKIP_PIXELS,Vn),pe.pixelStorei(N.UNPACK_SKIP_ROWS,mi),pe.pixelStorei(N.UNPACK_SKIP_IMAGES,sr),ve===0&&U.generateMipmaps&&N.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(E){A.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){j=0,K=0,I=null,pe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function WI(){const t=ne.useRef(null);return ne.useEffect(()=>{const e=t.current,n=e.clientWidth,i=e.clientHeight,r=new wE({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(n,i),r.setClearColor(0,0),e.appendChild(r.domElement);const s=new sE,o=new Dn(75,n/i,.1,100);o.position.z=3;const a=180,l=new Float32Array(a*3),c=[],u=new Float32Array(a);for(let g=0;g<a;g++){l[g*3]=0,l[g*3+1]=0,l[g*3+2]=0;const _=Math.random()*Math.PI*2,M=.02+Math.random()*.06;c.push({x:Math.cos(_)*M,y:Math.sin(_)*M,z:(Math.random()-.5)*.02,life:1,decay:.008+Math.random()*.012}),u[g]=Math.random()*4+1}const d=new Jn,f=new Un(l,3);d.setAttribute("position",f),d.setAttribute("size",new Un(u,1));const p=new Qn({uniforms:{uTime:{value:0}},vertexShader:`
        attribute float size;
        varying float vLife;
        uniform float uTime;
        void main() {
          vLife = 1.0 - uTime * 0.5;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (200.0 / -mvPos.z) * vLife;
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying float vLife;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float alpha = (1.0 - d * 2.0) * vLife * 0.8;
          vec3 color = mix(vec3(0.9,0.85,0.75), vec3(1.0,1.0,0.95), vLife);
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:iu}),v=new fE(d,p);s.add(v);let y,m=0;const h=()=>{y=requestAnimationFrame(h),m+=.016,p.uniforms.uTime.value=m;const g=d.attributes.position.array;for(let _=0;_<a;_++){const M=c[_];M.life-=M.decay,M.life<0&&(M.life=0),M.y-=.001,g[_*3]+=M.x,g[_*3+1]+=M.y,g[_*3+2]+=M.z}if(d.attributes.position.needsUpdate=!0,m>3){cancelAnimationFrame(y);return}r.render(s,o)};return h(),()=>{cancelAnimationFrame(y),r.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),L.jsx("div",{ref:t,style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:10}})}function jI(t){ne.useEffect(()=>{const e=t.current;if(!e)return;let n=e.scrollTop,i,r=0;const s=()=>{const o=e.scrollTop,a=o-n;n=o;const l=Math.max(-6,Math.min(6,a*.8));r+=(l-r)*.12,e.querySelectorAll("[data-viscous]").forEach(u=>{u.style.transform=`skewY(${r}deg)`,u.style.transition=Math.abs(r)<.05?"transform 0.6s cubic-bezier(0.16,1,0.3,1)":"none"}),i=requestAnimationFrame(s)};return i=requestAnimationFrame(s),()=>cancelAnimationFrame(i)},[])}const XI="_booking_zgzko_1",KI="_ambient_zgzko_8",$I="_header_zgzko_15",YI="_kicker_zgzko_21",qI="_title_zgzko_28",ZI="_step_zgzko_35",QI="_sectionTitle_zgzko_43",JI="_cardStack_zgzko_50",eU="_serviceCard_zgzko_56",tU="_serviceTitle_zgzko_65",nU="_serviceMeta_zgzko_71",iU="_priceBadge_zgzko_76",rU="_serviceActive_zgzko_85",sU="_selectedBar_zgzko_90",oU="_selectedTitle_zgzko_103",aU="_selectedPrice_zgzko_109",lU="_actionsSticky_zgzko_114",cU="_dateStrip_zgzko_122",uU="_dateChip_zgzko_130",fU="_dateActive_zgzko_143",dU="_dateNum_zgzko_148",hU="_dateWeek_zgzko_153",pU="_grid_zgzko_159",mU="_slot_zgzko_165",gU="_slotBusy_zgzko_179",vU="_slotActive_zgzko_184",_U="_confirm_zgzko_189",xU="_confirmLogo_zgzko_204",yU="_confirmTitle_zgzko_234",SU="_confirmDetails_zgzko_240",MU="_confirmService_zgzko_244",EU="_confirmMeta_zgzko_250",TU="_confirmActions_zgzko_259",wU="_confirmOutline_zgzko_267",Ue={booking:XI,ambient:KI,header:$I,kicker:YI,title:qI,step:ZI,sectionTitle:QI,cardStack:JI,serviceCard:eU,serviceTitle:tU,serviceMeta:nU,priceBadge:iU,serviceActive:rU,selectedBar:sU,selectedTitle:oU,selectedPrice:aU,actionsSticky:lU,dateStrip:cU,dateChip:uU,dateActive:fU,dateNum:dU,dateWeek:hU,grid:pU,slot:mU,slotBusy:gU,slotActive:vU,confirm:_U,confirmLogo:xU,confirmTitle:yU,confirmDetails:SU,confirmService:MU,confirmMeta:EU,confirmActions:TU,confirmOutline:wU},AU=[{id:"lashes-classic",title:"Наращивание ресниц",price:"от 1 800 ₽",duration:"120 мин",category:"lashes"},{id:"lashes-led",title:"LED-наращивание",price:"от 2 100 ₽",duration:"120 мин",category:"lashes"},{id:"lamination-lashes",title:"Ламинирование ресниц",price:"1 700 ₽",duration:"60 мин",category:"lashes"},{id:"lamination-brows",title:"Ламинирование бровей",price:"1 600 ₽",duration:"45 мин",category:"brows"},{id:"removal-lashes",title:"Снятие ресниц",price:"300 ₽",duration:"20 мин",category:"lashes"},{id:"tint-lashes",title:"Окрашивание ресниц",price:"300 ₽",duration:"20 мин",category:"lashes"},{id:"package-all",title:"Пакет «Всё включено»",price:"1 800 ₽",duration:"90 мин",category:"care"},{id:"clean-face",title:"Чистка лица атравматичная",price:"от 1 500 ₽",duration:"60 мин",category:"care"},{id:"peeling-chemical",title:"Химический пилинг",price:"от 1 000 ₽",duration:"45 мин",category:"care"},{id:"microcurrent",title:"Микротоки лицо/тело",price:"от 1 500 ₽",duration:"60 мин",category:"care"},{id:"meso-biorevive",title:"Мезотерапия/биоревитализация",price:"от 2 000 ₽",duration:"60 мин",category:"care"}],ld={lashes:"rgba(180,100,75,0.13)","lashes-led":"rgba(160,80,120,0.13)","lamination-lashes":"rgba(190,120,70,0.12)","lamination-brows":"rgba(120,80,150,0.12)",removal:"rgba(100,120,170,0.12)",coloring:"rgba(150,90,130,0.12)","all-included":"rgba(170,110,80,0.13)",cleaning:"rgba(80,130,120,0.12)",peeling:"rgba(140,160,100,0.11)",microcurrent:"rgba(90,110,160,0.12)",meso:"rgba(160,100,140,0.13)",default:"#F5F0E8"},CU={1:"ваш ритуал",2:"когда удобно?",3:"выберите время"},bU=["10:00","11:00","12:30","13:30","15:00","16:30","18:00"],RU=["11:00","15:00"];function X_(){const t=[],e=new Date;for(let n=0;n<10;n+=1){const i=new Date(e);i.setDate(e.getDate()+n),t.push({label:i.toLocaleDateString("ru-RU",{day:"numeric",month:"short"}).replace(".",""),weekday:i.toLocaleDateString("ru-RU",{weekday:"short"}).replace(".",""),iso:i.toISOString().slice(0,10)})}return t}function PU({onDarkChange:t,onConfirmChange:e}){const[n,i]=ne.useState(1),[r,s]=ne.useState(null),[o,a]=ne.useState(null),[l,c]=ne.useState(null),u=ne.useMemo(()=>{const m=X_();return m.length>0?m:X_()},[]),d=ne.useRef(null);jI(d),ne.useEffect(()=>{e==null||e(n===4)},[n]);const f=r?ld[r.id]||ld[r.category]||ld.default:"rgba(255,255,255,0)",p=CU[n]||"ваш ритуал",v=m=>{if(m===2&&!r){console.log("[BookingScreen] goToStep(2) blocked — no service selected");return}console.log("[BookingScreen] goToStep",m,"service:",(r==null?void 0:r.id)??null),m<=1&&(a(null),c(null)),m===4?(as.success(),t==null||t(!0)):t==null||t(!1),i(m)},y=()=>{window.location.href="https://dikidi.ru/1109266"};return L.jsxs("div",{className:Ue.booking,children:[L.jsx("div",{className:"material"}),L.jsx("div",{className:Ue.ambient,style:{background:f}}),n!==4&&L.jsxs("div",{className:Ue.header,children:[L.jsx("span",{className:Ue.kicker,children:"ЗАПИСЬ"}),L.jsx(Bm,{text:p,className:Ue.title,delay:.1})]}),L.jsxs(cS,{mode:"wait",children:[n===1&&L.jsxs(jt.div,{className:Ue.step,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},children:[L.jsx("p",{className:Ue.sectionTitle,children:"Выберите ритуал"}),L.jsx("div",{className:Ue.cardStack,ref:d,children:AU.map((m,h)=>L.jsxs(jt.button,{"data-viscous":!0,className:`${Ue.serviceCard} glass ${(r==null?void 0:r.id)===m.id?Ue.serviceActive:""}`,whileTap:{scale:.98},transition:{type:"spring",stiffness:300},style:{transitionDelay:`${h*40}ms`},onClick:()=>{as.select(),s(m)},children:[L.jsxs("div",{children:[L.jsx("p",{className:Ue.serviceTitle,children:m.title}),L.jsx("p",{className:Ue.serviceMeta,children:m.duration})]}),L.jsx("span",{className:Ue.priceBadge,children:m.price})]},m.id))}),L.jsx("div",{className:Ue.actionsSticky,children:L.jsx("button",{className:"btn-ink",disabled:!r,onClick:()=>v(2),children:"Далее"})})]},"step1"),n===2&&L.jsxs(jt.div,{className:Ue.step,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},children:[r&&L.jsxs("div",{className:Ue.selectedBar,children:[L.jsx("span",{className:Ue.selectedTitle,children:r.title}),L.jsx("span",{className:Ue.selectedPrice,children:r.price})]}),L.jsx("p",{className:Ue.sectionTitle,children:"Когда удобно?"}),L.jsx("div",{className:Ue.dateStrip,children:u.map(m=>L.jsxs("button",{className:`${Ue.dateChip} ${o===m.iso?Ue.dateActive:""}`,onClick:()=>{as.select(),a(m.iso)},children:[L.jsx("span",{className:Ue.dateNum,children:m.label}),L.jsx("span",{className:Ue.dateWeek,children:m.weekday})]},m.iso))}),L.jsxs("div",{className:Ue.actionsSticky,children:[L.jsx("button",{className:"btn-glass",onClick:()=>v(1),children:"Назад"}),L.jsx("button",{className:"btn-ink",disabled:!o,onClick:()=>v(3),children:"Далее"})]})]},"step2"),n===3&&L.jsxs(jt.div,{className:Ue.step,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4,ease:"easeOut"},children:[r&&L.jsxs("div",{className:Ue.selectedBar,children:[L.jsx("span",{className:Ue.selectedTitle,children:r.title}),L.jsx("span",{className:Ue.selectedPrice,children:r.price})]}),L.jsx("p",{className:Ue.sectionTitle,children:"Выберите время"}),L.jsx("div",{className:Ue.grid,children:bU.map(m=>{const h=RU.includes(m),g=l===m;return L.jsx("button",{className:`${Ue.slot} ${h?Ue.slotBusy:""} ${g?Ue.slotActive:""}`,onClick:()=>{h||(as.select(),c(m))},disabled:h,children:m},m)})}),L.jsxs("div",{className:Ue.actionsSticky,children:[L.jsx("button",{className:"btn-glass",onClick:()=>v(2),children:"Назад"}),L.jsx("button",{className:"btn-ink",disabled:!l,onClick:()=>v(4),children:"Далее"})]})]},"step3"),n===4&&L.jsxs(jt.div,{className:Ue.confirm,style:{overflow:"hidden"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[L.jsx(WI,{}),L.jsx("img",{src:Lr("/logos/logo-white.png"),alt:"Люмэри",className:Ue.confirmLogo}),L.jsxs(jt.svg,{width:"60",height:"60",viewBox:"0 0 60 60",children:[L.jsx(jt.circle,{cx:"30",cy:"30",r:"25",fill:"none",stroke:"rgba(255,255,255,0.3)",strokeWidth:"1",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:1.2,ease:[.16,1,.3,1]}}),L.jsx(jt.path,{d:"M18 30 L26 38 L42 22",fill:"none",stroke:"rgba(255,255,255,0.85)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.6,delay:1,ease:[.16,1,.3,1]}})]}),L.jsx("p",{className:Ue.confirmTitle,children:"Ритуал назначен"}),L.jsxs("div",{className:Ue.confirmDetails,children:[L.jsx("p",{className:Ue.confirmService,children:r==null?void 0:r.title}),L.jsxs("p",{className:Ue.confirmMeta,children:[o&&new Date(`${o}T12:00:00`).toLocaleDateString("ru-RU",{day:"numeric",month:"long"}),L.jsx("span",{children:"·"}),l,L.jsx("span",{children:"·"}),r==null?void 0:r.price]})]}),L.jsxs("div",{className:Ue.confirmActions,children:[L.jsx("button",{className:"btn-glass",onClick:y,children:"Подтвердить в Люмэри"}),L.jsx("button",{className:Ue.confirmOutline,onClick:()=>v(1),children:"Изменить"})]})]},"step4")]})]})}const DU="_portfolio_1iwkv_1",LU="_bgOverlay_1iwkv_9",NU="_inner_1iwkv_17",IU="_header_1iwkv_22",UU="_kicker_1iwkv_27",FU="_title_1iwkv_34",OU="_lane_1iwkv_41",kU="_laneHeader_1iwkv_45",BU="_laneTitle_1iwkv_53",VU="_laneAccent_1iwkv_60",zU="_laneScroll_1iwkv_67",HU="_card_1iwkv_80",GU="_cardImage_1iwkv_91",Rn={portfolio:DU,bgOverlay:LU,inner:NU,header:IU,kicker:UU,title:FU,lane:OU,laneHeader:kU,laneTitle:BU,laneAccent:VU,laneScroll:zU,card:HU,cardImage:GU},WU=[{id:"lashes",label:"Ресницы",color:"rgba(180,100,75,0.1)",items:[1,2,5,6,11].map(t=>Lr(`/portfolio/work_${t}.webp`))},{id:"brows",label:"Брови",color:"rgba(120,80,150,0.1)",items:[3,4,7,8,12].map(t=>Lr(`/portfolio/work_${t}.webp`))},{id:"cosmetology",label:"Уход",color:"rgba(80,130,120,0.1)",items:[9,10].map(t=>Lr(`/portfolio/work_${t}.webp`))}];function jU(){const[t,e]=ne.useState(null);return L.jsxs("div",{className:Rn.portfolio,children:[L.jsx("div",{className:"material"}),L.jsx("div",{className:Rn.bgOverlay,style:{background:t?t.color:"transparent"}}),L.jsxs("div",{className:Rn.inner,children:[L.jsxs("div",{className:Rn.header,children:[L.jsx("span",{className:Rn.kicker,children:"галерея"}),L.jsx(Bm,{text:"портфолио",className:Rn.title,delay:.1})]}),WU.map((n,i)=>L.jsxs("div",{children:[i===1&&L.jsx(OM,{reverse:!0,speed:40}),L.jsxs("div",{className:Rn.lane,children:[L.jsxs("div",{className:Rn.laneHeader,children:[L.jsx("span",{className:Rn.laneTitle,children:n.label}),L.jsx("div",{className:Rn.laneAccent,style:{background:(t==null?void 0:t.id)===n.id?n.color.replace("0.1)","0.5)"):"transparent"}})]}),L.jsx("div",{className:Rn.laneScroll,children:n.items.map((r,s)=>L.jsx(jt.div,{className:Rn.card,whileTap:{scale:1.04},transition:{type:"spring",stiffness:260,damping:18},onTapStart:()=>e(n),children:L.jsx("img",{src:r,alt:n.label,className:Rn.cardImage})},r))})]})]},n.id))]})]})}const XU="_info_1gkj6_1",KU="_inner_1gkj6_7",$U="_heading_1gkj6_15",YU="_title_1gkj6_19",qU="_galleryRow_1gkj6_25",ZU="_galleryCard_1gkj6_32",QU="_card_1gkj6_47",JU="_cardLabel_1gkj6_51",eF="_cardValue_1gkj6_59",tF="_cardLink_1gkj6_65",nF="_quote_1gkj6_72",iF="_links_1gkj6_80",rF="_link_1gkj6_80",rn={info:XU,inner:KU,heading:$U,title:YU,galleryRow:qU,galleryCard:ZU,card:QU,cardLabel:JU,cardValue:eF,cardLink:tF,quote:nF,links:iF,link:rF},sF=[Lr("/studio/studio-1.jpg"),Lr("/studio/studio-2.jpg"),Lr("/studio/studio-3.jpg")],oF=[{label:"2GIS",url:"https://2gis.ru/rostov_on_don/firm/3379866562396441"},{label:"Яндекс Карты",url:"https://yandex.ru/maps/-/CDXT4dLr"},{label:"ВКонтакте",url:"https://vk.com/lumeri_salon"}];function aF(){return L.jsxs("div",{className:rn.info,children:[L.jsx("div",{className:"material"}),L.jsxs("div",{className:rn.inner,children:[L.jsx("div",{className:rn.heading,children:L.jsx(Bm,{text:"О студии",className:rn.title,delay:.1})}),L.jsx("div",{className:rn.galleryRow,children:sF.map((t,e)=>L.jsx("div",{className:rn.galleryCard,children:L.jsx("img",{src:t,alt:`Студия ${e+1}`,loading:"lazy"})},t))}),L.jsxs("div",{className:`glass ${rn.card}`,children:[L.jsx("p",{className:rn.cardLabel,children:"Контакты"}),L.jsx("p",{className:rn.cardValue,children:"Ростов-на-Дону, Каменобродская 33/22"}),L.jsx("p",{className:rn.cardValue,children:"пн–вс · 10:00—20:00"}),L.jsx("a",{href:"tel:+79001292299",className:rn.cardLink,children:"+7 (900) 129-22-99"})]}),L.jsxs("div",{className:`glass ${rn.card}`,children:[L.jsx("p",{className:rn.cardLabel,children:"О мастере"}),L.jsx("p",{className:rn.quote,children:"«Медицинский взгляд, ювелирная точность и абсолютный комфорт на каждой процедуре.»"})]}),L.jsx("div",{className:rn.links,children:oF.map(t=>L.jsxs("a",{className:`glass ${rn.link}`,href:t.url,target:"_blank",rel:"noreferrer",children:[L.jsx("span",{children:t.label}),L.jsx("svg",{viewBox:"0 0 24 24",children:L.jsx("path",{d:"M7 17 17 7M7 7h10v10"})})]},t.label))})]})]})}const lF="_aura_17ftd_1",cF="_video_17ftd_9",uF="_particles_17ftd_19",fF="_overlay_17ftd_26",dF="_title_17ftd_35",hF="_sub_17ftd_44",pF="_loading_17ftd_52",mF="_loadingText_17ftd_62",gF="_denied_17ftd_70",vF="_deniedText_17ftd_81",_F="_deniedSub_17ftd_87",ri={aura:lF,video:cF,particles:uF,overlay:fF,title:dF,sub:hF,loading:pF,loadingText:mF,denied:gF,deniedText:vF,deniedSub:_F};function xF(){const t=ne.useRef(null),e=ne.useRef(null),n=ne.useRef(null),[i,r]=ne.useState(null),[s,o]=ne.useState(!0);return ne.useEffect(()=>{let a=null,l=null,c=null;return(async()=>{try{a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:390,height:844}}),r(!0);const d=t.current;d.srcObject=a,await d.play(),o(!1);const f=n.current,p=f.clientWidth,v=f.clientHeight;c=new wE({antialias:!0,alpha:!0}),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setSize(p,v),c.setClearColor(0,0),f.appendChild(c.domElement),e.current=c.domElement;const y=new sE,m=new Dn(60,p/v,.1,100);m.position.z=4;const h=300,g=new Float32Array(h*3),_=[];for(let P=0;P<h;P++){const R=Math.random()*Math.PI*2,O=.8+Math.random()*1.5;g[P*3]=Math.cos(R)*O,g[P*3+1]=(Math.random()-.5)*2.5,g[P*3+2]=Math.sin(R)*O*.3,_.push({angle:R,radius:O,speed:.003+Math.random()*.008,ySpeed:(Math.random()-.5)*.005,life:Math.random()})}const M=new Jn,w=new Un(g,3);M.setAttribute("position",w);const T=new Qn({uniforms:{uTime:{value:0}},vertexShader:`
            uniform float uTime;
            varying float vLife;
            void main() {
              vLife = 0.5 + 0.5 * sin(uTime * 1.5 + position.x * 3.0);
              vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
              gl_PointSize = (3.0 + vLife * 4.0) * (300.0 / -mvPos.z);
              gl_Position = projectionMatrix * mvPos;
            }
          `,fragmentShader:`
            varying float vLife;
            void main() {
              vec2 uv = gl_PointCoord - 0.5;
              float d = length(uv);
              if (d > 0.5) discard;
              float alpha = (1.0 - d * 2.0) * vLife * 0.85;
              vec3 col = mix(
                vec3(0.85, 0.65, 0.90),
                vec3(0.95, 0.85, 0.70),
                vLife
              );
              gl_FragColor = vec4(col, alpha);
            }
          `,transparent:!0,depthWrite:!1,blending:iu}),C=new fE(M,T);y.add(C);const x=new $3,b=()=>{l=requestAnimationFrame(b);const P=x.getElapsedTime();T.uniforms.uTime.value=P;const R=M.attributes.position.array;for(let O=0;O<h;O++){const j=_[O];j.angle+=j.speed,j.life+=.005;const K=1+.15*Math.sin(P*2+O);R[O*3]=Math.cos(j.angle)*j.radius*K,R[O*3+1]+=j.ySpeed,R[O*3+1]>2&&(R[O*3+1]=-2),R[O*3+1]<-2&&(R[O*3+1]=2),R[O*3+2]=Math.sin(j.angle)*j.radius*.4*K}M.attributes.position.needsUpdate=!0,C.rotation.y=P*.05,c.render(y,m)};b()}catch{r(!1),o(!1)}})(),()=>{var d;l&&cancelAnimationFrame(l),a&&a.getTracks().forEach(f=>f.stop()),c&&((d=n.current)!=null&&d.contains(c.domElement))&&(n.current.removeChild(c.domElement),c.dispose())}},[]),i===!1?L.jsxs("div",{className:ri.denied,children:[L.jsx("p",{className:ri.deniedText,children:"Нужен доступ к камере"}),L.jsx("p",{className:ri.deniedSub,children:"Разрешите доступ в настройках браузера"})]}):L.jsxs("div",{className:ri.aura,children:[L.jsx("video",{ref:t,className:ri.video,playsInline:!0,muted:!0,autoPlay:!0}),L.jsx("div",{ref:n,className:ri.particles}),s&&L.jsx("div",{className:ri.loading,children:L.jsx("p",{className:ri.loadingText,children:"инициализация ауры..."})}),L.jsxs("div",{className:ri.overlay,children:[L.jsx("p",{className:ri.title,children:"ЛЮМЭРИ"}),L.jsx("p",{className:ri.sub,children:"ваше сияние"})]})]})}const yF="_bar_1ft5c_1",SF="_tab_1ft5c_21",MF="_active_1ft5c_36",EF="_iconWrap_1ft5c_40",TF="_icon_1ft5c_40",wF="_iconActive_1ft5c_61",AF="_dot_1ft5c_65",CF="_label_1ft5c_74",an={bar:yF,tab:SF,active:MF,iconWrap:EF,icon:TF,iconActive:wF,dot:AF,label:CF},bF=[{id:"home",label:"Дом",icon:DF},{id:"booking",label:"Запись",icon:LF},{id:"portfolio",label:"Работы",icon:NF},{id:"info",label:"О нас",icon:IF},{id:"aura",label:"Аура",icon:UF}];function RF({active:t="home",onChange:e,isHidden:n=!1}){return L.jsx("nav",{className:an.bar,style:{opacity:n?0:1,pointerEvents:n?"none":"auto",transition:"opacity 0.3s ease"},children:bF.map(i=>L.jsx(PF,{tab:i,isActive:t===i.id,onChange:e},i.id))})}function PF({tab:t,isActive:e,onChange:n}){const{ref:i,onMouseMove:r,onMouseLeave:s}=kM(.25),o=t.icon;return L.jsx("div",{ref:i,onMouseMove:r,onMouseLeave:s,children:L.jsxs("button",{className:`${an.tab} ${e?an.active:""}`,onClick:()=>{as.light(),n==null||n(t.id)},children:[L.jsxs("div",{className:an.iconWrap,children:[L.jsx(o,{active:e}),e&&L.jsx(jt.span,{layoutId:"tab-dot",className:an.dot,transition:{type:"spring",stiffness:400,damping:28}})]}),L.jsx("span",{className:an.label,children:t.label})]})})}function DF({active:t}){return L.jsx("svg",{viewBox:"0 0 32 32",className:`${an.icon} ${t?an.iconActive:""}`,children:L.jsx("path",{d:"M4 13.5 16 4l12 9.5V28a1 1 0 0 1-1 1h-6.5a.5.5 0 0 1-.5-.5V21h-8v7.5a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1Z"})})}function LF({active:t}){return L.jsxs("svg",{viewBox:"0 0 32 32",className:`${an.icon} ${t?an.iconActive:""}`,children:[L.jsx("path",{d:"M8 6h2l.5 2h11L22 6h2a2 2 0 0 1 2 2v18H6V8a2 2 0 0 1 2-2Zm0 7h16"}),L.jsx("path",{d:"M11 17h3v7h-3zM18 17h3v7h-3z"})]})}function NF({active:t}){return L.jsxs("svg",{viewBox:"0 0 32 32",className:`${an.icon} ${t?an.iconActive:""}`,children:[L.jsx("path",{d:"M6 10h20v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"}),L.jsx("path",{d:"M12 10V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"}),L.jsx("path",{d:"M6 15h20"})]})}function IF({active:t}){return L.jsxs("svg",{viewBox:"0 0 32 32",className:`${an.icon} ${t?an.iconActive:""}`,children:[L.jsx("path",{d:"M16 28a12 12 0 1 0 0-24 12 12 0 0 0 0 24Z"}),L.jsx("path",{d:"M16 9.5v.2"}),L.jsx("path",{d:"M16 14v8"})]})}function UF({active:t}){return L.jsxs("svg",{viewBox:"0 0 32 32",className:`${an.icon} ${t?an.iconActive:""}`,children:[L.jsx("path",{d:"M16 4 L17.5 13 L26 16 L17.5 19 L16 28 L14.5 19 L6 16 L14.5 13 Z",strokeWidth:"1.4"}),L.jsx("circle",{cx:"16",cy:"16",r:"3",strokeWidth:"1.4"})]})}const FF=["home","booking","portfolio","info","aura"],ic={initial:{opacity:0,y:20,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:.5,ease:[.16,1,.3,1]}},exit:{opacity:0,y:-10,filter:"blur(4px)",transition:{duration:.25}}},OF={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{opacity:0,transition:{duration:.2}}};function kF(){const[t,e]=ne.useState("home"),[n,i]=ne.useState(!1),[r,s]=ne.useState(!1),o=t;ne.useEffect(()=>{document.body.style.background=n?"#111820":"#F5F0E8"},[n]),ne.useEffect(()=>{ss.send("VKWebAppSetViewSettings",{status_bar_style:"dark",action_bar_color:"#F4F6F8",navigation_bar_color:"#FFFFFF"}).catch(()=>{})},[]);const a=l=>{FF.includes(l)&&e(l)};return L.jsxs("div",{className:"app-shell",style:{background:n?"#111820":void 0},children:[L.jsxs(cS,{mode:"wait",children:[o==="home"&&L.jsx(jt.div,{variants:OF,initial:"initial",animate:"animate",exit:"exit",style:{width:"100%",height:"100%"},children:L.jsx(PP,{onNavigate:a})},o),o==="booking"&&L.jsx(jt.div,{variants:ic,initial:"initial",animate:"animate",exit:"exit",style:{width:"100%",height:"100%"},children:L.jsx(PU,{onNavigate:a,onDarkChange:i,onConfirmChange:s})},o),o==="portfolio"&&L.jsx(jt.div,{variants:ic,initial:"initial",animate:"animate",exit:"exit",style:{width:"100%",height:"100%"},children:L.jsx(jU,{})},o),o==="info"&&L.jsx(jt.div,{variants:ic,initial:"initial",animate:"animate",exit:"exit",style:{width:"100%",height:"100%"},children:L.jsx(aF,{})},o),o==="aura"&&L.jsx(jt.div,{variants:ic,initial:"initial",animate:"animate",exit:"exit",style:{width:"100%",height:"100%"},children:L.jsx(xF,{onNavigate:a})},"aura")]}),L.jsx(RF,{active:t,onChange:a,isHidden:r})]})}ss.send("VKWebAppInit").catch(()=>{});const BF=new Aw({lerp:.08,smoothWheel:!0});function AE(t){BF.raf(t),requestAnimationFrame(AE)}requestAnimationFrame(AE);document.getElementById("root").style.overflow="visible";cd.createRoot(document.getElementById("root")).render(L.jsx(JE.StrictMode,{children:L.jsx(kF,{})}));
