(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/logo.svg"},39:function(e,t,n){e.exports=n(86)},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),c=n.n(l),o=(n(44),n(23)),i=n(9),u=(n(45),n(33)),s=n.n(u),m=n(16),h=n(17),p=n(19),d=n(18),v=n(20),f=(n(46),n(34)),b=n.n(f);var g=n(10),E="ADD_INFO";var O=n(36),j=n.n(O);var w="AUTHORIZE",y="CLEAR_ERROR";function C(e){return{type:w,response:e}}function k(e,t,n){return function(a,r){var l=r().info,c=l.mac,o=l.url;return function(e){var t=e.name,n=e.email,a=e.code,r=e.mac,l=e.url;return j()({method:"post",url:"/api/authorize",data:{name:t,email:n,code:a,mac:r,url:l}})}({name:e,email:t,code:n,mac:c,url:o}).then(function(e){a(C(e.data))}).catch(function(){a(C({validCode:!1}))})}}var N=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={firstname:"",lastname:"",email:"",voucher:""},n.handleChange=function(e){var t=n.props,a=t.dispatch,r=t.error,l=e.target.name,c=e.target.value;"voucher"===l&&(c=function(e,t,n){var a=e.includes("-")===t;return!0===a&&(e=[e.slice(0,t),"-",e.slice(t)].join("")),(e=e.replace(/\D/g,"")).length>5&&!1===a&&(e=[e.slice(0,t),"-",e.slice(t)].join("")),e.length>n&&(e=e.substr(0,n+1)),e}(c,5,10),!0===r&&a({type:y})),n.setState(function(e){return"voucher"===l&&(e.error=!1),e[l]=c,e})},n.handleSubmit=function(e){var t=n.state,a=t.firstname,r=t.lastname,l=t.email,c=t.voucher,o=n.props.dispatch;e.preventDefault(),o(k(a+" "+r,l,c))},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=b.a.parse(this.props.location.search),t={mac:e.id,url:e.url};this.props.dispatch(function(e){return{type:E,info:e}}(t))}},{key:"render",value:function(){var e=this.state,t=e.firstname,n=e.lastname,a=e.email,l=e.voucher,c=this.props.error,o=0===t.length||0===n.length||0===a.length||11!==l.length||!0===c;return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"First name:",r.a.createElement("br",null),r.a.createElement("input",{id:"firstname",type:"text",name:"firstname",value:t,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Last name:",r.a.createElement("br",null),r.a.createElement("input",{id:"lastname",type:"text",name:"lastname",value:n,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("label",null,"E-Mail:",r.a.createElement("br",null),r.a.createElement("input",{id:"email",type:"email",name:"email",value:a,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("label",null,"Voucher:",r.a.createElement("br",null),r.a.createElement("input",{id:"voucher",className:!0===c?"error":"",type:"text",name:"voucher",value:l,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"button",disabled:o,type:"submit",value:"LOGIN"})))}}]),t}(a.Component);var A=Object(i.d)(Object(g.b)(function(e){var t=e.login;return{error:t&&!1===t.validCode}})(N)),R=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){!0===this.props.success&&(window.location=this.props.url)}},{key:"render",value:function(){return!0===this.props.success?(window.location=this.props.url,r.a.createElement("section",null,"Redirecting...")):r.a.createElement("section",null)}}]),t}(a.Component);var x=Object(g.b)(function(e){var t=e.info,n=e.login;return{url:t.url,success:n.success}})(R);var D=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement("br",null),r.a.createElement(i.a,{component:A}),r.a.createElement("br",null),r.a.createElement(i.a,{component:x}))))},S=n(8),I=n(12);var L=Object(S.c)({info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(I.a)({},e,t.info);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(I.a)({},e,t.response);case y:return Object(I.a)({},e,{validCode:!0});default:return e}}}),M=n(38);var T=Object(S.a)(M.a,function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),a}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=Object(S.d)(L,T);c.a.render(r.a.createElement(g.a,{store:W},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.5eb298ba.chunk.js.map
