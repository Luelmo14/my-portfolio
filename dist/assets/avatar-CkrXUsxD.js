import{k as a,j as e,P as s,l as r,m as o,a as t}from"./index-CWaxX6_j.js";import{r as l}from"./vendor-CeCTe3Td.js";var n="Avatar",[d,i]=a(n),[f,u]=d(n),m=l.forwardRef(((a,r)=>{const{__scopeAvatar:o,...t}=a,[n,d]=l.useState("idle");return e.jsx(f,{scope:o,imageLoadingStatus:n,onImageLoadingStatusChange:d,children:e.jsx(s.span,{...t,ref:r})})}));m.displayName=n;var c="AvatarImage",p=l.forwardRef(((a,t)=>{const{__scopeAvatar:n,src:d,onLoadingStatusChange:i=()=>{},...f}=a,m=u(c,n),p=function(a){const[e,s]=l.useState("idle");return o((()=>{if(!a)return void s("error");let e=!0;const r=new window.Image,o=a=>()=>{e&&s(a)};return s("loading"),r.onload=o("loaded"),r.onerror=o("error"),r.src=a,()=>{e=!1}}),[a]),e}(d),g=r((a=>{i(a),m.onImageLoadingStatusChange(a)}));return o((()=>{"idle"!==p&&g(p)}),[p,g]),"loaded"===p?e.jsx(s.img,{...f,ref:t,src:d}):null}));p.displayName=c;var g="AvatarFallback",w=l.forwardRef(((a,r)=>{const{__scopeAvatar:o,delayMs:t,...n}=a,d=u(g,o),[i,f]=l.useState(void 0===t);return l.useEffect((()=>{if(void 0!==t){const a=window.setTimeout((()=>f(!0)),t);return()=>window.clearTimeout(a)}}),[t]),i&&"loaded"!==d.imageLoadingStatus?e.jsx(s.span,{...n,ref:r}):null}));w.displayName=g;var v=m,N=p,j=w;const x=l.forwardRef((({className:a,...s},r)=>e.jsx(v,{ref:r,className:t("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...s})));x.displayName=v.displayName;const y=l.forwardRef((({className:a,...s},r)=>e.jsx(N,{ref:r,className:t("aspect-square h-full w-full",a),...s})));y.displayName=N.displayName;const h=l.forwardRef((({className:a,...s},r)=>e.jsx(j,{ref:r,className:t("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...s})));h.displayName=j.displayName;export{x as A,y as a,h as b};
