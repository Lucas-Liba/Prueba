for(let i = 0;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("buzz-bizz");
    }
    else if(i%3==0)
    {
        (console.log("buzz"));
    }
    else if(i%5==0)
    {
        console.log("bizz");
    }
    else
    {
        console.log(i);
    }
}

console.warn("Nada mas que hacer");

let titulo = document.querySelector("#titulo");

titulo.addEventListener("click", ()=>titulo.textContent+=" Me tocaste");

