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

//let perfil_Cliente = new Cliente (usuario,monto,cuotas);
//compraCliente.push(perfil_Cliente);



let carrito =[];

/******************/



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
	let productoPrecio=cuadroProducto.querySelector(".productoPrecio").textContent;
	let productoImagen=cuadroProducto.querySelector(".imgProducto").src;


	let producto = {
        nombre: productoNombre,
        img: productoImagen,
        precio: productoPrecio,
        cantidad:1
    };



	carrito.push(producto);

	let producto_JSON = JSON.stringify(producto);

	carrito.push(producto_JSON);

	localStorage.setItem("producto" , carrito);
	
	carro(producto);
}


function carro( producto ){
	let fila = document.createElement("tr");
	fila.innerHTML=`<td><img class="miniImgs" src="${producto.img}"></td>	
					<td>${producto.nombre}</td>
					<td>${producto.precio}</td>
					<td><button class="borrar">Borrar</buttton></td>`;

	let tabla = document.getElementById("tbody");
	tabla.append(fila);

	let boton_borrar=document.querySelectorAll(".borrar");

	for (let borra of boton_borrar) {
		borra.addEventListener("click", quitar_producto);
	}
}

function quitar_producto(e) {
	let boton = e.target;
	let cuadroProducto = boton.parentNode.parentNode;

	cuadroProducto.remove();
}



