(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),i=a(5),r=a.n(i),s=(a(17),a(3)),o=(a(18),a(19),a(4)),l=a.n(o),j=(l.a.func.isRequired,function(e){var t=e.exit;return Object(c.jsx)("div",{className:"logout",children:Object(c.jsx)("button",{className:"logout__button",onClick:function(){return t(!1)},type:"button",children:Object(c.jsx)("b",{children:"Logout"})})})}),u=(a(22),l.a.func.isRequired,Object(n.memo)((function(e){var t=e.authorizationStatus,a=Object(n.useState)(""),i=Object(s.a)(a,2),r=i[0],o=i[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),u=j[0],b=j[1],d=Object(n.useState)(!1),m=Object(s.a)(d,2),O=m[0],h=m[1],p=Object(n.useCallback)((function(e){e.preventDefault(),"admin"===r&&"admin"===u&&t(!0),h(!0)}),[t,r,u]),x=Object(n.useCallback)((function(e){var t=e.target,a=t.value,c=t.name;"Login"===c&&o(a),"Password"===c&&b(a),h(!1)}),[b,o]);return Object(c.jsxs)("div",{className:"authorization",children:[Object(c.jsxs)("form",{className:"authorization__form",children:[Object(c.jsx)("input",{className:"authorization__item",onChange:x,type:"text",name:"Login",placeholder:"Login"}),Object(c.jsx)("input",{className:"authorization__item",onChange:x,type:"password",name:"Password",placeholder:"Password"}),Object(c.jsx)("button",{className:"authorization__button",onClick:p,type:"submit",children:"Open"})]}),O&&Object(c.jsx)("div",{className:"authorization__error",children:"Incorrectly entered data!"})]})}))),b=a(11),d=(a(23),a(6)),m=a(10),O=a.n(m),h=a.p+"static/media/places.5218e25c.csv",p=(a(24),l.a.arrayOf(l.a.string).isRequired,Object(n.memo)((function(e){var t=e.marker,a=Object(n.useState)(!1),i=Object(s.a)(a,2),r=i[0],o=i[1],l=Object(n.useCallback)((function(){o(!0)}),[o]);return Object(c.jsxs)("div",{children:[Object(c.jsx)(d.d,{position:{lat:Number(t[3]),lng:Number(t[4])},onClick:l}),r&&Object(c.jsx)(d.b,{onCloseClick:function(){return o(!1)},position:{lat:Number(t[3]),lng:Number(t[4])},children:Object(c.jsxs)("div",{className:"marker__info",children:[Object(c.jsx)("div",{className:"marker__title",children:"Installation date"}),t[0],Object(c.jsx)("div",{className:"marker__title",children:"Modified Date"}),t[1],Object(c.jsx)("div",{className:"marker__title",children:"Account Number"}),t[2],Object(c.jsx)("div",{className:"marker__title",children:"Latitude"}),t[3],Object(c.jsx)("div",{className:"marker__title",children:"Longitude"}),t[4],Object(c.jsx)("div",{className:"marker__title",children:"City"}),t[5],Object(c.jsx)("div",{className:"marker__title",children:"ATE Installed Room"}),t[8],Object(c.jsx)("div",{className:"marker__title",children:"Device Type"}),t[9],Object(c.jsx)("div",{className:"marker__title",children:"Room Description"}),t[10]]})})]})}))),x={width:"100vw",height:"100vh"},f={lat:24.30578,lng:54.539402},_=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){O.a.parse(h,{download:!0,complete:function(e){var t=e.data.map((function(e,t){return[].concat(Object(b.a)(e),[t])}));t.splice(0,1),i(t)}})}),[]),Object(c.jsx)("div",{children:Object(c.jsx)(d.c,{googleMapsApiKey:"AIzaSyCMhL1-eTdxyxnpRe9YfpNLlg-G7qMQLQE",children:Object(c.jsx)(d.a,{mapContainerStyle:x,center:f,zoom:7,children:a.map((function(e){return Object(c.jsx)(p,{marker:e},e[11])}))})})})},v=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(c.jsxs)("div",{children:[a&&Object(c.jsx)(j,{exit:i}),a?Object(c.jsx)(_,{}):Object(c.jsx)(u,{authorizationStatus:i})]})};r.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.ec5a8cc8.chunk.js.map