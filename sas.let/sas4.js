const numeroTermos = 10;

let termo1 = 0;
let termo2 = 1;

console.log(termo1);

console.log(termo2);

for (let i = 3; i <= numeroTermos; i++) {
    let proximoTermo = termo1 + termo2;
    
    console.log(proximoTermo);
    
    termo1 = termo2;
    termo2 = proximoTermo;
}