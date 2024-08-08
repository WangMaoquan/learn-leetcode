import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as t,d as e,a as s,o as l}from"./app-DMwitqrB.js";const h={},k=s('<h3 id="parsequerystring" tabindex="-1"><a class="header-anchor" href="#parsequerystring"><span>ParseQueryString</span></a></h3><p><code>&#39;a=1&amp;b=2&amp;c=3&amp;d=4&#39;</code> =&gt; <code>{a:&#39;1&#39;, b: &#39;2&#39;, c: &#39;3&#39;, d: &#39;4&#39;}</code></p><div class="hint-container tip"><p class="hint-container-title">分析</p><p>根据 <code>&amp;</code> 来拆分成 <code>key=value</code> 这样的形式</p><p>然后处理 <code>key=value</code> =&gt; <code>{key: value}</code></p><p>然后合并 这个 <code>{key: value}</code> 就是我们最后想要的结果了</p></div>',3),p=s(`<p>我们其实还可以对合并值成数组, 这个数组再处理下, 取出相同的类型</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IsExistInArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Item</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> First</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">  ...infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Item</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> First</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IsExistInArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> LikeSetArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">  Result</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> unknown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> First</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...infer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> IsExistInArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">First</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">extends</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> LikeSetArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> LikeSetArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, [</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">First</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Result</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(d,B){const i=n("Playground");return l(),t("div",null,[k,e(i,{title:"ParseQueryString",link:"https%3A%2F%2Fwww.typescriptlang.org%2Fplay%23code%2FPTAEhBNQwF1BrBTAngXgG4EMA2BXOAoALggA5ygBCaAznAApoBO1A0ogGqY4A8AyvvaHAAe%2BOADsAJpVCU%2BAS1EBzAHygkuUKF78hIiVIAGAEgDe8gGZx%2BLBAF8kJ85dDtscG-vUbQAflDHQANowoPKg1gC6AFzOHKQ2nhrRAEpwAMYA9vTinDL08goANKBooghKANy4uCAQ0IAfboAwKoAhbvAIBMSkALKWCnAuXADyonBFA-gAFpYqSKBDpDpikrMTlp6%2Bc57RY5PawotSWKIwoukA7qIB4WuBc0UAdA-blleJN8OjK-ThldVgUKCACBVAG56fla0XQrnihBIoG69F6AwARgArTieJHIgR7PSgFIZLI5OSKIolMoFdGfDFY3RLPGZbK5fIk0pKcnTPyeIKIEKiWCIdJmWYo0AAHz5CAFyx2GKi4up%2B3FkoxCR8coWONaSspKJVGl8cN6-TgnAxXIQ4Q%2B0pRZvCSl1oC21taLy80Va8o1-MFT3oyq8qp9pudKuiwxQlkqNh%2BNX%2BrVQsQAZHGje0YXRGHBrEaeHwPUtGYppp4tHmDA5RBYrGxYjYE%2BXK7i4DJ3Cr9T04BjOBRqOnmNXXJws7FWaBe5n%2B1wUjIlHb-dFu7QGH2ENmtBUqtDSPQm1gMPhVKOl%2BOV7FOAByNBIACMCcRSAATGf10A"}),p])}const y=a(h,[["render",r],["__file","8.html.vue"]]),C=JSON.parse('{"path":"/learn-typescript/8.html","title":"实战一","lang":"zh-CN","frontmatter":{"title":"实战一","date":"2023-01-10T14:33:27.000Z","tag":["learn","TypeScript"],"category":["TypeScript"],"description":"实战一","footer":true},"headers":[{"level":3,"title":"ParseQueryString","slug":"parsequerystring","link":"#parsequerystring","children":[]}],"git":{"createdTime":1673332471000,"updatedTime":1673423405000,"contributors":[{"name":"wangmaoquan","email":"1782976211@qq.com","commits":5}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"learn-typescript/8.md","localizedDate":"2023年1月10日","excerpt":""}');export{y as comp,C as data};
