var socket = io();
//Escuchar Información
socket.on('connect', function() {
    console.log('Conectado en el servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos Conexión');
});
//Enviar Información
socket.emit('enviarMsj', {
    usuario: 'Bryan',
    message: 'Holiwis'
}, function(resp) {
    console.log('Server: ', resp);
});
socket.on('enviarMsj', function(res) {
    console.log('Servidor:', res);
})