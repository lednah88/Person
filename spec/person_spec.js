const { person } = require("../src/person")

describe("person", function() {
    it("should return name", function() {
        expect(person.name).toEqual("Ryan")
    })
    it("should return age", function() {
        expect(person.age).toEqual(30)
    })
    it("should return male", function() {
        expect(person.gender).toEqual("male")
    })
    it("should return first interest", function() {
        expect(person.interest[0]).toEqual(' being a hardarse')
    })
    it("should return second interest", function() {
        expect(person.interest[1]).toEqual(' agile')
    })
    it("should return last interest", function() {
        expect(person.interest[2]).toEqual(' ssd hard drives')
    })
})