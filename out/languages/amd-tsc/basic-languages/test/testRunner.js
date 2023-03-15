var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};define(["require","exports","../_.contribution","assert","../../fillers/monaco-editor-core","../monaco.contribution"],(function(t,e,n,r,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.testTokenization=void 0,e.testTokenization=function(t,e){var i,a=this,u=(i="string"==typeof t?[t]:t)[0];test(u+" tokenization",(function(){return __awaiter(a,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,Promise.all(i.map((function(t){return(0,n.loadLanguage)(t)})))];case 1:return t.sent(),[4,(0,new Promise((function(t,e){setTimeout(t,0)})))];case 2:return t.sent(),function(t,e){e.forEach((function(e){return function(t,e){var n=e.map((function(t){return t.line})).join("\n"),i=o.editor.tokenize(n,t).map((function(t,n){return{line:e[n].line,tokens:t.map((function(t){return{startIndex:t.offset,type:t.type}}))}}));r.deepStrictEqual(i,e)}(t,e)}))}(u,e),[2]}}))}))}))}}));