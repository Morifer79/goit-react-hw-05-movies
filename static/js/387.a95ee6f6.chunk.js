"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var t,a,u,c=r(4165),i=r(5861),s=r(9439),o=r(2791),p=r(7689),f=r(4390),l=r(168),d=r(8547),h=d.ZP.div(t||(t=(0,l.Z)(["\n  padding: 15px 10px;\n"]))),g=d.ZP.ul(a||(a=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: ",";\n  :nth-of-type(even) {\n    border: 1px solid ",";\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.colors.bernred})),v=d.ZP.li(u||(u=(0,l.Z)(["\n  max-width: 1200px;\n  margin-left: ",";\n  padding: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n\n  :not(:last-child) {\n    padding: ",";\n  }\n\n  h3 {\n    color: ",";\n  }\n\n  p {\n    text-align: justify;\n  }\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.bernred})),m=r(5510),Z=r(184),x=function(){var n=(0,p.UO)().movieId,e=(0,o.useState)([]),r=(0,s.Z)(e,2),t=r[0],a=r[1],u=(0,o.useState)(!1),l=(0,s.Z)(u,2),d=l[0],x=l[1],w=(0,o.useState)(!1),k=(0,s.Z)(w,2),y=k[0],b=k[1],_=(0,o.useRef)();return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.current&&_.current.abort(),_.current=new AbortController,e.prev=2,x(!0),b(null),e.next=7,(0,f.T0)(n,_.current.signal);case 7:r=e.sent,a(r),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),"ERR_CANCELED"!==e.t0.code&&b(e.t0.message);case 14:return e.prev=14,x(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[d&&(0,Z.jsx)(m.a,{}),y&&(0,Z.jsx)("p",{children:"Not Found"}),!d&&t.length>0&&(0,Z.jsx)(h,{children:(0,Z.jsx)(g,{children:t.map((function(n){var e=n.id,r=n.author,t=n.content;return(0,Z.jsxs)(v,{children:[(0,Z.jsxs)("h3",{children:["Author: ",r]}),(0,Z.jsx)("p",{children:t})]},e)}))})}),!d&&0===t.length&&(0,Z.jsx)("div",{children:"Sorry, there are no reviews for this movie yet."}),";"]})}},4390:function(n,e,r){r.d(e,{Ai:function(){return s},Ni:function(){return o},T0:function(){return f},YJ:function(){return i},g_:function(){return p}});var t=r(4165),a=r(5861),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="c16c869f875a641f65f14ffc799280d5",i=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",{signal:e,params:{api_key:c,language:"en-US"}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie",{signal:r,params:{api_key:c,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return a=n.sent,i=a.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e),{signal:r,params:{api_key:c,language:"en-US"}});case 2:return a=n.sent,i=a.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits"),{signal:r,params:{api_key:c,language:"en-US"}});case 2:return a=n.sent,i=a.data,n.abrupt("return",i.cast);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e,r){var a,i;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews"),{signal:r,params:{api_key:c,language:"en-US",page:1}});case 2:return a=n.sent,i=a.data,n.abrupt("return",i.results);case 5:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.a95ee6f6.chunk.js.map