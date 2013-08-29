Ext.define('soporteTFSM.controller.login', {
    extend: 'Ext.app.Controller',

    views: [
        'login.login'
    ],

    init: function () {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function () {
        console.log('The panel was rendered');
    }
});