import{L as E}from"./Layout-200f36b8.js";import{u as S,h as L,i as x,q as k,r as c,o as r,c as n,w as _,j as l,a as i,f as a,n as y,d as u,b as I,p as C,g as w}from"./index-38024ad5.js";import{L as A}from"./Label-dfa7b7c9.js";import{I as F}from"./Input-13b1a54a.js";import{T as D}from"./TextArea-abd90eb3.js";import{C as B}from"./ContentSection2-f1f538fa.js";import{E as U}from"./ErrorMessage-8c215241.js";import{_ as T}from"./noimg-c49b4ac6.js";import{_ as j}from"./plus-c82c2a30.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./OverLaye-d6a130a2.js";const M="https://devapi.billionbuild.com",O={components:{Layout:E,Label:A,Input:F,ErrorMessage:U,ContentSection2:B,TextArea:D},data(){return{profileFirstName:"",profileLastName:"",profileEmail:"",profileNo:"",formSubmitted:!1,isvalidEmail:!0,editProfile:!1,profileDetails:!0,profilePic:"",selectedImg:"",companyName:"",companyPhoneNo:"",companyAddress:"",profilesaveLoader:!1,profilenotsaved:!0,profilesaved:!1}},computed:{profileBtnDis(){const o=/[!@#$%^&*()?":{}|<>]/;return!this.profileFirstName||!this.profileFirstName.trim()||!this.profileLastName||!this.profileLastName.trim()||!this.profileEmail||!this.profileEmail.trim()||!this.profileNo||this.profileNo.trim().length!==10||!this.isvalidEmail||!this.companyPhoneNo||this.companyPhoneNo.trim().length!==10||!this.companyName||!this.companyName.trim()||!this.companyAddress||!this.companyAddress.trim()||o.test(this.operationNote)}},created(){this.getprofileData();const o=S(),e="Profile |  Billion Build",h="this is description for Profile";o.chnageTitle(e,h)},methods:{validateEmail(){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.profileEmail)},async getprofileData(){var o=new FormData;try{const e=await L.post(`${M}/user-profile`,o);this.profileFirstName=e.data.user_first_name,this.profileLastName=e.data.user_last_name,this.profileEmail=e.data.user_email,this.profileNo=e.data.user_mobile_number,this.profilePic=e.data.user_profile_pic,this.companyName=e.data.company_name,this.companyAddress=e.data.company_address,this.companyPhoneNo=e.data.company_phone_no,localStorage.setItem("user_details",JSON.stringify(e.data))}catch(e){x().error(e)}},selectedPic(o){const e=o.target.files[0];(e.type==="image/png"||e.type==="image/jpeg"||e.type==="image/gif"||e.type==="image/svg"||e.type==="image/jpg")&&(this.profilePic=e,this.selectedImg=URL.createObjectURL(e))},async profileDataUpdate(){const o=k();await o.Updated(this.profileFirstName,this.profileLastName,this.profileEmail,this.profilePic,this.profileNo,this.companyName,this.companyAddress,this.companyPhoneNo),await this.getprofileData(),this.profilePic?o.updateProfilePicUrl(this.profilePic):o.updateProfilePicUrl("")}}},g=o=>(C("data-v-619d82af"),o=o(),w(),o),V={class:"address-form w-3/4"},q={class:"space-y-8px"},z={class:"space-y-8px"},J={class:"space-y-8px"},W={class:"space-y-8px"},G={class:"space-y-8px"},H={class:"space-y-8px"},K={class:"space-y-8px col-span-2"},Q={class:"w-1/4"},X={class:"edit_profile_pic"},Y=["src"],Z=["src"],$={key:2,src:T},ee={class:"upload_pic"},te=g(()=>i("img",{src:j},null,-1)),oe={class:"w-full mt-4"},se=["disabled"],ie={key:0},re={key:1,class:"flex items-center gap-1"},le=g(()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none"},[i("path",{d:"M20.25 6.75L9.75 17.25L4.5 12",class:"stroke-green-500","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1));function ae(o,e,h,ne,t,d){const m=c("Label"),f=c("Input"),p=c("ErrorMessage"),v=c("TextArea"),N=c("from"),b=c("ContentSection2"),P=c("Layout");return r(),n(P,null,{default:_(()=>[l(b,{title:"profile"},{default:_(()=>[l(N,{class:"flex items-start w-full flex-wrap"},{default:_(()=>[i("div",V,[i("div",q,[l(m,{label:"First Name"}),l(f,{placeholder:"Enter First Name",id:"First Name",value:t.profileFirstName,onInput:e[0]||(e[0]=s=>t.profileFirstName=s.target.value)},null,8,["value"]),!t.profileFirstName&&t.formSubmitted?(r(),n(p,{key:0,msg:""})):a("",!0)]),i("div",z,[l(m,{label:"Last Name"}),l(f,{placeholder:"Enter Last Name",id:"Last Name",value:t.profileLastName,onInput:e[1]||(e[1]=s=>t.profileLastName=s.target.value)},null,8,["value"]),!t.profileLastName&&t.formSubmitted?(r(),n(p,{key:0,msg:""})):a("",!0)]),i("div",J,[l(m,{label:"email"}),l(f,{placeholder:"Enter email",id:"email",value:t.profileEmail,type:"email",onInput:e[2]||(e[2]=s=>{t.profileEmail=s.target.value,t.isvalidEmail=d.validateEmail()}),class:y({input_error:!t.isvalidEmail})},null,8,["value","class"]),t.isvalidEmail?a("",!0):(r(),n(p,{key:0,msg:"Invalid email"})),!t.profileEmail&&t.formSubmitted?(r(),n(p,{key:1,msg:""})):a("",!0)]),i("div",W,[l(m,{label:"Phone no."}),l(f,{placeholder:"Enter Phone no.",id:"Phone no.",value:t.profileNo,type:"number",onInput:e[3]||(e[3]=s=>t.profileNo=s.target.value),disabled:""},null,8,["value"]),!t.profileNo&&t.formSubmitted?(r(),n(p,{key:0,msg:""})):a("",!0),t.profileNo.length>10?(r(),n(p,{key:1,msg:"Only 10 number valid"})):a("",!0)]),i("div",G,[l(m,{label:"Company name"}),l(f,{placeholder:"Enter Company name",id:"Company name",value:t.companyName,onInput:e[4]||(e[4]=s=>t.companyName=s.target.value)},null,8,["value"]),!t.companyName&&t.formSubmitted?(r(),n(p,{key:0,msg:""})):a("",!0)]),i("div",H,[l(m,{label:"Company phone no."}),l(f,{placeholder:"Enter Company phone no.",id:"Company phone no.",value:t.companyPhoneNo,onInput:e[5]||(e[5]=s=>t.companyPhoneNo=s.target.value),type:"number"},null,8,["value"]),!t.companyPhoneNo&&t.formSubmitted?(r(),n(p,{key:0,msg:""})):a("",!0),t.companyPhoneNo&&t.companyPhoneNo.length>10?(r(),n(p,{key:1,msg:"Only 10 numbers valid"})):a("",!0)]),i("div",K,[l(m,{label:"Company Address"}),l(v,{placeholder:"Enter Company Address",id:"Company Address",value:t.companyAddress,onInput:e[6]||(e[6]=s=>t.companyAddress=s.target.value),type:"number"},null,8,["value"]),!t.companyAddress&&t.formSubmitted?(r(),n(p,{key:0,msg:""})):a("",!0)])]),i("div",Q,[i("div",X,[this.selectedImg?(r(),u("img",{key:0,src:this.selectedImg},null,8,Y)):a("",!0),this.profilePic?(r(),u("img",{key:1,src:this.profilePic},null,8,Z)):a("",!0),!this.selectedImg&&!this.profilePic?(r(),u("img",$)):a("",!0),i("div",ee,[te,i("input",{type:"file",onChange:e[7]||(e[7]=(...s)=>d.selectedPic&&d.selectedPic(...s))},null,32)])])]),i("div",oe,[i("button",{class:y(["btn-regular",{"is-loading":t.profilesaveLoader}]),type:"submit",onClick:e[8]||(e[8]=(...s)=>d.profileDataUpdate&&d.profileDataUpdate(...s)),disabled:d.profileBtnDis},[t.profilenotsaved?(r(),u("span",ie,"Save")):a("",!0),t.profilesaved?(r(),u("span",re,[I(" Saved "),le])):a("",!0)],10,se)])]),_:1})]),_:1})]),_:1})}const Ne=R(O,[["render",ae],["__scopeId","data-v-619d82af"]]);export{Ne as default};