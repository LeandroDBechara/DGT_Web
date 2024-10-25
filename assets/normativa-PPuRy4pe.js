import{r as n,j as e}from"./ButtomBar-BlCFZZyj.js";import{D as l}from"./DocContext-Ck5LHRPw.js";/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(o,r,s,t)=>{const c=n.forwardRef(({color:m="currentColor",size:a=24,stroke:d=2,className:h,children:i,...u},x)=>n.createElement("svg",{ref:x,...v[o],width:a,height:a,className:["tabler-icon",`tabler-icon-${r}`,h].join(" "),strokeWidth:d,stroke:m,...u},[...t.map(([w,p])=>n.createElement(w,p)),...Array.isArray(i)?i:[i]]));return c.displayName=`${s}`,c};/**
 * @license @tabler/icons-react v3.5.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var j=f("outline","chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]);function C({doc:o}){const{mostrarDoc:r}=n.useContext(l);return e.jsxs("div",{className:"marco",children:[e.jsx("div",{className:"docu",children:e.jsxs("button",{className:"bDoc",onClick:()=>r(o.id),children:[e.jsx("p",{children:o.nombre}),e.jsx(j,{className:"flecha"})]})}),e.jsx("div",{id:o.id,className:"documento",children:e.jsx("iframe",{src:o.enlace})})]})}function D({tipo:o}){const{docs:r}=n.useContext(l),s=r.filter(t=>t.tipo==o);return e.jsx("div",{children:s.map(t=>e.jsx(C,{doc:t},t.id))})}export{D};
