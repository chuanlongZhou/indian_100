import{i as Tl,a as wl,p as Ua,f as Sl,G as bl,l as El,I as Al}from"./Indian_States-CdO07rMx.js";import{_ as Yt,r as qe,O as Ll,P as vn,D as dr,A as Ke,g as ao,p as Ml,a as Cl,Q as Dl,k as Z,m as Pl,n as Nl,R as Rl,x as Il,S as Ol,T as Bl,z as Ot,B as q,F as _a,G as Fl,U as Rr,C as K,I as Je,W as ur,X as zl,H as Gl,J as Ai,K as Li,Y as ci,Z as Ln,$ as fi,a0 as di,a1 as Ul,a2 as Hl,V as Mn}from"./index-BkTLZZPO.js";import{c as Vl,n as kl,e as Wl,g as Xl,i as jl,a as Zl,M as Or,m as ql,A as Yl,b as so,u as We,d as Kl,f as Ha,h as Ct,j as $l,L as Ql,p as oo,R as lo,k as Jl,r as ra,l as Dt,o as eu,q as tu,s as ru,t as iu,Z as nu,C as Xr,v as he,w as Kt,x as au,y as uo,z as Ji,B as en,D as Mi,E as ho,F as co,G as fo,H as mn,I as pn,J as su,O as ou,K as lu,N as ia,P as Ci,S as Pt,Q as ya,T as uu,U as hu,V as cu,W as fu,X as Dr,Y as Va,_ as du,$ as vu,a0 as mu,a1 as vo,a2 as xt,a3 as Tt,a4 as pu,a5 as gu,a6 as Oi,a7 as _u,a8 as yu,a9 as mo,aa as ka,ab as Wa,ac as Xa,ad as xu}from"./install-DpLHSmeH.js";import{V as ja}from"./VContainer-BFM5Rtp0.js";import{V as bt}from"./VRow-CQVSzrte.js";import{V as lt}from"./VCol-xpB6t-hS.js";import{V as gt,a as Ki,b as na}from"./VCard-DzZmEokq.js";import{_ as Tu,a as wu,b as Su}from"./nexqt-DEQY1NAY.js";import{_ as bu,a as Eu,b as Au}from"./th-BGfkshnq.js";import{_ as Lu}from"./Hero-nt7alAsL.js";function Mu(e){return Zl(null,e)}var xa={isDimensionStacked:jl,enableDataStack:Wl,getStackedDimension:Xl};function Ta(e,t){var r=t;t instanceof Or||(r=new Or(t));var i=Vl(r);return i.setExtent(e[0],e[1]),kl(i,r),i}function Cu(e){ql(e,Yl)}const Du={__name:"LinePlot",props:{title:{type:String,default:"Line Chart"},xAxisData:{type:Array,required:!0},seriesData:{type:Array,required:!0},emphasizedSeriesName:{type:String,default:""}},setup(e){const t=e,r=qe(null);let i=null;var n=["#EE6666","#91CC75","#546570","#5470C6","#7262FD","#FAC858","#C4CCD3"];const a=()=>{if(console.log(r.value),r.value){i=so(r.value);const s={title:{text:t.title},tooltip:{trigger:"axis"},legend:{data:t.seriesData.map(o=>o.name),top:"bottom"},xAxis:{type:"category",data:t.xAxisData},yAxis:{type:"value"},series:t.seriesData.map((o,l)=>({...o,type:"line"}))};i.setOption(s)}};return Ll(()=>[t.seriesData,t.xAxisData],()=>{i&&i.setOption({xAxis:{data:t.xAxisData},legend:{data:t.seriesData.map(s=>s.name),top:"bottom"},series:t.seriesData.map((s,o)=>({...s,type:"line",symbolSize:s.name===t.emphasizedSeriesName&&t.emphasizedSeriesName!==""?15:8,itemStyle:{color:n[o],borderWidth:2},lineStyle:{opacity:s.name===t.emphasizedSeriesName&&t.emphasizedSeriesName!==""?1:.5,width:s.name===t.emphasizedSeriesName&&t.emphasizedSeriesName!==""?12:5},emphasis:{focus:"series",lineStyle:{opacity:1},itemStyle:{borderColor:"black",borderWidth:2}}}))},{replaceMerge:["series"]})},{deep:!0}),vn(()=>{a()}),(s,o)=>(Ke(),dr("div",{ref_key:"chartContainer",ref:r,style:{width:"100%",height:"600px"}},null,512))}},po=Yt(Du,[["__scopeId","data-v-92413582"]]),Za=[{sector:"Power",name:"Power",data:[{timestamp:"2021-01",value:120},{timestamp:"2021-02",value:130},{timestamp:"2021-03",value:140},{timestamp:"2021-04",value:135},{timestamp:"2021-05",value:145},{timestamp:"2021-06",value:150},{timestamp:"2021-07",value:160},{timestamp:"2021-08",value:155},{timestamp:"2021-09",value:150},{timestamp:"2021-10",value:145},{timestamp:"2021-11",value:140},{timestamp:"2021-12",value:135},{timestamp:"2022-01",value:125},{timestamp:"2022-02",value:135},{timestamp:"2022-03",value:145},{timestamp:"2022-04",value:140},{timestamp:"2022-05",value:150},{timestamp:"2022-06",value:155},{timestamp:"2022-07",value:165},{timestamp:"2022-08",value:160},{timestamp:"2022-09",value:155},{timestamp:"2022-10",value:150},{timestamp:"2022-11",value:145},{timestamp:"2022-12",value:140},{timestamp:"2023-01",value:130},{timestamp:"2023-02",value:140},{timestamp:"2023-03",value:150},{timestamp:"2023-04",value:145},{timestamp:"2023-05",value:155},{timestamp:"2023-06",value:160},{timestamp:"2023-07",value:170},{timestamp:"2023-08",value:165},{timestamp:"2023-09",value:160},{timestamp:"2023-10",value:155},{timestamp:"2023-11",value:150},{timestamp:"2023-12",value:145}]},{sector:"Industrial",name:"Industrial",data:[{timestamp:"2021-01",value:80},{timestamp:"2021-02",value:85},{timestamp:"2021-03",value:90},{timestamp:"2021-04",value:88},{timestamp:"2021-05",value:92},{timestamp:"2021-06",value:95},{timestamp:"2021-07",value:100},{timestamp:"2021-08",value:98},{timestamp:"2021-09",value:95},{timestamp:"2021-10",value:92},{timestamp:"2021-11",value:90},{timestamp:"2021-12",value:88},{timestamp:"2022-01",value:85},{timestamp:"2022-02",value:90},{timestamp:"2022-03",value:95},{timestamp:"2022-04",value:93},{timestamp:"2022-05",value:97},{timestamp:"2022-06",value:100},{timestamp:"2022-07",value:105},{timestamp:"2022-08",value:103},{timestamp:"2022-09",value:100},{timestamp:"2022-10",value:97},{timestamp:"2022-11",value:95},{timestamp:"2022-12",value:93},{timestamp:"2023-01",value:90},{timestamp:"2023-02",value:95},{timestamp:"2023-03",value:100},{timestamp:"2023-04",value:98},{timestamp:"2023-05",value:102},{timestamp:"2023-06",value:105},{timestamp:"2023-07",value:110},{timestamp:"2023-08",value:108},{timestamp:"2023-09",value:105},{timestamp:"2023-10",value:102},{timestamp:"2023-11",value:100},{timestamp:"2023-12",value:98}]},{sector:"Ground Transport",name:"Ground Transport",data:[{timestamp:"2021-01",value:60},{timestamp:"2021-02",value:62},{timestamp:"2021-03",value:65},{timestamp:"2021-04",value:63},{timestamp:"2021-05",value:67},{timestamp:"2021-06",value:70},{timestamp:"2021-07",value:72},{timestamp:"2021-08",value:70},{timestamp:"2021-09",value:68},{timestamp:"2021-10",value:67},{timestamp:"2021-11",value:65},{timestamp:"2021-12",value:63},{timestamp:"2022-01",value:65},{timestamp:"2022-02",value:67},{timestamp:"2022-03",value:70},{timestamp:"2022-04",value:68},{timestamp:"2022-05",value:72},{timestamp:"2022-06",value:75},{timestamp:"2022-07",value:77},{timestamp:"2022-08",value:75},{timestamp:"2022-09",value:73},{timestamp:"2022-10",value:72},{timestamp:"2022-11",value:70},{timestamp:"2022-12",value:68},{timestamp:"2023-01",value:70},{timestamp:"2023-02",value:72},{timestamp:"2023-03",value:75},{timestamp:"2023-04",value:73},{timestamp:"2023-05",value:77},{timestamp:"2023-06",value:80},{timestamp:"2023-07",value:82},{timestamp:"2023-08",value:80},{timestamp:"2023-09",value:78},{timestamp:"2023-10",value:77},{timestamp:"2023-11",value:75},{timestamp:"2023-12",value:73}]},{sector:"Residential",name:"Residential",data:[{timestamp:"2021-01",value:40},{timestamp:"2021-02",value:42},{timestamp:"2021-03",value:45},{timestamp:"2021-04",value:43},{timestamp:"2021-05",value:47},{timestamp:"2021-06",value:50},{timestamp:"2021-07",value:52},{timestamp:"2021-08",value:50},{timestamp:"2021-09",value:48},{timestamp:"2021-10",value:47},{timestamp:"2021-11",value:45},{timestamp:"2021-12",value:43},{timestamp:"2022-01",value:45},{timestamp:"2022-02",value:47},{timestamp:"2022-03",value:50},{timestamp:"2022-04",value:48},{timestamp:"2022-05",value:52},{timestamp:"2022-06",value:55},{timestamp:"2022-07",value:57},{timestamp:"2022-08",value:55},{timestamp:"2022-09",value:53},{timestamp:"2022-10",value:52},{timestamp:"2022-11",value:50},{timestamp:"2022-12",value:48},{timestamp:"2023-01",value:50},{timestamp:"2023-02",value:52},{timestamp:"2023-03",value:55},{timestamp:"2023-04",value:53},{timestamp:"2023-05",value:57},{timestamp:"2023-06",value:60},{timestamp:"2023-07",value:62},{timestamp:"2023-08",value:60},{timestamp:"2023-09",value:58},{timestamp:"2023-10",value:57},{timestamp:"2023-11",value:55},{timestamp:"2023-12",value:53}]},{sector:"Co-Emission",name:"Co-Emission",data:[{timestamp:"2021-01",value:30},{timestamp:"2021-02",value:32},{timestamp:"2021-03",value:35},{timestamp:"2021-04",value:33},{timestamp:"2021-05",value:37},{timestamp:"2021-06",value:40},{timestamp:"2021-07",value:42},{timestamp:"2021-08",value:40},{timestamp:"2021-09",value:38},{timestamp:"2021-10",value:37},{timestamp:"2021-11",value:35},{timestamp:"2021-12",value:33},{timestamp:"2022-01",value:35},{timestamp:"2022-02",value:37},{timestamp:"2022-03",value:40},{timestamp:"2022-04",value:38},{timestamp:"2022-05",value:42},{timestamp:"2022-06",value:45},{timestamp:"2022-07",value:47},{timestamp:"2022-08",value:45},{timestamp:"2022-09",value:43},{timestamp:"2022-10",value:42},{timestamp:"2022-11",value:40},{timestamp:"2022-12",value:38},{timestamp:"2023-01",value:40},{timestamp:"2023-02",value:42},{timestamp:"2023-03",value:45},{timestamp:"2023-04",value:43},{timestamp:"2023-05",value:47},{timestamp:"2023-06",value:50},{timestamp:"2023-07",value:52},{timestamp:"2023-08",value:50},{timestamp:"2023-09",value:48},{timestamp:"2023-10",value:47},{timestamp:"2023-11",value:45},{timestamp:"2023-12",value:43}]},{sector:"Total Emission",name:"Total Emission",data:[{timestamp:"2021-01",value:330},{timestamp:"2021-02",value:351},{timestamp:"2021-03",value:375},{timestamp:"2021-04",value:362},{timestamp:"2021-05",value:388},{timestamp:"2021-06",value:405},{timestamp:"2021-07",value:426},{timestamp:"2021-08",value:413},{timestamp:"2021-09",value:399},{timestamp:"2021-10",value:388},{timestamp:"2021-11",value:375},{timestamp:"2021-12",value:362},{timestamp:"2022-01",value:355},{timestamp:"2022-02",value:376},{timestamp:"2022-03",value:400},{timestamp:"2022-04",value:387},{timestamp:"2022-05",value:413},{timestamp:"2022-06",value:430},{timestamp:"2022-07",value:451},{timestamp:"2022-08",value:438},{timestamp:"2022-09",value:424},{timestamp:"2022-10",value:413},{timestamp:"2022-11",value:400},{timestamp:"2022-12",value:387},{timestamp:"2023-01",value:380},{timestamp:"2023-02",value:401},{timestamp:"2023-03",value:425},{timestamp:"2023-04",value:412},{timestamp:"2023-05",value:438},{timestamp:"2023-06",value:455},{timestamp:"2023-07",value:476},{timestamp:"2023-08",value:463},{timestamp:"2023-09",value:449},{timestamp:"2023-10",value:438},{timestamp:"2023-11",value:425},{timestamp:"2023-12",value:412}]}],go=Symbol.for("vuetify:v-item-group"),Pu=Ml({...Il(),...Rl({selectedClass:"v-item--selected"}),...Nl(),...Pl()},"VItemGroup"),Nu=ao()({name:"VItemGroup",props:Pu(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:r}=t;const{themeClasses:i}=Cl(e),{isSelected:n,select:a,next:s,prev:o,selected:l}=Dl(e,go);return()=>Z(e.tag,{class:["v-item-group",i.value,e.class],style:e.style},{default:()=>{var u;return[(u=r.default)==null?void 0:u.call(r,{isSelected:n,select:a,next:s,prev:o,selected:l.value})]}})}}),Ru=ao()({name:"VItem",props:Ol(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:r}=t;const{isSelected:i,select:n,toggle:a,selectedClass:s,value:o,disabled:l}=Bl(e,go);return()=>{var u;return(u=r.default)==null?void 0:u.call(r,{isSelected:i.value,selectedClass:s.value,select:n,toggle:a,value:o.value,disabled:l.value})}}}),gn=e=>(Ai("data-v-ab995038"),e=e(),Li(),e),Iu=gn(()=>K("h1",{class:"text-h3 font-weight-light text-primary"}," Sectoral Report ",-1)),Ou=gn(()=>K("p",{class:"text-subtitle-1"},"Last update: Dec 0, 2023",-1)),Bu=gn(()=>K("p",{class:"text-subtitle-1"},"Last 30 days - Previous year",-1)),Fu={class:"text-h4 font-weight-bold my-3 text-grey-darken-4"},zu={class:"text-h5 font-weight-light text-white"},Gu=gn(()=>K("span",{class:"text-h5 font-weight-bold text-white mr-15"}," Download our dataset ",-1)),Uu={__name:"MainReport",setup(e){qe(!0);const t=qe(null),r=qe(null),i=qe(null);qe(null);const n=qe([5]),a=qe([]);var s=qe([]);const o=(h,c)=>{a.value=h[0].data.map(d=>d.timestamp),s.value=h.map(d=>({name:d.sector,data:d.data.map(f=>f.value)})),s.value=c.value.map(d=>s.value[d])};function l(h){h(),o(Za,n)}vn(()=>{const h=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting?d.target.classList.add("visible"):d.target.classList.remove("visible")})},{threshold:.7});h.observe(t.value.$el),h.observe(i.value.$el);for(let c=0;c<r.value.length;c++)h.observe(r.value[c].$el);o(Za,n)});var u=qe([{title:"Power",value:"0 Mt",change:"-0.21%"},{title:"Industry",value:"-0.05 Mt",change:"-3.77%"},{title:"Ground transport",value:"0 Mt",change:"0%"},{title:"Residential",value:"-0.06 Mt",change:"-1.76%"},{title:"Co-emissions",value:"-0.01 Mt",change:"-5.09%"},{title:"Total CO₂ Emissions",value:"0 Mt",change:"0%"}]);return(h,c)=>{const d=po;return Ke(),Ot(bt,{class:"full_row mt-10 py-10"},{default:q(()=>[Z(ja,null,{default:q(()=>[Z(bt,null,{default:q(()=>[Z(lt,{class:"text-center"},{default:q(()=>[Iu]),_:1})]),_:1}),Z(bt,null,{default:q(()=>[Z(lt,{class:"text-center"},{default:q(()=>[Ou,Bu]),_:1})]),_:1}),Z(bt,{justify:"center",align:"center",style:{width:"100%"}},{default:q(()=>[Z(Nu,{mandatory:"",multiple:"",modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=f=>n.value=f),style:{width:"100%"}},{default:q(()=>[Z(ja,null,{default:q(()=>[Z(bt,null,{default:q(()=>[(Ke(!0),dr(_a,null,Fl(Rr(u),f=>(Ke(),Ot(lt,{cols:"12",sm:"6",md:"2",class:"my-2 box",key:f.title,ref_for:!0,ref_key:"downloadSection2",ref:r},{default:q(()=>[Z(Ru,null,{default:q(({isSelected:v,toggle:m})=>[Z(gt,{class:"blue lighten-2 white--text text-center py-4",hover:"",rounded:"lg",color:v?"primary":"secondary",onClick:p=>l(m)},{default:q(()=>[Z(Ki,{class:"text-h5 font-weight-light text-white"},{default:q(()=>[Je(ur(f.title),1)]),_:2},1024),K("div",Fu,ur(f.value),1),K("div",zu,ur(f.change),1)]),_:2},1032,["color","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),Z(bt,{ref_key:"downloadSection3",ref:i,height:"100px",class:"box my-5"},{default:q(()=>[Z(d,{title:"CO₂ Emissions by Sector (2021-2023)",xAxisData:a.value,seriesData:Rr(s)},null,8,["xAxisData","seriesData"])]),_:1},512),Z(bt,{ref_key:"downloadSection",ref:t,height:"100px",class:"box"},{default:q(()=>[Z(lt,{class:"text-center"},{default:q(()=>[Z(gt,{class:"blue lighten-2 white--text text-center py-4 fade-slide",rounded:"lg",color:"primary"},{default:q(()=>[Gu,Z(zl,{class:"ma-2",color:"green",large:"",to:"/data"},{default:q(()=>[Z(Gl,{left:""},{default:q(()=>[Je("mdi-download")]),_:1}),Je(" Download Dataset Now ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})}}},Hu=Yt(Uu,[["__scopeId","data-v-ab995038"]]),Vu="/assets/concept_1-H3-UfUor.png",ku="/assets/concept_3-Dz_DBR-_.png",Wu="/assets/concept_2-DE9iukwM.png",yr=e=>(Ai("data-v-23831b6d"),e=e(),Li(),e),Xu=yr(()=>K("span",{class:"text-h4 text-primary"},"How - From Data To Emission",-1)),ju=yr(()=>K("div",{class:"text-h6 text-text2 font-weight-light"},"Big data + Machine learning",-1)),Zu=yr(()=>K("p",null," CHETNA gather high resolution datasets from various sources, including census data, surveys, building footprints, power generation data, individual vehicle mobility data, and high-resolution satellite imagery. Using machine learning, we identify the emission related activities with sectoral model based on buildings categorization, industrial activity detection, traffic flows and power generation by each large power plant. ",-1)),qu=yr(()=>K("br",null,null,-1)),Yu=yr(()=>K("img",{src:Vu,alt:"Machine Learning",style:{height:"550px"}},null,-1)),Ku=yr(()=>K("img",{src:ku,alt:"Machine Learning",style:{height:"350px"},class:"mt-5"},null,-1)),$u=yr(()=>K("img",{src:Wu,alt:"Machine Learning",style:{height:"550px"}},null,-1)),Qu={__name:"MainMethodology",setup(e){const t=()=>{window.scrollY>2800?r.value=!0:r.value=!1};window.addEventListener("scroll",t);var r=qe(!1);return(i,n)=>(Ke(),dr(_a,null,[Z(gt,{class:"mx-16 text-center pl-15 pr-15 mt-10",elevation:"0",width:"100%"},{title:q(()=>[Xu]),default:q(()=>[ju,Z(na,{class:"text-subtitle-1 font-weight-light text-start"},{default:q(()=>[Zu,qu]),_:1})]),_:1}),Z(bt,{class:"mb-15"},{default:q(()=>[Z(lt,{cols:"4.5",style:{height:"700px"},class:"pl-10"},{default:q(()=>[Z(ci,null,{default:q(({isHovering:a,props:s})=>[Z(Ln,{name:"slide-fade2"},{default:q(()=>[Rr(r)?(Ke(),Ot(gt,di({key:0,class:["ml-15 text-center mt-10",a?"trans-background":""],width:"110%",height:"600px",style:{left:"100px"}},s,{elevation:a?5:2,style:a?"z-index: 1000":"",rounded:"lg"}),{default:q(()=>[Z(Ki,{style:{"background-color":"#d0f7b0"}},{default:q(()=>[Je("Open-source Data")]),_:1}),Yu]),_:2},1040,["class","elevation","style"])):fi("",!0)]),_:2},1024)]),_:1})]),_:1}),Z(lt,{cols:"2",style:{height:"700px"},class:"pt-15"},{default:q(()=>[Z(ci,null,{default:q(({isHovering:a,props:s})=>[Z(Ln,{name:"slide-fade3"},{default:q(()=>[Rr(r)?(Ke(),Ot(gt,di({key:0,class:"ml-0 text-center mt-15",height:"450px",width:"200%",style:{"z-index":"999",left:"-100px",top:"200px"}},s,{elevation:a?5:2,rounded:"lg"}),{default:q(()=>[Z(Ki,{style:{"background-color":"#dca8ed"}},{default:q(()=>[Je("Machine Learning")]),_:1}),Ku]),_:2},1040,["elevation"])):fi("",!0)]),_:2},1024)]),_:1})]),_:1}),Z(lt,{cols:"5.5",style:{height:"700px"},class:"mr-10 pr-15"},{default:q(()=>[Z(ci,null,{default:q(({isHovering:a,props:s})=>[Z(Ln,{name:"slide-fade"},{default:q(()=>[Rr(r)?(Ke(),Ot(gt,di({key:0,class:["mr-15 ml-0 text-center mt-10",a?"trans-background":""],width:"100%",height:"600px",style:{left:"-100px"}},s,{elevation:a?5:2,style:a?"z-index: 999":"",rounded:"lg"}),{default:q(()=>[Z(Ki,{style:{"background-color":"#fcdd9f"}},{default:q(()=>[Je("Satellite Image")]),_:1}),$u]),_:2},1040,["class","elevation","style"])):fi("",!0)]),_:2},1024)]),_:1})]),_:1})]),_:1})],64))}},Ju=Yt(Qu,[["__scopeId","data-v-23831b6d"]]);We([Kl,Tl]);We(wl);function qa(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var s=function(l){if(i.apply(this,arguments),e instanceof Function?Ya(this,e.call(this,l)):eh(this,e,n),this.constructor===s)for(var u=s.__initializers__,h=0;h<u.length;h++)u[h].apply(this,arguments)};s.__super__=i,i.__initializers__?s.__initializers__=i.__initializers__.slice():s.__initializers__=[],t&&s.__initializers__.push(t);var o=function(){};return o.prototype=i.prototype,s.prototype=new o,s.prototype.constructor=s,Ya(s.prototype,r),s.extend=i.extend,s.derive=i.extend,s}function Ya(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function eh(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}const th={extend:qa,derive:qa};function rh(e,t){this.action=e,this.context=t}var wa={trigger:function(e){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new rh(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},ih=0,nh=Array.prototype,ah=nh.forEach,Ee={genGUID:function(){return++ih},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(e&&t)if(e.forEach&&e.forEach===ah)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Ee.isObject(e)){if(Ee.isArray(e))return e.slice();if(Ee.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Ee.extend({},e)}else return e}},Xe=function(){this.__uid__=Ee.genGUID()};Xe.__initializers__=[function(e){Ee.extend(this,e)}];Ee.extend(Xe,th);Ee.extend(Xe.prototype,wa);var Ka=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],$a=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function sh(e){for(var t={},r={},i=0;i<Ka.length;i++){var n=Ka[i];s(n)}for(var i=0;i<$a.length;i++){var a=$a[i];r[a]=e.getParameter(e[a])}this.getExtension=function(o){return o in t||s(o),t[o]},this.getParameter=function(o){return r[o]};function s(o){if(e.getExtension){var l=e.getExtension(o);l||(l=e.getExtension("MOZ_"+o)),l||(l=e.getExtension("WEBKIT_"+o)),t[o]=l}}}const D={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CW:2304,CCW:2305,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_2D:3553,TEXTURE_CUBE_MAP:34067,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FRAMEBUFFER:36160,RENDERBUFFER:36161,DEPTH_STENCIL:34041,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306};function oh(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}const lh={get:oh};var Cn,se={};se.supportWebGL=function(){if(Cn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{Cn=!1}return Cn};se.Int8Array=typeof Int8Array>"u"?Array:Int8Array;se.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;se.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;se.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;se.Int16Array=typeof Int16Array>"u"?Array:Int16Array;se.Float32Array=typeof Float32Array>"u"?Array:Float32Array;se.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var hr={};typeof window<"u"?hr=window:typeof global<"u"&&(hr=global);se.requestAnimationFrame=hr.requestAnimationFrame||hr.msRequestAnimationFrame||hr.mozRequestAnimationFrame||hr.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};se.createCanvas=function(){return document.createElement("canvas")};se.createImage=function(){return new hr.Image};se.request={get:lh.get};se.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};se.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var Ue=function(){this.head=null,this.tail=null,this._length=0};Ue.prototype.insert=function(e){var t=new Ue.Entry(e);return this.insertEntry(t),t};Ue.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new Ue.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};Ue.prototype.insertBeforeEntry=function(e,t){var r=new Ue.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};Ue.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Ue.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Ue.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Ue.prototype.getHead=function(){if(this.head)return this.head.value};Ue.prototype.getTail=function(){if(this.tail)return this.tail.value};Ue.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Ue.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Ue.prototype.length=function(){return this._length};Ue.prototype.isEmpty=function(){return this._length===0};Ue.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};Ue.prototype.clear=function(){this.tail=this.head=null,this._length=0};Ue.Entry=function(e){this.value=e,this.next=null,this.prev=null};var xr=function(e){this._list=new Ue,this._map={},this._maxSize=e||10};xr.prototype.setMaxSize=function(e){this._maxSize=e};xr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};xr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};xr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};xr.prototype.clear=function(){this._list.clear(),this._map={}};var ye={},Qa={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function _t(e){return e=Math.round(e),e<0?0:e>255?255:e}function uh(e){return e=Math.round(e),e<0?0:e>360?360:e}function pi(e){return e<0?0:e>1?1:e}function Dn(e){return e.length&&e.charAt(e.length-1)==="%"?_t(parseFloat(e)/100*255):_t(parseInt(e,10))}function Br(e){return e.length&&e.charAt(e.length-1)==="%"?pi(parseFloat(e)/100):pi(parseFloat(e))}function Pn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function jt(e,t,r){return e+(t-e)*r}function pt(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function aa(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var _o=new xr(20),Bi=null;function Tr(e,t){Bi&&aa(Bi,t),Bi=_o.put(e,Bi||t.slice())}ye.parse=function(e,t){if(e){t=t||[];var r=_o.get(e);if(r)return aa(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Qa)return aa(t,Qa[i]),Tr(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){pt(t,0,0,0,1);return}return pt(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),Tr(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){pt(t,0,0,0,1);return}return pt(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),Tr(e,t),t}return}var a=i.indexOf("("),s=i.indexOf(")");if(a!==-1&&s+1===i.length){var o=i.substr(0,a),l=i.substr(a+1,s-(a+1)).split(","),u=1;switch(o){case"rgba":if(l.length!==4){pt(t,0,0,0,1);return}u=Br(l.pop());case"rgb":if(l.length!==3){pt(t,0,0,0,1);return}return pt(t,Dn(l[0]),Dn(l[1]),Dn(l[2]),u),Tr(e,t),t;case"hsla":if(l.length!==4){pt(t,0,0,0,1);return}return l[3]=Br(l[3]),sa(l,t),Tr(e,t),t;case"hsl":if(l.length!==3){pt(t,0,0,0,1);return}return sa(l,t),Tr(e,t),t;default:return}}pt(t,0,0,0,1)}};ye.parseToFloat=function(e,t){if(t=ye.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function sa(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Br(e[1]),n=Br(e[2]),a=n<=.5?n*(i+1):n+i-n*i,s=n*2-a;return t=t||[],pt(t,_t(Pn(s,a,r+1/3)*255),_t(Pn(s,a,r)*255),_t(Pn(s,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function hh(e){if(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),s=a-n,o=(a+n)/2,l,u;if(s===0)l=0,u=0;else{o<.5?u=s/(a+n):u=s/(2-a-n);var h=((a-t)/6+s/2)/s,c=((a-r)/6+s/2)/s,d=((a-i)/6+s/2)/s;t===a?l=d-c:r===a?l=1/3+h-d:i===a&&(l=2/3+c-h),l<0&&(l+=1),l>1&&(l-=1)}var f=[l*360,u,o];return e[3]!=null&&f.push(e[3]),f}}ye.lift=function(e,t){var r=ye.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return ye.stringify(r,r.length===4?"rgba":"rgb")}};ye.toHex=function(e){var t=ye.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};ye.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),s=t[n],o=t[a],l=i-n;return r[0]=_t(jt(s[0],o[0],l)),r[1]=_t(jt(s[1],o[1],l)),r[2]=_t(jt(s[2],o[2],l)),r[3]=pi(jt(s[3],o[3],l)),r}};ye.fastMapToColor=ye.fastLerp;ye.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),s=ye.parse(t[n]),o=ye.parse(t[a]),l=i-n,u=ye.stringify([_t(jt(s[0],o[0],l)),_t(jt(s[1],o[1],l)),_t(jt(s[2],o[2],l)),pi(jt(s[3],o[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}};ye.mapToColor=ye.lerp;ye.modifyHSL=function(e,t,r,i){if(e=ye.parse(e),e)return e=hh(e),t!=null&&(e[0]=uh(t)),r!=null&&(e[1]=Br(r)),i!=null&&(e[2]=Br(i)),ye.stringify(sa(e),"rgba")};ye.modifyAlpha=function(e,t){if(e=ye.parse(e),e&&t!=null)return e[3]=pi(t),ye.stringify(e,"rgba")};ye.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var ch=ye.parseToFloat,Nn={};function Ja(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function fh(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var s=Ja(e)+`
`+Ja(t)+`
`+i.join(`
`);if(Nn[s])return Nn[s];var o=Ee.genGUID();return Nn[s]=o,o}var ft=Xe.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=ch(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var h=this.uniforms[u].type;return h==="t"||h==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ee.clone(e.vertexDefines),this.fragmentDefines=Ee.clone(e.fragmentDefines),t){for(var s in r)i[s]&&(i[s].value=r[s].value);Ee.defaults(this.vertexDefines,n),Ee.defaults(this.fragmentDefines,a)}var o={};for(var l in e.textures)o[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=o,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ee.clone(this.vertexDefines),e.fragmentDefines=Ee.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r??null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=fh(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),$i=1e-6,je=Array,Pr=Math.random,O={};O.create=function(){var e=new je(2);return e[0]=0,e[1]=0,e};O.clone=function(e){var t=new je(2);return t[0]=e[0],t[1]=e[1],t};O.fromValues=function(e,t){var r=new je(2);return r[0]=e,r[1]=t,r};O.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};O.set=function(e,t,r){return e[0]=t,e[1]=r,e};O.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};O.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};O.sub=O.subtract;O.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};O.mul=O.multiply;O.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};O.div=O.divide;O.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};O.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};O.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};O.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};O.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};O.dist=O.distance;O.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};O.sqrDist=O.squaredDistance;O.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};O.len=O.length;O.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};O.sqrLen=O.squaredLength;O.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};O.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};O.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};O.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};O.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};O.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};O.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};O.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};O.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};O.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};O.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};O.forEach=function(){var e=O.create();return function(t,r,i,n,a,s){var o,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,o=i;o<l;o+=r)e[0]=t[o],e[1]=t[o+1],a(e,e,s),t[o]=e[0],t[o+1]=e[1];return t}}();var $=function(e,t){e=e||0,t=t||0,this.array=O.fromValues(e,t),this._dirty=!0};$.prototype={constructor:$,add:function(e){return O.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new $(this.x,this.y)},copy:function(e){return O.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return O.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return O.dist(this.array,e.array)},distance:function(e){return O.distance(this.array,e.array)},div:function(e){return O.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return O.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return O.dot(this.array,e.array)},len:function(){return O.len(this.array)},length:function(){return O.length(this.array)},lerp:function(e,t,r){return O.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return O.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return O.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return O.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return O.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return O.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return O.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return O.random(this.array,e),this._dirty=!0,this},scale:function(e){return O.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return O.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return O.sqrDist(this.array,e.array)},squaredDistance:function(e){return O.squaredDistance(this.array,e.array)},sqrLen:function(){return O.sqrLen(this.array)},squaredLength:function(){return O.squaredLength(this.array)},sub:function(e){return O.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return O.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return O.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return O.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return O.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return O.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var es=$.prototype;Object.defineProperty(es,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(es,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}$.add=function(e,t,r){return O.add(e.array,t.array,r.array),e._dirty=!0,e};$.set=function(e,t,r){return O.set(e.array,t,r),e._dirty=!0,e};$.copy=function(e,t){return O.copy(e.array,t.array),e._dirty=!0,e};$.cross=function(e,t,r){return O.cross(e.array,t.array,r.array),e._dirty=!0,e};$.dist=function(e,t){return O.distance(e.array,t.array)};$.distance=$.dist;$.div=function(e,t,r){return O.divide(e.array,t.array,r.array),e._dirty=!0,e};$.divide=$.div;$.dot=function(e,t){return O.dot(e.array,t.array)};$.len=function(e){return O.length(e.array)};$.lerp=function(e,t,r,i){return O.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};$.min=function(e,t,r){return O.min(e.array,t.array,r.array),e._dirty=!0,e};$.max=function(e,t,r){return O.max(e.array,t.array,r.array),e._dirty=!0,e};$.mul=function(e,t,r){return O.multiply(e.array,t.array,r.array),e._dirty=!0,e};$.multiply=$.mul;$.negate=function(e,t){return O.negate(e.array,t.array),e._dirty=!0,e};$.normalize=function(e,t){return O.normalize(e.array,t.array),e._dirty=!0,e};$.random=function(e,t){return O.random(e.array,t),e._dirty=!0,e};$.scale=function(e,t,r){return O.scale(e.array,t.array,r),e._dirty=!0,e};$.scaleAndAdd=function(e,t,r,i){return O.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};$.sqrDist=function(e,t){return O.sqrDist(e.array,t.array)};$.squaredDistance=$.sqrDist;$.sqrLen=function(e){return O.sqrLen(e.array)};$.squaredLength=$.sqrLen;$.sub=function(e,t,r){return O.subtract(e.array,t.array,r.array),e._dirty=!0,e};$.subtract=$.sub;$.transformMat2=function(e,t,r){return O.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat2d=function(e,t,r){return O.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat3=function(e,t,r){return O.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};$.transformMat4=function(e,t,r){return O.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var ts=1,rs=2,Rn=3,is={};function dh(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function ns(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),dh(r)].join(`
`)}var as=new se.Float32Array(16),vh=Xe.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var s=0;s<i.length;s++)as[s]=i[s];i=as}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var o=new se.Float32Array(i.length*16),l=0,s=0;s<i.length;s++)for(var u=i[s],h=0;h<16;h++)o[l++]=u[h];e.uniformMatrix4fv(a,!1,o)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,s;r?s=r.__enabledAttributeList:s=is[e.__uid__],s||(r?s=r.__enabledAttributeList=[]:s=is[e.__uid__]=[]);for(var o=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){o[l]=-1;continue}var h=a[u];if(h==null){if(h=i.getAttribLocation(n,u),h===-1){o[l]=-1;continue}a[u]=h}o[l]=h,s[h]?s[h]=rs:s[h]=ts}for(var l=0;l<s.length;l++)switch(s[l]){case ts:i.enableVertexAttribArray(l),s[l]=Rn;break;case rs:s[l]=Rn;break;case Rn:i.disableVertexAttribArray(l),s[l]=0;break}return o},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,i),e.compileShader(s);var o=ns(e,n,r);if(o||(o=ns(e,s,i),o))return o;if(e.attachShader(a,n),e.attachShader(a,s),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(s),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var h=t.uniforms[u];this._locations[h]=e.getUniformLocation(a,h)}}}),mh=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function ss(e,t,r){function i(s,o,l,u){var h="";isNaN(o)&&(o in t?o=t[o]:o=n[o]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var c=parseInt(o);c<parseInt(l);c++)h+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return h}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(mh,i)}function In(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var s=0;s<r.length;s++){var o=r[s];i.push("#define "+o.toUpperCase()+"_ENABLED")}for(var o in e){var l=e[o];l===null?i.push("#define "+o):i.push("#define "+o+" "+l.toString())}return i.join(`
`)}function ph(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function gh(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function yo(e){this._renderer=e,this._cache={}}yo.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),s="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(s+="se"+r.getProgramKey(e.lightGroup)),n&&(s+=",sk"+e.joints.length),a&&(s+=",is");var _=i[s];if(_)return _;var o=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,h=t.getEnabledTextures(),c="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+In(d)+`
`}a&&(c+=`
#define INSTANCING
`);var f=c+In(t.vertexDefines,o,h),v=c+In(t.fragmentDefines,o,h),m=f+`
`+t.shader.vertex,p=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(b){return l.getGLExtension(b)!=null});p.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),p.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var g=ph(p)+`
`+gh(t.precision)+`
`+v+`
`+t.shader.fragment,T=ss(m,t.vertexDefines,o),x=ss(g,t.fragmentDefines,o),_=new vh;_.uniformSemantics=t.shader.uniformSemantics,_.attributes=t.shader.attributes;var S=_.buildProgram(u,t.shader,T,x);return _.__error=S,i[s]=_,_};var os=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,_h=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,ls=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,yh={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Nt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var us={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Nt(2)},vec3:function(){return Nt(3)},vec4:function(){return Nt(4)},ivec2:function(){return Nt(2)},ivec3:function(){return Nt(3)},ivec4:function(){return Nt(4)},mat2:function(){return Nt(4)},mat3:function(){return Nt(9)},mat4:function(){return Nt(16)},array:function(){return[]}},oa=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],xo=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],To=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],xh={vec4:4,vec3:3,vec2:2,float:1},On={},wo={};function Th(e,t){var r="vertex:"+e+"fragment:"+t;if(On[r])return On[r];var i=Ee.genGUID();return On[r]=i,wo[i]={vertex:e,fragment:t},i}function hs(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function wr(){console.error("Wrong uniform/attributes syntax")}function cs(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var s=0,o=1,l=2,u=3,h=4,c=5,d=s,f={},v=null,m;p(i[0]);function p(x){x||wr();var _=x.match(/\[(.*?)\]/);m=x.replace(/\[(.*?)\]/,""),f[m]={},_&&(f[m].isArray=!0,f[m].arraySize=_[1])}for(var a=1;a<i.length;a++){var g=i[a];if(g){if(g==="="){if(d!==s&&d!==u){wr();break}d=o;continue}else if(g===":"){d=h;continue}else if(g===","){if(d===l){if(!(v instanceof Array)){wr();break}v.push(+i[++a])}else d=c;continue}else if(g===")"){f[m].value=new se.Float32Array(v),v=null,d=c;continue}else if(g==="("){if(d!==l){wr();break}if(!(v instanceof Array)){wr();break}v.push(+i[++a]);continue}else if(g.indexOf("vec")>=0){if(d!==o&&d!==h){wr();break}d=l,v=[];continue}else if(d===o){e==="bool"?f[m].value=g==="true":f[m].value=parseFloat(g),v=null;continue}else if(d===h){var T=g;oa.indexOf(T)>=0||xo.indexOf(T)>=0||To.indexOf(T)>=0?f[m].semantic=T:T==="ignore"||T==="unconfigurable"?f[m].ignore=!0:e==="bool"?f[m].value=T==="true":f[m].value=parseFloat(T);continue}p(g),d=s}}return f}function z(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=hs(e),t=hs(t),this._shaderID=Th(e,t),this._vertexCode=z.parseImport(e),this._fragmentCode=z.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}z.prototype={constructor:z,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=z.parseImport(this.vertex),this._fragmentCode=z.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(oa.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(To.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else xo.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?us.array:i||us[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(os,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(os,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,s,o){var l=cs(s,o),u=[];for(var h in l){var c=l[h],d=c.semantic,f=h,v=yh[s],m=i(l[h].value);l[h].isArray&&(f+="["+l[h].arraySize+"]",v+="v"),u.push(f),t._uniformList.push(h),c.ignore||((s==="sampler2D"||s==="samplerCube")&&(t.textures[h]={shaderType:r,type:s}),d?t._addSemanticUniform(h,v,d):t._addMaterialUniform(h,s,v,m,l[h].isArray,e))}return u.length>0?"uniform "+s+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(_h,r);function r(i,n,a){var s=cs(n,a),o=xh[n]||1,l=[];for(var u in s){var h=s[u].semantic;if(e[u]={type:"float",size:o,semantic:h||null},h){if(oa.indexOf(h)<0)throw new Error('Unkown semantic "'+h+'"');t.attributeSemantics[h]={symbol:u,type:n}}l.push(u)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(ls,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(ls,r);function r(i,n,a){var s=t==="vertex"?e.vertexDefines:e.fragmentDefines;return s[n]||(a==="false"?s[n]=!1:a==="true"?s[n]=!0:s[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=wo[this._shaderID],t=new z(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(z.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(z.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(z.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(z.prototype,"uniforms",{get:function(){return this._uniformList}}));var wh=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;z.parseImport=function(e){return e=e.replace(wh,function(n,r,i){var n=z.source(i);return n?z.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var Sh=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;z.import=function(e){e.replace(Sh,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var s=i.split("."),o=z.codes,l=0,u;l<s.length-1;)u=s[l++],o[u]||(o[u]={}),o=o[u];u=s[l],o[u]=a}return a})};z.codes={};z.source=function(e){for(var t=e.split("."),r=z.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};const So=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var N={};N.create=function(){var e=new je(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};N.clone=function(e){var t=new je(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};N.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};N.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};N.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],s=t[7],o=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=s,e[14]=o}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};N.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],m=t[13],p=t[14],g=t[15],T=r*o-i*s,x=r*l-n*s,_=r*u-a*s,S=i*l-n*o,b=i*u-a*o,A=n*u-a*l,E=h*m-c*v,M=h*p-d*v,I=h*g-f*v,C=c*p-d*m,B=c*g-f*m,G=d*g-f*p,R=T*G-x*B+_*C+S*I-b*M+A*E;return R?(R=1/R,e[0]=(o*G-l*B+u*C)*R,e[1]=(n*B-i*G-a*C)*R,e[2]=(m*A-p*b+g*S)*R,e[3]=(d*b-c*A-f*S)*R,e[4]=(l*I-s*G-u*M)*R,e[5]=(r*G-n*I+a*M)*R,e[6]=(p*_-v*A-g*x)*R,e[7]=(h*A-d*_+f*x)*R,e[8]=(s*B-o*I+u*E)*R,e[9]=(i*I-r*B-a*E)*R,e[10]=(v*b-m*_+g*T)*R,e[11]=(c*_-h*b-f*T)*R,e[12]=(o*M-s*C-l*E)*R,e[13]=(r*C-i*M+n*E)*R,e[14]=(m*x-v*S-p*T)*R,e[15]=(h*S-c*x+d*T)*R,e):null};N.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],m=t[13],p=t[14],g=t[15];return e[0]=o*(d*g-f*p)-c*(l*g-u*p)+m*(l*f-u*d),e[1]=-(i*(d*g-f*p)-c*(n*g-a*p)+m*(n*f-a*d)),e[2]=i*(l*g-u*p)-o*(n*g-a*p)+m*(n*u-a*l),e[3]=-(i*(l*f-u*d)-o*(n*f-a*d)+c*(n*u-a*l)),e[4]=-(s*(d*g-f*p)-h*(l*g-u*p)+v*(l*f-u*d)),e[5]=r*(d*g-f*p)-h*(n*g-a*p)+v*(n*f-a*d),e[6]=-(r*(l*g-u*p)-s*(n*g-a*p)+v*(n*u-a*l)),e[7]=r*(l*f-u*d)-s*(n*f-a*d)+h*(n*u-a*l),e[8]=s*(c*g-f*m)-h*(o*g-u*m)+v*(o*f-u*c),e[9]=-(r*(c*g-f*m)-h*(i*g-a*m)+v*(i*f-a*c)),e[10]=r*(o*g-u*m)-s*(i*g-a*m)+v*(i*u-a*o),e[11]=-(r*(o*f-u*c)-s*(i*f-a*c)+h*(i*u-a*o)),e[12]=-(s*(c*p-d*m)-h*(o*p-l*m)+v*(o*d-l*c)),e[13]=r*(c*p-d*m)-h*(i*p-n*m)+v*(i*d-n*c),e[14]=-(r*(o*p-l*m)-s*(i*p-n*m)+v*(i*l-n*o)),e[15]=r*(o*d-l*c)-s*(i*d-n*c)+h*(i*l-n*o),e};N.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],u=e[8],h=e[9],c=e[10],d=e[11],f=e[12],v=e[13],m=e[14],p=e[15],g=t*s-r*a,T=t*o-i*a,x=t*l-n*a,_=r*o-i*s,S=r*l-n*s,b=i*l-n*o,A=u*v-h*f,E=u*m-c*f,M=u*p-d*f,I=h*m-c*v,C=h*p-d*v,B=c*p-d*m;return g*B-T*C+x*I+_*M-S*E+b*A};N.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=t[9],f=t[10],v=t[11],m=t[12],p=t[13],g=t[14],T=t[15],x=r[0],_=r[1],S=r[2],b=r[3];return e[0]=x*i+_*o+S*c+b*m,e[1]=x*n+_*l+S*d+b*p,e[2]=x*a+_*u+S*f+b*g,e[3]=x*s+_*h+S*v+b*T,x=r[4],_=r[5],S=r[6],b=r[7],e[4]=x*i+_*o+S*c+b*m,e[5]=x*n+_*l+S*d+b*p,e[6]=x*a+_*u+S*f+b*g,e[7]=x*s+_*h+S*v+b*T,x=r[8],_=r[9],S=r[10],b=r[11],e[8]=x*i+_*o+S*c+b*m,e[9]=x*n+_*l+S*d+b*p,e[10]=x*a+_*u+S*f+b*g,e[11]=x*s+_*h+S*v+b*T,x=r[12],_=r[13],S=r[14],b=r[15],e[12]=x*i+_*o+S*c+b*m,e[13]=x*n+_*l+S*d+b*p,e[14]=x*a+_*u+S*f+b*g,e[15]=x*s+_*h+S*v+b*T,e};N.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[4],o=t[5],l=t[6],u=t[8],h=t[9],c=t[10],d=t[12],f=t[13],v=t[14],m=r[0],p=r[1],g=r[2];return e[0]=m*i+p*s+g*u,e[1]=m*n+p*o+g*h,e[2]=m*a+p*l+g*c,m=r[4],p=r[5],g=r[6],e[4]=m*i+p*s+g*u,e[5]=m*n+p*o+g*h,e[6]=m*a+p*l+g*c,m=r[8],p=r[9],g=r[10],e[8]=m*i+p*s+g*u,e[9]=m*n+p*o+g*h,e[10]=m*a+p*l+g*c,m=r[12],p=r[13],g=r[14],e[12]=m*i+p*s+g*u+d,e[13]=m*n+p*o+g*h+f,e[14]=m*a+p*l+g*c+v,e};N.mul=N.multiply;N.mulAffine=N.multiplyAffine;N.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],s,o,l,u,h,c,d,f,v,m,p,g;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(s=t[0],o=t[1],l=t[2],u=t[3],h=t[4],c=t[5],d=t[6],f=t[7],v=t[8],m=t[9],p=t[10],g=t[11],e[0]=s,e[1]=o,e[2]=l,e[3]=u,e[4]=h,e[5]=c,e[6]=d,e[7]=f,e[8]=v,e[9]=m,e[10]=p,e[11]=g,e[12]=s*i+h*n+v*a+t[12],e[13]=o*i+c*n+m*a+t[13],e[14]=l*i+d*n+p*a+t[14],e[15]=u*i+f*n+g*a+t[15]),e};N.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};N.rotate=function(e,t,r,i){var n=i[0],a=i[1],s=i[2],o=Math.sqrt(n*n+a*a+s*s),l,u,h,c,d,f,v,m,p,g,T,x,_,S,b,A,E,M,I,C,B,G,R,H;return Math.abs(o)<$i?null:(o=1/o,n*=o,a*=o,s*=o,l=Math.sin(r),u=Math.cos(r),h=1-u,c=t[0],d=t[1],f=t[2],v=t[3],m=t[4],p=t[5],g=t[6],T=t[7],x=t[8],_=t[9],S=t[10],b=t[11],A=n*n*h+u,E=a*n*h+s*l,M=s*n*h-a*l,I=n*a*h-s*l,C=a*a*h+u,B=s*a*h+n*l,G=n*s*h+a*l,R=a*s*h-n*l,H=s*s*h+u,e[0]=c*A+m*E+x*M,e[1]=d*A+p*E+_*M,e[2]=f*A+g*E+S*M,e[3]=v*A+T*E+b*M,e[4]=c*I+m*C+x*B,e[5]=d*I+p*C+_*B,e[6]=f*I+g*C+S*B,e[7]=v*I+T*C+b*B,e[8]=c*G+m*R+x*H,e[9]=d*G+p*R+_*H,e[10]=f*G+g*R+S*H,e[11]=v*G+T*R+b*H,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};N.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],s=t[5],o=t[6],l=t[7],u=t[8],h=t[9],c=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+u*i,e[5]=s*n+h*i,e[6]=o*n+c*i,e[7]=l*n+d*i,e[8]=u*n-a*i,e[9]=h*n-s*i,e[10]=c*n-o*i,e[11]=d*n-l*i,e};N.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],s=t[1],o=t[2],l=t[3],u=t[8],h=t[9],c=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-u*i,e[1]=s*n-h*i,e[2]=o*n-c*i,e[3]=l*n-d*i,e[8]=a*i+u*n,e[9]=s*i+h*n,e[10]=o*i+c*n,e[11]=l*i+d*n,e};N.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],s=t[1],o=t[2],l=t[3],u=t[4],h=t[5],c=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+u*i,e[1]=s*n+h*i,e[2]=o*n+c*i,e[3]=l*n+d*i,e[4]=u*n-a*i,e[5]=h*n-s*i,e[6]=c*n-o*i,e[7]=d*n-l*i,e};N.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=i+i,l=n+n,u=a+a,h=i*o,c=i*l,d=i*u,f=n*l,v=n*u,m=a*u,p=s*o,g=s*l,T=s*u;return e[0]=1-(f+m),e[1]=c+T,e[2]=d-g,e[3]=0,e[4]=c-T,e[5]=1-(h+m),e[6]=v+p,e[7]=0,e[8]=d+g,e[9]=v-p,e[10]=1-(h+f),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};N.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r+r,o=i+i,l=n+n,u=r*s,h=i*s,c=i*o,d=n*s,f=n*o,v=n*l,m=a*s,p=a*o,g=a*l;return e[0]=1-c-v,e[1]=h+g,e[2]=d-p,e[3]=0,e[4]=h-g,e[5]=1-u-v,e[6]=f+m,e[7]=0,e[8]=d+p,e[9]=f-m,e[10]=1-u-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};N.frustum=function(e,t,r,i,n,a,s){var o=1/(r-t),l=1/(n-i),u=1/(a-s);return e[0]=a*2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*o,e[9]=(n+i)*l,e[10]=(s+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*a*2*u,e[15]=0,e};N.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),s=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*s,e[15]=0,e};N.ortho=function(e,t,r,i,n,a,s){var o=1/(t-r),l=1/(i-n),u=1/(a-s);return e[0]=-2*o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*o,e[13]=(n+i)*l,e[14]=(s+a)*u,e[15]=1,e};N.lookAt=function(e,t,r,i){var n,a,s,o,l,u,h,c,d,f,v=t[0],m=t[1],p=t[2],g=i[0],T=i[1],x=i[2],_=r[0],S=r[1],b=r[2];return Math.abs(v-_)<$i&&Math.abs(m-S)<$i&&Math.abs(p-b)<$i?N.identity(e):(h=v-_,c=m-S,d=p-b,f=1/Math.sqrt(h*h+c*c+d*d),h*=f,c*=f,d*=f,n=T*d-x*c,a=x*h-g*d,s=g*c-T*h,f=Math.sqrt(n*n+a*a+s*s),f?(f=1/f,n*=f,a*=f,s*=f):(n=0,a=0,s=0),o=c*s-d*a,l=d*n-h*s,u=h*a-c*n,f=Math.sqrt(o*o+l*l+u*u),f?(f=1/f,o*=f,l*=f,u*=f):(o=0,l=0,u=0),e[0]=n,e[1]=o,e[2]=h,e[3]=0,e[4]=a,e[5]=l,e[6]=c,e[7]=0,e[8]=s,e[9]=u,e[10]=d,e[11]=0,e[12]=-(n*v+a*m+s*p),e[13]=-(o*v+l*m+u*p),e[14]=-(h*v+c*m+d*p),e[15]=1,e)};N.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var w={};w.create=function(){var e=new je(3);return e[0]=0,e[1]=0,e[2]=0,e};w.clone=function(e){var t=new je(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};w.fromValues=function(e,t,r){var i=new je(3);return i[0]=e,i[1]=t,i[2]=r,i};w.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};w.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};w.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};w.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};w.sub=w.subtract;w.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};w.mul=w.multiply;w.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};w.div=w.divide;w.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};w.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};w.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};w.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};w.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};w.dist=w.distance;w.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};w.sqrDist=w.squaredDistance;w.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};w.len=w.length;w.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};w.sqrLen=w.squaredLength;w.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};w.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};w.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};w.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};w.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[0],o=r[1],l=r[2];return e[0]=n*l-a*o,e[1]=a*s-i*l,e[2]=i*o-n*s,e};w.lerp=function(e,t,r,i){var n=t[0],a=t[1],s=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=s+i*(r[2]-s),e};w.random=function(e,t){t=t||1;var r=Pr()*2*Math.PI,i=Pr()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};w.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[3]*i+r[7]*n+r[11]*a+r[15];return s=s||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/s,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/s,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/s,e};w.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};w.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[0],o=r[1],l=r[2],u=r[3],h=u*i+o*a-l*n,c=u*n+l*i-s*a,d=u*a+s*n-o*i,f=-s*i-o*n-l*a;return e[0]=h*u+f*-s+c*-l-d*-o,e[1]=c*u+f*-o+d*-s-h*-l,e[2]=d*u+f*-l+h*-o-c*-s,e};w.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};w.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};w.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};w.forEach=function(){var e=w.create();return function(t,r,i,n,a,s){var o,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,o=i;o<l;o+=r)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],a(e,e,s),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2];return t}}();w.angle=function(e,t){var r=w.fromValues(e[0],e[1],e[2]),i=w.fromValues(t[0],t[1],t[2]);w.normalize(r,r),w.normalize(i,i);var n=w.dot(r,i);return n>1?0:Math.acos(n)};z.import(So);var _e=N.create,fs={};function ds(e){return e.material}function bh(e,t,r){return t.uniforms[r].value}function Eh(e,t,r,i){return r!==i}function Ah(e){return!0}function vs(){}var ms={float:D.FLOAT,byte:D.BYTE,ubyte:D.UNSIGNED_BYTE,short:D.SHORT,ushort:D.UNSIGNED_SHORT};function Lh(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Mh(e){var t,r;this.bind=function(i){t||(t=se.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var dt=Xe.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=se.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new sh(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new yo(this),this._placeholderTexture=new Mh},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var s=this.viewport,o=!1,l=s.devicePixelRatio;(s.width!==this._width||s.height!==this._height||l&&l!==this.devicePixelRatio||s.x||s.y)&&(o=!0,n.enable(n.SCISSOR_TEST),n.scissor(s.x*l,s.y*l,s.width*l,s.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),o&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var h=u.opaque,c=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(h,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var f=_e(),v=w.create(),m=0;m<c.length;m++){var p=c[m];N.multiplyAffine(f,t.viewMatrix.array,p.worldTransform.array),w.transformMat4(v,p.position.array,f),p.__depth=v[2]}this.renderPass(h,t,{getMaterial:function(g){return d||g.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(g){return d||g.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(fs[e.__uid__])return;if(fs[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||ds;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],s=i.call(this,a);if(n>0){var o=e[n-1],l=o.joints?o.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===o.material&&a.lightGroup===o.lightGroup){a.__program=o.__program;continue}}var h=this._programMgr.getProgram(a,s,t);this.validateProgram(h),a.__program=h}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||ds,r.getUniform=r.getUniform||bh,r.isMaterialChanged=r.isMaterialChanged||Eh,r.beforeRender=r.beforeRender||vs,r.afterRender=r.afterRender||vs;var i=r.ifRender||Ah;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,s=[n.x*a,n.y*a,n.width*a,n.height*a],o=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*o,this._height*o],u=[s[2],s[3]],h=Date.now();t?(N.copy(ge.VIEW,t.viewMatrix.array),N.copy(ge.PROJECTION,t.projectionMatrix.array),N.copy(ge.VIEWINVERSE,t.worldTransform.array)):(N.identity(ge.VIEW),N.identity(ge.PROJECTION),N.identity(ge.VIEWINVERSE)),N.multiply(ge.VIEWPROJECTION,ge.PROJECTION,ge.VIEW),N.invert(ge.PROJECTIONINVERSE,ge.PROJECTION),N.invert(ge.VIEWPROJECTIONINVERSE,ge.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,f,v,m,p,g,T,x,_,S,b,A,E,M=null,I=0;I<e.length;I++){var C=e[I],B=C.worldTransform!=null,G;if(i(C)){B&&(G=C.isSkinnedMesh&&C.isSkinnedMesh()?C.offsetMatrix?C.offsetMatrix.array:ge.IDENTITY:C.worldTransform.array);var R=C.geometry,H=r.getMaterial.call(this,C),W=C.__program,j=H.shader,k=R.__uid__+"-"+W.__uid__,oe=k!==b;b=k,B&&(N.copy(ge.WORLD,G),N.multiply(ge.WORLDVIEWPROJECTION,ge.VIEWPROJECTION,G),N.multiplyAffine(ge.WORLDVIEW,ge.VIEW,G),(j.matrixSemantics.WORLDINVERSE||j.matrixSemantics.WORLDINVERSETRANSPOSE)&&N.invert(ge.WORLDINVERSE,G),(j.matrixSemantics.WORLDVIEWINVERSE||j.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&N.invert(ge.WORLDVIEWINVERSE,ge.WORLDVIEW),(j.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||j.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&N.invert(ge.WORLDVIEWPROJECTIONINVERSE,ge.WORLDVIEWPROJECTION)),C.beforeRender&&C.beforeRender(this),r.beforeRender.call(this,C,H,f);var X=W!==v;X?(W.bind(this),W.setUniformOfSemantic(c,"VIEWPORT",s),W.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(W.setUniformOfSemantic(c,"NEAR",t.near),W.setUniformOfSemantic(c,"FAR",t.far)),W.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),W.setUniformOfSemantic(c,"TIME",h),W.setUniformOfSemantic(c,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(W,C.lightGroup,this)):W=v,(X||r.isMaterialChanged(C,m,H,f))&&(H.depthTest!==p&&(H.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),p=H.depthTest),H.depthMask!==g&&(c.depthMask(H.depthMask),g=H.depthMask),H.transparent!==S&&(H.transparent?c.enable(c.BLEND):c.disable(c.BLEND),S=H.transparent),H.transparent&&(H.blend?H.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),E=this._bindMaterial(C,H,W,m||null,f||null,v||null,r.getUniform),f=H);var fe=j.matrixSemanticKeys;if(B)for(var ae=0;ae<fe.length;ae++){var me=fe[ae],pe=j.matrixSemantics[me],te=ge[me];if(pe.isTranspose){var Ce=ge[pe.semanticNoTranspose];N.transpose(te,Ce)}W.setUniform(c,pe.type,pe.symbol,te)}C.cullFace!==x&&(x=C.cullFace,c.cullFace(x)),C.frontFace!==_&&(_=C.frontFace,c.frontFace(_)),C.culling!==T&&(T=C.culling,T?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(C,W,E),oe&&(A=this._bindVAO(M,j,R,W)),this._renderObject(C,A,W),r.afterRender(this,C),C.afterRender&&C.afterRender(this),v=W,m=C}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var s=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",s)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var s=null,o=e.isInstancedMesh&&e.isInstancedMesh();if(o&&(s=this.getGLExtension("ANGLE_instanced_arrays"),!s)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(o&&(l=this._bindInstancedAttributes(e,r,s)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),h=u&&n.indices instanceof Uint32Array,c=h?i.UNSIGNED_INT:i.UNSIGNED_SHORT;o?s.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,c,0)}else o?s.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(o)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],s=0;s<n.length;s++){var o=n[s],l=t.getAttribLocation(i,o.symbol);if(!(l<0)){var u=ms[o.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,o.buffer),i.vertexAttribPointer(l,o.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,o.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,s){for(var o=this.gl,l=a===r,u=r.currentTextureSlot(),h=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,f=0;f<c.length;f++){var v=c[f],m=s(e,t,v),p=t.uniforms[v].type;if(p==="t"&&m)m.__slot=-1;else if(p==="tv")for(var g=0;g<m.length;g++)m[g]&&(m[g].__slot=-1)}d.__slot=-1;for(var f=0;f<h.length;f++){var v=h[f],T=t.uniforms[v],m=s(e,t,v),p=T.type,x=p==="t";if(x&&(!m||!m.isRenderable())&&(m=d),n&&l){var _=s(i,n,v);if(x&&(!_||!_.isRenderable())&&(_=d),_===m){if(x)r.takeCurrentTextureSlot(this,null);else if(p==="tv"&&m)for(var g=0;g<m.length;g++)r.takeCurrentTextureSlot(this,null);continue}}if(m!=null)if(x)if(m.__slot<0){var S=r.currentTextureSlot(),b=r.setUniform(o,"1i",v,S);b&&(r.takeCurrentTextureSlot(this,m),m.__slot=S)}else r.setUniform(o,"1i",v,m.__slot);else if(Array.isArray(m)){if(m.length===0)continue;if(p==="tv"){if(!r.hasUniform(v))continue;for(var A=[],g=0;g<m.length;g++){var E=m[g];if(E.__slot<0){var S=r.currentTextureSlot();A.push(S),r.takeCurrentTextureSlot(this,E),E.__slot=S}else A.push(E.__slot)}r.setUniform(o,"1iv",v,A)}else r.setUniform(o,T.type,v,m)}else r.setUniform(o,T.type,v,m)}var M=r.currentTextureSlot();return r.resetTextureSlot(u),M},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,s=this.__uid__+"-"+i.__uid__,o=r.__vaoCache[s];if(!o){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],h=u.attributeBuffers,_=u.indicesBuffer,x=[],c=[],d=0;d<h.length;d++){var f=h[d],v=f.name,m=f.semantic,p;if(m){var g=t.attributeSemantics[m];p=g&&g.symbol}else p=v;p&&i.attributes[p]&&(x.push(f),c.push(p))}o=new Lh(x,c,_),n&&(r.__vaoCache[s]=o)}var T=!0;e&&n&&(o.vao==null?o.vao=e.createVertexArrayOES():T=!1,e.bindVertexArrayOES(o.vao));var x=o.availableAttributes,_=o.indicesBuffer;if(T){for(var S=i.enableAttributes(this,o.availableAttributeSymbols,e&&n&&o),d=0;d<x.length;d++){var b=S[d];if(b!==-1){var f=x[d],A=f.buffer,E=f.size,M=ms[f.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,A),a.vertexAttribPointer(b,E,M,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,_.buffer)}return o},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new ft({shader:new z(z.source("clay.prez.vertex"),z.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,s){var o=a.material,l=s.material;return o.get("diffuseMap")!==l.get("diffuseMap")||(o.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,s,o){if(o==="alphaMap")return a.material.get("diffuseMap");if(o==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return o==="uvRepeat"?a.material.get("uvRepeat"):o==="uvOffset"?a.material.get("uvOffset"):s.get(o)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var s=a.getTextureUniforms(),o=0;o<s.length;o++){var l=s[o],u=a.uniforms[l].value,h=a.uniforms[l].type;if(u){if(h==="t")u.dispose&&u.dispose(this);else if(h==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new $),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});dt.opaqueSortCompare=dt.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};dt.transparentSortCompare=dt.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var ge={IDENTITY:_e(),WORLD:_e(),VIEW:_e(),PROJECTION:_e(),WORLDVIEW:_e(),VIEWPROJECTION:_e(),WORLDVIEWPROJECTION:_e(),WORLDINVERSE:_e(),VIEWINVERSE:_e(),PROJECTIONINVERSE:_e(),WORLDVIEWINVERSE:_e(),VIEWPROJECTIONINVERSE:_e(),WORLDVIEWPROJECTIONINVERSE:_e(),WORLDTRANSPOSE:_e(),VIEWTRANSPOSE:_e(),PROJECTIONTRANSPOSE:_e(),WORLDVIEWTRANSPOSE:_e(),VIEWPROJECTIONTRANSPOSE:_e(),WORLDVIEWPROJECTIONTRANSPOSE:_e(),WORLDINVERSETRANSPOSE:_e(),VIEWINVERSETRANSPOSE:_e(),PROJECTIONINVERSETRANSPOSE:_e(),WORLDVIEWINVERSETRANSPOSE:_e(),VIEWPROJECTIONINVERSETRANSPOSE:_e(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:_e()};dt.COLOR_BUFFER_BIT=D.COLOR_BUFFER_BIT;dt.DEPTH_BUFFER_BIT=D.DEPTH_BUFFER_BIT;dt.STENCIL_BUFFER_BIT=D.STENCIL_BUFFER_BIT;var L=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=w.fromValues(e,t,r),this._dirty=!0};L.prototype={constructor:L,add:function(e){return w.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new L(this.x,this.y,this.z)},copy:function(e){return w.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return w.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return w.dist(this.array,e.array)},distance:function(e){return w.distance(this.array,e.array)},div:function(e){return w.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return w.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return w.dot(this.array,e.array)},len:function(){return w.len(this.array)},length:function(){return w.length(this.array)},lerp:function(e,t,r){return w.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return w.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return w.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return w.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return w.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return w.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return w.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return w.random(this.array,e),this._dirty=!0,this},scale:function(e){return w.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return w.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return w.sqrDist(this.array,e.array)},squaredDistance:function(e){return w.squaredDistance(this.array,e.array)},sqrLen:function(){return w.sqrLen(this.array)},squaredLength:function(){return w.squaredLength(this.array)},sub:function(e){return w.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return w.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return w.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return w.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return w.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){L.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){L.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Fi=Object.defineProperty;if(Fi){var Bn=L.prototype;Fi(Bn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Fi(Bn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Fi(Bn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}L.add=function(e,t,r){return w.add(e.array,t.array,r.array),e._dirty=!0,e};L.set=function(e,t,r,i){w.set(e.array,t,r,i),e._dirty=!0};L.copy=function(e,t){return w.copy(e.array,t.array),e._dirty=!0,e};L.cross=function(e,t,r){return w.cross(e.array,t.array,r.array),e._dirty=!0,e};L.dist=function(e,t){return w.distance(e.array,t.array)};L.distance=L.dist;L.div=function(e,t,r){return w.divide(e.array,t.array,r.array),e._dirty=!0,e};L.divide=L.div;L.dot=function(e,t){return w.dot(e.array,t.array)};L.len=function(e){return w.length(e.array)};L.lerp=function(e,t,r,i){return w.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};L.min=function(e,t,r){return w.min(e.array,t.array,r.array),e._dirty=!0,e};L.max=function(e,t,r){return w.max(e.array,t.array,r.array),e._dirty=!0,e};L.mul=function(e,t,r){return w.multiply(e.array,t.array,r.array),e._dirty=!0,e};L.multiply=L.mul;L.negate=function(e,t){return w.negate(e.array,t.array),e._dirty=!0,e};L.normalize=function(e,t){return w.normalize(e.array,t.array),e._dirty=!0,e};L.random=function(e,t){return w.random(e.array,t),e._dirty=!0,e};L.scale=function(e,t,r){return w.scale(e.array,t.array,r),e._dirty=!0,e};L.scaleAndAdd=function(e,t,r,i){return w.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};L.sqrDist=function(e,t){return w.sqrDist(e.array,t.array)};L.squaredDistance=L.sqrDist;L.sqrLen=function(e){return w.sqrLen(e.array)};L.squaredLength=L.sqrLen;L.sub=function(e,t,r){return w.subtract(e.array,t.array,r.array),e._dirty=!0,e};L.subtract=L.sub;L.transformMat3=function(e,t,r){return w.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};L.transformMat4=function(e,t,r){return w.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};L.transformQuat=function(e,t,r){return w.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function ht(e,t,r){return e<t?t:e>r?r:e}var de=Math.atan2,ct=Math.asin,Sr=Math.abs;L.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],s=t[2],o=t[3],l=n*n,u=a*a,h=s*s,c=o*o,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=de(2*(n*o-a*s),c-l-u+h),i[1]=ct(ht(2*(n*s+a*o),-1,1)),i[2]=de(2*(s*o-n*a),c+l-u-h);break;case"YXZ":i[0]=ct(ht(2*(n*o-a*s),-1,1)),i[1]=de(2*(n*s+a*o),c-l-u+h),i[2]=de(2*(n*a+s*o),c-l+u-h);break;case"ZXY":i[0]=ct(ht(2*(n*o+a*s),-1,1)),i[1]=de(2*(a*o-s*n),c-l-u+h),i[2]=de(2*(s*o-n*a),c-l+u-h);break;case"ZYX":i[0]=de(2*(n*o+s*a),c-l-u+h),i[1]=ct(ht(2*(a*o-n*s),-1,1)),i[2]=de(2*(n*a+s*o),c+l-u-h);break;case"YZX":i[0]=de(2*(n*o-s*a),c-l+u-h),i[1]=de(2*(a*o-n*s),c+l-u-h),i[2]=ct(ht(2*(n*a+s*o),-1,1));break;case"XZY":i[0]=de(2*(n*o+a*s),c-l+u-h),i[1]=de(2*(n*s+a*o),c+l-u-h),i[2]=ct(ht(2*(s*o-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};L.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],s=i[6],o=i[1],l=i[4],u=i[7],h=i[2],c=i[5],d=i[8],f=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":f[1]=ct(ht(s,-1,1)),Sr(s)<.99999?(f[0]=de(-u,d),f[2]=de(-a,n)):(f[0]=de(c,l),f[2]=0);break;case"YXZ":f[0]=ct(-ht(u,-1,1)),Sr(u)<.99999?(f[1]=de(s,d),f[2]=de(o,l)):(f[1]=de(-h,n),f[2]=0);break;case"ZXY":f[0]=ct(ht(c,-1,1)),Sr(c)<.99999?(f[1]=de(-h,d),f[2]=de(-a,l)):(f[1]=0,f[2]=de(o,n));break;case"ZYX":f[1]=ct(-ht(h,-1,1)),Sr(h)<.99999?(f[0]=de(c,d),f[2]=de(o,n)):(f[0]=0,f[2]=de(-a,l));break;case"YZX":f[2]=ct(ht(o,-1,1)),Sr(o)<.99999?(f[0]=de(-u,l),f[1]=de(-h,n)):(f[0]=0,f[1]=de(s,d));break;case"XZY":f[2]=ct(-ht(a,-1,1)),Sr(a)<.99999?(f[0]=de(c,l),f[1]=de(s,n)):(f[0]=de(-u,d),f[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(L,{POSITIVE_X:{get:function(){return new L(1,0,0)}},NEGATIVE_X:{get:function(){return new L(-1,0,0)}},POSITIVE_Y:{get:function(){return new L(0,1,0)}},NEGATIVE_Y:{get:function(){return new L(0,-1,0)}},POSITIVE_Z:{get:function(){return new L(0,0,1)}},NEGATIVE_Z:{get:function(){return new L(0,0,-1)}},UP:{get:function(){return new L(0,1,0)}},ZERO:{get:function(){return new L}}});var Ch=1e-5,vr=function(e,t){this.origin=e||new L,this.direction=t||new L};vr.prototype={constructor:vr,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,s=w.dot(r,a);if(s===0)return null;t||(t=new L);var o=(w.dot(r,n)-i)/s;return w.scaleAndAdd(t.array,n,a,-o),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=w.dot(e.normal.array,this.direction.array);w.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=w.create();return function(t){w.sub(e,t,this.origin.array);var r=w.dot(e,this.direction.array);if(r<0)return w.distance(this.origin.array,t);var i=w.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=w.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,w.sub(e,t,n);var s=w.dot(e,a),o=w.squaredLength(e),l=o-s*s,u=r*r;if(!(l>u)){var h=Math.sqrt(u-l),c=s-h,d=s+h;return i||(i=new L),c<0?d<0?null:(w.scaleAndAdd(i.array,n,a,d),i):(w.scaleAndAdd(i.array,n,a,c),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,s=1/r[0],o=1/r[1],l=1/r[2],u,h,c,d,f,v;if(s>=0?(u=(n[0]-i[0])*s,h=(a[0]-i[0])*s):(h=(n[0]-i[0])*s,u=(a[0]-i[0])*s),o>=0?(c=(n[1]-i[1])*o,d=(a[1]-i[1])*o):(d=(n[1]-i[1])*o,c=(a[1]-i[1])*o),u>d||c>h||((c>u||u!==u)&&(u=c),(d<h||h!==h)&&(h=d),l>=0?(f=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,f=(a[2]-i[2])*l),u>v||f>h)||((f>u||u!==u)&&(u=f),(v<h||h!==h)&&(h=v),h<0))return null;var m=u>=0?u:h;return t||(t=new L),w.scaleAndAdd(t.array,i,r,m),t},intersectTriangle:function(){var e=w.create(),t=w.create(),r=w.create(),i=w.create();return function(n,a,s,o,l,u){var h=this.direction.array,c=this.origin.array;n=n.array,a=a.array,s=s.array,w.sub(e,a,n),w.sub(t,s,n),w.cross(i,t,h);var d=w.dot(e,i);if(o){if(d>-1e-5)return null}else if(d>-1e-5&&d<Ch)return null;w.sub(r,c,n);var f=w.dot(i,r)/d;if(f<0||f>1)return null;w.cross(i,e,r);var v=w.dot(h,i)/d;if(v<0||v>1||f+v>1)return null;w.cross(i,e,t);var m=-w.dot(r,i)/d;return m<0?null:(l||(l=new L),u&&L.set(u,1-f-v,f,v),w.scaleAndAdd(l.array,c,h,m),l)}}(),applyTransform:function(e){L.add(this.direction,this.direction,this.origin),L.transformMat4(this.origin,this.origin,e),L.transformMat4(this.direction,this.direction,e),L.sub(this.direction,this.direction,this.origin),L.normalize(this.direction,this.direction)},copy:function(e){L.copy(this.origin,e.origin),L.copy(this.direction,e.direction)},clone:function(){var e=new vr;return e.copy(this),e}};var P={};P.create=function(){var e=new je(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};P.clone=function(e){var t=new je(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};P.fromValues=function(e,t,r,i){var n=new je(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};P.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};P.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};P.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};P.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};P.sub=P.subtract;P.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};P.mul=P.multiply;P.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};P.div=P.divide;P.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};P.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};P.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};P.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};P.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};P.dist=P.distance;P.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};P.sqrDist=P.squaredDistance;P.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};P.len=P.length;P.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};P.sqrLen=P.squaredLength;P.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};P.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};P.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r*r+i*i+n*n+a*a;return s>0&&(s=1/Math.sqrt(s),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e[3]=t[3]*s),e};P.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};P.lerp=function(e,t,r,i){var n=t[0],a=t[1],s=t[2],o=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=s+i*(r[2]-s),e[3]=o+i*(r[3]-o),e};P.random=function(e,t){return t=t||1,e[0]=Pr(),e[1]=Pr(),e[2]=Pr(),e[3]=Pr(),P.normalize(e,e),P.scale(e,e,t),e};P.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*s,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*s,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*s,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*s,e};P.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=r[0],o=r[1],l=r[2],u=r[3],h=u*i+o*a-l*n,c=u*n+l*i-s*a,d=u*a+s*n-o*i,f=-s*i-o*n-l*a;return e[0]=h*u+f*-s+c*-l-d*-o,e[1]=c*u+f*-o+d*-s-h*-l,e[2]=d*u+f*-l+h*-o-c*-s,e};P.forEach=function(){var e=P.create();return function(t,r,i,n,a,s){var o,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,o=i;o<l;o+=r)e[0]=t[o],e[1]=t[o+1],e[2]=t[o+2],e[3]=t[o+3],a(e,e,s),t[o]=e[0],t[o+1]=e[1],t[o+2]=e[2],t[o+3]=e[3];return t}}();var Y={};Y.create=function(){var e=new je(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Y.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Y.clone=function(e){var t=new je(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Y.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Y.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Y.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Y.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=h*s-o*u,d=-h*a+o*l,f=u*a-s*l,v=r*c+i*d+n*f;return v?(v=1/v,e[0]=c*v,e[1]=(-h*i+n*u)*v,e[2]=(o*i-n*s)*v,e[3]=d*v,e[4]=(h*r-n*l)*v,e[5]=(-o*r+n*a)*v,e[6]=f*v,e[7]=(-u*r+i*l)*v,e[8]=(s*r-i*a)*v,e):null};Y.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return e[0]=s*h-o*u,e[1]=n*u-i*h,e[2]=i*o-n*s,e[3]=o*l-a*h,e[4]=r*h-n*l,e[5]=n*a-r*o,e[6]=a*u-s*l,e[7]=i*l-r*u,e[8]=r*s-i*a,e};Y.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],s=e[5],o=e[6],l=e[7],u=e[8];return t*(u*a-s*l)+r*(-u*n+s*o)+i*(l*n-a*o)};Y.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=r[0],f=r[1],v=r[2],m=r[3],p=r[4],g=r[5],T=r[6],x=r[7],_=r[8];return e[0]=d*i+f*s+v*u,e[1]=d*n+f*o+v*h,e[2]=d*a+f*l+v*c,e[3]=m*i+p*s+g*u,e[4]=m*n+p*o+g*h,e[5]=m*a+p*l+g*c,e[6]=T*i+x*s+_*u,e[7]=T*n+x*o+_*h,e[8]=T*a+x*l+_*c,e};Y.mul=Y.multiply;Y.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=r[0],f=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=s,e[4]=o,e[5]=l,e[6]=d*i+f*s+u,e[7]=d*n+f*o+h,e[8]=d*a+f*l+c,e};Y.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=Math.sin(r),f=Math.cos(r);return e[0]=f*i+d*s,e[1]=f*n+d*o,e[2]=f*a+d*l,e[3]=f*s-d*i,e[4]=f*o-d*n,e[5]=f*l-d*a,e[6]=u,e[7]=h,e[8]=c,e};Y.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Y.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Y.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r+r,o=i+i,l=n+n,u=r*s,h=i*s,c=i*o,d=n*s,f=n*o,v=n*l,m=a*s,p=a*o,g=a*l;return e[0]=1-c-v,e[3]=h-g,e[6]=d+p,e[1]=h+g,e[4]=1-u-v,e[7]=f-m,e[2]=d-p,e[5]=f+m,e[8]=1-u-c,e};Y.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],m=t[13],p=t[14],g=t[15],T=r*o-i*s,x=r*l-n*s,_=r*u-a*s,S=i*l-n*o,b=i*u-a*o,A=n*u-a*l,E=h*m-c*v,M=h*p-d*v,I=h*g-f*v,C=c*p-d*m,B=c*g-f*m,G=d*g-f*p,R=T*G-x*B+_*C+S*I-b*M+A*E;return R?(R=1/R,e[0]=(o*G-l*B+u*C)*R,e[1]=(l*I-s*G-u*M)*R,e[2]=(s*B-o*I+u*E)*R,e[3]=(n*B-i*G-a*C)*R,e[4]=(r*G-n*I+a*M)*R,e[5]=(i*I-r*B-a*E)*R,e[6]=(m*A-p*b+g*S)*R,e[7]=(p*_-v*A-g*x)*R,e[8]=(v*b-m*_+g*T)*R,e):null};Y.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var V={};V.create=function(){var e=new je(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};V.rotationTo=function(){var e=w.create(),t=w.fromValues(1,0,0),r=w.fromValues(0,1,0);return function(i,n,a){var s=w.dot(n,a);return s<-.999999?(w.cross(e,t,n),w.length(e)<1e-6&&w.cross(e,r,n),w.normalize(e,e),V.setAxisAngle(i,e,Math.PI),i):s>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(w.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+s,V.normalize(i,i))}}();V.setAxes=function(){var e=Y.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],V.normalize(t,V.fromMat3(t,e))}}();V.clone=P.clone;V.fromValues=P.fromValues;V.copy=P.copy;V.set=P.set;V.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};V.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};V.add=P.add;V.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*h+s*o+n*u-a*l,e[1]=n*h+s*l+a*o-i*u,e[2]=a*h+s*u+i*l-n*o,e[3]=s*h-i*o-n*l-a*u,e};V.mul=V.multiply;V.scale=P.scale;V.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l+s*o,e[1]=n*l+a*o,e[2]=a*l-n*o,e[3]=s*l-i*o,e};V.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*o,e[1]=n*l+s*o,e[2]=a*l+i*o,e[3]=s*l-n*o,e};V.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*o,e[1]=n*l-i*o,e[2]=a*l+s*o,e[3]=s*l-a*o,e};V.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};V.dot=P.dot;V.lerp=P.lerp;V.slerp=function(e,t,r,i){var n=t[0],a=t[1],s=t[2],o=t[3],l=r[0],u=r[1],h=r[2],c=r[3],d,f,v,m,p;return f=n*l+a*u+s*h+o*c,f<0&&(f=-f,l=-l,u=-u,h=-h,c=-c),1-f>1e-6?(d=Math.acos(f),v=Math.sin(d),m=Math.sin((1-i)*d)/v,p=Math.sin(i*d)/v):(m=1-i,p=i),e[0]=m*n+p*l,e[1]=m*a+p*u,e[2]=m*s+p*h,e[3]=m*o+p*c,e};V.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r*r+i*i+n*n+a*a,o=s?1/s:0;return e[0]=-r*o,e[1]=-i*o,e[2]=-n*o,e[3]=a*o,e};V.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};V.length=P.length;V.len=V.length;V.squaredLength=P.squaredLength;V.sqrLen=V.squaredLength;V.normalize=P.normalize;V.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,s=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[s*3+s]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+s]-t[s*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[s]=(t[s*3+n]+t[n*3+s])*i}return e};var U=function(){this._axisX=new L,this._axisY=new L,this._axisZ=new L,this.array=N.create(),this._dirty=!0};U.prototype={constructor:U,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return N.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new U().copy(this)},copy:function(e){return N.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return N.determinant(this.array)},fromQuat:function(e){return N.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return N.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return U.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return N.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return N.identity(this.array),this._dirty=!0,this},invert:function(){return N.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return N.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return N.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return N.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return N.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return N.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return N.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return N.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return N.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return N.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return N.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return N.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return N.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return N.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return N.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=w.create(),t=w.create(),r=w.create(),i=Y.create();return function(n,a,s){var o=this.array;w.set(e,o[0],o[1],o[2]),w.set(t,o[4],o[5],o[6]),w.set(r,o[8],o[9],o[10]);var l=w.length(e),u=w.length(t),h=w.length(r),c=this.determinant();c<0&&(l=-l),n&&n.set(l,u,h),s.set(o[12],o[13],o[14]),Y.fromMat4(i,o),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=h,i[7]/=h,i[8]/=h,V.fromMat3(a.array,i),V.normalize(a.array,a.array),a._dirty=!0,s._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var zi=Object.defineProperty;if(zi){var Fn=U.prototype;zi(Fn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),zi(Fn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),zi(Fn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}U.adjoint=function(e,t){return N.adjoint(e.array,t.array),e._dirty=!0,e};U.copy=function(e,t){return N.copy(e.array,t.array),e._dirty=!0,e};U.determinant=function(e){return N.determinant(e.array)};U.identity=function(e){return N.identity(e.array),e._dirty=!0,e};U.ortho=function(e,t,r,i,n,a,s){return N.ortho(e.array,t,r,i,n,a,s),e._dirty=!0,e};U.perspective=function(e,t,r,i,n){return N.perspective(e.array,t,r,i,n),e._dirty=!0,e};U.lookAt=function(e,t,r,i){return N.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};U.invert=function(e,t){return N.invert(e.array,t.array),e._dirty=!0,e};U.mul=function(e,t,r){return N.mul(e.array,t.array,r.array),e._dirty=!0,e};U.multiply=U.mul;U.fromQuat=function(e,t){return N.fromQuat(e.array,t.array),e._dirty=!0,e};U.fromRotationTranslation=function(e,t,r){return N.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};U.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};U.rotate=function(e,t,r,i){return N.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};U.rotateX=function(e,t,r){return N.rotateX(e.array,t.array,r),e._dirty=!0,e};U.rotateY=function(e,t,r){return N.rotateY(e.array,t.array,r),e._dirty=!0,e};U.rotateZ=function(e,t,r){return N.rotateZ(e.array,t.array,r),e._dirty=!0,e};U.scale=function(e,t,r){return N.scale(e.array,t.array,r.array),e._dirty=!0,e};U.transpose=function(e,t){return N.transpose(e.array,t.array),e._dirty=!0,e};U.translate=function(e,t,r){return N.translate(e.array,t.array,r.array),e._dirty=!0,e};var ue=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=V.fromValues(e,t,r,i),this._dirty=!0};ue.prototype={constructor:ue,add:function(e){return V.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return V.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ue(this.x,this.y,this.z,this.w)},conjugate:function(){return V.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return V.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return V.dot(this.array,e.array)},fromMat3:function(e){return V.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=Y.create();return function(t){return Y.fromMat4(e,t.array),Y.transpose(e,e),V.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return V.identity(this.array),this._dirty=!0,this},invert:function(){return V.invert(this.array,this.array),this._dirty=!0,this},len:function(){return V.len(this.array)},length:function(){return V.length(this.array)},lerp:function(e,t,r){return V.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return V.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return V.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return V.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return V.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return V.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return V.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return V.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return V.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return V.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return V.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return V.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return V.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return V.sqrLen(this.array)},squaredLength:function(){return V.squaredLength(this.array)},fromEuler:function(e,t){return ue.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Jr=Object.defineProperty;if(Jr){var Gi=ue.prototype;Jr(Gi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Jr(Gi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Jr(Gi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Jr(Gi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ue.add=function(e,t,r){return V.add(e.array,t.array,r.array),e._dirty=!0,e};ue.set=function(e,t,r,i,n){V.set(e.array,t,r,i,n),e._dirty=!0};ue.copy=function(e,t){return V.copy(e.array,t.array),e._dirty=!0,e};ue.calculateW=function(e,t){return V.calculateW(e.array,t.array),e._dirty=!0,e};ue.conjugate=function(e,t){return V.conjugate(e.array,t.array),e._dirty=!0,e};ue.identity=function(e){return V.identity(e.array),e._dirty=!0,e};ue.invert=function(e,t){return V.invert(e.array,t.array),e._dirty=!0,e};ue.dot=function(e,t){return V.dot(e.array,t.array)};ue.len=function(e){return V.length(e.array)};ue.lerp=function(e,t,r,i){return V.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ue.slerp=function(e,t,r,i){return V.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};ue.mul=function(e,t,r){return V.multiply(e.array,t.array,r.array),e._dirty=!0,e};ue.multiply=ue.mul;ue.rotateX=function(e,t,r){return V.rotateX(e.array,t.array,r),e._dirty=!0,e};ue.rotateY=function(e,t,r){return V.rotateY(e.array,t.array,r),e._dirty=!0,e};ue.rotateZ=function(e,t,r){return V.rotateZ(e.array,t.array,r),e._dirty=!0,e};ue.setAxisAngle=function(e,t,r){return V.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};ue.normalize=function(e,t){return V.normalize(e.array,t.array),e._dirty=!0,e};ue.sqrLen=function(e){return V.sqrLen(e.array)};ue.squaredLength=ue.sqrLen;ue.fromMat3=function(e,t){return V.fromMat3(e.array,t.array),e._dirty=!0,e};ue.setAxes=function(e,t,r,i){return V.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};ue.rotationTo=function(e,t,r){return V.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};ue.fromEuler=function(e,t,h){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),s=Math.cos(t[2]/2),o=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),h=(h||"XYZ").toUpperCase();switch(h){case"XYZ":i[0]=o*a*s+n*l*u,i[1]=n*l*s-o*a*u,i[2]=n*a*u+o*l*s,i[3]=n*a*s-o*l*u;break;case"YXZ":i[0]=o*a*s+n*l*u,i[1]=n*l*s-o*a*u,i[2]=n*a*u-o*l*s,i[3]=n*a*s+o*l*u;break;case"ZXY":i[0]=o*a*s-n*l*u,i[1]=n*l*s+o*a*u,i[2]=n*a*u+o*l*s,i[3]=n*a*s-o*l*u;break;case"ZYX":i[0]=o*a*s-n*l*u,i[1]=n*l*s+o*a*u,i[2]=n*a*u-o*l*s,i[3]=n*a*s+o*l*u;break;case"YZX":i[0]=o*a*s+n*l*u,i[1]=n*l*s+o*a*u,i[2]=n*a*u-o*l*s,i[3]=n*a*s-o*l*u;break;case"XZY":i[0]=o*a*s-n*l*u,i[1]=n*l*s-o*a*u,i[2]=n*a*u+o*l*s,i[3]=n*a*s+o*l*u;break}};var Ht=w.set,Ui=w.copy,ke=function(e,t){this.min=e||new L(1/0,1/0,1/0),this.max=t||new L(-1/0,-1/0,-1/0),this.vertices=null};ke.prototype={constructor:ke,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;Ui(i,e[0]),Ui(n,e[0]);for(var a=1;a<e.length;a++){var s=e[a];s[0]<i[0]&&(i[0]=s[0]),s[1]<i[1]&&(i[1]=s[1]),s[2]<i[2]&&(i[2]=s[2]),s[0]>n[0]&&(n[0]=s[0]),s[1]>n[1]&&(n[1]=s[1]),s[2]>n[2]&&(n[2]=s[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return w.min(t.array,t.array,e.min.array),w.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return w.max(t.array,t.array,e.min.array),w.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=w.create(),t=w.create(),r=w.create(),i=w.create(),n=w.create(),a=w.create();return function(s,o){var l=s.min.array,u=s.max.array,h=o.array;return e[0]=h[0]*l[0],e[1]=h[1]*l[0],e[2]=h[2]*l[0],t[0]=h[0]*u[0],t[1]=h[1]*u[0],t[2]=h[2]*u[0],r[0]=h[4]*l[1],r[1]=h[5]*l[1],r[2]=h[6]*l[1],i[0]=h[4]*u[1],i[1]=h[5]*u[1],i[2]=h[6]*u[1],n[0]=h[8]*l[2],n[1]=h[9]*l[2],n[2]=h[10]*l[2],a[0]=h[8]*u[2],a[1]=h[9]*u[2],a[2]=h[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+h[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+h[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+h[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+h[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+h[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],s=t[2],o=r[0],l=r[1],u=t[2],h=r[0],c=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*s+i[14],r[0]=i[0]*h+i[12],r[1]=i[5]*c+i[13],t[2]=i[10]*d+i[14];else{var f=-1/s;t[0]=i[0]*n*f,t[1]=i[5]*a*f,r[2]=(i[10]*s+i[14])*f,f=-1/u,r[0]=i[0]*o*f,r[1]=i[5]*l*f,f=-1/d,t[2]=(i[10]*d+i[14])*f}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=w.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return Ht(e[0],r[0],r[1],r[2]),Ht(e[1],r[0],i[1],r[2]),Ht(e[2],i[0],r[1],r[2]),Ht(e[3],i[0],i[1],r[2]),Ht(e[4],r[0],r[1],i[2]),Ht(e[5],r[0],i[1],i[2]),Ht(e[6],i[0],r[1],i[2]),Ht(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return Ui(t.array,e.min.array),Ui(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new ke;return e.copy(this),e}};var Dh=0,At=Xe.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+Dh++),this.position||(this.position=new L),this.rotation||(this.rotation=new ue),this.scale||(this.scale=new L(1,1,1)),this.worldTransform=new U,this.localTransform=new U,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(n){for(var a=!1,s=r._children,o=0;o<s.length;o++){var l=s[o];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){N.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){N.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=N.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(N.invert(e,this._parent.worldTransform.array),N.multiply(r.array,e,i.array)):N.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;N.fromRotationTranslation(i,t.array,e.array),N.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?N.multiplyAffine(t,this._parent.worldTransform.array,e):N.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new ke,r=new U,i=new U;return function(n,a){return a=a||new ke,this._parent?U.invert(i,this._parent.worldTransform):U.identity(i),this.traverse(function(s){s.geometry&&s.geometry.boundingBox&&(t.copy(s.geometry.boundingBox),U.multiply(r,i,s.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new L(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new L,t=new U;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new U;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),tt=At.extend({material:null,geometry:null,mode:D.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:D.BACK,frontFace:D.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=At.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=At.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});tt.POINTS=D.POINTS;tt.LINES=D.LINES;tt.LINE_LOOP=D.LINE_LOOP;tt.LINE_STRIP=D.LINE_STRIP;tt.TRIANGLES=D.TRIANGLES;tt.TRIANGLE_STRIP=D.TRIANGLE_STRIP;tt.TRIANGLE_FAN=D.TRIANGLE_FAN;tt.BACK=D.BACK;tt.FRONT=D.FRONT;tt.FRONT_AND_BACK=D.FRONT_AND_BACK;tt.CW=D.CW;tt.CCW=D.CCW;var Sa=Xe.extend({scene:null,camera:null,renderer:null},function(){this._ray=new vr,this._ndc=new $},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof tt&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===D.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new L,t=new L,r=new L,i=new vr,n=new U;return function(a,s){var o=a.isSkinnedMesh();i.copy(this._ray),U.invert(n,a.worldTransform),o||i.applyTransform(n);var l=a.geometry,u=o?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,s);return}else if(l.pickByRay){l.pickByRay(i,a,s);return}var h=a.cullFace===D.BACK&&a.frontFace===D.CCW||a.cullFace===D.FRONT&&a.frontFace===D.CW,c,d=l.indices,f=l.attributes.position,v=l.attributes.weight,m=l.attributes.joint,p,g=[];if(!(!f||!f.value||!d)){if(o){p=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var T=0;T<a.joints.length;T++){g[T]=g[T]||[];for(var x=0;x<16;x++)g[T][x]=p[T*16+x]}var _=[],S=[],b=[],A=[],E=[],M=l.attributes.skinnedPosition;(!M||!M.value)&&(l.createAttribute("skinnedPosition","f",3),M=l.attributes.skinnedPosition,M.init(l.vertexCount));for(var T=0;T<l.vertexCount;T++){f.get(T,_),v.get(T,S),m.get(T,b),S[3]=1-S[0]-S[1]-S[2],w.set(A,0,0,0);for(var x=0;x<4;x++)b[x]>=0&&S[x]>1e-4&&(w.transformMat4(E,_,g[b[x]]),w.scaleAndAdd(A,A,E,S[x]));M.set(T,A)}}for(var T=0;T<d.length;T+=3){var I=d[T],C=d[T+1],B=d[T+2],G=o?l.attributes.skinnedPosition:f;if(G.get(I,e.array),G.get(C,t.array),G.get(B,r.array),h?c=i.intersectTriangle(e,t,r,a.culling):c=i.intersectTriangle(e,r,t,a.culling),c){var R=new L;o?L.copy(R,c):L.transformMat4(R,c,a.worldTransform),s.push(new Sa.Intersection(c,R,a,[I,C,B],T/3,L.dist(R,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Sa.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var ei="__dt__",Fr=function(){this._contextId=0,this._caches=[],this._context={}};Fr.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=ei+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=ei+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=ei+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=ei+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=ei+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Fr.prototype.constructor=Fr;var F=Xe.extend({width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.REPEAT,wrapT:D.REPEAT,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Fr},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===D.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===F.SRGB&&!r&&(this.format=F.RGB),this.format===F.SRGB_ALPHA&&!r&&(this.format=F.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?D.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===D.NEAREST_MIPMAP_NEAREST||e===D.NEAREST_MIPMAP_LINEAR?D.NEAREST:e===D.LINEAR_MIPMAP_LINEAR||e===D.LINEAR_MIPMAP_NEAREST?D.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(F.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(F.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});F.BYTE=D.BYTE;F.UNSIGNED_BYTE=D.UNSIGNED_BYTE;F.SHORT=D.SHORT;F.UNSIGNED_SHORT=D.UNSIGNED_SHORT;F.INT=D.INT;F.UNSIGNED_INT=D.UNSIGNED_INT;F.FLOAT=D.FLOAT;F.HALF_FLOAT=36193;F.UNSIGNED_INT_24_8_WEBGL=34042;F.DEPTH_COMPONENT=D.DEPTH_COMPONENT;F.DEPTH_STENCIL=D.DEPTH_STENCIL;F.ALPHA=D.ALPHA;F.RGB=D.RGB;F.RGBA=D.RGBA;F.LUMINANCE=D.LUMINANCE;F.LUMINANCE_ALPHA=D.LUMINANCE_ALPHA;F.SRGB=35904;F.SRGB_ALPHA=35906;F.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;F.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;F.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;F.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;F.NEAREST=D.NEAREST;F.LINEAR=D.LINEAR;F.NEAREST_MIPMAP_NEAREST=D.NEAREST_MIPMAP_NEAREST;F.LINEAR_MIPMAP_NEAREST=D.LINEAR_MIPMAP_NEAREST;F.NEAREST_MIPMAP_LINEAR=D.NEAREST_MIPMAP_LINEAR;F.LINEAR_MIPMAP_LINEAR=D.LINEAR_MIPMAP_LINEAR;F.REPEAT=D.REPEAT;F.CLAMP_TO_EDGE=D.CLAMP_TO_EDGE;F.MIRRORED_REPEAT=D.MIRRORED_REPEAT;var Fe=tt.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=tt.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});Fe.POINTS=D.POINTS;Fe.LINES=D.LINES;Fe.LINE_LOOP=D.LINE_LOOP;Fe.LINE_STRIP=D.LINE_STRIP;Fe.TRIANGLES=D.TRIANGLES;Fe.TRIANGLE_STRIP=D.TRIANGLE_STRIP;Fe.TRIANGLE_FAN=D.TRIANGLE_FAN;Fe.BACK=D.BACK;Fe.FRONT=D.FRONT;Fe.FRONT_AND_BACK=D.FRONT_AND_BACK;Fe.CW=D.CW;Fe.CCW=D.CCW;var Di={};Di.isPowerOfTwo=function(e){return(e&e-1)===0};Di.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};Di.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var ps=Di.isPowerOfTwo;function gs(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function Ph(e,t){var r=gs(e.width),i=gs(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var Q=F.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===F.REPEAT||this.wrapT===F.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var s=e.getGLExtension("OES_texture_half_float");s||(i=D.FLOAT)}if(this.mipmaps.length)for(var o=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var h=this.mipmaps[u];this._updateTextureData(t,h,u,o,l,r,i,!1),o/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,s,o){if(t.image){var l=t.image;o&&(this._potCanvas=Ph(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,s,l)}else a<=F.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=F.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,s,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return ps(this.width)&&ps(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=se.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(Q.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Q.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function bo(e){return{byte:se.Int8Array,ubyte:se.Uint8Array,short:se.Int16Array,ushort:se.Uint16Array}[e]||se.Float32Array}function zn(e){return"attr_"+e}function zr(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var s=this.value;return a[0]=s[n*2],a[1]=s[n*2+1],a},this.set=function(n,a){var s=this.value;s[n*2]=a[0],s[n*2+1]=a[1]},this.copy=function(n,a){var s=this.value;a*=2,n*=2,s[n]=s[a],s[n+1]=s[a+1]};break;case 3:this.get=function(n,a){var s=n*3,o=this.value;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a},this.set=function(n,a){var s=n*3,o=this.value;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2]},this.copy=function(n,a){var s=this.value;a*=3,n*=3,s[n]=s[a],s[n+1]=s[a+1],s[n+2]=s[a+2]};break;case 4:this.get=function(n,a){var s=this.value,o=n*4;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a[3]=s[o+3],a},this.set=function(n,a){var s=this.value,o=n*4;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3]},this.copy=function(n,a){var s=this.value;a*=4,n*=4,s[n]=s[a],s[n+1]=s[a+1],s[n+2]=s[a+2],s[n+3]=s[a+3]}}}zr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=bo(this.type);this.value=new t(e*this.size)}};zr.prototype.fromArray=function(e){var t=bo(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var s=0;s<n;s++)r[i++]=e[a][s]}else r=new t(e);this.value=r};zr.prototype.clone=function(e){var t=new zr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function Eo(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function Ao(e){this.buffer=e,this.count=0}var rt=Xe.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Fr,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(zn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?se.Uint32Array:se.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var s=0;s<n;s++)t[i++]=e[a][s]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new zr(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],s=this.attributes[a];s.value&&s.value.length===i*s.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(zn(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var s=n[0],o=s.attributeBuffers,l=s.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),h={};if(!a)for(var c=0;c<o.length;c++)h[o[c].name]=o[c];for(var d=0;d<u.length;d++){var f=u[d],v=this.attributes[f],m;a||(m=h[f]);var p;m?p=m.buffer:p=e.createBuffer(),i.isDirty(zn(f))&&(e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),o[d]=new Eo(f,v.type,p,v.size,v.semantic)}for(var c=d;c<o.length;c++)e.deleteBuffer(o[c].buffer);o.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new Ao(e.createBuffer()),s.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var s=n.attributeBuffers[a];e.gl.deleteBuffer(s.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var o=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&o.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(rt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(rt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));rt.STATIC_DRAW=D.STATIC_DRAW;rt.DYNAMIC_DRAW=D.DYNAMIC_DRAW;rt.STREAM_DRAW=D.STREAM_DRAW;rt.AttributeBuffer=Eo;rt.IndicesBuffer=Ao;rt.Attribute=zr;var $e=w.create,br=w.add,rr=w.set,St=rt.Attribute,ee=rt.extend(function(){return{attributes:{position:new St("position","float",3,"POSITION"),texcoord0:new St("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new St("texcoord1","float",2,"TEXCOORD_1"),normal:new St("normal","float",3,"NORMAL"),tangent:new St("tangent","float",4,"TANGENT"),color:new St("color","float",4,"COLOR"),weight:new St("weight","float",3,"WEIGHT"),joint:new St("joint","float",4,"JOINT"),barycentric:new St("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new ke);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;w.set(n,t[0],t[1],t[2]),w.set(a,t[0],t[1],t[2]);for(var s=3;s<t.length;){var o=t[s++],l=t[s++],u=t[s++];o<n[0]&&(n[0]=o),l<n[1]&&(n[1]=l),u<n[2]&&(n[2]=u),o>a[0]&&(a[0]=o),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new se.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=$e(),s=$e(),o=$e(),l=$e(),u=$e(),h=$e(),c=e?e.length:this.vertexCount,d,f,v,m=0;m<c;){e?(d=e[m++],f=e[m++],v=e[m++]):(d=m++,f=m++,v=m++),rr(a,r[d*3],r[d*3+1],r[d*3+2]),rr(s,r[f*3],r[f*3+1],r[f*3+2]),rr(o,r[v*3],r[v*3+1],r[v*3+2]),w.sub(l,a,s),w.sub(u,s,o),w.cross(h,l,u);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+h[n],i[f*3+n]=i[f*3+n]+h[n],i[v*3+n]=i[v*3+n]+h[n]}for(var n=0;n<i.length;)rr(h,i[n],i[n+1],i[n+2]),w.normalize(h,h),i[n++]=h[0],i[n++]=h[1],i[n++]=h[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=$e(),a=$e(),s=$e(),o=$e(),l=$e(),u=$e();i||(i=t.normal.value=new Float32Array(r.length));for(var h=e?e.length:this.vertexCount,c,d,f,v=0;v<h;){e?(c=e[v++],d=e[v++],f=e[v++]):(c=v++,d=v++,f=v++),rr(n,r[c*3],r[c*3+1],r[c*3+2]),rr(a,r[d*3],r[d*3+1],r[d*3+2]),rr(s,r[f*3],r[f*3+1],r[f*3+2]),w.sub(o,n,a),w.sub(l,a,s),w.cross(u,o,l),w.normalize(u,u);for(var m=0;m<3;m++)i[c*3+m]=u[m],i[d*3+m]=u[m],i[f*3+m]=u[m]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var s=[],o=[],l=0;l<e;l++)s[l]=[0,0,0],o[l]=[0,0,0];for(var u=[0,0,0],h=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,f,v,m,l=0;l<d;){c?(f=c[l++],v=c[l++],m=c[l++]):(f=l++,v=l++,m=l++);var p=r[f*2],g=r[v*2],T=r[m*2],x=r[f*2+1],_=r[v*2+1],S=r[m*2+1],b=i[f*3],A=i[v*3],E=i[m*3],M=i[f*3+1],I=i[v*3+1],C=i[m*3+1],B=i[f*3+2],G=i[v*3+2],R=i[m*3+2],H=A-b,W=E-b,j=I-M,k=C-M,oe=G-B,X=R-B,fe=g-p,ae=T-p,me=_-x,pe=S-x,te=1/(fe*pe-me*ae);u[0]=(pe*H-me*W)*te,u[1]=(pe*j-me*k)*te,u[2]=(pe*oe-me*X)*te,h[0]=(fe*W-ae*H)*te,h[1]=(fe*k-ae*j)*te,h[2]=(fe*X-ae*oe)*te,br(s[f],s[f],u),br(s[v],s[v],u),br(s[m],s[m],u),br(o[f],o[f],h),br(o[v],o[v],h),br(o[m],o[m],h)}for(var Ce=$e(),xe=$e(),Se=$e(),l=0;l<e;l++){Se[0]=a[l*3],Se[1]=a[l*3+1],Se[2]=a[l*3+2];var Ze=s[l];w.scale(Ce,Se,w.dot(Se,Ze)),w.sub(Ce,Ze,Ce),w.normalize(Ce,Ce),w.cross(xe,Se,Ze),n[l*4]=Ce[0],n[l*4+1]=Ce[1],n[l*4+2]=Ce[2],n[l*4+3]=w.dot(xe,o[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new se.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var s=0,o=0;o<t.length;o++){for(var l=t[o],n=0;n<r.length;n++)for(var a=r[n],u=e[a].value,h=e[a].size,c=0;c<h;c++)u[s*h+c]=i[a][l*h+c];t[o]=s,s++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=N.create();N.invert(a,e),N.transpose(a,a);var s=w.transformMat4,o=w.forEach;o(r,3,0,null,s,e),i&&o(i,3,0,null,s,a),n&&o(n,4,0,null,s,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var s=n.attributeBuffers[a];e.gl.deleteBuffer(s.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var o=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&o.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});ee.STATIC_DRAW=rt.STATIC_DRAW;ee.DYNAMIC_DRAW=rt.DYNAMIC_DRAW;ee.STREAM_DRAW=rt.STREAM_DRAW;ee.AttributeBuffer=rt.AttributeBuffer;ee.IndicesBuffer=rt.IndicesBuffer;ee.Attribute=St;const Nh=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var mt="uniform vec3 ",ti="uniform float ",Er="@export clay.header.",Ar="@end",Ve=":unconfigurable;";const Rh=[Er+"directional_light",mt+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ve,mt+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ve,Ar,Er+"ambient_light",mt+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ve,Ar,Er+"ambient_sh_light",mt+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ve,mt+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ve,Nh,Ar,Er+"ambient_cubemap_light",mt+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ve,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ve,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ve,Ar,Er+"point_light",mt+"pointLightPosition[POINT_LIGHT_COUNT]"+Ve,ti+"pointLightRange[POINT_LIGHT_COUNT]"+Ve,mt+"pointLightColor[POINT_LIGHT_COUNT]"+Ve,Ar,Er+"spot_light",mt+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ve,mt+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ve,ti+"spotLightRange[SPOT_LIGHT_COUNT]"+Ve,ti+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ve,ti+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ve,ti+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ve,mt+"spotLightColor[SPOT_LIGHT_COUNT]"+Ve,Ar].join(`
`);z.import(Rh);var yt=At.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=At.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),vi=function(e,t){this.normal=e||new L(0,1,0),this.distance=t||0};vi.prototype={constructor:vi,distanceToPoint:function(e){return w.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new L);var r=this.distanceToPoint(e);return w.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/w.len(this.normal.array);w.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=w.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(w.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=w.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var s=this.normal.array,o=this.distance,l=t.array;w.sub(e,r.array,t.array),w.normalize(e,e);var u=w.dot(s,e);if(u===0)return null;i||(i=new L);var h=(w.dot(s,l)-o)/u;return w.scaleAndAdd(i.array,l,e,-h),i._dirty=!0,i}}(),applyTransform:function(){var e=N.create(),t=P.create(),r=P.create();return r[3]=1,function(i){i=i.array,w.scale(r,this.normal.array,this.distance),P.transformMat4(r,r,i),this.distance=w.dot(r,this.normal.array),N.invert(e,i),N.transpose(e,e),t[3]=0,w.copy(t,this.normal.array),P.transformMat4(t,t,e),w.copy(this.normal.array,t)}}(),copy:function(e){w.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new vi;return e.copy(this),e}};var be=w.set,_s=w.copy,ys=w.transformMat4,Gn=Math.min,Un=Math.max,_n=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new vi);this.boundingBox=new ke,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=w.fromValues(0,0,0)};_n.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],s=r[3],o=r[4],l=r[5],u=r[6],h=r[7],c=r[8],d=r[9],f=r[10],v=r[11],m=r[12],p=r[13],g=r[14],T=r[15];be(t[0].normal.array,s-i,h-o,v-c),t[0].distance=-(T-m),t[0].normalize(),be(t[1].normal.array,s+i,h+o,v+c),t[1].distance=-(T+m),t[1].normalize(),be(t[2].normal.array,s+n,h+l,v+d),t[2].distance=-(T+p),t[2].normalize(),be(t[3].normal.array,s-n,h-l,v-d),t[3].distance=-(T-p),t[3].normalize(),be(t[4].normal.array,s-a,h-u,v-f),t[4].distance=-(T-g),t[4].normalize(),be(t[5].normal.array,s+a,h+u,v+f),t[5].distance=-(T+g),t[5].normalize();var x=this.boundingBox,_=this.vertices;if(T===0){var S=l/i,b=-g/(f-1),A=-g/(f+1),E=-A/l,M=-b/l;x.min.set(-E*S,-E,A),x.max.set(E*S,E,b),be(_[0],-E*S,-E,A),be(_[1],-E*S,E,A),be(_[2],E*S,-E,A),be(_[3],E*S,E,A),be(_[4],-M*S,-M,b),be(_[5],-M*S,M,b),be(_[6],M*S,-M,b),be(_[7],M*S,M,b)}else{var I=(-1-m)/i,C=(1-m)/i,B=(1-p)/l,G=(-1-p)/l,R=(-1-g)/f,H=(1-g)/f;x.min.set(Math.min(I,C),Math.min(G,B),Math.min(H,R)),x.max.set(Math.max(C,I),Math.max(B,G),Math.max(R,H));var W=x.min.array,j=x.max.array;be(_[0],W[0],W[1],W[2]),be(_[1],W[0],j[1],W[2]),be(_[2],j[0],W[1],W[2]),be(_[3],j[0],j[1],W[2]),be(_[4],W[0],W[1],j[2]),be(_[5],W[0],j[1],j[2]),be(_[6],j[0],W[1],j[2]),be(_[7],j[0],j[1],j[2])}},getTransformedBoundingBox:function(){var e=w.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,s=t.max,o=a.array,l=s.array,u=i[0];ys(e,u,n),_s(o,e),_s(l,e);for(var h=1;h<8;h++)u=i[h],ys(e,u,n),o[0]=Gn(e[0],o[0]),o[1]=Gn(e[1],o[1]),o[2]=Gn(e[2],o[2]),l[0]=Un(e[0],l[0]),l[1]=Un(e[1],l[1]),l[2]=Un(e[2],l[2]);return a._dirty=!0,s._dirty=!0,t}}()};var Gr=At.extend(function(){return{projectionMatrix:new U,invProjectionMatrix:new U,viewMatrix:new U,frustum:new _n}},function(){this.update(!0)},{update:function(e){At.prototype.update.call(this,e),U.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),U.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){U.copy(this.viewMatrix,e),U.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){U.copy(this.projectionMatrix,e),U.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=P.create();return function(t,r){var i=r!==void 0?r:new vr,n=t.array[0],a=t.array[1];return P.set(e,n,a,-1,1),P.transformMat4(e,e,this.invProjectionMatrix.array),P.transformMat4(e,e,this.worldTransform.array),w.scale(i.origin.array,e,1/e[3]),P.set(e,n,a,1,1),P.transformMat4(e,e,this.invProjectionMatrix.array),P.transformMat4(e,e,this.worldTransform.array),w.scale(e,e,1/e[3]),w.sub(i.direction.array,e,i.origin.array),w.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),Ih=N.create(),xs=N.create(),Hn={};function Oh(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(Hn[a])return Hn[a];var s=Ee.genGUID();return Hn[a]=s,s}function yn(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}yn.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};yn.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};yn.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var $t=At.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new ke,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new xr(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Gr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof yt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Gr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof yt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Oh(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var s=0;s<n._children.length;s++){var o=n._children[s],l=a._children[s];i(o,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new yn,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var s=e._children[a];if(s.isRenderable()){var o=s.isSkinnedMesh()?Ih:s.worldTransform.array,l=s.geometry;N.multiplyAffine(xs,t.viewMatrix.array,o),(n&&!l.boundingBox||!this.isFrustumCulled(s,t,xs))&&i.add(s,s.material.transparent||r)}s._children.length>0&&this._doUpdateRenderList(s,t,r,i,n)}},isFrustumCulled:function(){var e=new ke,t=new U;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var s=e.min.array,o=e.max.array;if(o[0]<-1||s[0]>1||o[1]<-1||s[1]>1||o[2]<-1||s[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(Bh);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var s=a.uniformTemplates[i],o=s.value(a);if(o!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=s.type+"v",s.type){case"1i":case"1f":case"t":l.value.push(o);break;case"2f":case"3f":case"4f":for(var u=0;u<o.length;u++)l.value.push(o[u]);break;default:console.error("Unkown light uniform type "+s.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var s=[],o=0;o<a.value.length;o++){var l=a.value[o],u=r.takeCurrentTextureSlot(i,l);s.push(u)}r.setUniform(i.gl,"1iv",n,s)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Bh(e,t){if(t.castShadow&&!e.castShadow)return!0}var Hi=Di.isPowerOfTwo,Fh=["px","nx","py","ny","pz","nz"],mr=F.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=D.FLOAT)}if(this.mipmaps.length)for(var s=this.width,o=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,s,o,r,i),s/=2,o/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,s){for(var o=0;o<6;o++){var l=Fh[o],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,r,a,a,s,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,r,a,i,n,0,a,s,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Hi(this.image.px.width)&&Hi(this.image.px.height):Hi(this.width)&&Hi(this.height)},isRenderable:function(){return this.image.px?Lr(this.image.px)&&Lr(this.image.nx)&&Lr(this.image.py)&&Lr(this.image.ny)&&Lr(this.image.pz)&&Lr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return Ee.each(e,function(n,a){var s=se.createImage();t&&(s.crossOrigin=t),s.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},s.onerror=function(){r--},r++,s.src=n,i.image[a]=s}),this}});Object.defineProperty(mr.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(mr.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function Lr(e){return e.width>0&&e.height>0}var Be=Gr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Gr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Vi="framebuffer",It="renderbuffer",Ts=It+"_width",ws=It+"_height",Vn=It+"_attached",kn="depthtexture_attached",ir=D.FRAMEBUFFER,ri=D.RENDERBUFFER,oi=D.DEPTH_ATTACHMENT,Lo=D.COLOR_ATTACHMENT0,Ae=Xe.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Fr,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(ir,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var s in this._textures){i=!0;var o=this._textures[s];o&&(n=o.texture.width,a=o.texture.height,this._doAttach(e,o.texture,s,o.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var s in l)if(!this._textures[s]){var u=l[s];this._doDetach(t,s,u)}}if(!r.get(kn)&&this.depthBuffer){r.miss(It)&&r.put(It,t.createRenderbuffer());var h=r.get(It);(n!==r.get(Ts)||a!==r.get(ws))&&(t.bindRenderbuffer(ri,h),t.renderbufferStorage(ri,t.DEPTH_COMPONENT16,n,a),r.put(Ts,n),r.put(ws,a),t.bindRenderbuffer(ri,null)),r.get(Vn)||(t.framebufferRenderbuffer(ir,oi,ri,h),r.put(Vn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(ir,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===F.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(ir)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(Vi)&&t.put(Vi,e.gl.createFramebuffer()),t.get(Vi)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||Lo,r=r||D.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var s=this._cache;s.use(i.__uid__),a=s.get("attached_textures")}var o=this._textures[t];if(!(o&&o.target===r&&o.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),s=this._cache.get("attached_textures");if(s&&s[r]){var o=s[r];if(o.texture===t&&o.target===i)return}r=+r;var l=!0;if(r===oi||r===D.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==D.DEPTH_COMPONENT&&t.format!==D.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var h=this._cache.get(It);h&&(n.framebufferRenderbuffer(ir,oi,ri,null),n.deleteRenderbuffer(h),this._cache.put(It,!1)),this._cache.put(Vn,!1),this._cache.put(kn,!0)}}return n.framebufferTexture2D(ir,r,i,a,0),s||(s={},this._cache.put("attached_textures",s)),s[r]=s[r]||{},s[r].texture=t,s[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(ir,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===oi||t===D.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(kn,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(It);i&&t.deleteRenderbuffer(i);var n=r.get(Vi);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Ae.DEPTH_ATTACHMENT=oi;Ae.COLOR_ATTACHMENT0=Lo;Ae.STENCIL_ATTACHMENT=D.STENCIL_ATTACHMENT;Ae.DEPTH_STENCIL_ATTACHMENT=D.DEPTH_STENCIL_ATTACHMENT;var zh=["px","nx","py","ny","pz","nz"],ba=Xe.extend(function(){var e={position:new L,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Be({fov:90}),nx:new Be({fov:90}),py:new Be({fov:90}),ny:new Be({fov:90}),pz:new Be({fov:90}),nz:new Be({fov:90})};return t.px.lookAt(L.POSITIVE_X,L.NEGATIVE_Y),t.nx.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y),t.py.lookAt(L.POSITIVE_Y,L.POSITIVE_Z),t.ny.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z),t.pz.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y),t.nz.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y),e._frameBuffer=new Ae,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,s=0;s<6;s++){var o=zh[s],l=this._cameras[o];if(L.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+s),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),xn=ee.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],s=[],o=0;o<=e;o++)for(var l=o/e,u=0;u<=t;u++){var h=u/t;if(i.push([2*h-1,2*l-1,0]),n&&n.push([h,l]),a&&a.push([0,0,1]),u<t&&o<e){var c=u+o*(t+1);s.push([c,c+1,c+t+1]),s.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(s),this.boundingBox=new ke,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),Te=new U,Mo=ee.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:Mr("px",this.depthSegments,this.heightSegments),nx:Mr("nx",this.depthSegments,this.heightSegments),py:Mr("py",this.widthSegments,this.depthSegments),ny:Mr("ny",this.widthSegments,this.depthSegments),pz:Mr("pz",this.widthSegments,this.heightSegments),nz:Mr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new se.Uint16Array(i);var s=0,o=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var u=t[a],h=l.attributes[u].value,c=l.attributes[u].size,d=u==="normal",f=0;f<h.length;f++){var v=h[f];this.inside&&d&&(v=-v),this.attributes[u].value[f+c*o]=v}for(var m=l.indices.length,f=0;f<l.indices.length;f++)this.indices[f+s]=o+l.indices[this.inside?m-f-1:f];s+=l.indices.length,o+=l.vertexCount}this.boundingBox=new ke,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function Mr(e,t,r){Te.identity();var i=new xn({widthSegments:t,heightSegments:r});switch(e){case"px":U.translate(Te,Te,L.POSITIVE_X),U.rotateY(Te,Te,Math.PI/2);break;case"nx":U.translate(Te,Te,L.NEGATIVE_X),U.rotateY(Te,Te,-Math.PI/2);break;case"py":U.translate(Te,Te,L.POSITIVE_Y),U.rotateX(Te,Te,-Math.PI/2);break;case"ny":U.translate(Te,Te,L.NEGATIVE_Y),U.rotateX(Te,Te,Math.PI/2);break;case"pz":U.translate(Te,Te,L.POSITIVE_Z);break;case"nz":U.translate(Te,Te,L.NEGATIVE_Z),U.rotateY(Te,Te,Math.PI);break}return i.applyTransform(Te),i}const Gh=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;z.import(Gh);var gi=Fe.extend(function(){var e=new z({vertex:z.source("clay.skybox.vertex"),fragment:z.source("clay.skybox.fragment")}),t=new ft({shader:e,depthMask:!1});return{scene:null,geometry:new Mo,material:t,environmentMap:null,culling:!1,_dummyCamera:new Be}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=F.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),U.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),Uh=542327876,Hh=131072,Vh=512,kh=4;function Ea(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Wh=31,Xh=Ea("DXT1"),jh=Ea("DXT3"),Zh=Ea("DXT5"),qh=0,Yh=1,Kh=2,$h=3,Qh=4,Jh=7,ec=20,tc=21,rc=28,ic={parse:function(e,t){var r=new Int32Array(e,0,Wh);if(r[qh]!==Uh||!r(ec)&kh)return null;var i=r(tc),n=r[Qh],a=r[$h],s=r[rc]&Vh,o=r[Kh]&Hh,l,u;switch(i){case Xh:l=8,u=F.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case jh:l=16,u=F.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Zh:l=16,u=F.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var h=r[Yh]+4,c=s?6:1,d=1;o&&(d=Math.max(1,r[Jh]));for(var f=[],v=0;v<c;v++){var m=n,p=a;f[v]=new Q({width:m,height:p,format:u});for(var g=[],T=0;T<d;T++){var x=Math.max(4,m)/4*Math.max(4,p)/4*l,_=new Uint8Array(e,h,x);h+=x,m*=.5,p*=.5,g[T]=_}f[v].pixels=g[0],o&&(f[v].mipmaps=g)}if(t)t.width=f[0].width,t.height=f[0].height,t.format=f[0].format,t.pixels=f[0].pixels,t.mipmaps=f[0].mipmaps;else return f[0]}},Qi=String.fromCharCode,nc=8,ac=32767;function sc(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function oc(e,t,r){for(var i="",n=t;n<r;n++)i+=Qi(e[n]);return i}function lc(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function Ss(e,t,r,i){for(var n=0,a=0,s=i;s>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var o=e[a][3]<<n>>>0;o>0;o--)lc(e[a-1],e[a]),a++,s--;n+=8}else a++,s--,n=0;return r}function uc(e,t,r,i){if(i<nc|i>ac)return Ss(e,t,r,i);var n=t[r++];if(n!=2)return Ss(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var s=t[r++];if(s>128){s=(s&127)>>>0;for(var o=t[r++];s--;)e[a++][n]=o}else for(;s--;)e[a++][n]=t[r++]}return r}var hc={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(oc(i,0,2)==="#?"){for(var a=2;a<n&&!(Qi(i[a])===`
`&&Qi(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var s="";a<n;a++){var o=Qi(i[a]);if(o===`
`)break;s+=o}var l=s.split(" "),u=parseInt(l[1]),h=parseInt(l[3]);if(!(!h||!u)){for(var c=a+1,d=[],f=0;f<h;f++){d[f]=[];for(var v=0;v<4;v++)d[f][v]=0}for(var m=new Float32Array(h*u*4),p=0,g=0;g<u;g++){var c=uc(d,i,c,h);if(!c)return null;for(var f=0;f<h;f++)sc(d[f],m,p,r),p+=4}return t||(t=new Q),t.width=h,t.height=u,t.pixels=m,t.type=F.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},Lt={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new Q({width:0,height:0,sRGB:!1}),Lt._fetchTexture(e,function(a){hc.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new Q({width:0,height:0}),Lt._fetchTexture(e,function(a){ic.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new Q,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new mr,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var s=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},Lt.loadTexture(t,i,function(o){o.flipY=i.flipY||!1,s.panoramaToCubeMap(e,o,r,i),o.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new ba,a=new gi({scene:new $t});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var s=a.getImageData(0,0,i,n),o=a.createImageData(i,n),l=0;l<s.data.length;l+=4){if(t){var u=s.data[l],h=s.data[l+1],c=s.data[l+2],d=Math.abs(u-h)+Math.abs(h-c);if(d>20)return console.warn("Given image is not a height map"),e}var f,v,m,p;l%(i*4)===0?(f=s.data[l],m=s.data[l+4]):l%(i*4)===(i-1)*4?(f=s.data[l-4],m=s.data[l]):(f=s.data[l-4],m=s.data[l+4]),l<i*4?(v=s.data[l],p=s.data[l+i*4]):l>i*(n-1)*4?(v=s.data[l-i*4],p=s.data[l]):(v=s.data[l-i*4],p=s.data[l+i*4]),o.data[l]=f-m+127,o.data[l+1]=v-p+127,o.data[l+2]=255,o.data[l+3]=255}return a.putImageData(o,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var s=n.getImageData(0,0,a,a),o=0;o<s.data.length;o+=4){var l=s.data[o],u=s.data[o+1],h=s.data[o+2],c=Math.abs(l-u)+Math.abs(u-h);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){se.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var s=a.getContext("2d");s.fillStyle=i,s.fillRect(0,0,e,e),s.fillStyle=r;for(var o=0;o<n;o++)for(var l=0;l<n;l++){var u=l%2?o%2:o%2-1;u&&s.fillRect(o*t,l*t,t,t)}var h=new Q({image:a,anisotropic:8});return h},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new Q({image:t});return i}},la=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function ua(e){return"_on"+e}var ha=function(e){var t=this;this._texture=new Q({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),Q.prototype.dispose.call(this,r)}}),la.forEach(function(r){this[ua(r)]=function(i){i.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};ha.prototype={constructor:ha,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new L,t=new L,r=new L,i=new $,n=new $,a=new $,s=new $,o=new L;return function(l,u,h,c){var d=u.geometry,f=d.attributes.position,v=d.attributes.texcoord0,m=L.dot,p=L.cross;f.get(h[0],e.array),f.get(h[1],t.array),f.get(h[2],r.array),v.get(h[0],i.array),v.get(h[1],n.array),v.get(h[2],a.array),p(o,t,r);var g=m(e,o),T=m(c,o)/g;p(o,r,e);var x=m(c,o)/g;p(o,e,t);var _=m(c,o)/g;$.scale(s,i,T),$.scaleAndAdd(s,s,n,x),$.scaleAndAdd(s,s,a,_);var S=s.x*this._chart.getWidth(),b=s.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:S,zrY:b})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(la.forEach(function(t){e.on(t,this[ua(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),la.forEach(function(r){e.off(r,this[ua(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Ur=Gr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Gr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}});const cc=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;z.import(cc);var fc=new xn,bs=new Fe({geometry:fc,frustumCulling:!1}),dc=new Ur,Me=Xe.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new z(z.source("clay.compositor.vertex"),this.fragment),t=new ft({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||D.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var s=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){s=s|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var o=this.clearColor;Array.isArray(o)&&r.clearColor(o[0],o[1],o[2],o[3])}r.clear(s),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){bs.material=this.material,e.renderPass([bs],dc)},dispose:function(e){}});const vc=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,mc=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var Mt={},Wn=["px","nx","py","ny","pz","nz"];Mt.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=Mt.generateNormalDistribution(),n=Mt.integrateBRDF(e,i)),r=r||{};var a=r.width||64,s=r.height||64,o=r.type||t.type,l=new mr({width:a,height:s,type:o,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,s),h=Math.log(u)/Math.log(2)+1,c=new ft({shader:new z({vertex:z.source("clay.skybox.vertex"),fragment:mc})});c.set("normalDistribution",i),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new $t,f;if(t.textureType==="texture2D"){var v=new mr({width:a,height:s,type:o===F.FLOAT?F.HALF_FLOAT:o});Lt.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}f=new gi({scene:d,material:c}),f.material.set("environmentMap",t);var m=new ba({texture:l});r.encodeRGBM&&(o=l.type=F.UNSIGNED_BYTE);for(var p=new Q({width:a,height:s,type:o}),g=new Ae({depthBuffer:!1}),T=se[o===F.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<h;x++){l.mipmaps[x]={pixels:{}},f.material.set("roughness",x/(h-1));for(var _=p.width,S=2*Math.atan(_/(_-.5))/Math.PI*180,b=0;b<Wn.length;b++){var A=new T(p.width*p.height*4);g.attach(p),g.bind(e);var E=m.getCamera(Wn[b]);E.fov=S,e.render(d,E),e.gl.readPixels(0,0,p.width,p.height,F.RGBA,o,A),g.unbind(e),l.mipmaps[x].pixels[Wn[b]]=A}p.width/=2,p.height/=2,p.dirty()}return g.dispose(e),p.dispose(e),f.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:h}};Mt.integrateBRDF=function(e,t){t=t||Mt.generateNormalDistribution();var r=new Ae({depthBuffer:!1}),i=new Me({fragment:vc}),n=new Q({width:512,height:256,type:F.HALF_FLOAT,wrapS:F.CLAMP_TO_EDGE,wrapT:F.CLAMP_TO_EDGE,minFilter:F.NEAREST,magFilter:F.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};Mt.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new Q({width:r,height:i,type:F.FLOAT,minFilter:F.NEAREST,magFilter:F.NEAREST,wrapS:F.CLAMP_TO_EDGE,wrapT:F.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),s=[],o=0;o<r;o++){for(var l=o/r,u=l*l,h=0;h<i;h++){var c=(h<<16|h>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-c)/(1+(u*u-1)*c));s[h]=d}for(var h=0;h<i;h++){var f=(h*r+o)*4,d=s[h],v=Math.sqrt(1-d*d),m=h/i,p=2*Math.PI*m;a[f]=v*Math.cos(p),a[f+1]=d,a[f+2]=v*Math.sin(p),a[f+3]=1}}return n.pixels=a,n};var pc=yt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Mt.generateNormalDistribution(),this._brdfLookup=Mt.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=Mt.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),gc=yt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new se.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),Co={},cr=["px","nx","py","ny","pz","nz"];function _c(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var yc={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function xc(e,t,r,i){for(var n=new se.Float32Array(27),a=w.create(),s=w.create(),o=w.create(),l=0;l<9;l++){for(var u=w.create(),h=0;h<cr.length;h++){for(var c=t[cr[h]],d=w.create(),f=0,v=0,m=yc[cr[h]],p=0;p<i;p++)for(var g=0;g<r;g++){a[0]=g/(r-1)*2-1,a[1]=p/(i-1)*2-1,a[2]=-1,w.normalize(a,a),o[0]=a[m[0]]*m[3],o[1]=a[m[1]]*m[4],o[2]=a[m[2]]*m[5],s[0]=c[v++]/255,s[1]=c[v++]/255,s[2]=c[v++]/255;var T=c[v++]/255*8.12;s[0]*=T,s[1]*=T,s[2]*=T,w.scaleAndAdd(d,d,s,_c(o,l)*-a[2]),f+=-a[2]}w.scaleAndAdd(u,u,d,1/f)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}Co.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new $t,a=64;t.textureType==="texture2D"?i=new gi({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new gi({scene:n,environmentMap:t}));var s=Math.ceil(a/Math.pow(2,r.lod)),o=Math.ceil(a/Math.pow(2,r.lod)),l=new Q({width:s,height:o}),u=new Ae;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var h=new ba({texture:l}),c={},d=0;d<cr.length;d++){c[cr[d]]=new Uint8Array(s*o*4);var f=h.getCamera(cr[d]);f.fov=90,u.attach(l),u.bind(e),e.render(n,f),e.gl.readPixels(0,0,s,o,F.RGBA,F.UNSIGNED_BYTE,c[cr[d]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),xc(e,c,s,o)};var J={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Ct(t.dataIndex)?Ha(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Ct(t.name)?Ha(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},Tc=ee.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var s=a>65535?Uint32Array:Uint16Array,o=this.indices=new s(t*e*6),l,u,h,c,d,f,v,x=this.radius,m=this.phiStart,p=this.phiLength,g=this.thetaStart,T=this.thetaLength,x=this.radius,_=[],S=[],b=0,A=1/x;for(v=0;v<=e;v++)for(f=0;f<=t;f++)c=f/t,d=v/e,l=-x*Math.cos(m+c*p)*Math.sin(g+d*T),u=x*Math.cos(g+d*T),h=x*Math.sin(m+c*p)*Math.sin(g+d*T),_[0]=l,_[1]=u,_[2]=h,S[0]=c,S[1]=d,r.set(b,_),i.set(b,S),_[0]*=A,_[1]*=A,_[2]*=A,n.set(b,_),b++;var E,M,I,C,B=t+1,G=0;for(v=0;v<e;v++)for(f=0;f<t;f++)M=v*B+f,E=v*B+f+1,C=(v+1)*B+f+1,I=(v+1)*B+f,o[G++]=E,o[G++]=M,o[G++]=C,o[G++]=M,o[G++]=I,o[G++]=C;this.boundingBox=new ke,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}}),wc=yt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),Sc=yt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=yt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),bc=yt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=yt.prototype.clone.call(this);return e.range=this.range,e}}),Ec=yt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new L,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=yt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),ie=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=P.fromValues(e,t,r,i),this._dirty=!0};ie.prototype={constructor:ie,add:function(e){return P.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ie(this.x,this.y,this.z,this.w)},copy:function(e){return P.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return P.dist(this.array,e.array)},distance:function(e){return P.distance(this.array,e.array)},div:function(e){return P.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return P.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return P.dot(this.array,e.array)},len:function(){return P.len(this.array)},length:function(){return P.length(this.array)},lerp:function(e,t,r){return P.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return P.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return P.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return P.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return P.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return P.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return P.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return P.random(this.array,e),this._dirty=!0,this},scale:function(e){return P.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return P.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return P.sqrDist(this.array,e.array)},squaredDistance:function(e){return P.squaredDistance(this.array,e.array)},sqrLen:function(){return P.sqrLen(this.array)},squaredLength:function(){return P.squaredLength(this.array)},sub:function(e){return P.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return P.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return P.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return P.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ii=Object.defineProperty;if(ii){var ki=ie.prototype;ii(ki,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),ii(ki,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),ii(ki,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),ii(ki,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ie.add=function(e,t,r){return P.add(e.array,t.array,r.array),e._dirty=!0,e};ie.set=function(e,t,r,i,n){P.set(e.array,t,r,i,n),e._dirty=!0};ie.copy=function(e,t){return P.copy(e.array,t.array),e._dirty=!0,e};ie.dist=function(e,t){return P.distance(e.array,t.array)};ie.distance=ie.dist;ie.div=function(e,t,r){return P.divide(e.array,t.array,r.array),e._dirty=!0,e};ie.divide=ie.div;ie.dot=function(e,t){return P.dot(e.array,t.array)};ie.len=function(e){return P.length(e.array)};ie.lerp=function(e,t,r,i){return P.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ie.min=function(e,t,r){return P.min(e.array,t.array,r.array),e._dirty=!0,e};ie.max=function(e,t,r){return P.max(e.array,t.array,r.array),e._dirty=!0,e};ie.mul=function(e,t,r){return P.multiply(e.array,t.array,r.array),e._dirty=!0,e};ie.multiply=ie.mul;ie.negate=function(e,t){return P.negate(e.array,t.array),e._dirty=!0,e};ie.normalize=function(e,t){return P.normalize(e.array,t.array),e._dirty=!0,e};ie.random=function(e,t){return P.random(e.array,t),e._dirty=!0,e};ie.scale=function(e,t,r){return P.scale(e.array,t.array,r),e._dirty=!0,e};ie.scaleAndAdd=function(e,t,r,i){return P.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};ie.sqrDist=function(e,t){return P.sqrDist(e.array,t.array)};ie.squaredDistance=ie.sqrDist;ie.sqrLen=function(e){return P.sqrLen(e.array)};ie.squaredLength=ie.sqrLen;ie.sub=function(e,t,r){return P.subtract(e.array,t.array,r.array),e._dirty=!0,e};ie.subtract=ie.sub;ie.transformMat4=function(e,t,r){return P.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ie.transformQuat=function(e,t,r){return P.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var ne={};ne.create=function(){var e=new je(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ne.clone=function(e){var t=new je(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};ne.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};ne.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ne.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};ne.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=r*a-n*i;return s?(s=1/s,e[0]=a*s,e[1]=-i*s,e[2]=-n*s,e[3]=r*s,e):null};ne.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};ne.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};ne.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*o+a*l,e[1]=n*o+s*l,e[2]=i*u+a*h,e[3]=n*u+s*h,e};ne.mul=ne.multiply;ne.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*o,e[1]=n*l+s*o,e[2]=i*-o+a*l,e[3]=n*-o+s*l,e};ne.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=r[0],l=r[1];return e[0]=i*o,e[1]=n*o,e[2]=a*l,e[3]=s*l,e};ne.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};ne.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var et=function(){this.array=ne.create(),this._dirty=!0};et.prototype={constructor:et,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new et().copy(this)},copy:function(e){return ne.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return ne.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return ne.determinant(this.array)},identity:function(){return ne.identity(this.array),this._dirty=!0,this},invert:function(){return ne.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ne.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ne.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ne.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ne.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ne.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ne.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return ne.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};et.adjoint=function(e,t){return ne.adjoint(e.array,t.array),e._dirty=!0,e};et.copy=function(e,t){return ne.copy(e.array,t.array),e._dirty=!0,e};et.determinant=function(e){return ne.determinant(e.array)};et.identity=function(e){return ne.identity(e.array),e._dirty=!0,e};et.invert=function(e,t){return ne.invert(e.array,t.array),e._dirty=!0,e};et.mul=function(e,t,r){return ne.mul(e.array,t.array,r.array),e._dirty=!0,e};et.multiply=et.mul;et.rotate=function(e,t,r){return ne.rotate(e.array,t.array,r),e._dirty=!0,e};et.scale=function(e,t,r){return ne.scale(e.array,t.array,r.array),e._dirty=!0,e};et.transpose=function(e,t){return ne.transpose(e.array,t.array),e._dirty=!0,e};var le={};le.create=function(){var e=new je(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};le.clone=function(e){var t=new je(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};le.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};le.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};le.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*o-a*s)*l,e[5]=(i*s-r*o)*l,e):null};le.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};le.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=r[0],h=r[1],c=r[2],d=r[3],f=r[4],v=r[5];return e[0]=i*u+a*h,e[1]=n*u+s*h,e[2]=i*c+a*d,e[3]=n*c+s*d,e[4]=i*f+a*v+o,e[5]=n*f+s*v+l,e};le.mul=le.multiply;le.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=Math.sin(r),h=Math.cos(r);return e[0]=i*h+a*u,e[1]=n*h+s*u,e[2]=i*-u+a*h,e[3]=n*-u+s*h,e[4]=o,e[5]=l,e};le.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i*u,e[1]=n*u,e[2]=a*h,e[3]=s*h,e[4]=o,e[5]=l,e};le.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],s=t[3],o=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=s,e[4]=i*u+a*h+o,e[5]=n*u+s*h+l,e};le.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var st=function(){this.array=le.create(),this._dirty=!0};st.prototype={constructor:st,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new st().copy(this)},copy:function(e){return le.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return le.determinant(this.array)},identity:function(){return le.identity(this.array),this._dirty=!0,this},invert:function(){return le.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return le.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return le.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return le.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return le.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return le.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return le.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return le.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};st.copy=function(e,t){return le.copy(e.array,t.array),e._dirty=!0,e};st.determinant=function(e){return le.determinant(e.array)};st.identity=function(e){return le.identity(e.array),e._dirty=!0,e};st.invert=function(e,t){return le.invert(e.array,t.array),e._dirty=!0,e};st.mul=function(e,t,r){return le.mul(e.array,t.array,r.array),e._dirty=!0,e};st.multiply=st.mul;st.rotate=function(e,t,r){return le.rotate(e.array,t.array,r),e._dirty=!0,e};st.scale=function(e,t,r){return le.scale(e.array,t.array,r.array),e._dirty=!0,e};st.translate=function(e,t,r){return le.translate(e.array,t.array,r.array),e._dirty=!0,e};var Re=function(){this.array=Y.create(),this._dirty=!0};Re.prototype={constructor:Re,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return Y.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Re().copy(this)},copy:function(e){return Y.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Y.determinant(this.array)},fromMat2d:function(e){return Y.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return Y.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return Y.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return Y.identity(this.array),this._dirty=!0,this},invert:function(){return Y.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Y.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Y.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Y.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Y.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Y.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Y.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Y.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return Y.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return Y.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Re.adjoint=function(e,t){return Y.adjoint(e.array,t.array),e._dirty=!0,e};Re.copy=function(e,t){return Y.copy(e.array,t.array),e._dirty=!0,e};Re.determinant=function(e){return Y.determinant(e.array)};Re.identity=function(e){return Y.identity(e.array),e._dirty=!0,e};Re.invert=function(e,t){return Y.invert(e.array,t.array),e};Re.mul=function(e,t,r){return Y.mul(e.array,t.array,r.array),e._dirty=!0,e};Re.multiply=Re.mul;Re.fromMat2d=function(e,t){return Y.fromMat2d(e.array,t.array),e._dirty=!0,e};Re.fromMat4=function(e,t){return Y.fromMat4(e.array,t.array),e._dirty=!0,e};Re.fromQuat=function(e,t){return Y.fromQuat(e.array,t.array),e._dirty=!0,e};Re.normalFromMat4=function(e,t){return Y.normalFromMat4(e.array,t.array),e._dirty=!0,e};Re.rotate=function(e,t,r){return Y.rotate(e.array,t.array,r),e._dirty=!0,e};Re.scale=function(e,t,r){return Y.scale(e.array,t.array,r.array),e._dirty=!0,e};Re.transpose=function(e,t){return Y.transpose(e.array,t.array),e._dirty=!0,e};Re.translate=function(e,t,r){return Y.translate(e.array,t.array,r.array),e._dirty=!0,e};var Ac={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,s=0,o=n.length;s<o;s++)a&&(a=a[n[s]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new $l(i,t),h=this;return u.during(function(){h.__zr&&h.__zr.refresh()}).done(function(){var c=l.indexOf(u);c>=0&&l.splice(c,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}};const Do=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Lc=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Mc=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Cc=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Dc=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Pc=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Nc=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(At.prototype,Ac);z.import(Do);z.import(So);z.import(Lc);z.import(Mc);z.import(Cc);z.import(Dc);z.import(Pc);z.import(Nc);function Rc(e){return!e||e==="none"}function Po(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Ic(e){return e.getZr&&e.setOption}var Oc=$t.prototype.addToScene,Bc=$t.prototype.removeFromScene;$t.prototype.addToScene=function(e){if(Oc.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};$t.prototype.removeFromScene=function(e){Bc.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};ft.prototype.setTextureImage=function(e,t,r,i){if(this.shader){var n=r.getZr(),a=this,s;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Rc(t)||(s=y.loadTexture(t,r,i,function(o){a.enableTexture(e),n&&n.refresh()}),a.set(e,s)),s}};var y={};y.Renderer=dt;y.Node=At;y.Mesh=Fe;y.Shader=z;y.Material=ft;y.Texture=F;y.Texture2D=Q;y.Geometry=ee;y.SphereGeometry=Tc;y.PlaneGeometry=xn;y.CubeGeometry=Mo;y.AmbientLight=wc;y.DirectionalLight=Sc;y.PointLight=bc;y.SpotLight=Ec;y.PerspectiveCamera=Be;y.OrthographicCamera=Ur;y.Vector2=$;y.Vector3=L;y.Vector4=ie;y.Quaternion=ue;y.Matrix2=et;y.Matrix2d=st;y.Matrix3=Re;y.Matrix4=U;y.Plane=vi;y.Ray=vr;y.BoundingBox=ke;y.Frustum=_n;var Wi=null;function Fc(){return Wi!==null||(Wi=Lt.createBlank("rgba(255,255,255,0)").image),Wi}function Es(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function As(e){if((e.wrapS===F.REPEAT||e.wrapT===F.REPEAT)&&e.image){var t=Es(e.width),r=Es(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}y.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",s=0;s<n.length;s++)a+=n[s]+"_"+r[n[s]]+"_";var o=t.__textureCache=t.__textureCache||new Ql(20);if(Ic(e)){var l=e.__textureid__,u=o.get(a+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var h=new ha(e);h.onupdate=function(){t.getZr().refresh()},u={texture:h.getTexture()};for(var s=0;s<n.length;s++)u.texture[n[s]]=r[n[s]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,o.put(a+l,u),i&&i(u.texture)}return u.texture}else if(Po(e)){var l=e.__textureid__,u=o.get(a+l);if(!u){u={texture:new y.Texture2D({image:e})};for(var s=0;s<n.length;s++)u.texture[n[s]]=r[n[s]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,o.put(a+l,u),As(u.texture),i&&i(u.texture)}return u.texture}else{var u=o.get(a+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var c=Lt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),u.callbacks.forEach(function(v){v&&v(c)}),u.callbacks=null});u.texture=c,o.put(a+e,u)}else{for(var c=new y.Texture2D({image:new Image}),s=0;s<n.length;s++)c[n[s]]=r[n[s]];u={texture:c,callbacks:[i]};var d=c.image;d.onload=function(){c.image=d,As(c),c.dirty(),u.callbacks.forEach(function(m){m&&m(c)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,c.image=Fc(),o.put(a+e,u)}return u.texture}};y.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=J.firstNotNull(e.exposure,1),s=new pc({intensity:J.firstNotNull(e.specularIntensity,1)}),o=new gc({intensity:J.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return s.cubemap=y.loadTexture(n,r,{exposure:a},function(){s.cubemap.flipY=!1,s.prefilter(t,32),o.coefficients=Co.projectEnvironmentMap(t,s.cubemap,{lod:1}),i&&i()}),{specular:s,diffuse:o}};y.createBlankTexture=Lt.createBlank;y.isImage=Po;y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};y.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=oo(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};y.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};y.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};y.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];y.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=z.source(e+".vertex"),r=z.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new z(t,r);return i.name=e,i};y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=y.createShader(e),i=new ft({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};y.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),s=J.firstNotNull(n.get("textureTiling"),1),o=J.firstNotNull(n.get("textureOffset"),0);typeof s=="number"&&(s=[s,s]),typeof o=="number"&&(o=[o,o]);var l=s[0]>1||s[1]>1?y.Texture.REPEAT:y.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var h=n.get("roughness"),c=n.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,i,u),c=J.firstNotNull(n.get("metalnessAdjust"),.5)):c=0,h!=null?isNaN(h)&&(t.setTextureImage("roughnessMap",h,i,u),h=J.firstNotNull(n.get("roughnessAdjust"),.5)):h=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,u),t.setTextureImage("normalMap",d,i,u),t.set({roughness:h,metalness:c,detailUvRepeat:s,detailUvOffset:o})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:s,detailUvOffset:o});else if(e==="color")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:s,detailUvOffset:o});else if(e==="hatching"){var f=n.get("hatchingTextures")||[];f.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),f[v],i,{anisotropic:8,wrapS:y.Texture.REPEAT,wrapT:y.Texture.REPEAT});t.set({detailUvRepeat:s,detailUvOffset:o})}};y.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),s=i.get("animationEasingUpdate"),o=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,o&&o.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),o&&o.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),o&&o.undefine("vertex","VERTEX_ANIMATION")}).start(s)}else r.material.undefine("vertex","VERTEX_ANIMATION"),o&&o.undefine("vertex","VERTEX_ANIMATION")};var ve=function(e,t){this.id=e,this.zr=t;try{this.renderer=new dt({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Sa({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new lo({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};ve.prototype.setUnpainted=function(){};ve.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function No(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}ve.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(No,this),e.layer=null,this._viewsToDispose.push(e))}};ve.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(No,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};ve.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};ve.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};ve.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};ve.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};ve.prototype.needsRefresh=function(){this.zr.refresh()};ve.prototype.refresh=function(e){this._backgroundColor=e?y.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};ve.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};ve.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};ve.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var zc=1;ve.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var s=!0,o=0;o<t.views.length;o++)s=t.views[o].isAccumulateFinished()&&r;s||(t._doRender(!0),e?n(a):ra(function(){n(a)}))}}this._accumulatingId=zc++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};ve.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(tn(this._textureList),tn(this._geometriesList));for(var r=0;r<this.views.length;r++)Gc(this.views[r].scene,e,t);this._textureList&&(rn(this.renderer,this._textureList),rn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function tn(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function rn(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function Xi(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Gc(e,t,r){var i,n;e.traverse(function(s){if(s.isRenderable()){var o=s.geometry,l=s.material;if(l!==i)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var c=u[h],d=l.uniforms[c].value;if(d){if(d instanceof F)Xi(d,t);else if(d instanceof Array)for(var f=0;f<d.length;f++)d[f]instanceof F&&Xi(d[f],t)}}o!==n&&Xi(o,r),i=l,n=o}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&Xi(e.lights[a].cubemap,t)}ve.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(tn(this._textureList),tn(this._geometriesList),rn(this.renderer,this._textureList),rn(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};ve.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};ve.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};ve.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};ve.prototype.onclick=ve.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};ve.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};ve.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};ve.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var s=this.views[a];s.containPoint(e,t)&&(this._picking.scene=s.scene,this._picking.camera=s.camera,i.viewport=s.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(o,l){return o.distance-l.distance}),r[0]};ve.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};ve.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,s=i&&i.eventData,o=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const h=Jl(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),o=!0):s!=null&&s!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),o=!0),this._lastEventData=s,this._lastDataIndex=n,this._lastSeriesIndex=a),h.eventData=s,h.dataIndex=n,h.seriesIndex=a,(s!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),o&&this.zr.handler.dispatchToElement(u,"mouseover",t))};ve.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(ve.prototype,wa);var Uc=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function li(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function Hc(e){li(e,"itemStyle"),li(e,"lineStyle"),li(e,"areaStyle"),li(e,"label")}function ji(e){e&&(e instanceof Array||(e=[e]),Dt(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function Vc(e){Dt(e.series,function(t){eu(Uc,t.type)>=0&&(Hc(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),ji(e.xAxis3D),ji(e.yAxis3D),ji(e.zAxis3D),ji(e.grid3D),li(e.geo3D)}function Ro(e){this._layers={},this._zr=e}Ro.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(o){i.setSleepAfterStill(0);var l;o.coordinateSystem&&o.coordinateSystem.model,l=o.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new ve("gl-"+l,i),i.painter.isSingleCanvas()){h.virtual=!0;var c=new nu({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=c,i.add(c)}i.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function a(o,l){o&&o.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var s in this._layers)this._layers[s].removeViewsAll();e.eachComponent(function(o,l){if(o!=="series"){var u=t.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){var c;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=h.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=h.viewGL}var c=h.viewGL,d=n(l);d.addView(c),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(o){var l=t.getViewOfSeriesModel(o),u=o.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var h=u&&u.viewGL||l.viewGL,c=n(o);c.addView(h),l.afterRender&&l.afterRender(o,e,t,c),a(l.groupGL,o.get("silent"))}})};tu(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof ve&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var s=n.getContext("2d");s.dpr=a,s.clearRect(0,0,n.width,n.height),i.backgroundColor&&(s.fillStyle=i.backgroundColor,s.fillRect(0,0,n.width,n.height));var o=this.storage.getDisplayList(!0),l={},u,h=this;function c(m,p){var g=h._zlevelList;m==null&&(m=-1/0);for(var T,x=0;x<g.length;x++){var _=g[x],S=h._layers[_];if(!S.__builtin__&&_>m&&_<p){T=S;break}}T&&T.renderToCanvas&&(s.save(),T.renderToCanvas(s),s.restore())}for(var d={ctx:s},f=0;f<o.length;f++){var v=o[f];v.zlevel!==u&&(c(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return c(u,1/0),n}});ru(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new Ro(r);i.update(e,t)});iu(Vc);const Tn={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},jr={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Zr={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var wn=Xr.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});he(wn.prototype,Tn);he(wn.prototype,jr);he(wn.prototype,Zr);var ni=J.firstNotNull,Ls={left:0,middle:1,right:2};function Ms(e){return e instanceof Array||(e=[e,e]),e}var Pi=Xe.extend(function(){return{zr:null,viewGL:null,_center:new L,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new $,_panVelocity:new $,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,s=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=ni(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var o=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=ni(e.get(d),o&&o.get(d))});var u=ni(t.alpha,e.get("alpha"))||0,h=ni(t.beta,e.get("beta"))||0,c=ni(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:h,center:c,distance:a,orthographicSize:s,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(h),this.setCenter(c),this.setOrthographicSize(s)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new L,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===Ls[this.rotateMouseButton]?this._mode="rotate":e.event.button===Ls[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Ms(this.panSensitivity),r=Ms(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(Pi.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});const Ni={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},Le={vec2:O,vec3:w,vec4:P,mat3:Y,mat4:N};var Xn=Le.vec3,Cs=[[0,0],[1,1]],Qt=ee.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new ee.Attribute("position","float",3,"POSITION"),positionPrev:new ee.Attribute("positionPrev","float",3),positionNext:new ee.Attribute("positionNext","float",3),prevPositionPrev:new ee.Attribute("prevPositionPrev","float",3),prevPosition:new ee.Attribute("prevPosition","float",3),prevPositionNext:new ee.Attribute("prevPositionNext","float",3),offset:new ee.Attribute("offset","float",1),color:new ee.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Xn.dist(e,t)+Xn.dist(r,t)+Xn.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Cs)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Cs)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var s=e[0],o=e[1],l=e[2],u=t[0],h=t[1],c=t[2],d=r[0],f=r[1],v=r[2],m=i[0],p=i[1],g=i[2],T=this._getCubicCurveApproxStep(e,t,r,i),x=T*T,_=x*T,S=3*T,b=3*x,A=6*x,E=6*_,M=s-u*2+d,I=o-h*2+f,C=l-c*2+v,B=(u-d)*3-s+m,G=(h-f)*3-o+p,R=(c-v)*3-l+g,H=s,W=o,j=l,k=(u-s)*S+M*b+B*_,oe=(h-o)*S+I*b+G*_,X=(c-l)*S+C*b+R*_,fe=M*A+B*E,ae=I*A+G*E,me=C*A+R*E,pe=B*E,te=G*E,Ce=R*E,xe=0,Se=0,Ze=Math.ceil(1/T),He=new Float32Array((Ze+1)*3),He=[],Oe=0,Se=0;Se<Ze+1;Se++)He[Oe++]=H,He[Oe++]=W,He[Oe++]=j,H+=k,W+=oe,j+=X,k+=fe,oe+=ae,X+=me,fe+=pe,ae+=te,me+=Ce,xe+=T,xe>1&&(H=k>0?Math.min(H,m):Math.max(H,m),W=oe>0?Math.min(W,p):Math.max(W,p),j=X>0?Math.min(j,g):Math.max(j,g));return this.addPolyline(He,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",s=a?typeof t[0]!="number":t.length/4===n,o=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,h=this.attributes.color,c=this.attributes.offset,d=this.indices,f=this._vertexOffset,v,m;r=Math.max(r,.01);for(var p=i;p<n;p++){if(a)v=e[p],s?m=t[p]:m=t;else{var g=p*3;if(v=v||[],v[0]=e[g],v[1]=e[g+1],v[2]=e[g+2],s){var T=p*4;m=m||[],m[0]=t[T],m[1]=t[T+1],m[2]=t[T+2],m[3]=t[T+3]}else m=t}if(this.useNativeLine?p>1&&(o.copy(f,f-1),h.copy(f,f-1),f++):(p<n-1&&(l.set(f+2,v),l.set(f+3,v)),p>0&&(u.set(f-2,v),u.set(f-1,v)),o.set(f,v),o.set(f+1,v),h.set(f,m),h.set(f+1,m),c.set(f,r/2),c.set(f+1,-r/2),f+=2),this.useNativeLine)h.set(f,m),o.set(f,v),f++;else if(p>0){var x=this._triangleOffset*3,d=this.indices;d[x]=f-4,d[x+1]=f-3,d[x+2]=f-2,d[x+3]=f-3,d[x+4]=f-1,d[x+5]=f-2,this._triangleOffset+=2}}if(!this.useNativeLine){var _=this._vertexOffset,S=this._vertexOffset+n*2;l.copy(_,_+2),l.copy(_+1,_+3),u.copy(S-1,S-3),u.copy(S-2,S-4)}return this._vertexOffset=f,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Kt(Qt.prototype,Ni);function nn(e,t,r,i,n,a,s){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=s,this.gap=a}nn.prototype={constructor:nn,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,s=this.width*this.dpr,o=this.height*this.dpr,l=this.gap;if(n+t+l>s&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>o)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],h=[[n/s+u[0],a/o+u[1]],[(n+t)/s+u[0],(a+r)/o+u[1]]];return h},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function an(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new Q({image:t,flipY:!1});var r=this;this._zr=au(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new nn(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}an.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,s=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:s})}catch{this._canvas.width=a,this._canvas.height=s}var o=new nn(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(o),o}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function qt(){}qt.prototype={constructor:qt,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new y.DirectionalLight({shadowBias:.005}),this.ambientLight=new y.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=y.parseColor(n.get("color")).slice(0,3),r.color=y.parseColor(a.get("color")).slice(0,3);var s=n.get("alpha")||0,o=n.get("beta")||0;t.position.setArray(y.directionFromAlphaBeta(s,o)),t.lookAt(y.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=y.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var s=this;a=this._cubemapLightsCache[n]=y.createAmbientCubemap(i.option,e,r,function(){s._isSkyboxFromAmbientCubemap&&s._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new gi,n._skybox}var s=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var o=this._currentCubemapLights.specular.cubemap;s.setEnvironmentMap(o),this._scene&&s.attachScene(this._scene),s.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&oo(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new y.Texture2D({anisotropic:8,flipY:!1});s.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var h=u.getContext("2d"),c=new lo({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});uo(h,c),s.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=y.loadTexture(i,r,{anisotropic:8,flipY:!1});s.setEnvironmentMap(l),s.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var f=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[f]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var nr=Le.vec3,Io=ee.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new ee.Attribute("position","float",3,"POSITION"),normal:new ee.Attribute("normal","float",3,"NORMAL"),color:new ee.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=nr.create(),t=nr.create(),r=nr.create(),i=[0,3,1,3,2,1];return function(n,a){var s=this.attributes.position,o=this.attributes.normal,l=this.attributes.color;nr.sub(e,n[1],n[0]),nr.sub(t,n[2],n[1]),nr.cross(r,e,t),nr.normalize(r,r);for(var u=0;u<4;u++)s.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),o.set(this._vertexOffset+u,r);for(var h=this._faceOffset*3,u=0;u<6;u++)this.indices[h+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});Kt(Io.prototype,Ni);var ca=J.firstNotNull,kc={x:0,y:2,z:1};function Wc(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[kc[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function Sn(e,t,r){this.rootNode=new y.Node;var i=new y.Mesh({geometry:new Qt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new y.Mesh({geometry:new Io,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new y.Plane,this.linesMesh=i,this.quadsMesh=n}Sn.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,s=this.quadsMesh.geometry;a.convertToDynamicArray(!0),s.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(s,n,e,r),a.convertToTypedArray(),s.convertToTypedArray();var o=i.getAxis(this.faceInfo[2]);Wc(this.rootNode,this.plane,o,this.faceInfo[3])};Sn.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,s){var o=a.model,l=t[1-s].getExtent();if(!a.scale.isBlank()){var u=o.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),c=h.get("color"),d=ca(h.get("opacity"),1),f=ca(h.get("width"),1);c=Ct(c)?c:[c];for(var v=a.getTicksCoords({tickModel:u}),m=0,p=0;p<v.length;p++){var g=v[p].coord,T=y.parseColor(c[m%c.length]);T[3]*=d;var x=[0,0,0],_=[0,0,0];x[s]=_[s]=g,x[1-s]=l[0],_[1-s]=l[1],e.addLine(x,_,T,f*n),m++}}}})};Sn.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var s=n.model,o=t[1-a].getExtent();if(!n.scale.isBlank()){var l=s.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),c=ca(u.get("opacity"),1);h=Ct(h)?h:[h];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),f=0,v=[0,0,0],m=[0,0,0],p=0;p<d.length;p++){var g=d[p].coord,T=[0,0,0],x=[0,0,0];if(T[a]=x[a]=g,T[1-a]=o[0],x[1-a]=o[1],p===0){v=T,m=x;continue}var _=y.parseColor(h[f%h.length]);_[3]*=c,e.addQuad([v,T,x,m],_),v=T,m=x,f++}}}})};var Ds=[0,1,2,0,2,3],Oo=ee.extend(function(){return{attributes:{position:new ee.Attribute("position","float",3,"POSITION"),texcoord:new ee.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new ee.Attribute("offset","float",2),color:new ee.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,s,o,l;switch(n=n||0,r){case"left":a=n,o=t[0]+n;break;case"center":case"middle":a=-t[0]/2,o=t[0]/2;break;case"right":a=-t[0]-n,o=-n;break}switch(i){case"bottom":s=n,l=t[1]+n;break;case"middle":s=-t[1]/2,l=t[1]/2;break;case"top":s=-t[1]-n,l=-n;break}var u=e*4,h=this.attributes.offset;h.set(u,[a,l]),h.set(u+1,[o,l]),h.set(u+2,[o,s]),h.set(u+3,[a,s])},addSprite:function(e,t,r,i,n,a){var s=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var o=0;o<Ds.length;o++)this.indices[this._faceOffset*3+o]=Ds[o]+s;return this._faceOffset+=2,this._vertexOffset+=4,s/4},setSprite:function(e,t,r,i,n,a,s){for(var o=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(o+u,t);var h=l.texcoord;h.set(o,[i[0][0],i[0][1]]),h.set(o+1,[i[1][0],i[0][1]]),h.set(o+2,[i[1][0],i[1][1]]),h.set(o+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,s)}});Kt(Oo.prototype,Ni);const Xc=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;y.Shader.import(Xc);const Aa=y.Mesh.extend(function(){var e=new Oo({dynamic:!0}),t=new y.Material({shader:y.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}});var ar=J.firstNotNull,sr={x:0,y:2,z:1};function La(e,t){var r=new y.Mesh({geometry:new Qt({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new Aa;i.material.depthMask=!1;var n=new y.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var jn={x:"y",y:"x",z:"y"};La.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,s=this.labelsMesh.geometry;a.convertToDynamicArray(!0),s.convertToDynamicArray(!0);var o=n.model,l=n.getExtent(),C=r.getDevicePixelRatio(),u=o.getModel("axisLine",e.getModel("axisLine")),h=o.getModel("axisTick",e.getModel("axisTick")),c=o.getModel("axisLabel",e.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var f=u.getModel("lineStyle"),v=[0,0,0],m=[0,0,0],p=sr[n.dim];v[p]=l[0],m[p]=l[1],this.axisLineCoords=[v,m];var g=y.parseColor(d),T=ar(f.get("width"),1),x=ar(f.get("opacity"),1);g[3]*=x,a.addLine(v,m,g,T*C)}if(h.get("show")){var _=h.getModel("lineStyle"),S=y.parseColor(ar(_.get("color"),d)),T=ar(_.get("width"),1);S[3]*=ar(_.get("opacity"),1);for(var b=n.getTicksCoords(),A=h.get("length"),E=0;E<b.length;E++){var M=b[E].coord,v=[0,0,0],m=[0,0,0],p=sr[n.dim],I=sr[jn[n.dim]];v[p]=m[p]=M,m[I]=A,a.addLine(v,m,S,T*C)}}this.labelElements=[];var C=r.getDevicePixelRatio();if(c.get("show"))for(var b=n.getTicksCoords(),B=o.get("data"),G=c.get("margin"),R=n.getViewLabels(),E=0;E<R.length;E++){var H=R[E].tickValue,W=R[E].formattedLabel,j=R[E].rawLabel,M=n.dataToCoord(H),k=[0,0,0],p=sr[n.dim],I=sr[jn[n.dim]];k[p]=k[p]=M,k[I]=G;var oe=c;B&&B[H]&&B[H].textStyle&&(oe=new Or(B[H].textStyle,c,o.ecModel));var X=ar(oe.get("color"),d),fe=new Ji({style:en(oe,{text:W,fill:typeof X=="function"?X(n.type==="category"?j:n.type==="value"?H+"":H,E):X,verticalAlign:"top",align:"left"})}),ae=t.add(fe),me=fe.getBoundingRect();s.addSprite(k,[me.width*C,me.height*C],ae),this.labelElements.push(fe)}if(o.get("name")){var pe=o.getModel("nameTextStyle"),k=[0,0,0],p=sr[n.dim],I=sr[jn[n.dim]],te=ar(pe.get("color"),d),Ce=pe.get("borderColor"),T=pe.get("borderWidth");k[p]=k[p]=(l[0]+l[1])/2,k[I]=o.get("nameGap");var fe=new Ji({style:en(pe,{text:o.get("name"),fill:te,stroke:Ce,lineWidth:T})}),ae=t.add(fe),me=fe.getBoundingRect();s.addSprite(k,[me.width*C,me.height*C],ae),fe.__idx=this.labelElements.length,this.nameLabelElement=fe}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),s.convertToTypedArray()};La.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var s=this.labelElements[a],o=s.getBoundingRect();n.setSpriteAlign(a,[o.width*i,o.height*i],e,t)}var l=this.nameLabelElement;if(l){var o=l.getBoundingRect();n.setSpriteAlign(l.__idx,[o.width*i,o.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};const bn=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var Ps=J.firstNotNull;y.Shader.import(bn);var or={x:0,y:2,z:1};const jc=Mi.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new y.Material({shader:y.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new y.Material({shader:y.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new y.Node,this._control=new Pi({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(o){var l=new Sn(o,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(o){var l=new La(o,a);return this.groupGL.add(l.rootNode),l},this);var s=t.getDevicePixelRatio();this._axisLabelSurface=new an({width:256,height:256,devicePixelRatio:s}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new y.Mesh({geometry:new Qt({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new an({width:128,height:128,devicePixelRatio:s}),this._axisPointerLabelsMesh=new Aa({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new y.Node,this._sceneHelper=new qt,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(s){s.update(e,t,r)},this),this._axes.forEach(function(s){s.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new y.Ray),a,s=0;s<this._faces.length;s++){var o=this._faces[s];if(!o.rootNode.invisible){o.plane.normal.dot(i.camera.worldTransform.z)<0&&o.plane.normal.negate();var l=n.intersectPlane(o.plane);if(l){var u=r.getAxis(o.faceInfo[0]),h=r.getAxis(o.faceInfo[1]),c=or[o.faceInfo[0]],d=or[o.faceInfo[1]];u.contain(l.array[c])&&h.contain(l.array[d])&&(a=l)}}}if(a){var f=r.pointToData(a.array,[],!0);this._updateAxisPointer(f),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new y.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var s=i[0]>i[1]?0:1,o=this._faces[r*2+s],l=this._faces[r*2+1-s];o.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),s=t.getExtentMin(),o=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),h=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,f=this._faces,v=f[4].rootNode.invisible?u:l,m=f[2].rootNode.invisible?n:a,p=f[0].rootNode.invisible?s:o,g=f[2].rootNode.invisible?n:a,T=f[0].rootNode.invisible?o:s,x=f[4].rootNode.invisible?u:l;h.rotation.identity(),c.rotation.identity(),d.rotation.identity(),f[4].rootNode.invisible&&(this._axes[0].flipped=!0,h.rotation.rotateX(Math.PI)),f[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),f[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),h.position.set(0,m,v),c.position.set(p,g,0),d.position.set(T,0,x),h.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new y.Vector4,new y.Vector4],r=new y.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var s=t[1].x-t[0].x,o=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,h,c;Math.abs(o/s)<.5?(h="center",c=u>r.y?"bottom":"top"):(c="middle",h=l>r.x?"left":"right"),i.setSpriteAlign(h,c,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),s=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function o(E){return J.firstNotNull(E.model.get("axisPointer.show"),a.get("show"))}function l(E){var M=E.model.getModel("axisPointer",a),I=M.getModel("lineStyle"),C=y.parseColor(I.get("color")),B=Ps(I.get("width"),1),G=Ps(I.get("opacity"),1);return C[3]*=G,{color:C,lineWidth:B}}for(var u=0;u<this._faces.length;u++){var h=this._faces[u];if(!h.rootNode.invisible){for(var c=h.faceInfo,d=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),f=or[c[2]],v=0;v<2;v++){var m=c[v],p=c[1-v],g=t.getAxis(m),T=t.getAxis(p);if(o(g)){var x=[0,0,0],_=[0,0,0],S=or[m],b=or[p];x[S]=_[S]=r[S],x[f]=_[f]=d,x[b]=T.getExtentMin(),_[b]=T.getExtentMax();var A=l(g);n.addLine(x,_,A.color,A.lineWidth*s)}}if(o(t.getAxis(c[2]))){var x=r.slice(),_=r.slice();_[f]=d;var A=l(t.getAxis(c[2]));n.addLine(x,_,A.color,A.lineWidth*s)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var s={x:"y",y:"x",z:"y"};this._axes.forEach(function(o,l){var u=n.getAxis(o.dim),h=u.model,c=h.getModel("axisPointer",a),d=c.getModel("label"),f=c.get("lineStyle.color");if(!(!d.get("show")||!c.get("show"))){var v=e[l],m=d.get("formatter"),p=u.scale.getLabel({value:v});if(m!=null)p=m(p,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var g=ho(u.scale.getTicks()[0]);p=v.toFixed(g+2)}var T=d.get("color"),x=new Ji({style:en(d,{text:p,fill:T||f,align:"left",verticalAlign:"top"})}),_=i.add(x),S=x.getBoundingRect(),b=this._api.getDevicePixelRatio(),A=o.rootNode.position.toArray(),E=or[s[o.dim]];A[E]+=(o.flipped?-1:1)*d.get("margin"),A[or[o.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(A,[S.width*b,S.height*b],_,o.textAlign,o.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function _i(e){co.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}_i.prototype={constructor:_i,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};fo(_i,co);function sn(e,t,r){mn.call(this,e,t,r)}sn.prototype={constructor:sn,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};fo(sn,mn);var on=function(){this._pool={},this._allocatedTextures=[]};on.prototype={constructor:on,get:function(e){var t=Ns(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new Q(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=Ns(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Bo={width:512,height:512,type:D.UNSIGNED_BYTE,format:D.RGBA,wrapS:D.CLAMP_TO_EDGE,wrapT:D.CLAMP_TO_EDGE,minFilter:D.LINEAR_MIPMAP_LINEAR,magFilter:D.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Zn=Object.keys(Bo);function Ns(e){Ee.defaultsWithPropList(e,Bo,Zn),Zc(e);for(var t="",r=0;r<Zn.length;r++){var i=Zn[r],n=e[i].toString();t+=n}return t}function Zc(e){var t=qc(e.width,e.height);e.format===D.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==D.NEAREST_MIPMAP_NEAREST||e.minFilter==D.NEAREST_MIPMAP_LINEAR?e.minFilter=D.NEAREST:(e.minFilter==D.LINEAR_MIPMAP_LINEAR||e.minFilter==D.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=D.LINEAR)),t||(e.wrapS=D.CLAMP_TO_EDGE,e.wrapT=D.CLAMP_TO_EDGE)}function qc(e,t){return(e&e-1)===0&&(t&t-1)===0}const Yc=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var Vt=["px","nx","py","ny","pz","nz"];z.import(Yc);function qn(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function Rs(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var Et=Xe.extend(function(){return{softShadow:Et.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Ae,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new on}},function(){this._gaussianPassH=new Me({fragment:z.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Me({fragment:z.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Me({fragment:z.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,s=a;this.softShadow===Et.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var o in this._textures){var l=this._textures[o];e.setViewport(i,n,a*l.width/l.height,s),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===Et.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var s=[],o=[],l=[],u=[],h=[],c=[],d,f=0;f<this._lightsCastShadow.length;f++){var v=this._lightsCastShadow[f];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,h,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,o,s):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,c);this._shadowMapNumber[v.type]++}for(var m in this._shadowMapNumber)for(var p=this._shadowMapNumber[m],g=m+"_SHADOWMAP_COUNT",f=0;f<this._receivers.length;f++){var T=this._receivers[f],x=T.material;x.fragmentDefines[g]!==p&&(p>0?x.define("fragment",g,p):x.isDefined("fragment",g)&&x.undefine("fragment",g))}for(var f=0;f<this._receivers.length;f++){var T=this._receivers[f],x=T.material;d?x.define("fragment","SHADOW_CASCADE",d.shadowCascade):x.undefine("fragment","SHADOW_CASCADE")}var _=t.shadowUniforms;function S(I){return I.height}if(l.length>0){var b=l.map(S);if(_.directionalLightShadowMaps={value:l,type:"tv"},_.directionalLightMatrices={value:u,type:"m4v"},_.directionalLightShadowMapSizes={value:b,type:"1fv"},d){var A=h.slice(),E=h.slice();A.pop(),E.shift(),A.reverse(),E.reverse(),u.reverse(),_.shadowCascadeClipsNear={value:A,type:"1fv"},_.shadowCascadeClipsFar={value:E,type:"1fv"}}}if(s.length>0){var M=s.map(S),_=t.shadowUniforms;_.spotLightShadowMaps={value:s,type:"tv"},_.spotLightMatrices={value:o,type:"m4v"},_.spotLightShadowMapSizes={value:M,type:"1fv"}}c.length>0&&(_.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new _n,t=new U,r=new ke,i=new U,n=new U,a=new U,s=new U;return function(o,l,u,h,c,d,f){var v=this._getDepthMaterial(h),m={getMaterial:function(me){return me.shadowDepthMaterial||v},isMaterialChanged:Rs,getUniform:qn,ifRender:function(me){return me.castShadow},sortCompare:dt.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var p=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(p).applyTransform(u.viewMatrix)}var g=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),T=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),x=this._getDirectionalLightCamera(h,l,u),_=a.array;s.copy(x.projectionMatrix),N.invert(n.array,x.worldTransform.array),N.multiply(n.array,n.array,u.worldTransform.array),N.multiply(_,s.array,n.array);for(var S=[],b=u instanceof Be,A=(u.near+u.far)/(u.near-u.far),E=2*u.near*u.far/(u.near-u.far),M=0;M<=h.shadowCascade;M++){var I=T*Math.pow(g/T,M/h.shadowCascade),C=T+(g-T)*M/h.shadowCascade,B=I*h.cascadeSplitLogFactor+C*(1-h.cascadeSplitLogFactor);S.push(B),c.push(-(-B*A+E)/-B)}var G=this._getTexture(h,h.shadowCascade);f.push(G);var R=o.viewport,H=o.gl;this._frameBuffer.attach(G),this._frameBuffer.bind(o),H.clear(H.COLOR_BUFFER_BIT|H.DEPTH_BUFFER_BIT);for(var M=0;M<h.shadowCascade;M++){var W=S[M],j=S[M+1];b?N.perspective(t.array,u.fov/180*Math.PI,u.aspect,W,j):N.ortho(t.array,u.left,u.right,u.bottom,u.top,W,j),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(s);var k=r.min.array,oe=r.max.array;k[0]=Math.max(k[0],-1),k[1]=Math.max(k[1],-1),oe[0]=Math.min(oe[0],1),oe[1]=Math.min(oe[1],1),i.ortho(k[0],oe[0],k[1],oe[1],1,-1),x.projectionMatrix.multiplyLeft(i);var X=h.shadowResolution||512;o.setViewport((h.shadowCascade-M-1)*X,0,X,X,1);var fe=l.updateRenderList(x);o.renderPass(fe.opaque,x,m),this.softShadow===Et.VSM&&this._gaussianFilter(o,G,G.width);var ae=new U;ae.copy(x.viewMatrix).multiplyLeft(x.projectionMatrix),d.push(ae.array),x.projectionMatrix.copy(s)}this._frameBuffer.unbind(o),o.setViewport(R)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),s=this._getSpotLightCamera(r),o=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:Rs,getUniform:qn,ifRender:function(d){return d.castShadow},sortCompare:dt.opaqueSortCompare},h=t.updateRenderList(s);e.renderPass(h.opaque,s,u),this._frameBuffer.unbind(e),this.softShadow===Et.VSM&&this._gaussianFilter(e,a,a.width);var c=new U;c.copy(s.worldTransform).invert().multiplyLeft(s.projectionMatrix),n.push(a),i.push(c.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var s=this._getDepthMaterial(r),o={getMaterial:function(T){return T.shadowDepthMaterial||s},getUniform:qn,sortCompare:dt.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new ke,h=r.getWorldPosition().array,c=new ke,d=r.range;c.min.setArray(h),c.max.setArray(h);var f=new L(d,d,d);c.max.add(f),c.min.sub(f);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(T){if(T.isRenderable()&&T.castShadow){var x=T.geometry;if(!x.boundingBox){for(var _=0;_<Vt.length;_++)l[Vt[_]].push(T);return}if(u.transformFrom(x.boundingBox,T.worldTransform),!u.intersectBoundingBox(c))return;u.updateVertices();for(var _=0;_<Vt.length;_++)v[Vt[_]]=!1;for(var _=0;_<8;_++){var S=u.vertices[_],b=S[0]-h[0],A=S[1]-h[1],E=S[2]-h[2],M=Math.abs(b),I=Math.abs(A),C=Math.abs(E);M>I?M>C?v[b>0?"px":"nx"]=!0:v[E>0?"pz":"nz"]=!0:I>C?v[A>0?"py":"ny"]=!0:v[E>0?"pz":"nz"]=!0}for(var _=0;_<Vt.length;_++)v[Vt[_]]&&l[Vt[_]].push(T)}});for(var m=0;m<6;m++){var p=Vt[m],g=this._getPointLightCamera(r,p);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+m),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[p],g,o)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new ft({precision:this.precision,shader:new z(z.source(i+"vertex"),z.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===Et.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:F.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new mr:i=new Q,i.width=n*t,i.height=n,this.softShadow===Et.VSM?(i.type=F.FLOAT,i.anisotropic=4):(i.minFilter=D.NEAREST,i.magFilter=D.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Be,nx:new Be,py:new Be,ny:new Be,pz:new Be,nz:new Be});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(L.POSITIVE_X,L.NEGATIVE_Y);break;case"nx":r.lookAt(L.NEGATIVE_X,L.NEGATIVE_Y);break;case"py":r.lookAt(L.POSITIVE_Y,L.POSITIVE_Z);break;case"ny":r.lookAt(L.NEGATIVE_Y,L.NEGATIVE_Z);break;case"pz":r.lookAt(L.POSITIVE_Z,L.NEGATIVE_Y);break;case"nz":r.lookAt(L.NEGATIVE_Z,L.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new U,t=new ke,r=new ke;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Ur);var s=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),s.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),s.rotation.copy(i.rotation),s.scale.copy(i.scale),s.updateWorldTransform(),U.invert(e,s.worldTransform),U.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var o=r.min.array,l=r.max.array;return s.position.set((o[0]+l[0])/2,(o[1]+l[1])/2,l[2]).transformMat4(s.worldTransform),s.near=0,s.far=-o[2]+l[2],isNaN(this.lightFrustumBias)?s.far*=4:s.far+=this.lightFrustumBias,s.left=o[0],s.right=l[0],s.top=l[1],s.bottom=o[1],s.update(!0),s}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Be);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),N.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});Et.VSM=1;Et.PCF=2;var yi=Xe.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var s,o;return i.width instanceof Function?s=i.width.call(this,t):s=i.width,i.height instanceof Function?o=i.height.call(this,t):o=i.height,(n.width!==s||n.height!==o)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=s,n.height=o,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),Is=Xe.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var r in t.inputs)if(t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof yi)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),Kc=Is.extend(function(){return{_outputs:[],_texturePool:new on,_frameBuffer:new Ae({depthBuffer:!1})}},{addNode:function(e){Is.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),$c=yi.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Ae},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),s=this.outputs[n],o=this._compositor.allocateTexture(a);this._outputTextures[n]=o;var l=s.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(o,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var h=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&h.push(l);u.drawBuffersEXT(h)}e.saveClear(),e.clearBit=D.DEPTH_BUFFER_BIT|D.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),Qc=yi.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Jc=yi.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Me({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var s={};for(var o in this.outputs){var l=this.updateParameter(o,e);isNaN(l.width)&&this.updateParameter(o,e);var u=this.outputs[o],h=this._compositor.allocateTexture(l);this._outputTextures[o]=h;var c=u.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),s[c]=h}this._compositor.getFrameBuffer().bind(e);for(var c in s)this._compositor.getFrameBuffer().attach(s[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var s,o;return typeof i.width=="function"?s=i.width.call(this,t):s=i.width,typeof i.height=="function"?o=i.height.call(this,t):o=i.height,s=Math.ceil(s),o=Math.ceil(o),(n.width!==s||n.height!==o)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=s,n.height=o,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){yi.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const ef=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Fo=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,tf=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,zo=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,rf=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Go=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Uo=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Ho=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Vo=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,ko=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,nf=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,Wo=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Xo=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function af(e){e.import(ef),e.import(Fo),e.import(tf),e.import(zo),e.import(rf),e.import(Go),e.import(Uo),e.import(Ho),e.import(Vo),e.import(ko),e.import(nf),e.import(Wo),e.import(Xo)}af(z);var sf=/^#source\((.*?)\)/;function of(e,t){var r=new Kc;t=t||{};var i={textures:{},parameters:{}},n=function(o,l){for(var u=0;u<e.nodes.length;u++){var h=e.nodes[u],c=lf(h,i,t);c&&r.addNode(c)}};for(var a in e.parameters){var s=e.parameters[a];i.parameters[a]=Ma(s)}return cf(e,i,t,function(o){i.textures=o,n()}),r}function lf(e,t,r){var i=e.type||"filter",n,a,s;if(i==="filter"){var o=e.shader.trim(),l=sf.exec(o);if(l?n=z.source(l[1].trim()):o.charAt(0)==="#"&&(n=t.shaders[o.substr(1)]),n||(n=o),!n)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){s={};for(var u in e.outputs){var h=e.outputs[u];s[u]={},h.attachment!=null&&(s[u].attachment=h.attachment),h.keepLastFrame!=null&&(s[u].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(s[u].outputLastFrame=h.outputLastFrame),h.parameters&&(s[u].parameters=Ma(h.parameters))}}var c;if(i==="scene"?c=new $c({name:e.name,scene:r.scene,camera:r.camera,outputs:s}):i==="texture"?c=new Qc({name:e.name,outputs:s}):c=new Jc({name:e.name,shader:n,inputs:a,outputs:s}),c){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",ff(u,jo(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(u,d)}if(e.defines&&c.pass)for(var u in e.defines){var d=e.defines[u];c.pass.material.define("fragment",u,d)}}return c}function uf(e,t){return e}function hf(e,t){return t}function Ma(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=F[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=df(i,jo(n),r)):t[i]=n}}),t.width||(t.width=uf),t.height||(t.height=hf),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function cf(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,s=!1,o=r.textureRootPath;Ee.each(e.textures,function(l,u){var h,c=l.path,d=Ma(l.parameters);if(Array.isArray(c)&&c.length===6)o&&(c=c.map(function(f){return Ee.relative2absolute(f,o)})),h=new mr(d);else if(typeof c=="string")o&&(c=Ee.relative2absolute(c,o)),h=new Q(d);else return;h.load(c),a++,h.once("success",function(){n[u]=h,a--,a===0&&(i(n),s=!0)})}),a===0&&!s&&i(n)}function ff(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),s=t(n,a,i);this.setParameter(e,s)}}function df(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,s=i.getHeight()*r;return t(a,s,n)}}function jo(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function Hr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}const vf=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;z.import(vf);function Zo(e){for(var t=new Uint8Array(e*e*4),r=0,i=new L,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function Os(e){return new Q({pixels:Zo(e),wrapS:F.REPEAT,wrapT:F.REPEAT,width:e,height:e})}function mf(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=Hr(n+t,2)*(r?1:2)*Math.PI,s=Hr(n+t,3)*Math.PI,o=Math.random(),l=Math.cos(a)*Math.sin(s)*o,u=Math.cos(s)*o,h=Math.sin(a)*Math.sin(s)*o;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=h}return i}function Ft(e){e=e||{},this._ssaoPass=new Me({fragment:z.source("ecgl.ssao.estimate")}),this._blurPass=new Me({fragment:z.source("ecgl.ssao.blur")}),this._framebuffer=new Ae({depthBuffer:!1}),this._ssaoTexture=new Q,this._blurTexture=new Q,this._blurTexture2=new Q,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Ft.prototype.setDepthTexture=function(e){this._depthTex=e};Ft.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Ft.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,s=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var o=new U;U.transpose(o,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",o.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,h.width=i,h.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),s.setUniform("textureSize",[i/2,n/2]),s.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),s.setUniform("direction",0),s.setUniform("ssaoTexture",l),s.render(e),this._framebuffer.attach(h),s.setUniform("textureSize",[i,n]),s.setUniform("direction",1),s.setUniform("ssaoTexture",u),s.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};Ft.prototype.getTargetTexture=function(){return this._blurTexture2};Ft.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Ft.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=mf(e,t*e,!!this._normalTex)};Ft.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Zo(e),t.width=t.height=e,t.dirty()):(t=Os(e),this._ssaoPass.setUniform("noiseTex",Os(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Ft.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};const pf=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;z.import(pf);function zt(e){e=e||{},this._ssrPass=new Me({fragment:z.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Me({fragment:z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Me({fragment:z.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Me({fragment:z.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new Q({type:F.HALF_FLOAT}),this._texture2=new Q({type:F.HALF_FLOAT}),this._texture3=new Q({type:F.HALF_FLOAT}),this._prevTexture=new Q({type:F.HALF_FLOAT}),this._currentTexture=new Q({type:F.HALF_FLOAT}),this._frameBuffer=new Ae({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}zt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};zt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),s=this._ssrTexture,o=this._texture2,l=this._texture3;s.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,s.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,o.width=l.width=n,o.height=l.height=a;var u=this._frameBuffer,h=this._ssrPass,c=this._blurPass1,d=this._blurPass2,f=this._blendPass,v=new U,m=new U;U.transpose(v,t.worldTransform),U.transpose(m,t.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",v.array),h.setUniform("toWorldSpace",m.array),h.setUniform("nearZ",t.near);var p=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",p),h.setUniform("sampleOffset",i*this._samplePerFrame),c.setUniform("textureSize",[s.width,s.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(s),u.bind(e),h.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),f.setUniform("texture1",this._prevTexture),f.setUniform("texture2",s),f.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),f.render(e)),u.attach(o),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:s),c.render(e),u.attach(l),d.setUniform("texture",o),d.render(e),u.unbind(e),this._physicallyCorrect){var g=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=g}};zt.prototype.getTargetTexture=function(){return this._texture3};zt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};zt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Mt.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};zt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};zt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};zt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};const Bs=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],gf=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;z.import(gf);function Yn(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function _f(e,t,r,i,n){var a,s,o,l,u=e.gl;return function(h,c,d){if(!(l&&l.material===h.material)){var f=h.material,v=h.__program,m=f.get("roughness");m==null&&(m=1);var p=f.get("normalMap")||t,g=f.get("roughnessMap"),T=f.get("bumpMap"),x=f.get("uvRepeat"),_=f.get("uvOffset"),S=f.get("detailUvRepeat"),b=f.get("detailUvOffset"),A=!!T&&f.isTextureEnabled("bumpMap"),E=!!g&&f.isTextureEnabled("roughnessMap"),M=f.isDefined("fragment","DOUBLE_SIDED");T=T||r,g=g||i,d!==c?(c.set("normalMap",p),c.set("bumpMap",T),c.set("roughnessMap",g),c.set("useBumpMap",A),c.set("useRoughnessMap",E),c.set("doubleSide",M),x!=null&&c.set("uvRepeat",x),_!=null&&c.set("uvOffset",_),S!=null&&c.set("detailUvRepeat",S),b!=null&&c.set("detailUvOffset",b),c.set("roughness",m)):(v.setUniform(u,"1f","roughness",m),a!==p&&Yn(e,v,"normalMap",p,0),s!==T&&T&&Yn(e,v,"bumpMap",T,1),o!==g&&g&&Yn(e,v,"roughnessMap",g,2),x!=null&&v.setUniform(u,"2f","uvRepeat",x),_!=null&&v.setUniform(u,"2f","uvOffset",_),S!=null&&v.setUniform(u,"2f","detailUvRepeat",S),b!=null&&v.setUniform(u,"2f","detailUvOffset",b),v.setUniform(u,"1i","useBumpMap",+A),v.setUniform(u,"1i","useRoughnessMap",+E),v.setUniform(u,"1i","doubleSide",+M)),a=p,s=T,o=g,l=h}}}function qr(e){this._depthTex=new Q({format:F.DEPTH_COMPONENT,type:F.UNSIGNED_INT}),this._normalTex=new Q({type:F.HALF_FLOAT}),this._framebuffer=new Ae,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Ae.DEPTH_ATTACHMENT),this._normalMaterial=new ft({shader:new z(z.source("ecgl.normal.vertex"),z.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=Lt.createBlank("#000"),this._defaultBumpMap=Lt.createBlank("#000"),this._defaultRoughessMap=Lt.createBlank("#000"),this._debugPass=new Me({fragment:z.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}qr.prototype.getDepthTexture=function(){return this._depthTex};qr.prototype.getNormalTexture=function(){return this._normalTex};qr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,s=this._normalTex,o=this._normalMaterial;a.width=i,a.height=n,s.width=i,s.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return o},ifRender:function(u){return u.renderNormal},beforeRender:_f(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};qr.prototype.renderDebug=function(e){this._debugPass.render(e)};qr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Ri(e){e=e||{},this._edgePass=new Me({fragment:z.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new Q({type:F.HALF_FLOAT}),this._frameBuffer=new Ae,this._frameBuffer.attach(this._targetTexture)}Ri.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),s=this._targetTexture;s.width=n,s.height=a;var o=this._frameBuffer;o.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),o.unbind(e)};Ri.prototype.getTargetTexture=function(){return this._targetTexture};Ri.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};Ri.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};const yf={nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},xf=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Tf=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;z.import(Fo);z.import(zo);z.import(Go);z.import(Uo);z.import(Ho);z.import(Vo);z.import(ko);z.import(Wo);z.import(Xo);z.import(xf);z.import(Tf);function qo(e,t){return{color:{parameters:{width:e,height:t}}}}var Ca=["composite","FXAA"];function re(){this._width,this._height,this._dpr,this._sourceTexture=new Q({type:F.HALF_FLOAT}),this._depthTexture=new Q({format:F.DEPTH_COMPONENT,type:F.UNSIGNED_INT}),this._framebuffer=new Ae,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Ae.DEPTH_ATTACHMENT),this._normalPass=new qr,this._compositor=of(yf);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=Ca.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Ft(r),this._ssrPass=new zt(r),this._edgePass=new Ri(r)}re.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,s=this._depthTexture;a.width=i,a.height=n,s.width=i,s.height=n;var o={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(u,h){if(typeof u[h]=="function"){var c=u[h].__original||u[h];u[h]=function(d){return c.call(this,o)},u[h].__original=c}}this._compositor.nodes.forEach(function(u){for(var h in u.outputs){var c=u.outputs[h].parameters;c&&(l(c,"width"),l(c,"height"))}for(var d in u.parameters)l(u.parameters,d)}),this._width=i,this._height=n,this._dpr=r};re.prototype.getWidth=function(){return this._width};re.prototype.getHeight=function(){return this._height};re.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};re.prototype._getPrevNode=function(e){for(var t=Ca.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};re.prototype._getNextNode=function(e){for(var t=Ca.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};re.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(e.inputs.texture=t.name,r?(e.outputs=qo(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};re.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);t&&(r?(t.outputs=qo(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};re.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};re.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};re.prototype.enableSSAO=function(){this._enableSSAO=!0};re.prototype.disableSSAO=function(){this._enableSSAO=!1};re.prototype.enableSSR=function(){this._enableSSR=!0};re.prototype.disableSSR=function(){this._enableSSR=!1};re.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};re.prototype.getSourceFrameBuffer=function(){return this._framebuffer};re.prototype.getSourceTexture=function(){return this._sourceTexture};re.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};re.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};re.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};re.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};re.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};re.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};re.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};re.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};re.prototype.enableEdge=function(){this._enableEdge=!0};re.prototype.disableEdge=function(){this._enableEdge=!1};re.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};re.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};re.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};re.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};re.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};re.prototype.setEdgeColor=function(e){var t=y.parseColor(e);this._edgePass.setParameter("edgeColor",t)};re.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};re.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST,flipY:!1})};re.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};re.prototype.isSSREnabled=function(){return this._enableSSR};re.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,s=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=s=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),s=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=s,this._cocNode.setParameter("depth",this._depthTexture);for(var o=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(Bs.length/2/l),h=n%u,c=0;c<l*2;c++)o[c]=Bs[c+h*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",n/30),this._dofBlurNodes[c].setParameter("poissonKernel",o);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};re.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function fa(e){for(var t=[],r=0;r<30;r++)t.push([Hr(r,2),Hr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new Q,this._sourceFb=new Ae,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new Q,this._outputTex=new Q;var i=this._blendPass=new Me({fragment:z.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Ae({depthBuffer:!1}),this._outputPass=new Me({fragment:z.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}fa.prototype={constructor:fa,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,s=this._haltonSequence[this._frame%this._haltonSequence.length],o=new U;o.array[12]=(s[0]*2-1)/n,o.array[13]=(s[1]*2-1)/a,U.mul(t.projectionMatrix,o,t.projectionMatrix),U.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function ce(e){e=e||"perspective",this.layer=null,this.scene=new $t,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new re,this._temporalSS=new fa,this._shadowMapPass=new Et;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(Hr(r,2)*4-2),n.push(Hr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(s,o,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(s,l)},this)}ce.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Be||(this.camera=new Be,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Ur||(this.camera=new Ur,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};ce.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Be&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};ce.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var Fs=new $;ce.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,Fs),this.camera.castRay(Fs,r),i.viewport=n,r};ce.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};ce.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};ce.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};ce.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};ce.prototype.hasDOF=function(){return this._enableDOF};ce.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};ce.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var s=this._compositor.getSourceFrameBuffer();s.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),s.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var s=this._temporalSS.getSourceFrameBuffer();s.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),s.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};ce.prototype._updateTransparent=function(e,t,r,i){for(var n=new L,a=new U,s=r.getWorldPosition(),o=t.getRenderList(r).transparent,l=0;l<o.length;l++){var u=o[l],h=u.geometry;U.invert(a,u.worldTransform),L.transformMat4(n,s,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(n,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(n,i)}};ce.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var s=n.opaque[a];s.renderNormal&&s.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&s.material.set("ssaoMap",this._compositor.getSSAOTexture())}};ce.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};ce.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};ce.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),s=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),o=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),o.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=s.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,s.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,o.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})};ce.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};ce.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};ce.prototype.isLinearSpace=function(){return this._enablePostEffect};ce.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};ce.prototype.add=function(e){this.rootNode.add(e)};ce.prototype.remove=function(e){this.rootNode.remove(e)};ce.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(ce.prototype,wa);function wf(e,t){var r=e.getBoxLayoutParams(),i=pn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),s=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(s/2,-s/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,s]}function Sf(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(s){a.mapDimensionsAll(s,!0).forEach(function(o){i(s,a.getDataExtent(o,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var s=n.charAt(0),o=a.getReferringComponents("grid3D").models[0],l=o.coordinateSystem;if(l===this){var u=l.getAxis(s);if(!u){var h=Ta(r[s]||[1/0,-1/0],a);u=new sn(s,h),u.type=a.get("type");var c=u.type==="category";u.onBand=c&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",o.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",o.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var bf={dimensions:_i.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new ce;var s=new _i;s.model=a,s.viewGL=a.__viewGL,a.coordinateSystem=s,r.push(s),s.resize=wf,s.update=Sf});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,s){return i.map(function(o){var l=a.getReferringComponents(o).models[0];return l==null&&(l=s.getComponent(o)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var s=a.getReferringComponents("grid3D").models[0];if(s==null){var o=n(a,e),s=o[0].getCoordSysModel();o.forEach(function(h){h.getCoordSysModel()})}var l=s.coordinateSystem;a.coordinateSystem=l}}),r}},Yo=Xr.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Cu(Yo);var Ko={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Ef=he({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Ko),Da=he({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Ko),Af=Kt({scale:!0,min:"dataMin",max:"dataMax"},Da),$o=Kt({logBase:10},Da);$o.scale=!0;const Lf={categoryAxis3D:Ef,valueAxis3D:Da,timeAxis3D:Af,logAxis3D:$o};var Mf=["value","category","time","log"];function Cf(e,t,r,i,n){Mf.forEach(function(a){var s=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(o,l){var u=l.getTheme();he(o,u.get(a+"Axis3D")),he(o,this.getDefaultOption()),o.type=i(t,o)},optionUpdated:function(){var o=this.option;o.type==="category"&&(this.__ordinalMeta=ou.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:he(su(Lf[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(s)}),e.registerSubTypeDefaulter(t+"Axis3D",lu(i,t))}function Df(e,t){return t.type||(t.data?"category":"value")}function Pf(e){e.registerComponentModel(wn),e.registerComponentView(jc),e.registerCoordinateSystem("grid3D",bf),["x","y","z"].forEach(function(t){Cf(e,t,Yo,Df,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}We(Pf);const Yr={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},Qo={getFilledRegions:function(e,t){var r=(e||[]).slice(),i;if(typeof t=="string"?(t=ia(t),i=t&&t.geoJson):t&&t.features&&(i=t),!i)return[];for(var n={},a=i.features,s=0;s<r.length;s++)n[r[s].name]=r[s];for(var s=0;s<a.length;s++){var o=a[s].properties.name;n[o]||r.push({name:o})}return r},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var Kr=Xr.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=Ci(e.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new Pt(t,this);r.initData(e.regions);var i={};r.each(function(n){var a=r.getName(n),s=r.getItemModel(n);i[a]=s}),this._regionModelMap=i,this._data=r},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Or(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),r=this.coordinateSystem.getRegion(t);return r?r.geometries:[]},getFormattedLabel:function(e,t){var r=this._data.getName(e),i=this.getRegionModel(e),n=i.get(t==="normal"?["label","formatter"]:["emphasis","label","formatter"]);n==null&&(n=i.get(["label","formatter"]));var a={name:r};if(typeof n=="function")return a.status=t,n(a);if(typeof n=="string"){var s=a.seriesName;return n.replace("{a}",s??"")}else return r},defaultOption:{regions:[]}});he(Kr.prototype,Qo);he(Kr.prototype,Tn);he(Kr.prototype,jr);he(Kr.prototype,Zr);he(Kr.prototype,Yr);function Jo(e,t,r){r=r||2;var i=t&&t.length,n=i?t[0]*r:e.length,a=el(e,0,n,r,!0),s=[];if(!a)return s;var o,l,u,h,c,d,f;if(i&&(a=Bf(e,t,a,r)),e.length>80*r){o=u=e[0],l=h=e[1];for(var v=r;v<n;v+=r)c=e[v],d=e[v+1],c<o&&(o=c),d<l&&(l=d),c>u&&(u=c),d>h&&(h=d);f=Math.max(u-o,h-l)}return Ti(a,s,r,o,l,f),s}function el(e,t,r,i,n){var a,s;if(n===ma(e,t,r,i)>0)for(a=t;a<r;a+=i)s=zs(a,e[a],e[a+1],s);else for(a=r-i;a>=t;a-=i)s=zs(a,e[a],e[a+1],s);return s&&fr(s,s.next)&&(Si(s),s=s.next),s}function xi(e,t){if(!e)return e;t||(t=e);var r=e,i;do if(i=!1,!r.steiner&&(fr(r,r.next)||Qe(r.prev,r,r.next)===0)){if(Si(r),r=t=r.prev,r===r.next)return null;i=!0}else r=r.next;while(i||r!==t);return t}function Ti(e,t,r,i,n,a,s){if(e){!s&&a&&Uf(e,i,n,a);for(var o=e,l,u;e.prev!==e.next;){if(l=e.prev,u=e.next,a?Rf(e,i,n,a):Nf(e)){t.push(l.i/r),t.push(e.i/r),t.push(u.i/r),Si(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=If(e,t,r),Ti(e,t,r,i,n,a,2)):s===2&&Of(e,t,r,i,n,a):Ti(xi(e),t,r,i,n,a,1);break}}}}function Nf(e){var t=e.prev,r=e,i=e.next;if(Qe(t,r,i)>=0)return!1;for(var n=e.next.next;n!==e.prev;){if(ln(t.x,t.y,r.x,r.y,i.x,i.y,n.x,n.y)&&Qe(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Rf(e,t,r,i){var n=e.prev,a=e,s=e.next;if(Qe(n,a,s)>=0)return!1;for(var o=n.x<a.x?n.x<s.x?n.x:s.x:a.x<s.x?a.x:s.x,l=n.y<a.y?n.y<s.y?n.y:s.y:a.y<s.y?a.y:s.y,u=n.x>a.x?n.x>s.x?n.x:s.x:a.x>s.x?a.x:s.x,h=n.y>a.y?n.y>s.y?n.y:s.y:a.y>s.y?a.y:s.y,c=da(o,l,t,r,i),d=da(u,h,t,r,i),f=e.nextZ;f&&f.z<=d;){if(f!==e.prev&&f!==e.next&&ln(n.x,n.y,a.x,a.y,s.x,s.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(f=e.prevZ;f&&f.z>=c;){if(f!==e.prev&&f!==e.next&&ln(n.x,n.y,a.x,a.y,s.x,s.y,f.x,f.y)&&Qe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}function If(e,t,r){var i=e;do{var n=i.prev,a=i.next.next;!fr(n,a)&&tl(n,i,i.next,a)&&wi(n,a)&&wi(a,n)&&(t.push(n.i/r),t.push(i.i/r),t.push(a.i/r),Si(i),Si(i.next),i=e=a),i=i.next}while(i!==e);return i}function Of(e,t,r,i,n,a){var s=e;do{for(var o=s.next.next;o!==s.prev;){if(s.i!==o.i&&kf(s,o)){var l=rl(s,o);s=xi(s,s.next),l=xi(l,l.next),Ti(s,t,r,i,n,a),Ti(l,t,r,i,n,a);return}o=o.next}s=s.next}while(s!==e)}function Bf(e,t,r,i){var n=[],a,s,o,l,u;for(a=0,s=t.length;a<s;a++)o=t[a]*i,l=a<s-1?t[a+1]*i:e.length,u=el(e,o,l,i,!1),u===u.next&&(u.steiner=!0),n.push(Vf(u));for(n.sort(Ff),a=0;a<n.length;a++)zf(n[a],r),r=xi(r,r.next);return r}function Ff(e,t){return e.x-t.x}function zf(e,t){if(t=Gf(e,t),t){var r=rl(t,e);xi(r,r.next)}}function Gf(e,t){var r=t,i=e.x,n=e.y,a=-1/0,s;do{if(n<=r.y&&n>=r.next.y&&r.next.y!==r.y){var o=r.x+(n-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=i&&o>a){if(a=o,o===i){if(n===r.y)return r;if(n===r.next.y)return r.next}s=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!s)return null;if(i===a)return s.prev;var l=s,u=s.x,h=s.y,c=1/0,d;for(r=s.next;r!==l;)i>=r.x&&r.x>=u&&i!==r.x&&ln(n<h?i:a,n,u,h,n<h?a:i,n,r.x,r.y)&&(d=Math.abs(n-r.y)/(i-r.x),(d<c||d===c&&r.x>s.x)&&wi(r,e)&&(s=r,c=d)),r=r.next;return s}function Uf(e,t,r,i){var n=e;do n.z===null&&(n.z=da(n.x,n.y,t,r,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,Hf(n)}function Hf(e){var t,r,i,n,a,s,o,l,u=1;do{for(r=e,e=null,a=null,s=0;r;){for(s++,i=r,o=0,t=0;t<u&&(o++,i=i.nextZ,!!i);t++);for(l=u;o>0||l>0&&i;)o!==0&&(l===0||!i||r.z<=i.z)?(n=r,r=r.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=i}a.nextZ=null,u*=2}while(s>1);return e}function da(e,t,r,i,n){return e=32767*(e-r)/n,t=32767*(t-i)/n,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Vf(e){var t=e,r=e;do t.x<r.x&&(r=t),t=t.next;while(t!==e);return r}function ln(e,t,r,i,n,a,s,o){return(n-s)*(t-o)-(e-s)*(a-o)>=0&&(e-s)*(i-o)-(r-s)*(t-o)>=0&&(r-s)*(a-o)-(n-s)*(i-o)>=0}function kf(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Wf(e,t)&&wi(e,t)&&wi(t,e)&&Xf(e,t)}function Qe(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function fr(e,t){return e.x===t.x&&e.y===t.y}function tl(e,t,r,i){return fr(e,t)&&fr(r,i)||fr(e,i)&&fr(r,t)?!0:Qe(e,t,r)>0!=Qe(e,t,i)>0&&Qe(r,i,e)>0!=Qe(r,i,t)>0}function Wf(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&tl(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function wi(e,t){return Qe(e.prev,e,e.next)<0?Qe(e,t,e.next)>=0&&Qe(e,e.prev,t)>=0:Qe(e,t,e.prev)<0||Qe(e,e.next,t)<0}function Xf(e,t){var r=e,i=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&n<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==e);return i}function rl(e,t){var r=new va(e.i,e.x,e.y),i=new va(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=n,n.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function zs(e,t,r,i){var n=new va(e,t,r);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Si(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function va(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Jo.deviation=function(e,t,r,i){var n=t&&t.length,a=n?t[0]*r:e.length,s=Math.abs(ma(e,0,a,r));if(n)for(var o=0,l=t.length;o<l;o++){var u=t[o]*r,h=o<l-1?t[o+1]*r:e.length;s-=Math.abs(ma(e,u,h,r))}var c=0;for(o=0;o<i.length;o+=3){var d=i[o]*r,f=i[o+1]*r,v=i[o+2]*r;c+=Math.abs((e[d]-e[v])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[v+1]-e[d+1]))}return s===0&&c===0?0:Math.abs((c-s)/s)};function ma(e,t,r,i){for(var n=0,a=t,s=r-i;a<r;a+=i)n+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return n}function Kn(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function il(e,t,r,i,n){var a=r,s=e[t];Kn(e,t,i);for(var o=r;o<i;o++)n(e[o],s)<0&&(Kn(e,o,a),a++);return Kn(e,i,a),a}function un(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=il(e,n,r,i,t);un(e,t,r,a-1),un(e,t,a+1,i)}}function Vr(){this._parts=[]}Vr.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var s=0;s<a.length;s++)a[s].pivot=il(e,a[s].pivot,a[s].left,a[s].right,t);for(var o=[],s=0;s<a.length;s++){var l=a[s].left,u=a[s].pivot-1;u>l&&o.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[s].pivot+1,u=a[s].right;u>l&&o.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=o}else for(var s=0;s<Math.floor(a.length/10);s++){var h=a.length-1-this._currentSortPartIdx;if(un(e,t,a[h].left,a[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Vr.sort=un;var Ir=Le.vec3,Gs=Ir.create(),Us=Ir.create(),Hs=Ir.create();const Pa={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,s=0;s<r.length;){i.get(r[s++],Gs),i.get(r[s++],Us),i.get(r[s++],Hs);var o=Ir.sqrDist(Gs,e),l=Ir.sqrDist(Us,e),u=Ir.sqrDist(Hs,e),h=Math.min(o,l);h=Math.min(h,u),s===3?(a=h,h=0):h=h-a,this._triangleZList[n++]=h}}for(var c=this._sortedTriangleIndices,s=0;s<c.length;s++)c[s]=s;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var s=0;s<3;s++)this._progressiveQuickSort(t*3+s);for(var d=this._indicesTmp,f=this._triangleZListTmp,v=this._triangleZList,s=0;s<this.triangleCount;s++){var m=c[s]*3,p=s*3;d[p++]=r[m++],d[p++]=r[m++],d[p]=r[m],f[s]=v[c[s]]}var g=this._indicesTmp;this._indicesTmp=this.indices,this.indices=g;var g=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=g,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Vr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Vr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function jf(e){const t=e.getVisual("style");if(t){const r=e.getVisual("drawType");return t[r]}}function Zf(e){return e.getVisual("style").opacity}function Ge(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function ze(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}var nl=1,al=2;function Gt(e,t,r){this._labelsMesh=new Aa,this._labelTextureSurface=new an({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}Gt.prototype.getLabelPosition=function(e,t,r){return[0,0,0]};Gt.prototype.getLabelDistance=function(e,t,r){return 0};Gt.prototype.getMesh=function(){return this._labelsMesh};Gt.prototype.updateData=function(e,t,r){t==null&&(t=0),r==null&&(r=e.count()),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==r-t)&&(this._labelsVisibilitiesBits=new Uint8Array(r-t));for(var i=["label","show"],n=["emphasis","label","show"],a=t;a<r;a++){var s=e.getItemModel(a),o=s.get(i),l=s.get(n);l==null&&(l=o);var u=(o?nl:0)|(l?al:0);this._labelsVisibilitiesBits[a-t]=u}this._start=t,this._end=r,this._data=e};Gt.prototype.updateLabels=function(e){if(this._data){e=e||[];for(var t=e.length>0,r={},i=0;i<e.length;i++)r[e[i]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var n=["label"],a=["emphasis","label"],s=this._data.hostModel,o=this._data,l=s.getModel(n),u=s.getModel(a,l),h={left:"right",right:"left",top:"center",bottom:"center"},c={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var f=!1;t&&r[d]&&(f=!0);var v=this._labelsVisibilitiesBits[d-this._start]&(f?al:nl);if(v){var m=o.getItemModel(d),p=m.getModel(f?a:n,f?u:l),g=p.get("distance")||0,T=p.get("position"),x=this._api.getDevicePixelRatio(),_=s.getFormattedLabel(d,f?"emphasis":"normal");if(_==null||_==="")return;var S=new Ji({style:en(p,{text:_,fill:p.get("color")||Ge(o,d)||"#000",align:"left",verticalAlign:"top",opacity:J.firstNotNull(p.get("opacity"),ze(o,d),1)})}),b=S.getBoundingRect(),A=1.2;b.height*=A;var E=this._labelTextureSurface.add(S),M=h[T]||"center",I=c[T]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,T,g),[b.width*x,b.height*x],E,M,I,this.getLabelDistance(d,T,g)*x)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}};Gt.prototype.dispose=function(){this._labelTextureSurface.dispose()};var nt=Le.vec3;y.Shader.import(bn);function kr(e){this.rootNode=new y.Node,this._triangulationResults={},this._shadersMap=y.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,i){return r[i]=y.createShader("ecgl."+i),r},{}),this._linesShader=y.createShader("ecgl.meshLines3D");var t={};y.COMMON_SHADERS.forEach(function(r){t[r]=new y.Material({shader:y.createShader("ecgl."+r)})}),this._groundMaterials=t,this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new Gt(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}kr.prototype={constructor:kr,extrudeY:!0,update:function(e,t,r,i,n){var a=e.getData();i==null&&(i=0),n==null&&(n=a.count()),this._startIndex=i,this._endIndex=n-1,this._triangulation(e,i,n);var s=this._getShader(e.get("shading"));this._prepareMesh(e,s,r,i,n),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,r,i,n);var o=e.coordinateSystem;o.type==="geo3D"&&this._updateGroundPlane(e,o,r);var l=this;this._labelsBuilder.updateData(a,i,n),this._labelsBuilder.getLabelPosition=function(u,h,c){var d=a.getName(u),f,v=c;if(o.type==="geo3D"){var m=o.getRegion(d);if(!m)return[NaN,NaN,NaN];f=m.getCenter();var p=o.dataToPoint([f[0],f[1],v]);return p}else var g=l._triangulationResults[u-l._startIndex],f=l.extrudeY?[(g.max[0]+g.min[0])/2,g.max[1]+v,(g.max[2]+g.min[2])/2]:[(g.max[0]+g.min[0])/2,(g.max[1]+g.min[1])/2,g.max[2]+v]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var n=new y.Mesh({name:"Polygon",material:new y.Material({shader:e._shadersMap.lambert}),geometry:new y.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(n.geometry,Pa),n}var r=t(),i=new y.Mesh({material:new y.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Qt({useNativeLine:!1})});this.rootNode.add(r),this.rootNode.add(i),r.material.define("both","VERTEX_COLOR"),r.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=r,this._linesMesh=i,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||(t=this._shadersMap.lambert),t.__shading=e,t},_prepareMesh:function(e,t,r,i,n){for(var a=0,s=0,o=0,l=0,u=i;u<n;u++){var h=this._getRegionPolygonInfo(u),c=this._getRegionLinesInfo(u,e,this._linesMesh.geometry);a+=h.vertexCount,s+=h.triangleCount,o+=c.vertexCount,l+=c.triangleCount}var d=this._polygonMesh,f=d.geometry;["position","normal","texcoord0","color"].forEach(function(v){f.attributes[v].init(a)}),f.indices=a>65535?new Uint32Array(s*3):new Uint16Array(s*3),d.material.shader!==t&&d.material.attachShader(t,!0),y.setMaterialFromModel(t.__shading,d.material,e,r),o>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(o),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((n-i)*2)},_updateRegionMesh:function(e,t,r,i){for(var n=e.getData(),a=0,s=0,o=!1,b=this._polygonMesh,l=this._linesMesh,u=r;u<i;u++){var h=e.getRegionModel(u),c=h.getModel("itemStyle"),d=J.firstNotNull(Ge(n,u),c.get("color"),"#fff"),f=J.firstNotNull(ze(n,u),c.get("opacity"),1),v=y.parseColor(d),m=y.parseColor(c.get("borderColor"));v[3]*=f,m[3]*=f;var p=v[3]<.99;b.material.set("color",[1,1,1,1]),o=o||p;for(var g=J.firstNotNull(h.get("height",!0),e.get("regionHeight")),T=this._updatePolygonGeometry(e,b.geometry,u,g,a,s,v),x=a;x<T.vertexOffset;x++)this._dataIndexOfVertex[x]=u;this._vertexRangeOfDataIndex[(u-r)*2]=a,this._vertexRangeOfDataIndex[(u-r)*2+1]=T.vertexOffset,a=T.vertexOffset,s=T.triangleOffset;var _=c.get("borderWidth"),S=_>0;S&&(_*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,u,g,_,e.coordinateSystem.transform)),l.invisible=!S,l.material.set({color:m})}var b=this._polygonMesh;b.material.transparent=o,b.material.depthMask=!o,b.geometry.updateBoundingBox(),b.frontFace=this.extrudeY?y.Mesh.CCW:y.Mesh.CW,b.material.get("normalMap")&&b.geometry.generateTangents(),b.seriesIndex=e.seriesIndex,b.on("mousemove",this._onmousemove,this),b.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel("debug.wireframe");if(t.get("show")){var r=y.parseColor(t.get("lineStyle.color")||"rgba(0,0,0,0.5)"),i=J.firstNotNull(t.get("lineStyle.width"),1),n=this._polygonMesh;n.geometry.generateBarycentric(),n.material.define("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",r),n.material.set("wireframeLineWidth",i)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t==null&&(t=-1),t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,r){var i=e.getModel("groundPlane",e);if(this._groundMesh.invisible=!i.get("show",!0),!this._groundMesh.invisible){var n=e.get("shading"),a=this._groundMaterials[n];a||(a=this._groundMaterials.lambert),y.setMaterialFromModel(n,a,i,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",y.parseColor(i.get("color"))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,r){this._triangulationResults=[];for(var i=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0],a=e.coordinateSystem,s=t;s<r;s++){for(var o=[],l=e.getRegionPolygonCoords(s),u=0;u<l.length;u++){var h=l[u].exterior,c=l[u].interiors,d=[],f=[];if(!(h.length<3)){for(var v=0,m=0;m<h.length;m++){var p=h[m];d[v++]=p[0],d[v++]=p[1]}for(var m=0;m<c.length;m++)if(!(c[m].length<3)){for(var g=d.length/2,T=0;T<c[m].length;T++){var p=c[m][T];d.push(p[0]),d.push(p[1])}f.push(g)}for(var x=Jo(d,f),_=new Float64Array(d.length/2*3),S=[],b=[1/0,1/0,1/0],A=[-1/0,-1/0,-1/0],E=0,m=0;m<d.length;)nt.set(S,d[m++],0,d[m++]),a&&a.transform&&nt.transformMat4(S,S,a.transform),nt.min(b,b,S),nt.max(A,A,S),_[E++]=S[0],_[E++]=S[1],_[E++]=S[2];nt.min(i,i,b),nt.max(n,n,A),o.push({points:_,indices:x,min:b,max:A})}}this._triangulationResults.push(o)}this._geoBoundingBox=[i,n]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],r=0,i=0,n=0;n<t.length;n++)r+=t[n].points.length/3,i+=t[n].indices.length/3;var a=r*2+r*4,s=i*2+r*2;return{vertexCount:a,triangleCount:s}},_updatePolygonGeometry:function(e,t,r,i,n,a,s){var o=e.get("projectUVOnGround"),l=t.attributes.position,u=t.attributes.normal,h=t.attributes.texcoord0,c=t.attributes.color,d=this._triangulationResults[r-this._startIndex],f=c.value&&s,v=t.indices,m=this.extrudeY?1:2,p=this.extrudeY?2:1,g=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],T=nt.mul([],this._geoBoundingBox[0],g),x=nt.mul([],this._geoBoundingBox[1],g),_=Math.max(x[0]-T[0],x[2]-T[2]);function S(Se,Ze,He){for(var Oe=Se.points,Qr=Oe.length,De=[],wt=[],Ye=0;Ye<Qr;Ye+=3)De[0]=Oe[Ye],De[m]=Ze,De[p]=Oe[Ye+2],wt[0]=(Oe[Ye]*g[0]-T[0])/_,wt[1]=(Oe[Ye+2]*g[p]-T[2])/_,l.set(n,De),f&&c.set(n,s),h.set(n++,wt)}function b(Se,Ze,He){var Oe=n;S(Se,Ze);for(var Qr=Se.indices.length,De=0;De<Qr;De++)v[a*3+De]=Se.indices[De]+Oe;a+=Se.indices.length/3}for(var A=this.extrudeY?[0,1,0]:[0,0,1],E=nt.negate([],A),M=0;M<d.length;M++){var I=n,C=d[M];b(C,0),b(C,i);for(var B=C.points.length/3,G=0;G<B;G++)u.set(I+G,E),u.set(I+G+B,A);for(var R=[0,3,1,1,3,2],H=[[],[],[],[]],W=[],j=[],k=[],oe=[],X=0,G=0;G<B;G++){for(var fe=(G+1)%B,ae=(C.points[fe*3]-C.points[G*3])*g[0],me=(C.points[fe*3+2]-C.points[G*3+2])*g[p],pe=Math.sqrt(ae*ae+me*me),te=0;te<4;te++){var Ce=te===0||te===3,xe=(Ce?G:fe)*3;H[te][0]=C.points[xe],H[te][m]=te>1?i:0,H[te][p]=C.points[xe+2],l.set(n+te,H[te]),o?(oe[0]=(C.points[xe]*g[0]-T[0])/_,oe[1]=(C.points[xe+2]*g[p]-T[p])/_):(oe[0]=(Ce?X:X+pe)/_,oe[1]=(H[te][m]*g[m]-T[m])/_),h.set(n+te,oe)}nt.sub(W,H[1],H[0]),nt.sub(j,H[3],H[0]),nt.cross(k,W,j),nt.normalize(k,k);for(var te=0;te<4;te++)u.set(n+te,k),f&&c.set(n+te,s);for(var te=0;te<6;te++)v[a*3+te]=R[te]+n;n+=4,a+=2,X+=pe}}return t.dirty(),{vertexOffset:n,triangleOffset:a}},_getRegionLinesInfo:function(e,t,r){var i=0,n=0,a=t.getRegionModel(e),s=a.getModel("itemStyle"),o=s.get("borderWidth");if(o>0){var l=t.getRegionPolygonCoords(e);l.forEach(function(u){var h=u.exterior,c=u.interiors;i+=r.getPolylineVertexCount(h),n+=r.getPolylineTriangleCount(h);for(var d=0;d<c.length;d++)i+=r.getPolylineVertexCount(c[d]),n+=r.getPolylineTriangleCount(c[d])},this)}return{vertexCount:i,triangleCount:n}},_updateLinesGeometry:function(e,t,r,i,n,a){function s(u){for(var h=new Float64Array(u.length*3),c=0,d=[],f=0;f<u.length;f++)d[0]=u[f][0],d[1]=i+.1,d[2]=u[f][1],a&&nt.transformMat4(d,d,a),h[c++]=d[0],h[c++]=d[1],h[c++]=d[2];return h}var o=[1,1,1,1],l=t.getRegionPolygonCoords(r);l.forEach(function(u){var h=u.exterior,c=u.interiors;e.addPolyline(s(h),o,n);for(var d=0;d<c.length;d++)e.addPolyline(s(c[d]),o,n)})},highlight:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=r.getModel(["emphasis","itemStyle"]),n=i.get("color"),a=J.firstNotNull(i.get("opacity"),ze(t,e),1);if(n==null){var s=Ge(t,e);n=ya(s,-.4)}a==null&&(a=ze(t,e));var o=y.parseColor(n);o[3]*=a,this._setColorOfDataIndex(t,e,o)}},downplay:function(e){var t=this._data;if(t){var r=t.getItemModel(e),i=J.firstNotNull(Ge(t,e),r.get(["itemStyle","color"]),"#fff"),n=J.firstNotNull(ze(t,e),r.get(["itemStyle","opacity"]),1),a=y.parseColor(i);a[3]*=n,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,r){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var i=this._vertexRangeOfDataIndex[t*2];i<this._vertexRangeOfDataIndex[t*2+1];i++)this._polygonMesh.geometry.attributes.color.set(i,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const qf=Mi.extend({type:"geo3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new kr(t),this.groupGL=new y.Node,this._lightRoot=new y.Node,this._sceneHelper=new qt(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new Pi({zr:t.getZr()}),this._control.init()},render:function(e,t,r){this.groupGL.add(this._geo3DBuilder.rootNode);var i=e.coordinateSystem;if(!(!i||!i.viewGL)){i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._geo3DBuilder.update(e,t,r,0,e.getData().count());var s=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(o){o.material&&o.material[s]("fragment","SRGB_DECODE")}),n.off("update"),n.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,geo3DId:e.id})}),n.update()}},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var Yf={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function Kf(e,t){if(e==="world"){var r=Yf[t.name];if(r){var i=[r[0],r[1]];t.setCenter(i)}}}var $f=Le.vec3,Nr=Le.mat4,Qf=[Sl,Kf];function hn(e,t,r,i,n){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,i,n),this.transform=Nr.identity(new Float64Array(16)),this.invTransform=Nr.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}hn.prototype={constructor:hn,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(e,t,r){var i=Ua||Ua;try{this.regions=e?i(e):[]}catch(u){throw`Invalid geoJson format
`+u}t=t||{},r=r||{};for(var n=this.regions,a={},s=0;s<n.length;s++){var o=n[s].name;o=r[o]||o,n[s].name=o,a[o]=n[s],this.addGeoCoord(o,n[s].getCenter());var l=t[o];l&&n[s].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,Qf.forEach(function(u){u(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,r=0;r<t.length;r++){var i=t[r].getBoundingRect();e=e||i.clone(),e.union(i)}return this._geoRect=e||new uu(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,r=0;r<t.length;r++)if(t[r].contain(e))return t[r]},setSize:function(e,t,r){this.size=[e,t,r];var i=this.getGeoBoundingRect(),n=e/i.width,a=-r/i.height,s=-e/2-i.x*n,o=r/2-i.y*a,l=this.extrudeY?[s,0,o]:[s,o,0],u=this.extrudeY?[n,1,a]:[n,a,1],h=this.transform;Nr.identity(h),Nr.translate(h,h,l),Nr.scale(h,h,u),Nr.invert(this.invTransform,h)},dataToPoint:function(e,t){t=t||[];var r=this.extrudeY?1:2,i=this.extrudeY?2:1,n=e[2];return isNaN(n)&&(n=0),t[0]=e[0],t[i]=e[1],this.altitudeAxis?t[r]=this.altitudeAxis.dataToCoord(n):t[r]=0,t[r]+=this.regionHeight,$f.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function Jf(e,t){var r=e.getBoxLayoutParams(),i=pn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=this.getGeoBoundingRect(),a=n.width/n.height*(e.get("aspectScale")||.75),s=e.get("boxWidth"),o=e.get("boxDepth"),l=e.get("boxHeight");l==null&&(l=5),isNaN(s)&&isNaN(o)&&(s=100),isNaN(o)?o=s/a:isNaN(s)&&(s=o/a),this.setSize(s,l,o),this.regionHeight=e.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function ed(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this&&n.type!=="series.map3D"){var a=n.getData(),s=n.coordDimToDataDim("alt"),o=s&&s[0];if(o){var l=a.getDataExtent(o,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=Ta(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new mn("altitude",i),this.resize(this.model,t)}}var Vs=0,Na={dimensions:hn.prototype.dimensions,create:function(e,t){var r=[];if(!ia)throw new Error("geo3D component depends on geo component");function i(n,a){var s=Na.createGeo3D(n);n.__viewGL=n.__viewGL||new ce,s.viewGL=n.__viewGL,n.coordinateSystem=s,s.model=n,r.push(s),s.resize=Jf,s.resize(n,t),s.update=ed}return e.eachComponent("geo3D",function(n,a){i(n)}),e.eachSeriesByType("map3D",function(n,a){var s=n.get("coordinateSystem");s==null&&(s="geo3D"),s==="geo3D"&&i(n)}),e.eachSeries(function(n){if(n.get("coordinateSystem")==="geo3D"){if(n.type==="series.map3D")return;var a=n.getReferringComponents("geo3D").models[0];if(a||(a=e.getComponent("geo3D")),!a)throw new Error('geo "'+J.firstNotNull(n.get("geo3DIndex"),n.get("geo3DId"),0)+'" not found');n.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(e){var t=e.get("map"),r;return typeof t=="string"?(r=t,t=ia(t)):t&&t.features&&(t={geoJson:t}),r==null&&(r="GEO_ANONYMOUS_"+Vs++),new hn(r+Vs++,r,t&&t.geoJson,t&&t.specialAreas,e.get("nameMap"))}};function sl(e){e.registerComponentModel(Kr),e.registerComponentView(qf),e.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"geo3D",query:t},function(i){i.setView(t)})}),e.registerCoordinateSystem("geo3D",Na)}We(sl);function ks(e,t){e.id=e.id||e.name||t+""}var pr=Xr.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){pr.superApply(this,"init",arguments),Dt(this.option.layers,function(e,t){he(e,this.defaultLayerOption),ks(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,pr.superApply(this,"mergeOption",arguments);function r(s){return hu(s,function(o,l,u){return ks(l,u),o[l.id]=l,o},{})}if(t&&t.length){var i=r(e.layers),n=r(t);for(var a in i)n[a]?he(n[a],i[a],!0):t.push(e.layers[a]);this.option.layers=t}Dt(this.option.layers,function(s){he(s,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get("displacementScale");return(!e||e==="none")&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});he(pr.prototype,Tn);he(pr.prototype,jr);he(pr.prototype,Zr);he(pr.prototype,Yr);var ol=Math.PI,vt=Math.sin,Bt=Math.cos,ll=Math.tan,ul=Math.asin,hl=Math.atan2,gr=ol/180,td=1e3*60*60*24,rd=2440588,id=2451545;function nd(e){return e.valueOf()/td-.5+rd}function ad(e){return nd(e)-id}var cn=gr*23.4397;function sd(e,t){return hl(vt(e)*Bt(cn)-ll(t)*vt(cn),Bt(e))}function od(e,t){return ul(vt(t)*Bt(cn)+Bt(t)*vt(cn)*vt(e))}function ld(e,t,r){return hl(vt(e),Bt(e)*vt(t)-ll(r)*Bt(t))}function ud(e,t,r){return ul(vt(t)*vt(r)+Bt(t)*Bt(r)*Bt(e))}function hd(e,t){return gr*(280.16+360.9856235*e)-t}function cd(e){return gr*(357.5291+.98560028*e)}function fd(e){var t=gr*(1.9148*vt(e)+.02*vt(2*e)+3e-4*vt(3*e)),r=gr*102.9372;return e+t+r+ol}function dd(e){var t=cd(e),r=fd(t);return{dec:od(r,0),ra:sd(r,0)}}var cl={};cl.getPosition=function(e,t,r){var i=gr*-r,n=gr*t,a=ad(e),s=dd(a),o=hd(a,i)-s.ra;return{azimuth:ld(o,n,s.dec),altitude:ud(o,n,s.dec)}};const vd=`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`;y.Shader.import(Do);y.Shader.import(vd);const md=Mi.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new y.Node,this._sphereGeometry=new y.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new y.PlaneGeometry,this._earthMesh=new y.Mesh({renderNormal:!0}),this._atmosphereMesh=new y.Mesh,this._atmosphereGeometry=new y.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.atmosphere.vertex"),y.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=y.Mesh.CW,this._lightRoot=new y.Node,this._sceneHelper=new qt,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new Pi({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,r){var i=e.coordinateSystem,n=e.get("shading");i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL),this._sceneHelper.setScene(i.viewGL.scene),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var s="ecgl."+n;(!a.material||a.material.shader.name!==s)&&(a.material=y.createMaterial(s)),y.setMaterialFromModel(n,a.material,e,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var d=a.material.get(c);d&&(d.flipY=!1)}),a.material.set("color",y.parseColor(e.get("baseColor")));var o=i.radius*.99;if(a.scale.set(o,o,o),e.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get("atmosphere.glowPower")||6,glowColor:e.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:e.get("atmosphere.innerGlowPower")||2,glowColor:e.get("atmosphere.color")||"#ffffff"});var l=e.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(o+l,o+l,o+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=a.material.setTextureImage("diffuseMap",e.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a);var h=a.material.setTextureImage("bumpMap",e.get("heightTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a),a.material[e.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(e,r),this._displaceVertices(e,r),this._updateViewControl(e,r),this._updateLayers(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},_updateLayers:function(e,t){var r=e.coordinateSystem,i=e.get("layers"),n=r.radius,a=[],s=[],o=[],l=[];Dt(i,function(f){var v=new Or(f),m=v.get("type"),p=y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8});if(p.surface&&p.surface.attachToMesh(this._earthMesh),m==="blend"){var g=v.get("blendTo"),T=J.firstNotNull(v.get("intensity"),1);g==="emission"?(o.push(p),l.push(T)):(a.push(p),s.push(T))}else{var x=v.get("id"),_=this._layerMeshes[x];_||(_=this._layerMeshes[x]=new y.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}));var S=v.get("shading");S==="lambert"?(_.material=_.__lambertMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),_.__lambertMaterial=_.material):(_.material=_.__colorMaterial||new y.Material({autoUpdateTextureStatus:!1,shader:y.createShader("ecgl.color"),transparent:!0,depthMask:!1}),_.__colorMaterial=_.material),_.material.enableTexture("diffuseMap");var b=v.get("distance"),A=n+(b??r.radius/100);_.scale.set(A,A,A),n=A;var E=this._blankTexture||(this._blankTexture=y.createBlankTexture("rgba(255, 255, 255, 0)"));_.material.set("diffuseMap",E),y.loadTexture(v.get("texture"),t,{flipY:!1,anisotropic:8},function(M){M.surface&&M.surface.attachToMesh(_),_.material.set("diffuseMap",M),t.getZr().refresh()}),v.get("show")?this.groupGL.add(_):this.groupGL.remove(_)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",o.length),u.set("layerDiffuseMap",a),u.set("layerDiffuseIntensity",s),u.set("layerEmissiveMap",o),u.set("layerEmissionIntensity",l);var h=e.getModel("debug.wireframe");if(h.get("show")){u.define("both","WIREFRAME_TRIANGLE");var c=y.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=J.firstNotNull(h.get("lineStyle.width"),1);u.set("wireframeLineWidth",d),u.set("wireframeLineColor",c)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(e,t){var r=e.coordinateSystem,i=e.getModel("viewControl");r.viewGL.camera;var n=this;function a(){return{type:"globeChangeCamera",alpha:s.getAlpha(),beta:s.getBeta(),distance:s.getDistance()-r.radius,center:s.getCenter(),from:n.uid,globeId:e.id}}var s=this._control;s.setViewGL(r.viewGL);var o=i.get("targetCoord"),l,u;o!=null&&(u=o[0]+90,l=o[1]),s.setFromViewControlModel(i,{baseDistance:r.radius,alpha:l,beta:u}),s.off("update"),s.on("update",function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var r=e.get("displacementQuality"),i=e.get("debug.wireframe.show"),n=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&r===this._displacementQuality&&i===this._showDebugWireframe)){this._displacementQuality=r,this._showDebugWireframe=i;var a=this._sphereGeometry,s={low:100,medium:200,high:400,ultra:800}[r]||200,o=s/2;(a.widthSegments!==s||i)&&(a.widthSegments=s,a.heightSegments=o,a.build()),this._doDisplaceVertices(a,n),i&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var r=e.attributes.position.value,i=e.attributes.texcoord0.value,n=e.__originalPosition;(!n||n.length!==r.length)&&(n=new Float32Array(r.length),n.set(r),e.__originalPosition=n);for(var a=t.displacementWidth,s=t.displacementHeight,o=t.displacementData,l=0;l<e.vertexCount;l++){var u=l*3,h=l*2,c=n[u+1],d=n[u+2],f=n[u+3],v=i[h++],m=i[h++],p=Math.round(v*(a-1)),g=Math.round(m*(s-1)),T=g*a+p,x=o?o[T]:0;r[u+1]=c+c*x,r[u+2]=d+d*x,r[u+3]=f+f*x}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var r=this._earthMesh;this._sceneHelper.updateLight(e);var i=this._sceneHelper.mainLight,n=e.get("light.main.time")||new Date,a=cl.getPosition(cu(n),0,0),s=Math.cos(a.altitude);i.position.y=-s*Math.cos(a.azimuth),i.position.x=Math.sin(a.altitude),i.position.z=s*Math.sin(a.azimuth),i.lookAt(r.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}});var pd=Le.vec3;function fn(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}fn.prototype={constructor:fn,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(e,t,r){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=r},_getDisplacementScale:function(e,t){var r=(e+180)/360*(this.displacementWidth-1),i=(90-t)/180*(this.displacementHeight-1),n=Math.round(r)+Math.round(i)*this.displacementWidth;return this.displacementData[n]},dataToPoint:function(e,t){var r=e[0],i=e[1],n=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,i)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(n)),r=r*Math.PI/180,i=i*Math.PI/180;var s=Math.cos(i)*a;return t=t||[],t[0]=-s*Math.cos(r+Math.PI),t[1]=Math.sin(i)*a,t[2]=s*Math.sin(r+Math.PI),t},pointToData:function(e,t){var r=e[0],i=e[1],n=e[2],a=pd.len(e);r/=a,i/=a,n/=a;var s=Math.asin(i),o=Math.atan2(n,-r);o<0&&(o=Math.PI*2+o);var l=s*180/Math.PI,u=o*180/Math.PI-180;return t=t||[],t[0]=u,t[1]=l,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function gd(e,t){var r=document.createElement("canvas"),i=r.getContext("2d"),n=e.width,a=e.height;r.width=n,r.height=a,i.drawImage(e,0,0,n,a);for(var s=i.getImageData(0,0,n,a).data,o=new Float32Array(s.length/4),l=0;l<s.length/4;l++){var u=s[l*4];o[l]=u/255*t}return{data:o,width:n,height:a}}function _d(e,t){var r=e.getBoxLayoutParams(),i=pn(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio()),this.radius=e.get("globeRadius");var n=e.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,n-this.radius)}function yd(e,t){var r=[1/0,-1/0];if(e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData(),s=n.coordDimToDataDim("alt"),o=s&&s[0];if(o){var l=a.getDataExtent(o,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var i=Ta(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new mn("altitude",i),this.resize(this.model,t)}}var xd={dimensions:fn.prototype.dimensions,create:function(e,t){var r=[];return e.eachComponent("globe",function(i){i.__viewGL=i.__viewGL||new ce;var n=new fn;n.viewGL=i.__viewGL,i.coordinateSystem=n,n.model=i,r.push(n),n.resize=_d,n.resize(i,t),n.update=yd}),e.eachSeries(function(i){if(i.get("coordinateSystem")==="globe"){var n=i.getReferringComponents("globe").models[0];if(n||(n=e.getComponent("globe")),!n)throw new Error('globe "'+J.firstNotNull(i.get("globe3DIndex"),i.get("globe3DId"),0)+'" not found');var a=n.coordinateSystem;i.coordinateSystem=a}}),e.eachComponent("globe",function(i,n){var a=i.coordinateSystem,s=i.getDisplacementTexture(),o=i.getDisplacemenScale();if(i.isDisplacementChanged()){if(i.hasDisplacement()){var l=!0;y.loadTexture(s,t,function(u){var h=u.image,c=gd(h,o);i.setDisplacementData(c.data,c.width,c.height),l||t.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(i.displacementData,i.displacementWidth,i.displacementHeight)}}),r}};function Td(e){e.registerComponentModel(pr),e.registerComponentView(md),e.registerCoordinateSystem("globe",xd),e.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"globe",query:t},function(i){i.setView(t)})}),e.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(t,r){})}We(Td);var Ws=["zoom","center","pitch","bearing"],Ra=Xr.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var e=this;return Ws.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMapboxCameraOption:function(e){e!=null&&Ws.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});he(Ra.prototype,jr);he(Ra.prototype,Zr);function Jt(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}Jt.prototype.setUnpainted=function(){};Jt.prototype.resize=function(){this._mapbox.resize()};Jt.prototype.getMapbox=function(){return this._mapbox};Jt.prototype.clear=function(){};Jt.prototype.refresh=function(){this._mapbox.resize()};var fl=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];Jt.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},fl.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);e.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};Jt.prototype.dispose=function(){fl.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};const dl=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;y.Shader.import(dl);const wd=Mi.extend({type:"mapbox3D",__ecgl__:!0,init:function(e,t){var r=t.getZr();this._zrLayer=new Jt("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new qt(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMapbox(),n=this._dispatchInteractAction.bind(this,t,i);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){i.on(a,n)}),this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,r){var i=this._zrLayer.getMapbox(),n=e.get("style"),a=JSON.stringify(n);a!==this._oldStyleStr&&n&&i.setStyle(n),this._oldStyleStr=a,i.setCenter(e.get("center")),i.setZoom(e.get("zoom")),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMapbox(i);var s=e.coordinateSystem;s.viewGL.scene.add(this._lightRoot),s.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(s.viewGL.scene),this._sceneHelper.updateLight(e),s.viewGL.setPostEffect(e.getModel("postEffect"),r),s.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._mapbox3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"mapbox3DChangeCamera",pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),s=n.intersectPlane(r),o=a.dist(s)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(o,o,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}});var kt=Le.mat4,ai=512,$n=.6435011087932844,at=Math.PI,Cr=1/10;function Wr(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Wr.prototype={constructor:Wr,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,ai)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan($n/2)*this.height*Cr,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=$n/2,i=Math.PI/2+t,n=Math.sin(r)*e/Math.sin(Math.PI-i-r),a=Math.cos(Math.PI/2-t)*n+e,s=a*1.1;this.pitch>50&&(s=1e3);var o=[];kt.perspective(o,$n,this.width/this.height,1,s),this.viewGL.camera.projectionMatrix.setArray(o),this.viewGL.camera.decomposeProjectionMatrix();var o=kt.identity([]),l=this.dataToPoint(this.center);kt.scale(o,o,[1,-1,1]),kt.translate(o,o,[0,0,-e]),kt.rotateX(o,o,t),kt.rotateZ(o,o,-this.bearing/180*Math.PI),kt.translate(o,o,[-l[0]*this.getScale()*Cr,-l[1]*this.getScale()*Cr,0]),this.viewGL.camera.viewMatrix.array=o;var u=[];kt.invert(u,o),this.viewGL.camera.worldTransform.array=u,this.viewGL.camera.decomposeWorldTransform();var h=ai*this.getScale(),c;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var d=this.altitudeExtent[1]-this.altitudeExtent[0];c=this.boxHeight/d*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else c=h/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*Cr;this.viewGL.rootNode.scale.set(this.getScale()*Cr,this.getScale()*Cr,c)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*ai,t)},projectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i*at/180,s=n*at/180,o=t*(a+at)/(2*at),l=t*(at-Math.log(Math.tan(at/4+s*.5)))/(2*at);return r=r||[],r[0]=o,r[1]=l,r},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*ai,t)},unprojectOnTileWithScale:function(e,t,r){var i=e[0],n=e[1],a=i/t*(2*at)-at,s=2*(Math.atan(Math.exp(at-n/t*(2*at)))-at/4);return r=r||[],r[0]=a*180/at,r[1]=s*180/at,r},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,ai,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function bi(){Wr.apply(this,arguments)}bi.prototype=new Wr;bi.prototype.constructor=bi;bi.prototype.type="mapbox3D";function vl(e,t,r){function i(a,s){var o=s.getWidth(),l=s.getHeight(),u=s.getDevicePixelRatio();this.viewGL.setViewport(0,0,o,l,u),this.width=o,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function n(a,s){if(this.model.get("boxHeight")!=="auto"){var o=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),h=l.coordDimToDataDim("alt")[0];if(h){var c=u.getDataExtent(h,!0);o[0]=Math.min(o[0],c[0]),o[1]=Math.max(o[1],c[1])}}},this),o&&isFinite(o[1]-o[0])&&(this.altitudeExtent=o)}}return{dimensions:t.prototype.dimensions,create:function(a,s){var o=[];return a.eachComponent(e,function(l){var u=l.__viewGL;u||(u=l.__viewGL=new ce,u.setRootNode(new y.Node));var h=new t;h.viewGL=l.__viewGL,h.resize=i,h.resize(l,s),o.push(h),l.coordinateSystem=h,h.model=l,h.update=n}),a.eachSeries(function(l){if(l.get("coordinateSystem")===e){var u=l.getReferringComponents(e).models[0];if(u||(u=a.getComponent(e)),!u)throw new Error(e+' "'+J.firstNotNull(l.get(e+"Index"),l.get(e+"Id"),0)+'" not found');l.coordinateSystem=u.coordinateSystem}}),r&&r(o,a,s),o}}}var Sd=vl("mapbox3D",bi,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMapboxCameraOption())})});function bd(e){e.registerComponentModel(Ra),e.registerComponentView(wd),e.registerCoordinateSystem("mapbox3D",Sd),e.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(t,r){r.eachComponent({mainType:"mapbox3D",query:t},function(i){i.setMapboxCameraOption(t)})})}We(bd);var Xs=["zoom","center","pitch","bearing"],Ia=Xr.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var e=this;return Xs.reduce(function(t,r){return t[r]=e.get(r),t},{})},setMaptalksCameraOption:function(e){e!=null&&Xs.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});he(Ia.prototype,jr);he(Ia.prototype,Zr);function er(e,t,r,i){if(this.id=e,this.zr=t,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:i,doubleClickZoom:!1,fog:!1}),this._initEvents()}er.prototype.setUnpainted=function(){};er.prototype.resize=function(){this._maptalks.checkSize()};er.prototype.getMaptalks=function(){return this._maptalks};er.prototype.clear=function(){};er.prototype.refresh=function(){this._maptalks.checkSize()};var ml=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];er.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(t){return t.preventDefault(),!1}},ml.forEach(function(t){this._handlers[t]=function(r){var i={};for(var n in r)i[n]=r[n];i.bubbles=!1;var a=new r.constructor(r.type,i);t==="mousewheel"||t==="DOMMouseScroll"?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)};er.prototype.dispose=function(){ml.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()};y.Shader.import(dl);const Ed=Mi.extend({type:"maptalks3D",__ecgl__:!0,init:function(e,t){this._groundMesh=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.displayShadow.vertex"),fragment:y.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var r=t.getZr();this._zrLayer=new er("maptalks3D",r,e.get("center"),e.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new y.Node,this._sceneHelper=new qt(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var i=this._zrLayer.getMaptalks(),n=this._dispatchInteractAction.bind(this,t,i);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){i.on(a,n)})},render:function(e,t,r){this._zrLayer||this._initMaptalksLayer(e,r);var i=this._zrLayer.getMaptalks(),n=e.get("urlTemplate"),a=i.getBaseLayer();n!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:n,attribution:e.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:n,subdomains:["a","b","c"],attribution:e.get("attribution")}),i.setBaseLayer(a))),this._oldUrlTemplate=n,i.setCenter(e.get("center")),i.setZoom(e.get("zoom"),{animation:!1}),i.setPitch(e.get("pitch")),i.setBearing(e.get("bearing")),e.setMaptalks(i);var s=e.coordinateSystem;s.viewGL.scene.add(this._lightRoot),s.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(s.viewGL.scene),this._sceneHelper.updateLight(e),s.viewGL.setPostEffect(e.getModel("postEffect"),r),s.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._maptalks3DModel=e},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r),e.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(e,t,r,i){e.coordinateSystem.setCameraOption(i),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(e,t,r){e.dispatchAction({type:"maptalks3DChangeCamera",pitch:t.getPitch(),zoom:Ld(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var r=new y.Plane(new y.Vector3(0,0,1),0),i=e.viewGL.camera.castRay(new y.Vector2(-1,-1)),n=e.viewGL.camera.castRay(new y.Vector2(1,1)),a=i.intersectPlane(r),s=n.intersectPlane(r),o=a.dist(s)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(o,o,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Ad=2*6378137*Math.PI/(256*Math.pow(2,20));function Ld(e){return 19-Math.log(e/Ad)/Math.LN2}function Ei(){Wr.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}Ei.prototype=new Wr;Ei.prototype.constructor=Ei;Ei.prototype.type="maptalks3D";var Md=vl("maptalks3D",Ei,function(e){e.forEach(function(t){t.setCameraOption(t.model.getMaptalksCameraOption())})});function Cd(e){e.registerComponentModel(Ia),e.registerComponentView(Ed),e.registerCoordinateSystem("maptalks3D",Md),e.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(t,r){r.eachComponent({mainType:"maptalks3D",query:t},function(i){i.setMaptalksCameraOption(t)})})}We(Cd);var Dd=Le.vec3,Pd=xa.isDimensionStacked;function Nd(e){var t=e[0],r=e[1];return!(t>0&&r>0||t<0&&r<0)}function Rd(e,t){var r=e.getData(),i=e.get("barSize");if(i==null){var n=t.size,a,s,o=t.getAxis("x"),l=t.getAxis("y");o.type==="category"?a=o.getBandWidth()*.7:a=Math.round(n[0]/Math.sqrt(r.count()))*.6,l.type==="category"?s=l.getBandWidth()*.7:s=Math.round(n[1]/Math.sqrt(r.count()))*.6,i=[a,s]}else Ct(i)||(i=[i,i]);var u=t.getAxis("z").scale.getExtent(),h=Nd(u),c=["x","y","z"].map(function(v){return e.coordDimToDataDim(v)[0]}),d=Pd(r,c[2]),f=d?r.getCalculationInfo("stackResultDimension"):c[2];r.each(c,function(v,m,p,g){var T=r.get(f,g),x=d?T-p:h?0:u[0],_=t.dataToPoint([v,m,x]),S=t.dataToPoint([v,m,T]),b=Dd.dist(_,S),A=[0,S[1]<_[1]?-1:1,0];Math.abs(b)===0&&(b=.1);var E=[i[0],b,i[1]];r.setItemLayout(g,[_,A,E])}),r.setLayout("orient",[1,0,0])}function Oa(e,t,r){for(var i=e.getDataExtent(t),n=e.getDataExtent(r),a=i[1]-i[0]||i[0],s=n[1]-n[0]||n[0],o=50,l=new Uint8Array(o*o),u=0;u<e.count();u++){var h=e.get(t,u),c=e.get(r,u),d=Math.floor((h-i[0])/a*(o-1)),f=Math.floor((c-n[0])/s*(o-1)),v=f*o+d;l[v]=l[v]||1}for(var m=0,u=0;u<l.length;u++)l[u]&&m++;return m/l.length}var js=Le.vec3,Id=xa.isDimensionStacked;function Od(e,t){var r=e.getData(),i=e.get("minHeight")||0,n=e.get("barSize"),a=["lng","lat","alt"].map(function(u){return e.coordDimToDataDim(u)[0]});if(n==null){var s=t.radius*Math.PI,o=Oa(r,a[0],a[1]);n=[s/Math.sqrt(r.count()/o),s/Math.sqrt(r.count()/o)]}else Ct(n)||(n=[n,n]);var l=Ba(r,a);r.each(a,function(u,h,c,d){var f=r.get(l.dimension,d),v=l.isStacked?f-c:t.altitudeAxis.scale.getExtent()[0],m=Math.max(t.altitudeAxis.dataToCoord(c),i),p=t.dataToPoint([u,h,v]),g=t.dataToPoint([u,h,f]),T=js.sub([],g,p);js.normalize(T,T);var x=[n[0],m,n[1]];r.setItemLayout(d,[p,T,x])}),r.setLayout("orient",L.UP.array)}function Bd(e,t){var r=e.getData(),i=e.get("barSize"),n=e.get("minHeight")||0,a=["lng","lat","alt"].map(function(h){return e.coordDimToDataDim(h)[0]});if(i==null){var s=Math.min(t.size[0],t.size[2]),o=Oa(r,a[0],a[1]);i=[s/Math.sqrt(r.count()/o),s/Math.sqrt(r.count()/o)]}else Ct(i)||(i=[i,i]);var l=[0,1,0],u=Ba(r,a);r.each(a,function(h,c,d,f){var v=r.get(u.dimension,f),m=u.isStacked?v-d:t.altitudeAxis.scale.getExtent()[0],p=Math.max(t.altitudeAxis.dataToCoord(d),n),g=t.dataToPoint([h,c,m]),T=[i[0],p,i[1]];r.setItemLayout(f,[g,l,T])}),r.setLayout("orient",[1,0,0])}function Fd(e,t){var r=e.getData(),i=e.coordDimToDataDim("lng")[0],n=e.coordDimToDataDim("lat")[0],a=e.coordDimToDataDim("alt")[0],s=e.get("barSize"),o=e.get("minHeight")||0;if(s==null){var l=r.getDataExtent(i),u=r.getDataExtent(n),h=t.dataToPoint([l[0],u[0]]),c=t.dataToPoint([l[1],u[1]]),d=Math.min(Math.abs(h[0]-c[0]),Math.abs(h[1]-c[1]))||1,f=Oa(r,i,n);s=[d/Math.sqrt(r.count()/f),d/Math.sqrt(r.count()/f)]}else Ct(s)||(s=[s,s]),s[0]/=t.getScale()/16,s[1]/=t.getScale()/16;var v=[0,0,1],m=[i,n,a],p=Ba(r,m);r.each(m,function(g,T,x,_){var S=r.get(p.dimension,_),b=p.isStacked?S-x:0,A=t.dataToPoint([g,T,b]),E=t.dataToPoint([g,T,S]),M=Math.max(E[2]-A[2],o),I=[s[0],M,s[1]];r.setItemLayout(_,[A,v,I])}),r.setLayout("orient",[1,0,0])}function Ba(e,t){var r=Id(e,t[2]);return{dimension:r?e.getCalculationInfo("stackResultDimension"):t[2],isStacked:r}}function zd(e){e.registerLayout(function(t,r){t.eachSeriesByType("bar3D",function(i){var n=i.coordinateSystem,a=n&&n.type;a==="globe"?Od(i,n):a==="cartesian3D"?Rd(i,n):a==="geo3D"?Bd(i,n):(a==="mapbox3D"||a==="maptalks3D")&&Fd(i,n)})})}var tr={};tr.getFormattedLabel=function(e,t,r,i,n){r=r||"normal";var a=e.getData(i),s=a.getItemModel(t),o=e.getDataParams(t,i);n!=null&&o.value instanceof Array&&(o.value=o.value[n]);var l=s.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);l==null&&(l=s.get(["label","formatter"]));var u;return typeof l=="function"?(o.status=r,u=l(o)):typeof l=="string"&&(u=fu(l,o)),u};tr.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function Gd(e,t){var r=[];return Dt(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,s=a[t];s!=null&&s!==!1&&(r[s]=n.name)}),r}function Ii(e,t,r){function i(c){var d=[],f=Gd(n,"tooltip");f.length?Dt(f,function(m){v(n.get(m,t),m)}):Dt(c,v);function v(m,p){var g=n.getDimensionInfo(p);if(!(!g||g.otherDims.tooltip===!1)){var T=g.type,x="- "+(g.tooltipName||g.name)+": "+(T==="ordinal"?m+"":T==="time"?mu("yyyy/MM/dd hh:mm:ss",m):Va(m));x&&d.push(Dr(x))}}return"<br/>"+d.join("<br/>")}var n=e.getData(),a=e.getRawValue(t),s=Ct(a)?i(a):Dr(Va(a)),o=n.getName(t),l=Ge(n,t);du(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=vu(l),h=e.name;return h==="\0-"&&(h=""),h=h?Dr(h)+"<br/>":"",h+u+(o?Dr(o)+": "+s:s)}function En(e,t,r){r=r||e.getSource();var i=t||vo(e.get("coordinateSystem"))||["x","y","z"],n=Ci(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(o){var l=e.getReferringComponents(o+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:o}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(o){if(i.indexOf(o.coordDim)>=0){var l=e.getReferringComponents(o.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(o.ordinalMeta=l.getOrdinalMeta())}});var a=xa.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),s=new Pt(n,e);return s.setCalculationInfo(a),s.initData(r),s}var pl=xt.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(e,t){return En(this)},getFormattedLabel:function(e,t,r,i){var n=tr.getFormattedLabel(this,e,t,r,i);return n==null&&(n=this.getData().get("z",e)),n},formatTooltip:function(e){return Ii(this,e)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});he(pl.prototype,Yr);var we=Le.vec3,Ud=Le.mat3,Fa=ee.extend(function(){return{attributes:{position:new ee.Attribute("position","float",3,"POSITION"),normal:new ee.Attribute("normal","float",3,"NORMAL"),color:new ee.Attribute("color","float",4,"COLOR"),prevPosition:new ee.Attribute("prevPosition","float",3),prevNormal:new ee.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,r=this.getBarVertexCount()*e,i=this.getBarTriangleCount()*e;this.vertexCount!==r&&(this.attributes.position.init(r),t?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,r=e*2+1;return(t+1)*r*2+4},setColor:function(e,t){for(var r=this.getBarVertexCount(),i=r*e,n=r*(e+1),a=i;a<n;a++)this.attributes.color.set(a,t);this.dirtyAttribute("color")},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=we.create,t=we.scaleAndAdd,r=e(),i=e(),n=e(),a=e(),s=e(),o=e(),l=e(),u=[],h=[],c=0;c<8;c++)u[c]=e();for(var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],f=[0,1,2,0,2,3],v=[],c=0;c<d.length;c++)for(var m=d[c],p=0;p<2;p++){for(var g=[],T=0;T<3;T++)g.push(m[f[p*3+T]]);v.push(g)}return function(x,_,S,b,A,E){var M=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(x,_,S,b,this.bevelSize,this.bevelSegments,A);else{we.copy(n,_),we.normalize(n,n),we.cross(a,S,n),we.normalize(a,a),we.cross(i,n,a),we.normalize(a,a),we.negate(s,i),we.negate(o,n),we.negate(l,a),t(u[0],x,i,b[0]/2),t(u[0],u[0],a,b[2]/2),t(u[1],x,i,b[0]/2),t(u[1],u[1],l,b[2]/2),t(u[2],x,s,b[0]/2),t(u[2],u[2],l,b[2]/2),t(u[3],x,s,b[0]/2),t(u[3],u[3],a,b[2]/2),t(r,x,n,b[1]),t(u[4],r,i,b[0]/2),t(u[4],u[4],a,b[2]/2),t(u[5],r,i,b[0]/2),t(u[5],u[5],l,b[2]/2),t(u[6],r,s,b[0]/2),t(u[6],u[6],l,b[2]/2),t(u[7],r,s,b[0]/2),t(u[7],u[7],a,b[2]/2);var I=this.attributes;if(this.enableNormal){h[0]=i,h[1]=s,h[2]=n,h[3]=o,h[4]=a,h[5]=l;for(var C=this._vertexOffset,B=0;B<d.length;B++){for(var G=this._triangleOffset*3,R=0;R<6;R++)this.indices[G++]=C+f[R];C+=4,this._triangleOffset+=2}for(var B=0;B<d.length;B++)for(var H=h[B],R=0;R<4;R++){var W=d[B][R];I.position.set(this._vertexOffset,u[W]),I.normal.set(this._vertexOffset,H),I.color.set(this._vertexOffset++,A)}}else{for(var B=0;B<v.length;B++){for(var G=this._triangleOffset*3,R=0;R<3;R++)this.indices[G+R]=v[B][R]+this._vertexOffset;this._triangleOffset++}for(var B=0;B<u.length;B++)I.position.set(this._vertexOffset,u[B]),I.color.set(this._vertexOffset++,A)}}for(var j=this._vertexOffset,B=M;B<j;B++)this._dataIndices[B]=E}}(),_addBevelBar:function(){var e=we.create(),t=we.create(),r=we.create(),i=Ud.create(),n=[],a=[1,-1,-1,1],s=[1,1,-1,-1],o=[2,0];return function(l,u,h,c,d,f,v){we.copy(t,u),we.normalize(t,t),we.cross(r,h,t),we.normalize(r,r),we.cross(e,t,r),we.normalize(r,r),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=t[0],i[4]=t[1],i[5]=t[2],i[6]=r[0],i[7]=r[1],i[8]=r[2],d=Math.min(c[0],c[2])/2*d;for(var m=0;m<3;m++)n[m]=Math.max(c[m]-d*2,0);for(var p=(c[0]-n[0])/2,g=(c[1]-n[1])/2,T=(c[2]-n[2])/2,x=[],_=[],S=this._vertexOffset,b=[],m=0;m<2;m++){b[m]=b[m]=[];for(var A=0;A<=f;A++)for(var E=0;E<4;E++){(A===0&&m===0||m===1&&A===f)&&b[m].push(S);for(var M=0;M<=f;M++){var I=M/f*Math.PI/2+Math.PI/2*E,C=A/f*Math.PI/2+Math.PI/2*m;_[0]=p*Math.cos(I)*Math.sin(C),_[1]=g*Math.cos(C),_[2]=T*Math.sin(I)*Math.sin(C),x[0]=_[0]+a[E]*n[0]/2,x[1]=_[1]+g+o[m]*n[1]/2,x[2]=_[2]+s[E]*n[2]/2,Math.abs(p-g)<1e-6&&Math.abs(g-T)<1e-6||(_[0]/=p*p,_[1]/=g*g,_[2]/=T*T),we.normalize(_,_),we.transformMat3(x,x,i),we.transformMat3(_,_,i),we.add(x,x,l),this.attributes.position.set(S,x),this.enableNormal&&this.attributes.normal.set(S,_),this.attributes.color.set(S,v),S++}}}for(var B=f*4+3,G=f*2+1,R=B+1,E=0;E<G;E++)for(var m=0;m<=B;m++){var H=E*R+m+this._vertexOffset,W=E*R+(m+1)%R+this._vertexOffset,j=(E+1)*R+(m+1)%R+this._vertexOffset,k=(E+1)*R+m+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[j,H,W]),this.setTriangleIndices(this._triangleOffset++,[j,k,H])}this.setTriangleIndices(this._triangleOffset++,[b[0][0],b[0][2],b[0][1]]),this.setTriangleIndices(this._triangleOffset++,[b[0][0],b[0][3],b[0][2]]),this.setTriangleIndices(this._triangleOffset++,[b[1][0],b[1][1],b[1][2]]),this.setTriangleIndices(this._triangleOffset++,[b[1][0],b[1][2],b[1][3]]),this._vertexOffset=S}}()});Kt(Fa.prototype,Ni);Kt(Fa.prototype,Pa);var Hd=Le.vec3;const Vd=Tt.extend({type:"bar3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t,this._labelsBuilder=new Gt(256,256,t);var r=this;this._labelsBuilder.getLabelPosition=function(i,n,a){if(r._data){var s=r._data.getItemLayout(i),o=s[0],l=s[1],u=s[2][1];return Hd.scaleAndAdd([],o,l,a+u)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,r){var i=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=i,this._barMesh||(this._barMesh=new y.Mesh({geometry:new Fa,shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:e.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var n=e.coordinateSystem;if(this._doRender(e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var r=e.getData(),i=e.get("shading"),n=i!=="color",a=this,s=this._barMesh,o="ecgl."+i;(!s.material||s.material.shader.name!==o)&&(s.material=y.createMaterial(o,["VERTEX_COLOR"])),y.setMaterialFromModel(i,s.material,e,t),s.geometry.enableNormal=n,s.geometry.resetOffset();var l=e.get("bevelSize"),u=e.get("bevelSmoothness");s.geometry.bevelSegments=u,s.geometry.bevelSize=l;var h=[],c=new Float32Array(r.count()*4),d=0,p=0,f=!1;r.each(function(T){if(r.hasValue(T)){var x=Ge(r,T),_=ze(r,T);_==null&&(_=1),y.parseColor(x,h),h[3]*=_,c[d++]=h[0],c[d++]=h[1],c[d++]=h[2],c[d++]=h[3],h[3]>0&&(p++,h[3]<.99&&(f=!0))}}),s.geometry.setBarCount(p);var v=r.getLayout("orient"),m=this._barIndexOfData=new Int32Array(r.count()),p=0;r.each(function(T){if(!r.hasValue(T)){m[T]=-1;return}var x=r.getItemLayout(T),_=x[0],S=x[1],b=x[2],A=T*4;h[0]=c[A++],h[1]=c[A++],h[2]=c[A++],h[3]=c[A++],h[3]>0&&(a._barMesh.geometry.addBar(_,S,v,b,h,T),m[T]=p++)}),s.geometry.dirty(),s.geometry.updateBoundingBox();var g=s.material;g.transparent=f,g.depthMask=!f,s.geometry.sortTriangles=f,this._initHandler(e,t)},_initHandler:function(e,t){var r=e.getData(),i=this._barMesh,n=e.coordinateSystem.type==="cartesian3D";i.seriesIndex=e.seriesIndex;var a=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var o=i.geometry.getDataIndexOfVertex(s.triangle[0]);o!==a&&(this._downplay(a),this._highlight(o),this._labelsBuilder.updateLabels([o]),n&&t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",o),r.get("y",o),r.get("z",o,!0)]})),a=o,i.dataIndex=o},this),i.on("mouseout",function(s){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,i.dataIndex=-1,n&&t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=t.getItemModel(e),n=i.getModel("emphasis.itemStyle"),a=n.get("color"),s=n.get("opacity");if(a==null){var o=Ge(t,e);a=ya(o,-.4)}s==null&&(s=ze(t,e));var l=y.parseColor(a);l[3]*=s,this._barMesh.geometry.setColor(r,l),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var r=this._barIndexOfData[e];if(!(r<0)){var i=Ge(t,e),n=ze(t,e),a=y.parseColor(i);a[3]*=n,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),s=J.queryDataIndex(a,n),o=this;s!=null?Dt(tr.normalizeToArray(s),function(l){e==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){e==="highlight"?o._highlight(l):o._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function kd(e){e.registerChartView(Vd),e.registerSeriesModel(pl),zd(e),e.registerProcessor(function(t,r){t.eachSeriesByType("bar3d",function(i){var n=i.getData();n.filterSelf(function(a){return n.hasValue(a)})})})}We(kd);var Wd=xt.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){return En(this)},formatTooltip:function(e){return Ii(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Xd=Le.vec3;y.Shader.import(bn);const jd=Tt.extend({type:"line3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._api=t},render:function(e,t,r){var i=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=i,this._line3DMesh||(this._line3DMesh=new y.Mesh({geometry:new Qt({useNativeLine:!1,sortTriangles:!0}),material:new y.Material({shader:y.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var n=e.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(e,r),this._data=e.getData(),this._camera=n.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var r=e.getData(),i=this._line3DMesh;i.geometry.resetOffset();var n=r.getLayout("points"),a=[],s=new Float32Array(n.length/3*4),o=0,l=!1;r.each(function(c){var d=Ge(r,c),f=ze(r,c);f==null&&(f=1),y.parseColor(d,a),a[3]*=f,s[o++]=a[0],s[o++]=a[1],s[o++]=a[2],s[o++]=a[3],a[3]<.99&&(l=!0)}),i.geometry.setVertexCount(i.geometry.getPolylineVertexCount(n)),i.geometry.setTriangleCount(i.geometry.getPolylineTriangleCount(n)),i.geometry.addPolyline(n,s,J.firstNotNull(e.get("lineStyle.width"),1)),i.geometry.dirty(),i.geometry.updateBoundingBox();var u=i.material;u.transparent=l,u.depthMask=!l;var h=e.getModel("debug.wireframe");h.get("show")?(i.geometry.createAttribute("barycentric","float",3),i.geometry.generateBarycentric(),i.material.set("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",y.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)")),i.material.set("wireframeLineWidth",J.firstNotNull(h.get("lineStyle.width"),1))):i.material.set("both","WIREFRAME_TRIANGLE"),this._points=n,this._initHandler(e,t)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var r=e.getData(),i=e.coordinateSystem,n=this._line3DMesh,a=-1;n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(s){var o=i.pointToData(s.point.array),l=r.indicesOfNearest("x",o[0])[0];l!==a&&(t.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),n.dataIndex=l),a=l},this),n.on("mouseout",function(s){a=-1,n.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var e=new U,t=this._camera;U.multiply(e,t.projectionMatrix,t.viewMatrix);var r=this._positionNDC,i=this._points,n=i.length/3;(!r||r.length/2!==n)&&(r=this._positionNDC=new Float32Array(n*2));for(var a=[],s=0;s<n;s++){var o=s*3,l=s*2;a[0]=i[o],a[1]=i[o+1],a[2]=i[o+2],a[3]=1,Xd.transformMat4(a,a,e.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(e,t,r,i,n,a){var s=this._positionNDC,o=this._data.hostModel,l=o.get("lineStyle.width"),u=-1,h=r.viewport.width,c=r.viewport.height,d=h*.5,f=c*.5;e=(e+1)*d,t=(t+1)*f;for(var v=1;v<s.length/2;v++){var m=(s[(v-1)*2]+1)*d,p=(s[(v-1)*2+1]+1)*f,g=(s[v*2]+1)*d,T=(s[v*2+1]+1)*f;if(pu(m,p,g,T,l,e,t)){var x=(m-e)*(m-e)+(p-t)*(p-t),_=(g-e)*(g-e)+(T-t)*(T-t);u=x<_?v-1:v}}if(u>=0){var S=u*3,b=new L(this._points[S],this._points[S+1],this._points[S+2]);a.push({dataIndex:u,point:b,pointWorld:b.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(b)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Zd(e){e.registerChartView(jd),e.registerSeriesModel(Wd),e.registerLayout(function(t,r){t.eachSeriesByType("line3D",function(i){var n=i.getData(),a=i.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var s=new Float32Array(n.count()*3),o=[],l=[],u=a.dimensions,h=u.map(function(c){return i.coordDimToDataDim(c)[0]});a&&n.each(h,function(c,d,f,v){o[0]=c,o[1]=d,o[2]=f,a.dataToPoint(o,l),s[v*3]=l[0],s[v*3+1]=l[1],s[v*3+2]=l[2]}),n.setLayout("points",s)}})})}We(Zd);const qd=xt.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(e,t){return En(this)},getFormattedLabel:function(e,t,r,i){var n=tr.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),s=a.dimensions[a.dimensions.length-1];n=a.get(s,e)}return n},formatTooltip:function(e){return Ii(this,e)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Qn(e,i,r){var i=i||document.createElement("canvas");i.width=e,i.height=e;var n=i.getContext("2d");return r&&r(n),i}function Yd(e,t,r,i){Ct(t)||(t=[t,t]);var n=dn.getMarginByStyle(r,i),a=t[0]+n.left+n.right,s=t[1]+n.top+n.bottom,o=gu(e,0,0,t[0],t[1]),l=Math.max(a,s);o.x=n.left,o.y=n.top,a>s?o.y+=(l-s)/2:o.x+=(l-a)/2;var u=o.getBoundingRect();return o.x-=u.x,o.y-=u.y,o.setStyle(r),o.update(),o.__size=l,o}function Kd(e,t,r){var i=t.width,n=t.height,a=e.canvas.width,s=e.canvas.height,o=i/a,l=n/s;function u(g){return g<128?1:-1}function h(g,T){var x=1/0;g=Math.floor(g*o),T=Math.floor(T*l);for(var _=T*i+g,S=t.data[_*4],b=u(S),A=Math.max(T-r,0);A<Math.min(T+r,n);A++)for(var E=Math.max(g-r,0);E<Math.min(g+r,i);E++){var _=A*i+E,M=t.data[_*4],I=u(M),C=E-g,B=A-T;if(b!==I){var G=C*C+B*B;G<x&&(x=G)}}return b*Math.sqrt(x)}for(var c=e.createImageData(a,s),d=0;d<s;d++)for(var f=0;f<a;f++){var v=h(f,d),m=v/r*.5+.5,p=(d*a+f)*4;c.data[p++]=(1-m)*255,c.data[p++]=(1-m)*255,c.data[p++]=(1-m)*255,c.data[p++]=255}return c}var dn={getMarginByStyle:function(e){var t=e.minMargin||0,r=0;e.stroke&&e.stroke!=="none"&&(r=e.lineWidth==null?1:e.lineWidth);var i=e.shadowBlur||0,n=e.shadowOffsetX||0,a=e.shadowOffsetY||0,s={};return s.left=Math.max(r/2,-n+i,t),s.right=Math.max(r/2,n+i,t),s.top=Math.max(r/2,-a+i,t),s.bottom=Math.max(r/2,a+i,t),s},createSymbolSprite:function(e,t,r,i){var n=Yd(e,t,r),a=dn.getMarginByStyle(r);return{image:Qn(n.__size,i,function(s){uo(s,n)}),margin:a}},createSDFFromCanvas:function(e,t,r,i){return Qn(t,i,function(n){var a=e.getContext("2d"),s=a.getImageData(0,0,e.width,e.height);n.putImageData(Kd(n,s,r),0,0)})},createSimpleSprite:function(e,t){return Qn(e,t,function(r){var i=e/2;r.beginPath(),r.arc(i,i,60,0,Math.PI*2,!1),r.closePath();var n=r.createRadialGradient(i,i,0,i,i,i);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=n,r.fill()})}},Zs=Le.vec3;const $d={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var r=this.indices,i=Zs.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var n=0;n<r.length;n++)r[n]=n}if(t===0){var a=this.attributes.position,e=e.array,s=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var o,n=0;n<this.vertexCount;n++){a.get(n,i);var l=Zs.sqrDist(i,e);isNaN(l)&&(l=1e7,s++),n===0?(o=l,l=0):l=l-o,this._zList[n]=l}this._noneCount=s}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var n=0;n<3;n++)this._progressiveQuickSort(t*3+n);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,r=this.indices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Vr.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._zList,r=this.indices;this._quickSort=this._quickSort||new Vr,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}},Qd=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`;var Jn=Le.vec4;y.Shader.import(Qd);var Jd=y.Mesh.extend(function(){var e=new y.Geometry({dynamic:!0,attributes:{color:new y.Geometry.Attribute("color","float",4,"COLOR"),position:new y.Geometry.Attribute("position","float",3,"POSITION"),size:new y.Geometry.Attribute("size","float",1),prevPosition:new y.Geometry.Attribute("prevPosition","float",3),prevSize:new y.Geometry.Attribute("prevSize","float",1)}});Object.assign(e,$d);var t=new y.Material({shader:y.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});t.enableTexture("sprite"),t.define("both","VERTEX_COLOR"),t.define("both","VERTEX_SIZE");var r=new y.Texture2D({image:document.createElement("canvas"),flipY:!1});return t.set("sprite",r),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:y.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,r,i,n,a){var s=this._positionNDC;if(s)for(var o=r.viewport,l=2/o.width,u=2/o.height,h=this.geometry.vertexCount-1;h>=0;h--){var c;this.geometry.indices?c=this.geometry.indices[h]:c=h;var d=s[c*2],f=s[c*2+1],v=this.geometry.attributes.size.get(c)/this.sizeScale,m=v/2;if(e>d-m*l&&e<d+m*l&&t>f-m*u&&t<f+m*u){var p=new y.Vector3,g=new y.Vector3;this.geometry.attributes.position.get(c,p.array),y.Vector3.transformMat4(g,p,this.worldTransform),a.push({vertexIndex:c,point:p,pointWorld:g,target:this,distance:g.distance(i.getWorldPosition())})}}},updateNDCPosition:function(e,t,r){var i=this._positionNDC,n=this.geometry;(!i||i.length/2!==n.vertexCount)&&(i=this._positionNDC=new Float32Array(n.vertexCount*2));for(var a=Jn.create(),s=0;s<n.vertexCount;s++)n.attributes.position.get(s,a),a[3]=1,Jn.transformMat4(a,a,e.array),Jn.scale(a,a,1/a[3]),i[s*2]=a[0],i[s*2+1]=a[1]}}),qs=20,Ys=-10;function ev(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function _r(e,t){this.rootNode=new y.Node,this.is2D=e,this._labelsBuilder=new Gt(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}_r.prototype={constructor:_r,highlightOnMouseover:!0,update:function(e,t,r,i,n){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var s=e.getData();if(i==null&&(i=0),n==null&&(n=s.count()),this._startDataIndex=i,this._endDataIndex=n-1,!this._mesh){var o=this._prevMesh&&this._prevMesh.material;this._mesh=new Jd({renderOrder:10,frustumCulling:!1}),o&&(this._mesh.material=o)}var o=this._mesh.material,l=this._mesh.geometry,u=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var h=this._getSymbolInfo(e,i,n),c=r.getDevicePixelRatio(),d=e.getModel("itemStyle").getItemStyle(),f=e.get("large"),v=1;h.maxSize>2?(v=this._updateSymbolSprite(e,d,h,c),o.enableTexture("sprite")):o.disableTexture("sprite"),u.position.init(n-i);var m=[];if(f){o.undefine("VERTEX_SIZE"),o.undefine("VERTEX_COLOR");var p=jf(s),g=Zf(s);y.parseColor(p,m),m[3]*=g,o.set({color:m,u_Size:h.maxSize*this._sizeScale})}else o.set({color:[1,1,1,1]}),o.define("VERTEX_SIZE"),o.define("VERTEX_COLOR"),u.size.init(n-i),u.color.init(n-i),this._originalOpacity=new Float32Array(n-i);for(var T=s.getLayout("points"),x=u.position.value,_=0;_<n-i;_++){var S=_*3,b=_*2;if(this.is2D?(x[S]=T[b],x[S+1]=T[b+1],x[S+2]=Ys):(x[S]=T[S],x[S+1]=T[S+1],x[S+2]=T[S+2]),!f){var p=Ge(s,_),g=ze(s,_);y.parseColor(p,m),m[3]*=g,u.color.set(_,m),m[3]<.99;var A=s.getItemVisual(_,"symbolSize");A=A instanceof Array?Math.max(A[0],A[1]):A,isNaN(A)&&(A=0),u.size.value[_]=A*v*this._sizeScale,this._originalOpacity[_]=m[3]}}this._mesh.sizeScale=v,l.updateBoundingBox(),l.dirty(),this._updateMaterial(e,d);var E=e.coordinateSystem;if(E&&E.viewGL){var M=E.viewGL.isLinearSpace()?"define":"undefine";o[M]("fragment","SRGB_DECODE")}f||this._updateLabelBuilder(e,i,n),this._updateHandler(e,t,r),this._updateAnimation(e),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,r,i){r.maxSize=Math.min(r.maxSize*2,200);var n=[];return r.aspect>1?(n[0]=r.maxSize,n[1]=r.maxSize/r.aspect):(n[1]=r.maxSize,n[0]=r.maxSize*r.aspect),n[0]=n[0]||1,n[1]=n[1]||1,(this._symbolType!==r.type||!ev(this._symbolSize,n)||this._lineWidth!==t.lineWidth)&&(dn.createSymbolSprite(r.type,n,{fill:"#fff",lineWidth:t.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(n[0]/2,10)},this._spriteImageCanvas),dn.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),qs,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=n,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/r.maxSize*i},_updateMaterial:function(e,t){var r=e.get("blendMode")==="lighter"?y.additiveBlend:null,i=this._mesh.material;i.blend=r,i.set("lineWidth",t.lineWidth/qs);var n=y.parseColor(t.stroke);i.set("strokeColor",n),i.transparent=!0,i.depthMask=!1,i.depthTest=!this.is2D,i.sortVertices=!this.is2D},_updateLabelBuilder:function(e,s,r){var i=e.getData(),n=this._mesh.geometry,a=n.attributes.position.value,s=this._startDataIndex,o=this._mesh.sizeScale;this._labelsBuilder.updateData(i,s,r),this._labelsBuilder.getLabelPosition=function(l,u,h){var c=(l-s)*3;return[a[c],a[c+1],a[c+2]]},this._labelsBuilder.getLabelDistance=function(l,u,h){var c=n.attributes.size.get(l-s)/o;return c/2+h},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,r){var i=e.getData(),n=this._mesh,a=this,s=-1,o=e.coordinateSystem&&e.coordinateSystem.type==="cartesian3D",l;o&&(l=e.coordinateSystem.model),n.seriesIndex=e.seriesIndex,n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(u){var h=u.vertexIndex+a._startDataIndex;h!==s&&(this.highlightOnMouseover&&(this.downplay(i,s),this.highlight(i,h),this._labelsBuilder.updateLabels([h])),o&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(e.coordDimToDataDim("x")[0],h),i.get(e.coordDimToDataDim("y")[0],h),i.get(e.coordDimToDataDim("z")[0],h)],grid3DIndex:l.componentIndex})),n.dataIndex=h,s=h},this),n.on("mouseout",function(u){var h=u.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,h),this._labelsBuilder.updateLabels()),s=-1,n.dataIndex=-1,o&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:l.componentIndex})},this)},updateLayout:function(e,t,r){var i=e.getData();if(this._mesh){var n=this._mesh.geometry.attributes.position.value,a=i.getLayout("points");if(this.is2D)for(var s=0;s<a.length/2;s++){var o=s*3,l=s*2;n[o]=a[l],n[o+1]=a[l+1],n[o+2]=Ys}else for(var s=0;s<a.length;s++)n[s]=a[s];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new U;U.mul(t,e.viewMatrix,this._mesh.worldTransform),U.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=e.getItemModel(t),i=r.getModel("emphasis.itemStyle"),n=i.get("color"),a=i.get("opacity");if(n==null){var s=Ge(e,t);n=ya(s,-.4)}a==null&&(a=ze(e,t));var o=y.parseColor(n);o[3]*=a,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,o),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var r=Ge(e,t),i=ze(e,t),n=y.parseColor(r);n[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,n),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,r=0;r<t.vertexCount;r++){var i=this._originalOpacity[r]*e;t.attributes.color.value[r*4+3]=i}t.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",t/this._sizeScale*e);var r=this._mesh.geometry.attributes;if(r.size.value)for(var i=0;i<r.size.value.length;i++)r.size.value[i]=r.size.value[i]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set("positionTexture",t),e.material[t?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(e,t,r){if(e.get("large")){var i=J.firstNotNull(e.get("symbolSize"),1),o,a;return i instanceof Array?(o=Math.max(i[0],i[1]),a=i[0]/i[1]):(o=i,a=1),{maxSize:i,type:e.get("symbol"),aspect:a}}for(var n=e.getData(),a,s=n.getItemVisual(0,"symbol")||"circle",o=0,l=t;l<r;l++){var i=n.getItemVisual(l,"symbolSize"),u=n.getItemVisual(l,"symbol"),h;if(i instanceof Array)h=i[0]/i[1],o=Math.max(Math.max(i[0],i[1]),o);else{if(isNaN(i))continue;h=1,o=Math.max(i,o)}s=u,a=h}return{maxSize:o,type:s,aspect:a}}};const tv=Tt.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,r){if(this.groupGL.removeAll(),!!e.getData().count()){var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera;var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new _r(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),n.update(e,t,r),n.updateView(i.viewGL.camera)}}},incrementalPrepareRender:function(e,t,r){var i=e.coordinateSystem;i&&i.viewGL&&(i.viewGL.add(this.groupGL),this._camera=i.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new _r(!1,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),n.update(t,r,i,e.start,e.end),n.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,r,i){this._toggleStatus("highlight",e,t,r,i)},downplay:function(e,t,r,i){this._toggleStatus("downplay",e,t,r,i)},_toggleStatus:function(e,t,r,i,n){var a=t.getData(),s=J.queryDataIndex(a,n),o=e==="highlight";s!=null?Dt(tr.normalizeToArray(s),function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];o?h.highlight(a,l):h.downplay(a,l)}},this):a.each(function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];o?h.highlight(a,l):h.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function rv(e){e.registerChartView(tv),e.registerSeriesModel(qd),e.registerLayout({seriesType:"scatter3D",reset:function(t){var r=t.coordinateSystem;if(r){var i=r.dimensions;if(i.length<3)return;var n=i.map(function(o){return t.coordDimToDataDim(o)[0]}),a=[],s=[];return{progress:function(o,l){for(var u=new Float32Array((o.end-o.start)*3),h=o.start;h<o.end;h++){var c=(h-o.start)*3;a[0]=l.get(n[0],h),a[1]=l.get(n[1],h),a[2]=l.get(n[2],h),r.dataToPoint(a,s),u[c]=s[0],u[c+1]=s[1],u[c+2]=s[2]}l.setLayout("points",u)}}}}})}We(rv);var Ne=Le.vec3,Ks=Le.vec2,Rt=Ne.normalize,Zi=Ne.cross,$s=Ne.sub,ea=Ne.add,Zt=Ne.create,Wt=Zt(),ut=Zt(),Xt=Zt(),si=Zt(),Qs=[],Js=[];function iv(e,t){Ks.copy(Qs,e[0]),Ks.copy(Js,e[1]);var r=[],i=r[0]=Zt(),n=r[1]=Zt(),a=r[2]=Zt(),s=r[3]=Zt();t.dataToPoint(Qs,i),t.dataToPoint(Js,s),Rt(Wt,i),$s(ut,s,i),Rt(ut,ut),Zi(Xt,ut,Wt),Rt(Xt,Xt),Zi(ut,Wt,Xt),ea(n,Wt,ut),Rt(n,n),Rt(Wt,s),$s(ut,i,s),Rt(ut,ut),Zi(Xt,ut,Wt),Rt(Xt,Xt),Zi(ut,Wt,Xt),ea(a,Wt,ut),Rt(a,a),ea(si,i,s),Rt(si,si);var o=Ne.dot(i,si),l=Ne.dot(si,n),u=(Math.max(Ne.len(i),Ne.len(s))-o)/l*2;return Ne.scaleAndAdd(n,i,n,u),Ne.scaleAndAdd(a,s,a,u),r}function nv(e,t,r){var i=[],n=i[0]=Ne.create(),a=i[1]=Ne.create(),s=i[2]=Ne.create(),o=i[3]=Ne.create();t.dataToPoint(e[0],n),t.dataToPoint(e[1],o);var l=Ne.dist(n,o);return Ne.lerp(a,n,o,.3),Ne.lerp(s,n,o,.3),Ne.scaleAndAdd(a,a,r,Math.min(l*.1,10)),Ne.scaleAndAdd(s,s,r,Math.min(l*.1,10)),i}function gl(e,t){for(var r=new Float32Array(e.length*3),i=0,n=[],a=0;a<e.length;a++)t.dataToPoint(e[a],n),r[i++]=n[0],r[i++]=n[1],r[i++]=n[2];return r}function _l(e){var t=[];return e.each(function(r){var i=e.getItemModel(r),n=i.option instanceof Array?i.option:i.getShallow("coords",!0);t.push(n)}),{coordsList:t}}function av(e,t){var r=e.getData(),i=e.get("polyline");r.setLayout("lineType",i?"polyline":"cubicBezier");var n=_l(r);r.each(function(a){var s=n.coordsList[a],o=i?gl:iv;r.setItemLayout(a,o(s,t))})}function eo(e,t,r){var i=e.getData(),n=e.get("polyline"),a=_l(i);i.setLayout("lineType",n?"polyline":"cubicBezier"),i.each(function(s){var o=a.coordsList[s],l=n?gl(o,t):nv(o,t,r);i.setItemLayout(s,l)})}function sv(e,t){e.eachSeriesByType("lines3D",function(r){var i=r.coordinateSystem;i.type==="globe"?av(r,i):i.type==="geo3D"?eo(r,i,[0,1,0]):(i.type==="mapbox3D"||i.type==="maptalks3D")&&eo(r,i,[0,0,1])})}const ov=xt.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(e,t){var r=new Pt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,s){if(i instanceof Array)return NaN;r.hasItemOption=!0;var o=i.value;if(o!=null)return o instanceof Array?o[s]:o}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}}),lv=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`;var to=Le.vec3;function uv(e){return e>0?1:-1}y.Shader.import(lv);const hv=y.Mesh.extend(function(){var e=new y.Material({shader:new y.Shader(y.Shader.source("ecgl.trail2.vertex"),y.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),t=new Qt({dynamic:!0});return t.createAttribute("dist","float",1),t.createAttribute("distAll","float",1),t.createAttribute("start","float",1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,r){var i=e.hostModel,n=this.geometry,a=i.getModel("effect"),s=a.get("trailWidth")*t.getDevicePixelRatio(),o=a.get("trailLength"),l=i.get("effect.constantSpeed"),u=i.get("effect.period")*1e3,h=l!=null;h?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=i.get("polyline");n.trailLength=o,this.material.set("trailLength",o),n.resetOffset(),["position","positionPrev","positionNext"].forEach(function(A){n.attributes[A].value=r.attributes[A].value});var d=["dist","distAll","start","offset","color"];d.forEach(function(A){n.attributes[A].init(n.vertexCount)}),n.indices=r.indices;var f=[],v=a.get("trailColor"),m=a.get("trailOpacity"),p=v!=null,g=m!=null;this.updateWorldTransform();var T=this.worldTransform.x.len(),x=this.worldTransform.y.len(),_=this.worldTransform.z.len(),S=0,b=0;e.each(function(A){var E=e.getItemLayout(A),M=g?m:ze(e,A),I=Ge(e,A);M==null&&(M=1),f=y.parseColor(p?v:I,f),f[3]*=M;for(var C=c?r.getPolylineVertexCount(E):r.getCubicCurveVertexCount(E[0],E[1],E[2],E[3]),B=0,G=[],R=[],H=S;H<S+C;H++)n.attributes.position.get(H,G),G[0]*=T,G[1]*=x,G[2]*=_,H>S&&(B+=to.dist(G,R)),n.attributes.dist.set(H,B),to.copy(R,G);b=Math.max(b,B);for(var W=Math.random()*(h?B:u),H=S;H<S+C;H++)n.attributes.distAll.set(H,B),n.attributes.start.set(H,W),n.attributes.offset.set(H,uv(r.attributes.offset.get(H))*s/2),n.attributes.color.set(H,f);S+=C}),this.material.set("spotSize",b*.1*o),this.material.set("spotIntensity",a.get("spotIntensity")),n.dirty()},setAnimationTime:function(e){this.material.set("time",e)}});y.Shader.import(bn);function cv(e){return e.radius!=null?e.radius:e.size!=null?Math.max(e.size[0],e.size[1],e.size[2]):100}const fv=Tt.extend({type:"lines3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._meshLinesMaterial=new y.Material({shader:y.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new y.Mesh({geometry:new Qt,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new hv},render:function(e,t,r){this.groupGL.add(this._linesMesh);var i=e.coordinateSystem,n=e.getData();if(i&&i.viewGL){var a=i.viewGL;a.add(this.groupGL),this._updateLines(e,t,r);var s=i.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[s]("fragment","SRGB_DECODE"),this._trailMesh.material[s]("fragment","SRGB_DECODE")}var o=this._trailMesh;if(o.stopAnimation(),e.get("effect.show")){this.groupGL.add(o),o.updateData(n,r,this._linesMesh.geometry),o.__time=o.__time||0;var l=3600*1e3;this._curveEffectsAnimator=o.animate("",{loop:!0}).when(l,{__time:l}).during(function(){o.setAnimationTime(o.__time)}).start()}else this.groupGL.remove(o),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,r){var i=e.getData(),n=e.coordinateSystem,a=this._linesMesh.geometry,s=e.get("polyline");a.expandLine=!0;var o=cv(n);a.segmentScale=o/20;var l="lineStyle.width".split("."),u=r.getDevicePixelRatio();i.each(function(f){var v=i.getItemModel(f),m=v.get(l);m==null&&(m=1),i.setItemVisual(f,"lineWidth",m)}),a.useNativeLine=!1;var h=0,c=0;i.each(function(f){var v=i.getItemLayout(f);s?(h+=a.getPolylineVertexCount(v),c+=a.getPolylineTriangleCount(v)):(h+=a.getCubicCurveVertexCount(v[0],v[1],v[2],v[3]),c+=a.getCubicCurveTriangleCount(v[0],v[1],v[2],v[3]))}),a.setVertexCount(h),a.setTriangleCount(c),a.resetOffset();var d=[];i.each(function(f){var v=i.getItemLayout(f),m=Ge(i,f),p=ze(i,f),g=i.getItemVisual(f,"lineWidth")*u;p==null&&(p=1),d=y.parseColor(m,d),d[3]*=p,s?a.addPolyline(v,d,g):a.addCubicCurve(v[0],v[1],v[2],v[3],d,g)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function dv(e){e.registerChartView(fv),e.registerSeriesModel(ov),e.registerLayout(sv),e.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),e.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),e.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})}We(dv);function ro(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var yl=xt.extend({type:"series.polygons3D",getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getItemModel(e),i=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(i=[i]);for(var n=[],a=0;a<i.length;a++){for(var s=[],o=1;o<i[a].length;o++)s.push(ro(t,i[a][o]));n.push({exterior:ro(t,i[a][0]),interiors:s})}return n},getInitialData:function(e){var t=new Pt(["value"],this);return t.hasItemOption=!1,t.initData(e.data,[],function(r,i,n,a){if(r instanceof Array)return NaN;t.hasItemOption=!0;var s=r.value;if(s!=null)return s instanceof Array?s[a]:s}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});he(yl.prototype,Yr);const vv=Tt.extend({type:"polygons3D",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL);var n=this._geo3DBuilderList[0];n||(n=new kr(r),n.extrudeY=i.type!=="mapbox3D"&&i.type!=="maptalks3D",this._geo3DBuilderList[0]=n),this._updateShaderDefines(i,n),n.update(e,t,r),this._geo3DBuilderList.length=1,this.groupGL.add(n.rootNode)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll();var i=e.coordinateSystem;i&&i.viewGL&&i.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,r,i){var n=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;n||(n=new kr(i),n.extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=n),n.update(t,r,i,e.start,e.end),this.groupGL.add(n.rootNode),this._updateShaderDefines(a,n),this._currentStep++},_updateShaderDefines:function(e,t){var r=e.viewGL.isLinearSpace()?"define":"undefine";t.rootNode.traverse(function(i){i.material&&(i.material[r]("fragment","SRGB_DECODE"),(e.type==="mapbox3D"||e.type==="maptalks3D")&&(i.material.define("fragment","NORMAL_UP_AXIS",2),i.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function mv(e){e.registerChartView(vv),e.registerSeriesModel(yl)}We(mv);var xl=xt.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return Ii(this,e)},getInitialData:function(e,t){var r=e.data;function i(j){return!(isNaN(j.min)||isNaN(j.max)||isNaN(j.step))}function n(j){var k=ho;return Math.max(k(j.min),k(j.max),k(j.step))+1}if(!r)if(e.parametric){var _=e.parametricEquation||{},S=_.u||{},b=_.v||{};["u","v"].forEach(function(k){i(_[k])}),["x","y","z"].forEach(function(k){_[k]});var A=Math.floor((S.max+S.step-S.min)/S.step),E=Math.floor((b.max+b.step-b.min)/b.step);r=new Float32Array(A*E*5);for(var M=n(S),I=n(b),d=0,f=0;f<E;f++)for(var v=0;v<A;v++){var C=v*S.step+S.min,B=f*b.step+b.min,G=Oi(Math.min(C,S.max),M),R=Oi(Math.min(B,b.max),I),m=_.x(G,R),p=_.y(G,R),x=_.z(G,R);r[d++]=m,r[d++]=p,r[d++]=x,r[d++]=G,r[d++]=R}}else{var a=e.equation||{},s=a.x||{},o=a.y||{};if(["x","y"].forEach(function(j){i(a[j])}),typeof a.z!="function")return;var l=Math.floor((s.max+s.step-s.min)/s.step),u=Math.floor((o.max+o.step-o.min)/o.step);r=new Float32Array(l*u*3);for(var h=n(s),c=n(o),d=0,f=0;f<u;f++)for(var v=0;v<l;v++){var m=v*s.step+s.min,p=f*o.step+o.min,g=Oi(Math.min(m,s.max),h),T=Oi(Math.min(p,o.max),c),x=a.z(g,T);r[d++]=g,r[d++]=T,r[d++]=x}}var H=["x","y","z"];e.parametric&&H.push("u","v");var W=En(this,H,r);return W},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});he(xl.prototype,Yr);var lr=Le.vec3;function pv(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}const gv=Tt.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),s=e.getData(),o="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==o)&&(this._surfaceMesh.material=y.createMaterial(o,["VERTEX_COLOR","DOUBLE_SIDED"])),y.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),h=e.get("dataShape");h||(h=this._getDataShape(s,u));var c=e.getModel("wireframe"),d=c.get("lineStyle.width"),f=c.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,h,f);var v=this._surfaceMesh.material;f?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",y.parseColor(c.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){y.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new y.Mesh({geometry:new y.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new y.Material({shader:new y.Shader(y.Shader.source("ecgl.sm.depth.vertex"),y.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,Pa),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(o,l){for(var u=1/0,h=-1,c=[],d=0;d<o.length;d++){i.geometry.attributes.position.get(o[d],c);var f=lr.dist(l.array,c);f<u&&(u=f,h=o[d])}return h}i.seriesIndex=e.seriesIndex;var s=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var l=a(o.triangle,o.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var h=n.pointToData(u),c=1/0,d=-1,f=[],v=0;v<r.count();v++){f[0]=r.get("x",v),f[1]=r.get("y",v),f[2]=r.get("z",v);var m=lr.squaredDistance(f,h);m<c&&(d=v,c=m)}d!==s&&t.dispatchAction({type:"grid3DShowAxisPointer",value:h}),s=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(o){s=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),s=a.getLayout("points"),o=0;a.each(function(De){a.hasValue(De)||o++});var l=o||i,u=n.attributes.position,h=n.attributes.normal,c=n.attributes.texcoord0,d=n.attributes.barycentric,f=n.attributes.color,v=r[0],m=r[1],p=t.get("shading"),g=p!=="color";if(l){var T=(v-1)*(m-1)*4;u.init(T),i&&d.init(T)}else u.value=new Float32Array(s);f.init(n.vertexCount),c.init(n.vertexCount);var x=[0,3,1,1,3,2],_=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],S=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(m-1)*6),b=function(De,wt,Ye){Ye[1]=De*m+wt,Ye[0]=De*m+wt+1,Ye[3]=(De+1)*m+wt+1,Ye[2]=(De+1)*m+wt},A=!1;if(l){var E=[],M=[],I=0;g?h.init(n.vertexCount):h.value=null;for(var C=[[],[],[]],B=[],G=[],R=lr.create(),H=function(De,wt,Ye){var An=wt*3;return Ye[0]=De[An],Ye[1]=De[An+1],Ye[2]=De[An+2],Ye},W=new Float32Array(s.length),j=new Float32Array(s.length/3*4),k=0;k<a.count();k++)if(a.hasValue(k)){var He=y.parseColor(Ge(a,k)),oe=ze(a,k);oe!=null&&(He[3]*=oe),He[3]<.99&&(A=!0);for(var X=0;X<4;X++)j[k*4+X]=He[X]}for(var fe=[1e7,1e7,1e7],k=0;k<v-1;k++)for(var ae=0;ae<m-1;ae++){var me=k*(m-1)+ae,pe=me*4;b(k,ae,E);for(var te=!1,X=0;X<4;X++)H(s,E[X],M),pv(M)&&(te=!0);for(var X=0;X<4;X++)te?u.set(pe+X,fe):(H(s,E[X],M),u.set(pe+X,M)),i&&d.set(pe+X,_[X]);for(var X=0;X<6;X++)S[I++]=x[X]+pe;if(g&&!te)for(var X=0;X<2;X++){for(var Ce=X*3,xe=0;xe<3;xe++){var Se=E[x[Ce]+xe];H(s,Se,C[xe])}lr.sub(B,C[0],C[1]),lr.sub(G,C[1],C[2]),lr.cross(R,B,G);for(var xe=0;xe<3;xe++){var Ze=E[x[Ce]+xe]*3;W[Ze]=W[Ze]+R[0],W[Ze+1]=W[Ze+1]+R[1],W[Ze+2]=W[Ze+2]+R[2]}}}if(g)for(var k=0;k<W.length/3;k++)H(W,k,R),lr.normalize(R,R),W[k*3]=R[0],W[k*3+1]=R[1],W[k*3+2]=R[2];for(var He=[],Oe=[],k=0;k<v-1;k++)for(var ae=0;ae<m-1;ae++){var me=k*(m-1)+ae,pe=me*4;b(k,ae,E);for(var X=0;X<4;X++){for(var xe=0;xe<4;xe++)He[xe]=j[E[X]*4+xe];f.set(pe+X,He),g&&(H(W,E[X],R),h.set(pe+X,R));var Se=E[X];Oe[0]=Se%m/(m-1),Oe[1]=Math.floor(Se/m)/(v-1),c.set(pe+X,Oe)}me++}}else{for(var Oe=[],k=0;k<a.count();k++){Oe[0]=k%m/(m-1),Oe[1]=Math.floor(k/m)/(v-1);var He=y.parseColor(Ge(a,k)),oe=ze(a,k);oe!=null&&(He[3]*=oe),He[3]<.99&&(A=!0),f.set(k,He),c.set(k,Oe)}for(var E=[],Qr=0,k=0;k<v-1;k++)for(var ae=0;ae<m-1;ae++){b(k,ae,E);for(var X=0;X<6;X++)S[Qr++]=E[x[X]]}g?n.generateVertexNormals():h.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=A,e.material.depthMask=!A},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,s=t?"u":"x",o=e.count(),l=0;l<o;l++){var u=e.get(s,l);u<r&&(n=0,i++),r=u,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var h=Math.floor(Math.sqrt(o));h>0;){if(Math.floor(o/h)===o/h)return[h,o/h];h--}return h=Math.floor(Math.sqrt(o)),[h,h]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function _v(e){e.registerChartView(gv),e.registerSeriesModel(xl),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),s=new Float32Array(3*a.count()),o=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(h){return i.coordDimToDataDim(h)[0]});a.each(u,function(h,c,d,f){var v;a.hasValue(f)?v=n.dataToPoint([h,c,d]):v=o,s[f*3]=v[0],s[f*3+1]=v[1],s[f*3+2]=v[2]})}a.setLayout("points",s)})})}We(_v);function io(e,t){for(var r=[],i=0;i<t.length;i++)r.push(e.dataToPoint(t[i]));return r}var $r=xt.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(e){var t=this.get("coordinateSystem");t==null||t==="geo3D"||(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=Ci(e.data,{coordDimensions:["value"]}),r=new Pt(t,this);r.initData(e.data);var i={};return r.each(function(n){var a=r.getName(n),s=r.getItemModel(n);i[a]=s}),this._regionModelMap=i,r},formatTooltip:function(e){return Ii(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new Or(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,r=this.getData().getName(e);if(t.transform){var i=t.getRegion(r);return i?i.geometries:[]}else{this._geo||(this._geo=Na.createGeo3D(this));for(var i=this._geo.getRegion(r),n=[],a=0;a<i.geometries.length;a++){var s=i.geometries[a],o=[],l=io(t,s.exterior);if(o&&o.length)for(var u=0;u<s.interiors.length;u++)o.push(io(t,o[u]));n.push({interiors:o,exterior:l})}return n}},getFormattedLabel:function(e,t){var r=tr.getFormattedLabel(this,e,t);return r==null&&(r=this.getData().getName(e)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});he($r.prototype,Qo);he($r.prototype,Tn);he($r.prototype,jr);he($r.prototype,Zr);he($r.prototype,Yr);const yv=Tt.extend({type:"map3D",__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new kr(t),this.groupGL=new y.Node},render:function(e,t,r){var i=e.coordinateSystem;if(!(!i||!i.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),i.viewGL.add(this.groupGL),i.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new qt,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling"));var n=this._control;n||(n=this._control=new Pi({zr:r.getZr()}),this._control.init());var a=e.getModel("viewControl");n.setViewGL(i.viewGL),n.setFromViewControlModel(a,0),n.off("update"),n.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),e.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,r,0,e.getData().count());var s=i.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(o){o.material&&o.material[s]("fragment","SRGB_DECODE")})}},afterRender:function(e,t,r,i){var n=i.renderer,a=e.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function xv(e){sl(e),e.registerChartView(yv),e.registerSeriesModel($r),e.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"series",subType:"map3D",query:t},function(i){i.setView(t)})})}We(xv);const Tv=xt.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Mu(this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function Ut(e){this.viewGL=e}Ut.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=_u(),this.updateTransform(e,t)};Ut.prototype.updateTransform=function(e,t){var r=e.coordinateSystem;r.getRoamTransform&&(yu(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())};Ut.prototype.dataToPoint=function(e,t,r){r=e.dataToPoint(t,null,r);var i=this._viewTransform;i&&mo(r,r,i)};Ut.prototype.removeTransformInPoint=function(e){return this._viewTransform&&mo(e,e,this._viewTransform),e};Ut.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1};Ut.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)};Ut.prototype._updateCamera=function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.top=0,i.bottom=t,i.right=e,i.near=0,i.far=100};const wv=Tt.extend({type:"scatterGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new ce("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new Ut(this.viewGL)},render:function(e,t,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,r),!!e.getData().count()){var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new _r(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.update(e,t,r),this.viewGL.setPostEffect(e.getModel("postEffect"),r)}},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){if(!(e.end<=e.start)){var n=this._pointsBuilderList[this._currentStep];n||(n=new _r(!0,i),this._pointsBuilderList[this._currentStep]=n),this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.setSizeScale(this._sizeScale),n.update(t,r,i,e.start,e.end),i.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,r){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,r);var i=this._glViewHelper.getZoom(),n=Math.max((e.get("zoomScale")||0)*(i-1)+1,0);this._sizeScale=n,this._pointsBuilderList.forEach(function(a){a.setSizeScale(n)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],r=0;r<e.length;r+=2)t[0]=e[r],t[1]=e[r+1],this._glViewHelper.removeTransformInPoint(t),e[r]=t[0],e[r+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function Sv(e){e.registerChartView(wv),e.registerSeriesModel(Tv),e.registerLayout({seriesType:"scatterGL",reset:function(t){var r=t.coordinateSystem,i=t.getData(),n;if(r){var a=r.dimensions.map(function(o){return i.mapDimension(o)}).slice(0,2),s=[];a.length===1?n=function(o){for(var l=new Float32Array((o.end-o.start)*2),u=o.start;u<o.end;u++){var h=(u-o.start)*2,c=i.get(a[0],u),d=r.dataToPoint(c);l[h]=d[0],l[h+1]=d[1]}i.setLayout("points",l)}:a.length===2&&(n=function(o){for(var l=new Float32Array((o.end-o.start)*2),u=o.start;u<o.end;u++){var h=(u-o.start)*2,c=i.get(a[0],u),d=i.get(a[1],u);s[0]=c,s[1]=d,s=r.dataToPoint(s),l[h]=s[0],l[h+1]=s[1]}i.setLayout("points",l)})}return{progress:n}}})}We(Sv);function bv(e,t,r,i,n){for(var a=new bl(i),s=0;s<e.length;s++)a.addNode(J.firstNotNull(e[s].id,e[s].name,s),s);for(var o=[],l=[],u=0,s=0;s<t.length;s++){var h=t[s],c=h.source,d=h.target;a.addEdge(c,d,u)&&(l.push(h),o.push(J.firstNotNull(h.id,c+" > "+d)),u++)}var f,v=Ci(e,{coordDimensions:["value"]});f=new Pt(v,r),f.initData(e);var m=new Pt(["value"],r);return m.initData(l,o),n&&n(f,m),El({mainData:f,struct:a,structAttr:"graph",datas:{node:f,edge:m},datasAttr:{node:"data",edge:"edgeData"}}),a.update(),a}var ui=xt.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(e){ui.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){ui.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,r,i){var n=tr.getFormattedLabel(this,e,t,r,i);if(n==null){var a=this.getData(),s=a.dimensions[a.dimensions.length-1];n=a.get(s,e)}return n},getInitialData:function(e,t){var r=e.edges||e.links||[],i=e.data||e.nodes||[],n=this;if(i&&r)return bv(i,r,this,!0,a).data;function a(s,o){s.wrapMethod("getItemModel",function(c){const d=n._categoriesModels,f=c.getShallow("category"),v=d[f];return v&&(v.parentModel=c.parentModel,c.parentModel=v),c});const l=t.getModel([]).getModel;function u(c,d){const f=l.call(this,c,d);return f.resolveParentPath=h,f}o.wrapMethod("getItemModel",function(c){return c.resolveParentPath=h,c.getModel=u,c});function h(c){if(c&&(c[0]==="label"||c[1]==="label")){const d=c.slice();return c[0]==="label"?d[0]="edgeLabel":c[1]==="label"&&(d[1]="edgeLabel"),d}return c}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,r){if(r==="edge"){var i=this.getData(),n=this.getDataParams(e,r),a=i.graph.getEdgeByIndex(e),s=i.getName(a.node1.dataIndex),o=i.getName(a.node2.dataIndex),l=[];return s!=null&&l.push(s),o!=null&&l.push(o),l=Dr(l.join(" > ")),n.value&&(l+=" : "+Dr(n.value)),l}else return ui.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),t=new Pt(["value"],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(r){return t.getItemModel(r,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var r=e[t*2],i=e[t*2+1],n=this.getData().getRawDataItem(t);n.x=r,n.y=i}},isAnimationEnabled:function(){return ui.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),Pe=Le.vec2,no=[[0,0],[1,1]],za=ee.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new ee.Attribute("position","float",2,"POSITION"),normal:new ee.Attribute("normal","float",2),offset:new ee.Attribute("offset","float",1),color:new ee.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Pe.dist(e,t)+Pe.dist(r,t)+Pe.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(no)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(no)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/2}return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var s=e[0],o=e[1],l=t[0],u=t[1],h=r[0],c=r[1],d=i[0],f=i[1],v=this._getCubicCurveApproxStep(e,t,r,i),m=v*v,p=m*v,g=3*v,T=3*m,x=6*m,_=6*p,S=s-l*2+h,b=o-u*2+c,A=(l-h)*3-s+d,E=(u-c)*3-o+f,M=s,I=o,C=(l-s)*g+S*T+A*p,B=(u-o)*g+b*T+E*p,G=S*x+A*_,R=b*x+E*_,H=A*_,W=E*_,j=0,k=0,oe=Math.ceil(1/v),X=new Float32Array((oe+1)*3),X=[],fe=0,k=0;k<oe+1;k++)X[fe++]=M,X[fe++]=I,M+=C,I+=B,C+=G,B+=R,G+=H,R+=W,j+=v,j>1&&(M=C>0?Math.min(M,d):Math.max(M,d),I=B>0?Math.min(I,f):Math.max(I,f));this.addPolyline(X,n,a)},addLine:function(e,t,r,i){this.addPolyline([e,t],r,i)},addPolyline:function(){var e=Pe.create(),t=Pe.create(),r=Pe.create(),i=Pe.create(),n=[],a=[],s=[];return function(o,l,u,h,c){if(o.length){var d=typeof o[0]!="number";if(c==null&&(c=d?o.length:o.length/2),!(c<2)){h==null&&(h=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var f=d?typeof l[0]!="number":l.length/4===c,v=this.attributes.position,m=this.attributes.color,p=this.attributes.offset,g=this.attributes.normal,T=this.indices,x=this._vertexOffset,_,S=0;S<c;S++){if(d)n=o[S+h],f?_=l[S+h]:_=l;else{var b=S*2+h;if(n=n||[],n[0]=o[b],n[1]=o[b+1],f){var A=S*4+h;_=_||[],_[0]=l[A],_[1]=l[A+1],_[2]=l[A+2],_[3]=l[A+3]}else _=l}if(this.useNativeLine)S>1&&(v.copy(x,x-1),m.copy(x,x-1),x++);else{var E;if(S<c-1){if(d)Pe.copy(a,o[S+1]);else{var b=(S+1)*2+h;a=a||[],a[0]=o[b],a[1]=o[b+1]}if(S>0){Pe.sub(e,n,s),Pe.sub(t,a,n),Pe.normalize(e,e),Pe.normalize(t,t),Pe.add(i,e,t),Pe.normalize(i,i);var M=u/2*Math.min(1/Pe.dot(e,i),2);r[0]=-i[1],r[1]=i[0],E=M}else Pe.sub(e,a,n),Pe.normalize(e,e),r[0]=-e[1],r[1]=e[0],E=u/2}else Pe.sub(e,n,s),Pe.normalize(e,e),r[0]=-e[1],r[1]=e[0],E=u/2;g.set(x,r),g.set(x+1,r),p.set(x,E),p.set(x+1,-E),Pe.copy(s,n),v.set(x,n),v.set(x+1,n),m.set(x,_),m.set(x+1,_),x+=2}if(this.useNativeLine)m.set(x,_),v.set(x,n),x++;else if(S>0){var I=this._faceOffset*3,T=this.indices;T[I]=x-4,T[I+1]=x-3,T[I+2]=x-2,T[I+3]=x-3,T[I+4]=x-1,T[I+5]=x-2,this._faceOffset+=2}}this._vertexOffset=x}}}}(),setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")}});Kt(za.prototype,Ni);const Ev=`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`;y.Shader.import(Ev);var ta={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Ie(e){var t={type:y.Texture.FLOAT,minFilter:y.Texture.NEAREST,magFilter:y.Texture.NEAREST};this._positionSourceTex=new y.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new y.Texture2D(t),this._positionPrevTex=new y.Texture2D(t),this._forceTex=new y.Texture2D(t),this._forcePrevTex=new y.Texture2D(t),this._weightedSumTex=new y.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new y.Texture2D(t),this._globalSpeedPrevTex=new y.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Me({fragment:y.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Me({fragment:y.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Me({fragment:y.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Me({fragment:y.Shader.source("clay.compositor.output")});var r=function(i){i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ONE)};this._edgeForceMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node1:new y.Geometry.Attribute("node1","float",2),node2:new y.Geometry.Attribute("node2","float",2),weight:new y.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._weightedSumMesh=new y.Mesh({geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new y.Material({transparent:!0,shader:y.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:y.Mesh.POINTS}),this._framebuffer=new Ae({depthBuffer:!1}),this._dummyCamera=new y.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Ie.prototype.updateOption=function(e){for(var t in ta)this[t]=ta[t];var r=this._nodes.length;if(r>5e4?this.jitterTolerence=10:r>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,r>100?this.scaling=2:this.scaling=10,e)for(var t in ta)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var i=this._positionSourceTex.pixels,n=0;n<this._nodes.length;n++)i[n*4+2]=(this._nodes[n].degree||0)+1};Ie.prototype._updateGravityCenter=function(e){var t=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var i=[1/0,1/0],n=[-1/0,-1/0],a=0;a<t.length;a++)i[0]=Math.min(t[a].x,i[0]),i[1]=Math.min(t[a].y,i[1]),n[0]=Math.max(t[a].x,n[0]),n[1]=Math.max(t[a].y,n[1]);this._gravityCenter=[(i[0]+n[0])*.5,(i[1]+n[1])*.5]}for(var a=0;a<r.length;a++){var s=r[a].node1,o=r[a].node2;t[s].degree=(t[s].degree||0)+1,t[o].degree=(t[o].degree||0)+1}};Ie.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(e.length)),i=r,n=new Float32Array(r*i*4);this._resize(r,i);for(var a=0,s=0;s<e.length;s++){var o=e[s];n[a++]=o.x||0,n[a++]=o.y||0,n[a++]=o.mass||1,n[a++]=o.size||1}this._positionSourceTex.pixels=n;var l=this._edgeForceMesh.geometry,u=t.length;l.attributes.node1.init(u*2),l.attributes.node2.init(u*2),l.attributes.weight.init(u*2);for(var h=[],s=0;s<t.length;s++){var c=l.attributes,d=t[s].weight;d==null&&(d=1),c.node1.set(s,this.getNodeUV(t[s].node1,h)),c.node2.set(s,this.getNodeUV(t[s].node2,h)),c.weight.set(s,d),c.node1.set(s+u,this.getNodeUV(t[s].node2,h)),c.node2.set(s+u,this.getNodeUV(t[s].node1,h)),c.weight.set(s+u,d)}var f=this._weightedSumMesh.geometry;f.attributes.node.init(e.length);for(var s=0;s<e.length;s++)f.attributes.node.set(s,this.getNodeUV(s,h));l.dirty(),f.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",e.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,i]),this._inited=!1,this._frame=0};Ie.prototype.getNodes=function(){return this._nodes};Ie.prototype.getEdges=function(){return this._edges};Ie.prototype.step=function(e){this._inited||(this._initFromSource(e),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform("strongGravityMode",this.strongGravityMode),t.setUniform("gravity",this.gravity),t.setUniform("gravityCenter",this._gravityCenter),t.setUniform("scaling",this.scaling),t.setUniform("preventOverlap",this.preventOverlap),t.setUniform("positionTex",this._positionPrevTex),t.render(e);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var i=this._weightedSumMesh;i.material.set("positionTex",this._positionPrevTex),i.material.set("forceTex",this._forceTex),i.material.set("forcePrevTex",this._forcePrevTex),e.renderPass([i],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var n=this._globalSpeedPass;n.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),n.setUniform("weightedSumTex",this._weightedSumTex),n.setUniform("jitterTolerence",this.jitterTolerence),e.gl.disable(e.gl.BLEND),n.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()};Ie.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1);for(var i=0;i<t;i++)this.step(e);r&&r()};Ie.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex};Ie.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1)||0,t};Ie.prototype.getNodePosition=function(e,t){var r=this._positionArr,i=this._positionTex.width,n=this._positionTex.height,a=i*n;(!r||r.length!==a*4)&&(r=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,r),this._framebuffer.unbind(e),t||(t=new Float32Array(this._nodes.length*2));for(var s=0;s<this._nodes.length;s++)t[s*2]=r[s*4],t[s*2+1]=r[s*4+1];return t};Ie.prototype.getTextureData=function(e,t){var r=this["_"+t+"Tex"],i=r.width,n=r.height;this._framebuffer.bind(e),this._framebuffer.attach(r);var a=new Float32Array(i*n*4);return e.gl.readPixels(0,0,i,n,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a};Ie.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}};Ie.prototype.isFinished=function(e){return this._frame>e};Ie.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e};Ie.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)};Ie.prototype._resize=function(e,t){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=e,this[r].height=t,this[r].dirty()},this)};Ie.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function Av(){var e={create:function(){return new Float32Array(2)},dist:function(l,u){var h=u[0]-l[0],c=u[1]-l[1];return Math.sqrt(h*h+c*c)},len:function(l){var u=l[0],h=l[1];return Math.sqrt(u*u+h*h)},scaleAndAdd:function(l,u,h,c){return l[0]=u[0]+h[0]*c,l[1]=u[1]+h[1]*c,l},scale:function(l,u,h){return l[0]=u[0]*h,l[1]=u[1]*h,l},add:function(l,u,h){return l[0]=u[0]+h[0],l[1]=u[1]+h[1],l},sub:function(l,u,h){return l[0]=u[0]-h[0],l[1]=u[1]-h[1],l},normalize:function(l,u){var h=u[0],c=u[1],d=h*h+c*c;return d>0&&(d=1/Math.sqrt(d),l[0]=u[0]*d,l[1]=u[1]*d),l},negate:function(l,u){return l[0]=-u[0],l[1]=-u[1],l},copy:function(l,u){return l[0]=u[0],l[1]=u[1],l},set:function(l,u,h){return l[0]=u,l[1]=h,l}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var r=t.prototype;r.beforeUpdate=function(){for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},r.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var l=0;l<this.nSubRegions;l++)this.subRegions[l].afterUpdate()},r.addNode=function(l){if(this.nSubRegions===0)if(this.node==null){this.node=l;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(l),this._updateCenterOfMass(l)},r.findSubRegion=function(l,u){for(var h=0;h<this.nSubRegions;h++){var c=this.subRegions[h];if(c.contain(l,u))return c}},r.contain=function(l,u){return this.bbox[0]<=l&&this.bbox[2]>=l&&this.bbox[1]<=u&&this.bbox[3]>=u},r.setBBox=function(l,u,h,c){this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=c,this.size=(h-l+c-u)/2},r._newSubRegion=function(){var l=this.subRegions[this.nSubRegions];return l||(l=new t,this.subRegions[this.nSubRegions]=l),this.nSubRegions++,l},r._addNodeToSubRegion=function(l){var u=this.findSubRegion(l.position[0],l.position[1]),h=this.bbox;if(!u){var c=(h[0]+h[2])/2,d=(h[1]+h[3])/2,f=(h[2]-h[0])/2,v=(h[3]-h[1])/2,m=l.position[0]>=c?1:0,p=l.position[1]>=d?1:0,u=this._newSubRegion();u.setBBox(m*f+h[0],p*v+h[1],(m+1)*f+h[0],(p+1)*v+h[1])}u.addNode(l)},r._updateCenterOfMass=function(l){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var u=this.centerOfMass[0]*this.mass,h=this.centerOfMass[1]*this.mass;u+=l.position[0]*l.mass,h+=l.position[1]*l.mass,this.mass+=l.mass,this.centerOfMass[0]=u/this.mass,this.centerOfMass[1]=h/this.mass};function i(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function n(l,u){this.source=l,this.target=u,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var s=a.prototype;s.initNodes=function(l,u,h){var c=u.length;this.nodes.length=0;for(var d=typeof h<"u",f=0;f<c;f++){var v=new i;v.position[0]=l[f*2],v.position[1]=l[f*2+1],v.mass=u[f],d&&(v.size=h[f]),this.nodes.push(v)}this._massArr=u,this._swingingArr=new Float32Array(c),d&&(this._sizeArr=h)},s.initEdges=function(l,u){var h=l.length/2;this.edges.length=0;for(var c=0;c<h;c++){var d=l[c*2],f=l[c*2+1],v=this.nodes[d],m=this.nodes[f];if(!v||!m){console.error("Node not exists, try initNodes before initEdges");return}v.outDegree++,m.inDegree++;var p=new n(v,m);u&&(p.weight=u[c]),this.edges.push(p)}},s.updateSettings=function(){if(this.repulsionByDegree)for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=u.inDegree+u.outDegree+1}else for(var l=0;l<this.nodes.length;l++){var u=this.nodes[l];u.mass=this._massArr[l]}},s.update=function(){var l=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var u=0;u<l;u++)this.rootRegion.addNode(this.nodes[u]);this.rootRegion.afterUpdate()}for(var u=0;u<l;u++){var h=this.nodes[u];e.copy(h.forcePrev,h.force),e.set(h.force,0,0)}for(var u=0;u<l;u++){var c=this.nodes[u];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,c);else for(var d=u+1;d<l;d++){var f=this.nodes[d];this.applyNodeToNodeRepulsion(c,f,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(c):this.applyNodeGravity(c))}for(var u=0;u<this.edges.length;u++)this.applyEdgeAttraction(this.edges[u]);for(var v=0,m=0,p=e.create(),u=0;u<l;u++){var h=this.nodes[u],g=e.dist(h.force,h.forcePrev);v+=g*h.mass,e.add(p,h.force,h.forcePrev);var T=e.len(p)*.5;m+=T*h.mass,this._swingingArr[u]=g}var x=this.jitterTolerence*this.jitterTolerence*m/v;this._globalSpeed>0&&(x=Math.min(x/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=x;for(var u=0;u<l;u++){var h=this.nodes[u],g=this._swingingArr[u],_=.1*x/(1+x*Math.sqrt(g)),S=e.len(h.force);S>0&&(_=Math.min(S*_,10)/S,e.scaleAndAdd(h.position,h.position,h.force,_))}},s.applyRegionToNodeRepulsion=function(){var l=e.create();return function(h,c){if(h.node)this.applyNodeToNodeRepulsion(h.node,c,!0);else{e.sub(l,c.position,h.centerOfMass);var d=l[0]*l[0]+l[1]*l[1];if(d>this.barnesHutTheta*h.size*h.size){var f=this.scaling*c.mass*h.mass/d;e.scaleAndAdd(c.force,c.force,l,f)}else for(var v=0;v<h.nSubRegions;v++)this.applyRegionToNodeRepulsion(h.subRegions[v],c)}}}(),s.applyNodeToNodeRepulsion=function(){var l=e.create();return function(h,c,d){if(h!=c){e.sub(l,h.position,c.position);var f=l[0]*l[0]+l[1]*l[1];if(f!==0){var v;if(this.preventOverlap){var m=Math.sqrt(f);if(m=m-h.size-c.size,m>0)v=this.scaling*h.mass*c.mass/(m*m);else if(m<0)v=this.scaling*100*h.mass*c.mass;else return}else v=this.scaling*h.mass*c.mass/f;e.scaleAndAdd(h.force,h.force,l,v),e.scaleAndAdd(c.force,c.force,l,-v)}}}}(),s.applyEdgeAttraction=function(){var l=e.create();return function(h){var c=h.source,d=h.target;e.sub(l,c.position,d.position);var f=e.len(l),v;this.edgeWeightInfluence===0?v=1:this.edgeWeightInfluence===1?v=h.weight:v=Math.pow(h.weight,this.edgeWeightInfluence);var m;this.preventOverlap&&(f=f-c.size-d.size,f<=0)||(this.linLogMode?m=-v*Math.log(f+1)/(f+1):m=-v,e.scaleAndAdd(c.force,c.force,l,m),e.scaleAndAdd(d.force,d.force,l,-m))}}(),s.applyNodeGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position);var h=e.len(l);e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass/(h+1))}}(),s.applyNodeStrongGravity=function(){var l=e.create();return function(u){e.sub(l,this.gravityCenter,u.position),e.scaleAndAdd(u.force,u.force,l,this.gravity*u.mass)}}(),s.updateBBox=function(){for(var l=1/0,u=1/0,h=-1/0,c=-1/0,d=0;d<this.nodes.length;d++){var f=this.nodes[d].position;l=Math.min(l,f[0]),u=Math.min(u,f[1]),h=Math.max(h,f[0]),c=Math.max(c,f[1])}this.bbox[0]=l,this.bbox[1]=u,this.bbox[2]=h,this.bbox[3]=c},s.getGlobalSpeed=function(){return this._globalSpeed};var o=null;self.onmessage=function(l){switch(l.data.cmd){case"init":o=new a,o.initNodes(l.data.nodesPosition,l.data.nodesMass,l.data.nodesSize),o.initEdges(l.data.edges,l.data.edgesWeight);break;case"updateConfig":if(o)for(var u in l.data.config)o[u]=l.data.config[u];break;case"update":var h=l.data.steps;if(o){for(var c=0;c<h;c++)o.update();for(var d=o.nodes.length,f=new Float32Array(d*2),c=0;c<d;c++){var v=o.nodes[c];f[c*2]=v.position[0],f[c*2+1]=v.position[1]}self.postMessage({buffer:f.buffer,globalSpeed:o.getGlobalSpeed()},[f.buffer])}else{var m=new Float32Array;self.postMessage({buffer:m.buffer,globalSpeed:o.getGlobalSpeed()},[m.buffer])}break}}}var hi=Av.toString();hi=hi.slice(hi.indexOf("{")+1,hi.lastIndexOf("}"));var mi={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},ot=function(e){for(var t in mi)this[t]=mi[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new Q({type:F.FLOAT,flipY:!1,minFilter:F.NEAREST,magFilter:F.NEAREST})};ot.prototype.initData=function(e,t){var r=new Blob([hi]),i=window.URL.createObjectURL(r);this._worker=new Worker(i),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var n=e.length,a=t.length,s=new Float32Array(n*2),o=new Float32Array(n),l=new Float32Array(n),u=new Float32Array(a*2),h=new Float32Array(a),c=0;c<e.length;c++){var d=e[c];s[c*2]=d.x,s[c*2+1]=d.y,o[c]=d.mass==null?1:d.mass,l[c]=d.size==null?1:d.size}for(var c=0;c<t.length;c++){var f=t[c],v=f.node1,m=f.node2;u[c*2]=v,u[c*2+1]=m,h[c]=f.weight==null?1:f.weight}var p=Math.ceil(Math.sqrt(e.length)),g=p,T=new Float32Array(p*g*4),x=this._positionTex;x.width=p,x.height=g,x.pixels=T,this._worker.postMessage({cmd:"init",nodesPosition:s,nodesMass:o,nodesSize:l,edges:u,edgesWeight:h}),this._globalSpeed=1/0};ot.prototype.updateOption=function(e){var t={};for(var r in mi)t[r]=mi[r];var i=this._nodes,n=this._edges,a=i.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var r in mi)e[r]!=null&&(t[r]=e[r]);if(!t.gravityCenter){for(var s=[1/0,1/0],o=[-1/0,-1/0],l=0;l<i.length;l++)s[0]=Math.min(i[l].x,s[0]),s[1]=Math.min(i[l].y,s[1]),o[0]=Math.max(i[l].x,o[0]),o[1]=Math.max(i[l].y,o[1]);t.gravityCenter=[(s[0]+o[0])*.5,(s[1]+o[1])*.5]}for(var l=0;l<n.length;l++){var u=n[l].node1,h=n[l].node2;i[u].degree=(i[u].degree||0)+1,i[h].degree=(i[h].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:t})};ot.prototype.update=function(e,t,r){t==null&&(t=1),t=Math.max(t,1),this._frame+=t,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(t)})};ot.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}};ot.prototype.getNodePositionTexture=function(){return this._positionTex};ot.prototype.getNodeUV=function(e,t){t=t||[];var r=this._positionTex.width,i=this._positionTex.height;return t[0]=e%r/(r-1),t[1]=Math.floor(e/r)/(i-1),t};ot.prototype.getNodes=function(){return this._nodes};ot.prototype.getEdges=function(){return this._edges};ot.prototype.isFinished=function(e){return this._frame>e};ot.prototype.getNodePosition=function(e,t){if(t||(t=new Float32Array(this._nodes.length*2)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)t[r]=this._positionArr[r];return t};ot.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,r=0,i=0;i<e.length;)t[r++]=e[i++],t[r++]=e[i++],t[r++]=1,t[r++]=1;this._positionTex.dirty()};ot.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var Lv=Xe.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on("mousedown",this._mouseDownHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("globalout",this._mouseUpHandler),e.animation.on("frame",this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,r))){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var i=this._convertPos(t,r);this._x=i.x,this._y=i.y}}},_convertPos:function(e,t){var r=this.viewGL.camera,i=this.viewGL.viewport;return{x:(e-i.x)/i.width*(r.right-r.left)+r.left,y:(t-i.y)/i.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*n,this.maxZoom),this.minZoom);n=a/this._zoom;var s=this._convertPos(r,i),o=(s.x-this._dx)*(n-1),l=(s.y-this._dy)*(n-1);this._dx-=o,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("globalout",this._mouseUpHandler),e.animation.off("frame",this._update)}});const Mv=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`;var qi=Le.vec2;y.Shader.import(Mv);var Cv=1;const Dv=Tt.extend({type:"graphGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new ce("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new _r(!0,t),this._forceEdgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new y.Geometry({attributes:{node:new y.Geometry.Attribute("node","float",2),color:new y.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:y.Mesh.LINES}),this._edgesMesh=new y.Mesh({material:new y.Material({shader:y.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new za({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new Lv({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=r,this._initLayout(e,t,r),this._pointsBuilder.update(e,t,r),this._forceLayoutInstance instanceof Ie||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(J.firstNotNull(e.get("zoom"),1)),this._control.setOffset(e.get("offset")||[0,0]);var i=this._pointsBuilder.getPointsMesh();if(i.off("mousemove",this._mousemoveHandler),i.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get("focusNodeAdjacency")){var n=e.get("focusNodeAdjacencyOn");n==="click"?r.getZr().on("click",this._clickHandler):n==="mouseover"&&(i.on("mousemove",this._mousemoveHandler,this),i.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var r=this._forceEdgesMesh.geometry,i=t.getEdgeData(),n=0,a=this._forceLayoutInstance,s=i.count()*2;r.attributes.node.init(s),r.attributes.color.init(s),i.each(function(o){var l=e[o];r.attributes.node.set(n,a.getNodeUV(l.node1)),r.attributes.node.set(n+1,a.getNodeUV(l.node2));var u=Ge(i,l.dataIndex),h=y.parseColor(u);h[3]*=J.firstNotNull(ze(i,l.dataIndex),1),r.attributes.color.set(n,h),r.attributes.color.set(n+1,h),n+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,t=this._model.getEdgeData(),r=this._model.getData().getLayout("points");e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var i=[],n=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(t.count()*4),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(s){var o=t.graph.getEdgeByIndex(s),l=o.node1.dataIndex*2,u=o.node2.dataIndex*2;i[0]=r[l],i[1]=r[l+1],n[0]=r[u],n[1]=r[u+1];var h=Ge(t,o.dataIndex),c=y.parseColor(h);c[3]*=J.firstNotNull(ze(t,o.dataIndex),1);var d=t.getItemModel(o.dataIndex),f=J.firstNotNull(d.get(a),1)*this._api.getDevicePixelRatio();e.addLine(i,n,c,f);for(var v=0;v<4;v++)this._originalEdgeColors[o.dataIndex*4+v]=c[v];this._edgeIndicesMap[o.dataIndex]=s},this),e.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),r=[],i=0;i<e.count();i++)this._forceLayoutInstance.getNodeUV(i,r),t.geometry.attributes.position.set(i,r);t.geometry.dirty("position")},_initLayout:function(e,t,r){var i=e.get("layout"),n=e.getGraph(),a=e.getBoxLayoutParams(),s=pn(a,{width:r.getWidth(),height:r.getHeight()});i==="force"&&(i="forceAtlas2"),this.stopLayout(e,t,r,{beforeLayout:!0});var o=e.getData(),l=e.getData();if(i==="forceAtlas2"){var u=e.getModel("forceAtlas2"),h=this._forceLayoutInstance,c=[],d=[],f=o.getDataExtent("value"),v=l.getDataExtent("value"),m=J.firstNotNull(u.get("edgeWeight"),1),p=J.firstNotNull(u.get("nodeWeight"),1);typeof m=="number"&&(m=[m,m]),typeof p=="number"&&(p=[p,p]);var g=0,T={},x=new Float32Array(o.count()*2);if(n.eachNode(function(S){var b=S.dataIndex,A=o.get("value",b),E,M;if(o.hasItemOption){var I=o.getItemModel(b);E=I.get("x"),M=I.get("y")}E==null&&(E=s.x+Math.random()*s.width,M=s.y+Math.random()*s.height),x[g*2]=E,x[g*2+1]=M,T[S.id]=g++;var C=ka(A,f,p);isNaN(C)&&(isNaN(p[0])?C=1:C=p[0]),c.push({x:E,y:M,mass:C,size:o.getItemVisual(b,"symbolSize")})}),o.setLayout("points",x),n.eachEdge(function(S){var b=S.dataIndex,A=o.get("value",b),E=ka(A,v,m);isNaN(E)&&(isNaN(m[0])?E=1:E=m[0]),d.push({node1:T[S.node1.id],node2:T[S.node2.id],weight:E,dataIndex:b})}),!h){var _=u.get("GPU");this._forceLayoutInstance&&(_&&!(this._forceLayoutInstance instanceof Ie)||!_&&!(this._forceLayoutInstance instanceof ot))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),h=this._forceLayoutInstance=_?new Ie:new ot}h.initData(c,d),h.updateOption(u.option),this._updateForceEdgesGeometry(h.getEdges(),e),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else{var x=new Float32Array(o.count()*2),g=0;n.eachNode(function(A){var E=A.dataIndex,M,I;if(o.hasItemOption){var C=o.getItemModel(E);M=C.get("x"),I=C.get("y")}x[g++]=M,x[g++]=I}),o.setLayout("points",x),this._updateAfterLayout(e,t,r)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set("positionTex",e)},startLayout:function(e,t,a,i){if(!(i&&i.from!=null&&i.from!==this.uid)){var n=this.viewGL,a=this._api,s=this._forceLayoutInstance,o=this._model.getData(),l=this._model.getModel("forceAtlas2");if(s&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),!!this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var u=this,h=this._layoutId=Cv++,c=l.getShallow("maxSteps"),d=l.getShallow("steps"),f=0,v=Math.max(d*2,20),m=function(p){if(p===u._layoutId){if(s.isFinished(c)){a.dispatchAction({type:"graphGLStopLayout",from:u.uid}),a.dispatchAction({type:"graphGLFinishLayout",points:o.getLayout("points"),from:u.uid});return}s.update(n.layer.renderer,d,function(){u._updatePositionTexture(),f+=d,f>=v&&(u._syncNodePosition(e),f=0),a.getZr().refresh(),ra(function(){m(p)})})}};ra(function(){u._forceLayoutInstanceToDispose&&(u._forceLayoutInstanceToDispose.dispose(n.layer.renderer),u._forceLayoutInstanceToDispose=null),m(h)}),this._layouting=!0}}},stopLayout:function(e,t,r,i){i&&i.from!=null&&i.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(i&&i.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout("points",t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,r,i){var n=this._model.getData();this._downplayAll();var a=i.dataIndex,s=n.graph,o=[],l=s.getNodeByIndex(a);o.push(l),l.edges.forEach(function(h){h.dataIndex<0||(h.node1!==l&&o.push(h.node1),h.node2!==l&&o.push(h.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),o.forEach(function(h){this._pointsBuilder.highlight(n,h.dataIndex)},this),this._pointsBuilder.updateLabels(o.map(function(h){return h.dataIndex}));var u=[];l.edges.forEach(function(h){h.dataIndex>=0&&(this._highlightEdge(h.dataIndex),u.push(h))},this),this._focusNodes=o,this._focusEdges=u},unfocusNodeAdjacency:function(e,t,r,i){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),r=y.parseColor(t.get("emphasis.lineStyle.color")||t.get("lineStyle.color")),i=J.firstNotNull(t.get("emphasis.lineStyle.opacity"),t.get("lineStyle.opacity"),1);r[3]*=i,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,r){this._getColor(t,e),e[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var r=0;r<4;r++)t[r]=this._originalEdgeColors[e*4+r];return t},_fadeOutEdgesAll:function(e){var t=this._model.getData().graph;t.eachEdge(function(r){this._setEdgeFade(r.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var r=this.viewGL.camera,i=e.getData(),n=i.getLayout("points"),a=qi.create(1/0,1/0),s=qi.create(-1/0,-1/0),o=[],l=0;l<n.length;)o[0]=n[l++],o[1]=n[l++],qi.min(a,a,o),qi.max(s,s,o);var u=(s[1]+a[1])/2,h=(s[0]+a[0])/2;if(!(h>r.left&&h<r.right&&u<r.bottom&&u>r.top)){var c=Math.max(s[0]-a[0],10),d=c/t.getWidth()*t.getHeight();c*=1.4,d*=1.4,a[0]-=c*.2,r.left=a[0],r.top=u-d/2,r.bottom=u+d/2,r.right=c+a[0],r.near=0,r.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function Yi(e){return e instanceof Array||(e=[e,e]),e}function Pv(e){e.registerChartView(Dv),e.registerSeriesModel(ui),e.registerVisual(function(r){const i={};r.eachSeriesByType("graphGL",function(n){var a=n.getCategoriesData(),s=n.getData(),o={};a.each(function(l){var u=a.getName(l);o["ec-"+u]=l;var h=a.getItemModel(l),c=h.getModel("itemStyle").getItemStyle();c.fill||(c.fill=n.getColorFromPalette(u,i)),a.setItemVisual(l,"style",c);var d=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<d.length;v++){var f=h.getShallow(d[v],!0);f!=null&&a.setItemVisual(l,d[v],f)}}),a.count()&&s.each(function(l){var u=s.getItemModel(l);let h=u.getShallow("category");if(h!=null){typeof h=="string"&&(h=o["ec-"+h]);var c=a.getItemVisual(h,"style"),d=s.ensureUniqueItemVisual(l,"style");Wa(d,c);var f=["symbol","symbolSize","symbolKeepAspect"];for(let v=0;v<f.length;v++)s.setItemVisual(l,f[v],a.getItemVisual(h,f[v]))}})})}),e.registerVisual(function(r){r.eachSeriesByType("graphGL",function(i){var n=i.getGraph(),a=i.getEdgeData(),s=Yi(i.get("edgeSymbol")),o=Yi(i.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",s&&s[0]),a.setVisual("toSymbol",s&&s[1]),a.setVisual("fromSymbolSize",o&&o[0]),a.setVisual("toSymbolSize",o&&o[1]),a.setVisual("style",i.getModel("lineStyle").getLineStyle()),a.each(function(l){var u=a.getItemModel(l),h=n.getEdgeByIndex(l),c=Yi(u.getShallow("symbol",!0)),d=Yi(u.getShallow("symbolSize",!0)),f=u.getModel("lineStyle").getLineStyle(),v=a.ensureUniqueItemVisual(l,"style");switch(Wa(v,f),v.stroke){case"source":{var m=h.node1.getVisual("style");v.stroke=m&&m.fill;break}case"target":{var m=h.node2.getVisual("style");v.stroke=m&&m.fill;break}}c[0]&&h.setVisual("fromSymbol",c[0]),c[1]&&h.setVisual("toSymbol",c[1]),d[0]&&h.setVisual("fromSymbolSize",d[0]),d[1]&&h.setVisual("toSymbolSize",d[1])})})}),e.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,i){i.eachComponent({mainType:"series",query:r},function(n){n.setView(r)})});function t(){}e.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},t),e.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},t),e.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},t),e.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},t)}We(Pv);const Nv=xt.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(e,t){var r=this.get("coordinateSystem"),i=r==="geo"?["lng","lat"]:vo(r)||["x","y"];i.push("vx","vy");var n=Ci(this.getSource(),{coordDimensions:i,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new Pt(n,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}});var Rv=ee.extend(function(){return{dynamic:!0,attributes:{position:new ee.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,r=4*e,i=2*e;this.vertexCount!==r&&t.position.init(r),this.triangleCount!==i&&(i===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(i*3):new Uint16Array(i*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});const Iv=`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`;z.import(Iv);function Ov(e){var t=document.createElement("canvas");t.width=t.height=e;var r=t.getContext("2d");return r.fillStyle="#fff",r.arc(e/2,e/2,e/2,0,Math.PI*2),r.fill(),t}var pa=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new Q({type:F.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};pa.prototype={constructor:pa,init:function(){var e={type:F.FLOAT,minFilter:F.NEAREST,magFilter:F.NEAREST,useMipmap:!1};this._spawnTexture=new Q(e),this._particleTexture0=new Q(e),this._particleTexture1=new Q(e),this._frameBuffer=new Ae({depthBuffer:!1}),this._particlePass=new Me({fragment:z.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Me({fragment:z.source("clay.compositor.downsample")});var t=new Fe({renderOrder:10,material:new ft({shader:new z(z.source("ecgl.vfParticle.renderPoints.vertex"),z.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:Fe.POINTS,geometry:new ee({dynamic:!0,mainAttribute:"texcoord0"})}),r=new Fe({renderOrder:10,material:new ft({shader:new z(z.source("ecgl.vfParticle.renderLines.vertex"),z.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new Rv,culling:!1}),i=new Fe({material:new ft({shader:new z(z.source("ecgl.color.vertex"),z.source("ecgl.color.fragment"))}),geometry:new xn});i.material.enableTexture("diffuseMap"),this._particlePointsMesh=t,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=i,this._camera=new Ur,this._thisFrameTexture=new Q,this._lastFrameTexture=new Q},setParticleDensity:function(e,t){for(var r=e*t,i=new Float32Array(r*4),n=0,a=this.particleLife,s=0;s<e;s++)for(var o=0;o<t;o++,n++){i[n*4]=Math.random(),i[n*4+1]=Math.random(),i[n*4+2]=Math.random();var l=(a[1]-a[0])*Math.random()+a[0];i[n*4+3]=l}this._particleType==="line"?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=i,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform("textureSize",[e,t])},_setPointsGeometry:function(e,t){var r=e*t,i=this._particlePointsMesh.geometry,n=i.attributes;n.texcoord0.init(r);for(var a=0,s=0;s<e;s++)for(var o=0;o<t;o++,a++)n.texcoord0.value[a*2]=s/e,n.texcoord0.value[a*2+1]=o/t;i.dirty()},_setLineGeometry:function(e,t){var r=e*t,i=this._getParticleMesh().geometry;i.setLineCount(r),i.resetOffset();for(var n=0;n<e;n++)for(var a=0;a<t;a++)i.addLine([n/e,a/t]);i.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,r,i){var n=this._getParticleMesh(),a=this._frameBuffer,s=this._particlePass;i&&this._updateDownsampleTextures(e,t),n.material.set("size",this._particleSize*this._supersampling),n.material.set("color",this.particleColor),s.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),s.setUniform("firstFrameTime",i?(this.particleLife[1]+this.particleLife[0])/2:0),s.setUniform("particleTexture",this._particleTexture0),s.setUniform("deltaTime",r),s.setUniform("elapsedTime",this._elapsedTime),s.render(e,a),n.material.set("particleTexture",this._particleTexture1),n.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var o=this._lastFrameFullQuadMesh;o.material.set("diffuseMap",this._lastFrameTexture),o.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([o,n],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=r},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var r=0,i=this._thisFrameTexture,n=t[r];n;)this._frameBuffer.attach(n),this._downsamplePass.setUniform("texture",i),this._downsamplePass.setUniform("textureSize",[i.width,i.height]),this._downsamplePass.render(e,this._frameBuffer),i=n,n=t[++r]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform("region",e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture("spriteTexture"),t.material.transparent=!1;return}this._spriteTexture||(this._spriteTexture=new Q),(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=Ov(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture("spriteTexture"),t.material.set("spriteTexture",this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?"enableTexture":"disableTexture"]("gradientTexture"),t.setUniform("gradientTexture",e)},setColorTextureImage:function(e,t){var r=this._getParticleMesh().material;r.setTextureImage("colorTexture",e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var r=this._downsampleTextures,i=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),n=2,a=this._width*this._supersampling,s=this._height*this._supersampling,o=0;o<i;o++)r[o]=r[o]||new Q,r[o].width=a/n,r[o].height=s/n,n*=2;for(;o<r.length;o++)r[o].dispose(e);r.length=i},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};const Bv=Tt.extend({type:"flowGL",__ecgl__:!0,init:function(e,t){this.viewGL=new ce("orthographic"),this.groupGL=new y.Node,this.viewGL.add(this.groupGL),this._particleSurface=new pa;var r=new y.Mesh({geometry:new y.PlaneGeometry,material:new y.Material({shader:new y.Shader({vertex:y.Shader.source("ecgl.color.vertex"),fragment:y.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(e,t,r){var i=this._particleSurface;i.setParticleType(e.get("particleType")),i.setSupersampling(e.get("supersampling")),this._updateData(e,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var n=J.firstNotNull(e.get("particleDensity"),128);i.setParticleDensity(n,n);var a=this._planeMesh,s=+new Date,o=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var c=+new Date,d=Math.min(c-s,20);s=s+d,o._renderer&&(i.update(o._renderer,r,d/1e3,l),a.material.set("diffuseMap",i.getSurfaceTexture())),l=!1}).start();var u=e.getModel("itemStyle"),h=y.parseColor(u.get("color"));h[3]*=J.firstNotNull(u.get("opacity"),1),a.material.set("color",h),i.setColorTextureImage(e.get("colorTexture"),r),i.setParticleSize(e.get("particleSize")),i.particleSpeedScaling=e.get("particleSpeed"),i.motionBlurFactor=1-Math.pow(.1,e.get("particleTrail"))},updateTransform:function(e,t,r){this._updateData(e,r)},afterRender:function(e,t,r,i){var n=i.renderer;this._renderer=n},_updateData:function(e,t){var r=e.coordinateSystem,i=r.dimensions.map(function(T){return e.coordDimToDataDim(T)[0]}),n=e.getData(),a=n.getDataExtent(i[0]),s=n.getDataExtent(i[1]),o=e.get("gridWidth"),l=e.get("gridHeight");if(o==null||o==="auto"){var u=(a[1]-a[0])/(s[1]-s[0]);o=Math.round(Math.sqrt(u*n.count()))}(l==null||l==="auto")&&(l=Math.ceil(n.count()/o));var h=this._particleSurface.vectorFieldTexture,c=h.pixels;if(!c||c.length!==l*o*4)c=h.pixels=new Float32Array(o*l*4);else for(var d=0;d<c.length;d++)c[d]=0;var f=0,v=1/0,m=new Float32Array(n.count()*2),p=0,g=[[1/0,1/0],[-1/0,-1/0]];n.each([i[0],i[1],"vx","vy"],function(T,x,_,S){var b=r.dataToPoint([T,x]);m[p++]=b[0],m[p++]=b[1],g[0][0]=Math.min(b[0],g[0][0]),g[0][1]=Math.min(b[1],g[0][1]),g[1][0]=Math.max(b[0],g[1][0]),g[1][1]=Math.max(b[1],g[1][1]);var A=Math.sqrt(_*_+S*S);f=Math.max(f,A),v=Math.min(v,A)}),n.each(["vx","vy"],function(T,x,_){var S=Math.round((m[_*2]-g[0][0])/(g[1][0]-g[0][0])*(o-1)),b=l-1-Math.round((m[_*2+1]-g[0][1])/(g[1][1]-g[0][1])*(l-1)),A=(b*o+S)*4;c[A]=T/f*.5+.5,c[A+1]=x/f*.5+.5,c[A+3]=1}),h.width=o,h.height=l,e.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(h),h.dirty(),this._updatePlanePosition(g[0],g[1],e,t),this._updateGradientTexture(n.getVisual("visualMeta"),[v,f])},_fillEmptyPixels:function(e){var t=e.pixels,r=e.width,i=e.height;function n(m,p,g){m=Math.max(Math.min(m,r-1),0),p=Math.max(Math.min(p,i-1),0);var T=(p*(r-1)+m)*4;return t[T+3]===0?!1:(g[0]=t[T],g[1]=t[T+1],!0)}function a(m,p,g){g[0]=m[0]+p[0],g[1]=m[1]+p[1]}for(var s=[],o=[],l=[],u=[],h=[],c=0,d=0;d<i;d++)for(var f=0;f<r;f++){var v=(d*(r-1)+f)*4;t[v+3]===0&&(c=s[0]=s[1]=0,n(f-1,d,o)&&(c++,a(o,s,s)),n(f+1,d,l)&&(c++,a(l,s,s)),n(f,d-1,u)&&(c++,a(u,s,s)),n(f,d+1,h)&&(c++,a(h,s,s)),s[0]/=c,s[1]/=c,t[v]=s[0],t[v+1]=s[1]),t[v+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new y.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,i=r.image;i.width=200,i.height=1;var n=i.getContext("2d"),a=n.createLinearGradient(0,.5,i.width,.5);e[0].stops.forEach(function(s){var o;t[1]===t[0]?o=0:(o=s.value/t[1],o=Math.min(Math.max(o,0),1)),a.addColorStop(o,s.color)}),n.fillStyle=a,n.fillRect(0,0,i.width,i.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,r,i){var n=this._limitInViewportAndFullFill(e,t,r,i);e=n.leftTop,t=n.rightBottom,this._particleSurface.setRegion(n.region),this._planeMesh.position.set((e[0]+t[0])/2,i.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],s=t[1]-e[1];this._planeMesh.scale.set(a/2,s/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(s,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,r,i){var n=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],i.getWidth()),Math.min(t[1],i.getHeight())];if(r.get("coordinateSystem")==="bmap"){var s=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]),o=Math.floor(s[1]-s[0])>=359;o&&(n[0]>0&&(n[0]=0),a[0]<i.getWidth()&&(a[0]=i.getWidth()))}var l=t[0]-e[0],u=t[1]-e[1],h=a[0]-n[0],c=a[1]-n[1],d=[(n[0]-e[0])/l,1-c/u-(n[1]-e[1])/u,h/l,c/u];return{leftTop:n,rightBottom:a,region:d}},_updateCamera:function(e,t,r){this.viewGL.setViewport(0,0,e,t,r);var i=this.viewGL.camera;i.left=i.bottom=0,i.top=t,i.right=e,i.near=0,i.far=100,i.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function Fv(e){e.registerChartView(Bv),e.registerSeriesModel(Nv)}We(Fv);var ga=xt.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ga.superApply(this,"init",arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),ga.superApply(this,"mergeOption",arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=Xa(this._flatCoords,t.flatCoords),this._flatCoordsOffset=Xa(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e),r=t.option instanceof Array?t.option:t.getShallow("coords");return r},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[e*2],i=this._flatCoordsOffset[e*2+1],n=0;n<i;n++)t[n]=t[n]||[],t[n][0]=this._flatCoords[r+n*2],t[n][1]=this._flatCoords[r+n*2+1];return i}else{for(var a=this._getCoordsFromItemModel(e),n=0;n<a.length;n++)t[n]=t[n]||[],t[n][0]=a[n][0],t[n][1]=a[n][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]=="number"){for(var r=e.length,i=new Uint32Array(r),n=new Float64Array(r),a=0,s=0,o=0,l=0;l<r;){o++;var u=e[l++];i[s++]=a+t,i[s++]=u;for(var h=0;h<u;h++){var c=e[l++],d=e[l++];n[a++]=c,n[a++]=d}}return{flatCoordsOffset:new Uint32Array(i.buffer,0,s),flatCoords:n,count:o}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var r=new Pt(["value"],this);return r.hasItemOption=!1,r.initData(e.data,[],function(i,n,a,s){if(i instanceof Array)return NaN;r.hasItemOption=!0;var o=i.value;if(o!=null)return o instanceof Array?o[s]:o}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const zv=Tt.extend({type:"linesGL",__ecgl__:!0,init:function(e,t){this.groupGL=new y.Node,this.viewGL=new ce("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new Ut(this.viewGL),this._nativeLinesShader=y.createShader("ecgl.lines3D"),this._meshLinesShader=y.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r);var i=this._linesMeshes[0];i||(i=this._linesMeshes[0]=this._createLinesMesh(e)),this._linesMeshes.length=1,this.groupGL.add(i),this._updateLinesMesh(e,i,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalPrepareRender:function(e,t,r){this.groupGL.removeAll(),this._glViewHelper.reset(e,r),this._currentStep=0,this.viewGL.setPostEffect(e.getModel("postEffect"),r)},incrementalRender:function(e,t,r,i){var n=this._linesMeshes[this._currentStep];n||(n=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=n),this._updateLinesMesh(t,n,e.start,e.end),this.groupGL.add(n),i.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,r){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,r)},_createLinesMesh:function(e){var t=new y.Mesh({$ignorePicking:!0,material:new y.Material({shader:y.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new za({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:y.Mesh.LINES,culling:!1});return t},_updateLinesMesh:function(e,t,r,i){var n=e.getData();t.material.blend=e.get("blendMode")==="lighter"?y.additiveBlend:null;var a=e.get("lineStyle.curveness")||0,s=e.get("polyline"),o=t.geometry,l=e.coordinateSystem,u=J.firstNotNull(e.get("lineStyle.width"),1);u>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=y.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=y.Mesh.LINES),r=r||0,i=i||n.count(),o.resetOffset();var h=0,c=0,d=[],f=[],v=[],m=[],p=[],g=.3,T=.7;function x(){f[0]=d[0]*T+m[0]*g-(d[1]-m[1])*a,f[1]=d[1]*T+m[1]*g-(m[0]-d[0])*a,v[0]=d[0]*g+m[0]*T-(d[1]-m[1])*a,v[1]=d[1]*g+m[1]*T-(m[0]-d[0])*a}if(s||a!==0)for(var _=r;_<i;_++)if(s){var S=e.getLineCoordsCount(_);h+=o.getPolylineVertexCount(S),c+=o.getPolylineTriangleCount(S)}else e.getLineCoords(_,p),this._glViewHelper.dataToPoint(l,p[0],d),this._glViewHelper.dataToPoint(l,p[1],m),x(),h+=o.getCubicCurveVertexCount(d,f,v,m),c+=o.getCubicCurveTriangleCount(d,f,v,m);else{var b=i-r;h+=b*o.getLineVertexCount(),c+=b*o.getLineVertexCount()}o.setVertexCount(h),o.setTriangleCount(c);for(var A=r,E=[],_=r;_<i;_++){y.parseColor(Ge(n,A),E);var M=J.firstNotNull(ze(n,A),1);E[3]*=M;for(var S=e.getLineCoords(_,p),I=0;I<S;I++)this._glViewHelper.dataToPoint(l,p[I],p[I]);s?o.addPolyline(p,E,u,0,S):a!==0?(d=p[0],m=p[1],x(),o.addCubicCurve(d,f,v,m,E,u)):o.addPolyline(p,E,u,0,2),A++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Gv(e){e.registerChartView(zv),e.registerSeriesModel(ga)}We(Gv);const Uv={setup(){const e=qe({}),t=qe(null),r=qe(null);return vn(async()=>{try{const i=await fetch("https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/city_index.geojson");if(!i.ok)throw new Error("Failed to load GeoJSON");r.value=await i.json(),xu("india",Al),t.value=so(document.getElementById("main_mapchart")),e.value={backgroundColor:"#2a3645",geo:{map:"india",roam:!1,label:{emphasis:{show:!0}},silent:!1,itemStyle:{normal:{areaColor:"#d9d9d9",borderColor:"#111"},emphasis:{areaColor:"#697d96"}}},series:[{name:"City Data",type:"scatter",coordinateSystem:"geo",data:r.value.features.map(n=>({name:n.properties.city_name,value:[n.geometry.coordinates[0],n.geometry.coordinates[1],n.properties.population_2020/5e4?n.properties.population_2020/5e4:50]})),symbolSize:n=>Math.max(n[2]/10,3),label:{formatter:"{b}",position:"right",show:!1},itemStyle:{color:"#e89968"},emphasis:{label:{show:!0}}},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:r.value.features.map(n=>({name:n.properties.city_name,value:[n.geometry.coordinates[0],n.geometry.coordinates[1],n.properties.population_2020/5e4]})).sort((n,a)=>a.value[2]-n.value[2]).slice(0,5),symbolSize:n=>n[2]/10,encode:{value:2},showEffectOn:"render",rippleEffect:{brushType:"stroke"},label:{formatter:"{b}",position:"right",show:!0},itemStyle:{color:"#de5637",shadowBlur:10,shadowColor:"#333"},emphasis:{scale:!0},zlevel:1}]},t.value.setOption(e.value)}catch(i){console.error("Error loading city data:",i)}}),{option:e,myChart:t,indianCity:r}}},Hv=e=>(Ai("data-v-ce544346"),e=e(),Li(),e),Vv=Hv(()=>K("div",{class:"chart",id:"main_mapchart"},null,-1));function kv(e,t,r,i,n,a){return Ke(),Ot(ci,null,{default:q(({isHovering:s,props:o})=>[Z(gt,di(o,{elevation:s?5:0,class:"mb-10 py-10 chart-container"}),{default:q(()=>[Vv]),_:2},1040,["elevation"])]),_:1})}const Wv=Yt(Uv,[["render",kv],["__scopeId","data-v-ce544346"]]),Xv=[{sector:"China",name:"China",data:[{timestamp:1960,value:798.7999},{timestamp:1961,value:570.6302},{timestamp:1962,value:459.6181},{timestamp:1963,value:456.7794},{timestamp:1964,value:460.6371},{timestamp:1965,value:500.2864},{timestamp:1966,value:549.4593},{timestamp:1967,value:460.2259},{timestamp:1968,value:495.5066},{timestamp:1969,value:607.6834},{timestamp:1970,value:807.9526},{timestamp:1971,value:909.2097},{timestamp:1972,value:968.6456},{timestamp:1973,value:1008.2926},{timestamp:1974,value:1028.0999},{timestamp:1975,value:1183.215},{timestamp:1976,value:1226.4213},{timestamp:1977,value:1340.8311},{timestamp:1978,value:1492.7778},{timestamp:1979,value:1525.6611},{timestamp:1980,value:1494.4959},{timestamp:1981,value:1476.4879},{timestamp:1982,value:1606.585},{timestamp:1983,value:1694.2168},{timestamp:1984,value:1844.828},{timestamp:1985,value:1998.0829},{timestamp:1986,value:2104.2134},{timestamp:1987,value:2257.7385},{timestamp:1988,value:2425.8936},{timestamp:1989,value:2463.6544},{timestamp:1990,value:2484.8548},{timestamp:1991,value:2606.0962},{timestamp:1992,value:2730.7876},{timestamp:1993,value:2921.651},{timestamp:1994,value:3103.7387},{timestamp:1995,value:3361.6372},{timestamp:1996,value:3508.8181},{timestamp:1997,value:3515.5942},{timestamp:1998,value:3364.5876},{timestamp:1999,value:3557.2746},{timestamp:2e3,value:3649.2009},{timestamp:2001,value:3728.5135},{timestamp:2002,value:4103.0427},{timestamp:2003,value:4841.1187},{timestamp:2004,value:5217.3509},{timestamp:2005,value:5882.1429},{timestamp:2006,value:6494.3381},{timestamp:2007,value:6983.5767},{timestamp:2008,value:7501.4978},{timestamp:2009,value:7891.0893},{timestamp:2010,value:8620.6268},{timestamp:2011,value:9532.4091},{timestamp:2012,value:9779.3544},{timestamp:2013,value:9956.3762},{timestamp:2014,value:9998.674},{timestamp:2015,value:9866.9514},{timestamp:2016,value:9765.0295},{timestamp:2017,value:10011.1517},{timestamp:2018,value:10353.9345},{timestamp:2019,value:10721.042},{timestamp:2020,value:10914.0122},{timestamp:2021,value:11336.2339},{timestamp:2022,value:11396.7774}]},{sector:"EU27",name:"EU27",data:[{timestamp:1960,value:2099.3709},{timestamp:1961,value:2198.9857},{timestamp:1962,value:2353.8905},{timestamp:1963,value:2512.1898},{timestamp:1964,value:2643.4003},{timestamp:1965,value:2676.2112},{timestamp:1966,value:2757.7269},{timestamp:1967,value:2819.3347},{timestamp:1968,value:2992.5746},{timestamp:1969,value:3191.2181},{timestamp:1970,value:3330.6823},{timestamp:1971,value:3424.5516},{timestamp:1972,value:3554.761},{timestamp:1973,value:3727.9233},{timestamp:1974,value:3708.6784},{timestamp:1975,value:3635.9884},{timestamp:1976,value:3911.7103},{timestamp:1977,value:3873.171},{timestamp:1978,value:4003.6643},{timestamp:1979,value:4113.1355},{timestamp:1980,value:4077.5007},{timestamp:1981,value:3863.3812},{timestamp:1982,value:3771.411},{timestamp:1983,value:3728.4859},{timestamp:1984,value:3763.5937},{timestamp:1985,value:3820.5809},{timestamp:1986,value:3805.261},{timestamp:1987,value:3839.6359},{timestamp:1988,value:3797.8931},{timestamp:1989,value:3835.0371},{timestamp:1990,value:3870.4273},{timestamp:1991,value:3804.5575},{timestamp:1992,value:3678.6234},{timestamp:1993,value:3609.8379},{timestamp:1994,value:3590.7623},{timestamp:1995,value:3637.058},{timestamp:1996,value:3721.9121},{timestamp:1997,value:3655.5349},{timestamp:1998,value:3645.8324},{timestamp:1999,value:3590.3608},{timestamp:2e3,value:3601.5088},{timestamp:2001,value:3658.2652},{timestamp:2002,value:3658.9049},{timestamp:2003,value:3743.0828},{timestamp:2004,value:3753.9955},{timestamp:2005,value:3734.8554},{timestamp:2006,value:3744.5274},{timestamp:2007,value:3708.2448},{timestamp:2008,value:3624.3587},{timestamp:2009,value:3330.5235},{timestamp:2010,value:3431.4449},{timestamp:2011,value:3330.9133},{timestamp:2012,value:3258.4293},{timestamp:2013,value:3178.5251},{timestamp:2014,value:3041.5813},{timestamp:2015,value:3092.7619},{timestamp:2016,value:3097.9963},{timestamp:2017,value:3119.7821},{timestamp:2018,value:3046.2395},{timestamp:2019,value:2904.162},{timestamp:2020,value:2629.9706},{timestamp:2021,value:2805.7617},{timestamp:2022,value:2761.9071}]},{sector:"India",name:"India",data:[{timestamp:1960,value:111.3251},{timestamp:1961,value:120.4043},{timestamp:1962,value:132.5815},{timestamp:1963,value:142.4441},{timestamp:1964,value:139.4883},{timestamp:1965,value:153.7019},{timestamp:1966,value:159.3734},{timestamp:1967,value:159.5558},{timestamp:1968,value:174.0693},{timestamp:1969,value:177.4134},{timestamp:1970,value:181.7226},{timestamp:1971,value:191.9637},{timestamp:1972,value:203.036},{timestamp:1973,value:209.095},{timestamp:1974,value:215.8532},{timestamp:1975,value:234.2091},{timestamp:1976,value:244.7494},{timestamp:1977,value:258.9617},{timestamp:1978,value:263.1496},{timestamp:1979,value:276.2847},{timestamp:1980,value:291.7111},{timestamp:1981,value:314.9662},{timestamp:1982,value:325.38},{timestamp:1983,value:352.1988},{timestamp:1984,value:361.5594},{timestamp:1985,value:397.5921},{timestamp:1986,value:426.3094},{timestamp:1987,value:455.3431},{timestamp:1988,value:491.6922},{timestamp:1989,value:540.651},{timestamp:1990,value:577.996},{timestamp:1991,value:615.365},{timestamp:1992,value:655.447},{timestamp:1993,value:677.2992},{timestamp:1994,value:714.0637},{timestamp:1995,value:760.4616},{timestamp:1996,value:823.6206},{timestamp:1997,value:858.0112},{timestamp:1998,value:875.7723},{timestamp:1999,value:950.4598},{timestamp:2e3,value:977.5264},{timestamp:2001,value:990.9695},{timestamp:2002,value:1021.6644},{timestamp:2003,value:1059.1595},{timestamp:2004,value:1125.0963},{timestamp:2005,value:1185.6742},{timestamp:2006,value:1292.4846},{timestamp:2007,value:1392.506},{timestamp:2008,value:1489.4375},{timestamp:2009,value:1612.2163},{timestamp:2010,value:1677.3372},{timestamp:2011,value:1764.7124},{timestamp:2012,value:1925.6997},{timestamp:2013,value:1995.0981},{timestamp:2014,value:2148.3437},{timestamp:2015,value:2234.2195},{timestamp:2016,value:2354.658},{timestamp:2017,value:2426.6069},{timestamp:2018,value:2593.0579},{timestamp:2019,value:2612.888},{timestamp:2020,value:2421.5523},{timestamp:2021,value:2674.2219},{timestamp:2022,value:2829.6442}]},{sector:"USA",name:"USA",data:[{timestamp:1960,value:2897.3153},{timestamp:1961,value:2886.8727},{timestamp:1962,value:2993.902},{timestamp:1963,value:3126.4875},{timestamp:1964,value:3264.3138},{timestamp:1965,value:3399.5468},{timestamp:1966,value:3571.4213},{timestamp:1967,value:3705.461},{timestamp:1968,value:3840.9196},{timestamp:1969,value:4035.1453},{timestamp:1970,value:4339.686},{timestamp:1971,value:4365.4653},{timestamp:1972,value:4573.0154},{timestamp:1973,value:4785.103},{timestamp:1974,value:4621.0998},{timestamp:1975,value:4478.2749},{timestamp:1976,value:4747.8174},{timestamp:1977,value:4889.6653},{timestamp:1978,value:4941.4227},{timestamp:1979,value:5008.6418},{timestamp:1980,value:4808.5564},{timestamp:1981,value:4686.4202},{timestamp:1982,value:4447.2979},{timestamp:1983,value:4429.4231},{timestamp:1984,value:4662.1745},{timestamp:1985,value:4652.633},{timestamp:1986,value:4663.4296},{timestamp:1987,value:4825.7117},{timestamp:1988,value:5050.5434},{timestamp:1989,value:5132.2063},{timestamp:1990,value:5120.9572},{timestamp:1991,value:5062.9567},{timestamp:1992,value:5174.2275},{timestamp:1993,value:5272.8508},{timestamp:1994,value:5364.2793},{timestamp:1995,value:5425.2597},{timestamp:1996,value:5612.9828},{timestamp:1997,value:5688.1425},{timestamp:1998,value:5733.2806},{timestamp:1999,value:5803.9178},{timestamp:2e3,value:6010.1359},{timestamp:2001,value:5907.7399},{timestamp:2002,value:5946.3081},{timestamp:2003,value:6010.1455},{timestamp:2004,value:6112.6546},{timestamp:2005,value:6132.1833},{timestamp:2006,value:6052.6862},{timestamp:2007,value:6130.1228},{timestamp:2008,value:5915.1185},{timestamp:2009,value:5480.7257},{timestamp:2010,value:5679.7152},{timestamp:2011,value:5546.1161},{timestamp:2012,value:5344.086},{timestamp:2013,value:5480.1565},{timestamp:2014,value:5528.6811},{timestamp:2015,value:5376.4731},{timestamp:2016,value:5252.9322},{timestamp:2017,value:5212.1623},{timestamp:2018,value:5377.7974},{timestamp:2019,value:5262.1451},{timestamp:2020,value:4714.628},{timestamp:2021,value:5032.2128},{timestamp:2022,value:5057.3038}]}],jv={__name:"MainLine",setup(e){const t=qe([]);var r=qe([]);const i=qe([]),n=(a,s)=>{t.value=a[0].data.map(o=>o.timestamp),r.value=a.map(o=>({name:o.sector,data:o.data.map(l=>l.value)})),r.value=s.value.map(o=>r.value[o])};return vn(()=>{i.value=[0,1,2,3],n(Xv,i)}),(a,s)=>{const o=po;return Ke(),Ot(ci,null,{default:q(({isHovering:l,props:u})=>[Z(gt,di(u,{elevation:l?5:0,class:"mb-10 pt-10 pa-10"}),{default:q(()=>[Z(o,{title:"Annual Fossil CO₂ Emissions (MtCO₂)",xAxisData:t.value,seriesData:Rr(r),emphasizedSeriesName:"India"},null,8,["xAxisData","seriesData"])]),_:2},1040,["elevation"])]),_:1})}}},Zv=Yt(jv,[["__scopeId","data-v-4b1f2d31"]]),qv={name:"InfoComponent",props:{number:{type:Number,required:!0},link:{type:String,required:!0},sourceName:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},sourceIcon:{type:String,required:!1}},data(){return{showPanel:!1}},methods:{openLink(){window.open(this.link,"_blank")}}},Yv={class:"info-content"},Kv={key:0,class:"info-panel"},$v={class:"info-source"},Qv=["src"],Jv={class:"info-title"},em={class:"info-description"};function tm(e,t,r,i,n,a){return Ke(),dr("div",{class:"info-container mx-3",onMouseover:t[1]||(t[1]=s=>n.showPanel=!0),onMouseleave:t[2]||(t[2]=s=>n.showPanel=!1)},[K("div",Yv,[Ul(e.$slots,"default",{},void 0),K("sup",{class:Hl(["info-avatar",{hovered:n.showPanel}]),onClick:t[0]||(t[0]=(...s)=>a.openLink&&a.openLink(...s))},ur(r.number),3)]),n.showPanel?(Ke(),dr("div",Kv,[K("div",$v,[r.sourceIcon?(Ke(),dr("img",{key:0,src:r.sourceIcon,alt:"Source Icon",class:"source-icon"},null,8,Qv)):fi("",!0),K("span",null,ur(r.sourceName),1)]),K("div",Jv,ur(r.title),1),K("div",em,[K("p",null,ur(r.description),1)])])):fi("",!0)],32)}const rm=Yt(qv,[["render",tm],["__scopeId","data-v-0da6cce1"]]),im={},it=e=>(Ai("data-v-2832723b"),e=e(),Li(),e),nm=it(()=>K("span",{class:"text-h4 text-primary"},"Why India",-1)),am=it(()=>K("div",{class:"text-h6 text-text2 font-weight-light"},"Largest population in the world",-1)),sm=it(()=>K("p",null,[Je(" India is the third-largest energy consumer globally, contributing about "),K("b",null,[K("b",null,"7%")]),Je(" of global greenhouse gas (GHG) emissions. With a projected 90% increase in its urban population by 2050, energy consumption and GHG emissions are expected to surge in urban areas. In 2018, India's per capita GHG emissions were 2 metric tons, ranking 74th globally, with a 6% annual increase over the last decade. Today, approximately "),K("b",null,[K("b",null,"75%")]),Je(" of the power production in India is met by coal, with new capacity being added. Renewables represent "),K("b",null,[K("b",null,"19%")]),Je(" of the power generation and show an increasing trend of installed capacity. ")],-1)),om=it(()=>K("br",null,null,-1)),lm=it(()=>K("b",null,[K("b",null,"15%-20%")],-1)),um=it(()=>K("b",null,[K("b",null,"15%")],-1)),hm=it(()=>K("br",null,null,-1)),cm=it(()=>K("p",null,[Je(" India has the opportunity to curb energy demand and emissions through low-carbon urban planning, crucial for meeting its Paris Agreement commitments. Reliable data on urban energy use and emissions is needed to track progress. India has pledged to reduce GHG emissions per unit of GDP by "),K("b",null,[K("b",null,"33%-35%")]),Je(" by 2030, based on 2005 levels, but lacks specific targets for urban emissions due to insufficient data. ")],-1)),fm=it(()=>K("span",{class:"text-h4 text-primary"},"Why CHETNA - Carbon Monitor 2.0",-1)),dm=it(()=>K("div",{class:"text-h6 text-text2 font-weight-light"},"Best understanding of the NRT spatial and temporal variations",-1)),vm=it(()=>K("p",null," CHETNA, a succeed project of Carbon Monitor 2.0, aims to leverage artificial intelligence and new datasets to deliver high resolution daily CO₂ and pollutants emission from power, traffic, residential, industrial and aviation sectors down to street and building block level,s for 100+ Indian cities. Near real-time and high spatial resolution data is essential for accurately quantifying urban carbon and pollutants emissions because it captures the dynamic and complex nature of urban energy use and emissions. These data are complementary to existing aggregated information only available at state or country level. ",-1)),mm=it(()=>K("br",null,null,-1)),pm=it(()=>K("p",null," The urban emissions maps from CHETNA will be updated monthly, offering a consistent view of recent trends across sectors and cities. CHETNA will also generate high spatial-temporal resolution emissions of air pollutants co-emitted with the combustion of carbon fuels, to investigate the air quality co-benefits or urban low carbon pathways ",-1)),gm=it(()=>K("br",null,null,-1)),_m=it(()=>K("p",null,[K("b",null,[K("b",null,"How CHETNA select cities…")])],-1));function ym(e,t){const r=rm,i=Zv,n=Wv,a=Ju,s=Hu;return Ke(),Ot(bt,null,{default:q(()=>[Z(gt,{class:"mx-16 text-center px-15 pr-15 mt-10",elevation:"0"},{title:q(()=>[nm]),default:q(()=>[am,Z(na,{class:"text-subtitle-1 font-weight-light text-start"},{default:q(()=>[sm,om,K("p",null,[Je(" India will shift from a low-income-based economy to a middle-income economy, 80% of households will be middle-income, increasing ownership of electrical appliances and vehicles by "),lm,Je(" by 2030. India is a hot country and has been affected by an increase in the duration and frequency of heat waves affecting the urban population. Increased heat exposure and higher population income lead to a fast surge in the use of air conditioning devices with annual growth rate of around "),um,Je(" projected to continue until 2028, which is expected to boost the electricity demand. "),Z(r,{number:"1",sourceName:"india.mongabay",title:"With intense and recurring heat waves, AC market grows",link:"https://india.mongabay.com/2024/07/with-intense-and-recurring-heat-waves-ac-market-grows/"})]),hm,cm]),_:1}),Z(i)]),_:1}),Z(gt,{class:"mx-16 text-center pl-15 pr-15 mt-10",elevation:"0"},{title:q(()=>[fm]),default:q(()=>[dm,Z(na,{class:"text-subtitle-1 font-weight-light text-start"},{default:q(()=>[vm,mm,pm,gm,_m]),_:1}),Z(n)]),_:1}),Z(a),Z(s)]),_:1})}const xm=Yt(im,[["render",ym],["__scopeId","data-v-2832723b"]]),Tm={},Ga=e=>(Ai("data-v-cede4dc4"),e=e(),Li(),e),wm={href:"https://www.lsce.ipsl.fr/",target:"_blank"},Sm=Ga(()=>K("a",{href:"https://www.iitb.ac.in/",target:"_blank"},[K("img",{src:wu,alt:"Team Logo",class:"team-logo"})],-1)),bm=Ga(()=>K("a",{href:"https://www.nexqt.com/",target:"_blank"},[K("img",{src:Su,alt:"Team Logo",class:"team-logo"})],-1)),Em=Ga(()=>K("a",{href:"https://www.uni-muenster.de/en/",target:"_blank"},[K("img",{src:Au,alt:"Team Logo",class:"team-logo"})],-1)),Am={href:"https://www.granthamfoundation.org/",target:"_blank"},Lm={href:"https://www.tsinghua.edu.cn/en/",target:"_blank"};function Mm(e,t){return Ke(),Ot(gt,{class:"banner pl-10 pr-10",elevation:"0"},{default:q(()=>[Z(bt,{class:"pt-4 pb-4"},{default:q(()=>[Z(lt,{class:"text-center"},{default:q(()=>[K("a",wm,[Z(Mn,{src:Tu,alt:"Team Logo",class:"team-logo"})])]),_:1}),Z(lt,{class:"text-center"},{default:q(()=>[Sm]),_:1}),Z(lt,{class:"text-center"},{default:q(()=>[bm]),_:1}),Z(lt,{class:"text-center"},{default:q(()=>[Em]),_:1}),Z(lt,{class:"text-center"},{default:q(()=>[K("a",Am,[Z(Mn,{src:bu,alt:"Team Logo",class:"team-logo align-self-center"})])]),_:1}),Z(lt,{cols:"3",class:"text-center"},{default:q(()=>[K("a",Lm,[Z(Mn,{src:Eu,alt:"Team Logo",class:"team-logo"})])]),_:1})]),_:1})]),_:1})}const Cm=Yt(Tm,[["render",Mm],["__scopeId","data-v-cede4dc4"]]),Um={__name:"index",setup(e){return(t,r)=>{const i=Lu,n=Cm,a=xm;return Ke(),dr(_a,null,[Z(i),Z(n),Z(a)],64)}}};export{Um as default};
