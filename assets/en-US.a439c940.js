import{_ as c,p as l,f as n,h as o,M as s,q as a,S as d,P as t,as as r}from"./vue-router.esm-bundler.a03b8b02.js";const p={components:{}},h={class:"varlet-site-doc"},i=s("h1",null,"DatePicker",-1),m=s("div",{class:"card"},[s("h3",null,"Intro"),s("p",null,"Used to select a date or date range.")],-1),j={class:"card"},g=s("h3",null,"Basic Usage",-1),u=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2021-04-08'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),f={class:"card"},y=s("h3",null,"Month Picker",-1),k=s("p",null,[t("Use "),s("code",null,"type"),t(" prop to change the type of the picker. The default value of "),s("code",null,"type"),t(" is "),s("code",null,"date"),t(".")],-1),_=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2021-04-08'"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"month"'),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"elevation"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),v={class:"card"},b=s("h3",null,"Multiple",-1),w=s("p",null,[t("Use "),s("code",null,"multiple"),t(" prop to select multiple dates, at this time, "),s("code",null,"date"),t(" is an array.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` date = ref([])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"multiple"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),Y={class:"card"},D=s("h3",null,"Range",-1),S=s("p",null,[t("Use "),s("code",null,"range"),t(" prop to select date range, at this time, "),s("code",null,"date"),t(" is "),s("code",null,"[startDate, endDate]"),t(".")],-1),M=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref(["),s("span",{class:"hljs-string"},"'2021-04-08'"),t(", "),s("span",{class:"hljs-string"},"'2021-04-20'"),t(`])
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(),s("span",{class:"hljs-attr"},"range"),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),z={class:"card"},C=s("h3",null,"Date Limit",-1),I=s("p",null,[t("Use "),s("code",null,"min"),t(" and "),s("code",null,"max"),t(" prop to allow the maximum and minimum date, and use "),s("code",null,"allowed-dates"),t(" prop to limit the dates that can be selected.")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2020-11-11'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(" allowedDates = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"val"),t(") =>")]),t(` {
  `),s("span",{class:"hljs-keyword"},"return"),t(),s("span",{class:"hljs-built_in"},"parseInt"),t("(val.split("),s("span",{class:"hljs-string"},"'-'"),t(")["),s("span",{class:"hljs-number"},"2"),t("], "),s("span",{class:"hljs-number"},"10"),t(") % "),s("span",{class:"hljs-number"},"2"),t(" === "),s("span",{class:"hljs-number"},"1"),t(`
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2020-10-15"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"2021-01-15"'),t(`
    `),s("span",{class:"hljs-attr"},":allowed-dates"),t("="),s("span",{class:"hljs-string"},'"allowedDates"'),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),U={class:"card"},V=s("h3",null,"Custom",-1),E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" date = ref("),s("span",{class:"hljs-string"},"'2021-05'"),t(`)

`),s("span",{class:"hljs-keyword"},"const"),t(" allowedDates = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"val"),t(") =>")]),t(` {
  `),s("span",{class:"hljs-keyword"},"return"),t(),s("span",{class:"hljs-built_in"},"parseInt"),t("(val.split("),s("span",{class:"hljs-string"},"'-'"),t(")["),s("span",{class:"hljs-number"},"1"),t("], "),s("span",{class:"hljs-number"},"10"),t(") % "),s("span",{class:"hljs-number"},"2"),t(" === "),s("span",{class:"hljs-number"},"1"),t(`
}

`),s("span",{class:"hljs-keyword"},"const"),t(" change = "),s("span",{class:"hljs-function"},[t("("),s("span",{class:"hljs-params"},"date"),t(") =>")]),t(` {
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(date)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-date-picker"),t(`
    `),s("span",{class:"hljs-attr"},"elevation"),t(`
    `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"month"'),t(`
    `),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"date"'),t(`
    `),s("span",{class:"hljs-attr"},"min"),t("="),s("span",{class:"hljs-string"},'"2016-07"'),t(`
    `),s("span",{class:"hljs-attr"},"max"),t("="),s("span",{class:"hljs-string"},'"2022-01"'),t(`
    `),s("span",{class:"hljs-attr"},"header-color"),t("="),s("span",{class:"hljs-string"},'"purple"'),t(`
    `),s("span",{class:"hljs-attr"},"color"),t("="),s("span",{class:"hljs-string"},'"#7bb872"'),t(`
    `),s("span",{class:"hljs-attr"},"first-day-of-week"),t("="),s("span",{class:"hljs-string"},'"1"'),t(`
    `),s("span",{class:"hljs-attr"},":allowed-dates"),t("="),s("span",{class:"hljs-string"},'"allowedDates"'),t(`
    @`),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"change"'),t(`
  >`)]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"year"),t("="),s("span",{class:"hljs-string"},'"{ year }"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("{{ year }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(" #"),s("span",{class:"hljs-attr"},"month"),t("="),s("span",{class:"hljs-string"},'"{ year, month }"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"span"),t(">")]),t("{{ year }}-{{ month }}"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"span"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-date-picker"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),N=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Selected date\uFF08ISO 8601 format, <code>YYYY-MM-DD</code> or <code>YYYY-MM</code>\uFF09</td><td><em>string[] | string</em></td><td><code>undefined</code></td></tr><tr><td><code>type</code></td><td>Picker type, optional values<code>date, month</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>allowed-dates</code></td><td>Restricts which dates can be selected</td><td><em>function</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Picker color</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>header-color</code></td><td>Color of picker header. If not specified it will use the color defined by color prop or the default picker color.</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>elevation</code></td><td>Whether to enable shadows</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>first-day-of-week</code></td><td>Sets the first day of the week, starting with 0 for Sunday.</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>min</code></td><td>Minimum allowed date/month (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum allowed date/month (ISO 8601 format)</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>show-current</code></td><td>Whether to display the current date</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>readonly</code></td><td>readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>multiple</code></td><td>Allow the selection of multiple dates</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>Allow the selection of date range</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>touchable</code></td><td>Allow switch panel by touch</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>preview</code></td><td>Emitted after date switched</td><td><code>year: number</code> <br><code>month: number</code></td></tr><tr><td><code>change</code></td><td>Emitted after date changed</td><td><code>value: string | string[]</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><p><code>weekIndex</code> means the nth day of the week, starting with <code>0</code> for Sunday.</p><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>year</code></td><td>Custom the year in the title</td><td><code>year: YYYY</code></td></tr><tr><td><code>month</code></td><td>Custom the month in the title</td><td><code>year: YYYY</code> <br> <code>month: MM</code></td></tr><tr><td><code>date</code></td><td>Custom the date in the title</td><td><code>year: YYYY</code> <br> <code>month: MM</code> <br> <code>date: DD</code> <br> <code>week: weekIndex</code></td></tr><tr><td><code>range</code></td><td>Custom the range in the title</td><td><code>choose: [startData, endDate]</code></td></tr><tr><td><code>multiple</code></td><td>Custom the multiple in the title</td><td><code>choose: [&#39;YYYY-MM-DD&#39; | &#39;YYYY-MM&#39;]</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--date-picker-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--date-picker-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-min-width</code></td><td><code>290px</code></td></tr><tr><td><code>--date-picker-height</code></td><td><code>385px</code></td></tr><tr><td><code>--date-picker-main-color</code></td><td><code>rgba(0, 0, 0, .87)</code></td></tr><tr><td><code>--date-picker-title-padding</code></td><td><code>16px</code></td></tr><tr><td><code>--date-picker-title-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--date-picker-title-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--date-picker-title-year-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--date-picker-title-year-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-year-margin-bottom</code></td><td><code>8px</code></td></tr><tr><td><code>--date-picker-title-date-height</code></td><td><code>48px</code></td></tr><tr><td><code>--date-picker-title-date-font-size</code></td><td><code>34px</code></td></tr><tr><td><code>--date-picker-title-date-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--date-picker-title-date-range-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--date-picker-body-background-color</code></td><td><code>transparent</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--picker-header-padding</code></td><td><code>4px 16px</code></td></tr><tr><td><code>--month-picker-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--month-picker-item-width</code></td><td><code>33%</code></td></tr><tr><td><code>--month-picker-item-height</code></td><td><code>56px</code></td></tr><tr><td><code>--month-picker-item-button-max-width</code></td><td><code>140px</code></td></tr><tr><td><code>--year-picker-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--year-picker-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--year-picker-item-active-font-size</code></td><td><code>26px</code></td></tr><tr><td><code>--year-picker-item-active-font-weight</code></td><td><code>500</code></td></tr><tr><td><code>--year-picker-item-active-font-padding</code></td><td><code>10px 0</code></td></tr><tr><td><code>--year-picker-item-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--day-picker-content-item-width</code></td><td><code>14.28%</code></td></tr><tr><td><code>--day-picker-content-item-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-content-item-padding</code></td><td><code>2px 0</code></td></tr><tr><td><code>--day-picker-content-item-button-width</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-height</code></td><td><code>32px</code></td></tr><tr><td><code>--day-picker-content-item-button-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--day-picker-head-item-color</code></td><td><code>rgba(0, 0, 0, 0.38)</code></td></tr><tr><td><code>--day-picker-head-item-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--day-picker-head-item-font-weight</code></td><td><code>600</code></td></tr></tbody></table></div>',5);function A(B,$,O,T,R,W){const e=l("var-site-code-example");return n(),o("div",h,[i,m,s("div",j,[g,a(e,null,{default:d(()=>[u]),_:1})]),s("div",f,[y,k,a(e,null,{default:d(()=>[_]),_:1})]),s("div",v,[b,w,a(e,null,{default:d(()=>[x]),_:1})]),s("div",Y,[D,S,a(e,null,{default:d(()=>[M]),_:1})]),s("div",z,[C,I,a(e,null,{default:d(()=>[P]),_:1})]),s("div",U,[V,a(e,null,{default:d(()=>[E]),_:1})]),N])}const H=c(p,[["render",A]]);export{H as default};
