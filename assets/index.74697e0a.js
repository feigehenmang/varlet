import{F as te,u as ie}from"./provide.33f00d49.js";import{I as de}from"./index.d0618c3d.js";import{P as ue}from"./index.d921d610.js";import{I as ce}from"./index.a8c33bc0.js";import{R as me}from"./index.7505bc45.js";import{d as pe,a as D,b as O,X as ve,w as fe,W as q,r as U,n as ge,Z as Q,_ as ye,p as A,ai as he,f as m,h as p,M as V,F as be,ak as Ve,D as X,N as t,Q as we,aj as Re,q as w,j as R,R as Pe,O as Ce,S as $e}from"./vue-router.esm-bundler.a03b8b02.js";import{i as Z,a as G}from"./shared.33322536.js";import{h as ke,e as v,c as Be}from"./components.eb927237.js";const Fe={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:{type:Function},onAfterRead:{type:Function},onBeforeRemove:{type:Function},onRemove:{type:Function},onOversize:{type:Function},"onUpdate:modelValue":{type:Function}},{n:Se,classes:De}=Be("uploader");let Ue=0;const Ae=pe({name:"VarUploader",directives:{Ripple:me},components:{VarIcon:de,VarPopup:ue,VarFormDetails:te},props:Fe,setup(e){const d=D(null),P=D(!1),C=D(null),T=O(()=>{const{maxlength:a,modelValue:{length:n}}=e;return ve(a)?`${n} / ${a}`:""}),{form:s,bindForm:y}=ie(),{errorMessage:$,validateWithTrigger:k,validate:h,resetValidation:l}=ke(),f=O(()=>{const{modelValue:a,hideList:n}=e;return n?[]:a}),J=()=>{d.value.click()},K=a=>{const{disabled:n,readonly:o,previewed:r}=e;if((s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||n||o||!r)return;const{url:i}=a;if(q(i)&&G(i)){ce(i);return}q(i)&&Z(i)&&(C.value=a,P.value=!0)},Y=a=>({id:Ue++,url:"",cover:"",name:a.name,file:a}),_=a=>{const n=a.target,{files:o}=n;return Array.from(o)},x=a=>new Promise(n=>{const o=new FileReader;o.onload=()=>{const r=o.result;a.file.type.startsWith("image")&&(a.cover=r),a.url=r,n(a)},o.readAsDataURL(a.file)}),ee=a=>a.map(x),ae=a=>{const{onBeforeRead:n}=e;return a.map(o=>new Promise(r=>{const i=n?n(U(o)):!0;Promise.resolve(i).then(g=>r({valid:g,varFile:o}))}))},le=async a=>{const{maxsize:n,maxlength:o,modelValue:r,onOversize:i,onAfterRead:g,readonly:F,disabled:S}=e;if((s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||S||F)return;const ne=u=>u.filter(b=>b.file.size>Q(n)?(v(i,U(b)),!1):!0),oe=u=>{const b=Math.min(u.length,Q(o)-r.length);return u.slice(0,b)};let c=_(a).map(Y);c=n!=null?ne(c):c,c=o!=null?oe(c):c;const re=await Promise.all(ee(c)),H=(await Promise.all(ae(re))).filter(({valid:u})=>u).map(({varFile:u})=>u);v(e["onUpdate:modelValue"],[...r,...H]),a.target.value="",H.forEach(u=>v(g,U(u)))},se=async a=>{const{disabled:n,readonly:o,modelValue:r,onBeforeRemove:i,onRemove:g}=e;if((s==null?void 0:s.disabled.value)||(s==null?void 0:s.readonly.value)||n||o||i&&!await i(a))return;const F=r.filter(S=>S!==a);v(g,a),W("onRemove"),v(e["onUpdate:modelValue"],F)},N=()=>e.modelValue.filter(a=>a.state==="success"),z=()=>e.modelValue.filter(a=>a.state==="error"),M=()=>e.modelValue.filter(a=>a.state==="loading"),I={getSuccess:N,getError:z,getLoading:M},W=a=>{ge(()=>{const{validateTrigger:n,rules:o,modelValue:r}=e;k(n,a,o,r,I)})};let B=!1;const j=()=>h(e.rules,e.modelValue,I),E=()=>{B=!0,v(e["onUpdate:modelValue"],[]),l()};return v(y,{validate:j,resetValidation:l,reset:E}),fe(()=>e.modelValue,()=>{!B&&W("onChange"),B=!1},{deep:!0}),{n:Se,classes:De,input:d,files:f,showPreview:P,currentPreview:C,errorMessage:$,maxlengthText:T,isHTMLSupportVideo:Z,isHTMLSupportImage:G,formDisabled:s==null?void 0:s.disabled,formReadonly:s==null?void 0:s.readonly,preview:K,triggerAction:J,handleChange:le,handleRemove:se,getSuccess:N,getError:z,getLoading:M,validate:j,resetValidation:l,reset:E}}});const Le=["onClick"],Te=["onClick"],Ne=["src","alt"],ze=["multiple","accept","capture","disabled"],Me=["src"];function Ie(e,d,P,C,T,s){const y=A("var-icon"),$=A("var-form-details"),k=A("var-popup"),h=he("ripple");return m(),p("div",{class:t(e.classes(e.n(),e.n("$--box")))},[V("div",{class:t(e.n("file-list"))},[(m(!0),p(be,null,Ve(e.files,l=>X((m(),p("div",{class:t(e.classes(e.n("file"),e.n("$-elevation--2"),[l.state==="loading",e.n("--loading")])),key:l.id,onClick:f=>e.preview(l)},[V("div",{class:t(e.n("file-name"))},we(l.name||l.url),3),e.removable?(m(),p("div",{key:0,class:t(e.n("file-close")),onClick:Re(f=>e.handleRemove(l),["stop"])},[w(y,{class:t(e.n("file-close-icon")),"var-uploader-cover":"",name:"delete"},null,8,["class"])],10,Te)):R("",!0),l.cover?(m(),p("img",{key:1,class:t(e.n("file-cover")),style:Pe({objectFit:l.fit}),src:l.cover,alt:l.name},null,14,Ne)):R("",!0),V("div",{class:t(e.classes(e.n("file-indicator"),[l.state==="success",e.n("--success")],[l.state==="error",e.n("--error")]))},null,2)],10,Le)),[[h,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?X((m(),p("div",{key:0,class:t(e.classes([!e.$slots.default,`${e.n("action")} ${e.n("$-elevation--2")}`],[e.disabled||e.formDisabled,e.n("--disabled")])),onClick:d[1]||(d[1]=(...l)=>e.triggerAction&&e.triggerAction(...l))},[V("input",{ref:"input",class:t(e.n("action-input")),type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,ze),Ce(e.$slots,"default",{},()=>[w(y,{class:t(e.n("action-icon")),"var-uploader-cover":"",name:"plus"},null,8,["class"])])],2)),[[h,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):R("",!0)],2),w($,{"error-message":e.errorMessage,"extra-message":e.maxlengthText},null,8,["error-message","extra-message"]),w(k,{class:t(e.n("preview")),"var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[2]||(d[2]=l=>e.showPreview=l),onClosed:d[3]||(d[3]=l=>e.currentPreview=null)},{default:$e(()=>{var l,f;return[e.currentPreview&&e.isHTMLSupportVideo((l=e.currentPreview)==null?void 0:l.url)?(m(),p("video",{key:0,class:t(e.n("preview-video")),playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(f=e.currentPreview)==null?void 0:f.url},null,10,Me)):R("",!0)]}),_:1},8,["class","show"])],2)}const L=ye(Ae,[["render",Ie]]);L.install=function(e){e.component(L.name,L)};export{L as U};
