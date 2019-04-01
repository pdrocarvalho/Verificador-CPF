describe("Transform String to Array", function() {
    beforeEach(function() {
        cpf = "12345678909"
    })
    it("Should be able to transform String to Array", function() {
        expect(validador.main()).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '9'])
    })
})
describe("Validate this CPF: 123 456 789 - 09", function () {
    beforeEach(function () {
        cpfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9];
    })
    it("Should be able to calculate a Array", function () {
        expect(validador.calc()).toEqual([10, 9]);
    })
})
describe("Verify if is true or false", function () {
    beforeEach(function () {
        cpfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9];  
        soma1 = 10;
        soma2 = 9;
    })
    it("Should be true when soma1 = 10", function () {
        expect(validador.ver1()).toBeTruthy();
    })
    it("Should be false when soma1 = 10", function () {
        expect(validador.ver2()).not.toBeTruthy();
    })
    it("Should be false when soma2 = 9", function () {
        expect(validador.ver3()).not.toBeTruthy();
    })
    it("Should be true when soma2 = 9", function () {
        expect(validador.ver4()).toBeTruthy();
    })
})