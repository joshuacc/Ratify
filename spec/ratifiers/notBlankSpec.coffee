describe "The notBlank ratifier", ->
  beforeEach ->
    window.notBlank = $.fn.ratify.ratifiers.notBlank

  afterEach ->
    window.notBlank = undefined

  it "should be a function", ->
    expect(typeof notBlank).toBe "function"

  it "should return true for a non-blank value", ->
    expect(notBlank("someValue")).toBe true

  it "should return isValid:false for a blank value", ->
    expect(notBlank("")).toBe false

  it "should return isValid:false for a whitespace-only value", ->
    expect(notBlank("    ")).toBe false