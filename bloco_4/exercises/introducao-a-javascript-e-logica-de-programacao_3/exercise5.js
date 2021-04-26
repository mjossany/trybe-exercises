//5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let base = 5;

for (let lines = 0; lines < base; lines += 2) {
    let asterisksLine = '';
    for (blanks = 0; blanks < base - lines - 2; blanks += 2) {
        asterisksLine += ' ';
    }
    for (asterisks = 0; asterisks <= lines; asterisks += 1) {
        asterisksLine += '*';
    }
    for (blanks = 0; blanks < base - lines - 2; blanks += 2) {
        asterisksLine += ' ';
    }
    console.log (asterisksLine)
    console.log();
}