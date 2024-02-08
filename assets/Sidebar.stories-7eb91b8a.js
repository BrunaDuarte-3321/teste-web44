import{j as e}from"./jsx-runtime-ffb262ed.js";import{s as r}from"./index-12e238ea.js";import{c as O}from"./createSvgIcon-31a0d21f.js";import{L as h}from"./Logout-423268b5.js";import{B as q}from"./index-0e5c221b.js";import{I as F}from"./index-007d04c3.js";import{r as V,i as R}from"./createSvgIcon-0e38f7dd.js";import{N}from"./index-d5c51c03.js";import{r as Z}from"./index-76fb7be0.js";import"./index-314cc156.js";import"./extends-15b115a7.js";import"./styled-18e39d59.js";import"./_commonjsHelpers-de833af9.js";import"./useForkRef-aa365f68.js";import"./useIsFocusVisible-21febff1.js";const z=O(e.jsx("path",{d:"M14.71 15.88 10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"}),"KeyboardArrowLeftRounded"),D=O(e.jsx("path",{d:"M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"}),"KeyboardArrowRightRounded"),T=r("button",{position:"absolute",width:"$4",height:"$6",border:"1px solid #d9d9d9",borderRadius:"$sm",background:"$white",right:"-$2",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&:hover":{backgroundColor:"#e6e0e9"},"@media (max-width: 790px)":{display:"none"}}),k=r("menu",{height:"100vh",width:"100%",padding:0,position:"sticky",zIndex:1,top:0,left:0,display:"flex",justifyContent:"space-between",flexDirection:"column",background:"$white",variants:{size:{open:{maxWidth:"$80"},closed:{maxWidth:"$20"}}}}),E=r("div",{variants:{sizeContent:{openContent:{width:"$80","> header":{position:"relative",margin:"$16 0",display:"flex",alignItems:"center",justifyContent:"center"}},closedContent:{width:"$20","> header":{position:"relative",margin:"$16 0 $20 0",display:"flex",alignItems:"center",justifyContent:"center"}}}}}),B=r("div",{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"$5"}),d=({isOpen:n,setIsOpen:t,headerContent:c,mainContent:p,footerContent:I})=>{function $(){t(!n)}return e.jsxs(k,{size:n?"open":"closed",children:[e.jsxs(E,{sizeContent:n?"openContent":"closedContent",children:[e.jsxs("header",{children:[c,e.jsx(T,{onClick:$,children:n?e.jsx(z,{}):e.jsx(D,{})})]}),p]}),e.jsx(B,{children:I})]})};try{d.displayName="Sidebar",d.__docgenInfo={description:"",displayName:"Sidebar",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(open: boolean) => void"}},headerContent:{defaultValue:null,description:"",name:"headerContent",required:!0,type:{name:"ReactNode"}},mainContent:{defaultValue:null,description:"",name:"mainContent",required:!0,type:{name:"ReactNode"}},footerContent:{defaultValue:null,description:"",name:"footerContent",required:!0,type:{name:"ReactNode"}}}}}catch{}var f={},P=R;Object.defineProperty(f,"__esModule",{value:!0});var M=f.default=void 0,A=P(V()),U=e,K=(0,A.default)((0,U.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");M=f.default=K;const C=r("div",{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",gap:"$8"}),u=r("div",{padding:"0",width:"$48",display:"flex",justifyContent:"space-between",alignItems:"center"}),m=r("div",{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"500",gap:"$3","> svg":{color:"$on-background",width:"$10",height:"$10",borderRadius:"$full"},"> span":{width:"$40"}}),o=({isOpen:n,user:t})=>e.jsx(e.Fragment,{children:n?e.jsxs(C,{children:[e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(M,{}),e.jsx("span",{children:t})]})}),e.jsx(q,{icon:e.jsx(h,{}),bgColor:"error",children:"Sair"})]}):e.jsx(F,{colors:"red",children:e.jsx(h,{})})});try{C.displayName="FooterContainer",C.__docgenInfo={description:"",displayName:"FooterContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:`CSS<{}, { colors: { white: string; "surface-variant": string; "on-background": string; seed: string; primary: string; error: string; alert: string; "cor-felicidade": string; }; fontSizes: { 'body-sm': string; ... 13 more ...; 'headline-lg': string; }; ... 5 more ...; space: { ...; }; }, { ...; }, {}>`}}}}}catch{}try{u.displayName="ProfileContainer",u.__docgenInfo={description:"",displayName:"ProfileContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:`CSS<{}, { colors: { white: string; "surface-variant": string; "on-background": string; seed: string; primary: string; error: string; alert: string; "cor-felicidade": string; }; fontSizes: { 'body-sm': string; ... 13 more ...; 'headline-lg': string; }; ... 5 more ...; space: { ...; }; }, { ...; }, {}>`}}}}}catch{}try{m.displayName="SidebarProfile",m.__docgenInfo={description:"",displayName:"SidebarProfile",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},css:{defaultValue:null,description:"",name:"css",required:!1,type:{name:`CSS<{}, { colors: { white: string; "surface-variant": string; "on-background": string; seed: string; primary: string; error: string; alert: string; "cor-felicidade": string; }; fontSizes: { 'body-sm': string; ... 13 more ...; 'headline-lg': string; }; ... 5 more ...; space: { ...; }; }, { ...; }, {}>`}}}}}catch{}try{o.displayName="FooterContent",o.__docgenInfo={description:"",displayName:"FooterContent",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"string"}}}}}catch{}const s=({isOpen:n})=>e.jsx(e.Fragment,{children:e.jsx(N,{title:"Menu",type:n?"open":"closed",options:n?["Content 1","Content 2","Content 3"]:[]})});try{s.displayName="MainContent",s.__docgenInfo={description:"",displayName:"MainContent",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}const w=()=>e.jsxs("svg",{width:"176",height:"79",viewBox:"0 0 176 79",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M162.628 35.7729L161.642 41.1059H155L155.985 35.7729H162.628ZM150.569 65.1058L154.398 44.3671H161.039L157.21 65.1058H150.569ZM133.822 65.1058L130.592 44.3671H137.717L139.169 57.4389H139.302L145.619 44.3671H152.233L141.347 65.1058H133.822ZM128.633 44.1184L128.688 44.1259L128.725 44.1364L128.718 44.1828L127.693 49.8094L127.684 49.8783L127.625 49.8574C127.044 49.6611 126.449 49.5338 125.865 49.4889C125.747 49.4814 125.632 49.4754 125.518 49.4724C125.405 49.4679 125.289 49.4694 125.176 49.4754H125.153C123.248 49.5488 121.459 50.5165 120.332 52.5089C120.115 52.8954 119.919 53.3238 119.752 53.7942C119.586 54.2631 119.449 54.7724 119.346 55.3252L119.341 55.3566L117.542 65.1058H110.898L114.726 44.3671H120.788L120.359 46.689C121.084 45.8442 121.84 45.1745 122.799 44.7027C123.768 44.2323 124.941 43.9536 126.505 43.8892C127.253 43.8593 128.008 44.0001 128.633 44.1184ZM67.5215 65.1058L72.6463 37.3563H84.4639H84.4624C86.226 37.3563 87.7131 37.6649 88.8489 38.3435C90.1253 39.0985 91.0056 40.3988 91.3299 42.0706C91.584 43.3814 91.4898 44.8285 91.2268 46.2531C90.7919 48.617 89.7023 50.9689 87.9163 52.6557C87.6593 52.8999 87.3917 53.1246 87.1182 53.3328H87.1137C86.3949 53.8856 85.5997 54.32 84.7568 54.6376C84.5909 54.6975 84.428 54.7559 84.2576 54.8099C83.2309 55.1364 82.1309 55.2997 80.9965 55.2997H76.1944L74.3845 65.1058H67.5215ZM81.8992 42.8331H78.4961L77.2317 49.6806H80.6363C81.5465 49.6806 82.4313 49.3825 83.1427 48.8028C83.8526 48.2245 84.3891 47.3587 84.5999 46.2187V46.2172C84.8136 45.0607 84.5954 44.2173 84.0977 43.66C83.5955 43.1043 82.8124 42.8331 81.9007 42.8331H81.8992ZM107.262 62.6071C107.165 63.446 107.11 64.2774 107.105 65.1058H100.704C100.713 64.953 100.722 64.7912 100.728 64.6384C100.741 64.3897 100.759 64.0796 100.773 63.7741H100.756C99.7353 64.3987 98.0031 65.0354 96.2351 65.3739C95.4639 65.5193 94.6942 65.6121 93.9394 65.6181C91.8934 65.6391 89.795 65.0534 89.0641 62.9456C88.9371 62.5936 88.8564 62.1951 88.8175 61.7547L88.8131 61.7233V61.7218C88.6995 60.2896 89.0103 58.6298 89.7726 57.2337C90.076 56.6764 90.4421 56.1776 90.8741 55.7401L90.8756 55.7371C91.4091 55.2053 92.0204 54.7634 92.6959 54.3874C95.3921 52.8849 98.2901 52.6557 101.054 51.8527C101.793 51.637 102.841 51.1951 102.98 50.1735C103.218 48.4133 100.551 48.5346 99.5814 48.5796C98.5233 48.62 96.9958 48.8387 95.4728 49.2746C95.1769 49.363 94.8765 49.4574 94.5851 49.5608C94.2563 49.6746 93.9319 49.7989 93.6076 49.9368L94.5447 44.8899C96.7851 44.033 99.5784 43.8413 101.45 43.8413C102.961 43.8338 104.476 43.8922 105.888 44.2622C107.414 44.6667 108.449 45.4127 109.014 46.5362C109.577 47.6643 109.671 49.1623 109.317 51.0858L107.64 60.1698C107.491 60.9817 107.361 61.7937 107.262 62.6071ZM101.387 59.2425L102.049 55.6188C101.146 56.2105 99.5022 56.4622 98.2602 56.8322C96.9315 57.2337 95.3847 58.0471 95.3951 59.7683C95.3951 59.8297 95.3981 59.8852 95.4056 59.9421C95.5536 61.2169 97.1886 61.0956 98.1436 60.8634C99.2212 60.5967 100.382 59.9825 101.387 59.2425Z",fill:"#231F20"}),e.jsx("path",{d:"M78.9389 18.5576C78.1811 18.2025 77.1648 17.813 75.4939 17.813C70.6485 17.813 68.7519 22.1229 68.7534 25.3017C68.7579 29.4063 71.0446 31.2309 74.0397 31.2309C75.3714 31.2309 76.2113 31.0242 76.9511 30.8369L78.2514 23.9085H74.3386L74.0188 25.4305H76.3667L75.6329 29.4258C75.2921 29.5546 74.6315 29.592 74.2968 29.592C72.1042 29.592 70.4602 28.2363 70.4602 25.3946C70.4587 22.3491 72.1162 19.4504 75.5253 19.4504C76.7822 19.4504 77.7776 19.7845 78.4561 20.1545",fill:"#231F20"}),e.jsx("path",{d:"M79.7485 31.0062H81.264L82.1129 26.3413C82.3222 25.1744 83.2354 22.8314 85.1036 22.8314C85.2171 22.8314 85.4563 22.8869 85.7492 23.0157L86.0855 21.4742C85.7941 21.3439 85.5385 21.3079 85.395 21.3079C83.9602 21.3079 83.0769 22.1453 82.5927 23.0352H82.5643L82.8199 21.5327H81.403C81.3373 22.0869 81.2416 22.5903 81.1758 22.9812",fill:"#231F20"}),e.jsx("path",{d:"M94.8425 21.5327H93.33L92.4631 26.3054C92.2554 27.4753 91.3377 29.8167 89.4725 29.8167C88.5414 29.8167 87.975 29.0752 87.975 28.0895C87.975 27.8828 88.0049 27.5113 88.0542 27.1952L89.0645 21.5327H87.552L86.6553 26.5241C86.5566 27.0664 86.4595 27.6985 86.4595 28.2528C86.461 30.2617 87.6043 31.2309 89.1975 31.2309C90.6308 31.2309 91.5156 30.3905 91.9998 29.5007H92.0327L91.7741 31.0062H93.191C93.2523 30.4504 93.3509 29.9471 93.4152 29.5531",fill:"#231F20"}),e.jsx("path",{d:"M95.0278 34.9085H96.5418L97.5208 29.592H97.5522C97.9407 30.6691 98.7926 31.2309 100.226 31.2309C102.962 31.2309 104.361 28.3846 104.357 24.9122C104.355 22.8674 103.276 21.3079 101.426 21.3079C100.281 21.3079 99.108 21.7888 98.5117 22.9812H98.4818L98.7568 21.5327H97.3369C97.2248 22.5678 97.0619 23.6089 96.9065 24.6695L95.0278 34.9085ZM97.9676 27.324C97.9676 24.9871 99.1409 22.7191 100.912 22.7191C101.955 22.7191 102.746 23.4621 102.749 25.0605C102.749 27.4184 101.737 29.8167 100.017 29.8167C98.6297 29.8167 97.9706 28.6063 97.9676 27.324Z",fill:"#231F20"}),e.jsx("path",{d:"M105.871 27.0094C105.871 29.8167 107.356 31.2309 109.606 31.2309C112.556 31.2309 114.194 28.6633 114.191 25.4485C114.191 22.8479 112.756 21.3079 110.552 21.3079C107.54 21.3079 105.869 23.8516 105.871 27.0094ZM107.48 27.1398C107.477 25.1744 108.477 22.7191 110.486 22.7191C111.856 22.7191 112.581 24.0389 112.584 25.4485C112.584 27.5862 111.299 29.8167 109.591 29.8167C108.16 29.8167 107.482 28.6453 107.48 27.1398Z",fill:"#231F20"}),e.jsx("path",{d:"M60.0397 30.3276C58.3882 36.5833 54.9223 41.4564 49.923 43.8458L34.6396 51.1502C32.3619 52.2392 31.646 53.5935 31.1019 56.5101L28.7017 69.3078L33.3602 69.3018C35.898 69.2988 36.7095 67.4622 37.3432 64.4182L38.3924 59.3968C38.9529 56.7034 39.461 56.0337 41.6864 54.9477L49.3954 51.1726C52.5714 49.6207 55.2631 47.1534 57.1089 43.8742C59.1983 40.1561 60.2206 35.4239 60.0397 30.3276Z",fill:"#8FC7B8"}),e.jsx("path",{d:"M27.4404 55.3327C28.1683 51.2625 29.7077 48.7893 32.9673 47.2643L47.771 40.3179C54.4188 37.2005 58.0043 29.8887 58.0282 22.5798C58.0596 13.7115 52.159 9.40762 45.7444 11.9752L37.5945 15.2424C34.0808 16.6476 32.6669 18.8662 31.8733 23.2838L29.905 34.3003L29.9154 34.2959C31.0827 29.8437 33.045 27.4139 36.0671 26.0402L42.138 23.2779C45.3169 21.8338 46.943 22.6352 47.0312 25.2942C47.1239 28.2678 44.9089 30.9148 41.6268 32.4473L23.2766 41.0295C19.1949 42.935 17.1758 45.8202 16.2222 51.1726L14.5872 60.3466C14.0088 63.6048 15.4167 64.941 17.3835 64.9365L25.7292 64.926",fill:"#009475"})]}),g=()=>e.jsxs("svg",{width:"37",height:"48",viewBox:"0 0 37 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M36.8949 15.469C35.5582 20.5388 32.7529 24.4881 28.7065 26.4245L16.3363 32.3441C14.4928 33.2267 13.9133 34.3242 13.473 36.6879L11.5303 47.0594L15.3008 47.0546C17.3549 47.0521 18.0117 45.5637 18.5246 43.0968L19.3738 39.0274C19.8275 36.8445 20.2388 36.3019 22.04 35.4217L28.2795 32.3623C30.8501 31.1046 33.0287 29.1051 34.5227 26.4475C36.2138 23.4343 37.0412 19.5992 36.8949 15.469Z",fill:"#8FC7B8"}),e.jsx("path",{d:"M10.5094 35.7338C11.0985 32.4353 12.3445 30.4309 14.9828 29.195L26.9647 23.5655C32.3453 21.0391 35.2474 15.1134 35.2667 9.19012C35.2921 2.00303 30.5163 -1.48489 25.3243 0.595962L18.7279 3.24377C15.884 4.38254 14.7396 6.18053 14.0973 9.76072L12.5041 18.6887L12.5126 18.6851C13.4574 15.077 15.0457 13.1078 17.4917 11.9945L22.4054 9.75586C24.9784 8.58553 26.2945 9.23504 26.3659 11.39C26.4409 13.7998 24.6481 15.945 21.9917 17.187L7.13921 24.1422C3.83557 25.6864 2.20129 28.0247 1.42951 32.3624L0.106121 39.7972C-0.362026 42.4377 0.777494 43.5206 2.36943 43.517L9.12429 43.5085",fill:"#009475"})]}),d1={component:d,tags:["autodocs"],argTypes:{isOpen:{control:"none"},headerContent:{control:"none"},mainContent:{control:"none"},footerContent:{control:"none"}},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#e6e0e9",padding:"1rem",display:"flex",justifyContent:"center"},children:n()})]},i=n=>{const[t,c]=Z.useState(n.isOpen);return e.jsx(d,{...n,isOpen:t,setIsOpen:p=>c(p),headerContent:t?e.jsx(w,{}):e.jsx(g,{}),mainContent:e.jsx(s,{isOpen:t}),footerContent:e.jsx(o,{user:"User",isOpen:t})})};i.args={headerContent:e.jsx(g,{}),mainContent:e.jsx(s,{isOpen:!1}),footerContent:e.jsx(o,{user:"User",isOpen:!1})};const a={args:{isOpen:!1,headerContent:e.jsx(g,{}),mainContent:e.jsx(s,{isOpen:!1}),footerContent:e.jsx(o,{isOpen:!1})},name:"Sidebar closed"},l={args:{isOpen:!0,headerContent:e.jsx(w,{}),mainContent:e.jsx(s,{isOpen:!0}),footerContent:e.jsx(o,{user:"User",isOpen:!0})},name:"Sidebar open"};var L,y,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`(args: any) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return <Sidebar {...args} isOpen={isOpen} setIsOpen={open => setIsOpen(open)} headerContent={isOpen ? <Logo /> : <SmallLogo />} mainContent={<MainContent isOpen={isOpen} />} footerContent={<FooterContent user="User" isOpen={isOpen} />} />;
}`,...(x=(y=i.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var j,_,b;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    headerContent: <SmallLogo />,
    mainContent: <MainContent isOpen={false} />,
    footerContent: <FooterContent isOpen={false} />
  },
  name: 'Sidebar closed'
}`,...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var v,S,H;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    headerContent: <Logo />,
    mainContent: <MainContent isOpen={true} />,
    footerContent: <FooterContent user="User" isOpen={true} />
  },
  name: 'Sidebar open'
}`,...(H=(S=l.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};const c1=["SidebarToggle","Secondary","Tertiary"];export{a as Secondary,i as SidebarToggle,l as Tertiary,c1 as __namedExportsOrder,d1 as default};
