"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[8470],{8470:(t,n,e)=>{e.r(n),e.d(n,{default:()=>a});const a='// Add additional d.ts files to the JavaScript language service and change.\n// Also change the default compilation options.\n// The sample below shows how a class Facts is declared and introduced\n// to the system and how the compiler is told to use ES6 (target=2).\n\n// validation settings\nmonaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({\n\tnoSemanticValidation: true,\n\tnoSyntaxValidation: false,\n});\n\n// compiler options\nmonaco.languages.typescript.javascriptDefaults.setCompilerOptions({\n\ttarget: monaco.languages.typescript.ScriptTarget.ES6,\n\tallowNonTsExtensions: true,\n});\n\n// extra libraries\nvar libSource = [\n\t"declare class Facts {",\n\t"    /**",\n\t"     * Returns the next fact",\n\t"     */",\n\t"    static next():string",\n\t"}",\n].join("\\n");\nvar libUri = "ts:filename/facts.d.ts";\nmonaco.languages.typescript.javascriptDefaults.addExtraLib(libSource, libUri);\n// When resolving definitions and references, the editor will try to use created models.\n// Creating a model for the library allows "peek definition/references" commands to work with the library.\nmonaco.editor.createModel(libSource, "typescript", monaco.Uri.parse(libUri));\n\nvar jsCode = [\n\t\'"use strict";\',\n\t"",\n\t"class Chuck {",\n\t"    greet() {",\n\t"        return Facts.next();",\n\t"    }",\n\t"}",\n].join("\\n");\n\nmonaco.editor.create(document.getElementById("container"), {\n\tvalue: jsCode,\n\tlanguage: "javascript",\n});\n'}}]);
//# sourceMappingURL=8470.js.map