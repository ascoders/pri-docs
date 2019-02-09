(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[34],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),p=(a=r)&&a.__esModule?a:{default:a};var c=p.default.createContext({}),m=c.Provider,l=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return p.default.createElement(l,null,function(n){return p.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return p.default.createElement(m,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(319);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),p=t(0),c=(a=p)&&a.__esModule?a:{default:a},m=t(319);var l={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,p.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,p=e.children,m=e.components,s=void 0===m?{}:m,i=e.Layout,u=e.layoutProps,f=s[t+"."+n]||s[n]||l[n]||n;return i?c.default.createElement(i,o({components:s},u),c.default.createElement(f,r,p)):c.default.createElement(f,r,p)}}]),n}();n.default=(0,m.withMDXComponents)(s)},339:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t(30),o=t.n(a),r=t(5),p=t.n(r),c=t(7),m=t.n(c),l=t(8),s=t.n(l),i=t(9),u=t.n(i),f=t(10),d=t.n(f),g=t(0),h=t.n(g),M=t(320),E=function(e){function n(e){var t;return p()(this,n),(t=s()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),m()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return h.a.createElement(M.MDXTag,{name:"wrapper",components:n},h.a.createElement(M.MDXTag,{name:"h1",components:n},"Pages"),h.a.createElement(M.MDXTag,{name:"blockquote",components:n},h.a.createElement(M.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You can also create pages by ",h.a.createElement(M.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"features/project-dashboard"}},"project dashboard")," easily!")),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},".\n├── src\n│   └── pages\n│         ├── index.tsx         # Route to `/`\n│         └── hello\n│               └── index.tsx   # Route to `/hello`\n└── priconfig.json\n")),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Home page"),h.a.createElement(M.MDXTag,{name:"p",components:n},"Populate ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/pages/index.tsx")," inside your project:"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\nexport default () => <div>Hello pri!</div>;\n")),h.a.createElement(M.MDXTag,{name:"p",components:n},"Then this home page will route to ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/"),"."),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Other pages"),h.a.createElement(M.MDXTag,{name:"p",components:n},"For example, populate ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/pages/some-one/index.tsx")," inside your project:"),h.a.createElement(M.MDXTag,{name:"pre",components:n},h.a.createElement(M.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-tsx"}},"import * as React from 'react';\nexport default () => <div>Some one.</div>;\n")),h.a.createElement(M.MDXTag,{name:"p",components:n},"Then this page will route to ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/some-one"),"."),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Router rules"),h.a.createElement(M.MDXTag,{name:"p",components:n},"Routes will be automatically created by the file's path in ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/pages/**/index.tsx"),"."),h.a.createElement(M.MDXTag,{name:"p",components:n},h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"index.tsx")," will be read as router under each folders, The folder path is the URL path."),h.a.createElement(M.MDXTag,{name:"p",components:n},"For example, file ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"./src/pages/user/about/index.tsx")," will be found in route ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/user/about"),"."),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Custom routes"),h.a.createElement(M.MDXTag,{name:"p",components:n},"Set ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"routes")," in ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"priconfig.json"),", See ",h.a.createElement(M.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Config")," on the left menu."),h.a.createElement(M.MDXTag,{name:"h2",components:n},"Layout"),h.a.createElement(M.MDXTag,{name:"p",components:n},"See ",h.a.createElement(M.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"layout-support"}},"Layouts support"),"."))}}]),n}(h.a.Component)}}]);