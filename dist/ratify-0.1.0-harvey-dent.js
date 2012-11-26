/* Ratify - v0.1.0 - Harvey Dent - 2012-11-26
 * https://github.com/naviance/Ratify
 * Copyright (c) 2012 Hobsons
 * All rights reserved */

(function() {

  $.fn.ratify = function() {
    return this.each(function() {
      return this;
    });
  };

  $.fn.ratify.ratifiers = {};

}).call(this);

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
