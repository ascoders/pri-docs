(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[8],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),p=(a=r)&&a.__esModule?a:{default:a};var m=p.default.createContext({}),c=m.Provider,s=m.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return p.default.createElement(s,null,function(n){return p.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return p.default.createElement(c,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(319);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),p=t(0),m=(a=p)&&a.__esModule?a:{default:a},c=t(319);var s={inlineCode:"code",wrapper:"div"},l=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,p.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,p=e.children,c=e.components,l=void 0===c?{}:c,i=e.Layout,g=e.layoutProps,u=l[t+"."+n]||l[n]||s[n]||n;return i?m.default.createElement(i,o({components:l},g),m.default.createElement(u,r,p)):m.default.createElement(u,r,p)}}]),n}();n.default=(0,c.withMDXComponents)(l)},365:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return D});var a=t(30),o=t.n(a),r=t(5),p=t.n(r),m=t(7),c=t.n(m),s=t(8),l=t.n(s),i=t(9),g=t.n(i),u=t(10),d=t.n(u),f=t(0),E=t.n(f),M=t(320),D=function(e){function n(e){var t;return p()(this,n),(t=l()(this,g()(n).call(this,e))).layout=null,t}return d()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return E.a.createElement(M.MDXTag,{name:"wrapper",components:n},E.a.createElement(M.MDXTag,{name:"h1",components:n},"Project"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Use ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".project")," to extend project operator."),E.a.createElement(M.MDXTag,{name:"h2",components:n},"projectRootPath"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Get project root path."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\nconst projectRootPath = pri.projectRootPath;\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"projectConfig"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Get project config in ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"priconfig.json"),"."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\nconst projectConfig = pri.projectConfig;\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"isDevelopment"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Judge whether it is a production environment."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\nconst isDevelopment = pri.isDevelopment;\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"onAnalyseProject"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Every time ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri")," scan project files."),E.a.createElement(M.MDXTag,{name:"p",components:n},E.a.createElement(M.MDXTag,{name:"strong",components:n,parentName:"p"},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"./src/plugin/index.ts"))),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\ninterface IAnalyseInfo {\n  myCustomPlugin: {\n    hasComponents: boolean;\n  };\n}\n\npri.project.onAnalyseProject((files, setPipe) => {\n  return {\n    myCustomPlugin: {\n      hasComponents: files.some(file => {\n        const relativePath = path.relative(pri.projectRootPath, path.join(file.dir, file.name));\n        return relativePath.startsWith('src/components');\n      })\n    }\n  } as IAnalyseInfo;\n});\n")),E.a.createElement(M.MDXTag,{name:"table",components:n},E.a.createElement(M.MDXTag,{name:"thead",components:n,parentName:"table"},E.a.createElement(M.MDXTag,{name:"tr",components:n,parentName:"thead"},E.a.createElement(M.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Option"),E.a.createElement(M.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),E.a.createElement(M.MDXTag,{name:"tbody",components:n,parentName:"table"},E.a.createElement(M.MDXTag,{name:"tr",components:n,parentName:"tbody"},E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"files"),E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"All project's files.")),E.a.createElement(M.MDXTag,{name:"tr",components:n,parentName:"tbody"},E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"setPipe"),E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Set some text")))),E.a.createElement(M.MDXTag,{name:"h3",components:n},"Return value"),E.a.createElement(M.MDXTag,{name:"p",components:n},"The return value from ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onAnalyseProject")," callback will merge into project analyse info, you can access it from ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onCreateEntry"),"."),E.a.createElement(M.MDXTag,{name:"h2",components:n},"onCreateEntry"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Every time ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri")," create entry file. You can get analyse info from first params in first callback function."),E.a.createElement(M.MDXTag,{name:"p",components:n},E.a.createElement(M.MDXTag,{name:"strong",components:n,parentName:"p"},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"./src/plugin/index.ts"))),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\npri.project.onCreateEntry((analyseInfo: IAnalyseInfo, entry) => {\n  // Get analyseInfo from above.\n  const hasComponents = analyseInfo.myCustomPlugin.hasComponents;\n\n  const componentsRelativePath = path.relative('.temp', 'src/components');\n\n  if (hasComponents) {\n    // Expand importer code before header.\n    entry.pipeHeader(header => {\n      return `\n        ${header}\n        import components from \"${componentsRelativePath}\"\n      `;\n    });\n  }\n});\n")),E.a.createElement(M.MDXTag,{name:"h3",components:n},"Entry"),E.a.createElement(M.MDXTag,{name:"p",components:n},"You can use methods like ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entry.pipeHeader")," and ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entry.pipeBody")," to extend entry code. Usage:"),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"entry.pipeBody(str => str);\n")),E.a.createElement(M.MDXTag,{name:"h3",components:n},"Entry structor"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Here are some buit-in pipe position:"),E.a.createElement(M.MDXTag,{name:"p",components:n},E.a.createElement(M.MDXTag,{name:"strong",components:n,parentName:"p"},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"app.tsx"))),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'// ----- pipeAppHeader before\nimport createBrowserHistory from "history/createBrowserHistory"\nimport { setCustomEnv, setEnvLocal, setEnvProd } from "pri/client"\nimport * as React from "react"\nimport * as ReactDOM from "react-dom"\nimport Loadable from "react-loadable"\nimport { Redirect, Route, Router, Switch } from "react-router-dom"\n// ----- pipeAppHeader after\n\n// ----- pipeAppBody before\nexport const pageLoadableMap = new Map<string, any>()\nexport const customHistory = createBrowserHistory({\n  basename: ".." // baseHref from projectConfig\n})\n// ----- pipeAppBody after\n\n// ----- pipeAppComponent before\nexport class App extends React.PureComponent<any, any> {\n  // ----- pipeAppClassBody before\n  // ----- pipeAppClassBody after\n\n  public render() {\n    return (\n      // ----- pipeAppRouter before\n      <Router>\n        // ----- pipeAppRoutes before\n        // ----- pipeAppRoutes after\n      </Router>\n      // ----- pipeAppRouter after\n    )\n  }\n}\n// ----- pipeAppComponent after\n')),E.a.createElement(M.MDXTag,{name:"p",components:n},E.a.createElement(M.MDXTag,{name:"strong",components:n,parentName:"p"},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"entry.tsx"))),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"// ----- pipeEntryHeader before\nimport * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport App, { pageLoadableMap } from './app';\n// ----- pipeEntryHeader after\n\n// ----- pipeEntryRender before\nReactDOM.render(<Root />, document.getElementById('root'));\n// ----- pipeEntryRender after\n")),E.a.createElement(M.MDXTag,{name:"h3",components:n},"Custom pipe"),E.a.createElement(M.MDXTag,{name:"p",components:n},"You can also get or set custom code position in plugins. Using ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"entry.pipe"),":"),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'pri.project.onCreateEntry((analyseInfo: IAnalyseInfo, entry) => {\n  entry.pipeBody(body => {\n    return `\n    ${body}\n    some code after body.\n    ${entry.pipe.get("my-custom-position", "defaultValue")}\n    some other code.\n  `;\n  });\n});\n')),E.a.createElement(M.MDXTag,{name:"p",components:n},"And in other plugins, you can pipe custom position by using ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setPipe")," inside ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onAnalyseProject"),":"),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"pri.project.onAnalyseProject((files, setPipe) => {\n  setPipe('my-custom-position', text => {\n    return `\n    ${text}\n    some code.\n  `;\n  });\n});\n")),E.a.createElement(M.MDXTag,{name:"p",components:n},E.a.createElement(M.MDXTag,{name:"strong",components:n,parentName:"p"},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"pipe"))),E.a.createElement(M.MDXTag,{name:"table",components:n},E.a.createElement(M.MDXTag,{name:"thead",components:n,parentName:"table"},E.a.createElement(M.MDXTag,{name:"tr",components:n,parentName:"thead"},E.a.createElement(M.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Option"),E.a.createElement(M.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Params"),E.a.createElement(M.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),E.a.createElement(M.MDXTag,{name:"tbody",components:n,parentName:"table"},E.a.createElement(M.MDXTag,{name:"tr",components:n,parentName:"tbody"},E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get"),E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"name: string"),", ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"defaultValue: string")),E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Get custom pipe code.")),E.a.createElement(M.MDXTag,{name:"tr",components:n,parentName:"tbody"},E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"set"),E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"pipe: (str: string) => string")),E.a.createElement(M.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Set custom pipe code.")))),E.a.createElement(M.MDXTag,{name:"h2",components:n},"whiteFileRules"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Pri uses a white list for project file management. You can use ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"whiteFileRules.add")," to add project white file list."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'pri.project.whiteFileRules.add(file => {\n  const relativePath = path.relative(pri.projectRootPath, file.dir)\n  return relativePath === "src/pages" && file.name === "404" && file.ext === ".tsx"\n})\n')),E.a.createElement(M.MDXTag,{name:"p",components:n},"It mean that file or dir is validate, when return ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"true"),"."),E.a.createElement(M.MDXTag,{name:"blockquote",components:n},E.a.createElement(M.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Any project files that are not on the white list will report error.")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"lint"),E.a.createElement(M.MDXTag,{name:"p",components:n},"You can run lint anywhere by execute ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"project.lint()"),":"),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\npri.project.lint();\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"lintFilter"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Ignore some file from lint."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\npri.project.lintFilter(filePath => !filePath.startsWith('/Home'));\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"checkProjectFiles"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Check project white file list."),E.a.createElement(M.MDXTag,{name:"p",components:n},E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri dev")," and ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri build")," has built in ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"checkProjectFiles")," function, you can call this function when add a new command."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\nawait pri.project.checkProjectFiles();\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"ensureProjectFiles"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Ensure important files exist, like ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".gitignore"),", ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".npmignore")," and so on. You can call it in a custom command."),E.a.createElement(M.MDXTag,{name:"p",components:n},"This method will called when excute ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri init"),", ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri"),", ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri build"),"."),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\nawait pri.project.ensureProjectFiles();\n")),E.a.createElement(M.MDXTag,{name:"h2",components:n},"addProjectFiles"),E.a.createElement(M.MDXTag,{name:"p",components:n},"Hook when running ",E.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addProjectFiles"),", you can add your custom files here:"),E.a.createElement(M.MDXTag,{name:"pre",components:n},E.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},"import { pri } from 'pri';\n\npri.project.addProjectFiles({\n  fileName: 'abc.json',\n  pipeContent: prevContent =>\n    JSON.stringify({\n      bin: 'npm start'\n    })\n});\n")))}}]),n}(E.a.Component)}}]);