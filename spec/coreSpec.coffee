# Comments
describe "Ratify core", ->
  it "should exist", ->
    expect($.fn.ratify?).toBe true

  it "should return the element it is called on", ->
    expect($("body").ratify()).toEqual $("body")

  it "should have a ratifiers object", ->
    expect($.fn.ratify.ratifiers?).toBe true