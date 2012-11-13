(function() {

  $.fn.ratify.ratifiers.notBlank = function(value) {
    var containsNonWhitespace;
    containsNonWhitespace = /\S/;
    return containsNonWhitespace.test(value);
  };

}).call(this);
