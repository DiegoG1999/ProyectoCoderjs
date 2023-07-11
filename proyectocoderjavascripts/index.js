

let OPCION__SALIR = 4;
const arrayDeProductos = []
let identificador = 1

class producto {
    constructor( id, nombre, precio, descripcion, categoria,) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.categoria = categoria;
    }
}

const suplemento1 = new producto(identificador++, "whey protein 3kg", 15000, "proteina concentrada a base de leche", "suplementos");
arrayDeProductos.push(suplemento1);

const suplemento2 = new producto(identificador++,"creatina 300g", 7500, "creatina para entrenamiento", "suplementos");
arrayDeProductos.push(suplemento2);

const articulo1 = new producto(identificador++, "straps", 2500, "straps con muñequeras", "articulos");
arrayDeProductos.push(articulo1);

const articulo2 = new producto(identificador++,"cinturon", 10000, "cinturon de cuero para hombre", "articulos");
arrayDeProductos.push(articulo2);

const ropa1 = new producto(identificador++,"musculosa de algodon", 6600, "musculosa amplia de entrenamiento", "ropa");
arrayDeProductos.push(ropa1);

const ropa2 = new producto(identificador++,"remera overside", 8800, "remeron amplio", "ropa");
arrayDeProductos.push(ropa2);




// const mostrarPorCategoria = (categoria) => {
//     let filtrado = arrayDeProductos.filter((el) => el.categoria === categoria);
//     let mensajeAMostrar = '';
//     filtrado.forEach((el) => {
//         mensajeAMostrar += "\nProducto: " + el.nombre + " " + "\nPrecio " + el.precio + "$" ;
//     })
//     alert(mensajeAMostrar)
// }

// const verProductos = () => {
//     let opcion;
//     opcion = parseInt(prompt("elige la compra que desees,\n 1-suplemento, \n 2-articulos, \n 3- ropa, \n 4-volver atras"));
//     while (opcion != OPCION__SALIR) {
//         switch (opcion) {
//             case 1:
//                 mostrarPorCategoria("suplementos");
//                 break;
//             case 2:
//                 mostrarPorCategoria("articulos");
//                 break;
//             case 3:
//                 mostrarPorCategoria("ropa");
//                 break;
//             default:
//                 alert("elija una opcion del 1-3");
//                 break;
//         }
//         opcion = parseInt(prompt("elige la compra que desees,\n 1-suplemento, \n 2-articulos, \n 3- ropa, \n 4-volver atras"))
//     }
// }


// // ****************** MEMBRESIA ***********


// const arrayDeMembresias = []

// class membresias {
//     constructor(nombre, precio, descripcion) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.descripcion = descripcion;
//     }
// }

// const membresia1 = new membresias("Membresia Gold", 12500, "Gimnasio libre + Natacion y descuentos en productos seleccionados", "Gold");
// arrayDeMembresias.push(membresia1);

// const membresia2 = new membresias("Membresia Plata", 10000, "Gimnasio Libre", "Plata");
// arrayDeMembresias.push(membresia2);

// const membresia3 = new membresias("Membresia Bronce", 7500, "Gimnasio 3 veces por semana", "Bronce");
// arrayDeMembresias.push(membresia3);




// const mostrarPorNombre = (nombre) => {
//     let filtrado = arrayDeMembresias.filter((el) => el.nombre === nombre);
//     let mensajeAMostrar = '';
//     filtrado.forEach((el) => {
//         mensajeAMostrar += "\nProducto: " + el.nombre + " " + "\nPrecio " + el.precio + "$" ;
//     })
//     alert(mensajeAMostrar)
// }

// const verMembresias = () => {
//     let opcion;
//     opcion = parseInt(prompt("elige la membresia que desee,\n 1-membresia Gold, \n 2-Membresia Plata, \n 3- Membresia Bronce, \n 4-volver atras"));
//     while (opcion != OPCION__SALIR) {
//         switch (opcion) {
//             case 1:
//                 mostrarPorNombre("Membresia Gold");
//                 break;
//             case 2:
//                 mostrarPorNombre("Membresia Plata");
//                 break;
//             case 3:
//                 mostrarPorNombre("Membresia Bronce");
//                 break;
//             default:
//                 alert("elija una opcion del 1-3");
//                 break;
//         }
//         opcion = parseInt(prompt("elige la membresia que desees,\n 1-membresia Gold, \n 2-Membresia Plata, \n 3- Membresia Bronce, \n 4-volver atras"));
//     }
// }

// let opcion = parseInt(prompt("elige la compra que desees,\n 1-ver productos, \n 2-ver membresia, \n 4-salir"));

// while (opcion != OPCION__SALIR) {
//     switch (opcion) {
//         case 1:
//             verProductos();
//             break;
//         case 2:
//             verMembresias();
//             break;
//         default:
//             alert("por el momento no hay mas opciones");
//             break;
//     }
//     opcion = parseInt(prompt("elige la compra que desees,\n 1-ver productos, \n 2-ver membresia, \n 3-salir"));

// }


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
