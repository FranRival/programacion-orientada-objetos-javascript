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
        programacionBasica,
        HTMLyCSS,
        practico
    ]
})
const cursoB = new loqueToca({
    nombre: 'Escuela datos cientificos',
    curso: [
        programacionBasica,
        bussines,
        VisualizacionDatos
    ]
})



const cursoC = new loqueToca({
    nombre: 'Escuela videojuegos',
    curso: [
        programacionBasica,
        unity,
        UnrealEngine
    ]
})


class Course{
    constructor({
        clases = [],
        nombre
    }){
        this.clases = clases
        this.nombre = nombre
    }
}

const programacionBasica = new Course({
    name: 'CUrso gratis de programacion basica',
})

const HTMLyCSS = new Course({
    name: 'CUrso HTML y CSS',
})

const practico = new Course({
    name: 'CUrso practico',
})


const bussines = new Course({
    name: 'CUrso busines',
})

const VisualizacionDatos = new Course({
    name: 'CUrso Visualizacion de datos',
})

const unity = new Course({
    name: 'CUrso unity',
})

const UnrealEngine = new Course({
    name: 'CUrso Unreal ENgine',
})


//encapsulamiento; guardianes.
//un intermediario. 

//esconder metodos y atributos. privados. solo manipular por dentro de los metodos y atributos.

//no permitir la alteracion de metodos y atributos.

//encapsular: getter y setters. namespaces. - ibject.defineProperties - modulos de ES6