import{M as ee}from"./index.7a07a33f.js";import{R as ae}from"./index.7505bc45.js";import{I as le}from"./index.d0618c3d.js";import{C as se}from"./index.027eb0ef.js";import{I as ie}from"./index.0aaee0ea.js";import{d as ne,a as k,Z as t,b as M,w as L,X as F,_ as oe,p as N,ai as ue,f as m,h as f,D as I,N as r,O,q as y,aQ as R,M as w,P as B,Q as b,F as j,ak as A,S as q,i as te,j as H}from"./vue-router.esm-bundler.a03b8b02.js";import{p as re}from"./index.bb7a1b0d.js";import{c as de}from"./components.eb927237.js";const me={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxPagerCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function},"onUpdate:current":{type:Function},"onUpdate:size":{type:Function}},{n:ve,classes:pe}=de("pagination"),fe=ne({name:"VarPagination",components:{VarMenu:ee,VarIcon:le,VarCell:se,VarInput:ie},directives:{Ripple:ae},props:me,setup(e){const s=k(!1),S=k(""),P=k("1"),h=k(!1),z=k(!1),i=k(t(e.current)||1),v=k(t(e.size)||10),$=k([]),c=M(()=>Math.ceil(e.maxPagerCount/2)),n=M(()=>Math.ceil(t(e.total)/t(v.value))),l=M(()=>{const a=v.value*(i.value-1)+1,u=Math.min(v.value*i.value,t(e.total));return[a,u]}),g=M(()=>e.showTotal?e.showTotal(t(e.total),l.value):""),T=(a,u)=>F(a)?!1:u===1?h.value:z.value,X=(a,u)=>F(a)?"basic":u===1?"head":"tail",Z=(a,u)=>{a===i.value||e.disabled||(F(a)?i.value=a:a==="prev"?i.value>1&&(i.value-=1):a==="next"?i.value<n.value&&(i.value+=1):a==="..."&&(u===1?i.value=Math.max(i.value-e.maxPagerCount,1):i.value=Math.min(i.value+e.maxPagerCount,n.value)))},G=()=>{e.disabled||(s.value=!0)},W=a=>{v.value=a,s.value=!1},Q=a=>/^[1-9][0-9]*$/.test(a),Y=(a,u,C)=>{if(C.target.blur(),Q(u)){let V=t(u);V>n.value&&(V=n.value,P.value=`${V}`),V!==i.value&&(i.value=V)}a==="quick"&&(S.value=""),a==="simple"&&!Q(u)&&(P.value=`${i.value}`)};return L([()=>e.current,()=>e.size],([a,u])=>{i.value=t(a)||1,v.value=t(u||10)}),L([i,v],([a,u],[C,V])=>{var J,K;if(a>n.value){i.value=n.value;return}let d=[];const{maxPagerCount:p,total:x,onChange:U}=e,_=Math.ceil(t(x)/t(V)),E=n.value-(p-c.value)-1;if(P.value=`${a}`,n.value-2>p){if(C===void 0||n.value!==_)for(let o=2;o<p+2;o++)d.push(o);if(a<=p&&a<E){d=[];for(let o=1;o<p+1;o++)d.push(o+1);h.value=!0,z.value=!1}if(a>p&&a<E){d=[];for(let o=1;o<p+1;o++)d.push(a+o-c.value);h.value=a===2&&p===1,z.value=!1}if(a>=E){d=[];for(let o=1;o<p+1;o++)d.push(n.value-(p-o)-1);h.value=!1,z.value=!0}d=[1,"...",...d,"...",n.value]}else for(let o=1;o<=n.value;o++)d.push(o);$.value=d,C!==void 0&&n.value>0&&(U==null||U(a,u)),(J=e["onUpdate:current"])==null||J.call(e,a),(K=e["onUpdate:size"])==null||K.call(e,u)},{immediate:!0}),{n:ve,classes:pe,pack:re,current:i,menuVisible:s,size:v,pageCount:n,pageList:$,inputValue:S,simpleValue:P,totalText:g,getMode:X,isHideEllipsis:T,clickItem:Z,showMenu:G,clickSize:W,setPage:Y,toNumber:t}}});const be=["item-mode","onClick"];function ge(e,s,S,P,h,z){const i=N("var-icon"),v=N("var-input"),$=N("var-cell"),c=N("var-menu"),n=ue("ripple");return m(),f("ul",{class:r(e.n())},[I((m(),f("li",{class:r(e.classes(e.n("item"),e.n("prev"),[e.current<=1||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.n("$-elevation--2")])),onClick:s[0]||(s[0]=l=>e.clickItem("prev"))},[O(e.$slots,"prev",{},()=>[y(i,{name:"chevron-left"})])],2)),[[n,{disabled:e.current<=1||e.disabled}]]),e.simple?(m(),f("li",{key:0,class:r(e.classes(e.n("simple"),[e.disabled,e.n("item--disabled")]))},[y(v,{modelValue:e.simpleValue,"onUpdate:modelValue":s[1]||(s[1]=l=>e.simpleValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[2]||(s[2]=l=>e.setPage("simple",e.simpleValue,l)),onKeydown:s[3]||(s[3]=R(l=>e.setPage("simple",e.simpleValue,l),["enter"]))},null,8,["modelValue","disabled"]),w("span",null,[B(" / "+b(e.pageCount)+" ",1),w("div",{class:r(e.n("simple-line"))},null,2)])],2)):(m(!0),f(j,{key:1},A(e.pageList,(l,g)=>I((m(),f("li",{key:e.toNumber(l)+g,"item-mode":e.getMode(l,g),class:r(e.classes(e.n("item"),e.n("$-elevation--2"),[l===e.current&&!e.disabled,e.n("item--active")],[e.isHideEllipsis(l,g),e.n("item--hide")],[e.disabled,e.n("item--disabled")],[l===e.current&&e.disabled,e.n("item--disabled--active")])),onClick:T=>e.clickItem(l,g)},[B(b(l),1)],10,be)),[[n,{disabled:e.disabled}]])),128)),I((m(),f("li",{class:r(e.classes(e.n("item"),e.n("next"),[e.current>=e.pageCount||e.disabled,e.n("item--disabled")],[e.simple,e.n("item--simple"),e.n("$-elevation--2")])),onClick:s[4]||(s[4]=l=>e.clickItem("next"))},[O(e.$slots,"next",{},()=>[y(i,{name:"chevron-right"})])],2)),[[n,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(m(),f("li",{key:2,class:r(e.classes(e.n("size"),[e.disabled,e.n("item--disabled")]))},[y(c,{show:e.menuVisible,"onUpdate:show":s[6]||(s[6]=l=>e.menuVisible=l),"offset-x":-4},{menu:q(()=>[(m(!0),f(j,null,A(e.sizeOption,(l,g)=>I((m(),te($,{class:r(e.classes(e.n("list"),[e.size===l,e.n("list--active")])),key:g,onClick:T=>e.clickSize(l)},{default:q(()=>[B(b(l)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[n]])),128))]),default:q(()=>[w("div",{class:r(e.classes(e.n("size--open"),[e.current<=1||e.disabled,e.n("size--open--disabled")])),onClick:s[5]||(s[5]=(...l)=>e.showMenu&&e.showMenu(...l))},[w("span",null,b(e.size)+b(e.pack.paginationItem)+" / "+b(e.pack.paginationPage),1),y(i,{class:r(e.n("size--open-icon")),"var-pagination-cover":"",name:"menu-down"},null,8,["class"])],2)]),_:1},8,["show"])],2)):H("",!0),e.showQuickJumper&&!e.simple?(m(),f("li",{key:3,class:r(e.classes(e.n("quickly"),[e.disabled,"item--disabled"]))},[B(b(e.pack.paginationJump)+" ",1),y(v,{modelValue:e.inputValue,"onUpdate:modelValue":s[7]||(s[7]=l=>e.inputValue=l),disabled:e.disabled,"var-pagination-cover":"",onBlur:s[8]||(s[8]=l=>e.setPage("quick",e.inputValue,l)),onKeydown:s[9]||(s[9]=R(l=>e.setPage("quick",e.inputValue,l),["enter"]))},null,8,["modelValue","disabled"])],2)):H("",!0),e.totalText?(m(),f("li",{key:4,class:r(e.n("total"))},b(e.totalText),3)):H("",!0)],2)}const D=oe(fe,[["render",ge]]);D.install=function(e){e.component(D.name,D)};export{D as P};
