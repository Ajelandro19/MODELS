const User= require("./../../app/models/User")
describe("Test para User", () => {
    test("Requerimiento 1: Creacion de User", ()=>{
        const user = new User(1, 'Ajelandro Gonzalez', 'Ajelandro', 'Bio', 'datacreated', 'lastUpdate' )
        expect(user.id).toBe(1)
        expect(user.username).toBe('Ajelandro Gonzalez' )
        expect(user.name).toBe('Ajelandro')
        expect(user.bio).toBe('Bio')
    })

    test("Requerimiento 2: Fechas en atributos de User",() =>{
        const user = new User(1,"AjelandroGon", "Ajelandro", "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test("Requerimiento 3: Agregando getters",() =>{
        const user = new User(1,"AjelandroGon", "Ajelandro", "Bio")
        expect(user.getUsername).toBe("AjelandroGon")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test("Requerimiento 4: Agregando setters",() =>{
        const user = new User(1,"AjelandroGon", "Ajelandro", "Bio")
        user.setUsername = "A.jelandro"
        user.setBio = "NewBio"
        expect(user.username).toBe("A.jelandro")
        expect(user.bio).toBe("NewBio")
    })
})