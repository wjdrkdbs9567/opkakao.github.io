import{_ as t}from"./SpecialList.81f31d7c.js";import{r as a,I as s,o as i}from"./ant-design-vue.50c9b8f3.js";const e={components:{SpecialList:t},data:()=>({dataList:[]}),async created(){this.dataList=await this.$axios.get("get_topic")}};e.render=function(t,e,o,c,n,d){const r=a("SpecialList");return i(),s(r,{dataList:n.dataList},null,8,["dataList"])};export{e as default};
