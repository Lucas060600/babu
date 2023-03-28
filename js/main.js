// let Usuario = "u902583"
// let Nombre = "Lucas Barrionuevo"
// let Password = "123456"
// let CalificacionSi = "Si"
// let CalificacionNo = "No"

// let IngresaUsuario = prompt("Ingresa tu usuario")
// let IngresaPassword = prompt("Ingresa contraseña")
// while (IngresaUsuario !== Usuario || IngresaPassword !== Password) {
//     alert("Usuario/contraseña invalido. Ingrese nuevamente")
//     IngresaUsuario = prompt("Ingresa tu usuario")
//     IngresaPassword = prompt("Ingresa contraseña")
// }
// alert("Bienvenido " + Nombre)
// let encuesta = prompt("¿Te gustaria calificarnos?\n1 - Si\n2 - No")

// switch (encuesta){
//     case "1":
//         let calificacion = prompt("¿Cuan satisfecho te encontras con nuestra plataforma?\n1 - Muy satisfecho \n2- Ni satifecho ni insatisfecho \n3 - Insatisfecho")
//         switch (calificacion) {
//             case "1":
//                 alert("Tu valoracion nos ayuda a seguir mejorando")
//                 break;
//             case "2":
//                 prompt("¿Por que motivo nos calificaste de esta forma?")
//                 alert("Tu valoracion nos ayuda a seguir mejorando")
//                 break;
//             case "3":
//                 prompt("¿Por que motivo nos calificaste de esta forma?")
//                 alert("Tu valoracion nos ayuda a seguir mejorando")                
//                 break;        
//             default:
//                 break;
//         }
//         alert("Gracias por valorarnos")
//         break;
//     case "2":
//         alert("No hay problema")
//     break;
//     default:
//         alert("Opcion no válida")
//         encuesta = prompt("¿Te gustaria calificarnos?\n1 - Si\n2 - No")
//         break;
// }


// function CalcularPrecioFinal(precio, cantidad) {
//     let precioFinal = precio * cantidad
//     alert("El total seria $" + precioFinal);
// }

// let Linea = prompt("Seleccione la línea del producto \n1 - Línea Bienestar. \n2 - Línea Capilar. \nPresioná X para Salir.")
// while (Linea != "X") {
//     switch (Linea) {
//         case "1":
//             let producto = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
//             while (producto != "X") {
//                 switch (producto) {
//                     case "1":
//                         precio = 1000
//                         alert("El precio es de $" + precio)
//                         let preguntaCompra = prompt("¿Desea Comprar?\n1 Si\n2 No");
//                         //Pregunta Compra
//                         switch (preguntaCompra) {
//                             case "1":
//                                 let cantidad = parseInt(prompt("Seleccione la cantidad"))
//                                 if (cantidad > 0) {
//                                     alert(CalcularPrecioFinal(precio, cantidad))
//                                     let MetododePago = prompt("¿Cómo prefiere abonar? \n1 - Efectivo\n2 - Tarjeta(Solo Visa débito/crédito)\nPresiona X para volver")

//                                     switch (MetododePago) {
//                                         case "1":
//                                             alert("Por favor acerquese a un sucursal para la compra y retiro de su producto")
//                                             break;

//                                         case "2":                                    
//                                             for (let i = 2; i >= 0; i--) {
//                                                 let tarjeta = parseInt(prompt("Ingrese por favor el numero de tarjeta. Te quedan " + (i + 1) + " intentos")) 
//                                                 if (tarjeta > 4500000000000000) {
//                                                     let vencimiento = parseInt(prompt("Ingresa la fecha de vencimiento mm/aa."))
//                                                     let cod = parseInt(prompt("Ingresa el codigo de verificacion de 3 digitos que se encuentra en el dorso de la tarjeta."))
//                                                     alert("Ingresaste los siguientes datos - Tarjeta " + tarjeta + " - " + "Vencimiento:" + " - " + vencimiento + " - " + "Codigo" + " - " + cod)
//                                                     let domicilio = prompt("Ingresa calle altura y entre calles. Ej: Calle 123, entre Av.Siempre viva y Calle Falsa.")
//                                                     alert("Enviaremos el producto a la siguiente direccion:" + " " + domicilio + "Gracias por elegirnos.")
//                                                     break;
//                                                 } else {
//                                                     alert("Tarjeta no valida. Ingrese por favor nuevamente")
//                                                 }
                                            
//                                             }
//                                                 break;
                                            
//                                         default:
//                                             alert("Opcion no valida")
//                                             MetododePago = prompt("¿Cómo prefiere abonar? \n1 - Efectivo\n2 - Tarjeta(Solo Visa débito/crédito)\nPresiona X para volver")
//                                             break;
//                                     }

//                                 } else {
//                                     (cantidad <= 0)
//                                     alert("Para qué seleccionas un producto si no lo vas a comprar")
                                    
//                                 }

//                             case "2":
//                                 producto = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
//                                 break;
//                             default:
//                                 alert("Opcion no valida")
//                                 preguntaCompra = prompt("¿Desea Comprar?\n1 Si\n2 No");
//                                 break;
//                         }
//                         break;

//                     case "2":
//                         alert("Producto sin stock");
//                         producto = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
//                         break;
                        
//                     case "3":
//                         alert("Producto sin stock");
//                         producto = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
//                         break;

//                     default:
//                         alert("Opcion no valida")
//                         producto = prompt("Productos\n1 - Balsamo\n2 - Shampoo\n3 - Rolon\nPresiona X para salir")
//                         break;
//                 }
                
//             }
//             Linea = prompt("Seleccione la línea del producto \n1 - Línea Bienestar. \n2 - Línea Capilar. \nPresioná X para Salir.")
//             break;
//         case "2":
//             alert("Sin stock por el momento")
//             Linea = prompt("Seleccione la línea del producto \n1 - Línea Bienestar. \n2 - Línea Capilar. \nPresioná X para Salir.")
//             break;
//         default:
//             alert("Opción no válida")
//             Linea = prompt("Seleccione la línea del producto \n1 - Línea Bienestar. \n2 - Línea Capilar. \nPresioná X para Salir.")
//             break;
//     }
// }