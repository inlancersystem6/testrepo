import{o as i,c as n,F as h,r as k,b as r,a as e,t as I,p as N,d as S,m as B,f as g,u as b,e as c,g as m,w as y,h as T,i as E}from"./index-31e5b7a2.js";import{L as F,D as G}from"./Layout-c0e45365.js";import{C as R,S as U,P as V,_ as Z}from"./adjustments-0001b8e1.js";import{_ as j,a as q}from"./trash-bad6200c.js";import{_ as W}from"./edit-51d5eb37.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{I as z}from"./Input-759c262f.js";import{T as H}from"./TextArea-235706fd.js";import{L as J}from"./Label-36958fc8.js";import{_ as K}from"./plus-3-0d8d5401.js";import"./OverLaye-0858a669.js";import"./search-0186349c.js";const O={props:{list:Array,loading:Boolean},methods:{deleteItem(s){this.$emit("delete_item",s)},editItem(s){this.$emit("edit_item",s)}}},_=s=>(N("data-v-6f95ce3e"),s=s(),S(),s),Q={key:0},X=_(()=>e("td",{class:"count skeleton-element"},null,-1)),Y=_(()=>e("td",{class:"user_name skeleton-element"},null,-1)),ee=_(()=>e("td",{class:"user_number skeleton-element"},null,-1)),te=_(()=>e("td",{class:"blank"},null,-1)),se=_(()=>e("td",{class:"skeleton-element min-w-10 max-w-10 ml-[145px]"},null,-1)),ie=[X,Y,ee,te,se],ae={key:0},oe={class:"count"},ne={class:"gap-8px text-sm_regular color-Grey_90"},le={class:"user_name"},de={class:"text-sm_regular color-Grey_90"},re={class:"user_number"},ce={class:"text-sm_regular color-Grey_90"},me=_(()=>e("td",{class:"blank"},null,-1)),_e={class:"dropdown"},pe={class:"icon-btn icon-btn_32px custom-dropdown"},ue=_(()=>e("img",{src:j},null,-1)),he={class:"custom-dropdown-list leftside icon-dropdown"},ge=["onClick"],be=_(()=>e("div",{class:"dropdown-link"},[e("img",{src:W}),e("p",{class:"dropdown-link-title"}," Edit Amenities ")],-1)),ye=[be],xe=["onClick"],ve=_(()=>e("div",{class:"dropdown-link"},[e("img",{src:q}),e("p",{class:"dropdown-link-title required"}," Delete Amenities ")],-1)),fe=[ve];function Ie(s,t,l,w,a,o){return i(),n(h,null,[(i(),n(h,null,k(6,(p,u)=>(i(),n(h,{key:u},[l.loading?(i(),n("tr",Q,ie)):r("",!0)],64))),64)),(i(!0),n(h,null,k(l.list,(p,u)=>(i(),n(h,{key:u},[l.loading?r("",!0):(i(),n("tr",ae,[e("td",oe,[e("p",ne,I(u+1),1)]),e("td",le,[e("p",de,I(p.amenities_name),1)]),e("td",re,[e("p",ce,I(p.amenities_details),1)]),me,e("td",_e,[e("div",pe,[ue,e("ul",he,[e("li",{class:"dropdown-item",onClick:f=>o.editItem(p.amenities_id)},ye,8,ge),e("li",{class:"dropdown-item",onClick:f=>o.deleteItem(p.amenities_id)},fe,8,xe)])])])]))],64))),128))],64)}const we=C(O,[["render",Ie],["__scopeId","data-v-6f95ce3e"]]);const x="https://devapi.billionbuild.com",Ae={components:{Layout:F,ContentSection:R,SearchBox:U,Pagination:V,AmenitiesRow:we,DeleteModel:G,Input:z,TextArea:H,Label:J},data(){return{list:[],searchText:"",currentPage:1,totalPages:1,sort:"asc",deleteItemModal:!1,itemId:"",amenitiesName:"",amenitiesNote:"",amenitiesModal:!1,listLoading:!1,listEmpty:!1}},created(){this.amenitieData();const s=B(),t="Customer List |  Billion Build",l="this is description for Customer List";s.chnageTitle(t,l)},computed:{addamenitiesBtn(){const s=/[!@#$%^&*()?":{}|<>]/;return!this.amenitiesName.trim()||!this.amenitiesNote.trim()||s.test(this.amenitiesNote)}},methods:{addUserFun(){this.amenitiesModal=!0,this.amenitiesName="",this.amenitiesNote="",this.itemId=""},searchTextFun(s){this.searchText=s.target.value.trim(),this.amenitieData()},updatePage(s){this.currentPage=s,this.amenitieData()},changesort(){this.sort=this.sort==="desc"?"asc":"desc",this.amenitieData()},async amenitieData(){this.listLoading=!0,this.listEmpty=!1;var s=new FormData;s.append("amenities_id",""),s.append("sort",this.sort),s.append("search",this.searchText),s.append("page_no",this.currentPage);try{const t=await g.post(`${x}/amenity-list`,s);t.data.length!==0?(this.listLoading=!1,this.list=t.data,this.totalPages=t.total_pages):(this.listEmpty=!0,this.totalPages=1)}catch(t){b().error(t)}},getItemId(s){this.deleteItemModal=!0,this.itemId=s},async editItem(s){this.itemId=s;var t=new FormData;t.append("amenities_id",s),t.append("sort",this.sort),t.append("search",this.searchText),t.append("page_no",this.currentPage);try{const l=await g.post(`${x}/amenity-list`,t);this.amenitiesModal=!0,this.amenitiesName=l.data.amenities_name,this.amenitiesNote=l.data.amenities_details}catch(l){b().error(l)}},async deleteItem(){var s=new FormData;s.append("amenities_id",this.itemId);try{(await g.post(`${x}/remove-amenities`,s)).success===1&&(this.amenitieData(),this.deleteItemModal=!1,this.itemId="")}catch(t){b().error(t)}},async addAmenities(){var s=new FormData;s.append("amenities_id",this.itemId||""),s.append("amenities_name",this.amenitiesName),s.append("amenities_details",this.amenitiesNote);try{(await g.post(`${x}/add-amenities`,s)).success===1&&(this.amenitieData(),this.deleteItemModal=!1,this.amenitiesModal=!1,this.amenitiesName="",this.amenitiesNote="",this.itemId="")}catch(t){b().error(t)}}}},v=s=>(N("data-v-5d94dc23"),s=s(),S(),s),ke=v(()=>e("div",{class:"w-100 margin-bottom_12px"},[e("h2",{class:"title"},"Amenities List")],-1)),Ne={class:"table-options"},Se=v(()=>e("img",{src:Z},null,-1)),Ce={key:0},De={key:1},Pe={class:"table-options"},Me=v(()=>e("img",{src:K},null,-1)),Le={class:"w-100 user-table"},$e=v(()=>e("tr",null,[e("td",{class:"count"},[e("p",{class:"text-base_semibold color-Grey_50"},"No.")]),e("td",{class:"user_name"},[e("p",{class:"text-base_semibold color-Grey_50"},"Amenities Name")]),e("td",{class:"user_number"},[e("p",{class:"text-base_semibold color-Grey_50"},"Amenities Details")]),e("td",{class:"blank"}),e("td",{class:"dropdown"},[e("div",{class:"icon-btn icon-btn_32px custom-dropdown"})])],-1)),Be={key:0,class:"status-chnageBox"},Te={class:"w-full border border-solid border-Grey_20 rounded-regualr bg-white"},Ee={class:"w-full border-b border-solid border-Gray_20"},Fe={class:"padding-y_8px padding-x_16px"},Ge={key:0},Re={key:1},Ue={class:"padding-y_12px padding-x_16px space-y-4"},Ve={class:"space-y-4px"},Ze={class:"space-y-4px"},je={class:"w-full border-t border-solid border-Gray_20"},qe={class:"padding-y_8px padding-x_16px flex items-center justify-end gap-8px"},We=["disabled"],ze=["disabled"];function He(s,t,l,w,a,o){const p=c("SearchBox"),u=c("AmenitiesRow"),f=c("Pagination"),D=c("ContentSection"),A=c("Label"),P=c("Input"),M=c("TextArea"),L=c("Layout"),$=c("DeleteModel");return i(),n(h,null,[m(L,null,{default:y(()=>[m(D,null,{"table-header":y(()=>[ke,e("div",Ne,[e("button",{class:"btn-regular display-flex align-center gap-8px",onClick:t[0]||(t[0]=d=>o.changesort())},[Se,a.sort==="asc"?(i(),n("span",Ce,"A to Z")):r("",!0),a.sort==="desc"?(i(),n("span",De,"Z to A")):r("",!0)])]),e("div",Pe,[m(p,{placeholder:"Search Amenities",value:a.searchText,onInput:o.searchTextFun},null,8,["value","onInput"]),e("button",{class:"btn-regular display-flex align-center w-100 gap-8px text-no-wrap",onClick:t[1]||(t[1]=d=>o.addUserFun())},[Me,E(" Add New Amenities")])])]),"main-table":y(()=>[e("table",Le,[e("tbody",null,[$e,m(u,{list:a.list,onDelete_item:o.getItemId,onEdit_item:o.editItem,loading:a.listLoading},null,8,["list","onDelete_item","onEdit_item","loading"])])])]),"table-footer":y(()=>[m(f,{currentPage:a.currentPage,totalPages:a.totalPages,onUpdatePage:o.updatePage},null,8,["currentPage","totalPages","onUpdatePage"])]),_:1}),a.amenitiesModal?(i(),n("div",Be,[e("div",Te,[e("div",Ee,[e("div",Fe,[this.itemId?r("",!0):(i(),n("h4",Ge," Add Amenities")),this.itemId?(i(),n("h4",Re," Edit Amenities")):r("",!0)])]),e("div",Ue,[e("div",Ve,[m(A,{label:"Amenities Name"}),m(P,{placeholder:"Enter Amenities Name",id:"Amenities Name",value:a.amenitiesName,onInput:t[2]||(t[2]=d=>a.amenitiesName=d.target.value)},null,8,["value"])]),e("div",Ze,[m(A,{label:"Amenities details"}),m(M,{placeholder:"Enter Amenities details",id:"Amenities details",value:a.amenitiesNote,onInput:t[3]||(t[3]=d=>a.amenitiesNote=d.target.value)},null,8,["value"])])]),e("div",je,[e("div",qe,[e("button",{class:"btn-regular",onClick:t[4]||(t[4]=d=>this.amenitiesModal=!this.amenitiesModal)},"Cancel"),this.itemId?r("",!0):(i(),n("button",{key:0,class:"btn-regular bg-purple color-white",disabled:o.addamenitiesBtn,onClick:t[5]||(t[5]=(...d)=>o.addAmenities&&o.addAmenities(...d))},"Add Amenities",8,We)),this.itemId?(i(),n("button",{key:1,class:"btn-regular bg-purple color-white",disabled:o.addamenitiesBtn,onClick:t[6]||(t[6]=(...d)=>o.addAmenities&&o.addAmenities(...d))},"Save Amenities",8,ze)):r("",!0)])])])])):r("",!0),a.amenitiesModal?(i(),n("div",{key:1,class:"overlay",onClick:t[7]||(t[7]=d=>this.amenitiesModal=!this.amenitiesModal)})):r("",!0)]),_:1}),a.deleteItemModal?(i(),T($,{key:0,model_title:"Delete Amenities",model_subtitle:"Are you sure you want to delete this Amenities?",onClose_model:t[8]||(t[8]=d=>a.deleteItemModal=!1),onDelete_item:t[9]||(t[9]=d=>o.deleteItem())})):r("",!0)],64)}const nt=C(Ae,[["render",He],["__scopeId","data-v-5d94dc23"]]);export{nt as default};
