const { io } = require('../server');



io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /* 
                if (mensaje.usuario){
        
                    callback({
                        resp: 'El mensaje tiene usuario'
                    });
                } else {
                    callback({
                        resp: 'No hay usuario en el mensaje'
                    });
                } 
        */

    });

});

