(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[19],{319:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=t(0),c=(a=r)&&a.__esModule?a:{default:a};var p=c.default.createContext({}),l=p.Provider,i=p.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return c.default.createElement(i,null,function(n){return c.default.createElement(e,o({components:t||n},a))})}};n.default=function(e){var n=e.components,t=e.children;return c.default.createElement(l,{value:n},t)}},320:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(321);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(319);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},321:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),c=t(0),p=(a=c)&&a.__esModule?a:{default:a},l=t(319);var i={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,c.Component),r(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,l=e.components,s=void 0===l?{}:l,m=e.Layout,u=e.layoutProps,f=s[t+"."+n]||s[n]||i[n]||n;return m?p.default.createElement(m,o({components:s},u),p.default.createElement(f,r,c)):p.default.createElement(f,r,c)}}]),n}();n.default=(0,l.withMDXComponents)(s)},354:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var a=t(30),o=t.n(a),r=t(5),c=t.n(r),p=t(7),l=t.n(p),i=t(8),s=t.n(i),m=t(9),u=t.n(m),f=t(10),d=t.n(f),g=t(0),h=t.n(g),y=t(320),b=function(e){function n(e){var t;return c()(this,n),(t=s()(this,u()(n).call(this,e))).layout=null,t}return d()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.components;o()(e,["components"]);return h.a.createElement(y.MDXTag,{name:"wrapper",components:n},h.a.createElement(y.MDXTag,{name:"h1",components:n},"Auto pick shared modules"),h.a.createElement(y.MDXTag,{name:"h2",components:n},"Isolated dependence"),h.a.createElement(y.MDXTag,{name:"p",components:n},"If ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jquery")," and ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lodash")," are either dependent by each files like following code:"),h.a.createElement(y.MDXTag,{name:"pre",components:n},h.a.createElement(y.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'// src/pages/foo.tsx\nimport * as $ from "jquery"\n\n// src/pages/bar.tsx\nimport * as _ from "lodash"\n')),h.a.createElement(y.MDXTag,{name:"p",components:n},h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"JQuery")," will be packaged into the ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"foo.tsx"),", and ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"lodash")," will be packaged into the ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bar.tsx"),"."),h.a.createElement(y.MDXTag,{name:"h2",components:n},"Shared dependence"),h.a.createElement(y.MDXTag,{name:"p",components:n},"If ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jquery")," is both dependent by each files like following code:"),h.a.createElement(y.MDXTag,{name:"pre",components:n},h.a.createElement(y.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-typescript"}},'// src/pages/foo.tsx\nimport * as $ from "jquery"\n\n// src/pages/bar.tsx\nimport * as $ from "jquery"\n')),h.a.createElement(y.MDXTag,{name:"p",components:n},"Neither ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"foo.tsx")," nor ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bar.tsx")," will package ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jquery"),", instand, ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"jquery")," will be packaged into ",h.a.createElement(y.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"chunk")," file."))}}]),n}(h.a.Component)}}]);