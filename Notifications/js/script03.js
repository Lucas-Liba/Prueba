const boton = document.querySelector("#boton");
const imagen = "../pato.jpeg";
boton.addEventListener("click",()=>
{
    Notification.requestPermission() 
        .then(resultado=>{
            new Notification("UWU",{
                icon:imagen,
                 body:"Hola"
                })
        })
        
})


/*if (Notification.permission == "granted"){
    new Notification("Esta es una notificacion",{
        icon:"../pato.jpeg",
         body:"Hola"
        })
    }
*/
//manejo notification API
