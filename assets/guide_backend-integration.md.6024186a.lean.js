import{_ as s,c as n,o as a,d as t}from"./app.37e6730d.js";const q='{"title":"\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30","description":"","frontmatter":{"title":"\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30"},"headers":[],"relativePath":"guide/backend-integration.md","lastUpdated":1636189935367}',p={},o=t(`__VP_STATIC_START__<h1 id="backend-integration" tabindex="-1">\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30 <a class="header-anchor" href="#backend-integration" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\uB178\uD2B8</p><p>\uAE30\uC874 \uBC31\uC5D4\uB4DC(\uC608 : Rails, Laravel)\uB97C \uC0AC\uC6A9\uD558\uC5EC HTML\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC \uC5D0\uC14B\uC5D0 Vite\uB97C \uC0AC\uC6A9\uD558\uAE30\uB97C \uC6D0\uD55C\uB2E4\uBA74 <a href="https://github.com/vitejs/awesome-vite#integrations-with-backends" target="_blank" rel="noopener noreferrer">Awesome Vite</a>\uC5D0 \uB098\uC5F4\uB41C \uAE30\uC874\uC758 \uD1B5\uD569\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.</p><p>\uB9CC\uC57D \uC9C1\uC811 \uC124\uC815\uD558\uAE30\uB97C \uC6D0\uD55C\uB2E4\uBA74, \uC544\uB798\uC758 \uAC00\uC774\uB4DC\uC5D0 \uB530\uB77C \uC218\uB3D9\uC73C\uB85C \uC774\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><ol><li><p>Vite config \uD30C\uC77C\uC5D0\uC11C \uD56D\uBAA9\uC744 \uAD6C\uC131\uD558\uACE0 \uBE4C\uB4DC \uB9E4\uB2C8\uD398\uC2A4\uD2B8\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// outDir\uC5D0\uC11C manifest.json\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</span>
    manifest<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    rollupOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \uAE30\uBCF8 .html \uD56D\uBAA9\uC744 \uB36E\uC5B4\uC501\uB2C8\uB2E4.</span>
      input<span class="token operator">:</span> <span class="token string">&#39;/path/to/main.js&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\uB9CC\uC57D <a href="/config/#build-polyfillmodulepreload">Module Preload Polyfill</a> \uAE30\uB2A5\uC744 \uBE44\uD65C\uC131\uD654\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uC544\uB798\uC640 \uAC19\uC774 \uD3F4\uB9AC\uD544\uC744 \uAC00\uC838\uC640\uC57C\uB9CC \uD569\uB2C8\uB2E4.</p><div class="language-js"><pre><code><span class="token comment">// \uC571 \uC9C4\uC785\uC810(Entry)\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.</span>
<span class="token keyword">import</span> <span class="token string">&#39;vite/modulepreload-polyfill&#39;</span>
</code></pre></div></li><li><p>\uAC1C\uBC1C\uC744 \uC704\uD574 \uC11C\uBC84\uC758 HTML \uD15C\uD50C\uB9BF\uC5D0 \uB2E4\uC74C\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4(<code>http://localhost:3000</code>\uC744 Vite\uAC00 \uC2E4\uD589\uC911\uC778 \uB85C\uCEEC URL\uB85C \uB300\uCCB4).</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- \uAC1C\uBC1C\uD558\uB294 \uACBD\uC6B0 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:3000/@vite/client<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:3000/main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\uB610\uD55C \uC11C\uBC84\uAC00 Vite \uC791\uC5C5 \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C \uC815\uC801 \uC5D0\uC14B\uC744 \uC81C\uACF5\uD558\uB3C4\uB85D \uAD6C\uC131\uB418\uC5B4 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uC5D0\uC14B\uC774 \uC81C\uB300\uB85C \uB85C\uB4DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><p>React\uB97C <code>@vitejs/plugin-react-refresh</code>\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uD50C\uB7EC\uADF8\uC778\uC774 \uC0AC\uC6A9\uC790\uAC00 \uC81C\uACF5\uD558\uB294 HTML\uC744 \uC218\uC815\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC704 \uC2A4\uD06C\uB9BD\uD2B8 \uC774\uC804\uC5D0 \uC774\uAC83\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> RefreshRuntime <span class="token keyword">from</span> <span class="token string">&quot;http://localhost:3000/@react-refresh&quot;</span>
  RefreshRuntime<span class="token punctuation">.</span><span class="token function">injectIntoGlobalHook</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> 
  window<span class="token punctuation">.</span><span class="token function-variable function">$RefreshReg$</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">$RefreshSig$</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> type
  window<span class="token punctuation">.</span>__vite_plugin_react_preamble_installed__ <span class="token operator">=</span> <span class="token boolean">true</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\uC6B4\uC601\uD558\uB294 \uACBD\uC6B0 : <code>vite build</code>\uB97C \uC2E4\uD589\uD55C \uD6C4\uC5D0 <code>manifest.json</code>\uD30C\uC77C\uC740 \uB2E4\uB978 \uC5D0\uC14B \uD30C\uC77C\uACFC \uD568\uAED8 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD30C\uC77C \uC608\uC2DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;main.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/main.4889e940.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dynamicImports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;views/foo.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;css&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;assets/main.b82dbe22.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;assets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;assets/asset.0ab0f9cd.png&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;views/foo.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/foo.869aea0d.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;views/foo.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isDynamicEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;_shared.83069a53.js&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shared.83069a53.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/shared.83069a53.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\uB9E4\uB2C8\uD398\uC2A4\uD2B8\uB294 <code>Record&lt;name, chunk&gt;</code> \uAD6C\uC870\uB97C \uAC00\uC9D1\uB2C8\uB2E4.</li><li>\uD56D\uBAA9 \uB610\uB294 \uB3D9\uC801 \uD56D\uBAA9 \uCCAD\uD06C\uC758 \uD0A4\uB294 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC758 \uC0C1\uB300 src \uACBD\uB85C\uC785\uB2C8\uB2E4.</li><li>\uD56D\uBAA9\uC774 \uC544\uB2CC \uCCAD\uD06C\uC758 \uACBD\uC6B0 \uD0A4\uB294 <code>_</code>\uAC00 \uC811\uB450\uC0AC\uB85C \uBD99\uC740 \uD30C\uC77C\uBA85\uC774 \uAE30\uBCF8 \uC774\uB984\uC774 \uB429\uB2C8\uB2E4.</li><li>\uCCAD\uD06C\uC5D0\uB294 \uC815\uC801 \uBC0F \uB3D9\uC801 \uBD88\uB7EC\uC624\uAE30(\uB458 \uB2E4 \uB9E4\uB2C8\uD398\uC2A4\uD2B8\uC758 \uD574\uB2F9 \uCCAD\uD06C\uC5D0 \uB9E4\uD551\uB418\uB294 \uD0A4)\uC5D0 \uB300\uD55C \uC815\uBCF4\uC640 \uD574\uB2F9 css \uBC0F \uC5D0\uC14B \uD30C\uC77C(\uC788\uB294 \uACBD\uC6B0)\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.</li></ul><p>\uD574\uC2DC \uB41C \uD30C\uC77C \uC774\uB984\uC73C\uB85C \uB9C1\uD06C\uB97C \uB80C\uB354\uB9C1\uD558\uAC70\uB098 \uC9C0\uC2DC\uBB38\uC744 \uBBF8\uB9AC \uB85C\uB4DC\uD558\uAE30 \uC704\uD574 \uC774 \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uCC38\uACE0 : \uC5EC\uAE30\uC5D0 \uC788\uB294 \uAD6C\uBB38\uC740 \uC124\uBA85\uD558\uAE30 \uC704\uD55C \uC6A9\uB3C4\uC774\uBA70 \uC11C\uBC84 \uD15C\uD50C\uB9BF \uC5B8\uC5B4\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4).</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- \uC6B4\uC601\uD558\uB294 \uACBD\uC6B0 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/{{ manifest[<span class="token punctuation">&#39;</span>main.js<span class="token punctuation">&#39;</span>].css }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/assets/{{ manifest[<span class="token punctuation">&#39;</span>main.js<span class="token punctuation">&#39;</span>].file }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ol>__VP_STATIC_END__`,3),e=[o];function c(l,u,i,r,k,d){return a(),n("div",null,e)}var m=s(p,[["render",c]]);export{q as __pageData,m as default};
