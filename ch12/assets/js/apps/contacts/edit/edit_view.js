ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact-form",
    events: {
      "click button.js-submit": "submitClicked"
    },

    submitClicked: function(e){
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);
    },

    onFormDataInvalid: function(errors) {
      var $view = this.$el;

      var clearFormErrors = function() {
        var $form = $view.find("form");
        $form.find(".help-block").each(function() {
          $(this).remove();
        });
        $form.find(".form-group.has-error").each(function(){
          $(this).removeClass("has-error");
        });
      }

      var markErrors = function(value, key) {
        var $formGroup = $view.find("#contact-" + key).parent();
        var $errorEl = $("<span>", {class: "help-block", text: value});
        $formGroup.append($errorEl).addClass("has-error");
      }

      clearFormErrors();
      _.each(errors, markErrors);
    }
  });
});
