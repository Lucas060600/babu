let Usuario = "u902583"
let Nombre = "Lucas Barrionuevo"
let Password = "123456"
let CalificacionSi = "Si"
let CalificacionNo = "No"

let IngresaUsuario = prompt("Ingresa tu usuario")
let IngresaPassword = prompt("Ingresa contraseña")
while (IngresaUsuario !== Usuario || IngresaPassword !== Password) {
    alert("Usuario/contraseña invalido. Ingrese nuevamente")
    IngresaUsuario = prompt("Ingresa tu usuario")
    IngresaPassword = prompt("Ingresa contraseña")
}
alert("Bienvenido " + Nombre)
alert("¿Te gustaria calificarnos? Si/No")
let Pregunta = prompt("")
if (Pregunta === CalificacionSi) {
    prompt("Ingresa tu calificacion del 1 al 10")
    alert("Gracias por valorarnos")
}
else {
    (Pregunta === CalificacionNo || Pregunta !== CalificacionSi)
    alert("No hay problema")
}


let opcion = prompt("Seleccione la línea del producto \n1 - Línea Bienestar. \n2 - Línea Capilar. \n3 - Línea Corporal. \n4 - Línea Dental. \n5 - Línea Facial. \n6 - Línea Esencial. \nPresioná X para Salir.")
while (opcion != "X") {
    switch (opcion) {
        case "1":
            let LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
            while (LineaBienestar != "X") {
                switch (LineaBienestar) {
                    case "1":
                        let balsamo = "1000"
                        alert("El valor del prodcuto es " + balsamo);
                        let cantidad = prompt("Ingresa la cantidad");
                        if (cantidad > 0) {
                            alert("El precio final es de " + balsamo * cantidad);
                            let preguntaCompra = prompt("¿Desea Comprar?\n1 Si\n2 No");
                            switch (preguntaCompra) {
                                case "1":
                                    let MetododePago = prompt("Ingrese por favor metodo de pago \n1 Efectivo\n2 Tarjeta(Solo Visa)");
                                    switch (MetododePago) {
                                        case "1":
                                            alert("Para abonar en efectivo por favor acerquese a sucursal. Muchas gracias.")
                                            break;
                                        case "2":
                                            for (let i = 2; i >= 0; i--) {
                                                let tarjeta = parseInt(prompt("Ingresa por favor el numero de tarjeta"))
                                                if(tarjeta > 4500000000000000){
                                                    let vencimiento =  prompt("Ingresa el la fecha de vencimiento mm/aa")
                                                    let cod = prompt("Ingresa el cod de 3 digitos en el dorso de su tarjeta")
                                                    alert("Los datos ingresados son: Tajeta" + tarjeta + "Vencimiento: " + vencimiento + "Cod: " + cod)
                                                    let domicilio = prompt("Ingresa tu domicilio")
                                                    alert(domicilio)
                                                    break;
                                                }else{
                                                    (tarjeta <= 4500000000000000)
                                                    alert("tarjeta no valida")
                                                    let tarjeta = prompt("Ingresa por favor el numero de tarjeta")
                                                }                                               
                                            }
                                        break;
                                        default:
                                            break;
                                    }
                                    
                                case "2":
                                    LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir");
                                    break;
                                
                                default:
                                    alert("Opcion no valida")
                                    LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                                    break;
                            }

                            LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                            break;
                        } else {
                            (cantidad <= 0)
                            alert("Para que elegis producto si no vas a comprar")
                        }
                        LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                        break;
                    case "2":
                        let shampoo = "1200";
                        alert("El valor del prodcuto es " + shampoo);
                        cantidad = prompt("Ingresa la cantidad");
                        if (cantidad > 0) {
                            alert("El precio final es de " + shampoo * cantidad);
                            LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                            break;
                        } else {
                            (cantidad <= 0)
                            alert("Para que elegis producto si no vas a comprar")
                        }
                        LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                        break;
                    case "3":
                        let rolon = "900"
                        alert("El valor del prodcuto es " + rolon);
                        cantidad = prompt("Ingresa la cantidad");
                        if (cantidad > 0) {
                            alert("El precio final es de " + rolon * cantidad);
                            LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                            break;
                        } else {
                            (cantidad <= 0)
                            alert("Para que elegis producto si no vas a comprar")
                        }
                        LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
                        break;
                    case "X":
                        break;
                    default:
                        alert("Ingreso no valido")
                        LineaBienestar = prompt("Productos\n1 - Balsamo\n2 - Shampoo\nPresiona X para salir")
                        break;
                }
            }

            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
        case "X":
            break;
        default:
            alert("Ingreso no valido");
            break;
    }
    opcion = prompt("Seleccione la línea del producto \n1 - Línea Bienestar. \n2 - Línea Capilar. \n3 - Línea Corporal. \n4 - Línea Dental. \n5 - Línea Facial. \n6 - Línea Esencial. \nPresioná X para Salir.")
}



