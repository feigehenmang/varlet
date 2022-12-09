import{_ as n,p as c,f as a,h as r,M as e,q as l,S as o,as as s,P as t}from"./vue-router.esm-bundler.a03b8b02.js";const i={components:{}},h={class:"varlet-site-doc"},u=s('<h1>\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6210\u578B\u5DE5\u5177(@varlet/cli)</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5F00\u7BB1\u5373\u7528\u7684 <code>Vue3\u7EC4\u4EF6\u5E93</code> \u5FEB\u901F\u6210\u578B\u5DE5\u5177\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u547D\u4EE4\u548C\u5DE5\u5177\u53BB\u89E3\u51B3\u7EC4\u4EF6\u5E93\u5F00\u53D1\u4E0A\u7684\u95EE\u9898</p></div><div class="card"><h3>\u7279\u6027</h3><ul><li>\u{1F4E6} \xA0\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u5F00\u53D1\u73AF\u5883</li><li>\u{1F4E6} \xA0\u5F00\u7BB1\u5373\u7528\u7684\u7EC4\u4EF6\u5E93\u7F16\u8BD1\u5DE5\u5177\uFF0C\u652F\u6301\u5BFC\u51FA <code>esm</code>, <code>cjs</code>, <code>umd</code> \u4E09\u79CD\u6A21\u5757\u4EE3\u7801</li><li>\u{1F6E0}\uFE0F \xA0\u57FA\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u7EC4\u4EF6\u5E93\u6587\u6863\u7AD9\u70B9\uFF0C\u652F\u6301\u767E\u5EA6\u7EDF\u8BA1\u548C\u4E3B\u9898\u5B9A\u5236</li><li>\u{1F6E0}\uFE0F \xA0\u652F\u6301 <code>sfc</code> \u548C <code>tsx</code> \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u7F16\u5199\u98CE\u683C</li><li>\u{1F4E6} \xA0\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177</li><li>\u{1F4E6} \xA0\u5F00\u7BB1\u5373\u7528\u7684\u5355\u5143\u6D4B\u8BD5\u5DE5\u5177</li><li>\u{1F4E6} \xA0\u5F00\u7BB1\u5373\u7528\u7684\u4EE3\u7801\u53D1\u5E03\u5DE5\u5177,\u540C\u65F6\u53D1\u5E03\u5230 <code>npm</code> \u548C <code>github</code>, \u5E76\u81EA\u52A8\u751F\u6210\u66F4\u65B0\u65E5\u5FD7</li><li>\u{1F4AA} \xA0\u652F\u6301 <code>Typescript</code></li><li>\u{1F4AA} \xA0\u652F\u6301 <code>\u6697\u9ED1\u6A21\u5F0F</code></li><li>\u{1F30D} \xA0\u652F\u6301 <code>\u56FD\u9645\u5316</code></li><li>\u{1F680} \xA0\u57FA\u4E8E <code>pnpm</code></li></ul></div>',3),_={class:"card"},p=e("h3",null,"\u5FEB\u901F\u5F00\u59CB",-1),g=e("p",null,[e("code",null,"@varlet/cli"),t(" \u5185\u7F6E\u4E86 "),e("code",null,"sfc"),t(" \u548C "),e("code",null,"tsx"),t(" \u4E24\u79CD\u98CE\u683C\u7684\u7EC4\u4EF6\u5E93\u9879\u76EE\u6A21\u677F\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),e("code",null,"gen"),t(" \u547D\u4EE4\u76F4\u63A5\u751F\u6210\u3002 \u65B9\u4FBF\u60A8\u76F4\u63A5\u8FDB\u5165\u7EC4\u4EF6\u5E93\u5F00\u53D1\u3002")],-1),m=e("pre",{class:"hljs"},[e("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),v=s('<h2>\u9AD8\u7EA7\u5B9A\u5236</h2><div class="card"><h3>\u914D\u7F6E\u6587\u4EF6</h3><p>\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code>varlet.config.mjs</code> \u7528\u6765\u7BA1\u7406\u6574\u4E2A\u7EC4\u4EF6\u5E93\u9879\u76EE\u7684\u5177\u4F53\u7EC6\u8282\u3002 \u9ED8\u8BA4\u914D\u7F6E\u53EF\u67E5\u9605 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>\u3002 \u4E5F\u53EF\u4EE5\u53C2\u8003 <code>@varlet/ui</code> \u7684 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u7EC4\u4EF6\u5E93\u5168\u540D\uFF0C\u4F1A\u4F5C\u4E3A\u5305\u540D</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>\u7EC4\u4EF6\u5E93\u547D\u540D\u7A7A\u95F4, \u4F1A\u4F5C\u4E3A\u7EC4\u4EF6\u524D\u7F00</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u4E3B\u673A</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684\u6807\u9898</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>\u6587\u6863\u4E2D\u7EC4\u4EF6\u5E93\u7684logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>\u6587\u6863\u9ED8\u8BA4\u8BED\u8A00</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>\u662F\u5426\u663E\u793A\u53F3\u4FA7\u624B\u673A\u9884\u89C8</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>\u4EAE\u8272\u6A21\u5F0F\u6587\u6863\u4E3B\u9898</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>\u6697\u9ED1\u6A21\u5F0F\u6587\u6863\u4E3B\u9898</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>\u6587\u6863\u4EE3\u7801\u7247\u6BB5\u6837\u5F0F\u76F8\u5173</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>\u6587\u6863\u7EDF\u8BA1\u76F8\u5173</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile\u7AEF\u6587\u6863\u7ED3\u6784\u914D\u7F6E</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>moduleCompatible</code></td><td>\u6A21\u5757\u517C\u5BB9\u914D\u7F6E</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr></tbody></table></div>',2),f={class:"card"},j=e("h3",null,"\u81EA\u5B9A\u4E49\u9875\u9762",-1),y=e("p",null,[t("\u5982\u679C\u60F3\u5728\u7EC4\u4EF6\u5E93\u4E2D\u63D2\u5165\u5176\u4ED6\u9875\u9762\uFF0C\u53EF\u4EE5\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684\u521B\u5EFA "),e("code",null,"pages"),t(" \u6587\u4EF6\u5939\u7F16\u5199 vue \u7EC4\u4EF6\uFF0C \u7528\u6765\u751F\u6210\u5176\u4ED6\u7684\u9875\u9762\u3002 \u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A")],-1),b=e("pre",{class:"hljs"},[e("code",null,`|-- varlet-ui
  |-- src
  |-- docs
  |-- pages
    |-- sponsor
      |-- index.vue
    |-- contributor
      |-- locale
        |-- en-US.ts
      |-- index.vue
    |-- changelog
      |-- locale
        |-- zh-CN.ts
        |-- en-US.ts
      |-- index.vue
`)],-1),x=e("p",null,"\u751F\u6210\u7684\u8DEF\u7531\u5982\u4E0B\uFF1A",-1),k=e("pre",{class:"hljs"},[e("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),w={class:"card"},C=e("h3",null,"\u547D\u4EE4\u76F8\u5173",-1),N=e("h4",null,"\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668",-1),V=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev
`)],-1),R=e("h4",null,"\u6784\u5EFA\u6587\u6863\u7AD9\u70B9",-1),S=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build
`)],-1),z=e("h4",null,"\u9884\u89C8\u6587\u6863\u7AD9\u70B9",-1),T=e("pre",{class:"hljs"},[e("code",null,`varlet-cli preview
`)],-1),U=e("h4",null,"\u6784\u5EFA\u7EC4\u4EF6\u5E93",-1),$=e("pre",{class:"hljs"},[e("code",null,`varlet-cli compile
`)],-1),B=e("h4",null,"\u6267\u884C\u6240\u6709\u7684\u5355\u5143\u6D4B\u8BD5",-1),E=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test
`)],-1),L=e("h4",null,"\u4EE5 watch \u6A21\u5F0F\u6267\u884C\u5355\u5143\u6D4B\u8BD5",-1),M=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -w
or
varlet-cli test -wa
`)],-1),O=e("h4",null,"\u68C0\u67E5\u4EE3\u7801",-1),q=e("pre",{class:"hljs"},[e("code",null,`varlet-cli lint
`)],-1),A=e("h4",null,"\u6821\u9A8C\u63D0\u4EA4\u4FE1\u606F",-1),P=e("pre",{class:"hljs"},[e("code",null,`varlet-cli commit-lint
`)],-1),D=e("h4",null,"\u751F\u6210\u66F4\u65B0\u65E5\u5FD7",-1),F=e("pre",{class:"hljs"},[e("code",null,`varlet-cli changelog
`)],-1),G=e("h4",null,"\u53D1\u5E03\u7EC4\u4EF6\u5E93",-1),H=e("pre",{class:"hljs"},[e("code",null,`varlet-cli release
`)],-1),I=e("h4",null,"\u751F\u6210\u4E00\u4E2A\u9879\u76EE\u6A21\u677F",-1),J=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli gen
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
-n
--name
  \u9879\u76EE\u540D
