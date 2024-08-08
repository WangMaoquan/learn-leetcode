import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as h,d as a,b as i,e as n,a as e,o as k}from"./app-DMwitqrB.js";const p={},d=i("h3",{id:"kebabcasetocamelcase",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#kebabcasetocamelcase"},[i("span",null,"KebabCaseToCamelCase")])],-1),r=i("p",null,[n("实现 "),i("code",null,"aaa-bbb-ccc"),n(" => "),i("code",null,"aaaBbbCcc")],-1),B=e('<div class="hint-container tip"><p class="hint-container-title">思路</p><p>根据 <code>-</code> 拆分, 然后 <code>Capitalize</code> 每一部分</p></div><h3 id="camelcasetokebabcase" tabindex="-1"><a class="header-anchor" href="#camelcasetokebabcase"><span>CamelCaseToKebabCase</span></a></h3><p>实现 <code>aaaBbbCcc</code> =&gt; <code>aaa-bbb-ccc</code></p>',3),g=e('<div class="hint-container tip"><p class="hint-container-title">思路</p><p>没有 <code>-</code> 作为标志, 但是我们可以 判断 <code>大小写</code></p><p><code>First extends Lowercase&lt;First&gt;</code> 不是我们要找的大写字母 所以 不用先 拼接 <code>-</code></p><p>找到大写字母, 记得改成小写</p></div><h3 id="chunk" tabindex="-1"><a class="header-anchor" href="#chunk"><span>Chunk</span></a></h3><p>实现对数组的 <code>分组</code></p><p>比如 <code>[1, 2, 3, 4 ,5], 2</code> =&gt; [[1, 2], [3, 4], [5]]</p>',4),c=e('<div class="hint-container tip"><p class="hint-container-title">思路</p><p>首先 遍历 Arr 的每个元素 是基本 <code>Arr extends [infer First, ...infer Rest]</code></p><p>控制 <code>chunk</code> 是否满足 传入的 长度, 只需要 判断 <code>chunk[&quot;length&quot;] extends ItemLen</code></p><p>然后就是 判断 Arr 取出的 元素 是往 <code>chunk</code> 里面放, 还是 新起一个 <code>chunk</code></p></div><h3 id="tupletonestedobject" tabindex="-1"><a class="header-anchor" href="#tupletonestedobject"><span>TupleToNestedObject</span></a></h3><p>实现 <code>[a, b, c], 1</code> =&gt; <code>{ a: { b: { c: 1 } } }</code></p>',3),A=e('<div class="hint-container info"><p class="hint-container-title">思路</p><p>遍历 Keys 每个元素</p><p>开始构造 对象, 对象的<code>key</code> 必须满足 <code>keyof any</code>, <code>() =&gt; void</code> 是不能做键的,</p><p>然后判断 <code>Rest</code> 还是不是 <code>数组</code>, 是的继续调用 <code>TupleToNestedObject</code>, 否则 直接赋值 <code>Value</code></p></div><h3 id="partialobjectpropbykeys" tabindex="-1"><a class="header-anchor" href="#partialobjectpropbykeys"><span>PartialObjectPropByKeys</span></a></h3><p>实现 对象指定 <code>key</code> 可选</p>',3),y=e(`<div class="hint-container info"><p class="hint-container-title">思路</p><p>指定的 <code>key</code> 可选的意思 是不是 可选 <code>key</code> 单独拎出来 构建一个, 剩下的 再构建一个, 这两类型 <code>交叉</code> 是不是就是我们要的呢.</p><p><code>K in keyof T as K extends Keys ? never : K</code> 排除可选 <code>key</code></p><p><code>[K in Keys as K extends keyof T ? K : never]</code> 这里记得要还要满足 <code>keyof T</code></p><p>其实我们 还可以 用 ts 内置的高级类型</p><p><code>Extract&lt;keys1, keys2&gt;</code> 从 <code>key1</code> 中 去除 与<code>key2</code> 相交的那部分</p><p><code>Pick&lt;T, keys&gt;</code> 从 <code>T</code> 中 构建出 <code>key</code> 为 <code>keyof keys</code> 的新类型</p><p><code>Partial&lt;T&gt;</code> 将 <code>T</code> 的所有键 变成 可选</p><p><code>Omit&lt;T, keys&gt;</code> 构建一个 从 T 中 <code>keyof keys</code> 新类型</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// ts 只有在用到的时候才会去计算</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> PartialObjectPropByKeys1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  T</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Keys</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> keyof</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Partial</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Pick</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Extract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Keys</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&gt;&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Omit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Keys</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="uniontotuple" tabindex="-1"><a class="header-anchor" href="#uniontotuple"><span>UnionToTuple</span></a></h3><div class="hint-container note"><p class="hint-container-title">函数的重载</p><p><strong>第一种</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二种</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三种</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Func1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fn1</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Func1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fn1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,3),o=e(`<div class="hint-container tip"><p class="hint-container-title">思路</p><p>联合类型 转 元组类型</p><p>我们需要 把 联合类型的 每一项 <code>取出来</code> 放进 元组里</p><p>那怎么取出来呢? 或者说 怎么去把 联合类型的每一项 都能<code>单独</code>成一个新类型, 然后我们只需要 取这个新类型 就好</p><p>我们容易遍历的 <code>数组 / 字符串 / 对象</code>, 数组 字符串 不现实, 所以 <code>对象</code></p><p>咦, 我们之前是不是 实现过<code>联合转交叉</code>, 但是我们之前实现的 <code>交叉</code> 针对的是类型的交叉, 比如我们传 <code>&quot;1&quot; | 1 =&gt; never</code></p><p>交叉 函数的重载 =&gt; 通过交叉来<code>重载</code>, 我们把 联合转交叉的结果 再变成 <code>() =&gt; xx &amp; () =&gt; yy</code> 的交叉</p><p>然后再 分别取 <code>ReturnType</code></p></div><h3 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>join</span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">declare</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> join</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Delimiter</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  delimiter</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Delimiter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Items</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[]&gt;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">parts</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Items</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> JoinType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Items</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Delimiter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RemoveFirstDelimiter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Str</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Str</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> _</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}\${</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Rest</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Rest</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Str</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> JoinType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Items</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Delimiter</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Result</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Items</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Cur</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> JoinType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Delimiter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Result</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Delimiter</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}\${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Cur</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RemoveFirstDelimiter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> join</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;guang&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;and&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;dong&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deepcamelize" tabindex="-1"><a class="header-anchor" href="#deepcamelize"><span>DeepCamelize</span></a></h3><p>实现 索引的 <code>Camelize</code></p>`,5),C=i("div",{class:"hint-container info"},[i("p",{class:"hint-container-title"},"思路"),i("p",null,[n("主要的地方就是 key extends "),i("code",null,"${infer First}_${infer Rest}")])],-1),F=i("h3",{id:"allkeypath",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#allkeypath"},[i("span",null,"AllKeyPath")])],-1),E=i("p",null,"实现 拿到一个索引类型的所有 key 的路径",-1),D=e(`<div class="hint-container tip"><p class="hint-container-title">思路</p><p>主要逻辑 是 如果 Obj[key] 是对象 继续获取, 否则 拼接 path</p><p>{}[keyof Obj] 这个就类似 [][number] 取值</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  a</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  b</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> o</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Obj</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="defaultize" tabindex="-1"><a class="header-anchor" href="#defaultize"><span>Defaultize</span></a></h3><p>实现一个高级类型，对 A、B 两个索引类型做合并，如果是只有 A 中有的不变，如果是 A、B 都有的就变为可选，只有 B 中有的也变为可选</p>`,3),b=i("div",{class:"hint-container info"},[i("p",{class:"hint-container-title"},"思路"),i("p",null,"三部分 交叉 就好"),i("p",null,[i("code",null,"Pick<A, Exclude<keyof A, keyof B>>"),n(" => A 中排除 B 有的")]),i("p",null,[i("code",null,"Partial<Pick<A, Extract<keyof A, keyof B>>>"),n(" A, B 都有的")]),i("p",null,[i("code",null,"Partial<Pick<B, Exclude<keyof B, keyof A>>>"),n(" B 中排除 A 有的")])],-1);function u(m,v){const s=l("Playground");return k(),h("div",null,[d,r,a(s,{title:"KebabCaseToCamelCase",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FPTAEGEEMAcEsBdIBtYC8CmpD0ZvAzqQUMVA7f0BC3QDazByv0G8fQaPUAaUQck1BMxUDTMwdW1BZ6wChv4BPaJgDS6AEaQxUXOgAqAeygBbdEmnoAPAGV4AJ1DoAHvHQA7ACb5ce2KYDmAPlABebqFA79RkxfwADABIAb1sAM3R9ADFYXWsAXwBaYLCI0AAldHi-N3dQAH5QQKDo2Pg44NEJKUgZBWVVdQ0oOEQUDA0M6wcHOOzc0AAuDz0Abl4BIVBdTIBXJHgXUErJdTrIFTUazQBySD2EsUOEgGNT7YcxoA"}),B,a(s,{title:"CamelCaseToKebabCase",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAwghgWwgG3gZwgFQPYGkIBGcB6EAPAMrABOUEAHsBAHYAmaUaNAlswOYA%2BKAF4AUFChVaDJmw4ADACQBvXgDMItAGLdqXAL4r1mqACUIB%2BeIlQA-FB17gdRi3ZQAMtgDumgMZwGGSOXALWNnZQSsohwIbK8EiogVh4hMSkZOah%2BlYREgBcUQC0Kl6%2B1AFBsQLxiSikOPhEJClZFsC1eTZFUgDcoqKgkLCIDSlN6a0YAIyUNC6y7lzUvIIi1lKLbgpGzBraugZ7B2YdueGRsdtyUACqYJCVbTWXEvbypcrl-i9HnXUxskMJMWplsgDuhEitFYoCko00mC2hCupdejQBkNwNBqBYAK7IZzCUYIiZIjJtADkcFpACECCQ-H4qQIBkA"}),g,a(s,{title:"Chunk",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAwgFgVwHYGsA8AoKUCCAnPKCAD2AiQBMBnKZFJAewHckBtAXQBooB6HqQATygU0VAIW4BDAligBJMgFsAMuSKly1KEgRyARhDzc%2BUQGBKgEb9A-qmAyvSkwEeWRDkqylGnUYsOUALxQOB-oDz1oBUcgDGiKhSAEoQNCTO6m7MbOzevly8-IACRoCQ5iKmUIAOpiYYAHyp%2BIRxajSsAJZIAGZ6UABitXhUwNwAdL31TYTRnexSAPywtvZyrADkADbkAObAcDMpVS4y8kpIUtjj8HRoQ11bDjvcrG0dwOmsvd1D3DZ28uwle1AAXLDh6CfcKYXXwPF5TbjXYbcIYfbA-e69J4TV4OdgAbgwGFAkCgeBiCDmwFSh1QaFYAEZuAAmbgAZm4ABZuABWbgANm4AHZ0rSShigA"}),c,a(s,{title:"TupleToNestedObject",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAKgrmANhGB7AchAzsCATAeQCMArCAY2AB4AoKKAaQhCyggA9cA7PVuLgNZdUAdy4BtALoAaOlABqAQ0RxoHbryj8horrIB8UALyNmrdRB6txASy4AzCACdTIaVAB0Xu45cAlbGBJOQB%2BKABvOXp6cQFmKDtXKEVWOJA2TktNNNR7ZK4QKOj6MLSi4oAuKC4IADdnSSqAnAyNPkFhMSly6LD4JBQMQPxiMkoqZuB3JRUIfR76KpnVAG4igF85JeVVmhpQSCgnbDhEYGNYBGQ0TBwR0gpqcQByRWf3Z6J3qGfyZ5kfgBGZ76NZAA"}),A,a(s,{title:"PartialObjectPropByKeys",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBACghgJ2ASzgGwPICMBWEDGwMCA9mAEIgDSEIAzgDwBQUUAKlBAB7AQB2AEzpQASgRIIBDOHxAAaKDJAA%2BOSyg16nHvyFQA1rRIAzRbLXKoAXigBvdQG0qUZHwNHTHOMOfdegn1phAH4oPggANwgEKAAuDQBdeLYnBIBuJgBfKAAyO0dnVw0gxR9tfz1DEBN2KFDnePCohATg5NSMzIymUEgoBAg6AFc0YGtYRBR0bDxCYjJKTUZ1WzC4AFsIeLpgBFcAczTFfa2wofWsaKOIdbhkNG3dg6hMtVYAcj4NiHeoAB8oO84Cd3kxlBkgA"}),y,a(s,{title:"UnionToTuple",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAqgdgSwPZwCpIJJ2BATgZwgGNhk4AeGAPigF4oAKAKCliggA8c4ATfNgPyMOALlgBKOjQCucANZwkAdzhQxcCADc8TSZ259hYhHABmeKACVJtGfMUqWUIZafqteANxMmoSLEQUdAAxWSIsHAJiUhRyVBp6eDJ0CLxCEjJyJ1R2LghefgBDOBBnRhsaHPdtXCYqb19waCSgpFC4cOw06LJLCHxpABtgOgDktrDUqIzYgHJC2agAHyhZgCNZ%2Bp8-ZsC0JFRpMEGIOISx1qn0mIps3IMikrKGCqgqqA0auvv8wxepKAmcy4KwQYDSXBoJpOIQAbQAdIiWvtDsdTgBRDhEQbSHinVAAGlB4MhqCaVCoRL6JKhkAAum4oLC6Q0dhcUUcTn0BsNRsj0KiTuR5osVutRasiJtvEA"}),o,a(s,{title:"DeepCamelize",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAIhFgMIEMC2EA2BLAXhAPAPIBGAVlBAB7AQB2AJgM5QBKEAxgPYBO9%2BjwblloBzADRRktEAD4ZUALxQS5KjQbMArrQDWtTgHdaAbQC6AKChQA-FBTpseAILduRMjMtQAXFADeXlZWxgDSECBQwlA64ZwAZspkksxhEWp0TFAABgAkfsJxENxQAGJY3AIAvgD6eQVFrBBVWYFBVra5fmUVwJV5KGBYwMiOBGwCMpUtbW2%2Bqaa%2BcAj2mLgEKqHhpjIA3K2Ve%2BagkHZoq86u%2BC7c8krXFNQZzMb1xd0CEgB036%2BNAhbtUrlAQPdSZNhcXj8QTCcSSaSeNq2YxLJBnUb4d7AGRfb4rUbXfDjbEAoK%2BMxecmmQ7HaDcJqaDDARSweBohxrfABKzIXnVXnIXzcoLEUXVUXEIWtKzsWXsar0IVQegqpXweC%2BABMmqglV1ezaBy8Rsqu3MQA"}),C,F,E,a(s,{title:"AllKeyPath",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAggNnA0hEAFAhsAFgHgPIBGAVlBAB7AQB2AJgM5QBKEAxgPYBONOdwHAllQDmAGijoqIAHxSoAXigBvAFBQoAbWQgogqAGsUbAGZRCRALoAuKFtIVq9KLwHDVaqAH5TxTSnN3KWgZmdi4ePkFRcUkpN3dPGxQoAB8oAAMAEkUtAF8AOiz4JBQMbHwfLXMpHLS492stOusqCAA3CA4AbmUc9QMQY28LbuVQSCgOCDoAVzhgeVgELVLcRXFrNYINqBZrAEYoHMPDqW6gA"}),D,a(s,{title:"Defaultize",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FC4TwDgpgBAIhBmBDArgG2ASwF4QDwCgooBBKCAD2AgDsATAZygCUIBjAewCdbd7hOM1AOYAaKImogAfCMJQAQmUo0GzNlx58BwsROmypUALxQAChlYBrXMTEBRcq1TJaeSxBDt4JMe8-f5KUMAMjlTRE5MRFRccysbe0pORFZgXD8vHygMgKCQsIiomLjreUSnFzcPTLLs6u9iPIBufHxQSCgAYU4IRCoAeQAjACtcABUlKjpGFg5uXn5BUXFJIOMoAG85AG0-KEE6-ygxgF0ALmPdjxOWgF8WtvBoTnXu3oGRgiI4JDRMHFwGyg1EQAFsIBctEsmuIhBDgchQYMIC9bmIgYg4RdqIjkZwYRBQYgMKhIYthFBblJ8FIWkA"}),b])}const Q=t(p,[["render",u],["__file","9.html.vue"]]),T=JSON.parse('{"path":"/learn-typescript/9.html","title":"实战二","lang":"zh-CN","frontmatter":{"title":"实战二","date":"2023-01-11T14:29:57.000Z","tag":["learn","TypeScript"],"category":["TypeScript"],"description":"实战二","footer":true},"headers":[{"level":3,"title":"KebabCaseToCamelCase","slug":"kebabcasetocamelcase","link":"#kebabcasetocamelcase","children":[]},{"level":3,"title":"CamelCaseToKebabCase","slug":"camelcasetokebabcase","link":"#camelcasetokebabcase","children":[]},{"level":3,"title":"Chunk","slug":"chunk","link":"#chunk","children":[]},{"level":3,"title":"TupleToNestedObject","slug":"tupletonestedobject","link":"#tupletonestedobject","children":[]},{"level":3,"title":"PartialObjectPropByKeys","slug":"partialobjectpropbykeys","link":"#partialobjectpropbykeys","children":[]},{"level":3,"title":"UnionToTuple","slug":"uniontotuple","link":"#uniontotuple","children":[]},{"level":3,"title":"join","slug":"join","link":"#join","children":[]},{"level":3,"title":"DeepCamelize","slug":"deepcamelize","link":"#deepcamelize","children":[]},{"level":3,"title":"AllKeyPath","slug":"allkeypath","link":"#allkeypath","children":[]},{"level":3,"title":"Defaultize","slug":"defaultize","link":"#defaultize","children":[]}],"git":{"createdTime":1673420611000,"updatedTime":1673426913000,"contributors":[{"name":"wangmaoquan","email":"1782976211@qq.com","commits":3}]},"readingTime":{"minutes":5.05,"words":1514},"filePathRelative":"learn-typescript/9.md","localizedDate":"2023年1月11日","excerpt":""}');export{Q as comp,T as data};