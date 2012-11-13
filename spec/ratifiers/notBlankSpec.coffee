describe "The notBlank ratifier", ->
  beforeEach ->
    window.notBlank = $.fn.ratify.ratifiers.notBlank

  afterEach ->
    window.notBlank = undefined

  it "should be a function", ->
    expect(typeof notBlank).toBe "function"

  it "should return a validation object", ->
    expect(typeof notBlank("someValue")).toBe "object"

  it "should return isValid:true for a non-blank value", ->
    expect(notBlank("someValue").isValid).toBe true

  it "should return isValid:false for a blank value", ->
    expect(notBlank("").isValid).toBe false

  it "should return isValid:false for a whitespace-only value", ->
    expect(notBlank("    ").isValid).toBe false