import{f as C,e as c,o as i,h as a,w as k,g as n,a as s,b as l,n as _,j as v,v as g,c as w,p as N,d as E}from"./index-31e5b7a2.js";import{L as U}from"./Layout-c0e45365.js";import{C as L}from"./ContentSection2-e340fc18.js";import{L as F}from"./Label-36958fc8.js";import{I as M}from"./Input-759c262f.js";import{E as x}from"./ErrorMessage-338e63f5.js";import{S as I}from"./Select-a44cec79.js";import{_ as S}from"./plus-3-0d8d5401.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./OverLaye-0858a669.js";import"./search-0186349c.js";const y="https://devapi.billionbuild.com",R={components:{Layout:U,ContentSection:L,Label:F,Input:M,ErrorMessage:x,Select:I},data(){return{userFirstName:"",userLastName:"",userEmail:"",userNumber:"",userPass:"",userCoPass:"",profilePic:"",selectedImg:"",formSubmitted:!1,isvalidEmail:!0,typePassword:!0,typePassword2:!0,passwordNotMatch:!1,roleList:[],selectedRoleId:"",selectedRole:""}},created(){this.featchRoleList()},computed:{btnDisabled(){return!this.userFirstName.trim()||!this.userLastName.trim()||!this.userEmail.trim()||!this.userNumber.trim()||this.userNumber.trim().length!==10||!this.isvalidEmail||this.passwordNotMatch||!this.selectedRoleId}},methods:{validateEmail(){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userEmail)},checkPasswords(){this.userPass&&this.userCoPass&&this.userPass===this.userCoPass?this.passwordNotMatch=!1:this.passwordNotMatch=!0},selectedPic(o){const e=o.target.files[0];(e.type==="image/png"||e.type==="image/jpeg"||e.type==="image/gif"||e.type==="image/svg"||e.type==="image/jpg")&&(this.profilePic=e,this.selectedImg=URL.createObjectURL(e))},onOptionSelected(o){this.selectedRole=o.role_name,this.selectedRoleId=o.role_id},async featchRoleList(){var o=new FormData;o.append("role_id","");try{const e=await C.post(`${y}/role-list`,o);this.roleList=e.data}catch(e){console.log(e)}},async addUser(){var o=new FormData;o.append("user_first_name",this.userFirstName),o.append("user_last_name",this.userLastName),o.append("user_email",this.userEmail),o.append("mobile_no",this.userNumber),o.append("user_pass",this.userPass),o.append("conf_pass",this.userCoPass),o.append("user_profile",this.profilePic),o.append("role_id",this.selectedRoleId);try{(await C.post(`${y}/add-user`,o)).success===1&&this.$router.push({name:"UserList"})}catch(e){console.log(e)}}}},m=o=>(N("data-v-aebc8a37"),o=o(),E(),o),B={class:"row"},D={class:"col-8"},O={class:"address-form"},V={class:"space-y-8px"},A={class:"space-y-8px"},Z={class:"space-y-8px"},G={class:"space-y-8px"},z={class:"space-y-8px"},W=["type"],q={class:"icon togglePassword"},H=m(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),J=[H],K=m(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M4.5 3.75L19.5 20.25",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M14.522 14.7766C13.8338 15.407 12.9334 15.7551 12.0001 15.7516C11.2432 15.7515 10.5041 15.5224 9.87984 15.0944C9.25561 14.6663 8.77551 14.0594 8.50265 13.3535C8.22979 12.6475 8.17695 11.8754 8.35107 11.1389C8.52519 10.4023 8.91812 9.73564 9.47821 9.22656",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M6.9375 6.42969C3.1125 8.36094 1.5 11.9984 1.5 11.9984C1.5 11.9984 4.5 18.7484 12 18.7484C13.7574 18.7628 15.4929 18.3578 17.0625 17.5672",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M19.5564 15.8531C21.6002 14.025 22.5002 12 22.5002 12C22.5002 12 19.5002 5.25002 12.0002 5.25002C11.35 5.24874 10.7008 5.30205 10.0596 5.4094",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M12.7031 8.31641C13.5006 8.46751 14.2273 8.8739 14.7735 9.47426C15.3198 10.0746 15.6559 10.8364 15.7313 11.6445",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Q=[K],T={class:"space-y-8px"},X=["type"],Y={class:"icon togglePassword"},$=m(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),ee=[$],se=m(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[s("path",{d:"M4.5 3.75L19.5 20.25",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M14.522 14.7766C13.8338 15.407 12.9334 15.7551 12.0001 15.7516C11.2432 15.7515 10.5041 15.5224 9.87984 15.0944C9.25561 14.6663 8.77551 14.0594 8.50265 13.3535C8.22979 12.6475 8.17695 11.8754 8.35107 11.1389C8.52519 10.4023 8.91812 9.73564 9.47821 9.22656",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M6.9375 6.42969C3.1125 8.36094 1.5 11.9984 1.5 11.9984C1.5 11.9984 4.5 18.7484 12 18.7484C13.7574 18.7628 15.4929 18.3578 17.0625 17.5672",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M19.5564 15.8531C21.6002 14.025 22.5002 12 22.5002 12C22.5002 12 19.5002 5.25002 12.0002 5.25002C11.35 5.24874 10.7008 5.30205 10.0596 5.4094",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),s("path",{d:"M12.7031 8.31641C13.5006 8.46751 14.2273 8.8739 14.7735 9.47426C15.3198 10.0746 15.6559 10.8364 15.7313 11.6445",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),te=[se],oe={class:"space-y-8px"},re=m(()=>s("div",{class:""},null,-1)),ie=["disabled"],ne={class:"col-2"},le={class:"user_pic"},ae=["src"],de={class:"add_pic",for:"user-pic"},pe=m(()=>s("img",{src:S},null,-1));function ue(o,e,ce,me,t,d){const u=c("Label"),h=c("Input"),p=c("ErrorMessage"),b=c("Select"),f=c("ContentSection"),P=c("Layout");return i(),a(P,null,{default:k(()=>[n(f,{title:"Add User"},{default:k(()=>[s("div",B,[s("div",D,[s("div",O,[s("div",V,[n(u,{label:"User First Name"}),n(h,{placeholder:"Enter User First Name",id:"User First Name",value:t.userFirstName,onInput:e[0]||(e[0]=r=>t.userFirstName=r.target.value)},null,8,["value"]),!t.userFirstName&&t.formSubmitted?(i(),a(p,{key:0,msg:""})):l("",!0)]),s("div",A,[n(u,{label:"User Last Name"}),n(h,{placeholder:"Enter User Last Name",id:"User Last Name",value:t.userLastName,onInput:e[1]||(e[1]=r=>t.userLastName=r.target.value)},null,8,["value"]),!t.userLastName&&t.formSubmitted?(i(),a(p,{key:0,msg:""})):l("",!0)]),s("div",Z,[n(u,{label:"User Email"}),n(h,{placeholder:"Enter User Email",id:"User Email",value:t.userEmail,onInput:e[2]||(e[2]=r=>{t.userEmail=r.target.value,t.isvalidEmail=d.validateEmail()}),class:_({input_error:!t.isvalidEmail})},null,8,["value","class"]),t.isvalidEmail?l("",!0):(i(),a(p,{key:0,msg:"Invalid email"})),!t.userEmail&&t.formSubmitted?(i(),a(p,{key:1,msg:""})):l("",!0)]),s("div",G,[n(u,{label:"User Phone No."}),n(h,{placeholder:"Enter User Number",id:"User Phone No.",value:t.userNumber,onInput:e[3]||(e[3]=r=>t.userNumber=r.target.value),type:"number",class:_({input_error:t.userNumber.length>10})},null,8,["value","class"]),!t.userNumber&&t.formSubmitted?(i(),a(p,{key:0,msg:""})):l("",!0),t.userNumber.length>10?(i(),a(p,{key:1,msg:"Only 10 number valid"})):l("",!0)]),s("div",z,[n(u,{label:"User Password"}),s("div",{class:_(["search-wrraper w-100 border-Grey_20",{input_error:t.passwordNotMatch}])},[v(s("input",{class:"w-100",type:t.typePassword?"password":"text",placeholder:"Enter User Password",id:"User Password",onInput:e[4]||(e[4]=r=>{t.userPass=r.target.value,d.checkPasswords()}),"onUpdate:modelValue":e[5]||(e[5]=r=>t.userPass=r)},null,40,W),[[g,t.userPass]]),s("div",q,[t.typePassword?(i(),w("span",{key:0,onClick:e[6]||(e[6]=r=>t.typePassword=!1)},J)):l("",!0),t.typePassword?l("",!0):(i(),w("span",{key:1,onClick:e[7]||(e[7]=r=>t.typePassword=!0)},Q))])],2),this.passwordNotMatch?(i(),a(p,{key:0,msg:"Password is not match"})):l("",!0)]),s("div",T,[n(u,{label:"Correct Password"}),s("div",{class:_(["search-wrraper w-100 border-Grey_20",{input_error:t.passwordNotMatch}])},[v(s("input",{class:"w-100",type:t.typePassword2?"password":"text",placeholder:"Enter User Correct Password",id:"Correct Password",onInput:e[8]||(e[8]=r=>{t.userCoPass=r.target.value,d.checkPasswords()}),"onUpdate:modelValue":e[9]||(e[9]=r=>t.userCoPass=r)},null,40,X),[[g,t.userCoPass]]),s("div",Y,[t.typePassword2?(i(),w("span",{key:0,onClick:e[10]||(e[10]=r=>t.typePassword2=!1)},ee)):l("",!0),t.typePassword2?l("",!0):(i(),w("span",{key:1,onClick:e[11]||(e[11]=r=>t.typePassword2=!0)},te))])],2),this.passwordNotMatch?(i(),a(p,{key:0,msg:"Password is not match"})):l("",!0)]),s("div",oe,[n(u,{label:"Select  Role"}),n(b,{options:t.roleList,onOptionSelected:d.onOptionSelected},null,8,["options","onOptionSelected"])]),re,s("button",{type:"submit",class:"btn-regular margin-top_8px",disabled:d.btnDisabled,onClick:e[12]||(e[12]=r=>d.addUser())},"Add User",8,ie)])]),s("div",ne,[s("div",le,[s("img",{src:this.selectedImg,class:"pic"},null,8,ae),s("label",de,[s("input",{type:"file",id:"user-pic",onChange:e[13]||(e[13]=(...r)=>d.selectedPic&&d.selectedPic(...r))},null,32),pe])])])])]),_:1})]),_:1})}const Ne=j(R,[["render",ue],["__scopeId","data-v-aebc8a37"]]);export{Ne as default};