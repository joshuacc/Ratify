(function() {

  describe("Ratify core", function() {
    it("should exist", function() {
      return expect($.fn.ratify != null).toBe(true);
    });
    it("should return the element it is called on", function() {
      return expect($("body").ratify()).toEqual($("body"));
    });
    return it("should have a ratifiers object", function() {
      return expect($.fn.ratify.ratifiers != null).toBe(true);
    });
  });

}).call(this);
