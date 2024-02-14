import{F as h,a as g,b as v}from"./vee-validate.esm-cbc5801a.js";import{E as b}from"./ErrorMessage-d5a29056.js";import{_ as f,r as i,o as r,c as E,a as s,b as c,w as x,h as n,i as m,p as y,k as w}from"./index-5d175349.js";const F="https://devapi.billionbuild.com",S={components:{ErrorMessage:b,Field:h,Form:g},data(){return{email:"",isvalidEmail:!0,fromSubmited:!0,errorMsg:"",errorMsgShow:!1}},computed:{loginBtn(){return!this.email.trim()||!this.isvalidEmail}},methods:{validateEmail(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return this.isvalidEmail=e.test(this.email),this.isvalidEmail},async sendOTP(){try{const e=new FormData;e.append("email",this.email);const o=await v.post(`${F}/forgot-pass`,e);o.data.success===0?(this.errorMsgShow=!0,this.errorMsg=o.data.message):this.$router.push({name:"Login"})}catch(e){console.error(e)}}}},d=e=>(y("data-v-a85976da"),e=e(),w(),e),M={class:"auth-page auth-page_center"},k={class:"auth-container"},B={class:"auth-from-section"},V=d(()=>s("div",{class:"space-y-4px auth-title"},[s("h1",{class:"color-Grey_90 text-2xl_semibold"},"Forget Password"),s("h6",{class:"color-Grey_50 text-base_regular"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis commodi, beatae dolorem repellat reiciendis accusantium ut.")],-1)),I={class:"input-group"},C=d(()=>s("label",{for:"email"},"Email",-1)),N={class:"space-y-8px"},P=["disabled"];function G(e,o,L,O,t,a){const p=i("Field"),l=i("ErrorMessage"),u=i("Form");return r(),E("div",M,[s("div",k,[s("div",B,[c(u,{onSubmit:a.sendOTP,class:"from space-y-24px"},{default:x(()=>[V,s("div",I,[C,c(p,{name:"email",rules:a.validateEmail,class:"input-1",type:"email",id:"email",placeholder:"Enter Email id",modelValue:t.email,"onUpdate:modelValue":o[0]||(o[0]=_=>t.email=_)},null,8,["rules","modelValue"]),!t.isvalidEmail&&t.fromSubmited&&t.email?(r(),n(l,{key:0,msg:"Invalid email"})):m("",!0),t.errorMsg?(r(),n(l,{key:1,msg:t.errorMsg},null,8,["msg"])):m("",!0)]),s("div",N,[s("button",{type:"submit",class:"btn-regular btn-w-full",disabled:a.loginBtn}," Set Email ",8,P)])]),_:1},8,["onSubmit"])])])])}const Q=f(S,[["render",G],["__scopeId","data-v-a85976da"]]);export{Q as default};
