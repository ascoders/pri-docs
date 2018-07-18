(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{268:function(e,s){e.exports='\n                  <div class="markdown-body">\n                    <h1>Config</h1>\n<blockquote>\n<p>You can also create config files by <a href="../features/project-dashboard">project dashboard</a> easily!</p>\n</blockquote>\n<p>You can create <code>pri.config.ts</code> in the root of your project directory.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { ProjectConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri/client\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">distDir</span>: <span class="hljs-string">\'output\'</span>\n} <span class="hljs-keyword">as</span> ProjectConfig;\n</code></pre>\n<p>Or use a function:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { ProjectConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri/client\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> isDevelopment =&gt; {\n  <span class="hljs-keyword">return</span> {\n    <span class="hljs-attr">distDir</span>: <span class="hljs-string">\'output\'</span>\n  } <span class="hljs-keyword">as</span> ProjectConfig;\n};\n</code></pre>\n<h2>Config options &lt;type&gt; &lt;defaultValue&gt;</h2>\n<h3>title <code>string</code> <code>&quot;pri&quot;</code></h3>\n<p>Title for html &lt;title&gt;.</p>\n<h3>devPort <code>number</code> <code>[Auto get free port]</code></h3>\n<p>localhost port when execute <code>npm start</code>. pri will find a free port by default, and for a special case, you can change it to a fixed port:</p>\n<pre><code class="language-js">{\n  <span class="hljs-attr">devPort</span>: <span class="hljs-number">9999</span>;\n}\n</code></pre>\n<h3>outFileName <code>string</code> <code>&quot;main.[hash].js&quot;</code></h3>\n<p>Output main file name.</p>\n<h3>outCssFileName <code>string</code> <code>&quot;main.[hash].css&quot;</code></h3>\n<p>Output main css file name.</p>\n<h3>bundleFileName <code>string</code> <code>&quot;bundle.js&quot;</code></h3>\n<p>Rewrite Bundle file name when execute <code>npm run bundle</code>.</p>\n<h3>devUrl <code>string</code> <code>null</code></h3>\n<p>Specify the development url, work both for <code>npm start</code> and <code>npm run preview</code>.</p>\n<p>In most scenes, it should not be configured.</p>\n<blockquote>\n<p>Conflict with <code>devPort</code></p>\n</blockquote>\n<h3>distDir <code>string</code> <code>&quot;dist&quot;</code></h3>\n<p>Dist main file name.</p>\n<blockquote>\n<p>Only take effect on <code>npm run build</code> | <code>pri build</code>.</p>\n</blockquote>\n<h3>publicPath <code>string</code> <code>/</code></h3>\n<p>Assets public path. eg: <code>&quot;https://www.some.com&quot;</code>, <code>&quot;https://www.some.com/somePath&quot;</code>, <code>&quot;/somePath&quot;</code>.</p>\n<ul>\n<li>If not set, result: <code>/&lt;distPath&gt;</code>.</li>\n<li>If set /somePath for example, result: <code>/somePath/&lt;distPath&gt;</code>.</li>\n<li>If set <a href="http://some.com">some.com</a> for example, result: <code>https://www.some.com/&lt;distPath&gt;</code>.</li>\n<li>If set <a href="http://some.com/somePath">some.com/somePath</a> for example, result: <code>https://www.some.com/somePath/&lt;distPath&gt;</code>.</li>\n</ul>\n<blockquote>\n<p>Only take effect on <code>npm run build</code> | <code>pri build</code>.</p>\n</blockquote>\n<h3>baseHref <code>string</code> <code>&quot;/&quot;</code></h3>\n<p>Base href for all pages.</p>\n<p>For example, <code>/admin</code> is the root path after deploy, you should set baseHref to <code>/admin</code>.</p>\n<p>There is no need to modify the code, routing <code>/</code> can automatically maps to <code>/admin</code>.</p>\n<p>Only take effect on <code>npm run build</code> | <code>pri build</code></p>\n<h3>customEnv <code>{ [key: string]: any }</code> <code>undefined</code></h3>\n<p>Custom env. For example:</p>\n<pre><code class="language-typescript"><span class="hljs-comment">// pri.config.ts</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">customEnv</span>: {\n    <span class="hljs-attr">user</span>: <span class="hljs-string">\'ascoders\'</span>\n  }\n} <span class="hljs-keyword">as</span> ProjectConfig;\n</code></pre>\n<p>Then you can use it in pages:</p>\n<pre><code class="language-typescript"><span class="hljs-comment">// ./pages/index.tsx</span>\n<span class="hljs-keyword">import</span> { env } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri/client\'</span>;\n<span class="hljs-built_in">console</span>.log(env.get(<span class="hljs-string">\'user\'</span>));\n</code></pre>\n<h3>useHttps <code>boolean</code> <code>true</code></h3>\n<p>Whether use https for dev server and preview server.</p>\n<h3>useServiceWorker <code>boolean</code> <code>false</code></h3>\n<p>Wether use service worker.</p>\n<blockquote>\n<p>Warning: if disable it, mocks, serverRender will become invalid.</p>\n</blockquote>\n<h3>clientServerRender <code>boolean</code> <code>false</code></h3>\n<p><em>Experiment.</em></p>\n<p>Wether enable client server render by service worker.</p>\n<blockquote>\n<p>Warning: depend on service worker, should set useServiceWorker=true first.</p>\n</blockquote>\n<h3>routes <code>IRoute[]</code> <code>[]</code></h3>\n<p>Custom routes. When this configuration exists, it will not parse the <code>pages</code> directory.</p>\n<p>For example:</p>\n<pre><code class="language-typescript"><span class="hljs-comment">// pri.config.ts</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">routes</span>: [\n    {\n      <span class="hljs-attr">path</span>: <span class="hljs-string">\'/\'</span>,\n      <span class="hljs-attr">component</span>: <span class="hljs-string">\'src/pages/home\'</span> <span class="hljs-comment">// direct to ./src/pages/home.tsx or ./src/pages/home/index.tsx</span>\n    },\n    {\n      <span class="hljs-attr">path</span>: <span class="hljs-string">\'/user/:id\'</span>,\n      <span class="hljs-attr">component</span>: <span class="hljs-string">\'src/page/user-info\'</span> <span class="hljs-comment">// direct to ./src/pages/user-info.tsx or ./src/pages/user-info/index.tsx</span>\n    }\n  ]\n} <span class="hljs-keyword">as</span> ProjectConfig;\n</code></pre>\n\n                  </div>\n              '}}]);