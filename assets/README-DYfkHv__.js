import{a as e,c as t,i as n,t as r}from"./app-Bs7c4l0-.js";var i=JSON.parse(`{"path":"/tools/","title":"vscode","lang":"zh-CN","frontmatter":{"title":"vscode"},"filePathRelative":"tools/README.md","headers":[{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"echarts","slug":"echarts","link":"#echarts","children":[]}]}`),a={name:`README.md`};function o(r,i,a,o,s,c){return t(),n(`div`,null,[...i[0]||=[e(`<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><p>1..</p><p>2..</p><h2 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>echarts</span></a></h2><p>yAxis和xAxis均可设置 隐藏y轴左侧的小刻度 axisTick: {show: false},</p><p>显示y轴左侧的小刻度 axisTick: {show: true},</p><p>柱状图 把数值显示到内部 label:{ show:true, position:&#39;insideLeft&#39;, formatter:&#39;{c}&#39;, color:&#39;#FFF&#39; },</p><p>legend:{ left: &quot;20px&quot;, top: &quot;10px&quot;,</p><p>柱状图 折线图 显示左侧的竖线和调整颜色 axisLine: { show: true, lineStyle: { color: &quot;#1396F9&quot;, }, },</p><p>隐藏柱状图内的横线 yAxis内： splitLine: { show: false, },</p><p>折线图demo option = { backgroundColor: &#39;#111c44&#39;, tooltip: { trigger: &#39;axis&#39;, axisPointer: { type: &#39;cross&#39;, crossStyle: { color: &#39;#999&#39; } } }, toolbox: { feature: { saveAsImage: { show: true } } }, legend: { left: &quot;20px&quot;, top: &quot;30px&quot;, textStyle: {color: &quot;#fff&quot;}, }, grid: { top: &quot;95px&quot;, bottom: &quot;70px&quot;, }, xAxis: [ { type: &#39;category&#39;, data: datas.xAxis, axisPointer: { type: &#39;shadow&#39; }, axisLabel: { rotate: 45, textStyle: {color: &quot;#fff&quot;}, },</p><pre><code>            }
        ],
        yAxis: [
            {
                type: &#39;value&#39;,
                name: &#39;抽检量&#39;,
                nameTextStyle: {
                    //y轴上方单位的颜色
                    color: &quot;#FFF&quot;,
                },
                axisLabel: {
                    // formatter: &#39;{value}&#39;,
                    formatter: function (value, index) {
                        return value.toFixed(2) + &#39;%&#39;;
                    },
                    textStyle: {color: &quot;#fff&quot;},
                },
                alignTicks: true,
                axisLine: {
                    //是否显示横线
                    show: true,
                },
                splitLine: {
                    //横线的颜色
                    show: true,
                    lineStyle: {
                        color: &quot;#1F2A4F&quot;,
                    },
                },
            },
            {
                type: &#39;value&#39;,
                name: &#39;不合格率&#39;,
                nameTextStyle: {
                    //y轴上方单位的颜色
                    color: &quot;#FFF&quot;,
                },
                axisLabel: {
                    formatter: &#39;{value} %&#39;,
                    textStyle: {color: &quot;#fff&quot;},
                },
                alignTicks: true,
                min: 0,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: &quot;#1F2A4F&quot;,
                    },
                },
            }
        ],
        series: [
            {
                name: &#39;普通食品&#39;,
                type: &#39;bar&#39;,
                tooltip: {
                    valueFormatter: function (value) {
                        return value;
                    }
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: &quot;#00EDFF&quot;,
                        },
                        {
                            offset: 1,
                            color: &quot;#1469EA&quot;,
                        },
                    ]),
                },
                label: {
                    show: true,
                    color: &#39;#fff&#39;,
                    position:&#39;top&#39;,
                },
                data: datas.ptData
            }, {
                name: &#39;食用农产品&#39;,
                type: &#39;bar&#39;,
                tooltip: {
                    valueFormatter: function (value) {
                        return value;
                    }
                },
                itemStyle: {
                    color: &#39;#1469EA&#39;
                },
                label: {
                    show: true,
                    color: &#39;#fff&#39;,
                    position:&#39;top&#39;,
                },
                data:datas.agData
            },
            {
                name: &#39;普通食品不合格率&#39;,
                type: &#39;line&#39;,
                yAxisIndex: 1,
                smooth: false,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + &#39; %&#39;;
                    }
                },
                itemStyle: {
                    //折线拐点标志的样式
                    color: &quot;#E6FF00&quot;,
                    borderWidth: &quot;1&quot;,
                    borderColor: &quot;#E6FF00&quot;,
                },
                label: {
                    show: true,
                    color: &#39;#fff&#39;,
                    formatter: &#39;{c}%&#39;
                },
                data: datas.ptUnqRate
            },
            {
                name: &#39;食用农产品不合格率&#39;,
                type: &#39;line&#39;,
                yAxisIndex: 1,
                smooth: false,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + &#39; %&#39;;
                    }
                },
                label: {
                    show: true,
                    color: &#39;#fff&#39;,
                    formatter: &#39;{c}%&#39;
                },
                data:datas.agUnqRate
            }
        ]
    };

    this.$forceUpdate() 的意思
</code></pre><p>怎么取一个对数数组中 某个对象等于什么值 这个对象在数组中的下标</p><p>怎么取一个对数数组中 某个对象等于什么值 这个对象在数组中的下标</p><p>// 示例数组 var myArray = [ { id: 1, name: &quot;Alice&quot; }, { id: 2, name: &quot;Bob&quot; }, { id: 3, name: &quot;Charlie&quot; } ];</p><p>// 要查找的对象 var targetObject = { id: 2, name: &quot;Bob&quot; };</p><p>// 查找对象在数组中的索引 var index = myArray.findIndex(function(obj) { return obj.id === targetObject.id &amp;&amp; obj.name === targetObject.name; });</p><p>console.log(index); // 这将输出目标对象在数组中的索引，如果不存在则返回 -1</p><p>渐隐效果 https://tweakcn.com/ 有用到，有不少特效css。 mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);</p><p>mask-image: linear-gradient( to right, /* 渐变方向：从左到右 <em>/ transparent 0%, /</em> 起点：完全透明 <em>/ black 15%, /</em> 15%位置：完全不透明 <em>/ black 85%, /</em> 85%位置：保持不透明 <em>/ transparent 100% /</em> 终点：恢复透明 */ );</p><p>可视化效果 透明区域 不透明区域 透明区域 [ 0% ] [ 15% - 85% ] [ 100% ] 透明 黑色遮罩 透明 可见 不可见 可见</p><p>mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);</p><p>https://shadcnthemer.com/</p><p>https://hacker-news.agi.li/post/2025-11-09</p><pre><code>        background-color: 
</code></pre><p>color-mix(in oklab, var(--background) oklch(100% 0 0) 80%, transparent);</p><p>background-color: color-mix( in oklab, /* 颜色空间：OKLAB <em>/ var(--background) /</em> 基础颜色1 <em>/ oklch(100% 0 0) /</em> 基础颜色2：纯白色 <em>/ 80%, /</em> 混合比例 <em>/ transparent /</em> 混合结果再与透明色混合 */ ); https://www.mentorbook.ai/</p><p>mask-image:linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)</p>`,28)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};