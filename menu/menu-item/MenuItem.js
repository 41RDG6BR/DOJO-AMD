define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    "dijit/Menu",
    "dijit/MenuItem",
    "dojo/domReady!"
  ],
  function(
    declare, 
    BaseWidget,
    Menu, 
    MenuItem
    ) {
  
    return declare([BaseWidget], {
  
  
      baseClass: 'menu-item',
  
      postCreate: function() {
        this.inherited(arguments);
  
          var menu = new Menu({}, this.mainMenu);
  
          menu.addChild(new MenuItem({
              id: "edit",
              label: "Edit"
          }));
  
          menu.addChild(new MenuItem({
              id: "view",
              label: "View"
          }));
  
          menu.addChild(new MenuItem({
              id: "task",
              label: "Task"
          }));
  
          menu.startup();
      }
    });
  });
  