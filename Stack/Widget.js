define([
  'dojo/_base/declare', 
  'jimu/BaseWidget',
  "./stack/DecimalToBinary"
],
function(
  declare, 
  BaseWidget,
  DecimalToBinary
) {

  return declare([BaseWidget], {

    baseClass: 'menu-item',

    postCreate: function() {
      this.inherited(arguments);
      dtb = new DecimalToBinary();

      console.log(dtb.decimalToBinary(233));
    }

  });

});
