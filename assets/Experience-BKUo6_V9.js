import{c as e,u as a,j as t,a as s}from"./index-D6dZ9x9c.js";import{r}from"./vendor-Dus4vK_x.js";import{A as i,a as o,b as n}from"./avatar-D7te0HI8.js";import{E as l,M as c}from"./map-pin-CsvK5w1Z.js";
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=e("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]),p=e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),m=e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),x=[{id:"nexiona",company:"Nexiona Connectocrats, S.L.",dateRange:"2023 — 2024",logo:"/my-portfolio/assets/nexiona-DU_3a6_y.webp",padding:"p-2",website:"https://nexiona.com/es/"},{id:"fujitsu",company:"Fujitsu Technology Solutions, SA",dateRange:"2019 — 2020",logo:"/my-portfolio/assets/fujitsu-D220-9Th.webp",padding:"p-1",website:"https://global.fujitsu/es-es"}],h=()=>{const{t:e}=a(),[h,g]=r.useState(null),u=r.useRef([]),b=x.map((a=>({...a,...e(`experience.experiences.${a.id}`,{returnObjects:!0})})));return t.jsxs("section",{id:"experience",className:"py-6 sm:py-7 md:py-8 mlg:py-9 lg:py-10",children:[t.jsx("h2",{className:"text-2xl font-bold mb-6",children:e("experience.title")}),t.jsx("div",{className:"space-y-8",children:b.map(((e,a)=>{var r;return t.jsxs("div",{className:"relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4",children:[t.jsx("header",{className:"z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-zinc-600/90 sm:col-span-2 dark:text-slate-200/60","aria-label":e.dateRange,children:e.dateRange}),t.jsxs("div",{className:"z-10 sm:col-span-6",children:[t.jsxs("div",{className:"flex items-center cursor-pointer group/accordion hover:bg-zinc-100/0 dark:hover:bg-zinc-100/0",onClick:()=>(e=>{g(h===e?null:e)})(a),children:[t.jsx("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"relative group/avatar hidden ss:block",onClick:e=>e.stopPropagation(),children:t.jsxs(i,{className:"h-[4.5rem] w-[4.5rem] mr-4 border-2 bg-background/80 dark:bg-slate-100 border-borderLight dark:border-borderDark relative",children:[t.jsx(o,{src:e.logo,alt:`${e.company} logo`,className:`object-contain ${e.padding} transition-all duration-300 group-hover/avatar:blur-sm group-hover/avatar:scale-105`,loading:"lazy"}),t.jsx(n,{children:e.company[0]}),t.jsx(l,{className:"absolute inset-0 m-auto h-6 w-6 text-black opacity-0 transition-opacity duration-300 group-hover/avatar:opacity-100",strokeWidth:2})]})}),t.jsxs("div",{className:"flex-grow",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",className:"relative group/avatar block ss:hidden",onClick:e=>e.stopPropagation(),children:t.jsxs(i,{className:"h-[4.5rem] w-[4.5rem] mr-4 border-2 bg-background/80 dark:bg-slate-100 border-borderLight dark:border-borderDark relative",children:[t.jsx(o,{src:e.logo,alt:`${e.company} logo`,className:`object-contain ${e.padding} transition-all duration-300 group-hover/avatar:blur-sm group-hover/avatar:scale-105`,loading:"lazy"}),t.jsx(n,{children:e.company[0]}),t.jsx(l,{className:"absolute inset-0 m-auto h-6 w-6 text-black opacity-0 transition-opacity duration-300 group-hover/avatar:opacity-100",strokeWidth:2})]})}),t.jsxs("h3",{className:"font-medium leading-[1.3] text-black/85 dark:text-slate-100 flex items-center",children:[t.jsx("span",{children:e.company}),t.jsx(p,{className:s("ml-2 h-4 w-4 shrink-0 transition-all duration-300","text-black/85 dark:text-slate-100",h===a?"opacity-100 transform rotate-90":"opacity-100 sm:opacity-0 sm:group-hover/accordion:opacity-100")})]})]}),t.jsxs("div",{className:"mt-[10px] leading-tight font-normal text-opaqueTextLight dark:text-opaqueTextDark/95",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(d,{className:"mr-[9px] -mt-[2px] h-[17px] w-[17px] min-w-[17px]",strokeWidth:2}),t.jsx("span",{children:e.position})]}),t.jsxs("div",{className:"flex items-center mt-1",children:[t.jsx(m,{className:"mr-[9px] -mt-[2px] h-[17px] w-[17px] min-w-[17px]",strokeWidth:2}),t.jsx("span",{children:e.info})]}),t.jsxs("div",{className:"flex items-center mt-1",children:[t.jsx(c,{className:"mr-[9px] -mt-[2px] h-[17px] w-[17px] min-w-[17px]",strokeWidth:2}),t.jsx("span",{children:e.location})]})]})]})]}),t.jsx("div",{ref:e=>u.current[a]=e,className:s("mt-2 sm:pl-[5.6rem] text-base text-opaqueTextLight dark:text-opaqueTextDark/95","transition-all duration-500 ease-in-out","overflow-hidden"),style:{maxHeight:h===a?`${null==(r=u.current[a])?void 0:r.scrollHeight}px`:"0",opacity:h===a?1:0,transitionProperty:"max-height, opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"},children:t.jsx("div",{className:s("transform transition-all duration-500 ease-in-out",h===a?"translate-y-0 opacity-100":"translate-y-[-10px] opacity-0"),children:e.description})})]})]},a)}))})]})};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{h as default};