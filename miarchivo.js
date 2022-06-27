class Cliente{
	perfil(usuario , monto , cuotas){
		this.usuario = usuario;
		this.monto = monto;
		this.cuotas = cuotas;
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

function interes_cuotas(monto){
	if(cuotas==3){
		return monto *3;
	}
	else if (cuotas==6){
		return monto *6;
	}
	else if (cuotas==12){
		return monto * 9;
	}
	else{
        console.log("Cuotas incorrectas");	
    }
}

//Monto de carro de compra
let compraCliente =[];

//Proceso de compra de un usuario
let usuario=prompt("Ingrese nombre de usuario");

let monto=parseInt(prompt("Monto total de su compra"));
let cuotas=parseInt(prompt("Seleccione las cuotas 3 - 6 - 12"));

//

let perfil_Cliente = new Cliente (usuario,monto,cuotas);
compraCliente.push(perfil_Cliente);

//Finalizar compra
let finalizarCompra=prompt("Desea finalizar su compra");



if (finalizarCompra=="SI"||finalizarCompra=="si") {
		console.log("Su pago de ",monto+interes_cuotas(monto), " fue realizado")
	} else {
			console.log("Compra cancelada")
}



//console.log("Hizo su pago en :",cuotas,"cuotas");
//console.log("El interes es de :",interes_cuotas(montoUsuario));
//console.log("Precio total de su compra con tarjeta es de :",montoUsuario+interes_cuotas(montoUsuario));



for (const ultimaCompra of compraCliente) {
	console.log("Usuario: " ,ultimaCompra.usuario);
    console.log("Su compra fue de :$" ,ultimaCompra.monto);
    console.log("Hizo su pago en: " ,ultimaCompra.cuotas);
    console.log("<--------->");

}