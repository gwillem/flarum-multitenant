module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=10)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["utils/Stream"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["utils/PostControls"]},function(t,o){t.exports=flarum.core.compat["components/CommentPost"]},function(t,o){t.exports=flarum.core.compat["components/Modal"]},function(t,o){t.exports=flarum.core.compat["components/EventPost"]},function(t,o){t.exports=flarum.core.compat["components/Link"]},function(t,o,n){"use strict";n.r(o);var e=n(3),r=n(4),s=n.n(r),i=n(0),a=n.n(i),u=n(5),c=n.n(u),p=n(2),l=n.n(p),f=n(6),d=n.n(f);function b(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var h=n(7),y=n.n(h),v=n(1),_=n.n(v),g=function(t){function o(){return t.apply(this,arguments)||this}b(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.newDiscussionTitle=_()("")},n.className=function(){return"SplitPostModal Modal--small"},n.title=function(){return app.translator.trans("fof-split.forum.modal.title")},n.content=function(){return[m("div",{className:"Modal-body"},[m("div",{className:"Form Form--centered"},[m("div",{className:"Form-group"},[m("label",{},app.translator.trans("fof-split.forum.modal.new_discussion_label")),m("input",{className:"FormControl",name:"new_discussion_title",bidi:this.newDiscussionTitle})]),m("div",{className:"Form-group"},[m(l.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.newDiscussionTitle()},app.translator.trans("fof-split.forum.modal.submit_button"))])])])]},n.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0;var n=new FormData;n.append("title",this.newDiscussionTitle()),n.append("start_post_id",this.attrs.split.startPostId),n.append("end_post_number",this.attrs.post.number()),app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/split",serialize:function(t){return t},body:n}).then((function(t){var n={};n.id=_()(t.data.id),n.slug=_()(t.data.attributes.slug),n.startUser=_()(t.data.attributes.startUser),n.isUnread=_()(t.data.attributes.isUnread),o.hide(),m.route.set(app.route.discussion(n))}),this.loaded.bind(this))},o}(y.a),x=function(){function t(){this.reset()}var o=t.prototype;return o.start=function(t,o){this.reset(),this.startPostId=t,$(".PostStream-item").each((function(){$(this).attr("data-number")>=o&&$(".flagrow-split-endSplitButton",$(this)).show()})),$(".flagrow-split-startSplitButton").hide()},o.end=function(t){this.endPostNumber=t},o.reset=function(){this.startPostId=null,this.endPostNumber=null},t}(),S=n(8),w=n.n(S),P=n(9),N=n.n(P),O=function(t){function o(){return t.apply(this,arguments)||this}b(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-code-branch"},n.descriptionKey=function(){return this.attrs.post.content().toNew?"fof-split.forum.post.was_split_to":"fof-split.forum.post.was_split_from"},n.descriptionData=function(){return{count:this.attrs.post.content().count,target:m(N.a,{className:"EventPost-Split-target",href:this.attrs.post.content().url},this.attrs.post.content().title)}},o}(w.a);app.initializers.add("fof-split",(function(t){t.store.models.discussions.prototype.canSplit=s.a.attribute("canSplit"),t.postComponents.discussionSplit=O;var o,n=new x;o=n,Object(e.extend)(c.a,"moderationControls",(function(t,n){var e=n.discussion();"comment"===n.contentType()&&e.canSplit()&&1!=n.number()&&t.add("splitFrom",[m(l.a,{icon:"fas fa-code-branch",className:"flagrow-split-startSplitButton",onclick:function(){o.start(n.id(),n.number())}},a.a.translator.trans("fof-split.forum.split.from"))])})),Object(e.extend)(d.a.prototype,"footerItems",(function(t){var n=this.attrs.post,e=n.discussion();"comment"===n.contentType()&&e.canSplit()&&1!=n.number()&&t.add("splitTo",[m(l.a,{icon:"fas fa-code-branch",className:"flagrow-split-endSplitButton Button Button--link",onclick:function(){a.a.modal.show(g,{split:o,post:n})},style:{display:"none"}},a.a.translator.trans("fof-split.forum.split.to"))])}))}))}]);
//# sourceMappingURL=forum.js.map