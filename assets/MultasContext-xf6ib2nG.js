import{r as c,j as p}from"./ButtomBar-BlCFZZyj.js";const y=c.createContext();function x(m){const[u,i]=c.useState([]);async function d(e,s){try{const t=new URL("http://localhost:4000/multas");t.searchParams.append("dni",e),t.searchParams.append("dominio",s);const r=await(await fetch(t)).json();i(r)}catch{const a=new URL("https://LeandroDBechara.github.io/DGT_Web/Jsons/Multas.json"),l=(await(await fetch(a)).json()).filter(n=>n.dni===e||n.dominio===s);i(l)}}function f(e){e.preventDefault();const s=e.target.dni.value,t=e.target.dominio.value,a=/^[A-Z]{2}[0-9]{3}[A-Z]{2}$/,r=/^[A-Z]{3}[0-9]{3}$/;if(!s&&!t){const o=document.getElementsByClassName("error");o[0].style.display="flex",o[0].innerHTML="Debe ingresar un DNI o Dominio";return}else{if(t&&!(a.test(t)||r.test(t))){const n=document.getElementsByClassName("error");n[0].style.display="flex",n[0].innerHTML="Formato del dominio incorrecto, ejemplos de formatos admitidos: ABC123 , AB123CD";return}d(s,t);let o=document.getElementsByClassName("tabla");o[0].style.display="flex";let l=document.getElementsByClassName("formulario");l[0].style.display="none"}}return p.jsx(y.Provider,{value:{multas:u,consultar:f},children:m.children})}export{x as M,y as a};