!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI_snackbar=e():t.BalmUI_snackbar=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="pv2Q")}({"+oHS":function(t,e,n){t.exports=n("XEyi")},"/EgQ":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"1jut":function(t,e,n){var r={};r[n("A2Ma")("toStringTag")]="z",t.exports="[object z]"===String(r)},"1lkh":function(t,e,n){var r=n("cEKj"),o=n("doUz");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"\xa9 2020 Denis Pushkarev (zloirock.ru)"})},"1mbr":function(t,e,n){var r=n("AnMC");t.exports=function(t,e,n,o){o&&o.enumerable?t[e]=n:r(t,e,n)}},"39uu":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"3uAa":function(t,e,n){var r=n("ZBQp"),o=n("Y4yM"),i=n("T/97"),a=n("ZyXh"),s=n("Q0Rw"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,m,y,_){for(var h,v,b=i(d),O=o(b),g=r(m,y,3),S=a(O.length),E=0,T=_||s,C=e?T(d,S):n?T(d,0):void 0;S>E;E++)if((p||E in O)&&(v=g(h=O[E],E,b),t))if(e)C[E]=v;else if(v)switch(t){case 3:return!0;case 5:return h;case 6:return E;case 2:c.call(C,h)}else if(f)return!1;return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},"6Jnn":function(t,e,n){var r=n("doUz"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"7GIe":function(t,e,n){var r=n("b42z"),o=n("L5f0");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},"7b0v":function(t,e,n){var r=n("mIMY");t.exports=r("document","documentElement")},"9XUY":function(t,e,n){"use strict";var r=n("u4PT").IteratorPrototype,o=n("SJYm"),i=n("LGyv"),a=n("KHTo"),s=n("dGO/"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),a(t,u,!1,!0),s[u]=c,t}},"9fuf":function(t,e,n){var r=n("Bvq2");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},A2Ma:function(t,e,n){var r=n("OsYe"),o=n("1lkh"),i=n("eOcF"),a=n("PoCt"),s=n("HmPo"),c=n("YtAO"),u=o("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){return i(u,t)||(s&&i(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},AnMC:function(t,e,n){var r=n("wbIY"),o=n("QYBB"),i=n("LGyv");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},Bvq2:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},CqEA:function(t,e,n){var r=n("pevS"),o=n("T/97"),i=n("oBZR");r({target:"Object",stat:!0,forced:n("Bvq2")((function(){i(1)}))},{keys:function(t){return i(o(t))}})},FWHo:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},FfTd:function(t,e,n){var r;r=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="./packages/mdc-snackbar/index.ts")}({"./packages/mdc-base/component.ts":function(t,e,n){"use strict";var r=this&&this.__read||function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(r(arguments[e]));return t};Object.defineProperty(e,"__esModule",{value:!0});var i=n("./packages/mdc-base/foundation.ts"),a=function(){function t(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,o(n)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new i.MDCFoundation({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,n){this.root_.addEventListener(t,e,n)},t.prototype.unlisten=function(t,e,n){this.root_.removeEventListener(t,e,n)},t.prototype.emit=function(t,e,n){var r;void 0===n&&(n=!1),"function"===typeof CustomEvent?r=new CustomEvent(t,{bubbles:n,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,n,!1,e),this.root_.dispatchEvent(r)},t}();e.MDCComponent=a,e.default=a},"./packages/mdc-base/foundation.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();e.MDCFoundation=r,e.default=r},"./packages/mdc-dom/ponyfill.ts":function(t,e,n){"use strict";function r(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Object.defineProperty(e,"__esModule",{value:!0}),e.closest=function(t,e){if(t.closest)return t.closest(e);for(var n=t;n;){if(r(n,e))return n;n=n.parentElement}return null},e.matches=r,e.estimateScrollWidth=function(t){var e=t;if(null!==e.offsetParent)return e.scrollWidth;var n=e.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var r=n.scrollWidth;return document.documentElement.removeChild(n),r}},"./packages/mdc-snackbar/component.ts":function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=n("./packages/mdc-base/component.ts"),a=n("./packages/mdc-dom/ponyfill.ts"),s=n("./packages/mdc-snackbar/constants.ts"),c=n("./packages/mdc-snackbar/foundation.ts"),u=o(n("./packages/mdc-snackbar/util.ts")),f=s.strings.SURFACE_SELECTOR,l=s.strings.LABEL_SELECTOR,p=s.strings.ACTION_SELECTOR,d=s.strings.DISMISS_SELECTOR,m=s.strings.OPENING_EVENT,y=s.strings.OPENED_EVENT,_=s.strings.CLOSING_EVENT,h=s.strings.CLOSED_EVENT,v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(){return u.announce}),this.announce_=t()},e.prototype.initialSyncWithDOM=function(){var t=this;this.surfaceEl_=this.root_.querySelector(f),this.labelEl_=this.root_.querySelector(l),this.actionEl_=this.root_.querySelector(p),this.handleKeyDown_=function(e){return t.foundation_.handleKeyDown(e)},this.handleSurfaceClick_=function(e){var n=e.target;t.isActionButton_(n)?t.foundation_.handleActionButtonClick(e):t.isActionIcon_(n)&&t.foundation_.handleActionIconClick(e)},this.registerKeyDownHandler_(this.handleKeyDown_),this.registerSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.deregisterKeyDownHandler_(this.handleKeyDown_),this.deregisterSurfaceClickHandler_(this.handleSurfaceClick_)},e.prototype.open=function(){this.foundation_.open()},e.prototype.close=function(t){void 0===t&&(t=""),this.foundation_.close(t)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root_.classList.add(e)},announce:function(){return t.announce_(t.labelEl_)},notifyClosed:function(e){return t.emit(h,e?{reason:e}:{})},notifyClosing:function(e){return t.emit(_,e?{reason:e}:{})},notifyOpened:function(){return t.emit(y,{})},notifyOpening:function(){return t.emit(m,{})},removeClass:function(e){return t.root_.classList.remove(e)}};return new c.MDCSnackbarFoundation(e)},Object.defineProperty(e.prototype,"timeoutMs",{get:function(){return this.foundation_.getTimeoutMs()},set:function(t){this.foundation_.setTimeoutMs(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"closeOnEscape",{get:function(){return this.foundation_.getCloseOnEscape()},set:function(t){this.foundation_.setCloseOnEscape(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.foundation_.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"labelText",{get:function(){return this.labelEl_.textContent},set:function(t){this.labelEl_.textContent=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"actionButtonText",{get:function(){return this.actionEl_.textContent},set:function(t){this.actionEl_.textContent=t},enumerable:!0,configurable:!0}),e.prototype.registerKeyDownHandler_=function(t){this.listen("keydown",t)},e.prototype.deregisterKeyDownHandler_=function(t){this.unlisten("keydown",t)},e.prototype.registerSurfaceClickHandler_=function(t){this.surfaceEl_.addEventListener("click",t)},e.prototype.deregisterSurfaceClickHandler_=function(t){this.surfaceEl_.removeEventListener("click",t)},e.prototype.isActionButton_=function(t){return Boolean(a.closest(t,p))},e.prototype.isActionIcon_=function(t){return Boolean(a.closest(t,d))},e}(i.MDCComponent);e.MDCSnackbar=v},"./packages/mdc-snackbar/constants.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cssClasses={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},e.strings={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},e.numbers={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3}},"./packages/mdc-snackbar/foundation.ts":function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=n("./packages/mdc-base/foundation.ts"),a=n("./packages/mdc-snackbar/constants.ts"),s=a.cssClasses.OPENING,c=a.cssClasses.OPEN,u=a.cssClasses.CLOSING,f=a.strings.REASON_ACTION,l=a.strings.REASON_DISMISS,p=function(t){function e(n){var r=t.call(this,o({},e.defaultAdapter,n))||this;return r.isOpen_=!1,r.animationFrame_=0,r.animationTimer_=0,r.autoDismissTimer_=0,r.autoDismissTimeoutMs_=a.numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,r.closeOnEscape_=!0,r}return r(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return a.cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return a.strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return a.numbers},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(s),this.adapter_.removeClass(c),this.adapter_.removeClass(u)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(u),this.adapter_.addClass(s),this.adapter_.announce(),this.runNextAnimationFrame_((function(){t.adapter_.addClass(c),t.animationTimer_=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),e!==a.numbers.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(l)}),e))}),a.numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(a.cssClasses.CLOSING),this.adapter_.removeClass(a.cssClasses.OPEN),this.adapter_.removeClass(a.cssClasses.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)}),a.numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},e.prototype.setTimeoutMs=function(t){var e=a.numbers.MIN_AUTO_DISMISS_TIMEOUT_MS,n=a.numbers.MAX_AUTO_DISMISS_TIMEOUT_MS,r=a.numbers.INDETERMINATE;if(!(t===a.numbers.INDETERMINATE||t<=n&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"\u2013"+n+"\n        (or "+r+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(l)},e.prototype.handleActionButtonClick=function(t){this.close(f)},e.prototype.handleActionIconClick=function(t){this.close(l)},e.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(a.cssClasses.OPENING),this.adapter_.removeClass(a.cssClasses.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)}))},e}(i.MDCFoundation);e.MDCSnackbarFoundation=p,e.default=p},"./packages/mdc-snackbar/index.ts":function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n("./packages/mdc-snackbar/util.ts"));e.util=i,r(n("./packages/mdc-snackbar/component.ts")),r(n("./packages/mdc-snackbar/constants.ts")),r(n("./packages/mdc-snackbar/foundation.ts"))},"./packages/mdc-snackbar/util.ts":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("./packages/mdc-snackbar/constants.ts"),o=r.numbers.ARIA_LIVE_DELAY_MS,i=r.strings.ARIA_LIVE_LABEL_TEXT_ATTR;e.announce=function(t,e){void 0===e&&(e=t);var n=t.getAttribute("aria-live"),r=e.textContent.trim();r&&n&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(i,r),setTimeout((function(){t.setAttribute("aria-live",n),e.removeAttribute(i),e.textContent=r}),o))}}})},t.exports=r()},GHVm:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},HAoi:function(t,e,n){"use strict";var r=n("1jut"),o=n("j5XY");t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},HmPo:function(t,e,n){var r=n("Bvq2");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},JLQQ:function(t,e,n){n("UUWy");var r=n("vA1p"),o=n("j5XY"),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};t.exports=function(t){var e=t.forEach;return t===i||t instanceof Array&&e===i.forEach||a.hasOwnProperty(o(t))?r:e}},KHTo:function(t,e,n){var r=n("1jut"),o=n("QYBB").f,i=n("AnMC"),a=n("eOcF"),s=n("HAoi"),c=n("A2Ma")("toStringTag");t.exports=function(t,e,n,u){if(t){var f=n?t:t.prototype;a(f,c)||o(f,c,{configurable:!0,value:e}),u&&!r&&i(f,"toString",s)}}},L1rz:function(t,e,n){var r,o,i,a=n("lulC"),s=n("OsYe"),c=n("39uu"),u=n("AnMC"),f=n("eOcF"),l=n("su3n"),p=n("bpon"),d=s.WeakMap;if(a){var m=new d,y=m.get,_=m.has,h=m.set;r=function(t,e){return h.call(m,t,e),e},o=function(t){return y.call(m,t)||{}},i=function(t){return _.call(m,t)}}else{var v=l("state");p[v]=!0,r=function(t,e){return u(t,v,e),e},o=function(t){return f(t,v)?t[v]:{}},i=function(t){return f(t,v)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},L5f0:function(t,e,n){var r=n("39uu");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},LGyv:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},MCtm:function(t,e,n){var r=n("wbIY"),o=n("Bvq2"),i=n("eOcF"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:c,l=i(e,1)?e[1]:void 0;return s[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,f,l)}))}},OsYe:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("yLpj"))},PE4B:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"===typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===o}(t)}(t)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(t,e){return!1!==e.clone&&e.isMergeableObject(t)?f((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function a(t,e,n){return t.concat(e).map((function(t){return i(t,n)}))}function s(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function c(t,e){try{return e in t}catch(n){return!1}}function u(t,e,n){var r={};return n.isMergeableObject(t)&&s(t).forEach((function(e){r[e]=i(t[e],n)})),s(e).forEach((function(o){(function(t,e){return c(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,o)||(c(t,o)&&n.isMergeableObject(e[o])?r[o]=function(t,e){if(!e.customMerge)return f;var n=e.customMerge(t);return"function"===typeof n?n:f}(o,n)(t[o],e[o],n):r[o]=i(e[o],n))})),r}function f(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||a,n.isMergeableObject=n.isMergeableObject||r,n.cloneUnlessOtherwiseSpecified=i;var o=Array.isArray(e);return o===Array.isArray(t)?o?n.arrayMerge(t,e,n):u(t,e,n):i(e,n)}f.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return f(t,n,e)}),{})};var l=f;t.exports=l},PoCt:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},Q0Rw:function(t,e,n){var r=n("39uu"),o=n("YiBS"),i=n("A2Ma")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},QFZC:function(t,e,n){"use strict";var r=n("pevS"),o=n("9XUY"),i=n("V3kF"),a=n("7GIe"),s=n("KHTo"),c=n("AnMC"),u=n("1mbr"),f=n("A2Ma"),l=n("cEKj"),p=n("dGO/"),d=n("u4PT"),m=d.IteratorPrototype,y=d.BUGGY_SAFARI_ITERATORS,_=f("iterator"),h=function(){return this};t.exports=function(t,e,n,f,d,v,b){o(n,e,f);var O,g,S,E=function(t){if(t===d&&x)return x;if(!y&&t in A)return A[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},T=e+" Iterator",C=!1,A=t.prototype,M=A[_]||A["@@iterator"]||d&&A[d],x=!y&&M||E(d),k="Array"==e&&A.entries||M;if(k&&(O=i(k.call(new t)),m!==Object.prototype&&O.next&&(l||i(O)===m||(a?a(O,m):"function"!=typeof O[_]&&c(O,_,h)),s(O,T,!0,!0),l&&(p[T]=h))),"values"==d&&M&&"values"!==M.name&&(C=!0,x=function(){return M.call(this)}),l&&!b||A[_]===x||c(A,_,x),p[e]=x,d)if(g={values:E("values"),keys:v?x:E("keys"),entries:E("entries")},b)for(S in g)!y&&!C&&S in A||u(A,S,g[S]);else r({target:e,proto:!0,forced:y||C},g);return g}},QYBB:function(t,e,n){var r=n("wbIY"),o=n("d7IX"),i=n("b42z"),a=n("cWgI"),s=Object.defineProperty;e.f=r?s:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return s(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},RLqH:function(t,e,n){var r=n("wbIY"),o=n("cEPT"),i=n("LGyv"),a=n("pCEo"),s=n("cWgI"),c=n("eOcF"),u=n("d7IX"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=s(e,!0),u)try{return f(t,e)}catch(n){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},RQhY:function(t,e,n){var r=n("FWHo"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},RXMP:function(t,e,n){t.exports=n("JLQQ")},SJYm:function(t,e,n){var r,o=n("b42z"),i=n("wjB2"),a=n("nleh"),s=n("bpon"),c=n("7b0v"),u=n("ejc7"),f=n("su3n"),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(e){}m=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):function(){var t,e=u("iframe");return e.style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F}();for(var t=a.length;t--;)delete m.prototype[a[t]];return m()};s[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=m(),void 0===e?n:i(n,e)}},"T/97":function(t,e,n){var r=n("GHVm");t.exports=function(t){return Object(r(t))}},UUWy:function(t,e,n){n("kQON");var r=n("eKLf"),o=n("OsYe"),i=n("j5XY"),a=n("AnMC"),s=n("dGO/"),c=n("A2Ma")("toStringTag");for(var u in r){var f=o[u],l=f&&f.prototype;l&&i(l)!==c&&a(l,c,u),s[u]=s.Array}},V3kF:function(t,e,n){var r=n("eOcF"),o=n("T/97"),i=n("su3n"),a=n("9fuf"),s=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},VsT0:function(t,e,n){n("qLPT");var r=n("oWnS");t.exports=r("Array").forEach},XEyi:function(t,e,n){var r=n("oM22");t.exports=r},Y4Ys:function(t,e,n){var r=n("pCEo"),o=n("ZyXh"),i=n("RQhY"),a=function(t){return function(e,n,a){var s,c=r(e),u=o(c.length),f=i(a,u);if(t&&n!=n){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},Y4yM:function(t,e,n){var r=n("Bvq2"),o=n("/EgQ"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},YiBS:function(t,e,n){var r=n("/EgQ");t.exports=Array.isArray||function(t){return"Array"==r(t)}},YtAO:function(t,e,n){var r=n("HmPo");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},ZBQp:function(t,e,n){var r=n("zJQS");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},ZyXh:function(t,e,n){var r=n("FWHo"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b42z:function(t,e,n){var r=n("39uu");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},bpon:function(t,e){t.exports={}},cEKj:function(t,e){t.exports=!0},cEPT:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},cWgI:function(t,e,n){var r=n("39uu");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},d7IX:function(t,e,n){var r=n("wbIY"),o=n("Bvq2"),i=n("ejc7");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"dGO/":function(t,e){t.exports={}},dktu:function(t,e){t.exports={}},doUz:function(t,e,n){var r=n("OsYe"),o=n("j60x"),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},eKLf:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},eOcF:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},ejc7:function(t,e,n){var r=n("OsYe"),o=n("39uu"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},j5XY:function(t,e,n){var r=n("1jut"),o=n("/EgQ"),i=n("A2Ma")("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},j60x:function(t,e,n){var r=n("OsYe"),o=n("AnMC");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},kQON:function(t,e,n){"use strict";var r=n("pCEo"),o=n("xE4W"),i=n("dGO/"),a=n("L1rz"),s=n("QFZC"),c=a.set,u=a.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},kUbF:function(t,e,n){"use strict";(function(t){e.a=function(e){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof t&&(n=t.Vue),n&&n.use(e)}}).call(this,n("yLpj"))},lulC:function(t,e,n){var r=n("OsYe"),o=n("6Jnn"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},mIMY:function(t,e,n){var r=n("dktu"),o=n("OsYe"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},maQk:function(t,e,n){"use strict";var r=n("3uAa").forEach,o=n("n2Hk"),i=n("MCtm"),a=o("forEach"),s=i("forEach");t.exports=a&&s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},n2Hk:function(t,e,n){"use strict";var r=n("Bvq2");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},nleh:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},oBZR:function(t,e,n){var r=n("syO3"),o=n("nleh");t.exports=Object.keys||function(t){return r(t,o)}},oM22:function(t,e,n){n("CqEA");var r=n("dktu");t.exports=r.Object.keys},oOVA:function(t,e,n){var r=n("Bvq2"),o=/#|\.prototype\./,i=function(t,e){var n=s[a(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},oWnS:function(t,e,n){var r=n("dktu");t.exports=function(t){return r[t+"Prototype"]}},pCEo:function(t,e,n){var r=n("Y4yM"),o=n("GHVm");t.exports=function(t){return r(o(t))}},pevS:function(t,e,n){"use strict";var r=n("OsYe"),o=n("RLqH").f,i=n("oOVA"),a=n("dktu"),s=n("ZBQp"),c=n("AnMC"),u=n("eOcF"),f=function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,l,p,d,m,y,_,h,v=t.target,b=t.global,O=t.stat,g=t.proto,S=b?r:O?r[v]:(r[v]||{}).prototype,E=b?a:a[v]||(a[v]={}),T=E.prototype;for(p in e)n=!i(b?p:v+(O?".":"#")+p,t.forced)&&S&&u(S,p),m=E[p],n&&(y=t.noTargetGet?(h=o(S,p))&&h.value:S[p]),d=n&&y?y:e[p],n&&typeof m===typeof d||(_=t.bind&&n?s(d,r):t.wrap&&n?f(d):g&&"function"==typeof d?s(Function.call,d):d,(t.sham||d&&d.sham||m&&m.sham)&&c(_,"sham",!0),E[p]=_,g&&(u(a,l=v+"Prototype")||c(a,l,{}),a[l][p]=d,t.real&&T&&!T[p]&&c(T,p,d)))}},pv2Q:function(t,e,n){"use strict";n.r(e);var r=n("kUbF"),o=n("+oHS"),i=n.n(o),a=n("RXMP"),s=n.n(a),c=n("PE4B"),u=n.n(c),f=/(?:^\[object\s(.*?)\]$)/,l=function(t){return Object.prototype.toString.call(t).replace(f,"$1").toLowerCase()},p=function(t){var e=t.componentProps,n=t.propName,r=t.props,o=e[n].default,i=r[n];"object"!==l(o)?e[n].default=i:e[n].default=u()(o,i)},d=function(t){var e=t.componentMixins,n=t.propName,r=t.props;if(e.length)for(var o=e.length;o--;)if(e[o].props&&void 0!==e[o].props[n]){p({componentProps:e[o].props,propName:n,props:r});break}},m=function(t,e){var n;s()(n=i()(e)).call(n,(function(n){t.props?void 0===t.props[n]?d({componentMixins:t.mixins,propName:n,props:e}):p({componentProps:t.props,propName:n,props:e}):d({componentMixins:t.mixins,propName:n,props:e})}))},y=function(t){var e={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};m(t,n),e.component(t.name,t)}};return Object(r.a)(e),e},_=n("FfTd"),h={ACTION_BUTTON:0,DISMISS_ICON:1},v={MIN:4e3,MAX:1e4,DEFAULTS:5e3},b={CHANGE:"change",CLOSED:"closed"};var O=function(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}({name:"ui-snackbar",model:{prop:"open",event:b.CHANGE},props:{actionType:{type:Number,default:h.ACTION_BUTTON},open:{type:Boolean,default:!1},timeoutMs:{type:[Number,String],default:v.DEFAULTS},message:{type:String,default:""},actionButtonText:String,stacked:{type:Boolean,default:!1},leading:{type:Boolean,default:!1}},data:function(){return{$snackbar:null}},computed:{className:function(){return{"mdc-snackbar":!0,"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading}},canDismiss:function(){return this.actionType===h.DISMISS_ICON},actionButtonClassName:function(){return this.canDismiss?"mdc-icon-button mdc-snackbar__dismiss":"mdc-button mdc-snackbar__action"},hasAction:function(){return this.actionButtonText||this.canDismiss}},watch:{open:function(t){t&&this.$snackbar.open()},timeoutMs:function(t){this.setTimeoutMs(+t)},message:function(t){this.$snackbar.labelText=t}},mounted:function(){var t=this;this.$snackbar=new _.MDCSnackbar(this.$el),this.timeoutMs!==v.DEFAULTS&&this.setTimeoutMs(+this.timeoutMs),this.message&&(this.$snackbar.labelText=this.message),this.$snackbar.listen("MDCSnackbar:closed",(function(){t.$emit(b.CHANGE,!1),t.$emit(b.CLOSED)}))},methods:{setTimeoutMs:function(t){t>=v.MIN&&t<=v.MAX?this.$snackbar.timeoutMs=t:console.warn("The timeoutMs of the snackbar must be between `4000` and `10000`")}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("div",{staticClass:"mdc-snackbar__surface"},[n("div",{staticClass:"mdc-snackbar__label",attrs:{role:"status","aria-live":"polite"}},[t._t("default",[t._v(t._s(t.message))])],2),t._v(" "),t.hasAction?n("div",{staticClass:"mdc-snackbar__actions"},[n("button",{class:t.actionButtonClassName,attrs:{type:"button"}},[t._t("action",[t._v(t._s(t.canDismiss?"X":t.actionButtonText))])],2)]):t._e()])])}),[],!1,null,null,null).exports;e.default=y(O)},qLPT:function(t,e,n){"use strict";var r=n("pevS"),o=n("maQk");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},su3n:function(t,e,n){var r=n("1lkh"),o=n("PoCt"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},syO3:function(t,e,n){var r=n("eOcF"),o=n("pCEo"),i=n("Y4Ys").indexOf,a=n("bpon");t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)!r(a,n)&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},u4PT:function(t,e,n){"use strict";var r,o,i,a=n("V3kF"),s=n("AnMC"),c=n("eOcF"),u=n("A2Ma"),f=n("cEKj"),l=u("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),void 0==r&&(r={}),f||c(r,l)||s(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},vA1p:function(t,e,n){var r=n("VsT0");t.exports=r},wbIY:function(t,e,n){var r=n("Bvq2");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},wjB2:function(t,e,n){var r=n("wbIY"),o=n("QYBB"),i=n("b42z"),a=n("oBZR");t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),s=r.length,c=0;s>c;)o.f(t,n=r[c++],e[n]);return t}},xE4W:function(t,e){t.exports=function(){}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},zJQS:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}}})}));