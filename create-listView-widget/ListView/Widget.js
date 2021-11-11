define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'jimu-widget-listview-setting',
    // this property is set by the framework when widget is loaded.
    // name: 'ListView',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('ListView::postCreate');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('ListView::startup');
    // },

    // onOpen: function(){
    //   console.log('ListView::onOpen');
    // },

    // onClose: function(){
    //   console.log('ListView::onClose');
    // },

    // onMinimize: function(){
    //   console.log('ListView::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('ListView::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('ListView::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('ListView::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('ListView::onPositionChange');
    // },

    // resize: function(){
    //   console.log('ListView::resize');
    // }

    //methods to communication between widgets:

  });

});
