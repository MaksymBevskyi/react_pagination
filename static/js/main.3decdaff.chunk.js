(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a.n(c),r=a(4),i=a(1);function l(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var s=a(0),o=function(e){var t=e.currentPage,a=e.itemStart,c=e.itemEnd,n=e.totalItems;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(a+1," - ").concat(c," of ").concat(n,")")})]})},j=function(e){var t=e.perPage,a=e.handlerPerPage;return Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:a,children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]})},d=a(2),u=a.n(d),m=function(e){var t=e.total,a=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(t/a),i=l(1,r),o=1===c,j=c===r;return Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:u()("page-item",{disabled:1===c}),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":o,onClick:function(){o||n(c-1)},children:"\xab"})}),i.map((function(e){return Object(s.jsx)("li",{className:u()("page-item",{active:e===c}),children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(s.jsx)("li",{className:u()("page-item",{disabled:j}),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===r,onClick:function(){j||n(c+1)},children:"\xbb"})})]})},b=function(e){var t=e.items;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:e},e)}))})},h=(a(11),l(1,42).map((function(e){return"Item ".concat(e)}))),g=h.length,p=function(){var e=Object(i.useState)(5),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),d=l[0],u=l[1],p=a*d-a,O=Math.min(p+a,g),x=h.slice(p,O);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o,{currentPage:d,itemStart:p,itemEnd:O,totalItems:g}),Object(s.jsx)(j,{perPage:a,handlerPerPage:function(e){c(Number(e.target.value)),u(1)}}),Object(s.jsx)(m,{total:g,perPage:a,currentPage:d,onPageChange:function(e){u(e)}}),Object(s.jsx)(b,{items:x})]})};n.a.render(Object(s.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3decdaff.chunk.js.map