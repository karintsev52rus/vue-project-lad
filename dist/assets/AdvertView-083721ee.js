import{d as y,t as g,i,h as d,g as v,u as h,o as _,_ as V,m as N,a as b,c as D,w as x,e as B,n as I,r as u,k as A,b as t}from"./index-b6957c64.js";import{g as $}from"./advertController-63b3fe80.js";const w=r=>new Date(r).toLocaleDateString("ru"),C=r=>r.map(e=>e.label).toString(),S={class:"property_container d-flex"},L={class:"advert_property"},R={class:"advert_property_value"},T=y({__name:"AdvertInfoItem",props:{propertyName:{},propertyValue:{}},setup(r){const o=r,{propertyName:e,propertyValue:s}=g(o);return(l,p)=>(_(),i("div",S,[d("div",L,v(h(e))+": ",1),d("div",R,v(h(s)),1)]))}});const n=V(T,[["__scopeId","data-v-d759ed98"]]),z=y({__name:"BackButton",setup(r){const o=N(),e=()=>{o.go(-1)};return(s,l)=>{const p=b("v-btn");return _(),D(p,{class:"back_button",onClick:e},{default:x(()=>[B(" Назад ")]),_:1})}}});const E=V(z,[["__scopeId","data-v-37ef2cda"]]),M={key:0},j={class:"advert_properties py-5"},q={key:1},F={key:2},K=y({__name:"AdvertView",setup(r){const e=I().params.id,s=u(null),l=u(!1),p=u(""),m=u("");typeof e=="string"&&(s.value=e);const a=u(null);return A(()=>{s.value&&(l.value=!0,$(s.value).then(c=>{c&&(a.value=c,p.value=w(c.publishedDate),m.value=C(c.style))}).finally(()=>{l.value=!1}))}),(c,G)=>{var f;const k=b("v-progress-circular");return a.value?(_(),i("div",M,[t(E),d("h1",null,v((f=a.value)==null?void 0:f.advertType.label),1),d("div",j,[t(n,{propertyName:"Имя",propertyValue:a.value.authorName},null,8,["propertyValue"]),t(n,{propertyName:"Дата объявления",propertyValue:p.value},null,8,["propertyValue"]),t(n,{propertyName:"Описание",propertyValue:a.value.advertDescription},null,8,["propertyValue"]),t(n,{propertyName:"Город",propertyValue:a.value.city.label},null,8,["propertyValue"]),t(n,{propertyName:"Инструмент",propertyValue:a.value.instrument.label},null,8,["propertyValue"]),t(n,{propertyName:"Стиль",propertyValue:m.value},null,8,["propertyValue"])])])):l.value?(_(),i("div",q,[t(k,{size:"50",indeterminate:"",color:"primary"})])):(_(),i("div",F," Ошибка! "))}}});export{K as default};
