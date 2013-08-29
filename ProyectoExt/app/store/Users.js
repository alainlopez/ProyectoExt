Ext.define('ProyectoExt.store.Users', {
    extend: 'Ext.data.Store',
    //fields: ['name', 'email'],
    model: 'ProyectoExt.model.User',
    data: [
        { name: 'Ed', email: 'ed@sencha.com' },
        { name: 'Tommy', email: 'tommy@sencha.com' }
    ]
});