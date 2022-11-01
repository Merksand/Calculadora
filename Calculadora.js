let pantalla = document.querySelector(".pantalla");
let igual = document.querySelector(".igual");
let C = document.querySelector(".allDelete");
let Delete = document.querySelector(".Delete");
let imprimir = document.getElementsByClassName("print");
//let segunda = document.querySelector(".sg");
//let coco = document.querySelector(".coco");
//let contenedor = document.querySelector(".contenedor");
//let operadores = document.getElementsByClassName("operator");

const array = Array.from(imprimir)

array.forEach((e)=>{
  e.addEventListener("mouseup",()=>{
    pantalla.innerHTML += e.innerHTML;
  })
})
C.addEventListener("click",()=>{
    pantalla.innerHTML = ""
})
Delete.addEventListener("click",()=>{
    pantalla.innerHTML = pantalla.innerHTML.slice(0,-1)
})
function calcular(){
    pantalla.innerHTML = eval(pantalla.innerHTML);      
}
igual.addEventListener("click",()=>{
    try {
        eval(pantalla.innerHTML);  
        calcular();   
        
        pantalla.innerHTML = eval(pantalla.innerHTML);  
    } catch (error) {
        if(EvalError){
        pantalla.innerHTML="SystaxError"
        }if(isNaN(number)){
            pantalla.innerHTML="Mete otro numero perro"
        }
        if(pantalla.innerHTML=="undefined"){
            pantalla.innerHTML="No mames carnal"
        }
    }
  
})

//imprimit.onclick=calcular//funcion
  
/* window.addEventListener("error",(e)=>{//Para el error de sintax, como try catch
    let ew = pantalla.innerHTML="SystaxError"
    //alert("errors "+e.message)
}) */


let contenedor = document.querySelector(".contenedor")
let inicio = document.querySelector(".icon")
let menu = document.querySelector(".menu")
let negro = document.querySelector(".negro")
let blanco = document.querySelector(".blanco")
let violeta = document.querySelector(".violeta")
let numeros = document.querySelectorAll(".cola1")
 
const num = Array.from(numeros)
inicio.addEventListener("click",()=>{
    menu.classList.toggle("menu2")
})
negro.addEventListener("click",()=>{
    document.body.style.background="#000"
    pantalla.style.background="#fff8"
   // contenedor.classList.add("contenedor2")//añado para eliminar la sombra 
   contenedor.style.background="#323033ee"
   numeros.forEach((e)=>{
    e.style.background="#FFF7"
  })
})
blanco.addEventListener("click",()=>{
    document.body.style.background="#fff"
    contenedor.classList.remove("contenedor2")
    pantalla.style.background="#fff"
    contenedor.style.background="#fff"
    numeros.forEach((e)=>{
        e.style.background="#FFF"
      })
})
violeta.addEventListener("click",()=>{
    document.body.style.background="#730c9c"
    pantalla.style.background="#d8a6f0ee"
    contenedor.style.background="#724"
    numeros.forEach((e)=>{
        e.style.background="#c5bba7"
      })
})



/* const dinero = {
    monto: 100,
    depositar(suma){
        this.monto =  this.monto + suma;
    },
    retirar(resta){
        this.monto =  this.monto - resta;
    }
} */

    /* setTimeout(()=>{
       dinero.depositar(100)
       console.log(dinero)
    },1000)  */
    /* const pepe = setInterval(()=>{
        x++;
        document.write(`Resultado es: ${x} </br>`);
         },1000)
    setInterval(()=>{
        clearInterval(pepe);
    },5000) */
   

         
        

















/* const arrays = Array.from(imprimir);

arrays.forEach((te)=>{
    
    te.addEventListener("click", function(){
        calculadora(te,pantalla)
    })
    
})

function calculadora(te,pantalla){
    switch(te.innerHTML){
        case 'C':
            borrar(pantalla)
            break;
        case '=':
            calcular(pantalla);
        default:
            actualizar(pantalla,te)
            break;
    }
}
function calcular(pantalla){
    pantalla.innerHTML = eval(pantalla.innerHTML)
}

function actualizar(pantalla, te){
    if(pantalla.innerHTML == 0){
        pantalla.innerHTML = "";
    }
    pantalla.innerHTML += te.innerHTML;
}
 function borrar(pantalla){
    pantalla.innerHTML = 0
 }

 */



/* const num = (num) =>{
    let po = pantalla.innerHTML= num
  
} */

/*  let x = 0;
imprimir.addEventListener("click", ()=>{
    pantalla.innerHTML = 0;
}) 
 */



/* let numeros  = document.querySelector(".allDelete");
let todo  = document.querySelector("button");
let pantalla = document.querySelector(".pantalla");
let fin      = document.querySelector(".ultimo")
let prueba   = document.querySelector(".igual")
let perro   = document.getElementsByClassName("new")
//let segunda   = document.querySelector(".sg")
//let grande   = document.querySelector(".contenedor")
const num = (num)=>{
    let re = pantalla.innerHTML
    pantalla.innerHTML  = re + num;
}
/* let x = 0;
numeros.addEventListener("click", ()=>{
    pantalla.innerHTML = 0;
}) 
const key = Array.from(perro)
key.forEach((button)=>{
    button.addEventListener("click",()=>{
       
        agregarNumero(boton.innerText)
       
    });
});
function agregarNumero(num){

}*/