const fs = require('fs');
let = listadoPorHacer = [];
const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar ', err);
        }
    })
}
const cargarDB = () => {


    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;

    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
            return tarea.descripcion !== descripcion;
        })
        // console.log(nuevoListado.lenght);
        //console.log(listadoPorHacer.lenght);
    if (nuevoListado.length === listadoPorHacer.length) {

        return false;

    } else {

        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;

    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}