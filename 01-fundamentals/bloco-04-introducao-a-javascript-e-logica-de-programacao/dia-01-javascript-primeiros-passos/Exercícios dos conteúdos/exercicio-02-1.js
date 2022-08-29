// Exercício 2.1 do dia 1 do bloco 4.
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// 1. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail.
console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail);

// 2. O que aconteceria se tentássemos checar qual o tipo da variável patientAge?
console.log(typeof patientAge);
// Resposta: A variável é do tipo undefined.

// 3. Experimente também trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação.
patientId = '50';
console.log(typeof (patientId)); 
// Resposta: Retornou que a variável é do tipo string.