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
      '<a href="#contacts/<%= id %>" class="btn btn-default btn-sm js-show">',
        '<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>',
        'Show',
      '</a>',
      '<button class="btn btn-default btn-sm js-delete">',
        '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>',
        'Delete',
      '</button>',
    '</td>'
  ].join("\n");

});
