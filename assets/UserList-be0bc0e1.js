import{o as a,d as l,e as P,F as v,a as e,t as m,f as i,p as I,g as U,h as f,i as x,r as u,j as h,w,c as G,b as M}from"./index-78b395c4.js";import{L as B,D as E}from"./Layout-2b061d19.js";import{C as F,S as L,P as N,_ as R}from"./adjustments-0a4ad8f3.js";import{_ as T,a as A}from"./trash-bad6200c.js";import{_ as V}from"./edit-51d5eb37.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as j}from"./plus-3-0d8d5401.js";import"./OverLaye-908016db.js";import"./search-0186349c.js";const q={props:{list:Array},methods:{deleteItem(t){this.$emit("delete_item",t)},editItem(t){this.$emit("edit_item",t)},editStatus(t){this.$emit("edit_status",t)}}},d=t=>(I("data-v-04feb67f"),t=t(),U(),t),O={class:"count"},W={class:"gap-8px text-base_semibold color-Grey_90"},Z={class:"user_name"},z={class:"display-flex align-center gap-14px"},H=["src"],J={key:1,src:"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",class:"user-img"},K={class:"text-base_semibold color-Grey_90"},Q={class:"user_email"},X={class:"text-base_semibold color-Grey_90"},Y={class:"user_number"},ee={class:"text-base_semibold color-Grey_90"},te=d(()=>e("td",{class:"blank"},null,-1)),se={class:"user-status"},oe={key:0,class:"btn-regular display-flex align-center gap-8px"},re=d(()=>e("div",{class:"ellipse-dot bg-emerald"},null,-1)),ae=d(()=>e("p",{class:"text-sm_medium color-Grey_60"},"Enable",-1)),le=[re,ae],ne={key:1,class:"btn-regular display-flex align-center gap-8px"},ie=d(()=>e("div",{class:"ellipse-dot bg-rose"},null,-1)),de=d(()=>e("p",{class:"text-sm_medium color-Grey_60"},"Disable",-1)),ce=[ie,de],_e={class:"dropdown"},ue={class:"icon-btn icon-btn_32px custom-dropdown"},pe=d(()=>e("img",{src:T},null,-1)),me={class:"custom-dropdown-list leftside icon-dropdown"},he=["onClick"],ge=d(()=>e("div",{class:"dropdown-link"},[e("img",{src:V}),e("p",{class:"dropdown-link-title"}," Edit User ")],-1)),be=[ge],we=["onClick"],fe=d(()=>e("div",{class:"dropdown-link"},[e("img",{src:A}),e("p",{class:"dropdown-link-title required"}," Delete User ")],-1)),ke=[fe],ye=["onClick"],xe=d(()=>e("div",{class:"dropdown-link"},[e("p",{class:"w20"}),e("p",{class:"dropdown-link-title"}," Enable ")],-1)),ve=[xe],Ie=["onClick"],Ue=d(()=>e("div",{class:"dropdown-link"},[e("p",{class:"w20"}),e("p",{class:"dropdown-link-title"}," Disable ")],-1)),$e=[Ue];function Ce(t,s,_,y,n,r){return a(!0),l(v,null,P(_.list,(o,g)=>(a(),l("tr",{key:g},[e("td",O,[e("p",W,m(g+1),1)]),e("td",Z,[e("div",z,[o.profile_pic?(a(),l("img",{key:0,src:o.profile_pic,class:"user-img"},null,8,H)):i("",!0),o.profile_pic?i("",!0):(a(),l("img",J)),e("p",K,m(o.user_first_name)+" "+m(o.user_last_name),1)])]),e("td",Q,[e("p",X,m(o.user_email),1)]),e("td",Y,[e("p",ee,m(o.user_mobile_number),1)]),te,e("td",se,[o.user_status===!0?(a(),l("button",oe,le)):i("",!0),o.user_status===!1?(a(),l("button",ne,ce)):i("",!0)]),e("td",_e,[e("div",ue,[pe,e("ul",me,[e("li",{class:"dropdown-item",onClick:p=>r.editItem(o.user_id)},be,8,he),e("li",{class:"dropdown-item",onClick:p=>r.deleteItem(o.user_id)},ke,8,we),o.user_status===!1?(a(),l("li",{key:0,class:"dropdown-item",onClick:p=>r.editStatus(o.user_id)},ve,8,ye)):i("",!0),o.user_status===!0?(a(),l("li",{key:1,class:"dropdown-item",onClick:p=>r.editStatus(o.user_id)},$e,8,Ie)):i("",!0)])])])]))),128)}const De=$(q,[["render",Ce],["__scopeId","data-v-04feb67f"]]),Se="/assets/no-data-822ab6e4.png";const k="https://devapi.billionbuild.com",Pe={components:{Layout:B,ContentSection:F,SearchBox:L,Pagination:N,UserRow:De,DeleteModel:E},data(){return{list:[],searchText:"",currentPage:1,totalPages:1,sort:"asc",deleteItemModal:!1,itemId:""}},created(){this.userData(),document.title="Users | Billion Build"},methods:{addUserFun(){this.$router.push({name:"AddUser"})},pushRoles(){this.$router.push({name:"Roles"})},searchTextFun(t){this.searchText=t.target.value.trim(),this.userData()},updatePage(t){this.currentPage=t,this.userData()},changesort(){this.sort=this.sort==="desc"?"asc":"desc",this.userData()},async userData(){var t=new FormData;t.append("sort",this.sort),t.append("search",this.searchText),t.append("page_no",this.currentPage);try{const s=await f.post(`${k}/user-list`,t);this.list=s.data,this.totalPages=s.total_pages}catch(s){console.log(s)}},async statusUpdate(t){var s=new FormData;s.append("user_id",t);try{(await f.post(`${k}/user-status`,s)).success===1&&this.userData()}catch(_){x().error(_)}},getItemId(t){this.deleteItemModal=!0,this.itemId=t},editItem(t){this.$router.push({name:"EditUser",params:{id:t}})},async deleteItem(){var t=new FormData;t.append("user_id",this.itemId);try{(await f.post(`${k}/remove-user`,t)).success===1&&(this.userData(),this.deleteItemModal=!1)}catch(s){x().error(s)}}}},c=t=>(I("data-v-ad9f51ce"),t=t(),U(),t),Ge=c(()=>e("div",{class:"w-100 margin-bottom_12px"},[e("h2",{class:"title"},"User List")],-1)),Me={class:"table-options"},Be=c(()=>e("img",{src:R},null,-1)),Ee={key:0},Fe={key:1},Le=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#111827","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M12 12V3",stroke:"#111827","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M19.7907 7.5L4.20947 16.5",stroke:"#111827","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Ne=c(()=>e("span",null,"Roles & Permissions",-1)),Re=[Le,Ne],Te={class:"table-options"},Ae=c(()=>e("img",{src:j},null,-1)),Ve={key:0,class:"data-not-found border-b border-Grey_20 border-solid"},je=c(()=>e("img",{src:Se},null,-1)),qe=[je],Oe={key:1,class:"w-100 user-table"},We=c(()=>e("tr",null,[e("td",{class:"count"},[e("p",{class:"text-sm_regular color-Grey_50"},"No.")]),e("td",{class:"user_name"},[e("p",{class:"text-sm_regular color-Grey_50"},"User Name")]),e("td",{class:"user_email"},[e("p",{class:"text-sm_regular color-Grey_50"},"User Email")]),e("td",{class:"user_number"},[e("p",{class:"text-sm_regular color-Grey_50"},"User No.")]),e("td",{class:"blank"}),e("td",{class:"user-status"},[e("p",{class:"text-sm_regular color-Grey_50"},"User staus")]),e("td",{class:"dropdown"})],-1));function Ze(t,s,_,y,n,r){const o=u("SearchBox"),g=u("UserRow"),p=u("Pagination"),C=u("ContentSection"),D=u("Layout"),S=u("DeleteModel");return a(),l(v,null,[h(D,null,{default:w(()=>[h(C,null,{"table-header":w(()=>[Ge,e("div",Me,[e("button",{class:"btn-regular display-flex align-center gap-8px",onClick:s[0]||(s[0]=b=>r.changesort())},[Be,n.sort==="asc"?(a(),l("span",Ee,"Newest")):i("",!0),n.sort==="desc"?(a(),l("span",Fe,"Oldest")):i("",!0)]),e("button",{class:"btn-regular display-flex align-center gap-8px",onClick:s[1]||(s[1]=b=>r.pushRoles())},Re)]),e("div",Te,[h(o,{placeholder:"Search Account",value:n.searchText,onInput:r.searchTextFun},null,8,["value","onInput"]),e("button",{class:"btn-regular display-flex align-center gap-8px text-no-wrap",onClick:s[2]||(s[2]=b=>r.addUserFun())},[Ae,M(" Add New User")])])]),"main-table":w(()=>[n.list?i("",!0):(a(),l("div",Ve,qe)),n.list?(a(),l("table",Oe,[e("tbody",null,[We,h(g,{list:n.list,onDelete_item:r.getItemId,onEdit_item:r.editItem,onEdit_status:r.statusUpdate},null,8,["list","onDelete_item","onEdit_item","onEdit_status"])])])):i("",!0)]),"table-footer":w(()=>[h(p,{currentPage:n.currentPage,totalPages:n.totalPages,onUpdatePage:r.updatePage},null,8,["currentPage","totalPages","onUpdatePage"])]),_:1})]),_:1}),n.deleteItemModal?(a(),G(S,{key:0,model_title:"Delete User",model_subtitle:"Are you sure you want to delete this User?",onClose_model:s[3]||(s[3]=b=>n.deleteItemModal=!1),onDelete_item:s[4]||(s[4]=b=>r.deleteItem())})):i("",!0)],64)}const st=$(Pe,[["render",Ze],["__scopeId","data-v-ad9f51ce"]]);export{st as default};
