(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{3663:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_3aeeb0",variable:"__variable_3aeeb0"}},3787:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_096dfc",variable:"__variable_096dfc"}},1914:(e,r,t)=>{"use strict";t.d(r,{C1:()=>z,bL:()=>N});var o=t(6540),n=t(1071),l=t(4848);function s(e,r,{checkForDefaultPrevented:t=!0}={}){return function(o){if(e?.(o),!1===t||!o.defaultPrevented)return r?.(o)}}function i(e){let r=o.useRef(e);return o.useEffect(()=>{r.current=e}),o.useMemo(()=>(...e)=>r.current?.(...e),[])}var a=globalThis?.document?o.useLayoutEffect:()=>{},c=e=>{let{present:r,children:t}=e,l=function(e){var r,t;let[n,l]=o.useState(),s=o.useRef({}),i=o.useRef(e),c=o.useRef("none"),[u,p]=(r=e?"mounted":"unmounted",t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,r)=>t[e][r]??e,r));return o.useEffect(()=>{let e=d(s.current);c.current="mounted"===u?e:"none"},[u]),a(()=>{let r=s.current,t=i.current;if(t!==e){let o=c.current,n=d(r);e?p("MOUNT"):"none"===n||r?.display==="none"?p("UNMOUNT"):t&&o!==n?p("ANIMATION_OUT"):p("UNMOUNT"),i.current=e}},[e,p]),a(()=>{if(n){let e;let r=n.ownerDocument.defaultView??window,t=t=>{let o=d(s.current).includes(t.animationName);if(t.target===n&&o&&(p("ANIMATION_END"),!i.current)){let t=n.style.animationFillMode;n.style.animationFillMode="forwards",e=r.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=t)})}},o=e=>{e.target===n&&(c.current=d(s.current))};return n.addEventListener("animationstart",o),n.addEventListener("animationcancel",t),n.addEventListener("animationend",t),()=>{r.clearTimeout(e),n.removeEventListener("animationstart",o),n.removeEventListener("animationcancel",t),n.removeEventListener("animationend",t)}}p("ANIMATION_END")},[n,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(s.current=getComputedStyle(e)),l(e)},[])}}(r),s="function"==typeof t?t({present:l.isPresent}):o.Children.only(t),i=(0,n.s)(l.ref,function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof t||l.isPresent?o.cloneElement(s,{ref:i}):null};function d(e){return e?.animationName||"none"}c.displayName="Presence";var u=t(4967),p="Checkbox",[f,b]=function(e,r=[]){let t=[],n=()=>{let r=t.map(e=>o.createContext(e));return function(t){let n=t?.[e]||r;return o.useMemo(()=>({[`__scope${e}`]:{...t,[e]:n}}),[t,n])}};return n.scopeName=e,[function(r,n){let s=o.createContext(n),i=t.length;t=[...t,n];let a=r=>{let{scope:t,children:n,...a}=r,c=t?.[e]?.[i]||s,d=o.useMemo(()=>a,Object.values(a));return(0,l.jsx)(c.Provider,{value:d,children:n})};return a.displayName=r+"Provider",[a,function(t,l){let a=l?.[e]?.[i]||s,c=o.useContext(a);if(c)return c;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=t.reduce((r,{useScope:t,scopeName:o})=>{let n=t(e)[`__scope${o}`];return{...r,...n}},{});return o.useMemo(()=>({[`__scope${r.scopeName}`]:n}),[n])}};return t.scopeName=r.scopeName,t}(n,...r)]}(p),[m,g]=f(p),h=o.forwardRef((e,r)=>{let{__scopeCheckbox:t,name:a,checked:c,defaultChecked:d,required:p,disabled:f,value:b="on",onCheckedChange:g,form:h,...v}=e,[y,N]=o.useState(null),z=(0,n.s)(r,e=>N(e)),j=o.useRef(!1),E=!y||h||!!y.closest("form"),[C=!1,O]=function({prop:e,defaultProp:r,onChange:t=()=>{}}){let[n,l]=function({defaultProp:e,onChange:r}){let t=o.useState(e),[n]=t,l=o.useRef(n),s=i(r);return o.useEffect(()=>{l.current!==n&&(s(n),l.current=n)},[n,l,s]),t}({defaultProp:r,onChange:t}),s=void 0!==e,a=s?e:n,c=i(t);return[a,o.useCallback(r=>{if(s){let t="function"==typeof r?r(e):r;t!==e&&c(t)}else l(r)},[s,e,l,c])]}({prop:c,defaultProp:d,onChange:g}),M=o.useRef(C);return o.useEffect(()=>{let e=y?.form;if(e){let r=()=>O(M.current);return e.addEventListener("reset",r),()=>e.removeEventListener("reset",r)}},[y,O]),(0,l.jsxs)(m,{scope:t,state:C,disabled:f,children:[(0,l.jsx)(u.sG.button,{type:"button",role:"checkbox","aria-checked":x(C)?"mixed":C,"aria-required":p,"data-state":k(C),"data-disabled":f?"":void 0,disabled:f,value:b,...v,ref:z,onKeyDown:s(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:s(e.onClick,e=>{O(e=>!!x(e)||!e),E&&(j.current=e.isPropagationStopped(),j.current||e.stopPropagation())})}),E&&(0,l.jsx)(w,{control:y,bubbles:!j.current,name:a,value:b,checked:C,required:p,disabled:f,form:h,style:{transform:"translateX(-100%)"},defaultChecked:!x(d)&&d})]})});h.displayName=p;var v="CheckboxIndicator",y=o.forwardRef((e,r)=>{let{__scopeCheckbox:t,forceMount:o,...n}=e,s=g(v,t);return(0,l.jsx)(c,{present:o||x(s.state)||!0===s.state,children:(0,l.jsx)(u.sG.span,{"data-state":k(s.state),"data-disabled":s.disabled?"":void 0,...n,ref:r,style:{pointerEvents:"none",...e.style}})})});y.displayName=v;var w=e=>{let{control:r,checked:t,bubbles:n=!0,defaultChecked:s,...i}=e,c=o.useRef(null),d=function(e){let r=o.useRef({value:e,previous:e});return o.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}(t),u=function(e){let[r,t]=o.useState(void 0);return a(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let r=new ResizeObserver(r=>{let o,n;if(!Array.isArray(r)||!r.length)return;let l=r[0];if("borderBoxSize"in l){let e=l.borderBoxSize,r=Array.isArray(e)?e[0]:e;o=r.inlineSize,n=r.blockSize}else o=e.offsetWidth,n=e.offsetHeight;t({width:o,height:n})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}t(void 0)},[e]),r}(r);o.useEffect(()=>{let e=c.current,r=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(d!==t&&r){let o=new Event("click",{bubbles:n});e.indeterminate=x(t),r.call(e,!x(t)&&t),e.dispatchEvent(o)}},[d,t,n]);let p=o.useRef(!x(t)&&t);return(0,l.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:s??p.current,...i,tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function x(e){return"indeterminate"===e}function k(e){return x(e)?"indeterminate":e?"checked":"unchecked"}var N=h,z=y},1071:(e,r,t)=>{"use strict";t.d(r,{s:()=>s,t:()=>l});var o=t(6540);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let t=!1,o=e.map(e=>{let o=n(e,r);return t||"function"!=typeof o||(t=!0),o});if(t)return()=>{for(let r=0;r<o.length;r++){let t=o[r];"function"==typeof t?t():n(e[r],null)}}}}function s(...e){return o.useCallback(l(...e),e)}},5920:(e,r,t)=>{"use strict";t.d(r,{b:()=>i});var o=t(6540),n=t(4967),l=t(4848),s=o.forwardRef((e,r)=>(0,l.jsx)(n.sG.label,{...e,ref:r,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));s.displayName="Label";var i=s},4967:(e,r,t)=>{"use strict";t.d(r,{sG:()=>d});var o=t(6540);t(961);var n=t(1071),l=t(4848),s=o.forwardRef((e,r)=>{let{children:t,...n}=e,s=o.Children.toArray(t),a=s.find(c);if(a){let e=a.props.children,t=s.map(r=>r!==a?r:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:o.isValidElement(e)?o.cloneElement(e,void 0,t):null})}return(0,l.jsx)(i,{...n,ref:r,children:t})});s.displayName="Slot";var i=o.forwardRef((e,r)=>{let{children:t,...l}=e;if(o.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return o.cloneElement(t,{...function(e,r){let t={...r};for(let o in r){let n=e[o],l=r[o];/^on[A-Z]/.test(o)?n&&l?t[o]=(...e)=>{l(...e),n(...e)}:n&&(t[o]=n):"style"===o?t[o]={...n,...l}:"className"===o&&(t[o]=[n,l].filter(Boolean).join(" "))}return{...e,...t}}(l,t.props),ref:r?(0,n.t)(r,e):e})}return o.Children.count(t)>1?o.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return o.isValidElement(e)&&e.type===a}var d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=o.forwardRef((e,t)=>{let{asChild:o,...n}=e,i=o?s:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...n,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{})},2732:(e,r,t)=>{"use strict";t.d(r,{F:()=>s});var o=t(4164);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,s=(e,r)=>t=>{var o;if((null==r?void 0:r.variants)==null)return l(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==t?void 0:t[e],o=null==i?void 0:i[e];if(null===r)return null;let l=n(r)||n(o);return s[e][l]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,o]=r;return void 0===o||(e[t]=o),e},{});return l(e,a,null==r?void 0:null===(o=r.compoundVariants)||void 0===o?void 0:o.reduce((e,r)=>{let{class:t,className:o,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...c}[r]):({...i,...c})[r]===t})?[...e,t,o]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}},4164:(e,r,t)=>{"use strict";function o(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(t=0;t<l;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o)}else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{$:()=>o})},921:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var o=t(6540);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,o.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:r,...s,width:n,height:n,stroke:t,strokeWidth:a?24*Number(i)/Number(n):i,className:l("lucide",c),...p},[...u.map(e=>{let[r,t]=e;return(0,o.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),a=((e,r)=>{let t=(0,o.forwardRef)((t,s)=>{let{className:a,...c}=t;return(0,o.createElement)(i,{ref:s,iconNode:r,className:l("lucide-".concat(n(e)),a),...c})});return t.displayName="".concat(e),t})("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},856:(e,r,t)=>{"use strict";t.d(r,{QP:()=>Z});let o=e=>{let r=i(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),n(t,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=t[e]||[];return r&&o[e]?[...n,...o[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let t=e[0],o=r.nextPart.get(t),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},i=e=>{let{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),t).forEach(([e,t])=>{a(t,o,e,r)}),o},a=(e,r,t,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:c(r,e)).classGroupId=t;return}if("function"==typeof e){if(d(e)){a(e(o),r,t,o);return}r.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(([e,n])=>{a(n,c(r,e),t,o)})})},c=(e,r)=>{let t=e;return r.split("-").forEach(e=>{t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t},d=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,t])=>[e,t.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,t])=>[r+e,t])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,t=new Map,o=new Map,n=(n,l)=>{t.set(n,l),++r>e&&(r=0,o=t,t=new Map)};return{get(e){let r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set(e,r){t.has(e)?t.set(e,r):n(e,r)}}},f=e=>{let{separator:r,experimentalParseClassName:t}=e,o=1===r.length,n=r[0],l=r.length,s=e=>{let t;let s=[],i=0,a=0;for(let c=0;c<e.length;c++){let d=e[c];if(0===i){if(d===n&&(o||e.slice(c,c+l)===r)){s.push(e.slice(a,c)),a=c+l;continue}if("/"===d){t=c;continue}}"["===d?i++:"]"===d&&i--}let c=0===s.length?e:e.substring(a),d=c.startsWith("!"),u=d?c.substring(1):c;return{modifiers:s,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:t&&t>a?t-a:void 0}};return t?e=>t({className:e,parseClassName:s}):s},b=e=>{if(e.length<=1)return e;let r=[],t=[];return e.forEach(e=>{"["===e[0]?(r.push(...t.sort(),e),t=[]):t.push(e)}),r.push(...t.sort()),r},m=e=>({cache:p(e.cacheSize),parseClassName:f(e),...o(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,l=[],s=e.trim().split(g),i="";for(let e=s.length-1;e>=0;e-=1){let r=s[e],{modifiers:a,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=t(r),p=!!u,f=o(p?d.substring(0,u):d);if(!f){if(!p||!(f=o(d))){i=r+(i.length>0?" "+i:i);continue}p=!1}let m=b(a).join(":"),g=c?m+"!":m,h=g+f;if(l.includes(h))continue;l.push(h);let v=n(f,p);for(let e=0;e<v.length;++e){let r=v[e];l.push(g+r)}i=r+(i.length>0?" "+i:i)}return i};function v(){let e,r,t=0,o="";for(;t<arguments.length;)(e=arguments[t++])&&(r=y(e))&&(o&&(o+=" "),o+=r);return o}let y=e=>{let r;if("string"==typeof e)return e;let t="";for(let o=0;o<e.length;o++)e[o]&&(r=y(e[o]))&&(t&&(t+=" "),t+=r);return t},w=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,N=new Set(["px","full","screen"]),z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,C=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,O=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,M=e=>S(e)||N.has(e)||k.test(e),R=e=>V(e,"length",B),S=e=>!!e&&!Number.isNaN(Number(e)),_=e=>V(e,"number",S),P=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&S(e.slice(0,-1)),T=e=>x.test(e),G=e=>z.test(e),I=new Set(["length","size","percentage"]),$=e=>V(e,I,q),W=e=>V(e,"position",q),D=new Set(["image","url"]),L=e=>V(e,D,K),U=e=>V(e,"",H),F=()=>!0,V=(e,r,t)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof r?o[1]===r:r.has(o[1]):t(o[2]))},B=e=>j.test(e)&&!E.test(e),q=()=>!1,H=e=>C.test(e),K=e=>O.test(e);Symbol.toStringTag;let Z=function(e,...r){let t,o,n;let l=function(i){return o=(t=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=t.cache.set,l=s,s(i)};function s(e){let r=o(e);if(r)return r;let l=h(e,t);return n(e,l),l}return function(){return l(v.apply(null,arguments))}}(()=>{let e=w("colors"),r=w("spacing"),t=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),s=w("borderSpacing"),i=w("borderWidth"),a=w("contrast"),c=w("grayscale"),d=w("hueRotate"),u=w("invert"),p=w("gap"),f=w("gradientColorStops"),b=w("gradientColorStopPositions"),m=w("inset"),g=w("margin"),h=w("opacity"),v=w("padding"),y=w("saturate"),x=w("scale"),k=w("sepia"),N=w("skew"),z=w("space"),j=w("translate"),E=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",T,r],I=()=>[T,r],D=()=>["",M,R],V=()=>["auto",S,T],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>["start","end","center","between","around","evenly","stretch"],Z=()=>["","0",T],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],X=()=>[S,T];return{cacheSize:500,separator:":",theme:{colors:[F],spacing:[M,R],blur:["none","",G,T],brightness:X(),borderColor:[e],borderRadius:["none","","full",G,T],borderSpacing:I(),borderWidth:D(),contrast:X(),grayscale:Z(),hueRotate:X(),invert:Z(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[A,R],inset:O(),margin:O(),opacity:X(),padding:I(),saturate:X(),scale:X(),sepia:Z(),skew:X(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),T]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,T]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",P,T]}],"grid-cols":[{"grid-cols":[F]}],"col-start-end":[{col:["auto",{span:["full",P,T]},T]}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":[F]}],"row-start-end":[{row:["auto",{span:[P,T]},T]}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...K()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...K(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...K(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",T,r]}],"min-w":[{"min-w":[T,r,"min","max","fit"]}],"max-w":[{"max-w":[T,r,"none","full","min","max","fit","prose",{screen:[G]},G]}],h:[{h:[T,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[T,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[T,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[T,r,"auto","min","max","fit"]}],"font-size":[{text:["base",G,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",_]}],"font-family":[{font:[F]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",T]}],"line-clamp":[{"line-clamp":["none",S,_]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,T]}],"list-image":[{"list-image":["none",T]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,R]}],"underline-offset":[{"underline-offset":["auto",M,T]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),W]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},L]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:q()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[M,T]}],"outline-w":[{outline:[M,R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[M,R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",G,U]}],"shadow-color":[{shadow:[F]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",G,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[P,T]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,R,_]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);