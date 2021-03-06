ContactManager.module("HeaderApp.List", function(List, ContactManager, Backbone, Marionette, $, _){

  List.Controller = {
    listHeader: function(){

      var links = ContactManager.request("header:entities");
      var headers = new List.Headers({collection: links});

      headers.on("brand:clicked", function(){
        ContactManager.trigger("contacts:list");
      });

      ContactManager.headerRegion.show(headers);

    },

    setActiveHeader: function(headerUrl){
      var links = ContactManager.request("header:entities");
      var headerToSelect = links.find(function(header){
        return header.get("url") === headerUrl;
      });

      // console.log(headerToSelect);
      // headerToSelect.select();
      // links.trigger("reset");

    }
  };
});
 