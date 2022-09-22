let usu, ran, cont1, cont2, contR, contU, contE
alert(" 🪨    📜    o   ✂️ ")

cont1 =+ prompt("¿cuantas veces desea jugar?")

cont2 = 0
contU = 0 
contR = 0
contE = 0

while(cont2 < cont1){
    ran = Math.floor(Math.random()*3+1)

    usu =+ prompt("Escoja una 👇 \n1.piedra \n2.papel \n3.tijera")

    if(usu == ran)
    {
        alert("partida "+(cont2+1)+" EMPATE")
        contE = contE + 1
    }
    else if (usu==1 && ran==2)
    {
        alert("USUARIO (PIEDRA), partida "+(cont2+1)+" ,PC (PAPEL) \nGana PC ")
        contR = contR + 1

    }
    else if(usu==1 && ran==3)
    {
        alert("USUARIO (PIEDRA), partida "+(cont2+1)+" ,PC (TIJERA) \nGana USUARIO ")
        contU = contU + 1

    }
    else if(usu==2 && ran==1)
    {
        alert("USUARIO (PAPEL), partida "+(cont2+1)+" ,PC (PIEDRA) \nGana USUARIO ")
        contU = contU + 1

    }
    else if(usu==2 && ran==3)
    {
        alert("USUARIO (PAPEL), partida "+(cont2+1)+" ,PC (TIJERA) \nGana PC ")
        contR = contR +1

        
    }
    else if(usu==3 && ran==1)
    {
        alert("USUARIO (TIJERA), partida "+(cont2+1)+" ,PC (PIEDRA) \nGana PC ")
        contR = contR +1

    }
    else if(usu==3 && ran==2)
    {
        alert("USUARIO (TIJERA), partida "+(cont2+1)+" ,PC (PAPEL) \nGana USUARIO ")
        contU = contU + 1

    }
    cont2++

}
if(contU===contR)
{
    alert("partidas jugadas "+(cont2)+" \n-LOS JUGADORES QUEDAN EMPATE.")
}
else if(contU>contR){

    alert("-partidas jugadas "+(cont2)+" \n-Ganador (USUARIO), con "+(contU)+" partidas ganadas. \n-Perdedor (PC), con "+(contR)+" partidas ganadas. \n-Empates "+contE)
}
else{

    alert("-partidas jugadas "+(cont2)+"\n-Ganador (PC), con "+(contR)+" partidas ganadas. \n-Perdedor (USUARIO), con "+(contU)+" partidas ganadas. \n-Empates "+contE)
}







