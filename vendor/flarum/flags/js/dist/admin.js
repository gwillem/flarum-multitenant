module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=27)}({0:function(t,n){t.exports=flarum.core.compat.app},1:function(t,n,e){"use strict";function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return r}))},11:function(t,n){t.exports=flarum.core.compat["components/PermissionGrid"]},2:function(t,n){t.exports=flarum.core.compat.extend},25:function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},27:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e(2),a=e(0),s=e.n(a),i=e(11),l=e.n(i),u=e(1),f=e(25),c=function(t){function n(){return t.apply(this,arguments)||this}Object(u.a)(n,t);var e=n.prototype;return e.className=function(){return"FlagsSettingsModal Modal--small"},e.title=function(){return app.translator.trans("flarum-flags.admin.settings.title")},e.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-flags.admin.settings.guidelines_url_label")),m("input",{className:"FormControl",bidi:this.setting("flarum-flags.guidelines_url")})),m("div",{className:"Form-group"},m("label",{className:"checkbox"},m("input",{type:"checkbox",bidi:this.setting("flarum-flags.can_flag_own")}),app.translator.trans("flarum-flags.admin.settings.flag_own_posts_label")))]},n}(e.n(f).a),p={"flags/components/FlagsSettingsModal":c},d=e(8);s.a.initializers.add("flarum-flags",(function(){s.a.extensionSettings["flarum-flags"]=function(){return s.a.modal.show(c)},Object(o.extend)(l.a.prototype,"moderateItems",(function(t){t.add("viewFlags",{icon:"fas fa-flag",label:s.a.translator.trans("flarum-flags.admin.permissions.view_flags_label"),permission:"discussion.viewFlags"},65)})),Object(o.extend)(l.a.prototype,"replyItems",(function(t){t.add("flagPosts",{icon:"fas fa-flag",label:s.a.translator.trans("flarum-flags.admin.permissions.flag_posts_label"),permission:"discussion.flagPosts"},70)}))})),Object(r.a)(d.compat,p)},5:function(t,n,e){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,"a",(function(){return r}))},8:function(t,n){t.exports=flarum.core}});
//# sourceMappingURL=admin.js.map