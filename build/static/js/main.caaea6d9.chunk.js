(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(15),c=t.n(r),u=t(6),o=t(3),i=t(2),l=function(e){var n=e.filter,t=e.handleFilterChange;return Object(a.jsxs)("div",{children:["filter shown with:",Object(a.jsx)("input",{value:n,onChange:t}),Object(a.jsx)("p",{})]})},s=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,u=e.handleNumberChange;return Object(a.jsxs)("form",{onSubmit:n,children:[Object(a.jsxs)("div",{children:["name:",Object(a.jsx)("input",{value:t,onChange:r})]}),Object(a.jsxs)("div",{children:["number:",Object(a.jsx)("input",{value:c,onChange:u})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.name,t=e.number,r=e.removalHandler;return Object(a.jsxs)("p",{children:[n," ",t," ",Object(a.jsx)("button",{onClick:r,children:"delete"})]})},j=function(e){var n=e.persons,t=e.filter,r=e.removalHandler;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(a.jsx)(d,{name:e.name,number:e.number,removalHandler:function(){return r(e.id,e.name)}},e.id)}))},b=function(e){var n=e.message;return null===n?null:Object(a.jsx)("div",{className:"notification",children:n})},f=t(4),h=t.n(f),m="http://localhost:3001/api/persons",O=function(){return h.a.get(m).then((function(e){return e.data}))},v=function(e){return h.a.post(m,e).then((function(e){return e.data}))},p=function(e){h.a.delete("".concat(m,"/").concat(e))},x=function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},g=(t(39),function(){var e=Object(i.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],c=Object(i.useState)(""),d=Object(o.a)(c,2),f=d[0],h=d[1],m=Object(i.useState)(""),g=Object(o.a)(m,2),w=g[0],C=g[1],N=Object(i.useState)(""),y=Object(o.a)(N,2),S=y[0],k=y[1],H=Object(i.useState)(null),P=Object(o.a)(H,2),T=P[0],D=P[1];Object(i.useEffect)((function(){O().then((function(e){r(e)}))}),[]);var E=function(e){for(var n=0;n<t.length;n++)if(t[n].name===e)return!0;return!1};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(b,{message:T}),Object(a.jsx)(l,{filter:S,handleFilterChange:function(e){k(e.target.value)}}),Object(a.jsx)("h2",{children:"add a new"}),Object(a.jsx)(s,{addPerson:function(e){e.preventDefault();var n={name:f,number:w};if(console.log(E(f)),E(f)){var a=t.find((function(e){return e.name===n.name})),c=a.id,o=Object(u.a)(Object(u.a)({},a),{},{number:n.number});if(!window.confirm("".concat(f," is already added to phonebook. Do you want to replace the old number with a new one?")))return;x(c,o).then((function(e){r(t.filter((function(e){return e!==a})).concat(o)),D("".concat(f,"'s number was updated")),setTimeout((function(){D(null)}),3e3)}))}else v(n).then((function(e){r(t.concat(e)),D("Person ".concat(f," was added")),setTimeout((function(){D(null)}),3e3)}));h(""),C("")},newName:f,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},newNumber:w,handleNumberChange:function(e){console.log(e.target.value),C(e.target.value)}}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(j,{persons:t,filter:S,removalHandler:function(e,n){window.confirm("are you sure you want to delete ".concat(n))&&(p(e),r(t.filter((function(n){return n.id!==e}))),D("".concat(n," was deleted")),setTimeout((function(){D(null)}),3e3))}})]})});c.a.render(Object(a.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.caaea6d9.chunk.js.map