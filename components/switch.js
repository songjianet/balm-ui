!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(n){var i={};function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=n,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="b1ia")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var o=function(t){return!!(i=t)&&"object"===typeof i&&(e=t,!("[object RegExp]"===(n=Object.prototype.toString.call(e))||"[object Date]"===n||e.$$typeof===a));var e,n,i},a="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function s(t,e){return!1!==e.clone&&e.isMergeableObject(t)?r((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function u(t,e,n){return t.concat(e).map(function(t){return s(t,n)})}function c(e,n,i){var a={};return i.isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=s(e[t],i)}),Object.keys(n).forEach(function(t){i.isMergeableObject(n[t])&&e[t]?a[t]=function(t,e){if(!e.customMerge)return r;var n=e.customMerge(t);return"function"===typeof n?n:r}(t,i)(e[t],n[t],i):a[t]=s(n[t],i)}),a}function r(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||u,n.isMergeableObject=n.isMergeableObject||o;var i=Array.isArray(e),a=Array.isArray(t),r=i===a;return r?i?n.arrayMerge(t,e,n):c(t,e,n):s(e,n)}return r.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return r(t,e,n)},{})},r}()},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var r,i;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r;if("boolean"===typeof r&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var i=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!i&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(r=n),n}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){return n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}function s(t){for(var e=["matches","webkitMatchesSelector","msMatchesSelector"],n="matches",i=0;i<e.length;i++){var a=e[i];if(a in t){n=a;break}}return n}function u(t,e,n){var i,a,r=e.x,o=e.y,s=r+n.left,u=o+n.top;return a="touchstart"===t.type?(i=(t=t).changedTouches[0].pageX-s,t.changedTouches[0].pageY-u):(i=(t=t).pageX-s,t.pageY-u),{x:i,y:a}}n.d(e,"d",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u})},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QIRk:function(t,e,n){"use strict";n("lwsE"),n("W8MJ"),n("zsl9")},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("W8MJ"),s=n.n(a),u=n("oLRI"),r=function(){function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o()(this,r),this.root_=t;for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];this.initialize.apply(this,i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return s()(r,null,[{key:"attachTo",value:function(t){return new r(t,new u.a)}}]),s()(r,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),r}();e.a=r},SksO:function(n,t){function i(t,e){return n.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}n.exports=i},W8MJ:function(t,e){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},b1ia:function(t,e,n){"use strict";n.r(e);var i=n("iri3"),a=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{class:r.className},[e("div",{staticClass:"mdc-switch__track"}),r._v(" "),e("div",{staticClass:"mdc-switch__thumb-underlay"},[e("div",{staticClass:"mdc-switch__thumb"},[e("input",r._b({directives:[{name:"model",rawName:"v-model",value:r.toggleValue,expression:"toggleValue"}],staticClass:"mdc-switch__native-control",attrs:{id:r.id,type:"checkbox",role:"switch",name:r.name,"true-value":r.trueValue,"false-value":r.falseValue,disabled:r.disabled},domProps:{checked:Array.isArray(r.toggleValue)?r._i(r.toggleValue,null)>-1:r._q(r.toggleValue,r.trueValue)},on:{change:[function(t){var e=r.toggleValue,n=t.target,i=n.checked?r.trueValue:r.falseValue;if(Array.isArray(e)){var a=r._i(e,null);n.checked?a<0&&(r.toggleValue=e.concat([null])):a>-1&&(r.toggleValue=e.slice(0,a).concat(e.slice(a+1)))}else r.toggleValue=i},r.handleChange]}},"input",r.attrs,!1))])])])};a._withStripped=!0;var r=n("lwsE"),o=n.n(r),s=n("a1gu"),u=n.n(s),c=n("Nsbk"),d=n.n(c),l=n("iWIM"),f=n.n(l),v=n("W8MJ"),p=n.n(v),h=n("7W2i"),_=n.n(h),m=n("SBAC"),y=(n("QIRk"),n("oLRI")),g={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},b={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},C=function(t){function e(t){return o()(this,e),u()(this,d()(e).call(this,Object.assign(e.defaultAdapter,t)))}return _()(e,t),p()(e,null,[{key:"strings",get:function(){return b}},{key:"cssClasses",get:function(){return g}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){}}}}]),p()(e,[{key:"setChecked",value:function(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)}},{key:"setDisabled",value:function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(g.DISABLED):this.adapter_.removeClass(g.DISABLED)}},{key:"handleChange",value:function(t){this.updateCheckedStyling_(t.target.checked)}},{key:"updateCheckedStyling_",value:function(t){t?this.adapter_.addClass(g.CHECKED):this.adapter_.removeClass(g.CHECKED)}}]),e}(y.a),A=n("zsl9"),E=n("MuGO"),S=function(t){function r(){var t,e;o()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=u()(this,(t=d()(r)).call.apply(t,[this].concat(i)))).ripple_=e.initRipple_(),e.changeHandler_,e}return _()(r,t),p()(r,null,[{key:"attachTo",value:function(t){return new r(t)}}]),p()(r,[{key:"destroy",value:function(){f()(d()(r.prototype),"destroy",this).call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)}},{key:"initialSyncWithDOM",value:function(){this.changeHandler_=this.foundation_.handleChange.bind(this.foundation_),this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked}},{key:"initRipple_",value:function(){var n=this,t=C.strings.RIPPLE_SURFACE_SELECTOR,i=this.root_.querySelector(t),e=Object(E.b)(HTMLElement.prototype),a=Object.assign(A.a.createAdapter(this),{isUnbounded:function(){return!0},isSurfaceActive:function(){return n.nativeControl_[e](":active")},addClass:function(t){return i.classList.add(t)},removeClass:function(t){return i.classList.remove(t)},registerInteractionHandler:function(t,e){return n.nativeControl_.addEventListener(t,e)},deregisterInteractionHandler:function(t,e){return n.nativeControl_.removeEventListener(t,e)},updateCssVariable:function(t,e){return i.style.setProperty(t,e)},computeBoundingRect:function(){return i.getBoundingClientRect()}}),r=new A.b(a);return new A.a(this.root_,r)}},{key:"getDefaultFoundation",value:function(){var e=this;return new C({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setNativeControlChecked:function(t){return e.nativeControl_.checked=t},setNativeControlDisabled:function(t){return e.nativeControl_.disabled=t}})}},{key:"nativeControl_",get:function(){var t=C.strings.NATIVE_CONTROL_SELECTOR;return this.root_.querySelector(t)}},{key:"ripple",get:function(){return this.ripple_}},{key:"checked",get:function(){return this.nativeControl_.checked},set:function(t){this.foundation_.setChecked(t)}},{key:"disabled",get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)}}]),r}(m.a),k=n("kX8e"),w={CHANGE:"change"},T={name:"ui-switch",mixins:[k.a],model:{prop:"model",event:w.CHANGE},props:{model:{type:[Boolean,Number,String],default:!1},trueValue:{type:[Boolean,Number,String],default:!0},falseValue:{type:[Boolean,Number,String],default:!1},disabled:{type:Boolean,default:!1},id:String,name:String},data:function(){return{toggleValue:this.model}},computed:{className:function(){return{"mdc-switch":!0,"mdc-switch--disabled":this.disabled}}},watch:{model:function(t){this.toggleValue=t}},mounted:function(){new S(this.$el)},methods:{handleChange:function(){this.$emit(w.CHANGE,this.toggleValue)}}},O=n("KHd+"),R=Object(O.a)(T,a,[],!1,null,null,null);R.options.__file="src/scripts/components/input-controls/switch.vue";var I=R.exports;e.default=Object(i.a)(I)},cDf5:function(e,t){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(t){return n(t)}:e.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(t)}e.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),o=n.n(i),s=n("QnW2"),r=function(t){var e=t.componentProps,n=t.propName,i=t.props,a=e[n].default,r=i[n];"object"!==Object(s.a)(a)?e[n].default=r:e[n].default=o()(a,r)},a=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var a=e.length;a--;)if(void 0!==e[a].props[n]){r({componentProps:e[a].props,propName:n,props:i});break}};e.a=function(e,n){Object.keys(n).forEach(function(t){e.props?void 0===e.props[t]?a({componentMixins:e.mixins,propName:t,props:n}):r({componentProps:e.props,propName:t,props:n}):a({componentMixins:e.mixins,propName:t,props:n})})}},iWIM:function(i,t,e){e("Nsbk");var r=e("n3AX");function a(t,e,n){return"undefined"!==typeof Reflect&&Reflect.get?i.exports=a=Reflect.get:i.exports=a=function(t,e,n){var i=r(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}},a(t,e,n||t)}i.exports=a},iri3:function(t,e,n){"use strict";var i=n("kUbF"),a=n("gVot");e.a=function(n){var t={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a.a)(n,e),t.component(n.name,n)}};return Object(i.a)(t),t}},kUbF:function(t,e,n){"use strict";(function(n){e.a=function(t){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof n&&(e=n.Vue),e&&e.use(t)}}).call(this,n("yLpj"))},kX8e:function(t,e,n){"use strict";e.a={props:{attrs:Object}}},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),r=n("W8MJ"),o=n.n(r),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,e),this.adapter_=t}return o()(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o()(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();e.a=s},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}t.exports=n},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("W8MJ"),s=n.n(a),r=n("a1gu"),u=n.n(r),c=n("Nsbk"),d=n.n(c),l=n("7W2i"),f=n.n(l),v=n("SBAC"),p=n("oLRI"),h={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},_={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},m={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),g=["touchstart","pointerdown","mousedown","keydown"],b=["touchend","pointerup","mouseup","contextmenu"],C=[],A=function(t){function v(t){var e;return o()(this,v),(e=u()(this,d()(v).call(this,Object.assign(v.defaultAdapter,t)))).layoutFrame_=0,e.frame_={width:0,height:0},e.activationState_=e.defaultActivationState_(),e.initialSize_=0,e.maxRadius_=0,e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(){return e.deactivate_()},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e.unboundedCoords_={left:0,top:0},e.fgScale_=0,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.activationAnimationHasEnded_=!1,e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.previousActivationEvent_,e}return f()(v,t),s()(v,null,[{key:"cssClasses",get:function(){return h}},{key:"strings",get:function(){return _}},{key:"numbers",get:function(){return m}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s()(v,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=v.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(a),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(v.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(v.cssClasses.FG_DEACTIVATION));var e=v.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(g.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):b.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;g.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),b.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=v.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&C.length>0&&C.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(C.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){C=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(t){this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,e=v.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,a=v.cssClasses,r=a.FG_DEACTIVATION,o=a.FG_ACTIVATION,s=v.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",c="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),l=d.startPoint,f=d.endPoint;u="".concat(l.x,"px, ").concat(l.y,"px"),c="".concat(f.x,"px, ").concat(f.y,"px")}this.adapter_.updateCssVariable(n,u),this.adapter_.updateCssVariable(i,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,e=v.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,a=n.isActivated;(i||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},m.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=v.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},v.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(){var t=this,e=this.activationState_;if(e.isActivated){var n=Object.assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}}},{key:"deactivate",value:function(){this.deactivate_()}},{key:"animateDeactivation_",value:function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+v.numbers.PADDING,this.initialSize_=Math.floor(e*v.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=v.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var e=v.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(v.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(v.cssClasses.BG_FOCUSED)})}}]),v}(p.a);n.d(e,"a",function(){return E}),n.d(e,"b",function(){return A});var E=function(t){function r(){var t,e;o()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=u()(this,(t=d()(r)).call.apply(t,[this].concat(i)))).disabled=!1,e.unbounded_,e}return f()(r,t),s()(r,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new A(r.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,n=void 0===e?void 0:e,i=new r(t);return void 0!==n&&(i.unbounded=n),i}},{key:"createAdapter",value:function(n){var t=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return n.unbounded},isSurfaceActive:function(){return n.root_[t](":active")},isSurfaceDisabled:function(){return n.disabled},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},containsEventTarget:function(t){return n.root_.contains(t)},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,y.a())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),r}(v.a)}})});