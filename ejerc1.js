alert(" 🪨    📜    o   ✂️ ")

let jugadas =+ prompt("¿cuantas veces desea jugar?")

let cont2 = 0
let usuario = 0 
let random = 0
let contE = 0

while(cont2 < jugadas){

    let usu 

    usu =+ prompt("Escoja una 👇 \n1.piedra \n2.papel \n3.tijera")

    let ran = select()

    function select(){

        let value = Math.floor(Math.random()*3+1)
        return value

    }

    function result(ran, usu){

    if(usu == ran)
    {
    alert("partida "+(cont2+1)+" EMPATE")
    contE++
    }

    else if (usu==1 && ran==2)
    {   
    alert("USUARIO (PIEDRA), partida "+(cont2+1)+" ,PC (PAPEL) \nGana PC ")
    random++
    }

    else if(usu==1 && ran==3)
    {
    alert("USUARIO (PIEDRA), partida "+(cont2+1)+" ,PC (TIJERA) \nGana USUARIO ")
    usuario++
    }

    else if(usu==2 && ran==1)
    {
    alert("USUARIO (PAPEL), partida "+(cont2+1)+" ,PC (PIEDRA) \nGana USUARIO ")
    usuario++
    }

    else if(usu==2 && ran==3)
    {
    alert("USUARIO (PAPEL), partida "+(cont2+1)+" ,PC (TIJERA) \nGana PC ")
    random++
    }

    else if(usu==3 && ran==1)
    {
    alert("USUARIO (TIJERA), partida "+(cont2+1)+" ,PC (PIEDRA) \nGana PC ")
    random++
    }

    else if(usu==3 && ran==2)
    {
    alert("USUARIO (TIJERA), partida "+(cont2+1)+" ,PC (PAPEL) \nGana USUARIO ")
    usuario++
    }

    cont2++

    }

    result(ran,usu)

}

    function ganador (){

    if(usuario===random)
    {
    alert("partidas jugadas "+(cont2)+" \n-LOS JUGADORES QUEDAN EMPATE.")
    }
    else if(usuario>random){

    alert("-partidas jugadas "+(cont2)+" \n-Ganador (USUARIO), con "+(usuario)+" partidas ganadas. \n-Perdedor (PC), con "+(random)+" partidas ganadas. \n-Empates "+contE)
    }
    else{

    alert("-partidas jugadas "+(cont2)+"\n-Ganador (PC), con "+(random)+" partidas ganadas. \n-Perdedor (USUARIO), con "+(usuario)+" partidas ganadas. \n-Empates "+contE)
    }

    }
    
    ganador()













 






