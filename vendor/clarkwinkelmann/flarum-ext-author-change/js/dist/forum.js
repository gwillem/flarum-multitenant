module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=14)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["states/SearchState"]},function(t,e){t.exports=flarum.core.compat["components/Search"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/UsersSearchSource"]},function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(0),o=n.n(a),i=n(3),s=n.n(i),c=n(4),u=n.n(c),l=n(1),h=n.n(l);function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var d=n(5),p=n.n(d),g=n(6),k=n.n(g),y=n(7),b=n.n(y),w=n(8),v=n.n(w),x=n(9),S=n.n(x),A=n(10),C=n.n(A),O=n(11),U=n.n(O),_=n(12),P=n.n(_),j=n(13),B=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(e){var n=t.prototype.view.call(this,e);if(!n)return e.length<3?[m("li",h.a.component({icon:"fas fa-info-circle"},o.a.translator.trans("clarkwinkelmann-author-change.forum.search.type-more")))]:[m("li",h.a.component({icon:"fas fa-search-minus"},o.a.translator.trans("clarkwinkelmann-author-change.forum.search.no-results")))];var r=null;return n.some((function(t){return!!(Array.isArray(t)&&t.length>0&&t[0].attrs&&-1!==t[0].attrs.className.indexOf("UserSearchResult"))&&(r=t,!0)})),null===r?m("li","[extension conflict]"):(r.forEach((function(t){Array.isArray(t.children)&&t.children.length>0&&(t.children[0].tag="a")})),e.length<3&&r.push(m("li",h.a.component({icon:"fas fa-info-circle"},o.a.translator.trans("clarkwinkelmann-author-change.forum.search.type-more")))),r)},e}(n.n(j).a),I=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.selectUserIndex=function(t){var e=t.split("users")[1],n=o.a.store.getById("users",e);this.attrs.onsubmit(n)},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.$(".Search-results").on("click",(function(t){var e=$(t.target).parents(".UserSearchResult");e.length&&(t.preventDefault(),n.selectUserIndex(e.data("index")))}))},n.getCurrentSearch=function(){return""},n.selectResult=function(){clearTimeout(this.searchTimeout),this.loadingSources=0,this.state.getValue()?this.selectUserIndex(this.index):this.clear(),this.$("input").blur()},n.clear=function(){t.prototype.clear.call(this),m.redraw()},n.sourceItems=function(){var t=new U.a;return o.a.forum.attribute("canViewUserList")&&t.add("users",new B),t},n.view=function(e){var n=t.prototype.view.call(this,e);return n.children[0].children[0].attrs.placeholder=P()(o.a.translator.trans("clarkwinkelmann-author-change.forum.search.placeholder")),n},e}(C.a),E=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.user=this.attrs.related.user(),this.createdAt=this.attrs.related.createdAt().toISOString().slice(0,16),this.editedAt=this.isPost()&&this.attrs.related.editedAt()?this.attrs.related.editedAt().toISOString().slice(0,16):"",this.attributes={},this.dirty=!1,this.loading=!1,this.userSearchState=new S.a,this.userSearchState.getInitialSearch=function(){return""}},n.isPost=function(){return this.attrs.related instanceof k.a},n.className=function(){return"Update-Author-Modal"},n.title=function(){return o.a.translator.trans("clarkwinkelmann-author-change.forum.modal.title-"+(this.isPost()?"post":"discussion"))},n.content=function(){var t=this;return m(".Modal-body",[o.a.forum.attribute("clarkwinkelmannAuthorChangeCanEditUser")?m(".Form-group",[m("label",o.a.translator.trans("clarkwinkelmann-author-change.forum.modal.user")),m(".FormControl.SelectedUser",[this.user?h.a.component({icon:"fas fa-times",onclick:function(){t.user=null,t.attributes.relationships={user:[]},t.dirty=!0},className:"Button Button--icon Button--link RemoveUserButton"}):null,b()(this.user),v()(this.user)]),I.component({state:this.userSearchState,onsubmit:function(e){t.user=e,t.attributes.relationships={user:e},t.dirty=!0,m.redraw()}})]):null,o.a.forum.attribute("clarkwinkelmannAuthorChangeCanEditDate")?[m(".Form-group",[m("label",o.a.translator.trans("clarkwinkelmann-author-change.forum.modal.created_at")),m("input[type=datetime-local][required].FormControl",{value:this.createdAt,onchange:function(e){t.createdAt=e.target.value,t.attributes.createdAt=e.target.value,t.dirty=!0}})]),this.isPost()?m(".Form-group",[m("label",o.a.translator.trans("clarkwinkelmann-author-change.forum.modal.edited_at")),m("input[type=datetime-local].FormControl",{value:this.editedAt,onchange:function(e){t.editedAt=e.target.value,t.attributes.editedAt=e.target.value,t.dirty=!0}})]):null]:null,m(".Form-group",[h.a.component({disabled:!this.dirty,loading:this.loading,type:"submit",className:"Button Button--primary"},o.a.translator.trans("clarkwinkelmann-author-change.forum.modal.submit")),h.a.component({className:"Button CancelButton",onclick:function(){o.a.modal.close()}},o.a.translator.trans("clarkwinkelmann-author-change.forum.modal.cancel"))])])},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.attrs.related.save(this.attributes).then((function(){e.loading=!1,e.dirty=!1,m.redraw(),o.a.modal.close()})).catch((function(t){throw e.loading=!1,m.redraw(),t}))},e}(p.a);o.a.initializers.add("clarkwinkelmann-author-change",(function(){Object(r.extend)(s.a,"moderationControls",(function(t,e){(o.a.forum.attribute("clarkwinkelmannAuthorChangeCanEditUser")||o.a.forum.attribute("clarkwinkelmannAuthorChangeCanEditDate"))&&t.add("clarkwinkelmann-author-change",h.a.component({icon:"fas fa-user-edit",onclick:function(){o.a.modal.show(E,{related:e})}},o.a.translator.trans("clarkwinkelmann-author-change.forum.controls.edit")))})),Object(r.extend)(u.a,"moderationControls",(function(t,e){(o.a.forum.attribute("clarkwinkelmannAuthorChangeCanEditUser")||o.a.forum.attribute("clarkwinkelmannAuthorChangeCanEditDate"))&&t.add("clarkwinkelmann-author-change",h.a.component({icon:"fas fa-user-edit",onclick:function(){o.a.modal.show(E,{related:e})}},o.a.translator.trans("clarkwinkelmann-author-change.forum.controls.edit")))}))}))}]);
//# sourceMappingURL=forum.js.map