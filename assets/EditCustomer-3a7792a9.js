import{u as D,h as v,i as f,r as p,o as m,c as n,w as N,j as o,a as i,f as l,n as y,d as g,p as L,g as R}from"./index-38024ad5.js";import{L as C}from"./Layout-200f36b8.js";import{C as x}from"./ContentSection2-f1f538fa.js";import{L as k}from"./Label-dfa7b7c9.js";import{I as w}from"./Input-13b1a54a.js";import{E as F}from"./ErrorMessage-8c215241.js";import{T as P}from"./TextArea-abd90eb3.js";import{_ as M}from"./noimg-c49b4ac6.js";import{_ as T}from"./plus-3-0d8d5401.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./OverLaye-d6a130a2.js";const b="https://devapi.billionbuild.com",O={components:{Layout:C,ContentSection:x,Label:k,Input:w,ErrorMessage:F,TextArea:P},data(){return{customerFirstName:"",customerLastName:"",customerEmail:"",customerNumber:"",profilePic:"",customerAddress:"",selectedImg:"",customerId:"",formSubmitted:!1,isvalidEmail:!0,customerMiddleName:"",customerDob:"",customerNote:"",customerReference:"",attributes:[],cusRemindersArr:[],activeAcco:"0",showErrorOfImg:""}},created(){this.customerId=this.$route.params.id,this.customerData();const t=D(),e="Edit Customer |  Billion Build",a="this is description for Edit Customer";t.chnageTitle(e,a)},computed:{btnDisabled(){const t=/[!@#$%^&*()?":{}|<>]/;return!this.customerFirstName.trim()||!this.customerLastName.trim()||this.customerNumber.trim().length!==10||!this.isvalidEmail||!this.customerAddress.trim()||t.test(this.customerAddress)}},methods:{validateEmail(){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return this.customerEmail.trim()===""||t.test(this.customerEmail)?(this.isvalidEmail=!0,!0):(this.isvalidEmail=!1,!1)},selectedPic(t){const e=t.target.files[0];e.type==="image/png"||e.type==="image/jpeg"||e.type==="image/gif"||e.type==="image/svg"||e.type==="image/jpg"?(this.profilePic=e,this.selectedImg=URL.createObjectURL(e),this.activeAcco=1,this.showErrorOfImg=!1):this.showErrorOfImg=!0},async customerData(){var t=new FormData;t.append("cus_id",this.customerId);try{const e=await v.post(`${b}/customer-list`,t);this.customerFirstName=e.data.cus_first_name,this.customerLastName=e.data.cus_last_name,this.customerEmail=e.data.cus_email,this.customerNumber=e.data.cus_phone_no,this.customerAddress=e.data.cus_address,this.customerMiddleName=e.data.cus_middle_name,this.customerDob=e.data.cus_dob,this.customerNote=e.data.cus_notes,this.customerReference=e.data.cus_ref,this.profilePic=e.data.cus_profile,this.cusRemindersArr=e.data.cus_reminders,this.cusRemindersArr.length!==0&&this.cusRemindersArr.forEach((a,_)=>{this.attributes.push({content:"blue",highlight:!0,dot:!0,bar:!1,popover:{title:`Reminder ${_+1}`,label:a.rem_notes},dates:new Date(a.rem_date),order:_,time:new Date(a.rem_date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})})}catch(e){f().error(e)}},dateTimeFormatter(t){const e={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(t).toLocaleString([],e)},onOptionSelected(t){this.selectedRole=t.role_name,this.selectedRoleId=t.role_id},async addcustomer(){var t=new FormData;t.append("cus_id",this.customerId),t.append("cus_first_name",this.customerFirstName),t.append("cus_last_name",this.customerLastName),t.append("cus_email",this.customerEmail),t.append("cus_phone_no",this.customerNumber),this.selectedImg&&t.append("cus_profile",this.profilePic),t.append("cus_profile",""),t.append("cus_address",this.customerAddress),t.append("cus_middle_name",this.customerMiddleName),t.append("cus_dob",this.customerDob),t.append("cus_notes",this.customerNote),t.append("cus_ref",this.customerReference);try{const e=await v.post(`${b}/add-or-edit-customer`,t);e.success===1?this.$router.push({name:"CustomerList"}):f().error(e.message)}catch(e){f().error(e)}},async addReminder(){var t=new FormData;t.append("rem_id",""),t.append("rem_self",""),t.append("cus_id",this.customerId),t.append("rem_notes",this.remNote);const e=this.formattedDate;t.append("rem_date",e);try{(await v.post(`${b}/add-reminder`,t)).success===1&&(this.customerData(),this.reminderModal=!1,this.itemId="")}catch(a){f().error(a)}},toggleAccordion(t){this.activeAcco===t?this.activeAcco=null:this.activeAcco=t}}},V=t=>(L("data-v-b980c61b"),t=t(),R(),t),j={class:"row"},U={class:"col-8"},z={class:"address-form"},W={class:"space-y-8px"},q={class:"space-y-8px"},G={class:"space-y-8px"},H={class:"space-y-8px"},J={class:"space-y-8px"},K={class:"space-y-8px"},Q={class:"space-y-8px"},X={class:"space-y-8px col-span-2"},Y={class:"space-y-8px col-span-2"},Z=["disabled"],$={class:"col-2"},ee={class:"user_pic"},te=["src"],se=["src"],re={key:2,src:M,class:"pic"},oe={class:"add_pic",for:"customer-pic"},ie=V(()=>i("img",{src:T},null,-1)),ae={key:0,class:"mt-4"};function me(t,e,a,_,s,h){const c=p("Label"),u=p("Input"),d=p("ErrorMessage"),E=p("TextArea"),I=p("VDatePicker"),S=p("ContentSection"),A=p("Layout");return m(),n(A,null,{default:N(()=>[o(S,{title:"Edit Customer"},{default:N(()=>[i("div",j,[i("div",U,[i("div",z,[i("div",W,[o(c,{label:"First Name"}),o(u,{placeholder:"Enter customer First Name",id:"First Name",value:s.customerFirstName,onInput:e[0]||(e[0]=r=>s.customerFirstName=r.target.value)},null,8,["value"]),!s.customerFirstName&&s.formSubmitted?(m(),n(d,{key:0,msg:""})):l("",!0)]),i("div",q,[o(c,{label:"Middle Name (optional)"}),o(u,{placeholder:"Enter customer Middle Name",id:"Middle Name (optional)",value:s.customerMiddleName,onInput:e[1]||(e[1]=r=>s.customerMiddleName=r.target.value)},null,8,["value"])]),i("div",G,[o(c,{label:"Last Name"}),o(u,{placeholder:"Enter customer Last Name",id:"Last Name",value:s.customerLastName,onInput:e[2]||(e[2]=r=>s.customerLastName=r.target.value)},null,8,["value"]),!s.customerLastName&&s.formSubmitted?(m(),n(d,{key:0,msg:""})):l("",!0)]),i("div",H,[o(c,{label:"Email (optional)"}),o(u,{placeholder:"Enter customer Email",id:"Email (optional)",value:s.customerEmail,onInput:e[3]||(e[3]=r=>{s.customerEmail=r.target.value,s.isvalidEmail=h.validateEmail()}),class:y({input_error:!s.isvalidEmail})},null,8,["value","class"]),s.isvalidEmail?l("",!0):(m(),n(d,{key:0,msg:"Invalid email"})),!s.customerEmail&&s.formSubmitted?(m(),n(d,{key:1,msg:""})):l("",!0)]),i("div",J,[o(c,{label:"Phone No."}),o(u,{placeholder:"Enter customer Number",id:"Phone No.",value:s.customerNumber,onInput:e[4]||(e[4]=r=>s.customerNumber=r.target.value),type:"number",class:y({input_error:s.customerNumber.length>10})},null,8,["value","class"]),!s.customerNumber&&s.formSubmitted?(m(),n(d,{key:0,msg:""})):l("",!0),s.customerNumber.length>10?(m(),n(d,{key:1,msg:"Only 10 number valid"})):l("",!0)]),i("div",K,[o(c,{label:"Date Of Birth (optional)"}),o(u,{id:"Date Of Birth (optional)",value:s.customerDob,onInput:e[5]||(e[5]=r=>s.customerDob=r.target.value),type:"date"},null,8,["value"])]),i("div",Q,[o(c,{label:"Reference (optional)"}),o(u,{id:"Reference (optional)",placeholder:"Enter customer Reference",value:s.customerReference,onInput:e[6]||(e[6]=r=>s.customerReference=r.target.value),type:"text"},null,8,["value"])]),i("div",X,[o(c,{label:"Address"}),o(u,{id:"Address",placeholder:"Enter customer Address",value:s.customerAddress,onInput:e[7]||(e[7]=r=>s.customerAddress=r.target.value),type:"text"},null,8,["value"]),!s.customerAddress&&s.formSubmitted?(m(),n(d,{key:0,msg:""})):l("",!0)]),i("div",Y,[o(c,{label:"Note (optional)"}),o(E,{placeholder:"Enter customer Note",id:"Note (optional)",value:s.customerNote,onInput:e[8]||(e[8]=r=>s.customerNote=r.target.value)},null,8,["value"])]),i("button",{type:"submit",class:"btn-regular margin-top_8px",disabled:h.btnDisabled,onClick:e[9]||(e[9]=r=>h.addcustomer())},"Save Changes",8,Z)])]),i("div",$,[i("div",ee,[this.selectedImg?(m(),g("img",{key:0,src:this.selectedImg,class:"pic"},null,8,te)):l("",!0),this.profilePic?(m(),g("img",{key:1,src:this.profilePic,class:"pic"},null,8,se)):l("",!0),!this.selectedImg&&!this.profilePic?(m(),g("img",re)):l("",!0),i("label",oe,[i("input",{type:"file",id:"customer-pic",onChange:e[10]||(e[10]=(...r)=>h.selectedPic&&h.selectedPic(...r))},null,32),ie])]),this.cusRemindersArr.length!==0?(m(),g("div",ae,[o(I,{modelValue:t.remDate,"onUpdate:modelValue":e[11]||(e[11]=r=>t.remDate=r),color:"sky-blue",attributes:s.attributes,mode:"dateTime",onChange:t.highlightSelectedDate,formatter:h.dateTimeFormatter,expanded:""},null,8,["modelValue","attributes","onChange","formatter"])])):l("",!0)])])]),_:1})]),_:1})}const be=B(O,[["render",me],["__scopeId","data-v-b980c61b"]]);export{be as default};
