import{_ as t}from"./VideoList.b2c7996d.js";import{r as s,A as i,o as a}from"./ant-design-vue.3393b632.js";const e={components:{VideoList:t},data:()=>({refreshApi:"history",dataList:[]}),async created(){this.dataList=await this.$axios.get(this.refreshApi)}};e.render=function(t,e,o,r,d,n){const c=s("VideoList");return a(),i(c,{list:d.dataList},null,8,["list"])};export{e as default};
