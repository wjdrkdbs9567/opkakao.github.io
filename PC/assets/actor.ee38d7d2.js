import{p as a,a as s,g as t,h as i,i as d,o as e,e as r,t as c}from"./ant-design-vue.07cd0944.js";const n={data:()=>({dataList:[]}),async created(){this.dataList=await this.$axios.get("actress_list")}};a("data-v-a1096dc2");const o={class:"group"},l=["onClick"],u=["src"];s(),n.render=function(a,s,n,p,g,v){return e(),t("div",o,[(e(!0),t(i,null,d(g.dataList,((s,i)=>(e(),t("div",{key:i,onClick:t=>a.$router.push("/?actress_id="+s.id)},[r("img",{src:s.portrait,alt:""},null,8,u),r("span",null,c(s.name),1)],8,l)))),128))])},n.__scopeId="data-v-a1096dc2";export{n as default};
