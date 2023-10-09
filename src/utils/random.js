const gerRandomNumber=(limit)=>{
    //random: puede ser 0 y va hasta el 0.99999..., pero  y nunca llegara al 1
    //cero por cualquier numero es cero y si se multiplica en este caso
    //por el 126 el resultado es 125.99999...
    //math.ceil() te aproxima haci arriba
    //math.floor() te aproxima haci abajo
    
    return Math.floor(Math.random() *limit)+1//el resultado de esta operacion puede ser 0 hasta 125 y se le suma uno por que no me interesa el 0 y si es 125 se le suma 1 entonces seria 126 que es los elementos que tendremos
}
//export para utilizar mi codigo en otra parte del codigo u otra carpeta
//?este expor sirve para exportar varias funciones con solo agregar una ","
export{
    gerRandomNumber
}
