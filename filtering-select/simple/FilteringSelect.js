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
          {name:"Alabama", id:"AL"},
          {name:"Alaska", id:"AK"},
          {name:"American Samoa", id:"AS"},
          {name:"Arizona", id:"AZ"},
          {name:"Arkansas", id:"AR"},
          {name:"Armed Forces Europe", id:"AE"},
          {name:"Armed Forces Pacific", id:"AP"},
          {name:"Armed Forces the Americas", id:"AA"},
          {name:"California", id:"CA"},
          {name:"Colorado", id:"CO"},
          {name:"Connecticut", id:"CT"},
          {name:"Delaware", id:"DE"}
        ]
  
        var stateStore = new Memory({ data: locNames });
        console.log(stateStore)
    
        var filteringSelect = new FilteringSelect({
          id: "stateSelect",
          store: stateStore,
          searchAttr: "name"
        });
        this.stateSelect.appendChild(filteringSelect.domNode)
  
        console.log('MenuItem::postCreate');
      }
    
    });
  
  });
  