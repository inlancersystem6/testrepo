import{L as C}from"./Layout-feaff5d7.js";import{C as R}from"./ContentSection2-cea15362.js";import{L as E}from"./Label-d788184e.js";import{I as D}from"./Input-d28165ea.js";import{E as A}from"./ErrorMessage-d5a29056.js";import{_ as M,f as h,g as u,r as l,o as i,h as g,w as k,b as c,a as t,i as F,c as d,j as v,F as x,t as f,d as I}from"./index-5d175349.js";import"./OverLaye-142172c4.js";const b="https://devapi.billionbuild.com",j={components:{Layout:C,ContentSection:R,Label:E,Input:D,ErrorMessage:A},computed:{btnDisabled(){return!this.roleName.trim()}},data(){return{formSubmitted:!1,roleName:"",permissionsList:[],checked:"",roleData:"",roleId:"",role:"",checkedPermissions:[],checkedPer:""}},created(){this.roleId=this.$route.params.id,this.role=this.$route.params.name,this.featchPermissionsList(),this.featchRoleList()},methods:{async featchRoleList(){var s=new FormData;s.append("role_id",this.roleId);try{const e=await h.post(`${b}/role-list`,s);this.roleData=e.data,this.roleName=e.data.role_name,this.checkedPer=e.data.role_permission;const o=this.checkedPer.split(",").map(Number);this.checkedPermissions.push(...o)}catch(e){u().error(e)}},async featchPermissionsList(){var s=new FormData;try{const e=await h.post(`${b}/permission-list`,s);this.permissionsList=e.data}catch(e){u().error(e)}},checkPermission(s,e){return s?s.split(",").includes(e.toString()):!1},updateCheckedPermissions(s){const e=this.checkedPermissions.indexOf(s);e!==-1?this.checkedPermissions.splice(e,1):this.checkedPermissions.push(s)},async addRole(){const s=this.checkedPermissions.join(",");var e=new FormData;e.append("role_id",this.roleId),e.append("role_name",this.roleName),e.append("role_permission",s);try{(await h.post(`${b}/role-add-or-edit`,e)).success===1&&this.$router.push({name:"Roles"})}catch(o){u().error(o)}}}},B={class:"col-8"},V={class:"address-form"},z={class:"space-y-8px"},G={class:"space-y-8px col-span-2"},U={class:"margin-top_16px display-flex align-center gap-20px Lg_flex-wrap"},O={class:"text-small_semibold color-Grey_50 text-capitalize w_140px"},T={class:"display-flex align-center gap-18px justify-between Md_w-100 Mobile_grid-cols-2 Mobile_display-grid"},W={class:"custom-toogle-btn display-flex align-center gap-8px"},$=["onChange","checked","id"],q=["for"],H=["disabled"];function J(s,e,o,L,r,n){const y=l("Label"),P=l("Input"),N=l("ErrorMessage"),S=l("ContentSection"),w=l("Layout");return i(),g(w,null,{default:k(()=>[c(S,{title:`Edit ${r.role} Role`},{default:k(()=>[t("div",B,[t("div",V,[t("div",z,[c(y,{label:"Role Name"}),c(P,{placeholder:"Enter Role Name",id:"Role Name",value:r.roleName,onInput:e[0]||(e[0]=a=>r.roleName=a.target.value)},null,8,["value"]),!r.roleName&&r.formSubmitted?(i(),g(N,{key:0,msg:""})):F("",!0)]),t("div",G,[c(y,{label:"Add Permissions"}),(i(!0),d(x,null,v(r.permissionsList,(a,p)=>(i(),d("div",{key:p},[t("div",U,[t("p",O,f(a.name)+" permission:-",1),t("div",T,[(i(!0),d(x,null,v(a.permissions,(m,_)=>(i(),d("div",{key:_,class:"img-not-selected"},[t("div",W,[t("input",{type:"checkbox",class:"form-toogle-btn",onChange:K=>n.updateCheckedPermissions(m.permission_id),checked:n.checkPermission(this.checkedPer,m.permission_id),id:p+"_"+_},null,40,$),I(" "+f(r.checked)+" ",1),t("label",{class:"text-capitalize text-large_semibold color-Grey_90",for:p+"_"+_},f(m.permission_name),9,q)])]))),128))])])]))),128))])]),t("button",{type:"submit",class:"btn-regular margin-top_24px",disabled:n.btnDisabled,onClick:e[1]||(e[1]=(...a)=>n.addRole&&n.addRole(...a))},"Add User ",8,H)])]),_:1},8,["title"])]),_:1})}const oe=M(j,[["render",J],["__scopeId","data-v-978944b9"]]);export{oe as default};
