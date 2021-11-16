define([
  'dojo/_base/declare', 
  'jimu/BaseWidget',
  'dojo/_base/lang',
  'dojo/Deferred',
  'dgrid/OnDemandList',
  'dgrid/Selection',
  "dojo/store/Memory"
],
function(
  declare, 
  BaseWidget,
  lang, 
  Deferred,
  OnDemandList, 
  Selection, 
  Memory
) {

  return declare([BaseWidget], {


    baseClass: 'jimu-widget-listview',

    postCreate: function() {
      this.inherited(arguments);
      console.log('ListView::postCreate');
      this.createList();
    },

    getDataStore: function() {
      var def = new Deferred();
      // SAMPLE DATA
      var SAMPLEDATA = [{
        'id': 0,
        'title': 'Feature 1',
        'thumbnailImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToW5nlNXszk3hFqn5oUa3dpsF_7tCRZk5sVg&usqp=CAU'
      }, {
        'id': 1,
        'title': 'Feature 2',
        'thumbnailImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2VvEYZRzs2iQGW4ntZDiELnk3vqk_Hl1oQ&usqp=CAU'
      }];
      def.resolve(new Memory({
        data: SAMPLEDATA
      }));
      return def;
    },

    createList: function() {
      this.getDataStore().then(lang.hitch(this, function(datastore) {
        var list = new (declare([OnDemandList, Selection]))({
          'store': datastore,
          'selectionMode': 'single',
          'renderRow': lang.hitch(this, function (object, options) {
            return this._createListItem(object);
          })
        }, this.ListNode);
        list.startup();
      }));
    },

    _createListItem: function(featureObj) {
      var listItemRoot = document.createElement('DIV');
      listItemRoot.className = 'list-item';
      if(featureObj) {
        var thumbnailImgWrapper, thumbnailImg, listItemTitle;
        // Create thumbnail
        if(featureObj.thumbnailImg) {
          thumbnailImgWrapper = document.createElement('div');
          thumbnailImgWrapper.className = 'thumbnail-wrapper';
          thumbnailImg = document.createElement('img');
          thumbnailImg.src = featureObj.thumbnailImg;
          thumbnailImgWrapper.appendChild(thumbnailImg);
          listItemRoot.appendChild(thumbnailImgWrapper);
        }
        // Create title
        if(featureObj.title && typeof featureObj.title === 'string') {
          listItemTitle = document.createElement('H4');
          listItemTitle.innerHTML = featureObj.title;
          listItemRoot.appendChild(listItemTitle);
          if(thumbnailImg)
            thumbnailImg.alt = featureObj.title;
        }
      } else {
        listItemRoot.innerHTML = 'NO DATA AVAILABLE';
      }

      return listItemRoot;
    },

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
