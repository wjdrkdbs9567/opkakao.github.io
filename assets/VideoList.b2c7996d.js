import{p as A,a as s,c as a,F as t,f as e,o as i,b as d,t as g,d as l}from"./ant-design-vue.3393b632.js";const r={props:{list:{type:Array,default:()=>[]}},data:()=>({}),methods:{toDetail(A){2===A.data_type?window.location.href=A.link:this.$router.push("/video/index?id="+A.id)}}};A("data-v-647ddc8d");const n={class:"video-group"},p=["onClick"],E=["src"],o={class:"ellipsis-more"},Q={key:0},c={class:"primary"},y=d("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEQAAAAAJNVhCAAAA+klEQVQ4EWNgGPKAEeSDH76pnv/+Mcz6z/BfhhgfMTIwPmFiYkjj2Dx7OwtIA0gzEyNTOseWmduIMeCHX5r3v7//ZwHVyoLVf/VO+Y+s8X9sCfd/3zQuZDF0NkwPE7oEiP/tw6eqb///P/zmnVoOMgybGpgYVgMY//1nY/j/XwQYJh3f3n98gM8grAbATAfTcIM+rEIRh3IIG8DA+J6JgamOi58zEpsB4FjAkGD8/4fhP0gjYz+HAPtExqWTP2GogQpgNYCTSagNKN/GuKnrMy6NKOLAQHoMilsUQTwckFqQHpASsAtAqQqUMIBxS1RKBKoFp0Q8dgwlKQAODV7QgsOlNAAAAABJRU5ErkJggg=="},null,-1),w={class:"warn"},Y=d("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEQAAAAAJNVhCAAABr0lEQVQ4EcVTOUsDURCet0c2sfPAdJZqqZ3kIrWFaYTsH1ECChIwGGzETrALFhuxsYmFRSQXaYJWgv4DRSzNsUnG923ylg2ksfIVb97M983sXEv030fMS2DQutsejYaHJDglSKww8RexqOm6cR6K7T8HfbSgwtWq0W+WT0YjtyIjt3XW96xFbRkSOuzAmW915WeoB+Qg9HnEzOmwubAldjIfAawj3x1u3zv9YdcZtDwkj9svYZK2W5nj7LHVJYNEe+7Pi66buyjHLwE1y3qL6svdhnPTrTslOPabjt2rO69us5wCDp7XI4n5AdAwjbSG+pJO4pGI16RzRpZVYk1cmPFsDbjHk/zJe+qBbptL9DZVJ0LQJo+pLCdwEIlnrxVmCusdfOh+BhiV+00biuRJpqgQIh9O2pdBu8v9dW+0wQCY85jGiSBR9rhgJbJnszYijyf5sPsZYElk1By6DMAU5kMkaR/jHTzAwQMfdn+MUCZLwmnLiNhqGrCrA2fsgSzryYpnvT2YWaTQYLUgl4kwZzm2IrqNxqI3SFvac5qmXYVi4lQFnclAGf/yLyif/5O//M3OLGkTysEAAAAASUVORK5CYII="},null,-1),m={key:0},B={key:1},k={key:2};s(),r.render=function(A,s,r,u,I,f){return i(),a("div",n,[(i(!0),a(t,null,e(r.list,((A,s)=>(i(),a("div",{key:s,onClick:s=>f.toDetail(A)},[d("img",{src:A.video_cover||A.image,alt:""},null,8,E),d("p",o,g(A.title),1),A.data_type&&1===A.data_type?(i(),a("div",Q,[d("div",c,[y,d("span",null,g(A.watch_times||0),1)]),d("div",w,[Y,1===A.type?(i(),a("span",m,"免费")):2===A.type?(i(),a("span",B,"VIP")):3===A.type?(i(),a("span",k,"收费")):l("",!0)])])):l("",!0)],8,p)))),128))])},r.__scopeId="data-v-647ddc8d";export{r as _};
