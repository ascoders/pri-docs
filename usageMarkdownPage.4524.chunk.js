(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[29],{152:function(s,a){s.exports='\n                  <div class="markdown-body">\n                    <h1>Markdown page</h1>\n<pre><code>.\n├── src\n│   └── pages\n│         ├── index.md         # Markdom page, route to `/`\n│         └── hello\n│               └── index.md   # Markdom page, route to `/hello`\n└── priconfig.json\n</code></pre>\n<p>For example, populate <code>./src/pages/example-page/index.md</code> inside your project:</p>\n<pre><code class="language-text">## Markdown File\n</code></pre>\n<p>Then this page will route to <code>/example-page</code>.</p>\n<h2>Layout</h2>\n<pre><code>.\n├── src\n│   └── layouts\n│         └── markdown.tsx         # Layout for markdown\n└── priconfig.json\n</code></pre>\n<p>Create <code>./src/layouts/markdown.tsx</code>, then all markdown pages will use this layout template. For example:</p>\n<pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">padding:</span> <span class="hljs-attr">10</span> }}&gt;</span>{this.props.children}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>;\n</code></pre>\n\n                  </div>\n              '}}]);