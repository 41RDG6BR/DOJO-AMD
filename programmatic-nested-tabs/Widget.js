define([
  'dojo/_base/declare', 
  'jimu/BaseWidget',
  "dijit/layout/TabContainer",
  "dijit/layout/ContentPane",
  "dojo/dom-attr", 
  "dojo/query",
  "dojo/_base/array",
  "dojo/domReady!"
],
function(
  declare, 
  BaseWidget,
  TabContainer,
  ContentPane,
  attr, 
  query,
  array
) {

  return declare([BaseWidget], {

    baseClass: 'tab-container',

    postCreate: function() {
      this.inherited(arguments);

      var tabs = [{
        title: 'Tab 1',
        sub: [{
            title: 'My 1st inner',
            content: 'Lorem ipsum dolor sit amet'
        }, {
            title: 'My 2nd inner',
            content: 'Consectetur adipiscing elit'
        }]
    }, {
        title: 'Tab 2',
        sub: [{
            title: 'My 3rd inner',
            content: 'Vivamus orci massa rhoncus a lacinia'
        }, {
            title: 'My 4th inner',
            content: 'Fusce sed orci magna, vitae aliquet quam'
        }]
    }, {
        title: 'Tab 3',
        sub: []
    }];

    var tabContainer = new TabContainer({
        doLayout: false
    }, this.tabContainer);

    array.forEach(tabs, function(tab){
      console.log(tab);
        if(!tab.sub.length){
            var cp = new ContentPane({
                title: tab.title,
                content: 'No sub tabs'
            });
            tabContainer.addChild(cp);
            return;
        }
        var subTab = new TabContainer({
            title: tab.title,
            doLayout: false,
            nested: true
        });
        array.forEach(tab.sub, function(sub){
            var cp = new ContentPane({
                title: sub.title,
                content: sub.content
            });
            subTab.addChild(cp);
        });
        tabContainer.addChild(subTab);
        tabContainer.startup();
    });

      console.log('TabContainer::postCreate');
    }

  });

});
