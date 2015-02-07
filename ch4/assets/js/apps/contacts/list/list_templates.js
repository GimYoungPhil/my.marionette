ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _) {

  // Templates.listItemView = "<%= firstName %> <%= lastName %>";

  Templates.contactView = [
    '<div class="alert alert-success" role="alert">',
      '<%= firstName %> <%= lastName %>',
    '</div>'
  ].join("\n");

});
