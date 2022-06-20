class cliente{
	usuario(monto, cuotas, montoTotal){
		this.monto=monto;
		this.cuotas=cuotas;
		this.total=montoTotal;
	}
}

function interes_cuotas(montoUsuario){
	if(cuotasUsuario==3){
		return montoUsuario *3;
	}
	else if (cuotasUsuario==6){
		return montoUsuario *6;
	}
	else if (cuotasUsuario==12){
		return montoUsuario * 9;
	}
	else{
        console.log("Cuotas incorrectas");	
    }
}


let montoUsuario=parseInt(prompt("Monto total de su compra"));
let cuotasUsuario=parseInt(prompt("Seleccione las cuotas 3 - 6 - 12"));

let finalizarCompra=prompt("Desea finalizar su compra");

if (finalizarCompra=="SI"||finalizarCompra=="si") {
		console.log("Su pago de ",montoUsuario+interes_cuotas(montoUsuario), " fue realizado")
	} else {
			console.log("Compra cancelada")
}



console.log("Hizo su pago en :",cuotasUsuario,"cuotas");
console.log("El interes es de :",interes_cuotas(montoUsuario));
console.log("Precio total de su compra con tarjeta es de :",montoUsuario+interes_cuotas(montoUsuario));
