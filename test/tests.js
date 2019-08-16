import  CustomLodash from '../js/CustomLodash.js'; 


describe("CustomLodash", function() {
    let calc = new CustomLodash();

    beforeEach(function() {
        calc = new CustomLodash();
    })

    describe("undescore is just used to check custom lodash tests ", function() {

        it("should reates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.", function() {
            expect(calc.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([ ['a', 'b'], [ 'c', 'd' ] ]);
        });




    })

});


