/*! For license information please see monaco.contribution.js.LICENSE.txt */
"use strict";define("vs/basic-languages/monaco.contribution",["require","vs/editor/editor.api"],(e=>(()=>{var s,a,i=Object.create,r=Object.defineProperty,l=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyNames,o=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,c=(s=>void 0!==e?e:"undefined"!=typeof Proxy?new Proxy(s,{get:(s,a)=>(void 0!==e?e:s)[a]}):s)((function(s){if(void 0!==e)return e.apply(this,arguments);throw new Error('Dynamic require of "'+s+'" is not supported')})),g=(e,s,a,i)=>{if(s&&"object"==typeof s||"function"==typeof s)for(let o of t(s))n.call(e,o)||o===a||r(e,o,{get:()=>s[o],enumerable:!(i=l(s,o))||i.enumerable});return e},d=(e,s,a)=>(a=null!=e?i(o(e)):{},g(!s&&e&&e.__esModule?a:r(a,"default",{value:e,enumerable:!0}),e)),p=(s={"src/fillers/monaco-editor-core-amd.ts"(e,s){var a=d(c("vs/editor/editor.api"));s.exports=a}},function(){return a||(0,s[t(s)[0]])((a={exports:{}}).exports,a),a.exports}),m={};((e,s,a)=>{g(e,s,"default")})(m,d(p()));var x={},u={},b=class{static getOrCreate(e){return u[e]||(u[e]=new b(e)),u[e]}_languageId;_loadingTriggered;_lazyLoadPromise;_lazyLoadPromiseResolve;_lazyLoadPromiseReject;constructor(e){this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise(((e,s)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=s}))}load(){return this._loadingTriggered||(this._loadingTriggered=!0,x[this._languageId].loader().then((e=>this._lazyLoadPromiseResolve(e)),(e=>this._lazyLoadPromiseReject(e)))),this._lazyLoadPromise}};function v(e){const s=e.id;x[s]=e,m.languages.register(e);const a=b.getOrCreate(s);m.languages.registerTokensProviderFactory(s,{create:async()=>(await a.load()).language}),m.languages.onLanguage(s,(async()=>{const e=await a.load();m.languages.setLanguageConfiguration(s,e.conf)}))}v({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/abap/abap"],e,s)}))}),v({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/apex/apex"],e,s)}))}),v({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/azcli/azcli"],e,s)}))}),v({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/bat/bat"],e,s)}))}),v({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/bicep/bicep"],e,s)}))}),v({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/cameligo/cameligo"],e,s)}))}),v({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/clojure/clojure"],e,s)}))}),v({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/coffee/coffee"],e,s)}))}),v({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/cpp/cpp"],e,s)}))}),v({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/cpp/cpp"],e,s)}))}),v({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/csharp/csharp"],e,s)}))}),v({id:"csp",extensions:[],aliases:["CSP","csp"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/csp/csp"],e,s)}))}),v({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/css/css"],e,s)}))}),v({id:"cypher",extensions:[".cypher",".cyp"],aliases:["Cypher","OpenCypher"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/cypher/cypher"],e,s)}))}),v({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/dart/dart"],e,s)}))}),v({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/dockerfile/dockerfile"],e,s)}))}),v({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/ecl/ecl"],e,s)}))}),v({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/elixir/elixir"],e,s)}))}),v({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/flow9/flow9"],e,s)}))}),v({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/fsharp/fsharp"],e,s)}))}),v({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagAngleInterpolationDollar))}),v({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagAngleInterpolationDollar))}),v({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagBracketInterpolationDollar))}),v({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagAngleInterpolationBracket))}),v({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagBracketInterpolationBracket))}),v({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagAutoInterpolationDollar))}),v({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/freemarker2/freemarker2"],e,s)})).then((e=>e.TagAutoInterpolationBracket))}),v({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/go/go"],e,s)}))}),v({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/graphql/graphql"],e,s)}))}),v({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/handlebars/handlebars"],e,s)}))}),v({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/hcl/hcl"],e,s)}))}),v({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/html/html"],e,s)}))}),v({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/ini/ini"],e,s)}))}),v({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/java/java"],e,s)}))}),v({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/javascript/javascript"],e,s)}))}),v({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/julia/julia"],e,s)}))}),v({id:"kotlin",extensions:[".kt",".kts"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/kotlin/kotlin"],e,s)}))}),v({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/less/less"],e,s)}))}),v({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/lexon/lexon"],e,s)}))}),v({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/lua/lua"],e,s)}))}),v({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/liquid/liquid"],e,s)}))}),v({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/m3/m3"],e,s)}))}),v({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/markdown/markdown"],e,s)}))}),v({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/mips/mips"],e,s)}))}),v({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/msdax/msdax"],e,s)}))}),v({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/mysql/mysql"],e,s)}))}),v({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/objective-c/objective-c"],e,s)}))}),v({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/pascal/pascal"],e,s)}))}),v({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/pascaligo/pascaligo"],e,s)}))}),v({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/perl/perl"],e,s)}))}),v({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/pgsql/pgsql"],e,s)}))}),v({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/php/php"],e,s)}))}),v({id:"pla",extensions:[".pla"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/pla/pla"],e,s)}))}),v({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/postiats/postiats"],e,s)}))}),v({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/powerquery/powerquery"],e,s)}))}),v({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/powershell/powershell"],e,s)}))}),v({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/protobuf/protobuf"],e,s)}))}),v({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/pug/pug"],e,s)}))}),v({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/python/python"],e,s)}))}),v({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/qsharp/qsharp"],e,s)}))}),v({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/r/r"],e,s)}))}),v({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/razor/razor"],e,s)}))}),v({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/redis/redis"],e,s)}))}),v({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/redshift/redshift"],e,s)}))}),v({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/restructuredtext/restructuredtext"],e,s)}))}),v({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/ruby/ruby"],e,s)}))}),v({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/rust/rust"],e,s)}))}),v({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/sb/sb"],e,s)}))}),v({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/scala/scala"],e,s)}))}),v({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/scheme/scheme"],e,s)}))}),v({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/scss/scss"],e,s)}))}),v({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/shell/shell"],e,s)}))}),v({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/solidity/solidity"],e,s)}))}),v({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/sophia/sophia"],e,s)}))}),v({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/sparql/sparql"],e,s)}))}),v({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/sql/sql"],e,s)}))}),v({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/st/st"],e,s)}))}),v({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/swift/swift"],e,s)}))}),v({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/systemverilog/systemverilog"],e,s)}))}),v({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/systemverilog/systemverilog"],e,s)}))}),v({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/tcl/tcl"],e,s)}))}),v({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/twig/twig"],e,s)}))}),v({id:"typescript",extensions:[".ts",".tsx",".cts",".mts"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/typescript/typescript"],e,s)}))}),v({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/vb/vb"],e,s)}))}),v({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".props",".targets",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/xml/xml"],e,s)}))}),v({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml","text/x-yaml"],loader:()=>new Promise(((e,s)=>{c(["vs/basic-languages/yaml/yaml"],e,s)}))})})()));