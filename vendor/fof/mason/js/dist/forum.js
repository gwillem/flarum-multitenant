module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([,function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["common/Model"]},function(t,e,n){"use strict";function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}n.d(e,"a",(function(){return a}))},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e,n){"use strict";function s(t,e){return e||(e="sort"),t.sort((function(t,n){return t[e]()-n[e]()}))}n.d(e,"a",(function(){return s}))},function(t,e){t.exports=flarum.core.compat["common/extend"]},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var s=n(3),a=n(2),o=n.n(a),r=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).content=o.a.attribute("content"),e.is_suggested=o.a.attribute("is_suggested"),e.sort=o.a.attribute("sort"),e.field=o.a.hasOne("field"),e}return Object(s.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/mason/answers"+(this.exists?"/"+this.data.id:"")},e}(o.a)},function(t,e){t.exports=flarum.core.compat["common/utils/computed"]},function(t,e){t.exports=flarum.core.compat["common/utils/ItemList"]},,function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n(3),a=n(2),o=n.n(a),r=n(11),i=n.n(r),c=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).name=o.a.attribute("name"),e.description=o.a.attribute("description"),e.min_answers_count=o.a.attribute("min_answers_count"),e.max_answers_count=o.a.attribute("max_answers_count"),e.show_when_empty=o.a.attribute("show_when_empty"),e.user_values_allowed=o.a.attribute("user_values_allowed"),e.validation=o.a.attribute("validation"),e.icon=o.a.attribute("icon"),e.sort=o.a.attribute("sort"),e.deleted_at=o.a.attribute("deleted_at",o.a.transformDate),e.all_answers=o.a.hasMany("all_answers"),e.suggested_answers=o.a.hasMany("suggested_answers"),e.required=i()("min_answers_count",(function(t){return t>0})),e.multiple=i()("max_answers_count",(function(t){return t>1})),e}return Object(s.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/mason/fields"+(this.exists?"/"+this.data.id:"")},e}(o.a)},function(t,e){t.exports=flarum.core.compat["common/utils/classList"]},,function(t,e){t.exports=flarum.core.compat["common/models/Discussion"]},function(t,e){t.exports=flarum.core.compat["common/components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["common/components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["common/models/Forum"]},function(t,e){t.exports=flarum.core.compat["tags/utils/sortTags"]},function(t,e){t.exports=flarum.core.compat["forum/utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["common/components/Modal"]},function(t,e){t.exports=flarum.core.compat["common/components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["common/components/DiscussionPage"]},,,,function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),o=n(2),r=n.n(o),i=n(17),c=n.n(i),u=n(20),l=n.n(u),f=n(10),d=n(14),h=n(8),p=n(18),g=n.n(p),b=n(3),v=n(5),w=n.n(v),y=n(12),x=n.n(y),M=n(4),_=n.n(M),A=n(15),O=n.n(A),j=n(7);function S(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}var N=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.view=function(t){var e=t.attrs,n=e.field,s=e.answers,o=e.onchange,r=[];return n.suggested_answers().forEach((function(t){-1!==s.findIndex((function(e){return void 0!==e&&e.id()===t.id()}))&&r.push(t.id())})),m("span",{className:"Select"},m("select",{className:"Select-input FormControl",multiple:n.multiple(),onchange:function(t){for(var e,n=[],s=S(t.target.options);!(e=s()).done;){var r=e.value;if(r.selected&&"none"!==r.value){var i=r.value;n.push(a.a.store.getById("mason-answers",i))}}o(n)}},!n.multiple()&&m("option",{value:"none",selected:0===r.length,disabled:n.required(),hidden:this.placeholderHidden(n)},this.selectPlaceholder(n)),Object(j.a)(n.suggested_answers()).map((function(t){return m("option",{value:t.id(),selected:-1!==r.indexOf(t.id())},t.content())}))),w()("fas fa-caret-down",{className:"Select-caret"}))},n.placeholderHidden=function(t){return!a.a.forum.attribute("fof-mason.labels-as-placeholders")&&t.required()},n.selectPlaceholder=function(t){var e="";return a.a.forum.attribute("fof-mason.labels-as-placeholders")&&(e+=t.name(),t.required()&&(e+=" *"),e+=" - "),t.required()?e+=a.a.translator.trans("fof-mason.forum.answers.choose-option"):e+=a.a.translator.trans("fof-mason.forum.answers.no-option-selected"),e},e}(_.a),I=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.field=this.attrs.field,this.answers=this.attrs.answers,this.onchange=this.attrs.onchange,this.content="";var s=this.answers.filter((function(t){return void 0!==t&&t.field().id()===n.field.id()}));s.length&&(this.content=s[0].content())},n.view=function(){var t=this;return m("input",{className:"FormControl",required:this.field.required(),value:this.content,oninput:function(e){if(t.content=e.target.value,""===t.content)t.onchange([]);else{var n=a.a.store.createRecord("mason-answers",{attributes:{content:t.content},relationships:{field:{data:r.a.getIdentifier(t.field)}}});t.onchange([n])}},placeholder:this.fieldPlaceholder()})},n.fieldPlaceholder=function(){return a.a.forum.attribute("fof-mason.labels-as-placeholders")?this.field.name()+(this.field.required()?" *":""):""},e}(_.a),P=n(21),T=n.n(P),q=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.tags=a.a.store.all("tags"),this.selectedTags=[],this.attrs.discussion?(this.tags=this.tags.filter((function(t){return t.canAddToDiscussion()||-1!==n.attrs.discussion.tags().indexOf(t)})),this.selectedTags=this.attrs.discussion.tags()):this.tags=this.tags.filter((function(t){return t.canStartDiscussion()})),this.minPrimary=a.a.forum.attribute("minPrimaryTags"),this.maxPrimary=a.a.forum.attribute("maxPrimaryTags"),this.minSecondary=a.a.forum.attribute("minSecondaryTags"),this.maxSecondary=a.a.forum.attribute("maxSecondaryTags"),this.maxPrimary<=0&&(this.tags=this.tags.filter((function(t){return!t.isPrimary()}))),this.maxSecondary<=0&&(this.tags=this.tags.filter((function(t){return t.isPrimary()}))),this.tags=T()(this.tags),this.inputUuid=Math.random().toString(36).substring(2)},n.view=function(){var t,e=this;if(this.maxPrimary>1||this.maxSecondary>1)return m("div",{className:"Alert"},a.a.translator.trans("fof-mason.forum.tags.inadequate-settings"));var n=this.selectedTags.length?this.selectedTags.sort((function(t){return t.parent()?-1:1}))[0].id():null,s=this.inputUuid,o=this.fieldRequired();return m("div",{className:O()("Mason-Field Form-group",(t={},t["Mason-Field--label-as-placeholder"]=a.a.forum.attribute("fof-mason.labels-as-placeholders"),t))},m("label",{for:"fofMason-selectInput-"+s},this.fieldLabel()),m("span",{className:"Select"},m("select",{className:"Select-input FormControl",id:"fofMason-selectInput-"+s,onchange:function(t){var n=t.target.value;if(e.selectedTags=[],"none"!==n){e.selectedTags.push(e.tags.find((function(t){return t.id()===n})));var s=e.selectedTags[0].parent();s&&e.selectedTags.push(s)}e.attrs.onchange(e.selectedTags)}},m("option",{value:"none",selected:0===this.selectedTags.length,disabled:o,hidden:this.placeholderHidden()},this.selectPlaceholder()),this.tags.map((function(t){var e=t.parent();return m("option",{value:t.id(),selected:t.id()===n},(e?e.name()+" | ":"")+t.name())})),","),w()("fas fa-caret-down",{className:"Select-caret"})))},n.fieldRequired=function(){return this.minPrimary>0||this.minSecondary>0},n.fieldLabel=function(){var t=a.a.forum.attribute("fof-mason.tags-field-name")||a.a.translator.trans("fof-mason.forum.tags.tags-label");return this.fieldRequired()&&(t+=" *"),t},n.placeholderHidden=function(){return!a.a.forum.attribute("fof-mason.labels-as-placeholders")&&this.fieldRequired()},n.selectPlaceholder=function(){var t="";return a.a.forum.attribute("fof-mason.labels-as-placeholders")&&(t+=this.fieldLabel()+" - "),this.fieldRequired()?t+=a.a.translator.trans("fof-mason.forum.answers.choose-option"):t+=a.a.translator.trans("fof-mason.forum.answers.no-option-selected"),t},e}(_.a);var C=function(t){function e(){return t.apply(this,arguments)||this}return Object(b.a)(e,t),e.prototype.view=function(){return m("div",{className:"Mason-Grid-Wrapper"},m("div",{className:"Mason-Grid"},(t=this.attrs.items,e=a.a.forum.attribute("fof-mason.column-count"),Array(Math.ceil(t.length/e)).fill(void 0).map((function(n,s){return t.slice(e*s,e+e*s)}))).map((function(t){return m("div",{className:"Mason-Row"},t.map((function(t){return m("div",Object.assign({className:"Mason-Column"},t))})))}))));var t,e},e}(_.a),D=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.fields=Object(j.a)(a.a.store.all("mason-fields")),this.answerToFieldIndex=[],this.fields.forEach((function(t){t.suggested_answers().forEach((function(e){n.answerToFieldIndex[e.id()]=t.id()}))}))},n.view=function(){return m("div",{className:"Mason-Fields Mason-Fields--editor"},this.headItems().toArray(),m(C,{items:this.fieldItems().toArray()}))},n.updateSelection=function(t,e){var n=this,s=this.attrs.answers.filter((function(e){var s=n.answerToFieldIndex[e.id()];return void 0===s?e.field().id()!==t.id():s!==t.id()}));s=s.concat(e),this.attrs.onchange(s)},n.headItems=function(){var t=new x.a;return a.a.forum.attribute("fof-mason.fields-section-title")&&t.add("title",m("h5",{className:"Mason-Field--title"},a.a.forum.attribute("fof-mason.fields-section-title"))),t},n.fieldItems=function(){var t=this,e=new x.a;return a.a.forum.attribute("fof-mason.tags-as-fields")&&e.add("tags",m(q,{discussion:this.attrs.discussion,onchange:function(e){t.attrs.ontagchange&&t.attrs.ontagchange(e)}})),this.fields.forEach((function(n){var s,o={field:n,answers:t.attrs.answers,onchange:function(e){t.updateSelection(n,e)}},r=null;r=n.user_values_allowed()?m(I,o):m(N,o),e.add("field-"+n.id(),m("div",{class:O()("Mason-Field Form-group",(s={},s["Mason-Field--label-as-placeholder"]=a.a.forum.attribute("fof-mason.labels-as-placeholders"),s))},m("label",null,n.icon()?m("[",null,w()(n.icon())," "):null,n.name(),n.required()?" *":null),r,n.description()?m("div",{className:"helpText"},n.description()):null))})),e},e}(_.a),E=n(22),R=n.n(E),U=n(6),B=n.n(U),H=n(23),L=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.answers=this.attrs.discussion.masonAnswers(),this.dirty=!1,this.processing=!1,this.tags=null},n.title=function(){return a.a.translator.trans("fof-mason.forum.answers-modal.edit-title",{title:m("em",null,"this.attrs.discussion.title()")})},n.content=function(){var t=this;return m("[",null,m("div",{className:"Modal-body"},m(D,{discussion:this.attrs.discussion,answers:this.answers,onchange:this.answersChanged.bind(this),ontagchange:function(e){t.tags=e,t.dirty=!0}})),m("div",{className:"Modal-footer"},m(B.a,{className:"Button Button--primary",loading:this.processing,disabled:!this.dirty,onclick:this.saveAnswers.bind(this)},a.a.translator.trans("fof-mason.forum.answers-modal.save"))))},n.answersChanged=function(t){this.answers=t,this.dirty=!0},n.saveAnswers=function(){var t=this;this.processing=!0;var e={masonAnswers:this.answers};null!==this.tags&&(e.tags=this.tags),this.attrs.discussion.save({relationships:e}).then((function(){t.processing=!1,a.a.modal.close(),m.redraw()})).catch((function(e){throw t.processing=!1,e}))},e}(n.n(H).a),k=n(24),G=n.n(k),z=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.fields=Object(j.a)(a.a.store.all("mason-fields")),this.discussion=this.attrs.discussion},n.view=function(){var t=this.headItems().toArray(),e=this.fieldsItems().toArray();return e.length||t.length&&!a.a.forum.attribute("fof-mason.hide-empty-fields-section")?m("div",{className:"Mason-Fields Mason-Fields--viewer"},t,m(C,{items:e})):m("div",null)},n.headItems=function(){var t=this,e=new x.a;return this.discussion.canUpdateMasonAnswers()&&e.add("edit",m(B.a,{className:"Button Mason-Fields--edit",icon:"fas fa-pen",onclick:function(){return a.a.modal.show(L,{discussion:t.discussion})}},a.a.translator.trans("fof-mason.forum.discussion-controls.edit-answers"))),a.a.forum.attribute("fof-mason.fields-section-title")&&e.add("title",m("h5",{className:"Mason-Field--title"},a.a.forum.attribute("fof-mason.fields-section-title"))),e},n.fieldsItems=function(){var t=this,e=new x.a;return this.fields.forEach((function(n){var s=Object(j.a)((t.discussion.masonAnswers()||[]).filter((function(t){return t.field()&&t.field().id()===n.id()}))),o=s.map((function(t){return m("span",{className:"Mason-Inline-Answer"},t.content())}));if(0===s.length){if(!n.show_when_empty())return;o.push(m("em",{className:"Mason-Inline-Answer"},a.a.translator.trans("fof-mason.forum.post-answers.no-answer")))}e.add("field-"+n.id(),m("div",{className:"Mason-Field Form-group"},m("label",null,n.icon()?m("[",null,w()(n.icon())," "):null,n.name()),",",m("div",{className:"FormControl Mason-Inline-Answers"},o),","))})),e},e}(_.a),J=n(19),W=n.n(J),$=n(25),K=n.n($);function Q(t){return!!a.a.current.matches(K.a)&&(1===t.number()&&!a.a.forum.attribute("fof-mason.fields-in-hero"))}a.a.initializers.add("fof-mason",(function(t){t.store.models["mason-fields"]=d.a,t.store.models["mason-answers"]=f.a,c.a.prototype.masonAnswers=r.a.hasMany("masonAnswers"),c.a.prototype.canSeeMasonAnswers=r.a.attribute("canSeeMasonAnswers"),c.a.prototype.canUpdateMasonAnswers=r.a.attribute("canUpdateMasonAnswers"),l.a.prototype.canFillMasonFields=r.a.attribute("canFillMasonFields"),g.a.prototype.masonAnswers=[],Object(h.extend)(g.a.prototype,"headerItems",(function(t){var e=this;a.a.forum.canFillMasonFields()&&t.add("mason-fields",m(D,{answers:this.masonAnswers,onchange:function(t){e.masonAnswers=t},ontagchange:function(t){e.composer.fields.tags=t}}))})),Object(h.extend)(g.a.prototype,"data",(function(t){a.a.forum.canFillMasonFields()&&(t.relationships=t.relationships||{},t.relationships.masonAnswers=this.masonAnswers)})),Object(h.extend)(G.a.prototype,"items",(function(t){this.attrs.discussion.canSeeMasonAnswers()&&a.a.forum.attribute("fof-mason.fields-in-hero")&&t.add("mason-fields",m(z,{discussion:this.attrs.discussion}))})),Object(h.extend)(W.a.prototype,"oninit",(function(){var t=this;this.attrs.post.discussion().canSeeMasonAnswers()&&Q(this.attrs.post)&&this.subtree.check((function(){return(t.attrs.post.discussion().masonAnswers()||[]).map((function(t){return t?JSON.stringify([t.id(),!!t.field()]):""})).join(",")}))})),Object(h.extend)(W.a.prototype,"content",(function(t){if(this.attrs.post.discussion().canSeeMasonAnswers()&&Q(this.attrs.post)){var e=t.findIndex((function(t){return t.attrs&&"Post-header"===t.attrs.className}));t.splice(-1===e?0:e+1,0,m(z,{discussion:this.attrs.post.discussion()}))}})),Object(h.extend)(R.a,"moderationControls",(function(t,e){e.canUpdateMasonAnswers()&&t.add("mason-update-answers",m(B.a,{icon:"fas fa-tag",onclick:function(){return a.a.modal.show(L,{discussion:e})}},a.a.translator.trans("fof-mason.forum.discussion-controls.edit-answers")))})),Object(h.override)(r.a,"getIdentifier",(function(t,e){return e instanceof f.a&&!e.exists?{type:e.data.type,attributes:{content:e.data.attributes.content},relationships:{field:{data:r.a.getIdentifier(e.data.relationships.field)}}}:t(e)}))}))}]);
//# sourceMappingURL=forum.js.map