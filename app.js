// 1) Crear un programa que determine si un numero en un prompt es par o no, la respuesta sera mostrada en una alerta
const numero = prompt("ingrese un número");
if (isNaN(numero)) {
  alert("por favor ingrese un número");
} else if (numero % 2 !== 0) {
  alert("número ingresado es impar");
} else {
  alert("número ingresado es par");
}

// 2) Crear un programa que determine si un numero introducido es un prompt divisible por 5 o no, mostrar por console.log
const numero2 = prompt("ingrese un número");
if (isNaN(numero2)) {
  alert("por favor ingrese un número");
} else if (numero2 % 5 !== 0) {
  console.log("número ingresado no es divisible por 5");
} else {
  console.log("número ingresado es divisible por 5");
}

//3) Crear un programa que le pida al usuario dos numeros en un prompt y luego muestre en una alerta el numero mayor
const numero31 = prompt("ingrese un número");
const numero32 = prompt("ingrese otro número");
if (numero31 > numero32) {
  alert("El numero mayor es " + numero31);
} else {
  alert("El numero mayor es " + numero32);
}

//4) Crear un programa que le pida al usuario dos numeros en un prompt y luego muestre en una alerta el numero mayor pero con if ternario
const numero41 = prompt("ingrese un número");
const numero42 = prompt("ingrese otro número");
const numeroMayor =
  numero41 > numero42
    ? alert("El numero mayor es " + numero41)
    : alert("El numero mayor es " + numero42);

//5) Crear un programa que determine si un string introducido por un usuario comienza con una letra o numero
const str = prompt("ingrese un string");
const primerValor = str.charAt(0);
const primerValorString = isNaN(primerValor)
  ? alert("el string ingresado comienza con una letra")
  : alert("el string ingresado comienza con un número");

//6) Escribir un programa JavaScript en el que el programa escoge al azar un numero entero entre el 1 y 10.
//Luego el usuario se le pedira que introduzca un numero en un popup para intentar adivinarlo. Si la entrada conincide se mostrara un mensaje
//"buen trabajo" sino "No corresponde"

const numero1al10 = Math.ceil(Math.random() * 10);
const numUsuarioIngresado = prompt("ingrese un número entero del 1 al 10");
if (numUsuarioIngresado == numero1al10) {
  alert("Buen trabajo, adivinaste el número");
} else {
  alert("No corresponde");
}
console.log(numero1al10);

//7) Escribir un programa que determine si un ano es bisiesto o no
const anioBisiesto = prompt("ingrese un año");
if (anioBisiesto % 4 === 0) {
  alert("El año ingresado es bisiesto");
} else {
  alert("El año ingresado no es bisiesto");
}
//8) Mostrar todos los numeros de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario
const numero8 = prompt("ingrese un numero entero positivo");
for (let index = 1; index <= numero8; index++) {
  console.log(index);
}
//9) Mostrar todos los numeros de 1 a n aumentando de 2 en 2 donde n lo ingresa el usuario
const numero9 = prompt("ingrese un numero entero positivo");
for (let index = 1; index <= numero9; index + 2) {
  console.log(index);
}
//10) Mostrar todos los numeros de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario
const numeroDiez = prompt("ingrese un numero entero positivo");
for (let index = 0; index < numeroDiez; index++) {
  const valor = numeroDiez - index;
  console.log(valor);
}

//11) Escribir utilizando console.log la tabla del 9 hasta 9x10
for (let index = 1; index <= 10; index++) {
  const val = index * 9;
  console.log(val);
}
//12) Pedir al usuario que ingrese un numero hacer suma de todos los digitos,
//validar que el numero ingresado no contenga letras
let y = 0;
x.split("").forEach((x) => (y = y + parseInt(x)));
console.log(y);
//13) Factorial
const a = prompt("ingrese un número");
let b = 1;
for (let i = 1; i <= a; i++) {
  b = b * i;
}
console.log(b);
//14) Encontar todos los divisores de un numero
const c = prompt("ingrese un número");
const array = [];
for (let i = 1; i < c; i++) {
  if (c % i === 0) {
    array.push(i);
  }
}
console.log(array);
//15) Determinar si un numero es primo o no
const d = prompt("ingrese un número entero mayor a 1");
contador = 0;
for (let i = 2; i < d; i++) {
  if (d % i == 0) {
    contador += 1;
  }
}
if (contador > 0) {
  alert("número ingresado no es primo!!!");
} else {
  alert("número ingresado es primo!!!");
}
//16) Determinar si un numero es perfecto o no
const e = prompt("ingrese un número");
const array2 = [];
for (let i = 1; i < e; i++) {
  if (e % i === 0) {
    array2.push(i);
  }
}
sumaFinal = 0;
for (let i = 0; i < array2.length; i++) {
  const element = array2[i];
  sumaFinal = sumaFinal + element;
}
if (sumaFinal == e) {
  alert("número ingresado es perfecto");
} else {
  alert("número ingresado no es perfecto");
}

//17) Generar los primeros N numeros perfectos
const f = prompt("ingrese un número");
const array3 = [];
const array4 = [];
sumaFinal = 0;

for (let i = 1; i <= f; i++) {
  //cada i es un potencial numero perfecto
  for (let j = 1; j < i; j++) {
    // aca itero todos los numeros (j) antes de i si son divisibles por i
    if (i % j == 0) {
      array3.push(j); // si son divisibles lo guardo en array3
    }
  }
  for (let k = 0; k < array3.length; k++) {
    //aca recorro los numeros del array3
    const element2 = array3[k];
    sumaFinal = sumaFinal + element2; //sumo los valores de array3
  }
  if (sumaFinal == i) {
    array4.push(i); //si la suma es igual a i entonces lo guardo en array4
    // console.log(array4);
  }

  sumaFinal = 0;
  array3.length = 0;
}
console.log(array4);
//18) Generar los primeros N numeros primos
const g = prompt("ingrese un número entero positivo, mayor a 1");
cont = 0;
const array5 = [];
for (let j = 2; j <= g; j++) {
  for (let i = 2; i < j; i++) {
    if (j % i == 0) {
      cont += 1;
    }
  }
  if (cont < 1) {
    array5.push(j);
  }
  cont = 0;
}
console.log(array5);
//19) Todos los divisibles de un numero
const l = prompt("ingrese un número entero positivo, mayor a 1");
const array6 = [];
for (let i = 1; i < l; i++) {
  if (l % i === 0) {
    array6.push(i);
  }
}
console.log(array6);
