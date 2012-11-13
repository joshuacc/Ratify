/* Ratify - v0.1.0 - Harvey Dent - 2012-11-13
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

  $.fn.ratify.ratifiers.notBlank = function(value) {
    var containsNonWhitespace;
    containsNonWhitespace = /\S/;
    return containsNonWhitespace.test(value);
  };

}).call(this);
