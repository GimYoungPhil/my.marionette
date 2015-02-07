ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _) {

  Show.Controller = {
    showContact: function(model) {
      console.log("Received itemview:contact:show event on model ", model);

      var contactView = new Show.Contact({
        model: model
      });

      ContactManager.mainRegion.show(contactView);
    }
  };

});