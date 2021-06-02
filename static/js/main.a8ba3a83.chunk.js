(this["webpackJsonpvending-project"]=this["webpackJsonpvending-project"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(8),s=a.n(r),o=(a(13),a(2)),u=(a(14),a(3)),i=a(21),l=(a(15),a(0)),m=function(e){var t=e.categories,a=e.command,n=e.setCategories,r=e.setExecutedCommands,s=Object(c.useState)(""),m=Object(o.a)(s,2),d=m[0],j=m[1],b=Object(c.useState)(""),p=Object(o.a)(b,2),f=p[0],h=p[1],O=Object(c.useState)(""),x=Object(o.a)(O,2),g=x[0],y=x[1],v=Object(c.useState)(!1),N=Object(o.a)(v,2),C=N[0],_=N[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"category conteiner",onSubmit:function(e){e.preventDefault(),t.find((function(e){return e.name===d}))||""===d||""===f||!Number.isInteger(+g)&&""!==g||+g<0||+f<=0?_(!0):(!function(){var e={name:d,price:+Number(f).toFixed(2),amount:+g,id:Object(i.a)()};""===g&&(e.amount=0),n((function(t){return[].concat(Object(u.a)(t),[e])}))}(),function(){var e={type:a,id:Object(i.a)(),categoryName:d,categoryPrice:+Number(f).toFixed(2),categoryAmount:+g};""===g&&(e.categoryAmount=0),r((function(t){return[].concat(Object(u.a)(t),[e])}))}(),j(""),h(""),y(""))},children:[Object(l.jsxs)("p",{className:"category__command command",children:[">"," ",a]}),Object(l.jsx)("input",{className:"category__name input",type:"text",placeholder:"Category name",value:d,onChange:function(e){_(!1),j(e.target.value)}}),Object(l.jsx)("input",{className:"category__price input",type:"number",placeholder:"Price",value:f,onChange:function(e){_(!1),isNaN(+e.target.value)||h(e.target.value)}}),Object(l.jsx)("input",{className:"category__amount input",type:"number",placeholder:"Amount",value:g,onChange:function(e){_(!1),isNaN(+e.target.value)||y(e.target.value)}}),Object(l.jsx)("button",{className:"category__button button",type:"submit",children:"Execute"})]}),C&&function(){switch(!0){case""===d:return Object(l.jsx)("p",{className:"error",children:"Please provide a name for category!"});case""===f:return Object(l.jsx)("p",{className:"error",children:"Please provide a price for category!"});case t.some((function(e){return e.name===d})):return Object(l.jsx)("p",{className:"error",children:"The category already exists!"});case!Number.isInteger(+g)&&""!==g:return Object(l.jsx)("p",{className:"error",children:"Please provide integer number from amount!"});default:return Object(l.jsx)("p",{className:"error",children:"Please check that all fields are filled"})}}()]})},d=function(e){var t=e.categories,a=e.command,n=e.setCategories,r=e.setExecutedCommands,s=Object(c.useState)("default"),m=Object(o.a)(s,2),d=m[0],j=m[1],b=Object(c.useState)(""),p=Object(o.a)(b,2),f=p[0],h=p[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),g=x[0],y=x[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"item item--parameters conteiner commands-interface",onSubmit:function(e){e.preventDefault(),""!==f&&Number.isInteger(+f)&&"default"!==d?(n((function(e){return e.map((function(e){return e.id===d&&(e.amount+=+f),e}))})),function(){var e=t.find((function(e){return e.id===d})),c={type:a,id:Object(i.a)(),categoryName:e.name,categoryPrice:e.price,categoryAmount:e.amount};r((function(e){return[].concat(Object(u.a)(e),[c])}))}(),h("")):y(!0)},children:[Object(l.jsxs)("p",{className:"command",children:[">"," ",a]}),Object(l.jsxs)("select",{className:"input",value:d,onChange:function(e){y(!1),j(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:"Select category"}),t.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(l.jsx)("input",{className:"input",type:"number",value:f,onChange:function(e){y(!1),isNaN(+e.target.value)||h(e.target.value)}}),Object(l.jsx)("button",{className:"button",type:"submit",children:"Execute"})]}),g&&function(){switch(!0){case"default"===d:return Object(l.jsx)("p",{className:"error",children:"Please select a category!"});case!Number.isInteger(+f)&&""!==f:return Object(l.jsx)("p",{className:"error",children:"Please provide integer number from amount!"});default:return Object(l.jsx)("p",{className:"error",children:"Please provide amount!"})}}()]})},j=function(e){var t=e.command,a=e.categories,c=e.setCategories,n=e.setExecutedCommands;return Object(l.jsxs)("div",{className:"conteiner one-command",children:[Object(l.jsxs)("p",{className:"command one-command__title",children:[">"," ",t]}),Object(l.jsx)("button",{className:"button",type:"button",onClick:function(){!function(){var e=a.filter((function(e){return 0===e.amount})),c={type:t,id:Object(i.a)(),emptyCategories:e};n((function(e){return[].concat(Object(u.a)(e),[c])}))}(),c((function(e){return e.filter((function(e){return e.amount>0}))}))},children:"Execute"})]})},b=function(e){var t=e.command,a=e.categories,c=e.setExecutedCommands;return Object(l.jsxs)("div",{className:"conteiner one-command",children:[Object(l.jsxs)("p",{className:"command one-command__title",children:[">"," ",t]}),Object(l.jsx)("button",{className:"button list__button",type:"button",onClick:function(){var e={type:t,id:Object(i.a)(),categories:a};c((function(t){return[].concat(Object(u.a)(t),[e])}))},children:"Execute"})]})},p={firstYear:2015,lastYear:2030},f=["01","02","03","04","05","06","07","08","09","10","11","12"],h=function(e){var t=e.year,a=e.month,c=e.day,n=e.setIsError,r=e.setYear,s=e.setMonth,o=e.setDay;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("select",{value:t,className:"input",onChange:function(e){n(!1),r(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:"Select year"}),function(e){for(var t=[],a=e.firstYear;a<=e.lastYear;a++)t.push(a);return t.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))}(p)]}),Object(l.jsxs)("select",{value:a,className:"input",onChange:function(e){n(!1),s(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:"Select month"}),f.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))]}),Object(l.jsxs)("select",{value:c,className:"input",onChange:function(e){n(!1),o(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:"Select day"}),function(e){var t,a=[];switch(e){case"01":case"03":case"05":case"07":case"08":case"10":case"12":t=31;break;case"04":case"06":case"09":case"11":t=30;break;case"02":t=28;break;default:t="Select month first"}if(Number.isInteger(t)){for(var c=1;c<=t;c++)c<10?a.push("0".concat(c)):a.push("".concat(c));return a.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))}return a.push(t),a.map((function(e){return Object(l.jsx)("option",{value:"default",children:e},e)}))}(a)]})]})},O=function(e){var t=e.categories,a=e.command,n=e.setCategories,r=e.setExecutedCommands,s=Object(c.useState)("default"),m=Object(o.a)(s,2),d=m[0],j=m[1],b=Object(c.useState)(!1),p=Object(o.a)(b,2),f=p[0],O=p[1],x=Object(c.useState)("default"),g=Object(o.a)(x,2),y=g[0],v=g[1],N=Object(c.useState)("default"),C=Object(o.a)(N,2),_=C[0],S=C[1],P=Object(c.useState)("default"),E=Object(o.a)(P,2),F=E[0],I=E[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"conteiner commands-interface",onSubmit:function(e){e.preventDefault(),"default"===y||"default"===_||"default"===F?O(!0):(n((function(e){return e.map((function(e){return e.id===d&&(e.amount=e.amount-1),e}))})),function(){var e=t.find((function(e){return e.id===d})),c={type:a,id:Object(i.a)(),categoryName:e.name,categoryPrice:e.price,categoryId:d,year:y,month:_,day:F};r((function(e){return[].concat(Object(u.a)(e),[c])}))}(),j("default"),v("default"),S("default"),I("default"))},children:[Object(l.jsxs)("p",{className:"command",children:[">"," ",a]}),Object(l.jsxs)("select",{className:"input",value:d,onChange:function(e){O(!1),j(e.target.value)},children:[Object(l.jsx)("option",{value:"default",children:"Select category"}),t.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(l.jsx)(h,{year:y,month:_,day:F,setIsError:O,setYear:v,setMonth:S,setDay:I}),Object(l.jsx)("button",{className:"button",type:"submit",disabled:"default"!==d&&0===t.find((function(e){return e.id===d})).amount,children:"Execute"})]}),f&&function(){switch(!0){case"default"===d:return Object(l.jsx)("p",{className:"error",children:"Please select a category!"});case"default"===y:return Object(l.jsx)("p",{className:"error",children:"Please select a year!"});case"default"===_:return Object(l.jsx)("p",{className:"error",children:"Please select a month!"});case"default"===F:return Object(l.jsx)("p",{className:"error",children:"Please select a day!"});default:return Object(l.jsx)("p",{className:"error",children:"Please provide a date!"})}}()]})},x=function(e){var t=e.command,a=(e.categories,e.executedCommands),n=(e.setCategories,e.setExecutedCommands),r=Object(c.useState)(!1),s=Object(o.a)(r,2),m=s[0],d=s[1],j=Object(c.useState)("default"),b=Object(o.a)(j,2),p=b[0],f=b[1],O=Object(c.useState)("default"),x=Object(o.a)(O,2),g=x[0],y=x[1],v=Object(c.useState)("default"),N=Object(o.a)(v,2),C=N[0],_=N[1],S=function(e){for(var t=[],a=function(a){if(t.some((function(t){return t.name===e[a].categoryName}))){t.find((function(t){return t.name===e[a].categoryName})).amount+=1}else{var c={name:e[a].categoryName,price:e[a].categoryPrice,amount:1};t.push(c)}},c=0;c<e.length;c++)a(c);return t.sort((function(e,t){return e.name.localeCompare(t.name)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"conteiner commands-interface",onSubmit:function(e){e.preventDefault(),"default"===p||"default"===g?d(!0):function(){var e={type:t,id:Object(i.a)(),purchasedCategories:void 0,total:void 0,year:p,month:g};if("default"===C){var c=a.filter((function(e){return"purchase"===e.type&&e.year===p&&e.month===g}));e.purchasedCategories=S(c),e.total=c.reduce((function(e,t){return e+t.categoryPrice}),0),e.type=e.type+" month"}else{var r=a.filter((function(e){return"purchase"===e.type&&e.year===p&&e.month===g&&e.day===C}));e.purchasedCategories=S(r),e.total=r.reduce((function(e,t){return e+t.categoryPrice}),0),e.type=e.type+" day",e.day=C}n((function(t){return[].concat(Object(u.a)(t),[e])}))}()},children:[Object(l.jsxs)("p",{className:"command",children:[">"," ",t]}),Object(l.jsx)(h,{year:p,month:g,day:C,setIsError:d,setYear:f,setMonth:y,setDay:_}),Object(l.jsx)("button",{className:"button",type:"submit",children:"Execute"})]}),m&&function(){switch(!0){case"default"===p:return Object(l.jsx)("p",{className:"error",children:"Please select a year!"});case"default"===g:return Object(l.jsx)("p",{className:"error",children:"Please select a month!"});default:return Object(l.jsx)("p",{className:"error",children:"Please provide a date!"})}}()]})},g=(a(17),function(e){var t=e.categories,a=e.command,c=e.executedCommands,n=e.setCategories,r=e.setExecutedCommands;return Object(l.jsx)("div",{className:"commands commands--parameters",children:function(e){switch(e){case"addCategory":return Object(l.jsx)(m,{categories:t,command:e,setCategories:n,setExecutedCommands:r});case"addItem":return Object(l.jsx)(d,{categories:t,command:e,setCategories:n,setExecutedCommands:r});case"purchase":return Object(l.jsx)(O,{categories:t,command:e,executedCommands:c,setCategories:n,setExecutedCommands:r});case"list":return Object(l.jsx)(b,{command:e,categories:t,setExecutedCommands:r});case"clear":return Object(l.jsx)(j,{command:e,categories:t,setCategories:n,setExecutedCommands:r});case"report":return Object(l.jsx)(x,{command:e,categories:t,executedCommands:c,setCategories:n,setExecutedCommands:r});default:return Object(l.jsx)("p",{children:"To start select a command!"})}}(a)})}),y=(a(18),function(e){var t=e.setCommand;return Object(l.jsxs)("header",{className:"header header--parameters",children:[Object(l.jsx)("h2",{className:"header__title",children:"Vending machine"}),Object(l.jsxs)("select",{className:"header__select",onChange:function(e){return t(e.target.value)},children:[Object(l.jsx)("option",{value:"addCategory",children:"Select command"}),Object(l.jsx)("option",{value:"addCategory",children:"addCategory"}),Object(l.jsx)("option",{value:"addItem",children:"addItem"}),Object(l.jsx)("option",{value:"purchase",children:"purchase"}),Object(l.jsx)("option",{value:"list",children:"list"}),Object(l.jsx)("option",{value:"clear",children:"clear"}),Object(l.jsx)("option",{value:"report",children:"report"})]})]})}),v=(a(19),function(e){var t=e.executedCommands;return Object(l.jsxs)("div",{className:"output",children:[Object(l.jsx)("p",{className:"output__header",children:"Output"}),Object(l.jsx)("ul",{className:"output__list",children:t.map((function(e){return function(e){switch(e.type){case"addCategory":case"addItem":return Object(l.jsx)("li",{className:"output__item",children:"".concat(e.categoryName," ").concat(e.categoryPrice.toFixed(2)," ").concat(e.categoryAmount)},e.id);case"purchase":return Object(l.jsxs)("li",{className:"output__item",children:["".concat(e.year,"-").concat(e.month,"-").concat(e.day),Object(l.jsx)("br",{}),"".concat(e.categoryName," ").concat(e.categoryPrice.toFixed(2))]},e.id);case"list":return Object(l.jsx)("li",{className:"output__item",children:0!==e.categories.length?Object(u.a)(e.categories).sort((function(e,t){return t.amount-e.amount})).map((function(e){return Object(l.jsxs)(l.Fragment,{children:["".concat(e.name," ").concat(e.price.toFixed(2)," ").concat(e.amount),Object(l.jsx)("br",{})]})})):"There is no categories"},e.id);case"clear":return e.emptyCategories.map((function(e){return Object(l.jsx)("li",{className:"output__item",children:"".concat(e.name," ").concat(e.price.toFixed(2))},e.id)}));case"report month":return 0===e.purchaseCommands?Object(l.jsxs)("li",{className:"output__item",children:["".concat(e.year,"-").concat(e.month),"There is no purchases"]},e.id):Object(l.jsxs)("li",{className:"output__item",children:["".concat(e.year,"-").concat(e.month),Object(l.jsx)("br",{}),e.purchasedCategories.map((function(e){return Object(l.jsxs)("span",{children:["".concat(e.name," ").concat((e.price*e.amount).toFixed(2)," ").concat(e.amount),Object(l.jsx)("br",{})]},e.name)})),"> Total: ".concat(e.total)]},e.id);case"report day":return 0===e.purchaseCommands?Object(l.jsxs)("li",{className:"output__item",children:["".concat(e.year,"-").concat(e.month,"-").concat(e.day),"There is no purchases"]},e.id):Object(l.jsxs)("li",{className:"output__item",children:["".concat(e.year,"-").concat(e.month,"-").concat(e.day),Object(l.jsx)("br",{}),e.purchasedCategories.map((function(e){return Object(l.jsxs)("span",{children:["".concat(e.name," ").concat((e.price*e.amount).toFixed(2)," ").concat(e.amount),Object(l.jsx)("br",{})]},e.name)})),"> Total: ".concat(e.total)]},e.id);default:return Object(l.jsx)("p",{children:"Error"})}}(e)}))})]})});var N=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),u=s[0],i=s[1],m=Object(c.useState)(""),d=Object(o.a)(m,2),j=d[0],b=d[1];return console.log("categories",a),console.log("executedCommands",u),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(y,{setCommand:b}),Object(l.jsx)(g,{categories:a,command:j,executedCommands:u,setCategories:n,setExecutedCommands:i}),Object(l.jsx)(v,{executedCommands:u})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),C()}],[[20,1,2]]]);
//# sourceMappingURL=main.a8ba3a83.chunk.js.map