import{_ as s,a}from"./LogoHead.b557d3af.js";import{_ as i}from"./VideoList.1035b791.js";import{_ as t}from"./SpecialList.81f31d7c.js";import{p as l,a as e,r as o,c as r,e as n,b as c,t as d,F as A,f as u,o as p,d as g,L as m,M as f}from"./ant-design-vue.50c9b8f3.js";import{_ as v}from"./free.ced158fc.js";import"./search.258d3f3b.js";const h={components:{VideoList:i,LogoHead:s,Search:a,SpecialList:t},data:()=>({categoryList:[],dataList:[]}),async created(){this.categoryList=await this.$axios.get("get_topic"),this.dataList=await this.$axios.get("actress_list")}};l("data-v-0734cdb1");const L={class:"global-title"},b=c("img",{alt:"",src:v},null,-1),Q={class:"global-title"},S=c("img",{alt:"",src:v},null,-1),B={class:"user-list"},w=["onClick"],k=["src"],E={class:"ellipsis-single"},R={class:"info"},U=["src"],C=["onClick"];e(),h.render=function(s,a,i,t,l,e){const v=o("LogoHead"),h=o("Search"),I=o("SpecialList"),Y=o("VideoList");return p(),r(A,null,[n(v),n(h),c("div",L,[b,c("p",null,d(s.$t("精选专题")),1),c("span",{onClick:a[0]||(a[0]=a=>s.$router.push("/special/index"))},d(s.$t("查看更多")),1)]),n(I,{dataList:l.categoryList},null,8,["dataList"]),c("div",Q,[S,c("p",null,d(s.$t("知名演员")),1),c("span",{onClick:a[1]||(a[1]=a=>s.$router.push("/user/list"))},d(s.$t("查看更多")),1)]),c("div",B,[(p(!0),r(A,null,u(l.dataList,((a,i)=>(p(),r(A,{key:i},[i<5?(p(),r("div",{key:0,onClick:i=>s.$router.push("/video/user?id="+a.id+"&title="+a.name)},[c("img",{src:a.portrait,alt:""},null,8,k),c("span",E,d(a.name),1)],8,w)):g("",!0)],64)))),128))]),(p(!0),r(A,null,u(l.dataList,((a,i)=>m((p(),r("div",{key:i,class:"user-block"},[c("div",R,[c("img",{src:a.portrait,alt:""},null,8,U),c("div",null,[c("span",null,d(a.name),1),c("p",null,d(s.$t("收录视频"))+" "+d(a.video_list.length)+" "+d(s.$t("部")),1)]),c("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbRJREFUaEPtlrFKw1AUhv+TvoFvoPgI6qyLq/SWCpq0TRycHNwc225uujiIQqJNUShpH8BBV0EfQHTwBcQXUI4oLVi9poGDbQMnYzj/uff/v5N7Q8j5QznfP9TApAkqASUgTEBHSBigWK4ExBEKGygBYYBiuRIQRyhsoASEAYrlSkAcobCBlUDY7paJsQdgDmAG6MkBelXP7GdZz6Zn8EXglQ4z6c8Tnxza+Vqf+Q2gB3ZwFLjm8qf+l4GwlTSIqG5diHDlu2Y1bRNn7V6dmRu2GiJq1NxiM00fxd0ugKKthpmbQaU01HvIQBgnuwQ6SE3JwZa/aUJbTRY9E9YD13Ss+rTw+gKnUFisbqzdDfRDBqK4ewtgaQTme98zC7aa8egp8r1i8IeB5AWgmREGXn3PWGuieCz6Z98zs3YDreQRRPN5NnAMou3cjlDY6iwTFa6n+SNmfl8JKuUb6wh9vkw7BpHhGE07hv/9GB24Cr9fJJO+yPrrE/NJrVI6HXmRZbkpp6lGf+YmTUMJKAFhAjpCwgDFciUgjlDYQAkIAxTLlYA4QmEDJSAMUCxXAuIIhQ1yT+AD4e/EMS22BxQAAAAASUVORK5CYII=",onClick:i=>s.$router.push("/video/user?id="+a.id+"&title="+a.name)},null,8,C)]),n(Y,{list:a.video_list},null,8,["list"])],512)),[[f,a.video_list&&a.video_list.length]]))),128))],64)},h.__scopeId="data-v-0734cdb1";export{h as default};
