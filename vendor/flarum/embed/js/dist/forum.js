module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){e.exports=flarum.core.compat["components/PostStream"]},function(e,t){e.exports=flarum.core.compat["utils/Stream"]},function(e,t){e.exports=flarum.core.compat.ForumApplication},function(e,t){e.exports=flarum.core.compat["components/Composer"]},function(e,t){e.exports=flarum.core.compat["components/ModalManager"]},function(e,t){e.exports=flarum.core.compat["components/PostMeta"]},function(e,t,n){!function(t){if("undefined"!=typeof window){var n=!0,o="",i=0,r="",a=null,c="",u=!1,s={resize:1,click:1},d=!0,l=1,f="bodyOffset",m=!0,p="",g={},h=32,v=null,y=!1,b="[iFrameSizer]",w=b.length,T="",O={max:1,min:1,bodyScroll:1,documentElementScroll:1},S="child",E=!0,M=window.parent,I="*",x=0,N=!1,A=null,C=16,k=1,P="scroll",j=window,z=function(){ie("onMessage function not defined")},R=function(){},F=function(){},L={height:function(){return ie("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return ie("Custom width calculation function not defined"),document.body.scrollWidth}},D={},q=!1;try{var H=Object.create({},{passive:{get:function(){q=!0}}});window.addEventListener("test",G,H),window.removeEventListener("test",G,H)}catch(e){}var W,_,B,U,J,V,K,Q=Date.now||function(){return(new Date).getTime()},X={bodyOffset:function(){return document.body.offsetHeight+he("marginTop")+he("marginBottom")},offset:function(){return X.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return L.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,ye(X))},min:function(){return Math.min.apply(null,ye(X))},grow:function(){return X.max()},lowestElement:function(){return Math.max(X.bodyOffset()||X.documentElementOffset(),ve("bottom",we()))},taggedElement:function(){return be("bottom","data-iframe-height")}},Y={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return L.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Y.bodyScroll(),Y.documentElementScroll())},max:function(){return Math.max.apply(null,ye(Y))},min:function(){return Math.min.apply(null,ye(Y))},rightMostElement:function(){return ve("right",we())},taggedElement:function(){return be("right","data-iframe-width")}},$=(W=Te,J=null,V=0,K=function(){V=Q(),J=null,U=W.apply(_,B),J||(_=B=null)},function(){var e=Q();V||(V=e);var t=C-(e-V);return _=this,B=arguments,t<=0||t>C?(J&&(clearTimeout(J),J=null),V=e,U=W.apply(_,B),J||(_=B=null)):J||(J=setTimeout(K,t)),U});Z(window,"message",xe),Z(window,"readystatechange",Ne),Ne()}function G(){}function Z(e,t,n,o){e.addEventListener(t,n,!!q&&(o||{}))}function ee(e,t,n){e.removeEventListener(t,n,!1)}function te(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ne(e){return b+"["+T+"] "+e}function oe(e){y&&"object"==typeof window.console&&console.log(ne(e))}function ie(e){"object"==typeof window.console&&console.warn(ne(e))}function re(){var e;!function(){function e(e){return"true"===e}var t=p.substr(w).split(":");T=t[0],i=void 0!==t[1]?Number(t[1]):i,u=void 0!==t[2]?e(t[2]):u,y=void 0!==t[3]?e(t[3]):y,h=void 0!==t[4]?Number(t[4]):h,n=void 0!==t[6]?e(t[6]):n,r=t[7],f=void 0!==t[8]?t[8]:f,o=t[9],c=t[10],x=void 0!==t[11]?Number(t[11]):x,g.enable=void 0!==t[12]&&e(t[12]),S=void 0!==t[13]?t[13]:S,P=void 0!==t[14]?t[14]:P}(),oe("Initialising iFrame ("+location.href+")"),function(){function e(e,t){return"function"==typeof e&&(oe("Setup custom "+t+"CalcMethod"),L[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(t=window.iFrameResizer,oe("Reading data from page: "+JSON.stringify(t)),Object.keys(t).forEach(ae,t),z="onMessage"in t?t.onMessage:z,R="onReady"in t?t.onReady:R,I="targetOrigin"in t?t.targetOrigin:I,f="heightCalculationMethod"in t?t.heightCalculationMethod:f,P="widthCalculationMethod"in t?t.widthCalculationMethod:P,f=e(f,"height"),P=e(P,"width"));var t;oe("TargetOrigin for parent set to: "+I)}(),function(){void 0===r&&(r=i+"px");ce("margin",function(e,t){-1!==t.indexOf("-")&&(ie("Negative CSS value ignored for "+e),t="");return t}("margin",r))}(),ce("background",o),ce("padding",c),(e=document.createElement("div")).style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e),le(),fe(),document.documentElement.style.height="",document.body.style.height="",oe('HTML & body height set to "auto"'),oe("Enable public methods"),j.parentIFrame={autoResize:function(e){return!0===e&&!1===n?(n=!0,me()):!1===e&&!0===n&&(n=!1,pe()),n},close:function(){Ie(0,0,"close"),oe("Disable outgoing messages"),E=!1,oe("Remove event listener: Message"),ee(window,"message",xe),!0===n&&pe()},getId:function(){return T},getPageInfo:function(e){"function"==typeof e?(F=e,Ie(0,0,"pageInfo")):(F=function(){},Ie(0,0,"pageInfoStop"))},moveToAnchor:function(e){g.findTarget(e)},reset:function(){Me("parentIFrame.reset")},scrollTo:function(e,t){Ie(t,e,"scrollTo")},scrollToOffset:function(e,t){Ie(t,e,"scrollToOffset")},sendMessage:function(e,t){Ie(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){f=e,le()},setWidthCalculationMethod:function(e){P=e,fe()},setTargetOrigin:function(e){oe("Set targetOrigin: "+e),I=e},size:function(e,t){Oe("size","parentIFrame.size("+(e||"")+(t?","+t:"")+")",e,t)}},me(),g=function(){function e(e){var t=e.getBoundingClientRect(),n={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop};return{x:parseInt(t.left,10)+parseInt(n.x,10),y:parseInt(t.top,10)+parseInt(n.y,10)}}function t(t){var n=t.split("#")[1]||t,o=decodeURIComponent(n),i=document.getElementById(o)||document.getElementsByName(o)[0];void 0!==i?function(t){var o=e(t);oe("Moving to in page link (#"+n+") at x: "+o.x+" y: "+o.y),Ie(o.y,o.x,"scrollToOffset")}(i):(oe("In page link (#"+n+") not found in iFrame, so sending to parent"),Ie(0,0,"inPageLink","#"+n))}function n(){""!==location.hash&&"#"!==location.hash&&t(location.href)}g.enable?Array.prototype.forEach&&document.querySelectorAll?(oe("Setting up location.hash handlers"),Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),(function(e){"#"!==e.getAttribute("href")&&Z(e,"click",(function(e){e.preventDefault(),t(this.getAttribute("href"))}))})),Z(window,"hashchange",n),setTimeout(n,128)):ie("In page linking not fully supported in this browser! (See README.md for IE8 workaround)"):oe("In page linking not enabled");return{findTarget:t}}(),Oe("init","Init message from host page"),R()}function ae(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],ie("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function ce(e,t){void 0!==t&&""!==t&&"null"!==t&&(document.body.style[e]=t,oe("Body "+e+' set to "'+t+'"'))}function ue(e){var t={add:function(t){function n(){Oe(e.eventName,e.eventType)}D[t]=n,Z(window,t,n,{passive:!0})},remove:function(e){var t=D[e];delete D[e],ee(window,e,t)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),oe(te(e.method)+" event listener: "+e.eventType)}function se(e){ue({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),ue({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),ue({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),ue({method:e,eventType:"Input",eventName:"input"}),ue({method:e,eventType:"Mouse Up",eventName:"mouseup"}),ue({method:e,eventType:"Mouse Down",eventName:"mousedown"}),ue({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),ue({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),ue({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),ue({method:e,eventType:"Touch Start",eventName:"touchstart"}),ue({method:e,eventType:"Touch End",eventName:"touchend"}),ue({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),ue({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),ue({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),ue({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===S&&ue({method:e,eventType:"IFrame Resized",eventName:"resize"})}function de(e,t,n,o){return t!==e&&(e in n||(ie(e+" is not a valid option for "+o+"CalculationMethod."),e=t),oe(o+' calculation method set to "'+e+'"')),e}function le(){f=de(f,"bodyOffset",X,"height")}function fe(){P=de(P,"scroll",Y,"width")}function me(){var e;!0===n?(se("add"),e=0>h,window.MutationObserver||window.WebKitMutationObserver?e?ge():a=function(){function e(e){function t(e){!1===e.complete&&(oe("Attach listeners to "+e.src),e.addEventListener("load",o,!1),e.addEventListener("error",i,!1),a.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function t(e){oe("Remove listeners from "+e.src),e.removeEventListener("load",o,!1),e.removeEventListener("error",i,!1),function(e){a.splice(a.indexOf(e),1)}(e)}function n(e,n,o){t(e.target),Oe(n,o+": "+e.target.src,void 0,void 0)}function o(e){n(e,"imageLoad","Image loaded")}function i(e){n(e,"imageLoadFailed","Image load failed")}function r(t){Oe("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var a=[],c=window.MutationObserver||window.WebKitMutationObserver,u=function(){var e=document.querySelector("body");return u=new c(r),oe("Create body MutationObserver"),u.observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}),u}();return{disconnect:function(){"disconnect"in u&&(oe("Disconnect body MutationObserver"),u.disconnect(),a.forEach(t))}}}():(oe("MutationObserver not supported in this browser!"),ge())):oe("Auto Resize disabled")}function pe(){se("remove"),null!==a&&a.disconnect(),clearInterval(v)}function ge(){0!==h&&(oe("setInterval: "+h+"ms"),v=setInterval((function(){Oe("interval","setInterval: "+h)}),Math.abs(h)))}function he(e,t){var n=0;return t=t||document.body,n=null!==(n=document.defaultView.getComputedStyle(t,null))?n[e]:0,parseInt(n,10)}function ve(e,t){for(var n=t.length,o=0,i=0,r=te(e),a=Q(),c=0;c<n;c++)(o=t[c].getBoundingClientRect()[e]+he("margin"+r,t[c]))>i&&(i=o);return a=Q()-a,oe("Parsed "+n+" HTML elements"),oe("Element position calculated in "+a+"ms"),function(e){e>C/2&&oe("Event throttle increased to "+(C=2*e)+"ms")}(a),i}function ye(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function be(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&(ie("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")),ve(e,n)}function we(){return document.querySelectorAll("body *")}function Te(e,t,n,o){var i,r;!function(){function e(e,t){return!(Math.abs(e-t)<=x)}return i=void 0!==n?n:X[f](),r=void 0!==o?o:Y[P](),e(l,i)||u&&e(k,r)}()&&"init"!==e?!(e in{init:1,interval:1,size:1})&&(f in O||u&&P in O)?Me(t):e in{interval:1}||oe("No change in size detected"):(Se(),Ie(l=i,k=r,e))}function Oe(e,t,n,o){N&&e in s?oe("Trigger event cancelled: "+e):(e in{reset:1,resetPage:1,init:1}||oe("Trigger event: "+t),"init"===e?Te(e,t,n,o):$(e,t,n,o))}function Se(){N||(N=!0,oe("Trigger event lock on")),clearTimeout(A),A=setTimeout((function(){N=!1,oe("Trigger event lock off"),oe("--")}),128)}function Ee(e){l=X[f](),k=Y[P](),Ie(l,k,e)}function Me(e){var t=f;f="bodyOffset",oe("Reset trigger event: "+e),Se(),Ee("reset"),f=t}function Ie(e,t,n,o,i){var r;!0===E&&(void 0===i?i=I:oe("Message targetOrigin: "+i),oe("Sending message to host page ("+(r=T+":"+e+":"+t+":"+n+(void 0!==o?":"+o:""))+")"),M.postMessage(b+r,i))}function xe(t){var n={init:function(){p=t.data,M=t.source,re(),d=!1,setTimeout((function(){m=!1}),128)},reset:function(){m?oe("Page reset ignored by init"):(oe("Page size reset by host page"),Ee("resetPage"))},resize:function(){Oe("resizeParent","Parent window requested size check")},moveToAnchor:function(){g.findTarget(i())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=i();oe("PageInfoFromParent called from parent: "+e),F(JSON.parse(e)),oe(" --")},message:function(){var e=i();oe("onMessage called from parent: "+e),z(JSON.parse(e)),oe(" --")}};function o(){return t.data.split("]")[1].split(":")[0]}function i(){return t.data.substr(t.data.indexOf(":")+1)}function r(){return t.data.split(":")[2]in{true:1,false:1}}function a(){var i=o();i in n?n[i]():!e.exports&&"iFrameResize"in window||"jQuery"in window&&"iFrameResize"in window.jQuery.prototype||r()||ie("Unexpected message ("+t.data+")")}b===(""+t.data).substr(0,w)&&(!1===d?a():r()?n.init():oe('Ignored message of type "'+o()+'". Received before initialization.'))}function Ne(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}}()},function(e,t,n){"use strict";n.r(t);n(9);var o=n(0),i=n(1),r=n.n(i),a=n(4),c=n.n(a),u=n(5),s=n.n(u),d=n(6),l=n.n(d),f=n(3),p=n.n(f),g=n(7),h=n.n(g),v=n(8),y=n.n(v),b=n(2),w=n.n(b);Object(o.extend)(s.a.prototype,"mount",(function(){m.route.param("hideFirstPost")&&Object(o.extend)(p.a.prototype,"view",(function(e){1===e.children[0].attrs["data-number"]&&e.children.splice(0,1)}))})),Object(o.override)(m.route.Link,"view",(function(e,t){return t.attrs.href=t.attrs.href.replace("/embed","/d"),t.attrs.target="_blank",e(t)})),Object(o.override)(y.a.prototype,"getPermalink",(function(e,t){return e(t).replace("/embed","/d")})),r.a.pageInfo=c()({});var T=function(){var e=r.a.pageInfo();this.$().css("top",Math.max(0,e.scrollTop-e.offsetTop))};Object(o.extend)(h.a.prototype,"show",T),Object(o.extend)(l.a.prototype,"show",T),window.iFrameResizer={readyCallback:function(){window.parentIFrame.getPageInfo(r.a.pageInfo)}},Object(o.extend)(p.a.prototype,"goToNumber",(function(e,t){if("reply"===t&&"parentIFrame"in window&&r.a.composer.isFullScreen()){var n=this.$(".PostStream-item:last").offset().top;window.parentIFrame.scrollToOffset(0,n)}})),Object(o.extend)(w.a.prototype,"sidebarItems",(function(e){e.remove("scrubber");var t=this.discussion.replyCount();e.add("replies",m("h3",null,m("a",{route:r.a.route.discussion(this.discussion).replace("/embed","/d")},t," comment",1==t?"":"s")),100);var n=e.get("controls").attrs;n.className=n.className.replace("App-primaryControl","")})),r.a.routes.discussion={path:"/embed/:id",component:w.a},r.a.routes["discussion.near"]={path:"/embed/:id/:near",component:w.a}}]);
//# sourceMappingURL=forum.js.map