!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(n){var i={};function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=n,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="Zg15")}({"6Y56":function(t,e,n){"use strict";e.a={props:{url:String}}},"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var o=function(t){return!!(i=t)&&"object"===typeof i&&(e=t,!("[object RegExp]"===(n=Object.prototype.toString.call(e))||"[object Date]"===n||e.$$typeof===a));var e,n,i},a="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function s(t,e){return!1!==e.clone&&e.isMergeableObject(t)?r((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function u(t,e,n){return t.concat(e).map(function(t){return s(t,n)})}function l(e,n,i){var a={};return i.isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=s(e[t],i)}),Object.keys(n).forEach(function(t){i.isMergeableObject(n[t])&&e[t]?a[t]=function(t,e){if(!e.customMerge)return r;var n=e.customMerge(t);return"function"===typeof n?n:r}(t,i)(e[t],n[t],i):a[t]=s(n[t],i)}),a}function r(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||u,n.isMergeableObject=n.isMergeableObject||o;var i=Array.isArray(e),a=Array.isArray(t),r=i===a;return r?i?n.arrayMerge(t,e,n):l(t,e,n):s(e,n)}return r.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return r(t,e,n)},{})},r}()},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,s){var u,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var r,i;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r;if("boolean"===typeof r&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var i=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!i&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(r=n),n}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){return n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}function s(t){for(var e=["matches","webkitMatchesSelector","msMatchesSelector"],n="matches",i=0;i<e.length;i++){var a=e[i];if(a in t){n=a;break}}return n}function u(t,e,n){var i,a,r=e.x,o=e.y,s=r+n.left,u=o+n.top;return a="touchstart"===t.type?(i=(t=t).changedTouches[0].pageX-s,t.changedTouches[0].pageY-u):(i=(t=t).pageX-s,t.pageY-u),{x:i,y:a}}n.d(e,"d",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u})},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},PSzo:function(t,e,n){"use strict";var i=n("kUbF"),r=n("gVot"),o=function(i,a){Object.keys(a).forEach(function(t){if(void 0!==i[t]){var e=i[t],n=a[t];Object(r.a)(e,n)}})};e.a=function(a){var t={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in o(a,e),a){var i=a[n];t.component(i.name,i)}}};return Object(i.a)(t),t}},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("W8MJ"),s=n.n(a),u=n("oLRI"),r=function(){function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o()(this,r),this.root_=t;for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];this.initialize.apply(this,i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return s()(r,null,[{key:"attachTo",value:function(t){return new r(t,new u.a)}}]),s()(r,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),r}();e.a=r},SksO:function(n,t){function i(t,e){return n.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}n.exports=i},W8MJ:function(t,e){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},Zg15:function(t,e,n){"use strict";n.r(e);var i=n("PSzo"),a=function(){var t=this.$createElement;return(this._self._c||t)("header",{class:this.className},[this._t("default")],2)};a._withStripped=!0;var r=n("lwsE"),o=n.n(r),s=n("W8MJ"),u=n.n(s),l=n("a1gu"),c=n.n(l),d=n("Nsbk"),f=n.n(d),_=n("iWIM"),h=n.n(_),p=n("7W2i"),v=n.n(p),m=n("SBAC"),y=n("zsl9"),b=n("oLRI"),g={FIXED:"mdc-toolbar--fixed",FIXED_LASTROW:"mdc-toolbar--fixed-lastrow-only",FIXED_AT_LAST_ROW:"mdc-toolbar--fixed-at-last-row",TOOLBAR_ROW_FLEXIBLE:"mdc-toolbar--flexible",FLEXIBLE_DEFAULT_BEHAVIOR:"mdc-toolbar--flexible-default-behavior",FLEXIBLE_MAX:"mdc-toolbar--flexible-space-maximized",FLEXIBLE_MIN:"mdc-toolbar--flexible-space-minimized"},E={TITLE_SELECTOR:".mdc-toolbar__title",ICON_SELECTOR:".mdc-toolbar__icon",FIRST_ROW_SELECTOR:".mdc-toolbar__row:first-child",CHANGE_EVENT:"MDCToolbar:change"},A={MAX_TITLE_SIZE:2.125,MIN_TITLE_SIZE:1.25,TOOLBAR_ROW_HEIGHT:64,TOOLBAR_ROW_MOBILE_HEIGHT:56,TOOLBAR_MOBILE_BREAKPOINT:600},S=function(t){function a(t){var e;return o()(this,a),(e=c()(this,f()(a).call(this,Object.assign(a.defaultAdapter,t)))).resizeHandler_=function(){return e.checkRowHeight_()},e.scrollHandler_=function(){return e.updateToolbarStyles_()},e.checkRowHeightFrame_=0,e.scrollFrame_=0,e.executedLastChange_=!1,e.calculations_={toolbarRowHeight:0,toolbarRatio:0,flexibleExpansionRatio:0,maxTranslateYRatio:0,scrollThresholdRatio:0,toolbarHeight:0,flexibleExpansionHeight:0,maxTranslateYDistance:0,scrollThreshold:0},e.fixed_=!1,e.fixedLastrow_=!1,e.hasFlexibleRow_=!1,e.useFlexDefaultBehavior_=!1,e}return v()(a,t),u()(a,null,[{key:"cssClasses",get:function(){return g}},{key:"strings",get:function(){return E}},{key:"numbers",get:function(){return A}},{key:"defaultAdapter",get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},registerScrollHandler:function(){},deregisterScrollHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},getViewportWidth:function(){return 0},getViewportScrollY:function(){return 0},getOffsetHeight:function(){return 0},getFirstRowElementOffsetHeight:function(){return 0},notifyChange:function(){},setStyle:function(){},setStyleForTitleElement:function(){},setStyleForFlexibleRowElement:function(){},setStyleForFixedAdjustElement:function(){}}}}]),u()(a,[{key:"init",value:function(){this.fixed_=this.adapter_.hasClass(a.cssClasses.FIXED),this.fixedLastrow_=this.adapter_.hasClass(a.cssClasses.FIXED_LASTROW)&this.fixed_,this.hasFlexibleRow_=this.adapter_.hasClass(a.cssClasses.TOOLBAR_ROW_FLEXIBLE),this.hasFlexibleRow_&&(this.useFlexDefaultBehavior_=this.adapter_.hasClass(a.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR)),this.initKeyRatio_(),this.setKeyHeights_(),this.adapter_.registerResizeHandler(this.resizeHandler_),this.adapter_.registerScrollHandler(this.scrollHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}},{key:"updateAdjustElementStyles",value:function(){this.fixed_&&this.adapter_.setStyleForFixedAdjustElement("margin-top","".concat(this.calculations_.toolbarHeight,"px"))}},{key:"getFlexibleExpansionRatio_",value:function(t){return Math.max(0,1-t/(this.calculations_.flexibleExpansionHeight+1e-4))}},{key:"checkRowHeight_",value:function(){var t=this;cancelAnimationFrame(this.checkRowHeightFrame_),this.checkRowHeightFrame_=requestAnimationFrame(function(){return t.setKeyHeights_()})}},{key:"setKeyHeights_",value:function(){var t=this.getRowHeight_();t!==this.calculations_.toolbarRowHeight&&(this.calculations_.toolbarRowHeight=t,this.calculations_.toolbarHeight=this.calculations_.toolbarRatio*this.calculations_.toolbarRowHeight,this.calculations_.flexibleExpansionHeight=this.calculations_.flexibleExpansionRatio*this.calculations_.toolbarRowHeight,this.calculations_.maxTranslateYDistance=this.calculations_.maxTranslateYRatio*this.calculations_.toolbarRowHeight,this.calculations_.scrollThreshold=this.calculations_.scrollThresholdRatio*this.calculations_.toolbarRowHeight,this.updateAdjustElementStyles(),this.updateToolbarStyles_())}},{key:"updateToolbarStyles_",value:function(){var i=this;cancelAnimationFrame(this.scrollFrame_),this.scrollFrame_=requestAnimationFrame(function(){var t=i.adapter_.getViewportScrollY(),e=i.scrolledOutOfThreshold_(t);if(!e||!i.executedLastChange_){var n=i.getFlexibleExpansionRatio_(t);i.updateToolbarFlexibleState_(n),i.fixedLastrow_&&i.updateToolbarFixedState_(t),i.hasFlexibleRow_&&i.updateFlexibleRowElementStyles_(n),i.executedLastChange_=e,i.adapter_.notifyChange({flexibleExpansionRatio:n})}})}},{key:"scrolledOutOfThreshold_",value:function(t){return t>this.calculations_.scrollThreshold}},{key:"initKeyRatio_",value:function(){var t=this.getRowHeight_(),e=this.adapter_.getFirstRowElementOffsetHeight()/t;this.calculations_.toolbarRatio=this.adapter_.getOffsetHeight()/t,this.calculations_.flexibleExpansionRatio=e-1,this.calculations_.maxTranslateYRatio=this.fixedLastrow_?this.calculations_.toolbarRatio-e:0,this.calculations_.scrollThresholdRatio=(this.fixedLastrow_?this.calculations_.toolbarRatio:e)-1}},{key:"getRowHeight_",value:function(){var t=a.numbers.TOOLBAR_MOBILE_BREAKPOINT;return this.adapter_.getViewportWidth()<t?a.numbers.TOOLBAR_ROW_MOBILE_HEIGHT:a.numbers.TOOLBAR_ROW_HEIGHT}},{key:"updateToolbarFlexibleState_",value:function(t){this.adapter_.removeClass(a.cssClasses.FLEXIBLE_MAX),this.adapter_.removeClass(a.cssClasses.FLEXIBLE_MIN),1===t?this.adapter_.addClass(a.cssClasses.FLEXIBLE_MAX):0===t&&this.adapter_.addClass(a.cssClasses.FLEXIBLE_MIN)}},{key:"updateToolbarFixedState_",value:function(t){var e=Math.max(0,Math.min(t-this.calculations_.flexibleExpansionHeight,this.calculations_.maxTranslateYDistance));this.adapter_.setStyle("transform","translateY(".concat(-e,"px)")),e===this.calculations_.maxTranslateYDistance?this.adapter_.addClass(a.cssClasses.FIXED_AT_LAST_ROW):this.adapter_.removeClass(a.cssClasses.FIXED_AT_LAST_ROW)}},{key:"updateFlexibleRowElementStyles_",value:function(t){if(this.fixed_){var e=this.calculations_.flexibleExpansionHeight*t;this.adapter_.setStyleForFlexibleRowElement("height","".concat(e+this.calculations_.toolbarRowHeight,"px"))}this.useFlexDefaultBehavior_&&this.updateElementStylesDefaultBehavior_(t)}},{key:"updateElementStylesDefaultBehavior_",value:function(t){var e=a.numbers.MAX_TITLE_SIZE,n=a.numbers.MIN_TITLE_SIZE,i=(e-n)*t+n;this.adapter_.setStyleForTitleElement("font-size","".concat(i,"rem"))}}]),a}(b.a),T=function(t){function e(){return o()(this,e),c()(this,f()(e).apply(this,arguments))}return v()(e,t),u()(e,[{key:"initialize",value:function(){this.ripples_=[].map.call(this.root_.querySelectorAll(S.strings.ICON_SELECTOR),function(t){var e=y.a.attachTo(t);return e.unbounded=!0,e})}},{key:"destroy",value:function(){this.ripples_.forEach(function(t){t.destroy()}),h()(f()(e.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){var n=this;return new S({hasClass:function(t){return n.root_.classList.contains(t)},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},registerScrollHandler:function(t){return window.addEventListener("scroll",t)},deregisterScrollHandler:function(t){return window.removeEventListener("scroll",t)},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getViewportWidth:function(){return window.innerWidth},getViewportScrollY:function(){return window.pageYOffset},getOffsetHeight:function(){return n.root_.offsetHeight},getFirstRowElementOffsetHeight:function(){return n.firstRowElement_.offsetHeight},notifyChange:function(t){return n.emit(S.strings.CHANGE_EVENT,t)},setStyle:function(t,e){return n.root_.style.setProperty(t,e)},setStyleForTitleElement:function(t,e){return n.titleElement_.style.setProperty(t,e)},setStyleForFlexibleRowElement:function(t,e){return n.firstRowElement_.style.setProperty(t,e)},setStyleForFixedAdjustElement:function(t,e){n.fixedAdjustElement&&n.fixedAdjustElement.style.setProperty(t,e)}})}},{key:"firstRowElement_",get:function(){return this.root_.querySelector(S.strings.FIRST_ROW_SELECTOR)}},{key:"titleElement_",get:function(){return this.root_.querySelector(S.strings.TITLE_SELECTOR)}},{key:"fixedAdjustElement",set:function(t){this.fixedAdjustElement_=t,this.foundation_.updateAdjustElementStyles()},get:function(){return this.fixedAdjustElement_}}],[{key:"attachTo",value:function(t){return new e(t)}}]),e}(m.a),x={CHANGE:"change"},w={name:"ui-toolbar",props:{fixed:{type:Boolean,default:!1},waterfall:{type:Boolean,default:!1},fixedLastrow:{type:Boolean,default:!1},flexible:{type:Boolean,default:!1},defaultFlexible:{type:Boolean,default:!1},contentSelector:{type:String,default:".mdc-toolbar-fixed-adjust"}},data:function(){return{$toolbar:null}},computed:{isFixed:function(){return this.fixed||this.waterfall||this.fixedLastrow},className:function(){var t=this.flexible||this.defaultFlexible;return{"mdc-toolbar":!0,"mdc-toolbar--fixed":this.isFixed,"mdc-toolbar--waterfall":this.waterfall,"mdc-toolbar--fixed-lastrow-only":this.fixedLastrow,"mdc-toolbar--flexible":t,"mdc-toolbar--flexible-default-behavior":this.defaultFlexible}}},mounted:function(){var n=this;this.$toolbar=new T(this.$el),this.$toolbar.listen("MDCToolbar:".concat(x.CHANGE),function(t){var e=t.detail;n.$emit(x.CHANGE,e.flexibleExpansionRatio)}),this.isFixed&&this.fixedAdjustContent()},methods:{fixedAdjustContent:function(){var t=document.querySelector(this.contentSelector);t&&(this.$toolbar.fixedAdjustElement=t)}}},R=n("KHd+"),C=Object(R.a)(w,a,[],!1,null,null,null);C.options.__file="src/scripts/components/toolbar/toolbar.vue";var O=C.exports,H=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mdc-toolbar__row"},[this._t("default")],2)};H._withStripped=!0;var I={name:"ui-toolbar-row"},F=Object(R.a)(I,H,[],!1,null,null,null);F.options.__file="src/scripts/components/toolbar/toolbar-row.vue";var k=F.exports,L=function(){var t=this.$createElement;return(this._self._c||t)("section",{class:this.className},[this._t("default")],2)};L._withStripped=!0;var D=["start","end"],M={name:"ui-toolbar-section",props:{align:{type:String,default:""},fit:{type:Boolean,default:!1}},computed:{className:function(){var t=["mdc-toolbar__section"];if(this.align){var e=this.align.toLowerCase();D.includes(e)&&t.push("mdc-toolbar__section--align-".concat(e))}return this.fit&&t.push("mdc-toolbar__section--shrink-to-fit"),t}}},j=Object(R.a)(M,L,[],!1,null,null,null);j.options.__file="src/scripts/components/toolbar/toolbar-section.vue";var N=j.exports,B=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"mdc-toolbar__title"},[this._t("default")],2)};B._withStripped=!0;var V={name:"ui-toolbar-title"},P=Object(R.a)(V,B,[],!1,null,null,null);P.options.__file="src/scripts/components/toolbar/toolbar-title.vue";var U=P.exports,z=function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{class:t.className,attrs:{href:t.url}},[t._t("default",[t._v(t._s(t.isMenu?"menu":""))])],2)};z._withStripped=!0;var G=n("oIJy"),W="menu",X={props:{type:{type:String,default:"icon"}},computed:{isMenu:function(){return this.type.toLowerCase()===W},className:function(){return[G.a.mdi,this.isMenu?"mdc-toolbar__menu-icon":"mdc-toolbar__icon"]}}},$={name:"ui-toolbar-anchor",mixins:[X,n("6Y56").a]},Y=Object(R.a)($,z,[],!1,null,null,null);Y.options.__file="src/scripts/components/toolbar/icons/toolbar-anchor.vue";var q=Y.exports,Z=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:t.className},[t._t("default",[t._v(t._s(t.isMenu?"menu":""))])],2)};Z._withStripped=!0;var J={name:"ui-toolbar-span",mixins:[X]},K=Object(R.a)(J,Z,[],!1,null,null,null);K.options.__file="src/scripts/components/toolbar/icons/toolbar-span.vue";var Q=K.exports,tt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.className,attrs:{type:"button"},on:{click:t.handleClick}},[t._t("default",[t._v(t._s(t.isMenu?"menu":""))])],2)};tt._withStripped=!0;var et={name:"ui-toolbar-button",mixins:[X],methods:{handleClick:function(t){this.$emit("click",t)}}},nt=Object(R.a)(et,tt,[],!1,null,null,null);nt.options.__file="src/scripts/components/toolbar/icons/toolbar-button.vue";var it=nt.exports;e.default=Object(i.a)({UiToolbar:O,UiToolbarRow:k,UiToolbarSection:N,UiToolbarTitle:U,UiToolbarAnchor:q,UiToolbarSpan:Q,UiToolbarButton:it})},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},cDf5:function(e,t){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(t){return n(t)}:e.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(t)}e.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),o=n.n(i),s=n("QnW2"),r=function(t){var e=t.componentProps,n=t.propName,i=t.props,a=e[n].default,r=i[n];"object"!==Object(s.a)(a)?e[n].default=r:e[n].default=o()(a,r)},a=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var a=e.length;a--;)if(void 0!==e[a].props[n]){r({componentProps:e[a].props,propName:n,props:i});break}};e.a=function(e,n){Object.keys(n).forEach(function(t){e.props?void 0===e.props[t]?a({componentMixins:e.mixins,propName:t,props:n}):r({componentProps:e.props,propName:t,props:n}):a({componentMixins:e.mixins,propName:t,props:n})})}},iWIM:function(i,t,e){e("Nsbk");var r=e("n3AX");function a(t,e,n){return"undefined"!==typeof Reflect&&Reflect.get?i.exports=a=Reflect.get:i.exports=a=function(t,e,n){var i=r(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}},a(t,e,n||t)}i.exports=a},kUbF:function(t,e,n){"use strict";(function(n){e.a=function(t){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof n&&(e=n.Vue),e&&e.use(t)}}).call(this,n("yLpj"))},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oIJy:function(t,e,n){"use strict";e.a={mdi:"material-icons"}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),r=n("W8MJ"),o=n.n(r),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,e),this.adapter_=t}return o()(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o()(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();e.a=s},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}t.exports=n},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("W8MJ"),s=n.n(a),r=n("a1gu"),u=n.n(r),l=n("Nsbk"),c=n.n(l),d=n("7W2i"),f=n.n(d),_=n("SBAC"),h=n("oLRI"),p={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},v={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},m={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),b=["touchstart","pointerdown","mousedown","keydown"],g=["touchend","pointerup","mouseup","contextmenu"],E=[],A=function(t){function _(t){var e;return o()(this,_),(e=u()(this,c()(_).call(this,Object.assign(_.defaultAdapter,t)))).layoutFrame_=0,e.frame_={width:0,height:0},e.activationState_=e.defaultActivationState_(),e.initialSize_=0,e.maxRadius_=0,e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(){return e.deactivate_()},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e.unboundedCoords_={left:0,top:0},e.fgScale_=0,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.activationAnimationHasEnded_=!1,e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.previousActivationEvent_,e}return f()(_,t),s()(_,null,[{key:"cssClasses",get:function(){return p}},{key:"strings",get:function(){return v}},{key:"numbers",get:function(){return m}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s()(_,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=_.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(a),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(_.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(_.cssClasses.FG_DEACTIVATION));var e=_.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(b.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):g.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;b.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),g.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=_.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&E.length>0&&E.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(E.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){E=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(t){this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,e=_.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,a=_.cssClasses,r=a.FG_DEACTIVATION,o=a.FG_ACTIVATION,s=_.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",l="";if(!this.adapter_.isUnbounded()){var c=this.getFgTranslationCoordinates_(),d=c.startPoint,f=c.endPoint;u="".concat(d.x,"px, ").concat(d.y,"px"),l="".concat(f.x,"px, ").concat(f.y,"px")}this.adapter_.updateCssVariable(n,u),this.adapter_.updateCssVariable(i,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,e=_.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,a=n.isActivated;(i||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},m.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=_.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},_.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(){var t=this,e=this.activationState_;if(e.isActivated){var n=Object.assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}}},{key:"deactivate",value:function(){this.deactivate_()}},{key:"animateDeactivation_",value:function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+_.numbers.PADDING,this.initialSize_=Math.floor(e*_.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=_.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var e=_.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(_.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(_.cssClasses.BG_FOCUSED)})}}]),_}(h.a);n.d(e,"a",function(){return S}),n.d(e,"b",function(){return A});var S=function(t){function r(){var t,e;o()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=u()(this,(t=c()(r)).call.apply(t,[this].concat(i)))).disabled=!1,e.unbounded_,e}return f()(r,t),s()(r,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new A(r.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,n=void 0===e?void 0:e,i=new r(t);return void 0!==n&&(i.unbounded=n),i}},{key:"createAdapter",value:function(n){var t=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return n.unbounded},isSurfaceActive:function(){return n.root_[t](":active")},isSurfaceDisabled:function(){return n.disabled},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},containsEventTarget:function(t){return n.root_.contains(t)},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,y.a())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),r}(_.a)}})});