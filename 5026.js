"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[5026],{5026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o='// The diff editor offers a navigator to jump between changes. Once the diff is computed the <em>next()</em> and <em>previous()</em> method allow navigation. By default setting the selection in the editor manually resets the navigation state.\nvar originalModel = monaco.editor.createModel(\n\t"just some text\\n\\nHello World\\n\\nSome more text",\n\t"text/plain"\n);\nvar modifiedModel = monaco.editor.createModel(\n\t"just some Text\\n\\nHello World\\n\\nSome more changes",\n\t"text/plain"\n);\n\nvar diffEditor = monaco.editor.createDiffEditor(\n\tdocument.getElementById("container")\n);\ndiffEditor.setModel({\n\toriginal: originalModel,\n\tmodified: modifiedModel,\n});\n\nvar navi = monaco.editor.createDiffNavigator(diffEditor, {\n\tfollowsCaret: true, // resets the navigator state when the user selects something in the editor\n\tignoreCharChanges: true, // jump from line to line\n});\n\nwindow.setInterval(function () {\n\tnavi.next();\n}, 2000);\n'}}]);
//# sourceMappingURL=5026.js.map