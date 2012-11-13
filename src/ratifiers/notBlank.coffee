$.fn.ratify.ratifiers.notBlank = (value) ->

  # Returns true if there are non whitespace characters, false otherwise
  containsNonWhitespace = /\S/
  return containsNonWhitespace.test value
