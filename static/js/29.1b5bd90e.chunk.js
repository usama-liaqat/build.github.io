(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[29],{1075:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(17)).default)(l.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");a.default=r},1113:function(e,a,t){"use strict";t.r(a);var n=t(15),l=t(0),r=t.n(l),c=t(396),m=t(912),o=t(29),u=t(18),i=t(9),s=t(2),d=t(6),E=t(67),f=t(900),p=t(1075),v=t.n(p),g=Object(c.a)((function(e){return{root:{},toolbar:{"& > * + *":{marginLeft:e.spacing(1)}},deleteButton:{color:e.palette.white,backgroundColor:d.a.red[600],"&:hover":{backgroundColor:d.a.red[900]}},deleteIcon:{marginRight:e.spacing(1)}}})),b=function(e){var a=e.order,t=e.className,n=Object(i.a)(e,["order","className"]),l=g();return r.a.createElement("div",Object.assign({},n,{className:Object(s.a)(l.root,t)}),r.a.createElement(m.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(m.a,{item:!0},r.a.createElement(E.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Orders"),r.a.createElement(E.a,{component:"h1",variant:"h3"},"Order #",a.id.split("-").shift())),r.a.createElement(m.a,{item:!0},r.a.createElement(f.a,{className:l.deleteButton,variant:"contained"},r.a.createElement(v.a,{className:l.deleteIcon}),"Delete"))))},h=t(19),O=t(5),j=t.n(O),N=t(893),M=t(907),L=t(897),y=t(894),C=t(939),z=t(940),D=t(941),x=t(942),H=t(899),I=t(914),_=t(908),k=t(960),R=t.n(k),P=t(982),S=t.n(P),V=Object(c.a)((function(e){return{root:{},content:{padding:0},actions:{flexDirection:"column",alignItems:"flex-start","& > * + *":{marginLeft:0}},buttonIcon:{marginRight:e.spacing(1)}}})),w=function(e){var a=e.order,t=e.className,c=Object(i.a)(e,["order","className"]),m=V(),o=["Canceled","Completed","Rejected"],u=Object(l.useState)(o[0]),d=Object(n.a)(u,2),E=d[0],p=d[1];return r.a.createElement(N.a,Object.assign({},c,{className:Object(s.a)(m.root,t)}),r.a.createElement(M.a,{title:"Order info"}),r.a.createElement(L.a,null),r.a.createElement(y.a,{className:m.content},r.a.createElement(C.a,null,r.a.createElement(z.a,null,r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Customer"),r.a.createElement(x.a,null,r.a.createElement(H.a,{component:h.a,to:"/management/customers/1"},a.customer.name),r.a.createElement("div",null,a.customer.address),r.a.createElement("div",null,a.customer.city),r.a.createElement("div",null,a.customer.country))),r.a.createElement(D.a,{selected:!0},r.a.createElement(x.a,null,"ID"),r.a.createElement(x.a,null,"#",a.id.split("-").shift())),r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Ref"),r.a.createElement(x.a,null,a.ref)),r.a.createElement(D.a,{selected:!0},r.a.createElement(x.a,null,"Date"),r.a.createElement(x.a,null,j()(a.created_at).format("DD/MM/YYYY HH:MM"))),r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Promotion Code"),r.a.createElement(x.a,null,a.promoCode?a.promoCode:"N/A")),r.a.createElement(D.a,{selected:!0},r.a.createElement(x.a,null,"Amount"),r.a.createElement(x.a,null,a.currency,a.value)),r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Status"),r.a.createElement(x.a,null,r.a.createElement(I.a,{fullWidth:!0,name:"option",onChange:function(e){e.persist(),p(e.target.value)},select:!0,SelectProps:{native:!0},value:E,variant:"outlined"},o.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))))))),r.a.createElement(_.a,{className:m.actions},r.a.createElement(f.a,null,r.a.createElement(R.a,{className:m.buttonIcon}),"Edit"),r.a.createElement(f.a,null,r.a.createElement(S.a,{className:m.buttonIcon}),"Resend invoice")))},B=t(37),Y=t.n(B),A=t(943),J=Object(c.a)((function(){return{root:{},content:{padding:0},inner:{minWidth:700}}})),W=function(e){var a=e.order,t=e.className,n=Object(i.a)(e,["order","className"]),l=J();return r.a.createElement(N.a,Object.assign({},n,{className:Object(s.a)(l.root,t)}),r.a.createElement(M.a,{title:"Order items"}),r.a.createElement(L.a,null),r.a.createElement(y.a,{className:l.content},r.a.createElement(Y.a,null,r.a.createElement("div",{className:l.inner},r.a.createElement(C.a,null,r.a.createElement(A.a,null,r.a.createElement(D.a,null,r.a.createElement(x.a,null,"Description"),r.a.createElement(x.a,null,"Billing Cycle"),r.a.createElement(x.a,null,"Status"),r.a.createElement(x.a,null,"Amount"))),r.a.createElement(z.a,null,a.items.map((function(e){return r.a.createElement(D.a,{key:e.id},r.a.createElement(x.a,null,e.name," x ",e.cuantity),r.a.createElement(x.a,null,e.billing),r.a.createElement(x.a,null,e.status),r.a.createElement(x.a,null,e.currency,e.value))}))))))))},T=Object(c.a)((function(e){return{root:{padding:e.spacing(3)},container:{marginTop:e.spacing(3)}}})),q=function(){var e=T(),a=Object(l.useState)(null),t=Object(n.a)(a,2),c=t[0],i=t[1];return Object(l.useEffect)((function(){var e=!0;return o.a.get("/api/orders/1").then((function(a){e&&i(a.data.order)})),function(){e=!1}}),[]),c?r.a.createElement(u.j,{className:e.root,title:"Order Management Details"},r.a.createElement(b,{order:c}),r.a.createElement(m.a,{className:e.container,container:!0,spacing:3},r.a.createElement(m.a,{item:!0,md:4,xl:3,xs:12},r.a.createElement(w,{order:c})),r.a.createElement(m.a,{item:!0,md:8,xl:9,xs:12},r.a.createElement(W,{order:c})))):null};t.d(a,"default",(function(){return q}))},960:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(17)).default)(l.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=r},982:function(e,a,t){"use strict";var n=t(16);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(17)).default)(l.default.createElement("path",{d:"M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"}),"ReceiptOutlined");a.default=r}}]);
//# sourceMappingURL=29.1b5bd90e.chunk.js.map