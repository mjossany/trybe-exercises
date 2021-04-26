//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 3

for (let lines = 0; lines < n; lines += 1) {   
    let asteriskLine = '';
    for (let columns = 0; columns <= lines; columns += 1) {
        asteriskLine += '*'
    }
    console.log(asteriskLine);
}