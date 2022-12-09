import{S as se}from"./index.bde948db.js";import{d as V,a as r,b as _,G as te,_ as X,f as v,i as F,S as b,M as H,O as U,P as T,Q as u,m as oe,aF as ae,w as le,o as Y,e as re,Z as L,V as ie,h as k,F as K,ak as q,N as w,R as P,ae as ce,aA as de,an as m,q as D}from"./vue-router.esm-bundler.a03b8b02.js";import{u as ue,a as fe,b as pe,d as ve,c as j,e as O}from"./components.eb927237.js";import{e as he}from"./shared.33322536.js";import{t as me,d as M,g as ye,e as _e,b as be,c as ke,n as Ce,r as ge}from"./elements.39521dbc.js";import{C as R}from"./index.027eb0ef.js";import{d as Ie}from"./index.43bb0831.js";import{u as Te,a as G,_ as xe,b as Ne,c as Ae}from"./index.bb7a1b0d.js";import"./index.d0618c3d.js";const Q=Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"),Z=Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");function Be(){const{bindChildren:e,childProviders:l}=fe(Q),{length:s}=ue(Z);return{length:s,indexAnchors:l,bindIndexAnchors:e}}function $e(){const{parentProvider:e,bindParent:l}=pe(Q),{index:s}=ve(Z);if(!e||!l)throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');return{index:s,indexBar:e,bindIndexBar:l}}const Ee={index:{type:[Number,String]}},{n:Se,classes:we}=j("index-anchor"),De=V({name:"VarIndexAnchor",components:{VarSticky:se},inheritAttrs:!1,props:Ee,setup(e){const{index:l,indexBar:s,bindIndexBar:d}=$e(),i=r(0),n=r(!1),a=_(()=>e.index),o=r(null),{active:f,sticky:N,cssMode:A,stickyOffsetTop:y,zIndex:C}=s;return d({index:l,name:a,ownTop:i,setOwnTop:()=>{!o.value||(i.value=o.value.$el?o.value.$el.offsetTop:o.value.offsetTop)},setDisabled:g=>{n.value=g}}),{n:Se,classes:we,name:a,anchorEl:o,active:f,sticky:N,zIndex:C,disabled:n,cssMode:A,stickyOffsetTop:y,Transition:te}}});function Oe(e,l,s,d,i,n){return v(),F(ae(e.sticky?e.n("$-sticky"):e.Transition),{"offset-top":e.sticky?e.stickyOffsetTop:null,"z-index":e.sticky?e.zIndex:null,disabled:e.disabled&&!e.cssMode,"css-mode":e.cssMode,ref:"anchorEl"},{default:b(()=>[H("div",oe({class:e.n()},e.$attrs),[U(e.$slots,"default",{},()=>[T(u(e.name),1)])],16)]),_:3},8,["offset-top","z-index","disabled","css-mode"])}const ze=X(De,[["render",Oe]]),Pe={sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:[String,Number],default:0},cssMode:{type:Boolean,default:!1},hideList:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},highlightColor:{type:String},duration:{type:[Number,String],default:0},onClick:{type:Function},onChange:{type:Function}},{n:Le,classes:Me}=j("index-bar"),Re=V({name:"VarIndexBar",props:Pe,setup(e){const{length:l,indexAnchors:s,bindIndexAnchors:d}=Be(),i=r(""),n=r(null),a=r(null),o=r([]),f=r(),N=_(()=>e.sticky),A=_(()=>e.cssMode),y=_(()=>me(e.stickyOffsetTop)),C=_(()=>e.zIndex);d({active:f,sticky:N,cssMode:A,stickyOffsetTop:y,zIndex:C});const B=t=>{const c=ie(t)?t.name.value:t;c===f.value||c===void 0||(f.value=c,O(e.onChange,c))},$=()=>{const t=_e(n.value),c=n.value===window?document.body.scrollHeight:n.value.scrollHeight,{offsetTop:E}=a.value;s.forEach((p,h)=>{const S=p.ownTop.value,I=t-S+y.value-E,ne=h===s.length-1?c:s[h+1].ownTop.value-p.ownTop.value;I>=0&&I<ne&&!i.value&&(h&&!e.cssMode&&s[h-1].setDisabled(!0),p.setDisabled(!1),B(p))})},g=async(t,c)=>{const{offsetTop:E}=a.value;if(c&&O(e.onClick,t),t===f.value)return;const p=s.find(({name:I})=>t===I.value);if(!p)return;const h=p.ownTop.value-y.value+E,S=be(n.value);i.value=t,B(t),await ke(n.value,{left:S,top:h,animation:he,duration:L(e.duration)}),Ce(()=>{i.value=""})},ee=t=>{ge(()=>g(t))};return le(()=>l.value,async()=>{await M(),s.forEach(({name:t,setOwnTop:c})=>{t.value&&o.value.push(t.value),c()})}),Y(async()=>{await M(),n.value=ye(a.value),n.value.addEventListener("scroll",$)}),re(()=>{O(n.value.removeEventListener,"scroll",$)}),{n:Le,classes:Me,barEl:a,active:f,zIndex:C,anchorNameList:o,toNumber:L,scrollTo:ee,anchorClick:g}}});const Ve=["onClick"];function Xe(e,l,s,d,i,n){return v(),k("div",{class:w(e.n()),ref:"barEl"},[U(e.$slots,"default"),H("ul",{class:w(e.n("anchor-list")),style:P({zIndex:e.toNumber(e.zIndex)+2,display:e.hideList?"none":"block"})},[(v(!0),k(K,null,q(e.anchorNameList,a=>(v(),k("li",{key:a,class:w(e.classes(e.n("anchor-item"),[e.active===a,e.n("anchor-item--active")])),style:P({color:e.active===a&&e.highlightColor?e.highlightColor:""}),onClick:o=>e.anchorClick(a,!0)},u(a),15,Ve))),128))],6)],2)}const x=X(Re,[["render",Xe]]);x.install=function(e){e.component(x.name,x)};const Fe={title:"\u6807\u9898",text:"\u6587\u672C"},He={title:"Title",text:"Text"},{add:J,use:Ue,pack:z,packs:nn,merge:sn}=Te(),Ye=e=>{Ae(e),Ue(e)};G("zh-CN",xe);G("en-US",Ne);J("zh-CN",Fe);J("en-US",He);const tn={setup(e){const l=r([]),s=r("#e7edf7"),d=r("#2e67ba");Y(()=>{for(let n=0;n<26;n++)l.value.push(String.fromCharCode(65+n))});const i=n=>{console.log(n)};return ce(Ye),de(Ie,n=>{s.value=n==="darkTheme"?"rgb(41, 42, 45)":"#e7edf7",d.value=n==="darkTheme"?"#3980e8":"#2e67ba"}),(n,a)=>(v(),F(m(x),{onChange:i,duration:"300","sticky-offset-top":"14.4vw"},{default:b(()=>[(v(!0),k(K,null,q(l.value,o=>(v(),k("div",{key:o},[D(ze,{index:o,class:"var-index-anchor__example",style:P({background:s.value,color:d.value})},{default:b(()=>[T(u(m(z).title)+" "+u(o),1)]),_:2},1032,["index","style"]),D(m(R),null,{default:b(()=>[T(u(o)+" "+u(m(z).text),1)]),_:2},1024),D(m(R),null,{default:b(()=>[T(u(o)+" "+u(m(z).text),1)]),_:2},1024)]))),128))]),_:1}))}};export{tn as default};
