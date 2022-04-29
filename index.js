let listaDeAlunos = ["Leandro", "Dani", "Maitê", "Olivia"];
let contador = 0


for(let contador = 0; contador < listaDeAlunos.length; contador++){
  

    // console.log(contador);
  
    for (let nome of listaDeAlunos) {
    if (contador == 0) {
    {
        console.log(`Esta pessoa se chama ${nome} seu numero é 0`);
    
        }
        
        
    }
    else if (contador % 2 == 0) {
        console.log(`Esta pessoa se chama ${nome} seu numero é `  + contador +  ` é par `);
    }
    
    else  { 
        (contador % 2 !== 0) 
        console.log(`Esta pessoa se chama ${nome} o numero ${contador} é impar`);
    
        }
        contador ++
    }
}

// let contador = 0
// while (contador < numeroDeAlunos) {

//     if (contador == 0) {
//         console.log("o numero atual é 0");
    
//     }
//     else if (contador % 2 == 0) {
//         console.log("o numero " + contador + " é par ");
//     }
    
//     else  { 
//         (contador % 2 !== 0) 
//         console.log(`o numero ${contador} é impar`);
    
//         }
    
//     contador ++
// }