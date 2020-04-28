const argv = require('yargs')
    .command('crear', 'crear por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
            defaul: true
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tareas'
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Borra una tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}