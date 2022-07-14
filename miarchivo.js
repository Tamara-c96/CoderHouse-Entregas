class Cliente{
	constructor(usuario , monto , cuotas){
		this.usuario = usuario;
		this.monto = monto;
		this.cuotas = cuotas;
	}

	carrito(montoCarrito){
		this.montoCarrito=montoCarrito;
	}
}

let mercaderia =[
				{
					nombre:"Cartuchera",	
					precio:1500,
					stock:22,
				},

				{
					nombre:"Botella de Sake",
					precio:4015,
					stock:50,
				},

				{
					nombre:"Peluche",
					precio:950,
					stock:100,
				},

				{
					nombre:"Figura Nendoroid",
					precio:7000,
					stock:250,
				},

				{
					nombre:"Cuaderno",
					precio:300,
					stock:150,
				},

				{
					nombre:"Llavero Acrilico Modelo1",
					precio:500,
					stock:180,
				},

				{
					nombre:"Llavero Acrilico Modelo2",
					precio:500,
					stock:280,
				},

				{
					nombre:"Funda Telefono - Idol",
					precio:800,
					stock:100,
				},

				{
					nombre:"Almohada",
					precio:750,
					stock:120,
				},

				{
					nombre:"Vaso con portavaso",
					precio:1200,
					stock:90,
				},

				{
					nombre:"Funda Telefono",
					precio: 800,
					stock:80,
				},

				{
					nombre:"Figura",
					precio:10000,
					stock:5,
				}
];

let compraCliente =[];

//let perfil_Cliente = new Cliente (usuario,monto,cuotas);
//compraCliente.push(perfil_Cliente);


/*******************/

let boton_comprar=document.querySelectorAll(".aCompra");

for (let botones of boton_comprar){
	botones.addEventListener("click", agregar_compra);
}

console.log(boton_comprar)


function agregar_compra(e) {
	let boton = e.target;
	let cuadroProducto = boton.parentNode;


	let productoNombre=cuadroProducto.querySelector(".productoNombre").textContent;
	console.log(productoNombre);
}


/*
function mostrar_carrito( producto ){
	let fila = document.createElement("tr");
	fila.innerHTML = `<td><img src="${producto.img}"></td>
	<td>${producto.nombre}</td>
	<td>${producto.cantidad}</td>
	<td>${producto.precio}</td>
	<td><button class="borrar_elemento">Borrar</buttton></td>`;

	let body_tabla = document.getElementById("tbody");
	body_tabla.append( fila );

	let botones_borrar = document.querySelectorAll(".borrar_elemento");

	for(let boton of botones_borrar){
        /*cuando se haga click llamo a "borrar_producto"*/
        /**boton.addEventListener("click" , borrar_producto);}}**/


/*function borrar_producto(e){

    let boton = e.target;
    let cuadroProducto = boton.parentNode.parentNode;

    cuadroProducto.remove();

}*/


/********modo oscuro*************/
/*
let modoOscuro=document.getElementById("oscuro");

modoOscuro.addEventListener("click",function () {
	modoOscuro.innerText="Modo claro" ;

	let divInfoHeader=document.getElementById("divInfoHeader");
	let footer=document.querySelector("footer");
	let body=document.querySelector("body");
	
	body.style.backgroundColor="#2c2929";
	footer.style.backgroundColor="#eb6f8e";
	divInfoHeader.style.backgroundColor="#eb6f8e";	
})

*/


/***************/

