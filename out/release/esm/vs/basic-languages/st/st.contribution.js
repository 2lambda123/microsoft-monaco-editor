/*! For license information please see st.contribution.js.LICENSE.txt */
import{registerLanguage}from"../_.contribution";registerLanguage({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>import("./st")});