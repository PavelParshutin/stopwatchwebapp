(this.webpackJsonpstopwatchapp=this.webpackJsonpstopwatchapp||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var c=n(4),s=n.n(c),a=n(18),i=n.n(a),r=(n(24),n(17)),u=n(35),o=n(36),b=n(31),j=n(30),l=n(32),f=n(33),O=n(19),p=n(34),d=(n(25),n(3));function h(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)("stop"),i=Object(r.a)(a,2),h=i[0],v=i[1];Object(c.useEffect)((function(){var t=new u.a;return Object(o.a)(1e3).pipe(Object(j.a)(t)).subscribe((function(){"start"===h&&s((function(t){return t+1e3}))})),function(){t.next(),t.complete()}}),[h]),Object(c.useEffect)((function(){var t=Object(b.a)(m.current,"click");t.pipe(Object(l.a)(t.pipe(Object(f.a)(300))),Object(O.a)((function(t){return t.length})),Object(p.a)((function(t){return 2===t}))).subscribe((function(){return v("pause")}))}),[]);var m=Object(c.useRef)(null);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"timer",children:[" ",new Date(n).toISOString().slice(11,19)]}),Object(d.jsxs)("div",{className:"btnBlock",children:[Object(d.jsx)("button",{className:"btn",onClick:function(){"start"===h?(v("stop"),s(0)):v("start")},children:"start/stop"}),Object(d.jsx)("button",{className:"btn",onClick:function(){s(0)},children:"Reset"}),Object(d.jsx)("button",{className:"btn",ref:m,children:"Wait"})]})]})}var v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.d241e01a.chunk.js.map