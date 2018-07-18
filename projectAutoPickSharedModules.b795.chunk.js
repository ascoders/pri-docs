(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{273:function(s,e){s.exports='\n                  <div class="markdown-body">\n                    <h1>Auto pick shared modules</h1>\n<h2>Isolated dependence</h2>\n<p>If <code>jquery</code> and <code>lodash</code> are either dependent by each files like following code:</p>\n<pre><code class="language-typescript"><span class="hljs-comment">// src/pages/foo.tsx</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> $ <span class="hljs-keyword">from</span> <span class="hljs-string">"jquery"</span>\n\n<span class="hljs-comment">// src/pages/bar.tsx</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> _ <span class="hljs-keyword">from</span> <span class="hljs-string">"lodash"</span>\n</code></pre>\n<p><code>JQuery</code> will be packaged into the <code>foo.tsx</code>, and <code>lodash</code> will be packaged into the <code>bar.tsx</code>.</p>\n<h2>Shared dependence</h2>\n<p>If <code>jquery</code> is both dependent by each files like following code:</p>\n<pre><code class="language-typescript"><span class="hljs-comment">// src/pages/foo.tsx</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> $ <span class="hljs-keyword">from</span> <span class="hljs-string">"jquery"</span>\n\n<span class="hljs-comment">// src/pages/bar.tsx</span>\n<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> $ <span class="hljs-keyword">from</span> <span class="hljs-string">"jquery"</span>\n</code></pre>\n<p>Neither <code>foo.tsx</code> nor <code>bar.tsx</code> will package <code>jquery</code>, instand, <code>jquery</code> will be packaged into <code>chunk</code> file.</p>\n\n                  </div>\n              '}}]);