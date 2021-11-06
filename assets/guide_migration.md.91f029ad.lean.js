import{_ as n,c as a,o as s,d as e}from"./app.37e6730d.js";const h='{"title":"v1\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC158\uD558\uAE30","description":"","frontmatter":{"title":"v1\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC158\uD558\uAE30"},"headers":[{"level":2,"title":"\uC124\uC815 \uBC14\uAFB8\uAE30","slug":"config-options-change"},{"level":2,"title":"\uBCC4\uCE6D \uB3D9\uC791 \uBCC0\uACBD","slug":"alias-behavior-change"},{"level":2,"title":"Vue \uC9C0\uC6D0","slug":"vue-support"},{"level":3,"title":"\uCEE4\uC2A4\uD140 \uBE14\uB85D \uBCC0\uD658","slug":"custom-blocks-transforms"},{"level":2,"title":"React \uC9C0\uC6D0","slug":"react-support"},{"level":2,"title":"HMR API \uBCC0\uACBD","slug":"hmr-api-change"},{"level":2,"title":"\uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD3EC\uB9F7 \uBCC0\uACBD","slug":"manifest-format-change"},{"level":2,"title":"\uD50C\uB7EC\uADF8\uC778 \uAC1C\uBC1C\uC790\uB97C \uC704\uD574","slug":"for-plugin-authors"}],"relativePath":"guide/migration.md","lastUpdated":1636189935367}',t={},o=e(`__VP_STATIC_START__<h1 id="migrating-from-v1" tabindex="-1">v1\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC158\uD558\uAE30 <a class="header-anchor" href="#migrating-from-v1" aria-hidden="true">#</a></h1><h2 id="config-options-change" tabindex="-1">\uC124\uC815 \uBC14\uAFB8\uAE30 <a class="header-anchor" href="#config-options-change" aria-hidden="true">#</a></h2><ul><li><p>\uC544\uB798\uC758 \uC635\uC158\uB4E4\uC740 \uC81C\uAC70\uB418\uC5C8\uC73C\uBA70, <a href="./api-plugin.html">\uD50C\uB7EC\uADF8\uC778</a>\uC744 \uD1B5\uD574 \uAD6C\uD604\uD574\uC57C \uD569\uB2C8\uB2E4.</p><ul><li><code>resolvers</code></li><li><code>transforms</code></li><li><code>indexHtmlTransforms</code></li></ul></li><li><p><code>jsx</code>\uC640 <code>enableEsbuild</code>\uB294 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774 \uB300\uC2E0 \uC0C8\uB85C\uC6B4 <a href="/config/#esbuild"><code>esbuild</code></a> \uC635\uC158\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p></li><li><p><a href="/config/#css-modules">CSS \uAD00\uB828 \uC635\uC158</a>\uC740 \uC774\uC81C <code>css</code> \uC544\uB798\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.</p></li><li><p>\uBAA8\uB4E0 <a href="/config/#build-options">\uBE4C\uB4DC\uBCC4 \uC635\uC158</a>\uB294 \uC774\uC81C <code>build</code> \uC544\uB798\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.</p><ul><li><code>rollupInputOptions</code>\uC640 <code>rollupOutputOptions</code>\uB294 <a href="/config/#build-rollupoptions"><code>build.rollupOptions</code></a>\uB85C \uB300\uCCB4\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</li><li><code>esbuildTarget</code>\uC740 \uC774\uC81C <a href="/config/#build-target"><code>build.target</code></a> \uC785\uB2C8\uB2E4.</li><li><code>emitManifest</code>\uB294 \uC774\uC81C <a href="/config/#build-manifest"><code>build.manifest</code></a> \uC785\uB2C8\uB2E4.</li><li>\uC544\uB798\uC758 \uBE4C\uB4DC \uC635\uC158\uC740 \uC81C\uAC70\uB418\uC5C8\uC73C\uB098, \uD50C\uB7EC\uADF8\uC778 \uD6C5(Hook) \uB610\uB294 \uAE30\uD0C0 \uC635\uC158\uC744 \uD1B5\uD574 \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. <ul><li><code>entry</code></li><li><code>rollupDedupe</code></li><li><code>emitAssets</code></li><li><code>emitIndex</code></li><li><code>shouldPreload</code></li><li><code>configureBuild</code></li></ul></li></ul></li><li><p>\uBAA8\uB4E0 <a href="/config/#server-options">\uC11C\uBC84\uBCC4 \uC635\uC158</a>\uC740 \uC774\uC81C <code>server</code> \uC544\uB798\uC5D0 \uC704\uCE58\uD569\uB2C8\uB2E4.</p><ul><li><code>hostname</code>\uC740 \uC774\uC81C <a href="/config/#server-host"><code>server.host</code></a> \uC785\uB2C8\uB2E4.</li><li><code>httpsOptions</code>\uB294 \uC81C\uAC70\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB300\uC2E0, <a href="/config/#server-https"><code>server.https</code></a>\uAC00 \uC9C1\uC811 \uC635\uC158 \uAC1D\uCCB4\uB97C \uBC1B\uC744 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</li><li><code>chokidarWatchOptions</code>\uB294 \uC774\uC81C <a href="/config/#server-watch"><code>server.watch</code></a> \uC785\uB2C8\uB2E4.</li></ul></li><li><p><a href="/config/#assetsinclude"><code>assetsInclude</code></a>\uB294 \uC774\uC81C \uD568\uC218 \uB300\uC2E0 <code>string | RegExp | (string | RegExp)[]</code> \uD0C0\uC785\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4.</p></li><li><p>\uBAA8\uB4E0 Vue \uC635\uC158\uC740 \uC81C\uAC70\uB418\uC5C8\uC73C\uBA70, Vue \uD50C\uB7EC\uADF8\uC778\uC5D0 \uC635\uC158\uC744 \uC804\uB2EC\uD558\uB3C4\uB85D \uAD6C\uC131\uD574\uC57C \uD569\uB2C8\uB2E4.</p></li></ul><h2 id="alias-behavior-change" tabindex="-1">\uBCC4\uCE6D \uB3D9\uC791 \uBCC0\uACBD <a class="header-anchor" href="#alias-behavior-change" aria-hidden="true">#</a></h2><p><a href="/config/#resolve-alias"><code>alias</code></a>\uB294 \uC774\uC81C <code>@rollup/plugin-alias</code>\uB85C \uC804\uB2EC\uB418\uACE0, \uB354 \uC774\uC0C1 \uACBD\uB85C\uC758 \uC2DC\uC791\uACFC \uB05D\uC5D0 \uC2AC\uB798\uC2DC\uAC00 \uD544\uC694\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C, 1.0 \uC2A4\uD0C0\uC77C\uC758 \uB514\uB809\uD130\uB9AC \uBCC4\uCE6D \uD0A4 \uB05D\uC5D0 \uC788\uB294 \uC2AC\uB798\uC2DC\uB294 \uC81C\uAC70\uD574\uC8FC\uC138\uC694:</p><div class="language-diff"><pre><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> alias: { &#39;/@foo/&#39;: path.resolve(__dirname, &#39;some-special-dir&#39;) }
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> alias: { &#39;/@foo&#39;: path.resolve(__dirname, &#39;some-special-dir&#39;) }
</span></span></code></pre></div><p>\uC870\uAE08 \uB354 \uC138\uBD80\uC801\uC73C\uB85C \uAD6C\uC131\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74, <code>[{ find: RegExp, replacement: string }]</code> \uD615\uD0DC\uB85C \uC774\uC6A9\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="vue-support" tabindex="-1">Vue \uC9C0\uC6D0 <a class="header-anchor" href="#vue-support" aria-hidden="true">#</a></h2><p>Vite 2.0 \uCF54\uC5B4\uB294 \uC774\uC81C \uD2B9\uC815 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uC885\uC18D\uC801\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. Vue\uB294 \uC774\uC81C <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue" target="_blank" rel="noopener noreferrer"><code>@vitejs/plugin-vue</code></a>\uB97C \uD1B5\uD574 \uC81C\uACF5\uB418\uBA70, \uAC04\uB2E8\uD558\uAC8C \uC124\uCE58\uD558\uACE0 \uC544\uB798\uC640 \uAC19\uC774 Vite \uC124\uC815\uC5D0 \uCD94\uAC00\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-js"><pre><code><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="custom-blocks-transforms" tabindex="-1">\uCEE4\uC2A4\uD140 \uBE14\uB85D \uBCC0\uD658 <a class="header-anchor" href="#custom-blocks-transforms" aria-hidden="true">#</a></h3><p>\uCEE4\uC2A4\uD140 \uD50C\uB7EC\uADF8\uC778\uC744 \uC0AC\uC6A9\uD574 \uC544\uB798\uC640 \uAC19\uC774 Vue \uCEE4\uC2A4\uD140 \uBE14\uB85D\uC744 \uBCC0\uD658(Transform)\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:</p><div class="language-ts"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">const</span> vueI18nPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">,</span>
  <span class="token function">transform</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">vue&amp;type=i18n</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.ya?ml$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      code <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;js-yaml&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">safeLoad</span><span class="token punctuation">(</span>code<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">export default Comp =&gt; {
      Comp.i18n = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
    }</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vueI18nPlugin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="react-support" tabindex="-1">React \uC9C0\uC6D0 <a class="header-anchor" href="#react-support" aria-hidden="true">#</a></h2><p>React\uC758 Fast Refresh\uB294 \uC774\uC81C <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh" target="_blank" rel="noopener noreferrer"><code>@vitejs/plugin-react-refresh</code></a> \uD50C\uB7EC\uADF8\uC778\uC744 \uD1B5\uD574 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.</p><h2 id="hmr-api-change" tabindex="-1">HMR API \uBCC0\uACBD <a class="header-anchor" href="#hmr-api-change" aria-hidden="true">#</a></h2><p><code>import.<wbr>meta.hot.acceptDeps()</code>\uB294 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB610\uD55C <a href="./api-hmr.html#hot-accept-deps-cb"><code>import.<wbr>meta.hot.accept()</code></a>\uB294 \uC774\uC81C \uD558\uB098 \uC774\uC0C1\uC758 \uB514\uD39C\uB358\uC2DC\uB97C \uBC1B\uC744 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.</p><h2 id="manifest-format-change" tabindex="-1">\uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD3EC\uB9F7 \uBCC0\uACBD <a class="header-anchor" href="#manifest-format-change" aria-hidden="true">#</a></h2><p>\uC774\uC81C \uBE4C\uB4DC \uB9E4\uB2C8\uD398\uC2A4\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC740 \uD3EC\uB9F7\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;index.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/index.acaf2b48.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index.css&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/index.7b7dbd85.css&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token property">&quot;asset.png&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/asset.0ab0f9cd.png&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>JS \uCCAD\uD06C \uD30C\uC77C\uC758 \uACBD\uC6B0, \uC0AC\uC804 \uB85C\uB4DC \uC9C0\uC2DC\uBB38(Preload Directives)\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uB370 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uAC00\uC838\uC640\uC9C4(Imported) \uCCAD\uD06C\uB3C4 \uB098\uC5F4\uB429\uB2C8\uB2E4.</p><h2 id="for-plugin-authors" tabindex="-1">\uD50C\uB7EC\uADF8\uC778 \uAC1C\uBC1C\uC790\uB97C \uC704\uD574 <a class="header-anchor" href="#for-plugin-authors" aria-hidden="true">#</a></h2><p>Vite 2\uB294 Rollup \uD50C\uB7EC\uADF8\uC778\uC744 \uD655\uC7A5\uD558\uB294 \uC644\uC804\uD788 \uC7AC\uC124\uACC4\uB41C \uD50C\uB7EC\uADF8\uC778 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uC640 \uAD00\uB828\uB41C \uB0B4\uC6A9\uC740 \uC0C8\uB85C\uC6B4 <a href="./api-plugin.html">\uD50C\uB7EC\uADF8\uC778 \uAC1C\uBC1C \uAC00\uC774\uB4DC</a>\uB97C \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p><p>\uC544\uB798\uB294 v1 \uD50C\uB7EC\uADF8\uC778\uC744 v2\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uB294 \uBC29\uBC95\uC5D0 \uB300\uD55C \uBA87 \uAC00\uC9C0 \uC9C0\uCE68 \uC0AC\uD56D\uC785\uB2C8\uB2E4:</p><ul><li><code>resolvers</code> -&gt; <a href="https://rollupjs.org/guide/en/#resolveid" target="_blank" rel="noopener noreferrer"><code>resolveId</code></a> \uD6C5\uC744 \uC774\uC6A9</li><li><code>transforms</code> -&gt; <a href="https://rollupjs.org/guide/en/#transform" target="_blank" rel="noopener noreferrer"><code>transform</code></a> \uD6C5\uC744 \uC774\uC6A9</li><li><code>indexHtmlTransforms</code> -&gt; <a href="./api-plugin.html#transformindexhtml"><code>transformIndexHtml</code></a> \uD6C5\uC744 \uC774\uC6A9</li><li>\uAC00\uC0C1(Virtual) \uD30C\uC77C \uC81C\uACF5 -&gt; <a href="https://rollupjs.org/guide/en/#resolveid" target="_blank" rel="noopener noreferrer"><code>resolveId</code></a> + <a href="https://rollupjs.org/guide/en/#load" target="_blank" rel="noopener noreferrer"><code>load</code></a> \uD6C5\uC744 \uC774\uC6A9</li><li><code>alias</code>, <code>define</code> \uB610\uB294 \uAE30\uD0C0 \uC124\uC815 \uC635\uC158 \uCD94\uAC00 -&gt; <a href="./api-plugin.html#config"><code>config</code></a> \uD6C5\uC744 \uC774\uC6A9</li></ul><p>\uB300\uBD80\uBD84\uC758 \uB85C\uC9C1\uC740 \uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uC544\uB2CC \uD50C\uB7EC\uADF8\uC778 \uD6C5\uC744 \uD1B5\uD574 \uC774\uB8E8\uC5B4\uC838\uC57C \uD558\uAE30 \uB54C\uBB38\uC5D0, \uBBF8\uB4E4\uC6E8\uC5B4\uC758 \uD544\uC694\uC131\uC740 \uD06C\uAC8C \uC904\uC5B4\uB4E4\uAC8C \uB429\uB2C8\uB2E4. \uB610\uD55C Vite\uC758 \uB0B4\uBD80 \uC11C\uBC84\uB294 \uC774\uC81C Koa\uAC00 \uC544\uB2CC <a href="https://github.com/senchalabs/connect" target="_blank" rel="noopener noreferrer">connect</a>\uC758 \uC778\uC2A4\uD134\uC2A4\uC785\uB2C8\uB2E4.</p>__VP_STATIC_END__`,26),p=[o];function c(i,l,r,u,d,k){return s(),a("div",null,p)}var f=n(t,[["render",c]]);export{h as __pageData,f as default};
