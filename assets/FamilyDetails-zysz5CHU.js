import{u as g,k as m,l as b,d as y,i as a,r as c,o as s,a as t,c as o,e as i,t as n,h as _}from"./index-rUHQi0PA.js";import{L as v}from"./Layout-KiF4WUBz.js";import{C as x,S as P,P as S,_ as w}from"./no-data-YHnAfvb-.js";import{_ as k,a as I}from"./male-avatar-Lwf5tq-b.js";import{_ as G}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./OverLaye-Atv8c0rd.js";const L="http://64.227.168.246:5000/admin",F={components:{Layout:v,ContentSection:x,SearchBox:P,Pagination:S},data(){return{authStore:"",alertStore:"",itemId:"",itemdetails:"",list:[],currentPage:1,totalPages:1,searchText:"",breadcrumbList:[{name:"Dashboard",link:"/"},{name:"Families",link:"/family-list"},{name:""}]}},created(){this.authStore=g(),this.alertStore=m(),this.authStore.chnageTitle("Families details | Night warrior","this is description for Families details"),this.itemId=this.$route.params.id,this.fatchFamilyList()},methods:{async fatchFamilyList(){var r=new FormData;r.append("user_id",this.itemId);try{const l=await b.post(`${L}/user-details`,r);this.itemdetails=l.data,this.breadcrumbList[this.breadcrumbList.length-1].name=`${this.itemdetails.user_first_name} ${this.itemdetails.user_last_name}`}catch(l){m().error(l)}}}},j={class:"flex items-start flex-col lg:flex-row gap-x-8"},B={class:"w-full max-w-sm mx-auto bg-white border border-Grey_20 rounded-regualr p-6 relative"},C={key:0,class:"absolute right-4 top-4"},N=["src"],D={key:1,class:"absolute right-4 top-4"},T=t("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",alt:"",class:"w-20 h-20 rounded-full object-cover"},null,-1),U=[T],V={key:2,class:"absolute right-4 top-4"},z=t("img",{src:k,alt:"",class:"w-20 h-20 rounded-full object-cover"},null,-1),A=[z],E={key:3,class:"absolute right-4 top-4"},J=t("img",{src:I,alt:"",class:"w-20 h-20 rounded-full object-cover"},null,-1),M=[J],W={key:4,class:"absolute right-4 top-4"},q=t("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",alt:"",class:"w-20 h-20 rounded-full object-cover"},null,-1),H=[q],K={class:"space-y-7"},O={class:"space-y-3"},Q=t("p",{class:"text-sm color-Grey_50"},"Full Name",-1),R={class:"text-sm font-semibold color-Grey_90"},X={key:0,class:"text-sm font-semibold color-Grey_90"},Y={class:"space-y-3"},Z=t("p",{class:"text-sm color-Grey_50"},"Email Id",-1),$={class:"text-sm font-semibold color-Grey_90"},ee={key:0,class:"text-sm font-semibold color-Grey_90"},te={class:"space-y-3"},se=t("p",{class:"text-sm color-Grey_50"},"Mobile Number",-1),oe={class:"text-sm font-semibold color-Grey_90"},ie={key:0,class:"text-sm font-semibold color-Grey_90"},re={class:"flex-grow"},le={class:"flex items-center justify-between w-full gap-6"},ae=t("h2",{class:"title"},"Jobs",-1),ce={key:0,class:"data-not-found border-b border-Grey_20 border-solid"},ne=t("img",{src:w},null,-1),_e=[ne],me={key:1,class:"w-100 user-table"},de=t("tbody",null,null,-1),he=[de];function ue(r,l,d,pe,e,fe){const h=c("SearchBox"),u=c("Pagination"),p=c("ContentSection"),f=c("Layout");return s(),y(f,{breadcrumb:e.breadcrumbList},{default:a(()=>[t("div",j,[t("aside",B,[e.itemdetails.profile_image?(s(),o("div",C,[t("img",{src:e.itemdetails.profile_image,alt:"",class:"w-20 h-20 rounded-full object-cover"},null,8,N)])):i("",!0),e.itemdetails.profile_image===""?(s(),o("div",D,U)):i("",!0),!e.itemdetails.profile_image&&e.itemdetails.user_gender==="female"?(s(),o("div",V,A)):i("",!0),!e.itemdetails.profile_image&&e.itemdetails.user_gender==="male"?(s(),o("div",E,M)):i("",!0),!e.itemdetails.user_gender&&!e.itemdetails.profile_image?(s(),o("div",W,H)):i("",!0),t("ul",K,[t("li",O,[Q,t("h6",R,n(e.itemdetails.user_first_name)+" "+n(e.itemdetails.user_last_name),1),!e.itemdetails.user_first_name&&e.itemdetails.user_last_name?(s(),o("h6",X,"-")):i("",!0)]),t("li",Y,[Z,t("h6",$,n(e.itemdetails.user_email),1),e.itemdetails.user_email?i("",!0):(s(),o("h6",ee,"-"))]),t("li",te,[se,t("h6",oe,n(e.itemdetails.family_mob_no),1),e.itemdetails.family_mob_no?i("",!0):(s(),o("h6",ie,"-"))])])]),t("div",re,[_(p,null,{"table-header":a(()=>[t("div",le,[ae,t("div",null,[_(h,{placeholder:"Search something..",value:e.searchText,onInput:r.searchTextFun},null,8,["value","onInput"])])])]),"main-table":a(()=>[e.list.length===0?(s(),o("div",ce,_e)):i("",!0),e.list.length!==0?(s(),o("table",me,he)):i("",!0)]),"table-footer":a(()=>[_(u,{currentPage:e.currentPage,totalPages:e.totalPages,onUpdatePage:r.updatePage,totalItem:r.totalItems,perPageItem:r.perPageItems},null,8,["currentPage","totalPages","onUpdatePage","totalItem","perPageItem"])]),_:1})])])]),_:1},8,["breadcrumb"])}const Se=G(F,[["render",ue]]);export{Se as default};
