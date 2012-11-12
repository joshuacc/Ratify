(function() {

  describe("Ratify core", function() {
    it("should exist", function() {
      return expect($.fn.ratify != null).toBe(true);
    });
    return it("should return the element it is called on", function() {
      return expect($("body").ratify()).toEqual($("body"));
    });
  });

}).call(this);
