(("undefined"!=typeof self?self:this).webpackJsonp=("undefined"!=typeof self?self:this).webpackJsonp||[]).push([[45],{136:function(s,n){s.exports='\n                  <div class="markdown-body">\n                    <h1>Write docs</h1>\n<p>If you create <code>some-name.tsx</code> files in the <code>docs</code> folder, you can see these documents through <code>npm run docs</code>.</p>\n<pre><code>.\n│── docs              # Used when `npm run docs`\n│   └── basic.tsx\n├── src\n│   ├── index\n│   └── utils\n└── priconfig.json\n</code></pre>\n<p>For example, we create <code>./docs/basic.tsx</code>:</p>\n<pre><code class="language-tsx"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">\'react\'</span>;\n<span class="hljs-keyword">import</span> Component <span class="hljs-keyword">from</span> <span class="hljs-string">\'../src/index\'</span>;\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Props</span> </span>{}\n\n<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">State</span> </span>{}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Page</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">PureComponent</span>&lt;<span class="hljs-title">Props</span>, <span class="hljs-title">State</span>&gt; </span>{\n  public <span class="hljs-keyword">static</span> defaultProps = <span class="hljs-keyword">new</span> Props();\n  public state = <span class="hljs-keyword">new</span> State();\n\n  public render() {\n    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Component</span> /&gt;</span>;\n  }\n}\n</span></code></pre>\n<p>And when run <code>npm run docs</code>, it looks like this:</p>\n<p><img src="https://user-images.githubusercontent.com/7970947/41517073-fac494f0-72ea-11e8-802b-1cc8febb364e.png" alt="image"></p>\n<p>The document menu is on the left side, the instance of the current doc is on the right side, and the bottom is the code of the current doc.</p>\n\n                  </div>\n              '}}]);