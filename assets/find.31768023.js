import{_ as a}from"./Banner.0ae02dde.js";import{_ as s}from"./NavBar.a2cbd060.js";import{_ as t}from"./VideoList.b2c7996d.js";import{_ as e,a as r}from"./LogoHead.2d6dbd08.js";import{r as i,c as o,e as d,F as n,o as c}from"./ant-design-vue.3393b632.js";import"./search.258d3f3b.js";const m={components:{LogoHead:e,Search:r,VideoList:t,NavBar:s,Banner:a},data:()=>({refreshApi:"find_list",dataList:[]}),async created(){this.dataList=await this.$axios.get(this.refreshApi)}};m.render=function(a,s,t,e,r,m){const f=i("LogoHead"),p=i("Search"),L=i("VideoList");return c(),o(n,null,[d(f),d(p),d(L,{list:r.dataList},null,8,["list"])],64)};export{m as default};
