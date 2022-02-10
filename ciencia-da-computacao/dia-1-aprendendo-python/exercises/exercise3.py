def draw_square(n):
    row = 0
    for row in range(n):
        print(n * '*')
        row += 1

    draw_square(5)
