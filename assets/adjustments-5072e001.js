import{_ as d,o as c,c as l,a as e,y as r,l as g,x as h,i as m,t as u,d as p,p as v,k as f}from"./index-5d175349.js";import{_ as b}from"./search-0186349c.js";import{_ as P}from"./Layout-feaff5d7.js";const $={},x={class:"table-content"},S={class:"table-header display-flex-wrap"},y={class:"main-table"};function V(t,s,a,_,i,n){return c(),l("div",x,[e("div",S,[r(t.$slots,"table-header",{},void 0,!0)]),e("div",y,[r(t.$slots,"main-table",{},void 0,!0)]),e("div",null,[r(t.$slots,"table-footer",{},void 0,!0)])])}const L=d($,[["render",V],["__scopeId","data-v-4a21d99d"]]),w={props:{placeholder:String,value:String},data(){return{inputValue:this.value||""}},watch:{value(t){this.inputValue=t}},methods:{clearInput(){this.$emit("clear_search"),this.inputValue=""}}},I={class:"search-wrraper w-100"},k=e("button",{class:"icon"},[e("img",{src:b,class:"img-not-selected"})],-1),C=["placeholder"],N=e("img",{src:P,class:"img-not-selected"},null,-1),B=[N];function D(t,s,a,_,i,n){return c(),l("div",I,[k,g(e("input",{type:"text",class:"w-100",placeholder:a.placeholder,"onUpdate:modelValue":s[0]||(s[0]=o=>i.inputValue=o)},null,8,C),[[h,i.inputValue]]),i.inputValue?(c(),l("button",{key:0,class:"icon val_clear",style:{cursor:"pointer"},onClick:s[1]||(s[1]=(...o)=>n.clearInput&&n.clearInput(...o))},B)):m("",!0)])}const O=d(w,[["render",D]]);const T={props:{currentPage:Number,totalPages:Number},methods:{prevPage(){this.$emit("update-page",this.currentPage-1)},nextPage(){this.$emit("update-page",this.currentPage+1)}}},j=t=>(v("data-v-598ee02f"),t=t(),f(),t),E={class:"table-footer"},M=j(()=>e("div",{class:"table-resuits-count custom-dropdown"},null,-1)),U={class:"table-pagination"},q={class:"total-pages-count"},z={class:"pagination-btn-group"},A=["disabled"],F=["disabled"];function G(t,s,a,_,i,n){return c(),l("div",E,[M,e("div",U,[e("p",q,[e("span",null,u(a.currentPage),1),p(" of "),e("span",null,u(a.totalPages),1),p(" pages ")]),e("div",z,[e("button",{onClick:s[0]||(s[0]=(...o)=>n.prevPage&&n.prevPage(...o)),disabled:a.currentPage===1,class:"pagination-btn"},"Prev",8,A),e("button",{onClick:s[1]||(s[1]=(...o)=>n.nextPage&&n.nextPage(...o)),disabled:a.currentPage===a.totalPages,class:"pagination-btn"},"Next",8,F)])])])}const Q=d(T,[["render",G],["__scopeId","data-v-598ee02f"]]),R="/assets/adjustments-11427cae.svg";export{L as C,Q as P,O as S,R as _};