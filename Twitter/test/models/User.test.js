const User= require("./../../app/models/User")
describe("Test para User", () => {
    test("Requerimiento 1: Creacion de User", ()=>{
        const user = new User(1, 'Ajelandro Gonzalez', 'Ajelandro', 'Bio', 'datacreated', 'lastUpdate' )
        expect(user.id).toBe(1)
        expect(user.name).toBe('Ajelandro')
    })

    test("Requerimiento 2: Fechas en atributos de User",() =>{
        const user = new User(1,"AjelandroGon", "Ajelandro", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})