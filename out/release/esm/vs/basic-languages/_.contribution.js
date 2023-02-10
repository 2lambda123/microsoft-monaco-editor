/*! For license information please see _.contribution.js.LICENSE.txt */
var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(e,o,a,r)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let t of __getOwnPropNames(o))__hasOwnProp.call(e,t)||t===a||__defProp(e,t,{get:()=>o[t],enumerable:!(r=__getOwnPropDesc(o,t))||r.enumerable});return e},__reExport=(e,o,a)=>(__copyProps(e,o,"default"),a&&__copyProps(a,o,"default")),monaco_editor_core_exports={};__reExport(monaco_editor_core_exports,monaco_editor_core_star);import*as monaco_editor_core_star from"monaco-editor-core";var languageDefinitions={},lazyLanguageLoaders={},LazyLanguageLoader=class{static getOrCreate(e){return lazyLanguageLoaders[e]||(lazyLanguageLoaders[e]=new LazyLanguageLoader(e)),lazyLanguageLoaders[e]}_languageId;_loadingTriggered;_lazyLoadPromise;_lazyLoadPromiseResolve;_lazyLoadPromiseReject;constructor(e){this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise(((e,o)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=o}))}load(){return this._loadingTriggered||(this._loadingTriggered=!0,languageDefinitions[this._languageId].loader().then((e=>this._lazyLoadPromiseResolve(e)),(e=>this._lazyLoadPromiseReject(e)))),this._lazyLoadPromise}};async function loadLanguage(e){await LazyLanguageLoader.getOrCreate(e).load(),monaco_editor_core_exports.editor.createModel("",e).dispose()}function registerLanguage(e){const o=e.id;languageDefinitions[o]=e,monaco_editor_core_exports.languages.register(e);const a=LazyLanguageLoader.getOrCreate(o);monaco_editor_core_exports.languages.registerTokensProviderFactory(o,{create:async()=>(await a.load()).language}),monaco_editor_core_exports.languages.onLanguage(o,(async()=>{const e=await a.load();monaco_editor_core_exports.languages.setLanguageConfiguration(o,e.conf)}))}export{loadLanguage,registerLanguage};