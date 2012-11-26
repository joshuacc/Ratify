# Accepts a jQuery object as a parameter
# Returns true if there are non whitespace characters, false otherwise
$.fn.ratify.ratifiers.required = ($el) ->
  if $el.is "[type=radio], [type=checkbox]"
    return $el.is ":checked"
  else
    containsNonWhitespace = /\S/
    return containsNonWhitespace.test $el.val()