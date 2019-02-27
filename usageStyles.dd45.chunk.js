(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[41],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s=t(0),m=(a=s)&&a.__esModule?a:{default:a};var r=m.default.createContext({}),c=r.Provider,p=r.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return m.default.createElement(p,null,function(n){return m.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return m.default.createElement(c,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return s(a).default}});var o=t(319);function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return s(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),m=t(0),r=(a=m)&&a.__esModule?a:{default:a},c=t(319);var p={inlineCode:"code",wrapper:"div"},l=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,m.Component),s(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,s=void 0===a?{}:a,m=e.children,c=e.components,l=void 0===c?{}:c,i=e.Layout,u=e.layoutProps,d=l[t+"."+n]||l[n]||p[n]||n;return i?r.default.createElement(i,o({components:l},u),r.default.createElement(d,s,m)):r.default.createElement(d,s,m)}}]),n}();n.default=(0,c.withMDXComponents)(l)},333:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return D});var a=t(30),o=t.n(a),s=t(5),m=t.n(s),r=t(7),c=t.n(r),p=t(8),l=t.n(p),i=t(9),u=t.n(i),d=t(10),g=t.n(d),f=t(0),M=t.n(f),E=t(320),D=function(e){function n(e){var t;return m()(this,n),(t=l()(this,u()(n).call(this,e))).layout=null,t}return g()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return M.a.createElement(E.MDXTag,{name:"wrapper",components:n},M.a.createElement(E.MDXTag,{name:"h1",components:n},"Styles"),M.a.createElement(E.MDXTag,{name:"p",components:n},"We use ",M.a.createElement(E.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/css-modules/css-modules"}},"css-modules")," to write styles."),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── src\n│   └── pages\n│         ├── index.tsx\n│         └── index.css         # Style file\n└── priconfig.json\n")),M.a.createElement(E.MDXTag,{name:"blockquote",components:n},M.a.createElement(E.MDXTag,{name:"p",components:n,parentName:"blockquote"},"If you use ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"css-in-js")," such as ",M.a.createElement(E.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/styled-components/styled-components"}},"styled-components"),", you can skip this introduction.")),M.a.createElement(E.MDXTag,{name:"h2",components:n},"sass"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── src\n│   └── pages\n│         ├── index.tsx\n│         └── index.scss         # Scss file\n└── priconfig.json\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"To use sass, you should install ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node-sass")," ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sass-loader"),":"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"npm i node-sass sass-loader --save\n")),M.a.createElement(E.MDXTag,{name:"h2",components:n},"less"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── src\n│   └── pages\n│         ├── index.tsx\n│         └── index.less         # Less file\n└── priconfig.json\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"To use less, you should install ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"less-loader"),":"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-shell"}},"npm i less-loader --save\n")),M.a.createElement(E.MDXTag,{name:"h2",components:n},"css"),M.a.createElement(E.MDXTag,{name:"p",components:n},"Already support."),M.a.createElement(E.MDXTag,{name:"h2",components:n},"Usage"),M.a.createElement(E.MDXTag,{name:"p",components:n},"You can import ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"css")," files into JSX file."),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},".button {\n  color: red;\n}\n")),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\nimport './index.css';\n\nexport default () => <button className=\"button\" />;\n")),M.a.createElement(E.MDXTag,{name:"h2",components:n},"Css Modules Usage"),M.a.createElement(E.MDXTag,{name:"p",components:n},"If set ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xx.scss")," to ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"xx.module.scss"),", will enable ",M.a.createElement(E.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/css-modules/css-modules"}},"CSS Modules"),"."),M.a.createElement(E.MDXTag,{name:"p",components:n},"For example, we have 3 files named ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/index.tsx"),"、",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/input.module.css"),"、",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/button.module.scss"),", the two style files:"),M.a.createElement(E.MDXTag,{name:"p",components:n},M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},"src/input.module.css:")),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},"input {\n  border: 1px solid #ccc;\n  font-size: 14px;\n}\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},"src/button.module.scss:")),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss"}},"button {\n  color: blue;\n  &:hover {\n    color: red;\n  }\n}\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"Here we use it in ",M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},"src/index.tsx:")),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\nimport inputStyles from './input.module.css';\nimport buttonStyles from './button.module.scss';\n\nexport default () => (\n  <div>\n    <div className={inputStyles.input}>input</div>\n    <div className={buttonStyles.button}>button</div>\n  </div>\n);\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"For project type, just run ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm start"),", for component type, just run ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm run docs"),", it's as simple as that."),M.a.createElement(E.MDXTag,{name:"h2",components:n},"Compile"),M.a.createElement(E.MDXTag,{name:"p",components:n},"Css is compiled by ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"css-module")," rules:"),M.a.createElement(E.MDXTag,{name:"p",components:n},M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},"Any css file:")),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-scss"}},".container {\n  color: red;\n}\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"Will compile to:"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},".some-path-style-container-22VSk {\n  color: red;\n}\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},M.a.createElement(E.MDXTag,{name:"strong",components:n,parentName:"p"},"Any ts file:")),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import styles from './some-path/style.module.scss'\n\nexport () => <div className={styles.container} />\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"Will compile to:"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import styles from './some-path/style.module.scss'\n\nexport () => <div className=\"some-path-style-container-22VSk\" />\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"Don't worry, ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"css-modules")," won't take effect in ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node_modules"),", so the following css will be output directly without processing:"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import 'antd/dist/antd.css';\n")),M.a.createElement(E.MDXTag,{name:"h2",components:n},"Css extract"),M.a.createElement(E.MDXTag,{name:"p",components:n},"If you set ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cssExtract: true")," in config, you will get a extra css file."),M.a.createElement(E.MDXTag,{name:"p",components:n},"If ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cssExtract: false"),", all css will auto imported by import js."),M.a.createElement(E.MDXTag,{name:"blockquote",components:n},M.a.createElement(E.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You can set ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"outFileName")," and ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"outCssFileName")," to rename out css name.")),M.a.createElement(E.MDXTag,{name:"h2",components:n},"Deploy component"),M.a.createElement(E.MDXTag,{name:"p",components:n},"You have two way to create usage for component style."),M.a.createElement(E.MDXTag,{name:"p",components:n},"Here is your component ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"my-component")," code example:"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\nimport inputStyles from './input.module.css';\nimport buttonStyles from './button.module.scss';\n\nexport default () => (\n  <div>\n    <div className={inputStyles.input}>input</div>\n    <div className={buttonStyles.button}>button</div>\n  </div>\n);\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"If you set ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cssExtract: false")," (default), we can use it just by import entry file:"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import MyComponent from 'my-component' // All css will be injected dynamically.\n\nReactDOM.render(<MyComponent>, dom)\n")),M.a.createElement(E.MDXTag,{name:"p",components:n},"If you set ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"cssExtract: true"),", all CSS files will be picked to ",M.a.createElement(E.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"my-component/dist/index.css"),":"),M.a.createElement(E.MDXTag,{name:"pre",components:n},M.a.createElement(E.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import MyComponent from 'my-component'\nimport 'my-component/dist/index.css' // Import static css file.\n\nReactDOM.render(<MyComponent>, dom)\n")))}}]),n}(M.a.Component)}}]);