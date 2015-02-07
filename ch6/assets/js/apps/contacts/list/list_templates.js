ContactManager.module("ContactsApp.List.Templates", function(Templates, ContactManager, Backbone, Marionette, $, _) {

  // Templates.listItemView = "<%= firstName %> <%= lastName %>";

  Templates.contactView = [
    '<td>',
      '<%= firstName %>',
    '</td>',
    '<td>',
      ' <%= lastName %>',
    '</td>',
    '<td>',
      '<button class="btn btn-default btn-sm js-delete">',
        '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>',
        'Delete',
      '</button>',
    '</td>'
  ].join("\n");

});
