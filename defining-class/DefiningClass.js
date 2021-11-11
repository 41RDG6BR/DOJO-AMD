define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    "./my/Person"
  ],
  function(
    declare, 
    BaseWidget,
    Person
  ) {
  
    return declare([BaseWidget], {
  
      baseClass: 'menu-item',
  
      postCreate: function() {
        this.inherited(arguments);
        var folk = new Person("phiggins", 42, "Tennessee");
  
        console.log(folk);
      }
  
    });
  
  });
  