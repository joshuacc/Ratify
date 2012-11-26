describe "The required ratifier", ->
  beforeEach ->
    window.required = $.fn.ratify.ratifiers.required

  afterEach ->
    window.required = undefined

  it "should be a function", ->
    expect(typeof required).toBe "function"

  describe "with text inputs", ->
    beforeEach ->
      window.$el = $("<input type='text' />")

    afterEach ->
      window.$el = undefined

    it "should return true for a non-blank value", ->
      $el.val "somevalue"
      expect(required $el).toBe true

    it "should return false for a blank value", ->
      $el.val ""
      expect(required $el).toBe false

    it "should return false for a whitespace-only value", ->
      $el.val "    "
      expect(required $el).toBe false

  it "should work with radio buttons", ->
    $radioUnchecked = $ "<input type='radio' name='myRadio' value='uncheckedVal' />"
    expect(required $radioUnchecked).toBe false
    
    $radioChecked = $ "<input type='radio' name='myRadio' value='checkedVal' checked='checked' />"
    expect(required $radioChecked).toBe true

    $alpha = $radioUnchecked.add $radioChecked
    expect(required $alpha).toBe true

  it "should work with checkboxes", ->
    $checkboxUnchecked = $ "<input type='checkbox' name='myCheckbox' value='uncheckedVal' />"
    expect(required $checkboxUnchecked).toBe false
    
    $checkboxChecked = $ "<input type='checkbox' name='myCheckbox' value='checkedVal' checked='checked' />"
    expect(required $checkboxChecked).toBe true

    $checkboxes = $checkboxUnchecked.add $checkboxChecked
    expect(required $checkboxes).toBe true