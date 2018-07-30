(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{330:function(s,n){s.exports='\n                  <div class="markdown-body">\n                    <h1>Debug online</h1>\n<p>Most time we debug code using <code>npm start</code> locally, but some times, we need to debug online.</p>\n<p>For example, <code>http://example.com</code> serve following html:</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://localhost:7777/static/bundle.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<p>We should use <strong><code>publicPath</code></strong> + <strong><code>outFileName</code></strong> to fit this path.</p>\n<p>So, you can set <strong><code>./pri.config.ts</code></strong> to:</p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { ProjectConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri/client\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">useHttps</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">devPort</span>: <span class="hljs-number">7777</span>,\n  <span class="hljs-attr">publicPath</span>: <span class="hljs-string">\'http://localhost:7777/static\'</span>,\n  <span class="hljs-attr">outFileName</span>: <span class="hljs-string">\'bundle.js\'</span>\n} <span class="hljs-keyword">as</span> ProjectConfig;\n</code></pre>\n<p>Then, run <code>npm start</code>.</p>\n\n                  </div>\n              '}}]);