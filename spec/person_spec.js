const { person } = require("../src/person")

describe("person", function() {
    it("should return name", function() {
        expect(person.name).toEqual("Ryan")
    })
    it("should return age", function() {
        expect(person.age).toEqual(30)
    })
    it("should return gender", function() {
        expect(person.gender).toEqual('male')
    })

})