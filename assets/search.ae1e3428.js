import{_ as a}from"./VideoList.e55d6d12.js";import{p as s,a as e,r as t,c as l,b as o,L as r,N as i,t as d,I as n,F as c,f as h,o as p}from"./ant-design-vue.50c9b8f3.js";import{_ as u}from"./search.258d3f3b.js";const f={components:{VideoList:a},data:()=>({refreshApi:"av/video_search",refreshPayload:{keyword:""},navActive:0,navList:[{label:"最新"},{label:"点赞"},{label:"人气"},{label:"评分"}],hotList:[],onSearch:!1}),methods:{async search(){this.refreshList(),this.onSearch=!this.onSearch}}};s("data-v-34d8eca2");const v={class:"search"},m={class:"input"},y=o("img",{alt:"",src:u},null,-1),b={key:1,class:"hot"};e(),f.render=function(a,s,e,u,f,L){const k=t("VideoList");return p(),l(c,null,[o("div",v,[o("div",m,[y,r(o("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>f.refreshPayload.keyword=a),placeholder:"永久网址 baidu.com",type:"text"},null,512),[[i,f.refreshPayload.keyword]])]),o("span",{onClick:s[1]||(s[1]=a=>L.search())},d(f.onSearch?"取消":"搜索"),1)]),f.onSearch?(p(),n(k,{key:0,list:a.dataList},null,8,["list"])):(p(),l("div",b,[(p(!0),l(c,null,h(f.hotList,((a,s)=>(p(),l("div",{key:s},[o("span",null,d(s+1),1),o("p",null,d(a.label),1)])))),128))]))],64)},f.__scopeId="data-v-34d8eca2";export{f as default};
