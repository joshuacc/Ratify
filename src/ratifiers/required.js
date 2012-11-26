(function() {

  $.fn.ratify.ratifiers.required = function($el) {
    var containsNonWhitespace;
    if ($el.is("[type=radio], [type=checkbox]")) {
      return $el.is(":checked");
    } else {
      containsNonWhitespace = /\S/;
      return containsNonWhitespace.test($el.val());
    }
  };

}).call(this);
