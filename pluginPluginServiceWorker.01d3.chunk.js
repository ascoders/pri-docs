(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[9],{181:function(s,e){s.exports='\n                  <div class="markdown-body">\n                    <h1>Service worker</h1>\n<p>You can use <code>.serviceWorker</code> to extend code in service worker.</p>\n<h2>pipe</h2>\n<p><code>pipe</code> to serviceWorker file, wether in local build or prod build. <strong><code>serviceWorker.pipe</code> must be wrapped in <code>onAnalyseProject</code>.</strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.project.onAnalyseProject(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {\n    instance.serviceWorker.pipe(\n      <span class="hljs-function"><span class="hljs-params">text</span> =&gt;</span> <span class="hljs-string">`\n      \\${text}\n      self.addEventListener("fetch", event =&gt; {\n        // some code here..\n      })\n      `</span>\n    );\n  });\n};\n</code></pre>\n<h2>pipeAfterProdBuild</h2>\n<p><code>pipeAfterProdBuild</code> allow you to extend code to serviceWorker after prod build, <strong><code>serviceWorker.pipeAfterProdBuild</code> must be wrapped in <code>afterProdBuild</code>.</strong></p>\n<pre><code class="language-typescript"><span class="hljs-keyword">import</span> { pri } <span class="hljs-keyword">from</span> <span class="hljs-string">\'pri\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> (instance: <span class="hljs-keyword">typeof</span> pri) =&gt; {\n  instance.build.afterProdBuild(<span class="hljs-function"><span class="hljs-params">stats</span> =&gt;</span> {\n    instance.serviceWorker.pipeAfterProdBuild(\n      <span class="hljs-function"><span class="hljs-params">text</span> =&gt;</span> <span class="hljs-string">`\n      \\${text}\n      // use stats.assetsByChunkName do something..\n    `</span>\n    );\n  });\n};\n</code></pre>\n\n                  </div>\n              '}}]);