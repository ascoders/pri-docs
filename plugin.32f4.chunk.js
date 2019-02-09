(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[2],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),p=(a=r)&&a.__esModule?a:{default:a};var i=p.default.createContext({}),l=i.Provider,m=i.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return p.default.createElement(m,null,function(n){return p.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return p.default.createElement(l,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(319);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),p=t(0),i=(a=p)&&a.__esModule?a:{default:a},l=t(319);var m={inlineCode:"code",wrapper:"div"},c=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,p.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,p=e.children,l=e.components,c=void 0===l?{}:l,s=e.Layout,u=e.layoutProps,g=c[t+"."+n]||c[n]||m[n]||n;return s?i.default.createElement(s,o({components:c},u),i.default.createElement(g,r,p)):i.default.createElement(g,r,p)}}]),n}();n.default=(0,l.withMDXComponents)(c)},360:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t(30),o=t.n(a),r=t(5),p=t.n(r),i=t(7),l=t.n(i),m=t(8),c=t.n(m),s=t(9),u=t.n(s),g=t(10),d=t.n(g),f=t(0),h=t.n(f),M=t(320),E=function(e){function n(e){var t;return p()(this,n),(t=c()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return h.a.createElement(M.MDXTag,{name:"wrapper",components:n},h.a.createElement(M.MDXTag,{name:"h1",components:n},"Plugin setup"),h.a.createElement(M.MDXTag,{name:"p",components:n},"It's easy to expand the commander, analyse project files, and modifying the generated entry file by plugins."),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Install"),h.a.createElement(M.MDXTag,{name:"p",components:n},"First, create an empty folder, and ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm i pri"),":"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"mkdir test;\ncd test;\nnpm i pri --save;\n")),h.a.createElement(M.MDXTag,{name:"p",components:n},"Then, run ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npx pri init"),", and choose type: ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Pri Plugin"),"."),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npx pri init\n\n# choose type: Pri Plugin\n? Choose project type (Use arrow keys)\n  Project\n  Component\n❯ Pri Plugin\n")),h.a.createElement(M.MDXTag,{name:"blockquote",components:n},h.a.createElement(M.MDXTag,{name:"p",components:n,parentName:"blockquote"},"No ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npx"),"? Run ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./node_modules/.bin/pri init"))),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Plguin structor"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── .temp                     # Gitignored. Temporary file folder.\n├── coverage                  # Gitignored. Code coverage folder.\n├── dist                      # Gitignored. Dist folder, auto generated by `npm run build`.\n├── tests                     # Tests folder.\n├── src                       # Source files folder.\n│   ├── plugin                # Plugin real path\n│   └── index.ts              # Plugin entry.\n└── priconfig.json            # Config file.\n")),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Introduce"),h.a.createElement(M.MDXTag,{name:"p",components:n},"Pri plugin load by entry file ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/index.ts"),", here is three import method you should to implement:"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"// Required. Normal plugin\nexport const getPlugin = () => import('./plugin');\n\n// Optional. Web ui plugin\nexport const getUIPlugins = () => [import('./web-menu'), import('./web-store')];\n\n// Required. Plugin config\nexport const getConfig = () => ({\n  // Required. Plugin name\n  name: 'pri-plugin-dob',\n  // Optional. which plugin this plugin depend on. Plugin will be loaded after it dependences.\n  dependencies: ['pri-plugin-login']\n});\n")),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Plug-in loading mode"),h.a.createElement(M.MDXTag,{name:"p",components:n},"All the pri-plugin should be named like ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri-plugin-*")," or ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@ali/pri-plugin-*"),", for example:"),h.a.createElement(M.MDXTag,{name:"ul",components:n},h.a.createElement(M.MDXTag,{name:"li",components:n,parentName:"ul"},h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pri-plugin-test")),h.a.createElement(M.MDXTag,{name:"li",components:n,parentName:"ul"},h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"pri-plugin-command-deploy"))),h.a.createElement(M.MDXTag,{name:"p",components:n},"For example:"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "dependencies": {\n    "pri": "*",\n    "pri-plugin-test": "1.0.0"\n  }\n}\n')),h.a.createElement(M.MDXTag,{name:"p",components:n},"And when you installed ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri"),", ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri-plugin-test")," at the same time in your project , the plug-in will be automatically loaded when any ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pri")," scripts are executed."),h.a.createElement(M.MDXTag,{name:"blockquote",components:n},h.a.createElement(M.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You can also install pri-plugins in pri-plugin! This is a way to merge plug-in.")),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Debug plug-in"),h.a.createElement(M.MDXTag,{name:"p",components:n},"Change your npm path from project ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"package.json"),":"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "dependencies": {\n    "pri": "*",\n    "pri-plugin-test": "file:../pri-plugin-test"\n  }\n}\n')),h.a.createElement(M.MDXTag,{name:"p",components:n},"And run ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm start")," both in plugin and project root."))}}]),n}(h.a.Component)}}]);