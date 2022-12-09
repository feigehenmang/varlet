import{h as oe,e as y,c as ie}from"./components.eb927237.js";import{F as ce,u as de}from"./provide.33f00d49.js";import{m as me,h as fe}from"./elements.39521dbc.js";import{d as ve,a as M,r as be,b as S,Z as r,av as c,X as D,w as G,o as he,n as ge,_ as Ve,p as ye,f as U,h as B,M as m,N as i,R as k,F as Se,ak as ke,aj as J,O as Ne,q as pe,Q as Ce}from"./vue-router.esm-bundler.a03b8b02.js";function Te(e){return["always","normal","never"].includes(e)}const we={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:Te},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},max:{type:[String,Number],default:100},min:{type:[String,Number],default:0},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}},{n:K,classes:ze}=ie("slider");var Y=(e=>(e.First="1",e.Second="2",e))(Y||{});const Fe=ve({name:"VarSlider",components:{VarFormDetails:ce},props:we,setup(e){const{bindForm:C,form:f}=de(),{errorMessage:E,validateWithTrigger:A,validate:I,resetValidation:T}=oe(),s=()=>I(e.rules,e.modelValue),d=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),x=()=>ge(()=>A(["onChange"],"onChange",e.rules,e.modelValue)),L=M(null),v=M(0),w=M(!1),l=be({[1]:d(),[2]:d()}),$=S(()=>r(e.max)-r(e.min)),b=S(()=>v.value/$.value*r(e.step)),_=S(()=>{const{modelValue:t,range:a}=e;let n=[];return a&&c(t)?n=[{value:g(t[0]),enumValue:"1",text:p(t[0])},{value:g(t[1]),enumValue:"2",text:p(t[1])}]:D(t)&&(n=[{value:g(t),enumValue:"1",text:p(t)}]),n}),ee=S(()=>{const{activeColor:t,range:a,modelValue:n}=e,u=a&&c(n)?g(Math.min(n[0],n[1])):0;return{width:`${a&&c(n)?g(Math.max(n[0],n[1]))-u:g(n)}%`,left:`${u}%`,background:t}}),N=S(()=>e.disabled||(f==null?void 0:f.disabled.value)),z=S(()=>e.readonly||(f==null?void 0:f.readonly.value)),te=t=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:l[t].active,g=t=>{const{min:a,max:n}=e;return t<r(a)?0:t>r(n)?100:(t-r(a))/$.value*100},p=t=>{if(!D(t))return 0;let a=t;return a<Number(e.min)&&(a=Number(e.min)),a>Number(e.max)&&(a=Number(e.max)),parseInt(`${a}`,10)===a?a:r(a.toPrecision(5))},X=(t,a)=>{let n=[];const{step:u,range:o,modelValue:h,onChange:F,min:V}=e,O=r(u),Q=Math.round(t/b.value),P=Q*O+r(V),se=l[a].percentValue*O+r(V);if(l[a].percentValue=Q,o&&c(h)&&(n=a==="1"?[P,h[1]]:[h[0],P]),se!==P){const Z=o?n.map(ue=>p(ue)):p(P);y(F,Z),y(e["onUpdate:modelValue"],Z),x()}},ae=t=>{if(!e.range)return"1";const a=l[1].percentValue*b.value,n=l[2].percentValue*b.value,u=Math.abs(t-a),o=Math.abs(t-n);return u<=o?"1":"2"},ne=(t,a)=>{v.value||(v.value=L.value.offsetWidth),!(N.value||z.value)&&(y(e.onStart),w.value=!0,l[a].startPosition=t.touches[0].clientX)},le=(t,a)=>{if(N.value||z.value||!w.value)return;let n=t.touches[0].clientX-l[a].startPosition+l[a].currentLeft;l[a].active=!0,n<=0?n=0:n>=v.value&&(n=v.value),X(n,a)},H=t=>{const{range:a,modelValue:n,onEnd:u,step:o,min:h}=e;if(N.value||z.value)return;let F=[];l[t].currentLeft=l[t].percentValue*b.value,l[t].active=!1;const V=l[t].percentValue*r(o)+r(h);a&&c(n)&&(F=t==="1"?[V,n[1]]:[n[0],V]),y(u,a?F:V),w.value=!1},re=t=>{if(N.value||z.value||t.target.closest(`.${K("thumb")}`))return;const a=t.clientX-fe(t.currentTarget),n=ae(a);X(a,n),H(n)},R=()=>{const t=r(e.step);return isNaN(t)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):t<0?(console.warn('[Varlet] Slider: "step" should be > 0'),!1):!0},j=()=>{const{range:t,modelValue:a}=e;return t&&!c(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!t&&c(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):t&&c(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},q=(t=e.modelValue,a=r(e.step))=>{const n=u=>{const{min:o,max:h}=e;return u<r(o)?0:u>r(h)?$.value/a:(u-r(o))/a};e.range&&c(t)?(l[1].percentValue=n(t[0]),l[1].currentLeft=l[1].percentValue*b.value,l[2].percentValue=n(t[1]),l[2].currentLeft=l[2].percentValue*b.value):D(t)&&(l[1].currentLeft=n(t)*b.value)};return y(C,{reset:()=>{const t=e.range?[0,0]:0;y(e["onUpdate:modelValue"],t),T()},validate:s,resetValidation:T}),G([()=>e.modelValue,()=>e.step],([t,a])=>{!R()||!j()||w.value||q(t,r(a))}),G(v,()=>q()),he(()=>{!R()||!j()||(v.value=L.value.offsetWidth)}),{n:K,classes:ze,Thumbs:Y,sliderEl:L,getFillStyle:ee,isDisabled:N,errorMessage:E,thumbsProps:l,thumbList:_,multiplySizeUnit:me,toNumber:r,showLabel:te,start:ne,move:le,end:H,click:re}}});const Pe=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Le(e,C,f,E,A,I){const T=ye("var-form-details");return U(),B("div",{class:i(e.n())},[m("div",{class:i(e.classes(e.n("block"),[e.isDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")])),ref:"sliderEl",onClick:C[0]||(C[0]=(...s)=>e.click&&e.click(...s))},[m("div",{class:i(e.n("track"))},[m("div",{class:i(e.n("track-background")),style:k({background:e.trackColor,height:e.multiplySizeUnit(e.trackHeight)})},null,6),m("div",{class:i(e.n("track-fill")),style:k(e.getFillStyle)},null,6)],2),(U(!0),B(Se,null,ke(e.thumbList,s=>(U(),B("div",{class:i(e.n("thumb")),key:s.enumValue,style:k({left:`${s.value}%`,zIndex:e.thumbsProps[s.enumValue].active?1:void 0}),onTouchstart:J(d=>e.start(d,s.enumValue),["stop"]),onTouchmove:J(d=>e.move(d,s.enumValue),["stop"]),onTouchend:d=>e.end(s.enumValue),onTouchcancel:d=>e.end(s.enumValue)},[Ne(e.$slots,"button",{currentValue:s.text},()=>[m("div",{class:i(e.n("thumb-block")),style:k({background:e.thumbColor})},null,6),m("div",{class:i(e.classes(e.n("thumb-ripple"),[e.thumbsProps[s.enumValue].active,e.n("thumb-ripple--active")])),style:k({background:e.thumbColor})},null,6),m("div",{class:i(e.classes(e.n("thumb-label"),[e.showLabel(s.enumValue),e.n("thumb-label--active")])),style:k({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2),width:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2)})},[m("span",null,Ce(s.text),1)],6)])],46,Pe))),128))],2),pe(T,{"error-message":e.errorMessage,class:i(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}const W=Ve(Fe,[["render",Le]]);W.install=function(e){e.component(W.name,W)};export{W as S};
