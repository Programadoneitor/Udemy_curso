
export let dia: number = 5; // 1 = Lunes, 2=Martes, 3=Miércoles...

if ( dia <= 0 ) {
    // console.log('Día de la semana no permitido');
    throw new Error('Día de la semana no permitido');
} 

switch( dia ) {
    
    case 1: 
        console.log('Es lunes');
        break;

    case 2:
        console.log('Es martes');
        break;

    case 3:
        console.log('Es miércoles');
        break;
    
    case 4:
        console.log('Es jueves');
        break;

    case 5:
        console.log('Es jueves');
        break;
    
    default:
        console.log('Es fin de semana');
}
