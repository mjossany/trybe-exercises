//4- Depois, faça uma pirâmide com n asteriscos de base:

let base = 7;

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