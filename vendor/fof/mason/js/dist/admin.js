module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,n){"use strict";e.a=function(t,e){return void 0===e&&(e="sort"),t.sort((function(t,n){return t[e]()-n[e]()}))}},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(2),a=n(1),r=n.n(a),i=n(9),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/mason/answers"+(this.exists?"/"+this.data.id:"")},e}(n.n(i)()(r.a,{content:r.a.attribute("content"),is_suggested:r.a.attribute("is_suggested"),sort:r.a.attribute("sort"),field:r.a.hasOne("field")}))},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n(2),a=n(1),r=n.n(a),i=n(9),s=n.n(i),l=n(12),d=n.n(l),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/mason/fields"+(this.exists?"/"+this.data.id:"")},e}(s()(r.a,{name:r.a.attribute("name"),description:r.a.attribute("description"),min_answers_count:r.a.attribute("min_answers_count"),max_answers_count:r.a.attribute("max_answers_count"),show_when_empty:r.a.attribute("show_when_empty"),user_values_allowed:r.a.attribute("user_values_allowed"),validation:r.a.attribute("validation"),icon:r.a.attribute("icon"),sort:r.a.attribute("sort"),deleted_at:r.a.attribute("deleted_at",r.a.transformDate),all_answers:r.a.hasMany("all_answers"),suggested_answers:r.a.hasMany("suggested_answers"),required:d()("min_answers_count",(function(t){return t>0})),multiple:d()("max_answers_count",(function(t){return t>1}))}))},,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(11),i=n(14),s=n(4),l=n(23),d=n.n(l),f=n(24),u=n.n(f),c=n(2);function p(t,e,n){if(void 0===n)return t&&t.h5s&&t.h5s.data&&t.h5s.data[e];t.h5s=t.h5s||{},t.h5s.data=t.h5s.data||{},t.h5s.data[e]=n}var h=function(t,e){if(!(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof e?Array.from(t):Array.from(t).filter((function(t){return 1===t.nodeType&&t.matches(e)}))},g=new Map,v=function(){function t(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(t.prototype,"config",{get:function(){var t={};return this._config.forEach((function(e,n){t[n]=e})),t},set:function(t){if("object"!=typeof t)throw new Error("You must provide a valid configuration object to the config setter.");var e=Object.assign({},t);this._config=new Map(Object.entries(e))},enumerable:!0,configurable:!0}),t.prototype.setConfig=function(t,e){if(!this._config.has(t))throw new Error("Trying to set invalid configuration item: "+t);this._config.set(t,e)},t.prototype.getConfig=function(t){if(!this._config.has(t))throw new Error("Invalid configuration item requested: "+t);return this._config.get(t)},Object.defineProperty(t.prototype,"placeholder",{get:function(){return this._placeholder},set:function(t){if(!(t instanceof HTMLElement)&&null!==t)throw new Error("A placeholder must be an html element or null.");this._placeholder=t},enumerable:!0,configurable:!0}),t.prototype.setData=function(t,e){if("string"!=typeof t)throw new Error("The key must be a string.");this._data.set(t,e)},t.prototype.getData=function(t){if("string"!=typeof t)throw new Error("The key must be a string.");return this._data.get(t)},t.prototype.deleteData=function(t){if("string"!=typeof t)throw new Error("The key must be a string.");return this._data.delete(t)},t}(),w=function(t){if(!(t instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return g.has(t)||g.set(t,new v),g.get(t)};function b(t,e,n){if(t instanceof Array)for(var o=0;o<t.length;++o)b(t[o],e,n);else t.addEventListener(e,n),w(t).setData("event"+e,n)}function y(t,e){if(t instanceof Array)for(var n=0;n<t.length;++n)y(t[n],e);else t.removeEventListener(e,w(t).getData("event"+e)),w(t).deleteData("event"+e)}function _(t,e,n){if(t instanceof Array)for(var o=0;o<t.length;++o)_(t[o],e,n);else t.setAttribute(e,n)}function E(t,e){if(t instanceof Array)for(var n=0;n<t.length;++n)E(t[n],e);else t.removeAttribute(e)}var x=function(t){if(!t.parentElement||0===t.getClientRects().length)throw new Error("target element must be part of the dom");var e=t.getClientRects()[0];return{left:e.left+window.pageXOffset,right:e.right+window.pageXOffset,top:e.top+window.pageYOffset,bottom:e.bottom+window.pageYOffset}},T=function(t,e){if(!(t instanceof HTMLElement&&(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(e).indexOf(t)},A=function(t){if(!(t instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==t.parentNode},S=function(t,e,n){if(!(t instanceof HTMLElement&&t.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");t.parentElement.insertBefore(e,"before"===n?t:t.nextElementSibling)},F=function(t,e){return S(t,e,"after")},M=function(t){if(!(t instanceof HTMLElement))throw new Error("You must provide a valid dom element");var e=window.getComputedStyle(t);return["height","padding-top","padding-bottom"].map((function(t){var n=parseInt(e.getPropertyValue(t),10);return isNaN(n)?0:n})).reduce((function(t,e){return t+e}))},C=function(t){if(!(t instanceof HTMLElement))throw new Error("You must provide a valid dom element");var e=window.getComputedStyle(t);return["width","padding-left","padding-right"].map((function(t){var n=parseInt(e.getPropertyValue(t),10);return isNaN(n)?0:n})).reduce((function(t,e){return t+e}))},L=function(t,e){if(!(t instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof e?t:t.filter((function(t){return t.querySelector(e)instanceof HTMLElement||t.shadowRoot&&t.shadowRoot.querySelector(e)instanceof HTMLElement})).map((function(t){return t.querySelector(e)||t.shadowRoot&&t.shadowRoot.querySelector(e)}))},O=function(t){return t.composedPath&&t.composedPath()[0]||t.target},j=function(t,e,n){return{element:t,posX:n.pageX-e.left,posY:n.pageY-e.top}},H=function(t,e){if(!0===t.isSortable){var n=w(t).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(t){return t.length>0&&e.matches(t)})).length>0;if(t===e)return!0;if(void 0!==w(t).getConfig("connectWith")&&null!==w(t).getConfig("connectWith"))return w(t).getConfig("connectWith")===w(e).getConfig("connectWith")}return!1},B={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"};var I,P,D,k,N,Y,q,U,z,W=function(t,e){if("string"==typeof w(t).getConfig("hoverClass")){var n=w(t).getConfig("hoverClass").split(" ");!0===e?(b(t,"mousemove",function(t,e){var n=this;if(void 0===e&&(e=250),"function"!=typeof t)throw new Error("You must provide a function as the first argument for throttle.");if("number"!=typeof e)throw new Error("You must provide a number as the second argument for throttle.");var o=null;return function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];var i=Date.now();(null===o||i-o>=e)&&(o=i,t.apply(n,a))}}((function(e){0===e.buttons&&h(t.children,w(t).getConfig("items")).forEach((function(t){var o,a;t!==e.target?(o=t.classList).remove.apply(o,n):(a=t.classList).add.apply(a,n)}))}),w(t).getConfig("throttleTime"))),b(t,"mouseleave",(function(){h(t.children,w(t).getConfig("items")).forEach((function(t){var e;(e=t.classList).remove.apply(e,n)}))}))):(y(t,"mousemove"),y(t,"mouseleave"))}},R=function(t){y(t,"dragstart"),y(t,"dragend"),y(t,"dragover"),y(t,"dragenter"),y(t,"drop"),y(t,"mouseenter"),y(t,"mouseleave")},X=function(t){var e;(e=t).h5s&&delete e.h5s.data,E(t,"aria-dropeffect")},G=function(t){E(t,"aria-grabbed"),E(t,"aria-copied"),E(t,"draggable"),E(t,"role")};function V(t,e){if(e.composedPath)return e.composedPath().find((function(t){return t.isSortable}));for(;!0!==t.isSortable;)t=t.parentElement;return t}function J(t,e){var n=p(t,"opts"),o=h(t.children,n.items).filter((function(t){return t.contains(e)||t.shadowRoot&&t.shadowRoot.contains(e)}));return o.length>0?o[0]:e}var K=function(t){var e=p(t,"opts"),n=h(t.children,e.items),o=L(n,e.handle);(_(t,"aria-dropeffect","move"),p(t,"_disabled","false"),_(o,"draggable","true"),!1===e.disableIEFix)&&("function"==typeof(document||window.document).createElement("span").dragDrop&&b(o,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var t=this.parentElement;-1===n.indexOf(t);)t=t.parentElement;t.dragDrop()}})))};function Q(t,e){var n=String(e);return e=e||{},"string"==typeof t&&(t=document.querySelectorAll(t)),t instanceof HTMLElement&&(t=[t]),t=Array.prototype.slice.call(t),/serialize/.test(n)?t.map((function(t){var e=p(t,"opts");return function(t,e,n){if(void 0===e&&(e=function(t,e){return t}),void 0===n&&(n=function(t){return t}),!(t instanceof HTMLElement)||!0==!t.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof e||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var o=p(t,"opts").items,a=h(t.children,o),r=a.map((function(e){return{parent:t,node:e,html:e.outerHTML,index:T(e,a)}}));return{container:n({node:t,itemCount:r.length}),items:r.map((function(n){return e(n,t)}))}}(t,e.itemSerializer,e.containerSerializer)})):(t.forEach((function(t){if(/enable|disable|destroy/.test(n))return Q[n](t);["connectWith","disableIEFix"].forEach((function(t){Object.prototype.hasOwnProperty.call(e,t)&&null!==e[t]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+t+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),e=Object.assign({},B,w(t).config,e),w(t).config=e,p(t,"opts",e),t.isSortable=!0,function(t){var e=p(t,"opts"),n=h(t.children,e.items),o=L(n,e.handle);p(t,"_disabled","false"),R(n),y(o,"mousedown"),y(t,"dragover"),y(t,"dragenter"),y(t,"drop")}(t);var o,a=h(t.children,e.items);if(null!==e.placeholder&&void 0!==e.placeholder){var r=document.createElement(t.tagName);e.placeholder instanceof HTMLElement?r.appendChild(e.placeholder):r.innerHTML=e.placeholder,o=r.children[0]}w(t).placeholder=function(t,e,n){var o;if(void 0===n&&(n="sortable-placeholder"),!(t instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(e instanceof HTMLElement)&&void 0!==e)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===e&&(["UL","OL"].includes(t.tagName)?e=document.createElement("li"):["TABLE","TBODY"].includes(t.tagName)?(e=document.createElement("tr")).innerHTML='<td colspan="100"></td>':e=document.createElement("div")),"string"==typeof n&&(o=e.classList).add.apply(o,n.split(" ")),e}(t,o,e.placeholderClass),p(t,"items",e.items),e.acceptFrom?p(t,"acceptFrom",e.acceptFrom):e.connectWith&&p(t,"connectWith",e.connectWith),K(t),_(a,"role","option"),_(a,"aria-grabbed","false"),W(t,!0),b(t,"dragstart",(function(t){var n=O(t);if(!0!==n.isSortable&&(t.stopImmediatePropagation(),(!e.handle||n.matches(e.handle))&&"false"!==n.getAttribute("draggable"))){var o=V(n,t),a=J(o,n);q=h(o.children,e.items),N=q.indexOf(a),Y=T(a,o.children),k=o,function(t,e,n){if(!(t instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(e instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=j),t.dataTransfer&&t.dataTransfer.setDragImage){var o=n(e,x(e),t);if(!(o.element instanceof HTMLElement)||"number"!=typeof o.posX||"number"!=typeof o.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setData("text/plain",O(t).id),t.dataTransfer.setDragImage(o.element,o.posX,o.posY)}}(t,a,e.customDragImage),P=M(a),D=C(a),a.classList.add(e.draggingClass),I=function(t,e){var n=t;return!0===w(e).getConfig("copy")&&(_(n=t.cloneNode(!0),"aria-copied","true"),t.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=t.style.display),n}(a,o),_(I,"aria-grabbed","true"),o.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:Y,index:N,container:k},item:I,originalTarget:n}}))}})),b(t,"dragenter",(function(e){var n=O(e),o=V(n,e);o&&o!==U&&(z=h(o.children,p(o,"items")).filter((function(e){return e!==w(t).placeholder})),o.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:Y,index:N,container:k},destination:{container:o,itemsBeforeUpdate:z},item:I,originalTarget:n}}))),U=o})),b(t,"dragend",(function(n){if(I){I.classList.remove(e.draggingClass),_(I,"aria-grabbed","false"),"true"===I.getAttribute("aria-copied")&&"true"!==p(I,"dropped")&&I.remove(),I.style.display=I.oldDisplay,delete I.oldDisplay;var o=Array.from(g.values()).map((function(t){return t.placeholder})).filter((function(t){return t instanceof HTMLElement})).filter(A)[0];o&&o.remove(),t.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:Y,index:N,container:k},item:I}})),U=null,I=null,P=null,D=null}})),b(t,"drop",(function(n){if(H(t,I.parentElement)){n.preventDefault(),n.stopPropagation(),p(I,"dropped","true");var o=Array.from(g.values()).map((function(t){return t.placeholder})).filter((function(t){return t instanceof HTMLElement})).filter(A)[0];F(o,I),o.remove(),t.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:Y,index:N,container:k},item:I}}));var a=w(t).placeholder,r=h(k.children,e.items).filter((function(t){return t!==a})),i=!0===this.isSortable?this:this.parentElement,s=h(i.children,p(i,"items")).filter((function(t){return t!==a})),l=T(I,Array.from(I.parentElement.children).filter((function(t){return t!==a}))),d=T(I,s);Y===l&&k===i||t.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:Y,index:N,container:k,itemsBeforeUpdate:q,items:r},destination:{index:d,elementIndex:l,container:i,itemsBeforeUpdate:z,items:s},item:I}}))}}));var i,s,l,d=(i=function(t,n,o,a){if(I)if(e.forcePlaceholderSize&&(w(t).placeholder.style.height=P+"px",w(t).placeholder.style.width=D+"px"),Array.from(t.children).indexOf(n)>-1){var r=M(n),i=C(n),s=T(w(t).placeholder,n.parentElement.children),l=T(n,n.parentElement.children);if(r>P||i>D){var d=r-P,f=i-D,u=x(n).top,c=x(n).left;if(s<l&&("vertical"===e.orientation&&a<u||"horizontal"===e.orientation&&o<c))return;if(s>l&&("vertical"===e.orientation&&a>u+r-d||"horizontal"===e.orientation&&o>c+i-f))return}void 0===I.oldDisplay&&(I.oldDisplay=I.style.display),"none"!==I.style.display&&(I.style.display="none");var m=!1;try{var p=x(n).top+n.offsetHeight/2,v=x(n).left+n.offsetWidth/2;m="vertical"===e.orientation&&a>=p||"horizontal"===e.orientation&&o>=v}catch(t){m=s<l}m?F(n,w(t).placeholder):function(t,e){S(t,e,"before")}(n,w(t).placeholder),Array.from(g.values()).filter((function(t){return void 0!==t.placeholder})).forEach((function(e){e.placeholder!==w(t).placeholder&&e.placeholder.remove()}))}else{var b=Array.from(g.values()).filter((function(t){return void 0!==t.placeholder})).map((function(t){return t.placeholder}));-1!==b.indexOf(n)||t!==n||h(n.children,e.items).length||(b.forEach((function(t){return t.remove()})),n.appendChild(w(t).placeholder))}},void 0===(s=e.debounce)&&(s=0),function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(l),l=setTimeout((function(){i.apply(void 0,t)}),s)}),f=function(t){var e=t.target,n=!0===e.isSortable?e:V(e,t);if(e=J(n,e),I&&H(n,I.parentElement)&&"true"!==p(n,"_disabled")){var o=p(n,"opts");parseInt(o.maxItems)&&h(n.children,p(n,"items")).length>=parseInt(o.maxItems)&&I.parentElement!==n||(t.preventDefault(),t.stopPropagation(),t.dataTransfer.dropEffect=!0===w(n).getConfig("copy")?"copy":"move",d(n,e,t.pageX,t.pageY))}};b(a.concat(t),"dragover",f),b(a.concat(t),"dragenter",f)})),t)}Q.destroy=function(t){!function(t){var e=p(t,"opts")||{},n=h(t.children,e.items),o=L(n,e.handle);y(t,"dragover"),y(t,"dragenter"),y(t,"dragstart"),y(t,"dragend"),y(t,"drop"),X(t),y(o,"mousedown"),R(n),G(n),t.isSortable=!1}(t)},Q.enable=function(t){K(t)},Q.disable=function(t){!function(t){var e=p(t,"opts"),n=h(t.children,e.items),o=L(n,e.handle);_(t,"aria-dropeffect","none"),p(t,"_disabled","true"),_(o,"draggable","false"),y(o,"mousedown")}(t)},Q.__testing={_data:p,_removeItemEvents:R,_removeItemData:G,_removeSortableData:X};var Z=Q,tt=n(3),et=n.n(tt),nt=n(5),ot=n.n(nt),at=n(13),rt=n.n(at),it=n(6),st=n.n(it),lt=n(8),dt=n.n(lt),ft=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var n=e.prototype;return n.init=function(){this.answer=this.props.answer,this.dirty=!1,this.processing=!1},n.view=function(){var t=this;return m("form.Mason-Box",[this.answer.is_suggested()?[m("span.fas.fa-arrows-alt.Mason-Box--handle.js-answer-handle")," "]:null,m("span",{onclick:function(){var e=prompt(rt()(a.a.translator.trans("fof-mason.admin.buttons.edit-answer-prompt")),t.answer.content());e&&t.updateAttribute("content",e)},title:rt()(a.a.translator.trans("fof-mason.admin.buttons.edit-answer"))},[this.answer.content()," ",ot()("fas fa-pen")]),dt.a.component({state:this.answer.is_suggested(),onchange:function(e){t.updateAttribute("is_suggested",e),t.saveAnswer()},children:a.a.translator.trans("fof-mason.admin.fields.is_suggested")}),m(".ButtonGroup",[st.a.component({type:"submit",className:"Button Button--primary",children:a.a.translator.trans("fof-mason.admin.buttons.save-answer"),loading:this.processing,disabled:!this.readyToSave(),onclick:this.saveAnswer.bind(this)}),st.a.component({type:"submit",className:"Button Button--danger",children:a.a.translator.trans("fof-mason.admin.buttons.delete-answer"),loading:this.processing,onclick:this.deleteAnswer.bind(this)})])])},n.updateAttribute=function(t,e){var n;this.answer.pushAttributes(((n={})[t]=e,n)),this.dirty=!0},n.readyToSave=function(){return this.dirty},n.saveAnswer=function(){var t=this;this.processing=!0,this.answer.save(this.answer.data.attributes).then((function(){t.processing=!1,t.dirty=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e}))},n.deleteAnswer=function(){var t=this;confirm(rt()(a.a.translator.trans("fof-mason.admin.messages.delete-answer-confirmation",{content:this.answer.content()})))&&(this.processing=!0,this.answer.delete().then((function(){t.processing=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e})))},e}(et.a),ut=n(7),ct=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var n=e.prototype;return n.init=function(){this.field=this.props.field,this.processing=!1,this.new_content="",this.showUserAnswers=!1},n.config=function(){var t=this;Z(this.element.querySelector(".js-answers-container"),{handle:".js-answer-handle"})[0].addEventListener("sortupdate",(function(){var e=t.$(".js-answer-data").map((function(){return $(this).data("id")})).get();t.updateSort(e)}))},n.view=function(){var t=this;if(!this.field.exists)return m("div",a.a.translator.trans("fof-mason.admin.fields.save-field-for-answers"));var e=[],n=[];return this.field.all_answers().forEach((function(t){void 0!==t&&(t.is_suggested()?e.push(t):n.push(t))})),m("div",[m(".Mason-Container.js-answers-container",Object(ut.a)(e).map((function(t){return m(".js-answer-data",{key:t.id(),"data-id":t.id()},ft.component({answer:t}))}))),n.length?[m(".Button.Button--block.Mason-Box-Header",{onclick:function(){t.showUserAnswers=!t.showUserAnswers}},[m(".Mason-Box-Header-Title",a.a.translator.trans("fof-mason.admin.buttons.show-user-answers",{count:n.length})),m("div",[ot()("fas fa-chevron-"+(this.showUserAnswers?"up":"down"))])]),this.showUserAnswers?m(".Mason-Container",Object(ut.a)(n,"content").map((function(t){return m("div",{key:t.id()},ft.component({answer:t}))}))):null]:null,m("form",[m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.fields.new-answer")),m("input.FormControl",{value:this.new_content,oninput:m.withAttr("value",(function(e){t.new_content=e})),placeholder:a.a.translator.trans("fof-mason.admin.fields.new-answer-placeholder")})]),m(".Form-group",[st.a.component({type:"submit",className:"Button Button--primary",children:a.a.translator.trans("fof-mason.admin.buttons.add-answer"),loading:this.processing,disabled:!this.new_content,onclick:this.saveField.bind(this)})])])])},n.saveField=function(){var t=this;this.processing=!0,a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+this.field.apiEndpoint()+"/answers",data:{data:{attributes:{content:this.new_content,is_suggested:!0}}}}).then((function(e){a.a.store.pushPayload(e),t.new_content="",t.processing=!1,m.redraw()}))},n.updateSort=function(t){a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+this.field.apiEndpoint()+"/answers/order",data:{sort:t}}).then((function(t){a.a.store.pushPayload(t),m.redraw()}))},e}(et.a),mt=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var n=e.prototype;return n.init=function(){this.field=this.props.field,this.dirty=!1,this.processing=!1,this.toggleFields=!1,null===this.field&&this.initNewField()},n.initNewField=function(){this.field=a.a.store.createRecord("mason-fields",{attributes:{name:"",description:"",min_answers_count:0,max_answers_count:1,user_values_allowed:!1,show_when_empty:!1,validation:"",icon:""}})},n.boxTitle=function(){return this.field.exists?this.field.name():a.a.translator.trans("fof-mason.admin.buttons.new-field")},n.view=function(){var t=this;return m(".Mason-Box",[this.field.exists?m("span.fas.fa-arrows-alt.Mason-Box--handle.js-field-handle"):null,m(".Button.Button--block.Mason-Box-Header",{onclick:function(){t.toggleFields=!t.toggleFields}},[m(".Mason-Box-Header-Title",this.boxTitle()),m("div",[this.field.exists?[a.a.translator.trans("fof-mason.admin.buttons.edit-field")," "]:null,ot()("fas fa-chevron-"+(this.toggleFields?"up":"down"))])]),this.toggleFields?this.viewFields():null])},n.viewFields=function(){var t=this;return m("form",[m(".Mason-Box--row",[m(".Mason-Box--column",[m("h4",a.a.translator.trans("fof-mason.admin.titles.field-settings")),m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.fields.name")),m("input.FormControl",{value:this.field.name(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"name"))}),m(".helpText",a.a.translator.trans("fof-mason.admin.fields.name-help"))]),m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.fields.description")),m("input.FormControl",{value:this.field.description(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"description"))}),m(".helpText",a.a.translator.trans("fof-mason.admin.fields.description-help"))]),m(".Form-group",[m("label",[dt.a.component({state:1===this.field.min_answers_count(),onchange:function(e){t.updateAttribute("min_answers_count",e?1:0)},children:a.a.translator.trans("fof-mason.admin.fields.required")})])]),m(".Form-group",[m("label",[dt.a.component({state:this.field.show_when_empty(),onchange:this.updateAttribute.bind(this,"show_when_empty"),children:a.a.translator.trans("fof-mason.admin.fields.show_when_empty")})]),m(".helpText",a.a.translator.trans("fof-mason.admin.fields.show_when_empty-help"))]),m(".Form-group",[m("label",[dt.a.component({state:this.field.user_values_allowed(),onchange:this.updateAttribute.bind(this,"user_values_allowed"),children:a.a.translator.trans("fof-mason.admin.fields.user_values_allowed")})]),m(".helpText",a.a.translator.trans("fof-mason.admin.fields.user_values_allowed-help"))]),m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.fields.validation")),m("input.FormControl",{disabled:!this.field.user_values_allowed(),placeholder:this.field.user_values_allowed()?"":a.a.translator.trans("fof-mason.admin.fields.enable-user-values-for-validation"),value:this.field.validation(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"validation"))}),m(".helpText",a.a.translator.trans("fof-mason.admin.fields.validation-help",{a:m("a[href=https://laravel.com/docs/5.1/validation#available-validation-rules][_target=blank]")}))]),m(".Form-group",[m("label",[a.a.translator.trans("fof-mason.admin.fields.icon"),this.iconPreview(this.field.icon())]),m("input.FormControl",{value:this.field.icon(),oninput:m.withAttr("value",this.updateAttribute.bind(this,"icon"))}),m(".helpText",a.a.translator.trans("fof-mason.admin.fields.icon-help",{a:m("a[href=https://fontawesome.com/icons?m=free][_target=blank]")}))])]),m(".Mason-Box--column",[m("h4",a.a.translator.trans("fof-mason.admin.titles.field-answers")),m(".Form-group",ct.component({field:this.field}))])]),m("li.ButtonGroup",[st.a.component({type:"submit",className:"Button Button--primary",children:a.a.translator.trans("fof-mason.admin.buttons."+(this.field.exists?"save":"add")+"-field"),loading:this.processing,disabled:!this.readyToSave(),onclick:this.saveField.bind(this)}),this.field.exists?st.a.component({type:"submit",className:"Button Button--danger",children:a.a.translator.trans("fof-mason.admin.buttons.delete-field"),loading:this.processing,onclick:this.deleteField.bind(this)}):""])])},n.updateAttribute=function(t,e){var n;this.field.pushAttributes(((n={})[t]=e,n)),this.dirty=!0},n.readyToSave=function(){return this.dirty},n.saveField=function(){var t=this;this.processing=!0;var e=!this.field.exists;this.field.save(this.field.data.attributes).then((function(){e&&(t.initNewField(),t.toggleFields=!1),t.processing=!1,t.dirty=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e}))},n.deleteField=function(){var t=this;confirm(rt()(a.a.translator.trans("fof-mason.admin.messages.delete-field-confirmation",{name:this.field.name()})))&&(this.processing=!0,this.field.delete().then((function(){t.processing=!1,m.redraw()})).catch((function(e){throw t.processing=!1,e})))},n.iconPreview=function(t){return t?[" (",a.a.translator.trans("fof-mason.admin.fields.icon-preview",{preview:ot()(t)}),")"]:""},e}(et.a),pt=n(25),ht=n.n(pt),gt=n(26),vt=n.n(gt),wt=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var n=e.prototype;return n.init=function(){this.fieldsSectionTitle=m.prop(a.a.data.settings["fof-mason.fields-section-title"]||""),this.columnCount=m.prop(a.a.data.settings["fof-mason.column-count"]||1),this.labelsAsPlaceholders=m.prop(a.a.data.settings["fof-mason.labels-as-placeholders"]>0),this.fieldsInHero=m.prop(a.a.data.settings["fof-mason.fields-in-hero"]>0),this.hideEmptyFieldsSection=m.prop(a.a.data.settings["fof-mason.hide-empty-fields-section"]>0),this.tagsAsFields=m.prop(a.a.data.settings["fof-mason.tags-as-fields"]>0),this.tagsFieldName=m.prop(a.a.data.settings["fof-mason.tags-field-name"]||""),this.columnOptions={};for(var t=1;t<=3;t++)this.columnOptions[t]=a.a.translator.trans("fof-mason.admin.settings.n-columns",{count:t})},n.view=function(){return m(".Mason-Container",[m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.settings.fields-section-title")),m("input.FormControl",{value:this.fieldsSectionTitle(),placeholder:a.a.translator.trans("fof-mason.admin.settings.fields-section-title-placeholder"),onchange:m.withAttr("value",this.updateSetting.bind(this,this.fieldsSectionTitle,"fof-mason.fields-section-title"))}),m(".helpText",a.a.translator.trans("fof-mason.admin.settings.fields-section-title-help"))]),m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.settings.column-count")),vt.a.component({options:this.columnOptions,value:this.columnCount(),onchange:this.updateSetting.bind(this,this.columnCount,"fof-mason.column-count")})]),m(".Form-group",[m("label",dt.a.component({state:this.labelsAsPlaceholders(),onchange:this.updateSetting.bind(this,this.labelsAsPlaceholders,"fof-mason.labels-as-placeholders"),children:a.a.translator.trans("fof-mason.admin.settings.labels-as-placeholders")})),m(".helpText",a.a.translator.trans("fof-mason.admin.settings.labels-as-placeholders-help"))]),m(".Form-group",[m("label",dt.a.component({state:this.fieldsInHero(),onchange:this.updateSetting.bind(this,this.fieldsInHero,"fof-mason.fields-in-hero"),children:a.a.translator.trans("fof-mason.admin.settings.fields-in-hero")}))]),m(".Form-group",[m("label",dt.a.component({state:this.hideEmptyFieldsSection(),onchange:this.updateSetting.bind(this,this.hideEmptyFieldsSection,"fof-mason.hide-empty-fields-section"),children:a.a.translator.trans("fof-mason.admin.settings.hide-empty-fields-section")})),m(".helpText",a.a.translator.trans("fof-mason.admin.settings.hide-empty-fields-section-help"))]),m(".Form-group",[m("label",dt.a.component({state:this.tagsAsFields(),onchange:this.updateSetting.bind(this,this.tagsAsFields,"fof-mason.tags-as-fields"),children:a.a.translator.trans("fof-mason.admin.settings.tags-as-field")})),m(".helpText",a.a.translator.trans("fof-mason.admin.settings.tags-as-field-help"))]),this.tagsAsFields()?m(".Form-group",[m("label",a.a.translator.trans("fof-mason.admin.settings.tags-field-name")),m("input.FormControl",{value:this.tagsFieldName(),placeholder:a.a.translator.trans("fof-mason.admin.settings.tags-field-name-placeholder"),onchange:m.withAttr("value",this.updateSetting.bind(this,this.tagsFieldName,"fof-mason.tags-field-name"))})]):null])},n.updateSetting=function(t,e,n){var o;ht()(((o={})[e]=n,o)),t(n)},e}(et.a),bt=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var n=e.prototype;return n.init=function(){a.a.request({method:"GET",url:a.a.forum.attribute("apiUrl")+"/fof/mason/fields"}).then((function(t){a.a.store.pushPayload(t),m.redraw()}))},n.config=function(){var t=this;Z(this.element.querySelector(".js-fields-container"),{handle:".js-field-handle"})[0].addEventListener("sortupdate",(function(){var e=t.$(".js-field-data").map((function(){return $(this).data("id")})).get();t.updateSort(e)}))},n.view=function(){var t=a.a.store.all("mason-fields"),e=[];return Object(ut.a)(t).forEach((function(t){e.push(m(".js-field-data",{key:t.id(),"data-id":t.id()},mt.component({field:t})))})),m(".container",[m("h2",a.a.translator.trans("fof-mason.admin.titles.fields")),m(".Mason-Container",[m(".js-fields-container",e),mt.component({key:"new",field:null})]),m("h2",a.a.translator.trans("fof-mason.admin.titles.settings")),wt.component()])},n.updateSort=function(t){a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+"/fof/mason/fields/order",data:{sort:t}}).then((function(t){a.a.store.pushPayload(t),m.redraw()}))},e}(et.a),yt=n(10),_t=n.n(yt),Et=n(27),xt=n.n(Et);a.a.initializers.add("fof-mason",(function(t){t.store.models["mason-fields"]=i.a,t.store.models["mason-answers"]=r.a,a.a.routes["fof-mason-page"]={path:"/mason",component:bt.component()},a.a.extensionSettings["fof-mason"]=function(){return m.route(a.a.route("fof-mason-page"))},Object(s.extend)(d.a.prototype,"items",(function(t){t.add("fof-mason",u.a.component({href:a.a.route("fof-mason-page"),icon:"fas fa-dungeon",children:"Mason",description:a.a.translator.trans("fof-mason.admin.menu.description")}))})),Object(s.extend)(xt.a.prototype,"permissionItems",(function(t){var e=new _t.a;e.add("see-own-fields",{icon:"fas fa-eye",label:a.a.translator.trans("fof-mason.admin.permissions.see-own-fields"),permission:"fof-mason.see-own-fields"}),e.add("see-other-fields",{icon:"fas fa-eye",label:a.a.translator.trans("fof-mason.admin.permissions.see-other-fields"),permission:"fof-mason.see-other-fields",allowGuest:!0}),e.add("fill-fields",{icon:"fas fa-tasks",label:a.a.translator.trans("fof-mason.admin.permissions.fill-fields"),permission:"fof-mason.fill-fields"}),e.add("update-own-fields",{icon:"fas fa-edit",label:a.a.translator.trans("fof-mason.admin.permissions.update-own-fields"),permission:"fof-mason.update-own-fields"}),e.add("update-other-fields",{icon:"fas fa-edit",label:a.a.translator.trans("fof-mason.admin.permissions.update-other-fields"),permission:"fof-mason.update-other-fields",allowGuest:!0}),e.add("skip-required-fields",{icon:"fas fa-forward",label:a.a.translator.trans("fof-mason.admin.permissions.skip-required-fields"),permission:"fof-mason.skip-required-fields"}),t.add("fof-mason",{label:a.a.translator.trans("fof-mason.admin.permissions.mason-heading"),children:e.toArray()})}))}))}]);
//# sourceMappingURL=admin.js.map