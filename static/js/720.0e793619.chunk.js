"use strict";(self.webpackChunkreact_hh=self.webpackChunkreact_hh||[]).push([[720],{720:(e,s,c)=>{c.r(s),c.d(s,{default:()=>x});var t=c(2791),i=c(9041),a=c(3593),r=c(3147),d=c(1694),l=c(9434),n=c(3185),o=c(1243),u=c(184);document.title="CYBERBALENCIAGA   CART";const h=[{value:"Cyber fighter gloves",id:"99999999",link:"https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png",price:99999,test:"dresses",category:"dress"}],m=[{value:"Cyber fighter gloves",id:"99999998",link:"https://raw.githubusercontent.com/AlexMalFrost/CYBERBALENCIAGA/cyber-balenciaga-files/goods/strangemask.png",price:10101,test:"dresses",category:"dress"}],v=()=>{const[e,s]=t.useState(h),c=(0,l.I0)(),i=(0,l.v9)((e=>e.windowsize.value)),a=(0,l.v9)((e=>e.searchslice.cartvalue)),r=Object.keys(a).length;t.useEffect((()=>{!async function(){try{const{data:e}=await o.Z.get("https://6429b940ebb1476fcc4f9b86.mockapi.io/items");if(r>0){const c=e.filter((e=>a.some((s=>s.id==e.id))));console.log(c),s(c)}else 0===e.length&&r>0?(document.title="CYBERBALENCIAGA NOT FOUND",s(m)):(document.title="CYBERBALENCIAGA NOT FOUND",s(h))}catch(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445!")}}()}),[a]),console.log("myArrayFiltered");const d=r>0?[...a.reduce(((e,s)=>(e.has(s.id)||e.set(s.id,{...s,count:0}),e.get(s.id).count++,e)),new Map).values()]:[...h.reduce(((e,s)=>(e.has(s.id)||e.set(s.id,{...s,count:0}),e.get(s.id).count++,e)),new Map).values()],v=e=>{let{item:s,datavalue:t}=e;if(t>1){const e=a.findIndex((e=>{let{id:c}=e;return c===s.id})),t=a.filter(((s,c)=>c!==e));c((0,n.RV)(t))}},x=t=>{if(r>0){const i=a.filter((e=>e.id!==t.id)),r=e.filter((e=>e.id!==t.id)),d=r.filter(((e,s)=>s===r.findIndex((s=>s.id===e.id)))),l=Object.keys(d).length>0?d:h;c((0,n.RV)(i)),s(l)}},j=e=>{for(let s=0;s<r;s++)if(e.id===d[s].id){const t=d[s].count;return(0,u.jsxs)("div",{className:"cart_block",children:[(0,u.jsx)("div",{className:"cart_value",children:e.value}),(0,u.jsxs)("div",{className:"cart_button_box",children:[(0,u.jsx)("div",{className:"cart_button",children:(0,u.jsx)("div",{className:"cart_sign",onClick:()=>v({item:e,datavalue:t}),children:"-"})}),(0,u.jsx)("div",{className:"cart_value",children:d[s].count}),(0,u.jsx)("div",{className:"cart_button",children:(0,u.jsx)("div",{className:"cart_sign",onClick:()=>c((0,n.RV)([...a,{id:e.id}])),children:"+"})}),(0,u.jsxs)("div",{className:"cart_value",children:[" ",e.price*d[s].count," $"]})]}),(0,u.jsx)("div",{className:"cart_remove",children:(0,u.jsx)("div",{className:"cart_remove_remove",onClick:()=>x(e),children:"Remove"})})]})}};return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:i?"cartGrid_blur":"cartGrid",children:[(0,u.jsx)("div",{className:"cart_content",children:e[0].id===h[0].id?e[0].price===h[0].price?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"emptycart",children:"Cart is empty"})}):e[0].price===m[0].price?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"emptycart",children:"Data not found"})}):(0,u.jsx)("div",{className:"notfound",children:(0,u.jsx)("div",{className:"notfound_text",children:"Data not found"})}):e.map((e=>(0,u.jsxs)("div",{className:"cart_item",children:[(0,u.jsx)("div",{className:"cart_picture_box",children:(0,u.jsx)("img",{className:"cart_picture",src:e.link,alt:"Link"})}),j(e)]},e.id)))}),"99999999"===e[0].id?(0,u.jsx)("div",{}):(0,u.jsx)("div",{className:"cart_buybar",children:(0,u.jsx)("div",{className:"cart_buybar_buy",children:"Buy"})})]})})},x=()=>(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)(i.Z,{}),(0,u.jsx)(a.Z,{}),(0,u.jsx)(d.Z,{})]}),(0,u.jsx)("main",{children:(0,u.jsx)(v,{})}),(0,u.jsx)("footer",{children:(0,u.jsx)("div",{className:"choseFooter",children:(0,u.jsx)(r.Z,{})})})]})}}]);
//# sourceMappingURL=720.0e793619.chunk.js.map