let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
const ano = data.getFullYear();

if (dia < 10) {
  dia = "0" + dia;
}

if (mes < 10) {
  mes = "0" + mes;
}

data = dia + "/" + mes + "/" + ano;

console.log(`Hello World CodingW3! Today is ${data}.`);
