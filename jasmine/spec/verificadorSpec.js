describe("Tranforma String em Array", function() {
    beforeEach(function() {
        cpf = "12345678909"
    })
    it("Deve ser capaz de transformar String em Array", function() {
        expect(verificador.main()).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '9'])
    })
})
describe("Validar esse CPF: 123 456 789 - 09", function () {
    beforeEach(function () {
        cpfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9];
    })
    it("Deve ser capaz de calcular um Array", function () {
        expect(verificador.calc()).toEqual([10, 9]);
    })
})
describe("Verifica se é Verdadeiro ou Falso", function () {
    beforeEach(function () {
        cpfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9];  
        soma1 = 10;
        soma2 = 9;
    })
    it("Deve ser verdadeiro quando soma1 = 10", function () {
        expect(verificador.ver1()).toBeTruthy();
    })
    it("Deve ser falso quando soma1 = 10", function () {
        expect(verificador.ver2()).not.toBeTruthy();
    })
    it("Deve ser falso quando soma2 = 9", function () {
        expect(verificador.ver3()).not.toBeTruthy();
    })
    it("Deve ser verdadeiro quando soma2 = 9", function () {
        expect(verificador.ver4()).toBeTruthy();
    })
})