!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.BalmUI=e():t.BalmUI=e()}(window,function(){return function(n){var i={};function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}return a.m=n,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="VhPC")}({"7W2i":function(t,e,n){var i=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}},Aqzh:function(t,e,n){t.exports=function(){"use strict";var o=function(t){return!!(i=t)&&"object"===typeof i&&(e=t,!("[object RegExp]"===(n=Object.prototype.toString.call(e))||"[object Date]"===n||e.$$typeof===a));var e,n,i},a="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function s(t,e){return!1!==e.clone&&e.isMergeableObject(t)?r((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function u(t,e,n){return t.concat(e).map(function(t){return s(t,n)})}function c(e,n,i){var a={};return i.isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=s(e[t],i)}),Object.keys(n).forEach(function(t){i.isMergeableObject(n[t])&&e[t]?a[t]=function(t,e){if(!e.customMerge)return r;var n=e.customMerge(t);return"function"===typeof n?n:r}(t,i)(e[t],n[t],i):a[t]=s(n[t],i)}),a}function r(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||u,n.isMergeableObject=n.isMergeableObject||o;var i=Array.isArray(e),a=Array.isArray(t),r=i===a;return r?i?n.arrayMerge(t,e,n):c(t,e,n):s(e,n)}return r.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,e){return r(t,e,n)},{})},r}()},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,a,r,o,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},MuGO:function(t,e,n){"use strict";var r,i;function a(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=r;if("boolean"===typeof r&&!e)return n;if(t.CSS&&"function"===typeof t.CSS.supports){var i=t.CSS.supports("--css-vars","yes"),a=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return n=!(!i&&!a)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(n);var i=t.getComputedStyle(n),a=null!==i&&"solid"===i.borderTopStyle;return n.remove(),a}(t),e||(r=n),n}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||e){var n=!1;try{t.document.addEventListener("test",null,{get passive(){return n=!0}})}catch(t){}i=n}return!!i&&{passive:!0}}function s(t){for(var e=["matches","webkitMatchesSelector","msMatchesSelector"],n="matches",i=0;i<e.length;i++){var a=e[i];if(a in t){n=a;break}}return n}function u(t,e,n){var i,a,r=e.x,o=e.y,s=r+n.left,u=o+n.top;return a="touchstart"===t.type?(i=(t=t).changedTouches[0].pageX-s,t.changedTouches[0].pageY-u):(i=(t=t).pageX-s,t.pageY-u),{x:i,y:a}}n.d(e,"d",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return u})},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}e.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},QIRk:function(t,e,n){"use strict";n("lwsE"),n("W8MJ"),n("zsl9")},QnW2:function(t,e,n){"use strict";var i=/(?:^\[object\s(.*?)\]$)/;e.a=function(t){return Object.prototype.toString.call(t).replace(i,"$1").toLowerCase()}},SBAC:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("W8MJ"),s=n.n(a),u=n("oLRI"),r=function(){function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o()(this,r),this.root_=t;for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];this.initialize.apply(this,i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return s()(r,null,[{key:"attachTo",value:function(t){return new r(t,new u.a)}}]),s()(r,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(t,e){this.root_.addEventListener(t,e)}},{key:"unlisten",value:function(t,e){this.root_.removeEventListener(t,e)}},{key:"emit",value:function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(t,{detail:e,bubbles:i}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)}}]),r}();e.a=r},SksO:function(n,t){function i(t,e){return n.exports=i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}n.exports=i},VhPC:function(t,e,n){"use strict";n.r(e);var i=n("iri3"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ui-form-field",{attrs:{block:e.block,alignEnd:e.alignEnd}},[e._t("before"),e._v(" "),n("div",{ref:"radio",class:e.className},[n("input",e._b({directives:[{name:"model",rawName:"v-model",value:e.checkedValue,expression:"checkedValue"}],staticClass:"mdc-radio__native-control",attrs:{id:e.id,type:"radio",name:e.name,disabled:e.disabled},domProps:{value:e.value,checked:e._q(e.checkedValue,e.value)},on:{change:[function(t){e.checkedValue=e.value},e.handleChange]}},"input",e.attrs,!1)),e._v(" "),n("div",{staticClass:"mdc-radio__background"},[n("div",{staticClass:"mdc-radio__outer-circle"}),e._v(" "),n("div",{staticClass:"mdc-radio__inner-circle"})])]),e._v(" "),e.noLabel?e._e():n("label",{attrs:{for:e.id}},[e._t("default",[e._v(e._s(e.label))])],2),e._v(" "),e._t("after")],2)};a._withStripped=!0;var r=n("zHPH"),o=n("lwsE"),s=n.n(o),u=n("a1gu"),c=n.n(u),d=n("Nsbk"),l=n.n(d),f=n("iWIM"),p=n.n(f),v=n("W8MJ"),_=n.n(v),h=n("7W2i"),m=n.n(h),y=n("SBAC"),g=(n("QIRk"),n("oLRI")),b={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},A={ROOT:"mdc-radio",DISABLED:"mdc-radio--disabled"},C=function(t){function n(){return s()(this,n),c()(this,l()(n).apply(this,arguments))}return m()(n,t),_()(n,[{key:"setDisabled",value:function(t){var e=n.cssClasses.DISABLED;this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}}],[{key:"cssClasses",get:function(){return A}},{key:"strings",get:function(){return b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}}}]),n}(g.a),k=n("zsl9"),E=function(t){function r(){var t,e;s()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=c()(this,(t=l()(r)).call.apply(t,[this].concat(i)))).ripple_=e.initRipple_(),e}return m()(r,t),_()(r,[{key:"checked",get:function(){return this.nativeControl_.checked},set:function(t){this.nativeControl_.checked=t}},{key:"disabled",get:function(){return this.nativeControl_.disabled},set:function(t){this.foundation_.setDisabled(t)}},{key:"value",get:function(){return this.nativeControl_.value},set:function(t){this.nativeControl_.value=t}},{key:"ripple",get:function(){return this.ripple_}}],[{key:"attachTo",value:function(t){return new r(t)}}]),_()(r,[{key:"initRipple_",value:function(){var n=this,t=Object.assign(k.a.createAdapter(this),{isUnbounded:function(){return!0},isSurfaceActive:function(){return!1},registerInteractionHandler:function(t,e){return n.nativeControl_.addEventListener(t,e)},deregisterInteractionHandler:function(t,e){return n.nativeControl_.removeEventListener(t,e)}}),e=new k.b(t);return new k.a(this.root_,e)}},{key:"destroy",value:function(){this.ripple_.destroy(),p()(l()(r.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){var e=this;return new C({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setNativeControlDisabled:function(t){return e.nativeControl_.disabled=t}})}},{key:"nativeControl_",get:function(){var t=C.strings.NATIVE_CONTROL_SELECTOR;return this.root_.querySelector(t)}}]),r}(y.a),S=n("ttWf"),O=n("y/Mp"),T=n("kX8e"),w={CHANGE:"change"},I={name:"ui-radio",components:{UiFormField:S.a},mixins:[O.a,T.a],model:{prop:"model",event:w.CHANGE},props:{model:[String,Number],disabled:{type:Boolean,default:!1},id:String,name:String,value:[String,Number],cssOnly:{type:Boolean,default:!1},label:String,noLabel:{type:Boolean,default:!1}},data:function(){return{$radio:null,checkedValue:this.model}},computed:{className:function(){return{"mdc-radio":!0,"mdc-radio--disabled":this.disabled}}},watch:{model:function(t){this.checkedValue=t}},mounted:function(){this.cssOnly||(this.$radio=new E(this.$refs.radio),this.$radio.checked=this.checkedValue==this.value,this.noLabel||(new r.a(this.$el).input=this.$radio))},methods:{handleChange:function(){this.$emit(w.CHANGE,this.checkedValue)}}},R=n("KHd+"),D=Object(R.a)(I,a,[],!1,null,null,null);D.options.__file="src/scripts/components/input-controls/radio.vue";var H=D.exports;e.default=Object(i.a)(H)},W8MJ:function(t,e){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},a1gu:function(t,e,n){var i=n("cDf5"),a=n("PJYZ");t.exports=function(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?a(t):e}},cDf5:function(e,t){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(t){return n(t)}:e.exports=i=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(t)}e.exports=i},gVot:function(t,e,n){"use strict";var i=n("Aqzh"),o=n.n(i),s=n("QnW2"),r=function(t){var e=t.componentProps,n=t.propName,i=t.props,a=e[n].default,r=i[n];"object"!==Object(s.a)(a)?e[n].default=r:e[n].default=o()(a,r)},a=function(t){var e=t.componentMixins,n=t.propName,i=t.props;if(e.length)for(var a=e.length;a--;)if(void 0!==e[a].props[n]){r({componentProps:e[a].props,propName:n,props:i});break}};e.a=function(e,n){Object.keys(n).forEach(function(t){e.props?void 0===e.props[t]?a({componentMixins:e.mixins,propName:t,props:n}):r({componentProps:e.props,propName:t,props:n}):a({componentMixins:e.mixins,propName:t,props:n})})}},iWIM:function(i,t,e){e("Nsbk");var r=e("n3AX");function a(t,e,n){return"undefined"!==typeof Reflect&&Reflect.get?i.exports=a=Reflect.get:i.exports=a=function(t,e,n){var i=r(t,e);if(i){var a=Object.getOwnPropertyDescriptor(i,e);return a.get?a.get.call(n):a.value}},a(t,e,n||t)}i.exports=a},iri3:function(t,e,n){"use strict";var i=n("kUbF"),a=n("gVot");e.a=function(n){var t={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a.a)(n,e),t.component(n.name,n)}};return Object(i.a)(t),t}},kUbF:function(t,e,n){"use strict";(function(n){e.a=function(t){var e=null;"undefined"!==typeof window?e=window.Vue:"undefined"!==typeof n&&(e=n.Vue),e&&e.use(t)}}).call(this,n("yLpj"))},kX8e:function(t,e,n){"use strict";e.a={props:{attrs:Object}}},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},n3AX:function(t,e,n){var i=n("Nsbk");t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}},oLRI:function(t,e,n){"use strict";var i=n("lwsE"),a=n.n(i),r=n("W8MJ"),o=n.n(r),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a()(this,e),this.adapter_=t}return o()(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o()(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();e.a=s},ttWf:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className},[this._t("default")],2)};i._withStripped=!0;var a={name:"ui-form-field",mixins:[n("y/Mp").a],computed:{className:function(){return{"mdc-form-field":!this.noWrap,"mdc-form-field--block":this.block,"mdc-form-field--align-end":this.alignEnd}}}},r=n("KHd+"),o=Object(r.a)(a,i,[],!1,null,null,null);o.options.__file="src/scripts/components/input-controls/form-field.vue";e.a=o.exports},"y/Mp":function(t,e,n){"use strict";e.a={props:{noWrap:{type:Boolean,default:!1},block:{type:Boolean,default:!1},alignEnd:{type:Boolean,default:!1}}}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}t.exports=n},zHPH:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("a1gu"),s=n.n(a),r=n("Nsbk"),u=n.n(r),c=n("W8MJ"),d=n.n(c),l=n("7W2i"),f=n.n(l),p=n("SBAC"),v=n("oLRI"),_={ROOT:"mdc-form-field"},h={LABEL_SELECTOR:".mdc-form-field > label"},m=function(t){function n(t){var e;return o()(this,n),(e=s()(this,u()(n).call(this,Object.assign(n.defaultAdapter,t)))).clickHandler_=function(){return e.handleClick_()},e}return f()(n,t),d()(n,null,[{key:"cssClasses",get:function(){return _}},{key:"strings",get:function(){return h}},{key:"defaultAdapter",get:function(){return{registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},activateInputRipple:function(){},deactivateInputRipple:function(){}}}}]),d()(n,[{key:"init",value:function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)}},{key:"handleClick_",value:function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame(function(){return t.adapter_.deactivateInputRipple()})}}]),n}(v.a);n("QIRk");n.d(e,"a",function(){return y});var y=function(t){function r(){var t,e;o()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=s()(this,(t=u()(r)).call.apply(t,[this].concat(i)))).input_,e}return f()(r,t),d()(r,[{key:"input",set:function(t){this.input_=t},get:function(){return this.input_}}],[{key:"attachTo",value:function(t){return new r(t)}}]),d()(r,[{key:"getDefaultFoundation",value:function(){var n=this;return new m({registerInteractionHandler:function(t,e){return n.label_.addEventListener(t,e)},deregisterInteractionHandler:function(t,e){return n.label_.removeEventListener(t,e)},activateInputRipple:function(){n.input_&&n.input_.ripple&&n.input_.ripple.activate()},deactivateInputRipple:function(){n.input_&&n.input_.ripple&&n.input_.ripple.deactivate()}})}},{key:"label_",get:function(){var t=m.strings.LABEL_SELECTOR;return this.root_.querySelector(t)}}]),r}(p.a)},zsl9:function(t,e,n){"use strict";var i=n("lwsE"),o=n.n(i),a=n("W8MJ"),s=n.n(a),r=n("a1gu"),u=n.n(r),c=n("Nsbk"),d=n.n(c),l=n("7W2i"),f=n.n(l),p=n("SBAC"),v=n("oLRI"),_={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},h={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},m={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300},y=n("MuGO"),g=["touchstart","pointerdown","mousedown","keydown"],b=["touchend","pointerup","mouseup","contextmenu"],A=[],C=function(t){function p(t){var e;return o()(this,p),(e=u()(this,d()(p).call(this,Object.assign(p.defaultAdapter,t)))).layoutFrame_=0,e.frame_={width:0,height:0},e.activationState_=e.defaultActivationState_(),e.initialSize_=0,e.maxRadius_=0,e.activateHandler_=function(t){return e.activate_(t)},e.deactivateHandler_=function(){return e.deactivate_()},e.focusHandler_=function(){return e.handleFocus()},e.blurHandler_=function(){return e.handleBlur()},e.resizeHandler_=function(){return e.layout()},e.unboundedCoords_={left:0,top:0},e.fgScale_=0,e.activationTimer_=0,e.fgDeactivationRemovalTimer_=0,e.activationAnimationHasEnded_=!1,e.activationTimerCallback_=function(){e.activationAnimationHasEnded_=!0,e.runDeactivationUXLogicIfReady_()},e.previousActivationEvent_,e}return f()(p,t),s()(p,null,[{key:"cssClasses",get:function(){return _}},{key:"strings",get:function(){return h}},{key:"numbers",get:function(){return m}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s()(p,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}},{key:"init",value:function(){var t=this,e=this.supportsPressRipple_();if(this.registerRootHandlers_(e),e){var n=p.cssClasses,i=n.ROOT,a=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&(t.adapter_.addClass(a),t.layoutInternal_())})}}},{key:"destroy",value:function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(p.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(p.cssClasses.FG_DEACTIVATION));var e=p.cssClasses,n=e.ROOT,i=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(i),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(t){var e=this;t&&(g.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):b.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;g.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),b.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=p.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&A.length>0&&A.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(A.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){A=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(t){this.activate_(t)}},{key:"animateActivation_",value:function(){var t=this,e=p.strings,n=e.VAR_FG_TRANSLATE_START,i=e.VAR_FG_TRANSLATE_END,a=p.cssClasses,r=a.FG_DEACTIVATION,o=a.FG_ACTIVATION,s=p.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var u="",c="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),l=d.startPoint,f=d.endPoint;u="".concat(l.x,"px, ").concat(l.y,"px"),c="".concat(f.x,"px, ").concat(f.y,"px")}this.adapter_.updateCssVariable(n,u),this.adapter_.updateCssVariable(i,c),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(r),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},s)}},{key:"getFgTranslationCoordinates_",value:function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?Object(y.c)(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var t=this,e=p.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,a=n.isActivated;(i||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(e),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(e)},m.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var t=p.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},p.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(){var t=this,e=this.activationState_;if(e.isActivated){var n=Object.assign({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()}))}}},{key:"deactivate",value:function(){this.deactivate_()}},{key:"animateDeactivation_",value:function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var e=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?e:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+p.numbers.PADDING,this.initialSize_=Math.floor(e*p.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var t=p.strings,e=t.VAR_FG_SIZE,n=t.VAR_LEFT,i=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(e,"".concat(this.initialSize_,"px")),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,"".concat(this.unboundedCoords_.left,"px")),this.adapter_.updateCssVariable(i,"".concat(this.unboundedCoords_.top,"px")))}},{key:"setUnbounded",value:function(t){var e=p.cssClasses.UNBOUNDED;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}},{key:"handleFocus",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(p.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(p.cssClasses.BG_FOCUSED)})}}]),p}(v.a);n.d(e,"a",function(){return k}),n.d(e,"b",function(){return C});var k=function(t){function r(){var t,e;o()(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=u()(this,(t=d()(r)).call.apply(t,[this].concat(i)))).disabled=!1,e.unbounded_,e}return f()(r,t),s()(r,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new C(r.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()}}],[{key:"attachTo",value:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,n=void 0===e?void 0:e,i=new r(t);return void 0!==n&&(i.unbounded=n),i}},{key:"createAdapter",value:function(n){var t=y.b(HTMLElement.prototype);return{browserSupportsCssVars:function(){return y.d(window)},isUnbounded:function(){return n.unbounded},isSurfaceActive:function(){return n.root_[t](":active")},isSurfaceDisabled:function(){return n.disabled},addClass:function(t){return n.root_.classList.add(t)},removeClass:function(t){return n.root_.classList.remove(t)},containsEventTarget:function(t){return n.root_.contains(t)},registerInteractionHandler:function(t,e){return n.root_.addEventListener(t,e,y.a())},deregisterInteractionHandler:function(t,e){return n.root_.removeEventListener(t,e,y.a())},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,y.a())},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,y.a())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(t,e){return n.root_.style.setProperty(t,e)},computeBoundingRect:function(){return n.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),r}(p.a)}})});