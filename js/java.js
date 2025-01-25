//crear instancias de objetos a la dickenson.

class Student {
    constructor({
        name,
        email,
        username,
        instagram = undefined,
        facebook = undefined,
        cursosAprovados = [],
        loqueToca =[]
    }){
        this.name = name 
        this.emai = email 
        this.username = username 

        this.socialMedia = {
            instagram,
            facebook
        }

        this.cursosAprovados = cursosAprovados 
        this.loqueToca = loqueToca 
    }
}

const studiante2 = new Student ({
    name: 'studiante2',
    email: 'studiante2@estudiante.com',
    username: 'studiante2',
    loqueToca: [
        cursoA,
        cursoB,
        cursoC
    ]
})



class loqueToca {
    constructor({
        curso,
        procentaje
    }){
        this.curso = curso
        this.procentaje = procentaje
    }
}

const cursoA = new loqueToca()
const cursoB = new loqueToca()
const cursoC = new loqueToca()

//es un constructor. como funciona esta clase con lo que hemos visto.

const cursoX = new loqueToca({
    curso: "Matematicas",
    procentaje: 34
})