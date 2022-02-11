valores = input("Insira os valores separados por espaço: ")

valores_separados = valores.split()

sum = 0
for num in valores_separados:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
