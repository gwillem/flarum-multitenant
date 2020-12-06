module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},,function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Badge"]},,,function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var o=n(1),r=n(6),a=n.n(r),i=n(0),s=n.n(i),c=n(14),u=n.n(c),p=n(15),l=n.n(p),f=n(5),m=n(4),d=n.n(m),h=n(7),g=n.n(h),b=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(u()(s.a,{title:s.a.attribute("title"),time:s.a.attribute("time",s.a.transformDate),editTime:s.a.attribute("editTime",s.a.transformDate),content:s.a.attribute("content"),contentHtml:s.a.attribute("contentHtml"),contentPlain:l()("contentHtml",f.getPlainContent),slug:s.a.attribute("slug"),isHidden:s.a.attribute("isHidden"),isRestricted:s.a.attribute("isRestricted"),isHtml:s.a.attribute("isHtml"),badges:function(){var t=new d.a;return this.isHidden()&&t.add("hidden",g.a.component({type:"hidden",icon:"fas fa-trash",label:a.a.translator.trans("fof-pages.admin.badges.hidden")})),this.isRestricted()&&t.add("restricted",g.a.component({type:"restricted",icon:"fas fa-user-shield",label:a.a.translator.trans("fof-pages.admin.badges.restricted")})),t}}))},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},,function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(17),a=n.n(r),i=n(18),s=n.n(i),c=n(10),u=n.n(c),p=n(11),l=n.n(p),f=n(3),d=n.n(f),h=n(4),g=n.n(h),b=n(12),y=n.n(b),v=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){return m("header",{className:"Hero PageHero"},m("div",{className:"container"},m("ul",{className:"PageHero-items"},y()(this.items().toArray()))))},n.items=function(){var t=new g.a,e=this.attrs.page;return t.add("title",m("h2",{className:"PageHero-title"},m("a",{href:app.route.page(e),config:m.route},e.title()))),t},e}(d.a),x=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.page=null,this.loadPage(),this.bodyClass="App--page"},n.view=function(){var t=this.page;return m("div",{className:"Pages"},m("div",{className:"Pages-page"},t?[this.hero(),m("div",{className:"Pages-container container"},m("div",{className:"Post-body"},this.content()))]:l.a.component({className:"LoadingIndicator--block"})))},n.show=function(t){this.page=t,app.history.push("page",t.title()),app.setTitle(t.title()),m.redraw()},n.hero=function(){return v.component({page:this.page})},n.content=function(){return m.trust(this.page.contentHtml())},n.id=function(){var t=m.route.param("id").split("-")[0];return isNaN(parseInt(t))?m.route.param("id"):t},n.loadPage=function(){var t=this,e=this.id(),n=app.preloadedApiDocument(),o=!Array.isArray(n)&&n||app.store.getById("pages",e);o?this.show(o):Promise.all([app.store.find("pages",e).then((function(e){t.show(e)})),m.redraw()])},e}(u.a),P=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),app.history.push("homePage",s()("fas fa-home")),app.drawer.hide(),app.modal.close()},n.show=function(t){this.page=t,app.setTitle(""),m.redraw()},n.hero=function(){return a.a.prototype.hero()},n.id=function(){return app.data["fof-pages.home"]},e}(x),w=n(13);app.initializers.add("fof-pages",(function(t){t.routes.homePage={path:"/pages/home",component:P},t.routes.page={path:"/p/:id",component:x},t.store.models.pages=w.a,t.route.page=function(e){return t.route("page",{id:e.id()+"-"+e.slug()})}}))}]);
//# sourceMappingURL=forum.js.map