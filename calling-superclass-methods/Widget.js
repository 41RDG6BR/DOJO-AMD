define([
  'dojo/_base/declare', 
  'jimu/BaseWidget',
  "./my/Employee",
  "./my/Boss"
],
function(
  declare, 
  BaseWidget,
  Employee,
  Boss
) {

  return declare([BaseWidget], {

    baseClass: 'menu-item',

    postCreate: function() {
      this.inherited(arguments);
      var kathryn = new Boss("Kathryn", 26, "Minnesota", 9000),
      matt = new Employee("Matt", 33, "California", 1000);

      console.log(kathryn.askForRaise(), matt.askForRaise()); // 2250, 20
      console.log('MenuItem::postCreate');
    }

  });

});
