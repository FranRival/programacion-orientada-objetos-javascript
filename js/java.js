class Comment {
    constructor({
        content,
        studianteNombre,
        studentRole = 'estudiante'
    }){
        this.content = content
        this.studianteNombre = studianteNombre
        this.studentRole = studentRole

        this.likes = 0
    }
    publicar(){
        console.log(this.studianteNombre + ' (' + this.studentRole + ') ');
        console.log(this.likes + ' likes');
        console.log(this.content);
    }
}













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

    publicarComentario(commentContent){

        const comment = new Comment({
            content: commentContent,
            studianteNombre: this.name,
        })
        comment.publicar()
    }
}



class TeacherStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourse(newCourse){
            this.cursosAprovados.push(newCourse)
    }


    publicarComentario(commentContent){

        const comment = new Comment({
            content: commentContent,
            studianteNombre: this.name,
            studentRole: 'Profesor'
        })
        comment.publicar()
    }

}



class Course{
    constructor({
        clases = [],
        nombre,
        isFree = false,
        lang = 'Spanish'
    }){
        this.clases = clases
        this._nombre = nombre 
        this.isFree = isFree
        this.lang = lang
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
    isFree: true
})


const HTMLyCSS = new Course({
    nombre: 'CUrso HTML y CSS',
})

const practico = new Course({
    nombre: 'CUrso practico',
    lang: 'english'
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






class FreeStudent extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){

        if (newCourse.isFree) {
            this.cursosAprovados.push(newCourse)
        }else{
            console.warn('Lo sentimos,' + this.name + ' solo puedes tomar cursos abiertos');
        }
    }
}

class BasicStudent extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){

        if (newCourse.lang !== 'english') {
            this.cursosAprovados.push(newCourse)
        }else{
            console.warn('Lo sentimos,' + this.name + ' no puedes tomar cursos en ingles.');
        }
    }
    
}

class ExpertStudent extends Student {
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        this.cursosAprovados.push(newCourse)

    }
}












const Naomi = new TeacherStudent ({
    name: 'Naomi',
    email: 'Naomi@profesor.com',
    username: 'profesor',
})



const studiante2 = new FreeStudent ({
    name: 'studiante2',
    email: 'studiante2@estudiante.com',
    username: 'studiante2',
    loqueToca: [
        cursoA,
        cursoB,
        cursoC
    ]
})

const studiante3 = new BasicStudent ({
    name: 'studiante3',
    email: 'studiante2@estudiante.com',
    username: 'studiante3',
    loqueToca: [
        cursoB,
        cursoC
    ]
})

const studiante4 = new Student ({
    name: 'studiante4',
    email: 'studiante2@estudiante.com',
    username: 'studiante4',
    loqueToca: [
        cursoB,
        cursoC
    ]
})


//ecmascript 6

 class ClaseOnline {
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
    const urlSecreta = 'https://google.com/' + id
    console.log('se esta produciendo desde la url ' + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = 'https://google.com/' + id
    console.log('Pausamos la url ' + urlSecreta);
}


//POLIMORFISMO

//cambiar o anular los metodos y atributos de una clase.
//