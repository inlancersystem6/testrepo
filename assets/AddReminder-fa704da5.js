import{u as D,h as S,i as y,r,o as m,c as p,w as u,j as n,a as l,f as N}from"./index-38024ad5.js";import{L as $}from"./Layout-200f36b8.js";import{C as v}from"./ContentSection2-f1f538fa.js";import{L as x}from"./Label-dfa7b7c9.js";import{I as C}from"./Input-13b1a54a.js";import{E as w}from"./ErrorMessage-8c215241.js";import{T as L}from"./TextArea-abd90eb3.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./OverLaye-d6a130a2.js";const A="https://devapi.billionbuild.com",T={components:{Layout:$,ContentSection:v,Label:x,Input:C,ErrorMessage:w,TextArea:L},data(){return{remNote:"",customerId:"",remDate:"",attributes:[]}},created(){const e=D(),t="Follow Up |  Billion Build",s="this is description for Follow Up";e.chnageTitle(t,s),this.customerId=this.$route.params.reminderId},computed:{formattedDate(){const e=new Date(this.remDate),t=e.getFullYear(),s=`0${e.getMonth()+1}`.slice(-2),c=`0${e.getDate()}`.slice(-2),o=`0${e.getHours()}`.slice(-2),a=`0${e.getMinutes()}`.slice(-2),i=`0${e.getSeconds()}`.slice(-2);return`${t}-${s}-${c} ${o}:${a}:${i}`},btnDisabled(){const e=/[!@#$%^&*()?":{}|<>]/;return!this.remDate||!this.remNote.trim()||e.test(this.remNote)}},methods:{highlightSelectedDate(){this.attributes=[],this.attributes.push({content:"black",highlight:!0,dot:!0,bar:!0,popover:{title:"Selected Date",body:"This is the selected date"},dates:new Date(this.remDate),order:0})},async addReminder(){var e=new FormData;e.append("rem_id",""),e.append("rem_self",""),e.append("cus_id",this.customerId),e.append("rem_notes",this.remNote);const t=this.formattedDate;e.append("rem_date",t);try{(await S.post(`${A}/add-reminder`,e)).success===1&&this.$router.push({name:"ReminderList"})}catch(s){y().error(s)}}}},V={class:"grid grid-cols-3 gap-20"},I={class:"space-y-8px col-span-1"},F={class:"space-y-8px col-span-2"},R=["disabled"];function U(e,t,s,c,o,a){const i=r("Label"),h=r("VDatePicker"),_=r("ErrorMessage"),b=r("TextArea"),g=r("ContentSection"),f=r("Layout");return m(),p(f,null,{default:u(()=>[n(g,{title:"Add Follow Up"},{default:u(()=>[l("div",V,[l("div",I,[n(i,{label:"Select Date"}),n(h,{modelValue:o.remDate,"onUpdate:modelValue":t[0]||(t[0]=d=>o.remDate=d),color:"sky-blue",attributes:o.attributes,mode:"dateTime",onChange:a.highlightSelectedDate,expanded:""},null,8,["modelValue","attributes","onChange"]),!o.remDate&&e.formSubmitted?(m(),p(_,{key:0,msg:""})):N("",!0)]),l("div",F,[n(i,{label:"Note (optional)"}),n(b,{placeholder:"Enter Reminder Note",id:"Note (optional)",value:o.remNote,onInput:t[1]||(t[1]=d=>o.remNote=d.target.value)},null,8,["value"])])]),l("button",{type:"submit",class:"btn-regular margin-top_8px",disabled:a.btnDisabled,onClick:t[2]||(t[2]=d=>a.addReminder())},"Add Follow Up",8,R)]),_:1})]),_:1})}const z=k(T,[["render",U]]);export{z as default};