-s
--sfc
  \u751F\u6210 sfc \u98CE\u683C\u7684\u9879\u76EE\u6A21\u677F
-t
--tsx
  \u751F\u6210 tsx \u683C\u5F0F\u9879\u76EE
-l
--locale
  \u9700\u8981\u652F\u6301\u56FD\u9645\u5316
`)])],-1),K=e("h4",null,"\u521B\u5EFA\u7EC4\u4EF6\u6A21\u677F\u6587\u4EF6",-1),Q=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli create
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
-n
--name
  \u7EC4\u4EF6\u540D
-s
--sfc
  \u751F\u6210 sfc \u98CE\u683C\u7684\u7EC4\u4EF6
-t
--tsx
  \u751F\u6210 tsx \u98CE\u683C\u7684\u6587\u4EF6
-l
--locale
  \u9700\u8981\u652F\u6301\u56FD\u9645\u5316
`)])],-1),W=e("div",{class:"card"},[e("h3",null,"\u53D1\u5E03\u524D\u6CE8\u610F"),e("ul",null,[e("li",null,[t("1."),e("code",null,"npm"),t(" \u7684\u4ED3\u5E93\u6E90\u5FC5\u987B\u6307\u5411 "),e("code",null,"npm"),t(" \u5B98\u65B9\u955C\u50CF")]),e("li",null,[t("2.\u6267\u884C "),e("code",null,"npm login"),t(" \u8FDB\u884C\u767B\u5F55")])])],-1),X={class:"card"},Y=e("h3",null,"\u6A21\u5757\u9002\u914D\u5BF9\u8C61",-1),Z=e("p",null,[t("\u4E00\u4E9B\u5916\u90E8\u4F9D\u8D56\u53EF\u80FD\u9700\u8981\u8FDB\u884C\u6A21\u5757\u8BED\u6CD5\u7684\u9002\u914D\uFF0C\u4EE5\u8FBE\u5230\u53EF\u4EE5\u6B63\u786E\u7F16\u8BD1\u5230 "),e("code",null,"commonjs"),t(" \u548C "),e("code",null,"esmodule"),t(" \u7684\u76EE\u7684\uFF0C\u4F8B\u5982 "),e("code",null,"dayjs"),t(" \u7684 "),e("code",null,"esmodule"),t(" \u5199\u6CD5\u662F")],-1),ee=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" dayjs "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'dayjs/esm'"),t(`
`)])],-1),te=e("p",null,[t("\u800C\u4E3A\u4E86\u6784\u5EFA "),e("code",null,"commonjs"),t(" \u65F6\u7684\u5199\u6CD5\u662F")],-1),de=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-keyword"},"import"),t(" * "),e("span",{class:"hljs-keyword"},"as"),t(" dayjs "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'dayjs'"),t(`
`)])],-1),le=e("p",null,[t("\u5728\u9879\u76EE\u4E2D\u6211\u4EEC\u62E5\u62B1 "),e("code",null,"esmodule"),t(" \u6A21\u5757\u4F7F\u7528\u7B2C\u4E00\u79CD\u5199\u6CD5\uFF0C\u5E76\u505A\u5982\u4E0B\u914D\u7F6E\u8FDB\u884C\u9002\u914D")],-1),oe=e("pre",{class:"hljs"},[e("code",null,[e("span",{class:"hljs-comment"},"// varlet.config.mjs"),t(`
`),e("span",{class:"hljs-keyword"},"import"),t(" { defineConfig } "),e("span",{class:"hljs-keyword"},"from"),t(),e("span",{class:"hljs-string"},"'@varlet/cli'"),t(`

