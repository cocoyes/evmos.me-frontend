(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{8448:function(t,e,n){"use strict";n.d(e,{M:function(){return a}});var r=n(1440),o=n(3808);n(7294);var a=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});o.Ts&&(a.displayName="Center")},9345:function(t,e,n){"use strict";n.d(e,{r:function(){return d},P:function(){return m}});var r=n(63),o=n(1440),a=n(3808),i=n(6678),l=n(4651),s=n(7294);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}var d=(0,r.G)(((t,e)=>{var{area:n,templateAreas:r,gap:a,rowGap:i,columnGap:l,column:d,row:f,autoFlow:m,autoRows:p,templateRows:g,autoColumns:h,templateColumns:x}=t,w=u(t,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),C={display:"grid",gridArea:n,gridTemplateAreas:r,gridGap:a,gridRowGap:i,gridColumnGap:l,gridAutoColumns:h,gridColumn:d,gridRow:f,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:g,gridTemplateColumns:x};return s.createElement(o.m$.div,c({ref:e,__css:C},w))}));function f(t){return(0,i.XQ)(t,(t=>"auto"===t?"auto":"span "+t+"/span "+t))}a.Ts&&(d.displayName="Grid");var m=(0,r.G)(((t,e)=>{var{colSpan:n,colStart:r,colEnd:a,rowEnd:i,rowSpan:d,rowStart:m}=t,p=u(t,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),g=(0,l.YU)({gridColumn:f(n),gridRow:f(d),gridColumnStart:r,gridColumnEnd:a,gridRowStart:m,gridRowEnd:i});return s.createElement(o.m$.div,c({ref:e,__css:g},p))}))},7086:function(t,e,n){"use strict";n.d(e,{M:function(){return c}});var r=n(63),o=n(3808),a=n(6678),i=n(7294),l=n(9345);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var c=(0,r.G)(((t,e)=>{var n,r,{columns:c,spacingX:u,spacingY:d,spacing:f,minChildWidth:m}=t,p=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["columns","spacingX","spacingY","spacing","minChildWidth"]),g=m?(r=m,(0,a.XQ)(r,(t=>{return(0,o.Ft)(t)?null:"repeat(auto-fit, minmax("+(e=t,((0,o.hj)(e)?e+"px":e)+", 1fr))");var e}))):(n=c,(0,a.XQ)(n,(t=>(0,o.Ft)(t)?null:"repeat("+t+", minmax(0, 1fr))")));return i.createElement(l.r,s({ref:e,gap:f,columnGap:u,rowGap:d,templateColumns:g},p))}));o.Ts&&(c.displayName="SimpleGrid")},5253:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/erc20",function(){return n(2489)}])},2489:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var r=n(5893),o=n(1539),a=n(58),i=n(7086),l=n(8448),s=n(9444),c=n(7294),u=n(9583),d=n(520),f=n(9227),m=n(6766),p=n(4239),g=n(5902);function h(){return(0,r.jsx)(g.Z,{content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{content:"ERC20"})," balances.",(0,r.jsx)("br",{}),"(All your ERC20 tokens registered on Evmos.me)",(0,r.jsx)("br",{}),"Read the ",(0,r.jsx)(s.r,{href:"/faq",children:"FAQ"})," to know more about the tokens listed here."]})})}function x(){return(0,r.jsx)(a.Z,{viewBox:"0 0 40 35",mt:14,boxSize:10,color:"teal.200",children:(0,r.jsx)(u.$$w,{fill:"currentColor",size:"35px"})})}function w(t){var e=t.globalState;return(0,r.jsx)(i.M,{columns:{base:1,xl:e.state.balanceCosmos.length>2?2:1},spacing:"20",mt:16,mx:"auto",children:e.state.balanceERC20.length>0?e.state.balanceERC20.map((function(t,e){return(0,r.jsx)(m.A,{name:t.name,role:"Current ".concat(t.name," balance - ").concat(t.address),content:[(0,r.jsx)(d.Z,{content:"".concat(t.balance," ").concat(t.symbol)},"".concat(t.symbol,"key"))],avatar:(0,o.ff)("./ethereum-1.svg","./ethereum-1-white.svg")},e)})):(0,r.jsx)(m.A,{name:"No balance",role:"There is no balance for this wallet.",content:[(0,r.jsx)(l.M,{textAlign:"center",children:"There are no tokens for the current wallet, send coins or login with another wallet!"},"nobalancetext"),(0,r.jsx)(l.M,{textAlign:"center",children:(0,r.jsxs)("span",{children:["Read the ",(0,r.jsx)(s.r,{href:"/faq",children:"FAQ"})," to know more about the tokens listed here."]})},"nobalancetext2")]},"no_balance")})}var C=function(){var t=(0,c.useContext)(f.h);return(0,r.jsx)(m.Z,{title:"Your ERC20 tokens",subtitle:[(0,r.jsx)(h,{},"sub")],content:[(0,r.jsx)(w,{globalState:t},"grid")],icon:[(0,r.jsx)(x,{},"footer")]})},v=n(7150),b=function(){return(0,r.jsx)(v.Z,{element:[(0,r.jsx)(C,{},"erc20")],section:"erc20"})}},6766:function(t,e,n){"use strict";n.d(e,{A:function(){return c},Z:function(){return u}});var r=n(5893),o=n(4096),a=n(8017),i=n(1440),l=n(1539),s=n(8322);function c(t){var e=t.name,n=t.role,a=t.content,c=t.avatar,u=t.iconComponents;return(0,r.jsxs)(o.k,{h:"fit-content",minW:[10,450,500,600,400,600],boxShadow:"lg",maxW:"640px",direction:{base:"column-reverse",md:"row"},width:"full",rounded:"xl",p:10,justifyContent:"space-between",position:"relative",bg:(0,l.ff)("white","gray.800"),_after:{content:'""',position:"absolute",height:"21px",width:"29px",left:"35px",top:"-10px",backgroundSize:"cover",backgroundImage:"url(\"data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%234FD1C5'/%3E%3C/svg%3E\")"},_before:{content:'""',position:"absolute",zIndex:"-1",height:"full",maxW:"640px",width:"full",filter:"blur(40px)",transform:"scale(0.98)",backgroundRepeat:"no-repeat",backgroundSize:"cover",top:0,left:0},children:[(0,r.jsxs)(o.k,{direction:"column",textAlign:"left",justifyContent:"space-between",w:"full",children:[(0,r.jsx)(i.m$.div,{fontFamily:"monospace",fontWeight:"medium",fontSize:["md","2xl"],pb:4,children:a}),(0,r.jsxs)(i.m$.p,{fontFamily:"Work Sans",fontWeight:"bold",fontSize:14,children:[e,(0,r.jsxs)(i.m$.span,{fontFamily:"Inter",fontWeight:"medium",color:"gray.500",children:[" ","- ",n]})]})]},"flex2"),c?(0,r.jsx)(s.E,{src:c,height:"80px",width:"80px",alignSelf:"center",m:{base:"0 0 35px 0",md:"0 0 0 50px"}},"avatar"):(0,r.jsx)(r.Fragment,{children:u})]},"flex")}function u(t){var e=t.title,n=t.subtitle,s=t.content,c=t.icon;return(0,r.jsxs)(o.k,{textAlign:"center",pt:3,justifyContent:"center",direction:"column",width:"full",children:[(0,r.jsxs)(a.xu,{width:{base:"full",sm:"lg",lg:"xl"},margin:"auto",children:[(0,r.jsx)(i.m$.h1,{py:5,fontSize:48,fontFamily:"Work Sans",fontWeight:"bold",color:(0,l.ff)("gray.700","gray.50"),children:e}),n]}),s,(0,r.jsx)(a.xu,{children:c})]})}},4239:function(t,e,n){"use strict";var r=n(5893),o=n(1440),a=n(1539);e.Z=function(t){var e=t.content;return(0,r.jsx)(o.m$.strong,{color:(0,a.ff)("gray.700","gray.50"),children:e})}},520:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(5893);function o(t){var e=t.content;return(0,r.jsx)("div",{style:{overflowWrap:"anywhere"},children:e})}}},function(t){t.O(0,[774,415,228,445,937,13,617,874,876,797,550,525,888,179],(function(){return e=5253,t(t.s=e);var e}));var e=t.O();_N_E=e}]);