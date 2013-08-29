/*Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'ProyectoExt',
    appFolder: 'app',
    controllers: [
        'Users'
    ],

    ...
});*/
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'ProyectoExt',

    appFolder: 'app',
    controllers: [
        'Users'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});

/*
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'ProyectoExt',
    appFolder: 'app',
    controllers: [
        'login'
    ],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            items: [
                {
                    xtype: 'panel',
                    layout: 'fit',
                    items:[{
                        xtype: 'userlogin'
                    }]
                }
            ]
        });
    }
});*/

/*
Ext.onReady(function () {
    var backendViewport = new Ext.Viewport({

        items: [{
            xtype: 'form',
            title: 'Login',
            frame: true,
            width: 320,
            bodyPadding: 10,

            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },

            items: [{
                allowBlank: false,
                fieldLabel: 'User ID',
                name: 'user',
                emptyText: 'user id'
            },{
                allowBlank: false,
                fieldLabel: 'Password',
                name: 'pass',
                emptyText: 'passwordd',
                inputType: 'password'
            },{
                xtype: 'checkbox',
                fieldLabel: 'Remember me',
                name: 'remember'
            }],

            buttons: [
                { text: 'Register' },
                { text: 'Login' }
            ]

        }]
    });
});
*/
/*
Ext.require(['*']);

Ext.onReady(function () {

    var viewport = Ext.create('Ext.Viewport', {
        layout: {
            type: 'border'
        },
        border: false,
        items: [{
            region: 'north',
            height: 100,
            minHeight: 60,
            border: false
        }, {
            region: 'west',
            width: 200,
            minWidth: 120,
            minHeight: 140,
            border: false
        }, {
            region: 'center',
            html: 'center center',
            title: 'VIEWer',
            minHeight: 80
        }, {
            region: 'east',
            width: 200,
            minWidth: 120,
            minHeight: 140,
            border: false*/
            /*layout: {
                type: 'border'
            }*/
        /*}, {
            region: 'south',
            height: 100,
            minHeight: 60,
            border: false
        }]
    });
});*/
