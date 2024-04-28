
class Course{
    constructor({
        clases = [],
        nombre
    }){
        this.clases = clases
        this._nombre = nombre 
    }
    get nombrecillo(){ 
        return this._nombre
    }

    set nombrecillo(nombreNuevo){
        if (nombreNuevo=== "Curso tonto") {
            console.error('Web,. no.')
        }else {
            this._name = nombreNuevo 
        }
    }
}


const programacionBasica = new Course({
    nombre: 'CUrso gratis de programacion basica',
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




class loqueToca {
    constructor({
        curso = [],
        nombre,
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
    name: 'studiante3',
    email: 'studiante2@estudiante.com',
    username: 'studiante3',
    loqueToca: [
        cursoB,
        cursoC
    ]
})





