import{r,j as s,c as o,R as l,T as m,B as u}from"./ButtomBar-JWc2WyRa.js";import{L as c,a as d}from"./LineasContext-zz9cxLmt.js";function x({linea:a}){const{maper:e}=r.useContext(c);return s.jsx("button",{id:"lin",className:"resultado",value:a.mapa,onClick:e,children:a.linea},a.id)}function p(){const{searcher:a,results:e,mapa:n,search:i}=r.useContext(c);return s.jsxs("div",{className:"buscador",children:[s.jsxs("div",{className:"busca",id:"busca",children:[s.jsx("img",{className:"lupa",src:"src/assets/lupa.svg",alt:""}),s.jsx("input",{className:"busc",value:i,onChange:a,type:"text",placeholder:"Buscar Línea"})]}),e.map(t=>s.jsx(x,{linea:t},t.id)),s.jsx("iframe",{id:"mapa1",className:"mapa",src:n,alt:"mapa"})]})}o.createRoot(document.getElementById("root")).render(s.jsx(l.StrictMode,{children:s.jsxs(d,{children:[s.jsx(m,{}),s.jsx("main",{children:s.jsx(p,{})}),s.jsx(u,{})]})}));
