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

        enableLabel: false,

        enableInfoWindow: true,

        showInfoWindowOnSelect: false,

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

    // _returnLotes: function (geoR)  {
    //   // console.log(geoR)
    //   var tabela = this.tabela
    //   queryTask = new QueryTask("https://www.senocwb.com/senoportal/rest/services/Curitibatech/GeoCuritiba_MapaCadastral/MapServer/15");
    //   query = new query();
    //   query.geometry = geoR;
    //   query.outSpatialReference = {wkid:31982};
    //   queryTask.execute(query, lang.hitch(this, function (resp) {
    //     console.log(resp, 'Lotes')
    //     resp.features.forEach(element => {
    //       let line = this.createLine(element);
    //       tabela.appendChild(line);
    //     });
    //   }));
    // },

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
