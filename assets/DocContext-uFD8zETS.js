import{r,j as f}from"./ButtomBar-BlCFZZyj.js";const h=r.createContext();function g(c){const[l,a]=r.useState([]);r.useEffect(()=>{s()},[]);async function s(){try{const e=await(await fetch("http://localhost:4000/documentos")).json();a(e)}catch{const e=new URL("https://LeandroDBechara.github.io/DGT_Web/Jsons/Documentos.json"),n=await(await fetch(e)).json();a(n)}}async function i(t){t.preventDefault();const e=t.target.nombreD.value,o=t.target.documento.value,n=t.target.pdf.value;e&&n&&o&&((await fetch("http://localhost:4000/agregardoc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:e,enlace:n,tipo:o})})).ok?(s(),console.log("Elemento insertado exitosamente"),document.getElementById("nombreD").value="",document.getElementsByName("documento").forEach(u=>{u.checked=!1}),document.getElementById("pdf").value=""):console.error("Error al insertar el elemento"))}function m(t){var e=document.getElementById(t);e.style.display==="block"?e.style.display="none":e.style.display="block"}async function d(t){let e=t.target.value;t&&((await fetch(`http://localhost:4000/eliminardoc/${e}`,{method:"DELETE"})).ok?(s(),console.log("Elemento eliminado exitosamente")):console.error("Error al eliminar el elemento"))}return f.jsx(h.Provider,{value:{docs:l,crearDoc:i,mostrarDoc:m,eliminarDoc:d},children:c.children})}export{h as D,g as a};