import{r as s,j as e,c as x,R as m,T as h,B as j}from"./ButtomBar-D25CNLNd.js";import{L as p,a as b}from"./LineasContext-DVroBJr8.js";import{D as y,a as N}from"./DocContext-CRLaujeG.js";function v(){const{lineas:i,crearLinea:t,eliminarLinea:n}=s.useContext(p),{docs:a,crearDoc:o,eliminarDoc:l}=s.useContext(y);function c(r){r.preventDefault();let d=document.getElementById("usuario").value,u=document.getElementById("contraseña").value;d==="admin"&&u==="admin"?(document.querySelector(".gestion").style.display="flex",document.querySelector(".login").style.display="none"):(document.querySelector(".error").innerHTML="Usuario o contraseña incorrectos",document.querySelector(".error").style.display="block")}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"general",children:[e.jsxs("form",{className:"login",onSubmit:c,children:[e.jsx("img",{src:"src/assets/Logo.svg",alt:"logo"}),e.jsx("p",{children:"Usuario"}),e.jsx("input",{id:"usuario",type:"text",placeholder:"Usuario",required:!0}),e.jsx("p",{children:"Contraceña"}),e.jsx("input",{id:"contraseña",type:"password",placeholder:"Contraseña",required:!0}),e.jsx("p",{className:"error",children:"kljlj"}),e.jsx("button",{className:"btn",type:"submit",children:"Iniciar sesion"})]}),e.jsxs("div",{className:"gestion",children:[e.jsxs("div",{className:"gestion1",children:[e.jsxs("form",{className:"gestion2",onSubmit:o,children:[e.jsx("h4",{children:"Documento"}),e.jsx("input",{id:"nombreD",type:"text",placeholder:"Nombre",required:!0}),e.jsxs("div",{className:"radio",children:[e.jsxs("div",{className:"radioD",children:["                ",e.jsx("input",{value:0,type:"radio",id:"normativa",name:"documento",required:!0}),"Normativa"]}),e.jsxs("div",{className:"radioN",children:[e.jsx("input",{value:1,type:"radio",id:"resolucion",name:"documento"}),"Resolucion"]})]}),e.jsx("input",{id:"pdf",type:"url",placeholder:"URL",required:!0}),e.jsx("button",{className:"btn",children:"Añadir documento"})]}),e.jsxs("table",{className:"tabla2",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Nombre"}),e.jsx("th",{children:"Eliminar"})]})}),e.jsx("tbody",{children:a.map(r=>e.jsxs("tr",{children:[e.jsx("th",{children:r.nombre}),e.jsx("th",{children:e.jsx("button",{value:r.id,onClick:l,children:"X"})})]},r.id))})]})]}),e.jsxs("div",{className:"gestion1",children:[e.jsxs("form",{className:"gestion2",onSubmit:t,children:[e.jsx("h4",{children:"Linea"}),e.jsx("input",{id:"nombreL",type:"text",placeholder:"Nombre",required:!0}),e.jsx("input",{id:"mapa",type:"url",placeholder:"Mapa",required:!0}),e.jsx("button",{className:"btn",children:"Añadir linea"})]}),e.jsxs("table",{className:"tabla2",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Linea"}),e.jsx("th",{children:"Eliminar"})]})}),e.jsx("tbody",{children:i.map(r=>e.jsxs("tr",{children:[e.jsx("th",{children:r.linea}),e.jsx("th",{children:e.jsx("button",{value:r.id,onClick:n,children:"X"})})]},r.id))})]})]})]})]})})}x.createRoot(document.getElementById("root")).render(e.jsx(m.StrictMode,{children:e.jsx(N,{children:e.jsxs(b,{children:[e.jsx(h,{}),e.jsx("main",{children:e.jsx(v,{})}),e.jsx(j,{})]})})}));