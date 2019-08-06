var socket = io();

// Escuchar
socket.on('connect', function () {
    console.log('Conectado con el servidor');
});

// Escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cliente 1',
    mensaje: 'Cliente chrome'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});


//Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});
