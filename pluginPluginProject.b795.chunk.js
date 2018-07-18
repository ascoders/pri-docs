(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{280:function(s,n){s.exports='\n                  <div class="markdown-body">\n                    <h1>Project</h1>\n<p>Use <code>.project</code> to extend project operator.</p>\n<h2>projectRootPath</h2>\n<p>Get project root path.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  <span class="hljs-keyword">const</span> projectRootPath = instance.projectRootPath;\n};\n</code></pre>\n<h2>projectConfig</h2>\n<p>Get project config in <code>pri.config.ts</code>.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  <span class="hljs-keyword">const</span> projectConfig = instance.projectConfig;\n};\n</code></pre>\n<h2>isDevelopment</h2>\n<p>Judge whether it is a production environment.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  <span class="hljs-keyword">const</span> isDevelopment = instance.isDevelopment;\n};\n</code></pre>\n<h2>onAnalyseProject</h2>\n<p>Every time <code>pri</code> scan project files.</p>\n<p><strong><code>./src/index.ts</code></strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\ninterface IAnalyseInfo {\n  <span class="hljs-attr">myCustomPlugin</span>: {\n    <span class="hljs-attr">hasComponents</span>: boolean;\n  };\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.onAnalyseProject(<span class="hljs-function">(<span class="hljs-params">files, setPipe</span>) =&gt;</span> {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">myCustomPlugin</span>: {\n        <span class="hljs-attr">hasComponents</span>: files.some(<span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> {\n          <span class="hljs-keyword">const</span> relativePath = path.relative(instance.projectRootPath, path.join(file.dir, file.name));\n          <span class="hljs-keyword">return</span> relativePath.startsWith(<span class="hljs-string">\'src/components\'</span>);\n        })\n      }\n    } <span class="hljs-keyword">as</span> IAnalyseInfo;\n  });\n};\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>files</td>\n<td>All project’s files.</td>\n</tr>\n<tr>\n<td>setPipe</td>\n<td>Set some text</td>\n</tr>\n</tbody>\n</table>\n<h3>Return value</h3>\n<p>The return value from <code>onAnalyseProject</code> callback will merge into project analyse info, you can access it from <code>onCreateEntry</code>.</p>\n<h2>onCreateEntry</h2>\n<p>Every time <code>pri</code> create entry file. You can get analyse info from first params in first callback function.</p>\n<p><strong><code>./src/index.ts</code></strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.onCreateEntry(<span class="hljs-function">(<span class="hljs-params">analyseInfo: IAnalyseInfo, entry</span>) =&gt;</span> {\n    <span class="hljs-comment">// Get analyseInfo from above.</span>\n    <span class="hljs-keyword">const</span> hasComponents = analyseInfo.myCustomPlugin.hasComponents;\n\n    <span class="hljs-keyword">const</span> componentsRelativePath = path.relative(<span class="hljs-string">\'.temp\'</span>, <span class="hljs-string">\'src/components\'</span>);\n\n    <span class="hljs-keyword">if</span> (hasComponents) {\n      <span class="hljs-comment">// Expand importer code before header.</span>\n      entry.pipeHeader(<span class="hljs-function"><span class="hljs-params">header</span> =&gt;</span> {\n        <span class="hljs-keyword">return</span> <span class="hljs-string">`\n          \\$\\{header\\}\n          import components from "\\$\\{componentsRelativePath\\}"\n        `</span>;\n      });\n    }\n  });\n};\n</code></pre>\n<h3>Entry</h3>\n<p>You can use methods like <code>entry.pipeHeader</code> and <code>entry.pipeBody</code> to extend entry code. Usage:</p>\n<pre><code class="language-typescript">entry.pipeBody(<span class="hljs-function"><span class="hljs-params">str</span> =&gt;</span> str);\n</code></pre>\n<h3>Entry structor</h3>\n<p>Here are some buit-in pipe position:</p>\n<p><strong><code>app.tsx</code></strong></p>\n<pre><code class="language-js">// ----- pipeAppHeader before\nimport createBrowserHistory from "history/createBrowserHistory"\nimport { setCustomEnv, setEnvLocal, setEnvProd } from "pri/client"\nimport * as React from "react"\nimport * as ReactDOM from "react-dom"\nimport Loadable from "react-loadable"\nimport { Redirect, Route, Router, Switch } from "react-router-dom"\n// ----- pipeAppHeader after\n\n// ----- pipeAppBody before\nexport const pageLoadableMap = new Map&lt;string, any&gt;()\nexport const customHistory = createBrowserHistory({\n  basename: ".." // baseHref from projectConfig\n})\n// ----- pipeAppBody after\n\n// ----- pipeAppComponent before\nexport class App extends React.PureComponent&lt;any, any&gt; {\n  // ----- pipeAppClassBody before\n  // ----- pipeAppClassBody after\n\n  public render() {\n    return (\n      // ----- pipeAppRouter before\n      &lt;Router&gt;\n        // ----- pipeAppRoutes before\n        // ----- pipeAppRoutes after\n      &lt;/Router&gt;\n      // ----- pipeAppRouter after\n    )\n  }\n}\n// ----- pipeAppComponent after\n</code></pre>\n<p><strong><code>entry.tsx</code></strong></p>\n<pre><code class="language-js"><span class="hljs-comment">// ----- pipeEntryHeader before</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>;\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> ReactDOM <span class="hljs-keyword">from</span> <span class="hljs-string">\'react-dom\'</span>;\n<span class="hljs-keyword">import</span> App, { pageLoadableMap } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app\'</span>;\n<span class="hljs-comment">// ----- pipeEntryHeader after</span>\n\n<span class="hljs-comment">// ----- pipeEntryRender before</span>\nReactDOM.render(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Root</span> /&gt;</span>, document.getElementById(\'root\'));\n// ----- pipeEntryRender after\n</span></code></pre>\n<h3>Custom pipe</h3>\n<p>You can also get or set custom code position in plugins. Using <code>entry.pipe</code>:</p>\n<pre><code class="language-typescript">instance.project.onCreateEntry(<span class="hljs-function">(<span class="hljs-params">analyseInfo: IAnalyseInfo, entry</span>) =&gt;</span> {\n  entry.pipeBody(<span class="hljs-function"><span class="hljs-params">body</span> =&gt;</span> {\n    <span class="hljs-keyword">return</span> <span class="hljs-string">`\n    \\$\\{body\\}\n    some code after body.\n    \\${entry.pipe.get("my-custom-position", "defaultValue")}\n    some other code.\n  `</span>;\n  });\n});\n</code></pre>\n<p>And in other plugins, you can pipe custom position by using <code>setPipe</code> inside <code>onAnalyseProject</code>:</p>\n<pre><code class="language-typescript">instance.project.onAnalyseProject(<span class="hljs-function">(<span class="hljs-params">files, setPipe</span>) =&gt;</span> {\n  setPipe(<span class="hljs-string">\'my-custom-position\'</span>, text =&gt; {\n    <span class="hljs-keyword">return</span> <span class="hljs-string">`\n    \\$\\{text\\}\n    some code.\n  `</span>;\n  });\n});\n</code></pre>\n<p><strong><code>pipe</code></strong></p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Params</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>get</td>\n<td><code>name: string</code>, <code>defaultValue: string</code></td>\n<td>Get custom pipe code.</td>\n</tr>\n<tr>\n<td>set</td>\n<td><code>pipe: (str: string) =&gt; string</code></td>\n<td>Set custom pipe code.</td>\n</tr>\n</tbody>\n</table>\n<h2>whiteFileRules</h2>\n<p>Pri uses a white list for project file management. You can use <code>whiteFileRules.add</code> to add project white file list.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.whiteFileRules.add(<span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> {\n    <span class="hljs-keyword">const</span> relativePath = path.relative(instance.projectRootPath, file.dir)\n    <span class="hljs-keyword">return</span> relativePath === <span class="hljs-string">"src/pages"</span> &amp;&amp; file.name === <span class="hljs-string">"404"</span> &amp;&amp; file.ext === <span class="hljs-string">".tsx"</span>\n  })\n})\n</code></pre>\n<p>It mean that file or dir is validate, when return <code>true</code>.</p>\n<blockquote>\n<p>Any project files that are not on the white list will report error.</p>\n</blockquote>\n<h2>lint</h2>\n<p>You can run lint anywhere by execute <code>project.lint()</code>:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.lint();\n};\n</code></pre>\n<h2>lintFilter</h2>\n<p>Ignore some file from lint.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.lintFilter(<span class="hljs-function"><span class="hljs-params">filePath</span> =&gt;</span> !filePath.startsWith(<span class="hljs-string">\'/Home\'</span>));\n};\n</code></pre>\n<h2>checkProjectFiles</h2>\n<p>Check project white file list.</p>\n<p><code>pri dev</code> and <code>pri build</code> has built in <code>checkProjectFiles</code> function, you can call this function when add a new command.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  <span class="hljs-keyword">await</span> instance.project.checkProjectFiles();\n};\n</code></pre>\n<h2>ensureProjectFiles</h2>\n<p>Ensure important files exist, like <code>.gitignore</code>, <code>.npmignore</code> and so on. You can call it in a custom command.</p>\n<p>This method will called when excute <code>pri init</code>, <code>pri</code>, <code>pri build</code>.</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  <span class="hljs-keyword">await</span> instance.project.ensureProjectFiles();\n};\n</code></pre>\n<h2>addProjectFiles</h2>\n<p>Hook when running <code>addProjectFiles</code>, you can add your custom files here:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.addProjectFiles({\n    <span class="hljs-attr">fileName</span>: <span class="hljs-string">\'abc.json\'</span>,\n    <span class="hljs-attr">pipeContent</span>: <span class="hljs-function"><span class="hljs-params">prevContent</span> =&gt;</span>\n      <span class="hljs-built_in">JSON</span>.stringify({\n        <span class="hljs-attr">bin</span>: <span class="hljs-string">\'npm start\'</span>\n      })\n  });\n};\n</code></pre>\n\n                  </div>\n              '}}]);