describe('for generators', () => {
    it('generator yield passing', () => {

        function* main(i) {
            let x = yield i;
            console.log(x);
            let y = yield i;
            let z = yield i;
            return x + y + z;
        }


        console.log(main(1).next());
        console.log(main(2).next(10));
        console.log(main(3).next(20));
        console.log(main(4).next(30));


    });

    it('generator yield passing value', () => {
        function* generator(i) {
            yield i;
            yield i + 10;
        }

        const gen = generator(10);
        console.log(gen.next().value);
        console.log(gen.next().value);
    });
});