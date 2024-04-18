const nombre = prompt("Ingresá tu nombre");
const mensajeBienvenida = ("¡Bienvenido a nuestra tienda! Para tomar tu pedido nevesitaremos algunos datos")
if (nombre == "") {
    alert("Tienes campos vacios");
    } else {
        alert (nombre + ". " + mensajeBienvenida);
    }
const telefono = prompt("Ingresa un teléfono");
const correoElectronico = prompt("Ingresa un correo electrónico")
if (telefono == "" || correoElectronico == ""){
    alert("Dejaste campos vacios. Vuelve a intentarlo.");
} else {
    alert("¡Excelente!")
}
