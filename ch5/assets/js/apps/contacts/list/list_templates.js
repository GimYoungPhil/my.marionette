ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _) {

  // Templates.listItemView = "<%= firstName %> <%= lastName %>";

  Templates.contactView = [
    '<td>',
      '<%= firstName %>',
    '</td>',
    '<td>',
      ' <%= lastName %>',
    '</td>'
  ].join("\n");

});
