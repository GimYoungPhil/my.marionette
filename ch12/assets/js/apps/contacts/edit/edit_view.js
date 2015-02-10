ContactManager.module("ContactsApp.Edit", function(Edit, ContactManager, Backbone, Marionette, $, _){
  Edit.Contact = Marionette.ItemView.extend({
    template: "#contact-form",
    events: {
      "click button.js-submit": "submitClicked"
    },

    initialize: function() {
      this.title = "Edit " + this.model.get("firstName") + " " + this.model.get("lastName");
    },

    submitClicked: function(e) {
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);
    },

    onRender: function() {
      if (!this.options.asModal) {
        var $title = $("<h1>", { text: this.title });
        this.$el.prepend($title);
      }
    },

    onShow: function() {
      if (this.options.asModal) {
        this.$el.dialog({
          modal: true,
          title: this.title,
          width: "auto"
        });
      }
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
