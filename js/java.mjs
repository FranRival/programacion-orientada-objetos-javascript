
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
    nombre: 'CUrso HTML y CSS',
})

const practico = new Course({
    nombre: 'CUrso practico',
})


const bussines = new Course({
    nombre: 'CUrso busines',
})

const VisualizacionDatos = new Course({
    nombre: 'CUrso Visualizacion de datos',
})

const unity = new Course({
    nombre: 'CUrso unity',
})

const UnrealEngine = new Course({
    nombre: 'CUrso Unreal ENgine',
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


//ecmascript 6

export class ClaseOnline {
    constructor({
        name, 
        videoID,

    }){

        this.name = name
        this.videoID = videoID
    }
    reproducir (){
        videoPlay(this.videoID)
    }
    pausar (){
        videoStop(this.videoID)
    }
}

function videoPlay(id){
    const urlSecreta = 'https://google.com' + id
    console.log('se esta produciendo desde la url ' + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = 'https://google.com' + id
    console.log('Pausamos la url ' + urlSecreta);
}


//cambiando la extension mjs, el archivo se vuelve inigecutable. no existe y se vuelve invisible