
//clases en java
//clases: sintaxis. por dentro son prototipos. 

class Student {
    constructor({
        name, 
        age, 
        cursosAprovados = [],
        facebook,
        instagram,
        tiktok,
        email
    }){
        this.name = name
        this.age = age
        this.email = email
        this.cursosAprovados=cursosAprovados
    }
       aprovarCurso(cursillo){
        this.cursosAprovados.push(cursillo)
    }
}


const fran = new Student({
    email: "fvfvf@fvfv.com",
    name: 'Fran',
    age: 29,
    cursosAprovados: [
    'Curso de ciencias',
    'CUrso de tontera y media'
    ]
}) 

//ROR - recive objeto 
//cuando es un desmadre obtener todos los datos. 