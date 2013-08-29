Ext.define('soporteTFSM.view.login.login', {
    extend: 'Ext.Panel',
    alias: 'widget.userlogin',

    //title: 'Login',
    //bodyPadding: 5,
    //height: 400,
    //width: 350,
    //style: "margin: 200px auto 200px auto;",
    //frame: true,

    //url: 'save-form.php',

    layout: 'anchor',
    defaultType: 'textfield',
    items: [{
        xtype: 'panel',
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
            }, {
                allowBlank: false,
                fieldLabel: 'Password',
                name: 'pass',
                emptyText: 'passwordd',
                inputType: 'password'
            }, {
                xtype: 'checkbox',
                fieldLabel: 'Remember me',
                name: 'remember'
            }],

            buttons: [
                { text: 'Register' },
                { text: 'Login' }
            ]

        }]

    }]

});