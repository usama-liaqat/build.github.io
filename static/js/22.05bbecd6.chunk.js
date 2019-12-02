(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[22],{1098:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(15),o=a(0),l=a.n(o),i=a(396),c=a(6),s=a(912),u=a(900),d=a(897),m=a(893),p=a(907),g=a(914),f=a(938),h=a(908),b=a(11),y=a(18),v=a(9),O=a(2),E=a(892),j=a(894),x=a(797),N=a(799),C=a(915),k=a(916),w=a(947),S=function(e){var t=function(t){return!!e.conflicts&&!!e.conflicts[t]},a=function(t){return e.conflicts&&e.conflicts[t]?e.conflicts[t]:""};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:"Create User"}),l.a.createElement(j.a,null,l.a.createElement(s.a,{container:!0,spacing:4},l.a.createElement(s.a,{item:!0,md:6,xs:12},l.a.createElement(g.a,{disabled:e.loading,error:t("firstName"),fullWidth:!0,helperText:a("firstName"),label:"First name",name:"firstName",onChange:e.handleChange,required:!0,value:e.values.firstName,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:6,xs:12},l.a.createElement(g.a,{disabled:e.loading,error:t("lastName"),fullWidth:!0,helperText:a("lastName"),label:"Last name",name:"lastName",onChange:e.handleChange,required:!0,value:e.values.lastName,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:6,xs:12},l.a.createElement(g.a,{disabled:e.loading,error:t("email"),fullWidth:!0,helperText:a("email"),label:"Email Address",name:"email",onChange:e.handleChange,required:!0,type:"email",value:e.values.email,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:6,xs:12},l.a.createElement(g.a,{disabled:e.loading,error:t("phoneNumber"),fullWidth:!0,helperText:a("phoneNumber"),label:"Phone Number",name:"phoneNumber",onChange:e.handleChange,required:!0,type:"text",value:e.values.phoneNumber,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:12,xs:12},l.a.createElement(g.a,{disabled:e.loading,fullWidth:!0,label:"Password",name:"password",onChange:e.handleChange,required:!0,type:"password",value:e.values.password,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:12,xs:12},l.a.createElement(x.a,{component:"fieldset"},l.a.createElement(N.a,{component:"legend"},"Select User Type"),l.a.createElement(C.a,{"aria-label":"role",name:"role",onChange:e.handleChange,row:!0,value:e.values.role},l.a.createElement(k.a,{control:l.a.createElement(w.a,{color:"primary",required:!0}),disabled:e.loading,label:"Buyer",labelPlacement:"end",value:"buyer"}),l.a.createElement(k.a,{control:l.a.createElement(w.a,{color:"primary",required:!0}),disabled:e.loading,label:"Seller",labelPlacement:"end",value:"seller"})))))))},P=(a(5),function(e){var t={address_details:{name:"Address Details",fields:{locality:{grid:{md:12,xs:12},input:{type:"text",placeholder:"Locality",name:"locality"}},streetAddress:{grid:{md:12,xs:12},input:{type:"text",placeholder:"Street Address",name:"streetAddress"}},town:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Town",name:"town"}},state:{grid:{md:6,xs:12},input:{type:"text",placeholder:"State",name:"state"}},country:{grid:{md:6,xs:12},input:{type:"select",placeholder:"Country",name:"country",options:[{key:"pak",value:"Pakistan"}]}},postalCode:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Postal Code",name:"postalCode"}}}},OrdDetails:{name:"Organization Details",fields:{OrgName:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Organization Name",name:"OrgName"}},EmployeeId:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Employee Id",name:"EmployeeId"}},logo:{grid:{md:6,xs:12},input:{type:"file",placeholder:"Logo",name:"logo"}}}},legal_details:{name:"Legal Details",fields:{dotNumber:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Dot Number",name:"dotNumber"}},proLicence:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Professional Licence",name:"proLicence"}},insurancepolicy:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Insurance Policy",name:"insurancepolicy"}},region:{grid:{md:6,xs:12},input:{type:"text",placeholder:"Region",name:"region"}},SSN:{grid:{md:6,xs:12},input:{type:"text",placeholder:"SSN",name:"SSN"}},DOB:{grid:{md:6,xs:12},input:{type:"date",placeholder:"Date of Birth",name:"DOB"}}}}};return l.a.createElement(l.a.Fragment,null,Object.keys(t).map((function(a){var n=t[a],r=n.fields,o=n.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:o}),l.a.createElement(d.a,null),l.a.createElement(j.a,null,l.a.createElement(s.a,{container:!0,spacing:4},Object.keys(r).map((function(t){var a,n,o,i=r[t];return a=i.grid,n=e.values,"text"===(o=i.input).type?l.a.createElement(s.a,{item:!0,md:a.md,xs:a.xs},l.a.createElement(g.a,{disabled:e.loading,fullWidth:!0,label:o.placeholder,name:o.name,onChange:e.handleChange,type:o.type,value:n[o.name],variant:"outlined"})):"file"===o.type?l.a.createElement(s.a,{item:!0,md:a.md,xs:a.xs},l.a.createElement(g.a,{disabled:e.loading,fullWidth:!0,label:o.placeholder,name:o.name,onChange:e.handleChange,type:o.type,value:n[o.name],variant:"outlined"})):"select"===o.type?l.a.createElement(s.a,{item:!0,md:a.md,xs:a.xs},l.a.createElement(g.a,{fullWidth:!0,label:o.placeholder,name:o.name,onChange:e.handleChange,select:!0,SelectProps:{native:!0},value:n[o.name]||o.options[0],variant:"outlined"},o.options.map((function(e){return l.a.createElement("option",{key:e.key,value:e.key},e.value)})))):"date"===o.type?l.a.createElement(s.a,{item:!0,md:a.md,xs:a.xs},l.a.createElement(g.a,{disabled:e.loading,fullWidth:!0,label:o.placeholder,name:o.name,onChange:e.handleChange,type:o.type,value:n[o.name],variant:"outlined"})):void 0})))))})))}),R=function(e){var t={bankName:{type:"text",placeholder:"Bank Name",name:"bankName"},accountTitle:{type:"text",placeholder:"Account Title",name:"accountTitle"},accountNumber:{type:"text",placeholder:"Account Number",name:"accountNumber"},routingNumber:{type:"text",placeholder:"Routing Number",name:"routingNumber"}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{title:"Banking Details"}),l.a.createElement(d.a,null),l.a.createElement(j.a,null,l.a.createElement(s.a,{container:!0,spacing:4},Object.keys(t).map((function(a){var n=t[a];return l.a.createElement(s.a,{item:!0,md:6,xs:12},l.a.createElement(g.a,{disabled:e.loading,fullWidth:!0,label:n.placeholder,name:n.name,onChange:e.handleChange,type:n.type,value:e.values[n.name],variant:"outlined"}))})))))},D=a(229),M=a(20),_=a(69);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=Object(i.a)((function(e){return{root:{},saveButton:{color:e.palette.white,backgroundColor:c.a.green[600],"&:hover":{backgroundColor:c.a.green[900]}}}})),T=(Object(_.b)((function(e){return{response:e.users.create}}),(function(e){return{onCreateUser:function(t){return e(M.d(t))}}}))((function(e){var t=e.className,a=Object(v.a)(e,["className"]),i=W(),c=Object(o.useState)({}),s=Object(r.a)(c,2),p=s[0],g=s[1],f=function(e){e.persist(),g(L({},p,Object(n.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)))},b=function(e){return p[e]?p[e]:""},y=null,j=null;e.response.loading?y=l.a.createElement("div",null,l.a.createElement(E.a,null),l.a.createElement("br",null)):j=l.a.createElement(u.a,{className:i.saveButton,type:"submit",variant:"contained"},"Create User");var x=null;e.response.error?x=l.a.createElement(D.a,{message:e.response.errorMessage,variant:"error"}):e.response.success&&(x=l.a.createElement(D.a,{message:e.response.successMessage,variant:"success"}));var N=null;return"seller"===p.role&&(N=l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{conflicts:e.response.conflicts,handleChange:f,loading:e.response.loading,values:p}),l.a.createElement(R,{conflicts:e.response.conflicts,handleChange:f,loading:e.response.loading,values:p}))),l.a.createElement(m.a,Object.assign({},a,{className:Object(O.a)(i.root,t)}),x,l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={phoneNumber:b("phoneNumber"),email:b("email"),password:b("password"),firstName:b("firstName"),lastName:b("lastName"),role:[b("role")]},n={locality:b("locality"),OrgName:b("OrgName"),EmployeeId:b("EmployeeId"),postalCode:b("postalCode"),town:b("town"),country:b("country"),dotNumber:b("dotNumber"),proLicence:b("proLicence"),insurancepolicy:b("insurancepolicy"),logo:b("logo"),region:b("region"),streetAddress:b("streetAddress"),SSN:b("SSN"),DOB:b("DOB"),sellerBankingDetails:{accountTitle:b("accountTitle"),bankName:b("bankName"),accountNumber:b("accountNumber"),routingNumber:b("routingNumber")}};"seller"===p.role&&(a=L({},a,{sellerInfo:L({},n)})),e.onCreateUser(a)}},y,l.a.createElement(S,{conflicts:e.response.conflicts,handleChange:f,loading:e.response.loading,values:p}),N,l.a.createElement(d.a,null),l.a.createElement(h.a,null,j)))})),Object(i.a)((function(){return{root:{}}})),a(67)),B=Object(i.a)((function(){return{root:{}}})),I=function(e){var t=e.className,a=Object(v.a)(e,["className"]),n=B();return l.a.createElement("div",Object.assign({},a,{className:Object(O.a)(n.root,t)}),l.a.createElement(T.a,{component:"h2",gutterBottom:!0,variant:"overline"},e.title),l.a.createElement(T.a,{component:"h1",variant:"h3"},e.description))},F=a(967),U=a(226),q=a(227),G=a(956),z=a(955),K=a(957),V=function(e){function t(){var e,a;Object(U.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(G.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).googleMapRef=l.a.createRef(),a.state={marker:null,circle:null},a.removeCircleMap=function(){var e=a.state.marker,t=a.state.circle;e.setMap(null),t.setMap(null),a.setState({marker:e,circle:t})},a.createGoogleMap=function(){var e=new window.google.maps.Map(a.googleMapRef.current,{zoom:16,center:{lat:43.642567,lng:-79.387054},disableDefaultUI:!0});return e.addListener("click",(function(e){var t=e.latLng;if(a.state.marker){var n=a.state.marker,r=a.state.circle;r.setMap(null),n.setPosition(t),r=a.createCircle(n),a.setState({marker:n,circle:r}),a.props.handleRegion(n.getPosition())}else{var o=a.createMarker(t),l=a.createCircle(o);a.setState({marker:o,circle:l}),a.props.handleRegion(o.getPosition())}})),e},a.createMarker=function(e){return new window.google.maps.Marker({position:e,map:a.googleMap})},a.createCircle=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.marker,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.values.radius;return new window.google.maps.Circle({strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,map:a.googleMap,center:e.getPosition(),radius:1e3*t})},a}return Object(K.a)(t,e),Object(q.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=".concat(this.props.apiKey,"&libraries=places"),document.body.appendChild(t),t.addEventListener("load",(function(){e.googleMap=e.createGoogleMap(),e.setState({marker:e.marker})}))}},{key:"componentWillReceiveProps",value:function(e){if(this.props!==e&&this.props.values.radius!==e.values.radius&&this.state.marker)if(0===e.values.radius)this.removeCircleMap();else{var t=this.state.marker,a=this.state.circle;a.setMap(null),a=this.createCircle(t,e.values.radius),this.setState({marker:t,circle:a})}}},{key:"render",value:function(){var e={width:this.props.width,height:this.props.height};return l.a.createElement("div",{id:"google-map",ref:this.googleMapRef,style:e})}}]),t}(o.Component);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=Object(i.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},divider:{backgroundColor:c.a.grey[300]},content:{marginTop:e.spacing(3)},marginLeft:{marginLeft:e.spacing(2)}}})),X=Object(_.b)((function(e){return{auth:e.session.authentication}}))((function(e){var t=Q(),a={description:"",radius:0,center:null,searchRadius:0},i={description:{md:5,xs:12},radius:{md:3,xs:12},searchRadius:{md:3,xs:12},button:null},c=Object(o.useState)(a),v=Object(r.a)(c,2),O=v[0],E=v[1],j=Object(o.useState)(i),x=Object(r.a)(j,2),N=x[0],C=x[1],k=function(e){return e.persist(),"radius"===e.target.name&&Number(e.target.value)>10?null:"searchRadius"===e.target.name&&Number(e.target.value)>10?null:void E(H({},O,Object(n.a)({},e.target.name,"radius"===e.target.name||"searchRadius"===e.target.name?Number(e.target.value):e.target.value)))};Object(o.useEffect)((function(){O.description&&""!==O.description&&O.radius&&0!==O.radius&&O.center&&O.radius>O.searchRadius?(console.log(O),C(H({},N,{description:{md:4,xs:12},radius:{md:3,xs:12},searchRadius:{md:3,xs:12},button:l.a.createElement(s.a,{item:!0,md:2,xs:12},l.a.createElement(u.a,{size:"large",type:"submit",variant:"contained"},"Submit"))}))):C(i)}),[O]);return l.a.createElement(y.j,{className:t.root,title:"Settings"},l.a.createElement(I,{description:"Create Operation Region",title:"Operation Regions"}),l.a.createElement(d.a,{className:t.divider}),l.a.createElement("div",{className:t.content},l.a.createElement(m.a,null,l.a.createElement(p.a,{title:"Configurations"}),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),F.a.createRegion({data:H({},O,{center:{latitide:O.center.lat,longitude:O.center.lng}}),headers:e.auth.headers,setConfig:function(e){return C(e)},defaultConfig:i,setValues:function(e){return E(e)},defaultValues:a})}},l.a.createElement(s.a,{className:t.marginLeft,container:!0,spacing:4},l.a.createElement(s.a,{item:!0,md:N.description.md,xs:N.description.xs},l.a.createElement(g.a,{fullWidth:!0,label:"Description",name:"description",onChange:k,required:!0,value:O.description,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:N.radius.md,xs:N.radius.xs},l.a.createElement(g.a,{fullWidth:!0,InputProps:{endAdornment:l.a.createElement(f.a,{position:"end"},"Km")},label:"Radius",name:"radius",onChange:k,type:"number",value:O.radius,variant:"outlined"})),l.a.createElement(s.a,{item:!0,md:N.searchRadius.md,xs:N.searchRadius.xs},l.a.createElement(g.a,{fullWidth:!0,InputProps:{endAdornment:l.a.createElement(f.a,{position:"end"},"Km")},label:"Search Radius",name:"searchRadius",onChange:k,type:"number",value:O.searchRadius,variant:"outlined"})),N.button))),l.a.createElement(m.a,null,l.a.createElement(p.a,{title:"Google Map"}),l.a.createElement(V,{apiKey:b.c.GOOGLE_MAP_API,handleRegion:function(e){E(H({},O,{center:e.toJSON()}))},height:400,values:O,width:"100%"}),l.a.createElement(d.a,null),l.a.createElement(h.a,null))))}));a.d(t,"default",(function(){return X}))},955:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},956:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return(r="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function o(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}a.d(t,"a",(function(){return o}))},957:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return r}))},967:function(e,t,a){"use strict";var n=a(15),r=a(13),o=a(226),l=a(227),i=a(11);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"getRegionsList",value:function(e){var t=e.state,a=e.setState,r=e.headers;Promise.all([Object(i.b)({method:i.a.regions.count.method,url:i.a.regions.count.url,headers:r}),Object(i.b)({method:i.a.regions.get.method,url:i.a.regions.get.url,params:{filter:{where:{},fields:{title:!0,radius:!0,center:!0,description:!0,searchRadius:!0},offset:t.offset,limit:t.limit,skip:t.offset}},headers:s({},r)})]).then((function(e){var r=Object(n.a)(e,2),o=r[0],l=r[1];a({count:o.data.count,regions:l.data,pages:Math.ceil(o.data.count/t.limit)}),console.log(o.data.count,l.data)})).catch((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];console.log(a.response,r.response)}))}},{key:"createRegion",value:function(e){var t=e.data,a=e.headers,n=e.defaultConfig,r=e.setConfig,o=e.defaultValues,l=e.setValues,c={method:i.a.regions.post.method,url:i.a.regions.post.url,data:t,headers:a};Object(i.b)(c).then((function(e){console.log("Success",e.data),r(n),l(o)})).catch((function(e){console.log("Error",e.response,e)}))}},{key:"deleteRegion",value:function(e){var t=e.state,a=e.setState,n=e.headers,r=e.id,o={method:i.a.regions.delete_by_id.method,url:i.a.regions.delete_by_id.getAbsoluteUrl(r),headers:n};Object(i.b)(o).then((function(e){console.log("Success",e.data),function(e){var n=t.regions.filter((function(t){return t.title!==e}));a({regions:n})}(r)})).catch((function(e){console.log("Error",e.response,e)}))}},{key:"getRegion",value:function(e){var t=e.id,a=e.headers,n=e.success,r=e.error,o={method:i.a.regions.get_by_id.method,url:i.a.regions.get_by_id.getAbsoluteUrl(t),headers:a};Object(i.b)(o).then((function(e){console.log("Success",e.data),n(e.data)})).catch((function(e){r(e),console.log("Error",e.response,e)}))}},{key:"updateRegion",value:function(e){var t=e.id,a=e.data,n=e.headers,r=e.success,o=e.error,l={method:i.a.regions.patch_by_id.method,url:i.a.regions.patch_by_id.getAbsoluteUrl(t),headers:n,data:a};Object(i.b)(l).then((function(e){r(e.data)})).catch((function(e){o(e)}))}}]),e}();a.d(t,"a",(function(){return u}))}}]);
//# sourceMappingURL=22.05bbecd6.chunk.js.map