(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(e,a,t){"use strict";t.r(a);var s=t(0);a.default=s.createElement("div",{className:"markdown-body"},s.createElement("div",null,s.createElement("h1",null,"pri-plugin-rematch · ",s.createElement("a",{href:"https://www.npmjs.com/package/pri-plugin-rematch"},s.createElement("img",{src:"https://img.shields.io/npm/v/pri-plugin-rematch.svg?style=flat-square",alt:"npm version"}))),s.createElement("p",null,s.createElement("a",{href:"https://github.com/rematch/rematch"},"rematch")," is a nice framework for redux."),s.createElement("p",null,"We provide ",s.createElement("code",null,"pri-plugin-rematch")," to use it more easy!"),s.createElement("h2",null,"Usage"),s.createElement("pre",null,s.createElement("code",{className:"language-bash"},"npm i pri-plugin-rematch","\n")),s.createElement("p",null,"Let’s try it! For example, create a model named ",s.createElement("code",null,"user"),":"),s.createElement("p",null,s.createElement("strong",null,"src/models/user.ts")),s.createElement("pre",null,s.createElement("code",{className:"language-typescript"},s.createElement("span",{className:"hljs-keyword"},"export")," ",s.createElement("span",{className:"hljs-keyword"},"default")," model(","{","\n","  ",s.createElement("span",{className:"hljs-attr"},"state"),": ","{","\n","    ",s.createElement("span",{className:"hljs-attr"},"name"),": ",s.createElement("span",{className:"hljs-string"},"'jeck'"),",","\n","    ",s.createElement("span",{className:"hljs-attr"},"age"),": ",s.createElement("span",{className:"hljs-number"},"25"),"\n","  ","}",",","\n","  ",s.createElement("span",{className:"hljs-attr"},"reducers"),": ","{","\n","    ",s.createElement("span",{className:"hljs-attr"},"increment"),": ",s.createElement("span",{className:"hljs-function"},"(",s.createElement("span",{className:"hljs-params"},"state, count = ",s.createElement("span",{className:"hljs-number"},"1")),") =>")," ","{","\n","      ",s.createElement("span",{className:"hljs-keyword"},"return")," ","{","\n","        ","...state,","\n","        ",s.createElement("span",{className:"hljs-attr"},"age"),": state.age + count","\n","      ","}",";","\n","    ","}","\n","  ","}",",","\n","  ",s.createElement("span",{className:"hljs-attr"},"effects"),": ","{","\n","    ",s.createElement("span",{className:"hljs-keyword"},"async")," asyncIncrement() ","{","\n","      ",s.createElement("span",{className:"hljs-keyword"},"await")," ",s.createElement("span",{className:"hljs-keyword"},"new")," ",s.createElement("span",{className:"hljs-built_in"},"Promise"),"(",s.createElement("span",{className:"hljs-function"},s.createElement("span",{className:"hljs-params"},"resolve")," =>")," ","{","\n","        ","setTimeout(resolve, ",s.createElement("span",{className:"hljs-number"},"1000"),");","\n","      ","}",");","\n","      ",s.createElement("span",{className:"hljs-keyword"},"this"),".increment(",s.createElement("span",{className:"hljs-number"},"5"),");","\n","    ","}","\n","  ","}","\n","}",");","\n")),s.createElement("blockquote",null,s.createElement("p",null,"To enhance typescript support for model, we provide a model function here:")),s.createElement("pre",null,s.createElement("code",{className:"language-typescript"},s.createElement("span",{className:"hljs-keyword"},"const")," model = ",s.createElement("span",{className:"xml"},s.createElement("span",{className:"hljs-tag"},"<","\n","  ",s.createElement("span",{className:"hljs-attr"},"State"),",","\n","  ",s.createElement("span",{className:"hljs-attr"},"Reducers")," ",s.createElement("span",{className:"hljs-attr"},"extends")," ","{","\n","    ","[",s.createElement("span",{className:"hljs-attr"},"key:")," ",s.createElement("span",{className:"hljs-attr"},"string"),"]",s.createElement("span",{className:"hljs-attr"},":")," (",s.createElement("span",{className:"hljs-attr"},"state"),"?",s.createElement("span",{className:"hljs-attr"},":")," ",s.createElement("span",{className:"hljs-attr"},"State"),", ",s.createElement("span",{className:"hljs-attr"},"payload"),"?",s.createElement("span",{className:"hljs-attr"},":")," ",s.createElement("span",{className:"hljs-attr"},"any"),") =>")," State;","\n","  ","}","\n",">(obj: ","{","\n","  ","state: State;","\n","  ","reducers: Reducers;","\n","  ","effects: ","{","\n","    ","[key: string]: (this: any, ...args: any[]) => void;","\n","  ","}",";","\n","}",") => ","{","\n","  ","return obj;","\n","}",";","\n"))),s.createElement("p",null,"Then, use it in pages!"),s.createElement("p",null,s.createElement("strong",null,"src/pages/index.tsx")),s.createElement("pre",null,s.createElement("code",{className:"language-typescript"},s.createElement("span",{className:"hljs-keyword"},"import")," ","{"," connect ","}"," ",s.createElement("span",{className:"hljs-keyword"},"from")," ",s.createElement("span",{className:"hljs-string"},"'pri/models'"),";","\n","\n","@connect(","\n","  ",s.createElement("span",{className:"hljs-function"},s.createElement("span",{className:"hljs-params"},"state")," =>")," ","{","\n","    ",s.createElement("span",{className:"hljs-keyword"},"return")," ","{","\n","      ",s.createElement("span",{className:"hljs-attr"},"age"),": state.user.age","\n","    ","}",";","\n","  ","}",",","\n","  ","dispatch => ","{","\n","    ",s.createElement("span",{className:"hljs-keyword"},"return")," ","{"," ",s.createElement("span",{className:"hljs-attr"},"increment"),": dispatch.user.increment, ",s.createElement("span",{className:"hljs-attr"},"asyncIncrement"),": dispatch.user.asyncIncrement ","}",";","\n","  ","}","\n",")","\n",s.createElement("span",{className:"hljs-keyword"},"export")," ",s.createElement("span",{className:"hljs-keyword"},"default")," ",s.createElement("span",{className:"hljs-class"},s.createElement("span",{className:"hljs-keyword"},"class")," ",s.createElement("span",{className:"hljs-title"},"Page")," ",s.createElement("span",{className:"hljs-keyword"},"extends")," ",s.createElement("span",{className:"hljs-title"},"React"),".",s.createElement("span",{className:"hljs-title"},"PureComponent"),"<",s.createElement("span",{className:"hljs-title"},"Props"),", ",s.createElement("span",{className:"hljs-title"},"State"),"> "),"{","\n","  ",s.createElement("span",{className:"hljs-comment"},"/**/"),"\n","}","\n")),s.createElement("blockquote",null,s.createElement("p",null,"Import connect from ‘pri/models’ is a better way, ‘pri/models’ provides a strong typed ",s.createElement("code",null,"connect")," function:")),s.createElement("img",{src:"https://user-images.githubusercontent.com/7970947/39965212-62615908-56c7-11e8-9084-081734eaf280.png",width:400})))}}]);