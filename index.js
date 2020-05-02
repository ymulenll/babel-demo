import "core-js/stable";

//-------- transformación
const abc = { a: "a", b: "b", c: "c" };
const { a, ...bc } = abc;

console.log(bc);

//--------- polyfill
const saludo = "   hola".trimStart();
console.log(saludo);
