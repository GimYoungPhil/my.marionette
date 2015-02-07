Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
  var template;
  if (templateId.charAt(0) == '#') {
    template = Backbone.Marionette.$(templateId).html();
  }
  else {
    template = eval(templateId);
  }

  if (!template || template.length === 0) {
    errorMessage = "Could not find tempalte: '" + templateId + "'";
    throwError(errorMessage, "NoTemplateError");
  }

  return template;
}