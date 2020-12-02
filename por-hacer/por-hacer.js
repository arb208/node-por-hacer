const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
const { clear } = require('console');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No fue posible grabar', err);
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index);

        guardarDB();
        return true;
    } else return false;
};






const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

};

const actualizar = (descripcion) => {
    cargarDB();


    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    } else return false;
};






const getListado = () => {
    clear();
    cargarDB();
    //return console.log(listadoPorHacer);

    for (let tarea of listadoPorHacer) {
        console.log('========Por Hacer======='.green);
        console.log('Por hacer : ', tarea.descripcion);
        console.log('Completado    : ', tarea.completado);
        console.log('========================'.green);
    }
};




module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};