import  { inicializarProductos, agregarAlCarrito, CANTIDAD_MAXIMA_DEL_CARRITO }  from './clases.js';

const ArrayDeProductos = []; 
let ArrayCarrito = JSON.parse(localStorage.getItem("carrito")) || []; // asignar por defecto [] en caso de que parse sea null o undefined
let idUniversal = 1;

inicializarProductos(ArrayDeProductos,idUniversal);

let productoEncontrado = {};

const app = document.querySelector("#app");
const buttonHeader = document.querySelector("#header_button");
const input = document.querySelector("#search");

input.addEventListener("input",(event) => {
     productoEncontrado = ArrayDeProductos.find(el => el.nombre === event.target.value)   
})

input.addEventListener("keypress",(event)=>{
    (event.key === "Enter" && productoEncontrado) && console.log("el producto es:",productoEncontrado) 
})

buttonHeader.addEventListener("click", ()=>{
    app.innerHTML = '';
    ArrayCarrito.forEach(el => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = ` 
                        <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                        <div class="tarjeta_informacion">
                            <span class="tarjeta_nombre">${el.nombre}</span>
                            <span class="tarjeta_precio">$${el.precio}</span>
                        </div>
        `
        
        app.appendChild(tarjeta);
})

})

ArrayDeProductos.forEach((el)=>{
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.innerHTML = ` 
                    <div class="tarjeta_image"><img src="${el.url}" alt=""/></div>
                    <div class="tarjeta_informacion">
                        <span class="tarjeta_nombre">${el.nombre}</span>
                        <span class="tarjeta_precio">$${el.precio}</span>
                    </div>
    `
    const buttonAgregar = document.createElement("button");
    buttonAgregar.innerText = "Agregar";
    buttonAgregar.addEventListener("click",()=>{
        agregarAlCarrito(ArrayCarrito,el);
        localStorage.setItem("carrito",JSON.stringify(ArrayCarrito))
    })

    tarjeta.appendChild(buttonAgregar);
    app.appendChild(tarjeta);
})
