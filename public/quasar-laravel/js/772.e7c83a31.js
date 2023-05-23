"use strict";(globalThis["webpackChunkauthcrud"]=globalThis["webpackChunkauthcrud"]||[]).push([[772],{3310:(e,a,l)=>{l.d(a,{M_:()=>s,Nq:()=>i,TX:()=>u,pH:()=>n,r4:()=>r});var t=l(7524);const o="http://43.207.162.49/api",n=async e=>{try{const a=await t.Z.post(`${o}/login`,e);return a.data}catch(a){throw console.error("Error logging in:",a),a}},s=async e=>{try{const a=await t.Z.get(`${o}/user`,{headers:{Authorization:`Bearer ${e}`}});return a.data}catch(a){throw console.error("Error retrieving user details:",a),a}},r=async(e,a)=>{try{const l=await t.Z.post(`${o}/user`,e,{headers:{Authorization:`Bearer ${a}`}});return l.data}catch(l){throw console.error("Error creating user:",l),l}},i=async(e,a,l)=>{try{const n=await t.Z.put(`${o}/user/${e}`,a,{headers:{Authorization:`Bearer ${l}`}});return n.data}catch(n){throw console.error("Error updating user:",n),n}},u=async e=>{try{await t.Z.get(`${o}/logout`,{headers:{Authorization:`Bearer ${e}`}})}catch(a){throw console.error("Error logging out:",a),a}}},6144:(e,a,l)=>{l.d(a,{E:()=>n});var t=l(3310),o=l(1809);const n=(0,o.Q_)("user",{state:()=>({}),actions:{async register(e,a){try{const l=await(0,t.r4)(e,a);return l}catch(l){}},async getlist(e){try{const a=await(0,t.M_)(e);return a}catch(a){}},async logout(e){try{await(0,t.TX)(e)}catch(a){}}}})},5833:(e,a,l)=>{l.d(a,{Z:()=>b});var t=l(9835),o=l(499),n=l(6144),s=l(9302),r=l(3310);const i=(0,t._)("div",{class:"text-h6"},"Registration ",-1),u={__name:"RegisterAuth",props:{UpdateInfo:{type:Array,required:!1},action:{type:String,required:!1}},setup(e){const a=e,l=(0,s.Z)(),u=(0,n.E)(),d=(0,o.iH)(null),c=(0,o.iH)(null),m=(0,o.iH)(!1),p=(0,o.iH)(""),v=(0,o.iH)(""),g=(0,o.iH)(!0),y=(0,o.iH)("visitor"),w=(0,o.iH)(["visitor","admin"]),h=(0,o.iH)(!1);async function f(){h.value=!0;try{const e=sessionStorage.getItem("token"),a={email:d.value,phoneno:c.value,username:m.value,password:p.value,name:m.value,usertype:y.value},t=await u.register(a,e);t?(l.notify({type:"positive",message:"Successfully Save  in"}),d.value="",c.value="",m.value="",p.value="",v.value=""):l.notify({type:"negative",message:"Invalid Save credentials"})}catch(e){if(e.response&&e.response.data&&e.response.data.message){const a=e.response.data.message;if("string"===typeof a)l.notify({type:"negative",message:a});else if("object"===typeof a&&a.email){const e=a.email[0];l.notify({type:"negative",message:e})}}else l.notify({type:"negative",message:"An error occurred during Save"})}h.value=!1,r.Nq.va}function b(){name.value=null,age.value=null,accept.value=!1}return(0,t.bv)((async()=>{a.UpdateInfo.length>0&&(d.value=a.UpdateInfo.email,c=a.UpdateInfo.phone,m=a.UpdateInfo.username,p=a.UpdateInfo.password,y=a.UpdateInfo.usertype)})),(e,l)=>{const o=(0,t.up)("q-card-section"),n=(0,t.up)("q-input"),s=(0,t.up)("q-select"),r=(0,t.up)("q-icon"),u=(0,t.up)("q-btn"),_=(0,t.up)("q-form"),k=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(k,{class:"my-card",flat:"",style:{width:"400px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[i])),_:1}),(0,t.Wm)(o,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{onSubmit:f,onReset:b,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{label:"Email",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),filled:"",type:"email",hint:"Email",rules:[e=>e&&e.length>0||"Please Provide Email"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{filled:"",modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value=e),label:"Phone",mask:"(###) ### - ####",hint:"Mask: (###) ### - ####",rules:[e=>e&&e.length>0||"Please Provide Phone No"]},null,8,["modelValue","rules"]),(0,t.Wm)(s,{modelValue:y.value,"onUpdate:modelValue":l[2]||(l[2]=e=>y.value=e),filled:"",options:w.value,label:"User Type"},null,8,["modelValue","options"]),(0,t.Wm)(n,{filled:"",modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=e=>m.value=e),label:"Username",hint:"Name and surname","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,t.Wm)(n,{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=e=>p.value=e),filled:"",type:"password",hint:"Password"},null,8,["modelValue"]),(0,t.Wm)(n,{modelValue:v.value,"onUpdate:modelValue":l[6]||(l[6]=e=>v.value=e),filled:"",type:g.value?"password":"text",hint:"Password with toggle"},{append:(0,t.w5)((()=>[(0,t.Wm)(r,{name:g.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[5]||(l[5]=e=>g.value=!g.value)},null,8,["name"])])),_:1},8,["modelValue","type"]),(0,t._)("div",null,["insert"===a.action?((0,t.wg)(),(0,t.j4)(u,{key:0,label:"Submit",disable:h.value,type:"submit",color:"primary"},null,8,["disable"])):(0,t.kq)("",!0),"insert"!=a.action?((0,t.wg)(),(0,t.j4)(u,{key:1,label:"Save Changes",disable:h.value,color:"blue"},null,8,["disable"])):(0,t.kq)("",!0)])])),_:1})])),_:1})])),_:1})}}};var d=l(4458),c=l(3190),m=l(8326),p=l(6611),v=l(7301),g=l(2857),y=l(9379),w=l(9984),h=l.n(w);const f=u,b=f;h()(u,"components",{QCard:d.Z,QCardSection:c.Z,QForm:m.Z,QInput:p.Z,QSelect:v.Z,QIcon:g.Z,QBtn:y.Z})},2772:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Z});l(9665);var t=l(9835),o=l(6970),n=l(499),s=l(6144),r=l(8339),i=l(5833);const u={class:"column items-center"},d=(0,t._)("br",null,null,-1),c=(0,t._)("br",null,null,-1),m={class:"q-pa-md",style:{width:"700px"}},p={class:"row"},v={class:"col"},g={class:"col"},y={key:0},w={__name:"WelcomePage",setup(e){const a=(0,s.E)(),l=(0,r.tv)(),w=(0,n.iH)([{field:"name",name:"name",required:!0,label:"Name",align:"left",sortable:!0},{field:"email",name:"email",align:"center",label:"Email",field:"calories",sortable:!0},{field:"usertype",name:"usertype",label:"Usertype",field:"fat",sortable:!0}]),h=(0,n.iH)([]),f=((0,n.iH)(!1),(0,n.iH)(!1)),b=(0,n.iH)("");async function _(){const e=sessionStorage.getItem("token");b.value=sessionStorage.getItem("usertype"),console.log(b.value);const l=await a.getlist(e),t=await l.data.map((e=>({id:e.id,name:e.name,email:e.email,usertype:e.usertype})));h.value=t}async function k(){const e=sessionStorage.getItem("token");await a.logout(e),l.push("/login")}return(0,t.bv)((async()=>{await _()})),(e,a)=>{const l=(0,t.up)("q-btn"),n=(0,t.up)("q-th"),s=(0,t.up)("q-tr"),r=(0,t.up)("q-td"),_=(0,t.up)("q-table"),q=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",u,[d,c,(0,t._)("div",m,[(0,t._)("div",p,[(0,t._)("div",v,[(0,t.Wm)(l,{color:"orange",icon:"logout",size:"sm",label:"Logout",onClick:k})]),(0,t._)("div",g,[(0,t.Wm)(l,{color:"positive",icon:"add",label:"Add User ",size:"sm",onClick:a[0]||(a[0]=e=>f.value=!0)})])]),"admin"===b.value?((0,t.wg)(),(0,t.iD)("div",y,[(0,t.Wm)(_,{flat:"",bordered:"",rows:h.value,columns:w.value,"row-key":"name"},{header:(0,t.w5)((e=>[(0,t.Wm)(s,{props:e,class:"bg-primary text-white"},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cols,(a=>((0,t.wg)(),(0,t.j4)(n,{key:a.name,props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(a.label),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props"])])),body:(0,t.w5)((e=>[(0,t.Wm)(s,{props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.name),1)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.email),1)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(e.row.usertype),1)])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])):((0,t.wg)(),(0,t.j4)(l,{key:1,color:"red",style:{"margin-top":"2em"},class:"full-width",icon:"notifications_active",label:"Subscribe"}))])]),(0,t.Wm)(q,{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(i.Z,{UpdateInfo:[],action:"insert"})])),_:1},8,["modelValue"])],64)}}};var h=l(9379),f=l(3519),b=l(1233),_=l(1682),k=l(7220),q=l(7743),U=l(9984),V=l.n(U);const W=w,Z=W;V()(w,"components",{QBtn:h.Z,QTable:f.Z,QTr:b.Z,QTh:_.Z,QTd:k.Z,QDialog:q.Z})}}]);