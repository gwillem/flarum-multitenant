module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=76)}([function(t,e,r){var o=r(10)(Object,"create");t.exports=o},function(t,e,r){var o=r(50);t.exports=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1}},function(t,e,r){var o=r(56);t.exports=function(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var o=r(8),n=r(29);t.exports=function(t){return"symbol"==typeof t||n(t)&&"[object Symbol]"==o(t)}},function(t,e,r){var o=r(6).Symbol;t.exports=o},function(t,e,r){var o=r(26),n="object"==typeof self&&self&&self.Object===Object&&self,i=o||n||Function("return this")();t.exports=i},function(t,e,r){"use strict";var o=r(72);t.exports=Function.prototype.bind||o},function(t,e,r){var o=r(5),n=r(27),i=r(28),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):i(t)}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var o=r(37),n=r(42);t.exports=function(t,e){var r=n(t,e);return o(r)?r:void 0}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,r){"use strict";var o=Array.prototype.slice,n=r(13),i=Object.keys,a=i?function(t){return i(t)}:r(67),c=Object.keys;a.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return n(t)?c(o.call(t)):c(t)}):Object.keys=a;return Object.keys||a},t.exports=a},function(t,e,r){"use strict";var o=Object.prototype.toString;t.exports=function(t){var e=o.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===o.call(t.callee)),r}},function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},function(t,e,r){"use strict";var o=SyntaxError,n=Function,i=TypeError,a=function(t){try{return n('"use strict"; return ('+t+").constructor;")()}catch(t){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(t){c=null}var s=function(){throw new i},u=c?function(){try{return s}catch(t){try{return c(arguments,"callee").get}catch(t){return s}}}():s,p=r(71)(),f=Object.getPrototypeOf||function(t){return t.__proto__},y={},l="undefined"==typeof Uint8Array?void 0:f(Uint8Array),h={"%AggregateError%":"undefined"==typeof AggregateError?void 0:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayIteratorPrototype%":p?f([][Symbol.iterator]()):void 0,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":y,"%AsyncGenerator%":y,"%AsyncGeneratorFunction%":y,"%AsyncIteratorPrototype%":y,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%BigInt%":"undefined"==typeof BigInt?void 0:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?void 0:FinalizationRegistry,"%Function%":n,"%GeneratorFunction%":y,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":p?f(f([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&p?f((new Map)[Symbol.iterator]()):void 0,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&p?f((new Set)[Symbol.iterator]()):void 0,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":p?f(""[Symbol.iterator]()):void 0,"%Symbol%":p?Symbol:void 0,"%SyntaxError%":o,"%ThrowTypeError%":u,"%TypedArray%":l,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?void 0:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet},d={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=r(7),g=r(73),b=v.call(Function.call,Array.prototype.concat),m=v.call(Function.apply,Array.prototype.splice),_=v.call(Function.call,String.prototype.replace),w=v.call(Function.call,String.prototype.slice),O=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,x=/\\(\\)?/g,A=function(t){var e=w(t,0,1),r=w(t,-1);if("%"===e&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return _(t,O,(function(t,e,r,o){n[n.length]=r?_(o,x,"$1"):e||t})),n},j=function(t,e){var r,n=t;if(g(d,n)&&(n="%"+(r=d[n])[0]+"%"),g(h,n)){var c=h[n];if(c===y&&(c=function t(e){var r;if("%AsyncFunction%"===e)r=a("async function () {}");else if("%GeneratorFunction%"===e)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=a("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=f(n.prototype))}return h[e]=r,r}(n)),void 0===c&&!e)throw new i("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:c}}throw new o("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new i('"allowMissing" argument must be a boolean');var r=A(t),n=r.length>0?r[0]:"",a=j("%"+n+"%",e),s=a.name,u=a.value,p=!1,f=a.alias;f&&(n=f[0],m(r,b([0,1],f)));for(var y=1,l=!0;y<r.length;y+=1){var d=r[y],v=w(d,0,1),_=w(d,-1);if(('"'===v||"'"===v||"`"===v||'"'===_||"'"===_||"`"===_)&&v!==_)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&l||(p=!0),g(h,s="%"+(n+="."+d)+"%"))u=h[s];else if(null!=u){if(!(d in u)){if(!e)throw new i("base intrinsic for "+t+" exists, but the property is not available.");return}if(c&&y+1>=r.length){var O=c(u,d);u=(l=!!O)&&"get"in O&&!("originalValue"in O.get)?O.get:u[d]}else l=g(u,d),u=u[d];l&&!p&&(h[s]=u)}}return u}},function(t,e,r){var o=r(23);t.exports=function(t,e,r){var n=null==t?void 0:o(t,e);return void 0===n?r:n}},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e){t.exports=flarum.core.compat["forum/components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e,r){var o=r(24),n=r(63);t.exports=function(t,e){for(var r=0,i=(e=o(e,t)).length;null!=t&&r<i;)t=t[n(e[r++])];return r&&r==i?t:void 0}},function(t,e,r){var o=r(3),n=r(25),i=r(30),a=r(60);t.exports=function(t,e){return o(t)?t:n(t,e)?[t]:i(a(t))}},function(t,e,r){var o=r(3),n=r(4),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(o(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!n(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(9))},function(t,e,r){var o=r(5),n=Object.prototype,i=n.hasOwnProperty,a=n.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),r=t[c];try{t[c]=void 0;var o=!0}catch(t){}var n=a.call(t);return o&&(e?t[c]=r:delete t[c]),n}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var o=r(31),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=o((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(n,(function(t,r,o,n){e.push(o?n.replace(i,"$1"):r||t)})),e}));t.exports=a},function(t,e,r){var o=r(32);t.exports=function(t){var e=o(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var o=r(33);function n(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var o=arguments,n=e?e.apply(this,o):o[0],i=r.cache;if(i.has(n))return i.get(n);var a=t.apply(this,o);return r.cache=i.set(n,a)||i,a};return r.cache=new(n.Cache||o),r}n.Cache=o,t.exports=n},function(t,e,r){var o=r(34),n=r(55),i=r(57),a=r(58),c=r(59);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=n,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e,r){var o=r(35),n=r(47),i=r(54);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(i||n),string:new o}}},function(t,e,r){var o=r(36),n=r(43),i=r(44),a=r(45),c=r(46);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=n,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e,r){var o=r(0);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},function(t,e,r){var o=r(38),n=r(39),i=r(11),a=r(41),c=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,p=s.toString,f=u.hasOwnProperty,y=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||n(t))&&(o(t)?y:c).test(a(t))}},function(t,e,r){var o=r(8),n=r(11);t.exports=function(t){if(!n(t))return!1;var e=o(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,r){var o,n=r(40),i=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var o=r(6)["__core-js_shared__"];t.exports=o},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var o=r(0),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return n.call(e,t)?e[t]:void 0}},function(t,e,r){var o=r(0),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return o?void 0!==e[t]:n.call(e,t)}},function(t,e,r){var o=r(0);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var o=r(48),n=r(49),i=r(51),a=r(52),c=r(53);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}s.prototype.clear=o,s.prototype.delete=n,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var o=r(1),n=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=o(e,t);return!(r<0)&&(r==e.length-1?e.pop():n.call(e,r,1),--this.size,!0)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var o=r(1);t.exports=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var o=r(1);t.exports=function(t){return o(this.__data__,t)>-1}},function(t,e,r){var o=r(1);t.exports=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}},function(t,e,r){var o=r(10)(r(6),"Map");t.exports=o},function(t,e,r){var o=r(2);t.exports=function(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var o=r(2);t.exports=function(t){return o(this,t).get(t)}},function(t,e,r){var o=r(2);t.exports=function(t){return o(this,t).has(t)}},function(t,e,r){var o=r(2);t.exports=function(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}},function(t,e,r){var o=r(61);t.exports=function(t){return null==t?"":o(t)}},function(t,e,r){var o=r(5),n=r(62),i=r(3),a=r(4),c=o?o.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return n(e,t)+"";if(a(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,o=null==t?0:t.length,n=Array(o);++r<o;)n[r]=e(t[r],r,t);return n}},function(t,e,r){var o=r(4);t.exports=function(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,r){"use strict";r(65)()},function(t,e,r){"use strict";var o=r(66),n=r(68);t.exports=function(){var t=n();return o(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}},function(t,e,r){"use strict";var o=r(12),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,c=Object.defineProperty,s=c&&function(){var t={};try{for(var e in c(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),u=function(t,e,r,o){var n;(!(e in t)||"function"==typeof(n=o)&&"[object Function]"===i.call(n)&&o())&&(s?c(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},p=function(t,e){var r=arguments.length>2?arguments[2]:{},i=o(e);n&&(i=a.call(i,Object.getOwnPropertySymbols(e)));for(var c=0;c<i.length;c+=1)u(t,i[c],e[i[c]],r[i[c]])};p.supportsDescriptors=!!s,t.exports=p},function(t,e,r){"use strict";var o;if(!Object.keys){var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=r(13),c=Object.prototype.propertyIsEnumerable,s=!c.call({toString:null},"toString"),u=c.call((function(){}),"prototype"),p=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(t){var e=t.constructor;return e&&e.prototype===t},y={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},l=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!y["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{f(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();o=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===i.call(t),o=a(t),c=e&&"[object String]"===i.call(t),y=[];if(!e&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var h=u&&r;if(c&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)y.push(String(d));if(o&&t.length>0)for(var v=0;v<t.length;++v)y.push(String(v));else for(var g in t)h&&"prototype"===g||!n.call(t,g)||y.push(String(g));if(s)for(var b=function(t){if("undefined"==typeof window||!l)return f(t);try{return f(t)}catch(t){return!1}}(t),m=0;m<p.length;++m)b&&"constructor"===p[m]||!n.call(t,p[m])||y.push(p[m]);return y}}t.exports=o},function(t,e,r){"use strict";var o=r(69);t.exports=function(){return Object.assign?function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),r={},o=0;o<e.length;++o)r[e[o]]=e[o];var n=Object.assign({},r),i="";for(var a in n)i+=a;return t!==i}()||function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1}()?o:Object.assign:o}},function(t,e,r){"use strict";var o=r(12),n=function(t){return null!=t},i=r(14)(),a=r(70),c=Object,s=a("Array.prototype.push"),u=a("Object.prototype.propertyIsEnumerable"),p=i?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!n(t))throw new TypeError("target must be an object");var r,a,f,y,l,h,d,v=c(t);for(r=1;r<arguments.length;++r){a=c(arguments[r]),y=o(a);var g=i&&(Object.getOwnPropertySymbols||p);if(g)for(l=g(a),f=0;f<l.length;++f)d=l[f],u(a,d)&&s(y,d);for(f=0;f<y.length;++f)h=a[d=y[f]],u(a,d)&&(v[d]=h)}return v}},function(t,e,r){"use strict";var o=r(15),n=r(74),i=n(o("String.prototype.indexOf"));t.exports=function(t,e){var r=o(t,!!e);return"function"==typeof r&&i(t,".prototype.")>-1?n(r):r}},function(t,e,r){"use strict";(function(e){var o=e.Symbol,n=r(14);t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"==typeof o("foo")&&("symbol"==typeof Symbol("bar")&&n())))}}).call(this,r(9))},function(t,e,r){"use strict";var o="Function.prototype.bind called on incompatible ",n=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==i.call(e))throw new TypeError(o+e);for(var r,a=n.call(arguments,1),c=function(){if(this instanceof r){var o=e.apply(this,a.concat(n.call(arguments)));return Object(o)===o?o:this}return e.apply(t,a.concat(n.call(arguments)))},s=Math.max(0,e.length-a.length),u=[],p=0;p<s;p++)u.push("$"+p);if(r=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(c),e.prototype){var f=function(){};f.prototype=e.prototype,r.prototype=new f,f.prototype=null}return r}},function(t,e,r){"use strict";var o=r(7);t.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},function(t,e,r){"use strict";var o=r(7),n=r(15),i=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),c=n("%Reflect.apply%",!0)||o.call(a,i),s=n("%Object.getOwnPropertyDescriptor%",!0),u=n("%Object.defineProperty%",!0),p=n("%Math.max%");if(u)try{u({},"a",{value:1})}catch(t){u=null}t.exports=function(t){var e=c(o,a,arguments);if(s&&u){var r=s(e,"length");r.configurable&&u(e,"length",{value:1+p(0,t.length-(arguments.length-1))})}return e};var f=function(){return c(o,i,arguments)};u?u(t.exports,"apply",{value:f}):t.exports.apply=f},function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(n(window,"resize",this._checkForIntersections,!0),n(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var n=o.element,i=a(n),c=this._rootContainsTarget(n),s=o.entry,u=t&&c&&this._computeTargetAndRootIntersection(n,e),p=o.entry=new r({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:i,rootBounds:e,intersectionRect:u});s?t&&c?this._hasCrossedThreshold(s,p)&&this._queuedEntries.push(p):s&&s.isIntersecting&&this._queuedEntries.push(p):this._queuedEntries.push(p)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,r){if("none"!=window.getComputedStyle(e).display){for(var o,n,i,c,u,p,f,y,l=a(e),h=s(e),d=!1;!d;){var v=null,g=1==h.nodeType?window.getComputedStyle(h):{};if("none"==g.display)return;if(h==this.root||h==t?(d=!0,v=r):h!=t.body&&h!=t.documentElement&&"visible"!=g.overflow&&(v=a(h)),v&&(o=v,n=l,i=void 0,c=void 0,u=void 0,p=void 0,f=void 0,y=void 0,i=Math.max(o.top,n.top),c=Math.min(o.bottom,n.bottom),u=Math.max(o.left,n.left),p=Math.min(o.right,n.right),y=c-i,!(l=(f=p-u)>=0&&y>=0&&{top:i,bottom:c,left:u,right:p,width:f,height:y})))break;h=s(h)}return l}},o.prototype._getRootRect=function(){var e;if(this.root)e=a(this.root);else{var r=t.documentElement,o=t.body;e={top:0,left:0,right:r.clientWidth||o.clientWidth,width:r.clientWidth||o.clientWidth,bottom:r.clientHeight||o.clientHeight,height:r.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100})),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},o.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==o)for(var n=0;n<this.thresholds.length;n++){var i=this.thresholds[n];if(i==r||i==o||i<r!=i<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||c(t,this.root)},o.prototype._rootContainsTarget=function(e){return c(this.root||t,e)},o.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},o.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=o,window.IntersectionObserverEntry=r}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,o=this.intersectionRect,n=o.width*o.height;this.intersectionRatio=r?Number((n/r).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var r,o,n,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,n=null,function(){n||(n=setTimeout((function(){r(),n=null}),o))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function n(t,e,r,o){"function"==typeof t.addEventListener?t.addEventListener(e,r,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function i(t,e,r,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var r=e;r;){if(r==t)return!0;r=s(r)}return!1}function s(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},function(t,e,r){"use strict";r.r(e);var o=r(16),n=r.n(o),i=r(17),a=r(18),c=r.n(a),s=r(19),u=r.n(s),p=r(20),f=r.n(p);function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}var l=r(21),h=r.n(l),d=r(22),v=r.n(d),g=(r(64),r(75),new Set),b=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var n=o.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e)},n.view=function(){var t=y({},this.attrs.elementAttrs),e=g.has(this.attrs.src);return t.style||(t.style={}),t.style.position="relative",e||(t.style.opacity="0",t.oncreate=this.configImage.bind(this),t.onload=this.onLoad.bind(this)),t[e?"src":"data-src"]=this.attrs.src,m("div",{className:t.className},!e&&m(v.a,null),m("img",t))},n.configImage=function(t){new IntersectionObserver((function(t,e){t.forEach((function(t){if(t.isIntersecting){var r=t.target;r.src=r.dataset.src,e.unobserve(r)}}))})).observe(t.dom)},n.onLoad=function(t){var e=t.target;g.add(this.attrs.src),e.style.opacity=1,this.$(".LoadingIndicator").remove()},o}(h.a),_=function(t,e){return t&&t.children&&t.children.filter((function(t){return-1!==n()(t,"attrs.className","").indexOf(e)}))[0]};app.initializers.add("fof/discussion-thumbnail",(function(){u.a.prototype.customThumbnail=c.a.attribute("customThumbnail"),Object(i.extend)(f.a.prototype,"view",(function(t){var e=this.attrs.discussion.customThumbnail();if(e){var r=_(t,"DiscussionListItem-content"),o=_(r,"DiscussionListItem-author"),n=_(o,"Avatar");n&&(delete n.attrs.src,o.children[o.children.indexOf(n)]=m(b,{elementAttrs:n.attrs,src:e}))}}))}))}]);
//# sourceMappingURL=forum.js.map