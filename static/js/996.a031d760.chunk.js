"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[996],{8373:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var t,a,u,i=r(4165),s=r(5861),c=r(9439),o=r(2791),p=r(7689),f=r(4390),l=r(168),d=r(8547),h=d.ZP.div(t||(t=(0,l.Z)(["\n  padding: 15px 10px;\n"]))),g=d.ZP.ul(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)})),m=d.ZP.li(u||(u=(0,l.Z)(["\n  width: 200px;\n  overflow: hidden;\n\n  img {\n    height: 300px;\n    border: 3px dotted ",";\n    border-top-left-radius: ",";\n    border-bottom-right-radius: ",";\n    transition: border 300ms linear, box-shadow 300ms linear;\n  }\n\n  p:not(:last-child) {\n\t\tmargin: 5px 0;\n  }\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.radii.lg})),v=r(5510),x=r.p+"static/media/person.880afe0b458fcd338541.jpg",Z=r(184),w=function(){var n=(0,p.UO)().movieId,e=(0,o.useState)([]),r=(0,c.Z)(e,2),t=r[0],a=r[1],u=(0,o.useState)(!1),l=(0,c.Z)(u,2),d=l[0],w=l[1],b=(0,o.useState)(null),k=(0,c.Z)(b,2),y=k[0],_=k[1],j=(0,o.useRef)();return(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.current&&j.current.abort(),j.current=new AbortController,e.prev=2,w(!0),_(null),e.next=7,(0,f.g_)(n,j.current.signal);case 7:r=e.sent,a(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&_(e.t0.message);case 14:return e.prev=14,w(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[d&&(0,Z.jsx)(v.a,{}),y&&(0,Z.jsx)("p",{children:"There is no information yet."}),(0,Z.jsx)(h,{children:(0,Z.jsx)(g,{children:t.map((function(n){var e=n.id,r=n.profile_path,t=n.name,a=n.character;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500"+r:x,alt:t,width:200,height:300}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Name: "}),t]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Character: "}),a]})]},e)}))})})]})}},4390:function(n,e,r){r.d(e,{Ai:function(){return c},Ni:function(){return o},T0:function(){return f},YJ:function(){return s},g_:function(){return p}});var t=r(4165),a=r(5861),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="c16c869f875a641f65f14ffc799280d5",s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",{signal:e,params:{api_key:i,language:"en-US"}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie",{signal:r,params:{api_key:i,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return a=n.sent,s=a.data,n.abrupt("return",s.results);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e),{signal:r,params:{api_key:i,language:"en-US"}});case 2:return a=n.sent,s=a.data,n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits"),{signal:r,params:{api_key:i,language:"en-US"}});case 2:return a=n.sent,s=a.data,n.abrupt("return",s.cast);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,s;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews"),{signal:r,params:{api_key:i,language:"en-US",page:1}});case 2:return a=n.sent,s=a.data,n.abrupt("return",s.results);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=996.a031d760.chunk.js.map