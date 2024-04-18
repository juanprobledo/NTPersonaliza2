function IngresarDatos(){
    let nombre;
    let telefono;
    const correoElectronico = prompt("Ingresa un correo electrónico")
    do {
        nombre = prompt("Ingresá tu nombre");
        if (nombre == "") {
        alert("Tienes campos vacios");
        } else {
            const mensajeBienvenida = "¡Bienvenido a nuestra tienda! Para tomar tu pedido nevesitaremos algunos datos";
            alert (nombre + ". " + mensajeBienvenida);
        }
    } while (nombre === "");
    do {
        telefono = prompt("Ingresa un teléfono");
        if (telefono == ""){
        alert("Dejaste campos vacios. Vuelve a intentarlo.");
        } else {
        alert("¡Excelente!");
        }
    } while (telefono === "");
    do {
        correoElectronico = prompt("Ingresa un correo electrónico");
        if (correoElectronico == ""){
        alert("Dejaste campos vacios. Vuelve a intentarlo.");
        } else {
        alert("¡Excelente!");
        } 
    } while (correoElectronico === "");
    }
IngresarDatos();