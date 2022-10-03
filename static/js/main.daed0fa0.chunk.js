(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},17:function(e,n,t){},18:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var i,a,r,o,l,d,s,c,p,u,b,g,m,h,x,f,v=t(0),w=t.n(v),k=t(8),y=t.n(k),j=(t(17),t(3)),O=t(1),E=(t(18),t(2)),C=[{title:"FX holder",description:"This app is a holder for your FX transactions. You can add transactions, delete them and see summary of it all. After you put a rate, your transactions will be recalculated into PLN. It's SPA built with React and Redux, styled with css modules.",link:"/fx_holder",slided:!1},{title:"Management Web Reports",description:"It's a single-page application for generating reports with summary for every day income volumes and others (e.g. volume of active clients, volume of assets, volume of accounts). App was built with React, styled in CSS and is responsive.",link:"/management-web-reports",slided:!1},{title:"Burger Builder",description:"Application for composing your favourite burger. Built with\n                  React, styled in CSS using media queries. This app is a part of\n                  tutorial",link:"/burger_builder",slided:!1},{title:"Polluted Cities",description:"Built with ES6, web app for searching top ten most polluted cities in provided country. Data are provided from public API https://docs.openaq.org/ and cities descriptions come from Wikipedia API.",link:"/polluted_cities/",slided:!1},{title:"Marilyn",description:"Web app based on React and Redux. This app gives you 9 most recently uploaded pictures of Marilyn Monroe from Flickr (Flickr API). It was styled with CSS modules and it is responsive",link:"/marilyn",slided:!1},{title:"Colour Game",description:"Game rules: click colour square which at least has one the same colour naighbour (not diagonnaly) and collect as much points as possible. Clicked squares disappear, all above them move down and missing ones are newly generated. App was built with React and Redux",link:"/colour_game",slided:!1},{title:"Web design",description:"Web development based on provided designs. This page is retina ready with its 2x graphics, with some features made alive with jQuery. There is a video modal built on iframe with overlay. Page is RWD.",link:"/newOne",slided:!1},{title:"Marilyn",description:"Web app based on React and Redux. This app gives you 9 most recently uploaded pictures of Marilyn Monroe from Flickr (Flickr API). It was styled with CSS modules and it is responsive",link:"/marilyn",slided:!1},{title:"Colour Game",description:"Game rules: click colour square which at least has one the same colour naighbour (not diagonnaly) and collect as much points as possible. Clicked squares disappear, all above them move down and missing ones are newly generated. App was built with React and Redux",link:"/colour_game",slided:!1},{title:"Web design",description:"Web development based on provided designs. This page is retina ready with its 2x graphics, with some features made alive with jQuery. There is a video modal built on iframe with overlay. Page is RWD.",link:"/newOne",slided:!1}],S=E.b.div(i||(i=Object(O.a)(["\n  position: relative;\n"]))),R=E.b.div(a||(a=Object(O.a)(["\n  /* width: 240px; */\n  /* height: 120px; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 24px;\n  font-weight: 100;\n  text-align: center;\n  /* background-color: aliceblue; */\n  cursor: pointer;\n  position: fixed;\n  bottom: -130px;\n  right: -150px;\n  transform: rotate(-45deg);\n  /* transition: bottom 2s, right 2s, font-size 2s; */\n  transition-timing-function: ease-in-out;\n  transition: 0.7s;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  /* border-radius: 15px; */\n  background: linear-gradient(\n    125deg,\n    rgba(252, 143, 35, 0.55),\n    rgba(252, 143, 35, 0.4)\n  );\n  backdrop-filter: blur(2px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 10px 20px, rgba(0, 0, 0, 0.13) 0px 6px 6px;\n  box-shadow: rgba(0, 0, 0, 0.8) 0px 30px 90px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n  box-shadow: rgba(0, 0, 0, 0.76) 0px -12px 70px 4px;\n\n  color: rgba(0, 0, 0, 0.99);\n  /* padding: 20px 0; */\n\n  /* &:hover {\n    bottom: -280px;\n    right: -280px;\n    font-size: 32px;\n  } */\n  ","\n"])),function(e){return e.active&&Object(E.a)(r||(r=Object(O.a)(["\n      position: fixed;\n      /* background-color: aquamarine; */\n      /* width: 300px; */\n      /* height: 320px; */\n      bottom: 0px;\n      right: 0px;\n      background: linear-gradient(\n        125deg,\n        rgba(252, 143, 35, 0.65),\n        rgba(252, 143, 35, 0.25)\n      );\n      padding: 20px 0;\n      transform: rotate(0deg);\n      border-radius: 15px;\n      transition-timing-function: ease-in;\n      transition: 0.8s;\n\n      /* &:hover {\n        bottom: 280px;\n        right: 280px;\n        font-size: 32px;\n      } */\n    "])))}),A=E.b.div(o||(o=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  align-items: flex-start;\n  padding: 20px 10px;\n  font-size: 20px;\n"]))),I=E.b.div(l||(l=Object(O.a)(["\n  padding: 0 0 0 20px;\n"]))),T=E.b.div(d||(d=Object(O.a)(["\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n"]))),F=E.b.div(s||(s=Object(O.a)(["\n  /* align-self: flex-start; */\n"]))),P=function(){return w.a.createElement(A,null,"{",z,"}")},z=Object.entries({mobile:"48506145094",email:"stasiak.gregor@gmail.com",linkedIn:"grzegorz.stasiak"}).map(function(e){var n=Object(j.a)(e,2),t=n[0],i=n[1];return w.a.createElement(I,{key:Math.random()},'"'.concat(t,'"'),": ",'"'.concat(i,'"'),",")}),M=function(e){var n=e.active,t=e.handleActive;return w.a.createElement(S,null,w.a.createElement(R,{active:n,onClick:function(){return t()}},w.a.createElement(T,null,w.a.createElement(F,null,"Cl"),"Contact"),w.a.createElement(P,null)))},W=E.b.div(c||(c=Object(O.a)(["\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  /* flex-direction: column;\n  justify-content: space-around; */\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 15px;\n  padding: 30px 0 60px 0;\n  background: linear-gradient(\n    125deg,\n    rgba(255, 255, 255, 0.35),\n    rgba(255, 255, 255, 0)\n  );\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(10px);\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 10px 20px, rgba(0, 0, 0, 0.13) 0px 6px 6px;\n  color: rgba(0, 0, 0, 0.99);\n  font-size: 26px;\n"]))),q=function(e){var n=e.project,t=e.handleClick;return w.a.createElement(W,{onClick:function(){return t(n)}},n.title)},B=E.b.div(p||(p=Object(O.a)(["\n  width: 85%;\n"]))),_=E.b.div(u||(u=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 40px;\n  & :nth-child(1) {\n    grid-template-rows: 2fr 1fr;\n    grid-column: 1 / 4;\n    grid-row: 1 / 3;\n  }\n  & :nth-child(2) {\n    /* grid-column: 4 / 4;\n    grid-row: 2 / 2; */\n  }\n  & :nth-child(6) {\n    grid-column: 3 / 3;\n    grid-row: 3 / 4;\n  }\n  & :nth-child(3) {\n    grid-column: 4 / 4;\n    grid-row: 3 / 3;\n  }\n  & :nth-child(1) {\n    background: rgba(0, 0, 0, 0.7);\n    color: rgba(255, 255, 255, 0.5);\n    grid-gap: 10px;\n    border-radius: 15px;\n    font-size: 32px;\n\n    & :nth-child(1) {\n      background: transparent;\n      /* border: 2px solid black; */\n    }\n  }\n\n  & :nth-child(n + 2) {\n    height: 80px;\n    backdrop-filter: blur(20px);\n    font-size: 24px;\n    justify-content: center;\n    align-items: center;\n\n    &:hover {\n      background: rgba(255, 255, 255, 0.1);\n      cursor: pointer;\n      backdrop-filter: blur(7px);\n    }\n  }\n"]))),G=E.b.div(b||(b=Object(O.a)(["\n  ",";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px;\n"])),W),D=E.b.div(g||(g=Object(O.a)(["\n  border-radius: 10px;\n"]))),L=E.b.div(m||(m=Object(O.a)(["\n"]))),J=E.b.a(h||(h=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 15px;\n  background: rgba(255, 255, 255, 0.03);\n  text-decoration: none;\n  backdrop-filter: blur(1px);\n  /* border: none; */\n"]))),Q=function(e){var n=e.active,t=e.handleActive,i=Object(v.useState)(),a=Object(j.a)(i,2),r=a[0],o=a[1],l=Object(v.useState)(!1),d=Object(j.a)(l,2),s=d[0],c=d[1],p=Object(v.useState)(!1),u=Object(j.a)(p,2),b=u[0],g=u[1],m=Object(v.useState)(""),h=Object(j.a)(m,2),x=h[0],f=h[1],k=function(e){o(e.description),y(e.description,1),f(e.link),console.log(e.link)},y=function(e,n){var t=setInterval(function(){n<e.length?(c(!0),o(e.substring(0,n+1)),n+=1):(console.log("end"),setTimeout(function(){c(!1),g(!0)},1200),clearInterval(t))},30)};return w.a.createElement(B,null,w.a.createElement(_,null,w.a.createElement(G,null,w.a.createElement(D,null,r),w.a.createElement(w.a.Fragment,null,b&&!s?w.a.createElement(J,{href:x,target:"_blank"},w.a.createElement(L,{onClick:function(){}},"GO TO")):"")),C.map(function(e,n){return n>0?w.a.createElement(q,{key:Math.random(),project:e,index:n,handleClick:k}):""})),w.a.createElement(M,{handleActive:t,active:n}))},X=E.b.div(x||(x=Object(O.a)(["\n  width: 85%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));E.b.div(f||(f=Object(O.a)([""])));var N=function(){var e=Object(v.useState)(!1),n=Object(j.a)(e,2),t=n[0],i=n[1];return w.a.createElement(X,null,w.a.createElement(Q,{active:t,handleActive:function(){console.log("clip",t),i(!t)}}))},Y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then(function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),a(e),r(e),o(e)})};y.a.render(w.a.createElement(w.a.StrictMode,null,w.a.createElement(N,null)),document.getElementById("root")),Y()}},[[12,1,2]]]);
//# sourceMappingURL=main.daed0fa0.chunk.js.map