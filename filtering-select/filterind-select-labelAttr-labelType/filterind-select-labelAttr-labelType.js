define([
    'dojo/_base/declare', 
    'jimu/BaseWidget',
    "dojo/store/Memory", 
    "dijit/form/FilteringSelect",
  ],
  function(
    declare, 
    BaseWidget,
    Memory,
    FilteringSelect,
    ) {
  
      return declare([BaseWidget], {
  
      baseClass: 'menu-item',
  
      postCreate: function() {
        this.inherited(arguments);
  
        locNames = [
          {id: 1, name:"we", label:"<i>we</i> <img src='http://placekitten.com/50/70' />"},
          {id: 2, name:"are", label:"<u>are</u> <img src='http://placekitten.com/50/60' />"},
          {id: 3, name:"kittens", label:"<b>kittens</b> <img src='http://placekitten.com/50/50' />"}
        ]
  
        var stateStore = new Memory({ data: locNames });
        console.log(stateStore)
    
        var filteringSelect = new FilteringSelect({
          id: "stateSelect",
          value: 3,
          store: stateStore,
          searchAttr: "name",
          name: "xyz",
          labelAttr: "label",
          labelType: "html"
        });
        this.stateSelect.appendChild(filteringSelect.domNode)
  
        console.log('MenuItem::postCreate');
      }
  
    });
  
  });
  