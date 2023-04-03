/*! For license information please see jsonMode.js.LICENSE.txt */
"use strict";define("vs/language/json/jsonMode",["require","require"],(e=>(()=>{var t,n,r=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(t=function(t){if(void 0!==e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')},void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(t,{get:(t,n)=>(void 0!==e?e:t)[n]}):t),d=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))!u.call(e,s)&&s!==n&&i(e,s,{get:()=>t[s],enumerable:!(r=o(t,s))||r.enumerable});return e},l=(e,t,n)=>(n=null!=e?r(s(e)):{},d(!t&&e&&e.__esModule?n:i(n,"default",{value:e,enumerable:!0}),e)),g=()=>{return n||(e=n={exports:{}},t=l(c("vs/editor/editor.api")),e.exports=t),n.exports;var e,t},f={};((e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})})(f,{CompletionAdapter:()=>Ae,DefinitionAdapter:()=>Oe,DiagnosticsAdapter:()=>ye,DocumentColorAdapter:()=>$e,DocumentFormattingEditProvider:()=>ze,DocumentHighlightAdapter:()=>Le,DocumentLinkAdapter:()=>Ke,DocumentRangeFormattingEditProvider:()=>qe,DocumentSymbolAdapter:()=>Ve,FoldingRangeAdapter:()=>Qe,HoverAdapter:()=>Pe,ReferenceAdapter:()=>We,RenameAdapter:()=>Ue,SelectionRangeAdapter:()=>Ge,WorkerManager:()=>V,fromPosition:()=>xe,fromRange:()=>Ie,setupMode:()=>pt,toRange:()=>Se,toTextEdit:()=>Re});var h={};((e,t,n)=>{d(e,t,"default")})(h,l(g()));var p,m,v,_,b,k,w,C,y,E,A,x,I,S,T,R,D,P,M,j,L,F,O,N,W,U,V=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=h.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};!function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(p||(p={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(m||(m={})),function(e){e.create=function(e,t){return e===Number.MAX_VALUE&&(e=m.MAX_VALUE),t===Number.MAX_VALUE&&(t=m.MAX_VALUE),{line:e,character:t}},e.is=function(e){var t=e;return we.objectLiteral(t)&&we.uinteger(t.line)&&we.uinteger(t.character)}}(v||(v={})),function(e){e.create=function(e,t,n,r){if(we.uinteger(e)&&we.uinteger(t)&&we.uinteger(n)&&we.uinteger(r))return{start:v.create(e,t),end:v.create(n,r)};if(v.is(e)&&v.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},e.is=function(e){var t=e;return we.objectLiteral(t)&&v.is(t.start)&&v.is(t.end)}}(_||(_={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return we.defined(t)&&_.is(t.range)&&(we.string(t.uri)||we.undefined(t.uri))}}(b||(b={})),function(e){e.create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},e.is=function(e){var t=e;return we.defined(t)&&_.is(t.targetRange)&&we.string(t.targetUri)&&(_.is(t.targetSelectionRange)||we.undefined(t.targetSelectionRange))&&(_.is(t.originSelectionRange)||we.undefined(t.originSelectionRange))}}(k||(k={})),function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return we.numberRange(t.red,0,1)&&we.numberRange(t.green,0,1)&&we.numberRange(t.blue,0,1)&&we.numberRange(t.alpha,0,1)}}(w||(w={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return _.is(t.range)&&w.is(t.color)}}(C||(C={})),function(e){e.create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},e.is=function(e){var t=e;return we.string(t.label)&&(we.undefined(t.textEdit)||P.is(t))&&(we.undefined(t.additionalTextEdits)||we.typedArray(t.additionalTextEdits,P.is))}}(y||(y={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(E||(E={})),function(e){e.create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return we.defined(n)&&(o.startCharacter=n),we.defined(r)&&(o.endCharacter=r),we.defined(i)&&(o.kind=i),o},e.is=function(e){var t=e;return we.uinteger(t.startLine)&&we.uinteger(t.startLine)&&(we.undefined(t.startCharacter)||we.uinteger(t.startCharacter))&&(we.undefined(t.endCharacter)||we.uinteger(t.endCharacter))&&(we.undefined(t.kind)||we.string(t.kind))}}(A||(A={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return we.defined(t)&&b.is(t.location)&&we.string(t.message)}}(x||(x={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(I||(I={})),function(e){e.Unnecessary=1,e.Deprecated=2}(S||(S={})),function(e){e.is=function(e){var t=e;return null!=t&&we.string(t.href)}}(T||(T={})),function(e){e.create=function(e,t,n,r,i,o){var a={range:e,message:t};return we.defined(n)&&(a.severity=n),we.defined(r)&&(a.code=r),we.defined(i)&&(a.source=i),we.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var t,n=e;return we.defined(n)&&_.is(n.range)&&we.string(n.message)&&(we.number(n.severity)||we.undefined(n.severity))&&(we.integer(n.code)||we.string(n.code)||we.undefined(n.code))&&(we.undefined(n.codeDescription)||we.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(we.string(n.source)||we.undefined(n.source))&&(we.undefined(n.relatedInformation)||we.typedArray(n.relatedInformation,x.is))}}(R||(R={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return we.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return we.defined(t)&&we.string(t.title)&&we.string(t.command)}}(D||(D={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return we.objectLiteral(t)&&we.string(t.newText)&&_.is(t.range)}}(P||(P={})),function(e){e.create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},e.is=function(e){var t=e;return void 0!==t&&we.objectLiteral(t)&&we.string(t.label)&&(we.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(we.string(t.description)||void 0===t.description)}}(M||(M={})),function(e){e.is=function(e){return"string"==typeof e}}(j||(j={})),function(e){e.replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},e.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},e.del=function(e,t){return{range:e,newText:"",annotationId:t}},e.is=function(e){var t=e;return P.is(t)&&(M.is(t.annotationId)||j.is(t.annotationId))}}(L||(L={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return we.defined(t)&&z.is(t.textDocument)&&Array.isArray(t.edits)}}(F||(F={})),function(e){e.create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},e.is=function(e){var t=e;return t&&"create"===t.kind&&we.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||we.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||we.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||j.is(t.annotationId))}}(O||(O={})),function(e){e.create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},e.is=function(e){var t=e;return t&&"rename"===t.kind&&we.string(t.oldUri)&&we.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||we.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||we.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||j.is(t.annotationId))}}(N||(N={})),function(e){e.create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},e.is=function(e){var t=e;return t&&"delete"===t.kind&&we.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||we.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||we.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||j.is(t.annotationId))}}(W||(W={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return we.string(e.kind)?O.is(e)||N.is(e)||W.is(e):F.is(e)})))}}(U||(U={}));var H,K,z,q,X,B,$,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,le,ge,fe,he,pe,me,ve,_e,be=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=P.insert(e,t):j.is(n)?(i=n,r=L.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=L.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=P.replace(e,t):j.is(n)?(i=n,r=L.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=L.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=P.del(e):j.is(t)?(r=t,n=L.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=L.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ke=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(j.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new ke(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(F.is(e)){var n=new be(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new be(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(z.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new be(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new be(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ke,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(M.is(t)||j.is(t)?r=t:n=t,void 0===r?i=O.create(e,n):(o=j.is(r)?r:this._changeAnnotations.manage(r),i=O.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(M.is(n)||j.is(n)?i=n:r=n,void 0===i?o=N.create(e,t,r):(a=j.is(i)?i:this._changeAnnotations.manage(i),o=N.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(M.is(t)||j.is(t)?r=t:n=t,void 0===r?i=W.create(e,n):(o=j.is(r)?r:this._changeAnnotations.manage(r),i=W.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return we.defined(t)&&we.string(t.uri)}}(H||(H={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return we.defined(t)&&we.string(t.uri)&&we.integer(t.version)}}(K||(K={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return we.defined(t)&&we.string(t.uri)&&(null===t.version||we.integer(t.version))}}(z||(z={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return we.defined(t)&&we.string(t.uri)&&we.string(t.languageId)&&we.integer(t.version)&&we.string(t.text)}}(q||(q={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(X||(X={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(X||(X={})),function(e){e.is=function(e){var t=e;return we.objectLiteral(e)&&X.is(t.kind)&&we.string(t.value)}}(B||(B={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}($||($={})),function(e){e.PlainText=1,e.Snippet=2}(Q||(Q={})),function(e){e.Deprecated=1}(G||(G={})),function(e){e.create=function(e,t,n){return{newText:e,insert:t,replace:n}},e.is=function(e){var t=e;return t&&we.string(t.newText)&&_.is(t.insert)&&_.is(t.replace)}}(J||(J={})),function(e){e.asIs=1,e.adjustIndentation=2}(Y||(Y={})),function(e){e.create=function(e){return{label:e}}}(Z||(Z={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(ee||(ee={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return we.string(t)||we.objectLiteral(t)&&we.string(t.language)&&we.string(t.value)}}(te||(te={})),function(e){e.is=function(e){var t=e;return!!t&&we.objectLiteral(t)&&(B.is(t.contents)||te.is(t.contents)||we.typedArray(t.contents,te.is))&&(void 0===e.range||_.is(e.range))}}(ne||(ne={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(re||(re={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return we.defined(t)&&(i.documentation=t),we.defined(n)?i.parameters=n:i.parameters=[],i}}(ie||(ie={})),function(e){e.Text=1,e.Read=2,e.Write=3}(oe||(oe={})),function(e){e.create=function(e,t){var n={range:e};return we.number(t)&&(n.kind=t),n}}(ae||(ae={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(se||(se={})),function(e){e.Deprecated=1}(ue||(ue={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(ce||(ce={})),function(e){e.create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var t=e;return t&&we.string(t.name)&&we.number(t.kind)&&_.is(t.range)&&_.is(t.selectionRange)&&(void 0===t.detail||we.string(t.detail))&&(void 0===t.deprecated||we.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}}(de||(de={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(le||(le={})),function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return we.defined(t)&&we.typedArray(t.diagnostics,R.is)&&(void 0===t.only||we.typedArray(t.only,we.string))}}(ge||(ge={})),function(e){e.create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):D.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},e.is=function(e){var t=e;return t&&we.string(t.title)&&(void 0===t.diagnostics||we.typedArray(t.diagnostics,R.is))&&(void 0===t.kind||we.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||D.is(t.command))&&(void 0===t.isPreferred||we.boolean(t.isPreferred))&&(void 0===t.edit||U.is(t.edit))}}(fe||(fe={})),function(e){e.create=function(e,t){var n={range:e};return we.defined(t)&&(n.data=t),n},e.is=function(e){var t=e;return we.defined(t)&&_.is(t.range)&&(we.undefined(t.command)||D.is(t.command))}}(he||(he={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return we.defined(t)&&we.uinteger(t.tabSize)&&we.boolean(t.insertSpaces)}}(pe||(pe={})),function(e){e.create=function(e,t,n){return{range:e,target:t,data:n}},e.is=function(e){var t=e;return we.defined(t)&&_.is(t.range)&&(we.undefined(t.target)||we.string(t.target))}}(me||(me={})),function(e){e.create=function(e,t){return{range:e,parent:t}},e.is=function(t){var n=t;return void 0!==n&&_.is(n.range)&&(void 0===n.parent||e.is(n.parent))}}(ve||(ve={})),function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new Ce(e,t,n,r)},e.is=function(e){var t=e;return!!(we.defined(t)&&we.string(t.uri)&&(we.undefined(t.languageId)||we.string(t.languageId))&&we.uinteger(t.lineCount)&&we.func(t.getText)&&we.func(t.positionAt)&&we.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(_e||(_e={}));var we,Ce=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return v.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return v.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return typeof e<"u"},e.undefined=function(e){return typeof e>"u"},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r},e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(we||(we={}));var ye=class{constructor(e,t,n){this._languageId=e,this._worker=t;let r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{h.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(h.editor.onDidCreateModel(r)),this._disposables.push(h.editor.onWillDisposeModel(i)),this._disposables.push(h.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{h.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{h.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),h.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{let r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:Ee(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e))),i=h.editor.getModel(e);i&&i.getLanguageId()===t&&h.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function Ee(e){switch(e){case I.Error:return h.MarkerSeverity.Error;case I.Warning:return h.MarkerSeverity.Warning;case I.Information:return h.MarkerSeverity.Info;case I.Hint:return h.MarkerSeverity.Hint;default:return h.MarkerSeverity.Info}}var Ae=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),xe(t)))).then((n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new h.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:De(e.command),range:i,kind:Te(e.kind)};return e.textEdit&&(function(e){return typeof e.insert<"u"&&typeof e.replace<"u"}(e.textEdit)?t.range={insert:Se(e.textEdit.insert),replace:Se(e.textEdit.replace)}:t.range=Se(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Re)),e.insertTextFormat===Q.Snippet&&(t.insertTextRules=h.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function xe(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Ie(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function Se(e){if(e)return new h.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Te(e){let t=h.languages.CompletionItemKind;switch(e){case $.Text:return t.Text;case $.Method:return t.Method;case $.Function:return t.Function;case $.Constructor:return t.Constructor;case $.Field:return t.Field;case $.Variable:return t.Variable;case $.Class:return t.Class;case $.Interface:return t.Interface;case $.Module:return t.Module;case $.Property:return t.Property;case $.Unit:return t.Unit;case $.Value:return t.Value;case $.Enum:return t.Enum;case $.Keyword:return t.Keyword;case $.Snippet:return t.Snippet;case $.Color:return t.Color;case $.File:return t.File;case $.Reference:return t.Reference}return t.Property}function Re(e){if(e)return{range:Se(e.range),text:e.newText}}function De(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Pe=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),xe(t)))).then((e=>{if(e)return{range:Se(e.range),contents:je(e.contents)}}))}};function Me(e){return"string"==typeof e?{value:e}:function(e){return e&&"object"==typeof e&&"string"==typeof e.kind}(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function je(e){if(e)return Array.isArray(e)?e.map(Me):[Me(e)]}var Le=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),xe(t)))).then((e=>{if(e)return e.map((e=>({range:Se(e.range),kind:Fe(e.kind)})))}))}};function Fe(e){switch(e){case oe.Read:return h.languages.DocumentHighlightKind.Read;case oe.Write:return h.languages.DocumentHighlightKind.Write;case oe.Text:return h.languages.DocumentHighlightKind.Text}return h.languages.DocumentHighlightKind.Text}var Oe=class{constructor(e){this._worker=e}provideDefinition(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),xe(t)))).then((e=>{if(e)return[Ne(e)]}))}};function Ne(e){return{uri:h.Uri.parse(e.uri),range:Se(e.range)}}var We=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),xe(t)))).then((e=>{if(e)return e.map(Ne)}))}},Ue=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),xe(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=h.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:Se(i.range),text:i.newText}})}return{edits:t}}(e)))}},Ve=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:He(e.kind),range:Se(e.location.range),selectionRange:Se(e.location.range),tags:[]})))}))}};function He(e){let t=h.languages.SymbolKind;switch(e){case se.File:return t.Array;case se.Module:return t.Module;case se.Namespace:return t.Namespace;case se.Package:return t.Package;case se.Class:return t.Class;case se.Method:return t.Method;case se.Property:return t.Property;case se.Field:return t.Field;case se.Constructor:return t.Constructor;case se.Enum:return t.Enum;case se.Interface:return t.Interface;case se.Function:return t.Function;case se.Variable:return t.Variable;case se.Constant:return t.Constant;case se.String:return t.String;case se.Number:return t.Number;case se.Boolean:return t.Boolean;case se.Array:return t.Array}return t.Function}var Ke=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:Se(e.range),url:e.target})))}}))}},ze=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Xe(t)).then((e=>{if(e&&0!==e.length)return e.map(Re)}))))}},qe=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),Ie(t),Xe(n)).then((e=>{if(e&&0!==e.length)return e.map(Re)}))))}};function Xe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Be,$e=class{constructor(e){this._worker=e}provideDocumentColors(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:Se(e.range)})))}))}provideColorPresentations(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,Ie(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=Re(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Re)),t}))}))}},Qe=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{let t={start:e.startLine+1,end:e.endLine+1};return typeof e.kind<"u"&&(t.kind=function(e){switch(e){case E.Comment:return h.languages.FoldingRangeKind.Comment;case E.Imports:return h.languages.FoldingRangeKind.Imports;case E.Region:return h.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},Ge=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(xe)))).then((e=>{if(e)return e.map((e=>{let t=[];for(;e;)t.push({range:Se(e.range)}),e=e.parent;return t}))}))}};function Je(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Ye(e){return 10===e||13===e||8232===e||8233===e}function Ze(e){return e>=48&&e<=57}!function(e){e.DEFAULT={allowTrailingComma:!1}}(Be||(Be={}));function et(e){return{getInitialState:()=>new ft(null,null,!1,null),tokenize:(t,n)=>function(e,t,n,r=0){let i=0,o=!1;switch(n.scanError){case 2:t='"'+t,i=1;break;case 1:t="/*"+t,i=2}let a=function(e,t){void 0===t&&(t=!1);var n=e.length,r=0,i="",o=0,a=16,s=0,u=0,c=0,d=0,l=0;function g(t,n){for(var i=0,o=0;i<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}r++,i++}return i<t&&(o=-1),o}function f(){if(i="",l=0,o=r,u=s,d=c,r>=n)return o=n,a=17;var t=e.charCodeAt(r);if(Je(t)){do{r++,i+=String.fromCharCode(t),t=e.charCodeAt(r)}while(Je(t));return a=15}if(Ye(t))return r++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,i+="\n"),s++,c=r,a=14;switch(t){case 123:return r++,a=1;case 125:return r++,a=2;case 91:return r++,a=3;case 93:return r++,a=4;case 58:return r++,a=6;case 44:return r++,a=5;case 34:return r++,i=function(){for(var t="",i=r;;){if(r>=n){t+=e.substring(i,r),l=2;break}var o=e.charCodeAt(r);if(34===o){t+=e.substring(i,r),r++;break}if(92!==o){if(o>=0&&o<=31){if(Ye(o)){t+=e.substring(i,r),l=2;break}l=6}r++}else{if(t+=e.substring(i,r),++r>=n){l=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=g(4,!0);a>=0?t+=String.fromCharCode(a):l=4;break;default:l=5}i=r}}return t}(),a=10;case 47:var f=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!Ye(e.charCodeAt(r));)r++;return i=e.substring(f,r),a=12}if(42===e.charCodeAt(r+1)){r+=2;for(var p=n-1,m=!1;r<p;){var v=e.charCodeAt(r);if(42===v&&47===e.charCodeAt(r+1)){r+=2,m=!0;break}r++,Ye(v)&&(13===v&&10===e.charCodeAt(r)&&r++,s++,c=r)}return m||(r++,l=1),i=e.substring(f,r),a=13}return i+=String.fromCharCode(t),r++,a=16;case 45:if(i+=String.fromCharCode(t),++r===n||!Ze(e.charCodeAt(r)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&Ze(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&Ze(e.charCodeAt(r))))return l=3,e.substring(t,r);for(r++;r<e.length&&Ze(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&Ze(e.charCodeAt(r))){for(r++;r<e.length&&Ze(e.charCodeAt(r));)r++;n=r}else l=3;return e.substring(t,n)}(),a=11;default:for(;r<n&&h(t);)r++,t=e.charCodeAt(r);if(o!==r){switch(i=e.substring(o,r)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),r++,a=16}}function h(e){if(Je(e)||Ye(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,i="",o=0,a=16,l=0},getPosition:function(){return r},scan:t?function(){var e;do{e=f()}while(e>=12&&e<=15);return e}:f,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return r-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return l}}}(t),s=n.lastWasColon,u=n.parents,c={tokens:[],endState:n.clone()};for(;;){let d=r+a.getPosition(),l="",g=a.scan();if(17===g)break;if(d===r+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(a.getPosition(),3));switch(o&&(d-=i),o=i>0,g){case 1:u=gt.push(u,0),l=tt,s=!1;break;case 2:u=gt.pop(u),l=tt,s=!1;break;case 3:u=gt.push(u,1),l=nt,s=!1;break;case 4:u=gt.pop(u),l=nt,s=!1;break;case 6:l=rt,s=!0;break;case 5:l=it,s=!1;break;case 8:case 9:l=ot,s=!1;break;case 7:l=at,s=!1;break;case 10:let e=1===(u?u.type:0);l=s||e?st:ct,s=!1;break;case 11:l=ut,s=!1}if(e)switch(g){case 12:l=lt;break;case 13:l=dt}c.endState=new ft(n.getStateData(),a.getTokenError(),s,u),c.tokens.push({startIndex:d,scopes:l})}return c}(e,t,n)}}var tt="delimiter.bracket.json",nt="delimiter.array.json",rt="delimiter.colon.json",it="delimiter.comma.json",ot="keyword.json",at="keyword.json",st="string.value.json",ut="number.json",ct="string.key.json",dt="comment.block.json",lt="comment.line.json",gt=class{constructor(e,t){this.parent=e,this.type=t}static pop(e){return e?e.parent:null}static push(e,t){return new gt(e,t)}static equals(e,t){if(!e&&!t)return!0;if(!e||!t)return!1;for(;e&&t;){if(e===t)return!0;if(e.type!==t.type)return!1;e=e.parent,t=t.parent}return!0}},ft=class{_state;scanError;lastWasColon;parents;constructor(e,t,n,r){this._state=e,this.scanError=t,this.lastWasColon=n,this.parents=r}clone(){return new ft(this._state,this.scanError,this.lastWasColon,this.parents)}equals(e){return e===this||!!(e&&e instanceof ft)&&this.scanError===e.scanError&&this.lastWasColon===e.lastWasColon&&gt.equals(this.parents,e.parents)}getStateData(){return this._state}setStateData(e){this._state=e}},ht=class extends ye{constructor(e,t,n){super(e,t,n.onDidChange),this._disposables.push(h.editor.onWillDisposeModel((e=>{this._resetSchema(e.uri)}))),this._disposables.push(h.editor.onDidChangeModelLanguage((e=>{this._resetSchema(e.model.uri)})))}_resetSchema(e){this._worker().then((t=>{t.resetSchema(e.toString())}))}};function pt(e){let t=[],n=[],r=new V(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);function o(){let{languageId:t,modeConfiguration:r}=e;vt(n),r.documentFormattingEdits&&n.push(h.languages.registerDocumentFormattingEditProvider(t,new ze(i))),r.documentRangeFormattingEdits&&n.push(h.languages.registerDocumentRangeFormattingEditProvider(t,new qe(i))),r.completionItems&&n.push(h.languages.registerCompletionItemProvider(t,new Ae(i,[" ",":",'"']))),r.hovers&&n.push(h.languages.registerHoverProvider(t,new Pe(i))),r.documentSymbols&&n.push(h.languages.registerDocumentSymbolProvider(t,new Ve(i))),r.tokens&&n.push(h.languages.setTokensProvider(t,et(!0))),r.colors&&n.push(h.languages.registerColorProvider(t,new $e(i))),r.foldingRanges&&n.push(h.languages.registerFoldingRangeProvider(t,new Qe(i))),r.diagnostics&&n.push(new ht(t,i,e)),r.selectionRanges&&n.push(h.languages.registerSelectionRangeProvider(t,new Ge(i)))}o(),t.push(h.languages.setLanguageConfiguration(e.languageId,_t));let a=e.modeConfiguration;return e.onDidChange((e=>{e.modeConfiguration!==a&&(a=e.modeConfiguration,o())})),t.push(mt(n)),mt(t)}function mt(e){return{dispose:()=>vt(e)}}function vt(e){for(;e.length;)e.pop().dispose()}var _t={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};return(e=>d(i({},"__esModule",{value:!0}),e))(f)})()));