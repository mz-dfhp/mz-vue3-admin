import{d as f,u as V,x as U,y as te,z as oe,o as r,f as x,A as T,F as A,B as I,w as t,g as s,C as $,D as F,j as e,_ as E,i as a,G as ae,H as q,s as R,a as H,I as L,J as X,K as j,L as se,p as G,q as W,M as le,N as re,k as K,O,P as ue,n as ce,Q as J,R as Q,S as Y,T as ie,U as Z,V as de,W as _e,X as pe,Y as me,Z as fe,$ as ve,a0 as he,a1 as be,a2 as xe,a3 as ge,a4 as we,a5 as ke,a6 as ye,E as Ee,e as Ae,a7 as Ie,a8 as $e,a9 as Ce,aa as ze}from"./index-f7f704af.js";/* empty css               *//* empty css                  */import{P as S}from"./page-adc8f87f.js";/* empty css                     *//* empty css                 */const De=f({name:"AppMenuItem"}),Te=f({...De,props:{menuList:{type:Array,required:!0,default:()=>[]}},setup(d){const u=d,h=V(),m=n=>{h.push({name:n.index})};return(n,_)=>{const p=U("AppMenuItem"),i=te,b=oe;return r(!0),x(A,null,T(u.menuList,v=>(r(),x(A,null,[v.children?(r(),I(i,{index:v.name,key:v.name},{title:t(()=>[s("div",{class:$([v.icon?"i-bi:grid":"","p-x-5px"])},null,2),s("span",null,F(v.title),1)]),default:t(()=>[e(p,{menuList:v.children},null,8,["menuList"])]),_:2},1032,["index"])):(r(),I(b,{index:v.name,key:v.name,onClick:m},{default:t(()=>[s("div",{class:$(["p-x-5px",v.icon?"i-bi:grid":""])},null,2),s("span",null,F(v.title),1)]),_:2},1032,["index"]))],64))),256)}}}),Me=E(Te,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppMenuItem/index.vue"]]),Se="/mz-vue3-admin/assets/svg/vue-5532db34.svg",Be={class:"h60px flex items-center justify-center"},Fe=["src"],Le=f({name:"AppLogo"}),Ve=f({...Le,setup(d){return(u,h)=>(r(),x("div",Be,[s("img",{width:"36",height:"36",class:"animate-bounce cursor-pointer",src:a(Se)},null,8,Fe)]))}}),Re=E(Ve,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppLogo/index.vue"]]),ee=d=>(G("data-v-cf1fbeaa"),d=d(),W(),d),Oe={class:"flex h-100% overflow-hidden"},Pe={class:"w-70px flex flex-col h-100% bg-[var(--el-color-primary-light-3)]"},Ne=["onClick"],qe=ee(()=>s("div",{class:"i-bi:grid text-16px bg-white"},null,-1)),He={text:"center white 15px","m-t-5px":"","break-all":""},Ue={"p-x-10px":""},Xe=ee(()=>s("div",{class:"h-60px flex-center"},[s("div",{class:"flex-shrink-0"},"Vue3-admin")],-1)),je=f({name:"AppMenu"}),Ge=f({...je,props:{expansion:{type:Boolean,required:!0,default:!0}},setup(d){const u=d,h=ae(),{getMenus:m}=q(h),n=R(),_=V();let p=H(""),i=L(()=>n.meta.breadcrumb&&n.meta.breadcrumb[0].name);const b=L(()=>{const l=m.value.find(k=>k.name===i.value);return l==null?void 0:l.children});p.value=n.meta.activeMenu||n.name;const v=l=>{_.push({name:l.children?l.children[0].name:l.name})};return X(()=>n.name,()=>{p.value=n.meta.activeMenu||n.name}),(l,k)=>{const y=j,C=se;return r(),x("div",Oe,[s("div",Pe,[e(Re,{expansion:d.expansion},null,8,["expansion"]),e(y,{class:"flex-1 p-10px"},{default:t(()=>[(r(!0),x(A,null,T(a(m),(g,M)=>(r(),x("div",{class:$(["flex-center flex-col p-y-10px cursor-pointer rounded-4px hover-bg-[var(--el-color-primary-light-5)] p-2px",{"bg-main hover-bg-main!":a(i)===g.name,"m-t-5px":M!==0}]),key:M,onClick:c=>v(g)},[qe,s("div",He,F(g.title),1)],10,Ne))),128))]),_:1})]),e(y,null,{default:t(()=>[s("div",{class:$(["overflow-x-hidden w-200px transition-all",u.expansion?"w-0!":""])},[s("div",Ue,[Xe,e(C,{class:"common-menu","default-active":a(p),collapse:!1,"unique-opened":""},{default:t(()=>[e(Me,{menuList:a(b)},null,8,["menuList"])]),_:1},8,["default-active"])])],2)]),_:1})])}}});const We=E(Ge,[["__scopeId","data-v-cf1fbeaa"],["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppMenu/index.vue"]]);const Ke=f({name:"Bread-box"}),Je=f({...Ke,setup(d){const u=R();return(h,m)=>{const n=le,_=re;return r(),I(_,{separator:"/",class:"breadcrumb-box"},{default:t(()=>[(r(!0),x(A,null,T(a(u).meta.breadcrumb,p=>(r(),I(n,{key:p.name},{default:t(()=>[K(F(p.title),1)]),_:2},1024))),128))]),_:1})}}});const Qe=E(Je,[["__scopeId","data-v-2a119388"],["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppHeader/components/bread-box.vue"]]);function ne(){const d=V(),u=R();return{refresh:()=>{d.push({path:S.ROOT_Redirect+u.fullPath,query:u.query,params:u.params})}}}const Ye={class:"mla flex justify-around items-center"},Ze={class:"p-x-30px flex justify-around items-center mini-operation"},en=["src"],nn=f({name:"RightPanel"}),tn=f({...nn,setup(d){const{refresh:u}=ne(),{isDark:h,toggleDark:m}=O(),{isFullscreen:n,toggle:_}=ue(),p=ce().getUserInfo,i=v=>{v==="login-out"&&(window.localStorage.clear(),window.location.reload())},b=()=>{window.open("https://github.com/mz-dfhp/mz-vue3-admin")};return(v,l)=>{const k=J,y=Q,C=Y;return r(),x("div",Ye,[s("div",Ze,[s("div",{"cursor-pointer":"","m-l-15px":"","hover-scale-120":"","transition-all":"",class:"i-bi-github",onClick:b}),s("div",{"m-l-20px":"","cursor-pointer":"","hover-scale-120":"","transition-all":"",class:$(a(n)?"i-bi:fullscreen-exit":"i-bi:arrows-angle-expand"),onClick:l[0]||(l[0]=(...g)=>a(_)&&a(_)(...g))},null,2),s("div",{"cursor-pointer":"","m-l-20px":"","hover-scale-120":"","transition-all":"",class:$(a(h)?"i-bi:moon":"i-bi:sun"),onClick:l[1]||(l[1]=(...g)=>a(m)&&a(m)(...g))},null,2),s("div",{"cursor-pointer":"","m-l-20px":"","hover-scale-120":"","transition-all":"",class:"i-bi-arrow-repeat",onClick:l[2]||(l[2]=(...g)=>a(u)&&a(u)(...g))})]),e(C,{onCommand:i},{dropdown:t(()=>[e(y,null,{default:t(()=>[e(k,{command:"login-out"},{default:t(()=>[K("\u9000\u51FA\u767B\u5F55")]),_:1})]),_:1})]),default:t(()=>[s("img",{width:"36",height:"36",class:"rounded-full cursor-pointer",src:a(p).avatar},null,8,en)]),_:1})])}}});const on=E(tn,[["__scopeId","data-v-bf2473bf"],["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppHeader/components/right-panel.vue"]]),an={class:"h100% flex items-center"},sn=f({name:"AppHeader"}),ln=f({...sn,setup(d){const{expansion:u,setExpansion:h}=O();return(m,n)=>(r(),x("div",an,[s("div",{onClick:n[0]||(n[0]=_=>a(h)(!a(u))),class:"mr20px"},[s("div",{"cursor-pointer":"",class:$(a(u)?"i-bi:text-indent-left":"i-bi:text-indent-right")},null,2)]),e(Qe),e(on)]))}}),rn=E(ln,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppHeader/index.vue"]]),un=f({name:"AppMain"}),cn=f({...un,setup(d){const{keepList:u}=q(ie()),{getTransitionName:h}=q(Z());return(m,n)=>{const _=U("router-view");return r(),I(_,null,{default:t(({Component:p,route:i})=>[e(pe,{mode:"out-in",appear:"",name:a(h)},{default:t(()=>[(r(),I(de,{include:a(u)},[(r(),I(_e(p),{key:i.fullPath}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})}}}),dn=E(cn,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppMain/index.vue"]]);const _n=d=>(G("data-v-0941ddc0"),d=d(),W(),d),pn={class:"flex-between z-1 relative",style:{"box-shadow":"0 6px 12px 0 rgb(49 108 251 / 5%)"}},mn={class:"flex-1 overflow-hidden"},fn=_n(()=>s("div",{class:"w-50px i-bi:grid-fill text-16px cursor-pointer flex-shrink-0"},null,-1)),vn={class:"flex-between"},hn={class:"ml-5px"},bn=f({name:"AppTabs"}),xn=f({...bn,setup(d){const{refresh:u}=ne(),{tabName:h}=O(),m=V(),n=R(),_=me(),p=H(n.name),i=L(()=>_.getTabList),b=c=>c!==S.ROOT_INDEX;fe(()=>{const c=m.getRoutes().find(o=>o.path===S.ROOT_INDEX);c&&k({...c,matched:[],fullPath:"",query:{},hash:"",redirectedFrom:void 0,params:{}}),k(n)}),X(()=>n.name,c=>{p.value=c,k(n)});const v=c=>{const{name:o}=c.props,z=i.value.find(D=>D.name===o);m.push({...z})},l=c=>{let o=i.value.findIndex(B=>B.name===c);_.closeCurrentTabs(c);let D=i.value.length===o?o-1:o;c===p.value&&m.replace({name:i.value[D].name})},k=c=>{_.addTabs(y(c))},y=c=>{const{fullPath:o,hash:z,meta:D,name:B,params:P,path:N,query:w}=c;return{fullPath:o,hash:z,meta:D,name:B,params:P,path:N,query:w}},C=[{id:1,title:"\u5237\u65B0\u5F53\u524D",icon:"i-bi-arrow-repeat"},{id:2,title:"\u5173\u95ED\u5F53\u524D",icon:"i-bi:x-lg"},{id:3,title:"\u5173\u95ED\u5176\u4ED6",icon:"i-bi:x-lg"},{id:4,title:"\u5173\u95ED\u5DE6\u4FA7",icon:"i-bi:arrow-left-circle"},{id:5,title:"\u5173\u95ED\u53F3\u4FA7",icon:"i-bi:arrow-right-circle"},{id:6,title:"\u5173\u95ED\u5168\u90E8",icon:"i-bi:x-lg"}],g=c=>{let o=i.value.findIndex(z=>z.name===n.name);switch(c){case 1:return!1;case 2:return S.ROOT_INDEX===n.fullPath;case 3:return i.value.length===2||i.value.length===1;case 4:return!(o>1);case 5:return!(i.value.length>o+1);case 6:return i.value.length<=1;default:return!1}},M=c=>{switch(c){case 1:u();break;case 2:l(n.name);break;case 3:_.closeOtherTabs(n.name);break;case 4:_.closeLeftTabs(n.name);break;case 5:_.closeRightTabs(n.name);break;case 6:S.ROOT_INDEX!==n.fullPath&&m.push({path:S.ROOT_INDEX}),_.closeAllTabs();break}};return(c,o)=>{const z=ve,D=he,B=J,P=Q,N=Y;return r(),x("div",pn,[s("div",mn,[e(D,{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=w=>p.value=w),type:"card",class:$(a(h)),onTabRemove:l,onTabClick:v},{default:t(()=>[(r(!0),x(A,null,T(a(i),w=>(r(),I(z,{closable:b(w.path),key:w.name,label:w.meta.title,name:w.name},null,8,["closable","label","name"]))),128))]),_:1},8,["modelValue","class"])]),e(N,{onCommand:M},{dropdown:t(()=>[e(P,null,{default:t(()=>[(r(),x(A,null,T(C,w=>e(B,{command:w.id,key:w.id,disabled:g(w.id)},{default:t(()=>[s("div",vn,[s("div",{class:$(w.icon)},null,2),s("div",hn,F(w.title),1)])]),_:2},1032,["command","disabled"])),64))]),_:1})]),default:t(()=>[fn]),_:1})])}}});const gn=E(xn,[["__scopeId","data-v-0941ddc0"],["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppTabs/index.vue"]]);const wn=f({name:"AppSetting"}),kn=f({...wn,setup(d){const{width:u}=be(),h=L(()=>u.value<600?"80%":"400px"),m=H(!1),n=()=>{m.value=!0},_=["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","#0e0c95"],p=[{name:"fade",title:"\u6DE1\u51FA"},{name:"slide-fade",title:"\u5E7B\u706F\u7247"},{name:"fade-transform",title:"\u6ED1\u52A8"},{name:"zoom",title:"\u7F29\u653E"}],i=[{name:"card",title:"\u5361\u7247"},{name:"etherealize",title:"\u7075\u52A8"}],b=L(()=>Z().settingState);return(v,l)=>{const k=xe,y=Ee,C=ge,g=we,M=Ae,c=ke;return r(),x(A,null,[(r(),I(ye,{to:"body"},[s("div",{position:"fixed",class:"right-0 top-50% translate-y--50% p10px bg-[var(--el-color-primary-light-3)] rounded-l-xl"},[s("div",{onClick:n,class:"hover-animate-spin i-bi:gear-fill h-25px w-25px cursor-pointer bg-white"})])])),e(c,{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=o=>m.value=o),"destroy-on-close":"",size:a(h),title:"\u9879\u76EE\u914D\u7F6E"},{default:t(()=>[e(M,{"label-position":"top"},{default:t(()=>[e(y,{label:"\u4E3B\u9898\u8272"},{default:t(()=>[e(k,{"color-format":"rgb",modelValue:a(b).themeColor,"onUpdate:modelValue":l[0]||(l[0]=o=>a(b).themeColor=o),predefine:_},null,8,["modelValue"])]),_:1}),e(y,{label:"\u5207\u6362\u52A8\u753B"},{default:t(()=>[e(g,{modelValue:a(b).transitionName,"onUpdate:modelValue":l[1]||(l[1]=o=>a(b).transitionName=o),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(r(),x(A,null,T(p,o=>e(C,{key:o.name,label:o.title,value:o.name},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(y,{label:"\u6807\u7B7E\u98CE\u683C"},{default:t(()=>[e(g,{modelValue:a(b).tabName,"onUpdate:modelValue":l[2]||(l[2]=o=>a(b).tabName=o),placeholder:"\u8BF7\u9009\u62E9"},{default:t(()=>[(r(),x(A,null,T(i,o=>e(C,{key:o.name,label:o.title,value:o.name},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","size"])],64)}}}),yn=E(kn,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/AppSetting/index.vue"]]),En={class:"h-100% w-100% overflow-hidden"},An={class:"min-h-100% w-100% overflow-x-hidden p-y-[var(--el-main-padding)]"},In=f({name:"AppLayout"}),$n=f({...In,setup(d){const{expansion:u}=O();return(h,m)=>{const n=Ie,_=$e,p=j,i=Ce,b=ze;return r(),x("div",En,[e(b,{class:"h-100%!"},{default:t(()=>[e(n,{width:"auto",class:"overflow-hidden! h-100%!"},{default:t(()=>[e(We,{expansion:a(u)},null,8,["expansion"])]),_:1}),e(b,null,{default:t(()=>[e(_,null,{default:t(()=>[e(rn)]),_:1}),e(gn),e(i,{class:"bg-[var(--bgc)] p-0!"},{default:t(()=>[e(p,{class:"p-x-[var(--el-main-padding)] box-border"},{default:t(()=>[s("div",An,[e(dn)]),e(yn)]),_:1})]),_:1})]),_:1})]),_:1})])}}}),Bn=E($n,[["__file","/home/runner/work/mz-vue3-admin/mz-vue3-admin/src/layout/index.vue"]]);export{Bn as default};