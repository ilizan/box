import{a as e,c as t,i as n,t as r}from"./app-Bs7c4l0-.js";var i=JSON.parse(`{"path":"/code/vue/vuetreeselect.html","title":"","lang":"zh-CN","frontmatter":{},"filePathRelative":"code/vue/vuetreeselect.md","headers":[{"level":2,"title":"外部调用：","slug":"外部调用","link":"#外部调用","children":[]}]}`),a={name:`vuetreeselect.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h2 id="外部调用" tabindex="-1"><a class="header-anchor" href="#外部调用"><span>外部调用：</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code class="language-vue"><span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>data数组:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code class="language-vue"><span class="line">cateTreeData: [</span>
<span class="line">    {</span>
<span class="line">            &quot;id&quot;: 2,</span>
<span class="line">            &quot;title&quot;: &quot;乳及乳制品（13.0特殊膳食用食品涉及品种除外）&quot;,</span>
<span class="line">            &quot;parentid&quot;: 1,</span>
<span class="line">            &quot;arrchildid&quot;: [</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 3,</span>
<span class="line">                    &quot;title&quot;: &quot;巴氏杀菌乳、灭菌乳、高温杀菌乳和调制乳&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: [</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 4,</span>
<span class="line">                            &quot;title&quot;: &quot;巴氏杀菌乳&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 3,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;4&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 5,</span>
<span class="line">                            &quot;title&quot;: &quot;灭菌乳和高温杀菌乳&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 3,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;5&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 6,</span>
<span class="line">                            &quot;title&quot;: &quot;调制乳&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 3,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;6&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        }</span>
<span class="line">                    ],</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 7,</span>
<span class="line">                    &quot;title&quot;: &quot;发酵乳和风味发酵乳&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: [</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 8,</span>
<span class="line">                            &quot;title&quot;: &quot;发酵乳&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 7,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;8&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 9,</span>
<span class="line">                            &quot;title&quot;: &quot;风味发酵乳&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 7,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;9&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        }</span>
<span class="line">                    ],</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 10,</span>
<span class="line">                    &quot;title&quot;: &quot;乳粉和奶油粉及其调制产品&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: [</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 11,</span>
<span class="line">                            &quot;title&quot;: &quot;乳粉和奶油粉&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 10,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;11&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 12,</span>
<span class="line">                            &quot;title&quot;: &quot;调制乳粉和调制奶油粉&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 10,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;12&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        }</span>
<span class="line">                    ],</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 13,</span>
<span class="line">                    &quot;title&quot;: &quot;炼乳及其调制产品&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: [</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 14,</span>
<span class="line">                            &quot;title&quot;: &quot;淡炼乳（原味）&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 13,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;14&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 15,</span>
<span class="line">                            &quot;title&quot;: &quot;调制炼乳（包括加糖炼乳及使用了非乳原料的调制炼乳等）&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 13,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;15&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        }</span>
<span class="line">                    ],</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 16,</span>
<span class="line">                    &quot;title&quot;: &quot;稀奶油（淡奶油）及其类似品&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: [</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 17,</span>
<span class="line">                            &quot;title&quot;: &quot;稀奶油&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 16,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;17&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 18,</span>
<span class="line">                            &quot;title&quot;: &quot;—&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 16,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;18&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 19,</span>
<span class="line">                            &quot;title&quot;: &quot;调制稀奶油&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 16,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;19&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 20,</span>
<span class="line">                            &quot;title&quot;: &quot;稀奶油类似品&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 16,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;20&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        }</span>
<span class="line">                    ],</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 21,</span>
<span class="line">                    &quot;title&quot;: &quot;干酪、再制干酪、干酪制品及干酪类似品&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: [</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 22,</span>
<span class="line">                            &quot;title&quot;: &quot;非熟化干酪&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 21,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;22&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 23,</span>
<span class="line">                            &quot;title&quot;: &quot;熟化干酪&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 21,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;23&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 24,</span>
<span class="line">                            &quot;title&quot;: &quot;乳清干酪&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 21,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;24&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 25,</span>
<span class="line">                            &quot;title&quot;: &quot;再制干酪及干酪制品&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 21,</span>
<span class="line">                            &quot;arrchildid&quot;: [</span>
<span class="line">                                {</span>
<span class="line">                                    &quot;id&quot;: 26,</span>
<span class="line">                                    &quot;title&quot;: &quot;普通再制干酪&quot;,</span>
<span class="line">                                    &quot;parentid&quot;: 25,</span>
<span class="line">                                    &quot;arrchildid&quot;: &quot;26&quot;,</span>
<span class="line">                                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                                },</span>
<span class="line">                                {</span>
<span class="line">                                    &quot;id&quot;: 27,</span>
<span class="line">                                    &quot;title&quot;: &quot;调味再制干酪&quot;,</span>
<span class="line">                                    &quot;parentid&quot;: 25,</span>
<span class="line">                                    &quot;arrchildid&quot;: &quot;27&quot;,</span>
<span class="line">                                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                                }</span>
<span class="line">                            ],</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 28,</span>
<span class="line">                            &quot;title&quot;: &quot;干酪类似品&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 21,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;28&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            &quot;id&quot;: 29,</span>
<span class="line">                            &quot;title&quot;: &quot;乳清蛋白干酪&quot;,</span>
<span class="line">                            &quot;parentid&quot;: 21,</span>
<span class="line">                            &quot;arrchildid&quot;: &quot;29&quot;,</span>
<span class="line">                            &quot;is_fyffcat&quot;: 0</span>
<span class="line">                        }</span>
<span class="line">                    ],</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 30,</span>
<span class="line">                    &quot;title&quot;: &quot;以乳为主要配料的即食风味食品或其预制产品（不包括冰淇淋和风味发酵乳）&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: &quot;30&quot;,</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    &quot;id&quot;: 31,</span>
<span class="line">                    &quot;title&quot;: &quot;其他乳制品（如乳清粉、酪蛋白粉等）&quot;,</span>
<span class="line">                    &quot;parentid&quot;: 2,</span>
<span class="line">                    &quot;arrchildid&quot;: &quot;31&quot;,</span>
<span class="line">                    &quot;is_fyffcat&quot;: 0</span>
<span class="line">                }</span>
<span class="line">            ],</span>
<span class="line">            &quot;is_fyffcat&quot;: 0</span>
<span class="line">        },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre><code class="language-vue"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown</span></span>
<span class="line">      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dropdown<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name">trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>click<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name">@command</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCommand<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom-start<span class="token punctuation">&quot;</span></span></span>
<span class="line">      <span class="token attr-name">@visible-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleVisibleChangeEvent<span class="token punctuation">&quot;</span></span></span>
<span class="line">    <span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-dropdown-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tree-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ selectedLabel }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>el-icon-arrow-down el-icon--right icon-right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dropdown-menu</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dropdown<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span></span>
<span class="line">                <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>输入关键字进行过滤<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterText<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tree-cu-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tree</span></span>
<span class="line">                <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>treeData<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">node-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">:expand-on-click-node</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">:check-on-click-node</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">:show-checkbox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">highlight-current</span></span>
<span class="line">                <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultProps<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">@node-click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleNodeClick<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tree<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">:filter-node-method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterNode<span class="token punctuation">&quot;</span></span></span>
<span class="line">                <span class="token attr-name">:default-expanded-keys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultExpandedKeys<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ node, data }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio</span></span>
<span class="line">                        <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span></span>
<span class="line">                        <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data.id<span class="token punctuation">&quot;</span></span></span>
<span class="line">                        <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleRadioChange(data)<span class="token punctuation">&quot;</span></span></span>
<span class="line">                    <span class="token punctuation">&gt;</span></span></span>
<span class="line">                        {{ data.title }}</span>
<span class="line">                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-radio</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tree</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown-menu</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dropdown</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;DropdownTree&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">filterText</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">selectedLabel</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">treeData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">defaultProps</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">&#39;arrchildid&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">defaultExpandedKeys</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">//默认展开</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">normalizeTree</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>treeData <span class="token operator">=</span> data</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setSelectedLabel</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">filterText</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>tree<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">handleVisibleChangeEvent</span><span class="token punctuation">(</span><span class="token parameter">visible</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>defaultExpandedKeys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;隐藏&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">filterNode</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> data<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">normalizeTree</span><span class="token punctuation">(</span><span class="token parameter">tree</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 递归函数，用于遍历树形结构  </span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">                <span class="token comment">// 检查arrchildid是否是字符串  </span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> node<span class="token punctuation">.</span>arrchildid <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">                    <span class="token comment">// 如果是字符串，则替换为空数组  </span></span>
<span class="line">                    node<span class="token punctuation">.</span>arrchildid <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  </span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>arrchildid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">                    <span class="token comment">// 如果arrchildid是数组，则递归处理子节点  </span></span>
<span class="line">                    node<span class="token punctuation">.</span>arrchildid<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>traverse<span class="token punctuation">)</span><span class="token punctuation">;</span>  </span>
<span class="line">                <span class="token punctuation">}</span>  </span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">// 遍历树的每个节点  </span></span>
<span class="line">            tree<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>traverse<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 返回修改后的树  </span></span>
<span class="line">            <span class="token keyword">return</span> tree<span class="token punctuation">;</span>  </span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">handleCommand</span><span class="token punctuation">(</span><span class="token parameter">command</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> command<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">handleRadioChange</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>selectedLabel <span class="token operator">=</span> data<span class="token punctuation">.</span>title<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>dropdown<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">handleNodeClick</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>selectedLabel <span class="token operator">=</span> data<span class="token punctuation">.</span>title<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>dropdown<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">setSelectedLabel</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token function-variable function">findLabel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">nodes<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> node <span class="token keyword">of</span> nodes<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>id <span class="token operator">==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">return</span> node<span class="token punctuation">.</span>title<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>arrchildid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">findLabel</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>arrchildid<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">              <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line">              <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>tree<span class="token punctuation">.</span><span class="token function">setCheckedKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>selectedLabel <span class="token operator">=</span> <span class="token function">findLabel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>treeData<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setSelectedLabel</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">.el-dropdown</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 420px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">.el-dropdown-link</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span>1px solid #DCDFE6<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 420px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0 15px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">.tree-title</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">min-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">.icon-right</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #dcdfe6<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">.input-box</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0 10px 5px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">.tree-cu-box</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">max-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token comment">/* .tree-cu-box .el-tree--highlight-current .el-tree-node.is-current&gt;.el-tree-node__content{</span>
<span class="line">    background-color: red !important;</span>
<span class="line">  } */</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  </span>
<span class="line">  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};