import{j as e,C as s,b as t,d as a,e as r,f as o,u as i}from"./index-BBfUH_eP.js";import{B as l}from"./badge-CXAWp9ku.js";import{r as d}from"./vendor-CeCTe3Td.js";const n=[{id:"mentecapaz",image:"/my-portfolio/assets/mentecapaz-Ca7DlHmE.webp"},{id:"cornflix",image:"/my-portfolio/assets/cornflix-CLIZG3E5.webp"},{id:"openeventsAPI",image:"/my-portfolio/assets/openEventsAPI-CvdCgayT.webp"},{id:"openeventsVue",image:"/my-portfolio/assets/webProject-DZfOx3jZ.webp"},{id:"ccna",image:"/my-portfolio/assets/ccna3-D9LRgah5.webp"},{id:"portfolio",image:"/my-portfolio/assets/portfolio-BWeSqcmp.webp"}],c=({children:s,maxHeight:t="11rem"})=>{const a=d.useRef(null),[r,o]=d.useState(!1),[i,l]=d.useState(!1),n=()=>{const e=a.current;if(e){const s=e.scrollHeight>e.clientHeight,t=0===e.scrollTop,a=Math.abs(e.scrollHeight-e.scrollTop-e.clientHeight)<1;o(s&&!t),l(s&&!a)}};return d.useEffect((()=>(n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n))),[]),e.jsxs("div",{className:"relative",children:[r&&e.jsx("div",{className:"absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-background dark:from-[#1F242E] to-transparent pointer-events-none z-10"}),e.jsx("div",{ref:a,className:"overflow-y-auto",style:{maxHeight:t},onScroll:n,children:s}),i&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background dark:from-[#1F242E] to-transparent pointer-events-none z-10"})]})},m=({project:i})=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"h-64 mx-2 -mb-3 relative z-10",children:e.jsx("img",{src:i.image,alt:i.title,className:"h-full w-full object-cover rounded-xl border border-borderLight dark:border-0 shadow-md dark:shadow-lg",loading:"lazy"})}),e.jsxs(s,{className:"overflow-hidden bg-[#F8F3EB] dark:bg-[#1F242E] relative z-20",children:[e.jsxs(t,{className:"space-y-0.5 py-4 px-5",children:[e.jsx(a,{className:"text-sm font-medium text-opaqueTextLight/75 dark:text-opaqueTextDark/80 tracking-wider",children:i.type}),e.jsx(a,{className:"text-lg font-semibold mb-3.5 leading-tight",children:i.title})]}),e.jsx(r,{className:"px-5 pb-4",children:e.jsx(c,{maxHeight:"11rem",children:e.jsx("p",{className:"text-base font-normal text-opaqueTextLight dark:text-opaqueTextDark/95 leading-tight mr-2",children:i.description})})}),e.jsx(o,{className:"px-5 pb-4",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:i.tags.map(((s,t)=>e.jsx(l,{variant:"default",className:"hover:cursor-default hover:bg-primary/100",children:s},t)))})})]})]}),p=()=>{const{t:s}=i(),t=n.map((e=>({...e,...s(`projects.projectsData.${e.id}`,{returnObjects:!0})})));return e.jsxs("section",{id:"projects",className:"py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:s("projects.title")}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-7 mlg:gap-y-8 lg:gap-y-10 gap-x-6",children:t.map(((s,t)=>e.jsx(m,{project:s},t)))})]})};export{p as default};
