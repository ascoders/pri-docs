(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[37],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),c=(a=r)&&a.__esModule?a:{default:a};var i=c.default.createContext({}),p=i.Provider,l=i.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return c.default.createElement(l,null,function(n){return c.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return c.default.createElement(p,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(319);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=t(0),i=(a=c)&&a.__esModule?a:{default:a},p=t(319);var l={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,p=e.components,s=void 0===p?{}:p,m=e.Layout,u=e.layoutProps,f=s[t+"."+n]||s[n]||l[n]||n;return m?i.default.createElement(m,o({components:s},u),i.default.createElement(f,r,c)):i.default.createElement(f,r,c)}}]),n}();n.default=(0,p.withMDXComponents)(s)},336:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t(30),o=t.n(a),r=t(5),c=t.n(r),i=t(7),p=t.n(i),l=t(8),s=t.n(l),m=t(9),u=t.n(m),f=t(10),d=t.n(f),h=t(0),g=t.n(h),v=t(320),E=function(e){function n(e){var t;return c()(this,n),(t=s()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),p()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return g.a.createElement(v.MDXTag,{name:"wrapper",components:n},g.a.createElement(v.MDXTag,{name:"h1",components:n},"Project files"),g.a.createElement(v.MDXTag,{name:"p",components:n},"After any of this three commands are executed: ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm start|build|preview")," or ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npx pri init"),", will create following files automatically:"),g.a.createElement(v.MDXTag,{name:"h2",components:n},".gitignore"),g.a.createElement(v.MDXTag,{name:"p",components:n},"Ensure that ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},".gitignore")," has some basic rules: ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"node_modules")," ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dist")," and so on."),g.a.createElement(v.MDXTag,{name:"h2",components:n},"tsconfig.json"),g.a.createElement(v.MDXTag,{name:"p",components:n},"Ensure that typescript working."),g.a.createElement(v.MDXTag,{name:"h2",components:n},"tslint.json"),g.a.createElement(v.MDXTag,{name:"p",components:n},"Ensure uniform code inspection rules."),g.a.createElement(v.MDXTag,{name:"h2",components:n},".babelrc"),g.a.createElement(v.MDXTag,{name:"p",components:n},"Everyone likes ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"babel"),"."),g.a.createElement(v.MDXTag,{name:"h2",components:n},"package.json"),g.a.createElement(v.MDXTag,{name:"p",components:n},"Ensure ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"package.json")," has these npm scripts: ",g.a.createElement(v.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"npm start|build|preview"),"."),g.a.createElement(v.MDXTag,{name:"h2",components:n},".vscode"),g.a.createElement(v.MDXTag,{name:"p",components:n},"Ensure that developers have a unified editor experience."),g.a.createElement(v.MDXTag,{name:"h2",components:n},".prettierrc"),g.a.createElement(v.MDXTag,{name:"p",components:n},"For code format."))}}]),n}(g.a.Component)}}]);