`),e("span",{class:"hljs-keyword"},"export"),t(),e("span",{class:"hljs-keyword"},"default"),t(` defineConfig({
  `),e("span",{class:"hljs-attr"},"moduleCompatible"),t(`: {
    `),e("span",{class:"hljs-string"},`"import dayjs from 'dayjs/esm'\\n"`),t(": "),e("span",{class:"hljs-string"},`"import * as dayjs from 'dayjs'\\n"`),t(`
  }
})
`)])],-1);function se(ne,ce,ae,re,ie,he){const d=c("var-site-code-example");return a(),r("div",h,[u,e("div",_,[p,g,l(d,{"playground-ignore":""},{default:o(()=>[m]),_:1})]),v,e("div",f,[j,y,l(d,{"playground-ignore":""},{default:o(()=>[b]),_:1}),x,l(d,{"playground-ignore":""},{default:o(()=>[k]),_:1})]),e("div",w,[C,N,l(d,{"playground-ignore":""},{default:o(()=>[V]),_:1}),R,l(d,{"playground-ignore":""},{default:o(()=>[S]),_:1}),z,l(d,{"playground-ignore":""},{default:o(()=>[T]),_:1}),U,l(d,{"playground-ignore":""},{default:o(()=>[$]),_:1}),B,l(d,{"playground-ignore":""},{default:o(()=>[E]),_:1}),L,l(d,{"playground-ignore":""},{default:o(()=>[M]),_:1}),O,l(d,{"playground-ignore":""},{default:o(()=>[q]),_:1}),A,l(d,{"playground-ignore":""},{default:o(()=>[P]),_:1}),D,l(d,{"playground-ignore":""},{default:o(()=>[F]),_:1}),G,l(d,{"playground-ignore":""},{default:o(()=>[H]),_:1}),I,l(d,{"playground-ignore":""},{default:o(()=>[J]),_:1}),K,l(d,{"playground-ignore":""},{default:o(()=>[Q]),_:1})]),W,e("div",X,[Y,Z,l(d,{"playground-ignore":""},{default:o(()=>[ee]),_:1}),te,l(d,{"playground-ignore":""},{default:o(()=>[de]),_:1}),le,l(d,{"playground-ignore":""},{default:o(()=>[oe]),_:1})])])}const _e=n(i,[["render",se]]);export{_e as default};
