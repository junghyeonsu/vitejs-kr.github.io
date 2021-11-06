import{_ as n,c as e,o as a,d as s}from"./app.37e6730d.js";const f='{"title":"Using Plugins","description":"","frontmatter":{"title":"Using Plugins"},"headers":[{"level":2,"title":"Adding a Plugin","slug":"adding-a-plugin"},{"level":2,"title":"Finding Plugins","slug":"finding-plugins"},{"level":2,"title":"Enforcing Plugin Ordering","slug":"enforcing-plugin-ordering"},{"level":2,"title":"Conditional Application","slug":"conditional-application"},{"level":2,"title":"Building Plugins","slug":"building-plugins"}],"relativePath":"guide/using-plugins.md","lastUpdated":1636189935367}',t={},i=s(`__VP_STATIC_START__<h1 id="using-plugins" tabindex="-1">Using Plugins <a class="header-anchor" href="#using-plugins" aria-hidden="true">#</a></h1><p>Vite can be extended using plugins, which are based on Rollup&#39;s well-designed plugin interface with a few extra Vite-specific options. This means that Vite users can rely on the mature ecosystem of Rollup plugins, while also being able to extend the dev server and SSR functionality as needed.</p><h2 id="adding-a-plugin" tabindex="-1">Adding a Plugin <a class="header-anchor" href="#adding-a-plugin" aria-hidden="true">#</a></h2><p>To use a plugin, it needs to be added to the <code>devDependencies</code> of the project and included in the <code>plugins</code> array in the <code>vite.config.js</code> config file. For example, to provide support for legacy browsers, the official <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a> can be used:</p><div class="language-"><pre><code>$ npm i -D @vitejs/plugin-legacy
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> legacy <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-legacy&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">legacy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      targets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;defaults&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not IE 11&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>plugins</code> also accept presets including several plugins as a single element. This is useful for complex features (like framework integration) that are implemented using several plugins. The array will be flattened internally.</p><p>Falsy plugins will be ignored, which can be used to easily activate or deactivate plugins.</p><h2 id="finding-plugins" tabindex="-1">Finding Plugins <a class="header-anchor" href="#finding-plugins" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>Vite aims to provide out-of-the-box support for common web development patterns. Before searching for a Vite or compatible Rollup plugin, check out the <a href="./../guide/features.html">Features Guide</a>. A lot of the cases where a plugin would be needed in a Rollup project are already covered in Vite.</p></div><p>Check out the <a href="./../plugins/">Plugins section</a> for information about official plugins. Community plugins are listed in <a href="https://github.com/vitejs/awesome-vite#plugins" target="_blank" rel="noopener noreferrer">awesome-vite</a>. For compatible Rollup plugins, check out <a href="https://vite-rollup-plugins.patak.dev" target="_blank" rel="noopener noreferrer">Vite Rollup Plugins</a> for a list of compatible official Rollup plugins with usage instructions or the <a href="./../guide/api-plugin.html#rollup-plugin-compatibility">Rollup Plugin Compatibility section</a> in case it is not listed there.</p><p>You can also find plugins that follow the <a href="./api-plugin.html#conventions">recommended conventions</a> using a <a href="https://www.npmjs.com/search?q=vite-plugin&amp;ranking=popularity" target="_blank" rel="noopener noreferrer">npm search for vite-plugin</a> for Vite plugins or a <a href="https://www.npmjs.com/search?q=rollup-plugin&amp;ranking=popularity" target="_blank" rel="noopener noreferrer">npm search for rollup-plugin</a> for Rollup plugins.</p><h2 id="enforcing-plugin-ordering" tabindex="-1">Enforcing Plugin Ordering <a class="header-anchor" href="#enforcing-plugin-ordering" aria-hidden="true">#</a></h2><p>For compatibility with some Rollup plugins, it may be needed to enforce the order of the plugin or only apply at build time. This should be an implementation detail for Vite plugins. You can enforce the position of a plugin with the <code>enforce</code> modifier:</p><ul><li><code>pre</code>: invoke plugin before Vite core plugins</li><li>default: invoke plugin after Vite core plugins</li><li><code>post</code>: invoke plugin after Vite build plugins</li></ul><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> image <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-image&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      enforce<span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Check out <a href="./api-plugin.html#plugin-ordering">Plugins API Guide</a> for detailed information, and look out for the <code>enforce</code> label and usage instructions for popular plugins in the <a href="https://vite-rollup-plugins.patak.dev" target="_blank" rel="noopener noreferrer">Vite Rollup Plugins</a> compatibility listing.</p><h2 id="conditional-application" tabindex="-1">Conditional Application <a class="header-anchor" href="#conditional-application" aria-hidden="true">#</a></h2><p>By default, plugins are invoked for both serve and build. In cases where a plugin needs to be conditionally applied only during serve or build, use the <code>apply</code> property to only invoke them during <code>&#39;build&#39;</code> or <code>&#39;serve&#39;</code>:</p><div class="language-js"><pre><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> typescript2 <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token function">typescript2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      apply<span class="token operator">:</span> <span class="token string">&#39;build&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="building-plugins" tabindex="-1">Building Plugins <a class="header-anchor" href="#building-plugins" aria-hidden="true">#</a></h2><p>Check out the <a href="./api-plugin.html">Plugins API Guide</a> for documentation about creating plugins.</p>__VP_STATIC_END__`,22),o=[i];function p(l,c,r,u,d,g){return a(),e("div",null,o)}var h=n(t,[["render",p]]);export{f as __pageData,h as default};
