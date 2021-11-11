define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    "./my/Demo"
  ],
  function(
    declare, 
    BaseWidget,
    Demo
  ) {
  
    return declare([BaseWidget], {
  
      baseClass: 'menu-item',
  
      postCreate: function() {
        this.inherited(arguments);
        console.log('MenuItem::postCreate');
      },
  
      arr: [ 1, 2, 3, 4 ], // object. shared by all instances!
      num: 5,              // non-object. not shared.
      str: "string",       // non-object. not shared.
      obj: new Demo(),      // object. shared by all instances!
  
      constructor: function(){
        this.arr = [ 1, 2, 3, 4 ]; // per-instance object.
        this.obj = new Demo();      // per-instance object.
      }
  
    });
  
  });
  