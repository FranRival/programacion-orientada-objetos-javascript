//ABSTRACCION
//los datos para crear el proto.

//abstraccion es evitar codigo duplicado. 
//escalabilidad.
//encapsular datos.

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

const studiante3 = new Student ({
    name: 'studiante2',
    email: 'studiante2@estudiante.com',
    username: 'studiante2',
    loqueToca: [
        cursoB,
        cursoC
    ]
})



class loqueToca {
    constructor({
        curso = [],
        nombre
    }){
        this.curso = curso
        this.nombre = nombre
    }
}

const cursoA = new loqueToca({
    nombre: 'Escuela desarrollo web',
    curso: [
        'Programacion Basica',
        'Curso HTML y CSS',
        'Curso practico',
    ]
})
const cursoB = new loqueToca({
    nombre: 'Escuela datos cientificos',
    curso: [
        'Programacion Basica',
        'Bussines',
        'Visualizacion de datos',
    ]
})



const cursoC = new loqueToca({
    nombre: 'Escuela videojuegos',
    curso: [
        'Programacion Basica',
        'Curso Unity',
        'Curso UNreal',
    ]
})


class Course{ //para no repetir codigo.
    constructor({
        clases = [],
        nombre
    }){
        this.clases = clases
        this.nombre = nombre
    }
}