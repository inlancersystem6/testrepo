import{u as N,h as m,i as p,r as s,o as u,c as h,w as _,j as n,a as l,f as v}from"./index-38024ad5.js";import{L as w}from"./Layout-200f36b8.js";import{C as $}from"./ContentSection2-f1f538fa.js";import{L as x}from"./Label-dfa7b7c9.js";import{I as C}from"./Input-13b1a54a.js";import{E as k}from"./ErrorMessage-8c215241.js";import{T as I}from"./TextArea-abd90eb3.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./OverLaye-d6a130a2.js";const b="https://devapi.billionbuild.com",T={components:{Layout:w,ContentSection:$,Label:x,Input:C,ErrorMessage:k,TextArea:I},data(){return{remNote:"",customerId:"",remDate:"",attributes:[]}},created(){const e=N(),t="Follow Up |  Billion Build",o="this is description for Follow Up";e.chnageTitle(t,o),this.customerId=this.$route.params.reminderId,this.reminderData()},computed:{formattedDate(){const e=new Date(this.remDate),t=e.getFullYear(),o=`0${e.getMonth()+1}`.slice(-2),c=`0${e.getDate()}`.slice(-2),r=`0${e.getHours()}`.slice(-2),a=`0${e.getMinutes()}`.slice(-2),i=`0${e.getSeconds()}`.slice(-2);return`${t}-${o}-${c} ${r}:${a}:${i}`},btnDisabled(){const e=/[!@#$%^&*()?":{}|<>]/;return!this.remDate||!this.remNote.trim()||e.test(this.remNote)}},methods:{highlightSelectedDate(){this.attributes=[],this.attributes.push({content:"black",highlight:!0,dot:!0,bar:!0,popover:{title:"Selected Date",body:"This is the selected date"},dates:new Date(this.remDate),order:0})},async reminderData(){var e=new FormData;e.append("rem_id",this.customerId),e.append("sort",this.sort),e.append("page_no",this.currentPage);try{const t=await m.post(`${b}/reminder-list`,e);this.totalPages=t.total_pages,t.success===1&&(this.remNote=t.data.rem_notes,this.remDate=t.data.rem_date,this.attributes={content:"black",highlight:!0,dot:!0,bar:!0,popover:{title:"Selected Date",label:this.remNote},dates:new Date(this.remDate),order:0})}catch(t){p().error(t)}},async addReminder(){var e=new FormData;e.append("rem_id",this.customerId),e.append("rem_self",""),e.append("cus_id",this.customerId),e.append("rem_notes",this.remNote);const t=this.formattedDate;e.append("rem_date",t);try{(await m.post(`${b}/add-reminder`,e)).success===1&&this.$router.push({name:"ReminderList"})}catch(o){p().error(o)}}}},V={class:"grid grid-cols-3 gap-20"},E={class:"space-y-8px col-span-1"},F={class:"space-y-8px col-span-2"},A=["disabled"];function R(e,t,o,c,r,a){const i=s("Label"),g=s("VDatePicker"),D=s("ErrorMessage"),f=s("TextArea"),S=s("ContentSection"),y=s("Layout");return u(),h(y,null,{default:_(()=>[n(S,{title:"Edit Follow Up"},{default:_(()=>[l("div",V,[l("div",E,[n(i,{label:"Select Date"}),n(g,{modelValue:r.remDate,"onUpdate:modelValue":t[0]||(t[0]=d=>r.remDate=d),color:"sky-blue",attributes:r.attributes,mode:"dateTime",onChange:a.highlightSelectedDate,expanded:""},null,8,["modelValue","attributes","onChange"]),!r.remDate&&e.formSubmitted?(u(),h(D,{key:0,msg:""})):v("",!0)]),l("div",F,[n(i,{label:"Note (optional)"}),n(f,{placeholder:"Enter Reminder Note",id:"Note (optional)",value:r.remNote,onInput:t[1]||(t[1]=d=>r.remNote=d.target.value)},null,8,["value"])])]),l("button",{type:"submit",class:"btn-regular margin-top_8px",disabled:a.btnDisabled,onClick:t[2]||(t[2]=d=>a.addReminder())},"Add Follow Up",8,A)]),_:1})]),_:1})}const z=L(T,[["render",R]]);export{z as default};
