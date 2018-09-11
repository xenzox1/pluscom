const a = (io) => {
    return [
        {
            'hook': 'chat message',
            'cb': msg => {
                io.emit('chat message', msg);
            }
        },
        {
            'hook': 'click',
            'cb': data => {
                console.log(data);
                io.emit('res', 'Entendido');
            }
        },
    ];
};

export default a;