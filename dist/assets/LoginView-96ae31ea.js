import{d as c,m as w,r as u,p as V,a as s,o as m,c as b,w as _,b as t,f as y,P as g,_ as k,i as S,h as A,g as B}from"./index-b6957c64.js";const C=c({__name:"AuthForm",setup(i){const a=w(),o=u(""),n=u(""),{login:p}=V(),d=async()=>{await p({email:o.value,password:n.value})&&a.push({name:g.HOME})};return(v,e)=>{const r=s("v-text-field"),f=s("v-btn"),x=s("v-form"),h=s("v-sheet");return m(),b(h,{"max-width":"450",class:"mx-auto form_container"},{default:_(()=>[t(x,{onSubmit:e[2]||(e[2]=y(()=>{},["prevent"]))},{default:_(()=>[t(r,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l),label:"Email"},null,8,["modelValue"]),t(r,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),label:"Пароль",type:"password"},null,8,["modelValue"]),t(f,{onClick:d,type:"submit",block:"",color:"primary",class:"mt-2",text:"Вход"})]),_:1})]),_:1})}}});const E=k(C,[["__scopeId","data-v-53c342a0"]]),F={class:"text-center py-7"},L=c({__name:"LoginView",setup(i){return(a,o)=>(m(),S("div",null,[A("h1",F,B(a.$route.meta.title),1),t(E)]))}});export{L as default};