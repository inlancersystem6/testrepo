import{_ as D,u as S,f as y,g as v,r,o as m,h as p,w as u,b as n,a as l,i as N}from"./index-5d175349.js";import{L as $}from"./Layout-feaff5d7.js";import{C as x}from"./ContentSection2-cea15362.js";import{L as C}from"./Label-d788184e.js";import{I as w}from"./Input-d28165ea.js";import{E as L}from"./ErrorMessage-d5a29056.js";import{T as k}from"./TextArea-d58f5809.js";import"./OverLaye-142172c4.js";const T="https://devapi.billionbuild.com",V={components:{Layout:$,ContentSection:x,Label:C,Input:w,ErrorMessage:L,TextArea:k},data(){return{remNote:"",customerId:"",remDate:"",attributes:[]}},created(){const e=S(),t="Follow Up |  Billion Build",s="this is description for Follow Up";e.chnageTitle(t,s),this.customerId=this.$route.params.reminderId},computed:{formattedDate(){const e=new Date(this.remDate),t=e.getFullYear(),s=`0${e.getMonth()+1}`.slice(-2),c=`0${e.getDate()}`.slice(-2),o=`0${e.getHours()}`.slice(-2),a=`0${e.getMinutes()}`.slice(-2),i=`0${e.getSeconds()}`.slice(-2);return`${t}-${s}-${c} ${o}:${a}:${i}`},btnDisabled(){const e=/[!@#$%^&*()?":{}|<>]/;return!this.remDate||!this.remNote.trim()||e.test(this.remNote)}},methods:{highlightSelectedDate(){this.attributes=[],this.attributes.push({content:"black",highlight:!0,dot:!0,bar:!0,popover:{title:"Selected Date",body:"This is the selected date"},dates:new Date(this.remDate),order:0})},async addReminder(){var e=new FormData;e.append("rem_id",""),e.append("rem_self",""),e.append("cus_id",this.customerId),e.append("rem_notes",this.remNote);const t=this.formattedDate;e.append("rem_date",t);try{(await y.post(`${T}/add-reminder`,e)).success===1&&this.$router.push({name:"ReminderList"})}catch(s){v().error(s)}}}},A={class:"grid grid-cols-3 gap-20"},I={class:"space-y-8px col-span-1"},R={class:"space-y-8px col-span-2"},B=["disabled"];function E(e,t,s,c,o,a){const i=r("Label"),h=r("VDatePicker"),_=r("ErrorMessage"),b=r("TextArea"),g=r("ContentSection"),f=r("Layout");return m(),p(f,null,{default:u(()=>[n(g,{title:"Add Follow Up"},{default:u(()=>[l("div",A,[l("div",I,[n(i,{label:"Select Date"}),n(h,{modelValue:o.remDate,"onUpdate:modelValue":t[0]||(t[0]=d=>o.remDate=d),color:"sky-blue",attributes:o.attributes,mode:"dateTime",onChange:a.highlightSelectedDate,expanded:""},null,8,["modelValue","attributes","onChange"]),!o.remDate&&e.formSubmitted?(m(),p(_,{key:0,msg:""})):N("",!0)]),l("div",R,[n(i,{label:"Note (optional)"}),n(b,{placeholder:"Enter Reminder Note",id:"Note (optional)",value:o.remNote,onInput:t[1]||(t[1]=d=>o.remNote=d.target.value)},null,8,["value"])])]),l("button",{type:"submit",class:"btn-regular margin-top_8px",disabled:a.btnDisabled,onClick:t[2]||(t[2]=d=>a.addReminder())},"Save",8,B)]),_:1})]),_:1})}const q=D(V,[["render",E]]);export{q as default};
