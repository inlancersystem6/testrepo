import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{o as l,d as r,a as e,y as c,k as g,x as m,f as h,t as u,b as p,p as v,g as b}from"./index-38024ad5.js";import{_ as f}from"./search-0186349c.js";import{_ as P}from"./Layout-200f36b8.js";const $={},x={class:"table-content"},S={class:"table-header display-flex-wrap"},V={class:"main-table"};function w(t,s,a,_,i,o){return l(),r("div",x,[e("div",S,[c(t.$slots,"table-header")]),e("div",V,[c(t.$slots,"main-table")]),e("div",null,[c(t.$slots,"table-footer")])])}const O=d($,[["render",w]]),y={props:{placeholder:String,value:String},data(){return{inputValue:this.value||""}},watch:{value(t){this.inputValue=t}},methods:{clearInput(){this.inputValue=""}}},k={class:"search-wrraper w-100"},I=e("button",{class:"icon"},[e("img",{src:f,class:"img-not-selected"})],-1),C=["placeholder"],N=e("img",{src:P,class:"img-not-selected"},null,-1),B=[N];function D(t,s,a,_,i,o){return l(),r("div",k,[I,g(e("input",{type:"text",class:"w-100",placeholder:a.placeholder,"onUpdate:modelValue":s[0]||(s[0]=n=>i.inputValue=n)},null,8,C),[[m,i.inputValue]]),i.inputValue?(l(),r("button",{key:0,class:"icon val_clear",style:{cursor:"pointer"},onClick:s[1]||(s[1]=(...n)=>o.clearInput&&o.clearInput(...n))},B)):h("",!0)])}const Q=d(y,[["render",D]]);const T={props:{currentPage:Number,totalPages:Number},methods:{prevPage(){this.$emit("update-page",this.currentPage-1)},nextPage(){this.$emit("update-page",this.currentPage+1)}}},j=t=>(v("data-v-598ee02f"),t=t(),b(),t),E={class:"table-footer"},M=j(()=>e("div",{class:"table-resuits-count custom-dropdown"},null,-1)),U={class:"table-pagination"},q={class:"total-pages-count"},z={class:"pagination-btn-group"},A=["disabled"],F=["disabled"];function G(t,s,a,_,i,o){return l(),r("div",E,[M,e("div",U,[e("p",q,[e("span",null,u(a.currentPage),1),p(" of "),e("span",null,u(a.totalPages),1),p(" pages ")]),e("div",z,[e("button",{onClick:s[0]||(s[0]=(...n)=>o.prevPage&&o.prevPage(...n)),disabled:a.currentPage===1,class:"pagination-btn"},"Prev",8,A),e("button",{onClick:s[1]||(s[1]=(...n)=>o.nextPage&&o.nextPage(...n)),disabled:a.currentPage===a.totalPages,class:"pagination-btn"},"Next",8,F)])])])}const R=d(T,[["render",G],["__scopeId","data-v-598ee02f"]]),W="/assets/adjustments-11427cae.svg";export{O as C,R as P,Q as S,W as _};
