import{_ as S,u as D,f as g,g as b,r as p,o as a,h as c,w as v,b as i,a as o,i as m,n as y,c as f,p as k,k as F}from"./index-5d175349.js";import{L as C}from"./Layout-feaff5d7.js";import{C as R}from"./ContentSection2-cea15362.js";import{L as x}from"./Label-d788184e.js";import{I as V}from"./Input-d28165ea.js";import{E as w}from"./ErrorMessage-d5a29056.js";import{T as P}from"./TextArea-d58f5809.js";import{_ as M}from"./noimg-c49b4ac6.js";import{_ as T}from"./plus-3-0d8d5401.js";import"./OverLaye-142172c4.js";const N="https://devapi.billionbuild.com",B={components:{Layout:C,ContentSection:R,Label:x,Input:V,ErrorMessage:w,TextArea:P},data(){return{breadcrumbList:[{name:"Dashboard",link:"/"},{name:"Customers",link:"/customerlist"},{name:"Edit Customer"}],customerFirstName:"",customerLastName:"",customerEmail:"",customerNumber:"",profilePic:"",customerAddress:"",selectedImg:"",customerId:"",formSubmitted:!1,customerMiddleName:"",customerDob:"",customerNote:"",customerReference:"",attributes:[],cusRemindersArr:[],activeAcco:"0",showErrorOfImg:"",isvalidEmail:!0,isValidFirstName:!0,isValidLastName:!0,isValidNumber:!0,isValidAddress:!0}},created(){this.customerId=this.$route.params.id,this.customerData();const t=D(),e="Edit Customer |  Billion Build",l="this is description for Edit Customer";t.chnageTitle(e,l)},computed:{btnDisabled(){const t=/[!@#$%^&*()?":{}|<>]/;return!this.customerFirstName.trim()||!this.customerLastName.trim()||this.customerNumber.trim().length!==10||isNaN(this.customerNumber)||!this.isvalidEmail||!this.customerAddress.trim()||t.test(this.customerAddress)}},methods:{validateField(t){const e=/[!@#$%^&*()?":{}|<>]/;return t.trim()===""||!e.test(t)},validateEmail(){const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return this.customerEmail.trim()===""||t.test(this.customerEmail)?(this.isvalidEmail=!0,!0):(this.isvalidEmail=!1,!1)},validatePhoneNumber(){return this.customerNumber.trim()===""||this.customerNumber.length===10&&/^\d+$/.test(this.customerNumber)?(this.isValidNumber=!0,!0):(this.isValidNumber=!1,!1)},selectedPic(t){const e=t.target.files[0];e.type==="image/png"||e.type==="image/jpeg"||e.type==="image/gif"||e.type==="image/svg"||e.type==="image/jpg"?(this.profilePic=e,this.selectedImg=URL.createObjectURL(e),this.activeAcco=1,this.showErrorOfImg=!1):this.showErrorOfImg=!0},async customerData(){var t=new FormData;t.append("cus_id",this.customerId);try{const e=await g.post(`${N}/customer-list`,t);this.customerFirstName=e.data.cus_first_name,this.customerLastName=e.data.cus_last_name,this.customerEmail=e.data.cus_email,this.customerNumber=e.data.cus_phone_no,this.customerAddress=e.data.cus_address,this.customerMiddleName=e.data.cus_middle_name,this.customerDob=e.data.cus_dob,this.customerNote=e.data.cus_notes,this.customerReference=e.data.cus_ref,this.profilePic=e.data.cus_profile,this.cusRemindersArr=e.data.cus_reminders,this.cusRemindersArr.length!==0&&this.cusRemindersArr.forEach((l,_)=>{this.attributes.push({content:"blue",highlight:!0,dot:!0,bar:!1,popover:{title:`Reminder ${_+1}`,label:l.rem_notes},dates:new Date(l.rem_date),order:_,time:new Date(l.rem_date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})})}catch(e){b().error(e)}},dateTimeFormatter(t){const e={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(t).toLocaleString([],e)},onOptionSelected(t){this.selectedRole=t.role_name,this.selectedRoleId=t.role_id},async addcustomer(){var t=new FormData;t.append("cus_id",this.customerId),t.append("cus_first_name",this.customerFirstName),t.append("cus_last_name",this.customerLastName),t.append("cus_email",this.customerEmail),t.append("cus_phone_no",this.customerNumber),this.selectedImg&&t.append("cus_profile",this.profilePic),t.append("cus_profile",""),t.append("cus_address",this.customerAddress),t.append("cus_middle_name",this.customerMiddleName),t.append("cus_dob",this.customerDob),t.append("cus_notes",this.customerNote),t.append("cus_ref",this.customerReference);try{const e=await g.post(`${N}/add-or-edit-customer`,t);e.success===1?this.$router.push({name:"CustomerList"}):b().error(e.message)}catch(e){b().error(e)}},async addReminder(){var t=new FormData;t.append("rem_id",""),t.append("rem_self",""),t.append("cus_id",this.customerId),t.append("rem_notes",this.remNote);const e=this.formattedDate;t.append("rem_date",e);try{(await g.post(`${N}/add-reminder`,t)).success===1&&(this.customerData(),this.reminderModal=!1,this.itemId="")}catch(l){b().error(l)}},toggleAccordion(t){this.activeAcco===t?this.activeAcco=null:this.activeAcco=t}}},O=t=>(k("data-v-0da117bb"),t=t(),F(),t),U={class:"row"},q={class:"col-8"},j={class:"address-form"},z={class:"space-y-8px"},W={class:"space-y-8px"},G={class:"space-y-8px"},H={class:"space-y-8px"},J={class:"space-y-8px"},K={class:"space-y-8px"},Q={class:"space-y-8px"},X={class:"space-y-8px col-span-2"},Y={class:"space-y-8px col-span-2"},Z=["disabled"],$={class:"col-2"},ee={class:"user_pic"},te=["src"],se=["src"],re={key:2,src:M,class:"pic"},ie={class:"add_pic",for:"customer-pic"},oe=O(()=>o("img",{src:T},null,-1)),ae={key:0,class:"mt-4"};function me(t,e,l,_,s,h){const n=p("Label"),d=p("Input"),u=p("ErrorMessage"),E=p("TextArea"),I=p("VDatePicker"),A=p("ContentSection"),L=p("Layout");return a(),c(L,{breadcrumb:s.breadcrumbList},{default:v(()=>[i(A,{title:"Edit Customer"},{default:v(()=>[o("div",U,[o("div",q,[o("div",j,[o("div",z,[i(n,{label:"First Name",required:""}),i(d,{placeholder:"Enter customer First Name",id:"First Name",value:s.customerFirstName,onInput:e[0]||(e[0]=r=>{s.customerFirstName=r.target.value,s.isValidFirstName=this.validateField(this.customerFirstName)})},null,8,["value"]),s.isValidFirstName?m("",!0):(a(),c(u,{key:0,msg:"First name cannot contain special characters"})),!s.customerFirstName&&s.formSubmitted?(a(),c(u,{key:1,msg:""})):m("",!0)]),o("div",W,[i(n,{label:"Middle Name (optional)"}),i(d,{placeholder:"Enter customer Middle Name",id:"Middle Name (optional)",value:s.customerMiddleName,onInput:e[1]||(e[1]=r=>s.customerMiddleName=r.target.value)},null,8,["value"])]),o("div",G,[i(n,{label:"Last Name",required:""}),i(d,{placeholder:"Enter customer Last Name",id:"Last Name",value:s.customerLastName,onInput:e[2]||(e[2]=r=>{s.customerLastName=r.target.value,s.isValidLastName=this.validateField(this.customerLastName)})},null,8,["value"]),s.isValidLastName?m("",!0):(a(),c(u,{key:0,msg:"Last name cannot contain special characters"})),!s.customerLastName&&s.formSubmitted?(a(),c(u,{key:1,msg:""})):m("",!0)]),o("div",H,[i(n,{label:"Email (optional)"}),i(d,{placeholder:"Enter customer Email",id:"Email (optional)",value:s.customerEmail,onInput:e[3]||(e[3]=r=>{s.customerEmail=r.target.value,s.isvalidEmail=h.validateEmail()}),class:y({input_error:!s.isvalidEmail})},null,8,["value","class"]),s.isvalidEmail?m("",!0):(a(),c(u,{key:0,msg:"Invalid email"})),!s.customerEmail&&s.formSubmitted?(a(),c(u,{key:1,msg:""})):m("",!0)]),o("div",J,[i(n,{label:"Phone No.",required:""}),i(d,{placeholder:"Enter customer Number",id:"Phone No.",value:s.customerNumber,onInput:e[4]||(e[4]=r=>s.customerNumber=r.target.value),type:"text",class:y({input_error:s.customerNumber.length>10})},null,8,["value","class"]),!s.customerNumber&&s.formSubmitted?(a(),c(u,{key:0,msg:""})):m("",!0),s.customerNumber&&isNaN(s.customerNumber)?(a(),c(u,{key:1,msg:"Enter only number"})):m("",!0),s.customerNumber&&s.customerNumber.length>10?(a(),c(u,{key:2,msg:"Only 10 numbers valid"})):m("",!0)]),o("div",K,[i(n,{label:"Date Of Birth (optional)"}),i(d,{id:"Date Of Birth (optional)",value:s.customerDob,onInput:e[5]||(e[5]=r=>s.customerDob=r.target.value),type:"date"},null,8,["value"])]),o("div",Q,[i(n,{label:"Reference (optional)"}),i(d,{id:"Reference (optional)",placeholder:"Enter customer Reference",value:s.customerReference,onInput:e[6]||(e[6]=r=>s.customerReference=r.target.value),type:"text"},null,8,["value"])]),o("div",X,[i(n,{label:"Address",required:""}),i(d,{id:"Address",placeholder:"Enter customer Address",value:s.customerAddress,onInput:e[7]||(e[7]=r=>{s.customerAddress=r.target.value,s.isValidAddress=this.validateField(this.customerAddress)}),type:"text"},null,8,["value"]),s.isValidAddress?m("",!0):(a(),c(u,{key:0,msg:"Address cannot contain special characters"})),!s.customerAddress&&s.formSubmitted?(a(),c(u,{key:1,msg:""})):m("",!0)]),o("div",Y,[i(n,{label:"Note (optional)"}),i(E,{placeholder:"Enter customer Note",id:"Note (optional)",value:s.customerNote,onInput:e[8]||(e[8]=r=>s.customerNote=r.target.value)},null,8,["value"])]),o("button",{type:"submit",class:"btn-regular margin-top_8px",disabled:h.btnDisabled,onClick:e[9]||(e[9]=r=>h.addcustomer())},"Update",8,Z)])]),o("div",$,[o("div",ee,[this.selectedImg?(a(),f("img",{key:0,src:this.selectedImg,class:"pic"},null,8,te)):m("",!0),this.profilePic?(a(),f("img",{key:1,src:this.profilePic,class:"pic"},null,8,se)):m("",!0),!this.selectedImg&&!this.profilePic?(a(),f("img",re)):m("",!0),o("label",ie,[o("input",{type:"file",id:"customer-pic",onChange:e[10]||(e[10]=(...r)=>h.selectedPic&&h.selectedPic(...r))},null,32),oe])]),this.cusRemindersArr.length!==0?(a(),f("div",ae,[i(I,{modelValue:t.remDate,"onUpdate:modelValue":e[11]||(e[11]=r=>t.remDate=r),color:"sky-blue",attributes:s.attributes,mode:"dateTime",onChange:t.highlightSelectedDate,formatter:h.dateTimeFormatter,expanded:""},null,8,["modelValue","attributes","onChange","formatter"])])):m("",!0)])])]),_:1})]),_:1},8,["breadcrumb"])}const ge=S(B,[["render",me],["__scopeId","data-v-0da117bb"]]);export{ge as default};
