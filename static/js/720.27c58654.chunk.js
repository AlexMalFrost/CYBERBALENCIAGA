"use strict";(self.webpackChunkreact_hh=self.webpackChunkreact_hh||[]).push([[720],{720:(e,s,c)=>{c.r(s),c.d(s,{default:()=>v});var i=c(2791),t=c(9041),a=c(3593),l=c(3147),d=c(1694),r=c(9434),n=c(3185),o=c(1243),h=c(184);document.title="CYBERBALENCIAGA   CART";const u=[{value:"Cyber fighter gloves",id:"99999999",link:"https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png",price:99999,test:"dresses",category:"dress"}],m=()=>{const[e,s]=i.useState(u),c=(0,r.I0)(),t=(0,r.v9)((e=>e.windowsize.value)),a=(0,r.v9)((e=>e.searchslice.cartvalue));i.useEffect((()=>{console.log(e[0].id),async function(){try{const{data:e}=await o.Z.get("https://6429b940ebb1476fcc4f9b86.mockapi.io/items");if(e.length>0&&Object.keys(a).length>0){const c=e.filter((e=>a.some((s=>s.id==e.id))));s(c)}else document.title="CYBERBALENCIAGA NOT FOUND",s(u)}catch(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445!")}}()}),[a]);const l=Object.keys(a).length>0?[...a.reduce(((e,s)=>(e.has(s.id)||e.set(s.id,{...s,count:0}),e.get(s.id).count++,e)),new Map).values()]:u,d=e=>{let{item:s,datavalue:i}=e;if(i>1){const e=a.findIndex((e=>{let{id:c}=e;return c===s.id})),i=a.filter(((s,c)=>c!==e));c((0,n.RV)(i))}},m=i=>{if(Object.keys(a).length>0){const t=a.filter((e=>e.id!==i.id)),l=e.filter((e=>e.id!==i.id)),d=l.filter(((e,s)=>s===l.findIndex((s=>s.id===e.id)))),r=Object.keys(d).length>0?d:u;c((0,n.RV)(t)),s(r)}},v=e=>{for(let s=0;s<Object.keys(a).length;s++)if(e.id===l[s].id){const i=l[s].count;return(0,h.jsxs)("div",{className:"cart_block",children:[(0,h.jsx)("div",{className:"cart_value",children:e.value}),(0,h.jsxs)("div",{className:"cart_button_box",children:[(0,h.jsx)("div",{className:"cart_button",children:(0,h.jsx)("div",{className:"cart_sign",onClick:()=>d({item:e,datavalue:i}),children:"-"})}),(0,h.jsx)("div",{className:"cart_value",children:l[s].count}),(0,h.jsx)("div",{className:"cart_button",children:(0,h.jsx)("div",{className:"cart_sign",onClick:()=>c((0,n.RV)([...a,{id:e.id}])),children:"+"})}),(0,h.jsxs)("div",{className:"cart_value",children:[" ",e.price*l[s].count," $"]})]}),(0,h.jsx)("div",{className:"cart_remove",children:(0,h.jsx)("div",{className:"cart_remove_remove",onClick:()=>m(e),children:"Remove"})})]})}};return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:t?"cartGrid_blur":"cartGrid",children:[(0,h.jsx)("div",{className:"cart_content",children:e[0].id===u[0].id?1===e.length?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"emptycart",children:"Data is loading"})}):(0,h.jsx)("div",{className:"notfound",children:(0,h.jsx)("div",{className:"notfound_text",children:"Data not found"})}):e.map((e=>(0,h.jsxs)("div",{className:"cart_item",children:[(0,h.jsx)("div",{className:"cart_picture_box",children:(0,h.jsx)("img",{className:"cart_picture",src:e.link,alt:"Link"})}),v(e)]},e.id)))}),"99999999"===e[0].id?(0,h.jsx)("div",{}):(0,h.jsx)("div",{className:"cart_buybar",children:(0,h.jsx)("div",{className:"cart_buybar_buy",children:"Buy"})})]})})},v=()=>(0,h.jsxs)("div",{className:"container",children:[(0,h.jsxs)("header",{children:[(0,h.jsx)(t.Z,{}),(0,h.jsx)(a.Z,{}),(0,h.jsx)(d.Z,{})]}),(0,h.jsx)("main",{children:(0,h.jsx)(m,{})}),(0,h.jsx)("footer",{children:(0,h.jsx)("div",{className:"choseFooter",children:(0,h.jsx)(l.Z,{})})})]})}}]);
//# sourceMappingURL=720.27c58654.chunk.js.map