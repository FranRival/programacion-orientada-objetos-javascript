
//objetos literales y prototipos 

const natalia = { //ya tiene el _proto_

    name: 'Natalia',
    age: 20,
    cursosAprovados: [
        'curso1',
        'Curso2'
    ],
    aprovarCursos(nuevoCurso){//metodos
        this.cursosAprovados.push(nuevoCurso)
    }
}

natalia.aprovarCursos.push("sdfdv")



function Student (name, age, cursosAprovados){
    //aqui usamos los datos de arriba.
    this.name = name
    this.age = age
    this.cursosAprovados = cursosAprovados

    this.aprovarCurso = function (cursillo){
        this.cursosAprovados.push(cursillo)
    }

}