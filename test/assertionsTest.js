import assert from "assert";

describe('For loop', () => {

    it('should go over array values', () => {
        let x = 5;
        let y = 6;

        let actual = x > y;
        let expected = false;

        assert.strictEqual(actual, expected, "comparison operator > failed");
        console.log("should compare value succeeded");
    });

});