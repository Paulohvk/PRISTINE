_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{PW5Z:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data/market",function(){return n("j6OS")}])},j6OS:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),c=n("HaE+"),s=n("nKUr"),i=n("1OyB"),o=n("vuIU"),l=n("Ji7U"),d=n("md7G"),u=n("foSv"),p=n("q1tI"),b=n("+6Dn"),h=n("z8k1"),j=n("5Yp1"),O=n("6/hJ"),m=n("RB2s"),f=n("wDBh");function v(){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(r.a.mark((function e(){var t,n,a,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f.a.providers.Web3Provider(m.a.currentProvider),n=["event BuyData(address recipient, uint transferValue, address indexed addressFrom, uint indexed dataID, string indexed timestamp)"],a=new f.a.Contract(O.a._address,n,t),(c=a.filters.BuyData()).fromBlock=0,c.toBlock="latest",e.next=8,t.getBlockNumber();case 8:return s=e.sent,e.next=11,t.getLogs(c);case 11:return i=e.sent.reverse(),e.abrupt("return",{blockNumber:s,events:i});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=Object(u.a)(e);if(t){var r=Object(u.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var k=function(e){Object(l.a)(n,e);var t=N(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderTransactions",value:function(){var e={color:"#33364d"},t=this.props.decodedEvents.map((function(t){console.log(1);var n=function(e){return(new f.a.utils.AbiCoder).decode(["address","uint"],e.data)}(t),a=n[0],r=parseInt(n[1]._hex,16),c="0x"+t.topics[1].substr(26,64).toUpperCase(),i=parseInt(t.topics[2],16);return{header:t.transactionHash,meta:"Block: "+t.blockNumber,description:Object(s.jsx)(b.a,{verticalAlign:"middle",children:Object(s.jsx)(b.a.Row,{children:Object(s.jsxs)(b.a.Column,{floated:"left",width:13,children:[Object(s.jsxs)("div",{style:e,children:["Buyer: ",c]}),Object(s.jsxs)("div",{style:e,children:["Seller: ",a]}),Object(s.jsxs)("div",{style:e,children:["Data ID: ",i]}),Object(s.jsxs)("div",{style:e,children:["Price: ",r," Tokens"]})]})})}),fluid:!0,color:"yellow"}}));return Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{verticalAlign:"middle",children:Object(s.jsx)(b.a.Row,{children:Object(s.jsxs)(b.a.Column,{floated:"left",width:13,children:[Object(s.jsx)("h3",{children:"This page shows all the data traded in the market."}),Object(s.jsxs)("h3",{children:["There are currently ",this.props.blockNumber," blocks in the blockchain."]}),Object(s.jsxs)("h3",{children:["Smart contract address: ",this.props.decodedEvents[0].address,"."]}),Object(s.jsxs)("h3",{children:["Event signature: ",this.props.decodedEvents[0].topics[0],"."]}),Object(s.jsxs)("h3",{children:["Showing a total of ",this.props.decodedEvents.length," events."]})]})})}),Object(s.jsx)(h.a.Group,{items:t})]})}},{key:"render",value:function(){return Object(s.jsx)(j.a,{children:Object(s.jsx)("div",{children:this.renderTransactions()})})}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,n=t.blockNumber,a=t.events,e.abrupt("return",{blockNumber:n,decodedEvents:a});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(p.Component);t.default=k},z8k1:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("wx14"),r=n("dI71"),c=n("iuhU"),s=(n("17x9"),n("q1tI")),i=n.n(s),o=n("ZeOK"),l=n("ICNK"),d=n("Y53p"),u=n("H+2d"),p=n("5XkN"),b=n("MZgk");function h(e){var t=e.children,n=e.className,r=e.content,s=e.textAlign,p=Object(c.a)(Object(o.d)(s),"description",n),b=Object(l.a)(h,e),j=Object(d.a)(h,e);return i.a.createElement(j,Object(a.a)({},b,{className:p}),u.a.isNil(t)?r:t)}h.handledProps=["as","children","className","content","textAlign"],h.propTypes={};var j=h;function O(e){var t=e.children,n=e.className,r=e.content,s=e.textAlign,p=Object(c.a)(Object(o.d)(s),"header",n),b=Object(l.a)(O,e),h=Object(d.a)(O,e);return i.a.createElement(h,Object(a.a)({},b,{className:p}),u.a.isNil(t)?r:t)}O.handledProps=["as","children","className","content","textAlign"],O.propTypes={};var m=O;function f(e){var t=e.children,n=e.className,r=e.content,s=e.textAlign,p=Object(c.a)(Object(o.d)(s),"meta",n),b=Object(l.a)(f,e),h=Object(d.a)(f,e);return i.a.createElement(h,Object(a.a)({},b,{className:p}),u.a.isNil(t)?r:t)}f.handledProps=["as","children","className","content","textAlign"],f.propTypes={};var v=f;function x(e){var t=e.children,n=e.className,r=e.content,s=e.description,p=e.extra,h=e.header,O=e.meta,f=e.textAlign,N=Object(c.a)(Object(o.a)(p,"extra"),Object(o.d)(f),"content",n),k=Object(l.a)(x,e),y=Object(d.a)(x,e);return u.a.isNil(t)?u.a.isNil(r)?i.a.createElement(y,Object(a.a)({},k,{className:N}),Object(b.d)(m,(function(e){return{content:e}}),h,{autoGenerateKey:!1}),Object(b.d)(v,(function(e){return{content:e}}),O,{autoGenerateKey:!1}),Object(b.d)(j,(function(e){return{content:e}}),s,{autoGenerateKey:!1})):i.a.createElement(y,Object(a.a)({},k,{className:N}),r):i.a.createElement(y,Object(a.a)({},k,{className:N}),t)}x.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],x.propTypes={};var N=x,k=n("zmn3");function y(e){var t=e.centered,n=e.children,r=e.className,s=e.content,p=e.doubling,b=e.items,h=e.itemsPerRow,j=e.stackable,O=e.textAlign,m=Object(c.a)("ui",Object(o.a)(t,"centered"),Object(o.a)(p,"doubling"),Object(o.a)(j,"stackable"),Object(o.d)(O),Object(o.g)(h),"cards",r),f=Object(l.a)(y,e),v=Object(d.a)(y,e);if(!u.a.isNil(n))return i.a.createElement(v,Object(a.a)({},f,{className:m}),n);if(!u.a.isNil(s))return i.a.createElement(v,Object(a.a)({},f,{className:m}),s);var x=Object(k.a)(b,(function(e){var t,n=null!=(t=e.key)?t:[e.header,e.description].join("-");return i.a.createElement(w,Object(a.a)({key:n},e))}));return i.a.createElement(v,Object(a.a)({},f,{className:m}),x)}y.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],y.propTypes={};var g=y,w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleClick=function(e){var n=t.props.onClick;n&&n(e,t.props)},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,n=e.centered,r=e.children,s=e.className,b=e.color,h=e.content,j=e.description,O=e.extra,m=e.fluid,f=e.header,v=e.href,x=e.image,k=e.link,y=e.meta,g=e.onClick,w=e.raised,E=Object(c.a)("ui",b,Object(o.a)(n,"centered"),Object(o.a)(m,"fluid"),Object(o.a)(k,"link"),Object(o.a)(w,"raised"),"card",s),C=Object(l.a)(t,this.props),P=Object(d.a)(t,this.props,(function(){if(g)return"a"}));return u.a.isNil(r)?u.a.isNil(h)?i.a.createElement(P,Object(a.a)({},C,{className:E,href:v,onClick:this.handleClick}),p.a.create(x,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(j||f||y)&&i.a.createElement(N,{description:j,header:f,meta:y}),O&&i.a.createElement(N,{extra:!0},O)):i.a.createElement(P,Object(a.a)({},C,{className:E,href:v,onClick:this.handleClick}),h):i.a.createElement(P,Object(a.a)({},C,{className:E,href:v,onClick:this.handleClick}),r)},t}(s.Component);w.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],w.propTypes={},w.Content=N,w.Description=j,w.Group=g,w.Header=m,w.Meta=v}},[["PW5Z",0,2,1,3,4,6,5,7,11]]]);