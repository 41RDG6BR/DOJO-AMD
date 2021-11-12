define([
  'dojo/_base/declare', 
  'jimu/BaseWidget', 
  "esri/dijit/Search",
  "dojo/on", 
  "esri/layers/FeatureLayer", 
  "dojo/_base/lang",
  "esri/tasks/QueryTask",
  "esri/tasks/query",
],
function(declare, BaseWidget, Search, on, FeatureLayer, lang, QueryTask, query) {

  return declare([BaseWidget], {

    baseClass: 'esri-search',

    postCreate: function() {
      this.inherited(arguments);

      var search = new Search({

        enableButtonMode: false, 

        showInfoWindowOnSelect: false,

        theme: 'arcgisSearch',

        enableSearchingAll: false,

        sources: []

    });
     
    this.searchNode.appendChild(search.domNode);

    this.own(
     on(search,'select-result', lang.hitch(this, function(e) { 
      var geoR = e.result.feature.geometry.rings

    }))) 

    this.own(
     on(search,'suggest-complete', function(e) { 
      // console.log("suggest-complete: ", e);
    })) 

    var sources = search.get("sources");

    sources.push({

      featureLayer: new FeatureLayer(this.config),

      maxResults: 6,

      maxSuggestions: 6,

      enableSuggestions: true,

      minCharacters: 1,

    });

    search.set("sources", sources);

    },

    createLine: function(data){
      line = document.createElement("tr");
      tdId = document.createElement("td");
      tdNome = document.createElement("td");
      tdId.innerHTML = JSON.stringify(data)
  
      line.appendChild(tdId);
      return line;
    },

  });

});
