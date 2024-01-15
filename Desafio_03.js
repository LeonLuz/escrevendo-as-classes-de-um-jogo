class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        switch(this.type){
            case "mago":
                this.attackType = "magia"
                break
            case "guerreiro":
                this.attackType = "espada"
                break
            case "monge":
                this.attackType = "artes marciais"
                break
            case "ninja":
                this.attackType = "shuriken"
                break
        }
        console.log(`O ${this.type} atacou usando ${this.attackType}`)
    }
}

let mago = new hero("Merlin", 1000, "mago")
let guerreiro = new hero("Arthur", 20, "guerreiro")
let monge = new hero("Aang", 12, "monge")
let ninja = new hero("Naruto", 15, "ninja")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()
