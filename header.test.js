const header = require("./header")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new header.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
