import{a as e,c as t,i as n,t as r}from"./app-Bs7c4l0-.js";var i=JSON.parse(`{"path":"/code/vue/vue3vant2025.html","title":"从0开始vuecli集成vant框架搭建2025","lang":"zh-CN","frontmatter":{"title":"从0开始vuecli集成vant框架搭建2025"},"filePathRelative":"code/vue/vue3vant2025.md","headers":[{"level":2,"title":"vite搭建vue3项目","slug":"vite搭建vue3项目","link":"#vite搭建vue3项目","children":[]},{"level":2,"title":"集成vant","slug":"集成vant","link":"#集成vant","children":[{"level":3,"title":"按需加载","slug":"按需加载","link":"#按需加载","children":[]},{"level":3,"title":"自动导入组件的插件","slug":"自动导入组件的插件","link":"#自动导入组件的插件","children":[]}]},{"level":2,"title":"vant主题色配置","slug":"vant主题色配置","link":"#vant主题色配置","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]},{"level":2,"title":"配置代理","slug":"配置代理","link":"#配置代理","children":[]},{"level":2,"title":"router","slug":"router","link":"#router","children":[]},{"level":2,"title":"引入 axios","slug":"引入-axios","link":"#引入-axios","children":[]},{"level":2,"title":"安装tailwindcss和postcss","slug":"安装tailwindcss和postcss","link":"#安装tailwindcss和postcss","children":[]},{"level":2,"title":"vant主题色配置","slug":"vant主题色配置-1","link":"#vant主题色配置-1","children":[]},{"level":2,"title":"tailwind.config.js配置-主题色","slug":"tailwind-config-js配置-主题色","link":"#tailwind-config-js配置-主题色","children":[]},{"level":2,"title":"App.vue底部插入van-tabbar菜单，因为是悬浮，高度影响内容","slug":"app-vue底部插入van-tabbar菜单-因为是悬浮-高度影响内容","link":"#app-vue底部插入van-tabbar菜单-因为是悬浮-高度影响内容","children":[]},{"level":2,"title":"引入legacy插件，对旧版浏览器支持(尤其火狐)","slug":"引入legacy插件-对旧版浏览器支持-尤其火狐","link":"#引入legacy插件-对旧版浏览器支持-尤其火狐","children":[{"level":3,"title":"必须安装terser，因为 plugin-legacy 使用 Terser 进行代码压缩。","slug":"必须安装terser-因为-plugin-legacy-使用-terser-进行代码压缩。","link":"#必须安装terser-因为-plugin-legacy-使用-terser-进行代码压缩。","children":[]}]}]}`),a={name:`vue3vant2025.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h2 id="vite搭建vue3项目" tabindex="-1"><a class="header-anchor" href="#vite搭建vue3项目"><span>vite搭建vue3项目</span></a></h2><p><a href="https://cn.vuejs.org/guide/quick-start#creating-a-vue-application" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/guide/quick-start#creating-a-vue-application</a></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm create vue@latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="集成vant" tabindex="-1"><a class="header-anchor" href="#集成vant"><span>集成vant</span></a></h2><h3 id="按需加载" tabindex="-1"><a class="header-anchor" href="#按需加载"><span>按需加载</span></a></h3><h3 id="自动导入组件的插件" tabindex="-1"><a class="header-anchor" href="#自动导入组件的插件"><span>自动导入组件的插件</span></a></h3><h2 id="vant主题色配置" tabindex="-1"><a class="header-anchor" href="#vant主题色配置"><span>vant主题色配置</span></a></h2><p>main.js中引入vant-theme.css即可：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/* vant主题色定制 */</span>
<span class="line">:root:root {</span>
<span class="line">  --van-primary-color: #05336E; /* 主要颜色 */</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue中：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;van-button type=&quot;primary&quot;&gt;主要按钮&lt;/van-button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><h2 id="配置代理" tabindex="-1"><a class="header-anchor" href="#配置代理"><span>配置代理</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">server: {</span>
<span class="line">// 服务器主机名，默认是 localhost</span>
<span class="line">host: &#39;0.0.0.0&#39;,</span>
<span class="line">// 端口号，默认是 5173</span>
<span class="line">port: 8001,</span>
<span class="line"></span>
<span class="line">hmr: { overlay: false },</span>
<span class="line">// 是否开启 https</span>
<span class="line">https: false,</span>
<span class="line">// 是否开启自动打开浏览器</span>
<span class="line">open: true,</span>
<span class="line">proxy: {</span>
<span class="line">    &#39;^/api&#39;: {</span>
<span class="line">    // 代理目标地址</span>
<span class="line">    target: &#39;https://demo.open.renren.io/renren-security-server/&#39;,</span>
<span class="line">    changeOrigin: true,</span>
<span class="line">    rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;),</span>
<span class="line">    },</span>
<span class="line">},</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>router</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import { createRouter, createWebHistory, createWebHashHistory } from &#39;vue-router&#39;</span>
<span class="line"></span>
<span class="line">const router = createRouter({</span>
<span class="line">  history: createWebHistory(import.meta.env.BASE_URL),</span>
<span class="line">  // history: createWebHashHistory(),//#</span>
<span class="line">  routes: [</span>
<span class="line">    {</span>
<span class="line">      path: &#39;/login&#39;,</span>
<span class="line">      name: &#39;login&#39;,</span>
<span class="line">      component: () =&gt; import(&#39;@/views/LoginView.vue&#39;),</span>
<span class="line">      meta: {</span>
<span class="line">        requiresAuth: false // 不需要登录</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      path: &#39;/&#39;, // 首页-合规判定</span>
<span class="line">      name: &#39;judgeForm&#39;,</span>
<span class="line">      component: () =&gt; import(&#39;@/views/index/JudgeFormView.vue&#39;),</span>
<span class="line">      meta: {</span>
<span class="line">        requiresAuth: true, // 需要登录</span>
<span class="line">        showTab: true // 显示底部菜单</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    </span>
<span class="line">    {</span>
<span class="line">      path: &#39;/judgeResult&#39;, // 判定结果</span>
<span class="line">      name: &#39;judgeResult&#39;,</span>
<span class="line">      component: () =&gt; import(&#39;@/views/index/JudgeResultView.vue&#39;),</span>
<span class="line">      meta: {</span>
<span class="line">        requiresAuth: true, // 需要登录</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      path: &#39;/record&#39;, // 判定记录</span>
<span class="line">      name: &#39;record&#39;,</span>
<span class="line">      component: () =&gt; import(&#39;@/views/judge/RecordView.vue&#39;),</span>
<span class="line">      meta: {</span>
<span class="line">        requiresAuth: true, // 需要登录</span>
<span class="line">        showTab: true // 显示底部菜单</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      path: &#39;/details&#39;, // 判定详情</span>
<span class="line">      name: &#39;details&#39;,</span>
<span class="line">      component: () =&gt; import(&#39;@/views/judge/DetailsView.vue&#39;),</span>
<span class="line">      meta: {</span>
<span class="line">        requiresAuth: true, // 需要登录</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      path: &#39;/my&#39;,</span>
<span class="line">      name: &#39;my&#39;,</span>
<span class="line">      component: () =&gt; import(&#39;@/views/MyView.vue&#39;),</span>
<span class="line">      meta: {</span>
<span class="line">        requiresAuth: true, // 需要登录</span>
<span class="line">        showTab: true</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  ],</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 全局前置守卫</span>
<span class="line">// router.beforeEach((to, from, next) =&gt; {</span>
<span class="line">//   // 检查路由是否需要认证</span>
<span class="line">//   console.log(to.meta.requiresAuth)</span>
<span class="line">//   if (to.meta.requiresAuth &amp;&amp; getCache(&#39;Token&#39;)===null) {</span>
<span class="line">//     next(&#39;/login&#39;)</span>
<span class="line">//   } else {</span>
<span class="line">//     next()</span>
<span class="line">//   }</span>
<span class="line">// })</span>
<span class="line"></span>
<span class="line">export default router</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入-axios" tabindex="-1"><a class="header-anchor" href="#引入-axios"><span>引入 axios</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">import axios from &#39;axios&#39;</span>
<span class="line">import router from &#39;@/router&#39;</span>
<span class="line">//创建实例</span>
<span class="line">const service = axios.create({</span>
<span class="line">  baseURL: import.meta.env.VITE_APP_API,</span>
<span class="line">  timeout: 60000,</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 添加请求拦截器</span>
<span class="line">service.interceptors.request.use(</span>
<span class="line">  function (config) {</span>
<span class="line">    // console.log(getCache(&#39;Token&#39;));</span>
<span class="line"></span>
<span class="line">    // 在发送请求之前做些什么</span>
<span class="line">    config.headers[&#39;Token&#39;] = getCache(&#39;Token&#39;)</span>
<span class="line">    if (!config.headers[&#39;Content-Type&#39;]) {</span>
<span class="line">      if (config.data instanceof FormData) {</span>
<span class="line">        config.headers[&#39;Content-Type&#39;] = &#39;multipart/form-data&#39;</span>
<span class="line">      } else if (typeof config.data === &#39;string&#39;) {</span>
<span class="line">        config.headers[&#39;Content-Type&#39;] = &#39;text/plain&#39;</span>
<span class="line">      } else {</span>
<span class="line">        config.headers[&#39;Content-Type&#39;] = &#39;application/json&#39;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">    config.headers[&#39;Accept&#39;] = &#39;text/event-stream,application/json, text/event-stream&#39;</span>
<span class="line">    if (config.method?.toUpperCase() === &#39;GET&#39;) {</span>
<span class="line">      config.params = { ...config.params, _t: new Date().getTime() }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return config</span>
<span class="line">  },</span>
<span class="line">  function (error) {</span>
<span class="line">    // 对请求错误做些什么</span>
<span class="line">    return Promise.reject(error)</span>
<span class="line">  },</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">// 添加响应拦截器</span>
<span class="line">service.interceptors.response.use(</span>
<span class="line">  function (response) {</span>
<span class="line">    // 2xx 范围内的状态码都会触发该函数。</span>
<span class="line">    // 对响应数据做点什么</span>
<span class="line">    if (response.data.code === 0) {</span>
<span class="line">      return response.data.data</span>
<span class="line">    } else {</span>
<span class="line">      // 错误提示</span>
<span class="line">      ElMessage.error(response.data.msg)</span>
<span class="line">      console.log(&#39;接口异常：&#39;, response.data.msg)</span>
<span class="line">      console.log(response.data)</span>
<span class="line">      if (response.data.code == 401) {</span>
<span class="line">        clearCache()</span>
<span class="line">        //跳转首页</span>
<span class="line">        redirectLogin()</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  function (error) {</span>
<span class="line">    console.log(error)</span>
<span class="line">    // 超出 2xx 范围的状态码都会触发该函数。</span>
<span class="line">    // 对响应错误做点什么</span>
<span class="line">    // toast(error.response.data.msg,error || &#39;请求失败&#39;)</span>
<span class="line">    // ElMessage.error(&#39;请求失败&#39;)</span>
<span class="line">    console.log(&#39;请求失败&#39;)</span>
<span class="line">    return Promise.reject(error)</span>
<span class="line">  },</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">const redirectLogin = () =&gt; {</span>
<span class="line">  router.replace(&#39;/login&#39;)</span>
<span class="line">  return</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//1.</span>
<span class="line">export default service</span>
<span class="line">//2.</span>
<span class="line">// export default {</span>
<span class="line">//     install(app,options) {</span>
<span class="line">//         app.config.globalProperties.$http = service</span>
<span class="line">//         app.provide(&#39;$http&#39;, service);</span>
<span class="line">//     }</span>
<span class="line">// }</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装tailwindcss和postcss" tabindex="-1"><a class="header-anchor" href="#安装tailwindcss和postcss"><span>安装tailwindcss和postcss</span></a></h2><p><a href="https://www.tailwindcss.cn/docs/guides/vite#vue" target="_blank" rel="noopener noreferrer">https://www.tailwindcss.cn/docs/guides/vite#vue</a><a href="https://v3.tailwindcss.com/docs/guides/vite#vue" target="_blank" rel="noopener noreferrer">https://v3.tailwindcss.com/docs/guides/vite#vue</a> // 英文官网</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// npm install -D tailwindcss tailwindcss autoprefixer</span>
<span class="line">npm install -D tailwindcss@3 postcss autoprefixer // 3版本</span>
<span class="line"></span>
<span class="line">npx tailwindcss init -p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再新建.css文件，导入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">@tailwind base;</span>
<span class="line">@tailwind components;</span>
<span class="line">@tailwind utilities;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vant主题色配置-1" tabindex="-1"><a class="header-anchor" href="#vant主题色配置-1"><span>vant主题色配置</span></a></h2><p>main.js中引入vant-theme.css即可：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/* vant主题色定制 */</span>
<span class="line">:root:root {</span>
<span class="line">  --van-primary-color: #05336E; /* 主要颜色 */</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue中：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;van-button type=&quot;primary&quot;&gt;主要按钮&lt;/van-button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="tailwind-config-js配置-主题色" tabindex="-1"><a class="header-anchor" href="#tailwind-config-js配置-主题色"><span>tailwind.config.js配置-主题色</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/** @type {import(&#39;tailwindcss&#39;).Config} */</span>
<span class="line">export default {</span>
<span class="line">  content: [</span>
<span class="line">    &quot;./index.html&quot;,</span>
<span class="line">    &quot;./src/**/*.{vue,js,ts,jsx,tsx}&quot;,</span>
<span class="line">  ],</span>
<span class="line">  theme: {</span>
<span class="line">    extend: {</span>
<span class="line">      colors:{</span>
<span class="line">        // 自定义颜色</span>
<span class="line">        primary: &#39;var(--van-primary-color)&#39;,</span>
<span class="line">      }</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  plugins: [],</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-vue底部插入van-tabbar菜单-因为是悬浮-高度影响内容" tabindex="-1"><a class="header-anchor" href="#app-vue底部插入van-tabbar菜单-因为是悬浮-高度影响内容"><span>App.vue底部插入van-tabbar菜单，因为是悬浮，高度影响内容</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;!-- &lt;van-config-provider&gt; --&gt;</span>
<span class="line">    &lt;div class=&quot;flex flex-col h-screen&quot;&gt;</span>
<span class="line">      &lt;div class=&quot;flex-1 h-screen overflow-scroll&quot;&gt;</span>
<span class="line">        &lt;RouterView /&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">      &lt;div v-if=&quot;showFooter&quot; class=&quot;h-[var(--van-tabbar-height)]&quot;&gt;&lt;/div&gt;</span>
<span class="line">      &lt;van-tabbar v-if=&quot;showFooter&quot; v-model=&quot;active&quot; @change=&quot;onChange&quot; safe-area-inset-bottom&gt;</span>
<span class="line">        &lt;van-tabbar-item name=&quot;record&quot; icon=&quot;home-o&quot;&gt;判定记录&lt;/van-tabbar-item&gt;</span>
<span class="line">        &lt;van-tabbar-item name=&quot;judgeForm&quot; icon=&quot;search&quot;&gt;合规判定&lt;/van-tabbar-item&gt;</span>
<span class="line">        &lt;van-tabbar-item name=&quot;my&quot; icon=&quot;friends-o&quot;&gt;个人中心&lt;/van-tabbar-item&gt;</span>
<span class="line">      &lt;/van-tabbar&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;!-- &lt;/van-config-provider&gt; --&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script setup&gt;</span>
<span class="line">const route = useRoute()</span>
<span class="line">const router = useRouter()</span>
<span class="line">const active = ref(&#39;judgeForm&#39;)</span>
<span class="line">const showFooter = computed(() =&gt; route.meta.isTab || false)</span>
<span class="line"></span>
<span class="line">watch(</span>
<span class="line">  () =&gt; route.name,</span>
<span class="line">  (newValue, oldValue) =&gt; {</span>
<span class="line">    active.value = newValue</span>
<span class="line">  },</span>
<span class="line">)</span>
<span class="line">const onChange = (name) =&gt; {</span>
<span class="line">  console.log(&#39;onChange&#39;, name)</span>
<span class="line">  // active.value = name</span>
<span class="line">  router.push({</span>
<span class="line">    name: name,</span>
<span class="line">  })</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style scoped&gt;</span>
<span class="line"></span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入legacy插件-对旧版浏览器支持-尤其火狐" tabindex="-1"><a class="header-anchor" href="#引入legacy插件-对旧版浏览器支持-尤其火狐"><span>引入legacy插件，对旧版浏览器支持(尤其火狐)</span></a></h2><p>https://www.npmjs.com/package/@vitejs/plugin-legacy?activeTab=readme</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install @vitejs/plugin-legacy -D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">// vite.config.js</span>
<span class="line">import legacy from &#39;@vitejs/plugin-legacy&#39;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  plugins: [</span>
<span class="line">    legacy({</span>
<span class="line">      targets: [&#39;defaults&#39;, &#39;not IE 11&#39;],</span>
<span class="line">    }),</span>
<span class="line">  ],</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="必须安装terser-因为-plugin-legacy-使用-terser-进行代码压缩。" tabindex="-1"><a class="header-anchor" href="#必须安装terser-因为-plugin-legacy-使用-terser-进行代码压缩。"><span>必须安装terser，因为 plugin-legacy 使用 Terser 进行代码压缩。</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm add -D terser</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,39)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};