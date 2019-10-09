!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI_icon=t():e.BalmUI_icon=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="UJpk")}({PE4B:function(e,t,n){"use strict";var r=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function i(e,t){return!1!==t.clone&&t.isMergeableObject(e)?s((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function c(e,t,n){return e.concat(t).map((function(e){return i(e,n)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function u(e,t,n){var r={};return n.isMergeableObject(e)&&a(e).forEach((function(t){r[t]=i(e[t],n)})),a(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=function(e,t){if(!t.customMerge)return s;var n=t.customMerge(e);return"function"===typeof n?n:s}(o,n)(e[o],t[o],n):r[o]=i(t[o],n)})),r}function s(e,t,n){n=Object.assign({arrayMerge:c,isMergeableObject:r},n,{cloneUnlessOtherwiseSpecified:i});var o=Array.isArray(t);return o===Array.isArray(e)?o?n.arrayMerge(e,t,n):u(e,t,n):i(t,n)}s.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return s(e,n,t)}),{})};var f=s;e.exports=f},UJpk:function(e,t,n){"use strict";n.r(t);var r=n("kUbF"),o=n("PE4B"),i=n.n(o),c=/(?:^\[object\s(.*?)\]$)/,a=function(e){return Object.prototype.toString.call(e).replace(c,"$1").toLowerCase()},u=function(e){var t=e.componentProps,n=e.propName,r=e.props,o=t[n].default,c=r[n];"object"!==a(o)?t[n].default=c:t[n].default=i()(o,c)},s=function(e){var t=e.componentMixins,n=e.propName,r=e.props;if(t.length)for(var o=t.length;o--;)if(void 0!==t[o].props[n]){u({componentProps:t[o].props,propName:n,props:r});break}},f=function(e,t){Object.keys(t).forEach((function(n){e.props?void 0===e.props[n]?s({componentMixins:e.mixins,propName:n,props:t}):u({componentProps:e.props,propName:n,props:t}):s({componentMixins:e.mixins,propName:n,props:t})}))},p=function(e){var t={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(e,n),t.component(e.name,e)}};return Object(r.a)(t),t},l=24,d={CLICK:"click"};var y=function(e,t,n,r,o,i,c,a){var u,s="function"===typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),c?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},s._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var f=s.render;s.render=function(e,t){return u.call(t),f(e,t)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:s}}({name:"ui-icon",props:{size:{type:[Number,String],default:l},dark:{type:Boolean,default:!1},light:{type:Boolean,default:!1},inactive:{type:Boolean,default:!1}},computed:{className:function(){var e={"material-icons":!0,"md-dark":this.dark&&!this.light,"md-light":this.light&&!this.dark,"md-inactive":this.inactive};return+this.size!==l&&this.size>0&&(e["md-".concat(this.size)]=!0),e}},methods:{handleClick:function(e){this.$emit(d.CLICK,e)}}},(function(){var e=this.$createElement;return(this._self._c||e)("i",{class:this.className,attrs:{"aria-hidden":"true"},on:{click:this.handleClick}},[this._t("default")],2)}),[],!1,null,null,null).exports;t.default=p(y)},kUbF:function(e,t,n){"use strict";(function(e){t.a=function(t){var n=null;"undefined"!==typeof window?n=window.Vue:"undefined"!==typeof e&&(n=e.Vue),n&&n.use(t)}}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}})}));