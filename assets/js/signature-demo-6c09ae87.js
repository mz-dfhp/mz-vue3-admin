import{d as m,a as f,r as N,X as R,a9 as W,f as E,g as v,o as k,_ as D,c as T,h as x,aa as U,w,i as C}from"./index-324b04f7.js";/* empty css                  */const q=["height","width"],z=m({name:"signature"}),P=m({...z,props:{lineWidth:{type:Number,required:!1,default:2},strokeStyle:{type:String,required:!1,default:()=>document.getElementsByTagName("body")[0].className.indexOf("nut-theme-dark")==-1?"#000":"#fff"},unSupportTpl:{type:String,required:!1,default:""},type:{type:String,required:!1,default:"png"}},emits:["start","end","clear","signing","confirm"],setup(h,{expose:o,emit:s}){const r=h,n=f(null),l=f(null),e=N({canvasHeight:0,canvasWidth:0,ctx:null,isSupportTouch:"ontouchstart"in window,events:"ontouchstart"in window?["touchstart","touchmove","touchend","touchleave"]:["mousedown","mousemove","mouseup","mouseleave"]}),c=()=>{let t=document.createElement("canvas");return!!(t.getContext&&t.getContext("2d"))},p=()=>{n.value.addEventListener(e.events[0],i,!1)},i=t=>{t.preventDefault(),e.ctx.beginPath(),e.ctx.lineWidth=r.lineWidth,e.ctx.strokeStyle=r.strokeStyle,s("start"),n.value.addEventListener(e.events[1],_,!1),n.value.addEventListener(e.events[2],u,!1),n.value.addEventListener(e.events[3],S,!1)},_=t=>{t.preventDefault();let a=e.isSupportTouch?t.touches[0]:t;s("signing",a);let d=n.value.getBoundingClientRect(),g=a.clientX-d.left,H=a.clientY-d.top;e.ctx.lineTo(g,H),e.ctx.stroke()},u=t=>{t.preventDefault(),s("end"),n.value.removeEventListener(e.events[1],_,!1),n.value.removeEventListener(e.events[2],u,!1)},S=t=>{t.preventDefault(),n.value.removeEventListener(e.events[1],_,!1),n.value.removeEventListener(e.events[2],u,!1)},L=()=>{n.value.addEventListener(e.events[2],u,!1),e.ctx.clearRect(0,0,e.canvasWidth,e.canvasHeight),e.ctx.closePath(),s("clear")},b=()=>{B(n.value)},y=t=>{if(!t)return!0;var a=document.createElement("canvas");return a.width=t.width,a.height=t.height,(t==null?void 0:t.toDataURL())==a.toDataURL()},B=t=>{let a;switch(r.type){case"png":a=t.toDataURL("image/png");break;case"jpg":a=t.toDataURL("image/jpeg",.8);break}const d=y(t)?"\u8BF7\u7ED8\u5236\u7B7E\u540D":t,g=y(t)?"":a;s("confirm",d,g)};return R(()=>{c()&&(W(()=>{e.ctx=n.value.getContext("2d"),e.canvasWidth=l.value.offsetWidth,e.canvasHeight=l.value.offsetHeight}),p())}),o({clear:L,confirm:b}),(t,a)=>(k(),E("div",{ref_key:"wrap",ref:l},[v("canvas",{ref_key:"canvas",ref:n,height:e.canvasHeight,width:e.canvasWidth},null,8,q)],512))}}),V=D(P,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/components/Signature/index.vue"]]),X={"flex-center":"","flex-col":""},$={class:"w-100% h-50vh flex"},j={class:"flex-1 border m-l-20px flex-shrink-0"},F=["src"],Y={class:"m-t-20px"},A=m({name:"SignatureDemo"}),M=m({...A,setup(h){const o=f(),s=f(""),r=()=>{o.value.clear(),s.value=""},n=()=>{o.value.confirm()},l=(e,c)=>{if(c==="")return!1;s.value=c};return(e,c)=>{const p=V,i=T;return k(),E("div",X,[v("div",$,[x(p,{class:"border flex-1 flex-shrink-0",ref_key:"signatureRef",ref:o,onConfirm:l},null,512),v("div",j,[s.value?(k(),E("img",{key:0,src:s.value},null,8,F)):U("v-if",!0)])]),v("div",Y,[x(i,{type:"primary",onClick:r},{default:w(()=>[C("\u91CD\u7F6E")]),_:1}),x(i,{type:"primary",onClick:n},{default:w(()=>[C("\u786E\u8BA4")]),_:1})])])}}}),I=D(M,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/views/component/signature-demo.vue"]]);export{I as default};
