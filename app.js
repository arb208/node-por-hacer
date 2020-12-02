const argv = require('./config/yargs').argv;
const { getListado, actualizar } = require('./por-hacer/por-hacer');
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        getListado();
        break;
    case 'actualizar':
        console.log(actualizar(argv.descripcion));
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido ');



}