//const argv = require('Yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer.js')
    //console.log(argv);
let comando = argv._[0];
switch (comando) {

    case 'crear':
        //console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('listar todas las tareas');
        let listado = porHacer.getListado(argv.descripcion);
        for (let tarea of listado) {
            console.log("=============Por hacer==========".green);
            console.log(tarea.descripcion);
            console.log('Descripcion:', tarea.completado);
            console.log("=================================".green);

        }
        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':

        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando desconocido');
        break;
}