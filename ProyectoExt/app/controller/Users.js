
Ext.define('ProyectoExt.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: ['Users'],
    models: ['User'],

    views: [
        'user.List',
        'user.Edit'
    ],


    init: function () {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },
    updateUser: function (button) {
        var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();

        record.set(values);
        win.close();
    },
    editUser: function (grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    }
});


    
  
  /* este es el bueno
    init: function () {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            }
        });
    },
    editUser: function (grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    }
});*/
 

/*Ext.define('ProyectoExt.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List'
    ],


    init: function () {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            }
        });
    },
    editUser: function (grid, record) {
        console.log('Double clicked on ' + record.get('name'));
    }
});*/


/*Ext.define('ProyectoExt.controller.Users', {
    extend: 'Ext.app.Controller',

    init: function () {
        console.log('Initialized Users! This happens before the Application launch function is called');
    }
});*/

/*Ext.define('ProyectoExt.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List'
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
});*/