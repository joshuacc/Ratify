(function() {

  describe("The required ratifier", function() {
    beforeEach(function() {
      return window.required = $.fn.ratify.ratifiers.required;
    });
    afterEach(function() {
      return window.required = void 0;
    });
    it("should be a function", function() {
      return expect(typeof required).toBe("function");
    });
    describe("with text inputs", function() {
      beforeEach(function() {
        return window.$el = $("<input type='text' />");
      });
      afterEach(function() {
        return window.$el = void 0;
      });
      it("should return true for a non-blank value", function() {
        $el.val("somevalue");
        return expect(required($el)).toBe(true);
      });
      it("should return false for a blank value", function() {
        $el.val("");
        return expect(required($el)).toBe(false);
      });
      return it("should return false for a whitespace-only value", function() {
        $el.val("    ");
        return expect(required($el)).toBe(false);
      });
    });
    it("should work with radio buttons", function() {
      var $alpha, $radioChecked, $radioUnchecked;
      $radioUnchecked = $("<input type='radio' name='myRadio' value='uncheckedVal' />");
      expect(required($radioUnchecked)).toBe(false);
      $radioChecked = $("<input type='radio' name='myRadio' value='checkedVal' checked='checked' />");
      expect(required($radioChecked)).toBe(true);
      $alpha = $radioUnchecked.add($radioChecked);
      return expect(required($alpha)).toBe(true);
    });
    return it("should work with checkboxes", function() {
      var $checkboxChecked, $checkboxUnchecked, $checkboxes;
      $checkboxUnchecked = $("<input type='checkbox' name='myCheckbox' value='uncheckedVal' />");
      expect(required($checkboxUnchecked)).toBe(false);
      $checkboxChecked = $("<input type='checkbox' name='myCheckbox' value='checkedVal' checked='checked' />");
      expect(required($checkboxChecked)).toBe(true);
      $checkboxes = $checkboxUnchecked.add($checkboxChecked);
      return expect(required($checkboxes)).toBe(true);
    });
  });

}).call(this);
