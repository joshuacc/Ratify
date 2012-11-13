(function() {

  describe("The notBlank ratifier", function() {
    beforeEach(function() {
      return window.notBlank = $.fn.ratify.ratifiers.notBlank;
    });
    afterEach(function() {
      return window.notBlank = void 0;
    });
    it("should be a function", function() {
      return expect(typeof notBlank).toBe("function");
    });
    it("should return true for a non-blank value", function() {
      return expect(notBlank("someValue")).toBe(true);
    });
    it("should return isValid:false for a blank value", function() {
      return expect(notBlank("")).toBe(false);
    });
    return it("should return isValid:false for a whitespace-only value", function() {
      return expect(notBlank("    ")).toBe(false);
    });
  });

}).call(this);
