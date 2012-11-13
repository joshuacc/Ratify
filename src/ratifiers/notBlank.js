(function() {

  $.fn.ratify.ratifiers.notBlank = function(value) {
    var containsNoWhiteSpace, response;
    response = {};
    containsNoWhiteSpace = /\S/;
    if (value.match(containsNoWhiteSpace)) {
      response.isValid = true;
    } else {
      response.isValid = false;
    }
    return response;
  };

}).call(this);
