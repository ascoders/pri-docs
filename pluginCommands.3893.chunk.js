(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{162:function(e,n,t){"use strict";t.r(n);var l=t(0);n.default=l.createElement("div",{className:"markdown-body"},l.createElement("div",null,l.createElement("h1",null,"Commands"),l.createElement("p",null,"Use ",l.createElement("code",null,".commands")," to extend the commander."),l.createElement("h2",null,"registerCommand"),l.createElement("p",null,"Register new command by using ",l.createElement("code",null,"registerCommand")," method."),l.createElement("p",null,l.createElement("strong",null,l.createElement("code",null,"./src/index.ts"))),l.createElement("pre",null,l.createElement("code",{className:"language-typescript"},l.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",l.createElement("span",{className:"hljs-keyword"},"from")," ",l.createElement("span",{className:"hljs-string"},"'pri'"),";","\n","\n",l.createElement("span",{className:"hljs-keyword"},"export")," ",l.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",l.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ",l.createElement("span",{className:"hljs-comment"},"// Add new commander: pri deploy"),"\n","  ","instance.commands.registerCommand(","{","\n","    ",l.createElement("span",{className:"hljs-attr"},"name"),": ",l.createElement("span",{className:"hljs-string"},"'deploy'"),",","\n","    ",l.createElement("span",{className:"hljs-attr"},"description"),": ",l.createElement("span",{className:"hljs-string"},"'desc'"),",","\n","    ",l.createElement("span",{className:"hljs-attr"},"options"),":[[",l.createElement("span",{className:"hljs-string"},"'-d'"),", ",l.createElement("span",{className:"hljs-string"},"'--debug'"),", ",l.createElement("span",{className:"hljs-string"},"'deploy debug'"),"]]","\n","    ","action: ",l.createElement("span",{className:"hljs-keyword"},"async")," () => ","{","}","\n","  ","}",");","\n","}",";","\n")),l.createElement("p",null,"Then you can use ",l.createElement("code",null,"pri deploy"),"."),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Option"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"name"),l.createElement("td",null,"Command name, ",l.createElement("code",null,"pri <name>"),".")),l.createElement("tr",null,l.createElement("td",null,"description"),l.createElement("td",null,"Description for command, when excute ",l.createElement("code",null,"pri -h"),".")),l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"Command options")),l.createElement("tr",null,l.createElement("td",null,"action"),l.createElement("td",null,"Action for command, when excute ",l.createElement("code",null,"pri <name>."))))),l.createElement("h2",null,"expandCommand"),l.createElement("p",null,"Expand commander which already exist."),l.createElement("p",null,l.createElement("strong",null,l.createElement("code",null,"./src/index.ts"))),l.createElement("pre",null,l.createElement("code",{className:"language-typescript"},l.createElement("span",{className:"hljs-keyword"},"import")," ","{"," pri ","}"," ",l.createElement("span",{className:"hljs-keyword"},"from")," ",l.createElement("span",{className:"hljs-string"},'"pri"'),"\n","\n",l.createElement("span",{className:"hljs-keyword"},"export")," ",l.createElement("span",{className:"hljs-keyword"},"default")," (instance: ",l.createElement("span",{className:"hljs-keyword"},"typeof")," pri) => ","{","\n","  ",l.createElement("span",{className:"hljs-comment"},"// Run extra code between pri init"),"\n","  ","instance.commands.expandCommand(","{","\n","    ",l.createElement("span",{className:"hljs-attr"},"name"),": ",l.createElement("span",{className:"hljs-string"},'"init"'),",","\n","    ",l.createElement("span",{className:"hljs-attr"},"beforeAction"),": ",l.createElement("span",{className:"hljs-keyword"},"async")," (...args: any[]) => ","{","}","\n","    ","afterAction: ",l.createElement("span",{className:"hljs-keyword"},"async")," (...args: any[]) => ","{","}","\n","  ","}",")","\n","}","\n")),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Option"),l.createElement("th",null,"Description"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"name"),l.createElement("td",null,"Exist command name, ",l.createElement("code",null,"pri <name>"),".")),l.createElement("tr",null,l.createElement("td",null,"beforeAction"),l.createElement("td",null,"Action before ",l.createElement("code",null,"pri <name>"),".")),l.createElement("tr",null,l.createElement("td",null,"afterAction"),l.createElement("td",null,"Action after ",l.createElement("code",null,"pri <name>"),".")),l.createElement("tr",null,l.createElement("td",null,"options"),l.createElement("td",null,"Command options"))))))}}]);