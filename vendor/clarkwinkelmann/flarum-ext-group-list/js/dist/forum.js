module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=20)}([function(t,n){t.exports=flarum.core.compat["common/Model"]},function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n)}e.d(n,"a",(function(){return o}))},function(t,n){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(1),o=e(0),a=e.n(o),u=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).content=a.a.attribute("content"),n.contentHtml=a.a.attribute("contentHtml"),n.group=a.a.hasOne("group"),n.members=a.a.hasMany("members"),n}return Object(r.a)(n,t),n}(a.a)},function(t,n){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["common/helpers/listItems"]},,,,function(t,n){t.exports=flarum.core.compat["common/extend"]},function(t,n){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["common/components/Page"]},function(t,n){t.exports=flarum.core.compat["common/components/GroupBadge"]},function(t,n){t.exports=flarum.core.compat["common/components/Link"]},function(t,n){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["common/helpers/username"]},function(t,n){t.exports=flarum.core.compat["common/helpers/userOnline"]},,,,function(t,n,e){"use strict";e.r(n);var r=e(9),o=e(4),a=e.n(o),u=e(10),i=e.n(u),c=e(1),s=e(11),p=e.n(s),l=e(2),f=e.n(l),d=e(12),g=e.n(d),h=e(5),b=e.n(h),v=e(13),y=e.n(v),x=e(14),k=e.n(x),w=e(15),O=e.n(w),L=e(16),P=e.n(L),j=function(){function t(){}var n=t.prototype;return n.view=function(t){var n=this;return m("ul.GroupList-UserList",t.attrs.users.map((function(e){return m("li.GroupList-UserList-item",m(y.a,{href:app.route.user(e)},[m(".GroupList-UserList-avatar",[k()(e),n.badges(e,t.attrs.hideBadgeId)]),m(".GroupList-UserList-user",[app.forum.attribute("clarkwinkelmann-group-list.showOnlineStatus")?P()(e):null,O()(e)])]))})))},n.badges=function(t,n){if(!app.forum.attribute("clarkwinkelmann-group-list.showAvatarBadges"))return null;var e=t.badges();return e.has(n)&&e.remove(n),m("ul.badges",b()(e.toArray()))},t}(),G=function(t){function n(){return t.apply(this,arguments)||this}Object(c.a)(n,t);var e=n.prototype;return e.oninit=function(n){var e=this;t.prototype.oninit.call(this,n),this.items=null,app.request({method:"GET",url:app.forum.attribute("apiUrl")+"/clarkwinkelmann-group-list"}).then((function(t){e.items=app.store.pushPayload(t),m.redraw()})),this.bodyClass="GroupList-page"},e.view=function(){return m(".IndexPage",[a.a.prototype.hero(),m(".container",m(".sideNavContainer",[m("nav.IndexPage-nav.sideNav",m("ul",b()(a.a.prototype.sidebarItems().toArray()))),m(".IndexPage-results.sideNavOffset.GroupList-content",this.content())]))])},e.content=function(){return null===this.items?f.a.component():this.items.map((function(t){return m("div",[m("h3.GroupList-title",[g.a.component({group:t.group()})," ",t.group().namePlural()]),t.contentHtml()?m(".GroupList-description",m.trust(t.contentHtml())):null,m(j,{users:t.members(),hideBadgeId:"group"+t.group().id()})])}))},n}(p.a),I=e(3);app.initializers.add("clarkwinkelmann-group-list",(function(){app.routes["clarkwinkelmann-group-list"]={path:"/groups",component:G},app.store.models["clarkwinkelmann-group-list-items"]=I.a,Object(r.extend)(a.a.prototype,"navItems",(function(t){app.forum.attribute("clarkwinkelmann-group-list.showSideNavLink")&&t.add("clarkwinkelmann-group-list-item",i.a.component({href:app.route("clarkwinkelmann-group-list"),icon:"fas fa-users"},app.translator.trans("clarkwinkelmann-group-list.forum.nav")),85)}))}))}]);
//# sourceMappingURL=forum.js.map