$.fn.ratify.ratifiers.notBlank = (value) ->

  response = {}

  containsNoWhiteSpace = /\S/

  if value.match containsNoWhiteSpace
    response.isValid = true
  else
    response.isValid = false

  return response