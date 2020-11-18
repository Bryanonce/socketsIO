const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');
    //Escuchar el Cliente
    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    })
    client.on('enviarMsj', (data, callback) => {
            console.log(data);
            client.broadcast.emit('enviarMsj', data)
                /*if (mensaje.usuario) {
                    callback({
                        resp: 'Todo Salio Bién'
                    });
                } else {
                    callback({
                        resp: 'Todo salio Mal'
                    })
                }*/
        })
        //Emitir mensaje
    client.emit('enviarMsj', {
        usuario: 'Admin',
        message: 'Bienbenido a la App'
    })
})