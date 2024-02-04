import{r as E,c as F,w as ot,o as H,a as h,b as T,F as U,d as rt,e as A,n as z,f as Z,u as W,g as R,h as I,i as C,j as st,k as _,_ as it,T as B,l as ct,m as lt,p as ut,q as dt}from"./index-hdN4OstM.js";const P=200,ft=800,mt=.1,ht=.3,D=.5,vt=.5,_t=12,yt=800,gt=1600,pt=150,bt=3500,xt=["#FFC700","#FF0000","#2E3191","#41BBC7"];var V={props:{particleCount:{type:Number,default:pt},particleSize:{type:Number,default:_t},duration:{type:Number,default:bt},colors:{type:Array,default:xt},force:{type:Number,default:vt},stageHeight:{type:Number,default:yt},stageWidth:{type:Number,default:gt},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(t){const s=E(!0),d=(e,n)=>{q(e,{degree:n})},a=F(()=>y(t.particleCount,t.colors));ot(()=>{t.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉")});const r=F(()=>Y(t.particleCount,t.duration,t.colors,t.particleSize,t.force,t.stageHeight,t.stageWidth));H(async()=>{await f(t.duration),t.shouldDestroyAfterDone&&(s.value=!1)});const y=(e,n)=>{const o=360/e;return Array.from({length:e},(m,u)=>({color:n[u%n.length],degree:u*o}))},f=e=>new Promise(n=>setTimeout(n,e));function c(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((e+Number.EPSILON)*10**n)/10**n}function M(e,n){if(e===n)return!0;if(e==null||n==null||e.length!==n.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==n[o])return!1;return!0}const l=(e,n,o,m,u)=>(e-n)*(u-m)/(o-n)+m,g=(e,n)=>{const o=e+n;return o>360?o-360:o},N=()=>Math.random()>.5,w=[0,0,1],$=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],w],j=e=>!M($[e],w)&&N(),p=e=>typeof e>"u",b=e=>{console.error(e)};function Y(e,n,o,m,u,x,S){const v=Number.isSafeInteger;return!p(e)&&v(e)&&e<0?(b("particleCount must be a positive integer"),!1):!p(n)&&v(n)&&n<0?(b("duration must be a positive integer"),!1):!p(o)&&!Array.isArray(o)?(b("colors must be an array of strings"),!1):!p(m)&&v(m)&&m<0?(b("particleSize must be a positive integer"),!1):!p(u)&&v(u)&&(u<0||u>1)?(b("force must be a positive integer and should be within 0 and 1"),!1):!p(x)&&typeof x=="number"&&v(x)&&x<0?(b("floorHeight must be a positive integer"),!1):!p(S)&&typeof S=="number"&&v(S)&&S<0?(b("floorWidth must be a positive integer"),!1):!0}function q(e,n){let{degree:o}=n;const m=l(Math.abs(g(o,90)-180),0,180,-t.stageWidth/2,t.stageWidth/2),u=Math.random()*(ft-P)+P,x=Math.round(Math.random()*($.length-1)),S=t.duration-Math.round(Math.random()*1e3),v=Math.random()<mt,k=j(x),O=v?c(Math.random()*ht,2):0,X=O*-1,G=O,Q=c(Math.abs(l(Math.abs(g(o,90)-180),0,180,-1,1)),4),J=c(Math.random()*D,4),K=c(Math.random()*t.force*(N()?1:-1),4),tt=D,et=c(Math.max(l(Math.abs(o-180),0,180,t.force,-t.force),0),4),i=(nt,at)=>e==null?void 0:e.style.setProperty(nt,at+"");i("--x-landing-point",`${m}px`),i("--duration-chaos",`${S}ms`),i("--x1",`${O}`),i("--x2",`${X}`),i("--x3",`${G}`),i("--x4",`${Q}`),i("--y1",`${J}`),i("--y2",`${K}`),i("--y3",`${tt}`),i("--y4",`${et}`),i("--width",`${k?t.particleSize:Math.round(Math.random()*4)+t.particleSize/2}px`),i("--height",(k?t.particleSize:Math.round(Math.random()*2)+t.particleSize)+"px"),i("--rotation",`${$[x].join()}`),i("--rotation-duration",`${u}ms`),i("--border-radius",`${k?"50%":"0"}`)}return{isVisible:s,isValid:r,stageHeight:t.stageHeight,particles:a,setItemRef:d}}};function Ct(t,s,d,a,r,y){return a.isVisible&&a.isValid?(h(),T("div",{key:0,class:"confetti-container",style:z(`--floor-height: ${a.stageHeight}px;`)},[(h(!0),T(U,null,rt(a.particles,f=>{let{color:c,degree:M}=f;return h(),T("div",{key:M,class:"particle",ref:l=>a.setItemRef(l,M)},[A("div",{style:z(`--bgcolor: ${c};`)},null,4)],512)}),128))],4)):Z("",!0)}function Mt(t,s){s===void 0&&(s={});var d=s.insertAt;if(!(!t||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",d==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var St=`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`;Mt(St);V.render=Ct;V.__scopeId="data-v-4ff796ae";var Et=(()=>{const t=V;return t.install=s=>{s.component("ConfettiExplosion",t)},t})();const L={__name:"CatMashCard",props:["cat"],emits:["voted"],setup(t,{emit:s}){const d=t,a=s,r=E(!1),y=W(),f=E("primary");function c(){f.value="info",y.vote(d.cat.id),r.value=!0,a("voted")}return(M,l)=>{const g=R("v-card");return h(),I(g,{class:"h-screen hover d-flex",color:f.value,rounded:"0",elevation:"0",onClick:c},{default:C(()=>[r.value?(h(),I(st(Et),{key:0})):Z("",!0),_(it,{class:"ma-auto",cat:t.cat},null,8,["cat"])]),_:1},8,["color"])}}},It={__name:"CatsMatch",setup(t){const s=W(),d=E(),a=E(),r=E(1);function y(){return Math.floor(Math.random()*s.cats.length)}function f(){d.value=s.cats[y()],a.value=s.cats[y()]}function c(){setTimeout(()=>{f(),r.value++},1e3)}return H(()=>{f()}),(M,l)=>{const g=R("v-col"),N=R("v-row");return h(),I(N,{"no-gutters":""},{default:C(()=>[_(g,null,{default:C(()=>[_(B,{name:"slide-left",mode:"out-in"},{default:C(()=>[(h(),I(L,{key:r.value,cat:d.value,onVoted:l[0]||(l[0]=w=>c())},null,8,["cat"]))]),_:1})]),_:1}),_(g,null,{default:C(()=>[_(B,{name:"slide-right",mode:"out-in"},{default:C(()=>[(h(),I(L,{key:r.value,cat:a.value,onVoted:l[1]||(l[1]=w=>c())},null,8,["cat"]))]),_:1})]),_:1})]),_:1})}}},Nt=t=>(ut("data-v-54c10880"),t=t(),dt(),t),wt=Nt(()=>A("header",null,[A("h1",{class:"text-white text-center mt-10"},"Which cat is the cutest?")],-1)),Tt={__name:"CatMashView",setup(t){return(s,d)=>{const a=R("v-container");return h(),T(U,null,[wt,_(a,{fluid:"",class:"pa-0 bg-secondary"},{default:C(()=>[_(It)]),_:1}),A("footer",null,[_(lt,{to:"/",text:"See all our cats"})])],64)}}},Rt=ct(Tt,[["__scopeId","data-v-54c10880"]]);export{Rt as default};
