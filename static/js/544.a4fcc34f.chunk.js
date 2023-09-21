"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{4672:function(n,r,e){e.d(r,{Z:function(){return m}});var t,o,i,a=e(7689),c=e(168),u=e(8547),s=e(1087),l=u.ZP.ul(t||(t=(0,c.Z)(["\n  margin-top: ",";\n  margin-left: ",";\n"])),(function(n){return n.theme.spacing(7.5)}),(function(n){return n.theme.spacing(20)})),f=u.ZP.li(o||(o=(0,c.Z)(["\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.spacing(3)})),p=(0,u.ZP)(s.rU)(i||(i=(0,c.Z)(["\n  font-family: 'Bad Script';\n  font-weight: 500;\n  font-size: 16px;\n  color: ",";\n  transition: color 300ms linear;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.bernred})),d=e(3640),h=e(184),m=function(n){var r=n.movies,e=(0,a.TH)();return(0,h.jsx)(l,{children:r.map((function(n){var r=n.id,t=n.title,o=n.name;return(0,h.jsx)(f,{children:(0,h.jsxs)(p,{to:"/movies/".concat(r),state:{from:e},children:[(0,h.jsx)(d.IK,{}),t||o]})},r)}))})}},9544:function(n,r,e){e.r(r);var t=e(4165),o=e(5861),i=e(9439),a=e(2791),c=e(4390),u=e(4672),s=e(7398),l=e(5510),f=e(184);r.default=function(){var n=(0,a.useState)([]),r=(0,i.Z)(n,2),e=r[0],p=r[1],d=(0,a.useState)(!1),h=(0,i.Z)(d,2),m=h[0],g=h[1],x=(0,a.useState)(null),v=(0,i.Z)(x,2),Z=v[0],b=v[1];return(0,a.useEffect)((function(){var n=new AbortController,r=function(){var r=(0,o.Z)((0,t.Z)().mark((function r(){var e;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,g(!0),b(null),r.next=5,(0,c.YJ)({signal:n.signal});case 5:e=r.sent,p(e),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),b(r.t0.message);case 12:return r.prev=12,g(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){n.abort()}}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.b,{children:"Trending today"}),m&&(0,f.jsx)(l.a,{}),Z&&(0,f.jsx)("p",{children:"Error loading movies. Please try again later."}),(0,f.jsxs)(s.i,{children:[(0,f.jsxs)("strong",{children:["Be yourself",(0,f.jsx)("br",{})," - everyone else is already taken."]}),(0,f.jsx)("br",{}),(0,f.jsx)("span",{children:"Oscar Wilde"})]}),!m&&e.length>0&&(0,f.jsx)(u.Z,{movies:e})]})}},7398:function(n,r,e){e.d(r,{b:function(){return c},i:function(){return u}});var t,o,i=e(168),a=e(8547),c=a.ZP.h1(t||(t=(0,i.Z)(["\n  margin: 30px 0 0 20px;\n\n  font-family: 'Bad Script';\n  --interval: 1000ms;\n  display: block;\n  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),\n    0 0 40px var(--color3), 0 0 80px var(--color4);\n  will-change: filter, color;\n  filter: saturate(60%);\n\n  animation: flicker steps(100) var(--interval) 1000ms infinite;\n  color: azure;\n  --color1: azure;\n  --color2: aqua;\n  --color3: dodgerblue;\n  --color4: blue;\n\n  @keyframes flicker {\n    50% {\n      color: ",";\n      filter: saturate(200%) hue-rotate(20deg);\n    }\n  }\n"])),(function(n){return n.theme.colors.white})),u=a.ZP.p(o||(o=(0,i.Z)(["\n  padding: ",";\n\n  font-family: 'Bad Script';\n  font-size: 36px;\n  text-align: center;\n  color: ",";\n  position: absolute;\n  top: 40%;\n  right: 10%;\n\n  span {\n    font-size: 28px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.white}))},3640:function(n,r,e){e.d(r,{Dx:function(){return z},FE:function(){return P},Hr:function(){return A},IK:function(){return L},LI:function(){return T},Q4:function(){return B},XZ:function(){return Y},Zb:function(){return S},bB:function(){return E},bU:function(){return _},ck:function(){return I},eL:function(){return q},g9:function(){return j},kI:function(){return U},tl:function(){return Q},v:function(){return C}});var t,o,i,a,c,u,s,l,f,p,d,h,m,g,x,v,Z=e(168),b=e(8547),w=e(1087),k=e(9126),y=e(203),P=b.ZP.section(t||(t=(0,Z.Z)(["\n  padding: ",";\n"])),(function(n){return n.theme.spacing(5)})),j=(0,b.ZP)(w.OL)(o||(o=(0,Z.Z)(["\n  padding: 7px 10px;\n  margin-left: ",";\n  margin-bottom: ",";\n\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n  color: ",";\n  border: transparent;\n  border-radius: ",";\n  font-weight: 600;\n  box-shadow: 0 0 13px 3px ",";\n  transition: color 300ms linear, box-shadow 300ms linear;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    box-shadow: 0 0 13px 7px ",";\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred})),S=b.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: ",";\n  padding: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),_=b.ZP.div(a||(a=(0,Z.Z)(["\n  width: 270px;\n  overflow: hidden;\n\n  img {\n    border: 1px solid ",";\n    border-radius: ",";\n  }\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.radii.md})),U=b.ZP.div(c||(c=(0,Z.Z)(["\n  width: 500px;\n  text-align: justify;\n"]))),z=b.ZP.h2(u||(u=(0,Z.Z)(["\n  margin-bottom: ",";\n\n  font-family: 'Bad Script';\n  font-size: 28px;\n  --interval: 5000ms;\n  display: block;\n  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),\n    0 0 40px var(--color3), 0 0 80px var(--color4);\n  will-change: filter, color;\n  filter: saturate(60%);\n\n  animation: flicker steps(100) var(--interval) 1000ms infinite;\n  color: lightpink;\n  --color1: pink;\n  --color2: orangered;\n  --color3: red;\n  --color4: magenta;\n\n  @keyframes flicker {\n    50% {\n      color: ",";\n      filter: saturate(200%) hue-rotate(20deg);\n    }\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.colors.white})),B=b.ZP.ul(s||(s=(0,Z.Z)(["\n  h3 {\n    margin-bottom: ",";\n\n    font-family: 'Bad Script';\n    font-size: 22px;\n    --interval: 5000ms;\n    display: block;\n    text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),\n      0 0 40px var(--color3), 0 0 80px var(--color4);\n    will-change: filter, color;\n    filter: saturate(60%);\n\n    animation: flicker steps(100) var(--interval) 1s infinite;\n    color: lightpink;\n    --color1: pink;\n    --color2: orangered;\n    --color3: red;\n    --color4: magenta;\n\n    @keyframes flicker {\n      50% {\n        color: ",";\n        filter: saturate(200%) hue-rotate(20deg);\n      }\n    }\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.colors.white})),I=b.ZP.li(l||(l=(0,Z.Z)(["\n  p span {\n    padding-left: ",";\n    padding-right: ",";\n    margin-left: ",";\n\n    font-weight: 900;\n    vertical-align: middle;\n    color: ",";\n    width: 50px;\n    height: 20px;\n    border-radius: ",";\n    background-color: ",";\n    box-shadow: 0 0 20px 2px ",";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.spacing(2.5)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.spacing(10)})),L=(0,b.ZP)(k.Y22)(f||(f=(0,Z.Z)(["\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(8)})),C=b.ZP.div(p||(p=(0,Z.Z)(["\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(10)})),E=b.ZP.h3(d||(d=(0,Z.Z)(["\n  padding-left: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),Q=b.ZP.ul(h||(h=(0,Z.Z)(["\n  display: flex;\n  gap: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(15)})),T=(0,b.ZP)(w.rU)(m||(m=(0,Z.Z)(["\n  padding: 8px 5px;\n\n  text-align: center;\n  border: solid 1px ",";\n  border-radius: ",";\n  width: 125px;\n  display: block;\n  transition: color 300ms linear, box-shadow 300ms linear;\n\n  &:hover {\n    color: ",";\n    box-shadow: 0 0 13px 3px ",";\n  }\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred})),Y=(0,b.ZP)(y.XGu)(g||(g=(0,Z.Z)(["\n  vertical-align: sub;\n  height: 20px;\n  width: 20px;\n"]))),q=(0,b.ZP)(y.eQQ)(x||(x=(0,Z.Z)(["\n  vertical-align: sub;\n  height: 20px;\n  width: 20px;\n"]))),A=b.ZP.div(v||(v=(0,Z.Z)(["\n  border-top: 1px solid ",";\n  box-shadow: 0 0 13px 3px ",";\n"])),(function(n){return n.theme.colors.bernred}),(function(n){return n.theme.colors.bernred}))},4390:function(n,r,e){e.d(r,{Ai:function(){return u},Ni:function(){return s},T0:function(){return f},YJ:function(){return c},g_:function(){return l}});var t=e(4165),o=e(5861),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a="c16c869f875a641f65f14ffc799280d5",c=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(){var r,e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day",{params:{api_key:a,language:"en-US"}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{api_key:a,language:"en-US",query:r,include_adult:!1,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),s=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(r){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(r),{params:{api_key:a,language:"en-US"}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(r){var e,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(r,"/credits"),{params:{api_key:a,language:"en-US"}});case 2:return e=n.sent,o=e.data,n.abrupt("return",o.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,t.Z)().mark((function n(r){var e,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(r,"/reviews"),{params:{api_key:a,language:"en-US",page:1}});case 2:return e=n.sent,o=e.data,n.abrupt("return",o.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.a4fcc34f.chunk.js.map