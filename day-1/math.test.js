const {divide, multiply, sum, substract} = require("./math");

describe("Math", () =>{
    it ("should sum 2+2 to be 4", ()=>{
        const result = sum(2,2);
        expect(result).toBe(4);
    });
    
    it ("should multiply 3 * 3 to be 9", () =>{
        const result = multiply(3,3);
        expect(result).toBe(9);
    });
    
    it ("should substract 4 - 4 to 0", () =>{
        const result = substract(4,4);
        expect(result).toBe(0);
    });
    
    it ("should divide 10 / 5 to be 2", ()=>{
        const result = divide(5,5);
        expect(result).toBe(2);
    });

    test("Array", () =>{
        let days = ["Monday", "Tuesday", "Wednesday"];
        expect(days).toContain(Tuesday);
        expect(days).not.toContain(Friday)
    })
});
