



//clases en java
//clases: sintaxis. por dentro son prototipos. 

class Student {
    constructor(name, age, cursosAprovados){
        this.name = name
        this.age = age
        this.cursosAprovados=cursosAprovados
    }
    aprovarCurso(cursillo){
        this.cursosAprovados.push(cursillo)
    }
}

const fran = new Student(
    'Fran',
    29,
    'Curso de ciencias',
    'CUrso de tontera y media'
) 