(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[22],{159:function(s,n){s.exports='\n                  <div class="markdown-body">\n                    <h1>Deploy to backend</h1>\n<p>If the HTML page is controlled by the backend, you need to adjust the output name of <code>js</code> and <code>css</code>, and the output <code>html</code> will be ignored.</p>\n<p>For example, here is a fixed template response:</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://cdn.demo.com/app/static/bundle.css"</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.demo.com/app/static/bundle.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<p>and when publish, if files in <code>build</code> will upload to <code>https://cdn.demo.com/app</code> path, we should use <strong><code>distDir</code></strong> + <strong><code>outFileName</code></strong> to fit this path.</p>\n<p>You can set <strong><code>./priconfig.json</code></strong>:</p>\n<pre><code class="language-json">{\n  <span class="hljs-attr">"distDir"</span>: <span class="hljs-string">"build/static"</span>,\n  <span class="hljs-attr">"outFileName"</span>: <span class="hljs-string">"bundle.js"</span>,\n  <span class="hljs-attr">"outCssFileName"</span>: <span class="hljs-string">"bundle.css"</span>\n}\n</code></pre>\n\n                  </div>\n              '}}]);