define([
  'dojo/_base/declare', 
  'jimu/BaseWidget',
  "./my/Blizzard"
],
function(
  declare, 
  BaseWidget,
  Blizzard
) {

  return declare([BaseWidget], {

    baseClass: 'menu-item',

    postCreate: function() {
      this.inherited(arguments);
      var yummyTreat = new Blizzard();

      console.log(yummyTreat);
    }

  });

});
