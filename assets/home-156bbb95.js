import{d as u,u as g,c as y,o as k,r as h,a as s,b as n,e as x,F as b,n as C,t as i,f as c,g as E,_ as p,h as r,i as M,j as V,k as N}from"./index-ba923e79.js";const $={key:0,class:"tap"},A=["onClick"],B={key:2,class:"child hide"},R=u({__name:"Menu",props:{data:Array},setup(l){const d=l,_=g(),o=y(()=>{const{data:t}=d;return t});function m(t){_.push({name:t.name})}k(()=>{const t=document.getElementsByClassName("tap");for(let a=0;a<t.length;a++)t[a].addEventListener("click",f,!1)});function f(){this.nextElementSibling.getAttribute("class")=="child hide"?this.nextElementSibling.setAttribute("class","child"):this.nextElementSibling.setAttribute("class","child hide")}return(t,a)=>{const v=h("Menu",!0);return s(!0),n(b,null,x(o.value,e=>(s(),n("div",{key:e.path,class:C(e.children?"items":"item")},[e.children?(s(),n("div",$,i(e.name),1)):(s(),n("span",{key:1,onClick:j=>m(e)},i(e.name),9,A)),e.children?(s(),n("div",B,[c(v,{data:e.children},null,8,["data"])])):E("",!0)],2))),128)}}});const S=p(R,[["__scopeId","data-v-f96ca00f"]]),I={class:"layout"},w={class:"left"},F={class:"right"},L=u({__name:"home",setup(l){return(d,_)=>{const o=h("RouterView");return s(),n("div",I,[r("div",w,[M(" 我是列表 "),c(S,{ref:"editInfo",data:V(N)},null,8,["data"])]),r("div",F,[c(o)])])}}});const D=p(L,[["__scopeId","data-v-e6fb21d8"]]);export{D as default};
