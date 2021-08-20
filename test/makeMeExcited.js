describe('concatenation string and exclamation points', () => {

    it('makeMeExcited function', () => {

        function makeMeMoreExciting(str1) {
            return str1 + "!!!!!!";
        }

        function yellIt7(string) {
            string = string.toUpperCase();
            return makeMeMoreExciting(string);
        }

        console.log(yellIt7("hooray"));

    });
    it('makeMeExcitedEdited function', () => {
        function makeMeMoreExcitingEdited(string) {
            return string + "!!!!!!Edited";
        }

        function yellIt5(str2) {
            let str = str2.toUpperCase();
            return makeMeMoreExcitingEdited(str);
        }

        console.log(yellIt5("western music"));
    });
});

