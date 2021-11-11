define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    "dojo/dom",
    "dijit/registry",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/PopupMenuItem",
    "dojo/domReady!"
  ],
  function(
    declare, 
    BaseWidget, 
    dom, 
    registry, 
    Menu, 
    MenuItem, 
    PopupMenuItem
  ) {
  
    return declare([BaseWidget], {
  
      baseClass: 'menu-item',
  
      postCreate: function() {
        this.inherited(arguments);
        var lastSelected  = this.lastSelected
        // a menu item selection handler
            
        var onItemSelect = function(event){
              lastSelected.innerHTML = this.get("label");
          };
          // create the Menu container
          var mainMenu = new Menu({}, this.mainMenu);
  
          // create Menu container and child MenuItems for our sub-menu
          // (no srcNodeRef; we will add it under a PopupMenuItem)
          var taskMenu = new Menu({
              id: "taskMenu"
          });
  
          // define the task sub-menu items
          taskMenu.addChild(new MenuItem({
              id: "complete",
              label: "Mark as Complete",
              onClick: onItemSelect
          }));
  
          taskMenu.addChild(new MenuItem({
              id: "cancel",
              label: "Cancel",
              onClick: onItemSelect
          }));
  
          taskMenu.addChild(new MenuItem({
              id: "begin",
              label: "Begin",
              onClick: onItemSelect
          }));
  
          // create and add main menu items
          mainMenu.addChild(new MenuItem({
              id: "edit",
              label: "Edit",
              onClick: onItemSelect
          }));
  
          mainMenu.addChild(new MenuItem({
              id: "view",
              label: "View",
              onClick: onItemSelect
          }));
  
          // make task menu item open the sub-menu we defined above
          mainMenu.addChild(new PopupMenuItem({
              id: "task",
              label: "Task",
              popup: taskMenu
          }));
  
          mainMenu.startup();
          taskMenu.startup();
  
        console.log('MenuItem::postCreate');
      }
  
    });
  
  });
  