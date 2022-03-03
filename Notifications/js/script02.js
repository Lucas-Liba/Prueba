
const usuarioAutenticado = new Promise((resolve, reject)=>{

    const autenticado = true;

    if (autenticado)
    {
        resolve("usuario autenticado")

    }
    else
    {
        reject("No se pudo iniciar sesion")
    }




})

usuarioAutenticado
    .then(uwu=>console.log(uwu))
    .catch(uwu=>console.log(uwu))



//existen 3 valores de promise
//fulfilled = se cumplio
//rejected = no se cumplio
// pending =  ni se cumplio ni se rechazo