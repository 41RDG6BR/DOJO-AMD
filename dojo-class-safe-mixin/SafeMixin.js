define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    "dojo/_base/lang"
  ],
  function(
    declare, 
    BaseWidget,
    lang
  ) {
  
    return declare([BaseWidget], {
  
      baseClass: 'menu-item',
  
      postCreate: function() {
        var A = declare(null, {
          m1: function(){ console.log("m1"); },
          m2: function(){ console.log("m2"); },
          m3: function(){ console.log("m3"); },
          m4: function(){ console.log("m4"); },
          m5: function(){ console.log("m5"); }
        });
        
        var B = declare(A, {
          m1: function(){
            // we can do that because m1 is annotated by dojo.declare()
            return this.inherited(arguments); // calls A.m1
          }
        });
        
        console.log(A)
  
        B.extend({
          m2: function(){
            // we can do that because m2 is annotated by class.extend()
            return this.inherited(arguments); // calls A.m2
          }
        });
        
        lang.extend(B, {
          m3: function(){
            // we have to specify the name because
            // this method is not annotated properly
            return this.inherited("m3", arguments); // calls A.m3
          }
        });
  
        var x = new B();
  
        declare.safeMixin(x, {
          m4: function(){
            // we can do that because m4 is annotated by dojo.safeMixin()
            return this.inherited(arguments); // calls A.m4
          }
        });
  
        lang.mixin(x, {
          m5: function(){
            // we have to specify the name because
            // this method is not annotated properly
            return this.inherited("m5", arguments); // calls A.m5
          }
        })
  
      }
  
    });
  
  });
  