(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,a,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9466)}])},9466:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>y});var r=s(4848),l=s(3663),t=s.n(l),i=s(3787),n=s.n(i),c=s(6540),d=s(4164),o=s(856);function m(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return(0,o.QP)((0,d.$)(a))}let p=c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)("div",{ref:a,className:m("rounded-xl border bg-card text-card-foreground shadow",s),...l})});p.displayName="Card",c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)("div",{ref:a,className:m("flex flex-col space-y-1.5 p-6",s),...l})}).displayName="CardHeader",c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)("div",{ref:a,className:m("font-semibold leading-none tracking-tight",s),...l})}).displayName="CardTitle",c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)("div",{ref:a,className:m("text-sm text-muted-foreground",s),...l})}).displayName="CardDescription",c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)("div",{ref:a,className:m("p-6 pt-0",s),...l})}).displayName="CardContent",c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)("div",{ref:a,className:m("flex items-center p-6 pt-0",s),...l})}).displayName="CardFooter";let g=c.forwardRef((e,a)=>{let{className:s,type:l,...t}=e;return(0,r.jsx)("input",{type:l,className:m("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:a,...t})});g.displayName="Input";var h=s(5920);let u=(0,s(2732).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),x=c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)(h.b,{ref:a,className:m(u(),s),...l})});x.displayName=h.b.displayName;var f=s(1914),N=s(921);let v=c.forwardRef((e,a)=>{let{className:s,...l}=e;return(0,r.jsx)(f.bL,{ref:a,className:m("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",s),...l,children:(0,r.jsx)(f.C1,{className:m("flex items-center justify-center text-current"),children:(0,r.jsx)(N.A,{className:"h-4 w-4"})})})});v.displayName=f.bL.displayName;let b={completions:4,hasIdealCompletion:!1,hasGradingRubrics:!1,penalizeMismatchedSeven:!1};function j(){let[e,a]=(0,c.useState)(b),[s,l]=(0,c.useState)([]),[t,i]=(0,c.useState)([]),[n,d]=(0,c.useState)(1),[o,m]=(0,c.useState)(1);(0,c.useEffect)(()=>{let e=localStorage.getItem("ratingCalculatorConfig");e&&a(JSON.parse(e))},[]),(0,c.useEffect)(()=>{localStorage.setItem("ratingCalculatorConfig",JSON.stringify(e))},[e]),(0,c.useEffect)(()=>{l(a=>{let s=Array(e.completions).fill(0);return a.slice(0,e.completions).concat(s.slice(a.length))}),i(a=>{let s=Array(e.completions).fill(0);return a.slice(0,e.completions).concat(s.slice(a.length))})},[e.completions]);let h=e=>{let a=[];for(let s=0;s<e.length-1;s++)for(let r=s+1;r<e.length;r++)e[s]===e[r]?a.push("".concat(s,"=").concat(r)):e[s]<e[r]?a.push("".concat(s,"<").concat(r)):a.push("".concat(s,">").concat(r));return a},u=()=>{let a=h(s),r=h(t);if(a.length!==r.length)throw Error("Comparisons do not have the same number of comparisons");let l=0;for(let e=0;e<a.length;e++)r.includes(a[e])?l++:a[e].includes("=")?l+=.5:r.includes(a[e].replace(/[<>]/,"="))&&(l+=.5);console.log(a.length,a),console.log(r.length,r),console.log(l);let i=1+6*(l/a.length);if(e.penalizeMismatchedSeven)for(let e=0;e<s.length;e++)(7===s[e]&&7!=t[e]||7!=s[e]&&7===t[e])&&(i-=.3);return i},f=(()=>{let a=u(),s=[a];e.hasIdealCompletion&&s.push(n),e.hasGradingRubrics&&s.push(o);let r=Math.pow(s.map(Math.sqrt).reduce((e,a)=>e+a,0),2),l=Math.pow(Math.sqrt(7)*s.length,2);return{relative:a.toFixed(2),overall:(7*r/l).toFixed(2)}})(),N=e=>{let a=parseInt(e.trim().slice(-1));return isNaN(a)?1:Math.max(1,Math.min(7,a))},j=(e,s)=>{a(a=>({...a,[e]:s}))},y=e=>String.fromCharCode(65+e);return(0,r.jsxs)("div",{className:"max-w-4xl mx-auto p-6 space-y-8",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-center",children:"Rating Agreement Calculator"}),(0,r.jsx)(p,{className:"p-6 space-y-4",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(x,{htmlFor:"completions",children:"Number of completions"}),(0,r.jsx)(g,{id:"completions",type:"number",min:"1",value:e.completions,onChange:e=>j("completions",Math.max(1,parseInt(e.target.value)||1))})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(v,{id:"idealCompletion",checked:e.hasIdealCompletion,onCheckedChange:e=>j("hasIdealCompletion",!0===e)}),(0,r.jsx)(x,{htmlFor:"idealCompletion",children:"Has ideal completion"})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(v,{id:"gradingRubrics",checked:e.hasGradingRubrics,onCheckedChange:e=>j("hasGradingRubrics",!0===e)}),(0,r.jsx)(x,{htmlFor:"gradingRubrics",children:"Has grading rubrics"})]}),(0,r.jsx)("div",{className:"flex items-center space-x-2"}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(v,{id:"penalizeMismatchedSeven",checked:e.penalizeMismatchedSeven,onCheckedChange:e=>j("penalizeMismatchedSeven",!0===e)}),(0,r.jsx)(x,{htmlFor:"penalizeMismatchedSeven",children:"Penalty for Mismatched 7 Ratings"})]})]})}),(0,r.jsxs)(p,{className:"p-6 space-y-6",children:[(0,r.jsx)("div",{className:"space-y-2",children:(0,r.jsxs)("div",{className:"grid grid-cols-[120px_1fr] gap-4",children:[(0,r.jsx)(x,{className:"text-lg",children:"Original Rating"}),(0,r.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:s.map((e,a)=>(0,r.jsx)(g,{type:"number",min:"1",max:"7",value:e||"",onChange:e=>{let r=[...s];r[a]=N(e.target.value),l(r)},className:"text-center",placeholder:y(a)},"original-".concat(a)))})]})}),(0,r.jsx)("div",{className:"space-y-2",children:(0,r.jsxs)("div",{className:"grid grid-cols-[120px_1fr] gap-4",children:[(0,r.jsx)(x,{className:"text-lg",children:"Suggested Rating"}),(0,r.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:t.map((e,a)=>(0,r.jsx)(g,{type:"number",min:"1",max:"7",value:e||"",onChange:e=>{let s=[...t];s[a]=N(e.target.value),i(s)},className:"text-center",placeholder:y(a)},"suggested-".concat(a)))})]})}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0",children:[e.hasIdealCompletion&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(x,{className:"text-lg",children:"Ideal completion"}),(0,r.jsx)(g,{value:n,onChange:e=>d(N(e.target.value)),placeholder:"Enter Ideal Completion rating",type:"number",min:"1",max:"7"})]}),e.hasGradingRubrics&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(x,{className:"text-lg",children:"Grading rubrics"}),(0,r.jsx)(g,{value:o,onChange:e=>m(N(e.target.value)),placeholder:"Enter grading rubrics rating",type:"number",min:"1",max:"7"})]})]}),(0,r.jsxs)("div",{className:"mt-6 bg-blue-50 p-4 rounded-lg space-y-2",children:[(0,r.jsxs)("p",{className:"text-blue-900",children:["Relative Ratings Agreement(1-7): ",f.relative]}),(0,r.jsxs)("p",{className:"text-blue-900",children:["Overall(1-7): ",f.overall]})]})]})]})}function y(){return(0,r.jsx)("div",{className:"".concat(t().variable," ").concat(n().variable," grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20  font-[family-name:var(--font-geist-sans)]"),children:(0,r.jsx)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:(0,r.jsx)(j,{})})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[73,636,593,792],()=>a(2022)),_N_E=e.O()}]);