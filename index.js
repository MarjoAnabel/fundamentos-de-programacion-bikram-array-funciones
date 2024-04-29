/*Arrays*/
const arrayVacio = []
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9]
const arrayNumerosPares = [0,2,4,6,8]
const arrayBidimensional =[[0, 1, 2], ['a','b','c']]

/*Funciones*/ 
 function suma (a,b) {
    return a + b
 }

 function potenciacion (a,b) {
    return a ** b
 }

 function separarPalabras (string) {
   let array = string.split(" ")
   return array
  }

 function repetirString (string,numero) {
    return string.repeat (numero)
 }

function esPrimo(num) {
   for (let i =2; i < num; i++)
      if (num % i === 0) {
      return false
    }

    return true
    }

/*Mezclando arrays y funciones*/
function ordenarArray (numeros) {
   return numeros.sort()

}

function obtenerPares(numArr) {
   let numeros = []
   for (let i = 0; i < numArr.length; i++) { 
      if (numArr [i] % 2 === 0) {
      numeros.push(numArr[i])
   }
 }
   return numeros;

}



function pintarArray(piarray) {
   return "[" + piarray.join(", ") + "]";
}

function arrayMapi (array,funcion){ 
   return array.map(funcion)
  }


function eliminarDuplicados (arra){
   let arraydupli = new Set(arra);
   let result = [...arraydupli];
   return result;
}


/*Individual*/
   /*Arrays*/
 const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
 const holaMundo = ['Hola','Mundo']
 const loGuardoTodo = ['hola','que',23,42.33,'tal']
 const arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,'direccion']]

 /*Funciones*/
 function multiplicacion (a,b) {
   return a*b
 }

 function division (a,b) {
   return a/b
 }

 function esPar (numeropar) {
   if (numeropar % 2 == 0) {
      return true
  }  
   return false 
 }

 function suma (a,b) {
   return a+b
 }

 function resta (a,b) {
   return a-b
 }

 function multiplicacion (a,b) {
   return a*b
 }

 let arrayFunciones = [suma,resta,multiplicacion]


 /*Mezclando arrays y funciones */


 function ordenarArray2 (ordena) {
   return ordena.sort()
}

 function obtenerImpares (impaArr) {
   let impar = []
   for (let i = 0; i < impaArr.length; i++) {
       if (impaArr [i] % 2 !== 0 ) {
           impar.push(impaArr[i])
       }                     
   } 
   return impar
}


 function sumarArray (sumar) {
   let suma = 0
   for (let i = 0; i < sumar.length; i++) { 
            suma += sumar [i]
       } 
      return suma
 }

 function multiplicarArray (multi) {
   let multiplicacion = 1
   for (let i = 0; i < multi.length; i++) {
       multiplicacion *= multi[i]
   }
   return multiplicacion
}




 