(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[25],{1083:function(e,a,t){"use strict";var n=t(1),c=t(4),r=t(0),o=t.n(r),l=(t(7),t(2)),i=t(8),s=t(391),m=t(903),d=t(804),u=t(942),p=t(927),g=t(67),h=t(964),b=t(965),E=t(26),f=t(790),v=o.a.createElement(b.a,null),O=o.a.createElement(h.a,null),P=o.a.createElement(h.a,null),j=o.a.createElement(b.a,null),y=o.a.forwardRef((function(e,a){var t=e.backIconButtonProps,r=e.count,l=e.nextIconButtonProps,i=e.onChangePage,s=e.page,m=e.rowsPerPage,d=Object(c.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),u=Object(E.a)();return o.a.createElement("div",Object(n.a)({ref:a},d),o.a.createElement(f.a,Object(n.a)({onClick:function(e){i(e,s-1)},disabled:0===s,color:"inherit"},t),"rtl"===u.direction?v:O),o.a.createElement(f.a,Object(n.a)({onClick:function(e){i(e,s+1)},disabled:s>=Math.ceil(r/m)-1,color:"inherit"},l),"rtl"===u.direction?P:j))})),k=function(e){var a=e.from,t=e.to,n=e.count;return"".concat(a,"-").concat(t," of ").concat(n)},x=[10,25,50,100],w=o.a.forwardRef((function(e,a){var t,r=e.ActionsComponent,i=void 0===r?y:r,h=e.backIconButtonProps,b=e.classes,E=e.className,f=e.colSpan,v=e.component,O=void 0===v?u.a:v,P=e.count,j=e.labelDisplayedRows,w=void 0===j?k:j,C=e.labelRowsPerPage,I=void 0===C?"Rows per page:":C,N=e.nextIconButtonProps,R=e.onChangePage,B=e.onChangeRowsPerPage,S=e.page,M=e.rowsPerPage,z=e.rowsPerPageOptions,L=void 0===z?x:z,A=e.SelectProps,H=void 0===A?{}:A,V=Object(c.a)(e,["ActionsComponent","backIconButtonProps","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);O!==u.a&&"td"!==O||(t=f||1e3);var D=H.native?"option":m.a;return o.a.createElement(O,Object(n.a)({className:Object(l.a)(b.root,E),colSpan:t,ref:a},V),o.a.createElement(p.a,{className:b.toolbar},o.a.createElement("div",{className:b.spacer}),L.length>1&&o.a.createElement(g.a,{color:"inherit",variant:"body2",className:b.caption},I),L.length>1&&o.a.createElement(d.a,Object(n.a)({classes:{select:b.select,icon:b.selectIcon},input:o.a.createElement(s.a,{className:Object(l.a)(b.input,b.selectRoot)}),value:M,onChange:B},H),L.map((function(e){return o.a.createElement(D,{className:b.menuItem,key:e,value:e},e)}))),o.a.createElement(g.a,{color:"inherit",variant:"body2",className:b.caption},w({from:0===P?0:S*M+1,to:Math.min(P,(S+1)*M),count:P,page:S})),o.a.createElement(i,{className:b.actions,backIconButtonProps:h,count:P,nextIconButtonProps:N,onChangePage:R,page:S,rowsPerPage:M})))}));a.a=Object(i.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{top:1},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(w)},1118:function(e,a,t){"use strict";t.r(a);var n=t(15),c=t(0),r=t.n(c),o=t(396),l=t(29),i=t(18),s=t(9),m=t(2),d=t(912),u=t(67),p=t(900),g=Object(o.a)((function(){return{root:{}}})),h=function(e){var a=e.className,t=Object(s.a)(e,["className"]),n=g();return r.a.createElement("div",Object.assign({},t,{className:Object(m.a)(n.root,a)}),r.a.createElement(d.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},r.a.createElement(d.a,{item:!0},r.a.createElement(u.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Management"),r.a.createElement(u.a,{component:"h1",variant:"h3"},"Orders")),r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{color:"primary",variant:"contained"},"Add order"))))},b=t(19),E=t(5),f=t.n(E),v=t(37),O=t.n(v),P=t(6),j=t(893),y=t(907),k=t(897),x=t(894),w=t(939),C=t(943),I=t(941),N=t(942),R=t(959),B=t(940),S=t(908),M=t(1083),z=Object(o.a)((function(e){return{root:{},filterButton:{marginRight:e.spacing(2)},content:{padding:0},inner:{minWidth:1150},actions:{padding:e.spacing(0,1),justifyContent:"flex-end"}}})),L=function(e){var a=e.className,t=e.orders,o=Object(s.a)(e,["className","orders"]),l=z(),d=Object(c.useState)([]),g=Object(n.a)(d,2),h=g[0],E=g[1],v=Object(c.useState)(0),L=Object(n.a)(v,2),A=L[0],H=L[1],V=Object(c.useState)(10),D=Object(n.a)(V,2),T=D[0],Y=D[1],$={canceled:P.a.grey[600],pending:P.a.orange[600],completed:P.a.green[600],rejected:P.a.red[600]};return r.a.createElement("div",Object.assign({},o,{className:Object(m.a)(l.root,a)}),r.a.createElement(u.a,{color:"textSecondary",gutterBottom:!0,variant:"body2"},t.length," Records found. Page ",A+1," of"," ",Math.ceil(t.length/T)),r.a.createElement(j.a,null,r.a.createElement(y.a,{action:r.a.createElement(i.e,null),title:"Orders"}),r.a.createElement(k.a,null),r.a.createElement(x.a,{className:l.content},r.a.createElement(O.a,null,r.a.createElement("div",{className:l.inner},r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement(I.a,null,r.a.createElement(N.a,{padding:"checkbox"},r.a.createElement(R.a,{checked:h.length===t.length,color:"primary",indeterminate:h.length>0&&h.length<t.length,onChange:function(e){var a=e.target.checked?t.map((function(e){return e.id})):[];E(a)}})),r.a.createElement(N.a,null,"Ref"),r.a.createElement(N.a,null,"Customer"),r.a.createElement(N.a,null,"Method"),r.a.createElement(N.a,null,"Total"),r.a.createElement(N.a,null,"Status"),r.a.createElement(N.a,{align:"right"},"Actions"))),r.a.createElement(B.a,null,t.slice(0,T).map((function(e){return r.a.createElement(I.a,{key:e.id,selected:-1!==h.indexOf(e.id)},r.a.createElement(N.a,{padding:"checkbox"},r.a.createElement(R.a,{checked:-1!==h.indexOf(e.id),color:"primary",onChange:function(a){return function(e,a){var t=h.indexOf(a),n=[];-1===t?n=n.concat(h,a):0===t?n=n.concat(h.slice(1)):t===h.length-1?n=n.concat(h.slice(0,-1)):t>0&&(n=n.concat(h.slice(0,t),h.slice(t+1))),E(n)}(0,e.id)},value:-1!==h.indexOf(e.id)})),r.a.createElement(N.a,null,e.payment.ref,r.a.createElement(u.a,{variant:"body2"},f()(e.created_at).format("DD MMM YYYY | hh:mm"))),r.a.createElement(N.a,null,e.customer.name),r.a.createElement(N.a,null,e.payment.method),r.a.createElement(N.a,null,e.payment.currency,e.payment.total),r.a.createElement(N.a,null,r.a.createElement(i.g,{color:$[e.payment.status],variant:"outlined"},e.payment.status)),r.a.createElement(N.a,{align:"right"},r.a.createElement(p.a,{color:"primary",component:b.a,size:"small",to:"/management/orders/1",variant:"outlined"},"View")))}))))))),r.a.createElement(S.a,{className:l.actions},r.a.createElement(M.a,{component:"div",count:t.length,onChangePage:function(e,a){H(a)},onChangeRowsPerPage:function(e){Y(e.target.value)},page:A,rowsPerPage:T,rowsPerPageOptions:[5,10,25]}))),r.a.createElement(i.t,{selected:h}))};L.defaultProps={orders:[]};var A=L,H=Object(o.a)((function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)}}})),V=function(){var e=H(),a=Object(c.useState)([]),t=Object(n.a)(a,2),o=t[0],s=t[1];return Object(c.useEffect)((function(){var e=!0;return l.a.get("/api/orders").then((function(a){e&&s(a.data.orders)})),function(){e=!1}}),[]),r.a.createElement(i.j,{className:e.root,title:"Orders Management List"},r.a.createElement(h,null),r.a.createElement(i.q,null),r.a.createElement(A,{className:e.results,orders:o}))};t.d(a,"default",(function(){return V}))},959:function(e,a,t){"use strict";var n=t(1),c=t(4),r=t(0),o=t.n(r),l=(t(7),t(2)),i=t(228),s=t(68),m=Object(s.a)(o.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),d=Object(s.a)(o.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=t(14),p=Object(s.a)(o.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=t(10),h=t(8),b=o.a.createElement(d,null),E=o.a.createElement(m,null),f=o.a.createElement(p,null),v=o.a.forwardRef((function(e,a){var t=e.checkedIcon,r=void 0===t?b:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,u=e.icon,p=void 0===u?E:u,h=e.indeterminate,v=void 0!==h&&h,O=e.indeterminateIcon,P=void 0===O?f:O,j=e.inputProps,y=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return o.a.createElement(i.a,Object(n.a)({type:"checkbox",checkedIcon:v?P:r,classes:{root:Object(l.a)(s.root,s["color".concat(Object(g.a)(d))],v&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(n.a)({"data-indeterminate":v},j),icon:v?P:p,ref:a},y))}));a.a=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(v)},964:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(68);a.a=Object(r.a)(c.a.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},965:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(68);a.a=Object(r.a)(c.a.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=25.1396b328.chunk.js.map