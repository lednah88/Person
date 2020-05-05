const { Person } = require("../src/person");
let person1 = new Person("Ryan", 30, "male", [
    " being a hardarse",
    " agile",
    " ssd hard drives",
]);
describe("person", function() {
    it("should return name", function() {
        expect(person1.name).toEqual("Ryan");
    });
    it("should return age", function() {
        expect(person1.age).toEqual(30);
    });
    it("should return gender", function() {
        expect(person1.gender).toEqual("male");
    });
    it("should return all the interests for person", function() {
        expect(person1.interest).toEqual([
            " being a hardarse",
            " agile",
            " ssd hard drives",
        ]);
    });
    it("should be able to say hello", function() {
        expect(person1.hello()).toEqual("Hello, my name is Ryan and I am 30 years old. My interests are  being a hardarse, agile and  ssd hard drives.");
    });
});