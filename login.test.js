const login = require("./login")
// @ponicode
describe("add", () => {
    let inst

    beforeEach(() => {
        inst = new login.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.add()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("edit", () => {
    let inst

    beforeEach(() => {
        inst = new login.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.edit("v4.0.0-rc.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.edit("4.0.0-beta1\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.edit("v1.2.4")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.edit("1.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.edit("^5.0.0")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.edit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("kro", () => {
    let inst

    beforeEach(() => {
        inst = new login.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.kro()
        }
    
        expect(callFunction).not.toThrow()
    })
})
