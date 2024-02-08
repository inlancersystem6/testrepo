import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{r as C,o as h,d as k,a as e,j as d,w as a,n as u,F as f,p as b,g as M,t as g,f as _,u as S,i as A,h as x,q as y,k as V,m as H,b as w,c as B,l as $,y as I}from"./index-38024ad5.js";import{O as P}from"./OverLaye-d6a130a2.js";const R="/billionbuild.svg",j="/assets/burger-menu-a3fa41ae.svg",F="/assets/close-icon-0efa80cf.svg",O="/icon.svg",D="/assets/chevron-right-584b3b23.svg";const Z={computed:{ishomeCrudActive(){return this.$route.matched.some(t=>t.path==="/")},isprojectCrudActive(){return this.$route.matched.some(t=>t.path==="/project-list"||t.name==="Project")},iscustomerCrudActive(){return this.$route.matched.some(t=>t.path==="/customerlist"||t.name==="EditCustomer"||t.path==="/add-customer")},isInventoryCrudActive(){return this.$route.matched.some(t=>t.name==="InventeryList")},isReminderCrudActive(){return this.$route.matched.some(t=>t.name==="ReminderList"||t.name==="AddReminder"||t.name==="EditReminder")},isOperationCrudActive(){return this.$route.matched.some(t=>t.name==="OperationList")},isAmenitiesCrudActive(){return this.$route.matched.some(t=>t.name==="AmenitiesList")}},props:{responsiveSidebarActive:Boolean},data(){return{mainSidebarActive:!0,miniSidebarActive:!1}},created(){const t=localStorage.getItem("mainSidebarActive"),s=localStorage.getItem("miniSidebarActive");t!==null&&(this.mainSidebarActive=JSON.parse(t)),s!==null&&(this.miniSidebarActive=JSON.parse(s))},watch:{mainSidebarActive(t){localStorage.setItem("mainSidebarActive",t)},miniSidebarActive(t){localStorage.setItem("miniSidebarActive",t)}},methods:{toggleSidebar(){this.mainSidebarActive=!this.mainSidebarActive,this.miniSidebarActive=!this.miniSidebarActive},CloseMenuMini(){this.mainSidebarActive=!this.mainSidebarActive,this.miniSidebarActive=!this.miniSidebarActive},closeResponsiveMenu(){this.$emit("closeResponsiveMenu")}}},r=t=>(b("data-v-d78d1937"),t=t(),M(),t),T={class:"sidebar-content"},N={class:"sidebar-avatar-header margin-bottom_24px"},U=r(()=>e("img",{src:R,class:"w-[150px]"},null,-1)),E=r(()=>e("img",{src:j,class:"img-not-selected"},null,-1)),q=[E],z=r(()=>e("img",{src:F,class:"img-not-selected close-menu"},null,-1)),G=[z],J={class:"sidebar-main-content"},Y={class:"main-pages-list"},W={class:"list-items"},K=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M14.25 19.499V14.999C14.25 14.8001 14.171 14.6093 14.0303 14.4686C13.8897 14.328 13.6989 14.249 13.5 14.249H10.5C10.3011 14.249 10.1103 14.328 9.96967 14.4686C9.82902 14.6093 9.75 14.8001 9.75 14.999V19.499C9.75 19.6979 9.67098 19.8887 9.53033 20.0293C9.38968 20.17 9.19891 20.249 9 20.249H4.5C4.30109 20.249 4.11032 20.17 3.96967 20.0293C3.82902 19.8887 3.75 19.6979 3.75 19.499V10.8271C3.75168 10.7233 3.77411 10.6209 3.81597 10.5259C3.85783 10.4309 3.91828 10.3453 3.99375 10.274L11.4937 3.45836C11.632 3.33187 11.8126 3.26172 12 3.26172C12.1874 3.26172 12.368 3.33187 12.5062 3.45836L20.0062 10.274C20.0817 10.3453 20.1422 10.4309 20.184 10.5259C20.2259 10.6209 20.2483 10.7233 20.25 10.8271V19.499C20.25 19.6979 20.171 19.8887 20.0303 20.0293C19.8897 20.17 19.6989 20.249 19.5 20.249H15C14.8011 20.249 14.6103 20.17 14.4697 20.0293C14.329 19.8887 14.25 19.6979 14.25 19.499Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),e("p",{class:"link-title"},"Home")],-1)),Q={class:"list-items"},X=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z",stroke:"#6B7280","stroke-width":"1.5","stroke-miterlimit":"10"}),e("path",{d:"M14.5684 5.42813C14.9993 5.31124 15.4437 5.25136 15.8902 5.25C17.1832 5.25 18.4231 5.76361 19.3374 6.67785C20.2516 7.59209 20.7652 8.83207 20.7652 10.125C20.7652 11.4179 20.2516 12.6579 19.3374 13.5721C18.4231 14.4864 17.1832 15 15.8902 15",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M1.5 18.5066C2.2612 17.4234 3.27191 16.5393 4.44676 15.9289C5.6216 15.3186 6.92608 15 8.25 15C9.57392 15 10.8784 15.3186 12.0532 15.9289C13.2281 16.5393 14.2388 17.4234 15 18.5066",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M15.8906 15C17.2147 14.9992 18.5194 15.3174 19.6944 15.9277C20.8693 16.5381 21.8799 17.4225 22.6406 18.5063",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),e("p",{class:"link-title"},"Customer")],-1)),e1={class:"list-items"},t1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M12 12V3",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M19.7907 7.5L4.20947 16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),e("p",{class:"link-title"},"Inventory List")],-1)),s1={class:"list-items"},o1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M16.5 2.25V5.25",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M7.5 2.25V5.25",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M3.75 8.25H20.25",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M8.625 12H11.25L9.75 13.875C9.99686 13.8746 10.24 13.9351 10.4579 14.0512C10.6757 14.1672 10.8616 14.3353 10.999 14.5404C11.1363 14.7455 11.2209 14.9814 11.2453 15.2271C11.2696 15.4727 11.2329 15.7206 11.1385 15.9487C11.0441 16.1768 10.8949 16.378 10.704 16.5346C10.5132 16.6912 10.2866 16.7983 10.0445 16.8463C9.80236 16.8944 9.5521 16.8819 9.31593 16.81C9.07976 16.7382 8.86497 16.6091 8.69062 16.4344",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M13.5 13.125L15 12V16.875",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]),e("p",{class:"link-title"},"Follow Up List")],-1)),i1={class:"sidebar-content"},n1={class:"w-[25px]"},r1=r(()=>e("img",{src:O},null,-1)),l1=r(()=>e("img",{src:D},null,-1)),d1=[l1],a1={class:"sidebar-main-content"},c1={class:"main-pages-list"},u1={class:"list-items"},h1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M14.25 19.499V14.999C14.25 14.8001 14.171 14.6093 14.0303 14.4686C13.8897 14.328 13.6989 14.249 13.5 14.249H10.5C10.3011 14.249 10.1103 14.328 9.96967 14.4686C9.82902 14.6093 9.75 14.8001 9.75 14.999V19.499C9.75 19.6979 9.67098 19.8887 9.53033 20.0293C9.38968 20.17 9.19891 20.249 9 20.249H4.5C4.30109 20.249 4.11032 20.17 3.96967 20.0293C3.82902 19.8887 3.75 19.6979 3.75 19.499V10.8271C3.75168 10.7233 3.77411 10.6209 3.81597 10.5259C3.85783 10.4309 3.91828 10.3453 3.99375 10.274L11.4937 3.45836C11.632 3.33187 11.8126 3.26172 12 3.26172C12.1874 3.26172 12.368 3.33187 12.5062 3.45836L20.0062 10.274C20.0817 10.3453 20.1422 10.4309 20.184 10.5259C20.2259 10.6209 20.2483 10.7233 20.25 10.8271V19.499C20.25 19.6979 20.171 19.8887 20.0303 20.0293C19.8897 20.17 19.6989 20.249 19.5 20.249H15C14.8011 20.249 14.6103 20.17 14.4697 20.0293C14.329 19.8887 14.25 19.6979 14.25 19.499Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),k1={class:"list-items"},_1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z",stroke:"#6B7280","stroke-width":"1.5","stroke-miterlimit":"10"}),e("path",{d:"M14.5684 5.42813C14.9993 5.31124 15.4437 5.25136 15.8902 5.25C17.1832 5.25 18.4231 5.76361 19.3374 6.67785C20.2516 7.59209 20.7652 8.83207 20.7652 10.125C20.7652 11.4179 20.2516 12.6579 19.3374 13.5721C18.4231 14.4864 17.1832 15 15.8902 15",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M1.5 18.5066C2.2612 17.4234 3.27191 16.5393 4.44676 15.9289C5.6216 15.3186 6.92608 15 8.25 15C9.57392 15 10.8784 15.3186 12.0532 15.9289C13.2281 16.5393 14.2388 17.4234 15 18.5066",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M15.8906 15C17.2147 14.9992 18.5194 15.3174 19.6944 15.9277C20.8693 16.5381 21.8799 17.4225 22.6406 18.5063",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),C1={class:"list-items"},p1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M2.25 9H21.75L12 3L2.25 9Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M5.25 9V16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.75 9V16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.25 9V16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M18.75 9V16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M3 16.5H21",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M1.5 19.5H22.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),v1={class:"list-items"},m1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M12 12V3",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M19.7907 7.5L4.20947 16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),g1={class:"list-items"},w1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M16.5 2.25V5.25",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M7.5 2.25V5.25",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M3.75 8.25H20.25",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M8.625 12H11.25L9.75 13.875C9.99686 13.8746 10.24 13.9351 10.4579 14.0512C10.6757 14.1672 10.8616 14.3353 10.999 14.5404C11.1363 14.7455 11.2209 14.9814 11.2453 15.2271C11.2696 15.4727 11.2329 15.7206 11.1385 15.9487C11.0441 16.1768 10.8949 16.378 10.704 16.5346C10.5132 16.6912 10.2866 16.7983 10.0445 16.8463C9.80236 16.8944 9.5521 16.8819 9.31593 16.81C9.07976 16.7382 8.86497 16.6091 8.69062 16.4344",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M13.5 13.125L15 12V16.875",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),f1={class:"list-items"},b1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.34678 9.34531L5.63428 5.63281",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.6533 9.34531L18.3658 5.63281",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M14.6533 14.6523L18.3658 18.3648",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.34678 14.6523L5.63428 18.3648",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),M1={class:"list-items"},S1=r(()=>e("div",{class:"link-items"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M7.5 12.75H16.5",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M4.5 9V6.75C4.5 5.95435 4.81607 5.19129 5.37868 4.62868C5.94129 4.06607 6.70435 3.75 7.5 3.75H16.5C17.2956 3.75 18.0587 4.06607 18.6213 4.62868C19.1839 5.19129 19.5 5.95435 19.5 6.75V9",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M7.5 15.75V12C7.5 11.4067 7.32405 10.8266 6.99441 10.3333C6.66477 9.83994 6.19623 9.45543 5.64805 9.22836C5.09987 9.0013 4.49667 8.94189 3.91473 9.05765C3.33279 9.1734 2.79824 9.45912 2.37868 9.87868C1.95912 10.2982 1.6734 10.8328 1.55765 11.4147C1.44189 11.9967 1.5013 12.5999 1.72836 13.1481C1.95543 13.6962 2.33994 14.1648 2.83329 14.4944C3.32664 14.8241 3.90666 15 4.5 15V18.75C4.5 18.9489 4.57902 19.1397 4.71967 19.2803C4.86032 19.421 5.05109 19.5 5.25 19.5H18.75C18.9489 19.5 19.1397 19.421 19.2803 19.2803C19.421 19.1397 19.5 18.9489 19.5 18.75V15C20.0933 15 20.6734 14.8241 21.1667 14.4944C21.6601 14.1648 22.0446 13.6962 22.2716 13.1481C22.4987 12.5999 22.5581 11.9967 22.4424 11.4147C22.3266 10.8328 22.0409 10.2982 21.6213 9.87868C21.2018 9.45912 20.6672 9.1734 20.0853 9.05765C19.5033 8.94189 18.9001 9.0013 18.352 9.22836C17.8038 9.45543 17.3352 9.83994 17.0056 10.3333C16.6759 10.8266 16.5 11.4067 16.5 12V15.75",stroke:"#6B7280","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1));function B1(t,s,c,m,l,o){const i=C("router-link");return h(),k(f,null,[e("aside",{class:u(["main-sidebar",{"main-sidebar-deactive":l.miniSidebarActive===!0,"responsive-main-sidebar":c.responsiveSidebarActive===!0}])},[e("div",T,[e("div",N,[d(i,{to:"/"},{default:a(()=>[U]),_:1}),e("div",{class:"user-profile-btn",id:"Open_mini_sidebar",onClick:s[0]||(s[0]=n=>(l.miniSidebarActive=!0,l.mainSidebarActive=!1))},q),e("div",{class:"user-profile-btn",id:"Responsive_Close_sidebar",onClick:s[1]||(s[1]=(...n)=>o.closeResponsiveMenu&&o.closeResponsiveMenu(...n))},G)]),e("div",J,[e("ul",Y,[e("li",W,[d(i,{to:"/",class:"list-link","active-class":"link_active"},{default:a(()=>[K]),_:1})]),e("li",Q,[d(i,{to:"/customerlist",class:u(["list-link",{link_active:o.iscustomerCrudActive}])},{default:a(()=>[X]),_:1},8,["class"])]),e("li",e1,[d(i,{to:"/inventory-list",class:u(["list-link",{link_active:o.isInventoryCrudActive}])},{default:a(()=>[t1]),_:1},8,["class"])]),e("li",s1,[d(i,{to:"/reminder-list",class:u(["list-link",{link_active:o.isReminderCrudActive}])},{default:a(()=>[o1]),_:1},8,["class"])])])])])],2),e("aside",{class:u(["mini-main-sidebar",{"mini-main-sidebar-deactive":l.mainSidebarActive===!0}])},[e("div",i1,[e("div",n1,[d(i,{to:"/"},{default:a(()=>[r1]),_:1})]),e("div",{class:"openmainSidebar",onClick:s[2]||(s[2]=(...n)=>o.toggleSidebar&&o.toggleSidebar(...n))},d1),e("div",a1,[e("ul",c1,[e("li",u1,[d(i,{to:"/",class:"list-link","active-class":"link_active"},{default:a(()=>[h1]),_:1})]),e("li",k1,[d(i,{to:"/customerlist",class:u(["list-link",{link_active:o.iscustomerCrudActive}])},{default:a(()=>[_1]),_:1},8,["class"])]),e("li",C1,[d(i,{to:"/project-list",class:u(["list-link",{link_active:o.isprojectCrudActive}])},{default:a(()=>[p1]),_:1},8,["class"])]),e("li",v1,[d(i,{to:"/inventory-list",class:u(["list-link",{link_active:o.isInventoryCrudActive}])},{default:a(()=>[m1]),_:1},8,["class"])]),e("li",g1,[d(i,{to:"/reminder-list",class:u(["list-link",{link_active:o.isReminderCrudActive}])},{default:a(()=>[w1]),_:1},8,["class"])]),e("li",f1,[d(i,{to:"/operation-list",class:u(["list-link",{link_active:o.isOperationCrudActive}])},{default:a(()=>[b1]),_:1},8,["class"])]),e("li",M1,[d(i,{to:"/amenities-list",class:u(["list-link",{link_active:o.isAmenitiesCrudActive}])},{default:a(()=>[S1]),_:1},8,["class"])])])])])],2)],64)}const j1=v(Z,[["render",B1],["__scopeId","data-v-d78d1937"]]);const L1={props:{model_title:String,model_subtitle:String,model_content:String},methods:{closeModel(){this.$emit("close_model")},delectItem(){this.$emit("delete_item")}}},A1={class:"model center-align_model"},x1={class:"delete-model"},y1={class:"w-100 space-y-6px"},V1={class:"color-Grey_90 text-large_semibold"},H1={class:"text-base_regular color-Grey_50"},$1={class:"display-flex gap-8px"};function I1(t,s,c,m,l,o){return h(),k("div",A1,[e("div",x1,[e("div",y1,[e("h4",V1,g(c.model_title),1),e("p",H1,g(c.model_subtitle),1)]),e("div",$1,[e("button",{class:"btn-regular",onClick:s[0]||(s[0]=i=>o.closeModel())},"No, cancel"),c.model_content?(h(),k("button",{key:0,class:"btn-regular btn-danger",onClick:s[1]||(s[1]=i=>o.delectItem())},"Yes, "+g(c.model_content),1)):_("",!0),c.model_content?_("",!0):(h(),k("button",{key:1,class:"btn-regular btn-danger",onClick:s[2]||(s[2]=i=>o.delectItem())},"Yes, delete"))])])])}const P1=v(L1,[["render",I1],["__scopeId","data-v-854b5be1"]]),R1="/assets/arrow-left-79e7a12b.svg",F1="/assets/arrow-right-51357547.svg";const O1={components:{DeleteModel:P1,useAuthStore:S,useAlertStore:A,fetchWrapper:x},data(){return{personal_optionDrop:!1,logOutModal:!1,profilePic:""}},computed:{profilePicUrl(){return y().profilePicUrl}},methods:{goToPreviousPage(){this.$router.go(-1)},goToNextPage(){this.$router.go(1)},toggleDropdown(){this.personal_optionDrop=!this.personal_optionDrop},goToProfile(){this.$router.push({name:"Profile"})},goToSetting(){this.$router.push({name:"Settings"})},logout(){const t=S();localStorage.removeItem("currentprojectId"),localStorage.removeItem("currentprojectName"),t.logout()},responsiveMenu(){this.$emit("responsiveMenu")}}},p=t=>(b("data-v-a2f53aff"),t=t(),M(),t),D1={class:"main-content-header"},Z1={class:"header-btn-group"},T1=p(()=>e("img",{src:R1,class:"img-not-selected"},null,-1)),N1=[T1],U1=p(()=>e("img",{src:F1,class:"img-not-selected"},null,-1)),E1=[U1],q1={class:"header-btn-group"},z1={class:"avtar"},G1=["src"],J1={key:1,src:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"},Y1={class:"user-personal-option"},W1=$('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-a2f53aff><path d="M14.25 10.5H18" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a2f53aff></path><path d="M14.25 13.5H18" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a2f53aff></path><path d="M8.63428 13.5C9.87692 13.5 10.8843 12.4926 10.8843 11.25C10.8843 10.0074 9.87692 9 8.63428 9C7.39164 9 6.38428 10.0074 6.38428 11.25C6.38428 12.4926 7.39164 13.5 8.63428 13.5Z" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a2f53aff></path><path d="M5.72803 15.7481C5.89325 15.1028 6.26855 14.5308 6.79476 14.1223C7.32097 13.7139 7.96815 13.4922 8.63428 13.4922C9.30041 13.4922 9.94759 13.7139 10.4738 14.1223C11 14.5308 11.3753 15.1028 11.5405 15.7481" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a2f53aff></path><path d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V18.75C3 19.1642 3.33579 19.5 3.75 19.5H20.25C20.6642 19.5 21 19.1642 21 18.75V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z" stroke="#191C1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-a2f53aff></path></svg>',1),K1=p(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[e("path",{d:"M10.1623 2.5H9.83703C9.44488 2.5 9.0688 2.65804 8.79151 2.93934C8.51422 3.22064 8.35844 3.60218 8.35844 4V4.135C8.35817 4.39804 8.28972 4.65639 8.15996 4.88413C8.0302 5.11186 7.84369 5.30098 7.61914 5.4325L7.30124 5.62C7.07647 5.75165 6.82149 5.82096 6.56194 5.82096C6.3024 5.82096 6.04742 5.75165 5.82265 5.62L5.71175 5.56C5.37246 5.36145 4.96938 5.30758 4.59098 5.41023C4.21258 5.51288 3.8898 5.76365 3.69347 6.1075L3.53083 6.3925C3.33511 6.7367 3.28201 7.14562 3.3832 7.5295C3.48438 7.91337 3.73157 8.24084 4.07052 8.44L4.18141 8.515C4.40488 8.64588 4.5907 8.83382 4.72039 9.06012C4.85009 9.28643 4.91915 9.54323 4.92071 9.805V10.1875C4.92174 10.4518 4.85391 10.7117 4.72409 10.9409C4.59426 11.17 4.40705 11.3603 4.18141 11.4925L4.07052 11.56C3.73157 11.7592 3.48438 12.0866 3.3832 12.4705C3.28201 12.8544 3.33511 13.2633 3.53083 13.6075L3.69347 13.8925C3.8898 14.2363 4.21258 14.4871 4.59098 14.5898C4.96938 14.6924 5.37246 14.6386 5.71175 14.44L5.82265 14.38C6.04742 14.2483 6.3024 14.179 6.56194 14.179C6.82149 14.179 7.07647 14.2483 7.30124 14.38L7.61914 14.5675C7.84369 14.699 8.0302 14.8881 8.15996 15.1159C8.28972 15.3436 8.35817 15.602 8.35844 15.865V16C8.35844 16.3978 8.51422 16.7794 8.79151 17.0607C9.0688 17.342 9.44488 17.5 9.83703 17.5H10.1623C10.5545 17.5 10.9306 17.342 11.2078 17.0607C11.4851 16.7794 11.6409 16.3978 11.6409 16V15.865C11.6412 15.602 11.7096 15.3436 11.8394 15.1159C11.9691 14.8881 12.1557 14.699 12.3802 14.5675L12.6981 14.38C12.9229 14.2483 13.1779 14.179 13.4374 14.179C13.697 14.179 13.9519 14.2483 14.1767 14.38L14.2876 14.44C14.6269 14.6386 15.03 14.6924 15.4084 14.5898C15.7868 14.4871 16.1096 14.2363 16.3059 13.8925L16.4685 13.6C16.6642 13.2558 16.7173 12.8469 16.6162 12.463C16.515 12.0791 16.2678 11.7517 15.9288 11.5525L15.8179 11.4925C15.5923 11.3603 15.4051 11.17 15.2753 10.9409C15.1454 10.7117 15.0776 10.4518 15.0786 10.1875V9.8125C15.0776 9.54818 15.1454 9.28829 15.2753 9.05912C15.4051 8.82995 15.5923 8.63966 15.8179 8.5075L15.9288 8.44C16.2678 8.24084 16.515 7.91337 16.6162 7.5295C16.7173 7.14562 16.6642 6.7367 16.4685 6.3925L16.3059 6.1075C16.1096 5.76365 15.7868 5.51288 15.4084 5.41023C15.03 5.30758 14.6269 5.36145 14.2876 5.56L14.1767 5.62C13.9519 5.75165 13.697 5.82096 13.4374 5.82096C13.1779 5.82096 12.9229 5.75165 12.6981 5.62L12.3802 5.4325C12.1557 5.30098 11.9691 5.11186 11.8394 4.88413C11.7096 4.65639 11.6412 4.39804 11.6409 4.135V4C11.6409 3.60218 11.4851 3.22064 11.2078 2.93934C10.9306 2.65804 10.5545 2.5 10.1623 2.5Z",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.99967 11.6666C10.9201 11.6666 11.6663 10.9204 11.6663 9.99992C11.6663 9.07944 10.9201 8.33325 9.99967 8.33325C9.0792 8.33325 8.33301 9.07944 8.33301 9.99992C8.33301 10.9204 9.0792 11.6666 9.99967 11.6666Z",stroke:"#191C1F","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),Q1=p(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[e("path",{d:"M16.3125 8.0625L20.25 12L16.3125 15.9375",stroke:"#F43F5E","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.75 12H20.25",stroke:"#F43F5E","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75",stroke:"#F43F5E","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),X1=p(()=>e("img",{src:j,class:"img-not-selected"},null,-1)),ee=[X1];function te(t,s,c,m,l,o){const i=C("DeleteModel");return h(),k(f,null,[e("header",D1,[e("div",Z1,[e("button",{class:"layout-buttons",onClick:s[0]||(s[0]=(...n)=>o.goToPreviousPage&&o.goToPreviousPage(...n))},N1),e("button",{class:"layout-buttons",onClick:s[1]||(s[1]=(...n)=>o.goToNextPage&&o.goToNextPage(...n))},E1)]),e("div",q1,[e("div",{class:"user-avtar",onClick:s[5]||(s[5]=n=>o.toggleDropdown()),ref:"dropdownContainer"},[e("div",z1,[o.profilePicUrl?(h(),k("img",{key:0,src:o.profilePicUrl},null,8,G1)):_("",!0),o.profilePicUrl?_("",!0):(h(),k("img",J1))]),V(e("ul",Y1,[e("li",null,[e("button",{onClick:s[2]||(s[2]=(...n)=>o.goToProfile&&o.goToProfile(...n))},[W1,w(" personal Details ")])]),e("li",null,[e("button",{onClick:s[3]||(s[3]=(...n)=>o.goToSetting&&o.goToSetting(...n))},[K1,w(" Settings ")])]),e("li",null,[e("button",{class:"required",onClick:s[4]||(s[4]=n=>l.logOutModal=!l.logOutModal)},[Q1,w(" Log out ")])])],512),[[H,l.personal_optionDrop]])],512),e("button",{class:"layout-buttons",onClick:s[6]||(s[6]=(...n)=>o.responsiveMenu&&o.responsiveMenu(...n)),id:"Responsive_Open_sidebar"},ee)])]),l.logOutModal?(h(),B(i,{key:0,model_title:"Logout",model_subtitle:"Are you sure you want to Logout?",onClose_model:s[7]||(s[7]=n=>l.logOutModal=!1),onDelete_item:s[8]||(s[8]=n=>o.logout()),model_content:"Logout"})):_("",!0)],64)}const se=v(O1,[["render",te],["__scopeId","data-v-a2f53aff"]]),oe="/assets/loader2-ee95d56d.gif";const ie={components:{Sidebar:j1,Header:se,OverLaye:P},data(){return{miniSidebarActive:!1,loading:!1,responsiveSidebarActive:!1,overLaye:!1}},created(){this.$router.beforeEach((t,s,c)=>{this.loading=!0,c()}),this.$router.afterEach(()=>{this.loading=!1})},methods:{checkUser(){localStorage.getItem("user")||this.$router.push({name:"Login"})},responsiveMenu(){this.responsiveSidebarActive=!0,this.overLaye=!0},closeResponsiveMenu(){this.responsiveSidebarActive=!1,this.overLaye=!1},overLayeClick(){this.responsiveSidebarActive=!1,this.overLaye=!1}}},ne=t=>(b("data-v-bbd7e3c9"),t=t(),M(),t),re={key:0,class:"loader"},le=ne(()=>e("img",{src:oe},null,-1)),de=[le],ae={class:"main-layout"},ce={class:"main-content"},ue={class:"main-content-body"},he={class:"content-section"};function ke(t,s,c,m,l,o){const i=C("Sidebar"),n=C("Header"),L=C("OverLaye");return h(),k(f,null,[l.loading?(h(),k("div",re,de)):_("",!0),e("main",ae,[d(i,{responsiveSidebarActive:l.responsiveSidebarActive,onCloseResponsiveMenu:o.closeResponsiveMenu},null,8,["responsiveSidebarActive","onCloseResponsiveMenu"]),e("section",ce,[d(n,{onResponsiveMenu:o.responsiveMenu},null,8,["onResponsiveMenu"]),e("section",ue,[e("div",he,[I(t.$slots,"default",{},void 0,!0)])])])]),l.overLaye?(h(),B(L,{key:1,onClick:o.overLayeClick},null,8,["onClick"])):_("",!0)],64)}const ve=v(ie,[["render",ke],["__scopeId","data-v-bbd7e3c9"]]);export{P1 as D,ve as L,F as _,oe as a,D as b};